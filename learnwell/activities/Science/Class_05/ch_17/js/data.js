export const chapter = "Chapter - 17: Patterns";
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
        question: "Which shape among the following has the greatest number of lines of symmetry?",
        optionA: "Rectangle",
        optionB: "Square",
        optionC: "Triangle",
        correctAnswer: "Square",
      }),
      shuffleOptions({
        question: "What do we call a pattern made by repeating shapes that fit together without gaps?",
        optionA: "Symmetry",
        optionB: "Tessellation",
        optionC: "Rotation",
        correctAnswer: "Tessellation",
      }),
      shuffleOptions({
        question: "Which of the following numbers is a palindrome?",
        optionA: "132",
        optionB: "242",
        optionC: "256",
        correctAnswer: "242",
      }),
      shuffleOptions({
        question: "What kind of turn is shown when a figure rotates exactly halfway around a point?",
        optionA: "90° turn",
        optionB: "180° turn",
        optionC: "45° turn",
        correctAnswer: "180° turn",
      }),
      shuffleOptions({
        question: "Which number continues the pattern: 0.2, 0.6, 1.0, 1.4, ___ ?",
        optionA: "1.5",
        optionB: "1.8",
        optionC: "2.0",
        correctAnswer: "1.8",
      }),
      shuffleOptions({
        question: "Which of these shapes can tessellate naturally?",
        optionA: "Circle",
        optionB: "Hexagon",
        optionC: "Crescent",
        correctAnswer: "Hexagon",
      }),
      shuffleOptions({
        question: "What do we call the line that divides a shape into two identical mirror halves?",
        optionA: "Border line",
        optionB: "Reflection line",
        optionC: "Line of symmetry",
        correctAnswer: "Line of symmetry",
      }),
      shuffleOptions({
        question: "Which of these represents a square number pattern?",
        optionA: "2, 4, 8, 16",
        optionB: "1, 4, 9, 16",
        optionC: "5, 10, 15, 20",
        correctAnswer: "1, 4, 9, 16",
      }),
      shuffleOptions({
        question: "Which shape will look the same after a 120° rotation?",
        optionA: "Triangle (equilateral)",
        optionB: "Square",
        optionC: "Rectangle",
        correctAnswer: "Triangle (equilateral)",
      }),
      shuffleOptions({
        question: "Which pattern repeats every time the figure is turned?",
        optionA: "Mirror pattern",
        optionB: "Rotational pattern",
        optionC: "Sliding pattern",
        correctAnswer: "Rotational pattern",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A figure that can be divided into two identical parts is called a ______.",
        optionA: "colourful figure",
        optionB: "symmetrical figure",
        optionC: "repeating figure",
        correctAnswer: "symmetrical figure",
      }),
      shuffleOptions({
        question: "A line that divides a picture into two mirror halves is called the line of ______.",
        optionA: "reflection",
        optionB: "symmetry",
        optionC: "balance",
        correctAnswer: "symmetry",
      }),
      shuffleOptions({
        question: "A pattern in which shapes are repeated by turning them is called a ______ pattern.",
        optionA: "mirror",
        optionB: "rotational",
        optionC: "sliding",
        correctAnswer: "rotational",
      }),
      shuffleOptions({
        question: "A honeycomb is an example of ______.",
        optionA: "tessellation",
        optionB: "symmetry",
        optionC: "rotation",
        correctAnswer: "tessellation",
      }),
      shuffleOptions({
        question: "A number that reads the same forward and backward is called a ______.",
        optionA: "sequence",
        optionB: "palindrome",
        optionC: "fraction",
        correctAnswer: "palindrome",
      }),
      shuffleOptions({
        question: "Shapes in tessellation fit together without any ______.",
        optionA: "colours",
        optionB: "gaps",
        optionC: "corners",
        correctAnswer: "gaps",
      }),
      shuffleOptions({
        question: "Numbers like 1, 4, 9, 16 form a ______ pattern.",
        optionA: "cube number",
        optionB: "odd number",
        optionC: "square number",
        correctAnswer: "square number",
      }),
      shuffleOptions({
        question: "A circle has ______ lines of symmetry.",
        optionA: "infinite",
        optionB: "one",
        optionC: "zero",
        correctAnswer: "infinite",
      }),
      shuffleOptions({
        question: "A shape repeated without changing its size or direction forms a ______ pattern.",
        optionA: "fixed",
        optionB: "repetitive",
        optionC: "broken",
        correctAnswer: "repetitive",
      }),
      shuffleOptions({
        question: "The design in which shapes repeat in a fixed order is called a ______.",
        optionA: "decoration",
        optionB: "pattern",
        optionC: "border",
        correctAnswer: "pattern",
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
        question: "All patterns follow a specific rule.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rectangle has the same number of symmetry lines as a square.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tessellations always leave gaps between shapes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The number 343 is a palindrome.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A shape that looks the same after a 360° turn shows rotational symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a pattern, shapes must always be the same size.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A triangle can never have any line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mirror symmetry divides a figure into two identical halves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All repeating number sequences are called patterns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
