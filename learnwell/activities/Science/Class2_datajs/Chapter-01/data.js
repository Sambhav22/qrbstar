export const chapter = "Chapter - 1: Plants Around Us";
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
        question: "Which type of plant is coconut?",
        optionA: "Herb",
        optionB: "Shrub",
        optionC: "Tree",
        correctAnswer: "Tree",
      }),
      shuffleOptions({
        question: "Which type of plant is Tulsi?",
        optionA: "Herb",
        optionB: "Creeper",
        optionC: "Climber",
        correctAnswer: "Herb",
      }),
      shuffleOptions({
        question: "Which of these is not a shrub?",
        optionA: "Jasmine",
        optionB: "Mango",
        optionC: "Rose",
        correctAnswer: "Mango",
      }),
      shuffleOptions({
        question: "Which type of plant is money plant?",
        optionA: "Climber",
        optionB: "Creeper",
        optionC: "Herb",
        correctAnswer: "Climber",
      }),
      shuffleOptions({
        question: "Which plant grows along the ground?",
        optionA: "Watermelon",
        optionB: "Grapevine",
        optionC: "Rose",
        correctAnswer: "Watermelon",
      }),
      shuffleOptions({
        question: "What type of plant is cactus?",
        optionA: "Thorny plant",
        optionB: "Aquatic plant",
        optionC: "Shrub",
        correctAnswer: "Thorny plant",
      }),
      shuffleOptions({
        question: "Which of these plants grows in water?",
        optionA: "Lotus",
        optionB: "Tea",
        optionC: "Grass",
        correctAnswer: "Lotus",
      }),
      shuffleOptions({
        question: "Which type of plant is grass?",
        optionA: "Herb",
        optionB: "Shrub",
        optionC: "Tree",
        correctAnswer: "Herb",
      }),
      shuffleOptions({
        question: "Which type of plant is hibiscus?",
        optionA: "Shrub",
        optionB: "Herb",
        optionC: "Creeper",
        correctAnswer: "Shrub",
      }),
      shuffleOptions({
        question: "Which type of plant has a strong woody stem called trunk?",
        optionA: "Tree",
        optionB: "Shrub",
        optionC: "Herb",
        correctAnswer: "Tree",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Herbs are very ______ plants.",
        optionA: "small",
        optionB: "big",
        optionC: "tall",
        correctAnswer: "small",
      }),
      shuffleOptions({
        question: "Trees have many ______.",
        optionA: "branches",
        optionB: "leaves",
        optionC: "flowers",
        correctAnswer: "branches",
      }),
      shuffleOptions({
        question: "Shrubs are also called ______.",
        optionA: "bushes",
        optionB: "herbs",
        optionC: "climbers",
        correctAnswer: "bushes",
      }),
      shuffleOptions({
        question: "Herbs live for ______ months.",
        optionA: "3–4",
        optionB: "12",
        optionC: "24",
        correctAnswer: "3–4",
      }),
      shuffleOptions({
        question: "Plants with weak stems that need support are called ______.",
        optionA: "climbers",
        optionB: "trees",
        optionC: "herbs",
        correctAnswer: "climbers",
      }),
      shuffleOptions({
        question: "Plants which grow along the ground are called ______.",
        optionA: "creepers",
        optionB: "climbers",
        optionC: "herbs",
        correctAnswer: "creepers",
      }),
      shuffleOptions({
        question: "Rose and lemon are ______ plants.",
        optionA: "thorny",
        optionB: "aquatic",
        optionC: "herbal",
        correctAnswer: "thorny",
      }),
      shuffleOptions({
        question: "Plants prepare their food with the help of air, water and ______.",
        optionA: "sunlight",
        optionB: "moonlight",
        optionC: "soil",
        correctAnswer: "sunlight",
      }),
      shuffleOptions({
        question: "Extra food of plants is stored in ______.",
        optionA: "seeds",
        optionB: "air",
        optionC: "clouds",
        correctAnswer: "seeds",
      }),
      shuffleOptions({
        question: "The smallest aquatic plant is known as ______.",
        optionA: "duckweed",
        optionB: "lotus",
        optionC: "hydrilla",
        correctAnswer: "duckweed",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mango and banyan are trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Herbs have woody stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Creepers grow straight and tall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Grapevine is a climber.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shrubs are taller than trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lotus grows in soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Green plants make food in their leaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Photosynthesis needs sunlight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plants store food only in fruits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rose is a thorny plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
