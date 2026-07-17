export const chapter = "Chapter - 11: Water and Its Sources";
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
        question: "Which place collects rainwater naturally?",
        optionA: "Rivers",
        optionB: "Roads",
        optionC: "Shops",
        correctAnswer: "Rivers",
      }),
      shuffleOptions({
        question: "Which source gives us underground water?",
        optionA: "Hand pump",
        optionB: "Fan",
        optionC: "Book",
        correctAnswer: "Hand pump",
      }),
      shuffleOptions({
        question: "Which animal lives in water?",
        optionA: "Cat",
        optionB: "Fish",
        optionC: "Tiger",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "Which thing brings clean water to our homes?",
        optionA: "Pipes",
        optionB: "Pillows",
        optionC: "Trees",
        correctAnswer: "Pipes",
      }),
      shuffleOptions({
        question: "Which source is very large and full of salty water?",
        optionA: "Sea",
        optionB: "Garden",
        optionC: "Bucket",
        correctAnswer: "Sea",
      }),
      shuffleOptions({
        question: "Which activity needs water?",
        optionA: "Cooking",
        optionB: "Sleeping",
        optionC: "Reading",
        correctAnswer: "Cooking",
      }),
      shuffleOptions({
        question: "What helps plants make food?",
        optionA: "Water, air and sunlight",
        optionB: "Chairs",
        optionC: "Rocks",
        correctAnswer: "Water, air and sunlight",
      }),
      shuffleOptions({
        question: "What happens when rainwater falls from a great height?",
        optionA: "Waterfall",
        optionB: "Playground",
        optionC: "Blackboard",
        correctAnswer: "Waterfall",
      }),
      shuffleOptions({
        question: "Which water is cleaned before it reaches our homes?",
        optionA: "River water",
        optionB: "Paint water",
        optionC: "Soap water",
        correctAnswer: "River water",
      }),
      shuffleOptions({
        question: "Why should we close the tap after use?",
        optionA: "To save water",
        optionB: "To make noise",
        optionC: "To waste time",
        correctAnswer: "To save water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rain is the main source of ________.",
        optionA: "Milk",
        optionB: "Water",
        optionC: "Air",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Plants use water to make their ________.",
        optionA: "Food",
        optionB: "Shoes",
        optionC: "Toys",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "We get water in our homes through ________.",
        optionA: "Windows",
        optionB: "Taps",
        optionC: "Books",
        correctAnswer: "Taps",
      }),
      shuffleOptions({
        question: "Animals need water to drink and ________.",
        optionA: "Fly",
        optionB: "Bathe",
        optionC: "Draw",
        correctAnswer: "Bathe",
      }),
      shuffleOptions({
        question: "Underground water is taken out using a ________.",
        optionA: "Hand pump",
        optionB: "Torch",
        optionC: "Bag",
        correctAnswer: "Hand pump",
      }),
      shuffleOptions({
        question: "A river falling from a height is called a ________.",
        optionA: "Road",
        optionB: "Waterfall",
        optionC: "Tunnel",
        correctAnswer: "Waterfall",
      }),
      shuffleOptions({
        question: "We should not dump wastes into ________.",
        optionA: "Rivers",
        optionB: "Boxes",
        optionC: "Bags",
        correctAnswer: "Rivers",
      }),
      shuffleOptions({
        question: "Dirty water makes us ________.",
        optionA: "Laugh",
        optionB: "Ill",
        optionC: "Jump",
        correctAnswer: "Ill",
      }),
      shuffleOptions({
        question: "Water from rivers is ________ before reaching homes.",
        optionA: "Cleaned",
        optionB: "Damaged",
        optionC: "Hidden",
        correctAnswer: "Cleaned",
      }),
      shuffleOptions({
        question: "Boiling helps to kill ________ in water.",
        optionA: "Germs",
        optionB: "Colours",
        optionC: "Smells",
        correctAnswer: "Germs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Taps bring water into our homes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants do not need water to grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Some rainwater goes inside the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fish can live without water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should keep water bodies clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Underground water comes from lakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dirty water can make us sick.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water is a valuable natural resource.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seas and oceans are man-made sources of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plants use water, air and sunlight to make food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
