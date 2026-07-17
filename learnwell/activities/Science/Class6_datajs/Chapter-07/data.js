export const chapter = "Chapter - 7: Characteristics of Living Things";
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
        question: "Which is the basic structural and functional unit of life?",
        optionA: "Tissue",
        optionB: "Organ",
        optionC: "Cell",
        correctAnswer: "Cell",
      }),
      shuffleOptions({
        question: "Which of the following is a unicellular organism?",
        optionA: "Amoeba",
        optionB: "Dog",
        optionC: "Mango tree",
        correctAnswer: "Amoeba",
      }),
      shuffleOptions({
        question: "What are green plants that make their own food called?",
        optionA: "Heterotrophs",
        optionB: "Autotrophs",
        optionC: "Decomposers",
        correctAnswer: "Autotrophs",
      }),
      shuffleOptions({
        question: "Which organ in fish helps in breathing?",
        optionA: "Lungs",
        optionB: "Gills",
        optionC: "Spiracles",
        correctAnswer: "Gills",
      }),
      shuffleOptions({
        question: "What are the small openings on the body of insects for breathing called?",
        optionA: "Spiracles",
        optionB: "Gills",
        optionC: "Pores",
        correctAnswer: "Spiracles",
      }),
      shuffleOptions({
        question: "Which process helps living things to release energy from food?",
        optionA: "Excretion",
        optionB: "Respiration",
        optionC: "Photosynthesis",
        correctAnswer: "Respiration",
      }),
      shuffleOptions({
        question: "The bending of a plant towards sunlight is known as what?",
        optionA: "Geotropism",
        optionB: "Phototropism",
        optionC: "Nasticism",
        correctAnswer: "Phototropism",
      }),
      shuffleOptions({
        question: "Which process removes harmful waste from the body?",
        optionA: "Nutrition",
        optionB: "Excretion",
        optionC: "Reproduction",
        correctAnswer: "Excretion",
      }),
      shuffleOptions({
        question: "Which process in living beings ensures continuity of life by producing new organisms?",
        optionA: "Movement",
        optionB: "Reproduction",
        optionC: "Excretion",
        correctAnswer: "Reproduction",
      }),
      shuffleOptions({
        question: "What is the period of time that an organism is expected to live called?",
        optionA: "Lifespan",
        optionB: "Respiration",
        optionC: "Growth",
        correctAnswer: "Lifespan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cell is the basic ________ and functional unit of life.",
        optionA: "Structural",
        optionB: "Respiratory",
        optionC: "Reproductive",
        correctAnswer: "Structural",
      }),
      shuffleOptions({
        question: "Organisms made of only one cell are called ________.",
        optionA: "Unicellular",
        optionB: "Multicellular",
        optionC: "Bicellular",
        correctAnswer: "Unicellular",
      }),
      shuffleOptions({
        question: "Animals that depend on other plants or animals for food are called ________.",
        optionA: "Heterotrophs",
        optionB: "Autotrophs",
        optionC: "Producers",
        correctAnswer: "Heterotrophs",
      }),
      shuffleOptions({
        question: "Living things obtain and use food through the process of ________.",
        optionA: "Nutrition",
        optionB: "Photosynthesis",
        optionC: "Growth",
        correctAnswer: "Nutrition",
      }),
      shuffleOptions({
        question: "The energy released by oxidation of food is obtained during ________.",
        optionA: "Respiration",
        optionB: "Reproduction",
        optionC: "Excretion",
        correctAnswer: "Respiration",
      }),
      shuffleOptions({
        question: "The growth of a particular region of the body is called ________.",
        optionA: "Local growth",
        optionB: "Total growth",
        optionC: "Body growth",
        correctAnswer: "Local growth",
      }),
      shuffleOptions({
        question: "The removal of harmful waste from the body is called ________.",
        optionA: "Excretion",
        optionB: "Filtration",
        optionC: "Digestion",
        correctAnswer: "Excretion",
      }),
      shuffleOptions({
        question: "The process by which green plants prepare their food is called ________.",
        optionA: "Photosynthesis",
        optionB: "Germination",
        optionC: "Transpiration",
        correctAnswer: "Photosynthesis",
      }),
      shuffleOptions({
        question: "The movement of plants towards light is known as ________.",
        optionA: "Phototropism",
        optionB: "Geotropism",
        optionC: "Nasticism",
        correctAnswer: "Phototropism",
      }),
      shuffleOptions({
        question: "The period of time an organism is expected to live is called its ________.",
        optionA: "Lifespan",
        optionB: "Duration",
        optionC: "Cycle",
        correctAnswer: "Lifespan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Non-living things can grow and reproduce on their own.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All living things are made up of cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants take in carbon dioxide and release oxygen during photosynthesis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fish breathe through spiracles on their body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Excretion helps to remove waste materials from the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reproduction ensures the continuity of life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Movement in plants never occurs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Living things do not respond to changes in their environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Viruses show characteristics of both living and non-living things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every living organism has an unlimited lifespan.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
