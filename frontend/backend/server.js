import express from "express";
import multer from "multer";
import cors from "cors";
import sharp from "sharp";

const app = express();

app.use(cors());

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("MediScan Backend Is Running!");
});

app.post("/upload", upload.single("prescription"), async (req, res) => {
  console.log(req.file);

  await sharp(req.file.path)
    .grayscale()
    .normalize()
    .toFile("processed-prescription.png");

  res.json({
    message: "Prescription uploaded and enhanced successfully!"
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});