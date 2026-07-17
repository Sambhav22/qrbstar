export const chapter = "Chapter - 9: Rocks and Minerals";
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
        question: "Which type of rock is formed by the cooling and hardening of molten magma?",
        optionA: "Sedimentary",
        optionB: "Igneous",
        optionC: "Metamorphic",
        correctAnswer: "Igneous",
      }),
      shuffleOptions({
        question: "What is molten rock called when it reaches the Earth’s surface?",
        optionA: "Lava",
        optionB: "Basalt",
        optionC: "Granite",
        correctAnswer: "Lava",
      }),
      shuffleOptions({
        question: "Which igneous rock is black in colour and forms most of the ocean floor?",
        optionA: "Pumice",
        optionB: "Basalt",
        optionC: "Marble",
        correctAnswer: "Basalt",
      }),
      shuffleOptions({
        question: "Which rock is porous, lightweight, and can float on water?",
        optionA: "Shale",
        optionB: "Granite",
        optionC: "Pumice",
        correctAnswer: "Pumice",
      }),
      shuffleOptions({
        question: "Which sedimentary rock contains fossils of ancient plants and animals?",
        optionA: "Limestone",
        optionB: "Slate",
        optionC: "Obsidian",
        correctAnswer: "Limestone",
      }),
      shuffleOptions({
        question: "Which mineral gives limestone its main substance, calcium carbonate?",
        optionA: "Calcite",
        optionB: "Quartz",
        optionC: "Iron",
        correctAnswer: "Calcite",
      }),
      shuffleOptions({
        question: "Which metamorphic rock is formed when shale changes under heat and pressure?",
        optionA: "Marble",
        optionB: "Slate",
        optionC: "Quartzite",
        correctAnswer: "Slate",
      }),
      shuffleOptions({
        question: "Which famous monument is made of white marble?",
        optionA: "India Gate",
        optionB: "Qutub Minar",
        optionC: "Taj Mahal",
        correctAnswer: "Taj Mahal",
      }),
      shuffleOptions({
        question: "Which mixture of metals is used to make brass?",
        optionA: "Copper and Zinc",
        optionB: "Iron and Gold",
        optionC: "Silver and Coal",
        correctAnswer: "Copper and Zinc",
      }),
      shuffleOptions({
        question: "Which non-metal is used to purify water?",
        optionA: "Chlorine",
        optionB: "Carbon",
        optionC: "Sulphur",
        correctAnswer: "Chlorine",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Igneous rocks are formed by the cooling of molten ______.",
        optionA: "rock",
        optionB: "sand",
        optionC: "clay",
        correctAnswer: "rock",
      }),
      shuffleOptions({
        question: "When magma reaches the Earth’s surface, it is called ______.",
        optionA: "lava",
        optionB: "granite",
        optionC: "slate",
        correctAnswer: "lava",
      }),
      shuffleOptions({
        question: "______ is the main substance found in limestone.",
        optionA: "Calcite",
        optionB: "Iron",
        optionC: "Quartz",
        correctAnswer: "Calcite",
      }),
      shuffleOptions({
        question: "______ is used for making blackboards and tiles.",
        optionA: "Slate",
        optionB: "Sandstone",
        optionC: "Marble",
        correctAnswer: "Slate",
      }),
      shuffleOptions({
        question: "A mixture of two or more metals is known as an ______.",
        optionA: "alloy",
        optionB: "ore",
        optionC: "fossil",
        correctAnswer: "alloy",
      }),
      shuffleOptions({
        question: "______ is a soft rock made from grains of sand.",
        optionA: "Sandstone",
        optionB: "Shale",
        optionC: "Granite",
        correctAnswer: "Sandstone",
      }),
      shuffleOptions({
        question: "______ and ______ are valuable non-metallic minerals.",
        optionA: "Coal and Petroleum",
        optionB: "Iron and Copper",
        optionC: "Gold and Silver",
        correctAnswer: "Coal and Petroleum",
      }),
      shuffleOptions({
        question: "______ is a very hard rock formed from sandstone.",
        optionA: "Quartzite",
        optionB: "Gneiss",
        optionC: "Marble",
        correctAnswer: "Quartzite",
      }),
      shuffleOptions({
        question: "The substances that make up rocks are called ______.",
        optionA: "minerals",
        optionB: "ores",
        optionC: "sediments",
        correctAnswer: "minerals",
      }),
      shuffleOptions({
        question: "______ is formed when lava cools quickly above the ground.",
        optionA: "Obsidian",
        optionB: "Basalt",
        optionC: "Marble",
        correctAnswer: "Obsidian",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Granite is a type of igneous rock.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pumice is a heavy rock that sinks in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sedimentary rocks are formed from the cooling of magma.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fossils are found only in sedimentary rocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Marble is formed from limestone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gneiss is formed from granite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Calcite is the main component of marble.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Iron and gold are non-metallic minerals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Coal and petroleum are examples of non-metallic minerals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Obsidian has a glassy and shiny appearance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
