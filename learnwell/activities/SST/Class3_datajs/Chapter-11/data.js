export const chapter = "Chapter - 11: Means of Transport";
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
        question: "Which means of transport helps us reach another country quickly?",
        optionA: "Train",
        optionB: "Aeroplane",
        optionC: "Boat",
        correctAnswer: "Aeroplane",
      }),
      shuffleOptions({
        question: "Which vehicle is commonly used to travel short distances on roads?",
        optionA: "Scooter",
        optionB: "Ship",
        optionC: "Aeroplane",
        correctAnswer: "Scooter",
      }),
      shuffleOptions({
        question: "Which means of transport runs on water?",
        optionA: "Bus",
        optionB: "Steamer",
        optionC: "Ship",
        correctAnswer: "Ship",
      }),
      shuffleOptions({
        question: "Which transport system runs underground in some big Indian cities?",
        optionA: "Cycle tracks",
        optionB: "Metro trains",
        optionC: "Cargo ships",
        correctAnswer: "Metro trains",
      }),
      shuffleOptions({
        question: "Which animal helps people travel through deserts?",
        optionA: "Elephant",
        optionB: "Camel",
        optionC: "Bull",
        correctAnswer: "Camel",
      }),
      shuffleOptions({
        question: "Which transport uses rail tracks?",
        optionA: "Car",
        optionB: "Motorcycle",
        optionC: "Train",
        correctAnswer: "Train",
      }),
      shuffleOptions({
        question: "Which transport is the slowest according to the chapter?",
        optionA: "Water transport",
        optionB: "Air transport",
        optionC: "Road transport",
        correctAnswer: "Water transport",
      }),
      shuffleOptions({
        question: "Which vehicle is useful for rescue operations?",
        optionA: "Bus",
        optionB: "Helicopter",
        optionC: "Rickshaw",
        correctAnswer: "Helicopter",
      }),
      shuffleOptions({
        question: "Which transport carries heavy goods from one seaport to another?",
        optionA: "Passenger ship",
        optionB: "Cargo ship",
        optionC: "Small boat",
        correctAnswer: "Cargo ship",
      }),
      shuffleOptions({
        question: "Which means of transport improved greatly after the invention of the wheel?",
        optionA: "Water transport",
        optionB: "Land transport",
        optionC: "Air transport",
        correctAnswer: "Land transport",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ships arrive and leave from ______.",
        optionA: "airports",
        optionB: "seaports",
        optionC: "helipads",
        correctAnswer: "seaports",
      }),
      shuffleOptions({
        question: "______ are used to travel short distances on water.",
        optionA: "Steamers",
        optionB: "Boats and steamers",
        optionC: "Metro trains",
        correctAnswer: "Boats and steamers",
      }),
      shuffleOptions({
        question: "______ land on helipads.",
        optionA: "Helicopters",
        optionB: "Aeroplanes",
        optionC: "Ships",
        correctAnswer: "Helicopters",
      }),
      shuffleOptions({
        question: "India has ______ major seaports.",
        optionA: "10",
        optionB: "12",
        optionC: "20",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "A ______ is used to carry heavy goods across oceans.",
        optionA: "passenger train",
        optionB: "cargo ship",
        optionC: "helicopter",
        correctAnswer: "cargo ship",
      }),
      shuffleOptions({
        question: "______ is the fastest means of transport.",
        optionA: "Air transport",
        optionB: "Water transport",
        optionC: "Land transport",
        correctAnswer: "Air transport",
      }),
      shuffleOptions({
        question: "Cars, buses and trucks run on ______.",
        optionA: "tracks",
        optionB: "roads",
        optionC: "helipads",
        correctAnswer: "roads",
      }),
      shuffleOptions({
        question: "______ serve as a means of transport in thick forests.",
        optionA: "Elephants",
        optionB: "Camels",
        optionC: "Mules",
        correctAnswer: "Elephants",
      }),
      shuffleOptions({
        question: "______ are used in hilly regions.",
        optionA: "Horses and mules",
        optionB: "Ships and boats",
        optionC: "Scooters and trucks",
        correctAnswer: "Horses and mules",
      }),
      shuffleOptions({
        question: "Aeroplanes take off and land at ______.",
        optionA: "ports",
        optionB: "helipads",
        optionC: "airports",
        correctAnswer: "airports",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water transport is the cheapest means of transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Metro trains run on railway tracks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Camels are mostly used in hilly regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air transport is used for rescue operations through helicopters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Boats are used to travel long distances across oceans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Railways can carry many passengers at the same time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Private transport is used by the general public.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ships move slowly compared to aeroplanes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Elephants are used in thick forests for carrying heavy loads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aeroplanes are the slowest means of transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
