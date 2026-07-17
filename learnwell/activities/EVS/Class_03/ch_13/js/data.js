export const chapter = "Chapter - 13: Mapping My Neighbourhood";
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
        question: "Which place did Radhika pass on her right while going to school?",
        optionA: "Bank",
        optionB: "Music library",
        optionC: "Post office",
        correctAnswer: "Music library",
      }),
      shuffleOptions({
        question: "The sun rises in which direction?",
        optionA: "East",
        optionB: "West",
        optionC: "South",
        correctAnswer: "East",
      }),
      shuffleOptions({
        question: "What is the opposite direction of North?",
        optionA: "South",
        optionB: "East",
        optionC: "West",
        correctAnswer: "South",
      }),
      shuffleOptions({
        question: "What is the area around our house called?",
        optionA: "Neighbourhood",
        optionB: "Town",
        optionC: "Market",
        correctAnswer: "Neighbourhood",
      }),
      shuffleOptions({
        question: "What helps us to find different places in an area?",
        optionA: "Map",
        optionB: "Chart",
        optionC: "Globe",
        correctAnswer: "Map",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun rises in the ______.",
        optionA: "West",
        optionB: "East",
        optionC: "North",
        correctAnswer: "East",
      }),
      shuffleOptions({
        question: "A ______ helps us locate different places.",
        optionA: "Chart",
        optionB: "Map",
        optionC: "Diagram",
        correctAnswer: "Map",
      }),
      shuffleOptions({
        question: "There are ______ main directions.",
        optionA: "Five",
        optionB: "Four",
        optionC: "Three",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "The opposite of North is ______.",
        optionA: "West",
        optionB: "South",
        optionC: "East",
        correctAnswer: "South",
      }),
      shuffleOptions({
        question: "Radhika saw the community hall on her ______ side.",
        optionA: "Left",
        optionB: "Right",
        optionC: "Front",
        correctAnswer: "Left",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun rises in the East.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A map shows the location of different places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun sets in the North.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Radhika passed the bank on her right side.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The word “location” means a place or position.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
