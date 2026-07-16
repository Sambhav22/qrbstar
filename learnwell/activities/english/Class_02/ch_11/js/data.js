export const chapter = "Chapter - 11: Safety First";
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
        question: "What sound should you listen for on the road?",
        optionA: "Music",
        optionB: "Horn",
        optionC: "Laugh",
        correctAnswer: "Horn",
      }),
      shuffleOptions({
        question: "Where should you look before crossing?",
        optionA: "Only left",
        optionB: "Only right",
        optionC: "Both sides",
        correctAnswer: "Both sides",
      }),
      shuffleOptions({
        question: "What does the red light mean?",
        optionA: "Go",
        optionB: "Stop",
        optionC: "Jump",
        correctAnswer: "Stop",
      }),
      shuffleOptions({
        question: "What does the green light mean?",
        optionA: "Wait",
        optionB: "Dance",
        optionC: "Go",
        correctAnswer: "Go",
      }),
      shuffleOptions({
        question: "What does a zebra crossing mean?",
        optionA: "A place to run",
        optionB: "A place to cross",
        optionC: "A place for animals",
        correctAnswer: "A place to cross",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The road is nice and ______.",
        optionA: "clear",
        optionB: "dirty",
        optionC: "dark",
        correctAnswer: "clear",
      }),
      shuffleOptions({
        question: "If I run out, I may be ______.",
        optionA: "hit",
        optionB: "late",
        optionC: "tired",
        correctAnswer: "hit",
      }),
      shuffleOptions({
        question: "Listen for a horn or a ______.",
        optionA: "bell",
        optionB: "song",
        optionC: "drum",
        correctAnswer: "bell",
      }),
      shuffleOptions({
        question: "No car or ______ is near.",
        optionA: "bicycle",
        optionB: "truck",
        optionC: "motor-bus",
        correctAnswer: "motor-bus",
      }),
      shuffleOptions({
        question: "Down the street I look as ______.",
        optionA: "well",
        optionB: "good",
        optionC: "left",
        correctAnswer: "well",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Children should run across the road without looking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You must see both sides before crossing the road.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Green light tells you to stop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Crows make a 'roar' sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The child waits until the road is clear.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;