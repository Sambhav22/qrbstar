export const chapter = "Chapter - 12: Air, Water and Weather";
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
        question: "Which gas is present in the largest amount in air?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Nitrogen",
      }),
      shuffleOptions({
        question: "Which gas in air helps plants to make their food?",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "What helps the hot-air balloon and glider to move in the sky?",
        optionA: "Wind",
        optionB: "Rain",
        optionC: "Sunlight",
        correctAnswer: "Wind",
      }),
      shuffleOptions({
        question: "Which instrument is used to measure wind speed?",
        optionA: "Thermometer",
        optionB: "Anemometer",
        optionC: "Barometer",
        correctAnswer: "Anemometer",
      }),
      shuffleOptions({
        question: "Which process changes ice into water?",
        optionA: "Melting",
        optionB: "Freezing",
        optionC: "Condensation",
        correctAnswer: "Melting",
      }),
      shuffleOptions({
        question: "What is the name of the hot and dry wind that blows in summer?",
        optionA: "Loo",
        optionB: "Cold wave",
        optionC: "Breeze",
        correctAnswer: "Loo",
      }),
      shuffleOptions({
        question: "Which place in India receives the maximum rainfall in the world?",
        optionA: "Mawsynram",
        optionB: "Shimla",
        optionC: "Delhi",
        correctAnswer: "Mawsynram",
      }),
      shuffleOptions({
        question: "What makes the weather warm or cold?",
        optionA: "Heat of the sun",
        optionB: "Moonlight",
        optionC: "Clouds",
        correctAnswer: "Heat of the sun",
      }),
      shuffleOptions({
        question: "Which gas in air supports burning?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "Who benefits most from the weather forecast?",
        optionA: "Sailors",
        optionB: "Students",
        optionC: "Painters",
        correctAnswer: "Sailors",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun’s heat changes water into ______.",
        optionA: "ice",
        optionB: "vapour",
        optionC: "snow",
        correctAnswer: "vapour",
      }),
      shuffleOptions({
        question: "Wind helps ______ to move on water.",
        optionA: "sailboats",
        optionB: "trains",
        optionC: "cars",
        correctAnswer: "sailboats",
      }),
      shuffleOptions({
        question: "Clouds are formed when water vapour ______.",
        optionA: "cools",
        optionB: "freezes",
        optionC: "melts",
        correctAnswer: "cools",
      }),
      shuffleOptions({
        question: "The continuous movement of water on Earth is called the ______.",
        optionA: "water cycle",
        optionB: "rainfall",
        optionC: "evaporation",
        correctAnswer: "water cycle",
      }),
      shuffleOptions({
        question: "The cold and dry winds in winter are called ______.",
        optionA: "cold waves",
        optionB: "loo",
        optionC: "storm",
        correctAnswer: "cold waves",
      }),
      shuffleOptions({
        question: "Air is a ______ of many gases.",
        optionA: "mixture",
        optionB: "liquid",
        optionC: "solid",
        correctAnswer: "mixture",
      }),
      shuffleOptions({
        question: "Wind carries ______ of plants to different places.",
        optionA: "seeds",
        optionB: "flowers",
        optionC: "fruits",
        correctAnswer: "seeds",
      }),
      shuffleOptions({
        question: "Clouds are made up of tiny ______ of water.",
        optionA: "drops",
        optionB: "stones",
        optionC: "bubbles",
        correctAnswer: "drops",
      }),
      shuffleOptions({
        question: "The sun’s rays are ______ in the morning and evening.",
        optionA: "slanting",
        optionB: "straight",
        optionC: "zig-zag",
        correctAnswer: "slanting",
      }),
      shuffleOptions({
        question: "Too much rain at the wrong time can ______ crops.",
        optionA: "harm",
        optionB: "water",
        optionC: "clean",
        correctAnswer: "harm",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air can be seen and touched easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nitrogen helps plants to grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wind helps to dry our clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Weather remains the same every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clouds are made only of dust and ice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Loo is a hot and dry summer wind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun’s rays are slanting in the afternoon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cold waves blow during summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Heavy rainfall may cause floods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Weather forecast helps people plan their work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
