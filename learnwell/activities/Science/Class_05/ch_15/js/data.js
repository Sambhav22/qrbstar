export const chapter = "Chapter - 15: Temperature";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What does a thermometer measure?",
        optionA: "Weight",
        optionB: "Temperature",
        optionC: "Length",
        correctAnswer: "Temperature",
      }),
      shuffleOptions({
        question: "What is the freezing point of water in Celsius?",
        optionA: "0°C",
        optionB: "10°C",
        optionC: "50°C",
        correctAnswer: "0°C",
      }),
      shuffleOptions({
        question: "Which liquid is generally used in thermometers?",
        optionA: "Water",
        optionB: "Oil",
        optionC: "Mercury",
        correctAnswer: "Mercury",
      }),
      shuffleOptions({
        question: "What is the boiling point of water in Fahrenheit?",
        optionA: "180°F",
        optionB: "212°F",
        optionC: "150°F",
        correctAnswer: "212°F",
      }),
      shuffleOptions({
        question: "Which scale is marked from 0° to 100°?",
        optionA: "Kelvin scale",
        optionB: "Celsius scale",
        optionC: "Fahrenheit scale",
        correctAnswer: "Celsius scale",
      }),
      shuffleOptions({
        question: "What happens to mercury when it is heated?",
        optionA: "It expands and rises in the thermometer",
        optionB: "It freezes",
        optionC: "It disappears",
        correctAnswer: "It expands and rises in the thermometer",
      }),
      shuffleOptions({
        question: "What is the normal body temperature in Fahrenheit?",
        optionA: "95°F",
        optionB: "98.6°F",
        optionC: "102°F",
        correctAnswer: "98.6°F",
      }),
      shuffleOptions({
        question: "Which thermometer is used by doctors to measure body temperature?",
        optionA: "Laboratory thermometer",
        optionB: "Clinical thermometer",
        optionC: "Digital clock",
        correctAnswer: "Clinical thermometer",
      }),
      shuffleOptions({
        question: "What is the lower fixed point on the Fahrenheit scale?",
        optionA: "0°F",
        optionB: "10°F",
        optionC: "32°F",
        correctAnswer: "32°F",
      }),
      shuffleOptions({
        question: "Who designed the Celsius thermometer?",
        optionA: "Gabriel Fahrenheit",
        optionB: "Anders Celsius",
        optionC: "Isaac Newton",
        correctAnswer: "Anders Celsius",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water boils at ________ on the Celsius scale.",
        optionA: "50°C",
        optionB: "80°C",
        optionC: "100°C",
        correctAnswer: "100°C",
      }),
      shuffleOptions({
        question: "The Fahrenheit thermometer is marked from 32°F to ________.",
        optionA: "200°F",
        optionB: "212°F",
        optionC: "250°F",
        correctAnswer: "212°F",
      }),
      shuffleOptions({
        question: "The normal body temperature of a human body is ________.",
        optionA: "90°F",
        optionB: "98.6°F",
        optionC: "110°F",
        correctAnswer: "98.6°F",
      }),
      shuffleOptions({
        question: "The bulb of a thermometer contains ________.",
        optionA: "Mercury",
        optionB: "Water",
        optionC: "Ink",
        correctAnswer: "Mercury",
      }),
      shuffleOptions({
        question: "The Celsius thermometer was designed by ________.",
        optionA: "Anders Celsius",
        optionB: "Rutherford",
        optionC: "Thomson",
        correctAnswer: "Anders Celsius",
      }),
      shuffleOptions({
        question: "Each short line on a clinical thermometer represents ________ degrees.",
        optionA: "0.1",
        optionB: "0.2",
        optionC: "1.0",
        correctAnswer: "0.2",
      }),
      shuffleOptions({
        question: "The Fahrenheit scale lower fixed point is ________.",
        optionA: "32°F",
        optionB: "30°F",
        optionC: "0°F",
        correctAnswer: "32°F",
      }),
      shuffleOptions({
        question: "Temperature tells us how ________ or cold something is.",
        optionA: "long",
        optionB: "heavy",
        optionC: "hot",
        correctAnswer: "hot",
      }),
      shuffleOptions({
        question: "A thermometer should be read while holding it ________.",
        optionA: "Vertically",
        optionB: "Horizontally",
        optionC: "Upside down",
        correctAnswer: "Horizontally",
      }),
      shuffleOptions({
        question: "Mercury rises in the thermometer because it ________ on heating.",
        optionA: "contracts",
        optionB: "expands",
        optionC: "breaks",
        correctAnswer: "expands",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The normal body temperature is about 37°C.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water freezes at 10°C.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mercury in thermometers rises when heated.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Fahrenheit thermometer begins at 0°F.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clinical thermometers are used to measure body temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water boils at 212°F.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A thermometer can be shaken while reading the temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Temperature is measured in degrees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A Celsius thermometer shows boiling water at 50°C.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mercury expands when it becomes hotter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
