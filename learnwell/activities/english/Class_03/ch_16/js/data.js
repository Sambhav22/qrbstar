export const chapter = "Chapter - 16: The Right Trick";
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
        question: "What did the king of Baghpan’s army capture easily?",
        optionA: "Villages outside Mahaur’s walls",
        optionB: "The fort of Mahaur",
        optionC: "The king of Mahaur",
        correctAnswer: "Villages outside Mahaur’s walls",
      }),
      shuffleOptions({
        question: "What was Mahaur famous for?",
        optionA: "Its gold mines",
        optionB: "Its prosperity",
        optionC: "Its army",
        correctAnswer: "Its prosperity",
      }),
      shuffleOptions({
        question: "Who decided to invade Mahaur?",
        optionA: "Khilji",
        optionB: "The king of Baghpan",
        optionC: "The minister of Mahaur",
        correctAnswer: "The king of Baghpan",
      }),
      shuffleOptions({
        question: "What was built to protect Mahaur?",
        optionA: "Fort gates",
        optionB: "Strong walls",
        optionC: "Moats",
        correctAnswer: "Strong walls",
      }),
      shuffleOptions({
        question: "Who suggested the goat trick?",
        optionA: "The minister",
        optionB: "A young girl",
        optionC: "The commander",
        correctAnswer: "A young girl",
      }),
      shuffleOptions({
        question: "How long did the siege last?",
        optionA: "2 months",
        optionB: "Over 3 months",
        optionC: "6 months",
        correctAnswer: "Over 3 months",
      }),
      shuffleOptions({
        question: "What did the people eat after rations finished?",
        optionA: "Animals",
        optionB: "Roots and leaves",
        optionC: "Bread",
        correctAnswer: "Animals",
      }),
      shuffleOptions({
        question: "Who convinced the king to listen to the girl?",
        optionA: "The minister",
        optionB: "An old man",
        optionC: "The commander",
        correctAnswer: "An old man",
      }),
      shuffleOptions({
        question: "Where was the goat sent?",
        optionA: "Into the forest",
        optionB: "Towards the enemy camp",
        optionC: "Into the river",
        correctAnswer: "Towards the enemy camp",
      }),
      shuffleOptions({
        question: "What did the enemy think after finding food in the goat’s belly?",
        optionA: "Mahaur was starving",
        optionB: "Mahaur had plenty of food",
        optionC: "Mahaur was ready to surrender",
        correctAnswer: "Mahaur had plenty of food",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The king of Mahaur was very ______.",
        optionA: "cruel",
        optionB: "caring",
        optionC: "selfish",
        correctAnswer: "caring",
      }),
      shuffleOptions({
        question: "Mahaur’s prosperity became an ______ for others.",
        optionA: "blessing",
        optionB: "eyesore",
        optionC: "asset",
        correctAnswer: "eyesore",
      }),
      shuffleOptions({
        question: "The king of Baghpan ordered his army to ______ Mahaur.",
        optionA: "surround",
        optionB: "attack from inside",
        optionC: "ignore",
        correctAnswer: "surround",
      }),
      shuffleOptions({
        question: "The people of Mahaur had enough food to last a couple of ______.",
        optionA: "days",
        optionB: "months",
        optionC: "weeks",
        correctAnswer: "months",
      }),
      shuffleOptions({
        question: "The young girl asked for a ______.",
        optionA: "sheep",
        optionB: "goat",
        optionC: "cow",
        correctAnswer: "goat",
      }),
      shuffleOptions({
        question: "The goat was fed ______ and gram.",
        optionA: "rice",
        optionB: "wheat",
        optionC: "maize",
        correctAnswer: "rice",
      }),
      shuffleOptions({
        question: "The goat was let out through the ______ of the fort.",
        optionA: "walls",
        optionB: "gates",
        optionC: "windows",
        correctAnswer: "gates",
      }),
      shuffleOptions({
        question: "The enemy soldiers ______ the goat.",
        optionA: "ignored",
        optionB: "caught",
        optionC: "chased away",
        correctAnswer: "caught",
      }),
      shuffleOptions({
        question: "The enemy left the siege thinking Mahaur had ______ food.",
        optionA: "plenty",
        optionB: "no",
        optionC: "little",
        correctAnswer: "plenty",
      }),
      shuffleOptions({
        question: "The people of Mahaur ______ the wise girl.",
        optionA: "ignored",
        optionB: "hailed",
        optionC: "scolded",
        correctAnswer: "hailed",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The king of Mahaur was selfish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mahaur had weak walls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Baghpan’s people were richer than Mahaur’s.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The siege lasted over three months.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The minister suggested the goat trick.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The goat was fed with rice and gram.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The goat was sent to the enemy camp.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The enemy thought Mahaur was starving.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The people of Mahaur praised the young girl.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The king did not listen to the girl at all.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
