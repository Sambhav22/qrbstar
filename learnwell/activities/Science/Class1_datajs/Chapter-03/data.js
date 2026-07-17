export const chapter = "Chapter - 3: Parts of a Plant";
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
        question: "Which part of the plant stores seeds?",
        optionA: "Flower",
        optionB: "Fruit",
        optionC: "Root",
        correctAnswer: "Fruit",
      }),
      shuffleOptions({
        question: "Which part of the plant is colourful and smells nice?",
        optionA: "Root",
        optionB: "Flower",
        optionC: "Seed",
        correctAnswer: "Flower",
      }),
      shuffleOptions({
        question: "Which part fixes the plant in the soil?",
        optionA: "Stem",
        optionB: "Root",
        optionC: "Fruit",
        correctAnswer: "Root",
      }),
      shuffleOptions({
        question: "Which part develops from a flower?",
        optionA: "Fruit",
        optionB: "Seed",
        optionC: "Stem",
        correctAnswer: "Fruit",
      }),
      shuffleOptions({
        question: "What is the baby plant inside a seed called?",
        optionA: "Stem",
        optionB: "Sapling",
        optionC: "Fruit",
        correctAnswer: "Sapling",
      }),
      shuffleOptions({
        question: "Which part helps in carrying food and water?",
        optionA: "Stem",
        optionB: "Leaf",
        optionC: "Flower",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "A new plant grows from a:",
        optionA: "Seed",
        optionB: "Flower",
        optionC: "Leaf",
        correctAnswer: "Seed",
      }),
      shuffleOptions({
        question: "Which part helps in making food?",
        optionA: "Flower",
        optionB: "Root",
        optionC: "Leaf",
        correctAnswer: "Leaf",
      }),
      shuffleOptions({
        question: "Which part gives rise to branches?",
        optionA: "Stem",
        optionB: "Fruit",
        optionC: "Root",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "Which part of the plant is called “baby plant”?",
        optionA: "Seedling",
        optionB: "Fruit",
        optionC: "Stem",
        correctAnswer: "Seedling",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ______ has a baby plant inside it.",
        optionA: "Stem",
        optionB: "Seed",
        optionC: "Root",
        correctAnswer: "Seed",
      }),
      shuffleOptions({
        question: "______ bears branches and leaves.",
        optionA: "Stem",
        optionB: "Root",
        optionC: "Flower",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "Fruits grow from ______.",
        optionA: "Leaves",
        optionB: "Flowers",
        optionC: "Roots",
        correctAnswer: "Flowers",
      }),
      shuffleOptions({
        question: "______ absorbs water and nutrients.",
        optionA: "Root",
        optionB: "Stem",
        optionC: "Leaf",
        correctAnswer: "Root",
      }),
      shuffleOptions({
        question: "Leaves are generally ______ in colour.",
        optionA: "Yellow",
        optionB: "Green",
        optionC: "Red",
        correctAnswer: "Green",
      }),
      shuffleOptions({
        question: "A ______ is also called a seedling.",
        optionA: "Sapling",
        optionB: "Root",
        optionC: "Fruit",
        correctAnswer: "Sapling",
      }),
      shuffleOptions({
        question: "______ is known as the kitchen of the plant.",
        optionA: "Stem",
        optionB: "Leaf",
        optionC: "Root",
        correctAnswer: "Leaf",
      }),
      shuffleOptions({
        question: "Flowers change into ______.",
        optionA: "Fruits",
        optionB: "Roots",
        optionC: "Seeds",
        correctAnswer: "Fruits",
      }),
      shuffleOptions({
        question: "Plants need air, water and ______ to grow.",
        optionA: "Sunlight",
        optionB: "Flower",
        optionC: "Soil",
        correctAnswer: "Sunlight",
      }),
      shuffleOptions({
        question: "______ fruit contains many seeds.",
        optionA: "Papaya",
        optionB: "Mango",
        optionC: "Plum",
        correctAnswer: "Papaya",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Stem absorbs water from soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Roots lie under the soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Flowers are always green in colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mango has one seed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Watermelon has many seeds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Leaves make food for the plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Stem carries food and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fruits grow from roots.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Seeds germinate into new plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sapling is the baby plant inside a seed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
