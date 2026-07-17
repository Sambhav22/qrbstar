export const chapter = "Chapter - 4: Food From Plants";
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
        question: "Which part of the plant is Turnip?",
        optionA: "Stem",
        optionB: "Root",
        optionC: "Fruit",
        correctAnswer: "Root",
      }),
      shuffleOptions({
        question: "Which part of the plant is Ginger?",
        optionA: "Leaf",
        optionB: "Stem",
        optionC: "Flower",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "Which part of the plant is Broccoli?",
        optionA: "Root",
        optionB: "Leaf",
        optionC: "Flower",
        correctAnswer: "Flower",
      }),
      shuffleOptions({
        question: "Brinjal is actually which part of the plant?",
        optionA: "Fruit",
        optionB: "Root",
        optionC: "Stem",
        correctAnswer: "Fruit",
      }),
      shuffleOptions({
        question: "Rice belongs to which group?",
        optionA: "Pulses",
        optionB: "Cereals",
        optionC: "Fruits",
        correctAnswer: "Cereals",
      }),
      shuffleOptions({
        question: "Beans belong to which group?",
        optionA: "Pulses",
        optionB: "Cereals",
        optionC: "Roots",
        correctAnswer: "Pulses",
      }),
      shuffleOptions({
        question: "Which of the following is a fruit?",
        optionA: "Apple",
        optionB: "Cereal",
        optionC: "Stem",
        correctAnswer: "Apple",
      }),
      shuffleOptions({
        question: "Which part of the plant is Cauliflower?",
        optionA: "Root",
        optionB: "Flower",
        optionC: "Stem",
        correctAnswer: "Flower",
      }),
      shuffleOptions({
        question: "Peas belong to which group?",
        optionA: "Cereals",
        optionB: "Pulses",
        optionC: "Fruits",
        correctAnswer: "Pulses",
      }),
      shuffleOptions({
        question: "Which drink do we get from plants?",
        optionA: "Tea",
        optionB: "Salt",
        optionC: "Oil",
        correctAnswer: "Tea",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Carrot is a ___ .",
        optionA: "Root",
        optionB: "Fruit",
        optionC: "Stem",
        correctAnswer: "Root",
      }),
      shuffleOptions({
        question: "Potato is a ___ .",
        optionA: "Root",
        optionB: "Stem",
        optionC: "Leaf",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "Cabbage is a ___ .",
        optionA: "Flower",
        optionB: "Leaf",
        optionC: "Root",
        correctAnswer: "Leaf",
      }),
      shuffleOptions({
        question: "Banana is a ___ .",
        optionA: "Fruit",
        optionB: "Pulse",
        optionC: "Spice",
        correctAnswer: "Fruit",
      }),
      shuffleOptions({
        question: "Wheat is a ___ .",
        optionA: "Cereal",
        optionB: "Fruit",
        optionC: "Pulse",
        correctAnswer: "Cereal",
      }),
      shuffleOptions({
        question: "Gram is a ___ .",
        optionA: "Cereal",
        optionB: "Pulse",
        optionC: "Fruit",
        correctAnswer: "Pulse",
      }),
      shuffleOptions({
        question: "Cloves are ___ .",
        optionA: "Cereals",
        optionB: "Spices",
        optionC: "Pulses",
        correctAnswer: "Spices",
      }),
      shuffleOptions({
        question: "Tomato is a ___ .",
        optionA: "Fruit",
        optionB: "Root",
        optionC: "Stem",
        correctAnswer: "Fruit",
      }),
      shuffleOptions({
        question: "Mango is a ___ .",
        optionA: "Root",
        optionB: "Fruit",
        optionC: "Stem",
        correctAnswer: "Fruit",
      }),
      shuffleOptions({
        question: "Sugar is obtained from ___ .",
        optionA: "Rice",
        optionB: "Sugarcane",
        optionC: "Pea",
        correctAnswer: "Sugarcane",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Carrot is a root.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Potato is a stem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Broccoli is a leaf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Brinjal is a fruit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wheat is a pulse.",
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
        question: "Beans are cereals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cabbage is a leaf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Coffee comes from animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Spices give good taste and smell to food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
