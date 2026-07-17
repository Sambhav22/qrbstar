export const chapter = "Chapter - 15: I Wish I was";
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
        question: "Who wrote the poem I Wish I Was?",
        optionA: "William Blake",
        optionB: "William Wilson",
        optionC: "William Wordsworth",
        correctAnswer: "William Wilson",
      }),
      shuffleOptions({
        question: "Which animal is called the king of the water?",
        optionA: "Eagle",
        optionB: "Whale",
        optionC: "Tiger",
        correctAnswer: "Whale",
      }),
      shuffleOptions({
        question: "Which animal is described as stealthy?",
        optionA: "Tiger",
        optionB: "Puppy",
        optionC: "Eagle",
        correctAnswer: "Tiger",
      }),
      shuffleOptions({
        question: "Which animal is described as majestic?",
        optionA: "Puppy",
        optionB: "Whale",
        optionC: "Eagle",
        correctAnswer: "Eagle",
      }),
      shuffleOptions({
        question: "Which animal is described as inquisitive?",
        optionA: "Tiger",
        optionB: "Puppy",
        optionC: "Whale",
        correctAnswer: "Puppy",
      }),
      shuffleOptions({
        question: "The eagle swoops down to catch its –",
        optionA: "Toy",
        optionB: "Prey",
        optionC: "Friend",
        correctAnswer: "Prey",
      }),
      shuffleOptions({
        question: "The tiger’s thoughts are full of –",
        optionA: "Blood and slaughter",
        optionB: "Joy",
        optionC: "Water",
        correctAnswer: "Blood and slaughter",
      }),
      shuffleOptions({
        question: "The puppy shows a curious –",
        optionA: "Frown",
        optionB: "Smile",
        optionC: "Laugh",
        correctAnswer: "Frown",
      }),
      shuffleOptions({
        question: "The enormous animal the poet wishes to be is –",
        optionA: "Whale",
        optionB: "Tiger",
        optionC: "Eagle",
        correctAnswer: "Whale",
      }),
      shuffleOptions({
        question: "Who is imagining to be all these creatures?",
        optionA: "The Poet",
        optionB: "The Eagle",
        optionC: "The Tiger",
        correctAnswer: "The Poet",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The whale is described as ___",
        optionA: "Enormous",
        optionB: "Small",
        optionC: "Weak",
        correctAnswer: "Enormous",
      }),
      shuffleOptions({
        question: "The tiger prowls over the ___",
        optionA: "Plain",
        optionB: "Forest",
        optionC: "River",
        correctAnswer: "Plain",
      }),
      shuffleOptions({
        question: "The eagle is scanning a ___",
        optionA: "Desert",
        optionB: "Canopy",
        optionC: "Ocean",
        correctAnswer: "Canopy",
      }),
      shuffleOptions({
        question: "The puppy is chasing its ___",
        optionA: "Tail",
        optionB: "Shadow",
        optionC: "Friend",
        correctAnswer: "Tail",
      }),
      shuffleOptions({
        question: "The puppy looked round a lamp ___",
        optionA: "Post",
        optionB: "Pole",
        optionC: "Tree",
        correctAnswer: "Post",
      }),
      shuffleOptions({
        question: "The eagle swooped ___",
        optionA: "Down",
        optionB: "Up",
        optionC: "Round",
        correctAnswer: "Down",
      }),
      shuffleOptions({
        question: "The tiger’s thoughts are full of ___",
        optionA: "Slaughter",
        optionB: "Milk",
        optionC: "Fear",
        correctAnswer: "Slaughter",
      }),
      shuffleOptions({
        question: "The poet describes the whale as ___",
        optionA: "Plunging through the blue",
        optionB: "Jumping on land",
        optionC: "Flying in the sky",
        correctAnswer: "Plunging through the blue",
      }),
      shuffleOptions({
        question: "The puppy showed a curious ___",
        optionA: "Frown",
        optionB: "Smile",
        optionC: "Bark",
        correctAnswer: "Frown",
      }),
      shuffleOptions({
        question: "The eagle spotted its ___",
        optionA: "Prey",
        optionB: "Nest",
        optionC: "Toy",
        correctAnswer: "Prey",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poet wishes to be a blue whale.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet wishes to be a lion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The eagle scans a sun-dappled canopy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tiger’s thoughts are full of joy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The puppy is inquisitive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The whale is described as small.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The eagle swoops to catch its prey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The puppy is lazy in the poem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The poet’s name is William Wilson.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tiger prowls over the plain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
