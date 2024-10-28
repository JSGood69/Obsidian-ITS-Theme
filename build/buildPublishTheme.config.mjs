import fs from "fs";
import * as sass from "sass";

const inputPath = "./scss/Theme Rewrite/publish.scss";
const outputPath = "publish.css";

const result = sass.compile(inputPath, {
  charset: true,
  sourceMap: false,
});

fs.writeFile(outputPath, result.css, () => true);
