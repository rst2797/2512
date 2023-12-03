export function queryToSales(data) {
  return `
          <html>
              <body>
                  <p>Hi Team, here is a request from a new customer on the website. Please take a look at it.</p>
                  <table>
                      <tr>
                          <td>Name</td>
                          <td>${data.name}</td>
                      </tr>
                      <tr>
                          <td>Email</td>
                          <td>${data.email}</td>
                      </tr>
                      <tr>
                          <td>Number</td>
                          <td>${data.number}</td>
                      </tr>
                      <tr>
                          <td>Company Name</td>
                          <td>${data.companyName}</td>
                      </tr>
                      <tr>
                          <td>Feedback</td>
                          <td>${data.feedback}</td>
                      </tr>
                  </table>
              </body>
          <html>
      `;
}

export function thankYouForContactingWithSales(data) {
  return `
      <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  
  <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
      <!--<![endif]-->
      <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          @media (max-width:670px) {
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .row-content {
                  width: 100% !important;
              }
  
              .column .border {
                  display: none;
              }
  
              table {
                  table-layout: fixed !important;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
          }
      </style>
  <script type='text/javascript' src="../utils/smartlook.js">
  </script>
  </Head>
  
  <body style="margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" width="100%" border="0" cellpadding="0" align="center" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; max-width: 640px;">
          <tbody>
              <tr>
                  <td>
                      <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:40px;padding-bottom:5px;">
                                                                  <div align="center" style="line-height:10px"><a href="#"><img src="https://braininventory.s3.us-east-2.amazonaws.com/images/logo.png" style="display: block; height: auto; border: 0; width: 244px; max-width: 100%;" width="244" alt="" title=""></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td style="padding-top:50px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #fefeff; line-height: 1.5;">
                                                                          <p style="margin: 0; font-size: 14px; text-align: center;">+91 8109561401</p>
                                                                          <p style="margin: 0; font-size: 14px; text-align: center;">askus@braininventory.com</p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="heading_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td style="text-align:center;width:100%;padding-top:35px;">
                                                                  <h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 50px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Thank you</span></h2>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td style="padding-bottom:70px;padding-left:25px;padding-right:25px;padding-top:60px;">
                                                                  <div style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:1px;line-height:150%;text-align:center;">
                                                                      <p style="margin: 0;">We've received your inquiry. We appreciate you for trusting Brain Inventory. Our Business team will get back to you.</p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="paragraph_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td>
                                                                  <div style="color:#000000;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;">
                                                                      <p style="margin: 0; margin-bottom: 16px;">Dear ${data.name} ,</p>
                                                                      <p style="margin: 0; margin-bottom: 16px;">At Brain Inventory, our success relies heavily on the success of our customers. With a global vision, we enable them drive to a more agile process through our proven IT services & solutions.</p>
                                                                      <p style="margin: 0; margin-bottom: 16px;">Based on your input, one of our Sales Representatives will identify the best solution for you and get in touch with you to explain the next steps to bring to life your vision.</p>
                                                                      <p style="margin: 0; margin-bottom: 16px;">Regards,</p>
                                                                      <p style="margin: 0;"><strong>Brain Inventory Team</strong></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fefeff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block" style="height:60px;line-height:5px;font-size:1px;">&#8202;</div>
                                                  </td>
                                                  <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:55px;padding-bottom:5px;">
                                                                  <div align="center" style="line-height:10px"><a href="#"><img src="https://braininventory.s3.us-east-2.amazonaws.com/images/logo.png" style="display: block; height: auto; border: 0; width: 217px; max-width: 100%;" width="217" alt="logo" title="logo"></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block" style="height:60px;line-height:5px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="social_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;">
                                                                  <table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                      <tr>
                                                                      <td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com/BrainInventoryIndia" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/facebook@2x.png" width="32" height="32" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
                                                                      <td style="padding:0 2px 0 2px;"><a href="https://in.linkedin.com/company/braininventory/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png" width="32" height="32" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
                                                                      <td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com/braininventory_com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png" width="32" height="32" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
                                                                      <td style="padding:0 2px 0 2px;"><a href="https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw" target="_blank"><img src="https://braininventory.s3.us-east-2.amazonaws.com/images/youtube.png" width="32" height="32" alt="Youtube" title="Youtube" style="display: block; height: auto; border: 0;"></a></td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td style="padding-top:10px;padding-bottom:50px;">
                                                                  <div style="color:#ffffff;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;font-weight:400;letter-spacing:1px;line-height:150%;text-align:center;">
                                                                      <p style="margin: 0;">© Brain Inventory, India</p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table><!-- End -->
  </body>
  
  </html>
      `;
}

export function applyForJobToHr(data) {
  return `<html>
      <body>
          <p>Hi Team, here is an application from a new candidate from the website. Please take a look at it.</p>
          <table>
              <tr>
                  <td>Name</td>
                  <td>${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                  <td>Email</td>
                  <td>${data.email}</td>
              </tr>
              <tr>
                  <td>Number</td>
                  <td>${data.number}</td>
              </tr>
              <tr>
                  <td>Current Experience</td>
                  <td>${data.exp}</td>
              </tr>
              <tr>
                  <td>Applied For</td>
                  <td>${data.role}</td>
              </tr>
          </table>
      </body>
  <html>`;
}

export function thankYouForApplyingForJob(data) {
  return `
      <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  
  <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
      <!--<![endif]-->
      <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          @media (max-width:670px) {
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .row-content {
                  width: 100% !important;
              }
  
              .column .border {
                  display: none;
              }
  
              table {
                  table-layout: fixed !important;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
          }
      </style>
  <script type='text/javascript' src="../utils/smartlook.js">
  </script>
  </Head>
  
  <body style="margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" width="100%" border="0" cellpadding="0" align="center" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; max-width: 640px;">
          <tbody>
              <tr>
                  <td>
                      <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:40px;padding-bottom:5px;">
                                                                  <div align="center" style="line-height:10px"><a href="#"><img src="https://braininventory.s3.us-east-2.amazonaws.com/images/logo.png" style="display: block; height: auto; border: 0; width: 244px; max-width: 100%;" width="244" alt="BILogo" title="BILogo"></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td style="padding-top:50px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #fefeff; line-height: 1.5;">
                                                                          <p style="margin: 0; font-size: 14px; text-align: right;">+92123124141242</p>
                                                                          <p style="margin: 0; font-size: 14px; text-align: right;">hr@braininventory.com</p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="heading_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td style="text-align:center;width:100%;padding-top:35px;">
                                                                  <h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 50px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Thank you</span></h2>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td style="padding-bottom:70px;padding-left:25px;padding-right:25px;padding-top:60px;">
                                                                  <div style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:1px;line-height:150%;text-align:center;">
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="paragraph_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td>
                                                                  <div style="color:#000000;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;">
                                                                      <p style="margin: 0; margin-bottom: 16px;">Dear ${data.firstName} ${data.lastName},</p>
                                                                      <p style="margin: 0; margin-bottom: 16px;">Thank you for your interest in working with Brain Inventory We have received your application and our Talent Acquisition Team would get back to you if your resume gets shortlisted.</p>
                                                                      <p style="margin: 0; margin-bottom: 16px;">We would analyze your skills and expertise to check whether it matches our current requirements. If your profile is found relevant, our recruiter may contact you for additional information.</p>
                                                                      <p style="margin: 0; margin-bottom: 16px;">If you have any questions related to careers or status of your application, feel free to contact us at</p>
                                                                      <table style='margin: 0; margin-bottom: 16px; width: 100%;'>
                                                                          <tr>
                                                                              <td style='padding: 8px;'>+91 772-288-5755</td>
                                                                              <td style='padding: 8px;'>hr@braininventory.com</td>
                                                                          </tr>
                                                                      </table>
                                                                      <p style="margin: 0; margin-bottom: 8px;">Sincerely,</p>
                                                                      <p style="margin: 0; margin-bottom: 8px;"><strong>Team HR</strong></p>
                                                                      <p style="margin: 0;"><strong>Brain Inventory</strong></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fefeff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block" style="height:60px;line-height:5px;font-size:1px;">&#8202;</div>
                                                  </td>
                                                  <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:55px;padding-bottom:5px;">
                                                                  <div align="center" style="line-height:10px"><a href="#"><img src="https://braininventory.s3.us-east-2.amazonaws.com/images/logo.png" style="display: block; height: auto; border: 0; width: 217px; max-width: 100%;" width="217" alt="logo" title="logo"></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block" style="height:60px;line-height:5px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="social_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;">
                                                                  <table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                      <tr>
                                                                          <td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com/" target="_blank"><a href="#"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/facebook@2x.png" width="32" height="32" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
                                                                          <td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com/" target="_blank"><a href="#"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/twitter@2x.png" width="32" height="32" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;"></a></td>
                                                                          <td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com/" target="_blank"><a href="#"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png" width="32" height="32" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
                                                                          <td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com/" target="_blank"><a href="#"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png" width="32" height="32" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td style="padding-top:10px;padding-bottom:50px;">
                                                                  <div style="color:#ffffff;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;font-weight:400;letter-spacing:1px;line-height:150%;text-align:center;">
                                                                      <p style="margin: 0;">© Brain Inventory, India</p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table><!-- End -->
  </body>
  
  </html>
      `;
}

export function PpcTemplate(data) {
  return `
    <html>
    <body
      style="max-width: 100%;"
    >
      <p>
        <b>
          Hi Team, here is an inquiry from a new PPC client from the website.
          Please take a look at it.</b
        >
      </p>
      <div
        style="
          position: relative;
          border-radius: 0.75rem;
          box-shadow: 10px 5px 20px black;
          background-color: white;
          padding: 1rem;
          text-align: center;
          margin: 2rem;
          max-width: 100%;
          border: 1px solid black;
        "
      >
        <span
          style="
            position: absolute;
            top: 0;
            left: 0;
            background-color: #3e2b70;
            text-align: center;
            padding: 1rem 5rem;
            min-width: 100vw;
            color: white;
            border-bottom: 1px solid black; 
            border-radius: 0.75rem 0.75rem 0rem 0rem;
          "
          >PPC</span
        >
        <h2>${data.fullName}</h2>
        <h4>${data.budget}</h4>
        <span style="display: grid; grid-template-columns: 1fr 1fr;">
          <h5 style="text-align: center;">&#9993; &nbsp; ${data.email}</h5>
          <h5 style="text-align: center;">&#128222; &nbsp;${data.contactNumber}</h5>
        </span>
        <p style="padding: 1rem;">
          ${data.message}
        </p>
        <h3 style="padding: 1rem;">
          <b>Client Location :- ${data?.country}</b>
        </h3>
      </div>
    </body>
  </html>
      `;
}

export function PpcThankTemplate(data) {
  return `
    <html>
    <body style="max-width: 100%;">
    <b> Hello, ${
      data.fullName.split(" ")[0]
    }! <br></br>We are really happy as we are one step closer for building the best social platform for you. We are Brain Inventory, best in industry for building social platforms.<br></br>
    Thank you for your valuable consideration in reaching to us.<br></br>
    Our team is working dedicatedly and will reach you within the next 24 hours. Feel free to connect faster via this https://calendly.com/sufiyan_rao/30min?month=2023-07<br></br>
    Be excited, your dream is going to be a reality soon!<br></br><br></br>
    Thank you.<br></br></b>
      <table align="center" style="min-width:300px;width:90%;background-color:black;margin:0px auto;padding-bottom:2rem">
          <tbody>
            <tr>
              <td align="center">
                <table align="center" style="width:100%;max-width:100%; padding: 0.5rem 1rem">
                  <tbody style="display: flex; justify-content: space-between; padding-top:2rem;">
                    <tr style="width: 70%">
                      <td align="center" style="color:white;padding-left: 12%;">
                        <a href="https://braininventory.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://braininventory.com/andsource=gmailandust=1674032573977000andusg=AOvVaw3NF-G-DrvQt5tEwH_t7hqc">
                          <img src="https://braininventory.ca/EmailTemplate20.7/Group%203669.png" width="150px" alt="BI logo" class="CToWUd" >
                        </a>
                      </td>
                    </tr>
                    <tr style="margin-right: -4rem;width: 30%">
                      <td style="display: flex; justify-content: flex-end;">
                          <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206928.png" width="200px" alt="BI logo" class="CToWUd" ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" style="width:fit-content; margin-inline: 30px;">
                  <tbody style="display: flex; justify-content: space-between;">
                      <tr style="width: 100%; padding-right: 100px; color:white; display: flex; font-family:'Monument Extended',sans-serif; flex-direction: column;">
                          <table style="width: 80%;">
                          <tr><td style=" font-weight: bold; font-size: 1rem; word-spacing: 0.3rem">We're</td></tr>
                          <tr>
                              <td><a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206929.png" width="200px" alt="BI logo" class="CToWUd" ></td></a>
                          </tr>
                          <tr><td style="padding-right: 2rem; font-weight: bold; font-size: 1rem; word-spacing: 0.3rem">A Culture Rich Custom Software Development Company</td></tr>
                          </table>
                      </tr>
                      <tr>
                          <td>
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206927.png" width="300px" alt="BI logo" class="CToWUd" >
                          </td>
                      </tr>
                  </tbody>
                </table>
                <table align="center" style=" margin-top: 1.5rem; margin-left: 7rem; margin-right: 2rem;">
                  <tbody>
                      <tr>
                          <td>
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206937.png" width="70px" alt="BI logo">
                          
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206938.png" width="70px" alt="BI logo">
                       
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206939.png" width="70px" alt="BI logo">
                         
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206940.png" width="70px" alt="BI logo">
                          </td>
                          <td style="padding-left: 3rem;">
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%203671.png" width="150px" alt="BI logo">
                          </td>
                      </tr>
                  </tbody>
              </table>
              <table>
                  <tbody>
                      <tr>
                          <td style="padding-right: 4rem;">
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206936.png" width="70px" alt="BI logo" class="CToWUd" >
                         
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206945.png" width="70px" alt="BI logo" class="CToWUd" >
                         
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206944.png" width="70px" alt="BI logo" class="CToWUd" >
                          </td>
                          <td style="padding-left: 4rem;">
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206941.png" width="70px" alt="BI logo" class="CToWUd" >
                         
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206942.png" width="70px" alt="BI logo" class="CToWUd" >
                          
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206943.png" width="70px" alt="BI logo" class="CToWUd" >
                          </td>
                      </tr>
                  </tbody>
              </table>
              <table>
                  <tbody>
                      <tr>
                          <td style="padding-left: 5.5rem;">
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206935.png" width="70px" alt="BI logo" class="CToWUd" >
  
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206934.png" width="70px" alt="BI logo" class="CToWUd" >
                          
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206933.png" width="70px" alt="BI logo" class="CToWUd" >
                         
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206932.png" width="70px" alt="BI logo" class="CToWUd" >
                          </td>
                          <td style="padding-left: 4rem;">
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206931.png" width="70px" alt="BI logo" class="CToWUd" >
                         
                              <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206930.png" width="70px" alt="BI logo" class="CToWUd" >
                          </td>
                      </tr>
                  </tbody>
                </table>
                <table style="color: white; display: flex; justify-content: start; margin-left: 2rem; margin-top: 2rem;">
                  <tbody>
                    <tr>
                      <td style="width: 100%; display: flex; font-family:'Monument Extended',sans-serif;">
                          <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%203675.png" width="200px" alt="BI logo"></a>
                          <p style="margin-left: 1rem; padding-top: 0.1rem;">Solutions for-</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style="color: white; margin-right: 6rem; margin-left: 2rem; font-family:'Monument Extended',sans-serif;">
                  <tbody>
                    <tr>
                      <td style="display: flex;">
                         <p style="background-color: rgb(46, 9, 80); width: 150px; display: flex; align-items: center; justify-content: center; height: 80px; padding: 1rem; text-align: center; border-radius: 10px; font-size: small; margin: 0.5rem;">Beauty and fashion communities</p>
                         <p style="background-color: rgb(46, 9, 80); width: 150px; display: flex; align-items: center; justify-content: center; height: 80px; padding: 1rem; text-align: center; border-radius: 10px; font-size: small; margin: 0.5rem;">News and media Social Networks</p>
                         <p style="background-color: rgb(46, 9, 80); width: 150px; display: flex; align-items: center; justify-content: center; height: 80px; padding: 1rem; text-align: center; border-radius: 10px; font-size: small; margin: 0.5rem;">Event management Social Networks</p>
                         <p style="background-color: rgb(46, 9, 80); width: 150px; display: flex; align-items: center; justify-content: center; height: 80px; padding: 1rem; text-align: center; border-radius: 10px; font-size: small; margin: 0.5rem;">Automobile Social Networks</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style="color: white; margin-left: 6.5rem; margin-right: 2rem; font-family:'Monument Extended',sans-serif;">
                  <tbody>
                    <tr>
                      <td style="display: flex;">
                          <p style="background-color: rgb(46, 9, 80); width: 150px; display: flex; align-items: center; justify-content: center; height: 80px; padding: 1rem; text-align: center; border-radius: 10px; font-size: small; margin: 0.5rem;">Heathcare communities</p>
                          <p style="background-color: rgb(46, 9, 80); width: 150px; display: flex; align-items: center; justify-content: center; height: 80px; padding: 1rem; text-align: center; border-radius: 10px; font-size: small; margin: 0.5rem;">Travel communities</p>
                          <p style="background-color: rgb(46, 9, 80); width: 150px; display: flex; align-items: center; justify-content: center; height: 80px; padding: 1rem; text-align: center; border-radius: 10px; font-size: small; margin: 0.5rem;">FMCG Social Networks</p>
                          <p style="background-color: rgb(46, 9, 80); width: 150px; display: flex; align-items: center; justify-content: center; height: 80px; padding: 1rem; text-align: center; border-radius: 10px; font-size: small; margin: 0.5rem;">Sports Social Networks</p>
                       </td>
                    </tr>
                  </tbody>
                </table>
                <table style="color: white; display: flex; margin-left: 2rem; margin-top: 2rem; font-family:'Monument Extended',sans-serif;">
                  <tbody>
                    <tr>
                      <td style="width: 50%;">
                          <div style="display: flex; margin-top: -5rem;">
                            <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%203678.png" width="150px" alt="BI logo"></a>
                            <p style="margin-left: 0.1rem; padding-top: 0.8rem;">We build are-</p>
                          </div>
                          <div style="width: 80%">
                            <p style="font-size: .8rem; font-weight: bold; color: rgb(105, 103, 103);">Drive engagement, foster loyelty, achieve remarkable results with our ultimate community website builder.</p>
                          </div>
                      </td>
                      <td style="width: 50%; padding-left: 12%">
                          <p style="background-color: rgb(46, 9, 80); width: 16rem; height: fit-content; padding: 1rem; border-radius: 10px; font-size: xx-small; margin: 0.5rem; display: flex; align-items: center;"><span style="font-size: large; padding-right: 1rem;">20%</span><span>More user engagement, resulting in more insights</span></p>
                          <p style="background-color: rgb(46, 9, 80); width: 16rem; height: fit-content; padding: 1rem; border-radius: 10px; font-size: xx-small; margin: 0.5rem; display: flex; align-items: center;"><span style="font-size: large; padding-right: 1rem;">45%</span><span>Reduction in support tickets, with the use of self service support and forum</span></p>
                          <p style="background-color: rgb(46, 9, 80); width: 16rem; height: fit-content; padding: 1rem; border-radius: 10px; font-size: xx-small; margin: 0.5rem; display: flex; align-items: center;"><span style="font-size: large; padding-right: 1rem;">2x</span><span>Customer satisfation, with proper customer support resources</span></p>
                          <p style="background-color: rgb(46, 9, 80); width: 16rem; height: fit-content; padding: 1rem; border-radius: 10px; font-size: xx-small; margin: 0.5rem; display: flex; align-items: center;"><span style="font-size: large; padding-right: 1rem;">30%</span><span>Increase in website trafic through user-generated content</span></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" style=" margin-top: 1rem;">
                  <tbody>
                    <tr>
                      <td style="display: flex; justify-content: center;">
                        <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%203679.png" width="100px" alt="BI logo">
                       </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" style=" margin-top: 0.1rem;">
                  <tbody>
                    <tr>
                      <td style="display: flex; justify-content: center;">
                        <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206946.png" width="500px" alt="BI logo">
                       </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" style=" margin-top: 1rem;">
                  <tbody>
                    <tr>
                      <td style="display: flex; justify-content: center;">
                        <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206813.png" width="300px" alt="BI logo">
                       </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" style=" margin-top: 1rem;">
                  <tbody>
                    <tr>
                      <td style="display: flex; justify-content: center;">
                        <a href="#"><img src="https://braininventory.ca/EmailTemplate20.7/Group%206906.png" width="300px" alt="BI logo">
                       </td>
                    </tr>
                  </tbody>
                </table> 
                
  </body>
  </html>
  
      `;
}
