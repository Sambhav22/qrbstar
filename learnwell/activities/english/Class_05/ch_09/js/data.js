export const chapter = "Chapter - 9: A Goat Tricks a Lion";
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
        question: "Who got separated from the herd?",
        optionA: "Brown lion",
        optionB: "Brown goat",
        optionC: "Jackal",
        correctAnswer: "Brown goat",
      }),
      shuffleOptions({
        question: "Where did the goat go to rest?",
        optionA: "Field",
        optionB: "Cave",
        optionC: "River",
        correctAnswer: "Cave",
      }),
      shuffleOptions({
        question: "Who lived in the cave?",
        optionA: "Goat",
        optionB: "Lion",
        optionC: "Jackal",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "What time did it become when the goat could not return?",
        optionA: "Afternoon",
        optionB: "Evening",
        optionC: "Morning",
        correctAnswer: "Evening",
      }),
      shuffleOptions({
        question: "Who was frightened by the goat’s brave words?",
        optionA: "The jackal",
        optionB: "The lion",
        optionC: "The herd",
        correctAnswer: "The lion",
      }),
      shuffleOptions({
        question: "The goat called herself the Queen of ______.",
        optionA: "Lions",
        optionB: "Jungle Goats",
        optionC: "Elephants",
        correctAnswer: "Jungle Goats",
      }),
      shuffleOptions({
        question: "The lion begged the goat to ______ him.",
        optionA: "Kill",
        optionB: "Let go",
        optionC: "Feed",
        correctAnswer: "Let go",
      }),
      shuffleOptions({
        question: "Who tried to trick the lion later?",
        optionA: "Jackal",
        optionB: "Goat",
        optionC: "Herd",
        correctAnswer: "Jackal",
      }),
      shuffleOptions({
        question: "Who was killed at the end?",
        optionA: "Goat",
        optionB: "Jackal",
        optionC: "Lion",
        correctAnswer: "Jackal",
      }),
      shuffleOptions({
        question: "Which quality saved the goat’s life?",
        optionA: "Strength",
        optionB: "Wit and courage",
        optionC: "Size",
        correctAnswer: "Wit and courage",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The goats went to the forest to ______.",
        optionA: "Play",
        optionB: "Graze",
        optionC: "Sleep",
        correctAnswer: "Graze",
      }),
      shuffleOptions({
        question: "The timid goat asked the brave goat to go ______.",
        optionA: "Away",
        optionB: "Ahead",
        optionC: "Back",
        correctAnswer: "Ahead",
      }),
      shuffleOptions({
        question: "The goat said, “I must return to the ______.”",
        optionA: "River",
        optionB: "Village",
        optionC: "Cave",
        correctAnswer: "Village",
      }),
      shuffleOptions({
        question: "The lion thought, “She is not at all ______ of me.”",
        optionA: "Afraid",
        optionB: "Friendly",
        optionC: "Happy",
        correctAnswer: "Afraid",
      }),
      shuffleOptions({
        question: "The goat claimed to have eaten twenty ______.",
        optionA: "Tigers",
        optionB: "Cheetahs",
        optionC: "Lions",
        correctAnswer: "Cheetahs",
      }),
      shuffleOptions({
        question: "The goat also claimed to have eaten ten ______.",
        optionA: "Elephants",
        optionB: "Goats",
        optionC: "Horses",
        correctAnswer: "Elephants",
      }),
      shuffleOptions({
        question: "The lion feared eating the goat because she was ______.",
        optionA: "Small",
        optionB: "Dirty",
        optionC: "Old",
        correctAnswer: "Dirty",
      }),
      shuffleOptions({
        question: "The goat shouted that the jackal had brought only ______ lion.",
        optionA: "One",
        optionB: "Two",
        optionC: "Five",
        correctAnswer: "One",
      }),
      shuffleOptions({
        question: "The lion became ______ on hearing the goat’s words.",
        optionA: "Happy",
        optionB: "Frightened",
        optionC: "Proud",
        correctAnswer: "Frightened",
      }),
      shuffleOptions({
        question: "The goat thanked God for her wit and ______.",
        optionA: "Strength",
        optionB: "Courage",
        optionC: "Anger",
        correctAnswer: "Courage",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A herd of goats went to graze in the forest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The timid goat went ahead bravely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The brown goat entered the cave to rest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lion was the owner of the cave.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The goat called herself the Queen of Lions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The lion begged the goat not to eat him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The jackal wanted to save the goat’s life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The lion killed the jackal in anger.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The goat’s courage saved her life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The goat and lion became friends in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
