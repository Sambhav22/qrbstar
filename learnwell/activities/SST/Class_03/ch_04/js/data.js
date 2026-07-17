export const chapter = "Chapter - 4: Weather and Climate";
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
        question: "What makes the weather feel cold at night when the wind blows fast?",
        optionA: "The bright sun",
        optionB: "The fast-moving wind",
        optionC: "The moonlight",
        correctAnswer: "The fast-moving wind",
      }),
      shuffleOptions({
        question: "What gathers in the sky before the rain starts?",
        optionA: "Snow clouds",
        optionB: "Dark clouds",
        optionC: "Colourful clouds",
        correctAnswer: "Dark clouds",
      }),
      shuffleOptions({
        question: "Which season has pleasant weather with flowers blooming and new leaves growing?",
        optionA: "Winter",
        optionB: "Spring",
        optionC: "Rainy",
        correctAnswer: "Spring",
      }),
      shuffleOptions({
        question: "In which season do people like drinking cold drinks and eating ice creams?",
        optionA: "Summer",
        optionB: "Winter",
        optionC: "Autumn",
        correctAnswer: "Summer",
      }),
      shuffleOptions({
        question: "Which season brings lightning and thunder?",
        optionA: "Summer",
        optionB: "Rainy",
        optionC: "Spring",
        correctAnswer: "Rainy",
      }),
      shuffleOptions({
        question: "During which season do leaves turn yellow and fall from the trees?",
        optionA: "Autumn",
        optionB: "Spring",
        optionC: "Winter",
        correctAnswer: "Autumn",
      }),
      shuffleOptions({
        question: "Which season makes farmers happy because it helps crops grow well?",
        optionA: "Rainy",
        optionB: "Autumn",
        optionC: "Summer",
        correctAnswer: "Rainy",
      }),
      shuffleOptions({
        question: "In which season do people prefer to sit near a fire or heater?",
        optionA: "Summer",
        optionB: "Winter",
        optionC: "Rainy",
        correctAnswer: "Winter",
      }),
      shuffleOptions({
        question: "Where is it very hot during the summer season?",
        optionA: "Delhi and Rajasthan",
        optionB: "Shimla and Ooty",
        optionC: "Mumbai and Goa",
        correctAnswer: "Delhi and Rajasthan",
      }),
      shuffleOptions({
        question: "What kind of winds blow from the sea during the rainy season?",
        optionA: "Hot winds",
        optionB: "Cold winds",
        optionC: "Dry winds",
        correctAnswer: "Cold winds",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weather depends on wind, heat and ______.",
        optionA: "moisture",
        optionB: "dust",
        optionC: "soil",
        correctAnswer: "moisture",
      }),
      shuffleOptions({
        question: "In summer, the sun shines very ______.",
        optionA: "dim",
        optionB: "hot",
        optionC: "low",
        correctAnswer: "hot",
      }),
      shuffleOptions({
        question: "In spring, flowers ______ on trees.",
        optionA: "melt",
        optionB: "fall",
        optionC: "bloom",
        correctAnswer: "bloom",
      }),
      shuffleOptions({
        question: "Rain makes the land ready for ______.",
        optionA: "cultivation",
        optionB: "travelling",
        optionC: "dancing",
        correctAnswer: "cultivation",
      }),
      shuffleOptions({
        question: "In winter, people like to drink ______ drinks.",
        optionA: "cold",
        optionB: "hot",
        optionC: "sweet",
        correctAnswer: "hot",
      }),
      shuffleOptions({
        question: "In autumn, leaves turn ______ before falling.",
        optionA: "blue",
        optionB: "yellow",
        optionC: "purple",
        correctAnswer: "yellow",
      }),
      shuffleOptions({
        question: "During rainy season, dark ______ gather in the sky.",
        optionA: "birds",
        optionB: "clouds",
        optionC: "stars",
        correctAnswer: "clouds",
      }),
      shuffleOptions({
        question: "People prefer staying ______ during the summer afternoons.",
        optionA: "outside",
        optionB: "inside",
        optionC: "on rooftops",
        correctAnswer: "inside",
      }),
      shuffleOptions({
        question: "Winter has ______ daylight hours.",
        optionA: "longer",
        optionB: "shorter",
        optionC: "equal",
        correctAnswer: "shorter",
      }),
      shuffleOptions({
        question: "In summer, people enjoy eating ______.",
        optionA: "ice creams",
        optionB: "peanuts",
        optionC: "soup",
        correctAnswer: "ice creams",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weather can change every day or after a few days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spring season has greenery all around.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In summer, people love to wear woollen clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rainy season brings lightning and thunder.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In winter, daylight hours are longer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In autumn, leaves change colour and fall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rain helps farmers to grow crops well.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Summer season is very cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People enjoy cold drinks in the summer season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "During winter, people like sitting near a heater or fire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
