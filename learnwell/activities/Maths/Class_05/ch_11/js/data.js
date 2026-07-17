export const chapter = "Chapter - 11: Percentage";
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
        question: "What does the word “percent” mean?",
        optionA: "Out of ten",
        optionB: "Out of hundred",
        optionC: "Out of thousand",
        correctAnswer: "Out of hundred",
      }),
      shuffleOptions({
        question: "Which symbol is used to represent percentage?",
        optionA: "&",
        optionB: "@",
        optionC: "%",
        correctAnswer: "%",
      }),
      shuffleOptions({
        question: "What is the decimal form of 6.9%?",
        optionA: "0.069",
        optionB: "0.69",
        optionC: "0.0069",
        correctAnswer: "0.069",
      }),
      shuffleOptions({
        question: "What is 20% of 150?",
        optionA: "20",
        optionB: "30",
        correctAnswer: "30",
      }),
      shuffleOptions({
        question: "What percent of 1 metre is 1 cm?",
        optionA: "0.1%",
        optionB: "1%",
        optionC: "10%",
        correctAnswer: "1%",
      }),
      shuffleOptions({
        question: "What is 45% written as a decimal?",
        optionA: "4.5",
        optionB: "0.45",
        optionC: "0.045",
        correctAnswer: "0.45",
      }),
      shuffleOptions({
        question: "What fraction represents 28%?",
        optionA: "10 28",
        optionB: "100",
        optionC: "28",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "What is 50% of 80?",
        optionA: "30",
        optionB: "40",
        optionC: "50",
        correctAnswer: "40",
      }),
      shuffleOptions({
        question: "1 ml is what percentage of 1 litre?",
        optionA: "0.1%",
        optionB: "1%",
        optionC: "10%",
        correctAnswer: "0.1%",
      }),
      shuffleOptions({
        question: "What is 0.4 expressed as a percentage?",
        optionA: "4%",
        optionB: "40%",
        optionC: "400%",
        correctAnswer: "40%",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "36% written as a fraction is _____. 9",
        optionA: "25",
        optionB: "20",
        optionC: "6",
        correctAnswer: "25",
      }),
      shuffleOptions({
        question: "0.06 × 100 gives ______.",
        optionA: "60",
        optionB: "6%",
        optionC: "0.6",
        correctAnswer: "6%",
      }),
      shuffleOptions({
        question: "23.8% written in decimal form is ______.",
        optionA: "0.238",
        optionB: "2.38",
        optionC: "0.0238",
        correctAnswer: "0.238",
      }),
      shuffleOptions({
        question: "72% of 50 is ______.",
        optionA: "36",
        optionB: "72",
        optionC: "50",
        correctAnswer: "36",
      }),
      shuffleOptions({
        question: "84 cm is ______ of 1 metre.",
        optionA: "84%",
        optionB: "8.4%",
        optionC: "0.84%",
        correctAnswer: "84%",
      }),
      shuffleOptions({
        question: "1 g is _____ of 1 kg.",
        optionA: "1%",
        optionB: "0.1%",
        optionC: "10%",
        correctAnswer: "0.1%",
      }),
      shuffleOptions({
        question: "0.4 as a percentage is ______.",
        optionA: "0.4%",
        optionB: "4%",
        optionC: "40%",
        correctAnswer: "40%",
      }),
      shuffleOptions({
        question: "5% written as a decimal is _______.",
        optionA: "0.5",
        optionB: "0.05",
        optionC: "5.0",
        correctAnswer: "0.05",
      }),
      shuffleOptions({
        question: "28% of 200 is ______.",
        optionA: "28",
        optionB: "56",
        optionC: "72",
        correctAnswer: "56",
      }),
      shuffleOptions({
        question: "16 paise is ______ of 1 rupee.",
        optionA: "1.6%",
        optionB: "16%",
        optionC: "0.16%",
        correctAnswer: "16%",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.009 as a percentage is 0.9%.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "100 cm is 100% of 1 metre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 ml equals 1% of 1 litre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "40% of 200 is 90.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "6% written as decimal is 0.6.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 gram is 0.1% of 1 kilogram.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "52% written as decimal is 0.52.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0.45 equals 45%.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "80% of 500 is 400.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "10% of 90 is 9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
