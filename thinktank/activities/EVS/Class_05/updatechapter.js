const fs = require("fs");
const path = require("path");

const chapters = [
  "Family in Transition",
  "Everyone is Special",
  "Games and Sports",
  "Traditional Games",
  "Breathing",
  "Work and Labour",
  "Growing Plants",
  "Our Forest Wealth",
  "Super Senses",
  "Animals in Our Lives",
  "The Food We Eat",
  "Digestion and Deficiency Diseases",
  "Food for Plants and Animals",
  "Shelter for Everyone",
  "In Times of Emergency",
  "Importance of Water",
  "Aquatic Life",
  "Fuels",
  "Adventure and Exploration",
  "Monuments and Buildings"
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