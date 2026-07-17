export const chapter = "Chapter - 16: Animals Around Us";
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
        question: "Which animal gives us milk?",
        optionA: "Tiger",
        optionB: "Goat",
        optionC: "Cow",
        correctAnswer: "Cow",
      }),
      shuffleOptions({
        question: "Which animal gives us eggs?",
        optionA: "Hen",
        optionB: "Sheep",
        optionC: "Cat",
        correctAnswer: "Hen",
      }),
      shuffleOptions({
        question: "Which animal gives us wool?",
        optionA: "Cow",
        optionB: "Sheep",
        optionC: "Dog",
        correctAnswer: "Sheep",
      }),
      shuffleOptions({
        question: "Which insect gives us honey?",
        optionA: "Ant",
        optionB: "Honeybee",
        optionC: "Butterfly",
        correctAnswer: "Honeybee",
      }),
      shuffleOptions({
        question: "Which animal is dangerous?",
        optionA: "Cow",
        optionB: "Goat",
        optionC: "Lion",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "Which animal can fly?",
        optionA: "Dog",
        optionB: "Parrot",
        optionC: "Horse",
        correctAnswer: "Parrot",
      }),
      shuffleOptions({
        question: "Which animal lives in water?",
        optionA: "Cat",
        optionB: "Fish",
        optionC: "Dog",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "Which animal has a long trunk?",
        optionA: "Horse",
        optionB: "Elephant",
        optionC: "Rabbit",
        correctAnswer: "Elephant",
      }),
      shuffleOptions({
        question: "Which animal is friendly?",
        optionA: "Dog",
        optionB: "Lion",
        optionC: "Fox",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which of these is a small animal?",
        optionA: "Rabbit",
        optionB: "Camel",
        optionC: "Elephant",
        correctAnswer: "Rabbit",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Animals need ______ to live.",
        optionA: "Food only",
        optionB: "Water only",
        optionC: "Food, water and air",
        correctAnswer: "Food, water and air",
      }),
      shuffleOptions({
        question: "______ give us milk.",
        optionA: "Dogs",
        optionB: "Cows, goats and buffaloes",
        optionC: "Hens",
        correctAnswer: "Cows, goats and buffaloes",
      }),
      shuffleOptions({
        question: "______ give us eggs.",
        optionA: "Hens",
        optionB: "Fish",
        optionC: "Sheep",
        correctAnswer: "Hens",
      }),
      shuffleOptions({
        question: "______ give us wool.",
        optionA: "Sheep",
        optionB: "Cats",
        optionC: "Goats",
        correctAnswer: "Sheep",
      }),
      shuffleOptions({
        question: "______ give us honey.",
        optionA: "Hens",
        optionB: "Honeybees",
        optionC: "Cows",
        correctAnswer: "Honeybees",
      }),
      shuffleOptions({
        question: "______ are living things.",
        optionA: "Toys",
        optionB: "Animals",
        optionC: "Tables",
        correctAnswer: "Animals",
      }),
      shuffleOptions({
        question: "______ is a friendly animal.",
        optionA: "Tiger",
        optionB: "Dog",
        optionC: "Lion",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "______ is a dangerous animal.",
        optionA: "Cow",
        optionB: "Tiger",
        optionC: "Goat",
        correctAnswer: "Tiger",
      }),
      shuffleOptions({
        question: "______ can fly in the sky.",
        optionA: "Sparrow",
        optionB: "Cow",
        optionC: "Goat",
        correctAnswer: "Sparrow",
      }),
      shuffleOptions({
        question: "______ lives in water.",
        optionA: "Fish",
        optionB: "Cat",
        optionC: "Rabbit",
        correctAnswer: "Fish",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Animals are living things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Animals do not need air to live.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cows give us milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hens give us wool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lion is a dangerous animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fish lives in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Honeybees give us honey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dog can fly in the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sheep give us wool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Animals need food, water and air to live.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
