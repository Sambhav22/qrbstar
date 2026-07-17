export const chapter = "Chapter - 9: Money";
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
        question: "What do we call the point used to separate rupees and paise while writing money?",
        optionA: "Comma",
        optionB: "Decimal point",
        optionC: "Hyphen",
        correctAnswer: "Decimal point",
      }),
      shuffleOptions({
        question: "How many paise are there in ₹4?",
        optionA: "40",
        optionB: "400",
        optionC: "4",
        correctAnswer: "400",
      }),
      shuffleOptions({
        question: "Which of the following shows “ten rupees and fifty paise”?",
        optionA: "₹10.50",
        optionB: "₹1.50",
        optionC: "₹105.00",
        correctAnswer: "₹10.50",
      }),
      shuffleOptions({
        question: "What should we do to convert 8 rupees into paise?",
        optionA: "Divide by 100",
        optionB: "Multiply by 100",
        optionC: "Add 100",
        correctAnswer: "Multiply by 100",
      }),
      shuffleOptions({
        question: "345 paise is equal to how much in rupees?",
        optionA: "₹3.45",
        optionB: "₹34.50",
        optionC: "₹0.35",
        correctAnswer: "₹3.45",
      }),
      shuffleOptions({
        question: "What is the total of ₹2.50 and ₹3.25?",
        optionA: "₹9.75",
        optionB: "₹5.00",
        optionC: "₹5.75",
        correctAnswer: "₹5.75",
      }),
      shuffleOptions({
        question: "Which amount is the greatest?",
        optionA: "₹6.05",
        optionB: "605 paise",
        optionC: "Both are equal",
        correctAnswer: "Both are equal",
      }),
      shuffleOptions({
        question: "How do we read ₹7.08?",
        optionA: "five rupees eight paise",
        optionB: "Seven rupees and eight paise",
        optionC: "Seven point eight rupees",
        correctAnswer: "Seven rupees and eight paise",
      }),
      shuffleOptions({
        question: "What do we call the right-side digits after the decimal in money?",
        optionA: "Rupees",
        optionB: "Paise",
        optionC: "Hundreds",
        correctAnswer: "Paise",
      }),
      shuffleOptions({
        question: "What is the result of converting 0.65 rupees into paise?",
        optionA: "65 paise",
        optionB: "650 paise",
        optionC: "6 rupees",
        correctAnswer: "65 paise",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "₹12.40 is equal to 12 rupees and ___ paise.",
        optionA: "4",
        optionB: "40",
        optionC: "400",
        correctAnswer: "40",
      }),
      shuffleOptions({
        question: "To convert paise into rupees, we ___ the amount by 100.",
        optionA: "multiply",
        optionB: "divide",
        optionC: "subtract",
        correctAnswer: "divide",
      }),
      shuffleOptions({
        question: "250 paise = ___ rupees.",
        optionA: "₹2.05",
        optionB: "₹2.50",
        optionC: "₹25",
        correctAnswer: "₹2.50",
      }),
      shuffleOptions({
        question: "One rupee contains ___ paise.",
        optionA: "10",
        optionB: "50",
        optionC: "100",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "₹3.09 is written as 3 rupees and ___ paise.",
        optionA: "9",
        optionB: "90",
        optionC: "5",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "To convert ₹5 into paise, we ___ it by 100.",
        optionA: "divide",
        optionB: "multiply",
        optionC: "add",
        correctAnswer: "multiply",
      }),
      shuffleOptions({
        question: "706 paise = ___",
        optionA: "₹70.06",
        optionB: "₹7.06",
        optionC: "₹0.76",
        correctAnswer: "₹7.06",
      }),
      shuffleOptions({
        question: "The decimal point separates rupees from ___.",
        optionA: "paise",
        optionB: "notes",
        optionC: "coins",
        correctAnswer: "paise",
      }),
      shuffleOptions({
        question: "₹0.25 means ___ paise.",
        optionA: "25",
        optionB: "250",
        optionC: "2.5",
        correctAnswer: "25",
      }),
      shuffleOptions({
        question: "₹9.80 is equal to 9 rupees and ___ paise.",
        optionA: "80",
        optionB: "8",
        optionC: "800",
        correctAnswer: "80",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "₹1.50 is equal to 150 paise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "305 paise is less than ₹3.05.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "While reading money, we always read the rupees before the paise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "To convert rupees into paise, we divide by 100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "₹4.20 is read as “four rupees and twenty paise.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "50 paise is written as ₹0.50.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1000 paise is equal to ₹100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Paise are written on the left side of the decimal point.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "₹8.00 and 800 paise represent the same amount.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "₹12.05 has more paise than ₹12.50.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
