export const chapter = "Chapter - 9: Air Around Us";
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
        question: "What do we call moving air?",
        optionA: "Force",
        optionB: "Wind",
        optionC: "Smoke",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "What is the gentle movement of air called?",
        optionA: "Storm",
        optionB: "Breeze",
        optionC: "Rain",
        correctAnswer: "Breeze",
      }),
      shuffleOptions({
        question: "Which of these can be uprooted by strong winds?",
        optionA: "Trees",
        optionB: "Rocks",
        optionC: "Mountains",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "Which instrument is used to measure the speed of wind?",
        optionA: "Wind vane",
        optionB: "Anemometer",
        optionC: "Thermometer",
        correctAnswer: "Anemometer",
      }),
      shuffleOptions({
        question: "What does a weathercock show?",
        optionA: "Direction of wind",
        optionB: "Speed of wind",
        optionC: "Weight of air",
        correctAnswer: "Direction of wind",
      }),
      shuffleOptions({
        question: "Which of these helps aeroplanes to fly?",
        optionA: "Wind",
        optionB: "Sun",
        optionC: "Water",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "Which of these makes the air impure?",
        optionA: "Smoke",
        optionB: "Toys",
        optionC: "Books",
        correctAnswer: "Smoke",
      }),
      shuffleOptions({
        question: "A storm usually comes with which of the following?",
        optionA: "Sunshine",
        optionB: "Thunder and rain",
        optionC: "Moonlight",
        correctAnswer: "Thunder and rain",
      }),
      shuffleOptions({
        question: "Which of these can wind blow away?",
        optionA: "Balloons",
        optionB: "Stones",
        optionC: "Iron rods",
        correctAnswer: "Balloons",
      }),
      shuffleOptions({
        question: "Which of these rises with the help of wind?",
        optionA: "Hot air balloon",
        optionB: "Train",
        optionC: "Car",
        correctAnswer: "Hot air balloon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "All living beings need ______ to breathe.",
        optionA: "Water",
        optionB: "Air",
        optionC: "Food",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "Wind helps ______ to move on water.",
        optionA: "Yacht",
        optionB: "Bus",
        optionC: "Car",
        correctAnswer: "Yacht",
      }),
      shuffleOptions({
        question: "Wind helps in drying ______ faster.",
        optionA: "Clothes",
        optionB: "Shoes",
        optionC: "Toys",
        correctAnswer: "Clothes",
      }),
      shuffleOptions({
        question: "Smoke and dust make the air ______.",
        optionA: "Pure",
        optionB: "Impure",
        optionC: "Fresh",
        correctAnswer: "Impure",
      }),
      shuffleOptions({
        question: "Strong wind can ______ trees.",
        optionA: "Uproot",
        optionB: "Paint",
        optionC: "Break toys",
        correctAnswer: "Uproot",
      }),
      shuffleOptions({
        question: "Breathing ______ air is harmful.",
        optionA: "Impure",
        optionB: "Fresh",
        optionC: "Clean",
        correctAnswer: "Impure",
      }),
      shuffleOptions({
        question: "We should cover our mouth with a ______ while sneezing.",
        optionA: "Pillow",
        optionB: "Handkerchief",
        optionC: "Book",
        correctAnswer: "Handkerchief",
      }),
      shuffleOptions({
        question: "Plants make the air ______ and ______.",
        optionA: "Fresh and clean",
        optionB: "Dirty and hot",
        optionC: "Heavy and dark",
        correctAnswer: "Fresh and clean",
      }),
      shuffleOptions({
        question: "A breeze is a ______ wind.",
        optionA: "Gentle",
        optionB: "Strong",
        optionC: "Dangerous",
        correctAnswer: "Gentle",
      }),
      shuffleOptions({
        question: "Moving air has ______ in it.",
        optionA: "Force",
        optionB: "No use",
        optionC: "No effect",
        correctAnswer: "Force",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air is all around us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can smell air easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A storm is gentle air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Strong wind can damage kutcha houses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants make the air impure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Anemometer is used to measure wind speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Breeze is a strong wind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air helps kites to fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Smoke and dust make the air fresh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should keep our surroundings clean to keep the air pure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
