export const chapter = "Chapter - 12: Farmers";
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
        question: "Who are the people involved in cultivating soil, producing crops and rearing animals?",
        optionA: "Shopkeepers",
        optionB: "Carpenters",
        optionC: "Farmers",
        correctAnswer: "Farmers",
      }),
      shuffleOptions({
        question: "Which farmers are totally dependent on rain for their crops?",
        optionA: "Commercial farmers",
        optionB: "Mixed farmers",
        optionC: "Small or subsistence farmers",
        correctAnswer: "Small or subsistence farmers",
      }),
      shuffleOptions({
        question: "What do commercial farmers mainly grow for sale in the market?",
        optionA: "Commercial crops",
        optionB: "Wild fruits",
        optionC: "Seasonal vegetables",
        correctAnswer: "Commercial crops",
      }),
      shuffleOptions({
        question: "Who rears cows and buffaloes to sell milk and milk products?",
        optionA: "Dairy farmers",
        optionB: "Poultry farmers",
        optionC: "Landless labourers",
        correctAnswer: "Dairy farmers",
      }),
      shuffleOptions({
        question: "Which farmers grow crops as well as rear animals?",
        optionA: "Small farmers",
        optionB: "Mixed farmers",
        optionC: "Commercial farmers",
        correctAnswer: "Mixed farmers",
      }),
      shuffleOptions({
        question: "Who works on others’ land to earn money or a part of the crop?",
        optionA: "Landless labourers",
        optionB: "Small farmers",
        optionC: "Poultry farmers",
        correctAnswer: "Landless labourers",
      }),
      shuffleOptions({
        question: "What is the process of supplying water artificially to the crops called?",
        optionA: "Harvesting",
        optionB: "Irrigation",
        optionC: "Fertilisation",
        correctAnswer: "Irrigation",
      }),
      shuffleOptions({
        question: "Which of these is used to make soil more fertile?",
        optionA: "Fertilizers",
        optionB: "Pesticides",
        optionC: "Sand",
        correctAnswer: "Fertilizers",
      }),
      shuffleOptions({
        question: "Which machine helps in sowing seeds in modern farming?",
        optionA: "Seed sower",
        optionB: "Mixer grinder",
        optionC: "Typewriter",
        correctAnswer: "Seed sower",
      }),
      shuffleOptions({
        question: "What is the movement of farmers to cities during off-season called?",
        optionA: "Irrigation",
        optionB: "Seasonal migration",
        optionC: "Harvesting",
        correctAnswer: "Seasonal migration",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Agriculture is the ______, art and business of cultivating soil and producing crops.",
        optionA: "science",
        optionB: "history",
        optionC: "hobby",
        correctAnswer: "science",
      }),
      shuffleOptions({
        question: "Farmers who rear hens and ducks for eggs and meat are called ______.",
        optionA: "poultry farmers",
        optionB: "dairy farmers",
        optionC: "landless labourers",
        correctAnswer: "poultry farmers",
      }),
      shuffleOptions({
        question: "______ are the first and foremost requirement for cultivating crops.",
        optionA: "Seeds",
        optionB: "Fertilizers",
        optionC: "Machines",
        correctAnswer: "Seeds",
      }),
      shuffleOptions({
        question: "The use of poor-quality seeds affects the ______ of crops.",
        optionA: "production",
        optionB: "colour",
        optionC: "price",
        correctAnswer: "production",
      }),
      shuffleOptions({
        question: "Water is one of the prime requirements for the ______ of crops.",
        optionA: "growth",
        optionB: "transport",
        optionC: "sale",
        correctAnswer: "growth",
      }),
      shuffleOptions({
        question: "______ is used to protect plants from harmful pests.",
        optionA: "Pesticide",
        optionB: "Fertilizer",
        optionC: "Compost",
        correctAnswer: "Pesticide",
      }),
      shuffleOptions({
        question: "Compost and manure are examples of ______ fertilizers.",
        optionA: "natural",
        optionB: "chemical",
        optionC: "metallic",
        correctAnswer: "natural",
      }),
      shuffleOptions({
        question: "Raghu from Madhavpur village works as a ______ during winters.",
        optionA: "mason (Rajgiri work)",
        optionB: "driver",
        optionC: "potter",
        correctAnswer: "mason (Rajgiri work)",
      }),
      shuffleOptions({
        question: "Many farmers migrate to towns to earn ______ wages.",
        optionA: "daily",
        optionB: "monthly",
        optionC: "yearly",
        correctAnswer: "daily",
      }),
      shuffleOptions({
        question: "India is an ______ country where most people depend on farming.",
        optionA: "agricultural",
        optionB: "industrial",
        optionC: "commercial",
        correctAnswer: "agricultural",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Farming requires fertile soil, suitable climate and hard work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Commercial farmers depend completely on rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Small farmers own land below two hectares.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dairy farmers sell products like milk, butter and ghee.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Landless labourers cultivate their own large farms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fertilizers help to make the soil more fertile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pesticides harm the growth of crops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Irrigation is the artificial method of supplying water to crops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seasonal migration helps some families to meet their needs in the off-season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Agriculture is the same as hunting and food gathering.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
