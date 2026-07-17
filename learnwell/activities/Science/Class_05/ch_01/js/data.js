export const chapter = "Chapter - 1: Growth and Development of Plants";
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
        question: "Which part of the seed gives rise to the root?",
        optionA: "Plumule",
        optionB: "Radicle",
        optionC: "Cotyledon",
        correctAnswer: "Radicle",
      }),
      shuffleOptions({
        question: "Which plant can grow from the edges of its leaves?",
        optionA: "Bryophyllum",
        optionB: "Potato",
        optionC: "Ginger",
        correctAnswer: "Bryophyllum",
      }),
      shuffleOptions({
        question: "What do cotyledons mainly store for the baby plant?",
        optionA: "Water",
        optionB: "Food",
        optionC: "Air",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Which of these helps coconut seeds to float on water?",
        optionA: "Fibrous covering",
        optionB: "Hairy surface",
        optionC: "Thin shell",
        correctAnswer: "Fibrous covering",
      }),
      shuffleOptions({
        question: "Which condition is not required for seed germination?",
        optionA: "Water",
        optionB: "Air",
        optionC: "Fertiliser",
        correctAnswer: "Fertiliser",
      }),
      shuffleOptions({
        question: "Which of the following plants reproduces through underground stems?",
        optionA: "Rose",
        optionB: "Ginger",
        optionC: "Turnip",
        correctAnswer: "Ginger",
      }),
      shuffleOptions({
        question: "Which type of soil helps cotton plants to grow best?",
        optionA: "Sandy soil",
        optionB: "Black soil",
        optionC: "Clayey soil",
        correctAnswer: "Black soil",
      }),
      shuffleOptions({
        question: "Which seeds are dispersed through explosion of seed pods?",
        optionA: "Pea",
        optionB: "Coconut",
        optionC: "Lotus",
        correctAnswer: "Pea",
      }),
      shuffleOptions({
        question: "Which part of the embryo develops into the shoot?",
        optionA: "Radicle",
        optionB: "Plumule",
        optionC: "Seed coat",
        correctAnswer: "Plumule",
      }),
      shuffleOptions({
        question: "What are plants grown in large quantities for food or other purposes called?",
        optionA: "Crops",
        optionB: "Weeds",
        optionC: "Shrubs",
        correctAnswer: "Crops",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process by which a seed grows into a new plant is called _______.",
        optionA: "Germination",
        optionB: "Fertilisation",
        optionC: "Pollination",
        correctAnswer: "Germination",
      }),
      shuffleOptions({
        question: "Plants like rose and sugarcane reproduce through their _______.",
        optionA: "Stem",
        optionB: "Root",
        optionC: "Leaf",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "Seeds of dandelion are dispersed by _______.",
        optionA: "Wind",
        optionB: "Water",
        optionC: "Animals",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "The baby plant inside the seed is called the _______.",
        optionA: "Embryo",
        optionB: "Cotyledon",
        optionC: "Seed coat",
        correctAnswer: "Embryo",
      }),
      shuffleOptions({
        question: "Crops that grow in summer are called _______ crops.",
        optionA: "Kharif",
        optionB: "Rabi",
        optionC: "Winter",
        correctAnswer: "Kharif",
      }),
      shuffleOptions({
        question: "The outer covering of a seed is known as the _______.",
        optionA: "Seed coat",
        optionB: "Plumule",
        optionC: "Cotyledon",
        correctAnswer: "Seed coat",
      }),
      shuffleOptions({
        question: "The part of the embryo that grows into the root is called the _______.",
        optionA: "Plumule",
        optionB: "Radicle",
        optionC: "Cotyledon",
        correctAnswer: "Radicle",
      }),
      shuffleOptions({
        question: "Plants that grow in desert regions like cactus are adapted to live with very little _______.",
        optionA: "Water",
        optionB: "Air",
        optionC: "Soil",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Coconut trees usually grow in _______ regions.",
        optionA: "Coastal",
        optionB: "Mountainous",
        optionC: "Desert",
        correctAnswer: "Coastal",
      }),
      shuffleOptions({
        question: "Crops like wheat and gram that grow in winter are known as _______ crops.",
        optionA: "Rabi",
        optionB: "Kharif",
        optionC: "Spring",
        correctAnswer: "Rabi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "All seeds that fall on the ground grow into new plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The radicle forms the shoot and leaves of the plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plants like ferns and mosses reproduce by spores.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The fibrous covering of coconut helps it to float on water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seeds dispersed by wind are usually heavy and large.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Crops like rice and jowar are grown in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A scarecrow is used to attract birds to the fields.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bryophyllum reproduces from the edges of its leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Germination requires water, air, and warmth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton plants grow best in black soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
