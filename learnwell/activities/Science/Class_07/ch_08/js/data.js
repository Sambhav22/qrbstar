export const chapter = "Chapter - 8: Winds, Storms and Cyclones";
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
        question: "What is the pressure exerted by air on the Earth’s surface called?",
        optionA: "Air current",
        optionB: "Atmospheric pressure",
        optionC: "Water pressure",
        correctAnswer: "Atmospheric pressure",
      }),
      shuffleOptions({
        question: "Which instrument is used to measure the speed of wind?",
        optionA: "Barometer",
        optionB: "Wind vane",
        optionC: "Anemometer",
        correctAnswer: "Anemometer",
      }),
      shuffleOptions({
        question: "What is moving air called?",
        optionA: "Wind",
        optionB: "Cyclone",
        optionC: "Tornado",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "What is the instrument used to find the direction of wind called?",
        optionA: "Rain gauge",
        optionB: "Wind vane",
        optionC: "Thermometer",
        correctAnswer: "Wind vane",
      }),
      shuffleOptions({
        question: "What happens to air when it is heated?",
        optionA: "It contracts and becomes heavy",
        optionB: "It expands and becomes lighter",
        optionC: "It cools down immediately",
        correctAnswer: "It expands and becomes lighter",
      }),
      shuffleOptions({
        question: "What type of breeze blows from the sea towards the land during the day?",
        optionA: "Land breeze",
        optionB: "Sea breeze",
        optionC: "Mountain breeze",
        correctAnswer: "Sea breeze",
      }),
      shuffleOptions({
        question: "What is the calm centre of a cyclone known as?",
        optionA: "Core",
        optionB: "Eye",
        optionC: "Depression",
        correctAnswer: "Eye",
      }),
      shuffleOptions({
        question: "What is a cyclone called in America?",
        optionA: "Typhoon",
        optionB: "Hurricane",
        optionC: "Tornado",
        correctAnswer: "Hurricane",
      }),
      shuffleOptions({
        question: "What are the seasonal winds that bring rain called?",
        optionA: "Monsoon winds",
        optionB: "Sea winds",
        optionC: "Trade winds",
        correctAnswer: "Monsoon winds",
      }),
      shuffleOptions({
        question: "What is the violent rotating column of air extending from a thunderstorm to the ground called?",
        optionA: "Typhoon",
        optionB: "Tornado",
        optionC: "Cyclone",
        correctAnswer: "Tornado",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The atmosphere exerts ______ on everything on the Earth’s surface.",
        optionA: "wind",
        optionB: "pressure",
        optionC: "force",
        correctAnswer: "pressure",
      }),
      shuffleOptions({
        question: "The air pressure decreases with increase in ______.",
        optionA: "altitude",
        optionB: "rainfall",
        optionC: "humidity",
        correctAnswer: "altitude",
      }),
      shuffleOptions({
        question: "Air moves from ______ pressure area to ______ pressure area.",
        optionA: "high, low",
        optionB: "low, high",
        optionC: "warm, cold",
        correctAnswer: "high, low",
      }),
      shuffleOptions({
        question: "______ is an instrument used to measure the speed of wind.",
        optionA: "Anemometer",
        optionB: "Thermometer",
        optionC: "Wind vane",
        correctAnswer: "Anemometer",
      }),
      shuffleOptions({
        question: "______ is the instrument used to measure rainfall.",
        optionA: "Rain gauge",
        optionB: "Barometer",
        optionC: "Cyclometer",
        correctAnswer: "Rain gauge",
      }),
      shuffleOptions({
        question: "The layer of air surrounding the Earth is called the ______.",
        optionA: "Stratosphere",
        optionB: "Atmosphere",
        optionC: "Biosphere",
        correctAnswer: "Atmosphere",
      }),
      shuffleOptions({
        question: "______ are seasonal winds that blow for months at a time.",
        optionA: "Land breezes",
        optionB: "Monsoon winds",
        optionC: "Trade winds",
        correctAnswer: "Monsoon winds",
      }),
      shuffleOptions({
        question: "______ cloud is formed during thunderstorms.",
        optionA: "Cirrus",
        optionB: "Cumulonimbus",
        optionC: "Stratus",
        correctAnswer: "Cumulonimbus",
      }),
      shuffleOptions({
        question: "The central calm area of a cyclone is called the ______.",
        optionA: "Eye",
        optionB: "Centre",
        optionC: "Hole",
        correctAnswer: "Eye",
      }),
      shuffleOptions({
        question: "A cyclone in the Pacific Ocean is known as a ______.",
        optionA: "Hurricane",
        optionB: "Typhoon",
        optionC: "Tornado",
        correctAnswer: "Typhoon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air exerts pressure in all directions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "High speed wind increases air pressure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air expands on heating and becomes lighter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wind moves from a low-pressure area to a high-pressure area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Monsoon winds blow from sea to land during winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Thunderstorm is more likely to occur when air is warm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cyclones are caused by regions of high pressure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hurricanes and typhoons are types of cyclones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tornadoes can form within cyclones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The safest protection from a tornado is an underground shelter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
