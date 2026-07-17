export const chapter = "Chapter - 11: Song of the Engine";
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
        question: "What does the engine sing while climbing?",
        optionA: "I thought I could",
        optionB: "I think I can",
        optionC: "I must stop",
        correctAnswer: "I think I can",
      }),
      shuffleOptions({
        question: "The train travels on the:",
        optionA: "Road",
        optionB: "Railway",
        optionC: "River",
        correctAnswer: "Railway",
      }),
      shuffleOptions({
        question: "Who is the poet of the poem?",
        optionA: "Ruskin Bond",
        optionB: "Christine Weatherley",
        optionC: "R. L. Stevenson",
        correctAnswer: "Christine Weatherley",
      }),
      shuffleOptions({
        question: "The train requires no pulling when it goes:",
        optionA: "Uphill",
        optionB: "Downhill",
        optionC: "Through a tunnel",
        correctAnswer: "Downhill",
      }),
      shuffleOptions({
        question: "What does the train require when going uphill?",
        optionA: "Pulling",
        optionB: "No pulling",
        optionC: "Sleeping",
        correctAnswer: "Pulling",
      }),
      shuffleOptions({
        question: "What happens to the train’s speed while going down?",
        optionA: "It stops",
        optionB: "It slows down",
        optionC: "It speeds along",
        correctAnswer: "It speeds along",
      }),
      shuffleOptions({
        question: "The word “quietly” means:",
        optionA: "Noiselessly",
        optionB: "Quickly",
        optionC: "Loudly",
        correctAnswer: "Noiselessly",
      }),
      shuffleOptions({
        question: "What kind of sound does the engine make?",
        optionA: "Song",
        optionB: "Shout",
        optionC: "Whistle",
        correctAnswer: "Song",
      }),
      shuffleOptions({
        question: "The train pulls you with a:",
        optionA: "Rope",
        optionB: "Will",
        optionC: "Chain",
        correctAnswer: "Will",
      }),
      shuffleOptions({
        question: "The word “along” rhymes with:",
        optionA: "Strong",
        optionB: "Weak",
        optionC: "Short",
        correctAnswer: "Strong",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The line goes up a ______.",
        optionA: "Bridge",
        optionB: "Hill",
        optionC: "House",
        correctAnswer: "Hill",
      }),
      shuffleOptions({
        question: "“I ______ I can, I think I can.”",
        optionA: "Thought",
        optionB: "Think",
        optionC: "Wish",
        correctAnswer: "Think",
      }),
      shuffleOptions({
        question: "The engine sings a ______ song.",
        optionA: "Big",
        optionB: "Little",
        optionC: "Long",
        correctAnswer: "Little",
      }),
      shuffleOptions({
        question: "The train moves very ______ uphill.",
        optionA: "Slowly",
        optionB: "Quickly",
        optionC: "Loudly",
        correctAnswer: "Slowly",
      }),
      shuffleOptions({
        question: "“I thought I ______, I thought I could.”",
        optionA: "Should",
        optionB: "Could",
        optionC: "Can",
        correctAnswer: "Could",
      }),
      shuffleOptions({
        question: "If you listen very ______, you will hear the song.",
        optionA: "Quickly",
        optionB: "Quietly",
        optionC: "Sadly",
        correctAnswer: "Quietly",
      }),
      shuffleOptions({
        question: "“I thought I could” is sung when the train is going ______.",
        optionA: "Uphill",
        optionB: "Downhill",
        optionC: "Backward",
        correctAnswer: "Downhill",
      }),
      shuffleOptions({
        question: "The train travels on the ______.",
        optionA: "Railway",
        optionB: "Highway",
        optionC: "Airway",
        correctAnswer: "Railway",
      }),
      shuffleOptions({
        question: "The engine always keeps ______.",
        optionA: "Singing",
        optionB: "Sleeping",
        optionC: "Stopping",
        correctAnswer: "Singing",
      }),
      shuffleOptions({
        question: "The train ______ along.",
        optionA: "Speeds",
        optionB: "Jumps",
        optionC: "Waits",
        correctAnswer: "Speeds",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poem describes a train journey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The train goes fast uphill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The train requires pulling downhill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The engine sings both uphill and downhill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poet of the poem is Christine Weatherley.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The word “speed” means to move slowly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The listener must be quiet to hear the engine’s song.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The train completely stops at the top of the hill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The engine keeps singing even when no pulling is needed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The train goes along the railway line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
