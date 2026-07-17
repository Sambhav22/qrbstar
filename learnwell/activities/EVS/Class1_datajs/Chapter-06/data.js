export const chapter = "Chapter - 6: My Clothes";
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
        question: "What do we wear to cover our body?",
        optionA: "shoes",
        optionB: "rings",
        optionC: "clothes",
        correctAnswer: "clothes",
      }),
      shuffleOptions({
        question: "Which type of clothes do we wear in summer?",
        optionA: "cotton",
        optionB: "woollen",
        optionC: "fancy",
        correctAnswer: "cotton",
      }),
      shuffleOptions({
        question: "Which type of clothes keep us warm in winter?",
        optionA: "cotton",
        optionB: "woollen",
        optionC: "silk",
        correctAnswer: "woollen",
      }),
      shuffleOptions({
        question: "What do we wear when it rains?",
        optionA: "sweater",
        optionB: "raincoat",
        optionC: "T-shirt",
        correctAnswer: "raincoat",
      }),
      shuffleOptions({
        question: "When do we wear fancy clothes?",
        optionA: "every day",
        optionB: "on special occasions",
        optionC: "while sleeping",
        correctAnswer: "on special occasions",
      }),
      shuffleOptions({
        question: "What do cotton clothes do in summer?",
        optionA: "make us hot",
        optionB: "keep us cool",
        optionC: "make us heavy",
        correctAnswer: "keep us cool",
      }),
      shuffleOptions({
        question: "What do woollen clothes do in winter?",
        optionA: "keep us warm",
        optionB: "make us cold",
        optionC: "get wet easily",
        correctAnswer: "keep us warm",
      }),
      shuffleOptions({
        question: "What do we wear along with a raincoat in rain?",
        optionA: "gumboots",
        optionB: "slippers",
        optionC: "socks",
        correctAnswer: "gumboots",
      }),
      shuffleOptions({
        question: "Why should we give clothes to poor people?",
        optionA: "They do not have proper clothes",
        optionB: "They like colours",
        optionC: "They want new style",
        correctAnswer: "They do not have proper clothes",
      }),
      shuffleOptions({
        question: "What do clothes give us?",
        optionA: "a smart look",
        optionB: "a tired look",
        optionC: "a funny look",
        correctAnswer: "a smart look",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We wear _______ to protect our body.",
        optionA: "hats",
        optionB: "clothes",
        optionC: "bags",
        correctAnswer: "clothes",
      }),
      shuffleOptions({
        question: "_______ clothes are worn in hot weather.",
        optionA: "Woollen",
        optionB: "Cotton",
        optionC: "Fancy",
        correctAnswer: "Cotton",
      }),
      shuffleOptions({
        question: "_______ clothes are worn in cold weather.",
        optionA: "Woollen",
        optionB: "Cotton",
        optionC: "Silk",
        correctAnswer: "Woollen",
      }),
      shuffleOptions({
        question: "During rain, we wear a _______.",
        optionA: "sweater",
        optionB: "raincoat",
        optionC: "cap",
        correctAnswer: "raincoat",
      }),
      shuffleOptions({
        question: "Cotton clothes keep us _______ in summer.",
        optionA: "warm",
        optionB: "cool",
        optionC: "wet",
        correctAnswer: "cool",
      }),
      shuffleOptions({
        question: "Woollen clothes keep us _______ in winter.",
        optionA: "warm",
        optionB: "cold",
        optionC: "dry",
        correctAnswer: "warm",
      }),
      shuffleOptions({
        question: "We wear fancy clothes on special _______.",
        optionA: "occasions",
        optionB: "toys",
        optionC: "schools",
        correctAnswer: "occasions",
      }),
      shuffleOptions({
        question: "We wear raincoat and _______ in the rainy season.",
        optionA: "socks",
        optionB: "gumboots",
        optionC: "gloves",
        correctAnswer: "gumboots",
      }),
      shuffleOptions({
        question: "Clothes give us a _______ look.",
        optionA: "smart",
        optionB: "dull",
        optionC: "sleepy",
        correctAnswer: "smart",
      }),
      shuffleOptions({
        question: "We should _______ our old clothes to poor people.",
        optionA: "donate",
        optionB: "hide",
        optionC: "throw",
        correctAnswer: "donate",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We wear woollen clothes in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Raincoat protects us from getting wet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton clothes keep us cool in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fancy clothes are worn every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clothes protect our body from heat, cold, and rain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We wear cotton clothes in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We wear woollen clothes in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Raincoat is worn in the rainy season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should donate clothes to poor people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Clothes are a basic need for everyone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
