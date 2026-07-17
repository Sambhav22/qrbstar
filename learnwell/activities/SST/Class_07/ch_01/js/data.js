export const chapter = "Chapter - 1: The Environment";
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
        question: "Which realm of the earth contains all living organisms?",
        optionA: "Lithosphere",
        optionB: "Biosphere",
        optionC: "Hydrosphere",
        correctAnswer: "Biosphere",
      }),
      shuffleOptions({
        question: "Which gas forms the highest proportion of the atmosphere?",
        optionA: "Nitrogen",
        optionB: "Oxygen",
        optionC: "Carbon dioxide",
        correctAnswer: "Nitrogen",
      }),
      shuffleOptions({
        question: "Which component is made up of non-living elements like land, water and air?",
        optionA: "Biotic",
        optionB: "Abiotic",
        optionC: "Human",
        correctAnswer: "Abiotic",
      }),
      shuffleOptions({
        question: "Which part of the earth’s crust is rich in silica and aluminium?",
        optionA: "Sima",
        optionB: "Mantle",
        optionC: "Sial",
        correctAnswer: "Sial",
      }),
      shuffleOptions({
        question: "Which sphere controls temperature extremes on earth?",
        optionA: "Atmosphere",
        optionB: "Lithosphere",
        optionC: "Biosphere",
        correctAnswer: "Atmosphere",
      }),
      shuffleOptions({
        question: "Which realm includes oceans, seas, rivers and lakes?",
        optionA: "Hydrosphere",
        optionB: "Biosphere",
        optionC: "Troposphere",
        correctAnswer: "Hydrosphere",
      }),
      shuffleOptions({
        question: "Which layer of the earth’s environment protects life from harmful ultraviolet rays?",
        optionA: "Carbon layer",
        optionB: "Ozone layer",
        optionC: "Nitrogen layer",
        correctAnswer: "Ozone layer",
      }),
      shuffleOptions({
        question: "Which type of environment includes settlements, buildings and transport systems?",
        optionA: "Natural environment",
        optionB: "Human environment",
        optionC: "Biological environment",
        correctAnswer: "Human environment",
      }),
      shuffleOptions({
        question: "Which component includes plants, animals and microorganisms?",
        optionA: "Hydrosphere",
        optionB: "Biotic component",
        optionC: "Abiotic component",
        correctAnswer: "Biotic component",
      }),
      shuffleOptions({
        question: "Which process helps make freshwater available on earth?",
        optionA: "Rock cycle",
        optionB: "Nitrogen cycle",
        optionC: "Water cycle",
        correctAnswer: "Water cycle",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The narrow zone where all forms of life exist is called the ________.",
        optionA: "atmosphere",
        optionB: "biosphere",
        optionC: "lithosphere",
        correctAnswer: "biosphere",
      }),
      shuffleOptions({
        question: "The ocean bed is mainly composed of ________.",
        optionA: "sial",
        optionB: "sima",
        optionC: "clay",
        correctAnswer: "sima",
      }),
      shuffleOptions({
        question: "The gaseous blanket surrounding the earth is known as the ________.",
        optionA: "atmosphere",
        optionB: "hydrosphere",
        optionC: "mantle",
        correctAnswer: "atmosphere",
      }),
      shuffleOptions({
        question: "The biological environment consists of ________ things.",
        optionA: "non-living",
        optionB: "artificial",
        optionC: "living",
        correctAnswer: "living",
      }),
      shuffleOptions({
        question: "The land surface of the earth is a part of the ________.",
        optionA: "lithosphere",
        optionB: "hydrosphere",
        optionC: "biosphere",
        correctAnswer: "lithosphere",
      }),
      shuffleOptions({
        question: "Human-made features such as bridges belong to the ________ environment.",
        optionA: "natural",
        optionB: "human",
        optionC: "aquatic",
        correctAnswer: "human",
      }),
      shuffleOptions({
        question: "Water vapour in the air is part of the ________.",
        optionA: "atmosphere",
        optionB: "lithosphere",
        optionC: "hydrosphere",
        correctAnswer: "atmosphere",
      }),
      shuffleOptions({
        question: "The part of the environment formed by nature is called the ________ environment.",
        optionA: "biological",
        optionB: "human",
        optionC: "natural",
        correctAnswer: "natural",
      }),
      shuffleOptions({
        question: "More than ________ percent of the earth’s surface is covered with water.",
        optionA: "50",
        optionB: "70",
        optionC: "90",
        correctAnswer: "70",
      }),
      shuffleOptions({
        question: "Plants depend on ________ for carbon dioxide.",
        optionA: "lithosphere",
        optionB: "atmosphere",
        optionC: "hydrosphere",
        correctAnswer: "atmosphere",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sima is denser than sial.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The hydrosphere helps in regulating the climate of coastal regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The atmosphere exists in several layers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All water found on earth is freshwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Biosphere is the zone where life is found.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Human activities can disturb ecological balance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lithosphere includes only the continents and not the ocean floor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Water exists only in liquid form on earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Natural environment includes land, water, air, plants and animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The protection of the environment is only the responsibility of the government.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
