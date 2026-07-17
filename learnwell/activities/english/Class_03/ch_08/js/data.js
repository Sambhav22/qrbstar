export const chapter = "Chapter - 8: Appearance";
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
        question: "What did the cat say to the mouse?",
        optionA: "Let’s hug",
        optionB: "Let’s run",
        optionC: "Let’s sing",
        correctAnswer: "Let’s hug",
      }),
      shuffleOptions({
        question: "The mother mouse asked the son to be ______.",
        optionA: "lazy",
        optionB: "careful",
        optionC: "funny",
        correctAnswer: "careful",
      }),
      shuffleOptions({
        question: "The cock had ______ legs.",
        optionA: "smooth",
        optionB: "bare",
        optionC: "broken",
        correctAnswer: "bare",
      }),
      shuffleOptions({
        question: "What was the cat's true nature?",
        optionA: "Kind",
        optionB: "Harmless",
        optionC: "Dangerous",
        correctAnswer: "Dangerous",
      }),
      shuffleOptions({
        question: "Who saved the son mouse from danger?",
        optionA: "The cock",
        optionB: "His mother",
        optionC: "The cat",
        correctAnswer: "His mother",
      }),
      shuffleOptions({
        question: "The son mouse thought the cat looked ______.",
        optionA: "wild",
        optionB: "gentle",
        optionC: "scary",
        correctAnswer: "gentle",
      }),
      shuffleOptions({
        question: "What did the story teach?",
        optionA: "Trust everyone",
        optionB: "Appearances can be wrong",
        optionC: "Never go outside",
        correctAnswer: "Appearances can be wrong",
      }),
      shuffleOptions({
        question: "The cock’s coat was described as ______.",
        optionA: "shiny",
        optionB: "rough",
        optionC: "soft",
        correctAnswer: "rough",
      }),
      shuffleOptions({
        question: "The cat invited the mouse to ______.",
        optionA: "dance",
        optionB: "embrace",
        optionC: "play",
        correctAnswer: "embrace",
      }),
      shuffleOptions({
        question: "What kind of animal is a “mouser”?",
        optionA: "One that runs fast",
        optionB: "One that catches mice",
        optionC: "One that sings",
        correctAnswer: "One that catches mice",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The son mouse thought he was ______ enough to explore.",
        optionA: "weak",
        optionB: "grown-up",
        optionC: "small",
        correctAnswer: "grown-up",
      }),
      shuffleOptions({
        question: "The mother mouse was very ______.",
        optionA: "careless",
        optionB: "wise",
        optionC: "rude",
        correctAnswer: "wise",
      }),
      shuffleOptions({
        question: "The world is not always as it ______.",
        optionA: "smells",
        optionB: "seems",
        optionC: "sounds",
        correctAnswer: "seems",
      }),
      shuffleOptions({
        question: "The son mouse ran when he saw the ______.",
        optionA: "cock",
        optionB: "cat",
        optionC: "queen",
        correctAnswer: "cock",
      }),
      shuffleOptions({
        question: "The mouse wanted to make the cat his ______.",
        optionA: "pet",
        optionB: "friend",
        optionC: "meal",
        correctAnswer: "friend",
      }),
      shuffleOptions({
        question: "The cock had a rough ______.",
        optionA: "tail",
        optionB: "coat",
        optionC: "wing",
        correctAnswer: "coat",
      }),
      shuffleOptions({
        question: "The cat was actually a ______.",
        optionA: "mouse",
        optionB: "mouser",
        optionC: "monster",
        correctAnswer: "mouser",
      }),
      shuffleOptions({
        question: "The mouse lived in a ______.",
        optionA: "hole",
        optionB: "tree",
        optionC: "cage",
        correctAnswer: "hole",
      }),
      shuffleOptions({
        question: "The mother mouse told the son about ______ animals.",
        optionA: "friendly",
        optionB: "clever",
        optionC: "colourful",
        correctAnswer: "clever",
      }),
      shuffleOptions({
        question: "The son mouse realised he still had to ______.",
        optionA: "eat",
        optionB: "grow",
        optionC: "learn",
        correctAnswer: "learn",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cat really wanted to hug the mouse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cock was a dangerous creature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mother mouse didn’t care for her son.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mouse judged the cat by her appearance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cat killed the son mouse in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The son mouse was too small to understand the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cock spoke kindly to the mouse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story teaches us to be alert and careful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cat had soft fur and friendly eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cock wore a hat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
