export const chapter = "Chapter - 3: Air";
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
        question: "What can we feel but cannot see?",
        optionA: "Water",
        optionB: "Air",
        optionC: "Fire",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "Who needs air to breathe and live?",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "All living things",
        correctAnswer: "All living things",
      }),
      shuffleOptions({
        question: "What makes the air dirty?",
        optionA: "Smoke",
        optionB: "Trees",
        optionC: "Rain",
        correctAnswer: "Smoke",
      }),
      shuffleOptions({
        question: "Which of these helps to keep the air fresh?",
        optionA: "Cutting trees",
        optionB: "Planting trees",
        optionC: "Burning leaves",
        correctAnswer: "Planting trees",
      }),
      shuffleOptions({
        question: "What keeps us healthy and strong?",
        optionA: "Fresh air",
        optionB: "Dirty air",
        optionC: "Smoke",
        correctAnswer: "Fresh air",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We all need ______ to live.",
        optionA: "Air",
        optionB: "Milk",
        optionC: "Food",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "Smoke makes the air ______.",
        optionA: "Clean",
        optionB: "Impure",
        optionC: "Fresh",
        correctAnswer: "Impure",
      }),
      shuffleOptions({
        question: "Plants use air to make their ______.",
        optionA: "Nests",
        optionB: "Food",
        optionC: "Toys",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Birds need air to ______ and fly.",
        optionA: "Sleep",
        optionB: "Breathe",
        optionC: "Walk",
        correctAnswer: "Breathe",
      }),
      shuffleOptions({
        question: "Air pollution is ______ for our health.",
        optionA: "Helpful",
        optionB: "Harmful",
        optionC: "Beautiful",
        correctAnswer: "Harmful",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We can see air moving.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air is present everywhere around us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Smoke makes the air clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Birds need air to fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air pollution is harmful for our health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
