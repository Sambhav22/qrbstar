export const chapter = "Chapter - 10: Life in Deserts";
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
        question: "Which desert is often called “the ocean without water”?",
        optionA: "Thar",
        optionB: "Sahara",
        optionC: "Gobi",
        correctAnswer: "Sahara",
      }),
      shuffleOptions({
        question: "Which river flows across the eastern region of the Sahara Desert?",
        optionA: "Congo",
        optionB: "Nile",
        optionC: "Zambezi",
        correctAnswer: "Nile",
      }),
      shuffleOptions({
        question: "Which wind of the Sahara is known for its burning, extremely hot nature?",
        optionA: "Chinook",
        optionB: "Loo",
        optionC: "Simoon",
        correctAnswer: "Simoon",
      }),
      shuffleOptions({
        question: "Which plant grows commonly in the oasis areas of the Sahara?",
        optionA: "Pine",
        optionB: "Date palm",
        optionC: "Eucalyptus",
        correctAnswer: "Date palm",
      }),
      shuffleOptions({
        question: "Which animal in the Sahara comes out at night to absorb dew for water?",
        optionA: "Camel",
        optionB: "Lizard",
        optionC: "Scorpion",
        correctAnswer: "Scorpion",
      }),
      shuffleOptions({
        question: "Which high mountain range forms the northern boundary of Ladakh?",
        optionA: "Karakoram",
        optionB: "Zanskar",
        optionC: "Vindhya",
        correctAnswer: "Karakoram",
      }),
      shuffleOptions({
        question: "Which shrub in Ladakh is widely used as firewood?",
        optionA: "Acacia",
        optionB: "Furze",
        optionC: "Neem",
        correctAnswer: "Furze",
      }),
      shuffleOptions({
        question: "Which animal provides Ladakhis with milk, wool and transport?",
        optionA: "Goat",
        optionB: "Yak",
        optionC: "Reindeer",
        correctAnswer: "Yak",
      }),
      shuffleOptions({
        question: "Which bird is commonly found in Ladakh’s cold desert environment?",
        optionA: "Parrot",
        optionB: "Raven",
        optionC: "Redstart",
        correctAnswer: "Redstart",
      }),
      shuffleOptions({
        question: "Which river has carved deep valleys and gorges in Ladakh?",
        optionA: "Ganga",
        optionB: "Indus",
        optionC: "Yamuna",
        correctAnswer: "Indus",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Only about ______ of the Sahara Desert is covered with sand.",
        optionA: "one-half",
        optionB: "one-fourth",
        optionC: "three-fourth",
        correctAnswer: "one-fourth",
      }),
      shuffleOptions({
        question: "The Sahara receives less than ______ cm rainfall every year.",
        optionA: "50",
        optionB: "40",
        optionC: "25",
        correctAnswer: "25",
      }),
      shuffleOptions({
        question: "The nomadic tribes of Sahara move in caravans looking for ______.",
        optionA: "minerals",
        optionB: "pastures and water",
        optionC: "markets",
        correctAnswer: "pastures and water",
      }),
      shuffleOptions({
        question: "The plants in the Sahara have ______ leaves to reduce water loss.",
        optionA: "broad",
        optionB: "waxy",
        optionC: "colourful",
        correctAnswer: "waxy",
      }),
      shuffleOptions({
        question: "In Ladakh, the main source of water is the melted ______.",
        optionA: "rainwater",
        optionB: "snow",
        optionC: "groundwater",
        correctAnswer: "snow",
      }),
      shuffleOptions({
        question: "The ______ range lies to the south of Ladakh.",
        optionA: "Aravalli",
        optionB: "Zanskar",
        optionC: "Satpura",
        correctAnswer: "Zanskar",
      }),
      shuffleOptions({
        question: "The climate of Ladakh remains cold and dry for almost ______ months a year.",
        optionA: "two",
        optionB: "six",
        optionC: "ten",
        correctAnswer: "six",
      }),
      shuffleOptions({
        question: "The Indus River’s tributaries bring melted water from ______.",
        optionA: "glaciers",
        optionB: "oceans",
        optionC: "monsoon clouds",
        correctAnswer: "glaciers",
      }),
      shuffleOptions({
        question: "Ladakhi farmers mainly grow barley and ______ during summers.",
        optionA: "rice",
        optionB: "potatoes",
        optionC: "sugarcane",
        correctAnswer: "potatoes",
      }),
      shuffleOptions({
        question: "The wool obtained from the chiru is called ______.",
        optionA: "pashmina",
        optionB: "shahtoosh",
        optionC: "mohair",
        correctAnswer: "shahtoosh",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In the Sahara, some places may not receive rain for several years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cactus and acacia are common plants found in the Sahara.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The temperature in Ladakh’s summer days rises up to 40°C.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Scorpions and lizards in the Sahara are nocturnal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ladakh is surrounded by tall mountain ranges on almost all sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Indus River flows through the western side of Ladakh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Most settlements in Ladakh are found near river valleys.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sahara Desert has uniform relief throughout its region.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The people of Ladakh depend mainly on agriculture during winters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ladakh is often called “Little Tibet” because of its cultural similarity to Tibet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
