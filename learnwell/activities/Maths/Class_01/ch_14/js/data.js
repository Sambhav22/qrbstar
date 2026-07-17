export const chapter = "Chapter - 14: Shapes and Patterns";
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
        question: "Which shape has three sides and three corners?",
        optionA: "Rectangle",
        optionB: "Triangle",
        optionC: "Square",
        correctAnswer: "Triangle",
      }),
      shuffleOptions({
        question: "Which shape has all sides equal in length?",
        optionA: "Rectangle",
        optionB: "Square",
        optionC: "Circle",
        correctAnswer: "Square",
      }),
      shuffleOptions({
        question: "Which of these shapes has no sides and no corners?",
        optionA: "Triangle",
        optionB: "Circle",
        optionC: "Square",
        correctAnswer: "Circle",
      }),
      shuffleOptions({
        question: "What is the shape of a dice?",
        optionA: "Cube",
        optionB: "Cone",
        optionC: "Cylinder",
        correctAnswer: "Cube",
      }),
      shuffleOptions({
        question: "Which of the following is a solid shape?",
        optionA: "Circle",
        optionB: "Cone",
        optionC: "Triangle",
        correctAnswer: "Cone",
      }),
      shuffleOptions({
        question: "What is the shape of a ball?",
        optionA: "Cube",
        optionB: "Sphere",
        optionC: "Cuboid",
        correctAnswer: "Sphere",
      }),
      shuffleOptions({
        question: "Which solid shape has two flat faces and one curved surface?",
        optionA: "Cube",
        optionB: "Cylinder",
        optionC: "Cone",
        correctAnswer: "Cylinder",
      }),
      shuffleOptions({
        question: "What are plane shapes also called?",
        optionA: "Solid shapes",
        optionB: "Flat shapes",
        optionC: "Round shapes",
        correctAnswer: "Flat shapes",
      }),
      shuffleOptions({
        question: "What is the shape of a brick?",
        optionA: "Cuboid",
        optionB: "Cube",
        optionC: "Cone",
        correctAnswer: "Cuboid",
      }),
      shuffleOptions({
        question: "Which shape is used for making a birthday cap?",
        optionA: "Sphere",
        optionB: "Cone",
        optionC: "Cylinder",
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
        question: "A triangle has ______ sides.",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "A circle has ______ corners.",
        optionA: "None",
        optionB: "Two",
        optionC: "Four",
        correctAnswer: "None",
      }),
      shuffleOptions({
        question: "A square has ______ equal sides.",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "A rectangle has ______ pairs of equal sides.",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Two",
      }),
      shuffleOptions({
        question: "A cone has one ______ surface.",
        optionA: "Curved",
        optionB: "Flat",
        optionC: "Cornered",
        correctAnswer: "Curved",
      }),
      shuffleOptions({
        question: "A cube has ______ faces.",
        optionA: "Four",
        optionB: "Six",
        optionC: "Eight",
        correctAnswer: "Six",
      }),
      shuffleOptions({
        question: "A sphere has ______ corners.",
        optionA: "Two",
        optionB: "Four",
        optionC: "None",
        correctAnswer: "None",
      }),
      shuffleOptions({
        question: "Solid shapes have height or ______.",
        optionA: "Colour",
        optionB: "Depth",
        optionC: "Corner",
        correctAnswer: "Depth",
      }),
      shuffleOptions({
        question: "A gas cylinder is shaped like a ______.",
        optionA: "Cube",
        optionB: "Cylinder",
        optionC: "Sphere",
        correctAnswer: "Cylinder",
      }),
      shuffleOptions({
        question: "A book is shaped like a ______.",
        optionA: "Cuboid",
        optionB: "Cone",
        optionC: "Cylinder",
        correctAnswer: "Cuboid",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cube is a solid shape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A circle has four corners.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cone has one curved and one flat face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plane shapes have height or depth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A triangle has three corners.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A square has all sides equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Patterns are formed by things that repeat in order.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cylinder can roll on its curved surface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cube has six faces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A sphere has one flat face.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
