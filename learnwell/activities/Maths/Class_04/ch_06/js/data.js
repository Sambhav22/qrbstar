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
        question: "Which number is a factor of 48?",
        optionA: "7",
        optionB: "6",
        optionC: "10",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "Which number is a multiple of 9?",
        optionA: "25",
        optionB: "36",
        optionC: "40",
        correctAnswer: "36",
      }),
      shuffleOptions({
        question: "Which of the following is an even number?",
        optionA: "53",
        optionB: "29",
        optionC: "84",
        correctAnswer: "84",
      }),
      shuffleOptions({
        question: "Which number is a prime number?",
        optionA: "21",
        optionB: "17",
        optionC: "27",
        correctAnswer: "17",
      }),
      shuffleOptions({
        question: "Which number is a composite number?",
        optionA: "11",
        optionB: "13",
        optionC: "18",
        correctAnswer: "18",
      }),
      shuffleOptions({
        question: "The smallest factor of any non-zero number is:",
        optionA: "2",
        optionB: "1",
        optionC: "the number",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Which number is a common multiple of 2 and 5?",
        optionA: "12",
        optionB: "20",
        optionC: "18",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "Which of the following is the 6th multiple of 4?",
        optionA: "20",
        optionB: "30",
        optionC: "24",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "Which is the greatest factor of 63?",
        optionA: "9",
        optionB: "21",
        optionC: "63",
        correctAnswer: "63",
      }),
      shuffleOptions({
        question: "Which number is not divisible by 2?",
        optionA: "44",
        optionB: "90",
        optionC: "57",
        correctAnswer: "57",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A number that ends in 0, 2, 4, 6 or 8 is always ________.",
        optionA: "even",
        optionB: "odd",
        optionC: "prime",
        correctAnswer: "even",
      }),
      shuffleOptions({
        question: "A number that has only two factors is called a ________ number.",
        optionA: "composite",
        optionB: "even",
        optionC: "prime",
        correctAnswer: "prime",
      }),
      shuffleOptions({
        question: "The smallest multiple of any number is the ________ itself.",
        optionA: "number",
        optionB: "sum",
        optionC: "factor",
        correctAnswer: "number",
      }),
      shuffleOptions({
        question: "12, 24 and 36 are all ________ of 12.",
        optionA: "primes",
        optionB: "multiples",
        optionC: "factors",
        correctAnswer: "multiples",
      }),
      shuffleOptions({
        question: "If a number is divisible by 2, it will always be ________.",
        optionA: "odd",
        optionB: "even",
        optionC: "composite",
        correctAnswer: "even",
      }),
      shuffleOptions({
        question: "3 × 7 = 21, so 21 is a ________ of 3 and 7.",
        optionA: "factor",
        optionB: "prime",
        optionC: "multiple",
        correctAnswer: "multiple",
      }),
      shuffleOptions({
        question: "A number which is divisible by 2 is an ________ number.",
        optionA: "odd",
        optionB: "even",
        optionC: "prime",
        correctAnswer: "even",
      }),
      shuffleOptions({
        question: "Numbers that are not divisible by 2 are called ________ numbers.",
        optionA: "odd",
        optionB: "even",
        optionC: "composite",
        correctAnswer: "odd",
      }),
      shuffleOptions({
        question: "The greatest factor of any number is the ________.",
        optionA: "number itself",
        optionB: "smallest factor",
        optionC: "quotient",
        correctAnswer: "number itself",
      }),
      shuffleOptions({
        question: "15, 30 and 45 are all ________ of 15.",
        optionA: "primes",
        optionB: "multiples",
        optionC: "odd numbers",
        correctAnswer: "multiples",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "14 is an even number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "19 is a composite number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All multiples of 5 end in 0 or 5.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "6 is a factor of 42.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "3 is a multiple of 9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 is neither prime nor composite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "24 is a multiple of 8.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "31 is an odd number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "18 and 27 have no common multiples.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The number 2 is the smallest prime number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
