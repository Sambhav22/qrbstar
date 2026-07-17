export const chapter = "Chapter - 4: Addition";
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
        question: "What is the result of addition called?",
        optionA: "Difference",
        optionB: "Product",
        optionC: "Sum",
        correctAnswer: "Sum",
      }),
      shuffleOptions({
        question: "What is the symbol used for addition?",
        optionA: "×",
        optionB: "+",
        optionC: "–",
        correctAnswer: "+",
      }),
      shuffleOptions({
        question: "What do we call the numbers that are added together?",
        optionA: "Factors",
        optionB: "Addends",
        optionC: "Multiples",
        correctAnswer: "Addends",
      }),
      shuffleOptions({
        question: "What happens to the sum if we change the order of addends?",
        optionA: "It remains the same",
        optionB: "It changes",
        optionC: "It becomes smaller",
        correctAnswer: "It remains the same",
      }),
      shuffleOptions({
        question: "What is 26 added to 12?",
        optionA: "38",
        optionB: "37",
        optionC: "39",
        correctAnswer: "38",
      }),
      shuffleOptions({
        question: "What is 45 added to 54?",
        optionA: "90",
        optionB: "100",
        optionC: "99",
        correctAnswer: "90",
      }),
      shuffleOptions({
        question: "What number do we get when we add 1 to 109?",
        optionA: "108",
        optionB: "110",
        optionC: "111",
        correctAnswer: "110",
      }),
      shuffleOptions({
        question: "What is the sum of 320 and 210?",
        optionA: "520",
        optionB: "530",
        optionC: "540",
        correctAnswer: "530",
      }),
      shuffleOptions({
        question: "Which of the following is a correct addition statement?",
        optionA: "640 + 0 = 0",
        optionB: "640 + 0 = 640",
        optionC: "0 + 640 = 0",
        correctAnswer: "640 + 0 = 640",
      }),
      shuffleOptions({
        question: "In 342 + 215 = 557, which are the addends?",
        optionA: "342 and 215",
        optionB: "215 and 557",
        optionC: "342 and 557",
        correctAnswer: "342 and 215",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "250 + 150 = ______",
        optionA: "300",
        optionB: "400",
        optionC: "500",
        correctAnswer: "400",
      }),
      shuffleOptions({
        question: "______ + 0 = 720",
        optionA: "700",
        optionB: "720",
        optionC: "0",
        correctAnswer: "720",
      }),
      shuffleOptions({
        question: "Adding 1 to 429 gives ______",
        optionA: "430",
        optionB: "431",
        optionC: "429",
        correctAnswer: "430",
      }),
      shuffleOptions({
        question: "175 + 225 = ______",
        optionA: "400",
        optionB: "300",
        optionC: "500",
        correctAnswer: "400",
      }),
      shuffleOptions({
        question: "120 + 130 + 150 = ______",
        optionA: "400",
        optionB: "410",
        optionC: "420",
        correctAnswer: "400",
      }),
      shuffleOptions({
        question: "When 0 is added to 385, we get ______",
        optionA: "0",
        optionB: "385",
        optionC: "386",
        correctAnswer: "385",
      }),
      shuffleOptions({
        question: "______ + 40 = 100",
        optionA: "60",
        optionB: "50",
        optionC: "70",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "300 + 300 = ______",
        optionA: "500",
        optionB: "600",
        optionC: "700",
        correctAnswer: "600",
      }),
      shuffleOptions({
        question: "420 + 200 = ______",
        optionA: "620",
        optionB: "720",
        optionC: "520",
        correctAnswer: "620",
      }),
      shuffleOptions({
        question: "1 added to 249 = ______",
        optionA: "248",
        optionB: "249",
        optionC: "250",
        correctAnswer: "250",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0 added to a number changes its value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 added to any number gives the next number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "200 + 300 = 600.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sign “+” is used for addition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In 45 + 25, 45 and 25 are addends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "312 + 123 = 435.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adding 0 to 451 gives 451.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The order of addends does not affect the sum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "53 + 34 = 88.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The result of addition is called difference.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
