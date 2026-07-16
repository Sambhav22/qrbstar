const fs = require("fs");
const path = require("path");

const chapters = [
  "Basics of Computers",
  "Working of the Computer",
  "What is Windows?",
  "Handling a Mouse",
  "Keyboard's Keys",
  "Enjoy with Tux Paint",
  "Applications of Computers",
  "Artificial and Human Intelligence",
  "Reasoning and Visual Processing"
];
chapters.forEach((chapterName, index) => {
  const chapterNo = String(index + 1).padStart(2, "0");

  const filePath = path.join(__dirname, `ch_${chapterNo}`, "js", "data.js");

  if (!fs.existsSync(filePath)) {
    console.log(`Missing: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");

  content = content.replace(
    /export const chapter = ".*?";/,
    `export const chapter = "Chapter - ${index + 1}: ${chapterName}";`
  );

  fs.writeFileSync(filePath, content, "utf8");

  console.log(`Updated ch_${chapterNo}`);
});

console.log("All chapters updated successfully!");