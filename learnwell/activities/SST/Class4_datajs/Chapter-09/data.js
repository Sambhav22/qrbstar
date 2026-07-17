export const chapter = "Chapter - 9: The Climate of Our Country";
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
        question: "Which part of India receives the first monsoon rainfall?",
        optionA: "Konkan Coast",
        optionB: "Malabar Coast",
        optionC: "Coromandel Coast",
        correctAnswer: "Malabar Coast",
      }),
      shuffleOptions({
        question: "Which natural feature prevents cold winds from entering India from the north?",
        optionA: "Vindhya Range",
        optionB: "Aravalli Hills",
        optionC: "Himalayas",
        correctAnswer: "Himalayas",
      }),
      shuffleOptions({
        question: "Which place receives the heaviest rainfall in the world?",
        optionA: "Shillong",
        optionB: "Mawsynram",
        optionC: "Darjeeling",
        correctAnswer: "Mawsynram",
      }),
      shuffleOptions({
        question: "Which region of India experiences less variation in temperature due to sea breeze?",
        optionA: "Delhi",
        optionB: "Chennai",
        optionC: "Jaipur",
        correctAnswer: "Chennai",
      }),
      shuffleOptions({
        question: "During which months is the heat almost unbearable in many parts of India?",
        optionA: "December–January",
        optionB: "May–June",
        optionC: "September–October",
        correctAnswer: "May–June",
      }),
      shuffleOptions({
        question: "Which winds bring rainfall to India during the rainy season?",
        optionA: "Western Disturbances",
        optionB: "Monsoon winds loaded with moisture",
        optionC: "Land winds",
        correctAnswer: "Monsoon winds loaded with moisture",
      }),
      shuffleOptions({
        question: "Which region receives very little rainfall?",
        optionA: "Mawsynram",
        optionB: "Rann of Kachchh",
        optionC: "Kerala",
        correctAnswer: "Rann of Kachchh",
      }),
      shuffleOptions({
        question: "Which season in India begins around mid-March?",
        optionA: "Winter",
        optionB: "Summer season",
        optionC: "Spring",
        correctAnswer: "Summer season",
      }),
      shuffleOptions({
        question: "Which area of India experiences extreme climate?",
        optionA: "Northern Plains",
        optionB: "Peninsular India",
        optionC: "Coastal regions",
        correctAnswer: "Northern Plains",
      }),
      shuffleOptions({
        question: "Which season brings new leaves and fresh flowers?",
        optionA: "Winter",
        optionB: "Spring season",
        optionC: "Rainy season",
        correctAnswer: "Spring season",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Tropic of Cancer divides India into the tropical and ________ zones.",
        optionA: "frigid",
        optionB: "sub-tropical",
        optionC: "temperate",
        correctAnswer: "sub-tropical",
      }),
      shuffleOptions({
        question: "The rainy season in India begins in the month of ________.",
        optionA: "June",
        optionB: "October",
        optionC: "February",
        correctAnswer: "June",
      }),
      shuffleOptions({
        question: "Monsoon winds carry plenty of _______ and bring rain.",
        optionA: "dust",
        optionB: "smoke",
        optionC: "moisture",
        correctAnswer: "moisture",
      }),
      shuffleOptions({
        question: "The Malabar Coast receives the _______ monsoon showers.",
        optionA: "first",
        optionB: "last",
        optionC: "least",
        correctAnswer: "first",
      }),
      shuffleOptions({
        question: "In winter, the days become _______ and nights become longer.",
        optionA: "shorter",
        optionB: "hotter",
        optionC: "windy",
        correctAnswer: "shorter",
      }),
      shuffleOptions({
        question: "Autumn comes after the _______ season.",
        optionA: "winter",
        optionB: "rainy",
        optionC: "summer",
        correctAnswer: "rainy",
      }),
      shuffleOptions({
        question: "South India remains less hot because it is surrounded by the _______.",
        optionA: "desert",
        optionB: "sea",
        optionC: "forests",
        correctAnswer: "sea",
      }),
      shuffleOptions({
        question: "The Northern Mountains experience very _______ weather in winter.",
        optionA: "cold",
        optionB: "hot",
        optionC: "humid",
        correctAnswer: "cold",
      }),
      shuffleOptions({
        question: "The spring season lasts only for a _______ period.",
        optionA: "long",
        optionB: "brief",
        optionC: "moderate",
        correctAnswer: "brief",
      }),
      shuffleOptions({
        question: "The Deccan Plateau receives _______ rainfall.",
        optionA: "little",
        optionB: "heavy",
        optionC: "no",
        correctAnswer: "little",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The climate of a place refers to weather conditions over a long period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Himalayas act as a barrier and affect the climate of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "South India experiences extreme winters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The rainy season in India ends in December.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Rann of Kachchh receives very little rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spring is the most pleasant season because it is neither too hot nor too cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Northern Plains experience high rainfall throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Summer begins in mid-August in most parts of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The autumn season makes the trees shed their leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Winter in India generally lasts from mid-November to mid-February.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
