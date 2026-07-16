export const chapter = "Chapter - 4: The Tiger in the Cage";
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
  const optionsArray = [optionA, optionB, optionC];

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];
  object.optionC = optionsArray[2];

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who helped the young man?",
        optionA: "A lion",
        optionB: "A fox",
        optionC: "A bird",
        correctAnswer: "A fox",
      }),
      shuffleOptions({
        question: "What did the tiger do after being freed?",
        optionA: "Slept",
        optionB: "Wanted to eat the man",
        optionC: "Ran away",
        correctAnswer: "Wanted to eat the man",
      }),
      shuffleOptions({
        question: "Why did the young man not free the tiger at first?",
        optionA: "He was tired",
        optionB: "He thought tiger would eat him",
        optionC: "He had no key",
        correctAnswer: "He thought tiger would eat him",
      }),
      shuffleOptions({
        question: "What was the tiger's nature?",
        optionA: "Thankful",
        optionB: "Evil",
        optionC: "Honest",
        correctAnswer: "Evil",
      }),
      shuffleOptions({
        question: "What did the fox say about the cage?",
        optionA: "Too big",
        optionB: "Too small",
        optionC: "Just right",
        correctAnswer: "Too small",
      }),
      shuffleOptions({
        question: "What did the tiger promise?",
        optionA: "To eat only men",
        optionB: "Not to eat the man",
        optionC: "To sing",
        correctAnswer: "Not to eat the man",
      }),
      shuffleOptions({
        question: "Why did the fox trick the tiger?",
        optionA: "To help the man",
        optionB: "To get food",
        optionC: "To trap both",
        correctAnswer: "To help the man",
      }),
      shuffleOptions({
        question: "How did the tiger feel in the cage?",
        optionA: "Sad",
        optionB: "Happy",
        optionC: "Angry",
        correctAnswer: "Sad",
      }),
      shuffleOptions({
        question: "Where was the man walking?",
        optionA: "Road",
        optionB: "Garden",
        optionC: "Forest",
        correctAnswer: "Forest",
      }),
      shuffleOptions({
        question: "What did the man do to help?",
        optionA: "Brought food",
        optionB: "Opened the cage",
        optionC: "Called people",
        correctAnswer: "Opened the cage",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The man was ______ a merry tune.",
        optionA: "writing",
        optionB: "whistling",
        optionC: "crying",
        correctAnswer: "whistling",
      }),
      shuffleOptions({
        question: "The tiger was in a ______.",
        optionA: "forest",
        optionB: "house",
        optionC: "cage",
        correctAnswer: "cage",
      }),
      shuffleOptions({
        question: "The fox was a ______ animal.",
        optionA: "slow",
        optionB: "clever",
        optionC: "hungry",
        correctAnswer: "clever",
      }),
      shuffleOptions({
        question: "The cage had a ______.",
        optionA: "key",
        optionB: "lock",
        optionC: "latch",
        correctAnswer: "latch",
      }),
      shuffleOptions({
        question: "The man felt ______ for the tiger.",
        optionA: "pity",
        optionB: "fear",
        optionC: "joy",
        correctAnswer: "pity",
      }),
      shuffleOptions({
        question: "The tiger wanted to ______ the man.",
        optionA: "thank",
        optionB: "eat",
        optionC: "help",
        correctAnswer: "eat",
      }),
      shuffleOptions({
        question: "The story took place in a ______.",
        optionA: "forest",
        optionB: "city",
        optionC: "ocean",
        correctAnswer: "forest",
      }),
      shuffleOptions({
        question: "The fox ______ the cage again.",
        optionA: "opened",
        optionB: "broke",
        optionC: "latched",
        correctAnswer: "latched",
      }),
      shuffleOptions({
        question: "The young man and fox ______ away.",
        optionA: "danced",
        optionB: "went",
        optionC: "ran",
        correctAnswer: "went",
      }),
      shuffleOptions({
        question: "The tiger broke his ______.",
        optionA: "leg",
        optionB: "cage",
        optionC: "promise",
        correctAnswer: "promise",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The fox wanted to eat the man.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The young man was scared of the tiger.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tiger promised not to eat the man.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The man opened the door of the cage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tiger ate the young man.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The fox tricked the tiger back into the cage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The forest was full of animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The latch kept the cage locked.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story has a sad ending.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tiger kept his promise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;