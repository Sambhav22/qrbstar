export const chapter = "Chapter - 3: Separation of Substances";
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
        question: "Which process helps farmers separate wheat grains from husk by using wind?",
        optionA: "Sieving",
        optionB: "Winnowing",
        optionC: "Threshing",
        correctAnswer: "Winnowing",
      }),
      shuffleOptions({
        question: "Which method is used when impurities differ in colour, size or shape?",
        optionA: "Handpicking",
        optionB: "Decantation",
        optionC: "Filtration",
        correctAnswer: "Handpicking",
      }),
      shuffleOptions({
        question: "What is the solid material left on filter paper after filtration called?",
        optionA: "Filtrate",
        optionB: "Residue",
        optionC: "Solvent",
        correctAnswer: "Residue",
      }),
      shuffleOptions({
        question: "Which process involves beating out grains from harvested crop plants?",
        optionA: "Winnowing",
        optionB: "Threshing",
        optionC: "Evaporation",
        correctAnswer: "Threshing",
      }),
      shuffleOptions({
        question: "In which process does water convert into vapour on heating?",
        optionA: "Filtration",
        optionB: "Evaporation",
        optionC: "Condensation",
        correctAnswer: "Evaporation",
      }),
      shuffleOptions({
        question: "What is the clear liquid above the settled solid called in sedimentation?",
        optionA: "Sediment",
        optionB: "Supernatant liquid",
        optionC: "Solvent",
        correctAnswer: "Supernatant liquid",
      }),
      shuffleOptions({
        question: "Which machine is commonly used for threshing today?",
        optionA: "Thresher",
        optionB: "Grinder",
        optionC: "Filter",
        correctAnswer: "Thresher",
      }),
      shuffleOptions({
        question: "What are unwanted substances mixed deliberately with food called?",
        optionA: "Adulterants",
        optionB: "Solutes",
        optionC: "Sediments",
        correctAnswer: "Adulterants",
      }),
      shuffleOptions({
        question: "Which process is used to remove sand from a mixture of sand and water?",
        optionA: "Winnowing",
        optionB: "Sedimentation",
        optionC: "Handpicking",
        correctAnswer: "Sedimentation",
      }),
      shuffleOptions({
        question: "What type of mixture is a solution of salt in water?",
        optionA: "Heterogeneous",
        optionB: "Homogeneous",
        optionC: "Complex",
        correctAnswer: "Homogeneous",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The process of separating heavier and lighter particles by wind is called ________.",
        optionA: "Sieving",
        optionB: "Winnowing",
        optionC: "Filtration",
        correctAnswer: "Winnowing",
      }),
      shuffleOptions({
        question: "The dry outer covering of grains is known as ________.",
        optionA: "Husk",
        optionB: "Fodder",
        optionC: "Hay",
        correctAnswer: "Husk",
      }),
      shuffleOptions({
        question: "The liquid that passes through filter paper is called ________.",
        optionA: "Residue",
        optionB: "Filtrate",
        optionC: "Solvent",
        correctAnswer: "Filtrate",
      }),
      shuffleOptions({
        question: "The process of heating to obtain common salt from seawater is ________.",
        optionA: "Evaporation",
        optionB: "Condensation",
        optionC: "Filtration",
        correctAnswer: "Evaporation",
      }),
      shuffleOptions({
        question: "The process of pouring out clear liquid without disturbing sediment is called ________.",
        optionA: "Decantation",
        optionB: "Sedimentation",
        optionC: "Sieving",
        correctAnswer: "Decantation",
      }),
      shuffleOptions({
        question: "The main stem of plants is called ________.",
        optionA: "Fodder",
        optionB: "Stalk",
        optionC: "Husk",
        correctAnswer: "Stalk",
      }),
      shuffleOptions({
        question: "The mixture of salt and sand can be separated by using ________ methods.",
        optionA: "Combination",
        optionB: "Single",
        optionC: "Evaporation only",
        correctAnswer: "Combination",
      }),
      shuffleOptions({
        question: "A solution in which no more solute can be dissolved is called a ________ solution.",
        optionA: "Unsaturated",
        optionB: "Saturated",
        optionC: "Mixed",
        correctAnswer: "Saturated",
      }),
      shuffleOptions({
        question: "The process of deliberate mixing of cheap substances with food is called ________.",
        optionA: "Adulteration",
        optionB: "Filtration",
        optionC: "Condensation",
        correctAnswer: "Adulteration",
      }),
      shuffleOptions({
        question: "The solid layer formed at the bottom during sedimentation is called ________.",
        optionA: "Filtrate",
        optionB: "Residue",
        optionC: "Sediment",
        correctAnswer: "Sediment",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Filtration is used to separate heavier solids from liquids by hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The air we breathe is a pure substance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Handpicking is used to separate stones from rice and pulses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sieving helps in separating particles of the same size.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Evaporation converts liquids into vapours on heating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The clear liquid obtained after decantation is called residue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Adulterants are beneficial substances added to food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pure substances always contain more than one component.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Crude petroleum is an example of a mixture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Condensation converts vapours into liquid form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
