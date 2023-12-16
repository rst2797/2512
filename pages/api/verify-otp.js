export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { phoneNumber, otp } = req.body;  
      if (true) {
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ success: false, error: 'Invalid OTP' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  