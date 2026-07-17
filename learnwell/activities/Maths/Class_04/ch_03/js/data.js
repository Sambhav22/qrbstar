export const chapter = "Chapter - 3: Addition and Subtraction";
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
        question: "What is the sum of 300 + 400?",
        optionA: "600",
        optionB: "700",
        optionC: "800",
        correctAnswer: "700",
      }),
      shuffleOptions({
        question: "What is 900 – 500?",
        optionA: "400",
        optionB: "300",
        optionC: "200",
        correctAnswer: "400",
      }),
      shuffleOptions({
        question: "What is 2 tens + 4 tens equal to?",
        optionA: "40",
        optionB: "50",
        optionC: "60",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "According to the additive property of zero, 56,214 + 0 equals—",
        optionA: "56,214",
        optionB: "0",
        optionC: "5,621",
        correctAnswer: "56,214",
      }),
      shuffleOptions({
        question: "What is the value of 14 tens?",
        optionA: "140",
        optionB: "114",
        optionC: "104",
        correctAnswer: "140",
      }),
      shuffleOptions({
        question: "What is 20 + 40?",
        optionA: "50",
        optionB: "60",
        optionC: "70",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "To subtract 50 from 140, we think:",
        optionA: "14 – 5",
        optionB: "14 – 4",
        optionC: "15 – 5",
        correctAnswer: "14 – 5",
      }),
      shuffleOptions({
        question: "What is 700 + 200?",
        optionA: "700",
        optionB: "900",
        optionC: "800",
        correctAnswer: "900",
      }),
      shuffleOptions({
        question: "Which property says that changing the order of addends does not change the sum?",
        optionA: "Associative property",
        optionB: "Additive property",
        optionC: "Commutative property",
        correctAnswer: "Commutative property",
      }),
      shuffleOptions({
        question: "When ones in the subtrahend are greater than ones in the minuend, we —",
        optionA: "Add 1 to the minuend",
        optionB: "Borrow from the tens place",
        optionC: "Borrow from the hundreds place",
        correctAnswer: "Borrow from the tens place",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "40 + 20 = ______",
        optionA: "50",
        optionB: "60",
        optionC: "70",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "80 – 30 = ______",
        optionA: "40",
        optionB: "50",
        optionC: "60",
        correctAnswer: "50",
      }),
      shuffleOptions({
        question: "500 + 400 = ______",
        optionA: "900",
        optionB: "700",
        optionC: "600",
        correctAnswer: "900",
      }),
      shuffleOptions({
        question: "1200 – 200 = ______",
        optionA: "900",
        optionB: "1000",
        optionC: "1100",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "14 tens = ______",
        optionA: "114",
        optionB: "104",
        optionC: "140",
        correctAnswer: "140",
      }),
      shuffleOptions({
        question: "9 – 7 = ______",
        optionA: "1",
        optionB: "2",
        optionC: "5",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "20 + 10 = ______",
        optionA: "20",
        optionB: "30",
        optionC: "40",
        correctAnswer: "30",
      }),
      shuffleOptions({
        question: "14 – 5 = ______",
        optionA: "7",
        optionB: "8",
        optionC: "9",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "60 – 40 = ______",
        optionA: "10",
        optionB: "20",
        optionC: "30",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "7000 + 3000 = ______",
        optionA: "9000",
        optionB: "10,000",
        optionC: "11,000",
        correctAnswer: "10,000",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "3 + 4 = 7.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "2 + 4 = 5.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "90 – 40 = 60.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "14 tens = 140.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adding zero to a number changes its value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "7 – 5 = 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "900 – 500 = 500.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "300 + 400 = 800.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "2000 – 1000 = 1000.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In subtraction, if the subtrahend is greater, regrouping is needed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
