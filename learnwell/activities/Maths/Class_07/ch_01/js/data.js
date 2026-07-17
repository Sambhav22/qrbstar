export const chapter = "Chapter - 1: Integers";
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
        question: "Which integer lies farthest to the left on the number line?",
        optionA: "–3",
        optionB: "–12",
        optionC: "–7",
        correctAnswer: "–12",
      }),
      shuffleOptions({
        question: "Which of the following is a positive integer?",
        optionA: "–9",
        optionB: "–1",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "The absolute value of –15 is:",
        optionA: "–15",
        optionB: "0",
        optionC: "15",
        correctAnswer: "15",
      }),
      shuffleOptions({
        question: "Which integer has the greatest absolute value?",
        optionA: "–8",
        optionB: "12",
        optionC: "–20",
        correctAnswer: "–20",
      }),
      shuffleOptions({
        question: "Which of the following is neither positive nor negative?",
        optionA: "–1",
        optionB: "1",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Which pair represents opposite integers?",
        optionA: "–5 and –5",
        optionB: "7 and –7",
        optionC: "3 and –3 and 3",
        correctAnswer: "7 and –7",
      }),
      shuffleOptions({
        question: "Which integer is the successor of –4?",
        optionA: "–3",
        optionB: "–5",
        optionC: "4",
        correctAnswer: "–3",
      }),
      shuffleOptions({
        question: "Which statement is true?",
        optionA: "–2 > 4",
        optionB: "0 > –5",
        optionC: "–8 > –3",
        correctAnswer: "0 > –5",
      }),
      shuffleOptions({
        question: "Which integer is greater?",
        optionA: "–10",
        optionB: "–2",
        optionC: "–1",
        correctAnswer: "–2",
      }),
      shuffleOptions({
        question: "Which of the following has the smallest value?",
        optionA: "0",
        optionB: "–9",
        optionC: "–15",
        correctAnswer: "–15",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The absolute value of –22 is ______.",
        optionA: "–22",
        optionB: "22",
        optionC: "0",
        correctAnswer: "22",
      }),
      shuffleOptions({
        question: "The predecessor of 6 is ______.",
        optionA: "5",
        optionB: "7",
        optionC: "–5",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "On a number line, –11 lies to the ______ of –6.",
        optionA: "right",
        optionB: "left",
        optionC: "same position",
        correctAnswer: "left",
      }),
      shuffleOptions({
        question: "The successor of –9 is ______.",
        optionA: "–8",
        optionB: "–10",
        optionC: "8",
        correctAnswer: "–8",
      }),
      shuffleOptions({
        question: "An integer that lies between –4 and –2 is ______.",
        optionA: "–3",
        optionB: "–1",
        optionC: "–5",
        correctAnswer: "–3",
      }),
      shuffleOptions({
        question: "(–6) + 2 equals ______.",
        optionA: "–8",
        optionB: "–4",
        optionC: "4",
        correctAnswer: "–4",
      }),
      shuffleOptions({
        question: "The integer whose opposite is –12 is ______.",
        optionA: "12",
        optionB: "–12",
        optionC: "0",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "Zero is the ______ identity for addition.",
        optionA: "multiplicative",
        optionB: "additive",
        optionC: "neutral",
        correctAnswer: "additive",
      }),
      shuffleOptions({
        question: "1 is the ______ identity for multiplication.",
        optionA: "multiplicative",
        optionB: "additive",
        optionC: "negative",
        correctAnswer: "multiplicative",
      }),
      shuffleOptions({
        question: "The product of a positive integer and a negative integer is always ______.",
        optionA: "positive",
        optionB: "zero",
        optionC: "negative",
        correctAnswer: "negative",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Every negative integer is less than every positive integer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Zero is greater than all negative integers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The opposite of 0 is 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The absolute value of –50 is 50.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "–3 lies to the right of –1 on the number line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Adding zero to any integer changes its value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The quotient of two integers with different signs is positive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Multiplication of integers is commutative.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The successor of –1 is 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The product of three negative integers is negative.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
