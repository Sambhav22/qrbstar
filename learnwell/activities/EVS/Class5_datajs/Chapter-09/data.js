export const chapter = "Chapter - 9: Growing Plants";
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
        question: "What is the baby plant inside a seed called?",
        optionA: "Cotyledon",
        optionB: "Embryo",
        optionC: "Plumule",
        correctAnswer: "Embryo",
      }),
      shuffleOptions({
        question: "Which part of the seed grows into the shoot?",
        optionA: "Radicle",
        optionB: "Plumule",
        optionC: "Cotyledon",
        correctAnswer: "Plumule",
      }),
      shuffleOptions({
        question: "What helps the seedling to make its own food after germination?",
        optionA: "Roots",
        optionB: "Leaves",
        optionC: "Cotyledons",
        correctAnswer: "Leaves",
      }),
      shuffleOptions({
        question: "Which agent carries light-weighted seeds like cotton to far-off places?",
        optionA: "Air",
        optionB: "Water",
        optionC: "Animals",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "Why do seeds get dispersed away from the parent plant?",
        optionA: "To get enough air, water, sunlight and space",
        optionB: "To avoid animals",
        optionC: "To stay near the parent plant",
        correctAnswer: "To get enough air, water, sunlight and space",
      }),
      shuffleOptions({
        question: "Which plant can grow from its leaf?",
        optionA: "Bryophyllum",
        optionB: "Dahlia",
        optionC: "Onion",
        correctAnswer: "Bryophyllum",
      }),
      shuffleOptions({
        question: "Which condition is not required for germination?",
        optionA: "Air",
        optionB: "Water",
        optionC: "Sound",
        correctAnswer: "Sound",
      }),
      shuffleOptions({
        question: "Which part of the seed protects the embryo?",
        optionA: "Seed coat",
        optionB: "Radicle",
        optionC: "Plumule",
        correctAnswer: "Seed coat",
      }),
      shuffleOptions({
        question: "The scattering of seeds by bursting of pods is known as—",
        optionA: "Explosion",
        optionB: "Dispersal by water",
        optionC: "Vegetative growth",
        correctAnswer: "Explosion",
      }),
      shuffleOptions({
        question: "Which plant part was used by Kavya to grow a new plant?",
        optionA: "Root",
        optionB: "Leaf",
        optionC: "Stem",
        correctAnswer: "Root",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants need both water and ______ to survive.",
        optionA: "nutrients",
        optionB: "food",
        optionC: "carbon dioxide",
        correctAnswer: "nutrients",
      }),
      shuffleOptions({
        question: "The outer covering of a seed is called the ______.",
        optionA: "seed coat",
        optionB: "embryo",
        optionC: "cotyledon",
        correctAnswer: "seed coat",
      }),
      shuffleOptions({
        question: "The radicle grows into the ______.",
        optionA: "root",
        optionB: "leaf",
        optionC: "stem",
        correctAnswer: "root",
      }),
      shuffleOptions({
        question: "The plumule develops into a ______.",
        optionA: "shoot",
        optionB: "root",
        optionC: "flower",
        correctAnswer: "shoot",
      }),
      shuffleOptions({
        question: "Some plants reproduce through their ______, stem or leaf.",
        optionA: "root",
        optionB: "fruit",
        optionC: "seed",
        correctAnswer: "root",
      }),
      shuffleOptions({
        question: "Light-weighted seeds of dandelion and cotton are dispersed by ______.",
        optionA: "wind",
        optionB: "water",
        optionC: "explosion",
        correctAnswer: "wind",
      }),
      shuffleOptions({
        question: "Seeds of lotus and coconut are dispersed by ______.",
        optionA: "water",
        optionB: "animals",
        optionC: "air",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Maize originally came from ______.",
        optionA: "Central America",
        optionB: "China",
        optionC: "India",
        correctAnswer: "Central America",
      }),
      shuffleOptions({
        question: "Chrysanthemum, a kind of flower, came from ______.",
        optionA: "China",
        optionB: "Japan",
        optionC: "America",
        correctAnswer: "China",
      }),
      shuffleOptions({
        question: "The process of growing plants from seeds is called ______.",
        optionA: "germination",
        optionB: "fertilisation",
        optionC: "dispersion",
        correctAnswer: "germination",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants can survive without water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The embryo is protected by the seed coat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air is not important for germination.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cotyledons store food for the embryo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Onion can be grown from its stem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sweet potato reproduces through its leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Seeds of peas and beans are dispersed by explosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water lily seeds are dispersed by wind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cutting and cementing around trees hampers their growth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seeds need air, water and sunlight for germination.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
