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
        question: "When dividing by 10, the ones digit becomes the:",
        optionA: "Quotient",
        optionB: "Divisor",
        optionC: "Remainder",
        correctAnswer: "Remainder",
      }),
      shuffleOptions({
        question: "Which of the following is always smaller than the divisor?",
        optionA: "Quotient",
        optionB: "Remainder",
        optionC: "Dividend",
        correctAnswer: "Remainder",
      }),
      shuffleOptions({
        question: "4,132 ÷ 100 gives which quotient?",
        optionA: "41",
        optionB: "413",
        optionC: "41.32",
        correctAnswer: "41",
      }),
      shuffleOptions({
        question: "What do we call the number that is divided?",
        optionA: "Remainder",
        optionB: "Dividend",
        optionC: "Quotient",
        correctAnswer: "Dividend",
      }),
      shuffleOptions({
        question: "What do we call the number that divides another number?",
        optionA: "Divisor",
        optionB: "Remainder",
        optionC: "Dividend",
        correctAnswer: "Divisor",
      }),
      shuffleOptions({
        question: "Division by 1 always gives:",
        optionA: "0",
        optionB: "The number itself",
        optionC: "The divisor",
        correctAnswer: "The number itself",
      }),
      shuffleOptions({
        question: "When dividing by 1000, which digits become the remainder?",
        optionA: "Last 2 digits",
        optionB: "Last 3 digits",
        optionC: "Last 4 digits",
        correctAnswer: "Last 3 digits",
      }),
      shuffleOptions({
        question: "In division, the number obtained after dividing is the:",
        optionA: "Quotient",
        optionB: "Divisor",
        optionC: "Remainder",
        correctAnswer: "Quotient",
      }),
      shuffleOptions({
        question: "200 ÷ 100 =",
        optionA: "20",
        optionB: "2",
        optionC: "200",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "If remainder = 0, the division is said to be:",
        optionA: "Complete division",
        optionB: "Long division",
        optionC: "Impossible division",
        correctAnswer: "Complete division",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "6000 ÷ 1000 = ___",
        optionA: "60",
        optionB: "6",
        optionC: "600",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "The number left over after division is called the ____.",
        optionA: "Dividend",
        optionB: "Quotient",
        optionC: "Remainder",
        correctAnswer: "Remainder",
      }),
      shuffleOptions({
        question: "When dividing by 10, the digit in the ones place becomes the ____.",
        optionA: "Quotient",
        optionB: "Remainder",
        optionC: "Divisor",
        correctAnswer: "Remainder",
      }),
      shuffleOptions({
        question: "18,325 ÷ 1000 has a remainder of ____.",
        optionA: "325",
        optionB: "18",
        optionC: "32",
        correctAnswer: "325",
      }),
      shuffleOptions({
        question: "514 ÷ 100 = quotient ___ and remainder ___.",
        optionA: "5 and 14",
        optionB: "51 and 4",
        optionC: "514 and 0",
        correctAnswer: "5 and 14",
      }),
      shuffleOptions({
        question: "0 ÷ 67,450 = ___.",
        optionA: "1",
        optionB: "0",
        optionC: "67,450",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "13,964 ÷ 100 gives a remainder of ___.",
        optionA: "6",
        optionB: "64",
        optionC: "964",
        correctAnswer: "64",
      }),
      shuffleOptions({
        question: "When dividing by 1000, the quotient is obtained by removing the last ___ digits.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "A number divided by 1 gives ____.",
        optionA: "0",
        optionB: "The number itself",
        optionC: "Half the number",
        correctAnswer: "The number itself",
      }),
      shuffleOptions({
        question: "The formula Dividend = Divisor × Quotient + ___ must always be true.",
        optionA: "Remainder",
        optionB: "Dividend",
        optionC: "Divisor",
        correctAnswer: "Remainder",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The remainder can be equal to the divisor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Division is repeated subtraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The quotient is always larger than the dividend.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In division, subtraction is done before bringing down the next digit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When dividing by 10, the quotient is formed by removing the last digit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dividing any number by 0 is possible.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dividend is the number that is divided.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Remainder is always smaller than the divisor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When dividing by 100, the last two digits become the remainder.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If remainder = 0, the divisor completely divides the dividend.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
