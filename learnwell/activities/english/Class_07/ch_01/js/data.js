export const chapter = "Chapter - 1: The Interlopers";
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
        question: "What did Ulrich carry with him on a winter night?",
        optionA: "Flask of hot water",
        optionB: "Torch",
        optionC: "Lantern",
        correctAnswer: "Flask of hot water",
      }),
      shuffleOptions({
        question: "Why was the disputed strip of land so important?",
        optionA: "Full of animals",
        optionB: "Jealously guarded",
        optionC: "Near river",
        correctAnswer: "Jealously guarded",
      }),
      shuffleOptions({
        question: "What blinded Georg’s eyes?",
        optionA: "Snow",
        optionB: "Blood",
        optionC: "Dust",
        correctAnswer: "Blood",
      }),
      shuffleOptions({
        question: "Who wrote the story 'The Interlopers'?",
        optionA: "Saki",
        optionB: "O Henry",
        optionC: "Premchand",
        correctAnswer: "Saki",
      }),
      shuffleOptions({
        question: "What was Ulrich’s wish when alone in the forest?",
        optionA: "To hunt",
        optionB: "To meet Georg",
        optionC: "To rest",
        correctAnswer: "To meet Georg",
      }),
      shuffleOptions({
        question: "What saved Ulrich’s feet from being crushed?",
        optionA: "Thick socks",
        optionB: "Shooting boots",
        optionC: "Tree roots",
        correctAnswer: "Shooting boots",
      }),
      shuffleOptions({
        question: "What did Ulrich suggest they should shout for?",
        optionA: "Dogs",
        optionB: "Men",
        optionC: "Help",
        correctAnswer: "Help",
      }),
      shuffleOptions({
        question: "Who was head of the Znaeym family?",
        optionA: "Ulrich",
        optionB: "Georg",
        optionC: "Karl",
        correctAnswer: "Georg",
      }),
      shuffleOptions({
        question: "What change came over Ulrich during the accident?",
        optionA: "He became friendly",
        optionB: "He became angry",
        optionC: "He became unconscious",
        correctAnswer: "He became friendly",
      }),
      shuffleOptions({
        question: "What did Georg agree to never do again?",
        optionA: "Hunt animals",
        optionB: "Fire shot on Ulrich’s land",
        optionC: "Go to town",
        correctAnswer: "Fire shot on Ulrich’s land",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ulrich von Gradwitz patrolled the forest in search of _______.",
        optionA: "a deer",
        optionB: "Georg",
        optionC: "a wolf",
        correctAnswer: "Georg",
      }),
      shuffleOptions({
        question: "The quarrel between the two families was over a strip of _______.",
        optionA: "marsh",
        optionB: "forest land",
        optionC: "castle",
        correctAnswer: "forest land",
      }),
      shuffleOptions({
        question: "Ulrich and Georg were trapped under a fallen _______.",
        optionA: "oak tree",
        optionB: "beech tree",
        optionC: "pine tree",
        correctAnswer: "beech tree",
      }),
      shuffleOptions({
        question: "Ulrich carried a flask of _______ with him.",
        optionA: "hot water",
        optionB: "milk",
        optionC: "wine",
        correctAnswer: "hot water",
      }),
      shuffleOptions({
        question: "Georg laughed _______ at Ulrich’s plight.",
        optionA: "kindly",
        optionB: "mockingly",
        optionC: "softly",
        correctAnswer: "mockingly",
      }),
      shuffleOptions({
        question: "The feud was carried forward for _______ generations.",
        optionA: "one",
        optionB: "three",
        optionC: "five",
        correctAnswer: "three",
      }),
      shuffleOptions({
        question: "Ulrich’s men were supposed to follow him after _______ minutes.",
        optionA: "ten",
        optionB: "twenty",
        optionC: "thirty",
        correctAnswer: "ten",
      }),
      shuffleOptions({
        question: "Georg’s eyes were blinded by flowing _______.",
        optionA: "sweat",
        optionB: "blood",
        optionC: "tears",
        correctAnswer: "blood",
      }),
      shuffleOptions({
        question: "The two men shouted together for _______.",
        optionA: "fun",
        optionB: "help",
        optionC: "dogs",
        correctAnswer: "help",
      }),
      shuffleOptions({
        question: "In the end, Ulrich saw _______ approaching.",
        optionA: "wolves",
        optionB: "men",
        optionC: "horses",
        correctAnswer: "wolves",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ulrich and Georg were childhood friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The land dispute started in the days of Ulrich’s grandfather.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Both Ulrich and Georg were pinned by the same fallen tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ulrich hated Georg since childhood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Georg offered Ulrich a drink from his flask.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "They both agreed to bury their old quarrel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The storm brought the tree down on them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Georg’s men reached first and rescued both.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ulrich and Georg thought of becoming friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the end, wolves approached instead of men.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
