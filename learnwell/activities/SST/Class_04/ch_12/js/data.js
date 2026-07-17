export const chapter = "Chapter - 12: Water Resources";
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
        question: "Which part of the earth contains the largest amount of water?",
        optionA: "Oceans and seas",
        optionB: "Rivers",
        optionC: "Lakes",
        correctAnswer: "Oceans and seas",
      }),
      shuffleOptions({
        question: "What is the main reason seawater cannot be used directly for drinking?",
        optionA: "It freezes easily",
        optionB: "It is salty in nature",
        optionC: "It contains minerals",
        correctAnswer: "It is salty in nature",
      }),
      shuffleOptions({
        question: "Which natural source fills rivers, lakes and underground water?",
        optionA: "Rainfall",
        optionB: "Snowfall",
        optionC: "Wind",
        correctAnswer: "Rainfall",
      }),
      shuffleOptions({
        question: "Which water source stores rainwater under the ground?",
        optionA: "Canals",
        optionB: "Groundwater",
        optionC: "Oceans",
        correctAnswer: "Groundwater",
      }),
      shuffleOptions({
        question: "Which structure is dug to bring out water from below the surface?",
        optionA: "Well",
        optionB: "Canal",
        optionC: "Dam",
        correctAnswer: "Well",
      }),
      shuffleOptions({
        question: "Which device is used in tube wells to lift underground water?",
        optionA: "Rope and bucket",
        optionB: "Electric pump",
        optionC: "Persian wheel",
        correctAnswer: "Electric pump",
      }),
      shuffleOptions({
        question: "Which water system supplies water to homes in cities and towns?",
        optionA: "Rivers",
        optionB: "Overhead water tanks",
        optionC: "Streams",
        correctAnswer: "Overhead water tanks",
      }),
      shuffleOptions({
        question: "Which structure is built across a river to store flowing water?",
        optionA: "Canal",
        optionB: "Dam",
        optionC: "Tube well",
        correctAnswer: "Dam",
      }),
      shuffleOptions({
        question: "Which project helps in irrigation, electricity generation and flood control?",
        optionA: "Canal project",
        optionB: "Rainwater project",
        optionC: "Multi-purpose project",
        correctAnswer: "Multi-purpose project",
      }),
      shuffleOptions({
        question: "What is happening to groundwater because of overuse by humans?",
        optionA: "It is rising",
        optionB: "It is sinking deeper into the ground",
        optionC: "It is turning salty",
        correctAnswer: "It is sinking deeper into the ground",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Freshwater available on the earth mostly comes from ________.",
        optionA: "rainfall",
        optionB: "oceans",
        optionC: "wind",
        correctAnswer: "rainfall",
      }),
      shuffleOptions({
        question: "Seas and oceans contain ________ water.",
        optionA: "sweet",
        optionB: "salty",
        optionC: "muddy",
        correctAnswer: "salty",
      }),
      shuffleOptions({
        question: "Rainwater that seeps into the ground becomes ________.",
        optionA: "groundwater",
        optionB: "tap water",
        optionC: "river water",
        correctAnswer: "groundwater",
      }),
      shuffleOptions({
        question: "Deep bores made to draw water are known as ________.",
        optionA: "lakes",
        optionB: "tube wells",
        optionC: "canals",
        correctAnswer: "tube wells",
      }),
      shuffleOptions({
        question: "A canal carries ________ water to far-off places.",
        optionA: "river",
        optionB: "sea",
        optionC: "tank",
        correctAnswer: "river",
      }),
      shuffleOptions({
        question: "In many houses, water is supplied through ________ tanks.",
        optionA: "underground",
        optionB: "overhead",
        optionC: "glass",
        correctAnswer: "overhead",
      }),
      shuffleOptions({
        question: "Dams help in controlling ________.",
        optionA: "floods",
        optionB: "storms",
        optionC: "crops",
        correctAnswer: "floods",
      }),
      shuffleOptions({
        question: "Wells are dug mainly in areas where the soil is ________.",
        optionA: "rocky",
        optionB: "soft",
        optionC: "sandy",
        correctAnswer: "soft",
      }),
      shuffleOptions({
        question: "Only a ________ amount of water on earth is fit for use.",
        optionA: "small",
        optionB: "large",
        optionC: "unlimited",
        correctAnswer: "small",
      }),
      shuffleOptions({
        question: "Throwing waste into rivers makes the water ________.",
        optionA: "polluted",
        optionB: "sweet",
        optionC: "frozen",
        correctAnswer: "polluted",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Seas and oceans contain saline water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainfall is unevenly distributed in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tube wells use electric pumps to extract water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water pollution increases when waste is dumped into water bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Overhead water tanks store water for domestic use.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dams are built across rivers to store water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Most of the earth’s water is freshwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Wells and tube wells are common in many Indian states.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Groundwater level rises when too much water is used.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Conservation of water is important for our future.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
