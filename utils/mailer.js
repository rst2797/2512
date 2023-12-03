import nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "noreply@braininventory.com",
    pass: "noreply@2408",
  },
});

export function sendMail(mailData) {
  return new Promise((resolve, reject) => {
    let config = {
      from: `"2512 | " <noreply@braininventory.com>`,
      to: mailData.to,
      subject: mailData.subject,
      html: mailData.html,
    };

    if (mailData.attachments) {
      config.attachments = mailData.attachments;
    }

    transporter
      .sendMail(config)
      .then((resp) => {
        console.log(resp);
        resolve({
          success: true,
          message: "Email sent",
        });
      })
      .catch((error) => {
        console.log(error);
        reject({
          success: false,
          message: error.message,
        });
      });
  });
}
