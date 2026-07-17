export const chapter = "Chapter - 13: Food for Plants and Animals";
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
        question: "Which process helps green plants to make their own food?",
        optionA: "Respiration",
        optionB: "Photosynthesis",
        optionC: "Germination",
        correctAnswer: "Photosynthesis",
      }),
      shuffleOptions({
        question: "What do leaves absorb from sunlight during photosynthesis?",
        optionA: "Heat",
        optionB: "Energy",
        optionC: "Air",
        correctAnswer: "Energy",
      }),
      shuffleOptions({
        question: "Which pigment gives green colour to leaves?",
        optionA: "Carotene",
        optionB: "Chlorophyll",
        optionC: "Xanthophyll",
        correctAnswer: "Chlorophyll",
      }),
      shuffleOptions({
        question: "Which gas is released into the air during photosynthesis?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "What are plants called because they make their own food?",
        optionA: "Consumers",
        optionB: "Producers",
        optionC: "Decomposers",
        correctAnswer: "Producers",
      }),
      shuffleOptions({
        question: "Which plant traps insects using hair-like triggers?",
        optionA: "Cactus",
        optionB: "Venus flytrap",
        optionC: "Money plant",
        correctAnswer: "Venus flytrap",
      }),
      shuffleOptions({
        question: "Which plant has a pitcher-shaped leaf filled with nectar?",
        optionA: "Pitcher plant",
        optionB: "Mango plant",
        optionC: "Neem tree",
        correctAnswer: "Pitcher plant",
      }),
      shuffleOptions({
        question: "What are animals that eat both plants and animals called?",
        optionA: "Herbivores",
        optionB: "Omnivores",
        optionC: "Carnivores",
        correctAnswer: "Omnivores",
      }),
      shuffleOptions({
        question: "Which organisms break down dead and decaying matter?",
        optionA: "Decomposers",
        optionB: "Scavengers",
        optionC: "Parasites",
        correctAnswer: "Decomposers",
      }),
      shuffleOptions({
        question: "What provides energy to start every food chain?",
        optionA: "Sun",
        optionB: "Moon",
        optionC: "Earth",
        correctAnswer: "Sun",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Green plants need sunlight, water and ______ to make food.",
        optionA: "Nitrogen",
        optionB: "Carbon dioxide",
        optionC: "Oxygen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "The sugar formed during photosynthesis is called ______.",
        optionA: "Glucose",
        optionB: "Fructose",
        optionC: "Starch",
        correctAnswer: "Glucose",
      }),
      shuffleOptions({
        question: "The openings on the surface of leaves are called ______.",
        optionA: "Stomata",
        optionB: "Nodes",
        optionC: "Veins",
        correctAnswer: "Stomata",
      }),
      shuffleOptions({
        question: "______ are animals that eat only plants.",
        optionA: "Carnivores",
        optionB: "Herbivores",
        optionC: "Omnivores",
        correctAnswer: "Herbivores",
      }),
      shuffleOptions({
        question: "______ eat flesh of dead animals and keep the environment clean.",
        optionA: "Scavengers",
        optionB: "Parasites",
        optionC: "Decomposers",
        correctAnswer: "Scavengers",
      }),
      shuffleOptions({
        question: "Plants that eat insects to get nutrients are called ______ plants.",
        optionA: "Carnivorous",
        optionB: "Green",
        optionC: "Leafless",
        correctAnswer: "Carnivorous",
      }),
      shuffleOptions({
        question: "______ are animals that live inside another animal’s body for food.",
        optionA: "Parasites",
        optionB: "Scavengers",
        optionC: "Decomposers",
        correctAnswer: "Parasites",
      }),
      shuffleOptions({
        question: "______ are animals that eat both plants and animals.",
        optionA: "Omnivores",
        optionB: "Herbivores",
        optionC: "Carnivores",
        correctAnswer: "Omnivores",
      }),
      shuffleOptions({
        question: "______ turn dead plants and animals back into soil.",
        optionA: "Decomposers",
        optionB: "Producers",
        optionC: "Consumers",
        correctAnswer: "Decomposers",
      }),
      shuffleOptions({
        question: "The ______ is the main source of energy for all living beings.",
        optionA: "Sun",
        optionB: "Wind",
        optionC: "Water",
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
        question: "Plants can prepare their own food using sunlight and chlorophyll.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Photosynthesis takes place in the roots of a plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pitcher plant and Venus flytrap are insect-eating plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Omnivores feed only on plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fungi and bacteria act as decomposers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Scavengers feed on the flesh of dead animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun is the ultimate source of energy for all food chains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chlorophyll helps plants absorb sunlight during photosynthesis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A food web shows just one path of energy flow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Animals that depend on others for food are called consumers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
