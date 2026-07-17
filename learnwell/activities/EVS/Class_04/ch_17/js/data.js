export const chapter = "Chapter - 17: Sources of Water";
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
        question: "Which is the main source of water on the Earth?",
        optionA: "Lake",
        optionB: "Sea",
        optionC: "Rain",
        correctAnswer: "Rain",
      }),
      shuffleOptions({
        question: "Which rivers get water from the melting of snow?",
        optionA: "Godavari and Krishna",
        optionB: "Ganga and Yamuna",
        optionC: "Mahi and Sabarmati",
        correctAnswer: "Ganga and Yamuna",
      }),
      shuffleOptions({
        question: "What is the electricity produced from water called?",
        optionA: "Hydroelectricity",
        optionB: "Solar energy",
        optionC: "Wind energy",
        correctAnswer: "Hydroelectricity",
      }),
      shuffleOptions({
        question: "Which of these is a man-made water resource?",
        optionA: "Dam",
        optionB: "Lake",
        optionC: "River",
        correctAnswer: "Dam",
      }),
      shuffleOptions({
        question: "What gas is used in the final stage of water purification?",
        optionA: "Oxygen",
        optionB: "Chlorine",
        optionC: "Carbon dioxide",
        correctAnswer: "Chlorine",
      }),
      shuffleOptions({
        question: "Which of these is an example of stagnant water?",
        optionA: "River",
        optionB: "Lake",
        optionC: "Stream",
        correctAnswer: "Lake",
      }),
      shuffleOptions({
        question: "What should we do if muddy water comes from the tap?",
        optionA: "Drink it directly",
        optionB: "Boil it before use",
        optionC: "Throw it away",
        correctAnswer: "Boil it before use",
      }),
      shuffleOptions({
        question: "Which rivers are rainfed?",
        optionA: "Godavari and Krishna",
        optionB: "Ganga and Yamuna",
        optionC: "Brahmaputra and Indus",
        correctAnswer: "Godavari and Krishna",
      }),
      shuffleOptions({
        question: "What is the first step in water purification at a treatment plant?",
        optionA: "Filtration",
        optionB: "Sedimentation",
        optionC: "Chlorination",
        correctAnswer: "Sedimentation",
      }),
      shuffleOptions({
        question: "Which activity helps in saving water?",
        optionA: "Keeping the tap running",
        optionB: "Repairing leaking taps",
        optionC: "Washing car with hose daily",
        correctAnswer: "Repairing leaking taps",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water is circulated on our planet in a ______.",
        optionA: "rotation",
        optionB: "hydrological cycle",
        optionC: "revolution",
        correctAnswer: "hydrological cycle",
      }),
      shuffleOptions({
        question: "______ water is safe for drinking.",
        optionA: "Dirty",
        optionB: "Potable",
        optionC: "Rain",
        correctAnswer: "Potable",
      }),
      shuffleOptions({
        question: "Water that collects behind a dam is called a ______.",
        optionA: "canal",
        optionB: "reservoir",
        optionC: "pond",
        correctAnswer: "reservoir",
      }),
      shuffleOptions({
        question: "______ and ______ are examples of rainfed rivers.",
        optionA: "Ganga and Yamuna",
        optionB: "Godavari and Krishna",
        optionC: "Brahmaputra and Indus",
        correctAnswer: "Godavari and Krishna",
      }),
      shuffleOptions({
        question: "The process of heating water to kill germs is called ______.",
        optionA: "Boiling",
        optionB: "Filtering",
        optionC: "Cooling",
        correctAnswer: "Boiling",
      }),
      shuffleOptions({
        question: "______ helps remove remaining dirt particles in the purification process.",
        optionA: "Filtration",
        optionB: "Sedimentation",
        optionC: "Condensation",
        correctAnswer: "Filtration",
      }),
      shuffleOptions({
        question: "______ is the gas used to make water germ-free.",
        optionA: "Chlorine",
        optionB: "Hydrogen",
        optionC: "Oxygen",
        correctAnswer: "Chlorine",
      }),
      shuffleOptions({
        question: "______ are used to extract underground water.",
        optionA: "Hand pumps",
        optionB: "Buckets",
        optionC: "Boats",
        correctAnswer: "Hand pumps",
      }),
      shuffleOptions({
        question: "______ water is supplied to our homes through pipelines.",
        optionA: "Purified",
        optionB: "Dirty",
        optionC: "Rain",
        correctAnswer: "Purified",
      }),
      shuffleOptions({
        question: "______ is the most recommended home method to purify water.",
        optionA: "Boiling",
        optionB: "Freezing",
        optionC: "Mixing",
        correctAnswer: "Boiling",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rain is a natural source of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sea water can be directly used for drinking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dams are built to check the flow of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Filtration removes dirt particles from water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chlorination makes water germ-free.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Boiling of water helps in killing germs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainfed rivers remain dry during the summer season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep the tap running while brushing our teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fresh water is limited and should be conserved.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lakes and ponds contain stagnant water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
