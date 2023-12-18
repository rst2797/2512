import jwt from "jsonwebtoken";

export default function authMiddleware(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.json({
        error: true,
        success: false,
        message: "Unauthorized: No token provided",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;

      return handler(req, res);
    } catch (error) {
      return res.json({
        error: true,
        success: false,
        message: "Unauthorized: Invalid token",
      });
    }
  };
}
