export const chapter = "Chapter - 5: Playing with Numbers";
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
        question: "What is the generalised form of a 3-digit number abc?",
        optionA: "10a + b + c",
        optionB: "100a + 10b + c",
        optionC: "1000a + 100b + 10c",
        correctAnswer: "100a + 10b + c",
      }),
      shuffleOptions({
        question: "Which rule decides whether a number is divisible by 4?",
        optionA: "The sum of digits is divisible by 4",
        optionB: "The last digit must be even",
        optionC: "The last two digits form a number divisible by 4",
        correctAnswer: "The last two digits form a number divisible by 4",
      }),
      shuffleOptions({
        question: "What do we call a square in which all rows, columns, and diagonals have the same sum?",
        optionA: "Arithmetic square",
        optionB: "Magic square",
        optionC: "Perfect square",
        correctAnswer: "Magic square",
      }),
      shuffleOptions({
        question: "Which of the following is the next number in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8?",
        optionA: "10",
        optionB: "13",
        optionC: "12",
        correctAnswer: "13",
      }),
      shuffleOptions({
        question: "Which number will be divisible by 6?",
        optionA: "A number divisible by 2 only",
        optionB: "A number divisible by 3 only",
        optionC: "A number divisible by both 2 and 3",
        correctAnswer: "A number divisible by both 2 and 3",
      }),
      shuffleOptions({
        question: "What is the reversed form of a 2-digit number ab?",
        optionA: "a + b",
        optionB: "10b + a",
        optionC: "ab − ba",
        correctAnswer: "10b + a",
      }),
      shuffleOptions({
        question: "What must be true for a number to be divisible by 9?",
        optionA: "Units digit must be 9",
        optionB: "The sum of digits must be divisible by 9",
        optionC: "The last two digits must be even",
        correctAnswer: "The sum of digits must be divisible by 9",
      }),
      shuffleOptions({
        question: "Which rule checks divisibility by 11?",
        optionA: "Units digit must be 1",
        optionB: "Difference between sums of alternate digits must be 0 or multiple of 11",
        optionC: "The number must end in 0",
        correctAnswer: "Difference between sums of alternate digits must be 0 or multiple of 11",
      }),
      shuffleOptions({
        question: "What is the next number in the sequence 1, 9, 25, 49, 81?",
        optionA: "100",
        optionB: "169",
        optionC: "121",
        correctAnswer: "169",
      }),
      shuffleOptions({
        question: "What is the reversed form of the number 705?",
        optionA: "507",
        optionB: "570",
        optionC: "750",
        correctAnswer: "507",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A 2-digit number ab is written in generalised form as ______.",
        optionA: "100a + b",
        optionB: "a + b",
        optionC: "10a + b",
        correctAnswer: "10a + b",
      }),
      shuffleOptions({
        question: "A number is divisible by 2 if its units digit is ______.",
        optionA: "0, 2, 4, 6, or 8",
        optionB: "1 or 3",
        optionC: "5 only",
        correctAnswer: "0, 2, 4, 6, or 8",
      }),
      shuffleOptions({
        question: "In a magic square, the ______ of each row, column, and diagonal is the same.",
        optionA: "product",
        optionB: "sum",
        optionC: "difference",
        correctAnswer: "sum",
      }),
      shuffleOptions({
        question: "In the Fibonacci sequence, each number is the ______ of the previous two numbers.",
        optionA: "product",
        optionB: "difference",
        optionC: "sum",
        correctAnswer: "sum",
      }),
      shuffleOptions({
        question: "A number is divisible by 10 only if its units digit is ______.",
        optionA: "1",
        optionB: "0",
        optionC: "5",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "A number is divisible by 3 when the ______ of its digits is divisible by 3.",
        optionA: "product",
        optionB: "sum",
        optionC: "difference",
        correctAnswer: "sum",
      }),
      shuffleOptions({
        question: "The reverse of a 3-digit number abc is ______.",
        optionA: "10c + b + a",
        optionB: "100c + 10b + a",
        optionC: "100a + c",
        correctAnswer: "100c + 10b + a",
      }),
      shuffleOptions({
        question: "In a divisibility rule for 7, we subtract twice the units digit from the ______.",
        optionA: "hundreds digit",
        optionB: "number formed by other digits",
        optionC: "sum of digits",
        correctAnswer: "number formed by other digits",
      }),
      shuffleOptions({
        question: "A number ending in 5 is always divisible by ______.",
        optionA: "5",
        optionB: "2",
        optionC: "9",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "The next term after 8 in the Fibonacci sequence is ______.",
        optionA: "10",
        optionB: "12",
        optionC: "13",
        correctAnswer: "13",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A number whose digit sum is 18 is divisible by 9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A number ending in 0 is always divisible by 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a 3-digit number abc, a can be 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A number is divisible by 5 only if its last digit is 5.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All rows, columns, and diagonals in a magic square have equal sums.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "846 is divisible by 2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every number divisible by 6 must also be divisible by 2 and 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reversing digits of 370 gives 73.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Fibonacci sequence always begins with 0 and 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If (sum of digits at odd places) – (sum at even places) is 0, number is divisible by 11.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
