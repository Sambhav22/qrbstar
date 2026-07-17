export const chapter = "Chapter - 8: The Third Wish";
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
        question: "Who was driving in the forest at dusk?",
        optionA: "John",
        optionB: "Peter",
        optionC: "Rhea",
        correctAnswer: "Peter",
      }),
      shuffleOptions({
        question: "What did Peter hear while driving?",
        optionA: "Laughing",
        optionB: "Crying",
        optionC: "Singing",
        correctAnswer: "Crying",
      }),
      shuffleOptions({
        question: "What kind of bird was trapped in the thorns?",
        optionA: "Swan",
        optionB: "Crow",
        optionC: "Eagle",
        correctAnswer: "Swan",
      }),
      shuffleOptions({
        question: "Who did the swan turn into?",
        optionA: "King of the Forest",
        optionB: "A farmer",
        optionC: "An angel",
        correctAnswer: "King of the Forest",
      }),
      shuffleOptions({
        question: "What did the King give Peter?",
        optionA: "Two coins",
        optionB: "Three wishes",
        optionC: "Three jewels",
        correctAnswer: "Three wishes",
      }),
      shuffleOptions({
        question: "What was Peter’s first wish?",
        optionA: "Wealth",
        optionB: "A wife as beautiful as the forest",
        optionC: "A palace",
        correctAnswer: "A wife as beautiful as the forest",
      }),
      shuffleOptions({
        question: "What pleased Leita the most in Peter’s house?",
        optionA: "The cows",
        optionB: "The river",
        optionC: "The candlesticks",
        correctAnswer: "The river",
      }),
      shuffleOptions({
        question: "What was the name of Leita’s sister?",
        optionA: "Rhea",
        optionB: "Mira",
        optionC: "Sita",
        correctAnswer: "Rhea",
      }),
      shuffleOptions({
        question: "Who laughed harshly when Peter used his second wish?",
        optionA: "The King of the Forest",
        optionB: "Peter",
        optionC: "Leita",
        correctAnswer: "The King of the Forest",
      }),
      shuffleOptions({
        question: "How many wishes did Peter finally use?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Two",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Peter was driving in the ______.",
        optionA: "forest",
        optionB: "village",
        optionC: "city",
        correctAnswer: "forest",
      }),
      shuffleOptions({
        question: "The swan’s eyes were ______ in colour.",
        optionA: "green",
        optionB: "yellow",
        optionC: "brown",
        correctAnswer: "yellow",
      }),
      shuffleOptions({
        question: "The little man wore clothes of ______.",
        optionA: "black",
        optionB: "green",
        optionC: "white",
        correctAnswer: "green",
      }),
      shuffleOptions({
        question: "Peter kept two leaves safely in his ______.",
        optionA: "notecase",
        optionB: "bag",
        optionC: "cap",
        correctAnswer: "notecase",
      }),
      shuffleOptions({
        question: "Leita’s hair was compared to ______.",
        optionA: "golden silk",
        optionB: "dusky bushes",
        optionC: "shining pearls",
        correctAnswer: "dusky bushes",
      }),
      shuffleOptions({
        question: "Leita often spent time near the ______.",
        optionA: "river",
        optionB: "forest path",
        optionC: "mountain",
        correctAnswer: "river",
      }),
      shuffleOptions({
        question: "Peter built a ______ by the river for Leita.",
        optionA: "hut",
        optionB: "seat",
        optionC: "bridge",
        correctAnswer: "seat",
      }),
      shuffleOptions({
        question: "Leita longed for the feel of water sliding over her ______.",
        optionA: "feathers",
        optionB: "hands",
        optionC: "hair",
        correctAnswer: "feathers",
      }),
      shuffleOptions({
        question: "When Peter turned Leita back, she became a ______.",
        optionA: "swan",
        optionB: "cat",
        optionC: "fairy",
        correctAnswer: "swan",
      }),
      shuffleOptions({
        question: "Peter never used his ______ wish.",
        optionA: "first",
        optionB: "third",
        optionC: "second",
        correctAnswer: "third",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Peter heard birds singing at dusk when he stopped his car.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The swan thrashed dangerously with its wings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The King of the Forest looked friendly when he appeared.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Peter wanted riches more than companionship.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Leita served Peter earnestly as his wife.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Peter suggested a trip around the world to cheer Leita.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Leita’s sister’s name was Rhea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Peter turned Leita into a swan with his second wish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Peter used his third wish to become a swan himself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In the end, Peter often saw two swans near his house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
