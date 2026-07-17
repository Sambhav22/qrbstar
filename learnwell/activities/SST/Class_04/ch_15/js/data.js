export const chapter = "Chapter - 15: Human Resources";
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
        question: "Who are considered the most important resource of a country?",
        optionA: "Natural resources",
        optionB: "Human resources",
        optionC: "Mineral resources",
        correctAnswer: "Human resources",
      }),
      shuffleOptions({
        question: "Which group helps bring minerals out from deep inside the earth?",
        optionA: "Miners",
        optionB: "Teachers",
        optionC: "Drivers",
        correctAnswer: "Miners",
      }),
      shuffleOptions({
        question: "Which area often lacks proper housing and cleanliness?",
        optionA: "Parks",
        optionB: "Slum areas",
        optionC: "Stadiums",
        correctAnswer: "Slum areas",
      }),
      shuffleOptions({
        question: "Which continent is mentioned as the most populated?",
        optionA: "Africa",
        optionB: "Asia",
        optionC: "Europe",
        correctAnswer: "Asia",
      }),
      shuffleOptions({
        question: "Who provides education and skills to people?",
        optionA: "Animals",
        optionB: "Friends",
        optionC: "People themselves (teachers/professionals)",
        correctAnswer: "People themselves (teachers/professionals)",
      }),
      shuffleOptions({
        question: "Which service helps people stay healthy and strong?",
        optionA: "Banking service",
        optionB: "Medical and health facilities",
        optionC: "Painting service",
        correctAnswer: "Medical and health facilities",
      }),
      shuffleOptions({
        question: "Whose literacy rate is said to be over 90%?",
        optionA: "India",
        optionB: "Japan and South Korea",
        optionC: "Nepal",
        correctAnswer: "Japan and South Korea",
      }),
      shuffleOptions({
        question: "Which facility did the government improve by laying railway tracks?",
        optionA: "Entertainment",
        optionB: "Transport system",
        optionC: "Shopping areas",
        correctAnswer: "Transport system",
      }),
      shuffleOptions({
        question: "What threatens natural resources due to heavy use?",
        optionA: "Decreasing festivals",
        optionB: "Vacations",
        optionC: "Rapid population growth",
        correctAnswer: "Rapid population growth",
      }),
      shuffleOptions({
        question: "Which programme helps adults and children gain knowledge?",
        optionA: "Sports day",
        optionB: "Education initiatives and schools/colleges setup by government",
        optionC: "Cooking classes",
        correctAnswer: "Education initiatives and schools/colleges setup by government",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "India’s population has increased to more than ______ crore.",
        optionA: "36",
        optionB: "120",
        optionC: "15",
        correctAnswer: "120",
      }),
      shuffleOptions({
        question: "Illiteracy leads to fewer ______ opportunities.",
        optionA: "employment",
        optionB: "sports",
        optionC: "holiday",
        correctAnswer: "employment",
      }),
      shuffleOptions({
        question: "People migrate to cities because they need better ______.",
        optionA: "clothes",
        optionB: "jobs",
        optionC: "games",
        correctAnswer: "jobs",
      }),
      shuffleOptions({
        question: "Good ______ facilities keep people healthy.",
        optionA: "transport",
        optionB: "health",
        optionC: "shopping",
        correctAnswer: "health",
      }),
      shuffleOptions({
        question: "Slum areas often lack proper ______.",
        optionA: "lighting",
        optionB: "housing",
        optionC: "toys",
        correctAnswer: "housing",
      }),
      shuffleOptions({
        question: "The government built many ______ to help people travel easily.",
        optionA: "temples",
        optionB: "roads and railway tracks",
        optionC: "gardens",
        correctAnswer: "roads and railway tracks",
      }),
      shuffleOptions({
        question: "Families with less money sometimes send children to ______.",
        optionA: "work",
        optionB: "swimming",
        optionC: "play",
        correctAnswer: "work",
      }),
      shuffleOptions({
        question: "Lack of ______ leads people to live in crowded places.",
        optionA: "money",
        optionB: "music",
        optionC: "sports",
        correctAnswer: "money",
      }),
      shuffleOptions({
        question: "Rapid population growth causes shortage of basic ______.",
        optionA: "decorations",
        optionB: "necessities",
        optionC: "festivals",
        correctAnswer: "necessities",
      }),
      shuffleOptions({
        question: "______ makes people aware and skilled.",
        optionA: "Education",
        optionB: "Singing",
        optionC: "Shopping",
        correctAnswer: "Education",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Human resources include the skill and efficiency of people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India’s literacy rate is above 90%.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Poverty forces some children to work instead of studying.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India’s population growth rate is 2.5 per cent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Natural resources get reduced due to overuse by the growing population.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People in slum areas enjoy excellent health services.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "India is the second largest country in terms of population.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "After independence, India made progress in many fields like medicine, agriculture and industry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Education helps people get fewer opportunities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The RTE Act gives free education for children aged 6–14 years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
