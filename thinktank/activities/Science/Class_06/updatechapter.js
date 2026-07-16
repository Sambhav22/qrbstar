const fs = require("fs");
const path = require("path");

const chapters = [
  "Organisms in Our Surroundings",
  "Healthy Body: Nutrients and Balanced Diet",
  "Experimenting with Magnets",
  "Measurement and Motion",
  "Sorting Materials",
  "Heat: Temperature and Devices",
  "Water: Forms and Pathway",
  "Separation of Substances",
  "Characteristics of Living Things",
  "Our Natural Resources",
  "Our Galaxy and Universe"
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