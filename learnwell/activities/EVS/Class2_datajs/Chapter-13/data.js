export const chapter = "Chapter - 13: The Sky";
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
        question: "What do we see shining in the sky during the day?",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Stars",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "What gives us heat and light?",
        optionA: "The Moon",
        optionB: "The Stars",
        optionC: "The Sun",
        correctAnswer: "The Sun",
      }),
      shuffleOptions({
        question: "What do we see twinkling in the sky at night?",
        optionA: "Stars",
        optionB: "Clouds",
        optionC: "Birds",
        correctAnswer: "Stars",
      }),
      shuffleOptions({
        question: "What colour does the moon appear at night?",
        optionA: "Blue",
        optionB: "White",
        optionC: "Green",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "Which heavenly body changes its shape every day?",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Star",
        correctAnswer: "Moon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun is a big ______ of fire.",
        optionA: "ball",
        optionB: "box",
        optionC: "balloon",
        correctAnswer: "ball",
      }),
      shuffleOptions({
        question: "The moon gets its light from the ______.",
        optionA: "stars",
        optionB: "sun",
        optionC: "earth",
        correctAnswer: "sun",
      }),
      shuffleOptions({
        question: "The sun rises in the ______.",
        optionA: "east",
        optionB: "west",
        optionC: "north",
        correctAnswer: "east",
      }),
      shuffleOptions({
        question: "Stars shine in the ______ sky.",
        optionA: "morning",
        optionB: "night",
        optionC: "cloudy",
        correctAnswer: "night",
      }),
      shuffleOptions({
        question: "The moon looks ______ in colour.",
        optionA: "green",
        optionB: "blue",
        optionC: "white",
        correctAnswer: "white",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We can see the sun at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon has its own light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The stars twinkle in the night sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The moon changes its shape every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The full moon is round and bright.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
