const fs = require("fs");
const path = require("path");

// Generated chapter files:
// Class5_datajs/Chapter-01/data.js
const sourceRoot = path.join(__dirname, "Class2_datajs");

// Existing project folder
const targetRoot = path.join(__dirname, "Class_02");

const totalChapters = 19;

if (!fs.existsSync(sourceRoot)) {
  console.error(`❌ Source folder not found: ${sourceRoot}`);
  process.exit(1);
}

if (!fs.existsSync(targetRoot)) {
  console.error(`❌ Existing target folder not found: ${targetRoot}`);
  console.error('Check that the folder is named exactly "Class_05".');
  process.exit(1);
}

let replaced = 0;
let skipped = 0;

for (let chapter = 1; chapter <= totalChapters; chapter++) {
  const number = String(chapter).padStart(2, "0");

  const sourceFile = path.join(
    sourceRoot,
    `Chapter-${number}`,
    "data.js"
  );

  const targetFile = path.join(
    targetRoot,
    `ch_${number}`,
    "js",
    "data.js"
  );

  if (!fs.existsSync(sourceFile)) {
    console.log(`❌ Source missing: Chapter-${number}/data.js`);
    skipped++;
    continue;
  }

  if (!fs.existsSync(targetFile)) {
    console.log(`⚠️ Target file not found: Class_05/ch_${number}/js/data.js`);
    skipped++;
    continue;
  }

  try {
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`✅ Replaced: Class_05/ch_${number}/js/data.js`);
    replaced++;
  } catch (error) {
    console.error(`❌ Chapter ${number} failed: ${error.message}`);
    skipped++;
  }
}

console.log("\n------------------------------");
console.log(`Files replaced: ${replaced}`);
console.log(`Files skipped: ${skipped}`);
console.log("------------------------------");