export const chapter = "Chapter - 12: Weather and Seasons";
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
        question: "Who tells us about the weather in news?",
        optionA: "Weather forecasters",
        optionB: "Doctors",
        optionC: "Farmers",
        correctAnswer: "Weather forecasters",
      }),
      shuffleOptions({
        question: "What shines brightly in summer?",
        optionA: "Stars",
        optionB: "Moon",
        optionC: "Sun",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "What do people use in summer to stay cool?",
        optionA: "Quilts",
        optionB: "Fans and coolers",
        optionC: "Woollens",
        correctAnswer: "Fans and coolers",
      }),
      shuffleOptions({
        question: "What falls from trees in autumn?",
        optionA: "Fruits",
        optionB: "Leaves",
        optionC: "Flowers",
        correctAnswer: "Leaves",
      }),
      shuffleOptions({
        question: "What footwear do we use in monsoon?",
        optionA: "Sandals",
        optionB: "Gumboots",
        optionC: "Sports shoes",
        correctAnswer: "Gumboots",
      }),
      shuffleOptions({
        question: "Which season is also known as Basant?",
        optionA: "Autumn",
        optionB: "Spring",
        optionC: "Summer",
        correctAnswer: "Spring",
      }),
      shuffleOptions({
        question: "In which season do some hilly areas have snowfall?",
        optionA: "Monsoon",
        optionB: "Winter",
        optionC: "Summer",
        correctAnswer: "Winter",
      }),
      shuffleOptions({
        question: "Which season is called the “cold season”?",
        optionA: "Winter",
        optionB: "Summer",
        optionC: "Spring",
        correctAnswer: "Winter",
      }),
      shuffleOptions({
        question: "Which season is pleasant and full of butterflies?",
        optionA: "Autumn",
        optionB: "Spring",
        optionC: "Monsoon",
        correctAnswer: "Spring",
      }),
      shuffleOptions({
        question: "A rainbow is sometimes seen in the sky after what?",
        optionA: "Snowfall",
        optionB: "Rain",
        optionC: "Hot winds",
        correctAnswer: "Rain",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weather is the condition of ______.",
        optionA: "Food",
        optionB: "Air",
        optionC: "Water",
        correctAnswer: "Air",
      }),
      shuffleOptions({
        question: "In summer, hot winds called ______ blow.",
        optionA: "Loo",
        optionB: "Breeze",
        optionC: "Storm",
        correctAnswer: "Loo",
      }),
      shuffleOptions({
        question: "We use ______ to protect ourselves from rain.",
        optionA: "Blanket",
        optionB: "Umbrella",
        optionC: "Heater",
        correctAnswer: "Umbrella",
      }),
      shuffleOptions({
        question: "In winter, people use ______ to keep warm.",
        optionA: "Fans",
        optionB: "Quilts",
        optionC: "Umbrella",
        correctAnswer: "Quilts",
      }),
      shuffleOptions({
        question: "In autumn, most trees shed their ______.",
        optionA: "Roots",
        optionB: "Leaves",
        optionC: "Branches",
        correctAnswer: "Leaves",
      }),
      shuffleOptions({
        question: "Spring is the season of ______.",
        optionA: "Butterflies and flowers",
        optionB: "Snow",
        optionC: "Hot winds",
        correctAnswer: "Butterflies and flowers",
      }),
      shuffleOptions({
        question: "On a rainy day, everything becomes ______.",
        optionA: "Wet and slippery",
        optionB: "Hot and dry",
        optionC: "Cool and snowy",
        correctAnswer: "Wet and slippery",
      }),
      shuffleOptions({
        question: "People go to ______ during summer.",
        optionA: "Hill stations",
        optionB: "Beaches",
        optionC: "Deserts",
        correctAnswer: "Hill stations",
      }),
      shuffleOptions({
        question: "Sometimes we see a ______ in the sky after rain.",
        optionA: "Rainbow",
        optionB: "Cloud",
        optionC: "Star",
        correctAnswer: "Rainbow",
      }),
      shuffleOptions({
        question: "There are ______ seasons in India.",
        optionA: "Three",
        optionB: "Four",
        optionC: "Five",
        correctAnswer: "Five",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weather is always the same.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We drink hot soup in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainbow can be seen during summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People use raincoats during monsoon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In spring, weather is neither too hot nor too cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Most trees grow new leaves in autumn.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fans are used in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hot winds blow in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Winter is the cold season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spring is also known as Basant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
