import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function filePath(loc, fileName) {
  try {
    if (loc === "html") {
      const file = path.join(__dirname, "..", "..", "public", loc, fileName);
      return file;
    }
  } catch (error) {
    console.error("Error in filePath:", error);
  }
}

export default filePath;
