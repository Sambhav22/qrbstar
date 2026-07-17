export const chapter = "Chapter - 3: Squares and Square Roots";
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
        question: "Which number is definitely not a perfect square?",
        optionA: "121",
        optionB: "625",
        optionC: "72",
        correctAnswer: "72",
      }),
      shuffleOptions({
        question: "What is the units digit of the square of a number ending in 7?",
        optionA: "9",
        optionB: "7",
        optionC: "3",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "The square of 13 is equal to:",
        optionA: "156",
        optionB: "169",
        optionC: "196",
        correctAnswer: "169",
      }),
      shuffleOptions({
        question: "The number of natural numbers between 28² and 29² is:",
        optionA: "29",
        optionB: "56",
        optionC: "57",
        correctAnswer: "56",
      }),
      shuffleOptions({
        question: "Which of the following is a Pythagorean triplet?",
        optionA: "(4, 5, 7)",
        optionB: "(9, 12, 15)",
        optionC: "(8, 11, 14)",
        correctAnswer: "(9, 12, 15)",
      }),
      shuffleOptions({
        question: "Which number must be multiplied by 90 to make it a perfect square?",
        optionA: "5",
        optionB: "10",
        optionC: "15",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "The square of any odd number is always:",
        optionA: "Even",
        optionB: "Odd",
        optionC: "Prime",
        correctAnswer: "Odd",
      }),
      shuffleOptions({
        question: "The units digit of 48² is:",
        optionA: "4",
        optionB: "6",
        optionC: "8",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Which number below is a perfect square?",
        optionA: "450",
        optionB: "841",
        optionC: "875",
        correctAnswer: "841",
      }),
      shuffleOptions({
        question: "Which of the following shows the property of squares correctly?",
        optionA: "Perfect squares always end in 2 or 3",
        optionB: "Perfect squares may end in 1, 4, 5, 6, 9 or 0",
        optionC: "Perfect squares always end in an odd digit",
        correctAnswer: "Perfect squares may end in 1, 4, 5, 6, 9 or 0",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "18² is equal to ______.",
        optionA: "256",
        optionB: "324",
        optionC: "289",
        correctAnswer: "324",
      }),
      shuffleOptions({
        question: "The square root of 1764 is ______.",
        optionA: "41",
        optionB: "42",
        optionC: "43",
        correctAnswer: "42",
      }),
      shuffleOptions({
        question: "A number ending in 8 is ______ a perfect square.",
        optionA: "always",
        optionB: "never",
        optionC: "sometimes",
        correctAnswer: "never",
      }),
      shuffleOptions({
        question: "27² is equal to ______.",
        optionA: "729",
        optionB: "741",
        optionC: "794",
        correctAnswer: "729",
      }),
      shuffleOptions({
        question: "The square root of 0.04 is ______.",
        optionA: "0.2",
        optionB: "0.04",
        optionC: "2",
        correctAnswer: "0.2",
      }),
      shuffleOptions({
        question: "The next odd number after 11 is ______.",
        optionA: "12",
        optionB: "13",
        optionC: "15",
        correctAnswer: "13",
      }),
      shuffleOptions({
        question: "5625 is the square of ______.",
        optionA: "65",
        optionB: "75",
        optionC: "85",
        correctAnswer: "75",
      }),
      shuffleOptions({
        question: "60² – 59² is equal to ______.",
        optionA: "119",
        optionB: "121",
        optionC: "123",
        correctAnswer: "121",
      }),
      shuffleOptions({
        question: "45² is equal to ______.",
        optionA: "2005",
        optionB: "2025",
        optionC: "2050",
        correctAnswer: "2025",
      }),
      shuffleOptions({
        question: "The square root of 0.0001 is ______.",
        optionA: "0.001",
        optionB: "0.01",
        optionC: "0.1",
        correctAnswer: "0.01",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The square of an even number is always even.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The square root of 625 is 25.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A number ending in 2 cannot be a perfect square.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The approximate value of √445.21 is 21.1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1000 is a perfect square.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "13² = 169.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "15² = 225.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "(243)² = 59049.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are 2n numbers between n² and (n+1)².",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The square of an odd number is always even.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
