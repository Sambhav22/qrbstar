export const chapter = "Chapter - 3: Water We Drink";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "What is the term used for clean water that is safe to drink?",
          optionA: "Purified water",
          optionB: "Potable water",
          optionC: "Distilled water",
          correctAnswer: "b) Potable water",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a use for water in the text?",
          optionA: "Cooking",
          optionB: "Swimming",
          optionC: "Cleaning",
          correctAnswer: "b) Swimming",
         }),
      shuffleOptions({
          question: "How can we save water when not using it?",
          optionA: "Leave the tap open",
          optionB: "Close the tap when not in use",
          optionC: "Use more water while bathing, shaving, and brushing",
          correctAnswer: "b) Close the tap when not in use",
         }),
      shuffleOptions({
          question:
            "What is suggested to be done to save water in case of leakages?",
          optionA: "Ignore them",
          optionB: "Fix leakages",
          optionC: "Increase water flow",
          correctAnswer: "b) Fix leakages",
         }),
      shuffleOptions({
          question:
            "What kind of water is safe for drinking according to the text?",
          optionA: "Polluted water",
          optionB: "Saltwater",
          optionC: "Potable water",
          correctAnswer: "c) Potable water",
         }),
      shuffleOptions({
          question:
            "What activity does the text recommend using less water for?",
          optionA: "Cooking",
          optionB: "Bathing",
          optionC: "Planting",
          correctAnswer: "b) Bathing",
         }),
      shuffleOptions({
          question:
            "What is the main message regarding water usage in the text?",
          optionA: "Waste as much water as possible",
          optionB: "Save and conserve water",
          optionC: "Use water excessively",
          correctAnswer: "b) Save and conserve water",
         }),
      shuffleOptions({
          question: "What is the importance of water mentioned in the text?",
          optionA: "Only for drinking",
          optionB: "Limited uses",
          optionC: "Very important for various needs",
          correctAnswer: "c) Very important for various needs",
         }),
      shuffleOptions({
          question:
            "What is recommended to be done with the tap when not in use?",
          optionA: "Keep it open",
          optionB: "Close it",
          optionC: "Adjust the temperature",
          correctAnswer: "b) Close it",
         }),
      shuffleOptions({
          question:
            "What should be done while brushing, shaving, and bathing to save water?",
          optionA: "Use more water",
          optionB: "Ignore water usage",
          optionC: "Use less water",
          correctAnswer: "c) Use less water",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "Water is very important for us. We need water for: drinking, bathing, washing, cleaning, watering plants, and ______.",
          optionA: "Cooking",
          optionB: "Swimming",
          optionC: "Sleeping",
          correctAnswer: "a) Cooking",
         }),
      shuffleOptions({
          question:
            "For all the above needs, we use clean water. The clean water that is safe to drink is known as ______ water.",
          optionA: "Fresh",
          optionB: "Potable",
          optionC: "Sparkling",
          correctAnswer: "b) Potable",
         }),
      shuffleOptions({
          question:
            "We should not waste water and try to save it by doing the following: Close the tap when not in use, fix ______, and use less water while bathing, shaving, and brushing.",
          optionA: "Windows",
          optionB: "Leakages",
          optionC: "Doors",
          correctAnswer: "b) Leakages",
         }),
      shuffleOptions({
          question:
            "Using clean water for drinking ensures ______ and hygiene.",
          optionA: "Flavor",
          optionB: "Safety",
          optionC: "Warmth",
          correctAnswer: "b) Safety",
         }),
      shuffleOptions({
          question:
            "To conserve water, it is essential to use ______ while performing daily tasks.",
          optionA: "Excessive water",
          optionB: "More water",
          optionC: "Less water",
          correctAnswer: "c) Less water",
         }),
      shuffleOptions({
          question:
            "Closing the tap when not in use is one of the ways to ______ water.",
          optionA: "Preserve",
          optionB: "Waste",
          optionC: "Store",
          correctAnswer: "a) Preserve",
         }),
      shuffleOptions({
          question: "Fixing ______ helps prevent water wastage in our homes.",
          optionA: "Appliances",
          optionB: "Leakages",
          optionC: "Faucets",
          correctAnswer: "b) Leakages",
         }),
      shuffleOptions({
          question:
            "Using less water while bathing, shaving, and brushing is a practical way to ______ water.",
          optionA: "Conserve",
          optionB: "Waste",
          optionC: "Heat",
          correctAnswer: "a) Conserve",
         }),
      shuffleOptions({
          question: "Water is essential for ______ the plants in our gardens.",
          optionA: "Watering",
          optionB: "Cooking",
          optionC: "Watching",
          correctAnswer: "a) Watering",
         }),
      shuffleOptions({
          question: "Potable water is clean and ______ to drink.",
          optionA: "Delicious",
          optionB: "Safe",
          optionC: "Green",
          correctAnswer: "b) Safe",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Water is only important for drinking purposes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Using less water while bathing, shaving, and brushing is recommended for water conservation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Potable water is unsafe for consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Leaving the tap open when not in use helps in water conservation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Fixing leakages is not a recommended method for saving water at home.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Watering plants with clean water is unnecessary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Drinking polluted water is safe for human consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Using excessive water while cooking is recommended for better taste.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Closing the tap when not in use is a suggested practice for water conservation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Wasting water is acceptable in daily activities.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
