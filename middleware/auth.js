
import jwt from "jsonwebtoken";

export default function authMiddleware(handler) {
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
      const decoded = jwt.verify(token, "2512SUSTAINABLECLOTHSPACCHIS12");

      req.user = decoded;

      return handler(req, res);
    } catch (error) {
      return res.status(401).json({
        error: true,
        success: false,
        message: "Unauthorized: Invalid token",
      });
    }
  };
}
