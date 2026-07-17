export const chapter = "Chapter - 1: Nutrition in Plants";
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
        question: "Which part of a plant traps sunlight to make food?",
        optionA: "Stomata",
        optionB: "Chloroplast",
        optionC: "Xylem",
        optionD: "Guard cells",
        correctAnswer: "Chloroplast",
      }),
      shuffleOptions({
        question: "Which type of energy is converted into chemical energy during photosynthesis?",
        optionA: "Sound",
        optionB: "Solar",
        optionC: "Electrical",
        optionD: "Thermal",
        correctAnswer: "Solar",
      }),
      shuffleOptions({
        question: "Which plant performs photosynthesis in its stem instead of leaves?",
        optionA: "Cactus",
        optionB: "Mango",
        optionC: "Neem",
        optionD: "Croton",
        correctAnswer: "Cactus",
      }),
      shuffleOptions({
        question: "Which green pigment is essential for photosynthesis?",
        optionA: "Carotene",
        optionB: "Chlorophyll",
        optionC: "Melanin",
        optionD: "Chromatin",
        correctAnswer: "Chlorophyll",
      }),
      shuffleOptions({
        question: "Which plant has a symbiotic relationship between fungus and roots?",
        optionA: "Pea",
        optionB: "Mycorrhiza",
        optionC: "Cuscuta",
        optionD: "Venus flytrap",
        correctAnswer: "Mycorrhiza",
      }),
      shuffleOptions({
        question: "Which bacteria help leguminous plants to fix nitrogen from the air?",
        optionA: "Rhizobium",
        optionB: "Lactobacillus",
        optionC: "Streptococcus",
        optionD: "Salmonella",
        correctAnswer: "Rhizobium",
      }),
      shuffleOptions({
        question: "Which plant traps insects to fulfil its nitrogen requirement?",
        optionA: "Cuscuta",
        optionB: "Pitcher plant",
        optionC: "Croton",
        optionD: "Rafflesia",
        correctAnswer: "Pitcher plant",
      }),
      shuffleOptions({
        question: "Which organism derives its food from dead and decaying matter?",
        optionA: "Mushroom",
        optionB: "Pea",
        optionC: "Mistletoe",
        optionD: "Rafflesia",
        correctAnswer: "Mushroom",
      }),
      shuffleOptions({
        question: "Which pigment hides the green colour of chlorophyll in croton leaves?",
        optionA: "Anthocyanin",
        optionB: "Xanthophyll",
        optionC: "Melanin",
        optionD: "Haemoglobin",
        correctAnswer: "Anthocyanin",
      }),
      shuffleOptions({
        question: "Which gas is released during photosynthesis?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        optionD: "Hydrogen",
        correctAnswer: "Oxygen",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process of making food by green plants is called ______.",
        optionA: "Respiration",
        optionB: "Photosynthesis",
        optionC: "Germination",
        correctAnswer: "Photosynthesis",
      }),
      shuffleOptions({
        question: "Water and minerals are transported to leaves through ______.",
        optionA: "Phloem",
        optionB: "Xylem",
        optionC: "Veins",
        correctAnswer: "Xylem",
      }),
      shuffleOptions({
        question: "The food prepared in plants is stored in the form of ______.",
        optionA: "Glycogen",
        optionB: "Starch",
        optionC: "Protein",
        correctAnswer: "Starch",
      }),
      shuffleOptions({
        question: "The relationship between fungus and tree roots is known as ______.",
        optionA: "Mycorrhiza",
        optionB: "Lichen",
        optionC: "Parasitism",
        correctAnswer: "Mycorrhiza",
      }),
      shuffleOptions({
        question: "The plants which eat insects are called ______ plants.",
        optionA: "Carnivorous",
        optionB: "Autotrophic",
        optionC: "Saprotrophic",
        correctAnswer: "Carnivorous",
      }),
      shuffleOptions({
        question: "Green leaves appear green because they contain ______.",
        optionA: "Chlorophyll",
        optionB: "Carotene",
        optionC: "Xanthophyll",
        correctAnswer: "Chlorophyll",
      }),
      shuffleOptions({
        question: "The bacteria living in root nodules of leguminous plants are called ______.",
        optionA: "Rhizobium",
        optionB: "Lactobacillus",
        optionC: "Streptococcus",
        correctAnswer: "Rhizobium",
      }),
      shuffleOptions({
        question: "The loss of water vapour from leaves is called ______.",
        optionA: "Transpiration",
        optionB: "Condensation",
        optionC: "Perspiration",
        correctAnswer: "Transpiration",
      }),
      shuffleOptions({
        question: "The association between algae and fungi is known as ______.",
        optionA: "Lichen",
        optionB: "Symbiont",
        optionC: "Mycorrhiza",
        correctAnswer: "Lichen",
      }),
      shuffleOptions({
        question: "The part of the leaf through which gases are exchanged is called ______.",
        optionA: "Stomata",
        optionB: "Midrib",
        optionC: "Cuticle",
        correctAnswer: "Stomata",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Fungi can make their own food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Insectivorous plants trap insects for obtaining nitrogen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Croton leaves cannot carry out photosynthesis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rhizobium bacteria help in fixing atmospheric nitrogen in the soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All mushrooms are edible.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oxygen is released during the process of photosynthesis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The process of photosynthesis takes place in the presence of sunlight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Saprotrophs depend on dead and decaying matter for food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Symbiotic plants harm their partner plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Desert plants perform photosynthesis through their stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
