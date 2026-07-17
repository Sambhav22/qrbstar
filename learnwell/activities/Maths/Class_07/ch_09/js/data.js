export const chapter = "Chapter - 9: Percentage and Its Applications";
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
        question: "What does the term “percent” literally mean?",
        optionA: "Out of ten",
        optionB: "Out of one",
        optionC: "Out of hundred",
        correctAnswer: "Out of hundred",
      }),
      shuffleOptions({
        question: "Which value is obtained when we shift a decimal two places to the right?",
        optionA: "A percentage value",
        optionB: "A fraction value",
        optionC: "A ratio value",
        correctAnswer: "A percentage value",
      }),
      shuffleOptions({
        question: "What do we call the price at which a shopkeeper purchases goods?",
        optionA: "Selling Price",
        optionB: "Cost Price",
        optionC: "Marked Price",
        correctAnswer: "Cost Price",
      }),
      shuffleOptions({
        question: "What happens when the selling price is less than the cost price?",
        optionA: "Profit",
        optionB: "Loss",
        optionC: "No change (P × R × T)",
        correctAnswer: "Loss",
      }),
      shuffleOptions({
        question: "What does SI = 100 represent?",
        optionA: "Profit calculation",
        optionB: "Discount calculation",
        optionC: "Simple Interest calculation",
        correctAnswer: "Simple Interest calculation",
      }),
      shuffleOptions({
        question: "What is obtained by adding Principal and Interest?",
        optionA: "Total Amount",
        optionB: "Total Profit",
        optionC: "Total Loss",
        correctAnswer: "Total Amount",
      }),
      shuffleOptions({
        question: "What does a 120% value indicate?",
        optionA: "Less than the whole",
        optionB: "Equal to the whole",
        optionC: "More than the whole",
        correctAnswer: "More than the whole",
      }),
      shuffleOptions({
        question: "Which operation is used to convert a percentage into a decimal?",
        optionA: "Multiplying by 100",
        optionB: "Dividing by 100",
        optionC: "Dividing by 10",
        correctAnswer: "Dividing by 100",
      }),
      shuffleOptions({
        question: "What does the expression “x% of y” calculate?",
        optionA: "x × y",
        optionB: "xy ÷ 100",
        optionC: "x – y",
        correctAnswer: "xy ÷ 100",
      }),
      shuffleOptions({
        question: "What do we call additional charges added to cost price such as transport or labour?",
        optionA: "Profit",
        optionB: "Discount",
        optionC: "Overheads",
        correctAnswer: "Overheads",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.25 becomes ______ when converted to a percentage.",
        optionA: "2.5%",
        optionB: "25%",
        optionC: "0.25%",
        correctAnswer: "25%",
      }),
      shuffleOptions({
        question: "Profit is calculated when ______ is greater than CP.",
        optionA: "SP",
        optionB: "SI",
        optionC: "Amount",
        correctAnswer: "SP",
      }),
      shuffleOptions({
        question: "To convert a ratio to a percentage, we multiply it by ______.",
        optionA: "10",
        optionB: "50",
        optionC: "100",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "The money borrowed in an interest-related problem is called ______.",
        optionA: "Rate",
        optionB: "Time",
        optionC: "Principal",
        correctAnswer: "Principal",
      }),
      shuffleOptions({
        question: "Loss occurs when ______ is less than CP.",
        optionA: "SP",
        optionB: "Amount",
        optionC: "Overheads",
        correctAnswer: "SP",
      }),
      shuffleOptions({
        question: "0.8 becomes ______ in percentage form.",
        optionA: "8%",
        optionB: "80%",
        optionC: "800%",
        correctAnswer: "80%",
      }),
      shuffleOptions({
        question: "A decimal is converted to percentage by moving the decimal point ______ places to the right.",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Two",
      }),
      shuffleOptions({
        question: "Amount is always equal to Principal plus ______.",
        optionA: "Rate",
        optionB: "Interest",
        optionC: "Profit",
        correctAnswer: "Interest",
      }),
      shuffleOptions({
        question: "A percentage decrease compares the decrease to the ______ amount.",
        optionA: "Final",
        optionB: "Future",
        optionC: "Original",
        correctAnswer: "Original",
      }),
      shuffleOptions({
        question: "SP minus CP gives the ______.",
        optionA: "Discount",
        optionB: "Profit or Loss",
        optionC: "Principal",
        correctAnswer: "Profit or Loss",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "0.36 written as a percentage becomes 36%.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A value of 150% represents more than one whole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If CP exceeds SP, then the shopkeeper has made a profit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Simple Interest increases when the principal increases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Converting a percentage to a decimal requires dividing by 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Selling Price is the amount a shopkeeper pays to buy goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A ratio can be converted to a percentage by multiplying by 100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A percentage can also be written as a fraction with denominator 100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If an amount increases from 100 to 120, the percentage increase is 10%.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Amount is always smaller than the principal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
