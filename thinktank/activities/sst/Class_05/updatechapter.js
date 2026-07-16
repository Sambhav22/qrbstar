const fs = require("fs");
const path = require("path");

const chapters = [
  "The Globe",
  "The Map",
  "Weather and Climate",
  "Congo : The Land of Forests",
  "Greenland : The Land of Ice",
  "Saudi Arabia : The Land of Dessert",
  "The Prairies : The Grasslands",
  "Means of Transport",
  "Means of Communication",
  "Growing Knowledge",
  "Advancement in Medical Science",
  "The Machine Age",
  "Sources of Energy",
  "Our Environment",
  "Natural Disasters",
  "The First War of Independence",
  "Struggle for Freedom",
  "March to Freedom",
  "The United Nations",
  "The World’s Great People"
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