export const chapter = "Chapter - 8: Life in the Tropical and Subtropical Regions";
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
        question: "Which region is known for having daily evening rainfall due to high heat and humidity?",
        optionA: "Arctic region",
        optionB: "Amazon basin",
        optionC: "Mediterranean region",
        correctAnswer: "Amazon basin",
      }),
      shuffleOptions({
        question: "Which mountain range is the source of the Amazon River?",
        optionA: "Alps",
        optionB: "Andes Mountains",
        optionC: "Rockies",
        correctAnswer: "Andes Mountains",
      }),
      shuffleOptions({
        question: "Which type of vegetation in the Amazon grows in three distinct tiers?",
        optionA: "Coniferous forests",
        optionB: "Selva (tropical rainforests)",
        optionC: "Mangroves",
        correctAnswer: "Selva (tropical rainforests)",
      }),
      shuffleOptions({
        question: "Which animal found in the Amazon basin is known for being flesh-eating?",
        optionA: "Piranha fish",
        optionB: "Hilsa",
        optionC: "Trout",
        correctAnswer: "Piranha fish",
      }),
      shuffleOptions({
        question: "Which housing structure in the Amazon is large and used by many families together?",
        optionA: "Igloo",
        optionB: "Maloca",
        optionC: "Hutment",
        correctAnswer: "Maloca",
      }),
      shuffleOptions({
        question: "Which tree in the Amazon region is tapped to obtain rubber?",
        optionA: "Deodar",
        optionB: "Rubber tree",
        optionC: "Pine",
        correctAnswer: "Rubber tree",
      }),
      shuffleOptions({
        question: "Which basin in India has the thickest bamboo forests?",
        optionA: "Indus basin",
        optionB: "Ganga basin",
        optionC: "Brahmaputra basin",
        correctAnswer: "Brahmaputra basin",
      }),
      shuffleOptions({
        question: "Which activity has contributed to the destruction of the Amazon rainforests in recent decades?",
        optionA: "Skiing",
        optionB: "Mining and road building",
        optionC: "Desert farming",
        correctAnswer: "Mining and road building",
      }),
      shuffleOptions({
        question: "Which animal is commonly found in the Sunderban Delta?",
        optionA: "Snow leopard",
        optionB: "Bengal tiger",
        optionC: "Polar bear",
        correctAnswer: "Bengal tiger",
      }),
      shuffleOptions({
        question: "Which factor makes the Ganga-Brahmaputra plains heavily populated?",
        optionA: "Freezing temperature",
        optionB: "Dense forests",
        optionC: "Fertile soil and abundant water supply",
        correctAnswer: "Fertile soil and abundant water supply",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Amazon basin lies roughly between ________.",
        optionA: "10°N and 10°S",
        optionB: "30°N and 30°S",
        optionC: "60°N and 60°S",
        correctAnswer: "10°N and 10°S",
      }),
      shuffleOptions({
        question: "The large creepers that coil around trees in the Amazon forests are called ________.",
        optionA: "moss",
        optionB: "lianas",
        optionC: "shrubs",
        correctAnswer: "lianas",
      }),
      shuffleOptions({
        question: "The people of the Amazon often travel using boats made from ________.",
        optionA: "metal",
        optionB: "logs of trees",
        optionC: "plastic",
        correctAnswer: "logs of trees",
      }),
      shuffleOptions({
        question: "Manioc is used to make a food item called ________.",
        optionA: "popcorn",
        optionB: "noodles",
        optionC: "tapioca",
        correctAnswer: "tapioca",
      }),
      shuffleOptions({
        question: "The Ganga-Brahmaputra basin forms one of the world’s largest ________.",
        optionA: "deserts",
        optionB: "deltas",
        optionC: "islands",
        correctAnswer: "deltas",
      }),
      shuffleOptions({
        question: "The delta region is covered with thick ________ forests.",
        optionA: "mangrove",
        optionB: "thorn",
        optionC: "alpine",
        correctAnswer: "mangrove",
      }),
      shuffleOptions({
        question: "The Amazon forests are also known as the ________ of the Earth.",
        optionA: "furnace",
        optionB: "lungs",
        optionC: "shield",
        correctAnswer: "lungs",
      }),
      shuffleOptions({
        question: "The Brahmaputra plain receives heavy rainfall and is one of the world’s ________ regions.",
        optionA: "coldest",
        optionB: "driest",
        optionC: "wettest",
        correctAnswer: "wettest",
      }),
      shuffleOptions({
        question: "The Amazon rainforest contains tall evergreen trees with ________ foliage.",
        optionA: "thin",
        optionB: "thick and dense",
        optionC: "coloured",
        correctAnswer: "thick and dense",
      }),
      shuffleOptions({
        question: "The village huts in the Amazon basin are often built on ________ to avoid floods.",
        optionA: "poles (stilts)",
        optionB: "higher ground",
        optionC: "underground pits",
        correctAnswer: "higher ground",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Amazon basin remains hot, rainy and humid throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Amazon forests receive more than 200 cm of rainfall annually.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Most Amazon animals are arboreal because the forest is very dense.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ganga-Brahmaputra basin has very little population due to poor soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Anaconda and pythons are both found in the Amazon region.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Coniferous trees such as pine and deodar grow in the hills of Uttarakhand and Arunachal Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Amazon basin is located in the temperate zone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Ganga-Brahmaputra delta often experiences tropical cyclones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rubber gatherers in the Amazon are known as seringueiros.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sunderban Delta is famous for its dense mangrove forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
