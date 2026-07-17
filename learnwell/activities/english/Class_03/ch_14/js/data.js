export const chapter = "Chapter - 14: The Magic Sticks";
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
        question: "Who gave the merchant the task to Tenali Raman?",
        optionA: "Courtier",
        optionB: "King",
        optionC: "Servant",
        correctAnswer: "King",
      }),
      shuffleOptions({
        question: "What was the thief asked to return?",
        optionA: "Gold",
        optionB: "All stolen money",
        optionC: "Clothes",
        correctAnswer: "All stolen money",
      }),
      shuffleOptions({
        question: "What material were the sticks made of?",
        optionA: "Wood",
        optionB: "Bamboo",
        optionC: "Metal",
        correctAnswer: "Bamboo",
      }),
      shuffleOptions({
        question: "How many inches did Tenali claim the thief’s stick would grow?",
        optionA: "Half inch",
        optionB: "One inch",
        optionC: "Two inches",
        correctAnswer: "One inch",
      }),
      shuffleOptions({
        question: "Who cut his stick?",
        optionA: "Merchant",
        optionB: "Thief",
        optionC: "King",
        correctAnswer: "Thief",
      }),
      shuffleOptions({
        question: "Who suggested the temple punishment?",
        optionA: "King",
        optionB: "Tenali Raman",
        optionC: "Merchant",
        correctAnswer: "Tenali Raman",
      }),
      shuffleOptions({
        question: "How long was the temple punishment?",
        optionA: "One year",
        optionB: "Two years",
        optionC: "Three years",
        correctAnswer: "Two years",
      }),
      shuffleOptions({
        question: "Where did the merchant bow?",
        optionA: "In the temple",
        optionB: "In the royal court",
        optionC: "In the market",
        correctAnswer: "In the royal court",
      }),
      shuffleOptions({
        question: "Who saluted the king along with the merchant?",
        optionA: "The thief",
        optionB: "Tenali Raman",
        optionC: "The courtier",
        correctAnswer: "The thief",
      }),
      shuffleOptions({
        question: "What would happen if the thief stole again?",
        optionA: "Shorter stick",
        optionB: "Life imprisonment",
        optionC: "Bigger fine",
        correctAnswer: "Life imprisonment",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tenali Raman gave each servant a ______ stick.",
        optionA: "short",
        optionB: "bamboo",
        optionC: "broken",
        correctAnswer: "bamboo",
      }),
      shuffleOptions({
        question: "The king asked the doorkeeper to call the merchant and ______.",
        optionA: "the servants",
        optionB: "the thief",
        optionC: "the courtiers",
        correctAnswer: "the servants",
      }),
      shuffleOptions({
        question: "The thief thought cutting the stick would keep it the same ______.",
        optionA: "length",
        optionB: "colour",
        optionC: "weight",
        correctAnswer: "length",
      }),
      shuffleOptions({
        question: "The king called Tenali Raman ______.",
        optionA: "wise",
        optionB: "strict",
        optionC: "kind",
        correctAnswer: "wise",
      }),
      shuffleOptions({
        question: "The punishment was to clean shoes of ______.",
        optionA: "courtiers",
        optionB: "temple visitors",
        optionC: "children",
        correctAnswer: "temple visitors",
      }),
      shuffleOptions({
        question: "The sticks were given to find out the ______.",
        optionA: "height",
        optionB: "thief",
        optionC: "winner",
        correctAnswer: "thief",
      }),
      shuffleOptions({
        question: "The court was known as the ______ court.",
        optionA: "royal",
        optionB: "open",
        optionC: "village",
        correctAnswer: "royal",
      }),
      shuffleOptions({
        question: "The merchant’s money was kept in his ______.",
        optionA: "shop",
        optionB: "house",
        optionC: "office",
        correctAnswer: "house",
      }),
      shuffleOptions({
        question: "Tenali Raman’s trick was praised by the ______.",
        optionA: "thief",
        optionB: "king",
        optionC: "merchant",
        correctAnswer: "king",
      }),
      shuffleOptions({
        question: "The king was seated on his ______.",
        optionA: "chair",
        optionB: "throne",
        optionC: "bench",
        correctAnswer: "throne",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sticks were actually magical.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The thief’s stick grew longer overnight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The thief was put in prison immediately.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The king supported Tenali Raman’s idea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The thief refused to do temple work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The merchant saw the thief in action.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The royal court had courtiers and the king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The merchant suspected an outsider.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tenali Raman laughed when the thief was caught.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The punishment lasted for two hours daily for two years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
