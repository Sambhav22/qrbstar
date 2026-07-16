const fs = require("fs");
const path = require("path");

const chapters = [
  "My Body",
  "Food",
  "Water",
  "Clothing",
  "House",
  "Our Neighbours",
  "My School",
  "Places of Worship",
  "Neighbourhood Services",
  "Religious Festivals",
  "National Festivals",
  "Means of Transport",
  "Means of Communication",
  "Road Safety",
  "Distance and Directions",
  "Time and Date",
  "Invention of the Wheel",
  "Great People",
  "Seasons",
  "Forms of Land"
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