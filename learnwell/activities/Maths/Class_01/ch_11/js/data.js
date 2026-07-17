export const chapter = "Chapter - 11: Measurement";
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
        question: "Which object is longer?",
        optionA: "Spoon",
        optionB: "Ruler",
        optionC: "Eraser",
        correctAnswer: "Ruler",
      }),
      shuffleOptions({
        question: "Which object is taller?",
        optionA: "Plant",
        optionB: "Tree",
        optionC: "Flower",
        correctAnswer: "Tree",
      }),
      shuffleOptions({
        question: "Which object is heavier?",
        optionA: "Feather",
        optionB: "Stone",
        optionC: "Leaf",
        correctAnswer: "Stone",
      }),
      shuffleOptions({
        question: "Which container can hold more water?",
        optionA: "Cup",
        optionB: "Jug",
        optionC: "Glass",
        correctAnswer: "Jug",
      }),
      shuffleOptions({
        question: "What do the words ‘tall’ and ‘short’ tell us about?",
        optionA: "Height",
        optionB: "Weight",
        optionC: "Capacity",
        correctAnswer: "Height",
      }),
      shuffleOptions({
        question: "What do we compare using the words ‘more’ and ‘less’?",
        optionA: "Capacity",
        optionB: "Weight",
        optionC: "Length",
        correctAnswer: "Capacity",
      }),
      shuffleOptions({
        question: "Which body part can be used to measure a desk?",
        optionA: "Hand span",
        optionB: "Foot",
        optionC: "Elbow",
        correctAnswer: "Hand span",
      }),
      shuffleOptions({
        question: "Which is lighter in weight?",
        optionA: "Stone",
        optionB: "Paper",
        optionC: "Brick",
        correctAnswer: "Paper",
      }),
      shuffleOptions({
        question: "Which object will float in water?",
        optionA: "Leaf",
        optionB: "Pebble",
        optionC: "Brick",
        correctAnswer: "Leaf",
      }),
      shuffleOptions({
        question: "Which is used to measure the playground?",
        optionA: "Paces",
        optionB: "Crayons",
        optionC: "Cups",
        correctAnswer: "Paces",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Pencil is ________ than pen.",
        optionA: "shorter",
        optionB: "longer",
        optionC: "equal",
        correctAnswer: "longer",
      }),
      shuffleOptions({
        question: "Tree is ________ than plant.",
        optionA: "shorter",
        optionB: "taller",
        optionC: "smaller",
        correctAnswer: "taller",
      }),
      shuffleOptions({
        question: "Watermelon is ________ than banana.",
        optionA: "heavier",
        optionB: "lighter",
        optionC: "equal",
        correctAnswer: "heavier",
      }),
      shuffleOptions({
        question: "Banana is ________ than watermelon.",
        optionA: "lighter",
        optionB: "heavier",
        optionC: "equal",
        correctAnswer: "lighter",
      }),
      shuffleOptions({
        question: "Glass holds ________ water than jug.",
        optionA: "more",
        optionB: "less",
        optionC: "same",
        correctAnswer: "less",
      }),
      shuffleOptions({
        question: "Jug holds ________ water than glass.",
        optionA: "more",
        optionB: "less",
        optionC: "equal",
        correctAnswer: "more",
      }),
      shuffleOptions({
        question: "Body parts like hand span and foot span are used to measure ________.",
        optionA: "weight",
        optionB: "length",
        optionC: "capacity",
        correctAnswer: "length",
      }),
      shuffleOptions({
        question: "The bucket has ________ capacity than the mug.",
        optionA: "less",
        optionB: "more",
        optionC: "same",
        correctAnswer: "more",
      }),
      shuffleOptions({
        question: "The words ‘heavy’ and ‘light’ tell us about ________.",
        optionA: "weight",
        optionB: "length",
        optionC: "capacity",
        correctAnswer: "weight",
      }),
      shuffleOptions({
        question: "We use ________ to measure the quantity of liquid.",
        optionA: "cups",
        optionB: "stones",
        optionC: "crayons",
        correctAnswer: "cups",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Long and short show horizontal length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tall and short show vertical length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Heavy and light tell us about weight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "More and less tell us about capacity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Crayons can be used to measure length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hand span is longer than pace.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Glass has more capacity than jug.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Different people may get different hand-span measurements.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Stones can be used to measure weight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Banana is heavier than watermelon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
