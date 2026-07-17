export const chapter = "Chapter - 14: Agriculture";
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
        question: "Which activity is also included in agriculture besides growing crops?",
        optionA: "Cooking food",
        optionB: "Rearing livestock",
        optionC: "Repairing roads",
        correctAnswer: "Rearing livestock",
      }),
      shuffleOptions({
        question: "Which factor greatly affects agriculture in India?",
        optionA: "Mobile networks",
        optionB: "Climate",
        optionC: "Aeroplanes",
        correctAnswer: "Climate",
      }),
      shuffleOptions({
        question: "Which crop grows best in hot and rainy areas?",
        optionA: "Rice",
        optionB: "Barley",
        optionC: "Cotton",
        correctAnswer: "Rice",
      }),
      shuffleOptions({
        question: "Which type of crop is grown mainly to earn money?",
        optionA: "Cash crops",
        optionB: "Food crops",
        optionC: "Seasonal crops",
        correctAnswer: "Cash crops",
      }),
      shuffleOptions({
        question: "Which crop is mainly used for making bags, carpets and mats?",
        optionA: "Wheat",
        optionB: "Jute",
        optionC: "Maize",
        correctAnswer: "Jute",
      }),
      shuffleOptions({
        question: "Which crop requires warm climate and heavy rainfall?",
        optionA: "Tea",
        optionB: "Spices",
        optionC: "Millets",
        correctAnswer: "Spices",
      }),
      shuffleOptions({
        question: "Which crop grows well in dry tropical climate and black soil?",
        optionA: "Cotton",
        optionB: "Rice",
        optionC: "Pulses",
        correctAnswer: "Cotton",
      }),
      shuffleOptions({
        question: "Which cash crop is India famous for since ancient times?",
        optionA: "Coffee",
        optionB: "Spices",
        optionC: "Oilseeds",
        correctAnswer: "Spices",
      }),
      shuffleOptions({
        question: "Which animal is reared mainly for milk?",
        optionA: "Camel",
        optionB: "Cow",
        optionC: "Duck",
        correctAnswer: "Cow",
      }),
      shuffleOptions({
        question: "Which programme helped increase agricultural production in India?",
        optionA: "Digital India",
        optionB: "Green Revolution",
        optionC: "Save Water Mission",
        correctAnswer: "Green Revolution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Agriculture includes the growing of crops and ______.",
        optionA: "farming machines",
        optionB: "rearing animals",
        optionC: "building houses",
        correctAnswer: "rearing animals",
      }),
      shuffleOptions({
        question: "Food crops include rice, wheat, millets, maize and ______.",
        optionA: "pulses",
        optionB: "jute",
        optionC: "cotton",
        correctAnswer: "pulses",
      }),
      shuffleOptions({
        question: "Oilseeds grow mainly in a ______ climate.",
        optionA: "dry",
        optionB: "snowy",
        optionC: "cold",
        correctAnswer: "dry",
      }),
      shuffleOptions({
        question: "Sugar cane requires a ______ and humid climate.",
        optionA: "cool",
        optionB: "warm",
        optionC: "dry",
        correctAnswer: "warm",
      }),
      shuffleOptions({
        question: "Millets can grow even in ______ regions.",
        optionA: "very wet",
        optionB: "dry",
        optionC: "hilly",
        correctAnswer: "dry",
      }),
      shuffleOptions({
        question: "Tea grows in areas with heavy ______.",
        optionA: "rainfall",
        optionB: "snowfall",
        optionC: "thunder",
        correctAnswer: "rainfall",
      }),
      shuffleOptions({
        question: "Coffee grows in a climate similar to ______.",
        optionA: "rice",
        optionB: "tea",
        optionC: "cotton",
        correctAnswer: "tea",
      }),
      shuffleOptions({
        question: "Livestock waste provides manure and ______.",
        optionA: "diesel",
        optionB: "biogas",
        optionC: "plastic",
        correctAnswer: "biogas",
      }),
      shuffleOptions({
        question: "The staple food of most Indians is ______.",
        optionA: "wheat",
        optionB: "rice",
        optionC: "maize",
        correctAnswer: "rice",
      }),
      shuffleOptions({
        question: "Farmers received high-quality seeds under the ______ programme.",
        optionA: "Clean India",
        optionB: "Green Revolution",
        optionC: "Digital Farming",
        correctAnswer: "Green Revolution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Agriculture depends on climate, soil and rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rice grows well in cool and dry areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "India is the largest producer of pulses in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Maize needs high temperature and moderate rainfall to grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Millets require a lot of water to grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jute grows well in hot and wet climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton is mainly grown in black soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Oilseeds include mustard, sesame and linseed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tea is grown mainly in Rajasthan and Gujarat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Livestock includes cows, goats, sheep, hens and ducks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
