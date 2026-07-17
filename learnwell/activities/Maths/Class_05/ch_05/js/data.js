export const chapter = "Chapter - 5: Simplification";
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
        question: "Which rule is followed when simplifying expressions with brackets?",
        optionA: "DMAS",
        optionB: "BODMAS",
        optionC: "AMDS",
        correctAnswer: "BODMAS",
      }),
      shuffleOptions({
        question: "Which of the following is solved first while using BODMAS?",
        optionA: "Multiplication",
        optionB: "Brackets",
        optionC: "Addition",
        correctAnswer: "Brackets",
      }),
      shuffleOptions({
        question: "The bar or vinculum is placed",
        optionA: "Above the numbers",
        optionB: "Below the numbers",
        optionC: "Beside the numbers",
        correctAnswer: "Above the numbers",
      }),
      shuffleOptions({
        question: "Which bracket is solved just before square brackets?",
        optionA: "Curly brackets { }",
        optionB: "Round brackets ( )",
        optionC: "Bar",
        correctAnswer: "Curly brackets { }",
      }),
      shuffleOptions({
        question: "“Of” in simplification means:",
        optionA: "Division",
        optionB: "Subtraction",
        optionC: "Multiplication",
        correctAnswer: "Multiplication",
      }),
      shuffleOptions({
        question: "In the expression 18 – 6 ÷ 3 × 4 + 5, the first operation is:",
        optionA: "6 ÷ 3",
        optionB: "3 × 4",
        optionC: "18 – …",
        correctAnswer: "6 ÷ 3",
      }),
      shuffleOptions({
        question: "Brackets are used to:",
        optionA: "Decorate expressions",
        optionB: "Separate parts of an expression",
        optionC: "Increase numbers",
        correctAnswer: "Separate parts of an expression",
      }),
      shuffleOptions({
        question: "The correct order of operations (without brackets) is:",
        optionA: "A → S → M → D",
        optionB: "D → M → A → S",
        optionC: "S → A → D → M",
        correctAnswer: "D → M → A → S",
      }),
      shuffleOptions({
        question: "Square brackets are written as:",
        optionA: "( )",
        optionB: "{ }",
        optionC: "[ ]",
        correctAnswer: "[ ]",
      }),
      shuffleOptions({
        question: "Which operation is done last in DMAS?",
        optionA: "Division",
        optionB: "Addition",
        optionC: "Subtraction",
        correctAnswer: "Subtraction",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "DMAS stands for Division, Multiplication, Addition and ______.",
        optionA: "Separation",
        optionB: "Subtraction",
        optionC: "Simplification",
        correctAnswer: "Subtraction",
      }),
      shuffleOptions({
        question: "The B in BODMAS stands for ______.",
        optionA: "Brackets",
        optionB: "Base",
        optionC: "Bar",
        correctAnswer: "Brackets",
      }),
      shuffleOptions({
        question: "The “of” operation means ______.",
        optionA: "addition",
        optionB: "multiplication",
        optionC: "subtraction",
        correctAnswer: "multiplication",
      }),
      shuffleOptions({
        question: "The first type of bracket solved is the ______.",
        optionA: "curly bracket",
        optionB: "bar/vinculum",
        optionC: "square bracket",
        correctAnswer: "bar/vinculum",
      }),
      shuffleOptions({
        question: "Curly brackets are written as ______.",
        optionA: "( )",
        optionB: "[ ]",
        optionC: "{ }",
        correctAnswer: "{ }",
      }),
      shuffleOptions({
        question: "To simplify expressions, we follow a fixed ______.",
        optionA: "order of operations",
        optionB: "number pattern",
        optionC: "formula",
        correctAnswer: "order of operations",
      }),
      shuffleOptions({
        question: "Brackets help to ______ different parts of an expression.",
        optionA: "remove",
        optionB: "separate",
        optionC: "hide",
        correctAnswer: "separate",
      }),
      shuffleOptions({
        question: "12 ÷ 3 is equal to ______.",
        optionA: "4",
        optionB: "3",
        optionC: "6",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Round brackets are also called ______ brackets.",
        optionA: "small",
        optionB: "curly",
        optionC: "square",
        correctAnswer: "small",
      }),
      shuffleOptions({
        question: "In the absence of a sign before a bracket, it is understood as ______.",
        optionA: "addition",
        optionB: "multiplication",
        optionC: "division",
        correctAnswer: "multiplication",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "“Of” is always solved before division.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Curly brackets are solved before bar/vinculum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Square brackets are the outermost brackets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The order Bar → Round → Curly → Square is used while simplifying brackets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The DMAS rule is used only when brackets are not present.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In simplification, subtraction comes before multiplication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Brackets help in showing which part must be solved first.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "10 ÷ 2 × 3 is solved left to right because division and multiplication have same priority.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A vinculum is considered a type of bracket.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Addition must always be solved before multiplication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
