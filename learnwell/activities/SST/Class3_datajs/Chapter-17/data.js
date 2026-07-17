export const chapter = "Chapter - 17: Our Environment";
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
        question: "Which activity by humans causes the environment to degrade?",
        optionA: "Dumping of waste",
        optionB: "Painting walls",
        optionC: "Playing games",
        correctAnswer: "Dumping of waste",
      }),
      shuffleOptions({
        question: "What is released from vehicles that pollutes the air?",
        optionA: "Water vapour",
        optionB: "Smoke",
        optionC: "Sand",
        correctAnswer: "Smoke",
      }),
      shuffleOptions({
        question: "Which natural event also causes air pollution?",
        optionA: "Rainbow",
        optionB: "Volcanic eruption",
        optionC: "Snowfall",
        correctAnswer: "Volcanic eruption",
      }),
      shuffleOptions({
        question: "What makes water polluted in many rivers?",
        optionA: "Clean rainwater",
        optionB: "Sewage and waste",
        optionC: "Fresh air",
        correctAnswer: "Sewage and waste",
      }),
      shuffleOptions({
        question: "What disease can be caused by polluted water?",
        optionA: "Toothache",
        optionB: "Cholera",
        optionC: "Sprain",
        correctAnswer: "Cholera",
      }),
      shuffleOptions({
        question: "Which source commonly causes noise pollution?",
        optionA: "Growing plants",
        optionB: "Loud traffic",
        optionC: "Slow reading",
        correctAnswer: "Loud traffic",
      }),
      shuffleOptions({
        question: "What can noise pollution cause to our ears?",
        optionA: "Deafness",
        optionB: "Strength",
        optionC: "Happiness",
        correctAnswer: "Deafness",
      }),
      shuffleOptions({
        question: "What do greenhouse gases trap near the earth’s surface?",
        optionA: "Cold air",
        optionB: "Heat",
        optionC: "Sound",
        correctAnswer: "Heat",
      }),
      shuffleOptions({
        question: "What happens when the amount of waste in cities increases?",
        optionA: "Air becomes clean",
        optionB: "Environment becomes messy",
        optionC: "Water becomes pure",
        correctAnswer: "Environment becomes messy",
      }),
      shuffleOptions({
        question: "Which habit helps in reducing pollution?",
        optionA: "Throwing rubbish",
        optionB: "Planting more trees",
        optionC: "Playing loud music",
        correctAnswer: "Planting more trees",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Forest fires release ______ into the air.",
        optionA: "flowers",
        optionB: "smoke",
        optionC: "stones",
        correctAnswer: "smoke",
      }),
      shuffleOptions({
        question: "Polluted water becomes ______ to drink.",
        optionA: "unfit",
        optionB: "tasty",
        optionC: "hot",
        correctAnswer: "unfit",
      }),
      shuffleOptions({
        question: "Loud construction work creates ______ pollution.",
        optionA: "air",
        optionB: "noise",
        optionC: "water",
        correctAnswer: "noise",
      }),
      shuffleOptions({
        question: "Dirty water can spread diseases like ______.",
        optionA: "jaundice",
        optionB: "headache",
        optionC: "cold",
        correctAnswer: "jaundice",
      }),
      shuffleOptions({
        question: "Global warming increases the ______ of the earth.",
        optionA: "colour",
        optionB: "temperature",
        optionC: "size",
        correctAnswer: "temperature",
      }),
      shuffleOptions({
        question: "Carbon dioxide is a type of ______ gas.",
        optionA: "greenhouse",
        optionB: "cooking",
        optionC: "scented",
        correctAnswer: "greenhouse",
      }),
      shuffleOptions({
        question: "Vehicles on the road mostly cause ______ pollution.",
        optionA: "air",
        optionB: "soil",
        optionC: "none",
        correctAnswer: "air",
      }),
      shuffleOptions({
        question: "Sewage dumped into rivers leads to ______.",
        optionA: "gardening",
        optionB: "water pollution",
        optionC: "traffic",
        correctAnswer: "water pollution",
      }),
      shuffleOptions({
        question: "Noise from airports can hurt our ______.",
        optionA: "ears",
        optionB: "hands",
        optionC: "nose",
        correctAnswer: "ears",
      }),
      shuffleOptions({
        question: "We can reduce waste by using both sides of ______.",
        optionA: "paper",
        optionB: "cloth",
        optionC: "plastic",
        correctAnswer: "paper",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Forest fires and volcanic eruptions can cause air pollution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polluted water is safe to drink.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Noise pollution can disturb old people with heart problems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Carbon dioxide is a greenhouse gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Littering makes the surroundings clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Global warming increases the earth’s temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Air pollution comes only from human activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Population growth leads to more waste generation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Using polythene bags helps the environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Drinking clean water helps prevent diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
