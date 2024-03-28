export const chapter = "Chapter - 8: Shelter to Live ";
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
            "What is the main purpose of a shelter, as mentioned in the text?",
          optionA: "Entertainment",
          optionB: "Protection from various elements",
          optionC: "Social gatherings",
          correctAnswer: "Protection from various elements",
 }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a type of house or shelter in the text?",
          optionA: "Apartment",
          optionB: "Bungalow",
          optionC: "Cottage",
          correctAnswer: "Cottage",
 }),
      shuffleOptions({
          question: "What are the different rooms mentioned in Anya's house?",
          optionA: "Bedroom, bathroom, kitchen, garden",
          optionB: "Living room, study, garage, balcony",
          optionC: "Bedroom, drawing room, bathroom, kitchen, garden",
          correctAnswer: "Bedroom, drawing room, bathroom, kitchen, garden",
 }),
      shuffleOptions({
          question:
            "Why is it mentioned that we should keep our house neat and clean?",
          optionA: "To impress guests",
          optionB: "To sell the house",
          optionC: "A neat house is liked by all",
          correctAnswer: "A neat house is liked by all",
 }),
      shuffleOptions({
          question:
            "According to the text, what is the purpose of a drawing room in a house?",
          optionA: "Sleeping",
          optionB: "Cooking",
          optionC: "Attending guests",
          correctAnswer: "Attending guests",
 }),
      shuffleOptions({
          question:
            "Which of the following is not mentioned as a type of house or shelter in the text?",
          optionA: "Flat",
          optionB: "Duplex",
          optionC: "Mansion",
          correctAnswer: "Mansion",
 }),
      shuffleOptions({
          question:
            "What does a house protect us from, as mentioned in the text?",
          optionA: "Entertainment",
          optionB: "Heat, rain, wind, animals",
          optionC: "Social gatherings",
          correctAnswer: "Heat, rain, wind, animals",
 }),
      shuffleOptions({
          question: "In Anya's house, which room is mentioned for playing?",
          optionA: "Bedroom",
          optionB: "Kitchen",
          optionC: "Garden",
          correctAnswer: "Garden",
 }),
      shuffleOptions({
          question:
            "What is the primary function of a kitchen in a house, according to the text?",
          optionA: "Sleeping",
          optionB: "Cooking food",
          optionC: "Bathing",
          correctAnswer: "Cooking food",
 }),
      shuffleOptions({
          question:
            "What is the text emphasizing about the importance of a shelter?",
          optionA: "It provides luxury",
          optionB: "It is a basic need for protection",
          optionC: "It is unnecessary",
          correctAnswer: "It is a basic need for protection",
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
            "Shelter is an important basic __________. We need a shelter to live. It protects us from heat, rain, wind, animals, etc.",
          optionA: "Luxury",
          optionB: "Requirement",
          optionC: "Necessity",
          correctAnswer: "Necessity",
 }),
      shuffleOptions({
          question:
            "There are many types of houses or shelters such as __________, bungalow, flat, duplex, etc.",
          optionA: "Mansion",
          optionB: "Apartment",
          optionC: "Hut",
          correctAnswer: "Apartment",
 }),
      shuffleOptions({
          question:
            "A house has many rooms such as bedroom to sleep, drawing room to attend guests, bathroom to bath, kitchen to cook food, and a beautiful __________ to play.",
          optionA: "Garage",
          optionB: "Balcony",
          optionC: "Garden",
          correctAnswer: "Garden",
 }),
      shuffleOptions({
          question:
            "We should keep our house neat and clean as a neat house is liked by __________.",
          optionA: "Guests",
          optionB: "Animals",
          optionC: "Everyone",
          correctAnswer: "Everyone",
 }),
      shuffleOptions({
          question:
            "Let's take a look at Anya's house: A house has many rooms such as bedroom to sleep, drawing room to attend guests, bathroom to bath, kitchen to cook food, and beautiful garden to __________.",
          optionA: "Study",
          optionB: "Play",
          optionC: "Exercise",
          correctAnswer: "Play",
 }),
      shuffleOptions({
          question:
            "In Anya's house, there are many types of rooms, including a drawing room to attend __________.",
          optionA: "Meetings",
          optionB: "Guests",
          optionC: "Pets",
          correctAnswer: "Guests",
 }),
      shuffleOptions({
          question:
            "According to the text, a house protects us from heat, rain, wind, and __________.",
          optionA: "Snow",
          optionB: "Thunderstorms",
          optionC: "Animals",
          correctAnswer: "Animals",
 }),
      shuffleOptions({
          question:
            "The text mentions that we live in a house with our __________.",
          optionA: "Friends",
          optionB: "Family",
          optionC: "Neighbors",
          correctAnswer: "Family",
 }),
      shuffleOptions({
          question: "Anya's house has a kitchen to __________ food.",
          optionA: "Sleep",
          optionB: "Cook",
          optionC: "Exercise",
          correctAnswer: "Cook",
 }),
      shuffleOptions({
          question:
            "The primary purpose of a drawing room in a house, according to the text, is to attend __________.",
          optionA: "Work",
          optionB: "Guests",
          optionC: "Parties",
          correctAnswer: "Guests",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Shelter is a luxury.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "An apartment is not a type of house or shelter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "A house has rooms like a drawing room, bathroom, and kitchen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "A neat house is not liked by all.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "A garden is mentioned as a room in Anya's house.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "A flat is not a type of house or shelter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "A house protects us from snow.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "We live in a house with our friends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Anya's house has a garage for playing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "The primary purpose of a drawing room is to cook food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
