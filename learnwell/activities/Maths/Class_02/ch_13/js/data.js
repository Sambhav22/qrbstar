export const chapter = "Chapter - 13: Geometry";
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
        question: "Which shape has no vertices and only one curved face?",
        optionA: "Cylinder",
        optionB: "Sphere",
        optionC: "Cone",
        correctAnswer: "Sphere",
      }),
      shuffleOptions({
        question: "Which shape has all four sides equal?",
        optionA: "Rectangle",
        optionB: "Triangle",
        optionC: "Square",
        correctAnswer: "Square",
      }),
      shuffleOptions({
        question: "A cube has how many edges?",
        optionA: "6",
        optionB: "12",
        optionC: "8",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "Which line is drawn from left to right?",
        optionA: "Standing line",
        optionB: "Sleeping line",
        optionC: "Slanting line",
        correctAnswer: "Sleeping line",
      }),
      shuffleOptions({
        question: "A cone has how many faces?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Which object is most likely to roll?",
        optionA: "Book",
        optionB: "Eraser",
        optionC: "Ball",
        correctAnswer: "Ball",
      }),
      shuffleOptions({
        question: "Which shape is formed by the plane face of a cylinder?",
        optionA: "Triangle",
        optionB: "Circle",
        optionC: "Rectangle",
        correctAnswer: "Circle",
      }),
      shuffleOptions({
        question: "A figure with three sides is called a:",
        optionA: "Triangle",
        optionB: "Square",
        optionC: "Rectangle",
        correctAnswer: "Triangle",
      }),
      shuffleOptions({
        question: "A cuboid has how many faces?",
        optionA: "4",
        optionB: "6",
        optionC: "8",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "Which line looks tilted or diagonal?",
        optionA: "Slanting line",
        optionB: "Standing line",
        optionC: "Sleeping line",
        correctAnswer: "Slanting line",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cube has ______ square faces.",
        optionA: "4",
        optionB: "6",
        optionC: "8",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "A triangle has ______ corners.",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "A cylinder has ______ plane faces.",
        optionA: "2",
        optionB: "1",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A sphere has ______ vertices.",
        optionA: "1",
        optionB: "2",
        optionC: "0",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "A rectangle has ______ corners.",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "A loose string shows a ______ line.",
        optionA: "straight",
        optionB: "curved",
        optionC: "standing",
        correctAnswer: "curved",
      }),
      shuffleOptions({
        question: "The corner of a shape is called a ______.",
        optionA: "face",
        optionB: "vertex",
        optionC: "edge",
        correctAnswer: "vertex",
      }),
      shuffleOptions({
        question: "Solids with curved surfaces usually ______.",
        optionA: "slide",
        optionB: "stop",
        optionC: "roll",
        correctAnswer: "roll",
      }),
      shuffleOptions({
        question: "A cone has ______ vertex.",
        optionA: "1",
        optionB: "2",
        optionC: "0",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Horizontal lines are also called ______ lines.",
        optionA: "sleeping",
        optionB: "standing",
        optionC: "curved",
        correctAnswer: "sleeping",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A sphere has no edge and no vertex.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A square has three equal sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cube has 8 vertices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cylinder has one curved face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vertical lines are also called sleeping lines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cone has one curved face and one plane face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle can have four corners.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A sphere will slide down a slope.",
        optionA: "True",
        optionB: "False  (It rolls)",
        correctAnswer: "False  (It rolls)",
      }),
      shuffleOptions({
        question: "A rectangle has opposite sides equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Curved lines can be drawn using a tight string.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
