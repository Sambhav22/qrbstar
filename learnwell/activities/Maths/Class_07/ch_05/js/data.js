export const chapter = "Chapter - 5: Exponents";
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
        question: "What is the number called that is repeatedly multiplied in an exponential form?",
        optionA: "Exponent",
        optionB: "Index",
        optionC: "Base",
        correctAnswer: "Base",
      }),
      shuffleOptions({
        question: "What does the exponent show in an exponential expression?",
        optionA: "The value of the number",
        optionB: "The number of times the base is multiplied",
        optionC: "The sign of the number",
        correctAnswer: "The number of times the base is multiplied",
      }),
      shuffleOptions({
        question: "How is 53 read?",
        optionA: "3 to the power 5",
        optionB: "5 raised to the power 3",
        optionC: "5 multiplied by 3",
        correctAnswer: "5 raised to the power 3",
      }),
      shuffleOptions({
        question: "Which of the following represents 8 × 8 × 8 × 88 × 8 × 8 × 88 × 8 × 8 × 8?",
        optionA: "83",
        optionB: "88",
        optionC: "48",
        correctAnswer: "88",
      }),
      shuffleOptions({
        question: "What is the base in the expression (–3)5 ?",
        optionA: "5",
        optionB: "–3",
        optionC: "3",
        correctAnswer: "–3",
      }),
      shuffleOptions({
        question: "What is the value of 26 ?",
        optionA: "32",
        optionB: "64",
        optionC: "128",
        correctAnswer: "64",
      }),
      shuffleOptions({
        question: "A negative rational number raised to an even power is always:",
        optionA: "Negative",
        optionB: "Zero",
        optionC: "Positive",
        correctAnswer: "Positive",
      }),
      shuffleOptions({
        question: "Which form makes large numbers easier to read and write?",
        optionA: "Product form",
        optionB: "Expanded form",
        optionC: "Exponential form",
        correctAnswer: "Exponential form",
      }),
      shuffleOptions({
        question: "What is the exponent in 74 ?",
        optionA: "7",
        optionB: "4",
        optionC: "28",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Which of the following is true?",
        optionA: "Base and exponent can be interchanged",
        optionB: "Base and exponent cannot be interchanged",
        optionC: "Exponent is always smaller than base",
        correctAnswer: "Base and exponent cannot be interchanged",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The short form of repeated multiplication is called ______ form.",
        optionA: "product",
        optionB: "expanded",
        optionC: "exponential",
        correctAnswer: "exponential",
      }),
      shuffleOptions({
        question: "In an , nnn is called the ______.",
        optionA: "base",
        optionB: "value",
        optionC: "exponent",
        correctAnswer: "exponent",
      }),
      shuffleOptions({
        question: "The expression 24 means 2 multiplied ______ times.",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "In 87, the base is ______.",
        optionA: "7",
        optionB: "8",
        optionC: "56",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "A negative number raised to an ______ power gives a negative result.",
        optionA: "even",
        optionB: "zero",
        optionC: "odd",
        correctAnswer: "odd",
      }),
      shuffleOptions({
        question: "The exponential form of 5×5×5×5×5×5×5×5×5×5 is ______.",
        optionA: "52",
        optionB: "510",
        optionC: "35",
        correctAnswer: "510",
      }),
      shuffleOptions({
        question: "In exponential form, the power is also called the ______.",
        optionA: "base",
        optionB: "value",
        optionC: "index  1",
        correctAnswer: "index  1",
      }),
      shuffleOptions({
        question: "The number raised to the power 6 is written as ______. 4",
        optionA: "46 1",
        optionB: "( ) 6  4",
        optionC: "52",
        correctAnswer: "( ) 6  4",
      }),
      shuffleOptions({
        question: "Large numbers like the mass of planets are written using ______.",
        optionA: "fractions",
        optionB: "exponents",
        optionC: "decimals",
        correctAnswer: "exponents",
      }),
      shuffleOptions({
        question: "The value of (–5)4 is ______.",
        optionA: "–625",
        optionB: "625",
        optionC: "25",
        correctAnswer: "625",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In exponential form, base and exponent can be interchanged.",
        optionA: "True",
        optionB: "False  24 2 2 2 2",
        correctAnswer: "False  24 2 2 2 2",
      }),
      shuffleOptions({
        question: "means × × × 24 2 2 2 2",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A negative rational number raised to an even power is negative.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In 53, 3 is the exponent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Exponents help in writing very large numbers easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "87 means 7 multiplied by 8.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The exponent tells how many times the base is multiplied.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "(–3)5 gives a positive result.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Exponential form is another name for expanded form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In an, aaa can be any rational number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
