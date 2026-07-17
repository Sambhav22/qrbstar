export const chapter = "Chapter - 8: Plants Around Us";
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
        question: "Which part of the plant absorbs water and minerals from the soil?",
        optionA: "Stem",
        optionB: "Root",
        optionC: "Leaf",
        optionD: "Flower",
        correctAnswer: "Root",
      }),
      shuffleOptions({
        question: "Which roots grow straight down from the stem?",
        optionA: "Fibrous roots",
        optionB: "Aerial roots",
        optionC: "Tap roots",
        optionD: "Storage roots",
        correctAnswer: "Tap roots",
      }),
      shuffleOptions({
        question: "Which flower blooms in the spring season?",
        optionA: "Rose",
        optionB: "Palash",
        optionC: "Jasmine",
        optionD: "Marigold",
        correctAnswer: "Palash",
      }),
      shuffleOptions({
        question: "Which flowers are mainly used for making perfumes?",
        optionA: "Jasmine",
        optionB: "Hibiscus",
        optionC: "Sunflower",
        optionD: "Lily",
        correctAnswer: "Jasmine",
      }),
      shuffleOptions({
        question: "Which trees have aerial roots that act like pillars?",
        optionA: "Neem",
        optionB: "Banyan",
        optionC: "Mango",
        optionD: "Guava",
        correctAnswer: "Banyan",
      }),
      shuffleOptions({
        question: "Cutting down trees on a large scale is called",
        optionA: "Afforestation",
        optionB: "Deforestation",
        optionC: "Plantation",
        optionD: "Soil erosion",
        correctAnswer: "Deforestation",
      }),
      shuffleOptions({
        question: "Which of the following plants has fibrous roots?",
        optionA: "Carrot",
        optionB: "Grass",
        optionC: "Radish",
        optionD: "Beetroot",
        correctAnswer: "Grass",
      }),
      shuffleOptions({
        question: "Who collects nectar from flowers to make honey?",
        optionA: "Ants",
        optionB: "Bees",
        optionC: "Butterflies",
        optionD: "Spiders",
        correctAnswer: "Bees",
      }),
      shuffleOptions({
        question: "Which part of the flower protects it when it is a bud?",
        optionA: "Petal",
        optionB: "Sepal",
        optionC: "Leaf",
        optionD: "Stem",
        correctAnswer: "Sepal",
      }),
      shuffleOptions({
        question: "People living in forests are called",
        optionA: "Villagers",
        optionB: "Tribals",
        optionC: "Workers",
        optionD: "Farmers",
        correctAnswer: "Tribals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Roots of a plant help to prevent _______.",
        optionA: "Pollution",
        optionB: "Soil erosion",
        optionC: "Floods",
        optionD: "Storms",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "Plants like carrot and beetroot store food in their _______.",
        optionA: "Roots",
        optionB: "Stem",
        optionC: "Leaves",
        optionD: "Flowers",
        correctAnswer: "Roots",
      }),
      shuffleOptions({
        question: "The most beautiful part of a plant is its _______.",
        optionA: "Leaf",
        optionB: "Flower",
        optionC: "Root",
        optionD: "Seed",
        correctAnswer: "Flower",
      }),
      shuffleOptions({
        question: "Flowers are used to make _______.",
        optionA: "Perfumes",
        optionB: "Fruits",
        optionC: "Soil",
        optionD: "Seeds",
        correctAnswer: "Perfumes",
      }),
      shuffleOptions({
        question: "The green outer covering of a bud is called _______.",
        optionA: "Leaf",
        optionB: "Sepal",
        optionC: "Petal",
        optionD: "Fruit",
        correctAnswer: "Sepal",
      }),
      shuffleOptions({
        question: "_______ roots grow from branches down to the soil.",
        optionA: "Fibrous",
        optionB: "Aerial",
        optionC: "Tap",
        optionD: "Storage",
        correctAnswer: "Aerial",
      }),
      shuffleOptions({
        question: "Flowers like gulmohar and jasmine bloom in _______.",
        optionA: "Spring",
        optionB: "Summer",
        optionC: "Winter",
        optionD: "Monsoon",
        correctAnswer: "Summer",
      }),
      shuffleOptions({
        question: "A person who sells flowers is known as a _______.",
        optionA: "Gardener",
        optionB: "Florist",
        optionC: "Farmer",
        optionD: "Vendor",
        correctAnswer: "Florist",
      }),
      shuffleOptions({
        question: "Wild plants that grow by themselves are called _______.",
        optionA: "Weeds",
        optionB: "Crops",
        optionC: "Fruits",
        optionD: "Trees",
        correctAnswer: "Weeds",
      }),
      shuffleOptions({
        question: "Cutting of trees harms the _______.",
        optionA: "Environment",
        optionB: "Sky",
        optionC: "Water",
        optionD: "Stones",
        correctAnswer: "Environment",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Roots grow above the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fibrous roots spread out from the base of the stem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Palash flowers bloom in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Honey is made from the nectar of flowers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deforestation helps to increase greenery.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sepals protect the flower when it is in the bud stage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wild plants are called weeds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roots prevent soil erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Banyan trees have aerial roots that act like pillars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Forests provide homes to tribals and animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
