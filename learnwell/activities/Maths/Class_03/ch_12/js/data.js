export const chapter = "Chapter - 12: The Temporary Friend";
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
        question: "Who lived in the hole at the base of the banyan tree?",
        optionA: "Owl",
        optionB: "Mongoose",
        optionC: "Mouse",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "The cat got trapped in the net when she tried to –",
        optionA: "Climb the tree",
        optionB: "Catch the mouse",
        optionC: "Sleep on it",
        correctAnswer: "Catch the mouse",
      }),
      shuffleOptions({
        question: "Which animal was active during night only?",
        optionA: "Cat",
        optionB: "Owl",
        optionC: "Mongoose",
        correctAnswer: "Owl",
      }),
      shuffleOptions({
        question: "The mouse dodged the cat and –",
        optionA: "Got caught",
        optionB: "Ran into the tree",
        optionC: "Ran into his hole",
        correctAnswer: "Ran into his hole",
      }),
      shuffleOptions({
        question: "The cat wanted the mouse to come out and –",
        optionA: "Thank her",
        optionB: "Play with her",
        optionC: "Scare him",
        correctAnswer: "Play with her",
      }),
      shuffleOptions({
        question: "Who looked at the mouse with red eyes?",
        optionA: "Mongoose",
        optionB: "Owl",
        optionC: "Cat",
        correctAnswer: "Owl",
      }),
      shuffleOptions({
        question: "The mouse was saved from owl and mongoose because –",
        optionA: "He climbed a tree",
        optionB: "He sat near the trapped cat",
        optionC: "He ran far away",
        correctAnswer: "He sat near the trapped cat",
      }),
      shuffleOptions({
        question: "What did the mouse do to help the cat?",
        optionA: "Called the hunter",
        optionB: "Bit the cat",
        optionC: "Gnawed the net",
        correctAnswer: "Gnawed the net",
      }),
      shuffleOptions({
        question: "What did the cat promise?",
        optionA: "To be his protector",
        optionB: "To chase him later",
        optionC: "To climb the tree",
        correctAnswer: "To be his protector",
      }),
      shuffleOptions({
        question: "How did the hunter react on finding his net cut?",
        optionA: "Laughed",
        optionB: "Shouted",
        optionC: "Shook his head and went away",
        correctAnswer: "Shook his head and went away",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ laid his net under the tree.",
        optionA: "farmer",
        optionB: "hunter",
        optionC: "woodcutter",
        correctAnswer: "hunter",
      }),
      shuffleOptions({
        question: "The mouse saw the ______ standing near his hole.",
        optionA: "owl",
        optionB: "mongoose",
        optionC: "elephant",
        correctAnswer: "mongoose",
      }),
      shuffleOptions({
        question: "The mouse spoke to the cat from ______ the net.",
        optionA: "above",
        optionB: "in front",
        optionC: "behind",
        correctAnswer: "behind",
      }),
      shuffleOptions({
        question: "The cat promised to be the mouse’s ______.",
        optionA: "food",
        optionB: "enemy",
        optionC: "friend",
        correctAnswer: "friend",
      }),
      shuffleOptions({
        question: "The cat made a soft ______ to thank the mouse.",
        optionA: "bark",
        optionB: "purr",
        optionC: "chirp",
        correctAnswer: "purr",
      }),
      shuffleOptions({
        question: "The mouse saved himself by thinking ______.",
        optionA: "nervously",
        optionB: "actively",
        optionC: "lazily",
        correctAnswer: "actively",
      }),
      shuffleOptions({
        question: "The cat was caught while chasing the ______.",
        optionA: "owl",
        optionB: "mouse",
        optionC: "mongoose",
        correctAnswer: "mouse",
      }),
      shuffleOptions({
        question: "The owl could not see during the ______.",
        optionA: "night",
        optionB: "day",
        optionC: "evening",
        correctAnswer: "day",
      }),
      shuffleOptions({
        question: "The animals played a game of ______.",
        optionA: "run and jump",
        optionB: "hide-n-seek",
        optionC: "catch me",
        correctAnswer: "hide-n-seek",
      }),
      shuffleOptions({
        question: "The cat was ______ when the mouse refused her.",
        optionA: "disappointed",
        optionB: "angry",
        optionC: "sleeping",
        correctAnswer: "disappointed",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cat was friendly to all the animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mouse gnawed the net to free the owl.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mongoose lived in the hollow of the tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The owl flew away when the hunter came.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cat protected the mouse after being freed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mouse and cat became best friends forever.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The hunter successfully caught an animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cat tried to trick the mouse by her sweet voice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mouse was scared of the owl and mongoose.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mouse called the cat a permanent friend.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
