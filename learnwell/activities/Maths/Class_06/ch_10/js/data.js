export const chapter = "Chapter - 10: Understanding Elementary Shapes";
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
        question: "Which method helps us copy the exact length of a line segment?",
        optionA: "Ruler",
        optionB: "Divider",
        optionC: "Tracing paper",
        correctAnswer: "Divider",
      }),
      shuffleOptions({
        question: "An angle that measures exactly half a revolution is called a:",
        optionA: "Straight angle",
        optionB: "Acute angle",
        optionC: "Reflex angle",
        correctAnswer: "Straight angle",
      }),
      shuffleOptions({
        question: "Which angle is smaller than a right angle?",
        optionA: "Acute angle",
        optionB: "Straight angle",
        optionC: "Reflex angle",
        correctAnswer: "Acute angle",
      }),
      shuffleOptions({
        question: "What does a protractor measure?",
        optionA: "Length",
        optionB: "Area",
        optionC: "Angle",
        correctAnswer: "Angle",
      }),
      shuffleOptions({
        question: "Which triangle has all sides of different lengths?",
        optionA: "Isosceles",
        optionB: "Scalene",
        optionC: "Equilateral",
        correctAnswer: "Scalene",
      }),
      shuffleOptions({
        question: "Which quadrilateral has only one pair of parallel sides?",
        optionA: "Parallelogram",
        optionB: "Trapezium",
        optionC: "Square",
        correctAnswer: "Trapezium",
      }),
      shuffleOptions({
        question: "A cube has how many edges?",
        optionA: "10",
        optionB: "12",
        optionC: "8",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "A sphere has how many vertices?",
        optionA: "1",
        optionB: "2",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "A right triangle always has one angle equal to:",
        optionA: "45°",
        optionB: "60°",
        optionC: "90°",
        correctAnswer: "90°",
      }),
      shuffleOptions({
        question: "Which solid has one curved surface and one circular face?",
        optionA: "Cube",
        optionB: "Cone",
        correctAnswer: "Cone",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A complete revolution measures ______ degrees.",
        optionA: "360°",
        optionB: "180°",
        optionC: "90°",
        correctAnswer: "360°",
      }),
      shuffleOptions({
        question: "A triangle whose all sides are equal is called ______.",
        optionA: "scalene",
        optionB: "isosceles",
        optionC: "equilateral",
        correctAnswer: "equilateral",
      }),
      shuffleOptions({
        question: "A line segment has ______ endpoints.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "A straight angle equals ______ right angles.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A reflex angle is always greater than ______ degrees.",
        optionA: "90°",
        optionB: "360°",
        optionC: "180°",
        correctAnswer: "180°",
      }),
      shuffleOptions({
        question: "A square has all sides equal and each angle equal to ______.",
        optionA: "45°",
        optionB: "90°",
        optionC: "180°",
        correctAnswer: "90°",
      }),
      shuffleOptions({
        question: "A cylinder has ______ circular faces.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "A cone has ______ vertex.",
        optionA: "1",
        optionB: "0",
        optionC: "2",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "A parallelogram has its opposite sides ______.",
        optionA: "curved",
        optionB: "equal and parallel",
        optionC: "unequal",
        correctAnswer: "equal and parallel",
      }),
      shuffleOptions({
        question: "A triangular prism has ______ faces.",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A straight angle is equal to 180°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A reflex angle is smaller than a right angle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cube and cuboid both have 12 edges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A sphere has no flat face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle can have two obtuse angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A right triangle can also be an isosceles triangle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The diagonals of a square are equal in length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A trapezium has exactly one pair of parallel sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cone has one flat circular face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All faces of a cube are rectangles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
