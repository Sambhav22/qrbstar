export const chapter = "Chapter - 14: Symmetry";
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
        question: "Which figure always looks the same around its centre point?",
        optionA: "Rectangle",
        optionB: "Circle",
        optionC: "Triangle",
        correctAnswer: "Circle",
      }),
      shuffleOptions({
        question: "Which shape has all sides equal and therefore more than one line of symmetry?",
        optionA: "Square",
        optionB: "Kite",
        optionC: "Scalene triangle",
        correctAnswer: "Square",
      }),
      shuffleOptions({
        question: "Which type of triangle has exactly one line of symmetry?",
        optionA: "Scalene",
        optionB: "Isosceles",
        optionC: "Right-angled",
        correctAnswer: "Isosceles",
      }),
      shuffleOptions({
        question: "What do we call the line that divides a figure into two mirror-image halves?",
        optionA: "Diagonal",
        optionB: "Line of symmetry",
        optionC: "Radius",
        correctAnswer: "Line of symmetry",
      }),
      shuffleOptions({
        question: "Which object from nature shows clear left–right symmetry?",
        optionA: "Stone",
        optionB: "Butterfly wings",
        optionC: "Tree branch",
        correctAnswer: "Butterfly wings",
      }),
      shuffleOptions({
        question: "Which flag shown in the chapter has a circle in the centre?",
        optionA: "USA",
        optionB: "Japan",
        optionC: "Canada",
        correctAnswer: "Japan",
      }),
      shuffleOptions({
        question: "A triangle with no equal sides has how many lines of symmetry?",
        optionA: "1",
        optionB: "2",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "Which geometrical shape has both horizontal and vertical lines of symmetry?",
        optionA: "Square",
        optionB: "Parallelogram",
        optionC: "Rectangle only",
        correctAnswer: "Square",
      }),
      shuffleOptions({
        question: "A leaf folded along its midrib shows what kind of symmetry?",
        optionA: "Point symmetry",
        optionB: "Line symmetry",
        optionC: "No symmetry",
        correctAnswer: "Line symmetry",
      }),
      shuffleOptions({
        question: "In which shape do both diagonals act as lines of symmetry?",
        optionA: "Square",
        optionB: "Rectangle",
        optionC: "Trapezium",
        correctAnswer: "Square",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A figure that can be divided into two matching halves has ______.",
        optionA: "symmetry",
        optionB: "rotation",
        optionC: "measurement",
        correctAnswer: "symmetry",
      }),
      shuffleOptions({
        question: "The line that divides a shape into two equal parts is called the ______.",
        optionA: "radius",
        optionB: "line of symmetry",
        optionC: "edge",
        correctAnswer: "line of symmetry",
      }),
      shuffleOptions({
        question: "A triangle with all equal sides has ______ lines of symmetry.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "A rectangle has ______ lines of symmetry.",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A scalene triangle has ______ line(s) of symmetry.",
        optionA: "zero",
        optionB: "one",
        optionC: "two",
        correctAnswer: "zero",
      }),
      shuffleOptions({
        question: "A circle has ______ lines of symmetry.",
        optionA: "many",
        optionB: "two",
        optionC: "one",
        correctAnswer: "many",
      }),
      shuffleOptions({
        question: "The Japan flag shows a red circle in the ______.",
        optionA: "corner",
        optionB: "centre",
        optionC: "bottom part",
        correctAnswer: "centre",
      }),
      shuffleOptions({
        question: "A leaf folded along its midrib shows ______ symmetry.",
        optionA: "point",
        optionB: "line",
        optionC: "no",
        correctAnswer: "line",
      }),
      shuffleOptions({
        question: "A square has ______ diagonals.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "Shapes that look the same when folded have ______ halves.",
        optionA: "uneven",
        optionB: "identical",
        optionC: "curved",
        correctAnswer: "identical",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A circle has only one line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A square has more lines of symmetry than a rectangle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle with two equal sides has exactly one line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rectangle has diagonal lines of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Butterfly wings show line symmetry.",
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
        question: "All flags shown in the chapter have at least one line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A square remains the same when rotated by 90°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A circle shows point symmetry around its centre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A leaf’s midrib acts as a line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
