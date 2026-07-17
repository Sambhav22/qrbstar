export const chapter = "Chapter - 8: Linear Equations";
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
        question: "Which of the following is a linear equation?",
        optionA: "x2+5=0",
        optionB: "3x−7=11",
        optionC: "xy=6xy",
        correctAnswer: "3x−7=11",
      }),
      shuffleOptions({
        question: "What is the value of x in the equation x+9=21?",
        optionA: "12",
        optionB: "30",
        optionC: "9",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "The value which satisfies a linear equation is called its",
        optionA: "coefficient",
        optionB: "variable",
        optionC: "solution",
        correctAnswer: "solution",
      }),
      shuffleOptions({
        question: "If 5x=40, then x equals",
        optionA: "8",
        optionB: "5",
        optionC: "40",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "Which operation allows moving a term to the other side with sign change?",
        optionA: "Division",
        optionB: "Transposition",
        optionC: "Multiplication",
        correctAnswer: "Transposition",
      }),
      shuffleOptions({
        question: "What is the highest power of the variable in a linear equation?",
        optionA: "2",
        optionB: "0",
        optionC: "1",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "If 2x+6=14, then x is",
        optionA: "4",
        optionB: "10",
        optionC: "8",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "Which symbol must an equation always contain?",
        optionA: "+",
        optionB: "−",
        optionC: "=  x 5x 5x",
        correctAnswer: "=  x 5x 5x",
      }),
      shuffleOptions({
        question: "If = = = 5, then x equals 4 4 4",
        optionA: "9",
        optionB: "20",
        optionC: "4",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "Linear equations have",
        optionA: "two solutions",
        optionB: "no solution",
        optionC: "one solution",
        correctAnswer: "one solution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "An equation shows ______ of two algebraic expressions.",
        optionA: "addition",
        optionB: "equality",
        optionC: "subtraction",
        correctAnswer: "equality",
      }),
      shuffleOptions({
        question: "The unknown quantity in an equation is called a ______.",
        optionA: "constant",
        optionB: "variable",
        optionC: "term",
        correctAnswer: "variable",
      }),
      shuffleOptions({
        question: "A linear equation has the highest power of variable equal to ______.",
        optionA: "zero",
        optionB: "two",
        optionC: "one",
        correctAnswer: "one",
      }),
      shuffleOptions({
        question: "The value that satisfies an equation is called its ______.",
        optionA: "coefficient",
        optionB: "solution",
        optionC: "number",
        correctAnswer: "solution",
      }),
      shuffleOptions({
        question: "Same number can be ______ from both sides of an equation.",
        optionA: "added or subtracted",
        optionB: "squared",
        optionC: "ignored",
        correctAnswer: "added or subtracted",
      }),
      shuffleOptions({
        question: "Cross multiplication is used when equations are in ______ form.",
        optionA: "decimal",
        optionB: "fractional",
        optionC: "whole number",
        correctAnswer: "fractional",
      }),
      shuffleOptions({
        question: "In the equation ax+b= c, the value of a cannot be ______.",
        optionA: "1",
        optionB: "2",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Transposition means changing the ______ of a term.",
        optionA: "value",
        optionB: "sign",
        optionC: "variable",
        correctAnswer: "sign",
      }),
      shuffleOptions({
        question: "Solving an equation means finding the ______ of the variable.",
        optionA: "power",
        optionB: "value",
        optionC: "sign",
        correctAnswer: "value",
      }),
      shuffleOptions({
        question: "A linear equation contains ______ variable.",
        optionA: "no",
        optionB: "one",
        optionC: "two",
        correctAnswer: "one",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "4x−5=11 is a linear equation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A linear equation can have more than one solution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Same number can be added to both sides of an equation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dividing both sides of an equation by zero is allowed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The solution of an equation makes it true.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "x2+3=0 is a linear equation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Transposition changes the sign of a term.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every equation must contain an equality sign.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A variable represents an unknown quantity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A linear equation has degree one.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
