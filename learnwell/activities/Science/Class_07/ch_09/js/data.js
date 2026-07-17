export const chapter = "Chapter - 9: Soil";
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
        question: "What is the process of breaking rocks into small pieces called?",
        optionA: "Decomposition",
        optionB: "Weathering",
        optionC: "Corrosion",
        correctAnswer: "Weathering",
      }),
      shuffleOptions({
        question: "What is the dark decayed organic matter present in soil called?",
        optionA: "Litter",
        optionB: "Humus",
        optionC: "Gravel",
        correctAnswer: "Humus",
      }),
      shuffleOptions({
        question: "What is the unbroken solid rock layer found below all the soil layers called?",
        optionA: "Bedrock",
        optionB: "Subsoil",
        optionC: "Humus layer",
        correctAnswer: "Bedrock",
      }),
      shuffleOptions({
        question: "Which layer of soil contains humus and supports the growth of plants?",
        optionA: "A-horizon",
        optionB: "B-horizon",
        optionC: "C-horizon",
        correctAnswer: "A-horizon",
      }),
      shuffleOptions({
        question: "Which soil type contains more than 60% sand and less than 10% clay?",
        optionA: "Clayey soil",
        optionB: "Loamy soil",
        optionC: "Sandy soil",
        correctAnswer: "Sandy soil",
      }),
      shuffleOptions({
        question: "Which soil type is ideal for making pottery and bricks?",
        optionA: "Sandy soil",
        optionB: "Clayey soil",
        optionC: "Loamy soil",
        correctAnswer: "Clayey soil",
      }),
      shuffleOptions({
        question: "Which type of soil is best suited for growing crops and gardening?",
        optionA: "Loamy soil",
        optionB: "Sandy soil",
        optionC: "Rocky soil",
        correctAnswer: "Loamy soil",
      }),
      shuffleOptions({
        question: "What is the rate at which water moves through the soil called?",
        optionA: "Percolation rate",
        optionB: "Absorption rate",
        optionC: "Evaporation rate",
        correctAnswer: "Percolation rate",
      }),
      shuffleOptions({
        question: "Which process removes the top fertile layer of soil due to wind or water?",
        optionA: "Soil conservation",
        optionB: "Soil erosion",
        optionC: "Soil pollution",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "What is the practice of planting trees to prevent soil erosion called?",
        optionA: "Deforestation",
        optionB: "Afforestation",
        optionC: "Cultivation",
        correctAnswer: "Afforestation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The breaking of rocks by the action of wind, rain and temperature changes is called ______.",
        optionA: "Erosion",
        optionB: "Weathering",
        optionC: "Decomposition",
        correctAnswer: "Weathering",
      }),
      shuffleOptions({
        question: "The organic component of soil formed from decayed plants and animals is called ______.",
        optionA: "Humus",
        optionB: "Gravel",
        optionC: "Litter",
        correctAnswer: "Humus",
      }),
      shuffleOptions({
        question: "The vertical section of soil showing different layers is called a ______.",
        optionA: "Soil profile",
        optionB: "Soil cover",
        optionC: "Rock layer",
        correctAnswer: "Soil profile",
      }),
      shuffleOptions({
        question: "The layer just below the topsoil is called the ______.",
        optionA: "B-horizon",
        optionB: "O-horizon",
        optionC: "D-horizon",
        correctAnswer: "B-horizon",
      }),
      shuffleOptions({
        question: "The layer that consists of unbroken solid rock is known as ______.",
        optionA: "Parent rock",
        optionB: "Regolith",
        optionC: "Bedrock",
        correctAnswer: "Parent rock",
      }),
      shuffleOptions({
        question: "Soil which contains a mixture of sand, clay, silt and humus is called ______.",
        optionA: "Loamy soil",
        optionB: "Clayey soil",
        optionC: "Sandy soil",
        correctAnswer: "Loamy soil",
      }),
      shuffleOptions({
        question: "The downward movement of water through soil is called the ______ rate.",
        optionA: "Absorption",
        optionB: "Percolation",
        optionC: "Flow",
        correctAnswer: "Percolation",
      }),
      shuffleOptions({
        question: "The process of removal of topsoil by wind or water is called ______.",
        optionA: "Soil erosion",
        optionB: "Soil conservation",
        optionC: "Weathering",
        correctAnswer: "Soil erosion",
      }),
      shuffleOptions({
        question: "Building steps on hill slopes to prevent soil erosion is known as ______ farming.",
        optionA: "Step",
        optionB: "Terrace",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
      shuffleOptions({
        question: "Planting more trees to prevent soil loss is called ______.",
        optionA: "Afforestation",
        optionB: "Deforestation",
        optionC: "Reforestation",
        correctAnswer: "Afforestation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soil is formed overnight by the breaking of rocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The dark-coloured top layer of soil is rich in humus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bedrock contains humus and organic matter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sandy soil holds a large amount of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clayey soil has very small particles and holds more water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Loamy soil is best for the growth of crops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Soil erosion is the addition of fertilisers to soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Terrace farming helps in reducing soil erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Soil conservation means protecting soil from erosion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Afforestation leads to the loss of fertile topsoil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
