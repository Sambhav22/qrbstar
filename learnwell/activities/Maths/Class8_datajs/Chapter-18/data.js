export const chapter = "Chapter - 18: Introduction to Graphs";
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
        question: "What is the point called where the x-axis and y-axis intersect?",
        optionA: "Quadrant",
        optionB: "Abscissa",
        optionC: "Origin",
        correctAnswer: "Origin",
      }),
      shuffleOptions({
        question: "Which of the following represents an ordered pair?",
        optionA: "x + y",
        optionB: "(x, y)",
        optionC: "x : y",
        correctAnswer: "(x, y)",
      }),
      shuffleOptions({
        question: "In which quadrant does the point (–4, –6) lie?",
        optionA: "II quadrant",
        optionB: "III quadrant",
        optionC: "IV quadrant",
        correctAnswer: "III quadrant",
      }),
      shuffleOptions({
        question: "Which axis represents horizontal distance from the origin?",
        optionA: "y-axis",
        optionB: "x-axis",
        optionC: "Both axes",
        correctAnswer: "x-axis",
      }),
      shuffleOptions({
        question: "Which of the following graphs is a straight-line graph?",
        optionA: "Distance vs time at constant speed",
        optionB: "Area vs side of square",
        optionC: "Temperature vs time",
        correctAnswer: "Distance vs time at constant speed",
      }),
      shuffleOptions({
        question: "What is the x-coordinate of the point (0, –5)?",
        optionA: "–5",
        optionB: "0",
        optionC: "5",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Which variable is usually taken on the x-axis?",
        optionA: "Dependent variable",
        optionB: "Independent variable",
        optionC: "Constant",
        correctAnswer: "Independent variable",
      }),
      shuffleOptions({
        question: "A point lying above the x-axis has",
        optionA: "negative y-coordinate",
        optionB: "zero y-coordinate",
        optionC: "positive y-coordinate",
        correctAnswer: "positive y-coordinate",
      }),
      shuffleOptions({
        question: "Which of the following points lies on the y-axis?",
        optionA: "(3, 0)",
        optionB: "(0, 4)",
        optionC: "(–2, –3)",
        correctAnswer: "(0, 4)",
      }),
      shuffleOptions({
        question: "What kind of graph is obtained for simple interest vs time?",
        optionA: "Curved",
        optionB: "Linear",
        optionC: "Horizontal",
        correctAnswer: "Linear",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The system used to locate points on a plane is called the ______ system.",
        optionA: "Linear",
        optionB: "Cartesian",
        optionC: "Numerical",
        correctAnswer: "Cartesian",
      }),
      shuffleOptions({
        question: "The x-coordinate of a point is also known as the ______.",
        optionA: "abscissa",
        optionB: "ordinate",
        optionC: "origin",
        correctAnswer: "abscissa",
      }),
      shuffleOptions({
        question: "A point with y = 0 always lies on the ______.",
        optionA: "y-axis",
        optionB: "x-axis",
        optionC: "origin",
        correctAnswer: "x-axis",
      }),
      shuffleOptions({
        question: "In the IV quadrant, the x-coordinate is ______ and y-coordinate is ______.",
        optionA: "negative, positive",
        optionB: "positive, negative",
        optionC: "negative, negative",
        correctAnswer: "positive, negative",
      }),
      shuffleOptions({
        question: "The coordinates of the origin are ______.",
        optionA: "(1, 0)",
        optionB: "(0, 1)",
        optionC: "(0, 0)",
        correctAnswer: "(0, 0)",
      }),
      shuffleOptions({
        question: "A graph that is not a straight line is called a ______ graph.",
        optionA: "linear",
        optionB: "non-linear",
        optionC: "parallel",
        correctAnswer: "non-linear",
      }),
      shuffleOptions({
        question: "In a distance–time graph, time is taken on the ______ axis.",
        optionA: "y",
        optionB: "x",
        optionC: "both",
        correctAnswer: "x",
      }),
      shuffleOptions({
        question: "The distance–time graph of an object at rest is ______.",
        optionA: "slanting",
        optionB: "curved",
        optionC: "horizontal",
        correctAnswer: "horizontal",
      }),
      shuffleOptions({
        question: "The y-coordinate of a point is also called the ______.",
        optionA: "abscissa",
        optionB: "ordinate",
        optionC: "axis",
        correctAnswer: "ordinate",
      }),
      shuffleOptions({
        question: "A straight-line graph shows a ______ relationship.",
        optionA: "random",
        optionB: "linear",
        optionC: "circular",
        correctAnswer: "linear",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The coordinates of the origin are (0, 0).",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The point (5, 0) lies on the y-axis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In the II quadrant, x is negative and y is positive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Distance depends on time in a distance–time graph.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The graph of area versus side of a square is a straight line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Any point on the x-axis has ordinate equal to zero.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The point (–3, 4) lies in the III quadrant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A straight-line distance–time graph shows constant speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ordered pairs (2, 5) and (5, 2) represent the same point.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Cartesian plane is divided into four quadrants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
