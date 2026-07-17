export const chapter = "Chapter - 16: Chennai: The City of Temples";
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
        question: "Which city is known as the “Gateway to the South”?",
        optionA: "Bengaluru",
        optionB: "Chennai",
        optionC: "Jaipur",
        correctAnswer: "Chennai",
      }),
      shuffleOptions({
        question: "Which water body lies along the coast of Chennai?",
        optionA: "Arabian Sea",
        optionB: "Bay of Bengal",
        optionC: "Indian Ocean",
        correctAnswer: "Bay of Bengal",
      }),
      shuffleOptions({
        question: "Which dance form is especially famous in Chennai?",
        optionA: "Kathak",
        optionB: "Bharatnatyam",
        optionC: "Manipuri",
        correctAnswer: "Bharatnatyam",
      }),
      shuffleOptions({
        question: "Which music style is widely enjoyed in Chennai?",
        optionA: "Hindustani",
        optionB: "Carnatic Music",
        optionC: "Folk Music",
        correctAnswer: "Carnatic Music",
      }),
      shuffleOptions({
        question: "Which beach in Chennai is the second longest in the world?",
        optionA: "Juhu Beach",
        optionB: "Marina Beach",
        optionC: "Kovalam Beach",
        correctAnswer: "Marina Beach",
      }),
      shuffleOptions({
        question: "Which beach in Chennai has a toy train?",
        optionA: "VGP Golden Beach",
        optionB: "Marina Beach",
        optionC: "Girgaum Beach",
        correctAnswer: "VGP Golden Beach",
      }),
      shuffleOptions({
        question: "Which temple in Chennai is famous for its stone carvings?",
        optionA: "Sun Temple",
        optionB: "Kapaleeswarar Temple",
        optionC: "Golden Temple",
        correctAnswer: "Kapaleeswarar Temple",
      }),
      shuffleOptions({
        question: "Which festival is the most important harvest festival of Chennai?",
        optionA: "Baisakhi",
        optionB: "Pongal",
        optionC: "Onam",
        correctAnswer: "Pongal",
      }),
      shuffleOptions({
        question: "Which industry in Chennai produces tractors and bicycles?",
        optionA: "Jewellery Industry",
        optionB: "Automobile Industry",
        optionC: "Paper Industry",
        correctAnswer: "Automobile Industry",
      }),
      shuffleOptions({
        question: "Which film industry is based in Chennai?",
        optionA: "Bollywood",
        optionB: "Tollywood",
        optionC: "Kollywood",
        correctAnswer: "Kollywood",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chennai was earlier called ______.",
        optionA: "Calcutta",
        optionB: "Madras",
        optionC: "Delhi",
        correctAnswer: "Madras",
      }),
      shuffleOptions({
        question: "The people of Chennai mainly speak ______.",
        optionA: "Punjabi",
        optionB: "Tamil",
        optionC: "Marathi",
        correctAnswer: "Tamil",
      }),
      shuffleOptions({
        question: "Chennai receives rainfall mostly in ______ and November.",
        optionA: "September",
        optionB: "October",
        optionC: "August",
        correctAnswer: "October",
      }),
      shuffleOptions({
        question: "People in Chennai prefer to wear ______ cotton clothes.",
        optionA: "dark",
        optionB: "heavy",
        optionC: "light",
        correctAnswer: "light",
      }),
      shuffleOptions({
        question: "The entrance tower of a temple is called a ______.",
        optionA: "mandap",
        optionB: "pillar",
        optionC: "gopuram",
        correctAnswer: "gopuram",
      }),
      shuffleOptions({
        question: "The classical dance of Chennai is ______.",
        optionA: "Kathak",
        optionB: "Bharatnatyam",
        optionC: "Bhangra",
        correctAnswer: "Bharatnatyam",
      }),
      shuffleOptions({
        question: "The people of Chennai usually eat idli, dosa, rasam and ______.",
        optionA: "upma",
        optionB: "roti",
        optionC: "chole",
        correctAnswer: "upma",
      }),
      shuffleOptions({
        question: "Chennai is an important centre for ______ textiles.",
        optionA: "woollen",
        optionB: "cotton",
        optionC: "silk",
        correctAnswer: "cotton",
      }),
      shuffleOptions({
        question: "Chennai is connected to other countries through its ______.",
        optionA: "ropeway",
        optionB: "airport",
        optionC: "tunnel",
        correctAnswer: "airport",
      }),
      shuffleOptions({
        question: "VGP Golden Beach is very popular among ______.",
        optionA: "children",
        optionB: "teachers",
        optionC: "drivers",
        correctAnswer: "children",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chennai has a hot and humid climate throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Winters in Chennai are comfortable and pleasant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chennai Municipal Corporation is one of the oldest in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "VGP Golden Beach is the second longest beach in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People in Chennai are fond of music and dance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chennai is known for cotton textile industries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pongal is not celebrated in Chennai.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kollywood refers to the Tamil film industry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chennai is located along the Arabian Sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chennai is well connected by roadways, railways and airways.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
