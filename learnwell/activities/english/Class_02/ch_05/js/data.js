export const chapter = "Chapter - 5: Six Little Mice";
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
  const optionsArray = [optionA, optionB, optionC];

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];
  object.optionC = optionsArray[2];

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who passed by the mice?",
        optionA: "Parrot",
        optionB: "Pussy",
        optionC: "Goat",
        correctAnswer: "Pussy",
      }),
      shuffleOptions({
        question: "How many mice are in the poem?",
        optionA: "Six",
        optionB: "Five",
        optionC: "Seven",
        correctAnswer: "Six",
      }),
      shuffleOptions({
        question: "What were the mice making?",
        optionA: "Blankets",
        optionB: "Coats",
        optionC: "Caps",
        correctAnswer: "Coats",
      }),
      shuffleOptions({
        question: "Who wanted to cut the threads?",
        optionA: "The dog",
        optionB: "The bird",
        optionC: "The cat",
        correctAnswer: "The cat",
      }),
      shuffleOptions({
        question: "What did the mice fear?",
        optionA: "The rain",
        optionB: "The cat biting their heads",
        optionC: "The dark",
        correctAnswer: "The cat biting their heads",
      }),
      shuffleOptions({
        question: "What was spinning?",
        optionA: "Threads",
        optionB: "Wheels",
        optionC: "Machines",
        correctAnswer: "Threads",
      }),
      shuffleOptions({
        question: "What did the mice refuse?",
        optionA: "Water",
        optionB: "Help",
        optionC: "Food",
        correctAnswer: "Help",
      }),
      shuffleOptions({
        question: "Did the cat promise not to bite?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Maybe",
        correctAnswer: "Yes",
      }),
      shuffleOptions({
        question: "Did the mice believe her?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Not sure",
        correctAnswer: "No",
      }),
      shuffleOptions({
        question: "Who are called 'little men' in the poem?",
        optionA: "Mice",
        optionB: "Cats",
        optionC: "Dogs",
        correctAnswer: "Mice",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Pussy passed by and she ______ in.",
        optionA: "peeped",
        optionB: "jumped",
        optionC: "danced",
        correctAnswer: "peeped",
      }),
      shuffleOptions({
        question: "Six little mice sat down to ______.",
        optionA: "run",
        optionB: "spin",
        optionC: "play",
        correctAnswer: "spin",
      }),
      shuffleOptions({
        question: "'Weaving coats for ______.'",
        optionA: "animals",
        optionB: "women",
        optionC: "gentlemen",
        correctAnswer: "gentlemen",
      }),
      shuffleOptions({
        question: "'You'll bite off our ______.'",
        optionA: "tails",
        optionB: "heads",
        optionC: "hands",
        correctAnswer: "heads",
      }),
      shuffleOptions({
        question: "'That may be so, but you don't come ______.'",
        optionA: "near",
        optionB: "out",
        optionC: "in",
        correctAnswer: "in",
      }),
      shuffleOptions({
        question: "'Shall I come in and cut off your ______?'",
        optionA: "nose",
        optionB: "threads",
        optionC: "tail",
        correctAnswer: "threads",
      }),
      shuffleOptions({
        question: "The mice were ______ a coat.",
        optionA: "buying",
        optionB: "weaving",
        optionC: "throwing",
        correctAnswer: "weaving",
      }),
      shuffleOptions({
        question: "The cat offered to ______.",
        optionA: "eat",
        optionB: "help",
        optionC: "sleep",
        correctAnswer: "help",
      }),
      shuffleOptions({
        question: "The mice said, 'No, no, Mistress ______.'",
        optionA: "Cat",
        optionB: "Pussy",
        optionC: "Rat",
        correctAnswer: "Pussy",
      }),
      shuffleOptions({
        question: "The mice sat down to ______.",
        optionA: "eat",
        optionB: "spin",
        optionC: "jump",
        correctAnswer: "spin",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Six little mice were weaving socks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pussy offered to help them spin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The mice let the cat come in.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The poem has only four mice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mice were afraid of the cat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cat said she would eat them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mice believed the cat completely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The poem is about animals in the forest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The mice were weaving coats for themselves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cat's name is Pussy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;