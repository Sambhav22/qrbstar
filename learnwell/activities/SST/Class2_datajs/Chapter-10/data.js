export const chapter = "Chapter - 10: Our Earth";
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
        question: "What surrounds the earth like an envelope?",
        optionA: "Water",
        optionB: "Clouds",
        optionC: "Atmosphere",
        correctAnswer: "Atmosphere",
      }),
      shuffleOptions({
        question: "What kind of landform is flat and good for farming?",
        optionA: "Plains",
        optionB: "Desert",
        optionC: "Mountain",
        correctAnswer: "Plains",
      }),
      shuffleOptions({
        question: "Which landform is higher than plains but lower than mountains?",
        optionA: "Hills",
        optionB: "Lakes",
        optionC: "Plateaus",
        correctAnswer: "Hills",
      }),
      shuffleOptions({
        question: "Which landform is very dry and sandy?",
        optionA: "Valley",
        optionB: "Desert",
        optionC: "Plateau",
        correctAnswer: "Desert",
      }),
      shuffleOptions({
        question: "Where are tea and coffee plants normally grown?",
        optionA: "Plains",
        optionB: "Hills",
        optionC: "Deserts",
        correctAnswer: "Hills",
      }),
      shuffleOptions({
        question: "What melts on mountain peaks during summer?",
        optionA: "Sand",
        optionB: "Snow",
        optionC: "Leaves",
        correctAnswer: "Snow",
      }),
      shuffleOptions({
        question: "Which landform has a flat top?",
        optionA: "Mountain",
        optionB: "Plateau",
        optionC: "Valley",
        correctAnswer: "Plateau",
      }),
      shuffleOptions({
        question: "Which landform lies between two mountains?",
        optionA: "Sea",
        optionB: "Valley",
        optionC: "Desert",
        correctAnswer: "Valley",
      }),
      shuffleOptions({
        question: "Which type of water body is very big and deep?",
        optionA: "Ocean",
        optionB: "Pond",
        optionC: "Stream",
        correctAnswer: "Ocean",
      }),
      shuffleOptions({
        question: "Which landform receives very little rainfall?",
        optionA: "Desert",
        optionB: "Hills",
        optionC: "Plains",
        correctAnswer: "Desert",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hills are ________ than plains.",
        optionA: "lower",
        optionB: "higher",
        optionC: "colder",
        correctAnswer: "higher",
      }),
      shuffleOptions({
        question: "A plateau has a ________ top.",
        optionA: "round",
        optionB: "pointed",
        optionC: "flat",
        correctAnswer: "flat",
      }),
      shuffleOptions({
        question: "Valleys are covered with thick ________.",
        optionA: "forests",
        optionB: "sand",
        optionC: "ice",
        correctAnswer: "forests",
      }),
      shuffleOptions({
        question: "Mountains are very ________ hills.",
        optionA: "short",
        optionB: "high",
        optionC: "flat",
        correctAnswer: "high",
      }),
      shuffleOptions({
        question: "The desert has very little ________.",
        optionA: "rain",
        optionB: "fog",
        optionC: "snow",
        correctAnswer: "rain",
      }),
      shuffleOptions({
        question: "Rivers often begin when mountain ________ melts.",
        optionA: "soil",
        optionB: "snow",
        optionC: "sand",
        correctAnswer: "snow",
      }),
      shuffleOptions({
        question: "The earth is our ________ planet.",
        optionA: "home",
        optionB: "next",
        optionC: "tiny",
        correctAnswer: "home",
      }),
      shuffleOptions({
        question: "Seas and oceans contain ________ water.",
        optionA: "muddy",
        optionB: "salty",
        optionC: "sweet",
        correctAnswer: "salty",
      }),
      shuffleOptions({
        question: "Plains are ________ parts of land.",
        optionA: "sloping",
        optionB: "flat",
        optionC: "rocky",
        correctAnswer: "flat",
      }),
      shuffleOptions({
        question: "Deserts are usually very ________ during the daytime.",
        optionA: "cold",
        optionB: "hot",
        optionC: "wet",
        correctAnswer: "hot",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mountains are always covered with snow from bottom to top.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Valleys lie between two mountains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deserts receive very heavy rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plains are flat and suitable for farming.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Oceans are small water bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hills are lower than mountains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rivers are larger and deeper than oceans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Snow melts on mountains during summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cactus is a plant that grows in deserts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The atmosphere surrounds the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
