export const chapter = "Chapter - 10: Healthy Living";
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
            "What is one of the good habits mentioned in the text for maintaining health?",
          optionA: "Playing video games",
          optionB: "Waking up early in the morning",
          optionC: "Sleeping until noon",
          correctAnswer: "b) Waking up early in the morning",
         }),
      shuffleOptions({
          question:
            "How many times a day should you brush your teeth to maintain good health?",
          optionA: "Once a week",
          optionB: "Twice daily",
          optionC: "Only when you remember",
          correctAnswer: "b) Twice daily",
         }),
      shuffleOptions({
          question:
            "What should you do before and after every meal to maintain good hygiene?",
          optionA: "Dance",
          optionB: "Wash your hands",
          optionC: "Brush your teeth",
          correctAnswer: "b) Wash your hands",
         }),
      shuffleOptions({
          question:
            "Which of the following is not a recommended habit for maintaining health according to the text?",
          optionA: "Bathing daily",
          optionB: "Wearing neat and clean clothes",
          optionC: "Eating junk food regularly",
          correctAnswer: "c) Eating junk food regularly",
         }),
      shuffleOptions({
          question:
            "What is the importance of washing your hands after using the toilet as mentioned in the text?",
          optionA: "To make them smell nice",
          optionB: "To prevent the spread of germs and maintain hygiene",
          optionC: "To save water",
          correctAnswer:
            "b) To prevent the spread of germs and maintain hygiene",
         }),
      shuffleOptions({
          question:
            "Which habit is associated with eating meals on time to maintain good health?",
          optionA: "Watching TV all day",
          optionB: "Exercising regularly",
          optionC: "Always eating meals on time",
          correctAnswer: "c) Always eating meals on time",
         }),
      shuffleOptions({
          question:
            "What is one of the recommended habits for maintaining health that is not related to personal hygiene?",
          optionA: "Bathing daily",
          optionB: "Littering in public places",
          optionC: "Exercising daily",
          correctAnswer: "c) Exercising daily",
         }),
      shuffleOptions({
          question:
            "What should you avoid eating to maintain good health, according to the text?",
          optionA: "Fruits and vegetables",
          optionB: "Junk food",
          optionC: "Home-cooked meals",
          correctAnswer: "b) Junk food",
         }),
      shuffleOptions({
          question:
            "What is the suggested practice to ensure you're wearing clean clothes for good health?",
          optionA: "Wearing the same clothes for a week",
          optionB: "Wearing whatever you find",
          optionC: "Wearing neat and clean clothes",
          correctAnswer: "c) Wearing neat and clean clothes",
         }),
      shuffleOptions({
          question:
            "What is the last good habit mentioned in the text for maintaining health?",
          optionA: "Taking long naps",
          optionB: "Exercising daily",
          optionC: "Littering in public places",
          correctAnswer: "b) Exercising daily",
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
            "To be healthy, we should adopt certain good habits such as: Wake up early in the morning. Brush your teeth ____________ daily.",
          optionA: "Once a day",
          optionB: "Twice",
          optionC: "Three times",
          correctAnswer: "Twice",
         }),
      shuffleOptions({
          question:
            "To maintain good hygiene, it's important to always eat ____________ on time.",
          optionA: "Snacks",
          optionB: "Fruits",
          optionC: "Meals",
          correctAnswer: "Meals",
         }),
      shuffleOptions({
          question:
            "It's recommended to ____________ your hands before and after every meal to prevent the spread of germs.",
          optionA: "Ignore",
          optionB: "Wash",
          optionC: "Cover",
          correctAnswer: "Wash",
         }),
      shuffleOptions({
          question:
            "One of the habits for staying healthy is to exercise ____________.",
          optionA: "Occasionally",
          optionB: "Monthly",
          optionC: "Daily",
          correctAnswer: "Daily",
         }),
      shuffleOptions({
          question:
            "To maintain good health, it's advisable not to eat ____________ food.",
          optionA: "Homemade",
          optionB: "Healthy",
          optionC: "Junk",
          correctAnswer: "Junk",
         }),
      shuffleOptions({
          question:
            "Wearing neat and clean clothes is a good habit for ____________.",
          optionA: "Staying indoors",
          optionB: "Maintaining hygiene",
          optionC: "Showing off",
          correctAnswer: "Maintaining hygiene",
         }),
      shuffleOptions({
          question:
            "A healthy habit is to ____________ after using the toilet.",
          optionA: "Dance",
          optionB: "Wash your face",
          optionC: "Wash your hands",
          correctAnswer: "Wash your hands",
         }),
      shuffleOptions({
          question:
            "In order to maintain good health, it's important to ____________ early in the morning.",
          optionA: "Sleep",
          optionB: "Wake up",
          optionC: "Exercise",
          correctAnswer: "Wake up",
         }),
      shuffleOptions({
          question:
            "Another habit for staying healthy is to ____________ daily.",
          optionA: "Travel",
          optionB: "Exercise",
          optionC: "Watch TV",
          correctAnswer: "Exercise",
         }),
      shuffleOptions({
          question:
            "To be healthy, you should not ____________ in public places.",
          optionA: "Clean up",
          optionB: "Litter",
          optionC: "Plant trees",
          correctAnswer: "Litter",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "Waking up early in the morning is a recommended healthy habit.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Brushing your teeth once a day is sufficient for good dental hygiene.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "It is essential to wash your hands before and after every meal for good hygiene.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Eating junk food regularly is a healthy dietary choice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Exercising daily is a recommended habit for maintaining physical health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "It's advisable to wear neat and clean clothes to maintain hygiene.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Littering in public places is a responsible behavior for good health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Washing your hands after using the toilet is unnecessary for maintaining hygiene.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Eating meals on time is an important habit for overall health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Bathing daily is not recommended for good personal hygiene.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
