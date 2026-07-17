export const chapter = "Chapter - 4: Water";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "From where do we get most of the water on Earth?",
        optionA: "Mountains",
        optionB: "Rain",
        optionC: "Air",
        correctAnswer: "Rain",
      }),
      shuffleOptions({
        question: "Which of the following grows in water?",
        optionA: "Rose",
        optionB: "Lily",
        optionC: "Mango",
        correctAnswer: "Lily",
      }),
      shuffleOptions({
        question: "Which animal lives only in water?",
        optionA: "Whale",
        optionB: "Elephant",
        optionC: "Tiger",
        correctAnswer: "Whale",
      }),
      shuffleOptions({
        question: "What is the main cause of water pollution?",
        optionA: "Planting trees",
        optionB: "Bathing animals in rivers",
        optionC: "Saving water",
        correctAnswer: "Bathing animals in rivers",
      }),
      shuffleOptions({
        question: "Which liquid among these is not fit for drinking?",
        optionA: "Polluted water",
        optionB: "Clean water",
        optionC: "Rain water",
        correctAnswer: "Polluted water",
      }),
      shuffleOptions({
        question: "What should we do to save pure water?",
        optionA: "Use it carelessly",
        optionB: "Limit its use",
        optionC: "Leave taps open",
        correctAnswer: "Limit its use",
      }),
      shuffleOptions({
        question: "Which animal loves bathing in water?",
        optionA: "Buffalo",
        optionB: "Cat",
        optionC: "Rabbit",
        correctAnswer: "Buffalo",
      }),
      shuffleOptions({
        question: "What do plants need water for?",
        optionA: "To make food",
        optionB: "To sleep",
        optionC: "To fly",
        correctAnswer: "To make food",
      }),
      shuffleOptions({
        question: "Which water source is not safe for drinking?",
        optionA: "River with sewage",
        optionB: "Filtered tap water",
        optionC: "Clean rainwater",
        correctAnswer: "River with sewage",
      }),
      shuffleOptions({
        question: "What is “dumping” according to the chapter?",
        optionA: "Throwing away waste",
        optionB: "Cleaning rivers",
        optionC: "Planting trees",
        correctAnswer: "Throwing away waste",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We get water from ______.",
        optionA: "Rain",
        optionB: "Fire",
        optionC: "Dust",
        correctAnswer: "Rain",
      }),
      shuffleOptions({
        question: "Plants and animals need ______.",
        optionA: "Water",
        optionB: "Food",
        optionC: "Toys",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Elephants love ______ in water.",
        optionA: "Bathing",
        optionB: "Sleeping",
        optionC: "Running",
        correctAnswer: "Bathing",
      }),
      shuffleOptions({
        question: "Polluted water is not fit for ______.",
        optionA: "Drinking",
        optionB: "Playing",
        optionC: "Reading",
        correctAnswer: "Drinking",
      }),
      shuffleOptions({
        question: "We should drink ______ water.",
        optionA: "Clean",
        optionB: "Dirty",
        optionC: "Muddy",
        correctAnswer: "Clean",
      }),
      shuffleOptions({
        question: "Throwing garbage in rivers ______ the water.",
        optionA: "Pollutes",
        optionB: "Cleans",
        optionC: "Freezes",
        correctAnswer: "Pollutes",
      }),
      shuffleOptions({
        question: "______ and ______ live in water.",
        optionA: "Fish, Whale",
        optionB: "Dog, Cat",
        optionC: "Cow, Lion",
        correctAnswer: "Fish, Whale",
      }),
      shuffleOptions({
        question: "Water helps plants to ______.",
        optionA: "Make food",
        optionB: "Run",
        optionC: "Hide",
        correctAnswer: "Make food",
      }),
      shuffleOptions({
        question: "We use water for ______ clothes.",
        optionA: "Washing",
        optionB: "Drying",
        optionC: "Ironing",
        correctAnswer: "Washing",
      }),
      shuffleOptions({
        question: "We must not ______ water.",
        optionA: "Waste",
        optionB: "Save",
        optionC: "Collect",
        correctAnswer: "Waste",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants and animals need water to live.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Throwing garbage in rivers keeps water clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Polluted water is good for drinking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fish and whales live in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water is used for cooking and bathing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All plants can grow without water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lotus grows in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pure water on Earth is limited.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should always save water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can live without water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
