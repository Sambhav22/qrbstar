export const chapter = "Chapter - 8: Decimals";
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
        question: "What is the decimal form of the fraction 100?",
        optionA: "0.037",
        optionB: "3.7",
        optionC: "0.37",
        correctAnswer: "0.37",
      }),
      shuffleOptions({
        question: "Which decimal has 3 in the tenths place?",
        optionA: "4.38",
        optionB: "3.08",
        optionC: "2.30",
        correctAnswer: "2.30",
      }),
      shuffleOptions({
        question: "What is the value of the digit 5 in 9. fifty-six hundredths (9.56)?",
        optionA: "5",
        optionB: "0.5",
        optionC: "0.05",
        correctAnswer: "0.05",
      }),
      shuffleOptions({
        question: "Which decimal is the largest among the following?",
        optionA: "0.904",
        optionB: "0.94",
        optionC: "0.9400",
        correctAnswer: "0.94",
      }),
      shuffleOptions({
        question: "What is 2.6 × 10?",
        optionA: "26.0",
        optionB: "2.60",
        optionC: "0.26",
        correctAnswer: "26.0",
      }),
      shuffleOptions({
        question: "Which decimal correctly reads as “three point zero nine four”?",
        optionA: "3.094",
        optionB: "3.904",
        optionC: "3.49",
        correctAnswer: "3.094",
      }),
      shuffleOptions({
        question: "Which number is equal to 9 + 0.8 + 0.06?",
        optionA: "9.806",
        optionB: "9.86",
        optionC: "9.086",
        correctAnswer: "9.86",
      }),
      shuffleOptions({
        question: "What is 0.45 – 0.05?",
        optionA: "0.05",
        optionB: "0.5",
        optionC: "0.40",
        correctAnswer: "0.40",
      }),
      shuffleOptions({
        question: "What is the product of 0.7 × 0.3?",
        optionA: "0.21",
        optionB: "0.003",
        optionC: "0.07",
        correctAnswer: "0.21",
      }),
      shuffleOptions({
        question: "Which of the following is a like decimal pair?",
        optionA: "4.2 and 4.26",
        optionB: "7.50 and 7.5",
        optionC: "1.005 and 1.05",
        correctAnswer: "7.50 and 7.5",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.408 has ______ decimal places.",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "5.06 = 5 + 0.0____",
        optionA: "6",
        optionB: "60",
        optionC: "600",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "0.9 is equal to ______ tenths.",
        optionA: "90",
        optionB: "9",
        optionC: "1",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "2.307 has the digit 7 in the ______ place.",
        optionA: "hundredths",
        optionB: "thousandths",
        optionC: "tenths",
        correctAnswer: "thousandths",
      }),
      shuffleOptions({
        question: "0.04 written as a fraction is ______.",
        optionA: "5",
        optionB: "1000 4",
        optionC: "100",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "8.3 converted to like decimal with two decimal places becomes ______.",
        optionA: "8.300",
        optionB: "8.30",
        optionC: "8.003",
        correctAnswer: "8.30",
      }),
      shuffleOptions({
        question: "0.5 ÷ 10 = ______.",
        optionA: "0.05",
        optionB: "0.005",
        optionC: "0.5",
        correctAnswer: "0.05",
      }),
      shuffleOptions({
        question: "In the decimal 6.241, the place value of 2 is ______.",
        optionA: "2",
        optionB: "0.2",
        optionC: "0.02",
        correctAnswer: "0.2",
      }),
      shuffleOptions({
        question: "3.04 + 0.5 = ______.",
        optionA: "3.54",
        optionB: "3.504",
        optionC: "3.540",
        correctAnswer: "3.54",
      }),
      shuffleOptions({
        question: "4.2 × 2 = ______",
        optionA: "8.04",
        optionB: "8.4",
        optionC: "0.84",
        correctAnswer: "8.4",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.80 and 0.8 represent the same decimal number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "6.09 is greater than 6.9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Adding zeros to the right of the decimal number does not change its value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "2.5 + 1.25 equals 3.75.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0.3 × 0.2 is equal to 0.06.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4.02 has a greater value than 4.2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1.005 has three decimal places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0.7 ÷ 10 equals 0.07.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "5.001 is less than 5.01.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Multiplying 0.84 by 100 shifts the decimal point two places left.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
