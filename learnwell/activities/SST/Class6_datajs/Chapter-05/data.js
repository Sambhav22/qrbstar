export const chapter = "Chapter - 5: Realms of the Earth";
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
        question: "Which ocean is the largest and deepest on Earth?",
        optionA: "Indian Ocean",
        optionB: "Atlantic Ocean",
        optionC: "Pacific Ocean",
        correctAnswer: "Pacific Ocean",
      }),
      shuffleOptions({
        question: "Which continent is known as the Frozen Continent?",
        optionA: "Australia",
        optionB: "Africa",
        optionC: "Antarctica",
        correctAnswer: "Antarctica",
      }),
      shuffleOptions({
        question: "Which river is the longest river in the world?",
        optionA: "Amazon",
        optionB: "Nile",
        optionC: "Yangtze",
        correctAnswer: "Nile",
      }),
      shuffleOptions({
        question: "Which continent lies entirely in the Southern Hemisphere?",
        optionA: "Australia",
        optionB: "Europe",
        optionC: "Asia",
        correctAnswer: "Australia",
      }),
      shuffleOptions({
        question: "Which mountain range runs the full length of South America?",
        optionA: "Alps",
        optionB: "Andes",
        optionC: "Rockies",
        correctAnswer: "Andes",
      }),
      shuffleOptions({
        question: "Which continent is the most densely populated according to the chapter?",
        optionA: "Europe",
        optionB: "Asia",
        optionC: "South America",
        correctAnswer: "Asia",
      }),
      shuffleOptions({
        question: "Which ocean surrounds the North Pole?",
        optionA: "Arctic Ocean",
        optionB: "Southern Ocean",
        optionC: "Atlantic Ocean",
        correctAnswer: "Arctic Ocean",
      }),
      shuffleOptions({
        question: "Which landform is flat and formed by deposition of alluvium?",
        optionA: "Mountains",
        optionB: "Plateaus",
        optionC: "Plains",
        correctAnswer: "Plains",
      }),
      shuffleOptions({
        question: "Which gas forms 78% of the atmosphere?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Nitrogen",
      }),
      shuffleOptions({
        question: "Which continent has the largest hot desert, the Sahara?",
        optionA: "Africa",
        optionB: "South America",
        optionC: "Asia",
        correctAnswer: "Africa",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The highest point on Earth is ________.",
        optionA: "Mariana Trench",
        optionB: "Mount Everest",
        optionC: "Tibet Plateau",
        correctAnswer: "Mount Everest",
      }),
      shuffleOptions({
        question: "Asia and Europe together are called ________.",
        optionA: "Euramerica",
        optionB: "Eurasia",
        optionC: "Euro-Asia Union",
        correctAnswer: "Eurasia",
      }),
      shuffleOptions({
        question: "Almost 71% of the Earth’s surface is covered with ________.",
        optionA: "ice",
        optionB: "land",
        optionC: "water",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Old mountains have ________ peaks.",
        optionA: "pointed",
        optionB: "rounded",
        optionC: "flat",
        correctAnswer: "rounded",
      }),
      shuffleOptions({
        question: "The Indian Ocean is ________ in shape.",
        optionA: "circular",
        optionB: "triangular",
        optionC: "narrow",
        correctAnswer: "triangular",
      }),
      shuffleOptions({
        question: "About 97% of Earth’s water is ________.",
        optionA: "fresh",
        optionB: "salty in oceans",
        optionC: "stored in rivers",
        correctAnswer: "salty in oceans",
      }),
      shuffleOptions({
        question: "Water vapour in the lower atmosphere helps in bringing ________.",
        optionA: "earthquakes",
        optionB: "rainfall and snow",
        optionC: "thunderstorms only",
        correctAnswer: "rainfall and snow",
      }),
      shuffleOptions({
        question: "The narrow zone where life exists is called the ________.",
        optionA: "hydrosphere",
        optionB: "lithosphere",
        optionC: "biosphere",
        correctAnswer: "biosphere",
      }),
      shuffleOptions({
        question: "The Australia continent got its name from a Latin word meaning ________.",
        optionA: "southern",
        optionB: "large",
        optionC: "hot",
        correctAnswer: "southern",
      }),
      shuffleOptions({
        question: "The deepest point on Earth is the ________.",
        optionA: "African Rift",
        optionB: "Mariana Trench",
        optionC: "Bering Strait",
        correctAnswer: "Mariana Trench",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The atmosphere acts like a blanket around the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Atlantic Ocean is the busiest ocean for trade.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plateaus are always densely populated.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Antarctica remains almost 98% frozen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water vapour exists mostly in the uppermost layer of the atmosphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Pacific Ocean has a circular shape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Old mountains are higher and sharper than young mountains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oceans help regulate the temperature of different places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plains make construction of buildings and roads very difficult.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The biosphere is where land, air and water meet and support life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
