export const chapter = "Chapter - 2: Do the right";
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
        question: "Who should we try to be like?",
        optionA: "A rich man",
        optionB: "A good man",
        optionC: "A bad man",
        correctAnswer: "A good man",
      }),
      shuffleOptions({
        question: "What should be our aim?",
        optionA: "To play games",
        optionB: "To be wrong",
        optionC: "To do the right",
        correctAnswer: "To do the right",
      }),
      shuffleOptions({
        question: "What does the poem ask us to stand by?",
        optionA: "Lies",
        optionB: "What is true",
        optionC: "Bad friends",
        correctAnswer: "What is true",
      }),
      shuffleOptions({
        question: "What name do we win by doing the right?",
        optionA: "Bad man’s name",
        optionB: "No man’s name",
        optionC: "Good man’s name",
        correctAnswer: "Good man’s name",
      }),
      shuffleOptions({
        question: "What does ‘nobly’ mean?",
        optionA: "Softly",
        optionB: "With good qualities",
        optionC: "Slowly",
        correctAnswer: "With good qualities",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Let’s try to do the ______, boys.",
        optionA: "best",
        optionB: "right",
        optionC: "most",
        correctAnswer: "right",
      }),
      shuffleOptions({
        question: "And makes the right his ______.",
        optionA: "dream",
        optionB: "aim",
        optionC: "name",
        correctAnswer: "aim",
      }),
      shuffleOptions({
        question: "Then try to do the ______, boys.",
        optionA: "right",
        optionB: "work",
        optionC: "play",
        correctAnswer: "right",
      }),
      shuffleOptions({
        question: "And win a good man’s ______.",
        optionA: "name",
        optionB: "game",
        optionC: "fame",
        correctAnswer: "name",
      }),
      shuffleOptions({
        question: "He is true who does his ______.",
        optionA: "work",
        optionB: "best",
        optionC: "test",
        correctAnswer: "best",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poem encourages us to do the right.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "‘Right’ and ‘Wrong’ mean the same thing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "'Aim' means to stop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "'Nobly' means with good qualities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poem tells us to win a good man’s name.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
