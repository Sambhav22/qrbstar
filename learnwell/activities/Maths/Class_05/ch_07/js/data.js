export const chapter = "Chapter - 7: Fractions";
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
        question: "What is the name of a fraction whose numerator is 1?",
        optionA: "Proper fraction",
        optionB: "Unit fraction",
        optionC: "Like fraction",
        correctAnswer: "Unit fraction",
      }),
      shuffleOptions({
        question: "Which of the following fractions is an improper fraction? 5",
        optionA: "7 9",
        optionB: "4  3",
        optionC: "8 3 1",
        correctAnswer: "4  3",
      }),
      shuffleOptions({
        question: "Which fraction is greater: or ? 5 5 3",
        optionA: "5  1",
        optionB: "5",
        optionC: "Both are equal",
        correctAnswer: "5  1",
      }),
      shuffleOptions({
        question: "What do we call fractions that have the same denominator?",
        optionA: "Unlike fractions",
        optionB: "Unit fractions",
        optionC: "Like fractions  2",
        correctAnswer: "Like fractions  2",
      }),
      shuffleOptions({
        question: "What is the reciprocal of 3? 3",
        optionA: "2 2",
        optionB: "3 3",
        optionC: "1 2",
        correctAnswer: "2 2",
      }),
      shuffleOptions({
        question: "Which of the following is equivalent to 4? 3",
        optionA: "4 1",
        optionB: "2  4",
        optionC: "2",
        correctAnswer: "2  4",
      }),
      shuffleOptions({
        question: "What do we get when we multiply the numerators and denominators of two fractions?",
        optionA: "Lowest terms",
        optionB: "Product of fractions",
        optionC: "Mixed fraction 1",
        correctAnswer: "Product of fractions",
      }),
      shuffleOptions({
        question: "What is 6 of 18?",
        optionA: "4",
        optionB: "6",
        optionC: "3  2 2",
        correctAnswer: "3  2 2",
      }),
      shuffleOptions({
        question: "Which fraction is smaller: 3 or 5? 2",
        optionA: "3 2",
        optionB: "5",
        optionC: "Both are equal",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "What do we call the number written below the line in a fraction?",
        optionA: "Numerator",
        optionB: "Denominator",
        optionC: "Factor",
        correctAnswer: "Denominator",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A fraction represents a part of a ________.",
        optionA: "collection",
        optionB: "whole",
        optionC: "number line",
        correctAnswer: "whole",
      }),
      shuffleOptions({
        question: "Fractions with different denominators are called ______ fractions.",
        optionA: "like",
        optionB: "unlike",
        optionC: "proper 6",
        correctAnswer: "unlike",
      }),
      shuffleOptions({
        question: "The simplest form of 18 is ______. 1",
        optionA: "3",
        optionB: "2",
        optionC: "5",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "To find equivalent fractions, we multiply the numerator and denominator by the ______ number.",
        optionA: "smaller",
        optionB: "different",
        optionC: "same  1",
        correctAnswer: "same  1",
      }),
      shuffleOptions({
        question: "of 21 is ______. 3",
        optionA: "5",
        optionB: "7",
        optionC: "9",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "A mixed fraction has a whole number part and a ______ fraction.",
        optionA: "improper",
        optionB: "unit",
        optionC: "proper",
        correctAnswer: "proper",
      }),
      shuffleOptions({
        question: "The reciprocal of 4 is ______. 1",
        optionA: "4",
        optionB: "6 2 1",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "5 + 5 = ______.",
        optionA: "1 3",
        optionB: "5",
        optionC: "2 5 1",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "– = ______. 8 8 4",
        optionA: "8",
        optionB: "10",
        optionC: "5",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "A fraction with numerator smaller than the denominator is called a ______ fraction.",
        optionA: "mixed",
        optionB: "proper",
        optionC: "unit",
        correctAnswer: "proper",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "2 and 4 represent the same value.",
        optionA: "True",
        optionB: "False 5",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "3 is a proper fraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Two fractions are equivalent if their cross-products are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In comparing fractions with the same denominator, the fraction with the smaller numerator is greater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The reciprocal of 1 is 1.",
        optionA: "True",
        optionB: "False 3 4",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "7 is greater than 7.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "To add unlike fractions, we convert them to like fractions.",
        optionA: "True",
        optionB: "False 1 1",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "10 is greater than 2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A mixed fraction can be converted into an improper fraction.",
        optionA: "True",
        optionB: "False 3 1",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "9 in simplest form is 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
