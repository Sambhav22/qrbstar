export const chapter = "Chapter - 12: Environmental Pollution";
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
        question: "What slows down the growth of plants when the air becomes polluted?",
        optionA: "Fresh air",
        optionB: "Polluted air",
        optionC: "Cold wind",
        correctAnswer: "Polluted air",
      }),
      shuffleOptions({
        question: "Which natural event mentioned in the chapter can cause air pollution?",
        optionA: "Rainbow",
        optionB: "Forest fire",
        optionC: "Dew",
        correctAnswer: "Forest fire",
      }),
      shuffleOptions({
        question: "What mixes with moisture in the atmosphere to form acid rain?",
        optionA: "Harmful gases released from burning fuels",
        optionB: "Water vapour",
        optionC: "Clean air",
        correctAnswer: "Harmful gases released from burning fuels",
      }),
      shuffleOptions({
        question: "Which layer protects the Earth from harmful radiations of the sun?",
        optionA: "Nitrogen layer",
        optionB: "Ozone layer",
        optionC: "Carbon layer",
        correctAnswer: "Ozone layer",
      }),
      shuffleOptions({
        question: "What type of pollution is caused by loudspeakers during festivals?",
        optionA: "Water pollution",
        optionB: "Soil pollution",
        optionC: "Noise pollution",
        correctAnswer: "Noise pollution",
      }),
      shuffleOptions({
        question: "Leakage from oil tankers leads to which pollution?",
        optionA: "Water pollution",
        optionB: "Air pollution",
        optionC: "Noise pollution",
        correctAnswer: "Water pollution",
      }),
      shuffleOptions({
        question: "Which waste item should be given to the scrap dealer for recycling?",
        optionA: "Leaves",
        optionB: "Newspapers and tins",
        optionC: "Food peels",
        correctAnswer: "Newspapers and tins",
      }),
      shuffleOptions({
        question: "What happens when factories dump poisonous chemicals into rivers?",
        optionA: "Air becomes cleaner",
        optionB: "Water gets polluted",
        optionC: "Land becomes fertile",
        correctAnswer: "Water gets polluted",
      }),
      shuffleOptions({
        question: "What can long chimneys and smoke filters help reduce?",
        optionA: "Soil pollution",
        optionB: "Air pollution",
        optionC: "Noise pollution",
        correctAnswer: "Air pollution",
      }),
      shuffleOptions({
        question: "What happens when we drink contaminated water?",
        optionA: "We become stronger",
        optionB: "We fall ill with diseases like cholera and typhoid",
        optionC: "We feel sleepy",
        correctAnswer: "We fall ill with diseases like cholera and typhoid",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Polluted air increases the ______ of a place.",
        optionA: "temperature",
        optionB: "rainfall",
        optionC: "wind speed",
        correctAnswer: "temperature",
      }),
      shuffleOptions({
        question: "Farmers use chemical ______ which may pollute the soil.",
        optionA: "colours",
        optionB: "fertilisers",
        optionC: "metals",
        correctAnswer: "fertilisers",
      }),
      shuffleOptions({
        question: "Dumping plastic bags on land causes ______ pollution.",
        optionA: "air",
        optionB: "soil",
        optionC: "water",
        correctAnswer: "soil",
      }),
      shuffleOptions({
        question: "Water pollution destroys ______ life.",
        optionA: "mountain",
        optionB: "forest",
        optionC: "marine",
        correctAnswer: "marine",
      }),
      shuffleOptions({
        question: "______ wastes can rot and mix with soil naturally.",
        optionA: "Biodegradable",
        optionB: "Metallic",
        optionC: "Plastic",
        correctAnswer: "Biodegradable",
      }),
      shuffleOptions({
        question: "Using ______ energy helps reduce air pollution.",
        optionA: "smoky",
        optionB: "solar",
        optionC: "dusty",
        correctAnswer: "solar",
      }),
      shuffleOptions({
        question: "Loud horns of vehicles increase ______ pollution.",
        optionA: "water",
        optionB: "noise",
        optionC: "land",
        correctAnswer: "noise",
      }),
      shuffleOptions({
        question: "Chemical fertilisers may seep into the ground and pollute ______.",
        optionA: "groundwater",
        optionB: "clouds",
        optionC: "mountains",
        correctAnswer: "groundwater",
      }),
      shuffleOptions({
        question: "Factories should be set up away from ______ areas.",
        optionA: "desert",
        optionB: "residential",
        optionC: "hilly",
        correctAnswer: "residential",
      }),
      shuffleOptions({
        question: "Washing clothes and utensils in rivers causes ______ pollution.",
        optionA: "water",
        optionB: "air",
        optionC: "soil",
        correctAnswer: "water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Acid rain can damage forests, buildings and soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Noise pollution affects only animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plastic bags stay in the soil for a very long time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air pollution can cause breathing problems in humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Marine life remains safe even in polluted water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Factories dump oils and harmful chemicals that pollute rivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polluted air cannot damage the skin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Burning fuels like wood and coal contributes to air pollution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Noise pollution may not disturb mental peace.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cloth bags are better than plastic bags because they are reusable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
