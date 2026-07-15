export const chapter = "Chapter - 4: My House ";
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
          question: "What does living together in a family teach us?",
          optionA: "To fly",
          optionB: "To share, be loving, and be caring",
          optionC: "To dance",
          correctAnswer: "To share, be loving, and be caring",
         }),
      shuffleOptions({
          question: "How many types of houses are mentioned in the text?",
          optionA: "Three",
          optionB: "Four",
          optionC: "Two",
          correctAnswer: "Two",
         }),
      shuffleOptions({
          question:
            "What materials are mentioned in the text as used in Navya's permanent house construction?",
          optionA: "Paper and plastic",
          optionB: "Bricks, cement, wood, etc.",
          optionC: "Glass and metal",
          correctAnswer: "Bricks, cement, wood, etc.",
         }),
      shuffleOptions({
          question: "What is the purpose of a drawing room in Navya's house?",
          optionA: "To draw pictures",
          optionB: "To sit and talk with guests",
          optionC: "To study",
          correctAnswer: "To sit and talk with guests",
         }),
      shuffleOptions({
          question: "Which room in Navya's house is meant for studying?",
          optionA: "Bathroom",
          optionB: "Kitchen",
          optionC: "Study room",
          correctAnswer: "Study room",
         }),
      shuffleOptions({
          question:
            "What kind of houses are mentioned as temporary in nature in the text?",
          optionA: "Brick houses",
          optionB: "Permanent houses",
          optionC: "Houseboat, caravan, igloo",
          correctAnswer: "Houseboat, caravan, igloo",
         }),
      shuffleOptions({
          question:
            "What are some materials mentioned for making temporary houses?",
          optionA: "Gold and silver",
          optionB: "Clothes, wood, ice, etc.",
          optionC: "Plastic and glass",
          correctAnswer: "Clothes, wood, ice, etc.",
         }),
      shuffleOptions({
          question:
            "What do all types of houses, whether permanent or temporary, provide to us?",
          optionA: "Entertainment",
          optionB: "Shelter",
          optionC: "Education",
          correctAnswer: "Shelter",
         }),
      shuffleOptions({
          question:
            "What ceremony is mentioned in the text related to Navya's house?",
          optionA: "Graduation ceremony",
          optionB: "Housewarming ceremony (havan)",
          optionC: "Wedding ceremony",
          correctAnswer: "Housewarming ceremony (havan)",
         }),
      shuffleOptions({
          question:
            "What is emphasized regarding the upkeep of houses in the text?",
          optionA: "They should be left dirty",
          optionB: "They should be kept neat and clean",
          optionC: "Only permanent houses should be cleaned",
          correctAnswer: "They should be kept neat and clean",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "We all live in a house with our ___________.",
          optionA: "Friends",
          optionB: "Family",
          optionC: "Neighbours",
          correctAnswer: "Family",
         }),
      shuffleOptions({
          question: "Living together teaches us to _________.",
          optionA: "Play video games",
          optionB: "Share, be loving, and be caring",
          optionC: "Avoid each other",
          correctAnswer: "Share, be loving, and be caring",
         }),
      shuffleOptions({
          question:
            "Generally, houses are of two types: permanent houses and __________.",
          optionA: "Temporary houses",
          optionB: "Mobile homes",
          optionC: "Floating houses",
          correctAnswer: "Temporary houses",
         }),
      shuffleOptions({
          question:
            "Navya's house is made up of bricks, cement, and ___________.",
          optionA: "Straw",
          optionB: "Wood",
          optionC: "Plastic",
          correctAnswer: "Wood",
         }),
      shuffleOptions({
          question:
            "The drawing room in Navya's house is used to sit and talk with ___________.",
          optionA: "Pets",
          optionB: "Ghosts",
          optionC: "Guests",
          correctAnswer: "Guests",
         }),
      shuffleOptions({
          question: "Navya's house has a study room for ___________.",
          optionA: "Watching TV",
          optionB: "Studying",
          optionC: "Sleeping",
          correctAnswer: "Studying",
         }),
      shuffleOptions({
          question: "The kitchen in Navya's house is used to ___________.",
          optionA: "Play music",
          optionB: "Cook food",
          optionC: "Paint",
          correctAnswer: "Cook food",
         }),
      shuffleOptions({
          question:
            "Houses made of clothes, wood, ice, etc., are examples of ___________ houses.",
          optionA: "Permanent",
          optionB: "Temporary",
          optionC: "Luxury",
          correctAnswer: "Temporary",
         }),
      shuffleOptions({
          question:
            "Houseboat, caravan, and igloo are examples of temporary houses made for ___________ purposes.",
          optionA: "Everyday living",
          optionB: "Particular",
          optionC: "Luxury",
          correctAnswer: "Particular",
         }),
      shuffleOptions({
          question:
            "All houses, whether permanent or temporary, provide ___________ to us.",
          optionA: "Entertainment",
          optionB: "Shelter",
          optionC: "Education",
          correctAnswer: "Shelter",
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
            "Living together teaches us to share, be loving, and be caring.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Navya's house is made up of plastic.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The drawing room in Navya's house is used for studying.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Houses made of clothes, wood, and ice are considered permanent.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Houseboat, caravan, and igloo are examples of temporary houses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "All houses, whether permanent or temporary, provide education to us.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The kitchen in Navya's house is used for cooking food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Housewarming ceremony (havan) is mentioned in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Houses made of bricks, cement, and wood are considered temporary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "We should keep our houses neat and clean.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
