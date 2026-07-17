export const chapter = "Chapter - 7: Algebra";
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
        question: "What do we call a symbol that can take different numerical values?",
        optionA: "Constant",
        optionB: "Variable",
        optionC: "Equation",
        correctAnswer: "Variable",
      }),
      shuffleOptions({
        question: "Which expression represents the number of matchsticks needed to form m Ts?",
        optionA: "m + 2",
        optionB: "2m",
        optionC: "m – 2",
        correctAnswer: "2m",
      }),
      shuffleOptions({
        question: "What is the perimeter of a square whose side is s?",
        optionA: "s + s",
        optionB: "3s",
        optionC: "4s",
        correctAnswer: "4s",
      }),
      shuffleOptions({
        question: "Which of the following represents “twice a number decreased by 5”?",
        optionA: "2x + 5",
        optionB: "5 – 2x",
        optionC: "2x – 5",
        correctAnswer: "2x – 5",
      }),
      shuffleOptions({
        question: "What do we call a mathematical statement that contains the equal sign (=)?",
        optionA: "Variable",
        optionB: "Expression",
        optionC: "Equation",
        correctAnswer: "Equation",
      }),
      shuffleOptions({
        question: "If each box contains 50 matchsticks, what is the number of matchsticks in n such boxes?",
        optionA: "50 + n",
        optionB: "50 ÷ n",
        optionC: "50n",
        correctAnswer: "50n",
      }),
      shuffleOptions({
        question: "What is the diameter of a circle whose radius is r?",
        optionA: "r",
        optionB: "2r  r",
        optionC: "2",
        correctAnswer: "2r  r",
      }),
      shuffleOptions({
        question: "Which expression shows “the sum of p and three times q”?",
        optionA: "p + 3q",
        optionB: "3(p + q)",
        optionC: "p – 3q",
        correctAnswer: "p + 3q",
      }),
      shuffleOptions({
        question: "If the length of a rectangle is l and breadth is b, what is its perimeter?",
        optionA: "l + b",
        optionB: "2(l + b)",
        optionC: "lb",
        correctAnswer: "2(l + b)",
      }),
      shuffleOptions({
        question: "Which expression represents “nine more than x”?",
        optionA: "x – 9",
        optionB: "9 – x",
        optionC: "x + 9",
        correctAnswer: "x + 9",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A symbol with a fixed numerical value is called a ______.",
        optionA: "variable",
        optionB: "constant",
        optionC: "expression",
        correctAnswer: "constant",
      }),
      shuffleOptions({
        question: "The number of matchsticks required to form q Ns is ______.",
        optionA: "2q",
        optionB: "2q + 1",
        optionC: "q + 1",
        correctAnswer: "2q + 1",
      }),
      shuffleOptions({
        question: "The expression for “six more than t” is ______.",
        optionA: "t + 6",
        optionB: "6 – t",
        optionC: "6t",
        correctAnswer: "t + 6",
      }),
      shuffleOptions({
        question: "The perimeter of an equilateral triangle of side s is ______.",
        optionA: "2s",
        optionB: "3s",
        optionC: "4s",
        correctAnswer: "3s",
      }),
      shuffleOptions({
        question: "The total distance travelled by a bus moving at x km/h for 6 hours is ______.",
        optionA: "x – 6",
        optionB: "6x",
        optionC: "x + 6",
        correctAnswer: "6x",
      }),
      shuffleOptions({
        question: "A cube has ______ edges.",
        optionA: "4",
        optionB: "8",
        optionC: "12",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "The expression 4x + 1 represents “four times x increased by ______.”",
        optionA: "1",
        optionB: "4",
        optionC: "x",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "The rule for the number of matchsticks used in forming n hexagons is ______.",
        optionA: "5n + 1",
        optionB: "6n",
        optionC: "2n",
        correctAnswer: "5n + 1",
      }),
      shuffleOptions({
        question: "The algebraic expression for “y decreased by 9” is ______.",
        optionA: "9 – y",
        optionB: "y – 9",
        optionC: "9y",
        correctAnswer: "y – 9",
      }),
      shuffleOptions({
        question: "The diameter of a circle is always ______ times its radius.",
        optionA: "two",
        optionB: "four",
        optionC: "one-half",
        correctAnswer: "two",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A constant is a quantity whose value never changes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The expression 2x + 5 means that 5 is added before doubling x.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "An equation must always contain a variable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The expression 12r represents “12 multiplied by r.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A square with side s has a perimeter of 3s.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A variable can take different numerical values.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number of matchsticks required for m Ts is given by 2m.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The diameter of a circle is half its radius.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The algebraic expression 3x – 2 represents “2 added to 3x.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "5(n + 1) represents “5 added to n.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
