export const chapter = "Chapter -6: The Cable Is Snapped";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Why does the narrator like the TV soap mentioned in the text?",
          optionA: "The interesting storyline",
          optionB: "The popular actors",
          optionC: "It airs during dinner time",
          correctAnswer: "It airs during dinner time",
        }),
      shuffleOptions({
          question: "What happens when the cable connection is snapped?",
          optionA: "The family switches to a different channel",
          optionB: "The family enjoys a lively dinner and conversation",
          optionC: "The family immediately calls the cable-man",
          correctAnswer: "The family enjoys a lively dinner and conversation",
        }),
      shuffleOptions({
          question:
            "What is Mr. Raghav's attitude towards the cable connection being down?",
          optionA: "He is indifferent",
          optionB: "He is upset",
          optionC: "He is delighted",
          correctAnswer: "He is delighted",
        }),
      shuffleOptions({
          question:
            "How long does the cable-man say it will take to restore the cable connection?",
          optionA: "One day",
          optionB: "Two days",
          optionC: "Three days",
          correctAnswer: "Two days",
        }),
      shuffleOptions({
          question:
            "What surprising skill does the daughter, Radhika, display during the cable outage?",
          optionA: "Singing",
          optionB: "Cooking",
          optionC: "Dancing",
          correctAnswer: "Cooking",
        }),
      shuffleOptions({
          question:
            "What does the family realize during the two days without TV?",
          optionA: "They miss their favorite shows",
          optionB: "Quality time and family interactions are important",
          optionC: "They need to find a new cable provider",
          correctAnswer: "Quality time and family interactions are important",
        }),
      shuffleOptions({
          question:
            "What childhood activities does the narrator describe to her daughter?",
          optionA: "Playing video games",
          optionB:
            "Playing under tamarind trees, stoning trees, and making clay playthings",
          optionC: "Watching TV",
          correctAnswer:
            "Playing under tamarind trees, stoning trees, and making clay playthings",
        }),
      shuffleOptions({
          question:
            "What was more important than scoring high marks during the narrator's childhood?",
          optionA: "Being healthy and well-behaved",
          optionB: "Studying for long hours",
          optionC: "Winning sports competitions",
          correctAnswer: "Being healthy and well-behaved",
        }),
      shuffleOptions({
          question:
            "What virtue does the family learn during the two days without TV?",
          optionA: "Patience",
          optionB: "Virtue",
          optionC: "Curiosity",
          correctAnswer: "Virtue",
        }),
      shuffleOptions({
          question:
            "How does the family decide to manage their TV time after the cable connection is restored?",
          optionA: "No more TV",
          optionB: "One hour of TV every day",
          optionC: "Only weekends for TV",
          correctAnswer: "One hour of TV every day",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "The family sat clung to the __________ screen tuned to their favorite soap opera.",
          optionA: "Radio",
          optionB: "Computer",
          optionC: "TV",
          correctAnswer: "TV",
        }),
      shuffleOptions({
          question:
            "The narrator's daughter and husband have been watching the soap opera for the last __________ years.",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Three",
        }),
      shuffleOptions({
          question:
            "The cable connection could not be restored for __________ days due to a major fault.",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
        }),
      shuffleOptions({
          question:
            "The daughter, Radhika, surprises everyone by displaying her __________ skills during the cable outage.",
          optionA: "Cooking",
          optionB: "Singing",
          optionC: "Dancing",
          correctAnswer: "Cooking",
        }),
      shuffleOptions({
          question:
            "The family decides to limit their TV time to only __________ hour(s) every day after the cable connection is restored.",
          optionA: "Half",
          optionB: "One",
          optionC: "Two",
          correctAnswer: "One",
        }),
      shuffleOptions({
          question:
            "According to the narrator, during the two days without TV, they had more time for __________ and __________.",
          optionA: "Sleeping, studying",
          optionB: "Eating, sleeping",
          optionC: "Talking, laughing",
          correctAnswer: "Talking, laughing",
        }),
      shuffleOptions({
          question:
            "The cable-man informs the neighborhood that the cable connection cannot be restored for at least __________ days.",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
        }),
      shuffleOptions({
          question:
            "The narrator reminisces about her childhood and describes playing under __________ trees and stoning trees.",
          optionA: "Mango",
          optionB: "Tamarind",
          optionC: "Oak",
          correctAnswer: "Tamarind",
        }),
      shuffleOptions({
          question:
            "The narrator's husband teaches their daughter casio during the cable outage, which adds a new streak of __________.",
          optionA: "Learning",
          optionB: "Entertainment",
          optionC: "Cooking",
          correctAnswer: "Learning",
        }),
      shuffleOptions({
          question:
            "Radhika suggests that they can continue limiting their TV time to __________ hour(s) even after the cable connection is restored.",
          optionA: "Half",
          optionB: "One",
          optionC: "Two",
          correctAnswer: "One",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "The family watched their favorite soap opera every evening.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The cable connection was snapped due to a major fault and couldn't be restored for one day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Radhika surprised everyone by displaying her singing skills during the cable outage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The cable-man informed that the cable connection would take at least three days to be restored.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The family decided to watch TV for two hours every day after the cable connection was restored.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "During the two days without TV, the family had more time for sleeping and studying.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The narrator reminisced about playing under mango trees during her childhood.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Radhika suggested continuing to limit TV time to one hour even after the cable connection was restored.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The narrator's husband taught their daughter cooking skills during the cable outage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The family realized that the absence of TV brought them closer, and they continued limiting TV time to two hours.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
