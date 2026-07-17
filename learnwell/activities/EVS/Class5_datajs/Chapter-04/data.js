export const chapter = "Chapter - 4: Breathe in, Breathe out";
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
        question: "What is the process of taking air into the lungs called?",
        optionA: "Exhalation",
        optionB: "Inhalation",
        optionC: "Contraction",
        correctAnswer: "Inhalation",
      }),
      shuffleOptions({
        question: "Which organ carries oxygen to all parts of the body?",
        optionA: "Heart",
        optionB: "Blood",
        optionC: "Brain",
        correctAnswer: "Blood",
      }),
      shuffleOptions({
        question: "What lies below the lungs and helps in breathing?",
        optionA: "Stomach",
        optionB: "Diaphragm",
        optionC: "Liver",
        correctAnswer: "Diaphragm",
      }),
      shuffleOptions({
        question: "During which process do the diaphragm muscles contract and pull downward?",
        optionA: "Exhalation",
        optionB: "Inhalation",
        optionC: "Relaxation",
        correctAnswer: "Inhalation",
      }),
      shuffleOptions({
        question: "Why does the candle flame go off when we blow on it?",
        optionA: "Ignition temperature increases",
        optionB: "Ignition temperature lowers",
        optionC: "Oxygen increases",
        correctAnswer: "Ignition temperature lowers",
      }),
      shuffleOptions({
        question: "What happens when we blow on a glass surface?",
        optionA: "It becomes shiny",
        optionB: "It becomes cloudy",
        optionC: "It breaks",
        correctAnswer: "It becomes cloudy",
      }),
      shuffleOptions({
        question: "Which gas helps in burning?",
        optionA: "Carbon dioxide",
        optionB: "Oxygen",
        optionC: "Nitrogen",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "What temperature is the normal human body temperature?",
        optionA: "97.6°F",
        optionB: "98.4°F",
        optionC: "99°F",
        correctAnswer: "98.4°F",
      }),
      shuffleOptions({
        question: "Through which passage does air enter the body?",
        optionA: "Nasal passage",
        optionB: "Mouth",
        optionC: "Food pipe",
        correctAnswer: "Nasal passage",
      }),
      shuffleOptions({
        question: "What helps our body produce energy from digested food?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Oxygen",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The lungs ______ when we breathe in.",
        optionA: "Contract",
        optionB: "Expand",
        optionC: "Do not move",
        correctAnswer: "Expand",
      }),
      shuffleOptions({
        question: "The process of sending air out of the lungs is called ______.",
        optionA: "Exhalation",
        optionB: "Inhalation",
        optionC: "Respiration",
        correctAnswer: "Exhalation",
      }),
      shuffleOptions({
        question: "Oxygen from the lungs goes into the ______.",
        optionA: "Heart",
        optionB: "Bloodstream",
        optionC: "Stomach",
        correctAnswer: "Bloodstream",
      }),
      shuffleOptions({
        question: "The ______ helps the lungs to move up and down.",
        optionA: "Ribs",
        optionB: "Diaphragm",
        optionC: "Heart",
        correctAnswer: "Diaphragm",
      }),
      shuffleOptions({
        question: "The rate of breathing ______ from time to time.",
        optionA: "Remains constant",
        optionB: "Varies",
        optionC: "Decreases",
        correctAnswer: "Varies",
      }),
      shuffleOptions({
        question: "The air we blow out from our mouth is ______ in temperature.",
        optionA: "Warm",
        optionB: "Cold",
        optionC: "Very hot",
        correctAnswer: "Warm",
      }),
      shuffleOptions({
        question: "Cool air ______ heat quickly.",
        optionA: "Absorbs",
        optionB: "Gives",
        optionC: "Rejects",
        correctAnswer: "Absorbs",
      }),
      shuffleOptions({
        question: "Blowing on burning wood keeps the fire ______.",
        optionA: "Going",
        optionB: "Off",
        optionC: "Dim",
        correctAnswer: "Going",
      }),
      shuffleOptions({
        question: "When water vapour touches a cold surface, it ______.",
        optionA: "Evaporates",
        optionB: "Condenses",
        optionC: "Freezes",
        correctAnswer: "Condenses",
      }),
      shuffleOptions({
        question: "At high altitude, the amount of oxygen in the air is ______.",
        optionA: "More",
        optionB: "Less",
        optionC: "Same",
        correctAnswer: "Less",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Breathing means only inhaling air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The diaphragm helps in the process of breathing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We blow on hot tea to cool it down.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Oxygen helps things to burn.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Exhaled air contains carbon dioxide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air enters the body through the nasal passage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Blowing lowers the ignition temperature of a candle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The air we blow contains water vapour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The frequency of breathing always remains the same.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The doctor uses a stethoscope to check breathing and heartbeat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
