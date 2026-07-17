export const chapter = "Chapter - 17: Forest : Our Lifeline";
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
        question: "Which layer of the forest receives the maximum sunlight?",
        optionA: "Emergent layer",
        optionB: "Understorey layer",
        optionC: "Forest floor",
        correctAnswer: "Emergent layer",
      }),
      shuffleOptions({
        question: "What is the uppermost green roof formed by trees and shrubs in a forest called?",
        optionA: "Canopy",
        optionB: "Forest floor",
        optionC: "Grass layer",
        correctAnswer: "Canopy",
      }),
      shuffleOptions({
        question: "Which forest layer is hot, damp and receives very little sunlight?",
        optionA: "Understorey layer",
        optionB: "Canopy layer",
        optionC: "Forest floor",
        correctAnswer: "Understorey layer",
      }),
      shuffleOptions({
        question: "Which part of the forest receives only about two percent of sunlight?",
        optionA: "Forest floor",
        optionB: "Canopy layer",
        optionC: "Emergent layer",
        correctAnswer: "Forest floor",
      }),
      shuffleOptions({
        question: "What are the pointed tips of leaves that help rainwater to run off easily called?",
        optionA: "Drip tips",
        optionB: "Rain tips",
        optionC: "Leaf points",
        correctAnswer: "Drip tips",
      }),
      shuffleOptions({
        question: "Which tree provides quinine that is used in the treatment of malaria?",
        optionA: "Cinchona",
        optionB: "Neem",
        optionC: "Eucalyptus",
        correctAnswer: "Cinchona",
      }),
      shuffleOptions({
        question: "What is the main function of the roots of trees?",
        optionA: "To bind soil and prevent erosion",
        optionB: "To store food",
        optionC: "To produce flowers",
        correctAnswer: "To bind soil and prevent erosion",
      }),
      shuffleOptions({
        question: "What is the transfer of energy from one organism to another called?",
        optionA: "Food chain",
        optionB: "Ecosystem",
        optionC: "Food web",
        correctAnswer: "Food chain",
      }),
      shuffleOptions({
        question: "What is the cutting down of trees on a large scale called?",
        optionA: "Deforestation",
        optionB: "Afforestation",
        optionC: "Reforestation",
        correctAnswer: "Deforestation",
      }),
      shuffleOptions({
        question: "Which festival is celebrated in the first week of July to promote tree plantation?",
        optionA: "Van Mahotsav",
        optionB: "Earth Day",
        optionC: "World Environment Day",
        correctAnswer: "Van Mahotsav",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The upper, extensively branched part of a tree is called its ______.",
        optionA: "crown",
        optionB: "stem",
        optionC: "bark",
        correctAnswer: "crown",
      }),
      shuffleOptions({
        question: "The layer formed by the tallest trees is called the ______.",
        optionA: "emergent layer",
        optionB: "canopy",
        optionC: "understorey",
        correctAnswer: "emergent layer",
      }),
      shuffleOptions({
        question: "The planting of trees in deforested areas is known as ______.",
        optionA: "afforestation",
        optionB: "deforestation",
        optionC: "desertification",
        correctAnswer: "afforestation",
      }),
      shuffleOptions({
        question: "A network of interlinked food chains in a forest is called a ______.",
        optionA: "food web",
        optionB: "ecosystem",
        optionC: "food link",
        correctAnswer: "food web",
      }),
      shuffleOptions({
        question: "Forests are often called the ______ of the earth as they produce oxygen.",
        optionA: "lungs",
        optionB: "heart",
        optionC: "roots",
        correctAnswer: "lungs",
      }),
      shuffleOptions({
        question: "The removal of forests in large numbers is called ______.",
        optionA: "deforestation",
        optionB: "afforestation",
        optionC: "plantation",
        correctAnswer: "deforestation",
      }),
      shuffleOptions({
        question: "The dark organic matter formed by decaying leaves and animals is called ______.",
        optionA: "humus",
        optionB: "compost",
        optionC: "manure",
        correctAnswer: "humus",
      }),
      shuffleOptions({
        question: "Animals that feed on dead and decaying bodies are known as ______.",
        optionA: "scavengers",
        optionB: "herbivores",
        optionC: "omnivores",
        correctAnswer: "scavengers",
      }),
      shuffleOptions({
        question: "The variety of plant and animal life in a habitat is known as ______.",
        optionA: "biodiversity",
        optionB: "fertility",
        optionC: "ecosystem",
        correctAnswer: "biodiversity",
      }),
      shuffleOptions({
        question: "A natural self-sustaining system of living and non-living components is an ______.",
        optionA: "ecosystem",
        optionB: "environment",
        optionC: "habitat",
        correctAnswer: "ecosystem",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Forests are home to over two-thirds of the known terrestrial species.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The canopy layer receives the least amount of sunlight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Forests help to reduce global warming by absorbing carbon dioxide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roots of trees help in preventing soil erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All animals in a forest live on the forest floor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Forests act as wind breakers and reduce noise pollution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deforestation increases the concentration of greenhouse gases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Forests help maintain the water cycle through transpiration.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Afforestation means cutting down trees for timber.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The study and conservation of forests are important for maintaining biodiversity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
