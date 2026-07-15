export const chapter = "Chapter - 6: Importance of Water ";
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
            "What are the primary purposes mentioned for needing water?",
          optionA: "Bathing",
          optionB: "Drinking",
          optionC: "Washing",
          correctAnswer: "All of the above",
 }),
      shuffleOptions({
          question:
            "According to the passage, what is the main source of water?",
          optionA: "Pond",
          optionB: "River",
          optionC: "Sea",
          correctAnswer: "Rain",
 }),
      shuffleOptions({
          question: "Where does rainwater primarily get deposited?",
          optionA: "Pond",
          optionB: "River",
          optionC: "Sea",
          correctAnswer: "All of the above",
 }),
      shuffleOptions({
          question:
            "What is mentioned as a source of underground water in the passage?",
          optionA: "Well",
          optionB: "Tube well",
          optionC: "Hand pump",
          correctAnswer: "All of the above",
 }),
      shuffleOptions({
          question: "What is suggested in the passage to save water?",
          optionA: "Take long showers",
          optionB: "Turn off water taps while brushing",
          optionC: "Get leakages of water pipes fixed",
          correctAnswer: "Get leakages of water pipes fixed",
 }),
      shuffleOptions({
          question:
            "What is one recommended practice to conserve water mentioned in the passage?",
          optionA: "Use excessive running water while washing utensils",
          optionB: "Turn off water taps while brushing",
          optionC: "Take long showers",
          correctAnswer: "Turn off water taps while brushing",
 }),
      shuffleOptions({
          question: "What is the passage's emphasis on regarding water usage?",
          optionA: "Increase water consumption",
          optionB: "Limit water usage",
          optionC: "Waste water intentionally",
          correctAnswer: "Limit water usage",
 }),
      shuffleOptions({
          question:
            "What does the passage identify as a consequence of excessive water usage?",
          optionA: "Increase in water availability",
          optionB: "Decrease in water availability",
          optionC: "No impact on water availability",
          correctAnswer: "Decrease in water availability",
 }),
      shuffleOptions({
          question:
            "According to the passage, what may happen soon based on the weather?",
          optionA: "Snowfall",
          optionB: "Hailstorm",
          optionC: "Rain",
          correctAnswer: "Rain",
 }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a use of water in the passage?",
          optionA: "Bathing",
          optionB: "Drinking",
          optionC: "Cooking",
          correctAnswer: "Cooking",
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
            "Water is very important for us. We generally need water for __________, drinking, washing, cleaning, watering plants, etc.",
          optionA: "Cooking",
          optionB: "Bathing",
          optionC: "Exercising",
          correctAnswer: "Bathing",
 }),
      shuffleOptions({
          question:
            "Rain is the main source of water. It gets deposited into : pond, river, __________.",
          optionA: "Ocean",
          optionB: "Sea",
          optionC: "Lake",
          correctAnswer: "Sea",
 }),
      shuffleOptions({
          question:
            "Besides these, some rainwater also seeps into the ground, and we get this underground water from: well, tube well, __________.",
          optionA: "Reservoir",
          optionB: "Hand pump",
          optionC: "Fountain",
          correctAnswer: "Hand pump",
 }),
      shuffleOptions({
          question:
            "As we all know that the water is getting exhausted day by day, so we should limit its usage and try to save it by doing the following: Take short showers. Turn off the water taps while __________.",
          optionA: "Cooking",
          optionB: "Brushing",
          optionC: "Exercising",
          correctAnswer: "Brushing",
 }),
      shuffleOptions({
          question: "Get the __________ of water pipes fixed.",
          optionA: "Leaks",
          optionB: "Breaks",
          optionC: "Cracks",
          correctAnswer: "Leaks",
 }),
      shuffleOptions({
          question:
            "Don't use excessive running water while washing __________.",
          optionA: "Hands",
          optionB: "Clothes",
          optionC: "Utensils",
          correctAnswer: "Utensils",
 }),
      shuffleOptions({
          question:
            "Rainwater is the main source of water, and it gets deposited into ponds, rivers, and __________.",
          optionA: "Oceans",
          optionB: "Lakes",
          optionC: "Seas",
          correctAnswer: "Seas",
 }),
      shuffleOptions({
          question:
            "We generally need water for bathing, drinking, washing, cleaning, and __________.",
          optionA: "Cooking",
          optionB: "Swimming",
          optionC: "Gardening",
          correctAnswer: "Gardening",
 }),
      shuffleOptions({
          question:
            "Besides ponds and rivers, some rainwater also seeps into the ground, providing us with underground water through wells, tube wells, and __________.",
          optionA: "Pumps",
          optionB: "Reservoirs",
          optionC: "Hand pumps",
          correctAnswer: "Hand pumps",
 }),
      shuffleOptions({
          question:
            "To save water, one should turn off the water taps while __________.",
          optionA: "Cooking",
          optionB: "Brushing",
          optionC: "Showering",
          correctAnswer: "Brushing",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Water is not essential for human survival.",
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
          question:
            "Underground water can be obtained from wells, tube wells, and hand pumps.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Taking short showers is not recommended to save water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Rainwater does not get deposited into seas.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Excessive running water should be used while washing utensils.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Leakages of water pipes should be ignored.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Water conservation is not necessary as water is abundant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Rainwater cannot seep into the ground.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Turn off the water taps while brushing is a recommended practice to save water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
