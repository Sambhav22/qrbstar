export const chapter = "Chapter - 10: The Earliest Societies";
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
        question: "Which age is considered the earliest period of human history?",
        optionA: "Bronze Age",
        optionB: "Stone Age",
        optionC: "Iron Age",
        correctAnswer: "Stone Age",
      }),
      shuffleOptions({
        question: "Who first learned to use rough and unpolished stone tools?",
        optionA: "Metal workers",
        optionB: "Early humans of the Palaeolithic Age",
        optionC: "Farmers",
        correctAnswer: "Early humans of the Palaeolithic Age",
      }),
      shuffleOptions({
        question: "Who protected themselves by living in caves and hollow trees?",
        optionA: "Kings",
        optionB: "Early humans",
        optionC: "Traders",
        correctAnswer: "Early humans",
      }),
      shuffleOptions({
        question: "Who used fire to cook food for the first time?",
        optionA: "Medieval man",
        optionB: "Farmers",
        optionC: "Early Stone Age humans",
        correctAnswer: "Early Stone Age humans",
      }),
      shuffleOptions({
        question: "Who created cave paintings showing hunting and dancing scenes?",
        optionA: "Modern artists",
        optionB: "Early humans",
        optionC: "Soldiers",
        correctAnswer: "Early humans",
      }),
      shuffleOptions({
        question: "Who began to make smaller, sharper microlith tools?",
        optionA: "Iron Age people",
        optionB: "Mesolithic people",
        optionC: "Bronze Age people",
        correctAnswer: "Mesolithic people",
      }),
      shuffleOptions({
        question: "Who worshipped natural forces like sun, rain and lightning?",
        optionA: "Scientists",
        optionB: "Early humans",
        optionC: "Explorers",
        correctAnswer: "Early humans",
      }),
      shuffleOptions({
        question: "Who followed animals to learn their food habits and movement?",
        optionA: "Mesolithic hunters",
        optionB: "Farmers",
        optionC: "Priests",
        correctAnswer: "Mesolithic hunters",
      }),
      shuffleOptions({
        question: "Who used animal skins and bark of trees to cover their bodies?",
        optionA: "Tailors",
        optionB: "Early humans",
        optionC: "Travellers",
        correctAnswer: "Early humans",
      }),
      shuffleOptions({
        question: "Who learned about cultivating plants at the end of the Mesolithic Age?",
        optionA: "Metal workers",
        optionB: "Early humans",
        optionC: "Nomads from cities",
        correctAnswer: "Early humans",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early humans lived a ________ life.",
        optionA: "settled",
        optionB: "nomadic",
        optionC: "royal",
        correctAnswer: "nomadic",
      }),
      shuffleOptions({
        question: "Fire made early human food ________.",
        optionA: "harder",
        optionB: "tastier",
        optionC: "uncooked",
        correctAnswer: "tastier",
      }),
      shuffleOptions({
        question: "Early humans sheltered inside ________.",
        optionA: "caves",
        optionB: "schools",
        optionC: "tents",
        correctAnswer: "caves",
      }),
      shuffleOptions({
        question: "The earliest tools were made mainly of ________.",
        optionA: "gold",
        optionB: "stone",
        optionC: "cement",
        correctAnswer: "stone",
      }),
      shuffleOptions({
        question: "The Mesolithic Age tools were called ________.",
        optionA: "microchips",
        optionB: "microliths",
        optionC: "macros",
        correctAnswer: "microliths",
      }),
      shuffleOptions({
        question: "Cave walls had paintings of ________.",
        optionA: "hunting scenes",
        optionB: "cities",
        optionC: "machines",
        correctAnswer: "hunting scenes",
      }),
      shuffleOptions({
        question: "Early humans worshipped forces of ________.",
        optionA: "cinema",
        optionB: "nature",
        optionC: "factories",
        correctAnswer: "nature",
      }),
      shuffleOptions({
        question: "Palaeolithic people depended on ________ for food.",
        optionA: "farming",
        optionB: "hunting and gathering",
        optionC: "cooking",
        correctAnswer: "hunting and gathering",
      }),
      shuffleOptions({
        question: "Mesolithic people began to ________ animals.",
        optionA: "domesticate",
        optionB: "paint",
        optionC: "eat",
        correctAnswer: "domesticate",
      }),
      shuffleOptions({
        question: "Early humans used ________ to protect themselves from cold and heat.",
        optionA: "metal armour",
        optionB: "animal skins",
        optionC: "umbrellas",
        correctAnswer: "animal skins",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early humans used fire to frighten wild animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cave paintings show scenes from the daily life of early humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Microliths were very large stone tools.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Early humans understood the causes of thunder and lightning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mesolithic Age came after the Palaeolithic Age.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early humans wore stitched clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mesolithic people collected wild grains that grew naturally.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fire made food softer and easier to chew.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early humans used caves as safe shelters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early humans lived in permanent houses during the Palaeolithic Age.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
