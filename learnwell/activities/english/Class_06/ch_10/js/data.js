export const chapter = "Chapter - 10: The Aged Mother";
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
        question: "Who ruled over Shinning?",
        optionA: "A kind king",
        optionB: "A despotic governor",
        optionC: "A rich farmer",
        correctAnswer: "A despotic governor",
      }),
      shuffleOptions({
        question: "What did the farmer carry in a gourd?",
        optionA: "Milk",
        optionB: "Water",
        optionC: "Oil",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "What was the mountain called?",
        optionA: "Obatsuyama",
        optionB: "Fuji",
        optionC: "Himalaya",
        correctAnswer: "Obatsuyama",
      }),
      shuffleOptions({
        question: "What did the farmer make as a cushion for his mother?",
        optionA: "Leaves",
        optionB: "Pine needles",
        optionC: "Grass",
        correctAnswer: "Pine needles",
      }),
      shuffleOptions({
        question: "Who demanded the rope of ashes?",
        optionA: "Farmer",
        optionB: "Governor",
        optionC: "Mother",
        correctAnswer: "Governor",
      }),
      shuffleOptions({
        question: "Where did the son hide his mother?",
        optionA: "In a closet beneath the kitchen",
        optionB: "In the barn",
        optionC: "In the field",
        correctAnswer: "In a closet beneath the kitchen",
      }),
      shuffleOptions({
        question: "What was the farmer’s main food?",
        optionA: "Rice",
        optionB: "Wheat",
        optionC: "Barley",
        correctAnswer: "Rice",
      }),
      shuffleOptions({
        question: "Why were the mother’s hands scratched?",
        optionA: "She snapped twigs",
        optionB: "She cooked food",
        optionC: "She lifted stones",
        correctAnswer: "She snapped twigs",
      }),
      shuffleOptions({
        question: "What did the governor praise the farmer for?",
        optionA: "His wit",
        optionB: "His wealth",
        optionC: "His courage",
        correctAnswer: "His wit",
      }),
      shuffleOptions({
        question: "What drifted into the past as a legend?",
        optionA: "The cruel law",
        optionB: "The harvest festival",
        optionC: "The farmer’s story",
        correctAnswer: "The cruel law",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The farmer lived at the foot of a ______.",
        optionA: "River",
        optionB: "Mountain",
        optionC: "Palace",
        correctAnswer: "Mountain",
      }),
      shuffleOptions({
        question: "The old mother’s eyes were not so ______.",
        optionA: "Bright",
        optionB: "Dim",
        optionC: "Weak",
        correctAnswer: "Dim",
      }),
      shuffleOptions({
        question: "The farmer’s heart was full of ______.",
        optionA: "Anger",
        optionB: "Sorrow",
        optionC: "Pride",
        correctAnswer: "Sorrow",
      }),
      shuffleOptions({
        question: "The narrow road was crossed by paths of ______.",
        optionA: "Hunters",
        optionB: "Soldiers",
        optionC: "Farmers",
        correctAnswer: "Hunters",
      }),
      shuffleOptions({
        question: "The governor shrank from ______.",
        optionA: "Failing health",
        optionB: "War",
        optionC: "Youth",
        correctAnswer: "Failing health",
      }),
      shuffleOptions({
        question: "The son supplied his mother with everything she ______.",
        optionA: "Needed",
        optionB: "Feared",
        optionC: "Liked",
        correctAnswer: "Needed",
      }),
      shuffleOptions({
        question: "The rope of straw was burnt on a ______ night.",
        optionA: "Windless",
        optionB: "Rainy",
        optionC: "Stormy",
        correctAnswer: "Windless",
      }),
      shuffleOptions({
        question: "After hearing the story, the governor ______.",
        optionA: "Meditated",
        optionB: "Punished the farmer",
        optionC: "Rejected him",
        correctAnswer: "Meditated",
      }),
      shuffleOptions({
        question: "The cruel law was abolished that very ______.",
        optionA: "Hour",
        optionB: "Day",
        optionC: "Month",
        correctAnswer: "Hour",
      }),
      shuffleOptions({
        question: "The story remains today only as ______.",
        optionA: "Legend",
        optionB: "Fact",
        optionC: "History",
        correctAnswer: "Legend",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The farmer was very rich.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mother was abandoned at last.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The governor feared losing strength.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The son carried rice and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mother guided by dropping stones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The son revealed the truth to the governor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The governor punished the farmer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cruel law was praised by the people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story shows respect and love for elders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mother’s wisdom saved the province.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
