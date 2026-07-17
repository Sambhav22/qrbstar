export const chapter = "Chapter - 10: Measurement of Weight";
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
        question: "Which unit is used to weigh very light objects like toffees?",
        optionA: "kg",
        optionB: "g",
        optionC: "m",
        correctAnswer: "g",
      }),
      shuffleOptions({
        question: "What do we use to compare the weight of two objects?",
        optionA: "Ruler",
        optionB: "Balance scale",
        optionC: "Clock",
        correctAnswer: "Balance scale",
      }),
      shuffleOptions({
        question: "Which of the following is the heavier unit of weight?",
        optionA: "g",
        optionB: "cm",
        optionC: "kg",
        correctAnswer: "kg",
      }),
      shuffleOptions({
        question: "What happens to the heavier side of a balance?",
        optionA: "It goes up",
        optionB: "It goes down",
        optionC: "It stays in the middle",
        correctAnswer: "It goes down",
      }),
      shuffleOptions({
        question: "1 kilogram is equal to how many grams?",
        optionA: "100 g",
        optionB: "500 g",
        optionC: "1000 g",
        correctAnswer: "1000 g",
      }),
      shuffleOptions({
        question: "Which object is likely to weigh in kilograms?",
        optionA: "A pencil",
        optionB: "A watermelon",
        optionC: "A button",
        correctAnswer: "A watermelon",
      }),
      shuffleOptions({
        question: "Which object is heavier?",
        optionA: "50 g",
        optionB: "500 g",
        optionC: "500 g is heavier than 50 g",
        correctAnswer: "500 g is heavier than 50 g",
      }),
      shuffleOptions({
        question: "Which unit will you use to measure the weight of a big rice bag?",
        optionA: "g",
        optionB: "kg",
        optionC: "mm",
        correctAnswer: "kg",
      }),
      shuffleOptions({
        question: "What do non-standard units include?",
        optionA: "Bricks and marbles",
        optionB: "Meter scales",
        optionC: "Thermometers",
        correctAnswer: "Bricks and marbles",
      }),
      shuffleOptions({
        question: "If a scale shows equal level on both sides, it means the objects are—",
        optionA: "Equal in weight",
        optionB: "Different in weight",
        optionC: "Unbalanced",
        correctAnswer: "Equal in weight",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1000 g is equal to ______.",
        optionA: "1 mg",
        optionB: "1 kg",
        optionC: "10 kg",
        correctAnswer: "1 kg",
      }),
      shuffleOptions({
        question: "A big pumpkin is usually weighed in ______.",
        optionA: "g",
        optionB: "kg",
        optionC: "cm",
        correctAnswer: "kg",
      }),
      shuffleOptions({
        question: "A small eraser is usually weighed in ______.",
        optionA: "kg",
        optionB: "g",
        optionC: "L",
        correctAnswer: "g",
      }),
      shuffleOptions({
        question: "A balance compares the ______ of objects.",
        optionA: "length",
        optionB: "colour",
        optionC: "weight",
        correctAnswer: "weight",
      }),
      shuffleOptions({
        question: "The heavier object moves the balance pan ______.",
        optionA: "up",
        optionB: "down",
        optionC: "sideways",
        correctAnswer: "down",
      }),
      shuffleOptions({
        question: "Toffees in a packet are mostly measured in ______.",
        optionA: "cm",
        optionB: "g",
        optionC: "kg",
        correctAnswer: "g",
      }),
      shuffleOptions({
        question: "A school bag weighing 3 ______ is considered heavy.",
        optionA: "cm",
        optionB: "m",
        optionC: "kg",
        correctAnswer: "kg",
      }),
      shuffleOptions({
        question: "A feather weighs only a few ______.",
        optionA: "g",
        optionB: "kg",
        optionC: "L",
        correctAnswer: "g",
      }),
      shuffleOptions({
        question: "We use ______ when we want to know the exact weight of objects.",
        optionA: "fixed units like g and kg",
        optionB: "colours",
        optionC: "shapes",
        correctAnswer: "fixed units like g and kg",
      }),
      shuffleOptions({
        question: "A brick is much heavier than a marble, so it weighs in ______.",
        optionA: "g",
        optionB: "kg",
        optionC: "ml",
        correctAnswer: "kg",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ball is heavier than a marble.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Grams are used for weighing big, heavy objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 kg = 1000 g.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A balance scale helps us compare which object is heavier.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A feather is heavier than a stone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kilograms are used to weigh objects like bags of rice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lighter side of the balance always goes down.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Non-standard units include items like marbles and bricks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "500 g is half of 1 kg.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adding weights is done the same way as adding numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
