export const chapter = "Chapter - 15: Some Natural Phenomena";
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
        question: "What charge does an ebonite rod acquire when rubbed with fur?",
        optionA: "Positive",
        optionB: "Negative",
        optionC: "No charge",
        correctAnswer: "Negative",
      }),
      shuffleOptions({
        question: "What happens when two ebonite rods charged by rubbing are brought close to each other?",
        optionA: "They attract",
        optionB: "They repel",
        optionC: "They remain still",
        correctAnswer: "They repel",
      }),
      shuffleOptions({
        question: "Which instrument helps in detecting the presence and nature of charge on a body?",
        optionA: "Seismograph",
        optionB: "Electroscope",
        optionC: "Lightning rod",
        correctAnswer: "Electroscope",
      }),
      shuffleOptions({
        question: "What is the process of transferring charge from a charged object to the earth called?",
        optionA: "Charging",
        optionB: "Earthing",
        optionC: "Friction",
        correctAnswer: "Earthing",
      }),
      shuffleOptions({
        question: "What phenomenon explains how a charged body attracts an uncharged body without touching it?",
        optionA: "Friction",
        optionB: "Conduction",
        optionC: "Induction",
        correctAnswer: "Induction",
      }),
      shuffleOptions({
        question: "In which clouds do positive and negative charges separate during a thunderstorm?",
        optionA: "Snow clouds",
        optionB: "Thunder clouds (storm clouds)",
        optionC: "Rain clouds",
        correctAnswer: "Thunder clouds (storm clouds)",
      }),
      shuffleOptions({
        question: "Which particle in an atom carries a positive charge?",
        optionA: "Neutron",
        optionB: "Proton",
        optionC: "Electron",
        correctAnswer: "Proton",
      }),
      shuffleOptions({
        question: "When a glass rod is rubbed with silk, the rod becomes—",
        optionA: "negatively charged",
        optionB: "positively charged",
        optionC: "uncharged",
        correctAnswer: "positively charged",
      }),
      shuffleOptions({
        question: "What do we call the sudden shaking of the Earth’s crust?",
        optionA: "Earthquake",
        optionB: "Lightning",
        optionC: "Thunder",
        correctAnswer: "Earthquake",
      }),
      shuffleOptions({
        question: "Which metal rod protects tall buildings from lightning damage?",
        optionA: "Iron rod",
        optionB: "Lightning conductor",
        optionC: "Steel rod",
        correctAnswer: "Lightning conductor",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The central part of an atom is called the ______.",
        optionA: "electron",
        optionB: "nucleus",
        optionC: "proton",
        correctAnswer: "nucleus",
      }),
      shuffleOptions({
        question: "When two objects are rubbed together, electrons transfer between them, causing ______.",
        optionA: "burning",
        optionB: "charging by friction",
        optionC: "melting",
        correctAnswer: "charging by friction",
      }),
      shuffleOptions({
        question: "The force between two like charges is ______.",
        optionA: "attraction",
        optionB: "repulsion",
        optionC: "no force",
        correctAnswer: "repulsion",
      }),
      shuffleOptions({
        question: "When a charged object touches an uncharged object, the uncharged one gets charged by ______.",
        optionA: "conduction",
        optionB: "induction",
        optionC: "convection",
        correctAnswer: "conduction",
      }),
      shuffleOptions({
        question: "The bright flash seen during an electric discharge in clouds is called ______.",
        optionA: "thunder",
        optionB: "lightning",
        optionC: "spark",
        correctAnswer: "lightning",
      }),
      shuffleOptions({
        question: "The point inside Earth where an earthquake originates is called the ______.",
        optionA: "epicentre",
        optionB: "focus",
        optionC: "crater",
        correctAnswer: "focus",
      }),
      shuffleOptions({
        question: "Waves produced on Earth’s surface during an earthquake are called ______.",
        optionA: "water waves",
        optionB: "seismic waves",
        optionC: "air waves",
        correctAnswer: "seismic waves",
      }),
      shuffleOptions({
        question: "The magnitude of an earthquake is measured on the ______.",
        optionA: "Richter scale",
        optionB: "Kelvin scale",
        optionC: "Rain gauge",
        correctAnswer: "Richter scale",
      }),
      shuffleOptions({
        question: "Large thunder clouds are also known as ______.",
        optionA: "fog clouds",
        optionB: "storm clouds (thunder clouds)",
        optionC: "winter clouds",
        correctAnswer: "storm clouds (thunder clouds)",
      }),
      shuffleOptions({
        question: "A sudden electric discharge between cloud and ground produces ______.",
        optionA: "snowfall",
        optionB: "lightning",
        optionC: "mist",
        correctAnswer: "lightning",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Like charges repel each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A positively charged rod attracts a negatively charged object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Touching the electroscope disc with hand neutralises its charge.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lightning always strikes only small objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Electroscope is used to measure earthquake intensity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When rubbed with silk, the glass rod becomes positively charged.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earthquakes can be caused by movement of tectonic plates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A seismograph records seismic waves on a seismogram.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A charged ebonite rod repels a glass rod.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lightning is a giant electric discharge in the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
