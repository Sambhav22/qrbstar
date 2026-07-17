export const chapter = "Chapter - 7: Linear Equations";
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
        question: "Which part of an equation appears to the left of the equal sign?",
        optionA: "RHS",
        optionB: "LHS",
        optionC: "Variable",
        correctAnswer: "LHS",
      }),
      shuffleOptions({
        question: "What do we call a value that makes an equation true?",
        optionA: "Degree",
        optionB: "Identity",
        optionC: "Solution",
        correctAnswer: "Solution",
      }),
      shuffleOptions({
        question: "Which method involves moving a term to the other side by changing its sign?",
        optionA: "Elimination",
        optionB: "Transposition",
        optionC: "Multiplication x",
        correctAnswer: "Transposition",
      }),
      shuffleOptions({
        question: "What operation helps to remove a division in an equation like = 5? 3",
        optionA: "Add both sides",
        optionB: "Multiply both sides by 3",
        optionC: "Subtract both sides",
        correctAnswer: "Multiply both sides by 3",
      }),
      shuffleOptions({
        question: "What is the standard form of a linear equation in one variable?",
        optionA: "ax² + b = 0",
        optionB: "ax + b = 0",
        optionC: "x + y = 0",
        correctAnswer: "ax + b = 0",
      }),
      shuffleOptions({
        question: "What is the equality sign used to show?",
        optionA: "Difference",
        optionB: "Balance between both sides of equation",
        optionC: "Addition",
        correctAnswer: "Balance between both sides of equation",
      }),
      shuffleOptions({
        question: "What do we call 3x in the equation 3x + 4 = 19?",
        optionA: "Constant",
        optionB: "Variable term",
        optionC: "Solution",
        correctAnswer: "Variable term",
      }),
      shuffleOptions({
        question: "In solving equations, what operation keeps the equation balanced?",
        optionA: "Doing different operations on each side",
        optionB: "Doing the same operation on both sides",
        optionC: "Avoiding operations",
        correctAnswer: "Doing the same operation on both sides",
      }),
      shuffleOptions({
        question: "Which of the following represents “ten more than a number x”?",
        optionA: "10 – x",
        optionB: "x – 10",
        optionC: "x + 10",
        correctAnswer: "x + 10",
      }),
      shuffleOptions({
        question: "What do we call an equality that contains a variable?",
        optionA: "Expression",
        optionB: "Equation",
        optionC: "Term",
        correctAnswer: "Equation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A statement that contains the = sign is called an ______.",
        optionA: "expression",
        optionB: "equation",
        optionC: "operation",
        correctAnswer: "equation",
      }),
      shuffleOptions({
        question: "The value that satisfies an equation is known as its ______.",
        optionA: "sum",
        optionB: "root/solution",
        optionC: "constant",
        correctAnswer: "root/solution",
      }),
      shuffleOptions({
        question: "The expression on the right side of the equal sign is called ______.",
        optionA: "LHS",
        optionB: "RHS",
        optionC: "denominator",
        correctAnswer: "RHS",
      }),
      shuffleOptions({
        question: "To eliminate a negative number from an equation, we ______ the same number to both sides.",
        optionA: "subtract",
        optionB: "divide",
        optionC: "add",
        correctAnswer: "add",
      }),
      shuffleOptions({
        question: "Moving a term to the other side by changing its sign is known as ______.",
        optionA: "balancing",
        optionB: "transposition",
        optionC: "expansion",
        correctAnswer: "transposition",
      }),
      shuffleOptions({
        question: "When both sides of an equation are multiplied by the same number, the equation remains ______.",
        optionA: "unchanged/balanced",
        optionB: "invalid",
        optionC: "reversed",
        correctAnswer: "unchanged/balanced",
      }),
      shuffleOptions({
        question: "In the equation 4x – 3 = 9, the number –3 is a ______.",
        optionA: "variable",
        optionB: "constant term",
        optionC: "solution",
        correctAnswer: "constant term",
      }),
      shuffleOptions({
        question: "The general form ax + b = 0 represents a ______ equation.",
        optionA: "quadratic",
        optionB: "linear in one variable",
        optionC: "cubic",
        correctAnswer: "linear in one variable",
      }),
      shuffleOptions({
        question: "In cross multiplication, the numbers are multiplied ______.",
        optionA: "sideways",
        optionB: "diagonally",
        optionC: "vertically",
        correctAnswer: "diagonally",
      }),
      shuffleOptions({
        question: "An equation remains the same when LHS and RHS are ______.",
        optionA: "cancelled",
        optionB: "multiplied",
        optionC: "interchanged",
        correctAnswer: "interchanged",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sign of equality indicates that the two sides of an equation are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A linear equation in one variable always has only one solution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adding the same number to both sides changes the solution of an equation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "“x – 3 = 12” represents a linear equation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Transposition involves changing the sign of a term when moving it across the equal sign.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An inequation uses the “=” sign.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "2x = 10 means x = 5.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "To remove a denominator, we multiply both sides of the equation by it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "LHS means “Left Hand Solution.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cross multiplication can be used when two ratios are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
