const fs = require("fs");
const path = require("path");

const chapters = [
  "We and Our Families",
  "Work and Neighbourhood",
  "Food, Clothes and States",
  "Plants Around Us",
  "Leaves in Our Lives",
  "The World of Animals",
  "Insects and Worms",
  "Water for All",
  "Food We Eat",
  "Staying Fit and Safe",
  "Games are Fun",
  "Things and Matter",
  "Pottery",
  "Where We Live"
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