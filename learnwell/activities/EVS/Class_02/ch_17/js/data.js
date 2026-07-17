export const chapter = "Chapter - 17: Means of Transport";
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
        question: "Which vehicle is used to carry goods on land?",
        optionA: "Truck",
        optionB: "Boat",
        optionC: "Helicopter",
        correctAnswer: "Truck",
      }),
      shuffleOptions({
        question: "Which vehicle has two wheels and no engine?",
        optionA: "Bicycle",
        optionB: "Scooter",
        optionC: "Car",
        correctAnswer: "Bicycle",
      }),
      shuffleOptions({
        question: "Which vehicle moves on water?",
        optionA: "Steamer",
        optionB: "Bus",
        optionC: "Car",
        correctAnswer: "Steamer",
      }),
      shuffleOptions({
        question: "Which vehicle flies in the sky?",
        optionA: "Aeroplane",
        optionB: "Train",
        optionC: "Boat",
        correctAnswer: "Aeroplane",
      }),
      shuffleOptions({
        question: "Which transport takes the longest time to reach its destination?",
        optionA: "Water",
        optionB: "Air",
        optionC: "Land",
        correctAnswer: "Water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A _________ moves on tracks.",
        optionA: "Train",
        optionB: "Bus",
        optionC: "Plane",
        correctAnswer: "Train",
      }),
      shuffleOptions({
        question: "A _________ flies high in the sky.",
        optionA: "Helicopter",
        optionB: "Car",
        optionC: "Boat",
        correctAnswer: "Helicopter",
      }),
      shuffleOptions({
        question: "A _________ is pulled by animals.",
        optionA: "Bullock cart",
        optionB: "Truck",
        optionC: "Ship",
        correctAnswer: "Bullock cart",
      }),
      shuffleOptions({
        question: "We should not waste _________.",
        optionA: "Fuel",
        optionB: "Water",
        optionC: "Air",
        correctAnswer: "Fuel",
      }),
      shuffleOptions({
        question: "A _________ is used to cross rivers.",
        optionA: "Boat",
        optionB: "Car",
        optionC: "Bus",
        correctAnswer: "Boat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Trains are examples of water transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ships travel on water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aeroplanes move on land only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fuel takes millions of years to form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should save fuel by walking short distances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
