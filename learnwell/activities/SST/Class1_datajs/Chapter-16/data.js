export const chapter = "Chapter - 16: The Earth and The Sky";
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
        question: "Which part of the earth has no water?",
        optionA: "Land",
        optionB: "Sea",
        optionC: "Cloud",
        correctAnswer: "Land",
      }),
      shuffleOptions({
        question: "Which water body is very large in size?",
        optionA: "Pond",
        optionB: "Ocean",
        optionC: "River",
        correctAnswer: "Ocean",
      }),
      shuffleOptions({
        question: "What do we see in the sky when it becomes dark?",
        optionA: "Stars",
        optionB: "Hills",
        optionC: "Water bodies",
        correctAnswer: "Stars",
      }),
      shuffleOptions({
        question: "What do clouds sometimes look like?",
        optionA: "Silver balls",
        optionB: "Cotton",
        optionC: "Rocks",
        correctAnswer: "Cotton",
      }),
      shuffleOptions({
        question: "Which landform is very high?",
        optionA: "Valley",
        optionB: "Mountain",
        optionC: "Pond",
        correctAnswer: "Mountain",
      }),
      shuffleOptions({
        question: "What do we see in the sky during the daytime?",
        optionA: "Moon",
        optionB: "Stars",
        optionC: "Sun",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "Which landform is lower than a mountain?",
        optionA: "Hill",
        optionB: "Ocean",
        optionC: "Waterfall",
        correctAnswer: "Hill",
      }),
      shuffleOptions({
        question: "What falls from a waterfall?",
        optionA: "Sand",
        optionB: "Water",
        optionC: "Smoke",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Which one shows the earth in a small model form?",
        optionA: "Map",
        optionB: "Globe",
        optionC: "Stone",
        correctAnswer: "Globe",
      }),
      shuffleOptions({
        question: "What does the sky look like during the day?",
        optionA: "Red",
        optionB: "Blue",
        optionC: "Green",
        correctAnswer: "Blue",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ______ is a small body of water.",
        optionA: "Pond",
        optionB: "Ocean",
        optionC: "Hill",
        correctAnswer: "Pond",
      }),
      shuffleOptions({
        question: "The moon looks like a ______ ball.",
        optionA: "Golden",
        optionB: "Silver",
        optionC: "Blue",
        correctAnswer: "Silver",
      }),
      shuffleOptions({
        question: "A valley lies between two ______.",
        optionA: "Rivers",
        optionB: "Mountains",
        optionC: "Lakes",
        correctAnswer: "Mountains",
      }),
      shuffleOptions({
        question: "The sky becomes ______ at night.",
        optionA: "Bright",
        optionB: "Dark",
        optionC: "White",
        correctAnswer: "Dark",
      }),
      shuffleOptions({
        question: "Clouds can be white, grey or ______.",
        optionA: "Brown",
        optionB: "Black",
        optionC: "Purple",
        correctAnswer: "Black",
      }),
      shuffleOptions({
        question: "Water in a river keeps ______.",
        optionA: "Flying",
        optionB: "Flowing",
        optionC: "Burning",
        correctAnswer: "Flowing",
      }),
      shuffleOptions({
        question: "A ______ has flat land at the top.",
        optionA: "Plateau",
        optionB: "Lake",
        optionC: "Sea",
        correctAnswer: "Plateau",
      }),
      shuffleOptions({
        question: "The moon shines with the light of the ______.",
        optionA: "Star",
        optionB: "Sun",
        optionC: "Planet",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "A plain is a ______ landform.",
        optionA: "Flat",
        optionB: "Sandy",
        optionC: "Deep",
        correctAnswer: "Flat",
      }),
      shuffleOptions({
        question: "A waterfall has ______ water falling down.",
        optionA: "Still",
        optionB: "Clean",
        optionC: "Flowing",
        correctAnswer: "Flowing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "desert is a dry and sandy land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hills are higher than mountains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Stars twinkle in the sky at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A pond is larger than an ocean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sky appears blue in the daytime.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The moon changes its shape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Clouds shine with their own light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A lake is a large water body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sun is a natural source of heat and light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The earth has both land and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
