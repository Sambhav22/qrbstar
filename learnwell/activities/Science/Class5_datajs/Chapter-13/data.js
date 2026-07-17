export const chapter = "Chapter - 13: Natural Disasters";
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
        question: "Which of the following is an opening in the earth’s crust through which magma comes out?",
        optionA: "Crack",
        optionB: "Vent",
        optionC: "Crater",
        correctAnswer: "Vent",
      }),
      shuffleOptions({
        question: "What is the molten magma that reaches the earth’s surface called?",
        optionA: "Rock",
        optionB: "Lava",
        optionC: "Sand",
        correctAnswer: "Lava",
      }),
      shuffleOptions({
        question: "Which volcano may erupt anytime or has erupted recently?",
        optionA: "Dormant volcano",
        optionB: "Active volcano",
        optionC: "Extinct volcano",
        correctAnswer: "Active volcano",
      }),
      shuffleOptions({
        question: "Which instrument is used to detect earthquakes?",
        optionA: "Barometer",
        optionB: "Seismograph",
        optionC: "Telescope",
        correctAnswer: "Seismograph",
      }),
      shuffleOptions({
        question: "Who invented the Richter scale for measuring earthquakes?",
        optionA: "Charles Richter",
        optionB: "Alfred Wegener",
        optionC: "Galileo",
        correctAnswer: "Charles Richter",
      }),
      shuffleOptions({
        question: "Which country faced a 7.1 Richter scale earthquake in 2001?",
        optionA: "Japan",
        optionB: "India (Gujarat)",
        optionC: "Indonesia",
        correctAnswer: "India (Gujarat)",
      }),
      shuffleOptions({
        question: "Which of these disasters is caused by continuous heavy rainfall?",
        optionA: "Flood",
        optionB: "Drought",
        optionC: "Earthquake",
        correctAnswer: "Flood",
      }),
      shuffleOptions({
        question: "Which storm causes floods in coastal areas?",
        optionA: "Cyclone",
        optionB: "Dust storm",
        optionC: "Tornado",
        correctAnswer: "Cyclone",
      }),
      shuffleOptions({
        question: "What leads to drying of reservoirs and crop failure?",
        optionA: "Flood",
        optionB: "Drought",
        optionC: "Earthquake",
        correctAnswer: "Drought",
      }),
      shuffleOptions({
        question: "What happens due to lack of proper sanitation after floods?",
        optionA: "Increase in rainfall",
        optionB: "Outbreak of water-borne diseases",
        optionC: "More plantations",
        correctAnswer: "Outbreak of water-borne diseases",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sudden shaking of the earth’s surface is called an ______.",
        optionA: "Landslide",
        optionB: "Earthquake",
        optionC: "Tsunami",
        correctAnswer: "Earthquake",
      }),
      shuffleOptions({
        question: "Magma that comes out on the surface is called ______.",
        optionA: "Rock",
        optionB: "Lava",
        optionC: "Soil",
        correctAnswer: "Lava",
      }),
      shuffleOptions({
        question: "The passage through which lava travels is called a ______.",
        optionA: "Vent",
        optionB: "Crack",
        optionC: "Tunnel",
        correctAnswer: "Vent",
      }),
      shuffleOptions({
        question: "Volcanoes that have not erupted for a long time but may erupt in future are called ______ volcanoes.",
        optionA: "Active",
        optionB: "Dormant",
        optionC: "Extinct",
        correctAnswer: "Dormant",
      }),
      shuffleOptions({
        question: "The volcano that has not erupted for thousands of years is called ______.",
        optionA: "Dormant",
        optionB: "Extinct",
        optionC: "Active",
        correctAnswer: "Extinct",
      }),
      shuffleOptions({
        question: "The strength of an earthquake is measured on the ______ scale.",
        optionA: "Celsius",
        optionB: "Richter",
        optionC: "Kelvin",
        correctAnswer: "Richter",
      }),
      shuffleOptions({
        question: "Earthquakes are caused by the movement of large rock ______.",
        optionA: "Plates",
        optionB: "Layers",
        optionC: "Mountains",
        correctAnswer: "Plates",
      }),
      shuffleOptions({
        question: "Continuous heavy rainfall may lead to ______.",
        optionA: "Flood",
        optionB: "Drought",
        optionC: "Earthquake",
        correctAnswer: "Flood",
      }),
      shuffleOptions({
        question: "Lack of rainfall for a long time causes ______.",
        optionA: "Flood",
        optionB: "Drought",
        optionC: "Cyclone",
        correctAnswer: "Drought",
      }),
      shuffleOptions({
        question: "Drought causes a fall in the level of the ______.",
        optionA: "Ocean",
        optionB: "Water table",
        optionC: "Rain clouds",
        correctAnswer: "Water table",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A volcano allows magma to reach the earth’s surface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lava is the name for molten rocks under the earth’s crust.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Active volcanoes may erupt at any time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dormant volcanoes have erupted recently.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Earthquakes occur due to the movement of large plates in the earth’s crust.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Richter scale is used to measure the amount of rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Seismograph is used to detect earthquakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Floods are caused by heavy and continuous rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Drought is caused by a lack of rainfall for a long period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Natural disasters can occur anywhere and anytime in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
