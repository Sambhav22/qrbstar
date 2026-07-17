export const chapter = "Chapter - 10: Basic Geometrical Concepts";
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
        question: "A line segment has",
        optionA: "No end points",
        optionB: "One end point",
        optionC: "Two end points",
        correctAnswer: "Two end points",
      }),
      shuffleOptions({
        question: "The common end point of two rays forming an angle is called",
        optionA: "Arm",
        optionB: "Vertex",
        optionC: "Base",
        correctAnswer: "Vertex",
      }),
      shuffleOptions({
        question: "Lines that never meet even if extended are called",
        optionA: "Intersecting lines",
        optionB: "Parallel lines",
        optionC: "Perpendicular lines",
        correctAnswer: "Parallel lines",
      }),
      shuffleOptions({
        question: "An angle measuring more than 180° and less than 360° is a",
        optionA: "Reflex angle",
        optionB: "Straight angle",
        optionC: "Acute angle",
        correctAnswer: "Reflex angle",
      }),
      shuffleOptions({
        question: "A triangle with all three sides equal is called",
        optionA: "Scalene triangle",
        optionB: "Isosceles triangle",
        optionC: "Equilateral triangle",
        correctAnswer: "Equilateral triangle",
      }),
      shuffleOptions({
        question: "A ray has",
        optionA: "Two end points",
        optionB: "No end points",
        optionC: "One end point",
        correctAnswer: "One end point",
      }),
      shuffleOptions({
        question: "An angle measuring exactly 180° is called a",
        optionA: "Straight angle",
        optionB: "Obtuse angle",
        optionC: "Acute angle",
        correctAnswer: "Straight angle",
      }),
      shuffleOptions({
        question: "Lines that intersect at 90° are called",
        optionA: "Perpendicular lines",
        optionB: "Parallel lines",
        optionC: "Horizontal lines",
        correctAnswer: "Perpendicular lines",
      }),
      shuffleOptions({
        question: "A triangle having one angle more than 90° is a",
        optionA: "Obtuse-angled triangle",
        optionB: "Acute-angled triangle",
        optionC: "Right-angled triangle",
        correctAnswer: "Obtuse-angled triangle",
      }),
      shuffleOptions({
        question: "A complete angle measures",
        optionA: "90°",
        optionB: "180°",
        optionC: "360°",
        correctAnswer: "360°",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A point is shown by a small ______.",
        optionA: "line",
        optionB: "dot",
        optionC: "arrow",
        correctAnswer: "dot",
      }),
      shuffleOptions({
        question: "Angles are measured using a ______.",
        optionA: "ruler",
        optionB: "divider",
        optionC: "protractor",
        correctAnswer: "protractor",
      }),
      shuffleOptions({
        question: "The inside region of an angle is called its ______.",
        optionA: "interior",
        optionB: "boundary",
        optionC: "exterior",
        correctAnswer: "interior",
      }),
      shuffleOptions({
        question: "A line that goes endlessly in both directions is a ______.",
        optionA: "ray",
        optionB: "line segment",
        optionC: "line",
        correctAnswer: "line",
      }),
      shuffleOptions({
        question: "A triangle has ______ sides.",
        optionA: "2",
        optionB: "4",
        optionC: "3",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "A triangle whose two sides are equal is called ______.",
        optionA: "scalene triangle",
        optionB: "isosceles triangle",
        optionC: "equilateral triangle",
        correctAnswer: "isosceles triangle",
      }),
      shuffleOptions({
        question: "A straight angle looks like a ______ line.",
        optionA: "bent",
        optionB: "curved",
        optionC: "straight",
        correctAnswer: "straight",
      }),
      shuffleOptions({
        question: "The angles formed by two intersecting lines without a common arm are called ______ angles.",
        optionA: "adjacent",
        optionB: "complementary",
        optionC: "vertically opposite",
        correctAnswer: "vertically opposite",
      }),
      shuffleOptions({
        question: "The sum of all angles of a triangle is ______.",
        optionA: "90°",
        optionB: "180°",
        optionC: "360°",
        correctAnswer: "180°",
      }),
      shuffleOptions({
        question: "A triangle whose all angles are less than 90° is called ______.",
        optionA: "acute-angled triangle",
        optionB: "obtuse-angled triangle",
        optionC: "right-angled triangle",
        correctAnswer: "acute-angled triangle",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A line can be measured.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A ray extends endlessly in one direction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All equilateral triangles have angles of 60°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Parallel lines intersect at one point.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A reflex angle is smaller than a right angle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A line segment has a fixed length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Complementary angles add up to 180°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Perpendicular lines meet at 90°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle cannot have more than one obtuse angle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The vertex is the point where the two arms of an angle meet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
