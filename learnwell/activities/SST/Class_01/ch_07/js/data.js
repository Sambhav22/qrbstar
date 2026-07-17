export const chapter = "Chapter - 7: Our Home";
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
        question: "What protects us from heat, cold, rain and storm?",
        optionA: "School",
        optionB: "Home",
        optionC: "Garden",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "Which room is used for welcoming guests?",
        optionA: "Drawing room",
        optionB: "Bathroom",
        optionC: "Kitchen",
        correctAnswer: "Drawing room",
      }),
      shuffleOptions({
        question: "What type of house is made of mud and straw?",
        optionA: "Pucca house",
        optionB: "Kutcha house",
        optionC: "Bungalow",
        correctAnswer: "Kutcha house",
      }),
      shuffleOptions({
        question: "What type of house is made of cement, bricks and steel?",
        optionA: "Temporary house",
        optionB: "Hut",
        optionC: "Pucca house",
        correctAnswer: "Pucca house",
      }),
      shuffleOptions({
        question: "In which room do we cook our food?",
        optionA: "Dining room",
        optionB: "Kitchen",
        optionC: "Study room",
        correctAnswer: "Kitchen",
      }),
      shuffleOptions({
        question: "Which room do we use for sleeping?",
        optionA: "Bathroom",
        optionB: "Bedroom",
        optionC: "Drawing room",
        correctAnswer: "Bedroom",
      }),
      shuffleOptions({
        question: "What kind of house is strong and long-lasting?",
        optionA: "Kutcha house",
        optionB: "Pucca house",
        optionC: "Mud house",
        correctAnswer: "Pucca house",
      }),
      shuffleOptions({
        question: "Where do we take a bath?",
        optionA: "Bathroom",
        optionB: "Kitchen",
        optionC: "Study room",
        correctAnswer: "Bathroom",
      }),
      shuffleOptions({
        question: "Which room is used for studying?",
        optionA: "Drawing room",
        optionB: "Study room",
        optionC: "Dining room",
        correctAnswer: "Study room",
      }),
      shuffleOptions({
        question: "A home is ______ to every person living in it.",
        optionA: "close to the heart",
        optionB: "very far",
        optionC: "not important",
        correctAnswer: "close to the heart",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A house can be ______ or big.",
        optionA: "small",
        optionB: "noisy",
        optionC: "wet",
        correctAnswer: "small",
      }),
      shuffleOptions({
        question: "Guests sit in the ______.",
        optionA: "kitchen",
        optionB: "drawing room",
        optionC: "bathroom",
        correctAnswer: "drawing room",
      }),
      shuffleOptions({
        question: "We take a bath in the ______.",
        optionA: "bedroom",
        optionB: "dining room",
        optionC: "bathroom",
        correctAnswer: "bathroom",
      }),
      shuffleOptions({
        question: "A ______ house is made of bricks and cement.",
        optionA: "kutcha",
        optionB: "pucca",
        optionC: "straw",
        correctAnswer: "pucca",
      }),
      shuffleOptions({
        question: "A ______ house is made of mud and straw.",
        optionA: "pucca",
        optionB: "permanent",
        optionC: "kutcha",
        correctAnswer: "kutcha",
      }),
      shuffleOptions({
        question: "Mother cooks food in the ______.",
        optionA: "bathroom",
        optionB: "kitchen",
        optionC: "store room",
        correctAnswer: "kitchen",
      }),
      shuffleOptions({
        question: "We eat our food in the ______.",
        optionA: "dining room",
        optionB: "study room",
        optionC: "washroom",
        correctAnswer: "dining room",
      }),
      shuffleOptions({
        question: "Our home should always be kept ______.",
        optionA: "dirty",
        optionB: "clean",
        optionC: "broken",
        correctAnswer: "clean",
      }),
      shuffleOptions({
        question: "An ______ house keeps pests away.",
        optionA: "airy",
        optionB: "dark",
        optionC: "locked",
        correctAnswer: "airy",
      }),
      shuffleOptions({
        question: "A house protects us from ______.",
        optionA: "pencils",
        optionB: "storms",
        optionC: "toys",
        correctAnswer: "storms",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A home is a place where we live.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pucca houses are weak.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A bedroom is used for sleeping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We welcome guests in the study room.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kutcha houses are made of mud and straw.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We cook food in the kitchen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A house protects us from heat and rain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We take a bath in the dining room.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pucca houses are found in towns and cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep our house neat and clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
