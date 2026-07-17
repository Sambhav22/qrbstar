export const chapter = "Chapter - 8: Money";
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
        question: "Which coin has the smallest value?",
        optionA: "₹1",
        optionB: "50p",
        optionC: "₹2",
        correctAnswer: "50p",
      }),
      shuffleOptions({
        question: "How many ₹2 coins make ₹10?",
        optionA: "2",
        optionB: "3",
        optionC: "5",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "₹3 + ₹2 equals:",
        optionA: "₹4",
        optionB: "₹5",
        optionC: "₹6",
        correctAnswer: "₹5",
      }),
      shuffleOptions({
        question: "What is the value of 50p + 25p + 25p?",
        optionA: "₹1",
        optionB: "75p",
        optionC: "₹2",
        correctAnswer: "₹1",
      }),
      shuffleOptions({
        question: "What is ₹7 and 5 paise written in figures?",
        optionA: "₹7.50",
        optionB: "₹7.55",
        optionC: "₹7.05",
        correctAnswer: "₹7.05",
      }),
      shuffleOptions({
        question: "Which of these is a note?",
        optionA: "₹2 coin",
        optionB: "₹5 coin",
        optionC: "₹10 note",
        correctAnswer: "₹10 note",
      }),
      shuffleOptions({
        question: "What is ₹15.20 + ₹4.80?",
        optionA: "₹20.00",
        optionB: "₹18.00",
        optionC: "₹19.10",
        correctAnswer: "₹20.00",
      }),
      shuffleOptions({
        question: "Which coin is NOT shown in the chapter?",
        optionA: "₹3 coin",
        optionB: "₹1 coin",
        optionC: "₹2 coin",
        correctAnswer: "₹3 coin",
      }),
      shuffleOptions({
        question: "How many 50p coins make ₹1?",
        optionA: "4",
        optionB: "3",
        optionC: "2",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The note greater than ₹20 is:",
        optionA: "₹5",
        optionB: "₹10",
        optionC: "₹50",
        correctAnswer: "₹50",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "₹1 = ______ paise.",
        optionA: "10",
        optionB: "50",
        optionC: "100",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "Rupees and paise are written with a ______.",
        optionA: "dot",
        optionB: "line",
        optionC: "dash",
        correctAnswer: "dot",
      }),
      shuffleOptions({
        question: "₹8.50 means eight rupees ______ paise.",
        optionA: "15",
        optionB: "50",
        optionC: "5",
        correctAnswer: "50",
      }),
      shuffleOptions({
        question: "A ₹5 coin + a ₹2 coin = ______",
        optionA: "₹6",
        optionB: "₹7",
        optionC: "₹8",
        correctAnswer: "₹7",
      }),
      shuffleOptions({
        question: "50p + 50p = ______",
        optionA: "50p",
        optionB: "₹1",
        optionC: "₹2",
        correctAnswer: "₹1",
      }),
      shuffleOptions({
        question: "₹14.20 + ₹3.10 = ______",
        optionA: "₹17.30",
        optionB: "₹13.10",
        optionC: "₹19.20",
        correctAnswer: "₹17.30",
      }),
      shuffleOptions({
        question: "The paise part is written ______ the dot.",
        optionA: "left of",
        optionB: "above",
        optionC: "right of",
        correctAnswer: "right of",
      }),
      shuffleOptions({
        question: "₹40 – ₹15.50 = ______",
        optionA: "₹24.50",
        optionB: "₹25.50",
        optionC: "₹26.00",
        correctAnswer: "₹24.50",
      }),
      shuffleOptions({
        question: "₹20 + ₹10 + ₹5 = ______",
        optionA: "₹25",
        optionB: "₹30",
        optionC: "₹35",
        correctAnswer: "₹35",
      }),
      shuffleOptions({
        question: "A currency note of ______ rupees is shown in the chapter.",
        optionA: "₹500",
        optionB: "₹2000",
        optionC: "₹1000",
        correctAnswer: "₹500",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "100 paise = ₹1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A ₹5 note is greater in value than a ₹10 note.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "₹12.05 means 12 rupees and 50 paise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Two ₹5 coins make ₹10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "₹7.50 is greater than ₹7.15.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rupees are written after the dot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "₹20 – ₹5 = ₹10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "25p + 25p = 50p.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "₹2 + ₹1 = ₹4.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "₹10 is the highest note shown on page 1 of the chapter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
