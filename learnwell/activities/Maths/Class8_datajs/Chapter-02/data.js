export const chapter = "Chapter - 2: Exponents";
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
        question: "What is the value of (−2)3 ?",
        optionA: "–6",
        optionB: "–8",
        optionC: "8",
        correctAnswer: "–8",
      }),
      shuffleOptions({
        question: "Which rule is used when multiplying expressions with the same base?",
        optionA: "Add the exponents",
        optionB: "Subtract the bases",
        optionC: "Multiply the exponents 3 3 4",
        correctAnswer: "Add the exponents",
      }),
      shuffleOptions({
        question: "What is the reciprocal of (4)2 × (4)2 × (3)2? 4 4 3",
        optionA: "(3)2 × (3)2 ×(4)2  3 3",
        optionB: "4 × 4",
        optionC: "1",
        correctAnswer: "(3)2 × (3)2 ×(4)2  3 3",
      }),
      shuffleOptions({
        question: "What is the value of 10−2 ?",
        optionA: "1",
        optionB: "1000 1",
        optionC: "100",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "Which of the following is written in standard form?",
        optionA: "0.00072 × 10",
        optionB: "7.2 × 10⁻⁴",
        optionC: "72 × 10⁻⁶ 5",
        correctAnswer: "7.2 × 10⁻⁴",
      }),
      shuffleOptions({
        question: "What is (58)0 (8)0 (85)0?",
        optionA: "5",
        optionB: "0",
        optionC: "1",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Which among the following represents a negative exponent?",
        optionA: "42",
        optionB: "7−17-1  2",
        optionC: "(25)3 (5)3 (52)3",
        correctAnswer: "7−17-1  2",
      }),
      shuffleOptions({
        question: "What is the value of 34÷ 32 ?",
        optionA: "3²",
        optionB: "3³",
        optionC: "4²",
        correctAnswer: "3²",
      }),
      shuffleOptions({
        question: "Which number is larger?",
        optionA: "2.5×103",
        optionB: "2.5×105",
        optionC: "Both are equal",
        correctAnswer: "2.5×105",
      }),
      shuffleOptions({
        question: "What is the value of (23)2 ×(23)2 ?",
        optionA: "2⁵",
        optionB: "2⁶",
        optionC: "2⁴",
        correctAnswer: "2⁶",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "a−1 is equal to ______.",
        optionA: "a 1",
        optionB: "a",
        optionC: "a0 2",
        correctAnswer: "a",
      }),
      shuffleOptions({
        question: "(3)2 _____. 4",
        optionA: "9  2",
        optionB: "9",
        correctAnswer: "9  2",
      }),
      shuffleOptions({
        question: "0.0000065 in standard form is ______ × 10⁻⁶.",
        optionA: "0.65",
        optionB: "6.5",
        optionC: "65",
        correctAnswer: "6.5",
      }),
      shuffleOptions({
        question: "am÷an=a___",
        optionA: "m + n",
        optionB: "m – n",
        optionC: "mn",
        correctAnswer: "m – n",
      }),
      shuffleOptions({
        question: "The value of 4040 is ______.",
        optionA: "1",
        optionB: "4",
        optionC: "0",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Standard form of 450000 is ______.",
        optionA: "4.5 × 10⁵",
        optionB: "4.5 × 10⁴",
        optionC: "4.5 × 10⁵  7 9",
        correctAnswer: "4.5 × 10⁵  7 9",
      }),
      shuffleOptions({
        question: "The expression (9)-1 = (7) ___",
        optionA: "1",
        optionB: "–1",
        optionC: "2",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "25 =______.",
        optionA: "10",
        optionB: "25",
        optionC: "32",
        correctAnswer: "32",
      }),
      shuffleOptions({
        question: "10−4 = _____. 1",
        optionA: "10000",
        optionB: "1",
        optionC: "100",
        correctAnswer: "10000",
      }),
      shuffleOptions({
        question: "In standard form, the number before ×10ⁿ must be between ______.",
        optionA: "0 and 1",
        optionB: "1 and 10",
        optionC: "10 and 100",
        correctAnswer: "1 and 10",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "a0=1 for any non-zero value of a.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "(−3)2 = (−3)×(−3) = −9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A number like 0.00023 will have a negative exponent in standard form.",
        optionA: "True",
        optionB: "False 5 5 6 6",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "(6)1= 6 = (5)1 =5.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "To compare numbers in standard form, we first compare the exponents.",
        optionA: "True",
        optionB: "False 1 1",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "2−3 = 23 = 8",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "(42)3=45",
        optionA: "True",
        optionB: "False  3",
        correctAnswer: "False  3",
      }),
      shuffleOptions({
        question: "(5)0=1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In standard form, a large number always has a positive power of 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "63 = 36",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
