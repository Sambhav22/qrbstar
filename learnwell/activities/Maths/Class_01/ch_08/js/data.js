export const chapter = "Chapter - 8: Addition and Subtraction of 2-Digit Numbers";
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
        question: "What is the sum of 36 and 24?",
        optionA: "59",
        optionB: "60",
        optionC: "61",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "How many are left if we subtract 31 from 52?",
        optionA: "20",
        optionB: "21",
        optionC: "22",
        correctAnswer: "21",
      }),
      shuffleOptions({
        question: "What will you get when 68 is subtracted by 25?",
        optionA: "42",
        optionB: "43",
        optionC: "44",
        correctAnswer: "43",
      }),
      shuffleOptions({
        question: "Find the total when 27 and 32 are added.",
        optionA: "58",
        optionB: "59",
        optionC: "60",
        correctAnswer: "59",
      }),
      shuffleOptions({
        question: "What is the difference between 45 and 18?",
        optionA: "26",
        optionB: "27",
        optionC: "28",
        correctAnswer: "27",
      }),
      shuffleOptions({
        question: "Add 54 and 35. What is the sum?",
        optionA: "88",
        optionB: "89",
        optionC: "90",
        correctAnswer: "89",
      }),
      shuffleOptions({
        question: "Subtract 61 from 82. How much is left?",
        optionA: "20",
        optionB: "21",
        optionC: "22",
        correctAnswer: "21",
      }),
      shuffleOptions({
        question: "What is the total when 63 and 16 are added?",
        optionA: "78",
        optionB: "79",
        optionC: "80",
        correctAnswer: "79",
      }),
      shuffleOptions({
        question: "What is the difference between 64 and 23?",
        optionA: "40",
        optionB: "41",
        optionC: "42",
        correctAnswer: "41",
      }),
      shuffleOptions({
        question: "Add 35 and 14. The answer is—",
        optionA: "48",
        optionB: "49",
        optionC: "50",
        correctAnswer: "49",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "38 – 16 = ______",
        optionA: "21",
        optionB: "22",
        optionC: "23",
        correctAnswer: "22",
      }),
      shuffleOptions({
        question: "25 + 14 = ______",
        optionA: "38",
        optionB: "39",
        optionC: "40",
        correctAnswer: "39",
      }),
      shuffleOptions({
        question: "55 – 34 = ______",
        optionA: "20",
        optionB: "21",
        optionC: "22",
        correctAnswer: "21",
      }),
      shuffleOptions({
        question: "46 + 15 = ______",
        optionA: "60",
        optionB: "61",
        optionC: "62",
        correctAnswer: "61",
      }),
      shuffleOptions({
        question: "28 + 25 = ______",
        optionA: "52",
        optionB: "53",
        optionC: "54",
        correctAnswer: "53",
      }),
      shuffleOptions({
        question: "72 + 3 = ______",
        optionA: "74",
        optionB: "75",
        optionC: "76",
        correctAnswer: "75",
      }),
      shuffleOptions({
        question: "64 + 23 = ______",
        optionA: "86",
        optionB: "87",
        optionC: "88",
        correctAnswer: "87",
      }),
      shuffleOptions({
        question: "82 – 61 = ______",
        optionA: "20",
        optionB: "21",
        optionC: "22",
        correctAnswer: "21",
      }),
      shuffleOptions({
        question: "40 – 19 = ______",
        optionA: "20",
        optionB: "21",
        optionC: "22",
        correctAnswer: "21",
      }),
      shuffleOptions({
        question: "69 – 28 = ______",
        optionA: "40",
        optionB: "41",
        optionC: "42",
        correctAnswer: "41",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "45 – 18 = 27",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "36 + 23 = 59",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "75 – 30 = 50",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "64 + 25 = 90",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "89 – 62 = 27",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "94 – 41 = 53",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "55 + 34 = 89",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "49 – 17 = 31",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "73 – 18 = 55",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "72 + 3 = 75",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
