export const chapter = "Chapter - 6: Fraction";
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
        question: "What do we call a complete object?",
        optionA: "Half",
        optionB: "Whole",
        optionC: "Quarter",
        correctAnswer: "Whole",
      }),
      shuffleOptions({
        question: "What are the equal parts of a whole called?",
        optionA: "Fractions",
        optionB: "Numbers",
        optionC: "Shapes",
        correctAnswer: "Fractions",
      }),
      shuffleOptions({
        question: "What is the top number of a fraction known as?",
        optionA: "Denominator",
        optionB: "Numerator",
        optionC: "Whole",
        correctAnswer: "Numerator",
      }),
      shuffleOptions({
        question: "How is one-fourth written in numbers?",
        optionA: "1 1",
        optionB: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Which fraction means 1 part out of 3 equal parts?",
        optionA: "4 1",
        optionB: "3",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "Which part of the fraction tells total equal parts?",
        optionA: "Numerator",
        optionB: "Denominator",
        optionC: "Whole",
        correctAnswer: "Denominator",
      }),
      shuffleOptions({
        question: "What fraction shows two parts taken out of five equal parts? 2",
        optionA: "5",
        optionB: "2",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "What do we call a group of similar objects?",
        optionA: "Whole",
        optionB: "Collection",
        optionC: "Denominator",
        correctAnswer: "Collection",
      }),
      shuffleOptions({
        question: "Which of the following is a fraction of a whole? 1",
        optionA: "2",
        optionB: "5",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Which fraction shows three parts out of eight equal parts?",
        optionA: "8 3",
        optionB: "8",
        optionC: "3",
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
        question: "One-half is written as ______.",
        optionA: "4 1",
        optionB: "2",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The number below the line in a fraction is called the ______.",
        optionA: "Numerator",
        optionB: "Denominator",
        optionC: "Whole",
        correctAnswer: "Denominator",
      }),
      shuffleOptions({
        question: "One-third means 1 part out of ______ equal parts.",
        optionA: "3",
        optionB: "4",
        optionC: "2",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "A group of same objects is called a ______.",
        optionA: "Collection",
        optionB: "Fraction",
        optionC: "Shape",
        correctAnswer: "Collection",
      }),
      shuffleOptions({
        question: "The numerator shows how many parts are ______.",
        optionA: "Total",
        optionB: "Taken",
        optionC: "Missing",
        correctAnswer: "Taken",
      }),
      shuffleOptions({
        question: "One-fourth is also called a ______.",
        optionA: "Pair",
        optionB: "Quarter",
        optionC: "Whole",
        correctAnswer: "Quarter",
      }),
      shuffleOptions({
        question: "The fraction for five parts taken out of six equal parts is ______.",
        optionA: "5 5",
        optionB: "6",
        optionC: "1",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "The fraction three-sevenths is written as ______. 3",
        optionA: "7",
        optionB: "3",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "Equal parts are needed to form a ______.",
        optionA: "Number",
        optionB: "Fraction",
        optionC: "Shape",
        correctAnswer: "Fraction",
      }),
      shuffleOptions({
        question: "The denominator tells the total number of ______ parts.",
        optionA: "Equal",
        optionB: "Different",
        optionC: "Random",
        correctAnswer: "Equal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A fraction always has a numerator and a denominator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "One-fourth means 1 part out of 3 equal parts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fractions can also be used for collections of objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Unequal parts can be used to make fractions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "One-half is greater than one-fourth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The denominator shows how many parts are taken.",
        optionA: "True",
        optionB: "False  1",
        correctAnswer: "False  1",
      }),
      shuffleOptions({
        question: "One-third is written as . 3",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A whole is a complete object.",
        optionA: "True",
        optionB: "False 8",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Three-eighths is written as 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The numerator is the upper number in a fraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
