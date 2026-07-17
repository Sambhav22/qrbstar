export const chapter = "Chapter - 12: Indus Valley Civilisation";
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
        question: "Which civilisation is known for its excellent drainage system and grid-pattern streets?",
        optionA: "Egyptian",
        optionB: "Harappan",
        optionC: "Chinese",
        correctAnswer: "Harappan",
      }),
      shuffleOptions({
        question: "Which Harappan site had a well-designed dockyard used for sea trade?",
        optionA: "Dholavira",
        optionB: "Lothal",
        optionC: "Banavali",
        correctAnswer: "Lothal",
      }),
      shuffleOptions({
        question: "Which structure at Mohenjodaro shows advanced engineering skills of Harappans?",
        optionA: "Great Bath",
        optionB: "Town Hall",
        optionC: "Watch Tower",
        correctAnswer: "Great Bath",
      }),
      shuffleOptions({
        question: "Which metal was blended with copper to make bronze in the Harappan civilisation?",
        optionA: "Iron",
        optionB: "Tin",
        optionC: "Silver",
        correctAnswer: "Tin",
      }),
      shuffleOptions({
        question: "Which material did Harappans commonly use to make clay toys and figurines?",
        optionA: "Terracotta",
        optionB: "Marble",
        optionC: "Granite",
        correctAnswer: "Terracotta",
      }),
      shuffleOptions({
        question: "Which animal figure was commonly engraved on Harappan seals?",
        optionA: "Kangaroo",
        optionB: "Humped bull",
        optionC: "Elephant seal",
        correctAnswer: "Humped bull",
      }),
      shuffleOptions({
        question: "Which Harappan city was divided into three parts separated by massive stone walls?",
        optionA: "Mohenjodaro",
        optionB: "Dholavira",
        optionC: "Harappa",
        correctAnswer: "Dholavira",
      }),
      shuffleOptions({
        question: "Which precious stone was sourced from Gujarat or West Asia for Harappan ornaments?",
        optionA: "Ruby",
        optionB: "Cannelian",
        optionC: "Diamond",
        correctAnswer: "Cannelian",
      }),
      shuffleOptions({
        question: "Which occupation was the most important for maintaining large Harappan cities?",
        optionA: "Fishing",
        optionB: "Farming",
        optionC: "Baking",
        correctAnswer: "Farming",
      }),
      shuffleOptions({
        question: "Which Harappan site was famous for bead-making workshops?",
        optionA: "Chanhudaro",
        optionB: "Ropar",
        optionC: "Kalibangan",
        correctAnswer: "Chanhudaro",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Harappan houses were built mainly with __________ bricks.",
        optionA: "sun-dried",
        optionB: "baked bricks",
        optionC: "stone",
        correctAnswer: "baked bricks",
      }),
      shuffleOptions({
        question: "The Harappans used __________ for making thread for cloth.",
        optionA: "metal rods",
        optionB: "wooden sticks",
        optionC: "spindle whorls",
        correctAnswer: "spindle whorls",
      }),
      shuffleOptions({
        question: "The Great Bath had __________ on all sides.",
        optionA: "pillars",
        optionB: "verandahs",
        optionC: "statues",
        correctAnswer: "verandahs",
      }),
      shuffleOptions({
        question: "Harappan people used __________ to protect themselves from evil spirits.",
        optionA: "shields",
        optionB: "amulets",
        optionC: "helmets",
        correctAnswer: "amulets",
      }),
      shuffleOptions({
        question: "The Harappans obtained __________ from Afghanistan for making bronze.",
        optionA: "tin",
        optionB: "iron",
        optionC: "gold",
        correctAnswer: "tin",
      }),
      shuffleOptions({
        question: "Lothal’s dockyard was used to load and unload goods brought by __________.",
        optionA: "trucks",
        optionB: "boats and ships",
        optionC: "animals",
        correctAnswer: "boats and ships",
      }),
      shuffleOptions({
        question: "The Harappans carved many animals on their __________.",
        optionA: "shields",
        optionB: "seals",
        optionC: "buildings",
        correctAnswer: "seals",
      }),
      shuffleOptions({
        question: "Harappan pottery was usually made of __________.",
        optionA: "red clay",
        optionB: "plastic",
        optionC: "cement",
        correctAnswer: "red clay",
      }),
      shuffleOptions({
        question: "Harappans used weights that were based on multiples of __________.",
        optionA: "10",
        optionB: "16",
        optionC: "25",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "The Harappans grew wheat, barley, pulses and __________.",
        optionA: "maize",
        optionB: "rice",
        optionC: "coffee",
        correctAnswer: "rice",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The streets of Harappan cities cut each other at right angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Great Bath was filled with water brought from a nearby well.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Harappan seals have been found in Mesopotamia, showing trade links.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Harappans worshipped both Mother Goddess and Shiva Pashupati.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chanhudaro was more developed than Mohenjodaro.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Harappans made ornaments from shells and bones as well as gold and silver.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Harappan pottery sometimes had geometric and floral designs painted on it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The citadel was the lower residential area for common people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Harappan script is fully deciphered today.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Farming was the main occupation of the Harappan people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
