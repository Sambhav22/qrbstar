export const chapter = "Chapter - 2: Fractions";
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
        question: "Which fraction is an example of a unit fraction? 3",
        optionA: "7 1",
        optionB: "9  5",
        optionC: "5 4",
        correctAnswer: "9  5",
      }),
      shuffleOptions({
        question: "Which fraction is equivalent to 6? 2",
        optionA: "3  4",
        optionB: "3 6",
        optionC: "12",
        correctAnswer: "3  4",
      }),
      shuffleOptions({
        question: "Which of the following is a proper fraction? 11",
        optionA: "9 7",
        optionB: "7 3",
        optionC: "8 5 5",
        correctAnswer: "8 5 5",
      }),
      shuffleOptions({
        question: "What should be multiplied with 12 to get 6?",
        optionA: "2  2",
        optionB: "1 2",
        optionC: "3",
        correctAnswer: "2  2",
      }),
      shuffleOptions({
        question: "Which of the following represents a mixed fraction? 3",
        optionA: "2 5",
        optionB: "1 7  9",
        optionC: "9 9",
        correctAnswer: "1 7  9",
      }),
      shuffleOptions({
        question: "Which is the reciprocal of 5? 5",
        optionA: "9  9",
        optionB: "1 1",
        optionC: "5",
        correctAnswer: "9  9",
      }),
      shuffleOptions({
        question: "Which of the following is an irreducible fraction? 12",
        optionA: "18 7",
        optionB: "15 5",
        optionC: "8  1",
        correctAnswer: "8  1",
      }),
      shuffleOptions({
        question: "What is the value of 3 of 27?",
        optionA: "5",
        optionB: "9",
        optionC: "3",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "Which fraction is greater? 7",
        optionA: "12 2",
        optionB: "3",
        optionC: "Both are equal 3",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "What is the result of 4 × 8? 6",
        optionA: "5 3",
        optionB: "2  8",
        optionC: "3",
        correctAnswer: "2  8",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "5 of 45 is ______.",
        optionA: "5",
        optionB: "4",
        optionC: "9  14",
        correctAnswer: "9  14",
      }),
      shuffleOptions({
        question: "The lowest form of is ______. 21 2",
        optionA: "6 2",
        optionB: "3  4",
        optionC: "7 4",
        correctAnswer: "3  4",
      }),
      shuffleOptions({
        question: "7 × 7 = ______.",
        optionA: "1",
        optionB: "6",
        optionC: "4  3",
        correctAnswer: "4  3",
      }),
      shuffleOptions({
        question: "2 4 as an improper fraction is ______. 9",
        optionA: "4 11",
        optionB: "4  10",
        optionC: "4 1",
        correctAnswer: "4  10",
      }),
      shuffleOptions({
        question: "6 of 60 is ______.",
        optionA: "6",
        optionB: "30",
        optionC: "10  3",
        correctAnswer: "10  3",
      }),
      shuffleOptions({
        question: "5 ÷ 3 = ______. 1",
        optionA: "5 1",
        optionB: "7 3",
        optionC: "15",
        correctAnswer: "5 1",
      }),
      shuffleOptions({
        question: "A fraction with numerator 1 is called a ______ fraction.",
        optionA: "improper",
        optionB: "unit",
        optionC: "proper 2",
        correctAnswer: "unit",
      }),
      shuffleOptions({
        question: "of 18 = ______. 3",
        optionA: "9",
        optionB: "16",
        optionC: "12",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "The reciprocal of 7 is ______. 1",
        optionA: "6 1",
        optionB: "7  7",
        optionC: "1 5 3",
        correctAnswer: "7  7",
      }),
      shuffleOptions({
        question: "8 + 8 = ______.",
        optionA: "1",
        optionB: "6",
        optionC: "2",
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
        question: "and represent the same value. 9 3",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The reciprocal of any fraction is obtained by interchanging numerator and denominator.",
        optionA: "True",
        optionB: "False 3 1",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "7 is greater than 2.",
        optionA: "True",
        optionB: "False  1",
        correctAnswer: "False  1",
      }),
      shuffleOptions({
        question: "Multiplying 4 by 8 gives 2.",
        optionA: "True",
        optionB: "False  1 16",
        correctAnswer: "False  1 16",
      }),
      shuffleOptions({
        question: "5 written as an improper fraction is . 3 3",
        optionA: "True",
        optionB: "False 1 1 1",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "2 of 3 equals 6.",
        optionA: "True",
        optionB: "False 9",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "12 is already in its simplest form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dividing by a fraction is the same as multiplying by its reciprocal.",
        optionA: "True",
        optionB: "False 7 3",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "is less than . 8 4",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A proper fraction always has a numerator smaller than the denominator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
