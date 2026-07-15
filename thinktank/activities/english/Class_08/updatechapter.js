const fs = require("fs");
const path = require("path");

const chapters = [
  "Contentment",
  "Kabuliwallah",
  "Character of a Happy Life",
  "Happy-Unhappy",
  "True Liberation of Women",
  "Better Hands",
  "Palanquin Bearers",
  "The Rarest Sacrifice",
  "Essence of Etiquette",
  "The Lost Wit",
  "To the Cuckoo",
  "The Blue Master",
  "Impoliteness",
  "A Coffee Drinker",
  "The Quality of Mercy",
  "Innocent Tricks",
  "Fear is a Fantasy",
  "The Open Window",
  "The Old Wife and the Ghost",
  "The Ghost Test",
  "True Friendship",
  "The Generous Friend",
  "Faithful Friend",
  "The Four Musicians",
  "How We Communicate?",
  "The First Telephone",
  "Old Names, New Meaning",
  "Animal's Communication",
  "A Soldier's Letter",
  "War of 1857",
  "Hiroshima Child",
  "Whose War"
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