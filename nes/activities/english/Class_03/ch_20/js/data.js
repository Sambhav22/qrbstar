export const chapter = "Chapter - 20: The Stance";
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
          "What was the farmer's original intention when he and his son set out to the market?",
        optionA: "To ride the donkey",
        optionB: "To walk alongside the donkey",
        optionC: "To sell the donkey",
        correctAnswer: "To sell the donkey",
     }),
      shuffleOptions({
        question:
          "Why did the farmer and his son initially choose to walk instead of riding the donkey?",
        optionA: "They wanted to exercise.",
        optionB: "They were too heavy for the donkey.",
        optionC: "They wanted the donkey to appear fresh and healthy.",
        correctAnswer: "They wanted the donkey to appear fresh and healthy.",
     }),
      shuffleOptions({
        question:
          "Why did the farmer ask his son to ride the donkey instead of walking?",
        optionA: "To save time.",
        optionB: "To avoid being mocked.",
        optionC: "To give the son a chance to ride.",
        correctAnswer: "To avoid being mocked.",
     }),
      shuffleOptions({
        question:
          "What did the group of women say when they saw the son riding the donkey?",
        optionA: "They are both wise.",
        optionB: "The son is more stupid than the donkey.",
        optionC: "The farmer is making a good decision.",
        correctAnswer: "The son is more stupid than the donkey.",
     }),
      shuffleOptions({
        question:
          "What did the farmer do after being embarrassed by the comments of the group of women?",
        optionA: "He continued walking.",
        optionB: "He asked his son to walk alongside.",
        optionC: "He rode the donkey himself.",
        correctAnswer: "He rode the donkey himself.",
     }),
      shuffleOptions({
        question: "How did the vendor react to the farmer riding the donkey?",
        optionA: "He praised the farmer for his decision.",
        optionB: "He criticized the farmer for being an old fool.",
        optionC: "He offered to buy the donkey.",
        correctAnswer: "He criticized the farmer for being an old fool.",
     }),
      shuffleOptions({
        question:
          "What did the priest suggest they should have done with the donkey?",
        optionA: "Carried it on their shoulders.",
        optionB: "Sold it at the market.",
        optionC: "Rode it together.",
        correctAnswer: "Carried it on their shoulders.",
     }),
      shuffleOptions({
        question:
          "Why did the farmer and his son finally climb down from the donkey?",
        optionA: "They decided to sell it.",
        optionB: "They felt sorry for the donkey.",
        optionC: "They heard a traveler's comment.",
        correctAnswer: "They heard a traveler's comment.",
     }),
      shuffleOptions({
        question: "How did the farmer and his son enter the market in the end?",
        optionA: "Riding the donkey.",
        optionB: "Walking side by side.",
        optionC: "Carrying the donkey.",
        correctAnswer: "Carrying the donkey.",
     }),
      shuffleOptions({
        question:
          "How did the farmer respond to the laughter and mockery they faced in the market?",
        optionA: "He became angry and shouted at the crowd.",
        optionB: "He decided to keep walking with the donkey as they were.",
        optionC: "He sold the donkey as quickly as possible.",
        correctAnswer:
          "He decided to keep walking with the donkey as they were.",
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
          "There lived a __________ in a village who needed money for a domestic task.",
        options: ["farmer", "doctor", "teacher"],
        correctAnswer: "farmer",
     }),
      shuffleOptions({
        question: "The farmer and his son were on the way to the __________.",
        options: ["park", "market", "school"],
        correctAnswer: "market",
     }),
      shuffleOptions({
        question:
          "They wanted to look the donkey __________ and healthy, so they walked slowly and did not ride it.",
        options: ["sick", "fresh", "fast"],
        correctAnswer: "fresh",
     }),
      shuffleOptions({
        question:
          "The son rode the donkey, and they had barely gone a few steps when a group of women passed by. One of them remarked, 'Look at this young fool! He rides the donkey when the old father __________.'",
        options: ["dances", "sings", "walks"],
        correctAnswer: "walks",
     }),
      shuffleOptions({
        question:
          "The farmer was embarrassed and asked his son to get down, and he __________ rode the donkey now.",
        options: ["quickly", "slowly", "himself"],
        correctAnswer: "himself",
     }),
      shuffleOptions({
        question:
          "The farmer was confused and asked his son to climb up __________ him.",
        options: ["above", "behind", "alongside"],
        correctAnswer: "behind",
     }),
      shuffleOptions({
        question:
          "Even this stance did not last long when they heard a priest comment, 'What an __________ on the poor beast!'",
        options: ["honor", "atrocity", "achievement"],
        correctAnswer: "atrocity",
     }),
      shuffleOptions({
        question:
          "The farmer and his son quickly climbed down and took a new __________.",
        options: ["direction", "position", "stance"],
        correctAnswer: "stance",
     }),
      shuffleOptions({
        question:
          "When the two entered the market, they could hear a loud laughter __________ around.",
        options: ["disappearing", "bursting", "fading"],
        correctAnswer: "bursting",
     }),
      shuffleOptions({
        question: "The two were now carrying the __________.",
        options: ["elephant", "donkey", "bicycle"],
        correctAnswer: "donkey",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Dogs are a type of reptile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Water boils at room temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Earth is flat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Oxygen is a noble gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The moon is made of cheese.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Paris is the capital of France.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Jupiter is the smallest planet in our solar system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "All mammals lay eggs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Water is composed of hydrogen and helium.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
