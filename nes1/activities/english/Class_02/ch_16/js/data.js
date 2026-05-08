export const chapter = "Chapter -16: The Zoo Showpieces ";
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
          "What does the baby camel complain about in regard to its body?",
        optionA: "The hump on its back",
        optionB: "The rounded hooves",
        optionC: "The long eyelashes",
        correctAnswer: "The hump on its back",
     }),
      shuffleOptions({
        question:
          "According to the mother camel, what is the purpose of the hump on the baby camel's back?",
        optionA: "It makes their bodies look less awkward",
        optionB: "It stores water for several days",
        optionC: "It helps them walk in the desert sand easily",
        correctAnswer: "It stores water for several days",
     }),
      shuffleOptions({
        question:
          "What is the function of the rounded hooves mentioned by the mother camel?",
        optionA: "They make their bodies look less awkward",
        optionB: "They store water for several days",
        optionC: "They help them walk in the desert sand easily",
        correctAnswer: "They help them walk in the desert sand easily",
     }),
      shuffleOptions({
        question:
          "Why does the mother camel claim that long eyelashes are useful?",
        optionA: "They make their bodies look less awkward",
        optionB: "They protect their eyes from the dust during storms",
        optionC: "They store water for several days",
        correctAnswer: "They protect their eyes from the dust during storms",
     }),
      shuffleOptions({
        question: "What does the baby camel find useless about its body?",
        optionA: "The hump on its back",
        optionB: "The rounded hooves",
        optionC: "The long eyelashes",
        correctAnswer: "The long eyelashes",
     }),
      shuffleOptions({
        question:
          "What purpose does the rough skin serve, according to the mother camel?",
        optionA: "It makes their bodies look less awkward",
        optionB: "It stores water for several days",
        optionC: "It protects them from the desert heat",
        correctAnswer: "It protects them from the desert heat",
     }),
      shuffleOptions({
        question:
          "What realization does the baby camel come to about their presence in the zoo?",
        optionA: "They are there to entertain visitors",
        optionB: "They are being treated as showpieces",
        optionC: "They are being prepared for a desert journey",
        correctAnswer: "They are being treated as showpieces",
     }),
      shuffleOptions({
        question: "Why does the mother camel express sadness?",
        optionA: "She misses the desert",
        optionB: "She dislikes the zoo environment",
        optionC: "They are imprisoned and reduced to showpieces",
        correctAnswer: "They are imprisoned and reduced to showpieces",
     }),
      shuffleOptions({
        question:
          "What does the baby camel suggest about the man who imprisoned them?",
        optionA: "The man is kind",
        optionB: "The man is wise",
        optionC: "The man is stupid",
        correctAnswer: "The man is stupid",
     }),
      shuffleOptions({
        question:
          "What emotion does the mother camel convey when mentioning their misfortune?",
        optionA: "Happiness",
        optionB: "Anger",
        optionC: "Sadness",
        correctAnswer: "Sadness",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "The baby camel complains about the ______ on its back, questioning its odd appearance.",
        optionA: "Horn",
        optionB: "Hump",
        optionC: "Tail",
        correctAnswer: "Hump",
     }),
      shuffleOptions({
        question:
          "The mother camel explains that the hump is used to store ______ for several days during desert journeys.",
        optionA: "Sand",
        optionB: "Water",
        optionC: "Food",
        correctAnswer: "Water",
     }),
      shuffleOptions({
        question:
          "The rounded hooves of the camels help them walk easily on the ______ sand in the desert.",
        optionA: "Rocky",
        optionB: "Wet",
        optionC: "Desert",
        correctAnswer: "Desert",
     }),
      shuffleOptions({
        question:
          "The long eyelashes of the camels protect their eyes from the dust during ______ in the desert.",
        optionA: "Rain",
        optionB: "Storms",
        optionC: "Sunny days",
        correctAnswer: "Storms",
     }),
      shuffleOptions({
        question:
          "The baby camel finds its rough skin useful in protecting it from the intense ______ in the desert.",
        optionA: "Cold",
        optionB: "Heat",
        optionC: "Rain",
        correctAnswer: "Heat",
     }),
      shuffleOptions({
        question:
          "According to the mother camel, their misfortune lies in being reduced to being ______ in the zoo.",
        optionA: "Entertainers",
        optionB: "Showpieces",
        optionC: "Explorers",
        correctAnswer: "Showpieces",
     }),
      shuffleOptions({
        question:
          "The baby camel suggests that the man who imprisoned them in the zoo is ______.",
        optionA: "Kind",
        optionB: "Wise",
        optionC: "Stupid",
        correctAnswer: "Stupid",
     }),
      shuffleOptions({
        question:
          "The mother camel expresses her ______ when mentioning their captivity in the zoo.",
        optionA: "Happiness",
        optionB: "Anger",
        optionC: "Sadness",
        correctAnswer: "Sadness",
     }),
      shuffleOptions({
        question:
          "The camels have been reduced to mere ______ in the zoo, according to the mother camel.",
        optionA: "Visitors",
        optionB: "Wanderers",
        optionC: "Showpieces",
        correctAnswer: "Showpieces",
     }),
      shuffleOptions({
        question:
          "The baby camel realizes that their body parts have specific functions for surviving in the ______.",
        optionA: "Forest",
        optionB: "Zoo",
        optionC: "Desert",
        correctAnswer: "Desert",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The baby camel finds its rounded hooves useless.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Long eyelashes protect the camels' eyes from the dust during storms.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The rough skin of camels helps them withstand cold temperatures in the desert.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The baby camel realizes their body parts are designed for surviving in the zoo.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The mother camel expresses happiness about being in the zoo.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The baby camel suggests that the man who imprisoned them in the zoo is kind.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The camels are reduced to being entertainers in the zoo.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The mother camel dislikes the zoo environment.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The mistress of the house wants to keep Brownie as her pet.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Brownie becomes Madhuri's pet in the end.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
