export const chapter = "Chapter - 16: Volume and Surface Area of Solids";
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
        question: "Which formula is used to find the lateral surface area of a cuboid?",
        optionA: "2(lb+bh+hl)2(lb + bh + hl)2(lb+bh+hl)",
        optionB: "l×b×hl × b × hl×b×h",
        optionC: "2(l+",
        correctAnswer: "2(lb+bh+hl)2(lb + bh + hl)2(lb+bh+hl)",
      }),
      shuffleOptions({
        question: "Which solid has all faces equal and square in shape?",
        optionA: "Cuboid",
        optionB: "Cube",
        optionC: "Cylinder",
        correctAnswer: "Cube",
      }),
      shuffleOptions({
        question: "The curved surface area of a cylinder depends on:",
        optionA: "radius only",
        optionB: "height only",
        optionC: "both radius and height",
        correctAnswer: "both radius and height",
      }),
      shuffleOptions({
        question: "Which unit is commonly used to measure volume?",
        optionA: "metre",
        optionB: "square metre",
        optionC: "cubic metre",
        correctAnswer: "cubic metre",
      }),
      shuffleOptions({
        question: "A measuring jar is an example of a:",
        optionA: "cube",
        optionB: "cuboid",
        optionC: "right circular cylinder",
        correctAnswer: "right circular cylinder",
      }),
      shuffleOptions({
        question: "The total surface area of a cube of side aaa is:",
        optionA: "4a2",
        optionB: "6a2",
        optionC: "a3",
        correctAnswer: "6a2",
      }),
      shuffleOptions({
        question: "How many faces does a cuboid have?",
        optionA: "4",
        optionB: "6",
        optionC: "8",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "The axis of a cylinder joins the centres of its:",
        optionA: "curved surface",
        optionB: "circular bases",
        optionC: "edges",
        correctAnswer: "circular bases",
      }),
      shuffleOptions({
        question: "If the side of a cube is doubled, its volume becomes:",
        optionA: "two times",
        optionB: "four times",
        optionC: "eight times",
        correctAnswer: "eight times",
      }),
      shuffleOptions({
        question: "Which of the following solids has no vertices?",
        optionA: "Cube",
        optionB: "Cuboid",
        optionC: "Cylinder",
        correctAnswer: "Cylinder",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The volume of a cuboid is found by multiplying its length, breadth and ______.",
        optionA: "radius",
        optionB: "height",
        optionC: "base",
        correctAnswer: "height",
      }),
      shuffleOptions({
        question: "The base of a cylinder is a ______.",
        optionA: "square",
        optionB: "rectangle",
        optionC: "circle",
        correctAnswer: "circle",
      }),
      shuffleOptions({
        question: "The formula for the curved surface area of a cylinder is ______.",
        optionA: "πr2h",
        optionB: "2πrh",
        optionC: "2πr(r+h)",
        correctAnswer: "2πrh",
      }),
      shuffleOptions({
        question: "The volume of a cube of side aaa is ______.",
        optionA: "6a2",
        optionB: "a2",
        optionC: "a3",
        correctAnswer: "a3",
      }),
      shuffleOptions({
        question: "Capacity of a container is generally measured in ______.",
        optionA: "kilograms",
        optionB: "litres",
        optionC: "metres",
        correctAnswer: "litres",
      }),
      shuffleOptions({
        question: "A cuboid has ______ rectangular faces.",
        optionA: "four",
        optionB: "five",
        optionC: "six",
        correctAnswer: "six",
      }),
      shuffleOptions({
        question: "The distance between the circular bases of a cylinder is called its ______.",
        optionA: "radius",
        optionB: "height",
        optionC: "diameter",
        correctAnswer: "height",
      }),
      shuffleOptions({
        question: "The unit cm³ is read as ______.",
        optionA: "square centimetre",
        optionB: "cubic centimetre",
        optionC: "centimetre cube",
        correctAnswer: "cubic centimetre",
      }),
      shuffleOptions({
        question: "The lateral surface area of a cube is given by ______.",
        optionA: "4a2",
        optionB: "6a2",
        optionC: "a3",
        correctAnswer: "4a2",
      }),
      shuffleOptions({
        question: "The amount of space occupied by a solid is called its ______.",
        optionA: "area",
        optionB: "volume",
        optionC: "surface",
        correctAnswer: "volume",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cube has six equal square faces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The curved surface area of a cylinder includes its circular bases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Volume is measured in cubic units.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cuboid can have different values of length, breadth and height.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The volume of a cylinder is equal to πr2h",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cube and a cuboid have the same number of faces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Capacity and volume represent the same physical idea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cylinder has two congruent circular bases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lateral surface area of a cuboid includes its top and bottom faces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A dice is an example of a cube.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
