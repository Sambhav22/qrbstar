export const chapter = "Chapter - 12: Profit and Loss";
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
        question: "Which term refers to the price at which an article is bought?",
        optionA: "SP",
        optionB: "CP",
        optionC: "Profit",
        correctAnswer: "CP",
      }),
      shuffleOptions({
        question: "If an item is sold at a higher price than its cost price, it results in a—",
        optionA: "Loss",
        optionB: "Profit",
        optionC: "Overhead",
        correctAnswer: "Profit",
      }),
      shuffleOptions({
        question: "Loss is calculated using which expression?",
        optionA: "SP – CP",
        optionB: "CP – SP",
        optionC: "SP + CP",
        correctAnswer: "CP – SP",
      }),
      shuffleOptions({
        question: "The additional charges like transport or labour are called",
        optionA: "CP",
        optionB: "SP",
        optionC: "Overheads",
        correctAnswer: "Overheads",
      }),
      shuffleOptions({
        question: "What do we call the price at which an article is sold?",
        optionA: "CP",
        optionB: "SP",
        optionC: "Profit",
        correctAnswer: "SP",
      }),
      shuffleOptions({
        question: "When SP < CP, the seller makes a—",
        optionA: "Loss",
        optionB: "Profit",
        optionC: "Extra charge",
        correctAnswer: "Loss",
      }),
      shuffleOptions({
        question: "Which of the following is a component of a transaction?",
        optionA: "Cost Price",
        optionB: "Selling Price",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
      shuffleOptions({
        question: "Profit is calculated as—",
        optionA: "CP – SP",
        optionB: "SP – CP",
        optionC: "CP × SP",
        correctAnswer: "SP – CP",
      }),
      shuffleOptions({
        question: "Profit percent is always calculated on—",
        optionA: "SP",
        optionB: "CP",
        optionC: "Overheads",
        correctAnswer: "CP",
      }),
      shuffleOptions({
        question: "Loss% = (Loss ÷ CP) × ______.",
        optionA: "50",
        optionB: "10",
        optionC: "100",
        correctAnswer: "100",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "SP = CP + ______.",
        optionA: "Loss",
        optionB: "Profit",
        optionC: "Overheads",
        correctAnswer: "Profit",
      }),
      shuffleOptions({
        question: "CP stands for ______ Price.",
        optionA: "Correct",
        optionB: "Cost",
        optionC: "Common",
        correctAnswer: "Cost",
      }),
      shuffleOptions({
        question: "If SP < CP, there is a ______.",
        optionA: "Profit",
        optionB: "Loss",
        optionC: "Overhead",
        correctAnswer: "Loss",
      }),
      shuffleOptions({
        question: "Extra charges spent on repairs are called ______.",
        optionA: "CP",
        optionB: "SP",
        optionC: "Overheads",
        correctAnswer: "Overheads",
      }),
      shuffleOptions({
        question: "Profit = SP – ______.",
        optionA: "CP",
        optionB: "Loss",
        optionC: "Overheads",
        correctAnswer: "CP",
      }),
      shuffleOptions({
        question: "Loss = CP – ______.",
        optionA: "CP",
        optionB: "SP",
        optionC: "Profit",
        correctAnswer: "SP",
      }),
      shuffleOptions({
        question: "Profit% = (Profit ÷ CP) × ______.",
        optionA: "25",
        optionB: "100",
        optionC: "10",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "Selling Price is written as ______.",
        optionA: "SP",
        optionB: "SC",
        optionC: "SL",
        correctAnswer: "SP",
      }),
      shuffleOptions({
        question: "Transport charges are included in ______.",
        optionA: "Profit",
        optionB: "Overheads",
        optionC: "CP only",
        correctAnswer: "Overheads",
      }),
      shuffleOptions({
        question: "When SP = CP, the seller makes ______.",
        optionA: "No profit or loss",
        optionB: "Profit",
        optionC: "Loss",
        correctAnswer: "No profit or loss",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Profit occurs when SP is more than CP.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "CP is the price at which an article is sold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Loss happens when CP is less than SP.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Overheads increase the effective cost price of an item.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "SP = CP – Profit is used to calculate selling price during gain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Loss% is calculated using the formula (Loss ÷ CP) × 100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Repairs cannot be considered overheads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Profit% is always calculated on selling price.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "If CP and SP are equal, there is no profit or loss.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Loss occurs when SP is greater than CP.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
