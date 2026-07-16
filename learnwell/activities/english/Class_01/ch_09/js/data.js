export const chapter = "Chapter - 9: Make Me Your Friend";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean)

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  if (optionsArray.length > 2) object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who has a long curly tail?",
        optionA: "Cat",
        optionB: "Dog",
        optionC: "Cow",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "What helps a dog smell danger?",
        optionA: "Eyes",
        optionB: "Nose",
        optionC: "Ears",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "What does a dog love to chew?",
        optionA: "Toy",
        optionB: "Bone",
        optionC: "Stick",
        correctAnswer: "Bone",
      }),
      shuffleOptions({
        question: "What should dogs not be given to eat?",
        optionA: "Bone",
        optionB: "Bread",
        optionC: "Milk",
        correctAnswer: "Bone",
      }),
      shuffleOptions({
        question: "Who guards your home?",
        optionA: "Parrot",
        optionB: "Dog",
        optionC: "Rabbit",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Dogs bark to give a ______.",
        optionA: "Gift",
        optionB: "Warning",
        optionC: "Hug",
        correctAnswer: "Warning",
      }),
      shuffleOptions({
        question: "Dogs can be white, black or ______.",
        optionA: "Yellow",
        optionB: "Brown",
        optionC: "Green",
        correctAnswer: "Brown",
      }),
      shuffleOptions({
        question: "Dogs should be taken to the ______ for vaccination.",
        optionA: "Toy shop",
        optionB: "School",
        optionC: "Animal hospital",
        correctAnswer: "Animal hospital",
      }),
      shuffleOptions({
        question: "Dogs can bring the ______ from the door.",
        optionA: "Spoon",
        optionB: "Newspaper",
        optionC: "Ball",
        correctAnswer: "Newspaper",
      }),
      shuffleOptions({
        question: "A dog is always ______.",
        optionA: "Lazy",
        optionB: "Sleepy",
        optionC: "Alert",
        correctAnswer: "Alert",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The dog is a ______ animal.",
        optionA: "wild",
        optionB: "faithful",
        optionC: "naughty",
        correctAnswer: "faithful",
      }),
      shuffleOptions({
        question: "A dog's claws are ______.",
        optionA: "soft",
        optionB: "smooth",
        optionC: "rough",
        correctAnswer: "rough",
      }),
      shuffleOptions({
        question: "Dogs are ______ at night.",
        optionA: "sleepy",
        optionB: "alert",
        optionC: "noisy",
        correctAnswer: "alert",
      }),
      shuffleOptions({
        question: "A dog's tail is ______.",
        optionA: "straight",
        optionB: "curly",
        optionC: "flat",
        correctAnswer: "curly",
      }),
      shuffleOptions({
        question: "Dogs can find out ______ goods.",
        optionA: "sold",
        optionB: "gifted",
        optionC: "stolen",
        correctAnswer: "stolen",
      }),
      shuffleOptions({
        question: "A dog's teeth are ______.",
        optionA: "flat",
        optionB: "sharp",
        optionC: "round",
        correctAnswer: "sharp",
      }),
      shuffleOptions({
        question: "A dog takes care of all ______ members.",
        optionA: "family",
        optionB: "shop",
        optionC: "class",
        correctAnswer: "family",
      }),
      shuffleOptions({
        question: "The disease spread by a dog's bite is called ______.",
        optionA: "rabies",
        optionB: "cold",
        optionC: "fever",
        correctAnswer: "rabies",
      }),
      shuffleOptions({
        question: "Dogs are trained to catch ______.",
        optionA: "thieves",
        optionB: "drivers",
        optionC: "painters",
        correctAnswer: "thieves",
      }),
      shuffleOptions({
        question: "The smell of the bone is ______ by the dog.",
        optionA: "hated",
        optionB: "ignored",
        optionC: "cherished",
        correctAnswer: "cherished",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A dog can bark.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dogs eat only meat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dogs sleep at night and are not alert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A dog's tail is straight.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rabies is spread by a dog's bite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dogs do not love their masters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dogs have a strong sense of smell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dogs can be trained to find things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A dog is called a symbol of laziness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dogs can play with us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;