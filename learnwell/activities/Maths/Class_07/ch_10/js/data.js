export const chapter = "Chapter - 10: Lines and Angles";
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
        question: "Which pair of angles is formed when two lines intersect?",
        optionA: "Corresponding",
        optionB: "Vertically opposite",
        optionC: "Co-interior",
        correctAnswer: "Vertically opposite",
      }),
      shuffleOptions({
        question: "Which angles lie inside the two lines and on opposite sides of the transversal?",
        optionA: "Alternate interior angles",
        optionB: "Corresponding angles",
        optionC: "Linear pair",
        correctAnswer: "Alternate interior angles",
      }),
      shuffleOptions({
        question: "Co-interior angles on parallel lines are always:",
        optionA: "Equal",
        optionB: "Supplementary",
        optionC: "Complementary",
        correctAnswer: "Supplementary",
      }),
      shuffleOptions({
        question: "A line that intersects two or more lines at different points is called a:",
        optionA: "Transversal",
        optionB: "Bisector",
        optionC: "Perpendicular",
        correctAnswer: "Transversal",
      }),
      shuffleOptions({
        question: "Two adjacent angles form a linear pair when their non-common arms are:",
        optionA: "Acute",
        optionB: "Opposite rays",
        optionC: "Equal",
        correctAnswer: "Opposite rays",
      }),
      shuffleOptions({
        question: "Which angles lie on the same side of the transversal, one interior and one exterior?",
        optionA: "Alternate exterior",
        optionB: "Vertically opposite",
        optionC: "Corresponding angles",
        correctAnswer: "Corresponding angles",
      }),
      shuffleOptions({
        question: "Which of the following is always true when two parallel lines are cut by a transversal?",
        optionA: "Linear pairs are unequal",
        optionB: "Corresponding angles are equal",
        optionC: "Supplementary angles become equal",
        correctAnswer: "Corresponding angles are equal",
      }),
      shuffleOptions({
        question: "The angle formed by two rays with a common endpoint is called a:",
        optionA: "Line segment",
        optionB: "Angle",
        optionC: "Transversal",
        correctAnswer: "Angle",
      }),
      shuffleOptions({
        question: "A pair of complementary angles must add up to:",
        optionA: "45°",
        optionB: "90°",
        optionC: "180°",
        correctAnswer: "90°",
      }),
      shuffleOptions({
        question: "If one angle of a linear pair is obtuse, the other must be:",
        optionA: "Acute",
        optionB: "Obtuse",
        optionC: "Right angle",
        correctAnswer: "Acute",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Vertically opposite angles are always ________.",
        optionA: "120°",
        optionB: "equal",
        optionC: "supplementary",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "Two angles whose sum is 180° are called ________ angles.",
        optionA: "supplementary",
        optionB: "complementary",
        optionC: "corresponding",
        correctAnswer: "supplementary",
      }),
      shuffleOptions({
        question: "The angles which lie outside the two lines and on opposite sides of the transversal are ________ angles.",
        optionA: "alternate exterior",
        optionB: "corresponding",
        optionC: "adjacent",
        correctAnswer: "alternate exterior",
      }),
      shuffleOptions({
        question: "A pair of angles whose sum is 90° is called ________.",
        optionA: "supplementary",
        optionB: "complementary",
        optionC: "linear",
        correctAnswer: "complementary",
      }),
      shuffleOptions({
        question: "When a transversal cuts two parallel lines, alternate interior angles become ________.",
        optionA: "equal",
        optionB: "obtuse",
        optionC: "right",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "A linear pair of angles always has its non-common arms in ________.",
        optionA: "same direction",
        optionB: "opposite rays",
        optionC: "right angle position",
        correctAnswer: "opposite rays",
      }),
      shuffleOptions({
        question: "The sum of angles on a straight line is ________.",
        optionA: "360°",
        optionB: "180°",
        optionC: "90°",
        correctAnswer: "180°",
      }),
      shuffleOptions({
        question: "The angles that lie on the same side of the transversal and on the inside of two lines are ________.",
        optionA: "co-interior angles",
        optionB: "corresponding angles",
        optionC: "linear pair",
        correctAnswer: "co-interior angles",
      }),
      shuffleOptions({
        question: "A ray starts from a ________ and extends endlessly in one direction.",
        optionA: "mid-point",
        optionB: "point (endpoint)",
        optionC: "line",
        correctAnswer: "point (endpoint)",
      }),
      shuffleOptions({
        question: "When two lines do not meet and remain equidistant, they are called ________ lines.",
        optionA: "perpendicular",
        optionB: "transversal",
        optionC: "parallel",
        correctAnswer: "parallel",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Vertically opposite angles are equal for any pair of intersecting lines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Corresponding angles are always supplementary.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Two complementary angles must both be acute angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Co-interior angles on parallel lines are always supplementary.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A line segment can be extended endlessly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Alternate interior angles lie on the same side of the transversal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Linear pair angles always form a straight line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Parallel lines can intersect at exactly one point.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A ray has only one endpoint.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sum of all angles around a point is 360°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
