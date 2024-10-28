import fs from "fs";
import * as sass from "sass";

const inputPath = "./scss/Theme Rewrite/ITS Theme.scss";
const outputPath = "theme.css";

const result = sass.compile(inputPath, {
  charset: false,
  sourceMap: false,
});

fs.writeFile(outputPath, result.css, () => true);
