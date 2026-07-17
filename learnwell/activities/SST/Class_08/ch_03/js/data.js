export const chapter = "Chapter - 3: Natural Vegetation and Wildlife";
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
        question: "Which factor increases the rate of transpiration in plants?",
        optionA: "Rainfall",
        optionB: "Wind",
        optionC: "Soil fertility",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "Which region of the world has forests so dense that sunlight hardly reaches the ground?",
        optionA: "Temperate region",
        optionB: "Equatorial region",
        optionC: "Polar region",
        correctAnswer: "Equatorial region",
      }),
      shuffleOptions({
        question: "Which type of forest is also known as monsoon forest?",
        optionA: "Tropical deciduous forests",
        optionB: "Taiga forests",
        optionC: "Tidal forests",
        correctAnswer: "Tropical deciduous forests",
      }),
      shuffleOptions({
        question: "Which tree is commonly found in the tidal forests of the Sundarbans?",
        optionA: "Pine",
        optionB: "Sundri",
        optionC: "Cedar",
        correctAnswer: "Sundri",
      }),
      shuffleOptions({
        question: "Which continent is known for marsupials like kangaroo and koala?",
        optionA: "Africa",
        optionB: "Europe",
        optionC: "Australia",
        correctAnswer: "Australia",
      }),
      shuffleOptions({
        question: "Which forest type is found between 50° and 70° latitudes?",
        optionA: "Temperate evergreen",
        optionB: "Taiga forests",
        optionC: "Grasslands",
        correctAnswer: "Taiga forests",
      }),
      shuffleOptions({
        question: "Which region mainly contains animals with thick fur to survive harsh winters?",
        optionA: "Taiga and tundra regions of Asia",
        optionB: "African savannas",
        optionC: "Australian deserts",
        correctAnswer: "Taiga and tundra regions of Asia",
      }),
      shuffleOptions({
        question: "Which material do softwood coniferous trees mainly provide?",
        optionA: "Rubber",
        optionB: "Paper pulp",
        optionC: "Fruit",
        correctAnswer: "Paper pulp",
      }),
      shuffleOptions({
        question: "Which area of India has tropical evergreen forests due to heavy rainfall?",
        optionA: "Western Ghats",
        optionB: "Rajasthan",
        optionC: "Punjab Plains",
        correctAnswer: "Western Ghats",
      }),
      shuffleOptions({
        question: "Which continent has animals such as anteaters, anaconda and armadillos?",
        optionA: "North America",
        optionB: "South America",
        optionC: "Asia",
        correctAnswer: "South America",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The natural vegetation of a place depends mainly on its ________.",
        optionA: "climate",
        optionB: "language",
        optionC: "industries",
        correctAnswer: "climate",
      }),
      shuffleOptions({
        question: "The prairies of the USA have mainly grasses because strong ________ prevent tall trees from growing.",
        optionA: "sunlight",
        optionB: "rainfall",
        optionC: "winds",
        correctAnswer: "winds",
      }),
      shuffleOptions({
        question: "Tropical evergreen forests have a thick ________ of leaves.",
        optionA: "stem",
        optionB: "canopy",
        optionC: "bark",
        correctAnswer: "canopy",
      }),
      shuffleOptions({
        question: "Thorn forests grow in regions with ________ rainfall.",
        optionA: "low",
        optionB: "heavy",
        optionC: "excessive",
        correctAnswer: "low",
      }),
      shuffleOptions({
        question: "Animals like polar bears and arctic foxes survive due to their ________ fur.",
        optionA: "thick",
        optionB: "short",
        optionC: "colourful",
        correctAnswer: "thick",
      }),
      shuffleOptions({
        question: "Llamas are used as beasts of burden in the ________ mountains.",
        optionA: "Andes",
        optionB: "Alps",
        optionC: "Himalayas",
        correctAnswer: "Andes",
      }),
      shuffleOptions({
        question: "________ forests grow in the river deltas of India.",
        optionA: "Tropical",
        optionB: "Tidal forests",
        optionC: "Temperate",
        correctAnswer: "Tidal forests",
      }),
      shuffleOptions({
        question: "Coniferous trees are suitable for making ________.",
        optionA: "paper pulp",
        optionB: "cloth",
        optionC: "medicines",
        correctAnswer: "paper pulp",
      }),
      shuffleOptions({
        question: "The growing season is short in polar regions because of very low ________.",
        optionA: "humidity",
        optionB: "nutrition",
        optionC: "temperature",
        correctAnswer: "temperature",
      }),
      shuffleOptions({
        question: "Thick and tall trees like ebony and mahogany are common in ________ forests.",
        optionA: "desert",
        optionB: "tropical evergreen forests",
        optionC: "taiga",
        correctAnswer: "tropical evergreen forests",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tropical evergreen forests allow very little sunlight to reach the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Grasslands dominate areas where rainfall is moderate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deciduous trees shed their leaves in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Australia has unique animals like kangaroo, emu and koala.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Taiga forests mainly consist of broad-leaved trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Anaconda, one of the largest snakes, is found in the Amazon basin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Wildlife Protection Act in India was passed in 1972.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Winds help tall trees grow better in prairies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Polar animals usually have thick fur to protect themselves from extreme cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tidal forests are found mainly in mountainous regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
