export const chapter = "Chapter - 5: The Hydrosphere";
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
        question: "Which form of water covers the largest part of the Earth’s surface?",
        optionA: "Freshwater",
        optionB: "Saline water",
        optionC: "Groundwater",
        correctAnswer: "Saline water",
      }),
      shuffleOptions({
        question: "Which process helps water vapour rise from oceans into the atmosphere?",
        optionA: "Condensation",
        optionB: "Precipitation",
        optionC: "Evaporation",
        correctAnswer: "Evaporation",
      }),
      shuffleOptions({
        question: "Which water body is known for having the highest salinity?",
        optionA: "Red Sea",
        optionB: "Dead Sea",
        optionC: "Baltic Sea",
        correctAnswer: "Dead Sea",
      }),
      shuffleOptions({
        question: "Which factor mainly increases salinity in tropical oceans?",
        optionA: "Low temperature",
        optionB: "High evaporation rate",
        optionC: "Heavy rainfall",
        correctAnswer: "High evaporation rate",
      }),
      shuffleOptions({
        question: "What is the highest point of a sea wave called?",
        optionA: "Trough",
        optionB: "Crest",
        optionC: "Ridge",
        correctAnswer: "Crest",
      }),
      shuffleOptions({
        question: "Which natural event can trigger giant tsunami waves?",
        optionA: "Drought",
        optionB: "Earthquake under the sea",
        optionC: "Sandstorm",
        correctAnswer: "Earthquake under the sea",
      }),
      shuffleOptions({
        question: "Which current carries warm water from the Equator towards the poles?",
        optionA: "Kuroshio Current",
        optionB: "Labrador Current",
        optionC: "California Current",
        correctAnswer: "Kuroshio Current",
      }),
      shuffleOptions({
        question: "Which meeting of currents can create foggy weather?",
        optionA: "Hot–hot currents",
        optionB: "Warm–cold currents meeting each other",
        optionC: "Cold–cold currents",
        correctAnswer: "Warm–cold currents meeting each other",
      }),
      shuffleOptions({
        question: "Which phenomenon allows ships to enter harbours more easily?",
        optionA: "Low tide",
        optionB: "High tide",
        optionC: "Rainfall",
        correctAnswer: "High tide",
      }),
      shuffleOptions({
        question: "Which process drops water back on land as rain or snow?",
        optionA: "Evaporation",
        optionB: "Condensation",
        optionC: "Precipitation",
        correctAnswer: "Precipitation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The continuous movement of water on Earth is called the ______.",
        optionA: "hydrological cycle",
        optionB: "erosion cycle",
        optionC: "magnetic cycle",
        correctAnswer: "hydrological cycle",
      }),
      shuffleOptions({
        question: "Ocean water becomes salty because rivers bring dissolved ______.",
        optionA: "oxygen",
        optionB: "minerals and salts",
        optionC: "gases",
        correctAnswer: "minerals and salts",
      }),
      shuffleOptions({
        question: "The Arctic Ocean has low salinity due to the addition of ______.",
        optionA: "volcanic ash",
        optionB: "freshwater from rivers",
        optionC: "sand",
        correctAnswer: "freshwater from rivers",
      }),
      shuffleOptions({
        question: "Waves are created mainly due to the action of ______.",
        optionA: "moonlight",
        optionB: "soil erosion",
        optionC: "strong winds",
        correctAnswer: "strong winds",
      }),
      shuffleOptions({
        question: "Water vapour changes into water droplets through ______.",
        optionA: "melting",
        optionB: "condensation",
        optionC: "freezing",
        correctAnswer: "condensation",
      }),
      shuffleOptions({
        question: "Warm currents originate near the ______.",
        optionA: "poles",
        optionB: "equator",
        optionC: "mountains",
        correctAnswer: "equator",
      }),
      shuffleOptions({
        question: "Tsunami waves can rise very high because of sudden shifts in the ______.",
        optionA: "sea floor",
        optionB: "atmosphere",
        optionC: "river bed",
        correctAnswer: "sea floor",
      }),
      shuffleOptions({
        question: "The Dead Sea has very high salinity due to high ______.",
        optionA: "rainfall",
        optionB: "evaporation rate",
        optionC: "snowfall",
        correctAnswer: "evaporation rate",
      }),
      shuffleOptions({
        question: "When warm and cold currents meet, thick ______ often forms.",
        optionA: "smoke",
        optionB: "fog",
        optionC: "dust",
        correctAnswer: "fog",
      }),
      shuffleOptions({
        question: "Only about ______ of Earth’s water is fit for human use.",
        optionA: "1%",
        optionB: "10%",
        optionC: "25%",
        correctAnswer: "1%",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water is found on Earth in solid, liquid and gaseous forms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Freshwater makes up most of the water found in oceans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The water cycle is responsible for renewing Earth’s freshwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Waves occur only on the surface of the ocean, not in deep water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tsunami waves move slowly across the ocean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When the sun and moon are in a straight line, spring tides occur.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cold currents increase the temperature of coastal regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The meeting of warm and cold currents supports the growth of fish-food like phytoplankton.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "High tides help ships enter and leave harbours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Warm currents are denser than cold currents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
