export const chapter = "Chapter - 1: Crop Production and Management";
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
        question: "Which process involves turning and loosening of soil before sowing?",
        optionA: "Sowing",
        optionB: "Ploughing",
        optionC: "Weeding",
        correctAnswer: "Ploughing",
      }),
      shuffleOptions({
        question: "Which instrument is funnel-shaped and used for sowing seeds in rows?",
        optionA: "Hoe",
        optionB: "Seed drill",
        optionC: "Leveller",
        correctAnswer: "Seed drill",
      }),
      shuffleOptions({
        question: "Which element is required by plants in a large quantity and is therefore a macronutrient?",
        optionA: "Iron",
        optionB: "Calcium",
        optionC: "Zinc",
        correctAnswer: "Calcium",
      }),
      shuffleOptions({
        question: "Which modern irrigation method saves the maximum amount of water?",
        optionA: "Sprinkler",
        optionB: "Drip",
        optionC: "Chain pump",
        correctAnswer: "Drip",
      }),
      shuffleOptions({
        question: "Which gas is released during the decomposition of manure?",
        optionA: "Carbon dioxide",
        optionB: "Methane",
        optionC: "Hydrogen",
        correctAnswer: "Methane",
      }),
      shuffleOptions({
        question: "Which crops are sown in the rainy season in India?",
        optionA: "Kharif crops",
        optionB: "Rabi crops",
        optionC: "Zaid crops",
        correctAnswer: "Kharif crops",
      }),
      shuffleOptions({
        question: "Which chemical is sprayed to destroy weeds in a field?",
        optionA: "Pesticide",
        optionB: "Weedicide",
        optionC: "Fertiliser",
        correctAnswer: "Weedicide",
      }),
      shuffleOptions({
        question: "Which scientist is known for creating the Green Revolution in wheat?",
        optionA: "Louis Pasteur",
        optionB: "Norman Borlaug",
        optionC: "Gregor Mendel",
        correctAnswer: "Norman Borlaug",
      }),
      shuffleOptions({
        question: "Which machine can perform harvesting, threshing, and winnowing together?",
        optionA: "Tractor",
        optionB: "Combine",
        optionC: "Cultivator",
        correctAnswer: "Combine",
      }),
      shuffleOptions({
        question: "Which festival in Punjab marks the celebration of harvesting?",
        optionA: "Pongal",
        optionB: "Baisakhi",
        optionC: "Onam",
        correctAnswer: "Baisakhi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The branch of agriculture that deals with fruits and flowers is called ________.",
        optionA: "Horticulture",
        optionB: "Apiculture",
        optionC: "Sericulture",
        correctAnswer: "Horticulture",
      }),
      shuffleOptions({
        question: "The process of loosening and turning the soil is called ________.",
        optionA: "Ploughing",
        optionB: "Sowing",
        optionC: "Irrigation",
        correctAnswer: "Ploughing",
      }),
      shuffleOptions({
        question: "The ancient method of scattering seeds by hand is known as ________.",
        optionA: "Broadcasting",
        optionB: "Levelling",
        optionC: "Transplanting",
        correctAnswer: "Broadcasting",
      }),
      shuffleOptions({
        question: "The storage structures used for storing grains on a large scale are called ________.",
        optionA: "Silos",
        optionB: "Bins",
        optionC: "Boxes",
        correctAnswer: "Silos",
      }),
      shuffleOptions({
        question: "The practice of growing one pulse crop between two cereal crops is known as ________.",
        optionA: "Crop rotation",
        optionB: "Multiple cropping",
        optionC: "Mixed farming",
        correctAnswer: "Crop rotation",
      }),
      shuffleOptions({
        question: "The ________ method of irrigation is suitable for uneven lands.",
        optionA: "Sprinkler",
        optionB: "Drip",
        optionC: "Moat",
        correctAnswer: "Sprinkler",
      }),
      shuffleOptions({
        question: "The bacteria that fix atmospheric nitrogen in soil are called ________.",
        optionA: "Rhizobium",
        optionB: "Clostridium",
        optionC: "Lactobacillus",
        correctAnswer: "Rhizobium",
      }),
      shuffleOptions({
        question: "The organic material formed by decomposition of waste is called ________.",
        optionA: "Manure",
        optionB: "Compost",
        optionC: "Fertiliser",
        correctAnswer: "Manure",
      }),
      shuffleOptions({
        question: "The chemical salts added to soil to provide nutrients are called ________.",
        optionA: "Fertilisers",
        optionB: "Manures",
        optionC: "Pesticides",
        correctAnswer: "Fertilisers",
      }),
      shuffleOptions({
        question: "The process of removing unwanted plants from a field is called ________.",
        optionA: "Weeding",
        optionB: "Harvesting",
        optionC: "Sowing",
        correctAnswer: "Weeding",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kharif crops are grown in the rainy season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fertilisers provide humus to the soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sprinkler irrigation is useful on uneven land surfaces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Broadcasting ensures uniform seed spacing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Neem leaves help protect stored grains from pests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pesticides can destroy both harmful and useful microbes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Weeds compete with main crops for nutrients and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Buffer stock is maintained to meet shortage of food during drought.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Harvesting is done before crops mature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cold storage prevents spoilage of fruits and vegetables.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
