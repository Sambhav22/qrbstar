const fs = require("fs");
const path = require("path");

const chapters = [
  "Our India : An Overview",
  "Great Northern Mountains",
  "Great Northern Plains",
  "Western Desert",
  "Southern Plateaus",
  "Coastal Plains and Islands",
  "Climate of India",
  "India : Soils",
  "India : Forests and Wildlife",
  "India : Water Resources",
  "India : Minerals",
  "India : Human Resources",
  "India : Crops and Livestock",
  "India : Industries",
  "India : Life in Northern Mountains",
  "India : Life in Northern Plains",
  "India : Life in Western Desert",
  "India : Life in Southern Plateaus",
  "Life in Coastal Plains and Islands",
  "Means of Transport",
  "Means of Communication",
  "India : Culture",
  "India : Leaders",
  "India : Government",
  "India : Rights and Duties"
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