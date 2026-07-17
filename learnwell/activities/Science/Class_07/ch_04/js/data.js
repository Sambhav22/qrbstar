export const chapter = "Chapter - 4: Heat";
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
        question: "What instrument is used to measure temperature?",
        optionA: "Barometer",
        optionB: "Thermometer",
        optionC: "Hygrometer",
        correctAnswer: "Thermometer",
      }),
      shuffleOptions({
        question: "Who reversed the Celsius temperature scale to fix 0°C as the freezing point of water?",
        optionA: "Anders Celsius",
        optionB: "Carolus Linnaeus",
        optionC: "Daniel Fahrenheit",
        correctAnswer: "Carolus Linnaeus",
      }),
      shuffleOptions({
        question: "What is the normal human body temperature?",
        optionA: "35°C",
        optionB: "37°C",
        optionC: "40°C",
        correctAnswer: "37°C",
      }),
      shuffleOptions({
        question: "Which liquid is most commonly used in thermometers?",
        optionA: "Mercury",
        optionB: "Water",
        optionC: "Alcohol",
        correctAnswer: "Mercury",
      }),
      shuffleOptions({
        question: "What is the S.I. unit of temperature?",
        optionA: "°C",
        optionB: "°F",
        optionC: "Kelvin",
        correctAnswer: "Kelvin",
      }),
      shuffleOptions({
        question: "The process of transfer of heat in solids is called —",
        optionA: "Conduction",
        optionB: "Convection",
        optionC: "Radiation",
        correctAnswer: "Conduction",
      }),
      shuffleOptions({
        question: "The transfer of heat in liquids and gases takes place by —",
        optionA: "Convection",
        optionB: "Conduction",
        optionC: "Radiation",
        correctAnswer: "Convection",
      }),
      shuffleOptions({
        question: "Which type of heat transfer takes place from the Sun to the Earth?",
        optionA: "Conduction",
        optionB: "Convection",
        optionC: "Radiation",
        correctAnswer: "Radiation",
      }),
      shuffleOptions({
        question: "Which type of clothes are preferred in summer because they absorb less heat?",
        optionA: "Dark-coloured clothes",
        optionB: "Light-coloured clothes",
        optionC: "Woollen clothes",
        correctAnswer: "Light-coloured clothes",
      }),
      shuffleOptions({
        question: "What is the range of a clinical thermometer?",
        optionA: "0°C to 100°C",
        optionB: "35°C to 42°C",
        optionC: "–10°C to 110°C",
        correctAnswer: "35°C to 42°C",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Temperature is the degree of ______ or ______ of a body.",
        optionA: "hotness, coldness",
        optionB: "heat, pressure",
        optionC: "mass, density",
        correctAnswer: "hotness, coldness",
      }),
      shuffleOptions({
        question: "The S.I. unit of temperature is ______.",
        optionA: "°C",
        optionB: "°F",
        optionC: "Kelvin",
        correctAnswer: "Kelvin",
      }),
      shuffleOptions({
        question: "The thermometer used to measure human body temperature is called a ______ thermometer.",
        optionA: "laboratory",
        optionB: "clinical",
        optionC: "digital",
        correctAnswer: "clinical",
      }),
      shuffleOptions({
        question: "The heat transfer that does not require a medium is called ______.",
        optionA: "radiation",
        optionB: "conduction",
        optionC: "convection",
        correctAnswer: "radiation",
      }),
      shuffleOptions({
        question: "The thermometer used to measure the temperature of boiling water in laboratories is the ______ thermometer.",
        optionA: "clinical",
        optionB: "laboratory",
        optionC: "digital",
        correctAnswer: "laboratory",
      }),
      shuffleOptions({
        question: "The phenomenon of expansion of substances on heating is called ______.",
        optionA: "thermal expansion",
        optionB: "condensation",
        optionC: "evaporation",
        correctAnswer: "thermal expansion",
      }),
      shuffleOptions({
        question: "The movement of air from sea towards land during the day is known as a ______.",
        optionA: "land breeze",
        optionB: "sea breeze",
        optionC: "wind current",
        correctAnswer: "sea breeze",
      }),
      shuffleOptions({
        question: "Materials that allow heat to pass easily through them are called ______.",
        optionA: "insulators",
        optionB: "conductors",
        optionC: "absorbers",
        correctAnswer: "conductors",
      }),
      shuffleOptions({
        question: "The shiny inner surface of a thermos flask reduces heat loss by ______.",
        optionA: "radiation",
        optionB: "conduction",
        optionC: "convection",
        correctAnswer: "radiation",
      }),
      shuffleOptions({
        question: "A device used to measure very short time intervals is called a ______.",
        optionA: "stopwatch",
        optionB: "clock",
        optionC: "scale",
        correctAnswer: "stopwatch",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Heat is a form of energy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Touch is an accurate way to measure temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mercury is used in thermometers because it expands uniformly on heating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Clinical thermometer has a kink to prevent mercury from falling back quickly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Laboratory thermometer has a range from –10°C to 110°C.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Heat from the Sun reaches the Earth by conduction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air and water are poor conductors of heat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sea breeze blows from land to sea during the day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dark-coloured clothes absorb more heat than light-coloured clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Radiation can take place even through vacuum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
