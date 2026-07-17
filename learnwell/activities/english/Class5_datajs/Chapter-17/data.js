export const chapter = "Chapter - 17: Ice Cream";
export const noOfActivities = 3;

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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
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
        question: "Who poured grape juice over snow as a treat?",
        optionA: "Persians",
        optionB: "Romans",
        optionC: "Indians",
        correctAnswer: "Persians",
      }),
      shuffleOptions({
        question: "Nero was the emperor of which place?",
        optionA: "Persia",
        optionB: "Rome",
        optionC: "England",
        correctAnswer: "Rome",
      }),
      shuffleOptions({
        question: "Which traveller carried the freezing technique to Italy?",
        optionA: "Columbus",
        optionB: "Marco Polo",
        optionC: "Vasco da Gama",
        correctAnswer: "Marco Polo",
      }),
      shuffleOptions({
        question: "Kulfi is frozen in a pot covered with –",
        optionA: "Sand",
        optionB: "Ice and salt",
        optionC: "Clay",
        correctAnswer: "Ice and salt",
      }),
      shuffleOptions({
        question: "Who brought ice from the Hindu Kush mountains to Delhi?",
        optionA: "Persians",
        optionB: "Mughal invaders",
        optionC: "Romans",
        correctAnswer: "Mughal invaders",
      }),
      shuffleOptions({
        question: "In which century did ice cream reach America?",
        optionA: "17th",
        optionB: "19th",
        optionC: "20th",
        correctAnswer: "19th",
      }),
      shuffleOptions({
        question: "Who got the U.S. patent for a hand-cranked freezer?",
        optionA: "Marco Polo",
        optionB: "Nancy Johnson",
        optionC: "King Charles I",
        correctAnswer: "Nancy Johnson",
      }),
      shuffleOptions({
        question: "Who loved ice cream so much that he rewarded his cook?",
        optionA: "Nero",
        optionB: "King Charles I",
        optionC: "Nancy Johnson",
        correctAnswer: "King Charles I",
      }),
      shuffleOptions({
        question: "Which company created 31 flavours?",
        optionA: "Amul",
        optionB: "Baskin-Robbins",
        optionC: "Kwality",
        correctAnswer: "Baskin-Robbins",
      }),
      shuffleOptions({
        question: "Efficient refrigeration for ice cream production was developed in –",
        optionA: "1826",
        optionB: "1926",
        optionC: "1943",
        correctAnswer: "1926",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People in Persia collected snow from ______.",
        optionA: "High mountains",
        optionB: "Rivers",
        optionC: "Plains",
        correctAnswer: "High mountains",
      }),
      shuffleOptions({
        question: "In Persia, rose water and ______ were used.",
        optionA: "Pasta",
        optionB: "Vermicelli",
        optionC: "Rice",
        correctAnswer: "Vermicelli",
      }),
      shuffleOptions({
        question: "Ice cream was first found in China about ______ years ago.",
        optionA: "1,200",
        optionB: "2,200",
        optionC: "500",
        correctAnswer: "2,200",
      }),
      shuffleOptions({
        question: "Arabs mixed milk with ______ to prepare ice cream.",
        optionA: "Honey",
        optionB: "Crushed sugar and ice",
        optionC: "Salt",
        correctAnswer: "Crushed sugar and ice",
      }),
      shuffleOptions({
        question: "King Charles I belonged to _______",
        optionA: "Italy",
        optionB: "England",
        optionC: "Rome",
        correctAnswer: "England",
      }),
      shuffleOptions({
        question: "Cones came into being in the ______ century.",
        optionA: "17th",
        optionB: "19th",
        optionC: "20th",
        correctAnswer: "19th",
      }),
      shuffleOptions({
        question: "In America, ______ soda became popular.",
        optionA: "Lemon",
        optionB: "Ice cream",
        optionC: "Orange",
        correctAnswer: "Ice cream",
      }),
      shuffleOptions({
        question: "Baskin-Robbins made one flavour for each ______",
        optionA: "Week",
        optionB: "Month",
        optionC: "Year",
        correctAnswer: "Month",
      }),
      shuffleOptions({
        question: "Industrial production became possible through ______",
        optionA: "Refrigeration",
        optionB: "Filtration",
        optionC: "Evaporation",
        correctAnswer: "Refrigeration",
      }),
      shuffleOptions({
        question: "The pot-freezer system used _______",
        optionA: "Ice and salt",
        optionB: "Coal and wood",
        optionC: "Fire and sand",
        correctAnswer: "Ice and salt",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ice cream was first made in Persia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nero was an emperor of England.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Arabs also made faloodah.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ice cream recipe came to India with Mughal invaders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Marco Polo was a Roman emperor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cones were invented in the nineteenth century.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nancy Johnson lived in Philadelphia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ice cream was always cheap in the past.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Refrigeration in 1926 helped commercial production.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Today, ice cream is made by only one method.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
