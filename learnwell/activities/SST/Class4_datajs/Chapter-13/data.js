export const chapter = "Chapter - 13: Mineral Resources";
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
        question: "Which metal is commonly used to make electric motors and generators?",
        optionA: "Gold",
        optionB: "Copper",
        optionC: "Mica",
        correctAnswer: "Copper",
      }),
      shuffleOptions({
        question: "Which metal is extracted from bauxite ore?",
        optionA: "Aluminium",
        optionB: "Manganese",
        optionC: "Iron",
        correctAnswer: "Aluminium",
      }),
      shuffleOptions({
        question: "Which mineral is known for being hard and brittle?",
        optionA: "Coal",
        optionB: "Manganese",
        optionC: "Copper",
        correctAnswer: "Manganese",
      }),
      shuffleOptions({
        question: "From which mineral do we obtain petrol, diesel and kerosene?",
        optionA: "Coal",
        optionB: "Petroleum",
        optionC: "Gold",
        correctAnswer: "Petroleum",
      }),
      shuffleOptions({
        question: "Which precious metal is used to make rings and bangles?",
        optionA: "Iron",
        optionB: "Copper",
        optionC: "Gold",
        correctAnswer: "Gold",
      }),
      shuffleOptions({
        question: "Which mineral is used in making electric appliances due to its heat resistance?",
        optionA: "Coal",
        optionB: "Mica",
        optionC: "Sodium",
        correctAnswer: "Mica",
      }),
      shuffleOptions({
        question: "Which metal is very light and used to make aeroplanes?",
        optionA: "Aluminium",
        optionB: "Iron",
        optionC: "Copper",
        correctAnswer: "Aluminium",
      }),
      shuffleOptions({
        question: "Which mineral is formed from dead plants buried for thousands of years?",
        optionA: "Petroleum",
        optionB: "Coal",
        optionC: "Gold",
        correctAnswer: "Coal",
      }),
      shuffleOptions({
        question: "Which mineral is mainly found in states like Karnataka and Andhra Pradesh?",
        optionA: "Manganese",
        optionB: "Gold",
        optionC: "Coal",
        correctAnswer: "Gold",
      }),
      shuffleOptions({
        question: "What process is used to take mineral ores out of the earth?",
        optionA: "Filtering",
        optionB: "Mining",
        optionC: "Pressing",
        correctAnswer: "Mining",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Aluminium is used to make ______.",
        optionA: "aeroplanes",
        optionB: "cement",
        optionC: "cloth",
        correctAnswer: "aeroplanes",
      }),
      shuffleOptions({
        question: "Petroleum is also known as ______.",
        optionA: "sweet oil",
        optionB: "crude oil",
        optionC: "white fuel",
        correctAnswer: "crude oil",
      }),
      shuffleOptions({
        question: "Manganese is combined with aluminium to make ______.",
        optionA: "toys",
        optionB: "drink cans",
        optionC: "jewellery",
        correctAnswer: "drink cans",
      }),
      shuffleOptions({
        question: "Coal is found in ______.",
        optionA: "West Bengal and Jharkhand",
        optionB: "Goa and Kerala",
        optionC: "Punjab and Haryana",
        correctAnswer: "West Bengal and Jharkhand",
      }),
      shuffleOptions({
        question: "Copper is a very ______ metal.",
        optionA: "soft",
        optionB: "heavy",
        optionC: "brittle",
        correctAnswer: "soft",
      }),
      shuffleOptions({
        question: "Gold mines in India are located in ______.",
        optionA: "Kolar and Hampi",
        optionB: "Kolar and Andhra Pradesh",
        optionC: "Gujarat and Assam",
        correctAnswer: "Kolar and Andhra Pradesh",
      }),
      shuffleOptions({
        question: "Petroleum is pumped out from deep ______.",
        optionA: "wells",
        optionB: "tunnels",
        optionC: "lakes",
        correctAnswer: "wells",
      }),
      shuffleOptions({
        question: "Iron is used for making bridges, cars and ______.",
        optionA: "books",
        optionB: "railway coaches",
        optionC: "vegetables",
        correctAnswer: "railway coaches",
      }),
      shuffleOptions({
        question: "Mica is mainly found in ______.",
        optionA: "Rajasthan and Jharkhand",
        optionB: "Punjab and Kerala",
        optionC: "Goa and Tamil Nadu",
        correctAnswer: "Rajasthan and Jharkhand",
      }),
      shuffleOptions({
        question: "Solar and wind energy are ______ sources of energy.",
        optionA: "harmful",
        optionB: "renewable",
        optionC: "metallic",
        correctAnswer: "renewable",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Copper was one of the first metals used by human beings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aluminium is a very heavy metal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Manganese is used to make drink cans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Coal is formed from dead plants buried long ago.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Petroleum is used only for cooking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gold is found in almost every state of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mining means taking out mineral ores from the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Iron is used to make utensils, machines and bridges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mica is used in making electrical appliances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Renewable energy sources cause a lot of pollution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
