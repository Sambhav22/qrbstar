export const chapter = "Chapter - 11: Air and Water";
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
        question: "Which gas forms the largest part of air?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Carbon dioxide",
        correctAnswer: "Nitrogen",
      }),
      shuffleOptions({
        question: "Which gas is used by living beings to breathe and for burning?",
        optionA: "Hydrogen",
        optionB: "Oxygen",
        optionC: "Carbon dioxide",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "Which gas is used by plants during photosynthesis?",
        optionA: "Carbon dioxide",
        optionB: "Oxygen",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "Which property of air helps clothes to dry?",
        optionA: "Weight",
        optionB: "Movement of air (wind)",
        optionC: "Temperature",
        correctAnswer: "Movement of air (wind)",
      }),
      shuffleOptions({
        question: "Which layer of the atmosphere contains the ozone layer?",
        optionA: "Troposphere",
        optionB: "Stratosphere",
        optionC: "Mesosphere",
        correctAnswer: "Stratosphere",
      }),
      shuffleOptions({
        question: "In which layer of atmosphere do meteoroids burn?",
        optionA: "Mesosphere",
        optionB: "Thermosphere",
        optionC: "Exosphere",
        correctAnswer: "Mesosphere",
      }),
      shuffleOptions({
        question: "Which process helps in removing insoluble impurities from water?",
        optionA: "Evaporation",
        optionB: "Filtration",
        optionC: "Distillation",
        correctAnswer: "Filtration",
      }),
      shuffleOptions({
        question: "Which method gives the purest form of water?",
        optionA: "Boiling",
        optionB: "Distillation",
        optionC: "Sedimentation",
        correctAnswer: "Distillation",
      }),
      shuffleOptions({
        question: "Which gas is essential for burning a candle?",
        optionA: "Carbon dioxide",
        optionB: "Oxygen",
        optionC: "Nitrogen",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "Which layer of the atmosphere is nearest to the earth’s surface?",
        optionA: "Troposphere",
        optionB: "Stratosphere",
        optionC: "Exosphere",
        correctAnswer: "Troposphere",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The blanket of air surrounding the earth is called ______.",
        optionA: "Hydrosphere",
        optionB: "Lithosphere",
        optionC: "Atmosphere",
        correctAnswer: "Atmosphere",
      }),
      shuffleOptions({
        question: "Air occupies space, has weight and exerts ______.",
        optionA: "Heat",
        optionB: "Light",
        optionC: "Pressure",
        correctAnswer: "Pressure",
      }),
      shuffleOptions({
        question: "The presence of water vapour in air is called ______.",
        optionA: "Moisture",
        optionB: "Humidity",
        optionC: "Condensation",
        correctAnswer: "Humidity",
      }),
      shuffleOptions({
        question: "All weather phenomena occur in the ______.",
        optionA: "Stratosphere",
        optionB: "Mesosphere",
        optionC: "Troposphere",
        correctAnswer: "Troposphere",
      }),
      shuffleOptions({
        question: "The ozone layer protects us from ______.",
        optionA: "Sun’s ultraviolet rays",
        optionB: "Rainfall",
        optionC: "Wind",
        correctAnswer: "Sun’s ultraviolet rays",
      }),
      shuffleOptions({
        question: "Water that is colourless, odourless and tasteless is ______.",
        optionA: "Rain water",
        optionB: "Dirty water",
        optionC: "Pure water",
        correctAnswer: "Pure water",
      }),
      shuffleOptions({
        question: "Soluble impurities can be removed by ______.",
        optionA: "Evaporation",
        optionB: "Filtration",
        optionC: "Sedimentation",
        correctAnswer: "Evaporation",
      }),
      shuffleOptions({
        question: "Insoluble impurities can be removed by ______.",
        optionA: "Evaporation",
        optionB: "Sedimentation",
        optionC: "Distillation",
        correctAnswer: "Sedimentation",
      }),
      shuffleOptions({
        question: "The purest form of water is ______.",
        optionA: "River water",
        optionB: "Distilled water",
        optionC: "Well water",
        correctAnswer: "Distilled water",
      }),
      shuffleOptions({
        question: "Distilled water is used in ______.",
        optionA: "Batteries and laboratories",
        optionB: "Gardening",
        optionC: "Cooking",
        correctAnswer: "Batteries and laboratories",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air is a mixture of many gases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nitrogen forms about 21% of air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oxygen supports burning and breathing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The stratosphere contains a layer of ozone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mesosphere is the outermost layer of the atmosphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air has no weight and does not occupy space.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Impure water is safe for drinking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Boiling kills germs present in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Evaporation helps in removing soluble impurities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Distilled water is the purest form of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
