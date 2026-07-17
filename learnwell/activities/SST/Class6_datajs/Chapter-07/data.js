export const chapter = "Chapter - 7: India: Climate";
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
        question: "Which part of India stays warm for most of the year because it lies close to the Equator?",
        optionA: "Punjab",
        optionB: "Southern India",
        optionC: "Haryana",
        correctAnswer: "Southern India",
      }),
      shuffleOptions({
        question: "Which winds make the Northern Plains very hot during summer?",
        optionA: "Sea breeze",
        optionB: "Loo",
        optionC: "Monsoon breeze",
        correctAnswer: "Loo",
      }),
      shuffleOptions({
        question: "Which region receives rainfall because moisture-laden winds rise from the Bay of Bengal?",
        optionA: "Western Rajasthan",
        optionB: "Gujarat",
        optionC: "Meghalaya",
        correctAnswer: "Meghalaya",
      }),
      shuffleOptions({
        question: "Which place receives early summer showers before the monsoon fully arrives?",
        optionA: "Ladakh",
        optionB: "Kerala",
        optionC: "Delhi",
        correctAnswer: "Kerala",
      }),
      shuffleOptions({
        question: "Which factor lowers the temperature as we go higher above sea level?",
        optionA: "Soil",
        optionB: "Altitude",
        optionC: "Forest cover",
        correctAnswer: "Altitude",
      }),
      shuffleOptions({
        question: "Which part of India gets rainfall during the retreating monsoon season?",
        optionA: "Tamil Nadu coast",
        optionB: "Rajasthan",
        optionC: "Punjab",
        correctAnswer: "Tamil Nadu coast",
      }),
      shuffleOptions({
        question: "Which region receives extremely heavy rainfall due to its location near moist winds?",
        optionA: "Thar Desert",
        optionB: "Assam",
        optionC: "Haryana",
        correctAnswer: "Assam",
      }),
      shuffleOptions({
        question: "Which state becomes very humid because it lies along the western coast?",
        optionA: "Bihar",
        optionB: "Mumbai (Maharashtra)",
        optionC: "Rajasthan",
        correctAnswer: "Mumbai (Maharashtra)",
      }),
      shuffleOptions({
        question: "Which season begins when the temperature starts falling and winds begin to withdraw?",
        optionA: "Summer",
        optionB: "Retreating monsoon",
        optionC: "Winter",
        correctAnswer: "Retreating monsoon",
      }),
      shuffleOptions({
        question: "Which region becomes very cold because the sun’s rays are slanting during winter?",
        optionA: "Northern Plains",
        optionB: "Coastal Karnataka",
        optionC: "Tamil Nadu",
        correctAnswer: "Northern Plains",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Temperature decreases when the ________ increases.",
        optionA: "humidity",
        optionB: "altitude",
        optionC: "forest cover",
        correctAnswer: "altitude",
      }),
      shuffleOptions({
        question: "The Indian climate is strongly influenced by the ________.",
        optionA: "monsoon",
        optionB: "snowfall",
        optionC: "soil",
        correctAnswer: "monsoon",
      }),
      shuffleOptions({
        question: "Kerala receives early rain due to winds from the ________.",
        optionA: "Bay of Bengal",
        optionB: "Arabian Sea",
        optionC: "Indian Ocean",
        correctAnswer: "Arabian Sea",
      }),
      shuffleOptions({
        question: "Rajasthan receives very little rainfall because it lies in a ________ region.",
        optionA: "forest",
        optionB: "desert",
        optionC: "coastal",
        correctAnswer: "desert",
      }),
      shuffleOptions({
        question: "The Tropic of Cancer divides India into two ________ zones.",
        optionA: "rainfall",
        optionB: "climate",
        optionC: "latitudinal",
        correctAnswer: "climate",
      }),
      shuffleOptions({
        question: "When hot air rises over the Northern Plains, ________ winds move toward it.",
        optionA: "dusty",
        optionB: "moist",
        optionC: "icy",
        correctAnswer: "moist",
      }),
      shuffleOptions({
        question: "Places near the sea have a more ________ climate.",
        optionA: "moderate",
        optionB: "extreme",
        optionC: "dry",
        correctAnswer: "moderate",
      }),
      shuffleOptions({
        question: "Meghalaya receives very heavy rainfall because of moist winds blowing from the ________.",
        optionA: "Arabian Sea",
        optionB: "Bay of Bengal",
        optionC: "Pacific Ocean",
        correctAnswer: "Bay of Bengal",
      }),
      shuffleOptions({
        question: "In winter, cold winds blow from the ________ direction.",
        optionA: "north-east",
        optionB: "south-west",
        optionC: "east",
        correctAnswer: "north-east",
      }),
      shuffleOptions({
        question: "During retreating monsoon, the temperature begins to ________.",
        optionA: "rise",
        optionB: "fall",
        optionC: "remain constant",
        correctAnswer: "fall",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Southern India remains warm because it lies close to the Equator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Deccan Plateau becomes extremely cold in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Monsoon winds bring rainfall to most parts of India during June–September.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Thunderstorms during early summer in Kerala are called mango showers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Western Ghats receive rainfall because moist winds are forced to rise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lahaul-Spiti remains warm because it is near the sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Retreating monsoon winds bring rainfall mainly to coastal Tamil Nadu.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cyclones during the retreating monsoon mostly form in the Bay of Bengal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainfall in India is evenly distributed across all regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Northern Plains become very hot because they receive direct sunrays in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
