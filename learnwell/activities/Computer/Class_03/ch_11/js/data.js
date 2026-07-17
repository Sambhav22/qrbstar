export const chapter = "Chapter - 11: Soil";
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
        question: "Which process breaks rocks into small pieces to form soil?",
        optionA: "Melting",
        optionB: "Weathering",
        optionC: "Freezing",
        correctAnswer: "Weathering",
      }),
      shuffleOptions({
        question: "Which layer of soil contains humus and living organisms?",
        optionA: "Topsoil",
        optionB: "Subsoil",
        optionC: "Bedrock",
        correctAnswer: "Topsoil",
      }),
      shuffleOptions({
        question: "Which soil is found near rivers and ponds?",
        optionA: "Sandy",
        optionB: "Clayey",
        optionC: "Loamy",
        correctAnswer: "Clayey",
      }),
      shuffleOptions({
        question: "What is the main component of humus?",
        optionA: "Dead and decayed plants and animals",
        optionB: "Pebbles",
        optionC: "Metals",
        correctAnswer: "Dead and decayed plants and animals",
      }),
      shuffleOptions({
        question: "Which type of soil holds both air and water?",
        optionA: "Loamy",
        optionB: "Clayey",
        optionC: "Sandy",
        correctAnswer: "Loamy",
      }),
      shuffleOptions({
        question: "Which rock is used in modern buildings?",
        optionA: "Granite",
        optionB: "Marble",
        optionC: "Coal",
        correctAnswer: "Granite",
      }),
      shuffleOptions({
        question: "Which type of soil is mostly found in deserts?",
        optionA: "Clayey",
        optionB: "Sandy",
        optionC: "Loamy",
        correctAnswer: "Sandy",
      }),
      shuffleOptions({
        question: "Which animal helps to loosen and aerate the soil?",
        optionA: "Earthworm",
        optionB: "Snail",
        optionC: "Centipede",
        correctAnswer: "Earthworm",
      }),
      shuffleOptions({
        question: "What is formed when air, water, and broken rock pieces mix together?",
        optionA: "Soil",
        optionB: "Gravel",
        optionC: "Dust",
        correctAnswer: "Soil",
      }),
      shuffleOptions({
        question: "Which material obtained from soil is used as fuel?",
        optionA: "Coal",
        optionB: "Iron",
        optionC: "Quartz",
        correctAnswer: "Coal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soil is formed from rocks through the process of ______.",
        optionA: "erosion",
        optionB: "weathering",
        optionC: "evaporation",
        correctAnswer: "weathering",
      }),
      shuffleOptions({
        question: "______ soil is good for growing crops.",
        optionA: "Loamy",
        optionB: "Sandy",
        optionC: "Clayey",
        correctAnswer: "Loamy",
      }),
      shuffleOptions({
        question: "______ adds nutrients and minerals to the soil.",
        optionA: "Humus",
        optionB: "Clay",
        optionC: "Pebbles",
        correctAnswer: "Humus",
      }),
      shuffleOptions({
        question: "The lowest layer of soil made of stones and pebbles is called ______.",
        optionA: "Topsoil",
        optionB: "Bedrock",
        optionC: "Subsoil",
        correctAnswer: "Bedrock",
      }),
      shuffleOptions({
        question: "______ soil is used for making pots and bricks.",
        optionA: "Sandy",
        optionB: "Clayey",
        optionC: "Loamy",
        correctAnswer: "Clayey",
      }),
      shuffleOptions({
        question: "______ soil is mostly found on beaches.",
        optionA: "Loamy",
        optionB: "Sandy",
        optionC: "Clayey",
        correctAnswer: "Sandy",
      }),
      shuffleOptions({
        question: "______ and petrol are found in soil and used as fuels.",
        optionA: "Coal",
        optionB: "Chalk",
        optionC: "Iron",
        correctAnswer: "Coal",
      }),
      shuffleOptions({
        question: "The organic matter found in soil is known as ______.",
        optionA: "humus",
        optionB: "minerals",
        optionC: "gravel",
        correctAnswer: "humus",
      }),
      shuffleOptions({
        question: "The layer rich in insects and plant roots is called ______.",
        optionA: "Topsoil",
        optionB: "Subsoil",
        optionC: "Bedrock",
        correctAnswer: "Topsoil",
      }),
      shuffleOptions({
        question: "Earthworms are called the ______ of farmers.",
        optionA: "friends",
        optionB: "helpers",
        optionC: "enemies",
        correctAnswer: "friends",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Soil contains both air and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Loamy soil is a mixture of sand and clay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bedrock allows water to pass through easily.",
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
        question: "Humus makes the soil fertile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Clayey soil has very little air in it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earthworms make the soil loose and airy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Granite and sandstone are used in construction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All soils are the same everywhere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Soil helps plants to grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
