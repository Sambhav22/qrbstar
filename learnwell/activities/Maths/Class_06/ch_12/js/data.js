export const chapter = "Chapter - 12: Geometrical Constructions";
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
        question: "Which instrument is used to construct a circle of given radius?",
        optionA: "Ruler",
        optionB: "Compasses",
        optionC: "Set square",
        correctAnswer: "Compasses",
      }),
      shuffleOptions({
        question: "What is formed when two rays share a common endpoint?",
        optionA: "A line",
        optionB: "An angle",
        optionC: "A curve",
        correctAnswer: "An angle",
      }),
      shuffleOptions({
        question: "Which tool helps in drawing a perpendicular at a point on a line?",
        optionA: "Divider",
        optionB: "Set square",
        optionC: "Protractor",
        correctAnswer: "Set square",
      }),
      shuffleOptions({
        question: "What is the fixed point inside a circle called?",
        optionA: "Centre",
        optionB: "Radius",
        optionC: "Diameter",
        correctAnswer: "Centre",
      }),
      shuffleOptions({
        question: "Which angle is obtained when a 90° angle is bisected?",
        optionA: "60°",
        optionB: "30°",
        optionC: "45°",
        correctAnswer: "45°",
      }),
      shuffleOptions({
        question: "To copy an angle, what is drawn first?",
        optionA: "A circle",
        optionB: "A ray for the new angle base line",
        optionC: "A perpendicular",
        correctAnswer: "A ray for the new angle base line",
      }),
      shuffleOptions({
        question: "The diameter of a circle is always:",
        optionA: "Half the radius",
        optionB: "Equal to radius",
        optionC: "Twice the radius",
        correctAnswer: "Twice the radius",
      }),
      shuffleOptions({
        question: "A perpendicular bisector of a line segment divides it into:",
        optionA: "Two equal parts",
        optionB: "Three equal parts",
        optionC: "Four equal parts",
        correctAnswer: "Two equal parts",
      }),
      shuffleOptions({
        question: "Which method can construct a perpendicular from a point outside the line?",
        optionA: "Only protractor",
        optionB: "Ruler and compasses",
        optionC: "Ruler and set square",
        correctAnswer: "Ruler and set square",
      }),
      shuffleOptions({
        question: "When arcs drawn from two points meet, they help in constructing a:",
        optionA: "Tangent",
        optionB: "Bisector",
        optionC: "Diameter",
        correctAnswer: "Bisector",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A line segment is drawn using a ______.",
        optionA: "protractor",
        optionB: "ruler",
        optionC: "set square",
        correctAnswer: "ruler",
      }),
      shuffleOptions({
        question: "The distance from the centre of a circle to any point on the circle is the ______.",
        optionA: "diameter",
        optionB: "radius",
        optionC: "chord",
        correctAnswer: "radius",
      }),
      shuffleOptions({
        question: "An angle is measured with a ______.",
        optionA: "compass",
        optionB: "set square",
        optionC: "protractor",
        correctAnswer: "protractor",
      }),
      shuffleOptions({
        question: "To construct a 30° angle, we first construct a ______ angle.",
        optionA: "60°",
        optionB: "45°",
        optionC: "120°",
        correctAnswer: "60°",
      }),
      shuffleOptions({
        question: "When copying a line segment, the width of the compasses must remain ______.",
        optionA: "changed",
        optionB: "fixed",
        optionC: "doubled",
        correctAnswer: "fixed",
      }),
      shuffleOptions({
        question: "A perpendicular makes an angle of ______ with the given line.",
        optionA: "30°",
        optionB: "90°",
        optionC: "120°",
        correctAnswer: "90°",
      }),
      shuffleOptions({
        question: "While drawing a circle, the point where the compass needle rests is the ______.",
        optionA: "radius",
        optionB: "chord",
        optionC: "centre",
        correctAnswer: "centre",
      }),
      shuffleOptions({
        question: "The bisector of an angle divides it into ______ parts.",
        optionA: "equal",
        optionB: "three",
        optionC: "unequal",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "When constructing a 90° angle using compasses, arcs are drawn from points that were marked on the ______.",
        optionA: "circle",
        optionB: "ray OX",
        optionC: "protractor",
        correctAnswer: "ray OX",
      }),
      shuffleOptions({
        question: "A perpendicular bisector of a line segment meets it at the ______.",
        optionA: "endpoint",
        optionB: "midpoint",
        optionC: "radius",
        correctAnswer: "midpoint",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A circle can be drawn using only a ruler.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A perpendicular bisector always passes through the midpoint of the segment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A 45° angle can be constructed by bisecting a 120° angle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Copying an angle requires drawing arcs with the same radius on both the original and new rays.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A diameter is the longest chord of a circle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A perpendicular from a point outside a line can be drawn using ruler and set square.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The radius of a circle is always equal to half the diameter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A 30° angle is larger than a 60° angle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When constructing a bisector of an angle, arcs are drawn from both arms of the angle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A 75° angle can be constructed by bisecting the angle between 60° and 90°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
