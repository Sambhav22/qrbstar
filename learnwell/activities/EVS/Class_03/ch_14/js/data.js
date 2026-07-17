export const chapter = "Chapter - 14: All About Water";
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
        question: "What is the main source of water on Earth?",
        optionA: "Tube wells",
        optionB: "Rain",
        optionC: "Tanks",
        correctAnswer: "Rain",
      }),
      shuffleOptions({
        question: "Which of these animals can live for several days without water?",
        optionA: "Elephant",
        optionB: "Camel",
        optionC: "Cow",
        correctAnswer: "Camel",
      }),
      shuffleOptions({
        question: "What do plants need water for?",
        optionA: "To play",
        optionB: "To live and grow",
        optionC: "To sleep",
        correctAnswer: "To live and grow",
      }),
      shuffleOptions({
        question: "When does the groundwater level usually fall?",
        optionA: "Winter",
        optionB: "Summer",
        optionC: "Rainy season",
        correctAnswer: "Summer",
      }),
      shuffleOptions({
        question: "What does rainwater turn into after heating by the Sun?",
        optionA: "Ice",
        optionB: "Water vapour",
        optionC: "Dew",
        correctAnswer: "Water vapour",
      }),
      shuffleOptions({
        question: "In rainwater harvesting, rainwater is stored in ______.",
        optionA: "Underground pits or tanks",
        optionB: "Plastic bags",
        optionC: "Buckets",
        correctAnswer: "Underground pits or tanks",
      }),
      shuffleOptions({
        question: "What do elephants use water for?",
        optionA: "Drinking and bathing",
        optionB: "Flying",
        optionC: "Eating",
        correctAnswer: "Drinking and bathing",
      }),
      shuffleOptions({
        question: "Which of these should be closed when not in use?",
        optionA: "Tap",
        optionB: "Door",
        optionC: "Window",
        correctAnswer: "Tap",
      }),
      shuffleOptions({
        question: "Who announced that water is for everyone in the village story?",
        optionA: "Rani",
        optionB: "Raghu Kaka",
        optionC: "Muniya",
        correctAnswer: "Raghu Kaka",
      }),
      shuffleOptions({
        question: "Which government body provides wells and hand pumps for villagers?",
        optionA: "Local government",
        optionB: "Private company",
        optionC: "School committee",
        correctAnswer: "Local government",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Clean and fresh water is ______.",
        optionA: "salty",
        optionB: "drinkable",
        optionC: "dirty",
        correctAnswer: "drinkable",
      }),
      shuffleOptions({
        question: "The ______ is the main source of water.",
        optionA: "rain",
        optionB: "well",
        optionC: "river",
        correctAnswer: "rain",
      }),
      shuffleOptions({
        question: "The ______ helps store rainwater for later use.",
        optionA: "rainwater harvesting system",
        optionB: "drainage pipe",
        optionC: "river bridge",
        correctAnswer: "rainwater harvesting system",
      }),
      shuffleOptions({
        question: "A ______ drinks a lot of water every day.",
        optionA: "camel",
        optionB: "elephant",
        optionC: "dog",
        correctAnswer: "elephant",
      }),
      shuffleOptions({
        question: "Water shortage happens when there is ______ water available.",
        optionA: "enough",
        optionB: "limited",
        optionC: "too much",
        correctAnswer: "limited",
      }),
      shuffleOptions({
        question: "During summer, the groundwater level ______.",
        optionA: "falls",
        optionB: "rises",
        optionC: "stays the same",
        correctAnswer: "falls",
      }),
      shuffleOptions({
        question: "A ______ needs very little water to grow.",
        optionA: "cactus",
        optionB: "rose",
        optionC: "mango tree",
        correctAnswer: "cactus",
      }),
      shuffleOptions({
        question: "The Sun changes water into ______.",
        optionA: "vapour",
        optionB: "snow",
        optionC: "air",
        correctAnswer: "vapour",
      }),
      shuffleOptions({
        question: "In cities, people get water from tankers during ______.",
        optionA: "water shortage",
        optionB: "heavy rain",
        optionC: "winter season",
        correctAnswer: "water shortage",
      }),
      shuffleOptions({
        question: "Water for all means that every person has a ______ to use water.",
        optionA: "right",
        optionB: "restriction",
        optionC: "condition",
        correctAnswer: "right",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rainwater seeps into the ground and becomes groundwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should waste water while bathing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cactus plant needs a lot of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rainwater harvesting helps in saving water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water is needed by plants and animals to live.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A camel cannot stay without water for even one day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Sun helps water to change into vapour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People have to stand in queues to get water during shortage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "It is good to waste water because it is available in plenty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Everyone has the right to use clean water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
