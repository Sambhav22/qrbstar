export const chapter = "Chapter - 9: History: When, Where and How";
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
        question: "Which historian first used the word “history” to mean an enquiry into the past?",
        optionA: "Megasthenes",
        optionB: "Herodotus",
        optionC: "Kalidas",
        correctAnswer: "Herodotus",
      }),
      shuffleOptions({
        question: "Which period of history begins after the 18th century?",
        optionA: "Ancient history",
        optionB: "Medieval history",
        optionC: "Modern history",
        correctAnswer: "Modern history",
      }),
      shuffleOptions({
        question: "Which geographical feature acted as a natural barrier for invaders from the north?",
        optionA: "Deccan Plateau",
        optionB: "Great Himalayas",
        optionC: "Thar Desert",
        correctAnswer: "Great Himalayas",
      }),
      shuffleOptions({
        question: "Which civilisation’s seals tell us about their trade with Mesopotamia?",
        optionA: "Vedic civilisation",
        optionB: "Gupta empire",
        optionC: "Harappan civilisation",
        correctAnswer: "Harappan civilisation",
      }),
      shuffleOptions({
        question: "Which material was commonly used for writing early manuscripts?",
        optionA: "Silk",
        optionB: "Palm leaves",
        optionC: "Marble",
        correctAnswer: "Palm leaves",
      }),
      shuffleOptions({
        question: "Which river is the origin of the name “India”?",
        optionA: "Ganga",
        optionB: "Narmada",
        optionC: "Indus (Sindhu)",
        correctAnswer: "Indus (Sindhu)",
      }),
      shuffleOptions({
        question: "What do coins of ancient rulers often depict?",
        optionA: "Portraits and symbols of rulers",
        optionB: "Weather",
        optionC: "Mountains",
        correctAnswer: "Portraits and symbols of rulers",
      }),
      shuffleOptions({
        question: "What do artefacts such as sculptures and pottery help us understand?",
        optionA: "Future predictions",
        optionB: "Cultural achievements of ancient people",
        optionC: "Space science",
        correctAnswer: "Cultural achievements of ancient people",
      }),
      shuffleOptions({
        question: "Which Chinese traveller visited India in the 5th century AD?",
        optionA: "Hiuen Tsang",
        optionB: "Fa-Hien",
        optionC: "Marco Polo",
        correctAnswer: "Fa-Hien",
      }),
      shuffleOptions({
        question: "Which type of source includes buildings like forts, stupas and caves?",
        optionA: "Literary sources",
        optionB: "Archaeological sources",
        optionC: "Economic sources",
        correctAnswer: "Archaeological sources",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The earliest form of human history without written records is called ________.",
        optionA: "history",
        optionB: "prehistory",
        optionC: "modern study",
        correctAnswer: "prehistory",
      }),
      shuffleOptions({
        question: "Ancient people wrote on palm leaves and ________.",
        optionA: "plastic sheets",
        optionB: "birch bark",
        optionC: "aluminium plates",
        correctAnswer: "birch bark",
      }),
      shuffleOptions({
        question: "The study of coins is called ________.",
        optionA: "epigraphy",
        optionB: "geography",
        optionC: "numismatics",
        correctAnswer: "numismatics",
      }),
      shuffleOptions({
        question: "The Tripitakas and Jatakas belong to ________ literature.",
        optionA: "Jain",
        optionB: "Buddhist",
        optionC: "Vedic",
        correctAnswer: "Buddhist",
      }),
      shuffleOptions({
        question: "________ sources include travel accounts, poems and dramas.",
        optionA: "Religious",
        optionB: "Secular",
        optionC: "Geological",
        correctAnswer: "Secular",
      }),
      shuffleOptions({
        question: "The Indus Valley people made many ________ from stone and clay.",
        optionA: "seals",
        optionB: "radios",
        optionC: "bullets",
        correctAnswer: "seals",
      }),
      shuffleOptions({
        question: "The most fertile plains that supported ancient Indian empires were the ________.",
        optionA: "Coastal plains",
        optionB: "Indo-Gangetic plains",
        optionC: "Hilly regions",
        correctAnswer: "Indo-Gangetic plains",
      }),
      shuffleOptions({
        question: "Rivers helped ancient people in transport and ________.",
        optionA: "sports",
        optionB: "trade",
        optionC: "photography",
        correctAnswer: "trade",
      }),
      shuffleOptions({
        question: "The earliest coins of India belonged to the ________ century BC.",
        optionA: "12th",
        optionB: "7th–6th",
        optionC: "2nd",
        correctAnswer: "7th–6th",
      }),
      shuffleOptions({
        question: "The writing engraved on stone and metal is called ________.",
        optionA: "manuscripts",
        optionB: "inscriptions",
        optionC: "letters",
        correctAnswer: "inscriptions",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Himalayas helped protect India from northern invaders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ancient manuscripts were written only on paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Excavations give useful information about prehistoric humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Coins found in excavations never show the names of rulers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sangam literature is one of the early sources of South Indian history.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seals of the Indus Valley tell us about their trade links.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Literary sources include inscriptions and coins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Geography and history are closely related to each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Red Fort is an example of a historical monument.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Artefacts include jewellery, pottery and sculptures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
