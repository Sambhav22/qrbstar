export const chapter = "Chapter - 15: Water and Its Importance";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which planet is called the “Blue Planet”?",
        optionA: "Earth",
        optionB: "Mars",
        optionC: "Venus",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "Which form of water is the purest in nature?",
        optionA: "Well water",
        optionB: "Rainwater",
        optionC: "River water",
        correctAnswer: "Rainwater",
      }),
      shuffleOptions({
        question: "What is the process called when water changes into vapour due to heat?",
        optionA: "Condensation",
        optionB: "Evaporation",
        optionC: "Transpiration",
        correctAnswer: "Evaporation",
      }),
      shuffleOptions({
        question: "Which process helps in adding water vapour to the air through plants?",
        optionA: "Transpiration",
        optionB: "Condensation",
        optionC: "Precipitation",
        correctAnswer: "Transpiration",
      }),
      shuffleOptions({
        question: "What do we call the continuous movement of water from the earth to the atmosphere and back?",
        optionA: "Water flow",
        optionB: "Water cycle",
        optionC: "Water vapour",
        correctAnswer: "Water cycle",
      }),
      shuffleOptions({
        question: "Which natural disaster is caused by a long period of no rainfall?",
        optionA: "Flood",
        optionB: "Drought",
        optionC: "Cyclone",
        correctAnswer: "Drought",
      }),
      shuffleOptions({
        question: "What is the main cause of formation of clouds in the atmosphere?",
        optionA: "Evaporation",
        optionB: "Condensation",
        optionC: "Precipitation",
        correctAnswer: "Condensation",
      }),
      shuffleOptions({
        question: "Which method helps in collecting and storing rainwater for future use?",
        optionA: "Irrigation",
        optionB: "Rainwater harvesting",
        optionC: "Distillation",
        correctAnswer: "Rainwater harvesting",
      }),
      shuffleOptions({
        question: "What is the condition called when excessive rain causes water to overflow and cover land areas?",
        optionA: "Drought",
        optionB: "Flood",
        optionC: "Erosion",
        correctAnswer: "Flood",
      }),
      shuffleOptions({
        question: "Which water source contains dissolved salts and minerals and comes out naturally from the ground?",
        optionA: "River water",
        optionB: "Spring water",
        optionC: "Lake water",
        correctAnswer: "Spring water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water which is suitable for drinking is called ______ water.",
        optionA: "fresh",
        optionB: "potable",
        optionC: "saline",
        correctAnswer: "potable",
      }),
      shuffleOptions({
        question: "The process of changing water vapour into liquid water is called ______.",
        optionA: "condensation",
        optionB: "evaporation",
        optionC: "precipitation",
        correctAnswer: "condensation",
      }),
      shuffleOptions({
        question: "The movement of water from the earth’s surface to the atmosphere and back is called the ______.",
        optionA: "water cycle",
        optionB: "evaporation cycle",
        optionC: "condensation cycle",
        correctAnswer: "water cycle",
      }),
      shuffleOptions({
        question: "The loss of water from the leaves of plants in the form of vapour is known as ______.",
        optionA: "transpiration",
        optionB: "evaporation",
        optionC: "condensation",
        correctAnswer: "transpiration",
      }),
      shuffleOptions({
        question: "The collection of rainwater from roofs or open surfaces is known as ______.",
        optionA: "rainwater harvesting",
        optionB: "groundwater collection",
        optionC: "filtration",
        correctAnswer: "rainwater harvesting",
      }),
      shuffleOptions({
        question: "The clouds are formed when water vapour ______.",
        optionA: "evaporates",
        optionB: "condenses",
        optionC: "freezes",
        correctAnswer: "condenses",
      }),
      shuffleOptions({
        question: "Lack of rainfall for a long time leads to ______.",
        optionA: "flood",
        optionB: "drought",
        optionC: "storm",
        correctAnswer: "drought",
      }),
      shuffleOptions({
        question: "Excessive rainfall in an area may result in ______.",
        optionA: "earthquake",
        optionB: "flood",
        optionC: "drought",
        correctAnswer: "flood",
      }),
      shuffleOptions({
        question: "The process by which plants add moisture to the air is called ______.",
        optionA: "transpiration",
        optionB: "condensation",
        optionC: "precipitation",
        correctAnswer: "transpiration",
      }),
      shuffleOptions({
        question: "The water which seeps under the soil and gets collected is called ______.",
        optionA: "surface water",
        optionB: "groundwater",
        optionC: "river water",
        correctAnswer: "groundwater",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Earth is called the Blue Planet because most of its surface is covered with water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainwater is the impurest form of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The process of evaporation adds water vapour to the air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Transpiration is the loss of water from animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Condensation changes water into vapour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Drought is caused due to heavy rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Floods occur due to excessive rain or overflow of rivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainwater harvesting helps conserve water for future use.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ice floats on water because it is lighter than water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polluted water is safe for drinking after boiling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
