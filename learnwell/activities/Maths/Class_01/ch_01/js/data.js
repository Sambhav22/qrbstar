export const chapter = "Chapter - 1: Number Up To 10";
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
        question: "Which number comes just after 5?",
        optionA: "4",
        optionB: "6",
        optionC: "7",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "Which is the greatest one-digit number?",
        optionA: "9",
        optionB: "8",
        optionC: "10",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "Which of these shows nothing?",
        optionA: "0",
        optionB: "1",
        optionC: "10",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "How many digits are there in the number 10?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Which number name is correct for 7?",
        optionA: "Saven",
        optionB: "Seven",
        optionC: "Seveen",
        correctAnswer: "Seven",
      }),
      shuffleOptions({
        question: "Which number comes before 9?",
        optionA: "10",
        optionB: "8",
        optionC: "7",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "Which number is between 3 and 5?",
        optionA: "2",
        optionB: "4",
        optionC: "6",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Which number is smaller?",
        optionA: "8",
        optionB: "6",
        optionC: "5",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "Which sign means “greater than”?",
        optionA: "<",
        optionB: ">",
        optionC: "=",
        correctAnswer: ">",
      }),
      shuffleOptions({
        question: "What is 1 more than 9?",
        optionA: "10",
        optionB: "8",
        optionC: "11",
        correctAnswer: "10",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0 means ________.",
        optionA: "nothing",
        optionB: "something",
        optionC: "two",
        correctAnswer: "nothing",
      }),
      shuffleOptions({
        question: "The number before 3 is ________.",
        optionA: "2",
        optionB: "4",
        optionC: "5",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The number after 8 is ________.",
        optionA: "7",
        optionB: "9",
        optionC: "10",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "The number between 5 and 7 is ________.",
        optionA: "6",
        optionB: "4",
        optionC: "8",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "The first two-digit number is ________.",
        optionA: "1",
        optionB: "9",
        optionC: "10",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "3 is ________ than 6.",
        optionA: "greater",
        optionB: "smaller",
        optionC: "equal",
        correctAnswer: "smaller",
      }),
      shuffleOptions({
        question: "5 is ________ than 2.",
        optionA: "greater",
        optionB: "smaller",
        optionC: "equal",
        correctAnswer: "greater",
      }),
      shuffleOptions({
        question: "The number name of 4 is ________.",
        optionA: "Fore",
        optionB: "Four",
        optionC: "Foure",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "9 and 9 are ________.",
        optionA: "equal",
        optionB: "different",
        optionC: "greater",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "The smallest number in 2, 5, and 7 is ________.",
        optionA: "2",
        optionB: "5",
        optionC: "7",
        correctAnswer: "2",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Zero means no object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "10 is a one-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The number before 2 is 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "8 < 6.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "9 is greater than 4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number between 2 and 4 is 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number name of 5 is “Five”.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The first two-digit number is 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number after 7 is 6.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "4 = 4 means both are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
