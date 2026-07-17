export const chapter = "Chapter - 6: Factors and Multiples";
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
        question: "Which number is a multiple of 7?",
        optionA: "21",
        optionB: "25",
        optionC: "33",
        correctAnswer: "21",
      }),
      shuffleOptions({
        question: "Which of these is a prime number?",
        optionA: "51",
        optionB: "29",
        optionC: "39",
        correctAnswer: "29",
      }),
      shuffleOptions({
        question: "Which number is a composite number?",
        optionA: "2",
        optionB: "17",
        optionC: "15",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "Which pair shows twin prime numbers?",
        optionA: "11, 13",
        optionB: "17, 19",
        optionC: "21, 23",
        correctAnswer: "17, 19",
      }),
      shuffleOptions({
        question: "Which number is divisible by 5?",
        optionA: "42",
        optionB: "75",
        optionC: "68",
        correctAnswer: "75",
      }),
      shuffleOptions({
        question: "Which of the following is a factor of 54?",
        optionA: "8",
        optionB: "9",
        optionC: "11",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "Which number ends in 0 and is therefore divisible by 10?",
        optionA: "145",
        optionB: "1600",
        optionC: "587",
        correctAnswer: "1600",
      }),
      shuffleOptions({
        question: "Which number has 1 and the number itself as its only factors?",
        optionA: "33",
        optionB: "41",
        optionC: "45",
        correctAnswer: "41",
      }),
      shuffleOptions({
        question: "Which number can be exactly divided by 3?",
        optionA: "244",
        optionB: "357",
        optionC: "502",
        correctAnswer: "357",
      }),
      shuffleOptions({
        question: "Which number is odd?",
        optionA: "84",
        optionB: "60",
        optionC: "77",
        correctAnswer: "77",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A number ending in 0, 2, 4, 6 or 8 is divisible by ________.",
        optionA: "3",
        optionB: "2",
        optionC: "5",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A number that divides another number exactly is called a ________.",
        optionA: "multiple",
        optionB: "prime",
        optionC: "factor",
        correctAnswer: "factor",
      }),
      shuffleOptions({
        question: "Numbers that cannot be divided by 2 are called ________.",
        optionA: "even",
        optionB: "composite",
        optionC: "odd",
        correctAnswer: "odd",
      }),
      shuffleOptions({
        question: "Two prime numbers that differ by 2 are called ________.",
        optionA: "co-primes",
        optionB: "twin primes",
        optionC: "even primes",
        correctAnswer: "twin primes",
      }),
      shuffleOptions({
        question: "The number with infinite multiples is ________.",
        optionA: "12",
        optionB: "every number",
        optionC: "only prime numbers",
        correctAnswer: "every number",
      }),
      shuffleOptions({
        question: "A number is divisible by 9 if the ________ of its digits is divisible by 9.",
        optionA: "sum",
        optionB: "product",
        optionC: "difference",
        correctAnswer: "sum",
      }),
      shuffleOptions({
        question: "The smallest even prime number is ________.",
        optionA: "4",
        optionB: "2",
        optionC: "6",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A number ending in 5 is divisible by ________.",
        optionA: "4",
        optionB: "5",
        optionC: "8",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "A number having more than two factors is called ________.",
        optionA: "prime",
        optionB: "composite",
        optionC: "even",
        correctAnswer: "composite",
      }),
      shuffleOptions({
        question: "Two numbers having only 1 as their common factor are called ________.",
        optionA: "co-primes",
        optionB: "twin primes",
        optionC: "multiples",
        correctAnswer: "co-primes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The number 612 is divisible by both 2 and 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every number has a fixed number of multiples.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The number 1 is neither prime nor composite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "405 is divisible by 5 because it ends in 5.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Prime numbers have more than two factors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "7254 is divisible by 9 because the sum of its digits is 18.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All even numbers are prime numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "36 and 61 have no common factor other than 1, so they are co-prime.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Multiples of a number start from the number itself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "28 is divisible by 4 because its last two digits form 28.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
