export const chapter = "Chapter - 12: The Landlady";
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
        question: "What city did Billy travel from before reaching Bath?",
        optionA: "London",
        optionB: "Bath",
        optionC: "Swindon",
        correctAnswer: "London",
      }),
      shuffleOptions({
        question: "What time was it when Billy arrived at Bath?",
        optionA: "About 7 o’clock",
        optionB: "About 9 o’clock",
        optionC: "About midnight",
        correctAnswer: "About 9 o’clock",
      }),
      shuffleOptions({
        question: "What did the air feel like to Billy?",
        optionA: "A cool breeze",
        optionB: "A flat blade of ice",
        optionC: "A warm blanket",
        correctAnswer: "A flat blade of ice",
      }),
      shuffleOptions({
        question: "Who had praised Bath as a splendid city?",
        optionA: "Mr Weaver",
        optionB: "Mr Greenslade",
        optionC: "The porter",
        correctAnswer: "Mr Greenslade",
      }),
      shuffleOptions({
        question: "What was Billy’s age?",
        optionA: "Fifteen",
        optionB: "Seventeen",
        optionC: "Twenty",
        correctAnswer: "Seventeen",
      }),
      shuffleOptions({
        question: "What notice did Billy see in the window?",
        optionA: "Room to Let",
        optionB: "Bed and Breakfast",
        optionC: "Guest House",
        correctAnswer: "Bed and Breakfast",
      }),
      shuffleOptions({
        question: "What bird did Billy spot in the sitting room?",
        optionA: "A sparrow",
        optionB: "A parrot",
        optionC: "A pigeon",
        correctAnswer: "A parrot",
      }),
      shuffleOptions({
        question: "How quickly did the landlady open the door after Billy rang the bell?",
        optionA: "Immediately",
        optionB: "After half a minute",
        optionC: "After five minutes",
        correctAnswer: "Immediately",
      }),
      shuffleOptions({
        question: "How did the landlady describe her house?",
        optionA: "Her palace",
        optionB: "Her little nest",
        optionC: "Her guest home",
        correctAnswer: "Her little nest",
      }),
      shuffleOptions({
        question: "What had the landlady placed between the bed sheets?",
        optionA: "A cushion",
        optionB: "A hot water bottle",
        optionC: "An extra blanket",
        correctAnswer: "A hot water bottle",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Billy was wearing a new ______ overcoat.",
        optionA: "grey",
        optionB: "navy-blue",
        optionC: "black",
        correctAnswer: "navy-blue",
      }),
      shuffleOptions({
        question: "Billy also wore a brown suit and a brown ______.",
        optionA: "trilby hat",
        optionB: "cap",
        optionC: "scarf",
        correctAnswer: "trilby hat",
      }),
      shuffleOptions({
        question: "Billy thought briskness was a ______ of successful businessmen.",
        optionA: "duty",
        optionB: "habit",
        optionC: "characteristic",
        correctAnswer: "characteristic",
      }),
      shuffleOptions({
        question: "In the sitting room, a dachshund was sleeping near the ______.",
        optionA: "piano",
        optionB: "hearth",
        optionC: "table",
        correctAnswer: "hearth",
      }),
      shuffleOptions({
        question: "The landlady’s face was round and ______.",
        optionA: "pale",
        optionB: "pink",
        optionC: "wrinkled",
        correctAnswer: "pink",
      }),
      shuffleOptions({
        question: "The cost of the room was five and ______ a night.",
        optionA: "six pence",
        optionB: "ten shillings",
        optionC: "two pounds",
        correctAnswer: "six pence",
      }),
      shuffleOptions({
        question: "Billy was told to sign the ______ in the sitting room.",
        optionA: "contract",
        optionB: "guest book",
        optionC: "register card",
        correctAnswer: "guest book",
      }),
      shuffleOptions({
        question: "The landlady seemed terribly ______ to Billy.",
        optionA: "nice",
        optionB: "rude",
        optionC: "angry",
        correctAnswer: "nice",
      }),
      shuffleOptions({
        question: "Billy guessed she had probably lost a son in the ______.",
        optionA: "storm",
        optionB: "war",
        optionC: "fire",
        correctAnswer: "war",
      }),
      shuffleOptions({
        question: "The landlady said she didn’t get visitors very ______.",
        optionA: "often",
        optionB: "rarely",
        optionC: "daily",
        correctAnswer: "often",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Billy had never visited Bath before.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Bell and Dragon was an inn/hotel suggested by the porter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "There were many coats and umbrellas in the hall when Billy entered.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The landlady charged extra money if Billy wanted an egg for breakfast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Billy refused to remove his coat and hat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The landlady said the first floor was for herself and the second for Billy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Billy decided not to unpack his suitcase.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The landlady seemed like the mother of Billy’s best school friend.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The landlady asked Billy to sign the book because it was the law of the land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Billy thought his stay at the house would be troublesome and risky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
