export const chapter = "Chapter - 9: Measurement of Length";
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
        question: "Which unit is used to measure small objects like an eraser?",
        optionA: "metre",
        optionB: "centimetre",
        optionC: "kilometre",
        correctAnswer: "centimetre",
      }),
      shuffleOptions({
        question: "Which of the following is a non-standard unit of length?",
        optionA: "cubit",
        optionB: "metre",
        optionC: "hand span",
        correctAnswer: "hand span",
      }),
      shuffleOptions({
        question: "The scale in your geometry box is usually how long?",
        optionA: "10 cm",
        optionB: "15 cm",
        optionC: "25 cm",
        correctAnswer: "15 cm",
      }),
      shuffleOptions({
        question: "The length of a classroom wall is usually measured in—",
        optionA: "centimetres",
        optionB: "metres",
        optionC: "digits",
        correctAnswer: "metres",
      }),
      shuffleOptions({
        question: "Pace is measured using the—",
        optionA: "foot",
        optionB: "whole step of a person",
        optionC: "thumb",
        correctAnswer: "whole step of a person",
      }),
      shuffleOptions({
        question: "What is the standard unit used for measuring long distances?",
        optionA: "metre",
        optionB: "centimetre",
        optionC: "pace",
        correctAnswer: "metre",
      }),
      shuffleOptions({
        question: "The width of a finger is called—",
        optionA: "foot span",
        optionB: "digit",
        optionC: "cubit",
        correctAnswer: "digit",
      }),
      shuffleOptions({
        question: "Hand span is the distance from—",
        optionA: "thumb to last finger spread out fully",
        optionB: "thumb to elbow",
        optionC: "heel to toe",
        correctAnswer: "thumb to last finger spread out fully",
      }),
      shuffleOptions({
        question: "Non-standard units give different results because—",
        optionA: "they are measured using tools",
        optionB: "everyone has different-sized body parts",
        optionC: "they are always the same",
        correctAnswer: "everyone has different-sized body parts",
      }),
      shuffleOptions({
        question: "Which unit is used to measure the height of a tall tree?",
        optionA: "centimetre",
        optionB: "digit",
        optionC: "metre",
        correctAnswer: "metre",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 metre is equal to ________.",
        optionA: "50 cm",
        optionB: "100 cm",
        optionC: "150 cm",
        correctAnswer: "100 cm",
      }),
      shuffleOptions({
        question: "A scale must be placed with its ________ at one end of the object.",
        optionA: "middle",
        optionB: "zero mark",
        optionC: "5 cm mark",
        correctAnswer: "zero mark",
      }),
      shuffleOptions({
        question: "A ________ is used to measure the length of small things like crayons.",
        optionA: "metre",
        optionB: "centimetre scale",
        optionC: "pace",
        correctAnswer: "centimetre scale",
      }),
      shuffleOptions({
        question: "The length of a bus is measured in ________.",
        optionA: "cm",
        optionB: "digit",
        optionC: "m",
        correctAnswer: "m",
      }),
      shuffleOptions({
        question: "A hand span is a ________ unit of length.",
        optionA: "standard",
        optionB: "non-standard",
        optionC: "metre",
        correctAnswer: "non-standard",
      }),
      shuffleOptions({
        question: "The distance from the elbow to the tip of middle finger is called a ________.",
        optionA: "cubit",
        optionB: "digit",
        optionC: "pace",
        correctAnswer: "cubit",
      }),
      shuffleOptions({
        question: "A ruler usually has ________ divisions marked on it.",
        optionA: "centimetre",
        optionB: "metre",
        optionC: "centimetre and millimetre",
        correctAnswer: "centimetre and millimetre",
      }),
      shuffleOptions({
        question: "Length tells us how ________ an object is.",
        optionA: "heavy",
        optionB: "long",
        optionC: "big",
        correctAnswer: "long",
      }),
      shuffleOptions({
        question: "A very small length like the width of a finger is measured using a ________.",
        optionA: "cubit",
        optionB: "digit",
        optionC: "pace",
        correctAnswer: "digit",
      }),
      shuffleOptions({
        question: "When adding lengths, the units must always be ________.",
        optionA: "same",
        optionB: "different",
        optionC: "large",
        correctAnswer: "same",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hand span and pace are non-standard units of measurement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A metre is smaller than a centimetre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A scale always begins with the 0 mark.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 metre = 100 centimetres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The length of a pencil is usually measured in metres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Only lengths with the same unit can be added or subtracted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pace is measured using a ruler.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Centimetre is a standard unit of length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Everyone's hand span is exactly the same.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Measuring from the wrong end of the scale can give a wrong length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
