export const chapter = "Chapter - 9: Basic Geometrical Ideas";
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
        question: "Which of the following is made up of an endless number of points on a straight path?",
        optionA: "Line segment",
        optionB: "Line",
        optionC: "Ray",
        correctAnswer: "Line",
      }),
      shuffleOptions({
        question: "Two lines that meet at a point are called:",
        optionA: "Parallel lines",
        optionB: "Intersecting lines",
        optionC: "Concurrent lines",
        correctAnswer: "Intersecting lines",
      }),
      shuffleOptions({
        question: "A curve whose starting and ending points are different is called a:",
        optionA: "Closed curve",
        optionB: "Open curve",
        optionC: "Polygon",
        correctAnswer: "Open curve",
      }),
      shuffleOptions({
        question: "Which of the following is a simple closed curve made of straight line segments?",
        optionA: "Polygon",
        optionB: "Arc",
        optionC: "Sector",
        correctAnswer: "Polygon",
      }),
      shuffleOptions({
        question: "A figure formed by two rays having the same initial point is called:",
        optionA: "Line",
        optionB: "Angle",
        optionC: "Chord",
        correctAnswer: "Angle",
      }),
      shuffleOptions({
        question: "A triangle is a closed figure made up of:",
        optionA: "Two sides",
        optionB: "Three sides",
        optionC: "Four sides",
        correctAnswer: "Three sides",
      }),
      shuffleOptions({
        question: "The perpendicular drawn from a vertex of a triangle to its opposite side is called:",
        optionA: "Median",
        optionB: "Altitude",
        optionC: "Diagonal",
        correctAnswer: "Altitude",
      }),
      shuffleOptions({
        question: "A quadrilateral has:",
        optionA: "Three vertices",
        optionB: "Five vertices",
        optionC: "Four vertices",
        correctAnswer: "Four vertices",
      }),
      shuffleOptions({
        question: "A line segment joining two non-adjacent vertices of a polygon is called a:",
        optionA: "Chord",
        optionB: "Diagonal",
        optionC: "Ray",
        correctAnswer: "Diagonal",
      }),
      shuffleOptions({
        question: "A circle is a set of all points that are at a fixed distance from a:",
        optionA: "Chord",
        optionB: "Centre",
        optionC: "Diameter",
        correctAnswer: "Centre",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ray has only ______ end point.",
        optionA: "two",
        optionB: "one",
        optionC: "no",
        correctAnswer: "one",
      }),
      shuffleOptions({
        question: "A line segment has a ______ length.",
        optionA: "definite",
        optionB: "very long",
        optionC: "zero",
        correctAnswer: "definite",
      }),
      shuffleOptions({
        question: "The two sides of a polygon that meet at a point are called ______ sides.",
        optionA: "straight",
        optionB: "similar",
        optionC: "adjacent",
        correctAnswer: "adjacent",
      }),
      shuffleOptions({
        question: "A curve that crosses itself is called a ______ closed curve.",
        optionA: "complex",
        optionB: "simple",
        optionC: "open",
        correctAnswer: "complex",
      }),
      shuffleOptions({
        question: "The region inside a closed curve is called its ______.",
        optionA: "exterior",
        optionB: "boundary",
        optionC: "interior",
        correctAnswer: "interior",
      }),
      shuffleOptions({
        question: "The point where the two rays forming an angle meet is called the ______.",
        optionA: "edge",
        optionB: "vertex",
        optionC: "segment",
        correctAnswer: "vertex",
      }),
      shuffleOptions({
        question: "A polygon with six sides is called a ______.",
        optionA: "hexagon",
        optionB: "pentagon",
        optionC: "octagon",
        correctAnswer: "hexagon",
      }),
      shuffleOptions({
        question: "A line segment that joins the centre of a circle to its boundary is called a ______.",
        optionA: "chord",
        optionB: "radius",
        optionC: "diameter",
        correctAnswer: "radius",
      }),
      shuffleOptions({
        question: "A circle divided into two equal parts by a diameter forms each part as a ______.",
        optionA: "major arc",
        optionB: "semi-circle",
        optionC: "sector",
        correctAnswer: "semi-circle",
      }),
      shuffleOptions({
        question: "A quadrilateral has ______ diagonals.",
        optionA: "three",
        optionB: "one",
        optionC: "two",
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
        question: "A line can be extended endlessly on both sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A line segment has no end points.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Parallel lines can meet if extended long enough.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A simple closed curve does not cross itself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle has four angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The median of a triangle joins a vertex to the midpoint of the opposite side.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A quadrilateral has three sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A diameter of a circle is always longer than its radius.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Points lying outside a circle are in its exterior.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Concentric circles share the same centre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
