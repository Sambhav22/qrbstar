const fs = require("fs");
const path = require("path");

const chapters = [
  "My Family",
  "Sense Organs",
  "How They Learn Their Skills",
  "Recreation",
  "How We Get Food",
  "Eating Together",
  "Tongue and Teeth",
  "Beak and Claws",
  "Water Everywhere",
  "Keeping Water Safe",
  "Houses Then and Now",
  "Habitats of Animals",
  "Disposal of Wastes",
  "Our Neighbourhood",
  "Travelling Far and Near",
  "Plants Around Us",
  "The Blooming World",
  "Animals Around Us",
  "Brick and Bridges"
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