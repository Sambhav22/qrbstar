export const chapter = "Chapter - 14: The Sun, Moon and Stars";
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
        question: "What does the sun give us?",
        optionA: "Water",
        optionB: "Heat and light",
        optionC: "Air",
        correctAnswer: "Heat and light",
      }),
      shuffleOptions({
        question: "What does the moon look like at night?",
        optionA: "A white ball",
        optionB: "A red ball",
        optionC: "A star",
        correctAnswer: "A white ball",
      }),
      shuffleOptions({
        question: "Why do stars appear so small?",
        optionA: "They are very near",
        optionB: "They are very far",
        optionC: "They are tiny",
        correctAnswer: "They are very far",
      }),
      shuffleOptions({
        question: "Which is the earth’s nearest neighbour?",
        optionA: "Sun",
        optionB: "Moon",
        optionC: "Star",
        correctAnswer: "Moon",
      }),
      shuffleOptions({
        question: "What makes the sky look bright in the day?",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Stars",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "Who was the first man to land on the moon?",
        optionA: "Galileo",
        optionB: "Neil Armstrong",
        optionC: "Newton",
        correctAnswer: "Neil Armstrong",
      }),
      shuffleOptions({
        question: "When does the sun set?",
        optionA: "Morning",
        optionB: "Afternoon",
        optionC: "Evening",
        correctAnswer: "Evening",
      }),
      shuffleOptions({
        question: "What twinkles in the night sky?",
        optionA: "Clouds",
        optionB: "Stars",
        optionC: "Rain",
        correctAnswer: "Stars",
      }),
      shuffleOptions({
        question: "Which direction does the sun rise in?",
        optionA: "East",
        optionB: "West",
        optionC: "North",
        correctAnswer: "East",
      }),
      shuffleOptions({
        question: "What changes shape every night?",
        optionA: "Stars",
        optionB: "Moon",
        optionC: "Sun",
        correctAnswer: "Moon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun looks like a big ball of ______.",
        optionA: "fire",
        optionB: "water",
        optionC: "ice",
        correctAnswer: "fire",
      }),
      shuffleOptions({
        question: "The sun rises in the ______.",
        optionA: "east",
        optionB: "west",
        optionC: "south",
        correctAnswer: "east",
      }),
      shuffleOptions({
        question: "The sun sets in the ______.",
        optionA: "west",
        optionB: "east",
        optionC: "north",
        correctAnswer: "west",
      }),
      shuffleOptions({
        question: "The moon is smaller than the ______.",
        optionA: "sun",
        optionB: "star",
        optionC: "earth",
        correctAnswer: "sun",
      }),
      shuffleOptions({
        question: "Stars look like glowing ______ in the sky.",
        optionA: "dots",
        optionB: "stones",
        optionC: "lamps",
        correctAnswer: "dots",
      }),
      shuffleOptions({
        question: "The sun brings us a new ______.",
        optionA: "day",
        optionB: "week",
        optionC: "month",
        correctAnswer: "day",
      }),
      shuffleOptions({
        question: "The moon appears in different ______.",
        optionA: "shapes",
        optionB: "colours",
        optionC: "sizes",
        correctAnswer: "shapes",
      }),
      shuffleOptions({
        question: "The sun is much bigger than the ______.",
        optionA: "earth",
        optionB: "moon",
        optionC: "stars",
        correctAnswer: "earth",
      }),
      shuffleOptions({
        question: "The moon is the earth’s nearest ______.",
        optionA: "neighbour",
        optionB: "planet",
        optionC: "star",
        correctAnswer: "neighbour",
      }),
      shuffleOptions({
        question: "The stars twinkle in the ______ sky.",
        optionA: "night",
        optionB: "morning",
        optionC: "day",
        correctAnswer: "night",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun is also a star.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The moon shines at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The stars are very far away from us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The moon is bigger than the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We cannot count the stars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon is the earth’s nearest neighbour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun gives us heat and light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The moon never changes its shape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sky looks the same in the day and night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
