export const chapter = "Chapter - 16: Air";
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
        question: "Which gas makes up the largest portion of the air?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Nitrogen",
      }),
      shuffleOptions({
        question: "What is the mixture of gases surrounding the Earth called?",
        optionA: "Air",
        optionB: "Atmosphere",
        optionC: "Wind",
        correctAnswer: "Atmosphere",
      }),
      shuffleOptions({
        question: "Which device is used to measure the direction of wind?",
        optionA: "Weather cock",
        optionB: "Anemometer",
        optionC: "Thermometer",
        correctAnswer: "Weather cock",
      }),
      shuffleOptions({
        question: "Which layer contains ozone gas?",
        optionA: "Stratosphere",
        optionB: "Mesosphere",
        optionC: "Troposphere",
        correctAnswer: "Stratosphere",
      }),
      shuffleOptions({
        question: "Which gas helps plants in making food?",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "What is the movement of air called?",
        optionA: "Water",
        optionB: "Wind",
        optionC: "Smoke",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "Which gas is released when we breathe out?",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "What is the gas that supports burning?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Hydrogen",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "What type of air do we find on dusty roads?",
        optionA: "Clean air",
        optionB: "Polluted air",
        optionC: "Moist air",
        correctAnswer: "Polluted air",
      }),
      shuffleOptions({
        question: "What protects us from harmful sun rays?",
        optionA: "Ozone layer",
        optionB: "Carbon dioxide",
        optionC: "Clouds",
        correctAnswer: "Ozone layer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air is a ______ of gases.",
        optionA: "mixture",
        optionB: "compound",
        optionC: "element",
        correctAnswer: "mixture",
      }),
      shuffleOptions({
        question: "The moving air is called ______.",
        optionA: "wind",
        optionB: "dust",
        optionC: "water",
        correctAnswer: "wind",
      }),
      shuffleOptions({
        question: "The air around Earth forms the ______.",
        optionA: "atmosphere",
        optionB: "troposphere",
        optionC: "wind layer",
        correctAnswer: "atmosphere",
      }),
      shuffleOptions({
        question: "______ helps in burning.",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "______ makes up about 78% of air.",
        optionA: "Nitrogen",
        optionB: "Oxygen",
        optionC: "Carbon dioxide",
        correctAnswer: "Nitrogen",
      }),
      shuffleOptions({
        question: "______ helps in seed dispersal and pollination.",
        optionA: "Wind",
        optionB: "Rain",
        optionC: "Dust",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "The gas that traps heat on Earth is ______.",
        optionA: "Carbon dioxide",
        optionB: "Oxygen",
        optionC: "Helium",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "The gas released by factories and vehicles is ______.",
        optionA: "Smoke",
        optionB: "Nitrogen",
        optionC: "Helium",
        correctAnswer: "Smoke",
      }),
      shuffleOptions({
        question: "______ is used to measure the speed of wind.",
        optionA: "Anemometer",
        optionB: "Thermometer",
        optionC: "Barometer",
        correctAnswer: "Anemometer",
      }),
      shuffleOptions({
        question: "______ is the lowermost layer of the atmosphere.",
        optionA: "Troposphere",
        optionB: "Stratosphere",
        optionC: "Mesosphere",
        correctAnswer: "Troposphere",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air is colourless and tasteless.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air is made up of only one gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nitrogen supports burning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oxygen is necessary for living beings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ozone layer is found in the troposphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Carbon dioxide helps plants make food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Smoke makes the air cleaner.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The presence of water vapour in air is called humidity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air occupies no space.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Breathing through the mouth filters dust from the air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
