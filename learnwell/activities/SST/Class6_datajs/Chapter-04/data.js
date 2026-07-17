export const chapter = "Chapter - 4: Maps and Its Components";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who first showed the top of the map as the north direction?",
        optionA: "Ptolemy",
        optionB: "Aristotle",
        optionC: "Eratosthenes",
        correctAnswer: "Ptolemy",
      }),
      shuffleOptions({
        question: "Which map helps us study natural features such as mountains and rivers?",
        optionA: "Political map",
        optionB: "Thematic map",
        optionC: "Physical map",
        correctAnswer: "Physical map",
      }),
      shuffleOptions({
        question: "Which type of map focuses on information like rainfall, crops, and industries?",
        optionA: "Relief map",
        optionB: "Thematic map",
        optionC: "Boundary map",
        correctAnswer: "Thematic map",
      }),
      shuffleOptions({
        question: "What helps us determine the distance between two places on a map?",
        optionA: "Compass",
        optionB: "Scale",
        optionC: "Symbol",
        correctAnswer: "Scale",
      }),
      shuffleOptions({
        question: "Which direction does the red needle of a magnetic compass always point to?",
        optionA: "East",
        optionB: "North",
        optionC: "South",
        correctAnswer: "North",
      }),
      shuffleOptions({
        question: "Which map shows states, countries, and their capitals?",
        optionA: "Political map",
        optionB: "Physical map",
        optionC: "Sketch",
        correctAnswer: "Political map",
      }),
      shuffleOptions({
        question: "Why can a map be carried more easily than a globe?",
        optionA: "It is colourful",
        optionB: "It can be folded",
        optionC: "It is heavier",
        correctAnswer: "It can be folded",
      }),
      shuffleOptions({
        question: "What is the ratio between map distance and actual ground distance called?",
        optionA: "Direction",
        optionB: "Symbol",
        optionC: "Scale",
        correctAnswer: "Scale",
      }),
      shuffleOptions({
        question: "Which part of a map explains the meaning of symbols?",
        optionA: "Legend",
        optionB: "Index",
        optionC: "Compass",
        correctAnswer: "Legend",
      }),
      shuffleOptions({
        question: "Which drawing is based on memory and not drawn to scale?",
        optionA: "Plan",
        optionB: "Sketch",
        optionC: "Blueprint",
        correctAnswer: "Sketch",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The word map comes from the Latin word _______.",
        optionA: "carta",
        optionB: "mappa",
        optionC: "picta",
        correctAnswer: "mappa",
      }),
      shuffleOptions({
        question: "a _______ surface.",
        optionA: "flat",
        optionB: "curved",
        optionC: "uneven",
        correctAnswer: "flat",
      }),
      shuffleOptions({
        question: "A _______ scale uses a straight line divided into parts.",
        optionA: "statement",
        optionB: "representative",
        optionC: "linear",
        correctAnswer: "linear",
      }),
      shuffleOptions({
        question: "A _______ shows a very accurate drawing of a small area.",
        optionA: "sketch",
        optionB: "picture",
        optionC: "plan",
        correctAnswer: "plan",
      }),
      shuffleOptions({
        question: "Distortion is maximum near the _______.",
        optionA: "equator",
        optionB: "poles",
        optionC: "tropics",
        correctAnswer: "poles",
      }),
      shuffleOptions({
        question: "Symbols used on maps are _______ in nature.",
        optionA: "local",
        optionB: "universal",
        optionC: "temporary",
        correctAnswer: "universal",
      }),
      shuffleOptions({
        question: "The arrow labelled ‘N’ on a map shows the _______ direction.",
        optionA: "south",
        optionB: "north",
        optionC: "west",
        correctAnswer: "north",
      }),
      shuffleOptions({
        question: "A _______ helps us find directions on a map.",
        optionA: "compass",
        optionB: "scale",
        optionC: "legend",
        correctAnswer: "compass",
      }),
      shuffleOptions({
        question: "Physical maps show _______ features.",
        optionA: "natural",
        optionB: "political",
        optionC: "imaginary",
        correctAnswer: "natural",
      }),
      shuffleOptions({
        question: "A _______ map shows specific information like rainfall or crops.",
        optionA: "boundary",
        optionB: "thematic",
        optionC: "regional",
        correctAnswer: "thematic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Distortion occurs because the curved earth cannot be shown perfectly on a flat surface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A globe can show detailed information better than a map.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The four main directions are called cardinal directions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A sketch is drawn to scale.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Thematic maps show political boundaries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A plan gives accurate sizes and measurements of an area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A magnetic compass was mostly used by sailors to find directions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The legend of a map explains the symbols used in it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Maps were once drawn on skin, parchment, and cloth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The north direction is usually shown at the bottom of a map.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
