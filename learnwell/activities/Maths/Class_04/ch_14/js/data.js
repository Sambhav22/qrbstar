export const chapter = "Chapter - 14: The Clever Jackal";
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
        question: "Who found the elephant first?",
        optionA: "Lion",
        optionB: "Jackal",
        optionC: "Wolf",
        correctAnswer: "Jackal",
      }),
      shuffleOptions({
        question: "Why could the jackal not eat the elephant?",
        optionA: "It was too small",
        optionB: "The skin was too hard",
        optionC: "It was poisonous",
        correctAnswer: "The skin was too hard",
      }),
      shuffleOptions({
        question: "Who came after the jackal?",
        optionA: "Wolf",
        optionB: "Lion",
        optionC: "Leopard",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "What did the lion say about the elephant?",
        optionA: "He would eat it",
        optionB: "He never ate dead animals",
        optionC: "He wanted to share it",
        correctAnswer: "He never ate dead animals",
      }),
      shuffleOptions({
        question: "Who tore the elephant’s skin?",
        optionA: "Jackal",
        optionB: "Leopard",
        optionC: "Wolf",
        correctAnswer: "Leopard",
      }),
      shuffleOptions({
        question: "Why did the leopard run away?",
        optionA: "Jackal told him the lion was coming",
        optionB: "The wolf attacked him",
        optionC: "He was full",
        correctAnswer: "Jackal told him the lion was coming",
      }),
      shuffleOptions({
        question: "Who came last to eat the elephant?",
        optionA: "Leopard",
        optionB: "Wolf",
        optionC: "Lion",
        correctAnswer: "Wolf",
      }),
      shuffleOptions({
        question: "What did the wolf tell the jackal?",
        optionA: "To leave the place",
        optionB: "To call the lion",
        optionC: "To share the food",
        correctAnswer: "To leave the place",
      }),
      shuffleOptions({
        question: "How did the jackal chase away the wolf?",
        optionA: "By injuring him",
        optionB: "By scaring him",
        optionC: "By tricking him",
        correctAnswer: "By injuring him",
      }),
      shuffleOptions({
        question: "What is the main quality of the jackal in the story?",
        optionA: "Cleverness",
        optionB: "Strength",
        optionC: "Honesty",
        correctAnswer: "Cleverness",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The jackal found a dead ______ in the forest.",
        optionA: "wolf",
        optionB: "elephant",
        optionC: "lion",
        correctAnswer: "elephant",
      }),
      shuffleOptions({
        question: "The lion did not eat because it was already ______.",
        optionA: "hunted",
        optionB: "dead",
        optionC: "alive",
        correctAnswer: "dead",
      }),
      shuffleOptions({
        question: "The jackal thought of taking help from the ______.",
        optionA: "wolf",
        optionB: "leopard",
        optionC: "lion",
        correctAnswer: "leopard",
      }),
      shuffleOptions({
        question: "The leopard tore the elephant’s ______.",
        optionA: "ear",
        optionB: "skin",
        optionC: "tail",
        correctAnswer: "skin",
      }),
      shuffleOptions({
        question: "The jackal promised to stand ______ while the leopard ate.",
        optionA: "guard",
        optionB: "still",
        optionC: "far",
        correctAnswer: "guard",
      }),
      shuffleOptions({
        question: "The leopard ran away when told the ______ had come.",
        optionA: "wolf",
        optionB: "lion",
        optionC: "elephant",
        correctAnswer: "lion",
      }),
      shuffleOptions({
        question: "The jackal could not bite the elephant’s ______.",
        optionA: "skin",
        optionB: "trunk",
        optionC: "tail",
        correctAnswer: "skin",
      }),
      shuffleOptions({
        question: "The wolf wanted to eat the dead ______.",
        optionA: "lion",
        optionB: "elephant",
        optionC: "jackal",
        correctAnswer: "elephant",
      }),
      shuffleOptions({
        question: "The jackal drove the wolf away after ______ him.",
        optionA: "injuring",
        optionB: "praising",
        optionC: "ignoring",
        correctAnswer: "injuring",
      }),
      shuffleOptions({
        question: "The jackal ate the food ______.",
        optionA: "peacefully",
        optionB: "sadly",
        optionC: "quickly",
        correctAnswer: "peacefully",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The jackal thought the elephant was a great feast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lion ate the elephant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The leopard tore the elephant’s skin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The jackal shouted to scare the leopard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The wolf came after the leopard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The jackal was afraid of the wolf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The jackal injured the wolf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The wolf chased away the jackal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The jackal finally ate alone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cleverness helped the jackal to get food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
