import formidable from "formidable";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3Client = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: "AKIARHR2T7DVWEF6C2WU",
    secretAccessKey: "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",
  },
});

async function putObjectURL(ContentType, filename, userId) {
  const command = new PutObjectCommand({
    Bucket: "web.pacchisbarah.profile-pictures",
    Key: `user-profiles-pictures/${userId}_${filename}`,
    ContentType,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function handler(req, res) {
  try {
    const form = formidable({});
    const userId = req.query.slug;

    // Listen for the 'file' event
    await form.on("file", async (name, file) => {
      // Create a unique filename using the original file name
      const fileName = `${Date.now()}_${file.originalFilename}`;
      console.log(fileName + " " + file);

      try {
        // Check if the file path exists
        if (!file.filepath) {
          throw new Error("File path is undefined");
        }
        const putSigned = await putObjectURL(
          file.mimetype,
          file.originalFilename,
          userId
        );

        return res.status(200).json({
          success: true,
          message:
            "Generated signedURL successfully, upload your image on the below url",
          putSigned,
        });
      } catch (moveError) {
        console.error("Error moving image:", moveError);
        return res
          .status(500)
          .json({ success: false, message: "Error moving image" });
      }
    });

    // Parse the incoming request
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.json({ error: err });
      }
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, message: "Error uploading image" });
  }
}

export default handler;
