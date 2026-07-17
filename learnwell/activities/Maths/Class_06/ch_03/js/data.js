export const chapter = "Chapter - 3: Playing with Numbers";
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
        question: "Which bracket is solved first according to the BODMAS rule?",
        optionA: "( )",
        optionB: "─ (vinculum)",
        optionC: "{ }",
        correctAnswer: "─ (vinculum)",
      }),
      shuffleOptions({
        question: "Which of the following is a composite number?",
        optionA: "7",
        optionB: "9",
        optionC: "11",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "Which number is an even number?",
        optionA: "13",
        optionB: "25",
        optionC: "14",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "Which pair of numbers are co-primes?",
        optionA: "6 and 9",
        optionB: "8 and 15",
        optionC: "12 and 18",
        correctAnswer: "8 and 15",
      }),
      shuffleOptions({
        question: "Which of the following numbers is divisible by 9?",
        optionA: "2457",
        optionB: "4698",
        optionC: "1225",
        correctAnswer: "4698",
      }),
      shuffleOptions({
        question: "Which of the following is a prime number?",
        optionA: "16",
        optionB: "21",
        optionC: "23",
        correctAnswer: "23",
      }),
      shuffleOptions({
        question: "Which is the only even prime number?",
        optionA: "2",
        optionB: "4",
        optionC: "6",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Which number is divisible by 5?",
        optionA: "2341",
        optionB: "8675",
        optionC: "2228",
        correctAnswer: "8675",
      }),
      shuffleOptions({
        question: "Which is a perfect number?",
        optionA: "6",
        optionB: "12",
        optionC: "9",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "Which rule checks divisibility by 3?",
        optionA: "Check last digit",
        optionB: "Check last two digits",
        optionC: "Check sum of digits",
        correctAnswer: "Check sum of digits",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A number exactly divisible by 2 is called an ______ number.",
        optionA: "odd",
        optionB: "even",
        optionC: "prime",
        correctAnswer: "even",
      }),
      shuffleOptions({
        question: "Two numbers having no common factor except 1 are called ______.",
        optionA: "twin primes",
        optionB: "co-primes",
        optionC: "perfect numbers",
        correctAnswer: "co-primes",
      }),
      shuffleOptions({
        question: "A number ending in 0 or 5 is always divisible by ______.",
        optionA: "3",
        optionB: "9",
        optionC: "5",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "The smallest prime number is ______.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A multiple of a number is obtained by ______ the number by a natural number.",
        optionA: "adding",
        optionB: "multiplying",
        optionC: "subtracting",
        correctAnswer: "multiplying",
      }),
      shuffleOptions({
        question: "A composite number has ______ factors.",
        optionA: "only two",
        optionB: "more than two",
        optionC: "infinite",
        correctAnswer: "more than two",
      }),
      shuffleOptions({
        question: "A number is divisible by 4 if the number formed by its last ______ digits is divisible by 4.",
        optionA: "three",
        optionB: "two",
        optionC: "four",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "28 is a perfect number because the sum of its factors is ______ the number.",
        optionA: "equal to twice",
        optionB: "equal to the number",
        optionC: "less than",
        correctAnswer: "equal to twice",
      }),
      shuffleOptions({
        question: "The smallest multiple of any number is the number ______.",
        optionA: "zero",
        optionB: "itself",
        optionC: "one",
        correctAnswer: "itself",
      }),
      shuffleOptions({
        question: "The prime factorisation of a number expresses it as a product of only ______ numbers.",
        optionA: "whole",
        optionB: "even",
        optionC: "prime",
        correctAnswer: "prime",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Every even number is divisible by 2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 is neither a prime nor a composite number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All prime numbers are odd.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Multiples of a number are infinite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every factor of a number is greater than the number itself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Two prime numbers are always co-primes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If a number is divisible by 10, it must end in 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number 9 is a composite number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If a number is divisible by both 2 and 3, then it is divisible by 6.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "6 is a perfect number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
