export const chapter = "Chapter - 12: Geometrical Shapes";
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
        question: "Which line runs straight up and down on a page?",
        optionA: "Horizontal line",
        optionB: "Vertical line",
        optionC: "Slanting line",
        correctAnswer: "Vertical line",
      }),
      shuffleOptions({
        question: "Which of these has only one end point?",
        optionA: "Line segment",
        optionB: "Line",
        optionC: "Ray",
        correctAnswer: "Ray",
      }),
      shuffleOptions({
        question: "What do we call two lines that never meet?",
        optionA: "Intersecting lines",
        optionB: "Parallel lines",
        optionC: "Curved lines",
        correctAnswer: "Parallel lines",
      }),
      shuffleOptions({
        question: "Which part of an angle is the meeting point of its arms?",
        optionA: "Centre",
        optionB: "Vertex",
        optionC: "Chord",
        correctAnswer: "Vertex",
      }),
      shuffleOptions({
        question: "Which figure begins and ends at different points?",
        optionA: "Closed figure",
        optionB: "Open figure",
        optionC: "Semi-circle",
        correctAnswer: "Open figure",
      }),
      shuffleOptions({
        question: "Which line curves and does not remain straight?",
        optionA: "Slanting line",
        optionB: "Curved line",
        optionC: "Vertical line",
        correctAnswer: "Curved line",
      }),
      shuffleOptions({
        question: "Which of the following is the longest chord in a circle?",
        optionA: "Radius",
        optionB: "Diameter",
        optionC: "Arc",
        correctAnswer: "Diameter",
      }),
      shuffleOptions({
        question: "Which of these is formed when two rays meet?",
        optionA: "Angle",
        optionB: "Circle",
        optionC: "Line",
        correctAnswer: "Angle",
      }),
      shuffleOptions({
        question: "Which of these describes the boundary of a circle?",
        optionA: "Semi-circle",
        optionB: "Chord",
        optionC: "Circumference",
        correctAnswer: "Circumference",
      }),
      shuffleOptions({
        question: "Every point on a circle is at the same distance from its—",
        optionA: "Radius",
        optionB: "Centre",
        optionC: "Chord",
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
        question: "A line segment can be measured using a ______.",
        optionA: "compass",
        optionB: "ruler",
        optionC: "divider",
        correctAnswer: "ruler",
      }),
      shuffleOptions({
        question: "A ray starts at one point and goes on ______.",
        optionA: "in both directions",
        optionB: "forever in one direction",
        optionC: "for a short distance",
        correctAnswer: "forever in one direction",
      }),
      shuffleOptions({
        question: "The space between the arms of an angle is its ______.",
        optionA: "boundary",
        optionB: "interior region",
        optionC: "circumference",
        correctAnswer: "interior region",
      }),
      shuffleOptions({
        question: "A figure that does not close at the beginning point is an ______.",
        optionA: "open figure",
        optionB: "angle",
        optionC: "arc",
        correctAnswer: "open figure",
      }),
      shuffleOptions({
        question: "The distance from the centre to any point on the circle is called the ______.",
        optionA: "diameter",
        optionB: "radius",
        optionC: "chord",
        correctAnswer: "radius",
      }),
      shuffleOptions({
        question: "A line that slants is called a ______ line.",
        optionA: "horizontal",
        optionB: "slanting (oblique) line",
        optionC: "curved",
        correctAnswer: "slanting (oblique) line",
      }),
      shuffleOptions({
        question: "Half of a circle is called a ______.",
        optionA: "chord",
        optionB: "semi-circle",
        optionC: "radius",
        correctAnswer: "semi-circle",
      }),
      shuffleOptions({
        question: "A straight path of points that extends endlessly is a ______.",
        optionA: "line",
        optionB: "ray",
        optionC: "segment",
        correctAnswer: "line",
      }),
      shuffleOptions({
        question: "A line segment joining two points on a circle is a ______.",
        optionA: "radius",
        optionB: "diameter",
        optionC: "chord",
        correctAnswer: "chord",
      }),
      shuffleOptions({
        question: "The length around the circle is called the ______.",
        optionA: "diameter",
        optionB: "arc",
        optionC: "circumference",
        correctAnswer: "circumference",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A radius is always half of the diameter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Parallel lines meet at exactly one point.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A curved line may be open or closed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All radii of a circle are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A line has two endpoints.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "An angle is formed by two rays.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A semi-circle is also a type of arc.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A line segment cannot be measured.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The vertex of an angle lies between its two arms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A closed figure always ends at the same point where it begins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
