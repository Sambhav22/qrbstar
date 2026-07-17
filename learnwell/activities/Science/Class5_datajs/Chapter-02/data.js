export const chapter = "Chapter - 2: Animals World";
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
        question: "Which region on Earth is always covered with snow?",
        optionA: "Desert",
        optionB: "Polar region",
        optionC: "Forest",
        correctAnswer: "Polar region",
      }),
      shuffleOptions({
        question: "Which animal uses its long tongue to catch insects?",
        optionA: "Frog",
        optionB: "Cat",
        optionC: "Crow",
        correctAnswer: "Frog",
      }),
      shuffleOptions({
        question: "Which of these animals lives in burrows to escape heat?",
        optionA: "Elephant",
        optionB: "Bandicoot",
        optionC: "Whale",
        correctAnswer: "Bandicoot",
      }),
      shuffleOptions({
        question: "Which of these has paddle-like limbs for swimming?",
        optionA: "Turtle",
        optionB: "Rabbit",
        optionC: "Dog",
        correctAnswer: "Turtle",
      }),
      shuffleOptions({
        question: "Which of these animals can fly using its wings?",
        optionA: "Fish",
        optionB: "Bird",
        optionC: "Lizard",
        correctAnswer: "Bird",
      }),
      shuffleOptions({
        question: "Which animal’s body is covered with scales attached to muscles?",
        optionA: "Snake",
        optionB: "Penguin",
        optionC: "Monkey",
        correctAnswer: "Snake",
      }),
      shuffleOptions({
        question: "Which of these animals is found in the ocean?",
        optionA: "Octopus",
        optionB: "Camel",
        optionC: "Deer",
        correctAnswer: "Octopus",
      }),
      shuffleOptions({
        question: "Which of these birds migrates to India during winter?",
        optionA: "Owl",
        optionB: "Siberian crane",
        optionC: "Penguin",
        correctAnswer: "Siberian crane",
      }),
      shuffleOptions({
        question: "Which animal breathes through gills?",
        optionA: "Fish",
        optionB: "Human",
        optionC: "Dog",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "Which insect destroys standing crops while travelling in large swarms?",
        optionA: "Bee",
        optionB: "Locust",
        optionC: "Butterfly",
        correctAnswer: "Locust",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A desert is a ______ region that receives very little rainfall.",
        optionA: "dry",
        optionB: "cold",
        optionC: "wet",
        correctAnswer: "dry",
      }),
      shuffleOptions({
        question: "Polar bears have a thick layer of ______ beneath their fur.",
        optionA: "fat",
        optionB: "feathers",
        optionC: "scales",
        correctAnswer: "fat",
      }),
      shuffleOptions({
        question: "Frogs breathe through their ______ when in water.",
        optionA: "skin",
        optionB: "lungs",
        optionC: "mouth",
        correctAnswer: "skin",
      }),
      shuffleOptions({
        question: "Snakes swallow their food ______.",
        optionA: "whole",
        optionB: "slowly",
        optionC: "partly",
        correctAnswer: "whole",
      }),
      shuffleOptions({
        question: "Butterflies suck nectar using a tube called ______.",
        optionA: "proboscis",
        optionB: "tongue",
        optionC: "beak",
        correctAnswer: "proboscis",
      }),
      shuffleOptions({
        question: "The Arctic tern travels from Arctic to ______ and back.",
        optionA: "Antarctica",
        optionB: "India",
        optionC: "Africa",
        correctAnswer: "Antarctica",
      }),
      shuffleOptions({
        question: "Animals that eat both plants and flesh are called ______.",
        optionA: "omnivores",
        optionB: "herbivores",
        optionC: "carnivores",
        correctAnswer: "omnivores",
      }),
      shuffleOptions({
        question: "Camels store fat in their ______.",
        optionA: "hump",
        optionB: "tail",
        optionC: "legs",
        correctAnswer: "hump",
      }),
      shuffleOptions({
        question: "Penguins use their ______ to swim.",
        optionA: "flippers",
        optionB: "fins",
        optionC: "claws",
        correctAnswer: "flippers",
      }),
      shuffleOptions({
        question: "Birds, reptiles, and mammals breathe through their ______.",
        optionA: "lungs",
        optionB: "gills",
        optionC: "pores",
        correctAnswer: "lungs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Amphibians like frogs can breathe through their moist skin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earthworms breathe through their lungs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Polar regions receive heavy rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All insects have six legs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fish use fins to swim and maintain balance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Penguins live in deserts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Camels have thick skin to prevent water loss.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Locusts migrate in large groups destroying crops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Frogs breathe through lungs only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Siberian crane migrates to India every summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
