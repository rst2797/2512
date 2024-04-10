import jwt, { decode } from "jsonwebtoken";

export default function authAdminMiddleware(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        error: true,
        success: false,
        message: "Unauthorized: No token provided",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;

      if (decoded.email === "darshboyat@gmail.com") return handler(req, res);
      else throw Error("Invalid Admin Token");
    } catch (error) {
      return res.status(401).json({
        error: true,
        success: false,
        message: "Unauthorized: Invalid admin token",
      });
    }
  };
}