export const chapter = "Chapter - 15: Visualising Solid Shapes";
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
        question: "Which solid shape has no flat face at all?",
        optionA: "Cone",
        optionB: "Sphere",
        optionC: "Cylinder",
        correctAnswer: "Sphere",
      }),
      shuffleOptions({
        question: "Which part of a solid is described as the flat surface?",
        optionA: "Vertex",
        optionB: "Edge",
        optionC: "Face",
        correctAnswer: "Face",
      }),
      shuffleOptions({
        question: "Which solid has one curved surface and one vertex?",
        optionA: "Cylinder",
        optionB: "Cone",
        optionC: "Cube",
        correctAnswer: "Cone",
      }),
      shuffleOptions({
        question: "Which type of sketch uses slanted parallel lines to show depth?",
        optionA: "Isometric sketch",
        optionB: "Oblique sketch",
        optionC: "Vertical sketch",
        correctAnswer: "Oblique sketch",
      }),
      shuffleOptions({
        question: "Which solid’s net contains only rectangles and two triangles?",
        optionA: "Triangular prism",
        optionB: "Square pyramid",
        optionC: "Cone",
        correctAnswer: "Triangular prism",
      }),
      shuffleOptions({
        question: "A shadow of a cylinder when seen from the top looks like a:",
        optionA: "Triangle",
        optionB: "Circle",
        optionC: "Rectangle",
        correctAnswer: "Circle",
      }),
      shuffleOptions({
        question: "Which solid has 6 rectangular faces?",
        optionA: "Cuboid",
        optionB: "Cube",
        optionC: "Cone",
        correctAnswer: "Cuboid",
      }),
      shuffleOptions({
        question: "Which solid has exactly one edge?",
        optionA: "Cone",
        optionB: "Sphere",
        optionC: "Cylinder",
        correctAnswer: "Cone",
      }),
      shuffleOptions({
        question: "Which view of a solid is also called the plan?",
        optionA: "Side view",
        optionB: "Top view",
        optionC: "Front view",
        correctAnswer: "Top view",
      }),
      shuffleOptions({
        question: "Which solid can be formed by folding a net of six equal squares?",
        optionA: "Cylinder",
        optionB: "Cone",
        optionC: "Cube",
        correctAnswer: "Cube",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cube has ______ faces.",
        optionA: "4",
        optionB: "6",
        optionC: "8",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "A triangular pyramid has ______ vertices.",
        optionA: "4",
        optionB: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "A cylinder has ______ curved surface(s).",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "The line segment where two faces meet is called an ______.",
        optionA: "edge",
        optionB: "angle",
        optionC: "arc",
        correctAnswer: "edge",
      }),
      shuffleOptions({
        question: "A net is a ______ representation of a 3-D solid.",
        optionA: "circular",
        optionB: "3-dimensional",
        optionC: "2-dimensional",
        correctAnswer: "2-dimensional",
      }),
      shuffleOptions({
        question: "A cuboid drawn on an isometric sheet shows hidden edges using ______ lines.",
        optionA: "bold",
        optionB: "curved",
        optionC: "dotted",
        correctAnswer: "dotted",
      }),
      shuffleOptions({
        question: "A cone has ______ circular face(s).",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "A sphere has ______ vertex/vertices.",
        optionA: "1",
        optionB: "0",
        optionC: "2",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "A cube has ______ edges.",
        optionA: "12",
        optionB: "9",
        optionC: "8",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "A net of a square pyramid contains ______ triangular faces.",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cylinder always has two circular faces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A sphere has exactly one curved surface and no flat face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangular prism has exactly one triangular face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Isometric sketches are drawn on a grid of equilateral triangles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cone has two vertices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The front view of a cube is always a square.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A net helps us understand how a 3-D object unfolds into 2-D shapes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The vertical cross-section of a cylinder is a rectangle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cuboid and cube have the same number of faces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A sphere can have both flat and curved surfaces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
