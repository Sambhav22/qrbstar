export const chapter = "Chapter - 6: Natural Vegetation and Wildlife";
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
        question: "Which trees form a thick canopy that blocks sunlight from reaching the forest floor?",
        optionA: "Pine",
        optionB: "Teak",
        optionC: "Mahogany",
        correctAnswer: "Mahogany",
      }),
      shuffleOptions({
        question: "Which river basin is known for having the world’s largest tropical evergreen rainforest?",
        optionA: "Mississippi",
        optionB: "Amazon",
        optionC: "Indus",
        correctAnswer: "Amazon",
      }),
      shuffleOptions({
        question: "Which animals are commonly found in tropical grasslands?",
        optionA: "Polar bears",
        optionB: "Wolves",
        optionC: "Zebras",
        correctAnswer: "Zebras",
      }),
      shuffleOptions({
        question: "Which type of forest is found in areas with winter rainfall and dry summers?",
        optionA: "Temperate evergreen",
        optionB: "Mediterranean forests",
        optionC: "Tropical deciduous",
        correctAnswer: "Mediterranean forests",
      }),
      shuffleOptions({
        question: "Which bird species is commonly found in the African savannas?",
        optionA: "Penguin",
        optionB: "Ostrich",
        optionC: "Duck",
        correctAnswer: "Ostrich",
      }),
      shuffleOptions({
        question: "Which trees of coniferous forests are mainly used for making paper pulp?",
        optionA: "Fir, spruce, cedar",
        optionB: "Oak, elm",
        optionC: "Teak, sal",
        correctAnswer: "Fir, spruce, cedar",
      }),
      shuffleOptions({
        question: "Which animal is known for having thick fur to survive the tundra region?",
        optionA: "Tiger",
        optionB: "Silver fox",
        optionC: "Jackal",
        correctAnswer: "Silver fox",
      }),
      shuffleOptions({
        question: "Which region’s temperate grasslands are famous for wheat and corn cultivation?",
        optionA: "Himalayas",
        optionB: "Prairies of North America",
        optionC: "Sahara desert",
        correctAnswer: "Prairies of North America",
      }),
      shuffleOptions({
        question: "Which type of vegetation mainly consists of thorny bushes and cacti?",
        optionA: "Temperate forests",
        optionB: "Mediterranean",
        optionC: "Desert vegetation",
        correctAnswer: "Desert vegetation",
      }),
      shuffleOptions({
        question: "Which animal is known as the \"ship of the desert\"?",
        optionA: "Horse",
        optionB: "Camel",
        optionC: "Yak",
        correctAnswer: "Camel",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tropical evergreen forests receive about ______ of rainfall annually.",
        optionA: "500–900 mm",
        optionB: "1000–1500 mm",
        optionC: "1800–2500 mm",
        correctAnswer: "1800–2500 mm",
      }),
      shuffleOptions({
        question: "The tall coarse grasses in tropical grasslands are commonly called ______.",
        optionA: "elephant grass",
        optionB: "silver grass",
        optionC: "soft grass",
        correctAnswer: "elephant grass",
      }),
      shuffleOptions({
        question: "Coniferous forests mainly grow in areas with ______ winters.",
        optionA: "mild",
        optionB: "long cold",
        optionC: "rainy",
        correctAnswer: "long cold",
      }),
      shuffleOptions({
        question: "Mosses and lichens are the main plants of the ______ region.",
        optionA: "desert",
        optionB: "tundra",
        optionC: "monsoon",
        correctAnswer: "tundra",
      }),
      shuffleOptions({
        question: "The grasslands of South America are called ______.",
        optionA: "veld",
        optionB: "pampas",
        optionC: "downs",
        correctAnswer: "pampas",
      }),
      shuffleOptions({
        question: "The Mediterranean forests have ______ leaves to reduce water loss.",
        optionA: "broad",
        optionB: "wax-coated narrow leaves",
        optionC: "feathery",
        correctAnswer: "wax-coated narrow leaves",
      }),
      shuffleOptions({
        question: "The grasslands of Africa are known as ______.",
        optionA: "savannas",
        optionB: "prairies",
        optionC: "campos",
        correctAnswer: "savannas",
      }),
      shuffleOptions({
        question: "Tropical deciduous forests shed their leaves during the ______ season.",
        optionA: "rainy",
        optionB: "dry",
        optionC: "winter",
        correctAnswer: "dry",
      }),
      shuffleOptions({
        question: "The vegetation in deserts mainly consists of ______ plants.",
        optionA: "thorny and drought-resistant",
        optionB: "tall evergreen",
        optionC: "dense canopy-forming",
        correctAnswer: "thorny and drought-resistant",
      }),
      shuffleOptions({
        question: "The tundra region receives less than ______ of rainfall annually.",
        optionA: "10 cm",
        optionB: "38 cm",
        optionC: "100 cm",
        correctAnswer: "38 cm",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tropical evergreen forests remain green throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Coniferous forests have trees with needle-shaped leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mediterranean forests grow in areas with dry winters and rainy summers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ostrich is a flightless bird found in tropical grasslands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cactus plants survive in deserts due to waxy leaves and long roots.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tundra vegetation includes tall trees that grow throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tropical grasslands support both herbivores and carnivores.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Amazon Basin is known for its tropical deciduous forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In deserts, nocturnal animals are commonly found.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Temperate grasslands are known as prairies in North America.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
