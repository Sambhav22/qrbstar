export const chapter = "Chapter - 6: The Quarrel";
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
        question: "Who quarrelled in the poem?",
        optionA: "Friends",
        optionB: "Sisters",
        optionC: "Brothers",
        correctAnswer: "Brothers",
      }),
      shuffleOptions({
        question: "Who is the poet of the poem?",
        optionA: "Eleanor Farjeon",
        optionB: "Robert Frost",
        optionC: "Sarojini Naidu",
        correctAnswer: "Eleanor Farjeon",
      }),
      shuffleOptions({
        question: "What relation did the poet have with the person he quarrelled with?",
        optionA: "Cousin",
        optionB: "Brother",
        optionC: "Friend",
        correctAnswer: "Brother",
      }),
      shuffleOptions({
        question: "How did the quarrel begin?",
        optionA: "With a slight reason",
        optionB: "With a big fight",
        optionC: "With a stranger",
        correctAnswer: "With a slight reason",
      }),
      shuffleOptions({
        question: "What happened to the afternoon after the quarrel?",
        optionA: "It turned black",
        optionB: "It turned bright",
        optionC: "It turned white",
        correctAnswer: "It turned black",
      }),
      shuffleOptions({
        question: "Who ended the quarrel?",
        optionA: "The poet",
        optionB: "The brother",
        optionC: "Both together",
        correctAnswer: "The brother",
      }),
      shuffleOptions({
        question: "What action did the brother take to end the fight?",
        optionA: "He hugged the poet",
        optionB: "He thumped the poet",
        optionC: "He shouted at the poet",
        correctAnswer: "He thumped the poet",
      }),
      shuffleOptions({
        question: "What did the brother say after thumping the poet?",
        optionA: "“Let’s fight again”",
        optionB: "“Oh, come along!”",
        optionC: "“Go away!”",
        correctAnswer: "“Oh, come along!”",
      }),
      shuffleOptions({
        question: "What could not go on all night?",
        optionA: "The quarrel",
        optionB: "The game",
        optionC: "The party",
        correctAnswer: "The quarrel",
      }),
      shuffleOptions({
        question: "What is the message of the poem?",
        optionA: "Quarrels should be long",
        optionB: "We should forgive quickly",
        optionC: "We should always argue",
        correctAnswer: "We should forgive quickly",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "One thing led to _______.",
        optionA: "another",
        optionB: "nothing",
        optionC: "everything",
        correctAnswer: "another",
      }),
      shuffleOptions({
        question: "He said he was _______.",
        optionA: "right",
        optionB: "wrong",
        optionC: "happy",
        correctAnswer: "right",
      }),
      shuffleOptions({
        question: "I knew he was _______.",
        optionA: "wrong",
        optionB: "right",
        optionC: "playful",
        correctAnswer: "wrong",
      }),
      shuffleOptions({
        question: "We hated one _______.",
        optionA: "another",
        optionB: "friend",
        optionC: "stranger",
        correctAnswer: "another",
      }),
      shuffleOptions({
        question: "The quarrel became very _______.",
        optionA: "strong",
        optionB: "weak",
        optionC: "fun",
        correctAnswer: "strong",
      }),
      shuffleOptions({
        question: "Then suddenly my brother _______ me on the back.",
        optionA: "pushed",
        optionB: "thumped",
        optionC: "tapped",
        correctAnswer: "thumped",
      }),
      shuffleOptions({
        question: "The brother said, “Oh, come _______!”",
        optionA: "back",
        optionB: "along",
        optionC: "fast",
        correctAnswer: "along",
      }),
      shuffleOptions({
        question: "The quarrel made the afternoon turn _______.",
        optionA: "black",
        optionB: "white",
        optionC: "golden",
        correctAnswer: "black",
      }),
      shuffleOptions({
        question: "“I was in the _______.”",
        optionA: "right",
        optionB: "wrong",
        optionC: "middle",
        correctAnswer: "wrong",
      }),
      shuffleOptions({
        question: "“So he was in the _______.”",
        optionA: "right",
        optionB: "wrong",
        optionC: "dark",
        correctAnswer: "right",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poet quarrelled with his sister.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The quarrel was about something very serious.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Both thought they were right.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The quarrel spoilt the afternoon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The brother admitted he was in the wrong.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet admitted he was in the wrong.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The quarrel went on all night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The brother thumped the poet on the back.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The quarrel began with a slight reason.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poem teaches us to forgive and patch up.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
