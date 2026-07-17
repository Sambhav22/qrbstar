export const chapter = "Chapter - 14: Solid Shapes";
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
        question: "Which solid is formed by joining two congruent and parallel plane figures with straight lines?",
        optionA: "Pyramid",
        optionB: "Prism",
        optionC: "Polyhedron",
        correctAnswer: "Prism",
      }),
      shuffleOptions({
        question: "Which of the following solids has all its faces as squares?",
        optionA: "Cuboid",
        optionB: "Cube",
        optionC: "Square pyramid",
        correctAnswer: "Cube",
      }),
      shuffleOptions({
        question: "How many faces does a triangular prism have?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "Which solid has exactly one base?",
        optionA: "Prism",
        optionB: "Pyramid",
        optionC: "Cuboid",
        correctAnswer: "Pyramid",
      }),
      shuffleOptions({
        question: "Which regular polyhedron has 8 triangular faces?",
        optionA: "Tetrahedron",
        optionB: "Octahedron",
        optionC: "Icosahedron",
        correctAnswer: "Octahedron",
      }),
      shuffleOptions({
        question: "A solid bounded only by plane surfaces is called a",
        optionA: "Prism",
        optionB: "Polyhedron",
        optionC: "Cylinder",
        correctAnswer: "Polyhedron",
      }),
      shuffleOptions({
        question: "Which solid has 20 faces, 30 edges and 12 vertices?",
        optionA: "Dodecahedron",
        optionB: "Icosahedron",
        optionC: "Octahedron",
        correctAnswer: "Icosahedron",
      }),
      shuffleOptions({
        question: "How many vertices does a square pyramid have?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "Which of the following is an example of a nested solid?",
        optionA: "Dice",
        optionB: "Ice-cream cone with scoop",
        optionC: "Brick",
        correctAnswer: "Ice-cream cone with scoop",
      }),
      shuffleOptions({
        question: "Which solid has no edges and no vertices?",
        optionA: "Cone",
        optionB: "Cylinder",
        optionC: "Sphere",
        correctAnswer: "Sphere",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The flat surface of a solid is called its ______.",
        optionA: "edge",
        optionB: "face",
        optionC: "vertex",
        correctAnswer: "face",
      }),
      shuffleOptions({
        question: "The plural of vertex is ______.",
        optionA: "vertexes",
        optionB: "vertices",
        optionC: "vertics",
        correctAnswer: "vertices",
      }),
      shuffleOptions({
        question: "A triangular pyramid is also called a ______.",
        optionA: "prism",
        optionB: "tetrahedron",
        optionC: "cuboid",
        correctAnswer: "tetrahedron",
      }),
      shuffleOptions({
        question: "A prism has ______ congruent bases.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "The number of edges in a prism is given by ______.",
        optionA: "2n",
        optionB: "3n",
        optionC: "n + 2",
        correctAnswer: "3n",
      }),
      shuffleOptions({
        question: "A pyramid with a pentagonal base has ______ faces.",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "A cube has ______ vertices.",
        optionA: "6",
        optionB: "8",
        optionC: "12",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "The formula F + V − E = 2 is known as ______ formula.",
        optionA: "Pythagoras",
        optionB: "Euler’s",
        optionC: "Archimedes’",
        correctAnswer: "Euler’s",
      }),
      shuffleOptions({
        question: "Isometric dotted paper is used to draw ______ figures.",
        optionA: "2-D",
        optionB: "3-D",
        optionC: "plane",
        correctAnswer: "3-D",
      }),
      shuffleOptions({
        question: "The side faces of a pyramid are always ______.",
        optionA: "rectangles",
        optionB: "squares",
        optionC: "triangles",
        correctAnswer: "triangles",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cuboid has 6 faces, 12 edges and 8 vertices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All pyramids have two parallel bases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cylinder has two flat faces and one curved face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number of faces and vertices in a pyramid are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A sphere has one curved face and no edges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangular prism has three rectangular faces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An octahedron is a regular polyhedron.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Euler’s formula is applicable to all polyhedra.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cone has no vertex.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A map shows the exact appearance of places like a picture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
