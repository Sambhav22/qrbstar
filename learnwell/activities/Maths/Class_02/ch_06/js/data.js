export const chapter = "Chapter - 6: Multiplication";
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
        question: "What is the product of 6 and 5?",
        optionA: "25",
        optionB: "35",
        optionC: "30",
        correctAnswer: "30",
      }),
      shuffleOptions({
        question: "What is 9 multiplied by 0?",
        optionA: "9",
        optionB: "0",
        optionC: "90",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "What do we call the number that is being multiplied?",
        optionA: "Product",
        optionB: "Multiplier",
        optionC: "Multiplicand",
        correctAnswer: "Multiplicand",
      }),
      shuffleOptions({
        question: "What is the result of multiplication called?",
        optionA: "Dividend",
        optionB: "Product",
        optionC: "Factor",
        correctAnswer: "Product",
      }),
      shuffleOptions({
        question: "What is the symbol used for multiplication?",
        optionA: "÷",
        optionB: "×",
        optionC: "+",
        correctAnswer: "×",
      }),
      shuffleOptions({
        question: "Which property says that two numbers can be multiplied in any order?",
        optionA: "Zero property",
        optionB: "Order property",
        optionC: "One property",
        correctAnswer: "Order property",
      }),
      shuffleOptions({
        question: "What is 7 × 8?",
        optionA: "48",
        optionB: "54",
        optionC: "56",
        correctAnswer: "56",
      }),
      shuffleOptions({
        question: "Which number keeps any number unchanged when multiplied?",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "What is 10 × 4?",
        optionA: "14",
        optionB: "40",
        optionC: "100",
        correctAnswer: "40",
      }),
      shuffleOptions({
        question: "When a number is multiplied by zero, the product is —",
        optionA: "1",
        optionB: "The same number",
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
        question: "3 × 4 = ______",
        optionA: "8",
        optionB: "12",
        optionC: "16",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "8 × 2 = ______",
        optionA: "18",
        optionB: "14",
        optionC: "16",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "5 × 9 = ______",
        optionA: "35",
        optionB: "40",
        optionC: "45",
        correctAnswer: "45",
      }),
      shuffleOptions({
        question: "7 × 6 = ______",
        optionA: "36",
        optionB: "42",
        optionC: "48",
        correctAnswer: "42",
      }),
      shuffleOptions({
        question: "9 × 3 = ______",
        optionA: "24",
        optionB: "27",
        optionC: "30",
        correctAnswer: "27",
      }),
      shuffleOptions({
        question: "2 × 10 = ______",
        optionA: "20",
        optionB: "22",
        optionC: "12",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "4 × 8 = ______",
        optionA: "30",
        optionB: "32",
        optionC: "34",
        correctAnswer: "32",
      }),
      shuffleOptions({
        question: "6 × 4 = ______",
        optionA: "24",
        optionB: "26",
        optionC: "28",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "1 × 9 = ______",
        optionA: "1",
        optionB: "0",
        optionC: "9",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "7 × 7 = ______",
        optionA: "49",
        optionB: "42",
        optionC: "56",
        correctAnswer: "49",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Multiplication is repeated addition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The product of any number and one is the same number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The symbol of multiplication is ÷.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The order of numbers changes the product.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The product of any number and zero is always zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "8 × 4 = 32.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "6 × 6 = 30.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "9 × 2 = 18.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4 × 5 = 25.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "7 × 3 = 21.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
