export const chapter = "Chapter - 12: Means of Transport";
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
        question: "How did early humans first move from one place to another?",
        optionA: "By car",
        optionB: "By train",
        optionC: "By walking",
        correctAnswer: "By walking",
      }),
      shuffleOptions({
        question: "Which vehicle moves people and goods on roads?",
        optionA: "Car",
        optionB: "Ship",
        optionC: "Aeroplane",
        correctAnswer: "Car",
      }),
      shuffleOptions({
        question: "Which means of transport helps people travel across rivers and seas?",
        optionA: "Boats and steamers",
        optionB: "Buses",
        optionC: "Motorcycles",
        correctAnswer: "Boats and steamers",
      }),
      shuffleOptions({
        question: "Which form of transport includes machines that fly in the sky?",
        optionA: "Land transport",
        optionB: "Water transport",
        optionC: "Air transport",
        correctAnswer: "Air transport",
      }),
      shuffleOptions({
        question: "Which type of fuel is used by many vehicles mentioned in the chapter?",
        optionA: "Petrol",
        optionB: "Clay",
        optionC: "Sand",
        correctAnswer: "Petrol",
      }),
      shuffleOptions({
        question: "Which means of transport is used for long land journeys on tracks?",
        optionA: "Truck",
        optionB: "Train",
        optionC: "Canoe",
        correctAnswer: "Train",
      }),
      shuffleOptions({
        question: "Which vehicle is mentioned in the chapter as not needing fuel?",
        optionA: "Car",
        optionB: "Cycle rickshaw",
        optionC: "Bus",
        correctAnswer: "Cycle rickshaw",
      }),
      shuffleOptions({
        question: "What invention made moving from one place to another easier for humans?",
        optionA: "Wheel",
        optionB: "Telescope",
        optionC: "Telephone",
        correctAnswer: "Wheel",
      }),
      shuffleOptions({
        question: "Which vehicle is used for travelling in rivers?",
        optionA: "Bus",
        optionB: "Boat",
        optionC: "Car",
        correctAnswer: "Boat",
      }),
      shuffleOptions({
        question: "Which air vehicle can fly high and fast?",
        optionA: "Helicopter",
        optionB: "Aeroplane",
        optionC: "Steamer",
        correctAnswer: "Aeroplane",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Travelling became easier for humans after the ______ was invented.",
        optionA: "clock",
        optionB: "wheel",
        optionC: "rope",
        correctAnswer: "wheel",
      }),
      shuffleOptions({
        question: "People can cross seas and oceans using large ______.",
        optionA: "scooters",
        optionB: "ships",
        optionC: "cycles",
        correctAnswer: "ships",
      }),
      shuffleOptions({
        question: "A ______ is used for flying in the sky.",
        optionA: "car",
        optionB: "aeroplane",
        optionC: "boat",
        correctAnswer: "aeroplane",
      }),
      shuffleOptions({
        question: "Vehicles need ______ to run.",
        optionA: "cloth",
        optionB: "fuel",
        optionC: "soil",
        correctAnswer: "fuel",
      }),
      shuffleOptions({
        question: "A ______ does not need any fuel.",
        optionA: "cycle rickshaw",
        optionB: "bus",
        optionC: "jeep",
        correctAnswer: "cycle rickshaw",
      }),
      shuffleOptions({
        question: "Buses and cars are examples of ______ transport.",
        optionA: "water",
        optionB: "land",
        optionC: "air",
        correctAnswer: "land",
      }),
      shuffleOptions({
        question: "Steamers move through ______.",
        optionA: "forests",
        optionB: "water",
        optionC: "air",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Electricity is also used as a type of ______.",
        optionA: "toy",
        optionB: "fuel",
        optionC: "metal",
        correctAnswer: "fuel",
      }),
      shuffleOptions({
        question: "Gliders belong to ______ transport.",
        optionA: "air",
        optionB: "land",
        optionC: "water",
        correctAnswer: "air",
      }),
      shuffleOptions({
        question: "A vehicle carries people and ______.",
        optionA: "games",
        optionB: "tools",
        optionC: "goods",
        correctAnswer: "goods",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Boats can move without water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Trains run on tracks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cycle is good for short distances and saves fuel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ships move on roads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Aeroplanes are part of land transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Petrol is used as fuel for many vehicles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early humans used animals to carry goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water transport is the fastest form of transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "CNG is one of the fuels used in vehicles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cycle rickshaws do not use any fuel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
