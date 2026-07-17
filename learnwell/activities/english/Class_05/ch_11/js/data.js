export const chapter = "Chapter - 11: Mother";
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
        question: "Who means so very much to the poet?",
        optionA: "Teacher",
        optionB: "Mother",
        optionC: "Friend",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Where is Mother always, according to the poet?",
        optionA: "In his heart",
        optionB: "In his school",
        optionC: "In his class",
        correctAnswer: "In his heart",
      }),
      shuffleOptions({
        question: "What can the poet never do?",
        optionA: "Repay",
        optionB: "Forget",
        optionC: "Sleep",
        correctAnswer: "Repay",
      }),
      shuffleOptions({
        question: "What does the poet treasure?",
        optionA: "Heart of gold",
        optionB: "Heart of silver",
        optionC: "Heart of stone",
        correctAnswer: "Heart of gold",
      }),
      shuffleOptions({
        question: "Without whose love the poet cannot imagine life?",
        optionA: "Mother",
        optionB: "Father",
        optionC: "Sister",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Who is always giving?",
        optionA: "Mother",
        optionB: "Brother",
        optionC: "Teacher",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Who helps in any way?",
        optionA: "Mother",
        optionB: "Friend",
        optionC: "Aunt",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "What does the poet say he will do “as long as he shall live”?",
        optionA: "Work hard",
        optionB: "Treasure mother’s heart",
        optionC: "Repay her",
        correctAnswer: "Treasure mother’s heart",
      }),
      shuffleOptions({
        question: "What kind of heart does the poet say Mother has?",
        optionA: "Heart of stone",
        optionB: "Heart of gold",
        optionC: "Heart of wood",
        correctAnswer: "Heart of gold",
      }),
      shuffleOptions({
        question: "Who has done loving things for the poet?",
        optionA: "Mother",
        optionB: "Teacher",
        optionC: "Father",
        correctAnswer: "Mother",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "You mean so very much to ______.",
        optionA: "me",
        optionB: "him",
        optionC: "her",
        correctAnswer: "me",
      }),
      shuffleOptions({
        question: "That you are always in my ______.",
        optionA: "dreams",
        optionB: "heart",
        optionC: "home",
        correctAnswer: "heart",
      }),
      shuffleOptions({
        question: "No matter where I ______.",
        optionA: "play",
        optionB: "go",
        optionC: "hide",
        correctAnswer: "go",
      }),
      shuffleOptions({
        question: "You’re always ______, always there to help.",
        optionA: "giving",
        optionB: "shouting",
        optionC: "resting",
        correctAnswer: "giving",
      }),
      shuffleOptions({
        question: "The loving things you’ve done for me, I never could ______.",
        optionA: "repay",
        optionB: "buy",
        optionC: "keep",
        correctAnswer: "repay",
      }),
      shuffleOptions({
        question: "I can’t ______ what I’d do.",
        optionA: "imagine",
        optionB: "decide",
        optionC: "run",
        correctAnswer: "imagine",
      }),
      shuffleOptions({
        question: "Without the ______ you give.",
        optionA: "love",
        optionB: "gift",
        optionC: "game",
        correctAnswer: "love",
      }),
      shuffleOptions({
        question: "I’ll treasure your sweet heart of ______.",
        optionA: "gold",
        optionB: "stone",
        optionC: "iron",
        correctAnswer: "gold",
      }),
      shuffleOptions({
        question: "As long as I shall ______.",
        optionA: "live",
        optionB: "jump",
        optionC: "walk",
        correctAnswer: "live",
      }),
      shuffleOptions({
        question: "I’ll treasure your sweet ______ of gold.",
        optionA: "heart",
        optionB: "voice",
        optionC: "smile",
        correctAnswer: "heart",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poet says Mother is always in his heart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet can easily repay Mother’s love.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mother is always giving and helping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet treasures Mother’s heart of stone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The poet will treasure Mother’s heart of gold forever.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet cannot imagine life without Mother’s love.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The loving things Mother has done are countless.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet will treasure Mother’s heart as long as he lives.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poem shows that Mother is careless.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A mother’s love is priceless, according to the poem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
