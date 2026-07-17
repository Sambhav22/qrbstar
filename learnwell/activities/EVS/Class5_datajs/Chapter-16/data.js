export const chapter = "Chapter - 16: Times of Emergency";
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
        question: "What kind of events cause sudden and widespread damage to life and property?",
        optionA: "Disasters",
        optionB: "Celebrations",
        optionC: "Inventions",
        correctAnswer: "Disasters",
      }),
      shuffleOptions({
        question: "Which natural disaster is caused by heavy rainfall leading rivers to overflow their banks?",
        optionA: "Cyclone",
        optionB: "Flood",
        optionC: "Earthquake",
        correctAnswer: "Flood",
      }),
      shuffleOptions({
        question: "What type of storm is a cyclone?",
        optionA: "Rotating windstorm",
        optionB: "Dust storm",
        optionC: "Sand storm",
        correctAnswer: "Rotating windstorm",
      }),
      shuffleOptions({
        question: "What instrument is used to measure the magnitude of an earthquake?",
        optionA: "Barometer",
        optionB: "Richter scale",
        optionC: "Rain gauge",
        correctAnswer: "Richter scale",
      }),
      shuffleOptions({
        question: "What is a volcano?",
        optionA: "A vent through which lava flows out",
        optionB: "A frozen mountain",
        optionC: "A water reservoir",
        correctAnswer: "A vent through which lava flows out",
      }),
      shuffleOptions({
        question: "What happens when lightning strikes the earth violently?",
        optionA: "It causes fires and burns people",
        optionB: "It cools the weather",
        optionC: "It melts glaciers",
        correctAnswer: "It causes fires and burns people",
      }),
      shuffleOptions({
        question: "Which organisation helps by rescuing people and providing food packets during disasters?",
        optionA: "Defence forces",
        optionB: "Film association",
        optionC: "Sports council",
        correctAnswer: "Defence forces",
      }),
      shuffleOptions({
        question: "Which group maintains law and order during emergencies?",
        optionA: "Police",
        optionB: "Farmers",
        optionC: "Shopkeepers",
        correctAnswer: "Police",
      }),
      shuffleOptions({
        question: "What do hospitals do during disasters?",
        optionA: "Treat the injured and control diseases",
        optionB: "Build new roads",
        optionC: "Arrange entertainment",
        correctAnswer: "Treat the injured and control diseases",
      }),
      shuffleOptions({
        question: "Which of these is a non-governmental organisation?",
        optionA: "Indian Red Cross Society",
        optionB: "Parliament",
        optionC: "Fire station",
        correctAnswer: "Indian Red Cross Society",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sudden shaking of the earth is called an ________.",
        optionA: "Earthquake",
        optionB: "Cyclone",
        optionC: "Flood",
        correctAnswer: "Earthquake",
      }),
      shuffleOptions({
        question: "The ________ measures the magnitude of an earthquake.",
        optionA: "Richter scale",
        optionB: "Thermometer",
        optionC: "Compass",
        correctAnswer: "Richter scale",
      }),
      shuffleOptions({
        question: "Floods disturb the normal life of people by damaging ________.",
        optionA: "Transport and communication",
        optionB: "Playgrounds",
        optionC: "Hills",
        correctAnswer: "Transport and communication",
      }),
      shuffleOptions({
        question: "Cyclones uproot trees and damage ________.",
        optionA: "Crops",
        optionB: "Houses",
        optionC: "Glaciers",
        correctAnswer: "Crops",
      }),
      shuffleOptions({
        question: "The lava flowing from a volcano contains ________.",
        optionA: "Rocks, steam and gases",
        optionB: "Dust",
        optionC: "Water",
        correctAnswer: "Rocks, steam and gases",
      }),
      shuffleOptions({
        question: "Lightning is a kind of ________ charge in the sky.",
        optionA: "Electric",
        optionB: "Magnetic",
        optionC: "Heat",
        correctAnswer: "Electric",
      }),
      shuffleOptions({
        question: "During disasters, the ________ helps to extinguish fires.",
        optionA: "Fire station",
        optionB: "School",
        optionC: "Post office",
        correctAnswer: "Fire station",
      }),
      shuffleOptions({
        question: "NGOs collect ________ and distribute them to affected people.",
        optionA: "Donations and essential commodities",
        optionB: "Homework",
        optionC: "Uniforms",
        correctAnswer: "Donations and essential commodities",
      }),
      shuffleOptions({
        question: "Disasters often force people to ________ to other towns.",
        optionA: "Migrate",
        optionB: "Relax",
        optionC: "Celebrate",
        correctAnswer: "Migrate",
      }),
      shuffleOptions({
        question: "A cyclone usually affects the ________ areas.",
        optionA: "Coastal",
        optionB: "Desert",
        optionC: "Hilly",
        correctAnswer: "Coastal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Floods can be caused by damage to a dam or water reservoir.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cyclones never cause any loss to crops or property.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A high-magnitude earthquake can destroy buildings and kill living beings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lightning carries enough energy to power a city for a month.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The defence forces do not take part in rescue operations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The police help to keep law and order during disasters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hospitals ignore patients during times of emergency.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Indian Red Cross Society works for the welfare of affected people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Volcanoes are cold openings in the earth’s surface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lightning and thunder occur together during rains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
