export const chapter = "Chapter - 7: Numbers Up To 100";
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
        question: "How many ones make one ten?",
        optionA: "5",
        optionB: "10",
        optionC: "100",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "What number has 7 tens and 8 ones?",
        optionA: "87",
        optionB: "78",
        optionC: "88",
        correctAnswer: "78",
      }),
      shuffleOptions({
        question: "Which number comes just before 90?",
        optionA: "91",
        optionB: "89",
        optionC: "88",
        correctAnswer: "89",
      }),
      shuffleOptions({
        question: "What is 8 tens and 2 ones?",
        optionA: "82",
        optionB: "28",
        optionC: "80",
        correctAnswer: "82",
      }),
      shuffleOptions({
        question: "Which is the greatest two-digit number?",
        optionA: "99",
        optionB: "90",
        optionC: "100",
        correctAnswer: "99",
      }),
      shuffleOptions({
        question: "Which number comes after 74?",
        optionA: "75",
        optionB: "73",
        optionC: "76",
        correctAnswer: "75",
      }),
      shuffleOptions({
        question: "Which number has 9 tens and 0 ones?",
        optionA: "90",
        optionB: "99",
        optionC: "9",
        correctAnswer: "90",
      }),
      shuffleOptions({
        question: "What number has 6 tens and 5 ones?",
        optionA: "56",
        optionB: "65",
        optionC: "66",
        correctAnswer: "65",
      }),
      shuffleOptions({
        question: "Which number comes after 68?",
        optionA: "67",
        optionB: "69",
        optionC: "70",
        correctAnswer: "69",
      }),
      shuffleOptions({
        question: "What number has 5 tens and 8 ones?",
        optionA: "85",
        optionB: "58",
        optionC: "50",
        correctAnswer: "58",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "6 tens and 9 ones = ______.",
        optionA: "96",
        optionB: "69",
        optionC: "99",
        correctAnswer: "69",
      }),
      shuffleOptions({
        question: "9 tens and 8 ones = ______.",
        optionA: "89",
        optionB: "98",
        optionC: "88",
        correctAnswer: "98",
      }),
      shuffleOptions({
        question: "______ is one more than 59.",
        optionA: "60",
        optionB: "61",
        optionC: "58",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "______ is one less than 91.",
        optionA: "90",
        optionB: "92",
        optionC: "89",
        correctAnswer: "90",
      }),
      shuffleOptions({
        question: "80 + 5 = ______.",
        optionA: "85",
        optionB: "58",
        optionC: "95",
        correctAnswer: "85",
      }),
      shuffleOptions({
        question: "100 is one more than ______.",
        optionA: "99",
        optionB: "90",
        optionC: "89",
        correctAnswer: "99",
      }),
      shuffleOptions({
        question: "The number name of 64 is ______.",
        optionA: "Sixty-four",
        optionB: "Sixty-five",
        optionC: "Seventy-four",
        correctAnswer: "Sixty-four",
      }),
      shuffleOptions({
        question: "7 tens and 0 ones = ______.",
        optionA: "70",
        optionB: "7",
        optionC: "17",
        correctAnswer: "70",
      }),
      shuffleOptions({
        question: "The number between 66 and 68 is ______.",
        optionA: "67",
        optionB: "68",
        optionC: "65",
        correctAnswer: "67",
      }),
      shuffleOptions({
        question: "______ is made of 8 tens and 9 ones.",
        optionA: "98",
        optionB: "89",
        optionC: "99",
        correctAnswer: "89",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "100 is the greatest two-digit number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "10 tens make 100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "8 tens and 5 ones make 58.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "70 is smaller than 69.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "One less than 90 is 89.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "99 comes after 98.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "60 is made up of 6 tens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "9 tens and 9 ones make 99.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "85 is smaller than 58.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "77 is made of 7 tens and 7 ones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
