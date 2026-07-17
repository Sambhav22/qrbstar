export const chapter = "Chapter - 5: Division";
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
        question: "What is the result called that we get after dividing a number?",
        optionA: "Dividend",
        optionB: "Quotient",
        optionC: "Remainder",
        correctAnswer: "Quotient",
      }),
      shuffleOptions({
        question: "Which digit becomes the remainder when a number is divided by 10?",
        optionA: "Tens digit",
        optionB: "Ones digit",
        optionC: "Hundreds digit",
        correctAnswer: "Ones digit",
      }),
      shuffleOptions({
        question: "When zero is divided by any number (except zero), the result is:",
        optionA: "The number itself",
        optionB: "Zero",
        optionC: "One",
        correctAnswer: "Zero",
      }),
      shuffleOptions({
        question: "What do we call the number that divides another number?",
        optionA: "Divisor",
        optionB: "Remainder",
        optionC: "Quotient",
        correctAnswer: "Divisor",
      }),
      shuffleOptions({
        question: "Dividing a number by 1 gives:",
        optionA: "0",
        optionB: "1",
        optionC: "The number itself",
        correctAnswer: "The number itself",
      }),
      shuffleOptions({
        question: "When dividing by 1000, the remainder is made of the last:",
        optionA: "1 digit",
        optionB: "2 digits",
        optionC: "3 digits",
        correctAnswer: "3 digits",
      }),
      shuffleOptions({
        question: "Dividing 589 by itself gives:",
        optionA: "589",
        optionB: "0",
        optionC: "1",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Which operation is repeated subtraction?",
        optionA: "Addition",
        optionB: "Division",
        optionC: "Multiplication",
        correctAnswer: "Division",
      }),
      shuffleOptions({
        question: "When 4523 is divided by 10, the remainder is:",
        optionA: "4",
        optionB: "3 (ones digit)",
        optionC: "23",
        correctAnswer: "3 (ones digit)",
      }),
      shuffleOptions({
        question: "Which number cannot be a divisor?",
        optionA: "5",
        optionB: "1",
        optionC: "0",
        correctAnswer: "0",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0 divided by any number except 0 is always ______.",
        optionA: "1",
        optionB: "the number",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "When a number is divided by 100, the remainder is made of the ______ digits.",
        optionA: "last two",
        optionB: "first two",
        optionC: "middle two",
        correctAnswer: "last two",
      }),
      shuffleOptions({
        question: "The number that is to be divided is called the ______.",
        optionA: "divisor",
        optionB: "quotient",
        optionC: "dividend",
        correctAnswer: "dividend",
      }),
      shuffleOptions({
        question: "When 758 is divided by 10, the quotient is ______.",
        optionA: "85",
        optionB: "75 (ones digit becomes remainder)",
        optionC: "7",
        correctAnswer: "75 (ones digit becomes remainder)",
      }),
      shuffleOptions({
        question: "645 ÷ 645 gives the answer ______.",
        optionA: "0",
        optionB: "645",
        optionC: "1",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "In division by 1000, the quotient is formed by the digits except the last ______ digits.",
        optionA: "1",
        optionB: "3",
        optionC: "2",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "The number left after division is called the ______.",
        optionA: "dividend",
        optionB: "remainder",
        optionC: "quotient",
        correctAnswer: "remainder",
      }),
      shuffleOptions({
        question: "4820 divided by 10 has remainder ______.",
        optionA: "8",
        optionB: "0 (ones digit)",
        optionC: "20",
        correctAnswer: "0 (ones digit)",
      }),
      shuffleOptions({
        question: "A number divided by 1 gives ______.",
        optionA: "the number itself",
        optionB: "0",
        optionC: "10",
        correctAnswer: "the number itself",
      }),
      shuffleOptions({
        question: "623 ÷ 100 gives a quotient of ______.",
        optionA: "6",
        optionB: "62",
        optionC: "623",
        correctAnswer: "6",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A number divided by itself always gives 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Zero can be used as a divisor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In division by 10, the ones digit becomes the remainder.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0 ÷ 257 equals 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When a number is divided by 1, the quotient changes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The remainder is always smaller than the divisor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When dividing by 100, the last two digits form the remainder.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "935 ÷ 1000 has a quotient of 9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Division is another name for repeated subtraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In 745 ÷ 10, the remainder is 4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
