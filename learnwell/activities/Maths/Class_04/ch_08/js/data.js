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
        question: "Which number shows nine tenths?",
        optionA: "0.09",
        optionB: "0.9",
        optionC: "9.0",
        correctAnswer: "0.9",
      }),
      shuffleOptions({
        question: "The digit in the tenths place in 63.29 is:",
        optionA: "2",
        optionB: "6",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Which of the following is a decimal fraction? 7",
        optionA: "9 5",
        optionB: "10  3",
        optionC: "5",
        correctAnswer: "10  3",
      }),
      shuffleOptions({
        question: "The decimal 0.250 is read as:",
        optionA: "Two hundred fifty thousandths",
        optionB: "Twenty-five tenths",
        optionC: "Two point five",
        correctAnswer: "Two hundred fifty thousandths",
      }),
      shuffleOptions({
        question: "Which decimal has three decimal places?",
        optionA: "2.3",
        optionB: "1.09",
        optionC: "4.008",
        correctAnswer: "4.008",
      }),
      shuffleOptions({
        question: "3.400 is equal to:",
        optionA: "3.4",
        optionB: "3.44",
        optionC: "3.040",
        correctAnswer: "3.4",
      }),
      shuffleOptions({
        question: "The expanded form of 7.892 includes:",
        optionA: "0.8 + 0.09 + 0.002",
        optionB: "8 + 9 + 2",
        optionC: "7 + 8 + 9",
        correctAnswer: "0.8 + 0.09 + 0.002",
      }),
      shuffleOptions({
        question: "Hundredths place means the figure is divided into:",
        optionA: "10 parts",
        optionB: "100 parts",
        optionC: "1000 parts",
        correctAnswer: "100 parts",
      }),
      shuffleOptions({
        question: "Which shows one thousandth?",
        optionA: "0.1",
        optionB: "0.01",
        optionC: "0.001",
        correctAnswer: "0.001",
      }),
      shuffleOptions({
        question: "The whole number part of 426.762 is:",
        optionA: "426",
        optionB: "762",
        optionC: "42",
        correctAnswer: "426",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.1 is read as one ______.",
        optionA: "hundredth",
        optionB: "thousandth",
        optionC: "tenth",
        correctAnswer: "tenth",
      }),
      shuffleOptions({
        question: "In 134.193, the digit 9 is in the ______ place.",
        optionA: "tenths",
        optionB: "hundredths",
        optionC: "thousandths",
        correctAnswer: "thousandths",
      }),
      shuffleOptions({
        question: "The decimal point separates the whole number part and the ______.",
        optionA: "fraction",
        optionB: "decimal part",
        optionC: "remainder",
        correctAnswer: "decimal part",
      }),
      shuffleOptions({
        question: "0.05 means five ______.",
        optionA: "tenths",
        optionB: "hundredths",
        optionC: "thousandths",
        correctAnswer: "hundredths",
      }),
      shuffleOptions({
        question: "3.4 is the same as ______ tenths.",
        optionA: "34",
        optionB: "3",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "0.09 has ______ digits after the decimal point.",
        optionA: "one",
        optionB: "two",
        optionC: "three 44",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "To convert 100 into decimal, write it as ______.",
        optionA: "4.4",
        optionB: "44.0",
        optionC: "0.44",
        correctAnswer: "0.44",
      }),
      shuffleOptions({
        question: "0.002 represents two ______.",
        optionA: "hundredths",
        optionB: "thousandths",
        optionC: "tenths",
        correctAnswer: "thousandths",
      }),
      shuffleOptions({
        question: "Adding zero at the end of a decimal does ______.",
        optionA: "increase its value",
        optionB: "not change its value",
        optionC: "decrease its value",
        correctAnswer: "not change its value",
      }),
      shuffleOptions({
        question: "The decimal for 8/10 is ______.",
        optionA: "0.008",
        optionB: "0.8",
        optionC: "8.0",
        correctAnswer: "0.8",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.53 and 0.530 have the same value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The digit in the hundredths place is the first digit after the decimal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "2.30 and 2.300 are equivalent decimals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A decimal fraction always has denominator 10, 100, 1000 etc.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0.01 is equal to one tenth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The decimal part of 46.0 is zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0.9 is greater than 0.89.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Removing zeros after the decimal point changes the value of the decimal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "3.400 has three decimal places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The place value of 7 in 25.76 is 0.7.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
