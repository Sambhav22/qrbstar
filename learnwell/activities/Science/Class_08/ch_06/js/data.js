export const chapter = "Chapter - 6: Combustion and Flame";
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
        question: "Which fuel releases heat energy when it burns?",
        optionA: "Iron",
        optionB: "Petrol",
        optionC: "Glass",
        correctAnswer: "Petrol",
      }),
      shuffleOptions({
        question: "Which gas supports combustion and helps a substance burn?",
        optionA: "Carbon dioxide",
        optionB: "Oxygen",
        optionC: "Nitrogen",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "Which type of combustion occurs when a substance catches fire instantly with a matchstick?",
        optionA: "Slow combustion",
        optionB: "Rapid combustion",
        optionC: "Spontaneous combustion",
        correctAnswer: "Rapid combustion",
      }),
      shuffleOptions({
        question: "Which fuel has the highest calorific value among those listed in the chapter?",
        optionA: "Kerosene",
        optionB: "LPG",
        optionC: "Hydrogen",
        correctAnswer: "Hydrogen",
      }),
      shuffleOptions({
        question: "Which substance catches fire easily due to its very low ignition temperature?",
        optionA: "Copper",
        optionB: "White phosphorus",
        optionC: "Iron",
        correctAnswer: "White phosphorus",
      }),
      shuffleOptions({
        question: "Which zone of a candle flame is the hottest?",
        optionA: "Luminous zone",
        optionB: "Dark zone",
        optionC: "Non-luminous zone",
        correctAnswer: "Non-luminous zone",
      }),
      shuffleOptions({
        question: "Which of the following is an example of an explosion?",
        optionA: "Burning of paper",
        optionB: "Bursting of crackers",
        optionC: "Heating water",
        correctAnswer: "Bursting of crackers",
      }),
      shuffleOptions({
        question: "Which extinguisher works by producing carbon dioxide foam over burning oil?",
        optionA: "Soda-acid extinguisher",
        optionB: "Hydrocarbon fire extinguisher",
        optionC: "Water extinguisher",
        correctAnswer: "Hydrocarbon fire extinguisher",
      }),
      shuffleOptions({
        question: "Which of the following is essential for combustion to take place?",
        optionA: "Water",
        optionB: "Air (oxygen)",
        optionC: "Sand",
        correctAnswer: "Air (oxygen)",
      }),
      shuffleOptions({
        question: "Which product of incomplete combustion can cause respiratory problems?",
        optionA: "Water vapour",
        optionB: "Soot",
        optionC: "Nitrogen",
        correctAnswer: "Soot",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The minimum temperature at which a fuel catches fire is called its ______ temperature.",
        optionA: "melting",
        optionB: "ignition",
        optionC: "boiling",
        correctAnswer: "ignition",
      }),
      shuffleOptions({
        question: "The amount of heat produced by complete combustion of 1 kg of fuel is called its ______ value.",
        optionA: "heat",
        optionB: "calorific",
        optionC: "chemical",
        correctAnswer: "calorific",
      }),
      shuffleOptions({
        question: "Petrol, LPG and kerosene are ______ substances because they catch fire easily.",
        optionA: "non-combustible",
        optionB: "inflammable",
        optionC: "metallic",
        correctAnswer: "inflammable",
      }),
      shuffleOptions({
        question: "The outermost zone of a candle flame is ______ in colour.",
        optionA: "yellow",
        optionB: "blue",
        optionC: "black",
        correctAnswer: "blue",
      }),
      shuffleOptions({
        question: "Burning fuels may release harmful gases that lead to ______ rain.",
        optionA: "acid",
        optionB: "winter",
        optionC: "normal",
        correctAnswer: "acid",
      }),
      shuffleOptions({
        question: "Combustion is a ______ process that releases heat and light.",
        optionA: "chemical",
        optionB: "physical",
        optionC: "natural",
        correctAnswer: "chemical",
      }),
      shuffleOptions({
        question: "Substances that do not burn easily are called ______ substances.",
        optionA: "combustible",
        optionB: "non-combustible",
        optionC: "inflammable",
        correctAnswer: "non-combustible",
      }),
      shuffleOptions({
        question: "The middle zone of a candle flame appears ______ because of glowing carbon particles.",
        optionA: "blue",
        optionB: "yellow",
        optionC: "white",
        correctAnswer: "yellow",
      }),
      shuffleOptions({
        question: "The smell in LPG is due to a compound called ______ mercaptan.",
        optionA: "methyl",
        optionB: "ethyl",
        optionC: "propyl",
        correctAnswer: "ethyl",
      }),
      shuffleOptions({
        question: "Sand is used on burning oil because it cuts off the ______ supply.",
        optionA: "heat",
        optionB: "air",
        optionC: "water",
        correctAnswer: "air",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Combustion always requires oxygen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "CNG is considered a clean fuel because it produces very little smoke.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The luminous zone of a candle flame is the hottest zone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Phosphorus is stored in water to prevent spontaneous combustion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Incomplete combustion produces carbon monoxide and soot.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rapid combustion occurs without any external heat source.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sand can be safely used to extinguish fires caused by burning oil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water should not be used on electrical fires.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Explosion involves sudden release of gases along with heat and sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The dark zone of a candle flame is the coolest part of the flame.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
