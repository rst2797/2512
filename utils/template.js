export const orderConfirmation = (customerName) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin: 0 10%">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th
              bgcolor="#A86549"
              style="
                padding: 20px;
                font-size: 1.5rem;
                letter-spacing: 0.2rem;
                font-family: Arial, Helvetica, sans-serif;
                color: white;
              "
              colspan="2"
            >
              Order Confirmation
            </th>
          </tr>
        </thead>
        <tbody style="padding: 5% 0;">
          <tr>
            <td colspan="2" style="padding: 20px">
              <p style="font-weight: bold; font-size: 1.2rem">Dear ${customerName},</p>
              <p>
                Thank you for choosing sustainable and eco-friendly T-shirts made
                with 100% GOTS-approved cotton. Your order is confirmed, and will
                reach to you doorstep within 4 - 5 working days!
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px">
              <p style="font-weight: bold">
                Thank you for supporting sustainable practices. We are delightful to have your order!
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px">
              <p>Best regards,<br /><b>Pacchis Barah | 2512</b></p>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  
`;
};
export const resetPassword = (customerName, resetLink) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body {
          font-family: "Arial", sans-serif;
          background-color: #f2f2f2;
          margin: 0;
          padding: 0;
        }
  
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
  
        h1 {
          color: #a86549;
        }
  
        p {
          color: #555555;
        }
  
        .reset-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #a86549;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          margin-top: 20px;
        }
  
        .reset-link {
          color: #a86549;
          text-decoration: none;
        }
      </style>
    </head>
  
    <body>
      <div class="container">
        <h1>Password Reset</h1>
        <p>Hello ${customerName},</p>
        <p>
          We received a request to reset your password. Click the button below to
          reset it:
        </p>
        <a href="${resetLink}" class="reset-button" style="color: #fff;">Reset Password</a>
        <p>If you didn't request a password reset, you can ignore this email.</p>
        <p>Thank you!</p>
        <p>Best regards,<br /><b>Pacchis Barah | 2512</b></p>
      </div>
    </body>
  </html>
  `;
};
export const thankyouConfirmation = (customerName) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin: 0 10%">
     <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th  bgcolor="#A86549"
            style="
              padding: 20px;
              font-size: 1.5rem;
              letter-spacing: 0.2rem;
              font-family: Arial, Helvetica, sans-serif;
              color: white;
            "
            colspan="2"">
              Contact Us Confirmation
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2" style="padding: 20px">
            <p style="font-weight: bold; font-size: 1.2rem">Dear ${customerName},</p>
              <p>
                Thank you for reaching out to us! We have received your inquiry,
                and our team will get back to you as soon as possible.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px">
              <p style="font-weight: bold">
                We appreciate your interest in our products and services. If you
                have any further questions, feel free to ask!
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px">
              <p>Best regards,<br /><b>Pacchis Barah | 2512</b></p>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  `;
};
