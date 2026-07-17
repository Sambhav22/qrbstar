export const chapter = "Chapter - 3: Subtraction";
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
        question: "What do we call the number from which we subtract?",
        optionA: "Subtrahend",
        optionB: "Difference",
        optionC: "Minuend",
        correctAnswer: "Minuend",
      }),
      shuffleOptions({
        question: "The result of subtraction is called the",
        optionA: "Minuend",
        optionB: "Difference",
        optionC: "Borrowing",
        correctAnswer: "Difference",
      }),
      shuffleOptions({
        question: "Subtraction is done starting from the _______ place.",
        optionA: "Hundreds",
        optionB: "Ones",
        optionC: "Thousands",
        correctAnswer: "Ones",
      }),
      shuffleOptions({
        question: "Which of these requires borrowing?",
        optionA: "5234 – 2111",
        optionB: "6402 – 3895",
        optionC: "8000 – 4000",
        correctAnswer: "6402 – 3895",
      }),
      shuffleOptions({
        question: "7000 – 0 =",
        optionA: "0",
        optionB: "7000",
        optionC: "1",
        correctAnswer: "7000",
      }),
      shuffleOptions({
        question: "If the subtrahend and minuend are the same, the difference is",
        optionA: "1",
        optionB: "0",
        optionC: "10",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "What is 4352 – 2000?",
        optionA: "3352",
        optionB: "2223",
        optionC: "2352",
        correctAnswer: "2352",
      }),
      shuffleOptions({
        question: "Borrowing means taking 1 from the ______ place.",
        optionA: "Lower",
        optionB: "Same",
        optionC: "Higher",
        correctAnswer: "Higher",
      }),
      shuffleOptions({
        question: "Which of these shows subtraction without borrowing?",
        optionA: "8421 – 3209",
        optionB: "6543 – 2222",
        optionC: "7005 – 4998",
        correctAnswer: "6543 – 2222",
      }),
      shuffleOptions({
        question: "When we check subtraction, we use",
        optionA: "Addition",
        optionB: "Multiplication",
        optionC: "Division",
        correctAnswer: "Addition",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "6000 – 3000 = ______",
        optionA: "2000",
        optionB: "5000",
        optionC: "3000",
        correctAnswer: "3000",
      }),
      shuffleOptions({
        question: "In subtraction, the number being subtracted is called the _______.",
        optionA: "Minuend",
        optionB: "Subtrahend",
        optionC: "Product",
        correctAnswer: "Subtrahend",
      }),
      shuffleOptions({
        question: "10 tens = ______ ones.",
        optionA: "1",
        optionB: "100",
        optionC: "1000",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "Borrowing is also called ________.",
        optionA: "Regrouping",
        optionB: "Dividing",
        optionC: "Multiplying",
        correctAnswer: "Regrouping",
      }),
      shuffleOptions({
        question: "4800 – 4000 = ______",
        optionA: "800",
        optionB: "400",
        correctAnswer: "800",
      }),
      shuffleOptions({
        question: "A difference becomes 0 when we subtract a number from _______.",
        optionA: "0",
        optionB: "Itself",
        optionC: "1",
        correctAnswer: "Itself",
      }),
      shuffleOptions({
        question: "5400 – 0 = ______",
        optionA: "5400",
        optionB: "0",
        optionC: "4000",
        correctAnswer: "5400",
      }),
      shuffleOptions({
        question: "5 thousands – 2 thousands = ______ thousands",
        optionA: "4",
        optionB: "5",
        optionC: "3",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "If 4260 – 2150 = ______",
        optionA: "2110",
        optionB: "2000",
        optionC: "2150",
        correctAnswer: "2110",
      }),
      shuffleOptions({
        question: "Checking subtraction is done using _______.",
        optionA: "Addition",
        optionB: "Division",
        optionC: "Subtraction",
        correctAnswer: "Addition",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Borrowing is needed when the top digit is smaller than the bottom digit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "7500 – 7500 = 0",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subtraction must always start from the thousands place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Minuend means the number that is subtracted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "6000 – 5999 = 2",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Difference + Subtrahend = Minuend",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "5400 – 0 = 0",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Subtraction without borrowing is always easier.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "8000 – 7000 = 1000",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Borrowing can be done from the next bigger place value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
