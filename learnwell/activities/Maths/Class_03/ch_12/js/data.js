export const chapter = "Chapter - 12: Geometry";
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
        question: "Which shape has all its sides equal?",
        optionA: "Rectangle",
        optionB: "Square",
        optionC: "Triangle",
        correctAnswer: "Square",
      }),
      shuffleOptions({
        question: "Which shape has no sides and no corners?",
        optionA: "Circle",
        optionB: "Triangle",
        optionC: "Square",
        correctAnswer: "Circle",
      }),
      shuffleOptions({
        question: "Which solid shape can easily roll because it has a curved surface?",
        optionA: "Cube",
        optionB: "Cylinder",
        optionC: "Sphere",
        correctAnswer: "Sphere",
      }),
      shuffleOptions({
        question: "Which shape has 3 sides and 3 corners?",
        optionA: "Rectangle",
        optionB: "Triangle",
        optionC: "Square",
        correctAnswer: "Triangle",
      }),
      shuffleOptions({
        question: "Which solid shape has 6 faces, 12 edges and 8 vertices?",
        optionA: "Cone",
        optionB: "Cube",
        optionC: "Cuboid",
        correctAnswer: "Cuboid",
      }),
      shuffleOptions({
        question: "Which object is an example of a cylindrical shape?",
        optionA: "Matchbox",
        optionB: "Gas cylinder",
        optionC: "Dice",
        correctAnswer: "Gas cylinder",
      }),
      shuffleOptions({
        question: "Which shape has opposite sides equal?",
        optionA: "Circle",
        optionB: "Triangle",
        optionC: "Rectangle",
        correctAnswer: "Rectangle",
      }),
      shuffleOptions({
        question: "Which solid shape has 1 face, no edges and no vertices?",
        optionA: "Sphere",
        optionB: "Cone",
        optionC: "square",
        correctAnswer: "Sphere",
      }),
      shuffleOptions({
        question: "Which shape is formed when you trace a 1-rupee coin?",
        optionA: "Square",
        optionB: "Rectangle",
        optionC: "Circle",
        correctAnswer: "Circle",
      }),
      shuffleOptions({
        question: "Which solid shape has 1 curved surface, 1 flat face, 1 vertex and 1 edge?",
        optionA: "Cone",
        optionB: "Cylinder",
        optionC: "Sphere",
        correctAnswer: "Cone",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cuboid has ______ faces.",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "A circle has ______ corners.",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "A square has ______ equal sides.",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "A cylinder has ______ edges.",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A cone has ______ vertex.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "A sphere has ______ curved surface.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "A rectangle has ______ corners.",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "A triangle has ______ diagonals.",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "A cube has ______ edges.",
        optionA: "8",
        optionB: "10",
        optionC: "12",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "A line that divides a shape into two equal halves is called the ______.",
        optionA: "middle line",
        optionB: "line of symmetry",
        optionC: "border",
        correctAnswer: "line of symmetry",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A sphere can roll because it has a curved surface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A square has four sides of different lengths.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cone has both a plane surface and a curved surface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A circle has no side and no corner.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cuboid has the same number of edges as a cube.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cylinder has no vertex.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle always has equal sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A sphere has one edge.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A rectangle has opposite sides equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A matchbox is an example of a cuboidal object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
