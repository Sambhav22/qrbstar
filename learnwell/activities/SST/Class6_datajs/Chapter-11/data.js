export const chapter = "Chapter - 11: First Farmers and Herders";
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
        question: "Which animal is believed to be the first tamed by early humans?",
        optionA: "Horse",
        optionB: "Dog",
        optionC: "Cow",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which cereal was among the earliest grown by Neolithic people?",
        optionA: "Sugarcane",
        optionB: "Maize",
        optionC: "Barley",
        correctAnswer: "Barley",
      }),
      shuffleOptions({
        question: "Which material was commonly used to decorate Neolithic pottery?",
        optionA: "Silver",
        optionB: "Blue dye",
        optionC: "Red and brown colours",
        correctAnswer: "Red and brown colours",
      }),
      shuffleOptions({
        question: "What did the people of Burzahom build to survive extreme cold?",
        optionA: "Tree houses",
        optionB: "Pit dwellings",
        optionC: "Stone towers",
        correctAnswer: "Pit dwellings",
      }),
      shuffleOptions({
        question: "Which tool was used by Neolithic people for preparing food?",
        optionA: "Iron plough",
        optionB: "Wooden comb",
        optionC: "Mortars and pestles",
        correctAnswer: "Mortars and pestles",
      }),
      shuffleOptions({
        question: "Which invention made both travel and pottery easier?",
        optionA: "Fire",
        optionB: "Wheel",
        optionC: "Writing",
        correctAnswer: "Wheel",
      }),
      shuffleOptions({
        question: "What did Neolithic people use for making early clothes?",
        optionA: "Silk",
        optionB: "Nylon",
        optionC: "Wool and cotton",
        correctAnswer: "Wool and cotton",
      }),
      shuffleOptions({
        question: "Which stone, probably brought from China, was found at Daojali Hading?",
        optionA: "Limestone",
        optionB: "Sandstone",
        optionC: "Jadeite",
        correctAnswer: "Jadeite",
      }),
      shuffleOptions({
        question: "Why did early humans start settling in one place?",
        optionA: "To hunt better",
        optionB: "To avoid other tribes",
        optionC: "Because of farming and food production",
        correctAnswer: "Because of farming and food production",
      }),
      shuffleOptions({
        question: "What were bangles and beads in the Neolithic Age usually made of?",
        optionA: "Gold",
        optionB: "Shells and bones",
        optionC: "Iron",
        correctAnswer: "Shells and bones",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early humans began ________ animals for milk and food.",
        optionA: "selling",
        optionB: "abandoning",
        optionC: "domesticating",
        correctAnswer: "domesticating",
      }),
      shuffleOptions({
        question: "Neolithic people stored grains in pots made of ________.",
        optionA: "metal",
        optionB: "glass",
        optionC: "clay",
        correctAnswer: "clay",
      }),
      shuffleOptions({
        question: "The first wheels used by early humans were made of ________.",
        optionA: "stone",
        optionB: "clay",
        optionC: "wood",
        correctAnswer: "wood",
      }),
      shuffleOptions({
        question: "Early farmers grew crops such as wheat, barley and ________.",
        optionA: "coconut",
        optionB: "rice",
        optionC: "grapes",
        correctAnswer: "rice",
      }),
      shuffleOptions({
        question: "Neolithic tools became sharper because they were ________.",
        optionA: "painted",
        optionB: "polished",
        optionC: "broken",
        correctAnswer: "polished",
      }),
      shuffleOptions({
        question: "Burzahom people cooked food using ________.",
        optionA: "pressure cookers",
        optionB: "metal stoves",
        optionC: "ovens (chulhas)",
        correctAnswer: "ovens (chulhas)",
      }),
      shuffleOptions({
        question: "People exchanged goods without money through the ________ system.",
        optionA: "banking",
        optionB: "coin",
        optionC: "barter",
        correctAnswer: "barter",
      }),
      shuffleOptions({
        question: "Neolithic huts were built in close groups, forming early ________.",
        optionA: "cities",
        optionB: "villages",
        optionC: "kingdoms",
        correctAnswer: "villages",
      }),
      shuffleOptions({
        question: "Baskets for storing grains were made from ________.",
        optionA: "rubber",
        optionB: "bamboo",
        optionC: "wool",
        correctAnswer: "bamboo",
      }),
      shuffleOptions({
        question: "Bronze was made by mixing copper with a small amount of ________.",
        optionA: "gold",
        optionB: "tin",
        optionC: "lead",
        correctAnswer: "tin",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early humans used polished stone tools during the Neolithic Age.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jadeite found in Daojali Hading was made locally in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The wheel helped in both travelling and pottery activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Neolithic people lived only in caves throughout India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Early humans decorated pottery with animal designs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Burials in some areas included tools, pottery and food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Domestication of animals gave humans only meat and nothing else.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Neolithic villagers protected huts using thick bushes around the settlement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Horses were the first animals to be tamed by early humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Neolithic people produced cereals like barley and wheat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
