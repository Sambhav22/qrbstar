export const chapter = "Chapter - 1: Rational Numbers";
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
        question: "Which rational number has the greatest absolute value? 5",
        optionA: "–  6 1",
        optionB: "4 1",
        optionC: "– 3",
        correctAnswer: "–  6 1",
      }),
      shuffleOptions({
        question: "Which of the following represents a negative rational number? 7",
        optionA: "– 9  5",
        optionB: "– 9 7",
        optionC: "9 1 1",
        correctAnswer: "– 9  5",
      }),
      shuffleOptions({
        question: "Which rational number lies between 3 and 2? 2",
        optionA: "5  3",
        optionB: "7 1",
        optionC: "6 4",
        correctAnswer: "5  3",
      }),
      shuffleOptions({
        question: "What is the reciprocal of – 7 ? 7",
        optionA: "– 4",
        optionB: "3",
        optionC: "5 3",
        correctAnswer: "– 4",
      }),
      shuffleOptions({
        question: "Which operation gives the result – ? 2 2 9",
        optionA: "3 × – 4  2 9",
        optionB: "– 3 × –4 3",
        optionC: "× –1 2",
        correctAnswer: "3 × – 4  2 9",
      }),
      shuffleOptions({
        question: "Which of the following rational numbers is in standard form? 18",
        optionA: "– 24 3",
        optionB: "–  4 12",
        optionC: "– 16",
        correctAnswer: "–  4 12",
      }),
      shuffleOptions({
        question: "Which rational number is greater? 3",
        optionA: "– 4 5",
        optionB: "– 8  7",
        optionC: "– 8 12",
        correctAnswer: "– 8  7",
      }),
      shuffleOptions({
        question: "Which rational number is equivalent to – 18? 2",
        optionA: "– 3  2",
        optionB: "3 4",
        optionC: "– 9",
        correctAnswer: "– 3  2",
      }),
      shuffleOptions({
        question: "What is the product of 0 and any rational number?",
        optionA: "The rational number",
        optionB: "1",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Which rational number remains unchanged when multiplied by 1?",
        optionA: "Only positive rational numbers",
        optionB: "Any rational number",
        optionC: "Only negative rational numbers",
        correctAnswer: "Any rational number",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A rational number whose denominator is negative can be rewritten with a ______ denominator.",
        optionA: "positive",
        optionB: "zero",
        optionC: "smaller 2 3",
        correctAnswer: "positive",
      }),
      shuffleOptions({
        question: "A rational number between 5 and 5 is ______. 1",
        optionA: "5 1",
        optionB: "2  4",
        optionC: "5",
        correctAnswer: "2  4",
      }),
      shuffleOptions({
        question: "The number whose reciprocal does not exist is ______.",
        optionA: "1",
        optionB: "–1",
        optionC: "0  11",
        correctAnswer: "0  11",
      }),
      shuffleOptions({
        question: "The additive inverse of 13 is ______.",
        optionA: "0 11",
        optionB: "– 13",
        optionC: "1",
        correctAnswer: "– 13",
      }),
      shuffleOptions({
        question: "______ rational numbers have the same value even though their numerators and denominators differ.",
        optionA: "Equivalent",
        optionB: "Proper",
        optionC: "Mixed",
        correctAnswer: "Equivalent",
      }),
      shuffleOptions({
        question: "A rational number is positive if the numerator and denominator have ______ signs.",
        optionA: "opposite",
        optionB: "same",
        optionC: "zero",
        correctAnswer: "same",
      }),
      shuffleOptions({
        question: "To add rational numbers, we make the denominators ______.",
        optionA: "negative",
        optionB: "equal",
        optionC: "zero 9",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "The rational number – 12 in standard form is ______. 3",
        optionA: "– 4  9",
        optionB: "– 4 1",
        optionC: "– 3 2",
        correctAnswer: "– 4  9",
      }),
      shuffleOptions({
        question: "The value of |– | is ______. 7 2",
        optionA: "– 7 2",
        optionB: "7",
        optionC: "0",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "A rational number lying between –1 and 0 is ______. 3",
        optionA: "– 2 1",
        optionB: "–  5 1",
        optionC: "3",
        correctAnswer: "–  5 1",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The reciprocal of any non-zero rational number always exists.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sum of two rational numbers is always a rational number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The absolute value of a rational number is always negative.",
        optionA: "True",
        optionB: "False  3 1",
        correctAnswer: "False  3 1",
      }),
      shuffleOptions({
        question: "– is greater than – . 4 2",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Between any two rational numbers, there are infinitely many rational numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rational number can have a denominator equal to zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "0 is the only rational number whose additive inverse is also 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Multiplying a rational number by its reciprocal always gives 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every positive rational number is greater than every negative rational number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The standard form of a rational number has its numerator and denominator in lowest terms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
