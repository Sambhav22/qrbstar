export const chapter = "Chapter - 2: Whole Numbers";
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
        question: "Which number is the first natural number?",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Which whole number lies to the immediate right of 8 on the number line?",
        optionA: "9",
        optionB: "7",
        optionC: "10",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "Which property is shown by 6 × 5 = 5 × 6?",
        optionA: "Associative",
        optionB: "Distributive",
        optionC: "Commutative",
        correctAnswer: "Commutative",
      }),
      shuffleOptions({
        question: "Which of the following numbers can be arranged as a perfect square in dot pattern?",
        optionA: "14",
        optionB: "16",
        optionC: "10",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "What is the result of 300 × (10 – 1)?",
        optionA: "2700",
        optionB: "300",
        optionC: "3000",
        correctAnswer: "2700",
      }),
      shuffleOptions({
        question: "Which number has no predecessor in the whole numbers?",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Which number is greater?",
        optionA: "432",
        optionB: "423",
        optionC: "432 is greater",
        correctAnswer: "432 is greater",
      }),
      shuffleOptions({
        question: "Which operation on number line always moves us to the right?",
        optionA: "Subtraction",
        optionB: "Addition",
        optionC: "Division",
        correctAnswer: "Addition",
      }),
      shuffleOptions({
        question: "Which is a triangular number?",
        optionA: "4",
        optionB: "6",
        optionC: "8",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "Which is the multiplicative identity for whole numbers?",
        optionA: "0",
        optionB: "1",
        optionC: "10",
        correctAnswer: "1",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The successor of 450 is ______.",
        optionA: "449",
        optionB: "451",
        optionC: "452",
        correctAnswer: "451",
      }),
      shuffleOptions({
        question: "On the number line, every whole number to the right is ______ than the one before it.",
        optionA: "greater",
        optionB: "smaller",
        optionC: "equal",
        correctAnswer: "greater",
      }),
      shuffleOptions({
        question: "The smallest 4-digit natural number is ______.",
        optionA: "999",
        optionB: "1000",
        optionC: "1001",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "72 × 1 = ______.",
        optionA: "0",
        optionB: "72",
        optionC: "1",
        correctAnswer: "72",
      }),
      shuffleOptions({
        question: "Between 30 and 35, there are ______ whole numbers.",
        optionA: "3",
        optionB: "4",
        optionC: "4 (31, 32, 33, 34)",
        correctAnswer: "4 (31, 32, 33, 34)",
      }),
      shuffleOptions({
        question: "The predecessor of 10,001 is ______.",
        optionA: "9999",
        optionB: "10,000",
        correctAnswer: "10,000",
      }),
      shuffleOptions({
        question: "A number remains unchanged when ______ is added to it.",
        optionA: "1",
        optionB: "0",
        optionC: "10",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "500 × (100 + 2) = 500 × 100 + ______.",
        optionA: "500 × 1",
        optionB: "500 × 2",
        optionC: "500 × 0",
        correctAnswer: "500 × 2",
      }),
      shuffleOptions({
        question: "12 ÷ 1 = ______.",
        optionA: "1",
        optionB: "12",
        optionC: "0",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "A whole number that can be shown in a rectangular dot arrangement is ______.",
        optionA: "7",
        optionB: "10",
        optionC: "3",
        correctAnswer: "10",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Whole numbers include all natural numbers and 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There is no greatest whole number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subtraction of whole numbers is commutative.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "36 can be shown in a square dot pattern.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0 is the multiplicative identity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "6 is a triangular number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "On the number line, moving left represents addition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Multiplication is associative for whole numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "0 has no predecessor in whole numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every whole number is also a natural number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
