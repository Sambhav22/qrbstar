export const chapter = "Chapter - 5: Fractions";
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
        question: "What is a fraction?",
        optionA: "A whole number",
        optionB: "A number representing a part of a whole",
        optionC: "A decimal",
        correctAnswer: "A number representing a part of a whole",
      }),
      shuffleOptions({
        question: "Which part of a fraction shows the total number of equal parts?",
        optionA: "Numerator",
        optionB: "Denominator",
        optionC: "Whole",
        correctAnswer: "Denominator",
      }),
      shuffleOptions({
        question: "Which of the following is a unit fraction? 2",
        optionA: "5 3",
        optionB: "4 1",
        optionC: "7",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "Which fraction represents five-twelfths? 12",
        optionA: "5 5",
        optionB: "12  5",
        optionC: "12",
        correctAnswer: "12  5",
      }),
      shuffleOptions({
        question: "Which of the following is a proper fraction? 9",
        optionA: "7 7",
        optionB: "9  5",
        optionC: "5",
        correctAnswer: "9  5",
      }),
      shuffleOptions({
        question: "What is the fraction for shaded part if 1 out of 4 equal parts is shaded? 4",
        optionA: "1 1",
        optionB: "4  3",
        optionC: "4",
        correctAnswer: "4  3",
      }),
      shuffleOptions({
        question: "Which of the following fractions is equal to one whole? 4",
        optionA: "5 4",
        optionB: "4  1",
        optionC: "5",
        correctAnswer: "4  1",
      }),
      shuffleOptions({
        question: "What do we call fractions having the same value?",
        optionA: "Like fractions",
        optionB: "Unit fractions",
        optionC: "Equivalent fractions",
        correctAnswer: "Equivalent fractions",
      }),
      shuffleOptions({
        question: "Which of the following is an improper fraction? 5",
        optionA: "8 7",
        optionB: "7  3",
        optionC: "10",
        correctAnswer: "7  3",
      }),
      shuffleOptions({
        question: "Which fraction represents three-fourths? 3",
        optionA: "4  4",
        optionB: "3 1",
        optionC: "4",
        correctAnswer: "4  4",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A fraction is written in the form of ______.",
        optionA: "a + b a",
        optionB: "b",
        optionC: "a × b 5",
        correctAnswer: "b",
      }),
      shuffleOptions({
        question: "In the fraction , the numerator is ______. 9",
        optionA: "9",
        optionB: "5",
        optionC: "14",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "A fraction whose numerator is 1 is called a ______ fraction.",
        optionA: "proper",
        optionB: "unit",
        optionC: "mixed 7",
        correctAnswer: "unit",
      }),
      shuffleOptions({
        question: "In 11, the denominator is ______.",
        optionA: "7",
        optionB: "11",
        optionC: "18",
        correctAnswer: "11",
      }),
      shuffleOptions({
        question: "Fractions having the same denominators are called ______ fractions.",
        optionA: "unlike",
        optionB: "equivalent",
        optionC: "like",
        correctAnswer: "like",
      }),
      shuffleOptions({
        question: "A fraction less than 1 is called a ______ fraction.",
        optionA: "improper",
        optionB: "proper",
        optionC: "mixed",
        correctAnswer: "proper",
      }),
      shuffleOptions({
        question: "Two fractions with the same value are called ______ fractions.",
        optionA: "equivalent",
        optionB: "unit",
        optionC: "unlike",
        correctAnswer: "equivalent",
      }),
      shuffleOptions({
        question: "1 hour is equal to ______ minutes.",
        optionA: "30",
        optionB: "60",
        optionC: "100",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "45 minutes is equal to ______ of an hour. 1",
        optionA: "2 3",
        optionB: "4  2",
        optionC: "3",
        correctAnswer: "4  2",
      }),
      shuffleOptions({
        question: "A fraction greater than or equal to 1 is called a ______ fraction.",
        optionA: "proper",
        optionB: "improper",
        optionC: "unit",
        correctAnswer: "improper",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A fraction represents a part of a whole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The numerator shows the total number of equal parts.",
        optionA: "True",
        optionB: "False  1",
        correctAnswer: "False  1",
      }),
      shuffleOptions({
        question: "5 is a unit fraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Proper fractions are always less than 1.",
        optionA: "True",
        optionB: "False 9",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4 is a proper fraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fractions with different denominators are called unlike fractions.",
        optionA: "True",
        optionB: "False 2 1",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "and are equivalent fractions. 4 2",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A mixed fraction contains a whole number and a proper fraction.",
        optionA: "True",
        optionB: "False 5",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "5 is less than 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "To find a fraction of a collection, we multiply the fraction by the total number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
