export const chapter = "Chapter - 3: Even and Odd Numbers";
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
        question: "Which number ends with an even digit?",
        optionA: "27",
        optionB: "42",
        optionC: "53",
        correctAnswer: "42",
      }),
      shuffleOptions({
        question: "Which of the following cannot form complete pairs?",
        optionA: "18",
        optionB: "25",
        optionC: "40",
        correctAnswer: "25",
      }),
      shuffleOptions({
        question: "Which numbers among 1, 2, 3, 4, 5 are odd?",
        optionA: "1, 3, 5",
        optionB: "2, 4",
        optionC: "4, 5",
        correctAnswer: "1, 3, 5",
      }),
      shuffleOptions({
        question: "How many even numbers are there between 1 and 10?",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Which number is even?",
        optionA: "17",
        optionB: "20",
        optionC: "15",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "What is the next even number after 44?",
        optionA: "45",
        optionB: "46",
        optionC: "47",
        correctAnswer: "46",
      }),
      shuffleOptions({
        question: "9, 11, 13, 15 are all what type of numbers?",
        optionA: "Even",
        optionB: "Odd",
        optionC: "Prime",
        correctAnswer: "Odd",
      }),
      shuffleOptions({
        question: "Which number ends with 2?",
        optionA: "22",
        optionB: "25",
        optionC: "27",
        correctAnswer: "22",
      }),
      shuffleOptions({
        question: "Which number cannot be divided into pairs without a leftover?",
        optionA: "12",
        optionB: "19",
        optionC: "20",
        correctAnswer: "19",
      }),
      shuffleOptions({
        question: "Which of the following is a two-digit even number?",
        optionA: "73",
        optionB: "64",
        optionC: "57",
        correctAnswer: "64",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The number 16 is an ______ number because it ends with 6.",
        optionA: "Odd",
        optionB: "Even",
        optionC: "None",
        correctAnswer: "Even",
      }),
      shuffleOptions({
        question: "The number 51 ends with ______.",
        optionA: "0",
        optionB: "1",
        optionC: "5",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "3, 5, 7, 9 are all ______ numbers.",
        optionA: "Odd",
        optionB: "Even",
        optionC: "Prime",
        correctAnswer: "Odd",
      }),
      shuffleOptions({
        question: "The number 42 is an ______ number.",
        optionA: "Odd",
        optionB: "Even",
        optionC: "Composite",
        correctAnswer: "Even",
      }),
      shuffleOptions({
        question: "The number 65 is an ______ number because one is left unpaired.",
        optionA: "Even",
        optionB: "Odd",
        optionC: "None",
        correctAnswer: "Odd",
      }),
      shuffleOptions({
        question: "The number 90 ends with ______.",
        optionA: "0",
        optionB: "2",
        optionC: "5",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "The number 88 is an ______ number.",
        optionA: "Odd",
        optionB: "Even",
        optionC: "Whole",
        correctAnswer: "Even",
      }),
      shuffleOptions({
        question: "The next odd number after 27 is ______.",
        optionA: "28",
        optionB: "29",
        optionC: "30",
        correctAnswer: "29",
      }),
      shuffleOptions({
        question: "6, 8, 10, 12 are ______ numbers.",
        optionA: "Even",
        optionB: "Odd",
        optionC: "Prime",
        correctAnswer: "Even",
      }),
      shuffleOptions({
        question: "39 cannot be grouped into equal pairs, so it is ______.",
        optionA: "Even",
        optionB: "Odd",
        optionC: "Composite",
        correctAnswer: "Odd",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Numbers ending with 0 are even.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "15 is an even number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "64 can be grouped into pairs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "25 ends with 5, so it is odd.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "38 is an odd number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "2 is the smallest even number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "73 is odd because it ends with 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "100 is an odd number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "9 cannot form full pairs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4 is even because it ends with 4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
