export const chapter = "Chapter - 11: Symmetry";
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
        question: "Which shape has only one line of symmetry?",
        optionA: "Kite",
        optionB: "Rectangle",
        optionC: "Circle",
        correctAnswer: "Kite",
      }),
      shuffleOptions({
        question: "Which figure has infinite lines of symmetry?",
        optionA: "Triangle",
        optionB: "Circle",
        optionC: "Square",
        correctAnswer: "Circle",
      }),
      shuffleOptions({
        question: "In reflection, which part of the object gets reversed?",
        optionA: "Front",
        optionB: "Back",
        optionC: "Left–right orientation",
        correctAnswer: "Left–right orientation",
      }),
      shuffleOptions({
        question: "Which shape has its diagonals as lines of symmetry?",
        optionA: "Rhombus",
        optionB: "Rectangle",
        optionC: "Trapezium",
        correctAnswer: "Rhombus",
      }),
      shuffleOptions({
        question: "Which polygon has as many lines of symmetry as its number of sides?",
        optionA: "Any regular polygon",
        optionB: "Any quadrilateral",
        optionC: "Any triangle",
        correctAnswer: "Any regular polygon",
      }),
      shuffleOptions({
        question: "Which shape has exactly two lines of symmetry?",
        optionA: "Square",
        optionB: "Rectangle",
        optionC: "Scalene triangle",
        correctAnswer: "Rectangle",
      }),
      shuffleOptions({
        question: "The line dividing a figure into two identical parts is called:",
        optionA: "Midpoint",
        optionB: "Line of symmetry",
        optionC: "Diameter",
        correctAnswer: "Line of symmetry",
      }),
      shuffleOptions({
        question: "Which of these is related to mirror reflection?",
        optionA: "Rotation",
        optionB: "Symmetry about a line",
        optionC: "Enlargement",
        correctAnswer: "Symmetry about a line",
      }),
      shuffleOptions({
        question: "A semi-circle is symmetric about which line?",
        optionA: "Its curved boundary",
        optionB: "Perpendicular bisector of its diameter",
        optionC: "A diagonal",
        correctAnswer: "Perpendicular bisector of its diameter",
      }),
      shuffleOptions({
        question: "Which triangle has no line of symmetry?",
        optionA: "Isosceles",
        optionB: "Equilateral",
        optionC: "Scalene",
        correctAnswer: "Scalene",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A circle has _______ lines of symmetry.",
        optionA: "0",
        optionB: "2",
        optionC: "infinite",
        correctAnswer: "infinite",
      }),
      shuffleOptions({
        question: "A square has _______ diagonal symmetry lines.",
        optionA: "1",
        optionB: "2",
        optionC: "4",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "The mirror image of an object forms the same distance _______ the mirror as the object.",
        optionA: "under",
        optionB: "behind",
        optionC: "above",
        correctAnswer: "behind",
      }),
      shuffleOptions({
        question: "In reflection, only the _______ changes, not the size.",
        optionA: "orientation",
        optionB: "colour",
        optionC: "measurement",
        correctAnswer: "orientation",
      }),
      shuffleOptions({
        question: "A line segment has _______ lines of symmetry.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A semi-circle has _______ line of symmetry.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "one",
      }),
      shuffleOptions({
        question: "Regular polygons have symmetry equal to their _______.",
        optionA: "diagonals",
        optionB: "sides",
        optionC: "angles",
        correctAnswer: "sides",
      }),
      shuffleOptions({
        question: "A rhombus is symmetric about its _______.",
        optionA: "medians",
        optionB: "diagonals",
        optionC: "sides",
        correctAnswer: "diagonals",
      }),
      shuffleOptions({
        question: "A kite has _______ line of symmetry.",
        optionA: "no",
        optionB: "one",
        optionC: "two",
        correctAnswer: "one",
      }),
      shuffleOptions({
        question: "Reflection and symmetry are closely related because both involve a _______.",
        optionA: "mirror line",
        optionB: "number pattern",
        optionC: "rotation point",
        correctAnswer: "mirror line",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A square has four lines of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A scalene triangle has no line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reflection changes the size of the object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A rectangle and a rhombus both have two lines of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A line of symmetry divides a figure into two identical halves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All regular polygons have equal numbers of sides and lines of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A semi-circle is symmetric about its diameter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a mirror image, the left side appears as the right side.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A circle has only one line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Reflection symmetry is also known as mirror symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
