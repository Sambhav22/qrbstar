const fs = require("fs");
const path = require("path");

const chapters = [
  "Our Family",
  "Our Body",
  "Our Food",
  "Our House",
  "Our Clothes",
  "Our Neighbourhood",
  "Safety First",
  "Our Celebrations",
  "Our Surroundings",
  "Plants",
  "Animals",
  "Air and Water",
  "Weather and Seasons",
  "The Earth and the Sky",
  "Directions",
  "Means of Transport",
  "Means of Communication"
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