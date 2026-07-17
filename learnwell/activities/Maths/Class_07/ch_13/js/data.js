export const chapter = "Chapter - 13: Constructions";
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
        question: "Which tool is mainly used to draw arcs while constructing triangles?",
        optionA: "Ruler",
        optionB: "Compass",
        optionC: "Set square",
        correctAnswer: "Compass",
      }),
      shuffleOptions({
        question: "When a transversal cuts two parallel lines, which pair of angles becomes equal?",
        optionA: "Adjacent angles",
        optionB: "Corresponding angles",
        optionC: "Reflex angles",
        correctAnswer: "Corresponding angles",
      }),
      shuffleOptions({
        question: "Which construction criterion uses three known sides?",
        optionA: "ASA",
        optionB: "SAS",
        optionC: "SSS",
        correctAnswer: "SSS",
      }),
      shuffleOptions({
        question: "What must be drawn first before beginning any construction?",
        optionA: "Final diagram",
        optionB: "Rough sketch",
        optionC: "Written steps",
        correctAnswer: "Rough sketch",
      }),
      shuffleOptions({
        question: "Which angle is essential in RHS triangle construction?",
        optionA: "30°",
        optionB: "45°",
        optionC: "90°",
        correctAnswer: "90°",
      }),
      shuffleOptions({
        question: "The perpendicular distance between parallel lines is always:",
        optionA: "Different",
        optionB: "Same",
        optionC: "Zero",
        correctAnswer: "Same",
      }),
      shuffleOptions({
        question: "Which criterion requires an included angle between two sides?",
        optionA: "SAS",
        optionB: "ASA",
        optionC: "SSS",
        correctAnswer: "SAS",
      }),
      shuffleOptions({
        question: "Lines that never meet even when extended infinitely are called:",
        optionA: "Transversals",
        optionB: "Intersecting lines",
        optionC: "Parallel lines",
        correctAnswer: "Parallel lines",
      }),
      shuffleOptions({
        question: "In constructing a parallel line through a point, equal ______ angles are used.",
        optionA: "Alternate interior angles",
        optionB: "Acute angles",
        optionC: "Obtuse angles",
        correctAnswer: "Alternate interior angles",
      }),
      shuffleOptions({
        question: "In SSS construction, the third vertex of the triangle is located using:",
        optionA: "Measurement with scale",
        optionB: "Arcs from two points",
        optionC: "Random marking",
        correctAnswer: "Arcs from two points",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A line that cuts two other lines at two points is called a ______.",
        optionA: "bisector",
        optionB: "transversal",
        optionC: "median",
        correctAnswer: "transversal",
      }),
      shuffleOptions({
        question: "In ASA construction, the known side lies ______ the two angles.",
        optionA: "beside",
        optionB: "opposite",
        optionC: "between",
        correctAnswer: "between",
      }),
      shuffleOptions({
        question: "The sum of the angles of a triangle is always ______ degrees.",
        optionA: "360",
        optionB: "90",
        optionC: "180",
        correctAnswer: "180",
      }),
      shuffleOptions({
        question: "To construct a line parallel to another, we make equal ______ angles.",
        optionA: "complementary",
        optionB: "corresponding",
        optionC: "exterior",
        correctAnswer: "corresponding",
      }),
      shuffleOptions({
        question: "A triangle with all sides equal is called an ______ triangle.",
        optionA: "equilateral",
        optionB: "scalene",
        optionC: "isosceles",
        correctAnswer: "equilateral",
      }),
      shuffleOptions({
        question: "In SSS, all three ______ are known.",
        optionA: "angles",
        optionB: "sides",
        optionC: "radii",
        correctAnswer: "sides",
      }),
      shuffleOptions({
        question: "In SAS, the angle should be ______ the two given sides.",
        optionA: "between",
        optionB: "above",
        optionC: "below",
        correctAnswer: "between",
      }),
      shuffleOptions({
        question: "A right-angled triangle has one angle equal to ______.",
        optionA: "120°",
        optionB: "60°",
        optionC: "90°",
        correctAnswer: "90°",
      }),
      shuffleOptions({
        question: "To maintain accuracy in constructions, we must use a ______ pencil.",
        optionA: "dull",
        optionB: "thick",
        optionC: "sharpened",
        correctAnswer: "sharpened",
      }),
      shuffleOptions({
        question: "The perpendicular distance between parallel lines remains ______.",
        optionA: "constant",
        optionB: "unknown",
        optionC: "variable",
        correctAnswer: "constant",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Parallel lines can intersect if extended far enough.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "An equilateral triangle has three equal angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In SSS construction, arcs are used to locate the third vertex.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Corresponding angles are equal only when lines are parallel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle can be constructed with two obtuse angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A rough sketch is needed to understand construction steps properly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In SAS, the angle given must be between the two sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "RHS construction always involves a right angle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Perpendicular distance between parallel lines changes from point to point.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A compass is used for measuring lengths and drawing arcs in constructions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
