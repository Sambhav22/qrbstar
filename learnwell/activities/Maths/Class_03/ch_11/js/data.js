export const chapter = "Chapter - 11: Khushi and Oscar";
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
        question: "Who was a naughty girl in the story?",
        optionA: "Anvi",
        optionB: "Khushi",
        optionC: "Rani",
        correctAnswer: "Khushi",
      }),
      shuffleOptions({
        question: "What sound did Khushi’s anklets make?",
        optionA: "Bark",
        optionB: "Chirp",
        optionC: "Jingle",
        correctAnswer: "Jingle",
      }),
      shuffleOptions({
        question: "Where did Khushi throw her socks?",
        optionA: "Under the bed",
        optionB: "On the sofa and under the chair",
        optionC: "In the basket",
        correctAnswer: "On the sofa and under the chair",
      }),
      shuffleOptions({
        question: "Who brought the puppy home?",
        optionA: "Anvi",
        optionB: "Khushi",
        optionC: "Mr. Kapil",
        correctAnswer: "Mr. Kapil",
      }),
      shuffleOptions({
        question: "What did Oscar chew first?",
        optionA: "Pillow",
        optionB: "Doll",
        optionC: "Spoon",
        correctAnswer: "Doll",
      }),
      shuffleOptions({
        question: "What did Oscar knock off from the table?",
        optionA: "Vase",
        optionB: "Pen stand",
        optionC: "Glass",
        correctAnswer: "Pen stand",
      }),
      shuffleOptions({
        question: "What was hanging on the door in the drawing room?",
        optionA: "Bedsheet",
        optionB: "Table cover",
        optionC: "Socks",
        correctAnswer: "Table cover",
      }),
      shuffleOptions({
        question: "What did Oscar do to the bedsheet?",
        optionA: "Folded it",
        optionB: "Pulled it down",
        optionC: "Sat on it",
        correctAnswer: "Pulled it down",
      }),
      shuffleOptions({
        question: "How did Khushi feel when Oscar tore her notebook?",
        optionA: "Happy",
        optionB: "Excited",
        optionC: "Desperate",
        correctAnswer: "Desperate",
      }),
      shuffleOptions({
        question: "What did Anvi ask Khushi to teach Oscar?",
        optionA: "Games",
        optionB: "Good habits",
        optionC: "Magic tricks",
        correctAnswer: "Good habits",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Khushi wore ______ on her feet.",
        optionA: "bracelets",
        optionB: "anklets",
        optionC: "bangles",
        correctAnswer: "anklets",
      }),
      shuffleOptions({
        question: "Her schoolbag was thrown on the ______.",
        optionA: "floor",
        optionB: "bed",
        optionC: "table",
        correctAnswer: "floor",
      }),
      shuffleOptions({
        question: "The remote-control was lying behind the ______.",
        optionA: "fridge",
        optionB: "cupboard",
        optionC: "sofa",
        correctAnswer: "sofa",
      }),
      shuffleOptions({
        question: "The flower-vase’s flowers were lying on the ______.",
        optionA: "floor",
        optionB: "table",
        optionC: "chair",
        correctAnswer: "floor",
      }),
      shuffleOptions({
        question: "Oscar chewed Khushi’s ______.",
        optionA: "pencil",
        optionB: "doll",
        optionC: "slipper",
        correctAnswer: "doll",
      }),
      shuffleOptions({
        question: "The pen stand was on the ______.",
        optionA: "bed",
        optionB: "chair",
        optionC: "table",
        correctAnswer: "table",
      }),
      shuffleOptions({
        question: "Oscar was called a ______ by Khushi.",
        optionA: "joy",
        optionB: "nuisance",
        optionC: "baby",
        correctAnswer: "nuisance",
      }),
      shuffleOptions({
        question: "Khushi is now teaching Oscar to be a ______ dog.",
        optionA: "naughty",
        optionB: "good",
        optionC: "big",
        correctAnswer: "good",
      }),
      shuffleOptions({
        question: "Anvi smiled and said it was to make Khushi realise her ______.",
        optionA: "mistake",
        optionB: "folly",
        optionC: "fun",
        correctAnswer: "folly",
      }),
      shuffleOptions({
        question: "The puppy Oscar was like a new ______ to Khushi.",
        optionA: "book",
        optionB: "friend",
        optionC: "toy",
        correctAnswer: "toy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Khushi was always a very tidy girl.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oscar was a kitten.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Khushi threw her water bottle near the door.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mr. Kapil never tried to help Anvi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The television volume was always low.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oscar tore Khushi’s notebook.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Khushi liked Oscar from the start and never complained.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Anvi smiled when Khushi complained about Oscar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Khushi learned to be tidy in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Oscar and Khushi became friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
