export const chapter = "Chapter - 4: The Atmosphere";
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
        question: "Which gas plays a major role in regulating the Earth’s temperature?",
        optionA: "Nitrogen",
        optionB: "Carbon dioxide",
        optionC: "Argon",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "Which layer of the atmosphere is known for burning most meteoroids due to friction?",
        optionA: "Mesosphere",
        optionB: "Stratosphere",
        optionC: "Thermosphere",
        correctAnswer: "Mesosphere",
      }),
      shuffleOptions({
        question: "Which zone receives extremely slanting rays throughout the year?",
        optionA: "Temperate Zone",
        optionB: "Frigid Zone",
        optionC: "Torrid Zone",
        correctAnswer: "Frigid Zone",
      }),
      shuffleOptions({
        question: "Which wind carries warm and dry air that melts snow in North America?",
        optionA: "Foehn",
        optionB: "Chinook",
        optionC: "Loo",
        correctAnswer: "Chinook",
      }),
      shuffleOptions({
        question: "Which instrument is used to measure wind direction?",
        optionA: "Barometer",
        optionB: "Wind vane",
        optionC: "Anemometer",
        correctAnswer: "Wind vane",
      }),
      shuffleOptions({
        question: "Which type of rainfall is common in tropical regions due to rapid rising and cooling of hot air?",
        optionA: "Cyclonic",
        optionB: "Convectional",
        optionC: "Relief",
        correctAnswer: "Convectional",
      }),
      shuffleOptions({
        question: "In which layer is ozone mainly concentrated?",
        optionA: "Stratosphere",
        optionB: "Troposphere",
        optionC: "Exosphere",
        correctAnswer: "Stratosphere",
      }),
      shuffleOptions({
        question: "Which type of wind blows from high-pressure to low-pressure areas during the day along coastal regions?",
        optionA: "Land breeze",
        optionB: "Sea breeze",
        optionC: "Polar wind",
        correctAnswer: "Sea breeze",
      }),
      shuffleOptions({
        question: "Which local wind blows over the Northern Plains of India during summer and is very hot and dry?",
        optionA: "Chinook",
        optionB: "Loo",
        optionC: "Harmattan",
        correctAnswer: "Loo",
      }),
      shuffleOptions({
        question: "Which factor causes cities to remain warmer than nearby villages?",
        optionA: "More trees",
        optionB: "Moist soil",
        optionC: "Concrete surfaces absorbing heat",
        correctAnswer: "Concrete surfaces absorbing heat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Moist air is ________ than dry air.",
        optionA: "heavier",
        optionB: "lighter",
        optionC: "colder",
        correctAnswer: "lighter",
      }),
      shuffleOptions({
        question: "The layer that reflects radio waves back to Earth is the ________.",
        optionA: "exosphere",
        optionB: "ionosphere",
        optionC: "mesosphere",
        correctAnswer: "ionosphere",
      }),
      shuffleOptions({
        question: "The upper boundary of the mesosphere is called the ________.",
        optionA: "stratopause",
        optionB: "tropopause",
        optionC: "mesopause",
        correctAnswer: "mesopause",
      }),
      shuffleOptions({
        question: "The zone that receives vertical sunrays is the ________.",
        optionA: "frigid zone",
        optionB: "torrid zone",
        optionC: "temperate zone",
        correctAnswer: "torrid zone",
      }),
      shuffleOptions({
        question: "The speed of wind is measured using an ________.",
        optionA: "anemometer",
        optionB: "hygrometer",
        optionC: "rain gauge",
        correctAnswer: "anemometer",
      }),
      shuffleOptions({
        question: "The movement of air caused by differences in pressure is called ________.",
        optionA: "rainfall",
        optionB: "wind",
        optionC: "condensation",
        correctAnswer: "wind",
      }),
      shuffleOptions({
        question: "When warm air rises and cools, clouds form due to the process of ________.",
        optionA: "evaporation",
        optionB: "condensation",
        optionC: "reflection",
        correctAnswer: "condensation",
      }),
      shuffleOptions({
        question: "Convectional rainfall is usually accompanied by ________.",
        optionA: "thunder",
        optionB: "snowfall",
        optionC: "fog",
        correctAnswer: "thunder",
      }),
      shuffleOptions({
        question: "The Sun’s incoming energy received by the Earth is called ________.",
        optionA: "pressure",
        optionB: "insolation",
        optionC: "humidity",
        correctAnswer: "insolation",
      }),
      shuffleOptions({
        question: "Relief rainfall occurs on the ________ side of mountains.",
        optionA: "leeward",
        optionB: "windward",
        optionC: "northern",
        correctAnswer: "windward",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water vapour in the atmosphere can vary from 0% to 4%.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The stratosphere is free from clouds and ideal for flying aircraft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polar winds are warm and moist.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Convectional rainfall is common in equatorial regions and occurs suddenly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Atmospheric pressure increases with height.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The torrid zone receives slanting rays throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ionosphere contains electrically charged particles called ions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The land breeze blows from sea to land during daytime.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cyclonic rainfall occurs when warm and cold air masses meet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cities heat up faster than villages because they have more vegetation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
