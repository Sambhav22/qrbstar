export const chapter = "Chapter - 6: Our Houses and Neighbourhood ";
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
          question: "What are houses made of in cities?",
          optionA: "Mud and thorny bushes",
          optionB: "Iron, steel, bricks, and cement",
          optionC: "Wood and bamboo",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "Why do houses in hilly areas have sloping roofs?",
          optionA: "To collect rainwater",
          optionB: "To prevent the falling of snow",
          optionC: "To attract wild animals",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "What material are the roofs made of in houses in deserts?",
          optionA: "Iron and steel",
          optionB: "Thorny bushes",
          optionC: "Mud",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "How are houses constructed in flooded areas to combat heavy rainfall?",
          optionA: "On stilts raised from wooden poles",
          optionB: "With sloping roofs",
          optionC: "Plastered with mud",
          correctAnswer: "A",
         }),
      shuffleOptions({
          question: "Why are houses in earthquake-prone areas made of wood?",
          optionA: "To attract insects",
          optionB: "Because wood is flexible and doesn't break easily",
          optionC: "To keep the house cool",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "What is a golden rule for keeping a house clean?",
          optionA: "Cover the dustbin to attract flies",
          optionB: "Sweep and mop the floors weekly",
          optionC: "Throw garbage in dustbins only",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question: "What is the area surrounding our house known as?",
          optionA: "District",
          optionB: "Neighborhood",
          optionC: "Locality",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "What is the purpose of going to the market?",
          optionA: "To learn and study",
          optionB: "To get necessary items",
          optionC: "To deposit money",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "What is the importance of a map in accessing location?",
          optionA: "It helps in locating different places in an area",
          optionB: "It attracts flies and insects",
          optionC: "It keeps the house cool",
          correctAnswer: "A",
         }),
      shuffleOptions({
          question:
            "How many cardinal directions are there, and what are they?",
          optionA: "Two - Left and Right",
          optionB: "Three - Up, Down, and Sideways",
          optionC: "Four - East, West, North, and South",
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
            "In cities, permanent houses such as ____________, flats, apartments, etc., are made of iron, steel, bricks, cement, etc.",
          optionA: "Huts",
          optionB: "Temporary",
          optionC: "Bungalows",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question:
            "In hilly areas, houses have sloping roofs to prevent the falling of __________.",
          optionA: "Sand",
          optionB: "Snow",
          optionC: "Rain",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "In deserts, the walls of houses are plastered with mud to keep them cool, and roofs are made of __________ bushes.",
          optionA: "Thorny",
          optionB: "Bamboo",
          optionC: "Palm",
          correctAnswer: "A",
         }),
      shuffleOptions({
          question:
            "In flooded areas, houses are made on a raised platform of __________ poles, made from bamboo and called stilts.",
          optionA: "Steel",
          optionB: "Wooden",
          optionC: "Concrete",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "Houses in earthquake-prone areas are made up of __________ because they are flexible and don't break easily.",
          optionA: "Concrete",
          optionB: "Steel",
          optionC: "Wood",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question:
            "To keep a house clean, toilets and bathrooms should be cleaned __________.",
          optionA: "Monthly",
          optionB: "Weekly",
          optionC: "Yearly",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "The area surrounding our house is known as __________.",
          optionA: "District",
          optionB: "Suburb",
          optionC: "Neighborhood",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question:
            "A map is an exact drawing of a place on a flat surface, showing the location of different places in an area, and helps to access __________.",
          optionA: "Time",
          optionB: "Weather",
          optionC: "Location",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question:
            "We have four cardinal directions - East, West, North, and __________.",
          optionA: "South-East",
          optionB: "South-West",
          optionC: "South",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question:
            "If you want to go to the school from the house, you will come straight, then take a __________ turn after passing the mall.",
          optionA: "Right",
          optionB: "Left",
          optionC: "U-turn",
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
          question: "Unusual houses are commonly found in nature.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Houses in hilly areas have straight roofs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Houses in deserts are plastered with cement.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Houses in flooded areas are often constructed on stilts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Wooden houses are not suitable for earthquake-prone areas.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "To keep a house clean, toilets and bathrooms should be cleaned weekly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "The area surrounding our house is known as a district.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "A map is an exact drawing of a place on a flat surface, showing the location of different places.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "We have five cardinal directions - North, South, East, West, and Southeast.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Taking a left turn is required to reach the school from the house in the given directions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
