export const chapter = "Chapter - 7: Rudy the Dog";
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
        question: "Who was furious at small animals?",
        optionA: "Dollie",
        optionB: "Rudy",
        optionC: "A child",
        correctAnswer: "Rudy",
      }),
      shuffleOptions({
        question: "What did Rudy love to do?",
        optionA: "Sleep all day",
        optionB: "Bark and chase",
        optionC: "Eat honey",
        correctAnswer: "Bark and chase",
      }),
      shuffleOptions({
        question: "Where did Dollie jump to save herself?",
        optionA: "Roof",
        optionB: "Tree",
        optionC: "Window sill",
        correctAnswer: "Window sill",
      }),
      shuffleOptions({
        question: "What was hanging from the tree?",
        optionA: "Nest",
        optionB: "Beehive",
        optionC: "Rope",
        correctAnswer: "Beehive",
      }),
      shuffleOptions({
        question: "Who told Rudy to jump into the water tank?",
        optionA: "The children",
        optionB: "Dollie",
        optionC: "A man",
        correctAnswer: "Dollie",
      }),
      shuffleOptions({
        question: "What colour was Rudy?",
        optionA: "White",
        optionB: "Brown",
        optionC: "Black",
        correctAnswer: "Black",
      }),
      shuffleOptions({
        question: "What spilled when the beehive broke?",
        optionA: "Water",
        optionB: "Honey",
        optionC: "Milk",
        correctAnswer: "Honey",
      }),
      shuffleOptions({
        question: "What attacked Rudy after hitting the beehive?",
        optionA: "Mice",
        optionB: "Birds",
        optionC: "Bees",
        correctAnswer: "Bees",
      }),
      shuffleOptions({
        question: "Where did Rudy sit after the incident?",
        optionA: "Inside the house",
        optionB: "At his place",
        optionC: "On the tree",
        correctAnswer: "At his place",
      }),
      shuffleOptions({
        question: "What did Rudy promise?",
        optionA: "To run again",
        optionB: "To trouble others",
        optionC: "To be good",
        correctAnswer: "To be good",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Dollie jumped on the ______ to escape.",
        optionA: "table",
        optionB: "tree",
        optionC: "window sill",
        correctAnswer: "window sill",
      }),
      shuffleOptions({
        question: "Rudy lived in the ______.",
        optionA: "jungle",
        optionB: "street",
        optionC: "house",
        correctAnswer: "street",
      }),
      shuffleOptions({
        question: "Rudy was a ______ dog.",
        optionA: "small white",
        optionB: "big black",
        optionC: "brown furry",
        correctAnswer: "big black",
      }),
      shuffleOptions({
        question: "The bees gave Rudy a big ______.",
        optionA: "pain",
        optionB: "reward",
        optionC: "gift",
        correctAnswer: "pain",
      }),
      shuffleOptions({
        question: "Rudy ran and ______ into the air.",
        optionA: "fell",
        optionB: "leapt",
        optionC: "walked",
        correctAnswer: "leapt",
      }),
      shuffleOptions({
        question: "Rudy barked and said, “Come down, ______!”",
        optionA: "Dollie",
        optionB: "meow",
        optionC: "bow-wow",
        correctAnswer: "bow-wow",
      }),
      shuffleOptions({
        question: "The bees attacked Rudy’s ______.",
        optionA: "nose, ears, legs",
        optionB: "feet only",
        optionC: "tail only",
        correctAnswer: "nose, ears, legs",
      }),
      shuffleOptions({
        question: "Dollie said Rudy could not even face ______.",
        optionA: "cats",
        optionB: "mice",
        optionC: "bees",
        correctAnswer: "bees",
      }),
      shuffleOptions({
        question: "The honey ______ on the ground.",
        optionA: "vanished",
        optionB: "spilled",
        optionC: "flew",
        correctAnswer: "spilled",
      }),
      shuffleOptions({
        question: "The bees ______ over Rudy.",
        optionA: "danced",
        optionB: "hovered",
        optionC: "ran",
        correctAnswer: "hovered",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rudy was a good and kind dog from the beginning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rudy attacked Dollie when she was sleeping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dollie helped Rudy in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rudy ran after bees to scare them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dollie was a cat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rudy got honey as a reward.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The bees stung Rudy badly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rudy jumped into a swimming pool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dollie told Rudy to jump into the water tank.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rudy kept chasing animals even after the incident.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
