export const chapter = "Chapter - 1: Food : Where does It come from";
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
        question: "Which chemical sometimes found in potatoes can be harmful if present in large amounts?",
        optionA: "Cyanide",
        optionB: "Solanine",
        optionC: "Nicotine",
        correctAnswer: "Solanine",
      }),
      shuffleOptions({
        question: "Which country produces the largest amount of coffee in the world?",
        optionA: "Vietnam",
        optionB: "Brazil",
        optionC: "Colombia",
        correctAnswer: "Brazil",
      }),
      shuffleOptions({
        question: "Which animal’s milk is non-allergenic and easily digestible for humans?",
        optionA: "Cow",
        optionB: "Goat",
        optionC: "Camel",
        correctAnswer: "Goat",
      }),
      shuffleOptions({
        question: "Which part of the plant gives us saffron?",
        optionA: "Petal",
        optionB: "Stigma",
        optionC: "Bark",
        correctAnswer: "Stigma",
      }),
      shuffleOptions({
        question: "What is the main source of honey collected by bees?",
        optionA: "Sap",
        optionB: "Nectar",
        optionC: "Pollen",
        correctAnswer: "Nectar",
      }),
      shuffleOptions({
        question: "Which food item acts as fuel for all living organisms?",
        optionA: "Water",
        optionB: "Food",
        optionC: "Air",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "What process removes germs from raw food and adds flavour?",
        optionA: "Boiling",
        optionB: "Cooking",
        optionC: "Freezing",
        correctAnswer: "Cooking",
      }),
      shuffleOptions({
        question: "What are animals called that eat only fruits?",
        optionA: "Folivores",
        optionB: "Frugivores",
        optionC: "Xylophages",
        correctAnswer: "Frugivores",
      }),
      shuffleOptions({
        question: "What type of animals feed on both plants and other animals?",
        optionA: "Herbivores",
        optionB: "Omnivores",
        optionC: "Carnivores",
        correctAnswer: "Omnivores",
      }),
      shuffleOptions({
        question: "Who discovered the process of pasteurisation used to make milk safe for drinking?",
        optionA: "Alexander Fleming",
        optionB: "Louis Pasteur",
        optionC: "Robert Koch",
        correctAnswer: "Louis Pasteur",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Animals that eat both plants and animals are called ________.",
        optionA: "Carnivores",
        optionB: "Omnivores",
        optionC: "Herbivores",
        correctAnswer: "Omnivores",
      }),
      shuffleOptions({
        question: "________ and ________ are beverages obtained from plants.",
        optionA: "Tea and Coffee",
        optionB: "Juice and Milk",
        optionC: "Cocoa and Butter",
        correctAnswer: "Tea and Coffee",
      }),
      shuffleOptions({
        question: "The sugary liquid collected by bees from flowers is called ________.",
        optionA: "Nectar",
        optionB: "Honey",
        optionC: "Sap",
        correctAnswer: "Nectar",
      }),
      shuffleOptions({
        question: "________ is a bud used as a spice as well as in medicines.",
        optionA: "Clove",
        optionB: "Cinnamon",
        optionC: "Pepper",
        correctAnswer: "Clove",
      }),
      shuffleOptions({
        question: "________ are animals that feed mainly on leaves.",
        optionA: "Folivores",
        optionB: "Frugivores",
        optionC: "Xylophages",
        correctAnswer: "Folivores",
      }),
      shuffleOptions({
        question: "________ and ________ are examples of sugar-producing plants.",
        optionA: "Sugarcane and Beetroot",
        optionB: "Wheat and Maize",
        optionC: "Rice and Mustard",
        correctAnswer: "Sugarcane and Beetroot",
      }),
      shuffleOptions({
        question: "The toxin ________ is occasionally found in potatoes.",
        optionA: "Solanine",
        optionB: "Cyanide",
        optionC: "Nicotine",
        correctAnswer: "Solanine",
      }),
      shuffleOptions({
        question: "________ is obtained from the bark of a tree and used as a spice.",
        optionA: "Cinnamon",
        optionB: "Cardamom",
        optionC: "Turmeric",
        correctAnswer: "Cinnamon",
      }),
      shuffleOptions({
        question: "________ and ________ are used to preserve food items like pickles.",
        optionA: "Salt and Vinegar",
        optionB: "Oil and Water",
        optionC: "Sugar and Lemon",
        correctAnswer: "Salt and Vinegar",
      }),
      shuffleOptions({
        question: "The process of exposing food to wood smoke for preservation is called ________.",
        optionA: "Smoking",
        optionB: "Drying",
        optionC: "Roasting",
        correctAnswer: "Smoking",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Brown rice is rich in Vitamin B-group nutrients.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Goat milk causes allergies in most people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Folivores are animals that eat fruits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pure honey dissolves quickly when dropped in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Saffron is obtained from the stem of the Crocus plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Smoking food helps in preventing bacterial growth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Herbivores have sharp tearing teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clove is obtained from a flower bud.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pasteurisation is a process used to kill germs in milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Carnivores eat both plants and animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
