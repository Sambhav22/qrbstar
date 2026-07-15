export const chapter = "Chapter - 16: Beauty of the Earth ";
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
            "What percentage of the Earth's surface is covered by water?",
          optionA: "50%",
          optionB: "70%",
          optionC: "30%",
          correctAnswer: "70%",
         }),
      shuffleOptions({
          question: "What type of landform is a farm land?",
          optionA: "Mountain",
          optionB: "Plain",
          optionC: "Valley",
          correctAnswer: "Plain",
         }),
      shuffleOptions({
          question:
            "Which of the following is not a type of landform mentioned in the text?",
          optionA: "Desert",
          optionB: "Hill",
          optionC: "Ocean",
          correctAnswer: "Ocean",
         }),
      shuffleOptions({
          question: "What is the main characteristic of a plain?",
          optionA: "Uneven surface",
          optionB: "Hilly terrain",
          optionC: "Flat and even surface",
          correctAnswer: "Flat and even surface",
         }),
      shuffleOptions({
          question:
            "What are the different types of waterbodies mentioned in the text?",
          optionA: "River, Desert, Pond",
          optionB: "Sea, Lake, Hill",
          optionC: "River, Pond, Sea, Lake",
          correctAnswer: "River, Pond, Sea, Lake",
         }),
      shuffleOptions({
          question: "What type of waterbodies are freshwater bodies?",
          optionA: "Oceans and Seas",
          optionB: "Ponds and Lakes",
          optionC: "Rivers and Lakes",
          correctAnswer: "Rivers and Lakes",
         }),
      shuffleOptions({
          question: "What is the primary activity mentioned in the farm land?",
          optionA: "Skiing",
          optionB: "Crops cultivation",
          optionC: "Fishing",
          correctAnswer: "Crops cultivation",
         }),
      shuffleOptions({
          question: "Which part of the Earth has a higher percentage of land?",
          optionA: "Northern Hemisphere",
          optionB: "Southern Hemisphere",
          optionC: "Equator",
          correctAnswer: "Northern Hemisphere",
         }),
      shuffleOptions({
          question: "Which landform is suitable for easy crop cultivation?",
          optionA: "Mountain",
          optionB: "Desert",
          optionC: "Plain",
          correctAnswer: "Plain",
         }),
      shuffleOptions({
          question: "Why is water from oceans and seas not fit for our use?",
          optionA: "It is too cold",
          optionB: "It is too deep",
          optionC: "It is salty",
          correctAnswer: "It is salty",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Our earth has ________ % of land",
          optionA: "30%",
          optionB: "Plain",
          optionC: "Water",
          correctAnswer: "30%",
         }),
      shuffleOptions({
          question: "Flat and even land is called _________",
          optionA: "Water",
          optionB: "River",
          optionC: "Plain",
          correctAnswer: "Plain",
         }),
      shuffleOptions({
          question: "_________ is available in various forms on the earth",
          optionA: "River",
          optionB: "Plain",
          optionC: "Water",
          correctAnswer: "Water",
         }),
      shuffleOptions({
          question: "_________ is a freshwater body",
          optionA: "River",
          optionB: "Water",
          optionC: "30%",
          correctAnswer: "River",
         }),
      shuffleOptions({
          question:
            "A farm land is a type of landform called _____. It is flat and even.",
          optionA: "Mountain",
          optionB: "Plain",
          optionC: "Desert",
          correctAnswer: "Plain",
         }),
      shuffleOptions({
          question:
            "On the Earth, different types of landforms include desert, mountain, hill, and ______.",
          optionA: "Plateau",
          optionB: "Valley",
          optionC: "Ocean",
          correctAnswer: "Valley",
         }),
      shuffleOptions({
          question:
            "Let's go on a farm land; it is a flat area and is commonly referred to as a _______",
          optionA: "Mountain",
          optionB: "Plain",
          optionC: "Desert",
          correctAnswer: "Plain",
         }),
      shuffleOptions({
          question:
            "Waterbodies on Earth include river, pond, sea, and _______",
          optionA: "Mountain",
          optionB: "Lake",
          optionC: "Valley",
          correctAnswer: "Lake",
         }),
      shuffleOptions({
          question: "Only rivers and lakes are considered ______ bodies",
          optionA: "Saltwater",
          optionB: "Freshwater",
          optionC: "Brackish",
          correctAnswer: "Freshwater",
         }),
      shuffleOptions({
          question: "Water found in oceans and seas is typically _______",
          optionA: "Freshwater",
          optionB: "Brackish",
          optionC: "Salty",
          correctAnswer: "Salty",
         }),
      shuffleOptions({
          question: "Farm lands are characterized by being flat and ______",
          optionA: "Hilly",
          optionB: "Uneven",
          optionC: "Even",
          correctAnswer: "Even",
         }),
      shuffleOptions({
          question:
            "Water from rivers and lakes is generally considered ______",
          optionA: "Brackish",
          optionB: "Freshwater",
          optionC: "Salty",
          correctAnswer: "Freshwater",
         }),
      shuffleOptions({
          question:
            "The Earth has different types of landforms, and one of them is a _______",
          optionA: "Plateau",
          optionB: "Ocean",
          optionC: "Desert",
          correctAnswer: "Plateau",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "The Earth is covered with 70% water and 30% land.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "A farm land is a type of landform that is hilly and uneven.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Desert, mountain, hill, and valley are different types of waterbodies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Rivers and lakes are considered freshwater bodies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Water found in oceans and seas is typically salty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Flat and even land is commonly referred to as a plateau.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Water from rivers and lakes is generally considered brackish.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The Northern Hemisphere has a higher percentage of land compared to the Southern Hemisphere.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "All waterbodies, including rivers and lakes, can be used for human consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Plateau is one of the different types of landforms on Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
