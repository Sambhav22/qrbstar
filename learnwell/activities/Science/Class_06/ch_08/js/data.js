export const chapter = "Chapter - 8: The Habitat of the Living";
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
        question: "What is the green substance in leaves that helps plants make their own food?",
        optionA: "Oxygen",
        optionB: "Chlorophyll",
        optionC: "Water",
        correctAnswer: "Chlorophyll",
      }),
      shuffleOptions({
        question: "Which process do plants use to make their food using sunlight, water and carbon dioxide?",
        optionA: "Photosynthesis",
        optionB: "Transpiration",
        optionC: "Respiration",
        correctAnswer: "Photosynthesis",
      }),
      shuffleOptions({
        question: "What are the living parts of the environment called?",
        optionA: "Abiotic components",
        optionB: "Non-living things",
        optionC: "Biotic components",
        correctAnswer: "Biotic components",
      }),
      shuffleOptions({
        question: "Which organisms feed on the dead bodies of plants and animals?",
        optionA: "Scavengers",
        optionB: "Herbivores",
        optionC: "Carnivores",
        correctAnswer: "Scavengers",
      }),
      shuffleOptions({
        question: "What is the prime source of energy on Earth?",
        optionA: "The Moon",
        optionB: "The Sun",
        optionC: "Fire",
        correctAnswer: "The Sun",
      }),
      shuffleOptions({
        question: "Which part of the environment provides minerals and water to plants?",
        optionA: "Air",
        optionB: "Soil",
        optionC: "Light",
        correctAnswer: "Soil",
      }),
      shuffleOptions({
        question: "Which gas makes up about 78% of the Earth’s atmosphere?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Nitrogen",
      }),
      shuffleOptions({
        question: "The process of returning nutrients to the soil is called—",
        optionA: "Evaporation",
        optionB: "Recycling of nutrients",
        optionC: "Photosynthesis",
        correctAnswer: "Recycling of nutrients",
      }),
      shuffleOptions({
        question: "Dolphins breathe through—",
        optionA: "Gills",
        optionB: "Blowholes",
        optionC: "Skin",
        correctAnswer: "Blowholes",
      }),
      shuffleOptions({
        question: "Which type of plants are found in deserts?",
        optionA: "Xerophytes",
        optionB: "Hydrophytes",
        optionC: "Epiphytes",
        correctAnswer: "Xerophytes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The surroundings in which an organism lives are called its ________.",
        optionA: "Habitat",
        optionB: "Home",
        optionC: "Shelter",
        correctAnswer: "Habitat",
      }),
      shuffleOptions({
        question: "Plants like lotus and water lily are ________ plants.",
        optionA: "Floating",
        optionB: "Submerged",
        optionC: "Land",
        correctAnswer: "Floating",
      }),
      shuffleOptions({
        question: "Fish breathe through ________.",
        optionA: "Lungs",
        optionB: "Gills",
        optionC: "Skin",
        correctAnswer: "Gills",
      }),
      shuffleOptions({
        question: "________ and ________ feed on the bodies of dead animals.",
        optionA: "Scavengers and decomposers",
        optionB: "Carnivores and herbivores",
        optionC: "Producers and consumers",
        correctAnswer: "Scavengers and decomposers",
      }),
      shuffleOptions({
        question: "The body of a fish is ________ to help it swim easily in water.",
        optionA: "Streamlined",
        optionB: "Flat",
        optionC: "Round",
        correctAnswer: "Streamlined",
      }),
      shuffleOptions({
        question: "A camel is known as the ________ of the desert.",
        optionA: "King",
        optionB: "Ship",
        optionC: "Animal",
        correctAnswer: "Ship",
      }),
      shuffleOptions({
        question: "________ are the non-living components of the environment.",
        optionA: "Abiotic components",
        optionB: "Biotic components",
        optionC: "Living beings",
        correctAnswer: "Abiotic components",
      }),
      shuffleOptions({
        question: "The plants growing in desert are called ________.",
        optionA: "Xerophytes",
        optionB: "Hydrophytes",
        optionC: "Bryophytes",
        correctAnswer: "Xerophytes",
      }),
      shuffleOptions({
        question: "________ is the measure of how hot or cold something is.",
        optionA: "Temperature",
        optionB: "Pressure",
        optionC: "Heat",
        correctAnswer: "Temperature",
      }),
      shuffleOptions({
        question: "The main source of light and energy for all living things is the ________.",
        optionA: "Sun",
        optionB: "Earth",
        optionC: "Moon",
        correctAnswer: "Sun",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Abiotic factors are non-living components like air, water and soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bacteria and fungi are examples of producers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Sun is the prime source of energy on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cacti have long roots and spongy stems to store water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Whales breathe through gills like fish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Frogs can breathe only through their lungs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Grasslands receive heavy rainfall throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Evergreen plants have needle-shaped leaves and remain green throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Scavengers help in keeping the environment clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Amazon Rainforest is often called the “lungs of the world.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
