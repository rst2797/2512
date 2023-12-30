import multer from "multer";

export const fileUploadMiddleware = (handler) => {
  return async (req, res) => {
    const storage = multer.diskStorage({
      destination: "./uploads/",
      filename: (req, file, cb) => {
        cb(
          null,
          `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        );
      },
    });

    const upload = multer({ storage });
    upload.single('image')
    return handler(req, res);
  };
};
