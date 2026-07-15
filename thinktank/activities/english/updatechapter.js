const fs = require("fs");
const path = require("path");

const chapters = [
  "Mussoorie– Queen of Hills",
  "The Voyage of Marco Polo",
  "From a Railway Carriage",
  "The Price of Bananas",
  "World Wildlife Week",
  "The Shark Attack",
  "Beautiful Things",
  "Animals' Gossip",
  "Never Fear",
  "The New Terror",
  "A Soldier",
  "The Throat Specialist",
  "Bravo!",
  "Alice in Wonderland",
  "The Blind Boy",
  "The Twin Trouble",
  "The Great Preacher",
  "Struggle for an Education",
  "Vocation",
  "The Old School",
  "Computer",
  "Thomas Alva Edison",
  "Invention of Microscope",
  "The Weird Caller",
  "Accidents",
  "Indo-Pak War of 1971",
  "Uncle Tom's Car",
  "The Ransom of Red Chief"
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