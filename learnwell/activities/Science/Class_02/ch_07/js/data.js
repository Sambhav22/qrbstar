export const chapter = "Chapter - 7: Food for Health";
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
        question: "Which of these is our basic need?",
        optionA: "Food",
        optionB: "Toys",
        optionC: "Games",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Bread and sugar belong to which group of foods?",
        optionA: "Bodybuilding",
        optionB: "Energy-giving",
        optionC: "Protective",
        correctAnswer: "Energy-giving",
      }),
      shuffleOptions({
        question: "Which group of food makes us strong against diseases?",
        optionA: "Energy-giving",
        optionB: "Protective",
        optionC: "Bodybuilding",
        correctAnswer: "Protective",
      }),
      shuffleOptions({
        question: "Which meal is eaten in the afternoon?",
        optionA: "Lunch",
        optionB: "Breakfast",
        optionC: "Dinner",
        correctAnswer: "Lunch",
      }),
      shuffleOptions({
        question: "Which of these helps us digest food?",
        optionA: "Fruits",
        optionB: "Water",
        optionC: "Sugar",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Which food keeps our teeth strong?",
        optionA: "Milk",
        optionB: "Potato",
        optionC: "Nuts",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "Who eats fish, eggs and chicken?",
        optionA: "Non-vegetarians",
        optionB: "Vegetarians",
        optionC: "Both",
        correctAnswer: "Non-vegetarians",
      }),
      shuffleOptions({
        question: "Which of these is not a good habit?",
        optionA: "Eating slowly",
        optionB: "Eating junk food",
        optionC: "Washing hands",
        correctAnswer: "Eating junk food",
      }),
      shuffleOptions({
        question: "Which food group keeps us warm in winter?",
        optionA: "Energy-giving",
        optionB: "Protective",
        optionC: "Bodybuilding",
        correctAnswer: "Energy-giving",
      }),
      shuffleOptions({
        question: "Which is called the complete food?",
        optionA: "Milk",
        optionB: "Rice",
        optionC: "Sugar",
        correctAnswer: "Milk",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "________ helps us in growth.",
        optionA: "Bodybuilding food",
        optionB: "Energy-giving food",
        optionC: "Protective food",
        correctAnswer: "Bodybuilding food",
      }),
      shuffleOptions({
        question: "Eating too ________ can make us weak.",
        optionA: "little",
        optionB: "much",
        optionC: "slow",
        correctAnswer: "little",
      }),
      shuffleOptions({
        question: "Vegetarians do not eat ________.",
        optionA: "Meat",
        optionB: "Rice",
        optionC: "Pulses",
        correctAnswer: "Meat",
      }),
      shuffleOptions({
        question: "________ keeps us fit and protects from sickness.",
        optionA: "Protective food",
        optionB: "Junk food",
        optionC: "Fast food",
        correctAnswer: "Protective food",
      }),
      shuffleOptions({
        question: "We should drink ________ glasses of water daily.",
        optionA: "8–10",
        optionB: "1–2",
        optionC: "3–4",
        correctAnswer: "8–10",
      }),
      shuffleOptions({
        question: "________ is eaten in the morning.",
        optionA: "Breakfast",
        optionB: "Lunch",
        optionC: "Dinner",
        correctAnswer: "Breakfast",
      }),
      shuffleOptions({
        question: "Calcium is good for ________.",
        optionA: "Bones and teeth",
        optionB: "Hair",
        optionC: "Nails",
        correctAnswer: "Bones and teeth",
      }),
      shuffleOptions({
        question: "We should eat plenty of ________.",
        optionA: "Fruits and vegetables",
        optionB: "Sweets and cakes",
        optionC: "Burgers and fries",
        correctAnswer: "Fruits and vegetables",
      }),
      shuffleOptions({
        question: "A ________ is taken between meals.",
        optionA: "Snack",
        optionB: "Dinner",
        optionC: "Lunch",
        correctAnswer: "Snack",
      }),
      shuffleOptions({
        question: "We should never ________ food.",
        optionA: "Overeat",
        optionB: "Drink",
        optionC: "Chew",
        correctAnswer: "Overeat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cheese is an energy-giving food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Drinking water helps in digestion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nuts are protective foods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dinner is taken in the morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Junk food should be avoided.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Overeating makes us fat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bodybuilding foods help us grow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fruits are energy-giving foods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Non-vegetarians eat only plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Milk contains calcium.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
