import { sendMail } from '../../utils/mailer.js';
import { queryToSales, thankYouForContactingWithSales } from '../../utils/templates.js';

async function handleContactUsRequest(data, subject) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            const payload = {
                to: data.email,
                subject: subject?? "Thank You For Contacting Us | Brain Inventory",
                html: thankYouForContactingWithSales(data)
            };
            await sendMail(payload);
    
            const payload2 = {
                to: 'darshboyat@gmail.com',
                subject: 'New Inquiry',
                html: queryToSales(data),
            }
            
            await sendMail(payload2);

            resolve(true)
        } catch (error) {
            reject({
                error: error?.message || 'Email not sent!'
            });
        }
    })
}
export default async function handler(req, res) {
    if (req.method === 'POST') {
        handleContactUsRequest(JSON.parse(req.body.data), JSON.parse(req.body.subject)).then((resp) => {
            if (resp) {
                res.status(200).json({ success: true })
            }
        })
        .catch((error) => {
            res.status(500).json({error: error})
        });
    }
}