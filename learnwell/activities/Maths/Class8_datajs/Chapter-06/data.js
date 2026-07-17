export const chapter = "Chapter - 6: Algebraic Expressions and Special Products";
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
        question: "What is the degree of the monomial 9x²y³?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "What do we call an algebraic expression that contains exactly two terms?",
        optionA: "Monomial",
        optionB: "Binomial",
        optionC: "Polynomial",
        correctAnswer: "Binomial",
      }),
      shuffleOptions({
        question: "What is the numerical coefficient of the term 14x³y?",
        optionA: "xy",
        optionB: "14",
        optionC: "3",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "What is the product when 3x is multiplied by 2x²?",
        optionA: "6x²",
        optionB: "5x³",
        optionC: "6x³",
        correctAnswer: "6x³",
      }),
      shuffleOptions({
        question: "What is the result of subtracting (3x – y) from (5x + 2y)?",
        optionA: "2x + 3y",
        optionB: "8x + y",
        optionC: "2x – 3y",
        correctAnswer: "2x + 3y",
      }),
      shuffleOptions({
        question: "Which of the following is a polynomial?",
        optionA: "4x⁻²",
        optionB: "3y + 1",
        optionC: "2/x",
        correctAnswer: "3y + 1",
      }),
      shuffleOptions({
        question: "What is the simplified form of (x + 4)²?",
        optionA: "x² + 8x + 16",
        optionB: "x² + 4",
        optionC: "x² – 16",
        correctAnswer: "x² + 8x + 16",
      }),
      shuffleOptions({
        question: "What is (a + 2)(a + 5) equal to?",
        optionA: "a² + 10a + 10",
        optionB: "a² + 7a + 10",
        optionC: "a² + 5a + 2",
        correctAnswer: "a² + 7a + 10",
      }),
      shuffleOptions({
        question: "What is the quotient when 20a²b is divided by 4ab?",
        optionA: "5a",
        optionB: "4ab",
        optionC: "20a",
        correctAnswer: "5a",
      }),
      shuffleOptions({
        question: "What is the sign of the product of two negative numbers?",
        optionA: "Positive",
        optionB: "Negative",
        optionC: "Zero",
        correctAnswer: "Positive",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The numerical coefficient of 14x³y is ______.",
        optionA: "14",
        optionB: "3",
        optionC: "xy",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "The product (x + 5)(x – 5) is equal to ______.",
        optionA: "x² + 25",
        optionB: "x² – 25",
        optionC: "25x",
        correctAnswer: "x² – 25",
      }),
      shuffleOptions({
        question: "The degree of the term 7a²b³ is ______.",
        optionA: "3",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "In the expression 3a + 5b, the terms are ______.",
        optionA: "like",
        optionB: "unlike",
        optionC: "equal",
        correctAnswer: "unlike",
      }),
      shuffleOptions({
        question: "The square of (3x – 1) is ______.",
        optionA: "9x² – 6x + 1",
        optionB: "3x² – 1",
        optionC: "9x – 1",
        correctAnswer: "9x² – 6x + 1",
      }),
      shuffleOptions({
        question: "The quotient of 24xy ÷ 6y is ______.",
        optionA: "4x",
        optionB: "6xy",
        optionC: "2y",
        correctAnswer: "4x",
      }),
      shuffleOptions({
        question: "The expansion of (a + b)(a + b) is ______.",
        optionA: "a² − 2ab + b²",
        optionB: "a² + 2ab + b²",
        optionC: "ab",
        correctAnswer: "a² + 2ab + b²",
      }),
      shuffleOptions({
        question: "A monomial contains ______ term(s).",
        optionA: "2",
        optionB: "3",
        optionC: "1",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "The degree of the polynomial 10x³ is ______.",
        optionA: "1",
        optionB: "3",
        optionC: "0",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "The product (–) × (–) gives ______.",
        optionA: "+",
        optionB: "–",
        optionC: "0",
        correctAnswer: "+",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Like terms must have the same literal factors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The expressions x²y and xy² are like terms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The product of two monomials is always a monomial.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "(a + b)² = a² + b².",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A binomial contains exactly two terms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Division of a polynomial by a monomial is done term-wise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "4x + y is a trinomial.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Only like terms can be added.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "(2a + 1)(2a − 1) = 4a² − 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The degree of the constant term is zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
