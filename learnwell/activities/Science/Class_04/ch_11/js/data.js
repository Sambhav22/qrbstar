export const chapter = "Chapter - 11: Air and Weather";
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
        question: "What is the layer of air that surrounds the Earth called?",
        optionA: "Cloud",
        optionB: "Atmosphere",
        optionC: "Breeze",
        correctAnswer: "Atmosphere",
      }),
      shuffleOptions({
        question: "What is the name given to moving air?",
        optionA: "Air current",
        optionB: "Wind",
        optionC: "Vapour",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "What is gently blowing air known as?",
        optionA: "Storm",
        optionB: "Breeze",
        optionC: "Thunderstorm",
        correctAnswer: "Breeze",
      }),
      shuffleOptions({
        question: "What do we call a very fast-moving wind?",
        optionA: "Air current",
        optionB: "Storm",
        optionC: "Rain",
        correctAnswer: "Storm",
      }),
      shuffleOptions({
        question: "Which gas forms the largest part of the air?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Nitrogen",
      }),
      shuffleOptions({
        question: "Which instrument is used to show the direction of the wind?",
        optionA: "Barometer",
        optionB: "Windvane",
        optionC: "Anemometer",
        correctAnswer: "Windvane",
      }),
      shuffleOptions({
        question: "Which instrument measures the speed of wind?",
        optionA: "Thermometer",
        optionB: "Windvane",
        optionC: "Anemometer",
        correctAnswer: "Anemometer",
      }),
      shuffleOptions({
        question: "What happens to warm air when it is heated by the Sun?",
        optionA: "It rises up",
        optionB: "It cools down",
        optionC: "It becomes heavy",
        correctAnswer: "It rises up",
      }),
      shuffleOptions({
        question: "Which movement of the Earth causes day and night?",
        optionA: "Revolution",
        optionB: "Rotation",
        optionC: "Air current",
        correctAnswer: "Rotation",
      }),
      shuffleOptions({
        question: "Who studies weather and the atmosphere?",
        optionA: "Astronomer",
        optionB: "Meteorologist",
        optionC: "Geologist",
        correctAnswer: "Meteorologist",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Earth is surrounded by a layer of air called _______.",
        optionA: "Atmosphere",
        optionB: "Ozone layer",
        optionC: "Sky",
        correctAnswer: "Atmosphere",
      }),
      shuffleOptions({
        question: "_______ air rises upward while _______ air sinks downward.",
        optionA: "Warm, cool",
        optionB: "Cool, warm",
        optionC: "Dry, moist",
        correctAnswer: "Warm, cool",
      }),
      shuffleOptions({
        question: "The continuous movement of air from hot to cold regions is called _______.",
        optionA: "Air current",
        optionB: "Wind",
        optionC: "Storm",
        correctAnswer: "Air current",
      }),
      shuffleOptions({
        question: "Air mainly consists of nitrogen and _______.",
        optionA: "Oxygen",
        optionB: "Hydrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "The air blowing from sea to land during the day is called _______.",
        optionA: "Sea breeze",
        optionB: "Land breeze",
        optionC: "Air current",
        correctAnswer: "Sea breeze",
      }),
      shuffleOptions({
        question: "The air blowing from land to sea at night is called _______.",
        optionA: "Land breeze",
        optionB: "Sea breeze",
        optionC: "Air pressure",
        correctAnswer: "Land breeze",
      }),
      shuffleOptions({
        question: "The movement of the Earth around the Sun is called _______.",
        optionA: "Revolution",
        optionB: "Rotation",
        optionC: "Circulation",
        correctAnswer: "Revolution",
      }),
      shuffleOptions({
        question: "The movement of the Earth on its own axis is called _______.",
        optionA: "Rotation",
        optionB: "Revolution",
        optionC: "Motion",
        correctAnswer: "Rotation",
      }),
      shuffleOptions({
        question: "The Sun heats the Earth _______ causing changes in weather.",
        optionA: "Unevenly",
        optionB: "Evenly",
        optionC: "Quickly",
        correctAnswer: "Unevenly",
      }),
      shuffleOptions({
        question: "The part of the Earth facing the Sun has _______.",
        optionA: "Day",
        optionB: "Night",
        optionC: "Winter",
        correctAnswer: "Day",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air is a mixture of many gases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The main gas in air is oxygen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Moving air is called breeze.",
        optionA: "True",
        optionB: "False  (It is called wind.)",
        correctAnswer: "False  (It is called wind.)",
      }),
      shuffleOptions({
        question: "Sea breeze blows from sea towards the land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Land breeze blows from sea towards the land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Windvane measures the speed of wind.",
        optionA: "True",
        optionB: "False  (It shows direction.)",
        correctAnswer: "False  (It shows direction.)",
      }),
      shuffleOptions({
        question: "Warm air rises upward while cool air sinks downward.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sun causes all changes in weather.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rotation of the Earth causes day and night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Meteorology is the study of weather and atmosphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
