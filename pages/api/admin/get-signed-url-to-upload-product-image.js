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

async function putObjectURL(filename) {
  const command = new PutObjectCommand({
    Bucket: "web.pacchisbarah.profile-pictures",
    Key: `products-image/${filename}`,
    ContentType: "image/*",
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function handler(req, res) {
  try {
    const { filename } = req.query;

    // Check if the file path exists
    if (!filename) {
      return res.status(400).json({
        success: false,
        message: "File path is undefined",
      });
    }

    const putSigned = await putObjectURL(filename);

    return res.status(200).json({
      success: true,
      message:
        "Generated signedURL successfully, upload your image on the below URL",
      putSigned,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({
      success: false,
      message: "Error uploading image",
      error: error.message,
    });
  }
}

export default handler;
