export const chapter = "Chapter - 7: Money";
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
        question: "How many paise are there in ₹6.50?",
        optionA: "560 p",
        optionB: "650 p",
        optionC: "605 p",
        correctAnswer: "650 p",
      }),
      shuffleOptions({
        question: "What does the dot in ₹45.80 stand for?",
        optionA: "paise",
        optionB: "and/separates rupees and paise",
        optionC: "multiplication",
        correctAnswer: "and/separates rupees and paise",
      }),
      shuffleOptions({
        question: "Which amount is the greatest?",
        optionA: "₹12.05",
        optionB: "₹12.50",
        optionC: "₹12.95",
        correctAnswer: "₹12.95",
      }),
      shuffleOptions({
        question: "300 p is equal to:",
        optionA: "₹30",
        optionB: "0.30",
        optionC: "₹ 3.00",
        correctAnswer: "₹ 3.00",
      }),
      shuffleOptions({
        question: "Which of the following is a correct money statement?",
        optionA: "₹20.5 means 20 rupees 30 paise",
        optionB: "₹20.50 means 20 rupees 50 paise",
        optionC: "₹20.50 means 205 paise",
        correctAnswer: "₹20.50 means 20 rupees 50 paise",
      }),
      shuffleOptions({
        question: "What is the cost of 1 item if 4 items cost ₹48.00?",
        optionA: "₹12.00",
        optionB: "₹ 10.00",
        optionC: "₹8.00",
        correctAnswer: "₹12.00",
      }),
      shuffleOptions({
        question: "When converting paise to rupees, we:",
        optionA: "multiply by 100",
        optionB: "divide by 100",
        optionC: "subtract 100",
        correctAnswer: "divide by 100",
      }),
      shuffleOptions({
        question: "Which bill item shows the rate per item?",
        optionA: "quantity",
        optionB: "amount",
        optionC: "rate per piece",
        correctAnswer: "rate per piece",
      }),
      shuffleOptions({
        question: "₹ 0.75 means:",
        optionA: "seventy-five rupees",
        optionB: "seven rupees fifty paise",
        optionC: "seventy-five paise",
        correctAnswer: "seventy-five paise",
      }),
      shuffleOptions({
        question: "What will be the total cost of 3 pencils at₹ 8.25 each",
        optionA: "₹16.75",
        optionB: "₹24.75",
        optionC: "₹15.75",
        correctAnswer: "₹24.75",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 rupee 20 paise can be written as ______.",
        optionA: "₹1.02",
        optionB: "₹1.20",
        optionC: "₹12.00",
        correctAnswer: "₹1.20",
      }),
      shuffleOptions({
        question: "₹ 0.40 is the same as ______ paise.",
        optionA: "40 p",
        optionB: "4 p",
        optionC: "400 p",
        correctAnswer: "40 p",
      }),
      shuffleOptions({
        question: "To convert rupees into paise, we ______ by 100.",
        optionA: "divide",
        optionB: "multiply",
        optionC: "subtract",
        correctAnswer: "multiply",
      }),
      shuffleOptions({
        question: "The symbol for Indian currency is ______.",
        optionA: "$",
        optionB: "£",
        optionC: "₹",
        correctAnswer: "₹",
      }),
      shuffleOptions({
        question: "₹ 35.08 means thirty-five rupees and ______ paise.",
        optionA: "₹80",
        optionB: "8",
        optionC: "₹18",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "A bill tells us the items we have ______.",
        optionA: "drawn",
        optionB: "purchased",
        optionC: "lost",
        correctAnswer: "purchased",
      }),
      shuffleOptions({
        question: "900 p is equal to ______.",
        optionA: "90",
        optionB: "₹ 0.90",
        optionC: "₹ 9.00",
        correctAnswer: "₹ 9.00",
      }),
      shuffleOptions({
        question: "₹ 4.06 contains ______ paise.",
        optionA: "60",
        optionB: "6",
        optionC: "06",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "When subtracting ₹ 8.50 – ₹ 3.25, we subtract rupees and ______ separately.",
        optionA: "paise",
        optionB: "grams",
        optionC: "hours",
        correctAnswer: "paise",
      }),
      shuffleOptions({
        question: "A rate per item in a bill tells the cost of ______.",
        optionA: "one item",
        optionB: "two items",
        optionC: "all items",
        correctAnswer: "one item",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "100 paise = ₹ 1.00",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "₹ 24.50 is greater than ₹ 24.05.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In ₹ 18.72, the number 72 represents rupees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bills help us know total money spent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "₹ 0.09 means nine rupees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "₹ 49.80 = 4980 paise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We write rupees on the left of the dot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "₹12.00 is the same as ₹ 12.0",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "650 p is the same as ₹ 6.50.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "While adding money, paise are added separately from rupees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
