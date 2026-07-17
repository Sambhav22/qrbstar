export const chapter = "Chapter - 2: Uses of Plants";
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
        question: "Which of these is a cereal?",
        optionA: "Rice",
        optionB: "Neem",
        optionC: "Tulsi",
        correctAnswer: "Rice",
      }),
      shuffleOptions({
        question: "Which nut is obtained from plants?",
        optionA: "Almond",
        optionB: "Moong",
        optionC: "Potato",
        correctAnswer: "Almond",
      }),
      shuffleOptions({
        question: "Which flower is used to make perfumes?",
        optionA: "Rose",
        optionB: "Spinach",
        optionC: "Cabbage",
        correctAnswer: "Rose",
      }),
      shuffleOptions({
        question: "Which of these is an edible root?",
        optionA: "Turnip",
        optionB: "Mango",
        optionC: "Rice",
        correctAnswer: "Turnip",
      }),
      shuffleOptions({
        question: "Which of these gives us fibres?",
        optionA: "Jute",
        optionB: "Rose",
        optionC: "Cashew",
        correctAnswer: "Jute",
      }),
      shuffleOptions({
        question: "Which part of sugarcane gives sugar?",
        optionA: "Stem",
        optionB: "Root",
        optionC: "Leaf",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "Which plant gives tea?",
        optionA: "Tea plant",
        optionB: "Tulsi",
        optionC: "Bamboo",
        correctAnswer: "Tea plant",
      }),
      shuffleOptions({
        question: "Which cereal is ground to make flour?",
        optionA: "Wheat",
        optionB: "Mango",
        optionC: "Potato",
        correctAnswer: "Wheat",
      }),
      shuffleOptions({
        question: "Which oil is used for cooking and hair?",
        optionA: "Coconut",
        optionB: "Almond",
        optionC: "Cashew",
        correctAnswer: "Coconut",
      }),
      shuffleOptions({
        question: "Which plant grows up to 1 metre every day?",
        optionA: "Bamboo",
        optionB: "Neem",
        optionC: "Turmeric",
        correctAnswer: "Bamboo",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We eat ________ of plants like broccoli and cauliflower.",
        optionA: "Flowers",
        optionB: "Roots",
        optionC: "Stems",
        correctAnswer: "Flowers",
      }),
      shuffleOptions({
        question: "________ are known as pulses.",
        optionA: "Moong, Chickpea",
        optionB: "Mango, Apple",
        optionC: "Potato, Ginger",
        correctAnswer: "Moong, Chickpea",
      }),
      shuffleOptions({
        question: "Latex from rubber tree is used to make ________.",
        optionA: "Tyres",
        optionB: "Perfumes",
        optionC: "Spices",
        correctAnswer: "Tyres",
      }),
      shuffleOptions({
        question: "________ add flavour to our food.",
        optionA: "Spices",
        optionB: "Oils",
        optionC: "Fibres",
        correctAnswer: "Spices",
      }),
      shuffleOptions({
        question: "Tea is made from the ________ of the tea plant.",
        optionA: "Leaves",
        optionB: "Seeds",
        optionC: "Roots",
        correctAnswer: "Leaves",
      }),
      shuffleOptions({
        question: "Perfumes are made from flowers like ________.",
        optionA: "Jasmine",
        optionB: "Wheat",
        optionC: "Spinach",
        correctAnswer: "Jasmine",
      }),
      shuffleOptions({
        question: "Nuts like ________ and ________ are obtained from plants.",
        optionA: "Cashew, Walnut",
        optionB: "Potato, Carrot",
        optionC: "Wheat, Barley",
        correctAnswer: "Cashew, Walnut",
      }),
      shuffleOptions({
        question: "Oils are obtained from the seeds of plants like ________.",
        optionA: "Sunflower",
        optionB: "Mango",
        optionC: "Cabbage",
        correctAnswer: "Sunflower",
      }),
      shuffleOptions({
        question: "The bark of ________ tree gives quinine medicine.",
        optionA: "Cinchona",
        optionB: "Rose",
        optionC: "Neem",
        correctAnswer: "Cinchona",
      }),
      shuffleOptions({
        question: "________ fibre is used to make mats and ropes.",
        optionA: "Jute",
        optionB: "Cotton",
        optionC: "Silk",
        correctAnswer: "Jute",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants give us only food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Coffee is made from tea leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plants give us oxygen to breathe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jute is used to make ropes and bags.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rose flowers are used to make perfumes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sugar is obtained from neem leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cotton is used to make clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants make air fresh and clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rubber is obtained from bamboo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Almond and cashew are nuts obtained from plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
