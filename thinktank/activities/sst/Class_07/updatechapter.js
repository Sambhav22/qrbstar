const fs = require("fs");
const path = require("path");

const chapters = [
  "Medieval Period : Where, When and How",
  "North India in Early Medieval Period",
  "The Deccan and South India in Early Medieval Period",
  "The Delhi Sultanate",
  "The Sultanate Period : Regional Kingdoms",
  "The Mughal Empire",
  "The Mughal Policy",
  "The Medieval Period : Art and Architecture",
  "Social Change and Communities",
  "Popular Beliefs and Religious Debates",
  "Regional Cultures",
  "New Political Formations in the Eighteenth Century",
  "Natural and Human Environment",
  "The Earth's Interior",
  "Earth Movements and Landforms",
  "Air : Composition and Structure",
  "Atmosphere : Weather and Climate",
  "Atmosphere : Wind and Moisture",
  "Hydrosphere",
  "Life in Desert",
  "Life in Tropical and Subtropical Regions",
  "Life in Temperate Grasslands",
  "Understanding Democracy",
  "Voting and Elections",
  "State Government",
  "Media and Democracy",
  "Unpacking Gender",
  "Markets Around Us"
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