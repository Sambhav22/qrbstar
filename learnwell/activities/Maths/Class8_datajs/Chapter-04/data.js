export const chapter = "Chapter - 4: Cubes and Cube Roots";
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
        question: "What is the cube of –3?",
        optionA: "27",
        optionB: "–9",
        optionC: "–27",
        correctAnswer: "–27",
      }),
      shuffleOptions({
        question: "Which number must be multiplied with 704 to make it a perfect cube?",
        optionA: "2",
        optionB: "11",
        optionC: "22",
        correctAnswer: "11",
      }),
      shuffleOptions({
        question: "What will be the units digit of the cube of a number ending in 3?",
        optionA: "3",
        optionB: "7",
        optionC: "1",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "What is the cube root of 4913?",
        optionA: "19",
        optionB: "21",
        optionC: "17",
        correctAnswer: "17",
      }),
      shuffleOptions({
        question: "The cube of 0.7 is equal to which of the following?",
        optionA: "0.343",
        optionB: "0.243",
        optionC: "0.300",
        correctAnswer: "0.343",
      }),
      shuffleOptions({
        question: "Which of the following expressions represents a perfect cube?",
        optionA: "24 × 32 × 24 × 32",
        optionB: "33 × 53",
        optionC: "72 × 72 × 7",
        correctAnswer: "33 × 53",
      }),
      shuffleOptions({
        question: "What is the units digit of 15³?",
        optionA: "5",
        optionB: "0",
        optionC: "3",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "The cube root of 0.001331 is equal to—",
        optionA: "0.13",
        optionB: "0.21",
        optionC: "0.11",
        correctAnswer: "0.11",
      }),
      shuffleOptions({
        question: "The cube of 18 ends in which digit?",
        optionA: "2",
        optionB: "8",
        optionC: "6",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Which number is closest to the cube root of 857375?",
        optionA: "90",
        optionB: "95",
        optionC: "100",
        correctAnswer: "95",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cube root of 1000 is ______.",
        optionA: "8",
        optionB: "10",
        optionC: "5",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "The cube root of 216 is ______.",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "The cube of –4 is ______.",
        optionA: "–64",
        optionB: "64",
        optionC: "–16",
        correctAnswer: "–64",
      }),
      shuffleOptions({
        question: "202 must be increased by ______ to make it a perfect cube.",
        optionA: "12",
        optionB: "9",
        optionC: "14",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "0.027 is equal to ( ______ )³.",
        optionA: "0.3",
        optionB: "0.15",
        optionC: "0.7 1",
        correctAnswer: "0.3",
      }),
      shuffleOptions({
        question: "The cube of 12 2 is ______.",
        optionA: "5 1",
        optionB: "13 3 1",
        optionC: "18 8",
        correctAnswer: "18 8",
      }),
      shuffleOptions({
        question: "The cube root of 0.729 is ______.",
        optionA: "0.7",
        optionB: "1.2",
        optionC: "0.9",
        correctAnswer: "0.9",
      }),
      shuffleOptions({
        question: "The cube of 9 ends in ______.",
        optionA: "9",
        optionB: "3",
        optionC: "1",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "Prime factors of a perfect cube must occur in groups of ______.",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "27 is equal to ( ______ )³.",
        optionA: "9",
        optionB: "3",
        optionC: "2",
        correctAnswer: "3",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cube root of 1000 is 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cube of a number ending in 7 always ends in 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cube root can never be a decimal number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cube of a negative number is always negative.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "3375 is not a perfect cube.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "512 is the cube of 9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cube of 13 ends in 7.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A number ending in 1 has a cube also ending in 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "729 is the cube of 8.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cube of a rational number is always rational.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
