export const chapter = "Chapter - 14: In the Sky";
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
        question: "What gives us heat and light?",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Stars",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "What do we see in the sky at night?",
        optionA: "Sun and clouds",
        optionB: "Moon and stars",
        optionC: "Rain and trees",
        correctAnswer: "Moon and stars",
      }),
      shuffleOptions({
        question: "What changes its shape and looks like a silver ball?",
        optionA: "Moon",
        optionB: "Cloud",
        optionC: "Star",
        correctAnswer: "Moon",
      }),
      shuffleOptions({
        question: "What shines brightly during the day?",
        optionA: "Sun",
        optionB: "Stars",
        optionC: "Clouds",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "What floats in the sky and turns dark grey during rain?",
        optionA: "Birds",
        optionB: "Clouds",
        optionC: "Stars",
        correctAnswer: "Clouds",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ is the space above the earth.",
        optionA: "Moon",
        optionB: "Sky",
        optionC: "Tree",
        correctAnswer: "Sky",
      }),
      shuffleOptions({
        question: "The sun shines ______ in the daytime.",
        optionA: "Brightly",
        optionB: "Quietly",
        optionC: "Softly",
        correctAnswer: "Brightly",
      }),
      shuffleOptions({
        question: "The moon keeps changing its ______.",
        optionA: "Shape",
        optionB: "Colour",
        optionC: "Place",
        correctAnswer: "Shape",
      }),
      shuffleOptions({
        question: "Clouds appear ______ in colour during clear weather.",
        optionA: "White",
        optionB: "Green",
        optionC: "Red",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "The stars are of different ______.",
        optionA: "Colours",
        optionB: "Shapes",
        optionC: "Sizes",
        correctAnswer: "Colours",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun shines at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon looks like a silver ball.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Clouds become dark grey during rain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The stars are all of the same colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sky is the space above the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
