export const chapter = "Chapter - 4: Rounding Numbers";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which digit do we check when rounding a number to the nearest ten?",
        optionA: "Tens",
        optionB: "Ones",
        optionC: "Hundreds",
        correctAnswer: "Ones",
      }),
      shuffleOptions({
        question: "When rounding 453 to the nearest hundred, the rounded value will be:",
        optionA: "400",
        optionB: "500",
        optionC: "600",
        correctAnswer: "500",
      }),
      shuffleOptions({
        question: "To round 7812 to the nearest thousand, which digit is checked?",
        optionA: "Hundreds",
        optionB: "Tens",
        optionC: "Thousands",
        correctAnswer: "Hundreds",
      }),
      shuffleOptions({
        question: "The number 39.78 rounded to the nearest one becomes:",
        optionA: "39",
        optionB: "40",
        optionC: "41",
        correctAnswer: "40",
      }),
      shuffleOptions({
        question: "When rounding to the nearest tenth, the digit to be checked is the:",
        optionA: "Hundredths digit",
        optionB: "Tenths digit",
        optionC: "Ones digit",
        correctAnswer: "Hundredths digit",
      }),
      shuffleOptions({
        question: "The decimal 6.84 rounded to the nearest tenth is:",
        optionA: "6.8",
        optionB: "6.9",
        optionC: "7.0",
        correctAnswer: "6.9",
      }),
      shuffleOptions({
        question: "The number 268 rounded to the nearest ten becomes:",
        optionA: "260",
        optionB: "270",
        optionC: "280",
        correctAnswer: "270",
      }),
      shuffleOptions({
        question: "To round 52,489 to the nearest thousand, the rounded value is:",
        optionA: "50,000",
        optionB: "52,500",
        optionC: "52,000",
        correctAnswer: "52,000",
      }),
      shuffleOptions({
        question: "Rounding 913.62 to the nearest one gives:",
        optionA: "914",
        optionB: "913",
        optionC: "915",
        correctAnswer: "914",
      }),
      shuffleOptions({
        question: "When rounding 842.67 to the nearest tenth, the result is:",
        optionA: "842.6",
        optionB: "842.7",
        optionC: "843",
        correctAnswer: "842.7",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The number 748 rounded to the nearest hundred is ______.",
        optionA: "700",
        optionB: "800",
        optionC: "900",
        correctAnswer: "800",
      }),
      shuffleOptions({
        question: "The decimal 45.29 rounded to the nearest tenth becomes ______.",
        optionA: "45.2",
        optionB: "45.3",
        optionC: "45.0",
        correctAnswer: "45.3",
      }),
      shuffleOptions({
        question: "Rounding 9815 to the nearest thousand gives ______.",
        optionA: "9000",
        optionB: "10000",
        optionC: "11000",
        correctAnswer: "10000",
      }),
      shuffleOptions({
        question: "When rounding 87.51 to the nearest one, it becomes ______.",
        optionA: "87",
        optionB: "88",
        optionC: "89",
        correctAnswer: "88",
      }),
      shuffleOptions({
        question: "The number 624 rounded to the nearest ten is ______.",
        optionA: "620",
        optionB: "630",
        optionC: "640",
        correctAnswer: "630",
      }),
      shuffleOptions({
        question: "The decimal 13.048 rounded to the nearest hundredth is ______.",
        optionA: "10.05",
        optionB: "13.04",
        optionC: "13.05",
        correctAnswer: "13.05",
      }),
      shuffleOptions({
        question: "The number 5312 becomes ______ when rounded to the nearest thousand.",
        optionA: "5000",
        optionB: "6000",
        optionC: "3000",
        correctAnswer: "5000",
      }),
      shuffleOptions({
        question: "Rounding 29.86 to the nearest tenth gives ______.",
        optionA: "29.9",
        optionB: "29.8",
        optionC: "30",
        correctAnswer: "29.9",
      }),
      shuffleOptions({
        question: "When rounding 477 to the nearest hundred, the rounded value is ______.",
        optionA: "400",
        optionB: "500",
        optionC: "5000",
        correctAnswer: "500",
      }),
      shuffleOptions({
        question: "The decimal 102.63 rounded to the nearest one is ______.",
        optionA: "102",
        optionB: "103",
        optionC: "104",
        correctAnswer: "103",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rounding 348 to the nearest hundred results in 300.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The decimal 72.44 rounded to the nearest tenth becomes 72.4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number 5298 rounded to the nearest thousand becomes 6000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rounding 91.88 to the nearest one gives 92.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When rounding to the nearest ten, if the ones digit is 5, the number increases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rounding 641 to the nearest hundred results in 600.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The decimal 19.204 rounded to the nearest tenth is 19.2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rounding 7899 to the nearest thousand gives 8000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number 45.99 rounded to the nearest one becomes 46.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When rounding to the nearest hundredth, we check the thousandths digit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
