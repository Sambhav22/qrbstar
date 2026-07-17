export const chapter = "Chapter - 9: Multiplication";
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
        question: "What is the result of multiplication called?",
        optionA: "Sum",
        optionB: "Product",
        optionC: "Difference",
        correctAnswer: "Product",
      }),
      shuffleOptions({
        question: "Which sign is used for multiplication?",
        optionA: "+",
        optionB: "–",
        optionC: "×",
        correctAnswer: "×",
      }),
      shuffleOptions({
        question: "2 × 4 is equal to",
        optionA: "6",
        optionB: "8",
        optionC: "10",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "3 × 5 means",
        optionA: "3 added 5 times",
        optionB: "5 added 3 times",
        optionC: "Subtract 3 from 5",
        correctAnswer: "3 added 5 times",
      }),
      shuffleOptions({
        question: "5 × 0 equals",
        optionA: "5",
        optionB: "0",
        optionC: "10",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "When a number is multiplied by 1, the answer is",
        optionA: "The number itself",
        optionB: "Zero",
        optionC: "One more than the number",
        correctAnswer: "The number itself",
      }),
      shuffleOptions({
        question: "4 × 5 is equal to",
        optionA: "15",
        optionB: "20",
        optionC: "25",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "6 × 2 equals",
        optionA: "8",
        optionB: "12",
        optionC: "14",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "2 × 10 equals",
        optionA: "12",
        optionB: "20",
        optionC: "10",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "7 × 1 equals",
        optionA: "8",
        optionB: "7",
        optionC: "6",
        correctAnswer: "7",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "4 × 3 = ______",
        optionA: "10",
        optionB: "12",
        optionC: "14",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "5 × 2 = ______",
        optionA: "8",
        optionB: "10",
        optionC: "12",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "2 × 6 = ______",
        optionA: "10",
        optionB: "12",
        optionC: "14",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "3 × 5 = ______",
        optionA: "15",
        optionB: "10",
        optionC: "12",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "9 × 1 = ______",
        optionA: "0",
        optionB: "9",
        optionC: "8",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "8 × 0 = ______",
        optionA: "0",
        optionB: "8",
        optionC: "1",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "7 × 2 = ______",
        optionA: "12",
        optionB: "14",
        optionC: "16",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "4 × 4 = ______",
        optionA: "16",
        optionB: "18",
        optionC: "14",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "5 × 3 = ______",
        optionA: "15",
        optionB: "10",
        optionC: "12",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "2 × 7 = ______",
        optionA: "12",
        optionB: "14",
        optionC: "16",
        correctAnswer: "14",
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
        question: "2 × 4 = 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "3 × 0 = 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "4 × 1 = 4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The result of multiplication is called Product.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "5 × 2 = 12.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "3 × 5 = 15.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Any number multiplied by 0 gives 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "6 × 2 = 12.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4 × 0 = 4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
