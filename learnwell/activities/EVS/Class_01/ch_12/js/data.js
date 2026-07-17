export const chapter = "Chapter - 12: Water for Life";
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
        question: "What do we drink when we feel thirsty?",
        optionA: "Juice",
        optionB: "Water",
        optionC: "Oil",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Who needs water to grow and live?",
        optionA: "Plants",
        optionB: "Stones",
        optionC: "Books",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "Who needs water to drink and bathe?",
        optionA: "Animals",
        optionB: "Tables",
        optionC: "Shoes",
        correctAnswer: "Animals",
      }),
      shuffleOptions({
        question: "What is essential for life?",
        optionA: "Water",
        optionB: "Air only",
        optionC: "Sand",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Which type of water is limited in quantity?",
        optionA: "Fresh water",
        optionB: "Sea water",
        optionC: "Salt water",
        correctAnswer: "Fresh water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We need water to ______.",
        optionA: "Play",
        optionB: "Drink",
        optionC: "Jump",
        correctAnswer: "Drink",
      }),
      shuffleOptions({
        question: "______ need water to make food.",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "People",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "We should not ______ water.",
        optionA: "Waste",
        optionB: "Use",
        optionC: "Drink",
        correctAnswer: "Waste",
      }),
      shuffleOptions({
        question: "Fresh water is very ______.",
        optionA: "Precious",
        optionB: "Dirty",
        optionC: "Bad",
        correctAnswer: "Precious",
      }),
      shuffleOptions({
        question: "We use water to ______ our surroundings.",
        optionA: "Clean",
        optionB: "Paint",
        optionC: "Decorate",
        correctAnswer: "Clean",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water is essential for life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants can live without water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Animals drink water to stay alive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should waste fresh water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fresh water is limited.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
