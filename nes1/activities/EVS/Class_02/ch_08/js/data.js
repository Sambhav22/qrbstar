export const chapter = "Chapter - 8: Animal's World ";
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
            "Where can animals like giraffe, tiger, lion, hippopotamus, panda, and monkey be seen?",
          optionA: "In the mountains",
          optionB: "In the zoo",
          optionC: "In the deserts",
          correctAnswer: "In the zoo",
         }),
      shuffleOptions({
          question:
            "What is the natural home of wild animals like giraffe, tiger, and lion?",
          optionA: "Farms",
          optionB: "Seas",
          optionC: "Forests",
          correctAnswer: "Forests",
         }),
      shuffleOptions({
          question:
            "Which of the following animals are considered domestic animals?",
          optionA: "Giraffe and lion",
          optionB: "Cow and goat",
          optionC: "Panda and monkey",
          correctAnswer: "Cow and goat",
         }),
      shuffleOptions({
          question:
            "What day is it suggested to go out and visit the zoo in the text?",
          optionA: "Monday",
          optionB: "Saturday",
          optionC: "Sunday",
          correctAnswer: "Sunday",
         }),
      shuffleOptions({
          question:
            "What do we get from animals, such as cows, goats, and sheep?",
          optionA: "Fruits",
          optionB: "Milk, eggs, flesh, wool, etc.",
          optionC: "Vegetables",
          correctAnswer: "Milk, eggs, flesh, wool, etc.",
         }),
      shuffleOptions({
          question: "How should we treat animals according to the text?",
          optionA: "Be cruel to them",
          optionB: "Ignore them",
          optionC: "Treat them with love and care",
          correctAnswer: "Treat them with love and care",
         }),
      shuffleOptions({
          question:
            "What is suggested to keep pet and domestic animals healthy in the text?",
          optionA: "Take them for proper medical check-ups regularly",
          optionB: "Feed them only once a week",
          optionC: "Never clean their living spaces",
          correctAnswer: "Take them for proper medical check-ups regularly",
         }),
      shuffleOptions({
          question: "Which animals are mentioned as living in farms?",
          optionA: "Giraffe, tiger, lion",
          optionB: "Cow, goat, sheep, hen, horse",
          optionC: "Panda, monkey, hippopotamus",
          correctAnswer: "Cow, goat, sheep, hen, horse",
         }),
      shuffleOptions({
          question:
            "Why are forests mentioned as important for certain animals in the text?",
          optionA: "Because they are scary",
          optionB: "Because they are their natural home",
          optionC: "Because they are noisy",
          correctAnswer: "Because they are their natural home",
         }),
      shuffleOptions({
          question: "What day is suggested to visit the zoo in the text?",
          optionA: "Friday",
          optionB: "Saturday",
          optionC: "Sunday",
          correctAnswer: "Sunday",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Like us, animals also live on the _______.",
          optionA: "Sky",
          optionB: "Earth",
          optionC: "Moon",
          correctAnswer: "Earth",
         }),
      shuffleOptions({
          question:
            "Animals like giraffe, tiger, lion, hippopotamus, panda, monkey, etc. can be seen in the _______.",
          optionA: "Farm",
          optionB: "Zoo",
          optionC: "Forest",
          correctAnswer: "Zoo",
         }),
      shuffleOptions({
          question: "Forests are the _______ home for many wild animals.",
          optionA: "Temporary",
          optionB: "Natural",
          optionC: "Artificial",
          correctAnswer: "Natural",
         }),
      shuffleOptions({
          question:
            "Some animals like cow, goat, sheep, hen, horse, etc. are kept in _______.",
          optionA: "Zoos",
          optionB: "Farms",
          optionC: "Forests",
          correctAnswer: "Farms",
         }),
      shuffleOptions({
          question: "Animals are our true _______.",
          optionA: "Enemies",
          optionB: "Friends",
          optionC: "Pets",
          correctAnswer: "Friends",
         }),
      shuffleOptions({
          question:
            "We get many things from animals, such as milk, eggs, flesh, wool, etc. Animals cannot _______.",
          optionA: "Speak",
          optionB: "Fly",
          optionC: "Swim",
          correctAnswer: "Speak",
         }),
      shuffleOptions({
          question:
            "To take care of them, we should keep our pet and domestic animals _______.",
          optionA: "Dirty",
          optionB: "Tied",
          optionC: "Clean",
          correctAnswer: "Clean",
         }),
      shuffleOptions({
          question: "We should treat animals with _______ and care.",
          optionA: "Neglect",
          optionB: "Cruelty",
          optionC: "Love",
          correctAnswer: "Love",
         }),
      shuffleOptions({
          question:
            "Animals like giraffe, tiger, lion, etc. are known as _______ animals.",
          optionA: "Tame",
          optionB: "Domestic",
          optionC: "Wild",
          correctAnswer: "Wild",
         }),
      shuffleOptions({
          question:
            "It is suggested to take pet and domestic animals for proper medical check-ups _______.",
          optionA: "Occasionally",
          optionB: "Regularly",
          optionC: "Never",
          correctAnswer: "Regularly",
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
            "Animals like giraffe, tiger, lion, hippopotamus, panda, monkey, etc. can be seen in the zoo.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Forests are the natural home for many wild animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Some animals like cow, goat, sheep, hen, horse, etc. are kept in zoos.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "We get fruits and vegetables from animals like cows and goats.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Animals can speak, so we should communicate with them verbally.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Domestic animals should be kept clean, provided with proper food, and taken for medical check-ups.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Wild animals are often found in seas, mountains, and deserts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Sunday is suggested as a good day to visit the zoo.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Animals are considered our true enemies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Taking domestic animals for regular medical check-ups is unnecessary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
