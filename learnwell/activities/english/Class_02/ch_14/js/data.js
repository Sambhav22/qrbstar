export const chapter = "Chapter - 14: All Children are Lovely";
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
        question: "Who was sitting in the courtyard?",
        optionA: "Isha",
        optionB: "Kanta",
        optionC: "Koel",
        correctAnswer: "Kanta",
      }),
      shuffleOptions({
        question: "What did Isha love about the house?",
        optionA: "The rooms",
        optionB: "The courtyard",
        optionC: "The kitchen",
        correctAnswer: "The courtyard",
      }),
      shuffleOptions({
        question: "What was lying along the boundary wall?",
        optionA: "Rope",
        optionB: "Stick",
        optionC: "Ladder",
        correctAnswer: "Ladder",
      }),
      shuffleOptions({
        question: "What scared the nestlings?",
        optionA: "Crow",
        optionB: "Isha's presence",
        optionC: "Wind",
        correctAnswer: "Isha's presence",
      }),
      shuffleOptions({
        question: "What did the crow say about the koel's baby?",
        optionA: "All are lovely",
        optionB: "I dislike it",
        optionC: "It's noisy",
        correctAnswer: "All are lovely",
      }),
      shuffleOptions({
        question: "How many nestlings were in the nest?",
        optionA: "Two",
        optionB: "Four",
        optionC: "Three",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "Who laid the eggs in the crow's nest?",
        optionA: "Koel",
        optionB: "Crow",
        optionC: "Duck",
        correctAnswer: "Koel",
      }),
      shuffleOptions({
        question: "How was the crow's voice described?",
        optionA: "Sweet",
        optionB: "Soft",
        optionC: "Harsh",
        correctAnswer: "Harsh",
      }),
      shuffleOptions({
        question: "What did the crow say to Isha?",
        optionA: "Climb higher",
        optionB: "You cannot touch it",
        optionC: "Go away",
        correctAnswer: "You cannot touch it",
      }),
      shuffleOptions({
        question: "What did Isha realise about the crow?",
        optionA: "He was angry",
        optionB: "He was kind",
        optionC: "He was hungry",
        correctAnswer: "He was kind",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Isha used a ______ to climb the tree.",
        optionA: "stair",
        optionB: "ladder",
        optionC: "rope",
        correctAnswer: "ladder",
      }),
      shuffleOptions({
        question: "The crow laid eggs in the ______.",
        optionA: "bush",
        optionB: "courtyard",
        optionC: "tree",
        correctAnswer: "tree",
      }),
      shuffleOptions({
        question: "There were ______ nestlings in the nest.",
        optionA: "three",
        optionB: "four",
        optionC: "five",
        correctAnswer: "four",
      }),
      shuffleOptions({
        question: "The ______ laid eggs in the crow's nest.",
        optionA: "koel",
        optionB: "myna",
        optionC: "sparrow",
        correctAnswer: "koel",
      }),
      shuffleOptions({
        question: "The crow ______ when Isha came near the nest.",
        optionA: "smiled",
        optionB: "screamed",
        optionC: "cried",
        correctAnswer: "screamed",
      }),
      shuffleOptions({
        question: "Isha ______ to the crow and nestlings.",
        optionA: "said sorry",
        optionB: "smiled",
        optionC: "said goodbye",
        correctAnswer: "said goodbye",
      }),
      shuffleOptions({
        question: "Nestlings are ______ birds.",
        optionA: "young",
        optionB: "old",
        optionC: "big",
        correctAnswer: "young",
      }),
      shuffleOptions({
        question: "The crow said all children are ______.",
        optionA: "noisy",
        optionB: "naughty",
        optionC: "lovely",
        correctAnswer: "lovely",
      }),
      shuffleOptions({
        question: "The bird in the nest had a ______ sound.",
        optionA: "sweet",
        optionB: "same",
        optionC: "different",
        correctAnswer: "different",
      }),
      shuffleOptions({
        question: "Isha ______ the crow's quality.",
        optionA: "realised",
        optionB: "ignored",
        optionC: "forgot",
        correctAnswer: "realised",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kanta was sitting on the tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Isha could not see the nestlings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The crow was angry because Isha touched the eggs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The koel never hatches her eggs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All the nestlings belonged to the crow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The nest had three nestlings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Isha climbed up with the help of Kanta.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The crow's voice was pleasant and sweet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The koel's baby made a different sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Isha said goodbye to the crow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;