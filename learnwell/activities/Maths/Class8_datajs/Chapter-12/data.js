export const chapter = "Chapter - 12: Understanding Shapes (Quadrilaterals)";
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
        question: "Which polygon has exactly four sides?",
        optionA: "Triangle",
        optionB: "Quadrilateral",
        optionC: "Pentagon",
        correctAnswer: "Quadrilateral",
      }),
      shuffleOptions({
        question: "The sum of interior angles of a quadrilateral is",
        optionA: "180°",
        optionB: "270°",
        optionC: "360°",
        correctAnswer: "360°",
      }),
      shuffleOptions({
        question: "A polygon in which all sides and all angles are equal is called",
        optionA: "Convex polygon",
        optionB: "Regular polygon",
        optionC: "Concave polygon",
        correctAnswer: "Regular polygon",
      }),
      shuffleOptions({
        question: "Which quadrilateral has both pairs of opposite sides parallel?",
        optionA: "Kite",
        optionB: "Trapezium",
        optionC: "Parallelogram",
        correctAnswer: "Parallelogram",
      }),
      shuffleOptions({
        question: "The diagonals of a parallelogram",
        optionA: "are equal",
        optionB: "bisect each other",
        optionC: "are perpendicular",
        correctAnswer: "bisect each other",
      }),
      shuffleOptions({
        question: "Which quadrilateral has all angles equal to 90°?",
        optionA: "Rhombus",
        optionB: "Rectangle",
        optionC: "Kite",
        correctAnswer: "Rectangle",
      }),
      shuffleOptions({
        question: "A quadrilateral having exactly one pair of parallel sides is called",
        optionA: "Parallelogram",
        optionB: "Trapezium",
        optionC: "Square",
        correctAnswer: "Trapezium",
      }),
      shuffleOptions({
        question: "The diagonals of which quadrilateral bisect each other at right angles?",
        optionA: "Rectangle",
        optionB: "Rhombus",
        optionC: "Trapezium",
        correctAnswer: "Rhombus",
      }),
      shuffleOptions({
        question: "Which of the following is always a convex polygon?",
        optionA: "Regular polygon",
        optionB: "Concave polygon",
        optionC: "Irregular polygon",
        correctAnswer: "Regular polygon",
      }),
      shuffleOptions({
        question: "How many diagonals does a quadrilateral have?",
        optionA: "1",
        optionB: "2",
        optionC: "4",
        correctAnswer: "2",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sum of exterior angles of any polygon is ______",
        optionA: "180°",
        optionB: "360°",
        optionC: "540°",
        correctAnswer: "360°",
      }),
      shuffleOptions({
        question: "A polygon having 6 sides is called a ______",
        optionA: "Pentagon",
        optionB: "Hexagon",
        optionC: "Heptagon",
        correctAnswer: "Hexagon",
      }),
      shuffleOptions({
        question: "The diagonals of a rectangle are ______ in length",
        optionA: "unequal",
        optionB: "equal",
        optionC: "perpendicular",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "A quadrilateral in which one angle is greater than 180° is called ______",
        optionA: "convex",
        optionB: "regular",
        optionC: "concave",
        correctAnswer: "concave",
      }),
      shuffleOptions({
        question: "Each exterior angle of a regular polygon is found by ______",
        optionA: "(n − 2) × 180",
        optionB: "360 ÷ n",
        optionC: "180 ÷ n",
        correctAnswer: "360 ÷ n",
      }),
      shuffleOptions({
        question: "A square is both a rectangle and a ______",
        optionA: "trapezium",
        optionB: "rhombus",
        optionC: "kite",
        correctAnswer: "rhombus",
      }),
      shuffleOptions({
        question: "The diagonals of a rhombus bisect each other at ______ angles",
        optionA: "acute",
        optionB: "obtuse",
        optionC: "right",
        correctAnswer: "right",
      }),
      shuffleOptions({
        question: "A quadrilateral has ______ vertices",
        optionA: "three",
        optionB: "four",
        optionC: "five",
        correctAnswer: "four",
      }),
      shuffleOptions({
        question: "The opposite angles of a parallelogram are always ______",
        optionA: "unequal",
        optionB: "equal",
        optionC: "supplementary",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "A polygon with 10 sides is called a ______",
        optionA: "Nonagon",
        optionB: "Decagon",
        optionC: "Octagon",
        correctAnswer: "Decagon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sum of interior angles of a quadrilateral is 360°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every rectangle is a parallelogram.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The diagonals of a parallelogram are always equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A square has all sides equal and all angles equal.",
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
        question: "A concave quadrilateral has all angles less than 180°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The exterior angle and interior angle at a vertex form a linear pair.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every regular polygon is convex.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A kite has two pairs of adjacent equal sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
