export const chapter = "Chapter - 6: Algebraic Expressions";
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
        question: "Which symbol in algebra represents a quantity that can change?",
        optionA: "Constant",
        optionB: "Variable",
        optionC: "Factor",
        correctAnswer: "Variable",
      }),
      shuffleOptions({
        question: "What are the different parts of an algebraic expression separated by + or – called?",
        optionA: "Factors",
        optionB: "Terms",
        optionC: "Degrees",
        correctAnswer: "Terms",
      }),
      shuffleOptions({
        question: "Which of the following is NOT a polynomial?",
        optionA: "5x – 7",
        optionB: "3x² + 1 1",
        optionC: "x",
        correctAnswer: "x",
      }),
      shuffleOptions({
        question: "In the term 6xy², what is the numerical coefficient?",
        optionA: "y²",
        optionB: "xy²",
        optionC: "6",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "The sum of powers of variables in a term is called its —",
        optionA: "Coefficient",
        optionB: "Degree",
        optionC: "Product",
        correctAnswer: "Degree",
      }),
      shuffleOptions({
        question: "The literal factors of the term 4x²y are —",
        optionA: "x and y",
        optionB: "x, x, y",
        optionC: "x, y, y",
        correctAnswer: "x, x, y",
      }),
      shuffleOptions({
        question: "Which expression is a binomial?",
        optionA: "7xy²",
        optionB: "x² + 5y",
        optionC: "x + y + z",
        correctAnswer: "x² + 5y",
      }),
      shuffleOptions({
        question: "What is the perimeter of an equilateral triangle of side s?",
        optionA: "2s",
        optionB: "3s",
        optionC: "4s",
        correctAnswer: "3s",
      }),
      shuffleOptions({
        question: "The general rule for the matchstick pattern 2n + 1 represents —",
        optionA: "Area",
        optionB: "Number pattern rule",
        optionC: "Coefficient",
        correctAnswer: "Number pattern rule",
      }),
      shuffleOptions({
        question: "Two terms are like terms only when they have the same —",
        optionA: "Numerical coefficient",
        optionB: "Literal factors with same powers",
        optionC: "Constant",
        correctAnswer: "Literal factors with same powers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A term with no variable is called a ______.",
        optionA: "degree",
        optionB: "constant term",
        optionC: "variable",
        correctAnswer: "constant term",
      }),
      shuffleOptions({
        question: "The degree of the term x³y² is ______.",
        optionA: "5",
        optionB: "3",
        optionC: "2",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "The area of a triangle is given by ______ × b × h. 1",
        optionA: "3 1",
        optionB: "2",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The symbol that has fixed numerical value is called a ______.",
        optionA: "variable",
        optionB: "factor",
        optionC: "constant",
        correctAnswer: "constant",
      }),
      shuffleOptions({
        question: "In the expression 7x²y, the coefficient of x² is ______.",
        optionA: "7y",
        optionB: "xy",
        optionC: "7 1",
        correctAnswer: "7y",
      }),
      shuffleOptions({
        question: "Expressions like x are not ______.",
        optionA: "monomials",
        optionB: "binomials",
        optionC: "polynomials",
        correctAnswer: "polynomials",
      }),
      shuffleOptions({
        question: "A pattern such as 3, 7, 11, 15,... follows the rule ______.",
        optionA: "3n + 2",
        optionB: "4n – 1",
        correctAnswer: "4n – 1",
      }),
      shuffleOptions({
        question: "The expression containing only one term is a ______.",
        optionA: "binomial",
        optionB: "monomial",
        optionC: "trinomial",
        correctAnswer: "monomial",
      }),
      shuffleOptions({
        question: "To add algebraic expressions, we combine only ______ terms.",
        optionA: "unlike",
        optionB: "like",
        optionC: "constant",
        correctAnswer: "like",
      }),
      shuffleOptions({
        question: "The area of a square of side s is ______.",
        optionA: "s²",
        optionB: "2s",
        optionC: "s³",
        correctAnswer: "s²",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The terms 5xy and –9yx are like terms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The degree of a constant term is always 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "4x²y + 7xy is a polynomial.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The value of 2x + 6 at x = 5 is 16.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An algebraic expression with three unlike terms is called a trinomial.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The perimeter of a square is 3s.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In the term 3xy², the coefficient of y² is 3x.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Expressions containing 1/x are not polynomials.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A monomial can have more than one term.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The rule for the matchstick pattern 2n – 1 gives an odd number for every n.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
