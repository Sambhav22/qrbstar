export const chapter = "Chapter - 13: Up in the Sky ";
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
          question: "What is the sun?",
          optionA: "A cold ball of ice",
          optionB: "A hot ball of fire",
          optionC: "A round-shaped planet",
          correctAnswer: "b) A hot ball of fire",
 }),
      shuffleOptions({
          question: "What is the moon's source of light?",
          optionA: "It produces its own light",
          optionB: "It reflects the light of the sun",
          optionC: "It absorbs light from the stars",
          correctAnswer: "b) It reflects the light of the sun",
 }),
      shuffleOptions({
          question: "How does the sun appear to move across the sky?",
          optionA: "It moves randomly",
          optionB: "It rises in the west and sets in the east",
          optionC: "It remains stationary",
          correctAnswer: "b) It rises in the east and sets in the west",
 }),
      shuffleOptions({
          question: "What is a star's appearance when seen with the naked eye?",
          optionA: "Enormous and bright",
          optionB: "Small and dim",
          optionC: "Colorful and vibrant",
          correctAnswer: "b) Small and dim",
 }),
      shuffleOptions({
          question: "What causes the appearance of a rainbow in the sky?",
          optionA: "Snowfall",
          optionB: "Raining heavily",
          optionC: "Hailstorm",
          correctAnswer: "b) Raining heavily",
 }),
      shuffleOptions({
          question: "How many colors are present in a rainbow?",
          optionA: "Three",
          optionB: "Seven",
          optionC: "Ten",
          correctAnswer: "b) Seven",
 }),
      shuffleOptions({
          question: "What is the moon to the Earth?",
          optionA: "A planet",
          optionB: "A satellite",
          optionC: "A star",
          correctAnswer: "b) A satellite",
 }),
      shuffleOptions({
          question: "What is the primary role of the sun for Earth?",
          optionA: "Providing darkness",
          optionB: "Providing heat and light",
          optionC: "Controlling tides",
          correctAnswer: "b) Providing heat and light",
 }),
      shuffleOptions({
          question: "Why do stars appear small to us?",
          optionA: "They are actually small",
          optionB: "They are very far from us",
          optionC: "They are hidden during the day",
          correctAnswer: "b) They are very far from us",
 }),
      shuffleOptions({
          question: "When does the sun set?",
          optionA: "In the east",
          optionB: "In the north",
          optionC: "In the west",
          correctAnswer: "c) In the west",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "The sun is a hot ball of _______.",
          optionA: "Water",
          optionB: "Fire",
          optionC: "Ice",
          correctAnswer: "b) Fire",
 }),
      shuffleOptions({
          question: "The moon is the only natural _______ of the earth.",
          optionA: "Planet",
          optionB: "Satellite",
          optionC: "Comet",
          correctAnswer: "b) Satellite",
 }),
      shuffleOptions({
          question:
            "Stars appear small to us because they are very _______ from us.",
          optionA: "Close",
          optionB: "Hidden",
          optionC: "Far",
          correctAnswer: "c) Far",
 }),
      shuffleOptions({
          question: "The sun rises in the _______ and sets in the west.",
          optionA: "North",
          optionB: "South",
          optionC: "East",
          correctAnswer: "c) East",
 }),
      shuffleOptions({
          question: "The moon reflects the _______ of the sun.",
          optionA: "Heat",
          optionB: "Light",
          optionC: "Sound",
          correctAnswer: "b) Light",
 }),
      shuffleOptions({
          question: "Stars twinkle during the _______.",
          optionA: "Day",
          optionB: "Night",
          optionC: "Morning",
          correctAnswer: "b) Night",
 }),
      shuffleOptions({
          question: "The sky looks beautiful when a _______ appears.",
          optionA: "Thunderstorm",
          optionB: "Rainbow",
          optionC: "Tornado",
          correctAnswer: "b) Rainbow",
 }),
      shuffleOptions({
          question: "The sun gives us _______ and light.",
          optionA: "Darkness",
          optionB: "Heat",
          optionC: "Wind",
          correctAnswer: "b) Heat",
 }),
      shuffleOptions({
          question: "The moon changes its _______.",
          optionA: "Color",
          optionB: "Shape",
          optionC: "Size",
          correctAnswer: "b) Shape",
 }),
      shuffleOptions({
          question:
            "Stars shine brightly because they are very _______ from us.",
          optionA: "Close",
          optionB: "Hidden",
          optionC: "Far",
          correctAnswer: "c) Far",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "The sun is a cold ball of ice.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Stars appear large because they are close to us.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "The moon has its own light.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Rainbows are made up of four colors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "The sun rises in the west and sets in the east.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "The stars shine brightly during the day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "The Earth has more than one moon.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Rainbows have seven colors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "The sun is the closest star to the Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Stars twinkle because of their proximity to the Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
