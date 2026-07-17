export const chapter = "Chapter - 12: The Jar of Greed";
export const noOfActivities = 3;

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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
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
        question: "Who was desperate to see his wife in ornaments?",
        optionA: "The landlord",
        optionB: "The potter",
        optionC: "The jeweller",
        correctAnswer: "The potter",
      }),
      shuffleOptions({
        question: "What did the potter’s wife begin to do for saving money?",
        optionA: "Save grains",
        optionB: "Save coins",
        optionC: "Save clothes",
        correctAnswer: "Save coins",
      }),
      shuffleOptions({
        question: "What effect did cutting meals have on the couple?",
        optionA: "They became stronger",
        optionB: "They became weaker",
        optionC: "They became richer",
        correctAnswer: "They became weaker",
      }),
      shuffleOptions({
        question: "What did the potter think of while strolling in the woods?",
        optionA: "Jewellery",
        optionB: "Furniture",
        optionC: "Farming",
        correctAnswer: "Jewellery",
      }),
      shuffleOptions({
        question: "How many jars were really full of gold?",
        optionA: "Two",
        optionB: "Four",
        optionC: "Five",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "What was the fifth jar like?",
        optionA: "Half-empty",
        optionB: "Broken",
        optionC: "Completely empty",
        correctAnswer: "Half-empty",
      }),
      shuffleOptions({
        question: "Who advised the potter about the trap of the jars?",
        optionA: "His wife",
        optionB: "The landlord",
        optionC: "The jeweller",
        correctAnswer: "The landlord",
      }),
      shuffleOptions({
        question: "What did the potter melt to fill the jar?",
        optionA: "Pots",
        optionB: "Ornaments",
        optionC: "Utensils",
        correctAnswer: "Ornaments",
      }),
      shuffleOptions({
        question: "What did the potter sell besides utensils?",
        optionA: "House",
        optionB: "Furniture",
        optionC: "Land",
        correctAnswer: "Furniture",
      }),
      shuffleOptions({
        question: "In the end, what remained with the potter?",
        optionA: "Gold",
        optionB: "Nothing",
        optionC: "Jewellery",
        correctAnswer: "Nothing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The potter’s wife began to save as much as ________.",
        optionA: "possible",
        optionB: "impossible",
        optionC: "sufficient",
        correctAnswer: "possible",
      }),
      shuffleOptions({
        question: "They started eating only ________ meals a day.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "The jars were covered with ________.",
        optionA: "lids",
        optionB: "cloth",
        optionC: "locks",
        correctAnswer: "lids",
      }),
      shuffleOptions({
        question: "The wife exclaimed in joy when she saw the ________ jar.",
        optionA: "first",
        optionB: "fifth",
        optionC: "last",
        correctAnswer: "first",
      }),
      shuffleOptions({
        question: "The landlord laughed because the potter was caught in a ________.",
        optionA: "trap",
        optionB: "lie",
        optionC: "theft",
        correctAnswer: "trap",
      }),
      shuffleOptions({
        question: "The potter’s face looked very ________ when landlord saw him.",
        optionA: "cheerful",
        optionB: "gloomy",
        optionC: "happy",
        correctAnswer: "gloomy",
      }),
      shuffleOptions({
        question: "The voice from the tree promised ________ jars of gold.",
        optionA: "three",
        optionB: "five",
        optionC: "ten",
        correctAnswer: "five",
      }),
      shuffleOptions({
        question: "The potter asked the tree to take the jars ________.",
        optionA: "away",
        optionB: "inside",
        optionC: "back home",
        correctAnswer: "away",
      }),
      shuffleOptions({
        question: "After returning the jars, the potter was finally ________.",
        optionA: "sad",
        optionB: "relaxed",
        optionC: "angry",
        correctAnswer: "relaxed",
      }),
      shuffleOptions({
        question: "The story teaches us that ________ has no limit.",
        optionA: "greed",
        optionB: "wealth",
        optionC: "poverty",
        correctAnswer: "greed",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The potter was an expert craftsman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The wife never agreed to save any money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "They reduced their meals first to two, then to one.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The voice from the tree offered seven jars of gold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The first four jars were full of molten gold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The potter was happy to see the fifth jar half-empty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The landlord had once been offered the same jars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fifth jar would always remain half-empty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The landlord advised the potter to keep the jars safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The potter finally felt relaxed when the jars disappeared.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
