export const chapter = "Chapter - 10: Respiration";
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
        question: "What is the process in which energy stored in food is released?",
        optionA: "Breathing",
        optionB: "Respiration",
        optionC: "Circulation",
        correctAnswer: "Respiration",
      }),
      shuffleOptions({
        question: "Which gas is used by living organisms during respiration?",
        optionA: "Nitrogen",
        optionB: "Oxygen",
        optionC: "Carbon dioxide",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "What are the tiny air sacs in the lungs called?",
        optionA: "Bronchi",
        optionB: "Alveoli",
        optionC: "Trachea",
        correctAnswer: "Alveoli",
      }),
      shuffleOptions({
        question: "Which organ in humans is also called the voice box?",
        optionA: "Larynx",
        optionB: "Pharynx",
        optionC: "Trachea",
        correctAnswer: "Larynx",
      }),
      shuffleOptions({
        question: "What is the process of taking in air rich in oxygen known as?",
        optionA: "Exhalation",
        optionB: "Inhalation",
        optionC: "Respiration",
        correctAnswer: "Inhalation",
      }),
      shuffleOptions({
        question: "What are the small air holes on the body surface of insects called?",
        optionA: "Trachea",
        optionB: "Spiracles",
        optionC: "Bronchioles",
        correctAnswer: "Spiracles",
      }),
      shuffleOptions({
        question: "Which organ helps fish to breathe under water?",
        optionA: "Gills",
        optionB: "Lungs",
        optionC: "Skin",
        correctAnswer: "Gills",
      }),
      shuffleOptions({
        question: "Which type of respiration takes place in the absence of oxygen?",
        optionA: "Aerobic",
        optionB: "Anaerobic",
        optionC: "Photosynthesis",
        correctAnswer: "Anaerobic",
      }),
      shuffleOptions({
        question: "Which substance accumulates in muscles during vigorous exercise?",
        optionA: "Lactic acid",
        optionB: "Alcohol",
        optionC: "Carbon dioxide",
        correctAnswer: "Lactic acid",
      }),
      shuffleOptions({
        question: "Which type of respiration produces a large amount of energy?",
        optionA: "Anaerobic",
        optionB: "Aerobic",
        optionC: "Fermentation",
        correctAnswer: "Aerobic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process of breaking down food in cells to release energy is called ______.",
        optionA: "Respiration",
        optionB: "Digestion",
        optionC: "Photosynthesis",
        correctAnswer: "Respiration",
      }),
      shuffleOptions({
        question: "The process of respiration that uses oxygen is called ______ respiration.",
        optionA: "Anaerobic",
        optionB: "Aerobic",
        optionC: "Cellular",
        correctAnswer: "Aerobic",
      }),
      shuffleOptions({
        question: "The respiration that takes place without oxygen is called ______ respiration.",
        optionA: "Aerobic",
        optionB: "Anaerobic",
        optionC: "Internal",
        correctAnswer: "Anaerobic",
      }),
      shuffleOptions({
        question: "The exchange of gases in living beings is carried out through the process of ______.",
        optionA: "Breathing",
        optionB: "Circulation",
        optionC: "Diffusion",
        correctAnswer: "Breathing",
      }),
      shuffleOptions({
        question: "The rate at which a person breathes is called the ______ rate.",
        optionA: "Respiration",
        optionB: "Breathing",
        optionC: "Pulse",
        correctAnswer: "Breathing",
      }),
      shuffleOptions({
        question: "The ______ is a large muscular sheet forming the floor of the chest cavity.",
        optionA: "Diaphragm",
        optionB: "Larynx",
        optionC: "Trachea",
        correctAnswer: "Diaphragm",
      }),
      shuffleOptions({
        question: "The removal of carbon dioxide from the lungs is called ______.",
        optionA: "Inhalation",
        optionB: "Exhalation",
        optionC: "Respiration",
        correctAnswer: "Exhalation",
      }),
      shuffleOptions({
        question: "The process of anaerobic respiration in yeast is known as ______.",
        optionA: "Fermentation",
        optionB: "Decomposition",
        optionC: "Diffusion",
        correctAnswer: "Fermentation",
      }),
      shuffleOptions({
        question: "Exchange of gases in insects takes place through ______.",
        optionA: "Trachea",
        optionB: "Lungs",
        optionC: "Skin",
        correctAnswer: "Trachea",
      }),
      shuffleOptions({
        question: "The openings on the surface of leaves for exchange of gases are called ______.",
        optionA: "Stomata",
        optionB: "Spiracles",
        optionC: "Pores",
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
        question: "Respiration and breathing are exactly the same processes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Energy is released during respiration.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Inhaled air contains more carbon dioxide than exhaled air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Breathing is a chemical process.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oxygen is used and carbon dioxide is released during respiration.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fish use lungs for respiration.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Yeast respires anaerobically and produces alcohol and carbon dioxide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "During inhalation, the chest cavity becomes larger.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The exchange of gases in humans takes place in the alveoli.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants respire only during the daytime.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
