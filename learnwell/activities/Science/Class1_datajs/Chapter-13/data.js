export const chapter = "Chapter - 13: Weather and Seasons";
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
        question: "What blows strongly on a windy day?",
        optionA: "Rain",
        optionB: "Wind",
        optionC: "Clouds",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "What do children like to play with during the rain?",
        optionA: "Kites",
        optionB: "Paper boats",
        optionC: "Dolls",
        correctAnswer: "Paper boats",
      }),
      shuffleOptions({
        question: "What do we like to eat on hot sunny days?",
        optionA: "Ice cream",
        optionB: "Soup",
        optionC: "Tea",
        correctAnswer: "Ice cream",
      }),
      shuffleOptions({
        question: "Where do we mostly stay during winter?",
        optionA: "Inside the house",
        optionB: "Outside in parks",
        optionC: "Playground",
        correctAnswer: "Inside the house",
      }),
      shuffleOptions({
        question: "How is the weather on cloudy days?",
        optionA: "Hot",
        optionB: "Pleasant",
        optionC: "Very cold",
        correctAnswer: "Pleasant",
      }),
      shuffleOptions({
        question: "What do we use in summer to stay cool?",
        optionA: "Heater",
        optionB: "Cooler",
        optionC: "Woollen cap",
        correctAnswer: "Cooler",
      }),
      shuffleOptions({
        question: "What do we sometimes see in the sky after rain?",
        optionA: "Rainbow",
        optionB: "Moon",
        optionC: "Star",
        correctAnswer: "Rainbow",
      }),
      shuffleOptions({
        question: "What blooms beautifully in spring?",
        optionA: "Fruits",
        optionB: "Flowers",
        optionC: "Leaves",
        correctAnswer: "Flowers",
      }),
      shuffleOptions({
        question: "What happens to most trees in autumn?",
        optionA: "They shed leaves",
        optionB: "They bloom",
        optionC: "They grow fruits",
        correctAnswer: "They shed leaves",
      }),
      shuffleOptions({
        question: "What do we like to drink on cold days?",
        optionA: "Hot tea",
        optionB: "Cold water",
        optionC: "Lemonade",
        correctAnswer: "Hot tea",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "On a sunny day, the sun shines ___.",
        optionA: "Brightly",
        optionB: "Dimly",
        optionC: "Slowly",
        correctAnswer: "Brightly",
      }),
      shuffleOptions({
        question: "In hot weather, we drink lots of ___.",
        optionA: "Water",
        optionB: "Tea",
        optionC: "Soup",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "On rainy days, we use an ___.",
        optionA: "Umbrella",
        optionB: "Sweater",
        optionC: "Cap",
        correctAnswer: "Umbrella",
      }),
      shuffleOptions({
        question: "In summer, we wear ___ clothes.",
        optionA: "Cotton",
        optionB: "Woollen",
        optionC: "Raincoat",
        correctAnswer: "Cotton",
      }),
      shuffleOptions({
        question: "We keep our rooms warm in winter using ___.",
        optionA: "Heater",
        optionB: "Fan",
        optionC: "Cooler",
        correctAnswer: "Heater",
      }),
      shuffleOptions({
        question: "In spring, new ___ grow on trees.",
        optionA: "Leaves",
        optionB: "Roots",
        optionC: "Branches",
        correctAnswer: "Leaves",
      }),
      shuffleOptions({
        question: "In autumn, the weather is neither hot nor ___.",
        optionA: "Cold",
        optionB: "Rainy",
        optionC: "Windy",
        correctAnswer: "Cold",
      }),
      shuffleOptions({
        question: "A rainbow has ___ colours.",
        optionA: "Seven",
        optionB: "Six",
        optionC: "Five",
        correctAnswer: "Seven",
      }),
      shuffleOptions({
        question: "On windy days, ___ can fly away.",
        optionA: "Umbrellas",
        optionB: "Heaters",
        optionC: "Blankets",
        correctAnswer: "Umbrellas",
      }),
      shuffleOptions({
        question: "On cold days, we like to sit near a ___.",
        optionA: "Fire",
        optionB: "Fan",
        optionC: "Cooler",
        correctAnswer: "Fire",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weather is the condition of air at a place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In summer, we use fans and coolers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In winter, we wear cotton clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "On rainy days, there are dark clouds in the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Children make paper boats during the rain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In spring, flowers bloom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Autumn is the season of falling leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The shortest day of the year is 21 December.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rainbow has seven colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "On cold days, we sit near fire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
