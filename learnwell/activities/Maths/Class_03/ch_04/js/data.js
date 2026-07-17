export const chapter = "Chapter - 4: Multiplication";
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
        question: "What is the product of 13 × 4?",
        optionA: "42",
        optionB: "62",
        optionC: "52",
        correctAnswer: "52",
      }),
      shuffleOptions({
        question: "Which number should be multiplied by 8 to get 64?",
        optionA: "6",
        optionB: "8",
        optionC: "9",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "What is 17 × 3 equal to?",
        optionA: "50",
        optionB: "51",
        optionC: "54",
        correctAnswer: "51",
      }),
      shuffleOptions({
        question: "Which property states that 12 × 5 = 5 × 12?",
        optionA: "Distributive",
        optionB: "Commutative",
        optionC: "Associative",
        correctAnswer: "Commutative",
      }),
      shuffleOptions({
        question: "What is 4 × 200 equal to?",
        optionA: "400",
        optionB: "600",
        optionC: "800",
        correctAnswer: "800",
      }),
      shuffleOptions({
        question: "Which number is the multiplicand in 432 × 3?",
        optionA: "3",
        optionB: "432",
        optionC: "435",
        correctAnswer: "432",
      }),
      shuffleOptions({
        question: "What is 14 × 8?",
        optionA: "112",
        optionB: "108",
        optionC: "120",
        correctAnswer: "112",
      }),
      shuffleOptions({
        question: "How many zeros will the product of 125 × 100 have?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "What is 19 × 4?",
        optionA: "64",
        optionB: "72",
        optionC: "76",
        correctAnswer: "76",
      }),
      shuffleOptions({
        question: "Multiplying any number by 1 gives—",
        optionA: "0",
        optionB: "the same number",
        optionC: "double the number",
        correctAnswer: "the same number",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "12 × 6 = ______",
        optionA: "60",
        optionB: "72",
        optionC: "90",
        correctAnswer: "72",
      }),
      shuffleOptions({
        question: "4 × 30 = ______",
        optionA: "120",
        optionB: "140",
        optionC: "160",
        correctAnswer: "120",
      }),
      shuffleOptions({
        question: "7 × 100 = ______",
        optionA: "700",
        optionB: "7000",
        optionC: "70",
        correctAnswer: "700",
      }),
      shuffleOptions({
        question: "(6 × 2) × 5 = 6 × (2 × ______)",
        optionA: "3",
        optionB: "5",
        optionC: "2",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "18 × ______ = 54",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "8 × ______ = 8000",
        optionA: "1000",
        optionB: "100",
        optionC: "10",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "The result of a multiplication is called the ______",
        optionA: "product",
        optionB: "multiplier",
        optionC: "multiplicand",
        correctAnswer: "product",
      }),
      shuffleOptions({
        question: "5 × 11 = ______",
        optionA: "45",
        optionB: "55",
        optionC: "65",
        correctAnswer: "55",
      }),
      shuffleOptions({
        question: "A number multiplied by 0 is always ______",
        optionA: "the number",
        optionB: "1",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "20 × ______ = 200",
        optionA: "2",
        optionB: "5",
        optionC: "10",
        correctAnswer: "10",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Multiplying any number by 0 always gives 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The product of 18 × 4 is 92.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "14 × 3 is equal to 42.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "12 × 1 gives a new number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The distributive property is used in 5 × (10 + 2).",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "17 × 5 equals 95.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "If we multiply numbers in any order, product remains same.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "3 × 100 = 30.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The multiplier is the number to be multiplied.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "9 × 9 is 81.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
