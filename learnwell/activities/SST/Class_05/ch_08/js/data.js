export const chapter = "Chapter - 8: Greenland : The Land of Snow";
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
        question: "Which explorer discovered Greenland around 981 AD?",
        optionA: "Marco Polo",
        optionB: "Eric the Red",
        optionC: "James Cook",
        correctAnswer: "Eric the Red",
      }),
      shuffleOptions({
        question: "Which ocean lies to the south of Greenland?",
        optionA: "Arctic Ocean",
        optionB: "Indian Ocean",
        optionC: "Atlantic Ocean",
        correctAnswer: "Atlantic Ocean",
      }),
      shuffleOptions({
        question: "Why does Greenland remain cold even during summer?",
        optionA: "It receives almost no sunlight",
        optionB: "The sun’s rays are very slanting",
        optionC: "Clouds block sunlight",
        correctAnswer: "The sun’s rays are very slanting",
      }),
      shuffleOptions({
        question: "What is the floating mass of ice that breaks from the ice-cap called?",
        optionA: "Glacier",
        optionB: "Iceberg",
        optionC: "Ice block",
        correctAnswer: "Iceberg",
      }),
      shuffleOptions({
        question: "Which birds visit Greenland mainly during summer for nesting?",
        optionA: "Flamingos",
        optionB: "Arctic terns",
        optionC: "Parrots",
        correctAnswer: "Arctic terns",
      }),
      shuffleOptions({
        question: "Which animals have thick fur that helps them survive harsh winters in Greenland?",
        optionA: "Polar bears and Arctic foxes",
        optionB: "Camels",
        optionC: "Cows",
        correctAnswer: "Polar bears and Arctic foxes",
      }),
      shuffleOptions({
        question: "Which of these is a common fish found in Greenland?",
        optionA: "Tuna",
        optionB: "Cod and halibut",
        optionC: "Swordfish",
        correctAnswer: "Cod and halibut",
      }),
      shuffleOptions({
        question: "What type of house did Eskimos traditionally live in?",
        optionA: "Cottage",
        optionB: "Igloo",
        optionC: "Bungalow",
        correctAnswer: "Igloo",
      }),
      shuffleOptions({
        question: "What did Eskimos traditionally use for hunting seals?",
        optionA: "Nets",
        optionB: "Spears without rope",
        optionC: "Harpoons with rope attached",
        correctAnswer: "Harpoons with rope attached",
      }),
      shuffleOptions({
        question: "Which animal is specially trained to pull sledges in Greenland?",
        optionA: "Horses",
        optionB: "Huskies",
        optionC: "Elephants",
        correctAnswer: "Huskies",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Greenland lies mainly in the ______ zone.",
        optionA: "temperate",
        optionB: "frigid",
        optionC: "torrid",
        correctAnswer: "frigid",
      }),
      shuffleOptions({
        question: "In winter, the sun in Greenland does not ______ for months.",
        optionA: "set",
        optionB: "rise",
        optionC: "shine brightly",
        correctAnswer: "rise",
      }),
      shuffleOptions({
        question: "The icy covering that remains on land throughout the year is called an ______.",
        optionA: "ice-seat",
        optionB: "ice-cap",
        optionC: "ice-rock",
        correctAnswer: "ice-cap",
      }),
      shuffleOptions({
        question: "Short grasses and mosses grow only during the ______.",
        optionA: "summer months",
        optionB: "rainy months",
        optionC: "autumn season",
        correctAnswer: "summer months",
      }),
      shuffleOptions({
        question: "A warm hooded jacket worn by Eskimos is known as a ______.",
        optionA: "trench coat",
        optionB: "parka",
        optionC: "woollen cloak",
        correctAnswer: "parka",
      }),
      shuffleOptions({
        question: "Eskimos travel by a light boat called a ______.",
        optionA: "canoe",
        optionB: "kayak",
        optionC: "raft",
        correctAnswer: "kayak",
      }),
      shuffleOptions({
        question: "The ______ pulls sledges across the icy land.",
        optionA: "donkey",
        optionB: "husky dog",
        optionC: "goat",
        correctAnswer: "husky dog",
      }),
      shuffleOptions({
        question: "______ is one of the migratory birds that visits Greenland.",
        optionA: "Penguin",
        optionB: "Arctic tern",
        optionC: "Crow",
        correctAnswer: "Arctic tern",
      }),
      shuffleOptions({
        question: "Greenland is surrounded by the ______ Ocean in the north.",
        optionA: "Arctic Ocean",
        optionB: "Pacific Ocean",
        optionC: "Southern Ocean",
        correctAnswer: "Arctic Ocean",
      }),
      shuffleOptions({
        question: "______ is a fish commonly found in the waters around Greenland.",
        optionA: "Goldfish",
        optionB: "Salmon",
        optionC: "Anchovy",
        correctAnswer: "Salmon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Greenland remains covered with thick ice-caps throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Even during summer, the temperature in Greenland stays below 0°C.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The people of Greenland originally lived in dome-shaped houses made of ice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reptiles are commonly found in Greenland.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Migratory birds come to Greenland mainly to feed and nest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Eskimos have completely stopped using kayaks for travel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Huskies have thick fur, which makes them suitable for pulling sledges in cold regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Most people in Greenland live in the central mountainous areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The government of Greenland organises events like dog-racing and ice-fishing to attract tourists.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Greenland is the largest island in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
