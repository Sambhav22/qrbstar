export const chapter = "Chapter - 13: The Earth";
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
        question: "Which planet do we live on?",
        optionA: "Mars",
        optionB: "Earth",
        optionC: "Jupiter",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "Why is the Earth called the blue planet?",
        optionA: "Because it has many mountains",
        optionB: "Because most of it is covered with water",
        optionC: "Because it has green trees",
        correctAnswer: "Because most of it is covered with water",
      }),
      shuffleOptions({
        question: "Which landform is high and pointed?",
        optionA: "Mountain",
        optionB: "Plain",
        optionC: "Island",
        correctAnswer: "Mountain",
      }),
      shuffleOptions({
        question: "Which landform is covered with sand?",
        optionA: "Plain",
        optionB: "Hill",
        optionC: "Desert",
        correctAnswer: "Desert",
      }),
      shuffleOptions({
        question: "What is surrounded by water on all sides?",
        optionA: "Island",
        optionB: "Mountain",
        optionC: "Plain",
        correctAnswer: "Island",
      }),
      shuffleOptions({
        question: "What causes a flood on Earth?",
        optionA: "Overflow of water from rivers and seas",
        optionB: "Heavy wind",
        optionC: "Lack of rain",
        correctAnswer: "Overflow of water from rivers and seas",
      }),
      shuffleOptions({
        question: "What happens during an earthquake?",
        optionA: "The ground shakes",
        optionB: "The wind blows",
        optionC: "The water freezes",
        correctAnswer: "The ground shakes",
      }),
      shuffleOptions({
        question: "Who helps people during floods?",
        optionA: "Rescue teams",
        optionB: "Teachers",
        optionC: "Painters",
        correctAnswer: "Rescue teams",
      }),
      shuffleOptions({
        question: "What gives us air and sunlight to live?",
        optionA: "Earth",
        optionB: "Moon",
        optionC: "Stars",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "Why should we keep our Earth clean?",
        optionA: "Because it is our home",
        optionB: "Because it is far away",
        optionC: "Because it is made of sand",
        correctAnswer: "Because it is our home",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Earth is also called the ______ planet.",
        optionA: "Blue",
        optionB: "Green",
        optionC: "Red",
        correctAnswer: "Blue",
      }),
      shuffleOptions({
        question: "About three-fourths of Earth is covered with ______.",
        optionA: "Water",
        optionB: "Land",
        optionC: "Air",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "A mountain is a very ______ landform.",
        optionA: "High",
        optionB: "Flat",
        optionC: "Wet",
        correctAnswer: "High",
      }),
      shuffleOptions({
        question: "A plain is a ______ piece of land.",
        optionA: "Flat",
        optionB: "High",
        optionC: "Rocky",
        correctAnswer: "Flat",
      }),
      shuffleOptions({
        question: "A flood is caused by too much ______.",
        optionA: "Water",
        optionB: "Sand",
        optionC: "Air",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "An island is surrounded by ______.",
        optionA: "Water",
        optionB: "Soil",
        optionC: "Grass",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "An earthquake makes the land ______.",
        optionA: "Shake",
        optionB: "Freeze",
        optionC: "Shine",
        correctAnswer: "Shake",
      }),
      shuffleOptions({
        question: "We should always keep our planet ______.",
        optionA: "Clean",
        optionB: "Dirty",
        optionC: "Broken",
        correctAnswer: "Clean",
      }),
      shuffleOptions({
        question: "Earth has both water and ______.",
        optionA: "Land",
        optionB: "Fire",
        optionC: "Snow",
        correctAnswer: "Land",
      }),
      shuffleOptions({
        question: "A disaster is a natural ______.",
        optionA: "Calamity",
        optionB: "Game",
        optionC: "Place",
        correctAnswer: "Calamity",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Earth is known as the blue planet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Flood is a type of disaster.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earth has only water and no land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mountains are low landforms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rescue teams help people during floods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deserts are full of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "An earthquake makes the ground shake.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plains are flat lands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep our Earth dirty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Earth is our home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
