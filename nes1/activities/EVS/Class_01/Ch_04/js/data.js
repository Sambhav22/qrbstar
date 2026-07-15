export const chapter = "Chapter - 4: Be Clean,Healthy and Fit ";
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
            "What is emphasized as a crucial practice for maintaining health in the given text?",
          optionA: "Sleeping late at night",
          optionB: "Getting up early in the morning",
          optionC: "Taking a nap during the day",
          correctAnswer: "Getting up early in the morning",
 }),
      shuffleOptions({
          question:
            "What is recommended as the best exercise for keeping the body fit in the text?",
          optionA: "Weightlifting",
          optionB: "Running",
          optionC: "Yoga",
          correctAnswer: "Yoga",
 }),
      shuffleOptions({
          question:
            "How often does the text suggest doing exercise for maintaining health?",
          optionA: "Weekly",
          optionB: "Daily",
          optionC: "Monthly",
          correctAnswer: "Daily",
 }),
      shuffleOptions({
          question:
            "According to the text, how many times a day should you brush your teeth for good health?",
          optionA: "Once",
          optionB: "Twice",
          optionC: "Thrice",
          correctAnswer: "Twice",
 }),
      shuffleOptions({
          question:
            "What is mentioned as a preventive measure against illness and the spread of diseases in the text?",
          optionA: "Avoiding exercise",
          optionB: "Regular body cleaning",
          optionC: "Wearing dirty clothes",
          correctAnswer: "Regular body cleaning",
 }),
      shuffleOptions({
          question:
            "What does the text recommend regarding the length of nails and hair for maintaining health?",
          optionA: "Keep them long",
          optionB: "Keep them short and clean",
          optionC: "Don't worry about them",
          correctAnswer: "Keep them short and clean",
 }),
      shuffleOptions({
          question:
            "Besides yoga, what other activity is suggested in the text for maintaining health?",
          optionA: "Playing video games",
          optionB: "Watching TV",
          optionC: "Attending yoga classes",
          correctAnswer: "Attending yoga classes",
 }),
      shuffleOptions({
          question:
            "What is stated as the primary benefit of yoga in the text?",
          optionA: "Building muscles",
          optionB: "Keeping the mind sharp",
          optionC: "Keeping the body fit",
          correctAnswer: "Keeping the body fit",
 }),
      shuffleOptions({
          question:
            "What is mentioned as a part of maintaining personal hygiene in the text?",
          optionA: "Wearing wrinkled clothes",
          optionB: "Wearing neat and clean clothes",
          optionC: "Not taking a bath",
          correctAnswer: "Wearing neat and clean clothes",
 }),
      shuffleOptions({
          question:
            "According to the text, when is the ideal time to perform yoga asanas for health benefits?",
          optionA: "After dinner",
          optionB: "In the afternoon",
          optionC: "In the morning",
          correctAnswer: "In the morning",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "_________ is the best exercise to keep us fit",
          optionA: "Yoga",
          optionB: "Neat and Clean",
          optionC: "Bath",
          correctAnswer: "Yoga",
 }),
      shuffleOptions({
          question: "We should take a _____ daily",
          optionA: "Yoga",
          optionB: "Neat and Clean",
          optionC: "Bath",
          correctAnswer: "Bath",
 }),
      shuffleOptions({
          question: "We should wear _____ clothes",
          optionA: "Bath",
          optionB: "Yoga",
          optionC: "Neat and Clean",
          correctAnswer: "Neat and Clean",
 }),
      shuffleOptions({
          question:
            "Cleaning our body is essential for __________ and ___________",
          optionA: "Happiness, relaxation",
          optionB: "Fitness, health",
          optionC: "Intelligence, creativity",
          correctAnswer: "Fitness, health",
 }),
      shuffleOptions({
          question:
            "To maintain good health, it is recommended to get up early in the ___________",
          optionA: "Afternoon",
          optionB: "Evening",
          optionC: "Morning",
          correctAnswer: "Morning",
 }),
      shuffleOptions({
          question:
            "Performing __________ on a daily basis is emphasized for maintaining health",
          optionA: "Cooking",
          optionB: "Exercise",
          optionC: "Reading",
          correctAnswer: "Exercise",
 }),
      shuffleOptions({
          question:
            "According to the text, brushing your teeth __________ a day is advised for good health",
          optionA: "Once",
          optionB: "Thrice",
          optionC: "Twice",
          correctAnswer: "Twice",
 }),
      shuffleOptions({
          question:
            "Keeping nails and hair __________ is mentioned as part of maintaining personal hygiene",
          optionA: "Long and messy",
          optionB: "Short and clean",
          optionC: "Unkempt",
          correctAnswer: "Short and clean",
 }),
      shuffleOptions({
          question:
            "Yoga is referred to as the best exercise to keep us __________",
          optionA: "Tired",
          optionB: "Fit",
          optionC: "Hungry",
          correctAnswer: "Fit",
 }),
      shuffleOptions({
          question:
            "Attending __________ classes and doing yoga with a __________ is suggested in the text",
          optionA: "Dance, partner",
          optionB: "Yoga, instructor",
          optionC: "Cooking, chef",
          correctAnswer: "Yoga, instructor",
 }),
      shuffleOptions({
          question:
            "__________ is highlighted as a preventive measure against illness and diseases",
          optionA: "Avoiding exercise",
          optionB: "Regular body cleaning",
          optionC: "Eating fast food",
          correctAnswer: "Regular body cleaning",
 }),
      shuffleOptions({
          question:
            "Wearing neat and clean clothes is mentioned as part of maintaining __________",
          optionA: "Wealth",
          optionB: "Happiness",
          optionC: "Personal hygiene",
          correctAnswer: "Personal hygiene",
 }),
      shuffleOptions({
          question:
            "Performing some __________ in the morning is recommended for being healthy",
          optionA: "Dances",
          optionB: "Asanas",
          optionC: "Jogs",
          correctAnswer: "Asanas",
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
            "Getting up early in the morning is important for maintaining health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Doing exercise daily is not necessary for staying healthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Taking a bath daily is recommended for good hygiene.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Wearing neat and clean clothes has no impact on personal health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Yoga is mentioned as the best exercise for keeping the body fit.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Performing some asanas in the morning is recommended for being healthy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Brushing your teeth once a day is sufficient for good oral hygiene.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Keeping nails and hair long and messy is recommended for personal hygiene.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Attending yoga classes with an instructor is suggested for maintaining health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Regular body cleaning is highlighted as a preventive measure against illness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
