import fs from "fs";

export default function deleteLocalImage(imagePath) {
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }
}
