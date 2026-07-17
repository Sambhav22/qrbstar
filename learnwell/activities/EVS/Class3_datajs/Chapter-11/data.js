export const chapter = "Chapter - 11: Methods of Cooking";
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
        question: "Which of the following can be eaten raw?",
        optionA: "Rice",
        optionB: "Brinjal",
        optionC: "Tomato",
        correctAnswer: "Tomato",
      }),
      shuffleOptions({
        question: "Which method of cooking uses steam?",
        optionA: "Boiling",
        optionB: "Steaming",
        optionC: "Roasting",
        correctAnswer: "Steaming",
      }),
      shuffleOptions({
        question: "Which metal was commonly used in olden cooking vessels?",
        optionA: "Silver",
        optionB: "Copper",
        optionC: "Plastic",
        correctAnswer: "Copper",
      }),
      shuffleOptions({
        question: "Which fuel is commonly used in stoves today?",
        optionA: "LPG",
        optionB: "Kerosene",
        optionC: "Petrol",
        correctAnswer: "LPG",
      }),
      shuffleOptions({
        question: "Which cooker uses sunlight as fuel?",
        optionA: "Solar cooker",
        optionB: "Gas cooker",
        optionC: "Microwave oven",
        correctAnswer: "Solar cooker",
      }),
      shuffleOptions({
        question: "Papad is cooked by which method?",
        optionA: "Boiling",
        optionB: "Roasting",
        optionC: "Frying",
        correctAnswer: "Roasting",
      }),
      shuffleOptions({
        question: "Which method requires hot oil for cooking?",
        optionA: "Boiling",
        optionB: "Frying",
        optionC: "Baking",
        correctAnswer: "Frying",
      }),
      shuffleOptions({
        question: "Which device runs on electricity?",
        optionA: "Gas stove",
        optionB: "Microwave oven",
        optionC: "Tandoor",
        correctAnswer: "Microwave oven",
      }),
      shuffleOptions({
        question: "Non-stick cookware is coated with which material?",
        optionA: "Teflon",
        optionB: "Iron",
        optionC: "Copper",
        correctAnswer: "Teflon",
      }),
      shuffleOptions({
        question: "Which fuel gives out smoke while burning?",
        optionA: "Cow dung-cake",
        optionB: "LPG",
        optionC: "Electricity",
        correctAnswer: "Cow dung-cake",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cooking makes food ______ and easy to digest.",
        optionA: "hard",
        optionB: "tasty",
        optionC: "raw",
        correctAnswer: "tasty",
      }),
      shuffleOptions({
        question: "Boiling means cooking food with ______.",
        optionA: "oil",
        optionB: "water",
        optionC: "steam",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Steaming is done with the help of ______.",
        optionA: "air",
        optionB: "steam",
        optionC: "firewood",
        correctAnswer: "steam",
      }),
      shuffleOptions({
        question: "Frying requires a lot of ______.",
        optionA: "oil",
        optionB: "water",
        optionC: "milk",
        correctAnswer: "oil",
      }),
      shuffleOptions({
        question: "Brass and clay vessels are still used in ______.",
        optionA: "villages",
        optionB: "towns",
        optionC: "cities",
        correctAnswer: "villages",
      }),
      shuffleOptions({
        question: "LPG stands for ______ Petroleum Gas.",
        optionA: "Liquid",
        optionB: "Liquified",
        optionC: "Light",
        correctAnswer: "Liquified",
      }),
      shuffleOptions({
        question: "A solar cooker uses ______ as fuel.",
        optionA: "gas",
        optionB: "sunlight",
        optionC: "coal",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "Non-stick cookware has a coating of ______.",
        optionA: "iron",
        optionB: "teflon",
        optionC: "aluminium",
        correctAnswer: "teflon",
      }),
      shuffleOptions({
        question: "Covering vessels with lids helps to ______ fuel.",
        optionA: "waste",
        optionB: "save",
        optionC: "lose",
        correctAnswer: "save",
      }),
      shuffleOptions({
        question: "Food cooked in the oven is said to be ______.",
        optionA: "boiled",
        optionB: "baked",
        optionC: "fried",
        correctAnswer: "baked",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cooking makes food soft and tasty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rice can be eaten raw.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Frying uses water for cooking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Steaming uses dry heat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clay vessels are still used in villages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Solar cooker produces smoke.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Covering food while cooking saves fuel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cooking food kills harmful germs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Electric hotplate runs on gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Microwave oven uses electricity for cooking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
