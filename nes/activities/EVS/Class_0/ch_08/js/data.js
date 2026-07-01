export const chapter = "Chapter - 8: Animals Around Us";
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
            "What type of place is described as a living place for many animals in the text?",
          optionA: "Farm",
          optionB: "House",
          optionC: "Forest",
          correctAnswer: "c",
         }),
      shuffleOptions({
          question:
            "Which of the following wild animals are mentioned as being seen in a forest?",
          optionA: "Hen",
          optionB: "Giraffe",
          optionC: "Sheep",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question:
            "Where do we commonly see domestic animals like hen, sheep, and goat?",
          optionA: "Forest",
          optionB: "Farm",
          optionC: "House",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question:
            "What type of animals are commonly found as pets in houses?",
          optionA: "Elephant and giraffe",
          optionB: "Lion and sheep",
          optionC: "Cat and dog",
          correctAnswer: "c",
         }),
      shuffleOptions({
          question:
            "What is the wild animal mentioned in the forest that is known for its long neck?",
          optionA: "Elephant",
          optionB: "Giraffe",
          optionC: "Lion",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question:
            "In which of the following places do we see both wild and domestic animals, as mentioned in the text?",
          optionA: "House",
          optionB: "Farm",
          optionC: "Forest",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question: "What is a common domestic bird mentioned in the text?",
          optionA: "Lion",
          optionB: "Hen",
          optionC: "Giraffe",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question:
            "Which of the following is NOT mentioned as a wild animal in the text?",
          optionA: "Elephant",
          optionB: "Sheep",
          optionC: "Lion",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question:
            "Where do we see wonderful pets like cats and dogs, according to the text?",
          optionA: "Forest",
          optionB: "Farm",
          optionC: "House",
          correctAnswer: "c",
         }),
      shuffleOptions({
          question:
            "What is the domestic animal mentioned in the text that is known for producing wool?",
          optionA: "Hen",
          optionB: "Sheep",
          optionC: "Goat",
          correctAnswer: "b",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "A forest is a living place of many _______ animals.",
          optionA: "plants",
          optionB: "wild",
          optionC: "domestic",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question:
            "In a forest, one can observe animals like elephant, giraffe, and _______.",
          optionA: "tiger",
          optionB: "zebra",
          optionC: "lion",
          correctAnswer: "c",
         }),
      shuffleOptions({
          question:
            "On farms, you will find a variety of _______ animals, including hen and sheep.",
          optionA: "wild",
          optionB: "domestic",
          optionC: "exotic",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question:
            "Domestic animals found on farms are typically raised for purposes such as _______.",
          optionA: "entertainment",
          optionB: "conservation",
          optionC: "agriculture",
          correctAnswer: "c",
         }),
      shuffleOptions({
          question: "In houses, people often keep _______ as pets.",
          optionA: "fish",
          optionB: "birds",
          optionC: "cat",
          correctAnswer: "c",
         }),
      shuffleOptions({
          question: "Cats are known for their playful and _______ nature.",
          optionA: "energetic",
          optionB: "shy",
          optionC: "lazy",
          correctAnswer: "a",
         }),
      shuffleOptions({
          question:
            "Farms are places where people rear animals for various purposes, including _______.",
          optionA: "wildlife conservation",
          optionB: "meat and dairy production",
          optionC: "recreational activities",
          correctAnswer: "b",
         }),
      shuffleOptions({
          question:
            "Wild animals in a forest are adapted to their natural habitat and rely on _______ for survival.",
          optionA: "human interaction",
          optionB: "domestication",
          optionC: "instincts and natural resources",
          correctAnswer: "c",
         }),
      shuffleOptions({
          question:
            "The diversity of animals on a farm includes not only domestic animals but also various _______.",
          optionA: "aquatic creatures",
          optionB: "reptiles",
          optionC: "birds and insects",
          correctAnswer: "c",
         }),
      shuffleOptions({
          question:
            "People visit zoos and wildlife sanctuaries to see a wide range of _______ animals.",
          optionA: "domestic",
          optionB: "endangered",
          optionC: "marine",
          correctAnswer: "b",
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
            "A forest is a static environment where animals do not interact with each other.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Domestic animals found on farms are primarily raised for entertainment purposes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Cats are known for their shy and reserved nature.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "In houses, people typically keep marine animals like fish as pets.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Wild animals in a forest are not adapted to their natural habitat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Farms are places primarily dedicated to wildlife conservation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Hens are commonly found as pets in houses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Zoos and wildlife sanctuaries showcase only domestic animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Elephants are well-suited to living in houses as pets.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The diversity of animals on a farm does not include birds and insects.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
