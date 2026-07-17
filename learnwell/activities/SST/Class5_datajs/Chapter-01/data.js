export const chapter = "Chapter - 1: Our Earth : Continents and Oceans";
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
        question: "Which continent has the Amazon rainforests?",
        optionA: "Africa",
        optionB: "South America",
        optionC: "Australia",
        correctAnswer: "South America",
      }),
      shuffleOptions({
        question: "Which ocean contains the Mariana Trench?",
        optionA: "Pacific Ocean",
        optionB: "Atlantic Ocean",
        optionC: "Arctic Ocean",
        correctAnswer: "Pacific Ocean",
      }),
      shuffleOptions({
        question: "Which continent has countries with some of the world’s best harbours?",
        optionA: "Europe",
        optionB: "Asia",
        optionC: "Africa",
        correctAnswer: "Europe",
      }),
      shuffleOptions({
        question: "Which continent is completely covered with ice?",
        optionA: "Australia",
        optionB: "Antarctica",
        optionC: "North America",
        correctAnswer: "Antarctica",
      }),
      shuffleOptions({
        question: "Which ocean is mainly used for trade by thousands of ships every day?",
        optionA: "Indian Ocean",
        optionB: "Atlantic Ocean",
        optionC: "Southern Ocean",
        correctAnswer: "Atlantic Ocean",
      }),
      shuffleOptions({
        question: "Which continent is both a country and an island?",
        optionA: "Asia",
        optionB: "Antarctica",
        optionC: "Australia",
        correctAnswer: "Australia",
      }),
      shuffleOptions({
        question: "Which river is found in Africa?",
        optionA: "Amazon",
        optionB: "Nile",
        optionC: "Ganges",
        correctAnswer: "Nile",
      }),
      shuffleOptions({
        question: "Which region remains frozen throughout the year?",
        optionA: "Southern Ocean",
        optionB: "Arctic Ocean",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
      shuffleOptions({
        question: "Which continent is connected to South America by the Isthmus of Panama?",
        optionA: "North America",
        optionB: "Europe",
        optionC: "Asia",
        correctAnswer: "North America",
      }),
      shuffleOptions({
        question: "Which continent is the second largest in the world?",
        optionA: "Africa",
        optionB: "South America",
        optionC: "Europe",
        correctAnswer: "Africa",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The __________ rainforests are the largest and densest in the world.",
        optionA: "Congo",
        optionB: "Amazon",
        optionC: "Gobi",
        correctAnswer: "Amazon",
      }),
      shuffleOptions({
        question: "The __________ Ocean is known as the warmest ocean.",
        optionA: "Indian Ocean",
        optionB: "Atlantic Ocean",
        optionC: "Southern Ocean",
        correctAnswer: "Indian Ocean",
      }),
      shuffleOptions({
        question: "The continent of __________ lies next to Asia.",
        optionA: "South America",
        optionB: "Europe",
        optionC: "Africa",
        correctAnswer: "Europe",
      }),
      shuffleOptions({
        question: "The __________ Sea lies to the north of Africa.",
        optionA: "Mediterranean Sea",
        optionB: "Arabian Sea",
        optionC: "Red Sea",
        correctAnswer: "Mediterranean Sea",
      }),
      shuffleOptions({
        question: "The __________ is an important tourist attraction in Australia.",
        optionA: "Great Wall",
        optionB: "Great Barrier Reef",
        optionC: "Coral Route",
        correctAnswer: "Great Barrier Reef",
      }),
      shuffleOptions({
        question: "The __________ River is the second longest river in the world.",
        optionA: "Nile",
        optionB: "Danube",
        optionC: "Amazon",
        correctAnswer: "Amazon",
      }),
      shuffleOptions({
        question: "The __________ Ocean surrounds Antarctica.",
        optionA: "Southern Ocean",
        optionB: "Pacific Ocean",
        optionC: "Arctic Ocean",
        correctAnswer: "Southern Ocean",
      }),
      shuffleOptions({
        question: "Only animals like penguins and whales can survive in __________.",
        optionA: "Australia",
        optionB: "Antarctica",
        optionC: "Europe",
        correctAnswer: "Antarctica",
      }),
      shuffleOptions({
        question: "The Isthmus of __________ links North and South America.",
        optionA: "Suez",
        optionB: "Panama",
        optionC: "Bering",
        correctAnswer: "Panama",
      }),
      shuffleOptions({
        question: "The continent of __________ is home to rich wildlife and large deserts.",
        optionA: "Africa",
        optionB: "Europe",
        optionC: "Australia",
        correctAnswer: "Africa",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Arctic Ocean is the smallest ocean on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Asia is the largest continent in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Atlantic Ocean is the deepest ocean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Amazon River is located in South America.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Europe has the densest forests in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Pacific Ocean is so large that all continents could fit into it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Australia contains more than one country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Southern Ocean is formed by the merging of the southern parts of three oceans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Only birds like penguins live in Antarctica; no other animals exist there.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "North America was discovered by Christopher Columbus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
