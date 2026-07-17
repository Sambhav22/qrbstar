export const chapter = "Chapter - 15: Kolkata: The City of Joy";
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
        question: "Which river flows beside Kolkata?",
        optionA: "Ganga",
        optionB: "Hooghly",
        optionC: "Narmada",
        correctAnswer: "Hooghly",
      }),
      shuffleOptions({
        question: "Who wrote our National Anthem, Jana-Gana-Mana?",
        optionA: "Bankim Chandra Chatterjee",
        optionB: "Rabindranath Tagore",
        optionC: "Subhash Chandra Bose",
        correctAnswer: "Rabindranath Tagore",
      }),
      shuffleOptions({
        question: "What is Kolkata often called because of its lively and artistic culture?",
        optionA: "City of Lakes",
        optionB: "City of Joy",
        optionC: "City of Festivals",
        correctAnswer: "City of Joy",
      }),
      shuffleOptions({
        question: "Which port of Kolkata handles ships for trade?",
        optionA: "Diamond Harbour",
        optionB: "Chennai Port",
        optionC: "Kochi Port",
        correctAnswer: "Diamond Harbour",
      }),
      shuffleOptions({
        question: "Which famous music form is loved by Kolkatans?",
        optionA: "Carnatic music",
        optionB: "Rabindra Sangeet",
        optionC: "Qawwali",
        correctAnswer: "Rabindra Sangeet",
      }),
      shuffleOptions({
        question: "Which festival is celebrated for ten days in Kolkata?",
        optionA: "Onam",
        optionB: "Durga Puja",
        optionC: "Pongal",
        correctAnswer: "Durga Puja",
      }),
      shuffleOptions({
        question: "Which building in Kolkata is made of white marble?",
        optionA: "Fort William",
        optionB: "Victoria Memorial",
        optionC: "Red Fort",
        correctAnswer: "Victoria Memorial",
      }),
      shuffleOptions({
        question: "What type of climate does Kolkata mainly have?",
        optionA: "Hot and dry",
        optionB: "Warm and humid",
        optionC: "Cold and snowy",
        correctAnswer: "Warm and humid",
      }),
      shuffleOptions({
        question: "What is Kolkata’s underground railway system called?",
        optionA: "Metro Rail",
        optionB: "Bullet Train",
        optionC: "Mono Rail",
        correctAnswer: "Metro Rail",
      }),
      shuffleOptions({
        question: "Which sweet is famous in Kolkata?",
        optionA: "Rasogulla",
        optionB: "Jalebi",
        optionC: "Mysore Pak",
        correctAnswer: "Rasogulla",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kolkata receives heavy rainfall during the ______ season.",
        optionA: "summer",
        optionB: "winter",
        optionC: "monsoon",
        correctAnswer: "monsoon",
      }),
      shuffleOptions({
        question: "People of Kolkata enjoy eating ______ and fish.",
        optionA: "rice",
        optionB: "roti",
        optionC: "dal",
        correctAnswer: "rice",
      }),
      shuffleOptions({
        question: "The new name of the Howrah Bridge is ______.",
        optionA: "Vivekananda Setu",
        optionB: "Rabindra Setu",
        optionC: "Gandhi Setu",
        correctAnswer: "Rabindra Setu",
      }),
      shuffleOptions({
        question: "Kolkata was earlier known as ______.",
        optionA: "Madras",
        optionB: "Calcutta",
        optionC: "Surat",
        correctAnswer: "Calcutta",
      }),
      shuffleOptions({
        question: "Bengali, Hindi and ______ are spoken in Kolkata.",
        optionA: "English",
        optionB: "Telugu",
        optionC: "Punjabi",
        correctAnswer: "English",
      }),
      shuffleOptions({
        question: "The main industry of Kolkata is ______ processing.",
        optionA: "jute",
        optionB: "cotton",
        optionC: "wool",
        correctAnswer: "jute",
      }),
      shuffleOptions({
        question: "Kolkata is located in ______ India.",
        optionA: "North",
        optionB: "East",
        optionC: "West",
        correctAnswer: "East",
      }),
      shuffleOptions({
        question: "Kolkatans are fond of ______ like sandesh and kheer kadam.",
        optionA: "snacks",
        optionB: "sweets",
        optionC: "vegetables",
        correctAnswer: "sweets",
      }),
      shuffleOptions({
        question: "The National Library and Indian Museum are major ______ places.",
        optionA: "tourist attraction",
        optionB: "business",
        optionC: "sports",
        correctAnswer: "tourist attraction",
      }),
      shuffleOptions({
        question: "Kolkata has the country’s first ______ railway system.",
        optionA: "underwater",
        optionB: "underground metro",
        optionC: "double-decker",
        correctAnswer: "underground metro",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kolkata is a metropolitan city located in East India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kolkata becomes very cold throughout winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kolkatans enjoy dance, music and poetry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Howrah Bridge is supported by many pillars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rabindra Sangeet is a kind of music loved in Kolkata.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kolkata’s underground metro was the first in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kolkata’s main festival, Durga Puja, is celebrated for ten days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kolkata’s climate is warm and humid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Belur Math and Alipur Zoo are not the places of tourist interest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rasogulla and Sandesh are famous Bengali dishes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
