const fs = require("fs");
const path = require("path");

const chapters = [
  "Computer Fundamentals",
  "Operating System: Windows 11",
  "Exploring Apps",
  "Let's Learn Notepad",
  "Introduction to Word",
  "Drawing with Paint",
  "Working with MSWLogo",
  "Let's Code with Scratch",
  "AI Technology",
  "Reasoning and Problem-Solving"
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