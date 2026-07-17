export const chapter = "Chapter - 3: Addition Up To 10";
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
        question: "What is the sum of 2 and 3?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "Which sign is used for addition?",
        optionA: "–",
        optionB: "+",
        optionC: "×",
        correctAnswer: "+",
      }),
      shuffleOptions({
        question: "What is 7 + 1 equal to?",
        optionA: "9",
        optionB: "7",
        optionC: "8",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "When zero is added to a number, what is the result?",
        optionA: "The number itself",
        optionB: "The next number",
        optionC: "The previous number",
        correctAnswer: "The number itself",
      }),
      shuffleOptions({
        question: "What is the sum of 3 and 5?",
        optionA: "8",
        optionB: "9",
        optionC: "7",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "How do we add on a number line?",
        optionA: "Jump backwards",
        optionB: "Jump forward",
        optionC: "Stand still",
        correctAnswer: "Jump forward",
      }),
      shuffleOptions({
        question: "What do we call the process of putting two or more numbers together?",
        optionA: "Subtraction",
        optionB: "Addition",
        optionC: "Multiplication",
        correctAnswer: "Addition",
      }),
      shuffleOptions({
        question: "What is 4 + 4 equal to?",
        optionA: "7",
        optionB: "8",
        optionC: "9",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "What is 6 + 0?",
        optionA: "7",
        optionB: "0",
        optionC: "6",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "Adding 1 to a number gives the ______ number.",
        optionA: "same",
        optionB: "next",
        optionC: "previous",
        correctAnswer: "next",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "3 + ______ = 5",
        optionA: "2",
        optionB: "3",
        optionC: "1",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "4 + ______ = 9",
        optionA: "5",
        optionB: "4",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "______ + 0 = 4",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "5 + ______ = 7",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "2 + ______ = 6",
        optionA: "4",
        optionB: "3",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "______ + 1 = 4",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "1 + ______ = 8",
        optionA: "6",
        optionB: "7",
        optionC: "8",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "7 + ______ = 9",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "______ + 5 = 10",
        optionA: "5",
        optionB: "4",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "0 + ______ = 3",
        optionA: "3",
        optionB: "2",
        optionC: "4",
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
        question: "Addition means putting things together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The symbol used for addition is ×.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When we add zero to a number, the number changes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 + 5 = 6.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sum of 4 and 2 is 7.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Changing the order of numbers in addition changes the result.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "3 + 1 = 4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "6 + 3 = 8.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "0 + 9 = 9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adding one gives the previous number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
