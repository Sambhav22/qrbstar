export const chapter = "Chapter - 4: Subtraction Up To 10";
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
        question: "How many are left when we take away 3 from 8?",
        optionA: "6",
        optionB: "5",
        optionC: "4",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "What do we get when we subtract 5 from 9?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "How many are left if 7 kites are there and 6 fly away?",
        optionA: "2",
        optionB: "1",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "What is the answer when we subtract 2 from 6?",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "How many are left if 9 children are playing and 4 go home?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "When we take away 1 from 5, how many are left?",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "What is the answer when 0 is subtracted from 6?",
        optionA: "5",
        optionB: "6",
        optionC: "0",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "What is 9 minus 7 equal to?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "What is the result when a number is subtracted from itself?",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "What is the answer when 8 minus 2 is done?",
        optionA: "6",
        optionB: "5",
        optionC: "4",
        correctAnswer: "6",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "9 – ____ = 4",
        optionA: "5",
        optionB: "4",
        optionC: "3",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "____ – 3 = 2",
        optionA: "6",
        optionB: "5",
        optionC: "4",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "7 – ____ = 6",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "____ – 5 = 3",
        optionA: "8",
        optionB: "7",
        optionC: "6",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "4 – ____ = 2",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "____ – 7 = 0",
        optionA: "7",
        optionB: "8",
        optionC: "6",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "5 – ____ = 4",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "8 – ____ = 7",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "____ – 0 = 9",
        optionA: "9",
        optionB: "8",
        optionC: "10",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "6 – ____ = 5",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "1",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Subtracting zero changes the number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "5 – 2 = 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "8 – 8 = 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subtracting one from a number gives the next number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Subtraction is shown by the sign ‘–’.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "9 – 3 = 7.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "7 – 0 = 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When we subtract, we get a smaller number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "6 – 6 = 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Subtraction can be done vertically and horizontally.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
