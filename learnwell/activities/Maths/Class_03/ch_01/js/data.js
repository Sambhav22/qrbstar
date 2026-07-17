export const chapter = "Chapter - 1: I want the Moon";
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
        question: "What did the king want to do?",
        optionA: "Fly in sky",
        optionB: "Touch the moon",
        optionC: "Rule the world",
        correctAnswer: "Touch the moon",
      }),
      shuffleOptions({
        question: "The carpenter made many?",
        optionA: "Rooms",
        optionB: "Boxes",
        optionC: "Spoons",
        correctAnswer: "Boxes",
      }),
      shuffleOptions({
        question: "What lesson does the story give?",
        optionA: "Climb more",
        optionB: "Think before acting",
        optionC: "Buy new things",
        correctAnswer: "Think before acting",
      }),
      shuffleOptions({
        question: "What caused the king to fall?",
        optionA: "Wind",
        optionB: "Moon",
        optionC: "Removing bottom box",
        correctAnswer: "Removing bottom box",
      }),
      shuffleOptions({
        question: "Why was there no wood left?",
        optionA: "It rained",
        optionB: "Trees were cut",
        optionC: "Fire burned them",
        correctAnswer: "Trees were cut",
      }),
      shuffleOptions({
        question: "The moon looked small because it was?",
        optionA: "Near",
        optionB: "Far",
        optionC: "New",
        correctAnswer: "Far",
      }),
      shuffleOptions({
        question: "The king’s desire was?",
        optionA: "Fulfilled",
        optionB: "Unwise",
        optionC: "Clever",
        correctAnswer: "Unwise",
      }),
      shuffleOptions({
        question: "The king’s palace had?",
        optionA: "Empty halls",
        optionB: "Pretty things",
        optionC: "Wooden chairs",
        correctAnswer: "Pretty things",
      }),
      shuffleOptions({
        question: "The carpenter felt?",
        optionA: "Excited",
        optionB: "Confused",
        optionC: "Worried",
        correctAnswer: "Worried",
      }),
      shuffleOptions({
        question: "The minister followed orders because?",
        optionA: "He agreed",
        optionB: "He had no choice",
        optionC: "He was happy",
        correctAnswer: "He had no choice",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The king lived in a __________.",
        optionA: "Hut",
        optionB: "Palace",
        optionC: "Cave",
        correctAnswer: "Palace",
      }),
      shuffleOptions({
        question: "The king wanted to ______ the moon.",
        optionA: "Paint",
        optionB: "Touch",
        optionC: "Chase",
        correctAnswer: "Touch",
      }),
      shuffleOptions({
        question: "The carpenter was asked to make ______.",
        optionA: "Ladders",
        optionB: "Boxes",
        optionC: "Ropes",
        correctAnswer: "Boxes",
      }),
      shuffleOptions({
        question: "The king climbed the ______ to reach the moon.",
        optionA: "Roof",
        optionB: "Tower",
        optionC: "Tree",
        correctAnswer: "Tower",
      }),
      shuffleOptions({
        question: "The boxes were made from ______.",
        optionA: "Water",
        optionB: "Metal",
        optionC: "Wood",
        correctAnswer: "Wood",
      }),
      shuffleOptions({
        question: "The moon remained ______.",
        optionA: "Hidden",
        optionB: "Untouched",
        optionC: "Broken",
        correctAnswer: "Untouched",
      }),
      shuffleOptions({
        question: "The king got many ______ on his body.",
        optionA: "Paints",
        optionB: "Bruises",
        optionC: "Leaves",
        correctAnswer: "Bruises",
      }),
      shuffleOptions({
        question: "The people around the king stayed ______.",
        optionA: "Angry",
        optionB: "Silent",
        optionC: "Noisy",
        correctAnswer: "Silent",
      }),
      shuffleOptions({
        question: "The tower was made on a ______ night.",
        optionA: "Cloudy",
        optionB: "Full moon",
        optionC: "Stormy",
        correctAnswer: "Full moon",
      }),
      shuffleOptions({
        question: "The bottom box was moved to the ______.",
        optionA: "Middle",
        optionB: "Top",
        optionC: "Gate",
        correctAnswer: "Top",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The king wanted to climb the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The carpenter was a painter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The boxes stayed strong and never fell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon came closer to the king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The king got hurt after the fall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The carpenter built a strong tower.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story teaches us to keep dreaming always.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The minister scolded the king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The people laughed at the king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The king still believes he could touch the moon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
