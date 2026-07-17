export const chapter = "Chapter - 18: Aquatic Life";
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
        question: "Which aquatic animals breathe through lungs and come to the surface to inhale air?",
        optionA: "Fish",
        optionB: "Whales and dolphins",
        optionC: "Frogs",
        correctAnswer: "Whales and dolphins",
      }),
      shuffleOptions({
        question: "Which body part helps a fish to move easily through water?",
        optionA: "Fins",
        optionB: "Legs",
        optionC: "Flippers",
        correctAnswer: "Fins",
      }),
      shuffleOptions({
        question: "What are animals called that can live both on land and in water?",
        optionA: "Reptiles",
        optionB: "Amphibians",
        optionC: "Mammals",
        correctAnswer: "Amphibians",
      }),
      shuffleOptions({
        question: "Which part helps crabs and lobsters to breathe in water?",
        optionA: "Lungs",
        optionB: "Gills",
        optionC: "Fins",
        correctAnswer: "Gills",
      }),
      shuffleOptions({
        question: "Which bird has waterproof feathers to keep itself dry while swimming?",
        optionA: "Pigeon",
        optionB: "Duck",
        optionC: "Parrot",
        correctAnswer: "Duck",
      }),
      shuffleOptions({
        question: "Which insect lays its eggs in water and whose young ones are called nymphs?",
        optionA: "Dragonfly",
        optionB: "Mosquito",
        optionC: "Butterfly",
        correctAnswer: "Dragonfly",
      }),
      shuffleOptions({
        question: "Which aquatic plants have roots fixed to the bottom of water bodies?",
        optionA: "Floating plants",
        optionB: "Fixed plants",
        optionC: "Underwater plants",
        correctAnswer: "Fixed plants",
      }),
      shuffleOptions({
        question: "Which type of aquatic plants remain completely under water?",
        optionA: "Floating plants",
        optionB: "Underwater plants",
        optionC: "Fixed plants",
        correctAnswer: "Underwater plants",
      }),
      shuffleOptions({
        question: "Which plants spread quickly and cause water pollution?",
        optionA: "Aquatic weeds",
        optionB: "Lotus",
        optionC: "Duckweed",
        correctAnswer: "Aquatic weeds",
      }),
      shuffleOptions({
        question: "Which group of animals have shells and flippers to swim?",
        optionA: "Turtles and crabs",
        optionB: "Frogs and toads",
        optionC: "Fish and whales",
        correctAnswer: "Turtles and crabs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The young ones of frogs are called ______.",
        optionA: "Hatchlings",
        optionB: "Tadpoles",
        optionC: "Larvae",
        correctAnswer: "Tadpoles",
      }),
      shuffleOptions({
        question: "Fish breathe with the help of ______.",
        optionA: "Lungs",
        optionB: "Gills",
        optionC: "Skin",
        correctAnswer: "Gills",
      }),
      shuffleOptions({
        question: "Ducks have ______ feet that help them to swim.",
        optionA: "Flat",
        optionB: "Webbed",
        optionC: "Pointed",
        correctAnswer: "Webbed",
      }),
      shuffleOptions({
        question: "Amphibians like frogs breathe in water through their ______.",
        optionA: "Skin",
        optionB: "Gills",
        optionC: "Lungs",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "Water hyacinth and duckweed are ______ plants.",
        optionA: "Floating",
        optionB: "Fixed",
        optionC: "Underwater",
        correctAnswer: "Floating",
      }),
      shuffleOptions({
        question: "Lotus and water lily are examples of ______ plants.",
        optionA: "Fixed",
        optionB: "Floating",
        optionC: "Underwater",
        correctAnswer: "Fixed",
      }),
      shuffleOptions({
        question: "Plants like hydrilla and pondweed are ______ plants.",
        optionA: "Floating",
        optionB: "Underwater",
        optionC: "Fixed",
        correctAnswer: "Underwater",
      }),
      shuffleOptions({
        question: "Submerged plants breathe through their ______.",
        optionA: "Whole body surface",
        optionB: "Stomata",
        optionC: "Roots",
        correctAnswer: "Whole body surface",
      }),
      shuffleOptions({
        question: "Aquatic weeds grow ______ in water bodies.",
        optionA: "Densely",
        optionB: "Slowly",
        optionC: "Rarely",
        correctAnswer: "Densely",
      }),
      shuffleOptions({
        question: "Frogs use their ______ to swim in water.",
        optionA: "Flippers",
        optionB: "Webbed feet",
        optionC: "Fins",
        correctAnswer: "Webbed feet",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Whales and dolphins breathe through lungs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Frogs can live both on land and in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Crabs and lobsters breathe through gills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ducks have waterproof feathers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lotus and water lily are floating plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hydrilla is a fixed aquatic plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Aquatic weeds help to keep the water clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dragonfly eggs are laid in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Submerged plants have narrow leaves without pores.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Amphibians breathe only through lungs in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
