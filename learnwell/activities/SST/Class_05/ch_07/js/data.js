export const chapter = "Chapter - 7: Saudi Arabia : The Land of Sand";
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
        question: "Which sea lies to the west of Saudi Arabia?",
        optionA: "Mediterranean Sea",
        optionB: "Red Sea",
        optionC: "Caspian Sea",
        correctAnswer: "Red Sea",
      }),
      shuffleOptions({
        question: "What do sudden strong winds carrying huge masses of sand cause?",
        optionA: "Floods",
        optionB: "Dust storms",
        optionC: "Snowfall",
        correctAnswer: "Dust storms",
      }),
      shuffleOptions({
        question: "Which plant is commonly found near oases in Saudi Arabia?",
        optionA: "Pine",
        optionB: "Oak",
        optionC: "Date palm",
        correctAnswer: "Date palm",
      }),
      shuffleOptions({
        question: "Which animal is known as the “ship of the desert”?",
        optionA: "Horse",
        optionB: "Camel",
        optionC: "Donkey",
        correctAnswer: "Camel",
      }),
      shuffleOptions({
        question: "What do Bedouins generally travel in while moving from place to place?",
        optionA: "Caravans",
        optionB: "Buses",
        optionC: "Boats",
        correctAnswer: "Caravans",
      }),
      shuffleOptions({
        question: "Which type of landform is created when winds drop sand in one place for a long time?",
        optionA: "Cliff",
        optionB: "Sand dune",
        optionC: "Canyon",
        correctAnswer: "Sand dune",
      }),
      shuffleOptions({
        question: "Which city in Saudi Arabia is a major seaport along the Red Sea?",
        optionA: "Jeddah",
        optionB: "Medina",
        optionC: "Riyadh",
        correctAnswer: "Jeddah",
      }),
      shuffleOptions({
        question: "Which clothing item is worn by Arab men?",
        optionA: "Saree",
        optionB: "Thawb",
        optionC: "Tunic",
        correctAnswer: "Thawb",
      }),
      shuffleOptions({
        question: "What is the official language of Saudi Arabia?",
        optionA: "Persian",
        optionB: "Arabic",
        optionC: "Hebrew",
        correctAnswer: "Arabic",
      }),
      shuffleOptions({
        question: "Which valley-like feature is dry most of the year but sometimes filled with rainwater?",
        optionA: "Glacier",
        optionB: "Wadi",
        optionC: "Delta",
        correctAnswer: "Wadi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Saudi Arabia is located on the ______ Peninsula.",
        optionA: "Arabian",
        optionB: "Indian",
        optionC: "Balkan",
        correctAnswer: "Arabian",
      }),
      shuffleOptions({
        question: "The sand becomes very hot during the day when the ______ shines.",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Stars",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "Oases are important because underground ______ comes to the surface there.",
        optionA: "oil",
        optionB: "soil",
        optionC: "water",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Long-rooted plants in the desert absorb ______ from deep below the ground.",
        optionA: "gas",
        optionB: "water",
        optionC: "salt",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "People in Saudi Arabia wear long, ______ clothes to protect themselves from extreme temperatures.",
        optionA: "tight",
        optionB: "loose",
        optionC: "short",
        correctAnswer: "loose",
      }),
      shuffleOptions({
        question: "Bedouins search for fresh ______ for their animals.",
        optionA: "pasture",
        optionB: "stone",
        optionC: "coal",
        correctAnswer: "pasture",
      }),
      shuffleOptions({
        question: "The tribe leader of Bedouins is known as the ______.",
        optionA: "captain",
        optionB: "sheikh",
        optionC: "general",
        correctAnswer: "sheikh",
      }),
      shuffleOptions({
        question: "The currency used in Saudi Arabia is the ______.",
        optionA: "Riyal",
        optionB: "Dinar",
        optionC: "Dirham",
        correctAnswer: "Riyal",
      }),
      shuffleOptions({
        question: "Mecca and Medina are considered ______ cities by Muslims.",
        optionA: "tourist",
        optionB: "holy",
        optionC: "industrial",
        correctAnswer: "holy",
      }),
      shuffleOptions({
        question: "Saudi Arabia exports large quantities of ______ to different parts of the world.",
        optionA: "coal",
        optionB: "petroleum",
        optionC: "timber",
        correctAnswer: "petroleum",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nights in the desert of Saudi Arabia are cool because sand loses heat quickly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Saudi Arabia receives plenty of rainfall throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cactus and thorny bushes grow easily in the harsh desert climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Camels cannot survive without water for many days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jeddah is located on the Red Sea coast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Arabs mostly speak the Persian language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Date palms are only found in cold regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dust storms can form sand dunes over time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mecca is the birthplace of Prophet Muhammad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Petroleum discovery did not affect the lifestyle of people in Saudi Arabia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
