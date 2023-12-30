import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
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

async function getObjectURL(req, res) {
    console.log()
  const command = new GetObjectCommand({
    Bucket: "web.pacchisbarah.profile-pictures",
    Key: req.query.slug,
  });
  const url = await getSignedUrl(s3Client, command);
  return res.status(200).json({
    success: true,
    error: false,
    url,
  });
}
export default getObjectURL;
