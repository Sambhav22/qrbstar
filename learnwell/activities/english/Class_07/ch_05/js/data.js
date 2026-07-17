export const chapter = "Chapter - 5: The Gift of the Magi";
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
        question: "Where did Della and Jim live?",
        optionA: "A mansion",
        optionB: "A flat",
        optionC: "A hut",
        correctAnswer: "A hut",
      }),
      shuffleOptions({
        question: "What was Jim’s full name?",
        optionA: "James Young",
        optionB: "James Dillingham Young",
        optionC: "James Dela Young",
        correctAnswer: "James Dillingham Young",
      }),
      shuffleOptions({
        question: "How much did Della finally have to buy Jim’s gift?",
        optionA: "$1.57",
        optionB: "$1.87",
        optionC: "$2.50",
        correctAnswer: "$1.87",
      }),
      shuffleOptions({
        question: "What festival was the next day?",
        optionA: "Diwali",
        optionB: "Christmas",
        optionC: "New Year",
        correctAnswer: "Christmas",
      }),
      shuffleOptions({
        question: "Who was Mme Sofronie?",
        optionA: "A hair dealer",
        optionB: "A grocer",
        optionC: "A neighbour",
        correctAnswer: "A hair dealer",
      }),
      shuffleOptions({
        question: "How much money did Mme Sofronie give Della for her hair?",
        optionA: "$15",
        optionB: "$20",
        optionC: "$25",
        correctAnswer: "$20",
      }),
      shuffleOptions({
        question: "What did Della buy for Jim?",
        optionA: "A diary",
        optionB: "A chain",
        optionC: "A ring",
        correctAnswer: "A chain",
      }),
      shuffleOptions({
        question: "What was Jim’s prized possession?",
        optionA: "His overcoat",
        optionB: "His watch",
        optionC: "His shoes",
        correctAnswer: "His watch",
      }),
      shuffleOptions({
        question: "Who wrote this story?",
        optionA: "O. Henry",
        optionB: "Charles Dickens",
        optionC: "Mark Twain",
        correctAnswer: "O. Henry",
      }),
      shuffleOptions({
        question: "How old was Jim?",
        optionA: "20",
        optionB: "22",
        optionC: "25",
        correctAnswer: "22",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Della’s hair fell like a ___ of brown waters.",
        optionA: "Stream",
        optionB: "Cascade",
        optionC: "River",
        correctAnswer: "Cascade",
      }),
      shuffleOptions({
        question: "The rent of the flat was $ ___ per week.",
        optionA: "6",
        optionB: "8",
        optionC: "10",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "Jim sometimes looked at his watch ___ .",
        optionA: "On the sly",
        optionB: "With pride",
        optionC: "In anger",
        correctAnswer: "On the sly",
      }),
      shuffleOptions({
        question: "Della curled her hair with ___ irons.",
        optionA: "Curling",
        optionB: "Heating",
        optionC: "Pressing",
        correctAnswer: "Curling",
      }),
      shuffleOptions({
        question: "Jim’s overcoat was ___ .",
        optionA: "New",
        optionB: "Old",
        optionC: "Missing",
        correctAnswer: "Old",
      }),
      shuffleOptions({
        question: "The combs were made of pure ___ .",
        optionA: "Silver",
        optionB: "Gold",
        optionC: "Platinum",
        correctAnswer: "Silver",
      }),
      shuffleOptions({
        question: "The combs had jewelled ___ .",
        optionA: "Rims",
        optionB: "Chains",
        optionC: "Covers",
        correctAnswer: "Rims",
      }),
      shuffleOptions({
        question: "Della was preparing ___ for dinner.",
        optionA: "Soup",
        optionB: "Chops",
        optionC: "Rice",
        correctAnswer: "Chops",
      }),
      shuffleOptions({
        question: "Jim sold his ___ to buy combs.",
        optionA: "Hat",
        optionB: "Watch",
        optionC: "Gloves",
        correctAnswer: "Watch",
      }),
      shuffleOptions({
        question: "Della whispered to God to keep her still ___ .",
        optionA: "Rich",
        optionB: "Pretty",
        optionC: "Lucky",
        correctAnswer: "Pretty",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Della had plenty of money to buy Jim’s gift.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Della looked out at a grey cat walking on a grey fence.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Della sold her hair for ten dollars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jim was without gloves in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jim became angry after seeing Della’s haircut.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The chain Della bought was flashy and showy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jim gave Della a set of combs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story ends with the line “They are the magi.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Della’s curls made her look like a truant schoolboy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The writer calls Jim and Della “the wisest” for their gifts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
