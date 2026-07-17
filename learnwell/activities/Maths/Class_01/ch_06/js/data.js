export const chapter = "Chapter - 6: Numbers Up To 50";
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
        question: "Which number comes after 27?",
        optionA: "28",
        optionB: "26",
        optionC: "29",
        correctAnswer: "28",
      }),
      shuffleOptions({
        question: "Which number has 4 tens and 6 ones?",
        optionA: "46",
        optionB: "36",
        optionC: "45",
        correctAnswer: "46",
      }),
      shuffleOptions({
        question: "What number comes before 32?",
        optionA: "30",
        optionB: "31",
        optionC: "33",
        correctAnswer: "31",
      }),
      shuffleOptions({
        question: "Which is the greatest among 42, 38 and 49?",
        optionA: "42",
        optionB: "38",
        optionC: "49",
        correctAnswer: "49",
      }),
      shuffleOptions({
        question: "The number name of 33 is _____.",
        optionA: "Thirty-three",
        optionB: "Thirty-two",
        optionC: "Thirty-four",
        correctAnswer: "Thirty-three",
      }),
      shuffleOptions({
        question: "How many ones are there in 25?",
        optionA: "2",
        optionB: "5",
        optionC: "3",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "Which number has 3 tens and 2 ones?",
        optionA: "32",
        optionB: "23",
        optionC: "22",
        correctAnswer: "32",
      }),
      shuffleOptions({
        question: "Which is smaller – 45 or 40?",
        optionA: "45",
        optionB: "40",
        optionC: "Both same",
        correctAnswer: "40",
      }),
      shuffleOptions({
        question: "What number comes between 47 and 49?",
        optionA: "46",
        optionB: "48",
        optionC: "50",
        correctAnswer: "48",
      }),
      shuffleOptions({
        question: "The number with 2 tens and 10 ones is _____.",
        optionA: "21",
        optionB: "30",
        optionC: "31",
        correctAnswer: "30",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The number name of 41 is ______.",
        optionA: "Forty-one",
        optionB: "Forty-two",
        optionC: "Forty",
        correctAnswer: "Forty-one",
      }),
      shuffleOptions({
        question: "______ comes before 26.",
        optionA: "27",
        optionB: "25",
        optionC: "28",
        correctAnswer: "25",
      }),
      shuffleOptions({
        question: "4 tens and 3 ones make ______.",
        optionA: "43",
        optionB: "42",
        optionC: "44",
        correctAnswer: "43",
      }),
      shuffleOptions({
        question: "3 tens and 9 ones = ______.",
        optionA: "38",
        optionB: "39",
        optionC: "40",
        correctAnswer: "39",
      }),
      shuffleOptions({
        question: "The number after 35 is ______.",
        optionA: "34",
        optionB: "36",
        optionC: "37",
        correctAnswer: "36",
      }),
      shuffleOptions({
        question: "20 + 8 = ______.",
        optionA: "27",
        optionB: "28",
        optionC: "29",
        correctAnswer: "28",
      }),
      shuffleOptions({
        question: "______ comes between 22 and 24.",
        optionA: "25",
        optionB: "23",
        optionC: "21",
        correctAnswer: "23",
      }),
      shuffleOptions({
        question: "The number name of 50 is ______.",
        optionA: "Fifty",
        optionB: "Forty",
        optionC: "Forty-five",
        correctAnswer: "Fifty",
      }),
      shuffleOptions({
        question: "30 + 7 = ______.",
        optionA: "36",
        optionB: "38",
        optionC: "37",
        correctAnswer: "37",
      }),
      shuffleOptions({
        question: "The number name of 29 is ______.",
        optionA: "Twenty-eight",
        optionB: "Twenty-nine",
        optionC: "Thirty",
        correctAnswer: "Twenty-nine",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "48 is smaller than 45.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "32 comes after 31.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "50 is greater than 30.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "23 has 3 tens and 2 ones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "42 comes before 41.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "35 comes between 34 and 36.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "38 is less than 28.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "39 and 40 are consecutive numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "20 + 9 = 29.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "45 is smaller than 50.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
