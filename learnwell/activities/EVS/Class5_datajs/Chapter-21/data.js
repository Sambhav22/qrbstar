export const chapter = "Chapter - 21: Growing on Farm";
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
        question: "What is the process of growing crops on fields called?",
        optionA: "Harvesting",
        optionB: "Cultivation",
        optionC: "Irrigation",
        correctAnswer: "Cultivation",
      }),
      shuffleOptions({
        question: "What do farmers add to the soil to make it fertile?",
        optionA: "Fertiliser and manure",
        optionB: "Water and sand",
        optionC: "Stones and mud",
        correctAnswer: "Fertiliser and manure",
      }),
      shuffleOptions({
        question: "Which tool is used by farmers for sowing seeds?",
        optionA: "Seed drill",
        optionB: "Sprayer",
        optionC: "Sickle",
        correctAnswer: "Seed drill",
      }),
      shuffleOptions({
        question: "What is the process of supplying water to fields called?",
        optionA: "Irrigation",
        optionB: "Harvesting",
        optionC: "Threshing",
        correctAnswer: "Irrigation",
      }),
      shuffleOptions({
        question: "Which machine helps in ploughing the field quickly?",
        optionA: "Tractor",
        optionB: "Harrow",
        optionC: "Water wheel",
        correctAnswer: "Tractor",
      }),
      shuffleOptions({
        question: "Which process separates the grains from the stalks?",
        optionA: "Threshing",
        optionB: "Harvesting",
        optionC: "Sowing",
        correctAnswer: "Threshing",
      }),
      shuffleOptions({
        question: "Which implement helps in removing weeds?",
        optionA: "Trowel and harrow",
        optionB: "Sprayer",
        optionC: "Seed drill",
        correctAnswer: "Trowel and harrow",
      }),
      shuffleOptions({
        question: "Which tool is used for spraying insecticides?",
        optionA: "Sprayer",
        optionB: "Sickle",
        optionC: "Leveller",
        correctAnswer: "Sprayer",
      }),
      shuffleOptions({
        question: "What is the process of cutting ripened crops called?",
        optionA: "Harvesting",
        optionB: "Winnowing",
        optionC: "Levelling",
        correctAnswer: "Harvesting",
      }),
      shuffleOptions({
        question: "Where are crops stored after threshing and winnowing?",
        optionA: "Godowns",
        optionB: "Wells",
        optionC: "Canals",
        correctAnswer: "Godowns",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process of separating grains from chaff is called ______.",
        optionA: "Threshing",
        optionB: "Winnowing",
        optionC: "Harvesting",
        correctAnswer: "Winnowing",
      }),
      shuffleOptions({
        question: "______ is used to plough the fields nowadays.",
        optionA: "Tractor",
        optionB: "Plough",
        optionC: "Water wheel",
        correctAnswer: "Tractor",
      }),
      shuffleOptions({
        question: "Farmers use ______ and ______ for weeding.",
        optionA: "Trowel and harrow",
        optionB: "Sprayer and hoe",
        optionC: "Leveller and spade",
        correctAnswer: "Trowel and harrow",
      }),
      shuffleOptions({
        question: "The process of cutting the ripened crop is known as ______.",
        optionA: "Harvesting",
        optionB: "Sowing",
        optionC: "Levelling",
        correctAnswer: "Harvesting",
      }),
      shuffleOptions({
        question: "Supplying water to the crops is called ______.",
        optionA: "Irrigation",
        optionB: "Cultivation",
        optionC: "Storing",
        correctAnswer: "Irrigation",
      }),
      shuffleOptions({
        question: "Crops are kept safely in ______ after threshing.",
        optionA: "Godowns",
        optionB: "Canals",
        optionC: "Gardens",
        correctAnswer: "Godowns",
      }),
      shuffleOptions({
        question: "______ is used for spraying insecticides on crops.",
        optionA: "Sprayer",
        optionB: "Seed drill",
        optionC: "Sickle",
        correctAnswer: "Sprayer",
      }),
      shuffleOptions({
        question: "The first step of cultivation is ______.",
        optionA: "Preparing the soil",
        optionB: "Harvesting",
        optionC: "Threshing",
        correctAnswer: "Preparing the soil",
      }),
      shuffleOptions({
        question: "______ and ______ add nutrients to the soil.",
        optionA: "Manure and fertiliser",
        optionB: "Sand and gravel",
        optionC: "Clay and stones",
        correctAnswer: "Manure and fertiliser",
      }),
      shuffleOptions({
        question: "The outer covering of the grain is called ______.",
        optionA: "Husk",
        optionB: "Chaff",
        optionC: "Fibre",
        correctAnswer: "Chaff",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Crops require different amounts of water for growth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Farmers add manure or fertiliser to improve soil condition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Harvesting means cutting ripened crops from the field.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sprayers are used for sowing seeds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tube wells are one of the means of irrigation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Winnowing separates grains from chaff.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tractor is used for harvesting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Farmers store their crops in godowns to protect them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Modern machines have reduced farmers’ hard work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Farming is an easy job that needs no effort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
