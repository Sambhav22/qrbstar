export const chapter = "Chapter - 18: Forms of Water";
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
        question: "What are the three forms of water found in nature?",
        optionA: "Solid, liquid, and gas",
        optionB: "Water, ice, and dew",
        optionC: "Rain, snow, and fog",
        correctAnswer: "Solid, liquid, and gas",
      }),
      shuffleOptions({
        question: "What happens when water is heated?",
        optionA: "It freezes",
        optionB: "It evaporates",
        optionC: "It condenses",
        correctAnswer: "It evaporates",
      }),
      shuffleOptions({
        question: "What is the process called when water changes into vapour?",
        optionA: "Freezing",
        optionB: "Condensation",
        optionC: "Evaporation",
        correctAnswer: "Evaporation",
      }),
      shuffleOptions({
        question: "What is formed when moist air touches a cold surface?",
        optionA: "Dew",
        optionB: "Fog",
        optionC: "Water droplets",
        correctAnswer: "Water droplets",
      }),
      shuffleOptions({
        question: "What is the process by which water vapour turns back into water?",
        optionA: "Condensation",
        optionB: "Evaporation",
        optionC: "Freezing",
        correctAnswer: "Condensation",
      }),
      shuffleOptions({
        question: "Which village in the chapter suffered from dirty water?",
        optionA: "Faijalpura",
        optionB: "Varanasi",
        optionC: "Gwalior",
        correctAnswer: "Faijalpura",
      }),
      shuffleOptions({
        question: "Why did people of Faijalpura fall sick?",
        optionA: "They drank river water polluted by a factory",
        optionB: "They drank salty water",
        optionC: "They did not boil water",
        correctAnswer: "They drank river water polluted by a factory",
      }),
      shuffleOptions({
        question: "What happens when polluted water is used for irrigation?",
        optionA: "Soil becomes fertile",
        optionB: "Soil becomes infertile",
        optionC: "Soil becomes sandy",
        correctAnswer: "Soil becomes infertile",
      }),
      shuffleOptions({
        question: "Who worked to make the Ganga river clean?",
        optionA: "Mahua",
        optionB: "Veer Bhadra Mishra",
        optionC: "Banaras University",
        correctAnswer: "Veer Bhadra Mishra",
      }),
      shuffleOptions({
        question: "What should be done before factory waste is released into rivers?",
        optionA: "It should be treated",
        optionB: "It should be burnt",
        optionC: "It should be mixed with sewage",
        correctAnswer: "It should be treated",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water in gaseous form is called ______.",
        optionA: "dew",
        optionB: "water vapour",
        optionC: "mist",
        correctAnswer: "water vapour",
      }),
      shuffleOptions({
        question: "The process of water changing into vapour is called ______.",
        optionA: "condensation",
        optionB: "evaporation",
        optionC: "freezing",
        correctAnswer: "evaporation",
      }),
      shuffleOptions({
        question: "The process of vapour changing back into water is called ______.",
        optionA: "evaporation",
        optionB: "condensation",
        optionC: "melting",
        correctAnswer: "condensation",
      }),
      shuffleOptions({
        question: "During summer, the rate of evaporation is ______.",
        optionA: "slow",
        optionB: "fast",
        optionC: "medium",
        correctAnswer: "fast",
      }),
      shuffleOptions({
        question: "The drops seen on grass early in the morning are called ______.",
        optionA: "mist",
        optionB: "dew",
        optionC: "rain",
        correctAnswer: "dew",
      }),
      shuffleOptions({
        question: "Polluted water makes the soil ______.",
        optionA: "fertile",
        optionB: "infertile",
        optionC: "dry",
        correctAnswer: "infertile",
      }),
      shuffleOptions({
        question: "Diseases caused by polluted water are called ______ diseases.",
        optionA: "airborne",
        optionB: "waterborne",
        optionC: "soilborne",
        correctAnswer: "waterborne",
      }),
      shuffleOptions({
        question: "On a humid day, evaporation is ______.",
        optionA: "slow",
        optionB: "fast",
        optionC: "very fast",
        correctAnswer: "slow",
      }),
      shuffleOptions({
        question: "The main source of water for Faijalpura village was the ______.",
        optionA: "Mahua river",
        optionB: "Yamuna river",
        optionC: "Ganga river",
        correctAnswer: "Mahua river",
      }),
      shuffleOptions({
        question: "Sewage pipes should be fitted ______ from water bodies.",
        optionA: "near",
        optionB: "far",
        optionC: "under",
        correctAnswer: "far",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ice is the solid form of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water vapour can be seen easily with our eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Condensation happens due to cooling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "During summer, evaporation is slow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Polluted water causes diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The porcelain industry polluted the river in Faijalpura.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aquatic animals are not affected by water pollution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dirty water makes the soil fertile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should avoid throwing garbage into rivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Veer Bhadra Mishra founded the Sankat Mochan Foundation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
