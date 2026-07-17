export const chapter = "Chapter - 15: Area of a Trapezium and a Polygon";
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
        question: "What is the perpendicular distance between the parallel sides of a trapezium called?",
        optionA: "Base",
        optionB: "Diagonal",
        optionC: "Height",
        correctAnswer: "Height",
      }),
      shuffleOptions({
        question: "Which of the following figures has exactly one pair of parallel sides?",
        optionA: "Parallelogram",
        optionB: "Trapezium",
        optionC: "Rectangle",
        correctAnswer: "Trapezium",
      }),
      shuffleOptions({
        question: "The area of a trapezium depends on the sum of parallel sides and the",
        optionA: "diagonal",
        optionB: "height",
        optionC: "non-parallel side",
        correctAnswer: "height",
      }),
      shuffleOptions({
        question: "A regular hexagon can be divided into how many equilateral triangles?",
        optionA: "Four",
        optionB: "Five",
        optionC: "Six",
        correctAnswer: "Six",
      }),
      shuffleOptions({
        question: "Which unit is used to measure area?",
        optionA: "cm",
        optionB: "cm²",
        optionC: "cm³",
        correctAnswer: "cm²",
      }),
      shuffleOptions({
        question: "The distance between two parallel lines is always",
        optionA: "unequal",
        optionB: "zero",
        optionC: "equal",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "A polygon is a closed figure formed by",
        optionA: "curved lines",
        optionB: "straight line segments",
        optionC: "circular arcs",
        correctAnswer: "straight line segments",
      }),
      shuffleOptions({
        question: "To find the area of a quadrilateral, it is divided using a",
        optionA: "median",
        optionB: "altitude",
        optionC: "diagonal  3 √3",
        correctAnswer: "diagonal  3 √3",
      }),
      shuffleOptions({
        question: "Which polygon’s area formula is given as 2 a2",
        optionA: "Pentagon",
        optionB: "Hexagon",
        optionC: "Octagon",
        correctAnswer: "Hexagon",
      }),
      shuffleOptions({
        question: "Area of a trapezium is always expressed in",
        optionA: "linear units",
        optionB: "square units",
        optionC: "cubic units",
        correctAnswer: "square units",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Area of a trapezium = 2 × (__________) × height",
        optionA: "base",
        optionB: "sum of parallel sides",
        optionC: "diagonal",
        correctAnswer: "sum of parallel sides",
      }),
      shuffleOptions({
        question: "A trapezium is a __________ having one pair of parallel sides.",
        optionA: "triangle",
        optionB: "quadrilateral",
        optionC: "pentagon",
        correctAnswer: "quadrilateral",
      }),
      shuffleOptions({
        question: "The height of a trapezium is drawn __________ to the parallel sides.",
        optionA: "parallel",
        optionB: "slant",
        optionC: "perpendicular",
        correctAnswer: "perpendicular",
      }),
      shuffleOptions({
        question: "A regular hexagon has all sides",
        optionA: "unequal",
        optionB: "curved",
        optionC: "equal",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "The area of a polygon is found by dividing it into simpler __________.",
        optionA: "circles",
        optionB: "plane figures",
        optionC: "curves",
        correctAnswer: "plane figures",
      }),
      shuffleOptions({
        question: "The diagonal of a quadrilateral divides it into __________ triangles.",
        optionA: "three",
        optionB: "two",
        optionC: "four",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "Area of a regular octagon depends on the __________ of its side.",
        optionA: "cube",
        optionB: "square",
        optionC: "half",
        correctAnswer: "square",
      }),
      shuffleOptions({
        question: "Area is the measure of the __________ covered by a figure.",
        optionA: "boundary",
        optionB: "surface",
        optionC: "length",
        correctAnswer: "surface",
      }),
      shuffleOptions({
        question: "The formula for area of a trapezium contains __________ parallel sides.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "A hexagon is a polygon with __________ sides.",
        optionA: "five",
        optionB: "six",
        optionC: "eight",
        correctAnswer: "six",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A trapezium has exactly one pair of parallel sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The height of a trapezium is always one of its sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Area is measured in square units.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A polygon can be divided into triangles to find its area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All sides of a regular hexagon are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The diagonal of a quadrilateral divides it into two parts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Distance between two parallel lines is different at different points.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A trapezium is a type of polygon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Area of a figure can be negative.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A regular octagon has equal sides and equal angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
