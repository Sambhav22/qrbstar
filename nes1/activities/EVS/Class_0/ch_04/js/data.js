export const chapter = "Chapter - 4: Air We Breathe";
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
          question: "What is the main reason we cannot see air?",
          optionA: "It is invisible",
          optionB: "It is too small",
          optionC: "It is a gas",
          correctAnswer: "A",
         }),
      shuffleOptions({
          question: "Why is air important for humans?",
          optionA: "To see",
          optionB: "To hear",
          optionC: "To breathe",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question:
            "Besides humans, which other living organisms breathe in air?",
          optionA: "Only plants",
          optionB: "Only animals",
          optionC: "Both plants and animals",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question: "What is the term used for air blowing at a high speed?",
          optionA: "Breeze",
          optionB: "Wind",
          optionC: "Gust",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "When air blows in a pleasant manner, it is known as:",
          optionA: "Hurricane",
          optionB: "Breeze",
          optionC: "Tornado",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "How does air get polluted according to the text?",
          optionA: "By breathing",
          optionB: "By burning",
          optionC: "By eating",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "What human activities contribute to the pollution of air, as mentioned in the text?",
          optionA: "Cooking",
          optionB:
            "Burning and emission of smoke from cars, trucks, jeeps, etc.",
          optionC: "Planting trees",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "Which of the following is not a human activity mentioned in the text that causes air pollution?",
          optionA: "Burning",
          optionB: "Smoking",
          optionC: "Planting trees",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question:
            "What is the term used for air blowing at a high speed, according to the text?",
          optionA: "Gust",
          optionB: "Wind",
          optionC: "Breeze",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "What do plants and animals do with the air they breathe in?",
          optionA: "Sing",
          optionB: "Dance",
          optionC: "Breathe",
          correctAnswer: "C",
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
            "Air is all around us. But we cannot _____ it. We can only feel it.",
          optionA: "smell",
          optionB: "see",
          optionC: "hear",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "Air is very important for us. We take in fresh air to _____ .",
          optionA: "drink",
          optionB: "eat",
          optionC: "breathe",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question: "When air blows at a high speed, it is known as _____ .",
          optionA: "tornado",
          optionB: "wind",
          optionC: "storm",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "When air blows in a pleasant manner, it is known as _____ .",
          optionA: "hurricane",
          optionB: "breeze",
          optionC: "thunderstorm",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "Air gets polluted by some human activities such as burning emission of smoke from _____ , trucks, jeeps, etc.",
          optionA: "bicycles",
          optionB: "cars",
          optionC: "trains",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "We cannot _____ air, but we can feel its presence.",
          optionA: "touch",
          optionB: "taste",
          optionC: "hear",
          correctAnswer: "A",
         }),
      shuffleOptions({
          question: "_____ is the primary reason why we take in fresh air.",
          optionA: "To stay dry",
          optionB: "To smell flowers",
          optionC: "To breathe",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question: "Plants and animals also _____ in air.",
          optionA: "sing",
          optionB: "swim",
          optionC: "breathe",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question: "A high-speed movement of air is known as a _____ .",
          optionA: "hurricane",
          optionB: "tornado",
          optionC: "typhoon",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "Air pollution can be caused by the burning emission of smoke from _____ , trucks, jeeps, etc.",
          optionA: "bicycles",
          optionB: "cars",
          optionC: "scooters",
          correctAnswer: "B",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Air is visible to the naked eye.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Plants and animals do not breathe in air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Breeze is a term used for air blowing at a high speed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Fresh air is essential for humans to breathe.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Hurricane is a term used for air blowing in a pleasant manner.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Air pollution is caused by human activities such as burning emissions from vehicles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Plants and animals use air for transportation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Wind is the term used for air blowing at a high speed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Air cannot be felt, only seen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Air pollution is not influenced by the emission of smoke from cars, trucks, and jeeps.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
