export const chapter = "Chapter - 11: Rocks and Minerals";
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
        question: "From what are pebbles and soil formed?",
        optionA: "minerals",
        optionB: "rocks",
        optionC: "chalk",
        correctAnswer: "rocks",
      }),
      shuffleOptions({
        question: "Which rock is used for making roofs of houses?",
        optionA: "Slate",
        optionB: "Marble",
        optionC: "Granite",
        correctAnswer: "Slate",
      }),
      shuffleOptions({
        question: "Which mineral is used in talcum powder?",
        optionA: "Mica",
        optionB: "Talc",
        optionC: "Quartz",
        correctAnswer: "Talc",
      }),
      shuffleOptions({
        question: "Which rock is light yellow in colour?",
        optionA: "Limestone",
        optionB: "Granite",
        optionC: "Sandstone",
        correctAnswer: "Limestone",
      }),
      shuffleOptions({
        question: "Which mineral is used to make the dials of watches?",
        optionA: "Graphite",
        optionB: "Quartz",
        optionC: "China clay",
        correctAnswer: "Quartz",
      }),
      shuffleOptions({
        question: "The outer layer of the earth is mostly made up of –",
        optionA: "water",
        optionB: "rocks and minerals",
        optionC: "soil only",
        correctAnswer: "rocks and minerals",
      }),
      shuffleOptions({
        question: "Which mineral is shiny and used in paints and plastics?",
        optionA: "Mica",
        optionB: "Talc",
        optionC: "Coal",
        correctAnswer: "Mica",
      }),
      shuffleOptions({
        question: "Which rock is usually reddish-brown in colour?",
        optionA: "Granite",
        optionB: "Slate",
        optionC: "Marble",
        correctAnswer: "Granite",
      }),
      shuffleOptions({
        question: "Which rock is used for making chalk?",
        optionA: "Limestone",
        optionB: "Coal",
        optionC: "Sandstone",
        correctAnswer: "Limestone",
      }),
      shuffleOptions({
        question: "Which is a black, soft rock?",
        optionA: "Coal",
        optionB: "Slate",
        optionC: "Granite",
        correctAnswer: "Coal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Marble is used to make ______.",
        optionA: "jewellery",
        optionB: "statues",
        optionC: "pencils",
        correctAnswer: "statues",
      }),
      shuffleOptions({
        question: "Slate is ______ in colour.",
        optionA: "grey",
        optionB: "white",
        optionC: "green",
        correctAnswer: "grey",
      }),
      shuffleOptions({
        question: "China clay is used for making ______.",
        optionA: "talcum powder",
        optionB: "pots",
        optionC: "blackboards",
        correctAnswer: "pots",
      }),
      shuffleOptions({
        question: "Granite is used for ______.",
        optionA: "chalk",
        optionB: "floors",
        optionC: "roofs",
        correctAnswer: "floors",
      }),
      shuffleOptions({
        question: "Diamond is used for making ______.",
        optionA: "statues",
        optionB: "jewellery",
        optionC: "slabs",
        correctAnswer: "jewellery",
      }),
      shuffleOptions({
        question: "Sandstone may be ______ in colour.",
        optionA: "yellow",
        optionB: "purple",
        optionC: "silver",
        correctAnswer: "yellow",
      }),
      shuffleOptions({
        question: "Coal is used as ______.",
        optionA: "jewellery",
        optionB: "fuel",
        optionC: "decoration",
        correctAnswer: "fuel",
      }),
      shuffleOptions({
        question: "Graphite is ______ in pencils.",
        optionA: "eraser",
        optionB: "lead",
        optionC: "cover",
        correctAnswer: "lead",
      }),
      shuffleOptions({
        question: "The Red Fort is made of red ______.",
        optionA: "granite",
        optionB: "sandstone",
        optionC: "coal",
        correctAnswer: "sandstone",
      }),
      shuffleOptions({
        question: "Mica is used in ______.",
        optionA: "watches",
        optionB: "plastics",
        optionC: "roofs",
        correctAnswer: "plastics",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Granite breaks easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chalk is made from limestone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Coal is a soft rock.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Slate is black in colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Quartz is used in jewellery.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Marble is used for making forts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mica is shiny and used in paints.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Talc is used to make talcum powder.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Taj Mahal is made of sandstone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Minerals can be of different shapes, colours and sizes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
