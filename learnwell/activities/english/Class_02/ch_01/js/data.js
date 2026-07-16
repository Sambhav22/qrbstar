export const chapter = "Chapter - 1: Visit to Nehru Planetarium";
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
        question: "Who came out after Sheena?",
        optionA: "Her teacher",
        optionB: "Naveen",
        optionC: "Her mother",
        correctAnswer: "Naveen",
      }),
      shuffleOptions({
        question: "What was Sheena’s plan for the day?",
        optionA: "Going to school",
        optionB: "Going to the planetarium",
        optionC: "Going to market",
        correctAnswer: "Going to the planetarium",
      }),
      shuffleOptions({
        question: "What kind of path is an orbit?",
        optionA: "Zigzag",
        optionB: "Circular",
        optionC: "Straight",
        correctAnswer: "Circular",
      }),
      shuffleOptions({
        question: "Stars in the sky make –",
        optionA: "shapes",
        optionB: "rain",
        optionC: "sound",
        correctAnswer: "shapes",
      }),
      shuffleOptions({
        question: "The dome shows –",
        optionA: "the road",
        optionB: "movement of heavenly bodies",
        optionC: "a movie",
        correctAnswer: "movement of heavenly bodies",
      }),
      shuffleOptions({
        question: "What did Naveen say about seeing things at Planetarium?",
        optionA: "It is boring",
        optionB: "It helps us understand",
        optionC: "It makes us tired",
        correctAnswer: "It helps us understand",
      }),
      shuffleOptions({
        question: "Sheena smiled and said –",
        optionA: "Good night",
        optionB: "Good morning",
        optionC: "Good day",
        correctAnswer: "Good morning",
      }),
      shuffleOptions({
        question: "Who said 'Good luck!'?",
        optionA: "Naveen",
        optionB: "Teacher",
        optionC: "Sheena",
        correctAnswer: "Naveen",
      }),
      shuffleOptions({
        question: "What goes round the Earth?",
        optionA: "Mars",
        optionB: "Moon",
        optionC: "Stars",
        correctAnswer: "Moon",
      }),
      shuffleOptions({
        question: "What did Sheena not carry?",
        optionA: "Water bottle",
        optionB: "Schoolbag",
        optionC: "Books",
        correctAnswer: "Schoolbag",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sheena was going to ______.",
        optionA: "school",
        optionB: "Nehru Planetarium",
        optionC: "museum",
        correctAnswer: "Nehru Planetarium",
      }),
      shuffleOptions({
        question: "Naveen and Sheena were wearing ______.",
        optionA: "uniform",
        optionB: "party clothes",
        optionC: "caps",
        correctAnswer: "uniform",
      }),
      shuffleOptions({
        question: "The ______ moves around the sun.",
        optionA: "star",
        optionB: "earth",
        optionC: "moon",
        correctAnswer: "earth",
      }),
      shuffleOptions({
        question: "The ______ moves around the earth.",
        optionA: "sun",
        optionB: "moon",
        optionC: "orbit",
        correctAnswer: "moon",
      }),
      shuffleOptions({
        question: "There are ______ heavenly bodies in the universe.",
        optionA: "none",
        optionB: "millions",
        optionC: "two",
        correctAnswer: "millions",
      }),
      shuffleOptions({
        question: "A planetarium shows movements of ______.",
        optionA: "vehicles",
        optionB: "people",
        optionC: "stars",
        correctAnswer: "stars",
      }),
      shuffleOptions({
        question: "Orbit is a ______ path.",
        optionA: "square",
        optionB: "curved",
        optionC: "broken",
        correctAnswer: "curved",
      }),
      shuffleOptions({
        question: "The ceiling of the planetarium is called ______.",
        optionA: "dome",
        optionB: "roof",
        optionC: "wall",
        correctAnswer: "dome",
      }),
      shuffleOptions({
        question: "The earth is a ______ body.",
        optionA: "small",
        optionB: "heavenly",
        optionC: "water",
        correctAnswer: "heavenly",
      }),
      shuffleOptions({
        question: "Sheena walked to the ______ stop.",
        optionA: "taxi",
        optionB: "bus",
        optionC: "metro",
        correctAnswer: "bus",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sheena had her schoolbag with her.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Naveen's parents took him to the planetarium.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The orbit is a square path.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The dome shows the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Heavenly bodies include moon and stars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seeing something helps understand it better.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sheena said 'Good night' to Naveen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Stars make shapes in the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Naveen and Sheena are brother and sister.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Planetarium is a place to eat food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;