export const chapter = "Chapter - 10: Water";
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
        question: "Which type of water is found in seas and oceans?",
        optionA: "Salty",
        optionB: "Fresh",
        optionC: "Sweet",
        correctAnswer: "Salty",
      }),
      shuffleOptions({
        question: "Which device helps to pump out groundwater?",
        optionA: "Tap",
        optionB: "Hand pump",
        optionC: "Glass",
        correctAnswer: "Hand pump",
      }),
      shuffleOptions({
        question: "What happens if we store water in uncovered containers?",
        optionA: "It becomes clean",
        optionB: "It becomes dirty",
        optionC: "It becomes safe",
        correctAnswer: "It becomes dirty",
      }),
      shuffleOptions({
        question: "Which of these does NOT make water safe for drinking?",
        optionA: "Filtering",
        optionB: "Boiling",
        optionC: "Freezing",
        correctAnswer: "Freezing",
      }),
      shuffleOptions({
        question: "Which of these is an example of wasting water?",
        optionA: "Repairing taps",
        optionB: "Leaving tap open",
        optionC: "Using bucket bath",
        correctAnswer: "Leaving tap open",
      }),
      shuffleOptions({
        question: "How should water stored in tanks and drums be kept?",
        optionA: "Covered",
        optionB: "Dirty",
        optionC: "Open",
        correctAnswer: "Covered",
      }),
      shuffleOptions({
        question: "Which of these is NOT a form of water?",
        optionA: "Ice",
        optionB: "Vapour",
        optionC: "Rock",
        correctAnswer: "Rock",
      }),
      shuffleOptions({
        question: "What does heating water change it into?",
        optionA: "Melting",
        optionB: "Freezing",
        optionC: "Vapour",
        correctAnswer: "Vapour",
      }),
      shuffleOptions({
        question: "What is rainwater collected on the surface called?",
        optionA: "Surface water",
        optionB: "Groundwater",
        optionC: "Seawater",
        correctAnswer: "Surface water",
      }),
      shuffleOptions({
        question: "Using rainwater for watering plants is an example of what?",
        optionA: "Wasting water",
        optionB: "Saving water",
        optionC: "Making water dirty",
        correctAnswer: "Saving water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water is ______, so we should not waste it.",
        optionA: "Precious",
        optionB: "Dirty",
        optionC: "Salty",
        correctAnswer: "Precious",
      }),
      shuffleOptions({
        question: "We should always use ______ containers to store water.",
        optionA: "Clean",
        optionB: "Dirty",
        optionC: "Open",
        correctAnswer: "Clean",
      }),
      shuffleOptions({
        question: "______ water has salt and is unfit for drinking.",
        optionA: "Sea",
        optionB: "Tap",
        optionC: "Filtered",
        correctAnswer: "Sea",
      }),
      shuffleOptions({
        question: "We should not leave the tap ______ while brushing.",
        optionA: "Open",
        optionB: "Closed",
        optionC: "Covered",
        correctAnswer: "Open",
      }),
      shuffleOptions({
        question: "Tap water sometimes becomes unsafe during the ______ season.",
        optionA: "Rainy",
        optionB: "Winter",
        optionC: "Summer",
        correctAnswer: "Rainy",
      }),
      shuffleOptions({
        question: "Stored water should always be kept ______.",
        optionA: "Covered",
        optionB: "Uncovered",
        optionC: "Open",
        correctAnswer: "Covered",
      }),
      shuffleOptions({
        question: "Some rainwater seeps into the ground and becomes ______.",
        optionA: "Groundwater",
        optionB: "Surface water",
        optionC: "Salty water",
        correctAnswer: "Groundwater",
      }),
      shuffleOptions({
        question: "Rainwater collected on the surface is called ______.",
        optionA: "Surface water",
        optionB: "Groundwater",
        optionC: "Seawater",
        correctAnswer: "Surface water",
      }),
      shuffleOptions({
        question: "Drinking ______ water makes us sick.",
        optionA: "Dirty",
        optionB: "Clean",
        optionC: "Filtered",
        correctAnswer: "Dirty",
      }),
      shuffleOptions({
        question: "______ kills germs in water.",
        optionA: "Boiling",
        optionB: "Freezing",
        optionC: "Cooling",
        correctAnswer: "Boiling",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Oceans contain freshwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Boiling water for 20 minutes makes it safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rainwater can be stored for later use.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dirty glasses are safe for drinking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Condensation changes vapour into water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water filters remove impurities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rain is the main source of water on earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should waste water while bathing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Freshwater is limited on earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Groundwater is stored under the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
