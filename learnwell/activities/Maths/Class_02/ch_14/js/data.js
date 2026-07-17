export const chapter = "Chapter - 14: Data Handling";
export const noOfActivities = 3;
export var activityData;

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
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
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
        question: "What is a collection of facts called?",
        optionA: "Table",
        optionB: "Story",
        optionC: "Data",
        correctAnswer: "Data",
      }),
      shuffleOptions({
        question: "What is used to count items quickly?",
        optionA: "Drawings",
        optionB: "Tick marks",
        optionC: "Colours",
        correctAnswer: "Tick marks",
      }),
      shuffleOptions({
        question: "What do blocks in data handling show?",
        optionA: "Sounds",
        optionB: "Numbers",
        optionC: "Games",
        correctAnswer: "Numbers",
      }),
      shuffleOptions({
        question: "What helps us compare information easily?",
        optionA: "Block graph",
        optionB: "Sticker sheet",
        optionC: "Calendar",
        correctAnswer: "Block graph",
      }),
      shuffleOptions({
        question: "What is the process of arranging information in order called?",
        optionA: "Confusion",
        optionB: "Organisation of data",
        optionC: "Decoration",
        correctAnswer: "Organisation of data",
      }),
      shuffleOptions({
        question: "Which one is an example of data shown in the chapter?",
        optionA: "Clothes list of Mrs. Sahni",
        optionB: "Poem",
        optionC: "Song",
        correctAnswer: "Clothes list of Mrs. Sahni",
      }),
      shuffleOptions({
        question: "What helps us understand information clearly?",
        optionA: "Tables",
        optionB: "Pencils",
        optionC: "Erasers",
        correctAnswer: "Tables",
      }),
      shuffleOptions({
        question: "Which symbol is used to show counting?",
        optionA: "@",
        optionB: "✓",
        optionC: "&",
        correctAnswer: "✓",
      }),
      shuffleOptions({
        question: "If a table shows more shirts than pants, which item has the greater number?",
        optionA: "Pants",
        optionB: "Shirts",
        optionC: "Both equal",
        correctAnswer: "Shirts",
      }),
      shuffleOptions({
        question: "What do we use to show numbers in a block graph?",
        optionA: "Pictures",
        optionB: "Blocks",
        optionC: "Words",
        correctAnswer: "Blocks",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Data helps us to ________ information.",
        optionA: "hide",
        optionB: "understand",
        optionC: "forget",
        correctAnswer: "understand",
      }),
      shuffleOptions({
        question: "________ marks are used to show counting.",
        optionA: "Star",
        optionB: "Tick",
        optionC: "Cross",
        correctAnswer: "Tick",
      }),
      shuffleOptions({
        question: "A table makes the information look ________.",
        optionA: "messy",
        optionB: "organised",
        optionC: "mixed up",
        correctAnswer: "organised",
      }),
      shuffleOptions({
        question: "Blocks are used to show the ________ of items.",
        optionA: "number",
        optionB: "price",
        optionC: "colour",
        correctAnswer: "number",
      }),
      shuffleOptions({
        question: "________ of data means arranging it neatly.",
        optionA: "Organisation",
        optionB: "Erasing",
        optionC: "Drawing",
        correctAnswer: "Organisation",
      }),
      shuffleOptions({
        question: "A list of clothes is an example of ________.",
        optionA: "data",
        optionB: "a game",
        optionC: "a poem",
        correctAnswer: "data",
      }),
      shuffleOptions({
        question: "Tick marks help in ________ items quickly.",
        optionA: "hiding",
        optionB: "counting",
        optionC: "colouring",
        correctAnswer: "counting",
      }),
      shuffleOptions({
        question: "A block graph shows information using ________.",
        optionA: "blocks",
        optionB: "rulers",
        optionC: "pens",
        correctAnswer: "blocks",
      }),
      shuffleOptions({
        question: "When we list things, we ________ data.",
        optionA: "organise",
        optionB: "lose",
        optionC: "delete",
        correctAnswer: "organise",
      }),
      shuffleOptions({
        question: "More tick marks mean the number is ________.",
        optionA: "greater",
        optionB: "smaller",
        optionC: "zero",
        correctAnswer: "greater",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Data is a collection of facts or information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tick marks are used to decorate pages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A block graph shows numbers with the help of blocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A table helps us understand data easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A list made by Mrs. Sahni is an example of data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Organisation of data means mixing up information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Blocks and tick marks both help in showing numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Data handling includes presenting data in tables and graphs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "More blocks in a graph mean fewer items.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A table cannot be used to compare items.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
