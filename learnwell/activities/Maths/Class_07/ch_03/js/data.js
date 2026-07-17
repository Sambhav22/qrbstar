export const chapter = "Chapter - 3: Decimals";
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
        question: "Which decimal has 3 decimal places?",
        optionA: "4.29",
        optionB: "4.298",
        optionC: "4.2",
        correctAnswer: "4.298",
      }),
      shuffleOptions({
        question: "Which of the following is a like decimal pair?",
        optionA: "2.4 and 3.49",
        optionB: "0.620 and 7.300",
        optionC: "5.21 and 8.73",
        correctAnswer: "5.21 and 8.73",
      }),
      shuffleOptions({
        question: "0.08 converted to a like decimal with three places becomes:",
        optionA: "0.008",
        optionB: "0.080",
        optionC: "0.800",
        correctAnswer: "0.080",
      }),
      shuffleOptions({
        question: "When a decimal is multiplied by 10, the decimal point shifts:",
        optionA: "Left by one place",
        optionB: "Right by one place",
        optionC: "Does not move",
        correctAnswer: "Right by one place",
      }),
      shuffleOptions({
        question: "3.5 × 0.6 equals:",
        optionA: "2.1",
        optionB: "21",
        optionC: "2.10",
        correctAnswer: "2.10",
      }),
      shuffleOptions({
        question: "1 kg =",
        optionA: "10 g",
        optionB: "100 g",
        optionC: "1000 g",
        correctAnswer: "1000 g",
      }),
      shuffleOptions({
        question: "Which of the following is the smallest?",
        optionA: "0.405",
        optionB: "0.450",
        optionC: "0.045",
        correctAnswer: "0.045",
      }),
      shuffleOptions({
        question: "12.004 + 0.6 =",
        optionA: "12.64",
        optionB: "12.604",
        optionC: "12.6040",
        correctAnswer: "12.6040",
      }),
      shuffleOptions({
        question: "7.2 ÷ 0.1 =",
        optionA: "0.72",
        optionB: "72",
        optionC: "7.02",
        correctAnswer: "72",
      }),
      shuffleOptions({
        question: "The fraction form of 0.03 is: 3",
        optionA: "10 3",
        optionB: "1000 3",
        optionC: "100",
        correctAnswer: "100",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.9 written with three decimal places is ______.",
        optionA: "0.900",
        optionB: "0.009",
        optionC: "9.000",
        correctAnswer: "0.900",
      }),
      shuffleOptions({
        question: "1 metre is equal to ______ centimetres.",
        optionA: "10",
        optionB: "100",
        optionC: "1000",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "0.006 × 100 = ______.",
        optionA: "0.006",
        optionB: "0.6",
        optionC: "0.06",
        correctAnswer: "0.06",
      }),
      shuffleOptions({
        question: "2.845 has ______ in the tenths place.",
        optionA: "8",
        optionB: "2",
        optionC: "4",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "The decimal 42.650 has ______ thousandths.",
        optionA: "50",
        optionB: "650",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "35 cm = ______ metres.",
        optionA: "0.35",
        optionB: "0.035",
        optionC: "3.5",
        correctAnswer: "0.035",
      }),
      shuffleOptions({
        question: "0.4 ÷ 10 = ______.",
        optionA: "0.04",
        optionB: "4.0",
        optionC: "0.4",
        correctAnswer: "0.04",
      }),
      shuffleOptions({
        question: "5.009 rounded to two decimal places = ______.",
        optionA: "5.00",
        optionB: "5.01",
        optionC: "5.10",
        correctAnswer: "5.01",
      }),
      shuffleOptions({
        question: "3.7 written as a fraction is ______. 37",
        optionA: "10  37",
        optionB: "100 3",
        optionC: "7",
        correctAnswer: "10  37",
      }),
      shuffleOptions({
        question: "0.248 converted to a like decimal with four places becomes ______.",
        optionA: "0.2480",
        optionB: "0.0248",
        optionC: "2.4800",
        correctAnswer: "0.2480",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.200 and 0.2 have the same value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4.63 is greater than 4.603.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When dividing a decimal by 10, the decimal point moves right.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "0.004 is greater than 0.04.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "8.03 has three decimal places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "0.09 × 1000 = 90.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Converting unlike decimals to like decimals does not change their value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "3.406 = 3.4060",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0.84 – 0.6 = 0.24",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "5.04 ÷ 0.1 = 50.4",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
