export const chapter = "Chapter - 15: A Mouse Reached the Moon";
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
        question: "How did the mouse travel to the moon?",
        optionA: "Ship",
        optionB: "Balloon",
        optionC: "Rocket",
        correctAnswer: "Balloon",
      }),
      shuffleOptions({
        question: "Where did the mouse finally reach?",
        optionA: "Sun",
        optionB: "Moon",
        optionC: "Stars",
        correctAnswer: "Moon",
      }),
      shuffleOptions({
        question: "Who was glad to see the mouse?",
        optionA: "A rabbit",
        optionB: "The man in the moon",
        optionC: "A star",
        correctAnswer: "The man in the moon",
      }),
      shuffleOptions({
        question: "What food was found on the moon?",
        optionA: "Cheese",
        optionB: "Fruits",
        optionC: "Rice",
        correctAnswer: "Cheese",
      }),
      shuffleOptions({
        question: "How long did the mouse stay on the moon?",
        optionA: "Forever",
        optionB: "For a while",
        optionC: "For a year",
        correctAnswer: "For a while",
      }),
      shuffleOptions({
        question: "Who welcomed the mouse warmly?",
        optionA: "The sun",
        optionB: "The man in the moon",
        optionC: "The stars",
        correctAnswer: "The man in the moon",
      }),
      shuffleOptions({
        question: "What was the mouse’s reply when asked to stay?",
        optionA: "He refused",
        optionB: "He agreed",
        optionC: "He kept quiet",
        correctAnswer: "He agreed",
      }),
      shuffleOptions({
        question: "What was missing on the moon?",
        optionA: "Cheese",
        optionB: "Fruits",
        optionC: "Man",
        correctAnswer: "Fruits",
      }),
      shuffleOptions({
        question: "How did the man in the moon feel when he saw the mouse?",
        optionA: "Angry",
        optionB: "Glad",
        optionC: "Worried",
        correctAnswer: "Glad",
      }),
      shuffleOptions({
        question: "What type of text is “A Mouse Reached the Moon”?",
        optionA: "Poem",
        optionB: "Story",
        optionC: "Article",
        correctAnswer: "Poem",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poem is about a ______.",
        optionA: "Cat",
        optionB: "Mouse",
        optionC: "Rabbit",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "The mouse travelled in a big ______.",
        optionA: "Ship",
        optionB: "Balloon",
        optionC: "Train",
        correctAnswer: "Balloon",
      }),
      shuffleOptions({
        question: "The man in the moon was very ______ to see the mouse.",
        optionA: "Sad",
        optionB: "Glad",
        optionC: "Angry",
        correctAnswer: "Glad",
      }),
      shuffleOptions({
        question: "The mouse was ______ welcomed.",
        optionA: "Warmly",
        optionB: "Coldly",
        optionC: "Rudely",
        correctAnswer: "Warmly",
      }),
      shuffleOptions({
        question: "The moon had nothing to eat except ______.",
        optionA: "Fruits",
        optionB: "Bread",
        optionC: "Cheese",
        correctAnswer: "Cheese",
      }),
      shuffleOptions({
        question: "The mouse said, “I’ll stay as long as you ______.”",
        optionA: "Want",
        optionB: "Please",
        optionC: "Ask",
        correctAnswer: "Please",
      }),
      shuffleOptions({
        question: "The mouse stayed for a ______.",
        optionA: "Month",
        optionB: "While",
        optionC: "Year",
        correctAnswer: "While",
      }),
      shuffleOptions({
        question: "The mouse met the man in the ______.",
        optionA: "Sun",
        optionB: "Moon",
        optionC: "Star",
        correctAnswer: "Moon",
      }),
      shuffleOptions({
        question: "The mouse was pleased with the ______ welcome.",
        optionA: "Warm",
        optionB: "Rude",
        optionC: "Sad",
        correctAnswer: "Warm",
      }),
      shuffleOptions({
        question: "The mouse reached the moon after sailing in ______.",
        optionA: "Style",
        optionB: "Fear",
        optionC: "Silence",
        correctAnswer: "Style",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The mouse reached the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mouse went up in a balloon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The man in the moon was sad to see the mouse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mouse stayed for a while on the moon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There was cheese to eat on the moon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The man in the moon did not talk to the mouse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mouse was warmly welcomed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mouse went by ship.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mouse was glad to stay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The moon was full of trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
