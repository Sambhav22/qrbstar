export const chapter = "Chapter - 13: Work and Play ";
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
            "What is work generally done by people to earn money called?",
          optionA: "Recreation",
          optionB: "Occupation",
          optionC: "Hobby",
          correctAnswer: "Occupation",
 }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a work people do to earn money?",
          optionA: "Teaching",
          optionB: "Sweeping",
          optionC: "Playing games",
          correctAnswer: "Playing games",
 }),
      shuffleOptions({
          question: "In a family, members work to:",
          optionA: "Earn money",
          optionB: "Make their home a better place",
          optionC: "Play games",
          correctAnswer: "Make their home a better place",
 }),
      shuffleOptions({
          question:
            "What activity is the father engaged in, according to the text?",
          optionA: "Cooking food",
          optionB: "Bringing vegetables",
          optionC: "Organizing the room",
          correctAnswer: "Bringing vegetables",
 }),
      shuffleOptions({
          question: "What are the adults doing in the picture?",
          optionA: "Playing games",
          optionB: "Doing yoga",
          optionC: "Cooking food",
          correctAnswer: "Doing yoga",
 }),
      shuffleOptions({
          question: "Which of the following is mentioned as an outdoor game?",
          optionA: "Ludo",
          optionB: "Hockey",
          optionC: "Scrabble",
          correctAnswer: "Hockey",
 }),
      shuffleOptions({
          question: "What is NOT listed as an indoor game?",
          optionA: "Ludo",
          optionB: "Scrabble",
          optionC: "Tennis",
          correctAnswer: "Tennis",
 }),
      shuffleOptions({
          question:
            "According to the text, why do family members usually work?",
          optionA: "To earn money",
          optionB: "To play games",
          optionC: "To make their home a better place",
          correctAnswer: "To make their home a better place",
 }),
      shuffleOptions({
          question: "What is mentioned as a work done to treat the sick?",
          optionA: "Teaching",
          optionB: "Sweeping",
          optionC: "Treating sick",
          correctAnswer: "Treating sick",
 }),
      shuffleOptions({
          question:
            "What are some examples of outdoor games mentioned in the text?",
          optionA: "Ludo, Scrabble, Playing cards",
          optionB: "Cricket, Hockey, Tennis",
          optionC: "Cooking, Organizing room, Bringing vegetables",
          correctAnswer: "Cricket, Hockey, Tennis",
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
            "Work generally done by people to earn money is called their ________.",
          optionA: "Leisure",
          optionB: "Occupation",
          optionC: "Hobby",
          correctAnswer: "Occupation",
 }),
      shuffleOptions({
          question:
            "In a family, all members work to make their home a better place, not to earn ________.",
          optionA: "Goods",
          optionB: "Money",
          optionC: "Services",
          correctAnswer: "Money",
 }),
      shuffleOptions({
          question:
            "The father in the family is engaged in the work of bringing ________.",
          optionA: "Groceries",
          optionB: "Vegetables",
          optionC: "Toys",
          correctAnswer: "Vegetables",
 }),
      shuffleOptions({
          question:
            "According to the text, adults in the picture are doing ________.",
          optionA: "Cooking",
          optionB: "Yoga",
          optionC: "Playing games",
          correctAnswer: "Yoga",
 }),
      shuffleOptions({
          question:
            "Outdoor games mentioned in the text include ________, hockey, and tennis.",
          optionA: "Cricket",
          optionB: "Chess",
          optionC: "Ludo",
          correctAnswer: "Cricket",
 }),
      shuffleOptions({
          question:
            "Indoor games listed in the text are ludo, scrabble, and ________.",
          optionA: "Playing cards",
          optionB: "Chess",
          optionC: "Tennis",
          correctAnswer: "Playing cards",
 }),
      shuffleOptions({
          question:
            "Some of the works people do to earn money are teaching, treating the ________, sweeping, and growing crops.",
          optionA: "Healthy",
          optionB: "Sick",
          optionC: "Plants",
          correctAnswer: "Sick",
 }),
      shuffleOptions({
          question:
            "In the family, children are responsible for organizing ________.",
          optionA: "Their toys",
          optionB: "Their room",
          optionC: "Family events",
          correctAnswer: "Their room",
 }),
      shuffleOptions({
          question:
            "Adults are depicted doing yoga, while children are shown playing different ________.",
          optionA: "Instruments",
          optionB: "Games",
          optionC: "Sports",
          correctAnswer: "Games",
 }),
      shuffleOptions({
          question:
            "Work done by family members is aimed at making their home a better place to ________ in.",
          optionA: "Work",
          optionB: "Live",
          optionC: "Play",
          correctAnswer: "Live",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "People work in a family to earn money.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Yoga is shown as an activity in the picture.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "Indoor games mentioned include cricket, hockey, and tennis.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Children in the family are responsible for cooking food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Teaching is mentioned as a work done to treat the sick.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Ludo, Scrabble, and playing cards are outdoor games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question:
            "Family members work to make their home a better place to live in.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question:
            "The father is engaged in bringing vegetables according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
 }),
      shuffleOptions({
          question: "Sweeping is mentioned as a work people do to earn money.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
 }),
      shuffleOptions({
          question: "Cricket, hockey, and tennis are listed as indoor games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
