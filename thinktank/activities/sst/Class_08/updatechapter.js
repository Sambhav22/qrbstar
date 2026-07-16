const fs = require("fs");
const path = require("path");

const chapters = [
  "Periods and Sources",
  "Beginning of Colonial Power",
  "Expansion of Colonial Administration and Army",
  "Rural Life and Society",
  "Tribal Societies in Colonial Rule",
  "The First War of Independence, 1857",
  "Education and British Rule",
  "Reform Movement for Women",
  "Caste System and Reform",
  "Colonial Rule and Urban Change",
  "The Colonial Rule and Changes in Arts",
  "The Nationalist Movement-1",
  "The Nationalist Movement-2",
  "March to Freedom",
  "Resources and Their Types",
  "Natural Resources : Land and Soil",
  "Natural Resources : Water",
  "Natural Resources : Plants and Wildlife",
  "Agriculture : Types and Major Crops",
  "Agricultural Development and Case Studies",
  "Industry : Types and Factors",
  "Industrial Regions and Major Industries",
  "Human Resources",
  "Need for Laws and Role of the Constitution",
  "Understanding the Constitution",
  "Realization of Vision and Ideals",
  "Parliamentary Form of Government",
  "Law-making in the Country",
  "The Judiciary",
  "Getting Justice",
  "Marginalisation",
  "The Government’s Economic Role"
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