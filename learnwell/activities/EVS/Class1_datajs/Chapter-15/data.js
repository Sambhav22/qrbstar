export const chapter = "Chapter - 15: Plants Around Us";
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
        question: "What do we get from rose plants?",
        optionA: "Fruits",
        optionB: "Flowers",
        optionC: "Seeds",
        correctAnswer: "Flowers",
      }),
      shuffleOptions({
        question: "Which of these is a tree?",
        optionA: "Neem",
        optionB: "Mint",
        optionC: "Rose",
        correctAnswer: "Neem",
      }),
      shuffleOptions({
        question: "Which of these is a herb?",
        optionA: "Tulsi",
        optionB: "Mango",
        optionC: "Jasmine",
        correctAnswer: "Tulsi",
      }),
      shuffleOptions({
        question: "Plants that give fruits like mango and guava are —",
        optionA: "Trees",
        optionB: "Herbs",
        optionC: "Shrubs",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "Plants make our surroundings —",
        optionA: "Green and fresh",
        optionB: "Dusty",
        optionC: "Dry",
        correctAnswer: "Green and fresh",
      }),
      shuffleOptions({
        question: "Which part of a plant is its main body?",
        optionA: "Stem",
        optionB: "Leaf",
        optionC: "Root",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "Which of these grows close to the ground?",
        optionA: "Herbs",
        optionB: "Trees",
        optionC: "Shrubs",
        correctAnswer: "Herbs",
      }),
      shuffleOptions({
        question: "Where can we see many plants together?",
        optionA: "Garden",
        optionB: "Kitchen",
        optionC: "Bag",
        correctAnswer: "Garden",
      }),
      shuffleOptions({
        question: "Plants need which of these to grow?",
        optionA: "Air, water, sunlight and soil",
        optionB: "Fire and smoke",
        optionC: "Only air",
        correctAnswer: "Air, water, sunlight and soil",
      }),
      shuffleOptions({
        question: "Which of these is not something we get from plants?",
        optionA: "Wool",
        optionB: "Vegetable",
        optionC: "Flower",
        correctAnswer: "Wool",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We get ______ from plants.",
        optionA: "Fruits and vegetables",
        optionB: "Plastic",
        optionC: "Stones",
        correctAnswer: "Fruits and vegetables",
      }),
      shuffleOptions({
        question: "Tall and big plants are called ______.",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Trees",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "Medium-sized plants with woody stems are ______.",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Trees",
        correctAnswer: "Shrubs",
      }),
      shuffleOptions({
        question: "Mint and Tulsi are ______.",
        optionA: "Herbs",
        optionB: "Shrubs",
        optionC: "Trees",
        correctAnswer: "Herbs",
      }),
      shuffleOptions({
        question: "Plants make the air ______.",
        optionA: "Dirty",
        optionB: "Clean",
        optionC: "Hot",
        correctAnswer: "Clean",
      }),
      shuffleOptions({
        question: "______ give us shade and wood.",
        optionA: "Trees",
        optionB: "Herbs",
        optionC: "Flowers",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "Plants need ______ to grow.",
        optionA: "Air, water, sunlight and soil",
        optionB: "Sand",
        optionC: "Fire",
        correctAnswer: "Air, water, sunlight and soil",
      }),
      shuffleOptions({
        question: "Flowers grow from ______.",
        optionA: "Buds",
        optionB: "Leaves",
        optionC: "Soil",
        correctAnswer: "Buds",
      }),
      shuffleOptions({
        question: "We should not ______ flowers unnecessarily.",
        optionA: "Pluck",
        optionB: "Water",
        optionC: "Smell",
        correctAnswer: "Pluck",
      }),
      shuffleOptions({
        question: "Trees, shrubs and herbs are types of ______.",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "Insects",
        correctAnswer: "Plants",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mint is a tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mango is a fruit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants give us air to breathe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Herbs are very tall plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hibiscus is a type of shrub.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We get food from animals only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trees make our world green.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants do not need sunlight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shrubs are medium-sized plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should take care of plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
