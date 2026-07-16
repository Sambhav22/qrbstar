const fs = require("fs");
const path = require("path");

const chapters = [
  "The Universe",
  "The Earth : Models and Features",
  "India : Land and Climate",
  "India : Government",
  "India : Local Self-government",
  "India : Food",
  "India : Dress",
  "India : Festivals",
  "India : Occupations",
  "India : Helpers",
  "India : Means of Transport",
  "Means of Communication",
  "Mumbai",
  "Chennai",
  "Kolkata",
  "Delhi",
  "Story of Early Man",
  "Invention of the Wheel"
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