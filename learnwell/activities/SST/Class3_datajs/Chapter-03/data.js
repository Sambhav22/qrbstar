export const chapter = "Chapter - 3: Model of the Earth";
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
        question: "Which model shows the earth in a small, round form?",
        optionA: "Compass",
        optionB: "Globe",
        optionC: "Sketch",
        correctAnswer: "Globe",
      }),
      shuffleOptions({
        question: "Which colour on a globe represents oceans and seas?",
        optionA: "Yellow",
        optionB: "Blue",
        optionC: "Grey",
        correctAnswer: "Blue",
      }),
      shuffleOptions({
        question: "Which end of the earth is shown at the top of a globe?",
        optionA: "South Pole",
        optionB: "North Pole",
        optionC: "East Pole",
        correctAnswer: "North Pole",
      }),
      shuffleOptions({
        question: "Which thing helps us see the earth without rotating anything?",
        optionA: "Map",
        optionB: "Globe",
        optionC: "Atlas",
        correctAnswer: "Map",
      }),
      shuffleOptions({
        question: "Which drawing is used when only a rough idea of a place is needed?",
        optionA: "Compass",
        optionB: "Sketch",
        optionC: "Globe",
        correctAnswer: "Sketch",
      }),
      shuffleOptions({
        question: "Which of these is always drawn on a flat surface?",
        optionA: "Globe",
        optionB: "Map",
        optionC: "Compass",
        correctAnswer: "Map",
      }),
      shuffleOptions({
        question: "Which object shows directions with the help of a needle?",
        optionA: "Globe",
        optionB: "Atlas",
        optionC: "Compass",
        correctAnswer: "Compass",
      }),
      shuffleOptions({
        question: "Which direction lies on the right-hand side of any map?",
        optionA: "East",
        optionB: "West",
        optionC: "South",
        correctAnswer: "East",
      }),
      shuffleOptions({
        question: "Which tool becomes useful when travellers cannot identify directions?",
        optionA: "Atlas",
        optionB: "Compass",
        optionC: "Sketch",
        correctAnswer: "Compass",
      }),
      shuffleOptions({
        question: "Which item can be folded or rolled easily for carrying?",
        optionA: "Map",
        optionB: "Compass",
        optionC: "Globe",
        correctAnswer: "Map",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A globe helps us understand how ______ and nights occur.",
        optionA: "summer",
        optionB: "days",
        optionC: "rains",
        correctAnswer: "days",
      }),
      shuffleOptions({
        question: "The land areas shown on the globe are coloured ______.",
        optionA: "green/brown",
        optionB: "purple",
        optionC: "orange",
        correctAnswer: "green/brown",
      }),
      shuffleOptions({
        question: "The ______ of the earth is seen at the bottom part of a globe.",
        optionA: "North Pole",
        optionB: "South Pole",
        optionC: "West Pole",
        correctAnswer: "South Pole",
      }),
      shuffleOptions({
        question: "Maps can show many places because they are drawn on a ______ surface.",
        optionA: "flat",
        optionB: "curved",
        optionC: "soft",
        correctAnswer: "flat",
      }),
      shuffleOptions({
        question: "A sketch is a ______ drawing of a place.",
        optionA: "rough",
        optionB: "printed",
        optionC: "painted",
        correctAnswer: "rough",
      }),
      shuffleOptions({
        question: "A compass needle helps us find the ______ direction.",
        optionA: "north",
        optionB: "east",
        optionC: "west",
        correctAnswer: "north",
      }),
      shuffleOptions({
        question: "A map helps us in locating different ______.",
        optionA: "seasons",
        optionB: "people",
        optionC: "places",
        correctAnswer: "places",
      }),
      shuffleOptions({
        question: "The water bodies shown on a map appear in ______ colour.",
        optionA: "black",
        optionB: "blue",
        optionC: "pink",
        correctAnswer: "blue",
      }),
      shuffleOptions({
        question: "A book which contains many maps is called an ______.",
        optionA: "atlas",
        optionB: "album",
        optionC: "diary",
        correctAnswer: "atlas",
      }),
      shuffleOptions({
        question: "The left side of a map always shows the ______ direction.",
        optionA: "east",
        optionB: "west",
        optionC: "north",
        correctAnswer: "west",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A globe must be rotated to see the other half of the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A map can show more details than a globe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Oceans are always shown in red on globes and maps.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A sketch gives only a simple idea of a place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A compass is helpful for sailors who travel long distances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The south direction is found at the top of every map.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The North Pole is the lower end of a globe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Maps cannot be folded or rolled.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Different colours on a globe help us tell land and water apart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A globe is difficult to carry from one place to another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
