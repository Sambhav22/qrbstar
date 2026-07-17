export const chapter = "Chapter - 9: Food";
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
        question: "Which is the main source of food for all living beings?",
        optionA: "Animals",
        optionB: "Plants",
        optionC: "Minerals",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "Which part of the plant gives us pepper and cardamom?",
        optionA: "Seed",
        optionB: "Leaf",
        optionC: "Root",
        correctAnswer: "Seed",
      }),
      shuffleOptions({
        question: "Which of the following is a cereal crop?",
        optionA: "Rice",
        optionB: "Lentil",
        optionC: "Turmeric",
        correctAnswer: "Rice",
      }),
      shuffleOptions({
        question: "Mustard and sunflower are examples of",
        optionA: "Vegetables",
        optionB: "Oilseeds",
        optionC: "Spices",
        correctAnswer: "Oilseeds",
      }),
      shuffleOptions({
        question: "Pulses such as kidney bean and black gram are rich in",
        optionA: "Proteins",
        optionB: "Carbohydrates",
        optionC: "Fats",
        correctAnswer: "Proteins",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Food provides us ______ to work and play.",
        optionA: "Rest",
        optionB: "Energy",
        optionC: "Sleep",
        correctAnswer: "Energy",
      }),
      shuffleOptions({
        question: "Pulses are dried ______ of certain plants.",
        optionA: "Leaves",
        optionB: "Seeds",
        optionC: "Flowers",
        correctAnswer: "Seeds",
      }),
      shuffleOptions({
        question: "Fruits like apple and mango are ______ fruits.",
        optionA: "Dry",
        optionB: "Fleshy",
        optionC: "Bitter",
        correctAnswer: "Fleshy",
      }),
      shuffleOptions({
        question: "Spices make our food ______ and tasty.",
        optionA: "Colourful",
        optionB: "Plain",
        optionC: "Sweet",
        correctAnswer: "Colourful",
      }),
      shuffleOptions({
        question: "Farmers add ______ to the soil to make it fertile.",
        optionA: "Manure",
        optionB: "Plastic",
        optionC: "Sand",
        correctAnswer: "Manure",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants are the main source of our food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Food comes only from animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fruits help reduce the risk of many diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spices make our food dull and tasteless.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Retailers buy food items from wholesalers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
