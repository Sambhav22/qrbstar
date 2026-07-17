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
        question: "What does the word “percent” mean?",
        optionA: "Out of ten",
        optionB: "Out of hundred",
        optionC: "Out of thousand",
        correctAnswer: "Out of hundred",
      }),
      shuffleOptions({
        question: "Which of the following is equal to 50%?",
        optionA: "1 1",
        optionB: "2  2",
        optionC: "5",
        correctAnswer: "2  2",
      }),
      shuffleOptions({
        question: "Profit is the difference between",
        optionA: "CP and MP",
        optionB: "SP and CP",
        optionC: "MP and SP",
        correctAnswer: "SP and CP",
      }),
      shuffleOptions({
        question: "If selling price is less than cost price, there is",
        optionA: "profit",
        optionB: "loss",
        optionC: "no profit no loss",
        correctAnswer: "loss",
      }),
      shuffleOptions({
        question: "Discount is always calculated on",
        optionA: "cost price",
        optionB: "selling price",
        optionC: "marked price",
        correctAnswer: "marked price",
      }),
      shuffleOptions({
        question: "Gain or loss percent is always calculated on",
        optionA: "selling price",
        optionB: "marked price",
        optionC: "cost price",
        correctAnswer: "cost price",
      }),
      shuffleOptions({
        question: "VAT is",
        optionA: "a reduction on price",
        optionB: "a tax included in price",
        optionC: "a profit",
        correctAnswer: "a tax included in price",
      }),
      shuffleOptions({
        question: "Which price is printed on the article?",
        optionA: "Cost price",
        optionB: "Selling price",
        optionC: "Marked price",
        correctAnswer: "Marked price",
      }),
      shuffleOptions({
        question: "If CP = SP, then there is",
        optionA: "profit",
        optionB: "loss",
        optionC: "no profit no loss",
        correctAnswer: "no profit no loss",
      }),
      shuffleOptions({
        question: "Sales tax is charged on",
        optionA: "cost price",
        optionB: "selling price",
        optionC: "marked price",
        correctAnswer: "selling price",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The word percent means per ______.",
        optionA: "ten",
        optionB: "hundred",
        optionC: "thousand",
        correctAnswer: "hundred",
      }),
      shuffleOptions({
        question: "Profit percent is calculated on the ______ price.",
        optionA: "selling",
        optionB: "cost",
        optionC: "marked",
        correctAnswer: "cost",
      }),
      shuffleOptions({
        question: "The reduction given on marked price is called ______.",
        optionA: "profit",
        optionB: "discount",
        optionC: "tax",
        correctAnswer: "discount",
      }),
      shuffleOptions({
        question: "The price at which an article is bought is called ______ price.",
        optionA: "selling",
        optionB: "cost",
        optionC: "marked",
        correctAnswer: "cost",
      }),
      shuffleOptions({
        question: "VAT stands for",
        optionA: "Value Added Tax",
        optionB: "Variable Added Tax",
        optionC: "Value Allowed Tax",
        correctAnswer: "Value Added Tax",
      }),
      shuffleOptions({
        question: "Sales tax is collected by the ______ and given to the government.",
        optionA: "customer",
        optionB: "shopkeeper",
        optionC: "wholesaler",
        correctAnswer: "shopkeeper",
      }),
      shuffleOptions({
        question: "If SP is greater than CP, the seller makes a ______.",
        optionA: "loss",
        optionB: "discount",
        optionC: "profit",
        correctAnswer: "profit",
      }),
      shuffleOptions({
        question: "Discount percent is calculated on the ______ price.",
        optionA: "selling",
        optionB: "marked",
        optionC: "cost",
        correctAnswer: "marked",
      }),
      shuffleOptions({
        question: "VAT is calculated on the ______ selling price after discount.",
        optionA: "net",
        optionB: "cost",
        optionC: "marked",
        correctAnswer: "net",
      }),
      shuffleOptions({
        question: "The difference between CP and SP in case of loss is called ______.",
        optionA: "profit",
        optionB: "discount",
        optionC: "loss",
        correctAnswer: "loss",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Percent means out of hundred.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Profit percent is calculated on selling price.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Discount is a reduction on marked price.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "VAT is included in the price of an item.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sales tax is charged by the government.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Loss occurs when selling price is more than cost price.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Marked price is also called list price.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "VAT is calculated after deducting discount.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gain and loss percent are calculated on marked price.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "If CP = SP, there is neither gain nor loss.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
