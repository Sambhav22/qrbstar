export const chapter = "Chapter - 7: Division";
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
        question: "How many times can 7 be subtracted from 21?",
        optionA: "Two times",
        optionB: "Three times",
        optionC: "Four times",
        correctAnswer: "Three times",
      }),
      shuffleOptions({
        question: "What is the quotient when 42 is divided by 6?",
        optionA: "8",
        optionB: "7",
        optionC: "6",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "Which operation is called equal sharing?",
        optionA: "Addition",
        optionB: "Division",
        optionC: "Subtraction",
        correctAnswer: "Division",
      }),
      shuffleOptions({
        question: "If 2 × 3 = 6, what is 6 ÷ 2 equal to?",
        optionA: "1",
        optionB: "3",
        optionC: "2",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "What happens when we try to divide a number by 0?",
        optionA: "The answer becomes 0",
        optionB: "It is not possible",
        optionC: "The number remains same",
        correctAnswer: "It is not possible",
      }),
      shuffleOptions({
        question: "In 24 ÷ 6 = 4, which number is the divisor?",
        optionA: "6",
        optionB: "4",
        optionC: "24",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "If 9 × 5 = 45, then which is the correct division fact?",
        optionA: "45 ÷ 9 = 6",
        optionB: "45 ÷ 5 = 9",
        optionC: "45 ÷ 3 = 15",
        correctAnswer: "45 ÷ 5 = 9",
      }),
      shuffleOptions({
        question: "What do we call subtraction of the same number again and again?",
        optionA: "Repeated addition",
        optionB: "Repeated subtraction",
        optionC: "Equal grouping",
        correctAnswer: "Repeated subtraction",
      }),
      shuffleOptions({
        question: "If 8 × 7 = 56, what is 56 ÷ 7?",
        optionA: "9",
        optionB: "8",
        optionC: "7",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "In the division 12 ÷ 4 = 3, which number is the dividend?",
        optionA: "3",
        optionB: "12",
        optionC: "4",
        correctAnswer: "12",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "____ ÷ 3 = 5",
        optionA: "12",
        optionB: "15",
        optionC: "18",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "When dividend and divisor are the same, quotient is ____.",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "____ ÷ 1 = 72",
        optionA: "72",
        optionB: "71",
        optionC: "1",
        correctAnswer: "72",
      }),
      shuffleOptions({
        question: "In ____ ÷ 8 = 9, the dividend is ____.",
        optionA: "72",
        optionB: "64",
        optionC: "80",
        correctAnswer: "72",
      }),
      shuffleOptions({
        question: "____ ÷ 4 = 6",
        optionA: "24",
        optionB: "20",
        optionC: "28",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "____ ÷ 5 = 4",
        optionA: "30",
        optionB: "25",
        optionC: "20",
        correctAnswer: "25",
      }),
      shuffleOptions({
        question: "____ ÷ 6 = 7",
        optionA: "36",
        optionB: "42",
        optionC: "48",
        correctAnswer: "42",
      }),
      shuffleOptions({
        question: "If 21 ÷ 7 = ____, the quotient is ____.",
        optionA: "4",
        optionB: "3",
        optionC: "2",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "____ ÷ 9 = 2",
        optionA: "18",
        optionB: "27",
        optionC: "9",
        correctAnswer: "18",
      }),
      shuffleOptions({
        question: "____ ÷ 2 = 10",
        optionA: "20",
        optionB: "18",
        optionC: "22",
        correctAnswer: "20",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Division is the same as addition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Remainder is always smaller than the divisor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When any number is divided by 1, the quotient is the number itself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Any number divided by itself gives 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Division is the opposite of multiplication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In 12 ÷ 3 = 4, 3 is the divisor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can subtract 4 three times from 12.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The symbol of division is ÷.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "15 ÷ 5 = 2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "If 7 × 8 = 56, then 56 ÷ 8 = 7.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
