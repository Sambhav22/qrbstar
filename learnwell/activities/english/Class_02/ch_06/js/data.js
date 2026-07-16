export const chapter = "Chapter - 6: The Wise Trick";
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
        question: "Who was going to attack Kari?",
        optionA: "A tiger",
        optionB: "A fox",
        optionC: "A dog",
        correctAnswer: "A fox",
      }),
      shuffleOptions({
        question: "Where did Kari live?",
        optionA: "Den",
        optionB: "Stable",
        optionC: "Warren",
        correctAnswer: "Warren",
      }),
      shuffleOptions({
        question: "What did Kari want to do before dying?",
        optionA: "Sleep",
        optionB: "Dance",
        optionC: "Sing",
        correctAnswer: "Dance",
      }),
      shuffleOptions({
        question: "What helped Kari escape?",
        optionA: "Flying",
        optionB: "Trick dance",
        optionC: "Running fast",
        correctAnswer: "Trick dance",
      }),
      shuffleOptions({
        question: "What was Kari doing when the fox saw him?",
        optionA: "Sleeping",
        optionB: "Gnawing grass",
        optionC: "Playing",
        correctAnswer: "Gnawing grass",
      }),
      shuffleOptions({
        question: "What did Kari use to cover his eyes?",
        optionA: "Grass",
        optionB: "Paws",
        optionC: "Leaves",
        correctAnswer: "Paws",
      }),
      shuffleOptions({
        question: "How did the fox feel when Kari agreed to be eaten?",
        optionA: "Angry",
        optionB: "Happy",
        optionC: "Bewildered",
        correctAnswer: "Bewildered",
      }),
      shuffleOptions({
        question: "Who cursed herself at the end?",
        optionA: "Kari",
        optionB: "The fox",
        optionC: "Kari's mother",
        correctAnswer: "The fox",
      }),
      shuffleOptions({
        question: "How was Kari described?",
        optionA: "Foolish",
        optionB: "Smart",
        optionC: "Lazy",
        correctAnswer: "Smart",
      }),
      shuffleOptions({
        question: "What did the fox do when Kari danced with closed eyes?",
        optionA: "Laughed",
        optionB: "Clapped",
        optionC: "Copied him",
        correctAnswer: "Copied him",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kari was a ______ rabbit.",
        optionA: "dull",
        optionB: "smart",
        optionC: "lazy",
        correctAnswer: "smart",
      }),
      shuffleOptions({
        question: "Kari's mother told him to be ______.",
        optionA: "strong",
        optionB: "clever",
        optionC: "careful",
        correctAnswer: "careful",
      }),
      shuffleOptions({
        question: "The fox wanted to make Kari her ______.",
        optionA: "lunch",
        optionB: "pet",
        optionC: "friend",
        correctAnswer: "lunch",
      }),
      shuffleOptions({
        question: "Kari wanted to ______ before dying.",
        optionA: "run",
        optionB: "dance",
        optionC: "cry",
        correctAnswer: "dance",
      }),
      shuffleOptions({
        question: "The fox was ______ when Kari agreed to be eaten.",
        optionA: "happy",
        optionB: "shocked",
        optionC: "bewildered",
        correctAnswer: "bewildered",
      }),
      shuffleOptions({
        question: "Kari said the fox could not dance with ______ eyes.",
        optionA: "open",
        optionB: "big",
        optionC: "closed",
        correctAnswer: "closed",
      }),
      shuffleOptions({
        question: "Kari used his ______ to close his eyes.",
        optionA: "ears",
        optionB: "paws",
        optionC: "tail",
        correctAnswer: "paws",
      }),
      shuffleOptions({
        question: "The fox copied Kari and danced with ______ eyes.",
        optionA: "wide",
        optionB: "closed",
        optionC: "red",
        correctAnswer: "closed",
      }),
      shuffleOptions({
        question: "Kari ______ away while the fox's eyes were closed.",
        optionA: "slept",
        optionB: "slipped",
        optionC: "shouted",
        correctAnswer: "slipped",
      }),
      shuffleOptions({
        question: "The fox ______ herself for losing the rabbit.",
        optionA: "blamed",
        optionB: "praised",
        optionC: "clapped",
        correctAnswer: "blamed",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kari always stayed close to the warren.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The fox was not interested in eating Kari.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kari danced with his paws covering his eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fox never closed her eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kari escaped while the fox had her eyes shut.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fox praised Kari's dancing skills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kari asked to sing before dying.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The fox said, 'You cannot dance like me.'",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kari's mother warned him to be careful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kari used a stone to cover his eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;