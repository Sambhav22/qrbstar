export const chapter = "Chapter - 13: Construction of Quadrilaterals";
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
        question: "Which of the following is an element of a quadrilateral?",
        optionA: "Radius",
        optionB: "Diagonal",
        optionC: "Diameter",
        correctAnswer: "Diagonal",
      }),
      shuffleOptions({
        question: "A quadrilateral can be constructed when measurements of four sides and one _____ are given.",
        optionA: "angle",
        optionB: "diagonal",
        optionC: "arc",
        correctAnswer: "diagonal",
      }),
      shuffleOptions({
        question: "Which quadrilateral has opposite sides equal and parallel?",
        optionA: "Trapezium",
        optionB: "Parallelogram",
        optionC: "Kite",
        correctAnswer: "Parallelogram",
      }),
      shuffleOptions({
        question: "The minimum number of elements required to construct a quadrilateral is",
        optionA: "four",
        optionB: "five",
        optionC: "six",
        correctAnswer: "five",
      }),
      shuffleOptions({
        question: "In a parallelogram, the diagonals",
        optionA: "are unequal",
        optionB: "bisect each other",
        optionC: "are perpendicular",
        correctAnswer: "bisect each other",
      }),
      shuffleOptions({
        question: "Which special quadrilateral has all sides equal but angles not necessarily 90°?",
        optionA: "Square",
        optionB: "Rectangle",
        optionC: "Rhombus",
        correctAnswer: "Rhombus",
      }),
      shuffleOptions({
        question: "Which instrument is mainly used to draw arcs in construction?",
        optionA: "Scale",
        optionB: "Protractor",
        optionC: "Compass",
        correctAnswer: "Compass",
      }),
      shuffleOptions({
        question: "The sum of all interior angles of a quadrilateral is",
        optionA: "180°",
        optionB: "270°",
        optionC: "360°",
        correctAnswer: "360°",
      }),
      shuffleOptions({
        question: "Which quadrilateral has only one pair of parallel sides?",
        optionA: "Trapezium",
        optionB: "Rectangle",
        optionC: "Square",
        correctAnswer: "Trapezium",
      }),
      shuffleOptions({
        question: "Before starting construction, we should first draw a",
        optionA: "circle",
        optionB: "rough sketch",
        optionC: "perpendicular",
        correctAnswer: "rough sketch",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A quadrilateral has _____ diagonals.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "The diagonals of a rectangle are always _____ to each other.",
        optionA: "unequal",
        optionB: "equal",
        optionC: "perpendicular",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "In a square, each angle measures _____ degrees.",
        optionA: "60",
        optionB: "90",
        optionC: "120",
        correctAnswer: "90",
      }),
      shuffleOptions({
        question: "A figure with all sides equal is called a _____.",
        optionA: "rectangle",
        optionB: "rhombus",
        optionC: "trapezium",
        correctAnswer: "rhombus",
      }),
      shuffleOptions({
        question: "A quadrilateral with both pairs of opposite sides parallel is a _____.",
        optionA: "parallelogram",
        optionB: "kite",
        optionC: "trapezium",
        correctAnswer: "parallelogram",
      }),
      shuffleOptions({
        question: "A rough sketch helps us to understand the _____ of the quadrilateral.",
        optionA: "colour",
        optionB: "position",
        optionC: "area",
        correctAnswer: "position",
      }),
      shuffleOptions({
        question: "The diagonals of a square are _____ bisectors of each other.",
        optionA: "unequal",
        optionB: "perpendicular",
        optionC: "curved",
        correctAnswer: "perpendicular",
      }),
      shuffleOptions({
        question: "A trapezium has _____ pair of parallel sides.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "one",
      }),
      shuffleOptions({
        question: "A rectangle can be constructed using one side and one _____.",
        optionA: "diagonal",
        optionB: "angle",
        optionC: "arc",
        correctAnswer: "diagonal",
      }),
      shuffleOptions({
        question: "The sides, angles and diagonals together are called the _____ of a quadrilateral.",
        optionA: "properties",
        optionB: "elements",
        optionC: "parts",
        correctAnswer: "elements",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A quadrilateral has four sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All quadrilaterals have equal diagonals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A square is a special type of rectangle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A trapezium has two pairs of parallel sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The diagonals of a rhombus bisect each other at right angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rough sketch is not necessary before construction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The opposite sides of a parallelogram are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rectangle has all sides equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A quadrilateral can have more than two diagonals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Compass is used to draw arcs during construction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
