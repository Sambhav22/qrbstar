const fs = require("fs");
const path = require("path");

const chapters = [
  "Introduction",
  "Finding Places on Earth",
  "The Globe and What It Teaches",
  "The World : Realms, Continents and Oceans",
  "India : Physiographic Divisions",
  "How to Understand History",
  "The Stone Age",
  "The First Cities",
  "The Indian Culture in the Northwest and the Deccan",
  "Early States and Empire",
  "The First Empire",
  "Political Developments",
  "The Golden Age of India",
  "The Last Great Empire of Ancient India",
  "In Touch with the World",
  "New Schools of Thought",
  "Unity in Diversity",
  "Family, Community and Government",
  "The Rural Local Self-Government",
  "The Urban Local Self-Government",
  "Working for Fun"
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