export const chapter = "Chapter - 15: Seasons";
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
        question: "What do people mostly like to eat to feel cool in summer?",
        optionA: "Hot soup",
        optionB: "Ice cream",
        optionC: "Tea",
        correctAnswer: "Ice cream",
      }),
      shuffleOptions({
        question: "Which season brings clouds and rainfall to many places?",
        optionA: "Rainy season",
        optionB: "Autumn",
        optionC: "Spring",
        correctAnswer: "Rainy season",
      }),
      shuffleOptions({
        question: "In which season do people usually wear woollen clothes?",
        optionA: "Summer",
        optionB: "Winter",
        optionC: "Spring",
        correctAnswer: "Winter",
      }),
      shuffleOptions({
        question: "Which season has weather that is neither too hot nor too cold?",
        optionA: "Autumn season",
        optionB: "Summer season",
        optionC: "Rainy season",
        correctAnswer: "Autumn season",
      }),
      shuffleOptions({
        question: "During which season do new flowers bloom and leaves grow again?",
        optionA: "Autumn",
        optionB: "Spring season",
        optionC: "Winter",
        correctAnswer: "Spring season",
      }),
      shuffleOptions({
        question: "Which season begins after the summer months?",
        optionA: "Rainy season",
        optionB: "Winter",
        optionC: "Spring",
        correctAnswer: "Rainy season",
      }),
      shuffleOptions({
        question: "In which season do people use fans and coolers to stay comfortable?",
        optionA: "Summer season",
        optionB: "Spring season",
        optionC: "Rainy season",
        correctAnswer: "Summer season",
      }),
      shuffleOptions({
        question: "What do people use to protect themselves from getting wet during rainfall?",
        optionA: "Woollen caps",
        optionB: "Umbrellas and raincoats",
        optionC: "Sunglasses",
        correctAnswer: "Umbrellas and raincoats",
      }),
      shuffleOptions({
        question: "In which season do trees shed most of their leaves?",
        optionA: "Autumn season",
        optionB: "Rainy season",
        optionC: "Spring season",
        correctAnswer: "Autumn season",
      }),
      shuffleOptions({
        question: "Which winds blow strongly during the summer months?",
        optionA: "Cold winds",
        optionB: "Moist winds",
        optionC: "Hot loo winds",
        correctAnswer: "Hot loo winds",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People use ______ to avoid getting wet in the rainy season.",
        optionA: "umbrellas and raincoats",
        optionB: "caps",
        optionC: "woollen gloves",
        correctAnswer: "umbrellas and raincoats",
      }),
      shuffleOptions({
        question: "Spring season is known for ______ flowers.",
        optionA: "hiding",
        optionB: "blooming",
        optionC: "drying",
        correctAnswer: "blooming",
      }),
      shuffleOptions({
        question: "The weather becomes very ______ during summer.",
        optionA: "cold",
        optionB: "hot",
        optionC: "windy",
        correctAnswer: "hot",
      }),
      shuffleOptions({
        question: "Autumn season falls in the months of ______.",
        optionA: "January–March",
        optionB: "October–November",
        optionC: "April–June",
        correctAnswer: "October–November",
      }),
      shuffleOptions({
        question: "We wear ______ clothes in winter to stay warm.",
        optionA: "cotton",
        optionB: "woollen",
        optionC: "silk",
        correctAnswer: "woollen",
      }),
      shuffleOptions({
        question: "The rainy season is also called the ______ season.",
        optionA: "harvest",
        optionB: "monsoon",
        optionC: "foggy",
        correctAnswer: "monsoon",
      }),
      shuffleOptions({
        question: "Summer lasts from ______ to June.",
        optionA: "April",
        optionB: "January",
        optionC: "September",
        correctAnswer: "April",
      }),
      shuffleOptions({
        question: "New leaves grow on trees in the ______ season.",
        optionA: "autumn",
        optionB: "winter",
        optionC: "spring",
        correctAnswer: "spring",
      }),
      shuffleOptions({
        question: "The strong hot winds of summer are called ______.",
        optionA: "breeze",
        optionB: "shower",
        optionC: "loo",
        correctAnswer: "loo",
      }),
      shuffleOptions({
        question: "Rainy season mostly occurs in ______.",
        optionA: "July, August, September",
        optionB: "April, May, June",
        optionC: "October, November",
        correctAnswer: "July, August, September",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In winter, the nights are longer than the days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People often stay indoors at noon during summer because it is very hot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainy season begins after the winter months.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Spring is the most colourful season of the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hot and dry winds in summer are called loo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The weather in autumn is very cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People use raincoats and gumboots during monsoon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Winter season comes in December, January and February.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The amount of rain is the same everywhere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Spring comes after winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
