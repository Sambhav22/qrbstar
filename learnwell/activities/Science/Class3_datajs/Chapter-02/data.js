export const chapter = "Chapter - 2: Parts of a Plant";
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
        question: "Which part of the plant helps it to absorb water from the soil?",
        optionA: "Stem",
        optionB: "Root",
        optionC: "Leaf",
        correctAnswer: "Root",
      }),
      shuffleOptions({
        question: "Which part of a tree is thick, strong, and woody?",
        optionA: "Stem",
        optionB: "Trunk",
        optionC: "Branch",
        correctAnswer: "Trunk",
      }),
      shuffleOptions({
        question: "Which type of root is found in wheat and rice plants?",
        optionA: "Taproot",
        optionB: "Fibrous root",
        optionC: "Thick root",
        correctAnswer: "Fibrous root",
      }),
      shuffleOptions({
        question: "Which part of the plant supports branches and bears flowers?",
        optionA: "Root",
        optionB: "Stem",
        optionC: "Leaf",
        correctAnswer: "Stem",
      }),
      shuffleOptions({
        question: "What gives the green colour to the leaves?",
        optionA: "Water",
        optionB: "Chlorophyll",
        optionC: "Air",
        correctAnswer: "Chlorophyll",
      }),
      shuffleOptions({
        question: "Which type of stem needs support to grow upward?",
        optionA: "Tree",
        optionB: "Climber",
        optionC: "Creeper",
        correctAnswer: "Climber",
      }),
      shuffleOptions({
        question: "Which part of the plant is called its food factory?",
        optionA: "Stem",
        optionB: "Leaf",
        optionC: "Flower",
        correctAnswer: "Leaf",
      }),
      shuffleOptions({
        question: "Which part of the flower changes into a fruit?",
        optionA: "Upper part",
        optionB: "Lower part",
        optionC: "Middle part",
        correctAnswer: "Lower part",
      }),
      shuffleOptions({
        question: "Which part of the fruit protects the seeds inside it?",
        optionA: "Peel",
        optionB: "Flesh",
        optionC: "Fruit cover",
        correctAnswer: "Fruit cover",
      }),
      shuffleOptions({
        question: "What does a seed need to grow into a new plant?",
        optionA: "Air, water and warmth",
        optionB: "Sunlight only",
        optionC: "Soil only",
        correctAnswer: "Air, water and warmth",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The parts of a plant that lie below the soil form the ______.",
        optionA: "Root system",
        optionB: "Shoot system",
        optionC: "Leaf system",
        correctAnswer: "Root system",
      }),
      shuffleOptions({
        question: "The parts of a plant above the soil form the ______.",
        optionA: "Root system",
        optionB: "Shoot system",
        optionC: "Flower system",
        correctAnswer: "Shoot system",
      }),
      shuffleOptions({
        question: "The soft green stem of small plants is called a ______.",
        optionA: "Herb",
        optionB: "Shrub",
        optionC: "Tree",
        correctAnswer: "Herb",
      }),
      shuffleOptions({
        question: "Leaves have tiny holes on their surface called ______.",
        optionA: "Stomata",
        optionB: "Pores",
        optionC: "Spots",
        correctAnswer: "Stomata",
      }),
      shuffleOptions({
        question: "The leaf is known as the ______ of the plant.",
        optionA: "Factory",
        optionB: "Kitchen",
        optionC: "Bedroom",
        correctAnswer: "Kitchen",
      }),
      shuffleOptions({
        question: "Roots of carrot and turnip store ______ in them.",
        optionA: "Water",
        optionB: "Food",
        optionC: "Minerals",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Flowers like cauliflower and broccoli store ______.",
        optionA: "Food",
        optionB: "Seeds",
        optionC: "Water",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "A plant cannot make food without ______.",
        optionA: "Sunlight",
        optionB: "Air",
        optionC: "Soil",
        correctAnswer: "Sunlight",
      }),
      shuffleOptions({
        question: "The rings in the trunk of a tree show its ______.",
        optionA: "Age",
        optionB: "Colour",
        optionC: "Height",
        correctAnswer: "Age",
      }),
      shuffleOptions({
        question: "Seeds grow into new plants when they get air, water, warmth and ______.",
        optionA: "Fertile soil",
        optionB: "Darkness",
        optionC: "Wind",
        correctAnswer: "Fertile soil",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Taproot is a single thick main root.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fibrous roots grow from the end of the stem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Stems of trees are soft and weak.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Leaves help plants to breathe through stomata.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Flowers are the reproductive parts of a plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fruits protect the seeds inside them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The trunk is a soft green part of the plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Roots help the plant to stand upright in the soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every ring inside a tree trunk shows one year’s growth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seeds can grow without air and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
