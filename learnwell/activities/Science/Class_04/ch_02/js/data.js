export const chapter = "Chapter - 2: Adaptations in Plants";
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
        question: "Which feature helps mountain trees survive heavy snowfall?",
        optionA: "Broad leaves",
        optionB: "Needle-like leaves",
        optionC: "Thin roots",
        correctAnswer: "Needle-like leaves",
      }),
      shuffleOptions({
        question: "Why do trees in plains have wide branches?",
        optionA: "To get more sunlight",
        optionB: "To avoid rain",
        optionC: "To save water",
        correctAnswer: "To get more sunlight",
      }),
      shuffleOptions({
        question: "How do mangrove roots help the plant?",
        optionA: "They store food",
        optionB: "They help to breathe",
        optionC: "They absorb minerals only",
        correctAnswer: "They help to breathe",
      }),
      shuffleOptions({
        question: "Why do desert plants have spines instead of leaves?",
        optionA: "To look different",
        optionB: "To reduce water loss",
        optionC: "To attract insects",
        correctAnswer: "To reduce water loss",
      }),
      shuffleOptions({
        question: "Which plant has a green stem that makes food?",
        optionA: "Pine",
        optionB: "Cactus",
        optionC: "Mango",
        correctAnswer: "Cactus",
      }),
      shuffleOptions({
        question: "Why are floating plants light in weight?",
        optionA: "To float on water easily",
        optionB: "To sink faster",
        optionC: "To absorb more sunlight",
        correctAnswer: "To float on water easily",
      }),
      shuffleOptions({
        question: "What helps lotus leaves remain dry even when it rains?",
        optionA: "Rough surface",
        optionB: "Waxy coating",
        optionC: "Hairy surface",
        correctAnswer: "Waxy coating",
      }),
      shuffleOptions({
        question: "Which plants breathe through their body surface?",
        optionA: "Fixed plants",
        optionB: "Underwater plants",
        optionC: "Floating plants",
        correctAnswer: "Underwater plants",
      }),
      shuffleOptions({
        question: "Why do insectivorous plants trap insects?",
        optionA: "For fun",
        optionB: "To get nutrients",
        optionC: "To protect themselves",
        correctAnswer: "To get nutrients",
      }),
      shuffleOptions({
        question: "Which plant absorbs nutrients from dead plants and animals?",
        optionA: "Pitcher plant",
        optionB: "Mushroom",
        optionC: "Lotus",
        correctAnswer: "Mushroom",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cold-region trees have ______-shaped leaves.",
        optionA: "round",
        optionB: "needle",
        optionC: "oval",
        correctAnswer: "needle",
      }),
      shuffleOptions({
        question: "Trees in plains usually shed their leaves during ______ season.",
        optionA: "spring",
        optionB: "autumn",
        optionC: "summer",
        correctAnswer: "autumn",
      }),
      shuffleOptions({
        question: "Plants growing in marshy areas have ______ roots.",
        optionA: "breathing",
        optionB: "long",
        optionC: "tap",
        correctAnswer: "breathing",
      }),
      shuffleOptions({
        question: "The soil in marshy regions is sticky and ______.",
        optionA: "sandy",
        optionB: "clayey",
        optionC: "rocky",
        correctAnswer: "clayey",
      }),
      shuffleOptions({
        question: "Desert plants have ______ roots to absorb underground water.",
        optionA: "shallow",
        optionB: "deep",
        optionC: "fibrous",
        correctAnswer: "deep",
      }),
      shuffleOptions({
        question: "Floating plants have ______ bodies.",
        optionA: "heavy",
        optionB: "spongy",
        optionC: "hard",
        correctAnswer: "spongy",
      }),
      shuffleOptions({
        question: "In fixed plants, stomata are found only on the ______ side of leaves.",
        optionA: "upper",
        optionB: "lower",
        optionC: "middle",
        correctAnswer: "upper",
      }),
      shuffleOptions({
        question: "Underwater plants have long, ______-like leaves.",
        optionA: "ribbon",
        optionB: "round",
        optionC: "heart",
        correctAnswer: "ribbon",
      }),
      shuffleOptions({
        question: "The Venus flytrap catches insects with its ______ leaves.",
        optionA: "folded",
        optionB: "spiny",
        optionC: "flat",
        correctAnswer: "folded",
      }),
      shuffleOptions({
        question: "Indian pipe is a ______ plant that lacks chlorophyll.",
        optionA: "saprophytic",
        optionB: "desert",
        optionC: "floating",
        correctAnswer: "saprophytic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Conifer trees bear cones instead of flowers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Banyan and mango trees grow well in plains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mangroves are found in dry sandy soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cactus has broad flat leaves for storing water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Floating plants have spongy bodies that help them float.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The leaves of lotus are waxy and broad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Underwater plants have stomata on both sides of leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Venus flytrap and pitcher plant make their own food like green plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Saprophytic plants feed on dead and decaying matter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adaptations help plants to live successfully in their surroundings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
