export const chapter = "Chapter - 12: Our House";
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
        question: "What protects us from rain, heat, and cold?",
        optionA: "A park",
        optionB: "A house",
        optionC: "A tree",
        correctAnswer: "A house",
      }),
      shuffleOptions({
        question: "Which type of houses are mostly found in cities?",
        optionA: "Bungalows and flats",
        optionB: "Huts",
        optionC: "Tents",
        correctAnswer: "Bungalows and flats",
      }),
      shuffleOptions({
        question: "Why do hilly houses have sloping roofs?",
        optionA: "To collect water",
        optionB: "To avoid collection of water or snow",
        optionC: "For decoration",
        correctAnswer: "To avoid collection of water or snow",
      }),
      shuffleOptions({
        question: "Houses in flooded areas are made on ______.",
        optionA: "Stone floors",
        optionB: "Raised platforms of wooden poles",
        optionC: "Cement slabs",
        correctAnswer: "Raised platforms of wooden poles",
      }),
      shuffleOptions({
        question: "Houses in hot places have ______ walls.",
        optionA: "Thin",
        optionB: "Thick and plastered with mud",
        optionC: "Glass",
        correctAnswer: "Thick and plastered with mud",
      }),
      shuffleOptions({
        question: "In villages, houses are built using ______.",
        optionA: "Straw, grass, bamboo and cow dung",
        optionB: "Iron and steel",
        optionC: "Bricks and cement",
        correctAnswer: "Straw, grass, bamboo and cow dung",
      }),
      shuffleOptions({
        question: "What are houseboats made of?",
        optionA: "Wood",
        optionB: "Clay",
        optionC: "Iron",
        correctAnswer: "Wood",
      }),
      shuffleOptions({
        question: "What are igloos made of?",
        optionA: "Ice blocks",
        optionB: "Mud",
        optionC: "Bamboo",
        correctAnswer: "Ice blocks",
      }),
      shuffleOptions({
        question: "What do people use to enter stilt houses?",
        optionA: "Rope",
        optionB: "Ladders",
        optionC: "Stairs",
        correctAnswer: "Ladders",
      }),
      shuffleOptions({
        question: "What are caravans?",
        optionA: "Houses on wheels",
        optionB: "Houses on water",
        optionC: "Houses of snow",
        correctAnswer: "Houses on wheels",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Houses in flooded areas are built on ______.",
        optionA: "bricks",
        optionB: "wooden poles",
        optionC: "bamboo mats",
        correctAnswer: "wooden poles",
      }),
      shuffleOptions({
        question: "In cities, people mostly live in ______.",
        optionA: "huts",
        optionB: "bungalows and flats",
        optionC: "tents",
        correctAnswer: "bungalows and flats",
      }),
      shuffleOptions({
        question: "In hot areas, walls are plastered with ______.",
        optionA: "cement",
        optionB: "mud",
        optionC: "stones",
        correctAnswer: "mud",
      }),
      shuffleOptions({
        question: "In hilly regions, roofs are ______.",
        optionA: "flat",
        optionB: "sloping",
        optionC: "round",
        correctAnswer: "sloping",
      }),
      shuffleOptions({
        question: "The houses built on water are called ______.",
        optionA: "caravans",
        optionB: "houseboats",
        optionC: "igloos",
        correctAnswer: "houseboats",
      }),
      shuffleOptions({
        question: "______ live in caravans.",
        optionA: "Farmers",
        optionB: "Gypsies",
        optionC: "Eskimos",
        correctAnswer: "Gypsies",
      }),
      shuffleOptions({
        question: "______ live in igloos.",
        optionA: "Eskimos",
        optionB: "Campers",
        optionC: "Nomads",
        correctAnswer: "Eskimos",
      }),
      shuffleOptions({
        question: "Tents are fixed on the ground using ______.",
        optionA: "nails and cloth",
        optionB: "cement",
        optionC: "wooden planks",
        correctAnswer: "nails and cloth",
      }),
      shuffleOptions({
        question: "People decorate their walls with leaf patterns and ______.",
        optionA: "rangoli",
        optionB: "posters",
        optionC: "stickers",
        correctAnswer: "rangoli",
      }),
      shuffleOptions({
        question: "In cities, people hang ______ to decorate houses.",
        optionA: "wall hangings and portraits",
        optionB: "ropes and papers",
        optionC: "nets and flags",
        correctAnswer: "wall hangings and portraits",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A house keeps us safe from wild animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sloping roofs help water and snow to slide off easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mud walls keep the houses cool in hot areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People in Assam build houses on stilts because of floods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tents are permanent houses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Caravans are used by people who travel often.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Igloos are found in places covered with snow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Houseboats float on land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should throw garbage in a covered dustbin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should allow water to stagnate near our house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
