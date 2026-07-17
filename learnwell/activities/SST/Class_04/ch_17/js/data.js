export const chapter = "Chapter - 17: Transport";
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
        question: "Which type of road is usually found in villages?",
        optionA: "Pucca road",
        optionB: "Kuchcha road",
        optionC: "State highway",
        correctAnswer: "Kuchcha road",
      }),
      shuffleOptions({
        question: "Which trains are known as the fastest in India?",
        optionA: "Mail trains",
        optionB: "Duronto, Shatabdi and Rajdhani Express",
        optionC: "Local trains",
        correctAnswer: "Duronto, Shatabdi and Rajdhani Express",
      }),
      shuffleOptions({
        question: "Which water body allows ships to travel because it is wide and deep?",
        optionA: "Pond",
        optionB: "Canal",
        optionC: "Navigable river",
        correctAnswer: "Navigable river",
      }),
      shuffleOptions({
        question: "Which is the largest seaport in India?",
        optionA: "Chennai",
        optionB: "Mumbai",
        optionC: "Kolkata",
        correctAnswer: "Mumbai",
      }),
      shuffleOptions({
        question: "Which transport is the most expensive?",
        optionA: "Road transport",
        optionB: "Air transport",
        optionC: "Water transport",
        correctAnswer: "Air transport",
      }),
      shuffleOptions({
        question: "Which airline is mentioned as a private airline in the chapter?",
        optionA: "Vistara",
        optionB: "Spice Jet",
        optionC: "Indigo",
        correctAnswer: "Spice Jet",
      }),
      shuffleOptions({
        question: "Which of these is part of the rapid transit system?",
        optionA: "Metro train",
        optionB: "Tractor",
        optionC: "Steamer",
        correctAnswer: "Metro train",
      }),
      shuffleOptions({
        question: "Which ship is used for carrying liquids?",
        optionA: "Cargo ship",
        optionB: "Tanker ship",
        optionC: "Passenger ship",
        correctAnswer: "Tanker ship",
      }),
      shuffleOptions({
        question: "Which river is listed as a navigable river of India?",
        optionA: "Luni",
        optionB: "Ganga",
        optionC: "Sabarmati",
        correctAnswer: "Ganga",
      }),
      shuffleOptions({
        question: "Which airport is located in Delhi?",
        optionA: "Meenambakkam Airport",
        optionB: "Indira Gandhi International Airport",
        optionC: "Thiruvananthapuram Airport",
        correctAnswer: "Indira Gandhi International Airport",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Pucca roads are made of ________.",
        optionA: "mud",
        optionB: "tar and concrete",
        optionC: "grass",
        correctAnswer: "tar and concrete",
      }),
      shuffleOptions({
        question: "Water transport is the ________ means of transport.",
        optionA: "cheapest",
        optionB: "fastest",
        optionC: "costliest",
        correctAnswer: "cheapest",
      }),
      shuffleOptions({
        question: "The Grand Trunk Road was built by ________.",
        optionA: "Ashoka",
        optionB: "Akbar",
        optionC: "Sher Shah Suri",
        correctAnswer: "Sher Shah Suri",
      }),
      shuffleOptions({
        question: "Metro trains in India run in cities like ________.",
        optionA: "Delhi and Kolkata",
        optionB: "Surat and Ajmer",
        optionC: "Lucknow and Patna",
        correctAnswer: "Delhi and Kolkata",
      }),
      shuffleOptions({
        question: "A ship that carries goods is called a ________ ship.",
        optionA: "cargo",
        optionB: "passenger",
        optionC: "fishing",
        correctAnswer: "cargo",
      }),
      shuffleOptions({
        question: "Air transport is especially useful in ________ regions.",
        optionA: "hilly or desert areas",
        optionB: "plains",
        optionC: "coastal areas",
        correctAnswer: "hilly or desert areas",
      }),
      shuffleOptions({
        question: "Indian railways started in the year ________.",
        optionA: "1653",
        optionB: "1853",
        optionC: "1953",
        correctAnswer: "1853",
      }),
      shuffleOptions({
        question: "A small water transport vehicle made of wood is called a ________.",
        optionA: "canoe",
        optionB: "tanker",
        optionC: "metro",
        correctAnswer: "canoe",
      }),
      shuffleOptions({
        question: "State highways connect ________ with other cities and towns.",
        optionA: "national borders",
        optionB: "state capitals",
        optionC: "villages",
        correctAnswer: "state capitals",
      }),
      shuffleOptions({
        question: "Flood relief material is often dropped using ________.",
        optionA: "bicycles",
        optionB: "helicopters",
        optionC: "taxis",
        correctAnswer: "helicopters",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Pucca roads are made of tar, cement and concrete.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water transport is the slowest means of transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Metro trains are part of the rapid transit system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mumbai is the largest seaport in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air transport is the cheapest means of transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Passenger trains are used to carry goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Border roads are built near the country’s boundaries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Helicopters are not useful during floods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Duronto and Rajdhani Express are mentioned as fast trains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ganga is a navigable river of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
