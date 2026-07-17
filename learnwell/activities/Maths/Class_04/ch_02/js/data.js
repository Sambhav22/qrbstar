export const chapter = "Chapter - 2: The Little Plant";
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
        question: "Where was the little plant lying?",
        optionA: "In a pot",
        optionB: "In the heart of a seed",
        optionC: "On the ground",
        correctAnswer: "In the heart of a seed",
      }),
      shuffleOptions({
        question: "What was the plant doing inside the seed?",
        optionA: "Sleeping",
        optionB: "Dancing",
        optionC: "Reading",
        correctAnswer: "Sleeping",
      }),
      shuffleOptions({
        question: "Who asked the little plant to wake?",
        optionA: "Moon and stars",
        optionB: "Sunshine and raindrops",
        optionC: "Wind and thunder",
        correctAnswer: "Sunshine and raindrops",
      }),
      shuffleOptions({
        question: "What did the sunshine say?",
        optionA: "Sleep more",
        optionB: "Wake and creep to the light",
        optionC: "Play with me",
        correctAnswer: "Wake and creep to the light",
      }),
      shuffleOptions({
        question: "What did the raindrops say?",
        optionA: "Wake",
        optionB: "Shine",
        optionC: "Sleep",
        correctAnswer: "Wake",
      }),
      shuffleOptions({
        question: "Who wrote the poem The Little Plant?",
        optionA: "K.L. Brown",
        optionB: "William Wordsworth",
        optionC: "Rabindranath Tagore",
        correctAnswer: "K.L. Brown",
      }),
      shuffleOptions({
        question: "The little plant rose to ______.",
        optionA: "Eat",
        optionB: "See",
        optionC: "Hide",
        correctAnswer: "See",
      }),
      shuffleOptions({
        question: "What did the little plant want to see?",
        optionA: "The inside of the seed",
        optionB: "The outside world",
        optionC: "The stars",
        correctAnswer: "The outside world",
      }),
      shuffleOptions({
        question: "The outside world was described as ______.",
        optionA: "Wonderful",
        optionB: "Terrible",
        optionC: "Empty",
        correctAnswer: "Wonderful",
      }),
      shuffleOptions({
        question: "Which two natural things helped the plant to grow?",
        optionA: "Sunshine and raindrops",
        optionB: "Wind and moon",
        optionC: "Soil and clouds",
        correctAnswer: "Sunshine and raindrops",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In the heart of a ______ lay fast asleep.",
        optionA: "flower",
        optionB: "seed",
        optionC: "root",
        correctAnswer: "seed",
      }),
      shuffleOptions({
        question: "“Wake,” said the ______.",
        optionA: "sunshine",
        optionB: "moon",
        optionC: "wind",
        correctAnswer: "sunshine",
      }),
      shuffleOptions({
        question: "“Wake,” said the voice of the ______ bright.",
        optionA: "raindrops",
        optionB: "clouds",
        optionC: "stars",
        correctAnswer: "raindrops",
      }),
      shuffleOptions({
        question: "The little plant ______ the call.",
        optionA: "ignored",
        optionB: "heard",
        optionC: "forgot",
        correctAnswer: "heard",
      }),
      shuffleOptions({
        question: "And it rose to ______.",
        optionA: "see",
        optionB: "sleep",
        optionC: "eat",
        correctAnswer: "see",
      }),
      shuffleOptions({
        question: "The plant was lying ______.",
        optionA: "in the heart of a seed",
        optionB: "on a leaf",
        optionC: "near the river",
        correctAnswer: "in the heart of a seed",
      }),
      shuffleOptions({
        question: "The world outside was ______.",
        optionA: "wonderful",
        optionB: "dark",
        optionC: "empty",
        correctAnswer: "wonderful",
      }),
      shuffleOptions({
        question: "The sunshine told the plant to ______.",
        optionA: "creep to the light",
        optionB: "go to sleep",
        optionC: "stay quiet",
        correctAnswer: "creep to the light",
      }),
      shuffleOptions({
        question: "The raindrops were described as ______.",
        optionA: "bright",
        optionB: "weak",
        optionC: "dull",
        correctAnswer: "bright",
      }),
      shuffleOptions({
        question: "The poem describes how a ______ grows.",
        optionA: "bird",
        optionB: "plant",
        optionC: "fish",
        correctAnswer: "plant",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The little plant was asleep in the seed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The moon asked the plant to wake.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sunshine told the plant to wake.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The raindrops told the plant to creep to the light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The little plant heard the call.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The outside world was described as terrible.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The little plant rose to see the outside world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sunshine and raindrops helped the plant grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poem was written by K.L. Brown.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The little plant stayed inside the seed forever.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
