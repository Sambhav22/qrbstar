export const chapter = "Chapter - 2: The Mystical Formula";
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
        question: "Who impressed Manu with his sermon?",
        optionA: "A king",
        optionB: "An ascetic",
        optionC: "A soldier",
        correctAnswer: "An ascetic",
      }),
      shuffleOptions({
        question: "Manu wanted to serve –",
        optionA: "The king",
        optionB: "Humanity",
        optionC: "The old man",
        correctAnswer: "Humanity",
      }),
      shuffleOptions({
        question: "Who gave Manu a place to stay at night?",
        optionA: "The prince",
        optionB: "The old man",
        optionC: "The landlord",
        correctAnswer: "The old man",
      }),
      shuffleOptions({
        question: "What had happened to the old man’s son?",
        optionA: "He had fever",
        optionB: "His leg was crushed under a stone",
        optionC: "He was blind",
        correctAnswer: "His leg was crushed under a stone",
      }),
      shuffleOptions({
        question: "Who gave ten gold coins to the old man?",
        optionA: "The prince",
        optionB: "The landlord",
        optionC: "The king",
        correctAnswer: "The landlord",
      }),
      shuffleOptions({
        question: "What happened to the landlord’s wife after touching the cloth?",
        optionA: "She was cured",
        optionB: "She fainted",
        optionC: "She worsened",
        correctAnswer: "She was cured",
      }),
      shuffleOptions({
        question: "Who ordered soldiers to bring Manu before the king?",
        optionA: "The landlord",
        optionB: "The old man",
        optionC: "The king",
        correctAnswer: "The king",
      }),
      shuffleOptions({
        question: "What did Manu finally do to the prince?",
        optionA: "He gave him food",
        optionB: "He cured him",
        optionC: "He ignored him",
        correctAnswer: "He cured him",
      }),
      shuffleOptions({
        question: "What did the king gift the old man?",
        optionA: "Half of the kingdom",
        optionB: "One thousand gold coins",
        optionC: "A palace",
        correctAnswer: "One thousand gold coins",
      }),
      shuffleOptions({
        question: "What change came into Manu later?",
        optionA: "He became dejected",
        optionB: "He became proud",
        optionC: "He became rich",
        correctAnswer: "He became proud",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Manu listened to the ascetic’s ______ carefully.",
        optionA: "Song",
        optionB: "Sermon",
        optionC: "Story",
        correctAnswer: "Sermon",
      }),
      shuffleOptions({
        question: "The mystical power would vanish if Manu showed ______.",
        optionA: "Kindness",
        optionB: "Pride",
        optionC: "Patience",
        correctAnswer: "Pride",
      }),
      shuffleOptions({
        question: "The old man’s son worked in a ______.",
        optionA: "Flour mill",
        optionB: "Palace",
        optionC: "School",
        correctAnswer: "Flour mill",
      }),
      shuffleOptions({
        question: "Manu chanted the formula on a piece of ______.",
        optionA: "Cloth",
        optionB: "Paper",
        optionC: "Wood",
        correctAnswer: "Cloth",
      }),
      shuffleOptions({
        question: "The landlord promised the old man ______ gold coins.",
        optionA: "Five",
        optionB: "Ten",
        optionC: "Twenty",
        correctAnswer: "Ten",
      }),
      shuffleOptions({
        question: "The king threatened the landlord with ______.",
        optionA: "Imprisonment",
        optionB: "Reward",
        optionC: "Silence",
        correctAnswer: "Imprisonment",
      }),
      shuffleOptions({
        question: "People began to treat Manu like an ______.",
        optionA: "Angel",
        optionB: "Servant",
        optionC: "Priest",
        correctAnswer: "Angel",
      }),
      shuffleOptions({
        question: "Manu now walked with his head held ______.",
        optionA: "Low",
        optionB: "High",
        optionC: "Bent",
        correctAnswer: "High",
      }),
      shuffleOptions({
        question: "The mystical cloth could be used only ______.",
        optionA: "Once",
        optionB: "Twice",
        optionC: "Many times",
        correctAnswer: "Once",
      }),
      shuffleOptions({
        question: "Manu returned to his ______ in the end.",
        optionA: "Palace",
        optionB: "Village",
        optionC: "Temple",
        correctAnswer: "Village",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Manu was impressed by the ascetic’s teachings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mystical formula could cure the sick and wounded.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The old man’s son had lost his eyesight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The landlord wanted to get reward from the king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The landlord’s wife was cured by the mystical cloth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The king rewarded the landlord for curing the prince.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The old man asked for gold coins from the king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Manu silently left the palace after curing the prince.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People hailed Manu and touched his feet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Manu finally forgot the mystical formula because of his pride.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
