export const chapter = "Chapter - 4: Plants Around Us";
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
        question: "What do plants need to grow and live?",
        optionA: "Air, water, soil, sunlight and climate",
        optionB: "Sand and stones",
        optionC: "Only air",
        correctAnswer: "Air, water, soil, sunlight and climate",
      }),
      shuffleOptions({
        question: "Which plants are tall, big and strong?",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Trees",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "Which of these plants has thin woody stems?",
        optionA: "Shrubs",
        optionB: "Climbers",
        optionC: "Herbs",
        correctAnswer: "Shrubs",
      }),
      shuffleOptions({
        question: "Which plants have soft and green stems?",
        optionA: "Herbs",
        optionB: "Trees",
        optionC: "Shrubs",
        correctAnswer: "Herbs",
      }),
      shuffleOptions({
        question: "Which plants grow along the ground?",
        optionA: "Creepers",
        optionB: "Climbers",
        optionC: "Trees",
        correctAnswer: "Creepers",
      }),
      shuffleOptions({
        question: "What do desert plants such as cactus have instead of leaves?",
        optionA: "Thorns",
        optionB: "Flowers",
        optionC: "Fibres",
        correctAnswer: "Thorns",
      }),
      shuffleOptions({
        question: "Which of these is a plant that grows on mountains?",
        optionA: "Fir",
        optionB: "Babool",
        optionC: "Cactus",
        correctAnswer: "Fir",
      }),
      shuffleOptions({
        question: "What are plants under the sea called?",
        optionA: "Aquatic plants",
        optionB: "Desert plants",
        optionC: "Mountain plants",
        correctAnswer: "Aquatic plants",
      }),
      shuffleOptions({
        question: "Which plant gives us fibre for making clothes?",
        optionA: "Cotton",
        optionB: "Neem",
        optionC: "Tulsi",
        correctAnswer: "Cotton",
      }),
      shuffleOptions({
        question: "Which liquid is obtained from the rubber plant?",
        optionA: "Latex",
        optionB: "Sap",
        optionC: "Oil",
        correctAnswer: "Latex",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants with ________ stems are called herbs.",
        optionA: "Hard and brown",
        optionB: "Soft and green",
        optionC: "Thick and strong",
        correctAnswer: "Soft and green",
      }),
      shuffleOptions({
        question: "Plants with ________ stems are called shrubs.",
        optionA: "Thin woody",
        optionB: "Soft green",
        optionC: "Long strong",
        correctAnswer: "Thin woody",
      }),
      shuffleOptions({
        question: "Plants that need support to grow upward are called ________.",
        optionA: "Creepers",
        optionB: "Climbers",
        optionC: "Trees",
        correctAnswer: "Climbers",
      }),
      shuffleOptions({
        question: "________ grow along the ground.",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Creepers",
        correctAnswer: "Creepers",
      }),
      shuffleOptions({
        question: "Trees like pine and deodar grow on ________.",
        optionA: "Mountains",
        optionB: "Deserts",
        optionC: "Plains",
        correctAnswer: "Mountains",
      }),
      shuffleOptions({
        question: "Plants like cactus grow in ________ regions.",
        optionA: "Mountain",
        optionB: "Desert",
        optionC: "Sea",
        correctAnswer: "Desert",
      }),
      shuffleOptions({
        question: "Seaweeds and kelp grow ________ the sea.",
        optionA: "On",
        optionB: "Under",
        optionC: "Near",
        correctAnswer: "Under",
      }),
      shuffleOptions({
        question: "Tulsi and neem are used to make ________.",
        optionA: "Medicines",
        optionB: "Furniture",
        optionC: "Paper",
        correctAnswer: "Medicines",
      }),
      shuffleOptions({
        question: "Cotton and jute provide ________ to make clothes.",
        optionA: "Fibre",
        optionB: "Oil",
        optionC: "Spices",
        correctAnswer: "Fibre",
      }),
      shuffleOptions({
        question: "The wood pulp of bamboo tree is used to make ________.",
        optionA: "Paper",
        optionB: "Rubber",
        optionC: "Perfume",
        correctAnswer: "Paper",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants are living things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All plants are of the same size and shape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trees have thick trunks and many branches.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Herbs are small plants with soft stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Climbers can stand on their own.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Creepers grow along the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cactus and babool grow in deserts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sea plants help to keep the water fresh and clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Latex is obtained from the cotton plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plants are natural air purifiers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
