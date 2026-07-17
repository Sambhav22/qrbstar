export const chapter = "Chapter - 1: Living and Non-Living Things";
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
        question: "Which of these can grow?",
        optionA: "Plant",
        optionB: "Chair",
        optionC: "Bag",
        correctAnswer: "Plant",
      }),
      shuffleOptions({
        question: "Which of these is a man-made non-living thing?",
        optionA: "Train",
        optionB: "Tree",
        optionC: "Rock",
        correctAnswer: "Train",
      }),
      shuffleOptions({
        question: "Which of these moves on its own?",
        optionA: "Fish",
        optionB: "Table",
        optionC: "Book",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "Which of these needs food?",
        optionA: "Fish",
        optionB: "Stone",
        optionC: "Bag",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "Which of these can feel?",
        optionA: "Girl",
        optionB: "Chair",
        optionC: "Rock",
        correctAnswer: "Girl",
      }),
      shuffleOptions({
        question: "Which of these is a natural non-living thing?",
        optionA: "Water",
        optionB: "School",
        optionC: "Bag",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Which of these can reproduce?",
        optionA: "Plant",
        optionB: "Chair",
        optionC: "Book",
        correctAnswer: "Plant",
      }),
      shuffleOptions({
        question: "Which of these shines in the sky?",
        optionA: "Star",
        optionB: "Bag",
        optionC: "Table",
        correctAnswer: "Star",
      }),
      shuffleOptions({
        question: "Which of these is a living thing?",
        optionA: "Boy",
        optionB: "Rock",
        optionC: "Book",
        correctAnswer: "Boy",
      }),
      shuffleOptions({
        question: "Which of these cannot move on its own?",
        optionA: "Chair",
        optionB: "Boy",
        optionC: "Plant",
        correctAnswer: "Chair",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ______ is a living thing.",
        optionA: "boy",
        optionB: "chair",
        optionC: "book",
        correctAnswer: "boy",
      }),
      shuffleOptions({
        question: "A ______ is a non-living thing.",
        optionA: "stone",
        optionB: "girl",
        optionC: "plant",
        correctAnswer: "stone",
      }),
      shuffleOptions({
        question: "A ______ is a natural non-living thing.",
        optionA: "rock",
        optionB: "train",
        optionC: "house",
        correctAnswer: "rock",
      }),
      shuffleOptions({
        question: "A ______ is a man-made non-living thing.",
        optionA: "house",
        optionB: "moon",
        optionC: "sun",
        correctAnswer: "house",
      }),
      shuffleOptions({
        question: "A ______ can breathe.",
        optionA: "boy",
        optionB: "chair",
        optionC: "book",
        correctAnswer: "boy",
      }),
      shuffleOptions({
        question: "A ______ cannot feel.",
        optionA: "bag",
        optionB: "girl",
        optionC: "plant",
        correctAnswer: "bag",
      }),
      shuffleOptions({
        question: "A ______ needs food.",
        optionA: "plant",
        optionB: "stone",
        optionC: "table",
        correctAnswer: "plant",
      }),
      shuffleOptions({
        question: "A ______ shines in the sky at night.",
        optionA: "moon",
        optionB: "chair",
        optionC: "bag",
        correctAnswer: "moon",
      }),
      shuffleOptions({
        question: "A ______ can reproduce.",
        optionA: "tree",
        optionB: "rock",
        optionC: "train",
        correctAnswer: "tree",
      }),
      shuffleOptions({
        question: "A ______ does not grow.",
        optionA: "chair",
        optionB: "bag",
        optionC: "book",
        correctAnswer: "chair",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Non-living things can move on their own.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Living things can grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A chair is a living thing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon is a natural non-living thing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Non-living things do not need food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Living things can reproduce.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A book can feel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Stars are non-living things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A train is a man-made non-living thing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun is a living thing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
