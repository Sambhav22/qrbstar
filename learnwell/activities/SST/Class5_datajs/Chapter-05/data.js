export const chapter = "Chapter - 5: Congo : The Land of Forests";
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
        question: "Which river is known as the “Highway of Central Africa”?",
        optionA: "Nile",
        optionB: "Congo",
        optionC: "Niger",
        correctAnswer: "Congo",
      }),
      shuffleOptions({
        question: "Which African country has one-third of its area in the Northern Hemisphere and two- thirds in the Southern Hemisphere?",
        optionA: "Kenya",
        optionB: "Democratic Republic of Congo",
        optionC: "Ethiopia",
        correctAnswer: "Democratic Republic of Congo",
      }),
      shuffleOptions({
        question: "Which mountain range in Congo contains eight volcanic peaks?",
        optionA: "Ruwenzori",
        optionB: "Atlas",
        optionC: "Virunga range",
        correctAnswer: "Virunga range",
      }),
      shuffleOptions({
        question: "Which tribe in Congo is known for living by hunting and collecting fruits and roots?",
        optionA: "Tutsis",
        optionB: "Pygmies",
        optionC: "Nilotes",
        correctAnswer: "Pygmies",
      }),
      shuffleOptions({
        question: "Which mineral is Congo the world’s largest producer of?",
        optionA: "Iron ore",
        optionB: "Cobalt ore",
        optionC: "Bauxite",
        correctAnswer: "Cobalt ore",
      }),
      shuffleOptions({
        question: "Which lake is a major tourist attraction in Congo?",
        optionA: "Lake Kivu",
        optionB: "Lake Chad",
        optionC: "Lake Malawi",
        correctAnswer: "Lake Kivu",
      }),
      shuffleOptions({
        question: "Which trees in Congo are used as raw materials in many industries?",
        optionA: "Pine and fir",
        optionB: "Mahogany and teak",
        optionC: "Sandalwood and neem",
        correctAnswer: "Mahogany and teak",
      }),
      shuffleOptions({
        question: "Which animals are commonly found in the canopy of Congo rainforests?",
        optionA: "Polar bears",
        optionB: "Camels",
        optionC: "Sloths and monkeys",
        correctAnswer: "Sloths and monkeys",
      }),
      shuffleOptions({
        question: "What natural feature prevents sunlight from reaching the forest floor?",
        optionA: "Grass",
        optionB: "Canopy of tall trees",
        optionC: "Snow cover",
        correctAnswer: "Canopy of tall trees",
      }),
      shuffleOptions({
        question: "Which city is the biggest seaport of Congo?",
        optionA: "Lubumbashi",
        optionB: "Matadi",
        optionC: "Kisangani",
        correctAnswer: "Matadi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Congo remains hot and ______ throughout the year.",
        optionA: "dry",
        optionB: "humid",
        optionC: "cold",
        correctAnswer: "humid",
      }),
      shuffleOptions({
        question: "The forests of Congo are known for their thick ______ that block sunlight.",
        optionA: "roots",
        optionB: "canopy",
        optionC: "stems",
        correctAnswer: "canopy",
      }),
      shuffleOptions({
        question: "Cassava is a ______ crop that is ground into flour.",
        optionA: "root",
        optionB: "flower",
        optionC: "leaf",
        correctAnswer: "root",
      }),
      shuffleOptions({
        question: "Congo receives more than ______ of rainfall annually.",
        optionA: "50 cm",
        optionB: "200 cm",
        optionC: "20 cm",
        correctAnswer: "200 cm",
      }),
      shuffleOptions({
        question: "The ______ tribe is known to be tall and sturdy.",
        optionA: "Bantu",
        optionB: "Pygmy",
        optionC: "Tutsi",
        correctAnswer: "Bantu",
      }),
      shuffleOptions({
        question: "Rivers in Congo are mainly used for ______.",
        optionA: "farming",
        optionB: "travelling",
        optionC: "mining",
        correctAnswer: "travelling",
      }),
      shuffleOptions({
        question: "The rainforests of Congo are rich in ______ species.",
        optionA: "desert",
        optionB: "endemic",
        optionC: "aquatic",
        correctAnswer: "endemic",
      }),
      shuffleOptions({
        question: "______ and Nyamuragira are the active volcanoes in Congo.",
        optionA: "Kilimanjaro",
        optionB: "Nyiragongo",
        optionC: "Cameroon",
        correctAnswer: "Nyiragongo",
      }),
      shuffleOptions({
        question: "Congo is located in the ______ region of Africa.",
        optionA: "equatorial",
        optionB: "temperate",
        optionC: "tundra",
        correctAnswer: "equatorial",
      }),
      shuffleOptions({
        question: "Rubber, teak and bamboo grow in the ______ forests of Congo.",
        optionA: "deciduous",
        optionB: "evergreen",
        optionC: "alpine",
        correctAnswer: "evergreen",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Congo receives heavy rainfall with thunder almost every afternoon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Congo is the second-largest country in Africa after Algeria.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Congo River is not suitable for navigation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Pygmies are tall and sturdy people of Congo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Congo’s forests contain the largest species of snakes like anacondas and pythons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shifting agriculture is commonly practised in Congo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Congo has well-developed roads throughout the country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Congo’s forests are also home to colourful birds like macaws and toucans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Matadi is the largest city and the capital of Congo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Heavy forests make many places difficult to access by road in Congo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
