export const chapter = "Chapter - 12: Water for Life";
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
        question: "What is the main source of water?",
        optionA: "Soil",
        optionB: "Rain",
        optionC: "Air",
        correctAnswer: "Rain",
      }),
      shuffleOptions({
        question: "What do plants need water for?",
        optionA: "Play",
        optionB: "Make food",
        optionC: "Sleep",
        correctAnswer: "Make food",
      }),
      shuffleOptions({
        question: "Which water is salty in taste?",
        optionA: "Sea water",
        optionB: "Rain water",
        optionC: "River water",
        correctAnswer: "Sea water",
      }),
      shuffleOptions({
        question: "What do animals need water for?",
        optionA: "Drinking",
        optionB: "Flying",
        optionC: "Running",
        correctAnswer: "Drinking",
      }),
      shuffleOptions({
        question: "Where can we store water at home?",
        optionA: "Pots and tanks",
        optionB: "Chairs and tables",
        optionC: "Books and bags",
        correctAnswer: "Pots and tanks",
      }),
      shuffleOptions({
        question: "What makes us sick if we drink it?",
        optionA: "Dirty water",
        optionB: "Boiled water",
        optionC: "Filtered water",
        correctAnswer: "Dirty water",
      }),
      shuffleOptions({
        question: "What helps to store large amounts of water?",
        optionA: "Dams",
        optionB: "Trees",
        optionC: "Boxes",
        correctAnswer: "Dams",
      }),
      shuffleOptions({
        question: "Which of these is a source of water at home?",
        optionA: "Tap",
        optionB: "Window",
        optionC: "Blackboard",
        correctAnswer: "Tap",
      }),
      shuffleOptions({
        question: "What fills ponds, lakes and rivers?",
        optionA: "Rain",
        optionB: "Fire",
        optionC: "Sand",
        correctAnswer: "Rain",
      }),
      shuffleOptions({
        question: "What is one way of saving water?",
        optionA: "Using a bucket",
        optionB: "Keeping tap open",
        optionC: "Throwing water",
        correctAnswer: "Using a bucket",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Plants need water to make _______.",
        optionA: "Houses",
        optionB: "Food",
        optionC: "Toys",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Boiled and filtered water is _______ to drink.",
        optionA: "Safe",
        optionB: "Salty",
        optionC: "Dirty",
        correctAnswer: "Safe",
      }),
      shuffleOptions({
        question: "_______ water is not fit for drinking.",
        optionA: "Rain",
        optionB: "Sea",
        optionC: "Tap",
        correctAnswer: "Sea",
      }),
      shuffleOptions({
        question: "Water is very _______.",
        optionA: "Precious",
        optionB: "Wasteful",
        optionC: "Useless",
        correctAnswer: "Precious",
      }),
      shuffleOptions({
        question: "Animals need water for _______.",
        optionA: "Sleeping",
        optionB: "Drinking",
        optionC: "Jumping",
        correctAnswer: "Drinking",
      }),
      shuffleOptions({
        question: "We should not _______ water.",
        optionA: "Waste",
        optionB: "Store",
        optionC: "Use",
        correctAnswer: "Waste",
      }),
      shuffleOptions({
        question: "Dirty water makes us _______.",
        optionA: "Sick",
        optionB: "Happy",
        optionC: "Strong",
        correctAnswer: "Sick",
      }),
      shuffleOptions({
        question: "Pots, buckets and tanks are used to _______ water.",
        optionA: "Store",
        optionB: "Spill",
        optionC: "Waste",
        correctAnswer: "Store",
      }),
      shuffleOptions({
        question: "_______ fills rivers, ponds and lakes.",
        optionA: "Rain",
        optionB: "Stones",
        optionC: "Wind",
        correctAnswer: "Rain",
      }),
      shuffleOptions({
        question: "Water is needed for _______.",
        optionA: "Bathing",
        optionB: "Running",
        optionC: "Sleeping",
        correctAnswer: "Bathing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water is needed for brushing teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All living things need water to stay alive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Clean water makes us sick.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should waste water whenever we want.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plants need water to make food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Animals can live without water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rain is the main source of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sea water is salty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Boiled water is safe for drinking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dams are built to store large amounts of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
