export const chapter = "Chapter - 7: Settlements, Transport and Communication";
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
        question: "Which type of settlement has houses built very close to each other?",
        optionA: "Scattered",
        optionB: "Compact",
        optionC: "Linear",
        correctAnswer: "Compact",
      }),
      shuffleOptions({
        question: "Which towns in India are mainly known for defence activities?",
        optionA: "Ooty",
        optionB: "Mhow",
        optionC: "Shimla",
        correctAnswer: "Mhow",
      }),
      shuffleOptions({
        question: "Which type of transport connects farms to factories and then to markets?",
        optionA: "Waterways",
        optionB: "Railways",
        optionC: "Roadways",
        correctAnswer: "Roadways",
      }),
      shuffleOptions({
        question: "Which network connects Delhi, Mumbai, Chennai, and Kolkata?",
        optionA: "National Corridor",
        optionB: "Silver Road",
        optionC: "Golden Quadrilateral",
        correctAnswer: "Golden Quadrilateral",
      }),
      shuffleOptions({
        question: "Which waterway connects the Great Lakes to the Atlantic Ocean?",
        optionA: "Mississippi Route",
        optionB: "St. Lawrence Seaway",
        optionC: "Nile Route",
        correctAnswer: "St. Lawrence Seaway",
      }),
      shuffleOptions({
        question: "Which towns have activities related to art, learning and culture?",
        optionA: "Cultural towns",
        optionB: "Mining towns",
        optionC: "Market towns",
        correctAnswer: "Cultural towns",
      }),
      shuffleOptions({
        question: "Which means of transport can reach remote forests and deserts easily?",
        optionA: "Airways",
        optionB: "Waterways",
        optionC: "Railways",
        correctAnswer: "Airways",
      }),
      shuffleOptions({
        question: "Which mode of transport is mainly used for carrying heavy and bulky goods?",
        optionA: "Airways",
        optionB: "Waterways",
        optionC: "Roadways",
        correctAnswer: "Waterways",
      }),
      shuffleOptions({
        question: "Which type of communication reaches a large number of people at the same time?",
        optionA: "Private",
        optionB: "Mass communication",
        optionC: "Personal",
        correctAnswer: "Mass communication",
      }),
      shuffleOptions({
        question: "Which engine type used in modern trains is more eco-friendly?",
        optionA: "Steam engine",
        optionB: "Electric engine",
        optionC: "Petrol engine",
        correctAnswer: "Electric engine",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Linear settlements generally develop along a ________.",
        optionA: "river or road",
        optionB: "hilltop",
        optionC: "desert path",
        correctAnswer: "river or road",
      }),
      shuffleOptions({
        question: "Urban settlements have a very ________ population density.",
        optionA: "low",
        optionB: "moderate",
        optionC: "high",
        correctAnswer: "high",
      }),
      shuffleOptions({
        question: "Mining towns grow in regions rich in ________.",
        optionA: "minerals",
        optionB: "forests",
        optionC: "rivers",
        correctAnswer: "minerals",
      }),
      shuffleOptions({
        question: "________ roads are made of stones and coal tar.",
        optionA: "Kutcha",
        optionB: "Pucca",
        optionC: "Mud",
        correctAnswer: "Pucca",
      }),
      shuffleOptions({
        question: "Inland waterways are mainly used to transport ________ goods.",
        optionA: "costly",
        optionB: "light",
        optionC: "heavy and bulky",
        correctAnswer: "heavy and bulky",
      }),
      shuffleOptions({
        question: "Aircrafts fly through a fixed ________ allowed by nations.",
        optionA: "tunnel",
        optionB: "corridor",
        optionC: "channel",
        correctAnswer: "corridor",
      }),
      shuffleOptions({
        question: "The ________ Seaway is one of the busiest inland waterways in the world.",
        optionA: "Mekong",
        optionB: "Rhine",
        optionC: "St. Lawrence",
        correctAnswer: "St. Lawrence",
      }),
      shuffleOptions({
        question: "________ flights operate within the boundaries of a single country.",
        optionA: "International",
        optionB: "Domestic",
        optionC: "Cargo",
        correctAnswer: "Domestic",
      }),
      shuffleOptions({
        question: "Computers and internet have made communication very ________.",
        optionA: "slow",
        optionB: "limited",
        optionC: "easy and fast",
        correctAnswer: "easy and fast",
      }),
      shuffleOptions({
        question: "Water transport includes inland waterways and ________.",
        optionA: "air routes",
        optionB: "sea routes",
        optionC: "hill routes",
        correctAnswer: "sea routes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Scattered settlements are usually found in hills, deserts and forested areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Urban areas mostly engage in agricultural activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Resort towns develop because they attract a large number of tourists.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roadways cannot reach remote hilly areas easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Railways were first operated using steam engines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Waterways are the slowest but cheapest mode of transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air transport can be affected by storms and fog.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Satellite communication has made information transfer slower.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mass communication includes radio, television and newspapers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Internet allows booking railway and airline tickets from home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
