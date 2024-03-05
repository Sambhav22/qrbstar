export const chapter = "Chapter - 21: Maior Somnath Sharma ";
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
        question: "When did India become independent?",
        optionA: "1947",
        optionB: "1948",
        optionC: "1949",
        correctAnswer: "1947",
     }),
      shuffleOptions({
        question: "How did Pakistan send its soldiers to occupy Kashmir?",
        optionA: "In military uniforms",
        optionB: "Disguised as tribal people",
        optionC: "By air",
        correctAnswer: "Disguised as tribal people",
     }),
      shuffleOptions({
        question:
          "What was the name of the Indian officer mentioned in the text who had a broken hand but still went to fight the enemy?",
        optionA: "Major Sunil Sharma",
        optionB: "Major Somnath Sharma",
        optionC: "Major Sameer Sharma",
        correctAnswer: "Major Somnath Sharma",
     }),
      shuffleOptions({
        question:
          "Where was Major Somnath Sharma and his company posted during the battle?",
        optionA: "In a village",
        optionB: "On a small hill in Badgam",
        optionC: "Near the Pakistani border",
        correctAnswer: "On a small hill in Badgam",
     }),
      shuffleOptions({
        question:
          "What kind of clothing did the disguised Pakistani soldiers wear to hide their identity?",
        optionA: "Military uniforms",
        optionB: "Turbans",
        optionC: "Firan (long loose coats)",
        correctAnswer: "Firan (long loose coats)",
     }),
      shuffleOptions({
        question:
          "How many attackers did Major Somnath Sharma and his soldiers face during the battle?",
        optionA: "Over 100",
        optionB: "Over 200",
        optionC: "More than 700",
        correctAnswer: "More than 700",
     }),
      shuffleOptions({
        question:
          "How many Indian soldiers were killed in the battle for Badgam?",
        optionA: "7",
        optionB: "23",
        optionC: "300",
        correctAnswer: "23",
     }),
      shuffleOptions({
        question:
          "What was the highest Indian award for bravery that Major Somnath Sharma was awarded?",
        optionA: "Param Vir Chakra",
        optionB: "Bharat Ratna",
        optionC: "Padma Shri",
        correctAnswer: "Param Vir Chakra",
     }),
      shuffleOptions({
        question: "How did Major Somnath Sharma die during the battle?",
        optionA: "Shot by an enemy soldier",
        optionB: "A bomb fell near him",
        optionC: "Natural causes",
        correctAnswer: "A bomb fell near him",
     }),
      shuffleOptions({
        question: "How was Badgam saved from the enemy?",
        optionA: "By a diplomatic agreement",
        optionB: "By retreating Indian soldiers",
        optionC: "Our soldiers won the battle",
        correctAnswer: "Our soldiers won the battle",
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
          "When India became free in 1947, Kashmir became our _________.",
        options: ["territory", "land", "part"],
        correctAnswer: "part",
     }),
      shuffleOptions({
        question:
          "Pakistan sent its soldiers disguised as _________ to occupy Kashmir.",
        options: ["tourists", "tribespeople", "diplomats"],
        correctAnswer: "tribespeople",
     }),
      shuffleOptions({
        question: "Major Som.nath Sharma broke his hand while _________.",
        options: ["exercising", "climbing", "swimming"],
        correctAnswer: "exercising",
     }),
      shuffleOptions({
        question:
          "Major Som.nath Sharma was awarded the _________ for his bravery.",
        options: ["Bharat Ratna", "Param Vir Chakra", "Padma Shri"],
        correctAnswer: "Param Vir Chakra",
     }),
      shuffleOptions({
        question:
          "The disguised Pakistani soldiers were wearing long loose coats called _________.",
        options: ["turbans", "cloaks", "firan"],
        correctAnswer: "firan",
     }),
      shuffleOptions({
        question:
          "Major Somnath Sharma and his soldiers were posted in _________ during the battle.",
        options: ["a forest", "a village", "Badgam"],
        correctAnswer: "Badgam",
     }),
      shuffleOptions({
        question:
          "The Indian Army was not in Kashmir at that time, so many Indian soldiers were sent by _________.",
        options: ["road", "train", "air"],
        correctAnswer: "air",
     }),
      shuffleOptions({
        question:
          "There were more than ______ attackers when the Pakistanis attacked the Indian post.",
        options: ["100", "300", "700"],
        correctAnswer: "700",
     }),
      shuffleOptions({
        question:
          "Major Somnath Sharma and his soldiers fought bravely despite facing more than _______ attackers.",
        options: ["100", "200", "700"],
        correctAnswer: "700",
     }),
      shuffleOptions({
        question:
          "Major Somnath Sharma was killed when a bomb fell ___________.",
        options: ["near the enemy", "near the Indian soldiers", "near him"],
        correctAnswer: "near him",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kashmir became part of India in 1947.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Pakistan sent its soldiers dressed as tribal people to occupy Kashmir.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Major Som.nath Sharma had a broken leg during the battle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Major Somnath Sharma and his soldiers were stationed in a forest during the battle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Indian Army was present in Kashmir at the time of the attack.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The disguised Pakistani soldiers wore long loose coats called 'firan' to hide their identity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The Indian soldiers faced more than 200 attackers during the battle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Major Somnath Sharma was awarded the Bharat Ratna for his bravery.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Major Somnath Sharma died due to an injury caused by enemy gunfire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The battle for Badgam was won by the Pakistani soldiers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
