export const chapter = "Chapter - 2: The Plants World";
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
        question: "What kind of plants are big and strong?",
        optionA: "Big",
        optionB: "Small",
        optionC: "Weak",
        correctAnswer: "Big",
      }),
      shuffleOptions({
        question: "What type of stems do shrubs have?",
        optionA: "Soft",
        optionB: "Many thin woody",
        optionC: "Creeping",
        correctAnswer: "Many thin woody",
      }),
      shuffleOptions({
        question: "What type of stems do herbs usually have?",
        optionA: "Woody",
        optionB: "Soft green",
        optionC: "Thick",
        correctAnswer: "Soft green",
      }),
      shuffleOptions({
        question: "Which type of plant cannot grow without support?",
        optionA: "Tree",
        optionB: "Climber",
        optionC: "Shrub",
        correctAnswer: "Climber",
      }),
      shuffleOptions({
        question: "How do creepers move?",
        optionA: "Upwards",
        optionB: "Along the ground",
        optionC: "On walls",
        correctAnswer: "Along the ground",
      }),
      shuffleOptions({
        question: "Which type of plant is mango?",
        optionA: "Tree",
        optionB: "Shrub",
        optionC: "Herb",
        correctAnswer: "Tree",
      }),
      shuffleOptions({
        question: "Which type of plant is jasmine?",
        optionA: "Shrub",
        optionB: "Tree",
        optionC: "Herb",
        correctAnswer: "Shrub",
      }),
      shuffleOptions({
        question: "Which type of plant is mint?",
        optionA: "Herb",
        optionB: "Tree",
        optionC: "Creeper",
        correctAnswer: "Herb",
      }),
      shuffleOptions({
        question: "Which group do cactus and rose belong to?",
        optionA: "Thorny plants",
        optionB: "Creepers",
        optionC: "Climbers",
        correctAnswer: "Thorny plants",
      }),
      shuffleOptions({
        question: "How do plants make our surroundings?",
        optionA: "Dull",
        optionB: "Beautiful",
        optionC: "Empty",
        correctAnswer: "Beautiful",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A neem tree has a thick ______.",
        optionA: "Trunk",
        optionB: "Creeper",
        optionC: "Herb",
        correctAnswer: "Trunk",
      }),
      shuffleOptions({
        question: "Shrubs live for a ______ years.",
        optionA: "Few",
        optionB: "Many",
        optionC: "Hundred",
        correctAnswer: "Few",
      }),
      shuffleOptions({
        question: "Herbs live for only a ______ months.",
        optionA: "Few",
        optionB: "Many",
        optionC: "Hundred",
        correctAnswer: "Few",
      }),
      shuffleOptions({
        question: "Creepers have ______ stems.",
        optionA: "Strong",
        optionB: "Weak",
        optionC: "Thick",
        correctAnswer: "Weak",
      }),
      shuffleOptions({
        question: "Climbers are plants that need ______.",
        optionA: "Support",
        optionB: "Water",
        optionC: "Ground",
        correctAnswer: "Support",
      }),
      shuffleOptions({
        question: "Cactus thorns keep animals from ______ the plant.",
        optionA: "Eating",
        optionB: "Watering",
        optionC: "Climbing",
        correctAnswer: "Eating",
      }),
      shuffleOptions({
        question: "Money plant is an example of a ______.",
        optionA: "Climber",
        optionB: "Tree",
        optionC: "Shrub",
        correctAnswer: "Climber",
      }),
      shuffleOptions({
        question: "Cotton is a ______.",
        optionA: "Shrub",
        optionB: "Creeper",
        optionC: "Herb",
        correctAnswer: "Shrub",
      }),
      shuffleOptions({
        question: "Plants with bushy look are called ______.",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Trees",
        correctAnswer: "Shrubs",
      }),
      shuffleOptions({
        question: "Trees live for ______ years.",
        optionA: "Many",
        optionB: "Few",
        optionC: "Few months",
        correctAnswer: "Many",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "All plants are useful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shrubs are bigger than trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Herbs live for a short time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Money plant is a creeper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pumpkin grows along the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cactus thorns are its stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trees like banyan are very strong.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Creepers can grow without support.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cotton is a shrub.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rose has thorns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
