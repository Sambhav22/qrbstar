export const chapter = "Chapter - 13: Creatures of Every Kind";
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
        question: "Who likes mice in the poem?",
        optionA: "The poet",
        optionB: "Everyone",
        optionC: "Nobody",
        correctAnswer: "The poet",
      }),
      shuffleOptions({
        question: "What do mice not have?",
        optionA: "Chins",
        optionB: "Ears",
        optionC: "Tails",
        correctAnswer: "Chins",
      }),
      shuffleOptions({
        question: "What do mice do that they shouldn’t?",
        optionA: "Nibble things",
        optionB: "Scratch doors",
        optionC: "Dig holes",
        correctAnswer: "Nibble things",
      }),
      shuffleOptions({
        question: "Who is the poet?",
        optionA: "Rose Fyleman",
        optionB: "Ruskin Bond",
        optionC: "Lewis Carroll",
        correctAnswer: "Rose Fyleman",
      }),
      shuffleOptions({
        question: "Where do mice run about in the poem?",
        optionA: "Garden",
        optionB: "House",
        optionC: "Park",
        correctAnswer: "House",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mice have long ______.",
        optionA: "Tails",
        optionB: "Ears",
        optionC: "Legs",
        correctAnswer: "Tails",
      }),
      shuffleOptions({
        question: "Mice’s faces are ______.",
        optionA: "Small",
        optionB: "Big",
        optionC: "Round",
        correctAnswer: "Small",
      }),
      shuffleOptions({
        question: "The ears of mice are ______.",
        optionA: "Pink",
        optionB: "Black",
        optionC: "Brown",
        correctAnswer: "Pink",
      }),
      shuffleOptions({
        question: "The teeth of mice are ______.",
        optionA: "White",
        optionB: "Yellow",
        optionC: "Red",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "Mice run about the house at ______.",
        optionA: "Night",
        optionB: "Morning",
        optionC: "Noon",
        correctAnswer: "Night",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mice’s faces are big.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The poet dislikes mice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mice have no chins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mice’s ears are black.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mice nibble things they shouldn’t touch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
