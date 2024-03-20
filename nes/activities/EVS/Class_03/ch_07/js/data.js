export const chapter = "Chapter - 7: Beautiful World of the Animals";
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
          question: "What is George's favorite type of toy?",
          optionA: "Cars",
          optionB: "Dinosaurs",
          optionC: "Robots",
          correctAnswer: "Dinosaurs",
         }),
      shuffleOptions({
          question: "Where did George's father plan a trip for his birthday?",
          optionA: "Zoo",
          optionB: "Aquarium",
          optionC: "Field Museum, Chicago",
          correctAnswer: "Field Museum, Chicago",
         }),
      shuffleOptions({
          question: "What is the first dinosaur they see at the museum?",
          optionA: "T-Rex",
          optionB: "Velociraptor",
          optionC: "Titanosaur",
          correctAnswer: "Titanosaur",
         }),
      shuffleOptions({
          question: "What kind of animals are elephant, horse, and giraffe?",
          optionA: "Wild Animals",
          optionB: "Domestic Animals",
          optionC: "Aquatic Animals",
          correctAnswer: "Wild Animals",
         }),
      shuffleOptions({
          question:
            "Which category do animals like sheep, goat, and pig belong to?",
          optionA: "Flyers",
          optionB: "Small Animals",
          optionC: "Reptiles",
          correctAnswer: "Small Animals",
         }),
      shuffleOptions({
          question: "Where do aquatic animals like fish and turtle live?",
          optionA: "Desert",
          optionB: "Jungle",
          optionC: "Water",
          correctAnswer: "Water",
         }),
      shuffleOptions({
          question:
            "What are animals like snake, lizard, and crocodile called?",
          optionA: "Flyers",
          optionB: "Reptiles",
          optionC: "Herbivores",
          correctAnswer: "Reptiles",
         }),
      shuffleOptions({
          question: "What do herbivores eat?",
          optionA: "Flesh of other animals",
          optionB: "Both plants and animals",
          optionC: "Plants or plant products",
          correctAnswer: "Plants or plant products",
         }),
      shuffleOptions({
          question:
            "What is the category of animals like lion, tiger, and crocodile?",
          optionA: "Omnivores",
          optionB: "Carnivores",
          optionC: "Herbivores",
          correctAnswer: "Carnivores",
         }),
      shuffleOptions({
          question: "Where do pet animals like dog and cat live?",
          optionA: "Farms",
          optionB: "Houses",
          optionC: "Jungle",
          correctAnswer: "Houses",
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
            "Animals like __________, __________, and __________ are big animals.",
          optionA: "Monkey, Squirrel, Pig",
          optionB: "Elephant, Horse, Giraffe",
          optionC: "Fish, Turtle, Octopus",
          correctAnswer: "Elephant, Horse, Giraffe",
         }),
      shuffleOptions({
          question:
            "Animals such as __________ and __________ are kept by humans for their products and are called domestic animals.",
          optionA: "Tiger, Lion",
          optionB: "Goat, Sheep",
          optionC: "Snake, Lizard",
          correctAnswer: "Goat, Sheep",
         }),
      shuffleOptions({
          question:
            "Water animals like __________, __________, and __________ are also called aquatic animals.",
          optionA: "Elephant, Horse, Giraffe",
          optionB: "Fish, Turtle, Whale",
          optionC: "Snake, Lizard, Crocodile",
          correctAnswer: "Fish, Turtle, Whale",
         }),
      shuffleOptions({
          question:
            "Reptiles, such as __________, __________, and __________, are also known as crawling animals.",
          optionA: "Lion, Tiger, Crocodile",
          optionB: "Elephant, Horse, Giraffe",
          optionC: "Snake, Lizard, Crocodile",
          correctAnswer: "Snake, Lizard, Crocodile",
         }),
      shuffleOptions({
          question: "Insects and birds are classified as __________.",
          optionA: "Crawlers",
          optionB: "Flyers",
          optionC: "Swimmers",
          correctAnswer: "Flyers",
         }),
      shuffleOptions({
          question:
            "Animals like cow, buffalo, goat, and sheep, which eat plants or plant products, are known as __________.",
          optionA: "Carnivores",
          optionB: "Omnivores",
          optionC: "Herbivores",
          correctAnswer: "Herbivores",
         }),
      shuffleOptions({
          question:
            "Animals like lion, tiger, crocodile, and fox, which eat the flesh of other animals, are categorized as __________.",
          optionA: "Herbivores",
          optionB: "Carnivores",
          optionC: "Omnivores",
          correctAnswer: "Carnivores",
         }),
      shuffleOptions({
          question:
            "Some animals like bear, dog, cat, and rat eat both plants and animals, and they are called __________.",
          optionA: "Herbivores",
          optionB: "Carnivores",
          optionC: "Omnivores",
          correctAnswer: "Omnivores",
         }),
      shuffleOptions({
          question:
            "Pet animals like __________ and __________ live with us in our homes for recreation.",
          optionA: "Elephant, Horse",
          optionB: "Dog, Cat",
          optionC: "Fish, Turtle",
          correctAnswer: "Dog, Cat",
         }),
      shuffleOptions({
          question:
            "Animals like rabbit, snake, and others have different types of shelters, such as __________ and __________.",
          optionA: "Farms, Houses",
          optionB: "Holes, Land and Water",
          optionC: "Jungle, Desert",
          correctAnswer: "Holes, Land and Water",
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
            "Animals like elephant, horse, and giraffe are small animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Aquatic animals have special features that help them live on land.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Insects and birds are classified as flyers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Herbivores eat the flesh of other animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Reptiles are also known as crawling animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Domestic animals are kept by humans for their products.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Carnivores eat both plants and animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Pet animals like dog and cat live in the jungle.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Aquatic animals include fish, turtle, and octopus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Omnivores eat both plants and animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
           }),
    ]),
  }
}

export var activityData;
