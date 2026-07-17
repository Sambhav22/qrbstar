export const chapter = "Chapter - 13: The Sun and the Shadows";
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
        question: "Why does the sun look small to us?",
        optionA: "Because it is near",
        optionB: "Because it is very far",
        optionC: "Because it is tiny",
        correctAnswer: "Because it is very far",
      }),
      shuffleOptions({
        question: "What does the sun help our wet clothes to do?",
        optionA: "Get wet",
        optionB: "Dry",
        optionC: "Shine",
        correctAnswer: "Dry",
      }),
      shuffleOptions({
        question: "What ripens on trees due to the sun’s heat?",
        optionA: "Flowers",
        optionB: "Fruits",
        optionC: "Leaves",
        correctAnswer: "Fruits",
      }),
      shuffleOptions({
        question: "The sun is at the centre of which system?",
        optionA: "Lunar system",
        optionB: "Solar system",
        optionC: "Star system",
        correctAnswer: "Solar system",
      }),
      shuffleOptions({
        question: "What does sunlight make the day?",
        optionA: "Dark",
        optionB: "Bright",
        optionC: "Rainy",
        correctAnswer: "Bright",
      }),
      shuffleOptions({
        question: "Which natural source helps kill germs?",
        optionA: "Water",
        optionB: "Sunlight",
        optionC: "Stone",
        correctAnswer: "Sunlight",
      }),
      shuffleOptions({
        question: "What do we enjoy from the sun in winter?",
        optionA: "Cold",
        optionB: "Warmth",
        optionC: "Rain",
        correctAnswer: "Warmth",
      }),
      shuffleOptions({
        question: "What does the sun give us?",
        optionA: "Toys",
        optionB: "Heat and light",
        optionC: "Paper",
        correctAnswer: "Heat and light",
      }),
      shuffleOptions({
        question: "On which side of the light are shadows formed?",
        optionA: "Same side",
        optionB: "Opposite side",
        optionC: "Under",
        correctAnswer: "Opposite side",
      }),
      shuffleOptions({
        question: "What did people use in olden days to guess time?",
        optionA: "Torch",
        optionB: "Sundial",
        optionC: "Candle",
        correctAnswer: "Sundial",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Life on the earth cannot be imagined without the ______.",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Star",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "The sun is much ______ than the earth.",
        optionA: "Bigger",
        optionB: "Smaller",
        optionC: "Equal",
        correctAnswer: "Bigger",
      }),
      shuffleOptions({
        question: "Plants prepare food with the help of ______.",
        optionA: "Water",
        optionB: "Sunlight",
        optionC: "Wind",
        correctAnswer: "Sunlight",
      }),
      shuffleOptions({
        question: "The heat of the sun changes water into ______.",
        optionA: "Vapour",
        optionB: "Snow",
        optionC: "Stone",
        correctAnswer: "Vapour",
      }),
      shuffleOptions({
        question: "Shadows have no ______.",
        optionA: "Shape",
        optionB: "Colour",
        optionC: "Size",
        correctAnswer: "Colour",
      }),
      shuffleOptions({
        question: "The sun rises in the ______.",
        optionA: "East",
        optionB: "West",
        optionC: "North",
        correctAnswer: "East",
      }),
      shuffleOptions({
        question: "The sun sets in the ______.",
        optionA: "East",
        optionB: "West",
        optionC: "South",
        correctAnswer: "West",
      }),
      shuffleOptions({
        question: "The sun appears small because it is very ______.",
        optionA: "Near",
        optionB: "Far",
        optionC: "Tiny",
        correctAnswer: "Far",
      }),
      shuffleOptions({
        question: "We enjoy the sun’s ______ on cold days.",
        optionA: "Warmth",
        optionB: "Darkness",
        optionC: "Snow",
        correctAnswer: "Warmth",
      }),
      shuffleOptions({
        question: "The length of a shadow ______ with time.",
        optionA: "Remains same",
        optionB: "Varies",
        optionC: "Increases only",
        correctAnswer: "Varies",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun is the main source of energy on earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shadows are formed on the same side as the light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sun is smaller than the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sunlight helps fruits to ripen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shadows are the shortest at noon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In olden days, people used sundials to know the time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shadows change their length during the day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sunlight helps plants to prepare their food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The heat of the sun helps to dry clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
