export const chapter = "Chapter - 10: Compound Interest";
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
        question: "What do we call the interest calculated on the increased principal every year?",
        optionA: "Simple interest",
        optionB: "Compound interest",
        optionC: "Rate of interest",
        correctAnswer: "Compound interest",
      }),
      shuffleOptions({
        question: "What becomes the principal for the second year in compound interest?",
        optionA: "Original principal",
        optionB: "First year’s interest",
        optionC: "Amount at the end of first year",
        correctAnswer: "Amount at the end of first year",
      }),
      shuffleOptions({
        question: "Which formula is used to find the amount when interest is compounded annually? PRT",
        optionA: "A = 100 1+R",
        optionB: "A = P ( 100 )n",
        optionC: "A=P+R+T",
        correctAnswer: "A = P ( 100 )n",
      }),
      shuffleOptions({
        question: "Which type of interest is generally followed by banks?",
        optionA: "Simple interest",
        optionB: "Compound interest",
        optionC: "Discount",
        correctAnswer: "Compound interest",
      }),
      shuffleOptions({
        question: "What is the interest for the first year in compound interest equal to?",
        optionA: "Simple interest",
        optionB: "More than simple interest",
        optionC: "Less than simple interest",
        correctAnswer: "Simple interest",
      }),
      shuffleOptions({
        question: "What is called the time after which interest is added to the principal?",
        optionA: "Rate of interest",
        optionB: "Conversion period",
        optionC: "Amount",
        correctAnswer: "Conversion period",
      }),
      shuffleOptions({
        question: "If interest is compounded quarterly, how many conversion periods are there in one year?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "What does the symbol ‘A’ represent in compound interest formulae?",
        optionA: "Principal",
        optionB: "Amount",
        optionC: "Rate",
        correctAnswer: "Amount",
      }),
      shuffleOptions({
        question: "Why does compound interest increase faster than simple interest?",
        optionA: "Rate changes every year",
        optionB: "Time decreases",
        optionC: "Interest is added to principal",
        correctAnswer: "Interest is added to principal",
      }),
      shuffleOptions({
        question: "Which of the following situations uses compound interest calculations?",
        optionA: "Population growth",
        optionB: "Measurement of length",
        optionC: "Drawing scale",
        correctAnswer: "Population growth",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In compound interest, interest is calculated on the ______ principal.",
        optionA: "same",
        optionB: "new",
        optionC: "fixed",
        correctAnswer: "new",
      }),
      shuffleOptions({
        question: "The total money paid after interest is called the ______.",
        optionA: "principal",
        optionB: "interest",
        optionC: "amount",
        correctAnswer: "amount",
      }),
      shuffleOptions({
        question: "When time is given in months, it is divided by ______ to convert it into years.",
        optionA: "10",
        optionB: "12",
        optionC: "365",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "In half-yearly compounding, the rate of interest per period is ______.",
        optionA: "R",
        optionB: "R ÷ 2",
        optionC: "R ÷ 4",
        correctAnswer: "R ÷ 2",
      }),
      shuffleOptions({
        question: "The formula used to find compound interest is CI = ______.",
        optionA: "A + P",
        optionB: "A − P",
        optionC: "P − A",
        correctAnswer: "A − P",
      }),
      shuffleOptions({
        question: "In quarterly compounding, the number of conversion periods in one year is ______.",
        optionA: "1",
        optionB: "2",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Rate of interest is calculated on ______ rupees.",
        optionA: "10",
        optionB: "50",
        optionC: "100",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "Compound interest for one year is ______ simple interest for the same year.",
        optionA: "greater than",
        optionB: "less than",
        optionC: "equal to",
        correctAnswer: "equal to",
      }),
      shuffleOptions({
        question: "The principal increases every year in ______ interest.",
        optionA: "simple",
        optionB: "compound",
        optionC: "both",
        correctAnswer: "compound",
      }),
      shuffleOptions({
        question: "Depreciation problems use the formula with ______ rate of interest.",
        optionA: "increasing",
        optionB: "decreasing",
        optionC: "zero",
        correctAnswer: "decreasing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Compound interest is calculated on principal plus interest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In compound interest, the principal remains the same every year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Simple interest and compound interest are equal in the first year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Quarterly compounding means interest is added four times a year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The amount is always equal to principal minus interest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Compound interest formula can be used for depreciation problems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Conversion period means the rate of interest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Compound interest depends on principal, rate and time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Banks generally calculate interest using simple interest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The amount includes both principal and interest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
