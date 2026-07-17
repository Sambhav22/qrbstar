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
        question: "What do we call the number written above the line in a fraction?",
        optionA: "Denominator",
        optionB: "Numerator",
        optionC: "Whole part",
        correctAnswer: "Numerator",
      }),
      shuffleOptions({
        question: "Which of the following is a proper fraction? 9",
        optionA: "7 8",
        optionB: "8 3",
        optionC: "5",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "Which fraction is the greatest? 4",
        optionA: "9 7",
        optionB: "9  2",
        optionC: "9",
        correctAnswer: "9  2",
      }),
      shuffleOptions({
        question: "Which of these represents a unit fraction? 3",
        optionA: "7 1",
        optionB: "6  5",
        optionC: "6 2",
        correctAnswer: "6  5",
      }),
      shuffleOptions({
        question: "in lowest form is: 8 2",
        optionA: "4 1",
        optionB: "8 1",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Fractions with the same denominator are called:",
        optionA: "Like fractions",
        optionB: "Unit fractions",
        optionC: "Mixed fractions",
        correctAnswer: "Like fractions",
      }),
      shuffleOptions({
        question: "Which of the following is an improper fraction? 5",
        optionA: "9 11",
        optionB: "7  3",
        optionC: "4 1 2",
        correctAnswer: "7  3",
      }),
      shuffleOptions({
        question: "3 and 6are:",
        optionA: "Unlike fractions",
        optionB: "Equivalent fractions",
        optionC: "Mixed fractions",
        correctAnswer: "Equivalent fractions",
      }),
      shuffleOptions({
        question: "Mixing a whole number with a proper fraction forms a:",
        optionA: "Improper fraction",
        optionB: "Unit fraction",
        optionC: "Mixed fraction",
        correctAnswer: "Mixed fraction",
      }),
      shuffleOptions({
        question: "Which number line point shows the greatest value? 2",
        optionA: "8 5",
        optionB: "8 7",
        optionC: "8",
        correctAnswer: "8",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A fraction represents a part of a ______.",
        optionA: "group",
        optionB: "whole",
        optionC: "number line 5",
        correctAnswer: "whole",
      }),
      shuffleOptions({
        question: "In 12, the number 12 is the ______.",
        optionA: "numerator",
        optionB: "denominator",
        optionC: "unit fraction",
        correctAnswer: "denominator",
      }),
      shuffleOptions({
        question: "Fractions that have different denominators are called ______ fractions.",
        optionA: "like",
        optionB: "unlike",
        optionC: "proper 1",
        correctAnswer: "unlike",
      }),
      shuffleOptions({
        question: "4 = 6",
        optionA: "5 2",
        optionB: "8",
        optionC: "10",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "When adding like fractions, we add the ______.",
        optionA: "denominators",
        optionB: "numerators",
        optionC: "mixed numbers",
        correctAnswer: "numerators",
      }),
      shuffleOptions({
        question: "A fraction with numerator 1 is called a ______ fraction.",
        optionA: "unit",
        optionB: "mixed",
        optionC: "improper 6",
        correctAnswer: "unit",
      }),
      shuffleOptions({
        question: "9 reduced to lowest terms is ______. 2",
        optionA: "3  3",
        optionB: "9 1",
        optionC: "6",
        correctAnswer: "3  3",
      }),
      shuffleOptions({
        question: "To compare fractions with same numerator, the one with the ______ denominator is smaller.",
        optionA: "smaller",
        optionB: "bigger",
        optionC: "bigger  1",
        correctAnswer: "bigger  1",
      }),
      shuffleOptions({
        question: "Converting 3 4 into an improper fraction gives ______. 15",
        optionA: "4 12",
        optionB: "4 13",
        optionC: "4  7 3",
        correctAnswer: "4  7 3",
      }),
      shuffleOptions({
        question: "11 – 11 = ______. 3",
        optionA: "11 4",
        optionB: "11  10",
        optionC: "11",
        correctAnswer: "11  10",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "2 and 4 represent the same fraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A mixed fraction always contains an improper fraction inside it.",
        optionA: "True",
        optionB: "False  5 5",
        correctAnswer: "False  5 5",
      }),
      shuffleOptions({
        question: "9 is smaller than 11.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When subtracting like fractions, we subtract the denominators.",
        optionA: "True",
        optionB: "False  9",
        correctAnswer: "False  9",
      }),
      shuffleOptions({
        question: "is equal to 1. 9",
        optionA: "True",
        optionB: "False 3",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "is a unit fraction. 7",
        optionA: "True",
        optionB: "False  4 1",
        correctAnswer: "False  4 1",
      }),
      shuffleOptions({
        question: "12in simplest form is 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All proper fractions are less than 1.",
        optionA: "True",
        optionB: "False 1 1",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "9 is greater than 5 .",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fractions with the same denominator can be compared by looking at their numerators.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
