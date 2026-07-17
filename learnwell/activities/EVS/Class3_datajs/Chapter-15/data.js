export const chapter = "Chapter - 15: Travel";
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
        question: "Who is the in-charge of a railway station?",
        optionA: "Driver",
        optionB: "Station master",
        optionC: "Signalman",
        correctAnswer: "Station master",
      }),
      shuffleOptions({
        question: "Who checks the tickets of passengers?",
        optionA: "Coolie",
        optionB: "TTE",
        optionC: "Seller",
        correctAnswer: "TTE",
      }),
      shuffleOptions({
        question: "Which vehicle helps people to travel through deserts?",
        optionA: "Camel cart",
        optionB: "Horse cart",
        optionC: "Boat",
        correctAnswer: "Camel cart",
      }),
      shuffleOptions({
        question: "Which vehicle is used to travel through forests?",
        optionA: "Elephant",
        optionB: "Bus",
        optionC: "Ship",
        correctAnswer: "Elephant",
      }),
      shuffleOptions({
        question: "Which is the cheapest way to travel long distances?",
        optionA: "Aeroplane",
        optionB: "Train",
        optionC: "Car",
        correctAnswer: "Train",
      }),
      shuffleOptions({
        question: "Which animal is found in hilly areas for carrying loads?",
        optionA: "Yak",
        optionB: "Camel",
        optionC: "Dog",
        correctAnswer: "Yak",
      }),
      shuffleOptions({
        question: "Which modern transport helps people move quickly within metro cities?",
        optionA: "Metro train",
        optionB: "Bus",
        optionC: "Rickshaw",
        correctAnswer: "Metro train",
      }),
      shuffleOptions({
        question: "What does a coolie do at a railway station?",
        optionA: "Gives signals",
        optionB: "Carries luggage",
        optionC: "Checks tickets",
        correctAnswer: "Carries luggage",
      }),
      shuffleOptions({
        question: "What should we do to save fuel?",
        optionA: "Walk short distances",
        optionB: "Use car for short distance",
        optionC: "Keep engine running",
        correctAnswer: "Walk short distances",
      }),
      shuffleOptions({
        question: "Which of these runs in the air?",
        optionA: "Aeroplane",
        optionB: "Truck",
        optionC: "Ship",
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
        question: "The TTE checks the ______ of passengers.",
        optionA: "signals",
        optionB: "tickets",
        optionC: "seats",
        correctAnswer: "tickets",
      }),
      shuffleOptions({
        question: "A coolie carries the ______ of passengers.",
        optionA: "luggage",
        optionB: "food",
        optionC: "water",
        correctAnswer: "luggage",
      }),
      shuffleOptions({
        question: "People use ______ to travel in water.",
        optionA: "ships",
        optionB: "scooters",
        optionC: "bicycles",
        correctAnswer: "ships",
      }),
      shuffleOptions({
        question: "Fuel takes ______ of years to form.",
        optionA: "hundreds",
        optionB: "millions",
        optionC: "thousands",
        correctAnswer: "millions",
      }),
      shuffleOptions({
        question: "We should not use vehicles for ______ distances.",
        optionA: "short",
        optionB: "long",
        optionC: "medium",
        correctAnswer: "short",
      }),
      shuffleOptions({
        question: "Horses and donkeys are used in ______ areas.",
        optionA: "hilly",
        optionB: "desert",
        optionC: "forest",
        correctAnswer: "hilly",
      }),
      shuffleOptions({
        question: "Metro trains are the most convenient transport in ______ cities.",
        optionA: "small",
        optionB: "metro",
        optionC: "desert",
        correctAnswer: "metro",
      }),
      shuffleOptions({
        question: "Camels are called the ______ of the desert.",
        optionA: "king",
        optionB: "ship",
        optionC: "animal",
        correctAnswer: "ship",
      }),
      shuffleOptions({
        question: "______ is used to give signals to the trains.",
        optionA: "Signalman",
        optionB: "Driver",
        optionC: "Passenger",
        correctAnswer: "Signalman",
      }),
      shuffleOptions({
        question: "Fuel helps vehicles to ______.",
        optionA: "run",
        optionB: "stop",
        optionC: "fly",
        correctAnswer: "run",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Boats and ships run on water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Station master sells food items to passengers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Metro trains help to travel quickly inside big cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Horses and donkeys are used in deserts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should waste fuel for small trips.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Train is the costliest means of transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Camels are used in desert areas for travelling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A coolie gives signals to the trains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Air transport is used to travel long distances very quickly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fuel is an unlimited natural resource.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
