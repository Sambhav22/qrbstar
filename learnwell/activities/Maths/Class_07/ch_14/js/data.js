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
        question: "Which figure shows perfect balance when divided into two halves?",
        optionA: "An uneven stone",
        optionB: "A symmetrical shape",
        optionC: "A slanted line",
        correctAnswer: "A symmetrical shape",
      }),
      shuffleOptions({
        question: "What do we call the line that divides a figure into two identical parts?",
        optionA: "Boundary",
        optionB: "Axis of symmetry",
        optionC: "Edge",
        correctAnswer: "Axis of symmetry",
      }),
      shuffleOptions({
        question: "Which of the following is an example of reflection symmetry?",
        optionA: "An image seen in a mirror",
        optionB: "A shadow on the ground",
        optionC: "A rolling ball",
        correctAnswer: "An image seen in a mirror",
      }),
      shuffleOptions({
        question: "A shape that looks the same after being turned around a fixed point shows which symmetry?",
        optionA: "Line symmetry",
        optionB: "Rotational symmetry",
        optionC: "No symmetry",
        correctAnswer: "Rotational symmetry",
      }),
      shuffleOptions({
        question: "Which regular polygon has equal sides and equal angles?",
        optionA: "A scalene triangle",
        optionB: "A regular pentagon",
        optionC: "Both have equal sides and equal angles",
        correctAnswer: "A regular pentagon",
      }),
      shuffleOptions({
        question: "Which angle of rotation brings a figure back to its starting position?",
        optionA: "90°",
        optionB: "180°",
        optionC: "360°",
        correctAnswer: "360°",
      }),
      shuffleOptions({
        question: "Which English alphabet letter has only vertical line symmetry?",
        optionA: "A",
        optionB: "T",
        correctAnswer: "T",
      }),
      shuffleOptions({
        question: "What is the fixed point around which rotation takes place?",
        optionA: "Centre of rotation",
        optionB: "Axis of symmetry",
        optionC: "Mirror point",
        correctAnswer: "Centre of rotation",
      }),
      shuffleOptions({
        question: "A shape that never overlaps itself during rotation has:",
        optionA: "Rotational symmetry",
        optionB: "No rotational symmetry",
        optionC: "Multiple rotational symmetry",
        correctAnswer: "No rotational symmetry",
      }),
      shuffleOptions({
        question: "Which of the following naturally shows symmetry?",
        optionA: "A broken leaf",
        optionB: "A butterfly’s wings",
        optionC: "A pile of stones",
        correctAnswer: "A butterfly’s wings",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A figure is said to be symmetrical when it is divided into two ______ halves.",
        optionA: "folded",
        optionB: "identical",
        optionC: "random",
        correctAnswer: "identical",
      }),
      shuffleOptions({
        question: "The line that divides a shape into matching parts is called the ______ of symmetry.",
        optionA: "centre",
        optionB: "axis",
        optionC: "border",
        correctAnswer: "axis",
      }),
      shuffleOptions({
        question: "A full turn or complete rotation equals ______ degrees.",
        optionA: "180",
        optionB: "360",
        optionC: "90",
        correctAnswer: "360",
      }),
      shuffleOptions({
        question: "A regular polygon has as many lines of symmetry as its ______.",
        optionA: "vertices",
        optionB: "sides",
        optionC: "angles only",
        correctAnswer: "sides",
      }),
      shuffleOptions({
        question: "The image formed in a mirror is known as a ______ image.",
        optionA: "reflected",
        optionB: "distorted",
        optionC: "magnified",
        correctAnswer: "reflected",
      }),
      shuffleOptions({
        question: "When a figure turns around a fixed point, the movement is called ______.",
        optionA: "translation",
        optionB: "rotation",
        optionC: "folding",
        correctAnswer: "rotation",
      }),
      shuffleOptions({
        question: "A quarter turn corresponds to a rotation of ______ degrees.",
        optionA: "45",
        optionB: "90",
        optionC: "120",
        correctAnswer: "90",
      }),
      shuffleOptions({
        question: "A shape has rotational symmetry if it looks the same after a certain ______.",
        optionA: "fold",
        optionB: "turn",
        optionC: "measurement",
        correctAnswer: "turn",
      }),
      shuffleOptions({
        question: "The angle through which a figure is rotated is called the ______ of rotation.",
        optionA: "angle of rotation",
        optionB: "rotational point",
        optionC: "centre of angle",
        correctAnswer: "angle of rotation",
      }),
      shuffleOptions({
        question: "A shape that cannot be folded into two equal halves has ______ line symmetry.",
        optionA: "one",
        optionB: "two",
        optionC: "no",
        correctAnswer: "no",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A mirror line creates two identical halves of a figure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All regular polygons have equal sides and equal angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rectangle has more lines of symmetry than a square.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A scalene triangle has no line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rotational symmetry means turning a figure around a centre point.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A shape with order 1 rotational symmetry looks the same only after a full 360° turn.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The letter “X” has both vertical and horizontal symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A circle has infinitely many lines of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A parallelogram has at least one line of symmetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A shape can have both line symmetry and rotational symmetry at the same time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
