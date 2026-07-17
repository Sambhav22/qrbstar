export const chapter = "Chapter - 14: The Lady, or The Tiger?";
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
        question: "Who sat high on the throne during the trial?",
        optionA: "The king",
        optionB: "The queen",
        optionC: "The minister",
        correctAnswer: "The king",
      }),
      shuffleOptions({
        question: "What did the king believe the arena provided to his people?",
        optionA: "Entertainment",
        optionB: "Refinement of minds",
        optionC: "Food",
        correctAnswer: "Refinement of minds",
      }),
      shuffleOptions({
        question: "Who selected the fiercest tiger?",
        optionA: "The king’s guards",
        optionB: "The audience",
        optionC: "The princess",
        correctAnswer: "The king’s guards",
      }),
      shuffleOptions({
        question: "Who selected the maiden for the accused?",
        optionA: "The king",
        optionB: "The princess",
        optionC: "The court people",
        correctAnswer: "The king",
      }),
      shuffleOptions({
        question: "How was the princess’s love described?",
        optionA: "Cold",
        optionB: "Warm and strong",
        optionC: "Indifferent",
        correctAnswer: "Warm and strong",
      }),
      shuffleOptions({
        question: "Who gave the signal to begin the trial?",
        optionA: "The king",
        optionB: "The guards",
        optionC: "The princess",
        correctAnswer: "The king",
      }),
      shuffleOptions({
        question: "What reaction did the crowd have on seeing the youth?",
        optionA: "They admired him",
        optionB: "They mocked him",
        optionC: "They ignored him",
        correctAnswer: "They admired him",
      }),
      shuffleOptions({
        question: "What emotion guided the princess’s decision?",
        optionA: "Hatred mixed with love",
        optionB: "Pity",
        optionC: "Indifference",
        correctAnswer: "Hatred mixed with love",
      }),
      shuffleOptions({
        question: "The story belongs to which genre?",
        optionA: "Romance",
        optionB: "Suspense",
        optionC: "Comedy",
        correctAnswer: "Suspense",
      }),
      shuffleOptions({
        question: "The main conflict in the story is between—",
        optionA: "Justice and cruelty",
        optionB: "Love and jealousy",
        optionC: "King and people",
        correctAnswer: "Love and jealousy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The king’s method of justice was called ______ justice.",
        optionA: "Poetic",
        optionB: "Royal",
        optionC: "Harsh",
        correctAnswer: "Poetic",
      }),
      shuffleOptions({
        question: "The audience left the arena with ______ hearts after punishment.",
        optionA: "Downcast",
        optionB: "Cheerful",
        optionC: "Hopeful",
        correctAnswer: "Downcast",
      }),
      shuffleOptions({
        question: "The king allowed no ______ arrangements to interfere with his scheme.",
        optionA: "Subordinate",
        optionB: "Royal",
        optionC: "Private",
        correctAnswer: "Subordinate",
      }),
      shuffleOptions({
        question: "The princess was loved by the king above all ______.",
        optionA: "Humanity",
        optionB: "Riches",
        optionC: "Soldiers",
        correctAnswer: "Humanity",
      }),
      shuffleOptions({
        question: "The youth walked across the arena with a ______ step.",
        optionA: "Firm and rapid",
        optionB: "Weak",
        optionC: "Shaky",
        correctAnswer: "Firm and rapid",
      }),
      shuffleOptions({
        question: "The princess knew the lady was one of the ______ of the court.",
        optionA: "Loveliest",
        optionB: "Oldest",
        optionC: "Poorest",
        correctAnswer: "Loveliest",
      }),
      shuffleOptions({
        question: "The princess raised her hand toward the door on the ______.",
        optionA: "Right",
        optionB: "Left",
        optionC: "Middle",
        correctAnswer: "Right",
      }),
      shuffleOptions({
        question: "The youth’s appearance was described as ______.",
        optionA: "Tall, handsome, fair",
        optionB: "Old and sickly",
        optionC: "Thin and weak",
        correctAnswer: "Tall, handsome, fair",
      }),
      shuffleOptions({
        question: "The princess spent nights in anguished ______.",
        optionA: "Deliberation",
        optionB: "Joy",
        optionC: "Ignorance",
        correctAnswer: "Deliberation",
      }),
      shuffleOptions({
        question: "The story was written by ______ Stockton.",
        optionA: "Frank",
        optionB: "Robert",
        optionC: "Charles",
        correctAnswer: "Frank",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The arena was built to punish crime and reward virtue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The youth was accused of theft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The accused could open either of the two doors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The king’s method was guided by chance, not bias.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The princess openly told everyone the secret of the doors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The princess suspected the lady admired her lover.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The king wanted to test whether the youth was brave enough.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The princess signalled secretly to her lover.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story gives a clear answer to which door was opened.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The central theme is human emotions of jealousy and love.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
