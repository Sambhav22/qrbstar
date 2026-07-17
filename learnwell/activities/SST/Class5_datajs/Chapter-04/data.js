export const chapter = "Chapter - 4: Weather and Climate";
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
        question: "Which factor explains why hill stations stay cool even in summer?",
        optionA: "More rainfall",
        optionB: "Thin air at high altitude",
        optionC: "Strong winds",
        correctAnswer: "Thin air at high altitude",
      }),
      shuffleOptions({
        question: "Which zone receives the strongest heat from the sun throughout the year?",
        optionA: "Temperate Zone",
        optionB: "Torrid Zone",
        optionC: "Frigid Zone",
        correctAnswer: "Torrid Zone",
      }),
      shuffleOptions({
        question: "What makes the climate of coastal areas pleasant?",
        optionA: "Heavy snowfall",
        optionB: "Land and sea breezes",
        optionC: "Mountain ranges",
        correctAnswer: "Land and sea breezes",
      }),
      shuffleOptions({
        question: "Which wind brings moisture and rain to an area?",
        optionA: "Desert winds",
        optionB: "Sea winds",
        optionC: "Winds blowing over water bodies",
        correctAnswer: "Winds blowing over water bodies",
      }),
      shuffleOptions({
        question: "Which part of the Earth gets slanting rays of the sun?",
        optionA: "Equator",
        optionB: "Poles",
        optionC: "Torrid Zone",
        correctAnswer: "Poles",
      }),
      shuffleOptions({
        question: "Which factor prevents the icy winds of Central Asia from entering India?",
        optionA: "Indian Ocean",
        optionB: "Himalayas",
        optionC: "Rainfall",
        correctAnswer: "Himalayas",
      }),
      shuffleOptions({
        question: "Why do places near the sea not become very hot or very cold?",
        optionA: "Due to glaciers",
        optionB: "Due to moderate climate influence of the sea",
        optionC: "Due to dry winds",
        correctAnswer: "Due to moderate climate influence of the sea",
      }),
      shuffleOptions({
        question: "Which of the following changes many times within a single day?",
        optionA: "Climate",
        optionB: "Weather",
        optionC: "Heat zone",
        correctAnswer: "Weather",
      }),
      shuffleOptions({
        question: "What makes us sweat more during humid days?",
        optionA: "Strong sunlight",
        optionB: "High moisture in the air",
        optionC: "Cold winds",
        correctAnswer: "High moisture in the air",
      }),
      shuffleOptions({
        question: "Why do regions far from the sea face extreme temperatures?",
        optionA: "No influence of sea breeze and land breeze",
        optionB: "Very high altitude",
        optionC: "Thick forests",
        correctAnswer: "No influence of sea breeze and land breeze",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The climate of a place affects its ______.",
        optionA: "clothing and food habits",
        optionB: "languages",
        optionC: "festivals",
        correctAnswer: "clothing and food habits",
      }),
      shuffleOptions({
        question: "The Earth is divided into heat zones based on the ______ received from the sun.",
        optionA: "rainfall",
        optionB: "heat/temperature",
        optionC: "clouds",
        correctAnswer: "heat/temperature",
      }),
      shuffleOptions({
        question: "The ______ Zone is neither very hot nor very cold.",
        optionA: "Temperate",
        optionB: "Torrid",
        optionC: "Frigid",
        correctAnswer: "Temperate",
      }),
      shuffleOptions({
        question: "Hot air rises because it becomes ______.",
        optionA: "lighter",
        optionB: "heavier",
        optionC: "wetter",
        correctAnswer: "lighter",
      }),
      shuffleOptions({
        question: "Winds blowing from cold regions make the temperature ______.",
        optionA: "increase",
        optionB: "decrease",
        optionC: "remain the same",
        correctAnswer: "decrease",
      }),
      shuffleOptions({
        question: "Coastal areas have ______ climate.",
        optionA: "extreme",
        optionB: "humid",
        optionC: "moderate",
        correctAnswer: "moderate",
      }),
      shuffleOptions({
        question: "Humid air contains a lot of ______.",
        optionA: "sand",
        optionB: "moisture",
        optionC: "smoke",
        correctAnswer: "moisture",
      }),
      shuffleOptions({
        question: "The direction of winds affects the ______ of a place.",
        optionA: "colour of the sky",
        optionB: "climate",
        optionC: "rotation of Earth",
        correctAnswer: "climate",
      }),
      shuffleOptions({
        question: "At night, cool air from the land blows towards the sea, known as ______.",
        optionA: "sea breeze",
        optionB: "land breeze",
        optionC: "monsoon",
        correctAnswer: "land breeze",
      }),
      shuffleOptions({
        question: "Regions near the poles remain ______ throughout the year.",
        optionA: "flooded",
        optionB: "covered with snow",
        optionC: "windy",
        correctAnswer: "covered with snow",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun gives the same amount of heat to all places on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Weather describes the atmospheric condition of a small area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Climate changes several times in a single day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Slanting rays make regions near the poles very cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The land heats up more slowly than the sea during the day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Winds from deserts are usually hot and dry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Monsoon winds easily cross the Himalayas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air becomes warmer as we go higher above sea level.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Distance from the sea is an important factor influencing climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Humid weather makes us sweat more.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
