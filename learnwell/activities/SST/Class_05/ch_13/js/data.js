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
        question: "Which disaster occurs when large amounts of water overflow onto land?",
        optionA: "Drought",
        optionB: "Floods",
        optionC: "Volcanic eruption",
        correctAnswer: "Floods",
      }),
      shuffleOptions({
        question: "Which natural disaster brings strong winds with heavy rainfall?",
        optionA: "Tsunami",
        optionB: "Cyclone",
        optionC: "Earthquake",
        correctAnswer: "Cyclone",
      }),
      shuffleOptions({
        question: "Which disaster is caused when tectonic plates rub against each other?",
        optionA: "Flood",
        optionB: "Drought",
        optionC: "Earthquake",
        correctAnswer: "Earthquake",
      }),
      shuffleOptions({
        question: "Which huge ocean wave is formed due to an underwater earthquake?",
        optionA: "Cyclone",
        optionB: "Tsunami",
        optionC: "Landslide",
        correctAnswer: "Tsunami",
      }),
      shuffleOptions({
        question: "Which material comes out of a volcanic vent during an eruption?",
        optionA: "Coal",
        optionB: "Lava",
        optionC: "Sand",
        correctAnswer: "Lava",
      }),
      shuffleOptions({
        question: "Which organisation helps by putting out fires during disasters?",
        optionA: "Fire station team",
        optionB: "Railway workers",
        optionC: "Industrial engineers",
        correctAnswer: "Fire station team",
      }),
      shuffleOptions({
        question: "Which force helps rescue people by using army, navy and air force?",
        optionA: "Postal service",
        optionB: "Defence forces",
        optionC: "Sports authorities",
        correctAnswer: "Defence forces",
      }),
      shuffleOptions({
        question: "Which disaster occurs when there is no rainfall for a long period?",
        optionA: "Flood",
        optionB: "Drought",
        optionC: "Tsunami",
        correctAnswer: "Drought",
      }),
      shuffleOptions({
        question: "Which group helps maintain law and order during disasters?",
        optionA: "Farmers",
        optionB: "Police department",
        optionC: "Bank officials",
        correctAnswer: "Police department",
      }),
      shuffleOptions({
        question: "Which organisation collects donations for victims of disasters?",
        optionA: "Child Relief and You (CRY)",
        optionB: "Airlines",
        optionC: "Fisheries",
        correctAnswer: "Child Relief and You (CRY)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Floodwater may become stagnant and cause ________ to breed.",
        optionA: "butterflies",
        optionB: "mosquitoes",
        optionC: "fish",
        correctAnswer: "mosquitoes",
      }),
      shuffleOptions({
        question: "A cyclone mostly affects the ________ areas.",
        optionA: "coastal",
        optionB: "desert",
        optionC: "mountain",
        correctAnswer: "coastal",
      }),
      shuffleOptions({
        question: "Earthquake shaking is strongest at the ________.",
        optionA: "epicentre",
        optionB: "seashore",
        optionC: "forest",
        correctAnswer: "epicentre",
      }),
      shuffleOptions({
        question: "A tsunami travels much faster than a ________.",
        optionA: "bicycle",
        optionB: "commercial jet plane",
        optionC: "train",
        correctAnswer: "commercial jet plane",
      }),
      shuffleOptions({
        question: "Flowing ________ destroys everything in its path.",
        optionA: "mud",
        optionB: "lava",
        optionC: "cool water",
        correctAnswer: "lava",
      }),
      shuffleOptions({
        question: "Drought causes the soil to become ________.",
        optionA: "wet",
        optionB: "fertile",
        optionC: "dry and infertile",
        correctAnswer: "dry and infertile",
      }),
      shuffleOptions({
        question: "A volcanic eruption happens when ________ finds a vent to escape.",
        optionA: "water",
        optionB: "magma",
        optionC: "iron",
        correctAnswer: "magma",
      }),
      shuffleOptions({
        question: "During a cyclone, one must avoid touching ________ wires.",
        optionA: "steel",
        optionB: "wooden",
        optionC: "wet electric",
        correctAnswer: "wet electric",
      }),
      shuffleOptions({
        question: "Defence forces help people by rescuing them during ________.",
        optionA: "festivals",
        optionB: "disasters",
        optionC: "sports events",
        correctAnswer: "disasters",
      }),
      shuffleOptions({
        question: "Hospitals help injured people by providing proper ________.",
        optionA: "water",
        optionB: "medical care",
        optionC: "clothing",
        correctAnswer: "medical care",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Floods cannot damage roads and railway lines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cyclones can uproot trees and damage crops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A tsunami can reach a height of almost 100 feet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Drought often leads to shortage of food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lava that flows out of a volcano is cold and harmless.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "During an earthquake, standing under a strong table is a safety step.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Police do not help in maintaining law and order during disasters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The army, navy and air force help people during disasters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fire fighters help in extinguishing fires caused by disasters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "NGOs collect donations and support disaster-affected people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
