export const chapter = "Chapter - 8: A Pair of Silk Stockings";
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
        question: "What meal had Mrs. Sommers forgotten to eat?",
        optionA: "breakfast",
        optionB: "luncheon",
        optionC: "dinner",
        correctAnswer: "luncheon",
      }),
      shuffleOptions({
        question: "The stockings were reduced from what price?",
        optionA: "$2.50 to $1.98",
        optionB: "$2.00 to $1.00",
        optionC: "$5.00 to $2.00",
        correctAnswer: "$2.50 to $1.98",
      }),
      shuffleOptions({
        question: "Where did Mrs. Sommers first change into her new stockings?",
        optionA: "restaurant",
        optionB: "waiting-room",
        optionC: "theatre",
        correctAnswer: "waiting-room",
      }),
      shuffleOptions({
        question: "How did the shoe salesman find her behaviour?",
        optionA: "careless",
        optionB: "fastidious",
        optionC: "impatient",
        correctAnswer: "fastidious",
      }),
      shuffleOptions({
        question: "What kind of gloves did she buy?",
        optionA: "long-wristed",
        optionB: "short cotton",
        optionC: "second-hand",
        correctAnswer: "long-wristed",
      }),
      shuffleOptions({
        question: "What reading material did she purchase?",
        optionA: "novels",
        optionB: "magazines",
        optionC: "newspapers",
        correctAnswer: "magazines",
      }),
      shuffleOptions({
        question: "What covered the tables in the restaurant?",
        optionA: "plain cotton",
        optionB: "spotless damask",
        optionC: "coloured linen",
        correctAnswer: "spotless damask",
      }),
      shuffleOptions({
        question: "The waiter bowed before her as if she were?",
        optionA: "a friend",
        optionB: "a princess of royal blood",
        optionC: "a neighbour",
        correctAnswer: "a princess of royal blood",
      }),
      shuffleOptions({
        question: "Who sat next to her in the theatre?",
        optionA: "a gaudy woman",
        optionB: "a rich man",
        optionC: "a neighbour",
        correctAnswer: "a gaudy woman",
      }),
      shuffleOptions({
        question: "How did she respond to the play?",
        optionA: "laughed and wept",
        optionB: "only laughed",
        optionC: "only wept",
        correctAnswer: "laughed and wept",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The stockings glided through her fingers like ___.",
        optionA: "ribbons",
        optionB: "serpent-like",
        optionC: "threads",
        correctAnswer: "serpent-like",
      }),
      shuffleOptions({
        question: "Her shabby shopping bag seemed too big for the ___.",
        optionA: "gloves",
        optionB: "small parcel",
        optionC: "books",
        correctAnswer: "small parcel",
      }),
      shuffleOptions({
        question: "She admired her ___ gloved hand.",
        optionA: "wrinkled",
        optionB: "symmetrical",
        optionC: "rough",
        correctAnswer: "symmetrical",
      }),
      shuffleOptions({
        question: "Her new look gave her a sense of ___.",
        optionA: "assurance",
        optionB: "guilt",
        optionC: "sorrow",
        correctAnswer: "assurance",
      }),
      shuffleOptions({
        question: "While waiting in the restaurant, she read a ___.",
        optionA: "magazine",
        optionB: "letter",
        optionC: "novel",
        correctAnswer: "magazine",
      }),
      shuffleOptions({
        question: "She ordered a nice bite and a small cup of ___.",
        optionA: "black coffee",
        optionB: "tea",
        optionC: "milk",
        correctAnswer: "black coffee",
      }),
      shuffleOptions({
        question: "The music in the restaurant was ___.",
        optionA: "soft and pleasing",
        optionB: "loud",
        optionC: "absent",
        correctAnswer: "soft and pleasing",
      }),
      shuffleOptions({
        question: "The theatre was almost ___.",
        optionA: "packed",
        optionB: "empty",
        optionC: "closed",
        correctAnswer: "packed",
      }),
      shuffleOptions({
        question: "The gaudy woman shared her ___.",
        optionA: "box of candy",
        optionB: "handkerchief",
        optionC: "purse",
        correctAnswer: "box of candy",
      }),
      shuffleOptions({
        question: "In the cable car, the man tried to ___ her face.",
        optionA: "decipher",
        optionB: "ignore",
        optionC: "admire",
        correctAnswer: "decipher",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mrs. Sommers had once lived better days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "She spent the money only on her children’s needs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The stockings were originally priced at $2.50.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "She felt ashamed when she entered the restaurant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The waiter treated her with respect.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The magazines she bought were cheap ones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The gaudy woman cried with Mrs. Sommers at the play.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mrs. Sommers gave candy to the gaudy woman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "She wished the cable car would go on forever.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The man in the cable car clearly understood her feelings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
