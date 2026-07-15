export const chapter = "Chapter -4: The Other Lion";
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
          question: "What does the zebra say about the king?",
          optionA: "He kills them for food only.",
          optionB: "He doesn't kill them at all.",
          optionC: "He kills them for food and for game.",
          correctAnswer: "He kills them for food and for game.",
        }),
      shuffleOptions({
          question:
            "What idea does the ass propose to save themselves from being killed by the king?",
          optionA: "To request the king not to kill them.",
          optionB: "To send one animal a day to the king.",
          optionC: "To escape from the forest.",
          correctAnswer: "To send one animal a day to the king.",
        }),
      shuffleOptions({
          question:
            "Who suggests the idea of sending one animal a day to the king?",
          optionA: "The fox",
          optionB: "The elephant",
          optionC: "The zebra",
          correctAnswer: "The fox",
        }),
      shuffleOptions({
          question:
            "What condition does the lion set for receiving one animal a day from the animals?",
          optionA: "The animal must reach him by sunrise.",
          optionB: "The animal must reach him by sunset.",
          optionC: "The animal must reach him by noon.",
          correctAnswer: "The animal must reach him by sunrise.",
        }),
      shuffleOptions({
          question:
            "Who is the first animal to be sent to the lion as his food?",
          optionA: "The zebra",
          optionB: "The rabbit",
          optionC: "The elephant",
          correctAnswer: "The rabbit",
        }),
      shuffleOptions({
          question:
            "What reason does the rabbit give for being late to reach the lion?",
          optionA: "He met another lion who threatened him.",
          optionB: "He got lost in the forest.",
          optionC: "He fell asleep on the way.",
          correctAnswer: "He met another lion who threatened him.",
        }),
      shuffleOptions({
          question: "Where does the rabbit claim to have met the other lion?",
          optionA: "At the king's palace",
          optionB: "At the well",
          optionC: "At the elephant's cave",
          correctAnswer: "At the well",
        }),
      shuffleOptions({
          question: "What does the rabbit tell the lion about the other lion?",
          optionA: "That he is stronger than the lion",
          optionB: "That he is very friendly",
          optionC: "That he called the lion a cowardly lion",
          correctAnswer: "That he called the lion a cowardly lion",
        }),
      shuffleOptions({
          question:
            "What is the lion's reaction upon hearing that the other lion called him cowardly?",
          optionA: "He laughs it off.",
          optionB: "He gets furious and wants to punish the other lion.",
          optionC: "He runs away in fear.",
          correctAnswer: "He gets furious and wants to punish the other lion.",
        }),
      shuffleOptions({
          question: "What happens to the lion in the end?",
          optionA: "He becomes the king of the forest.",
          optionB: "He escapes from the well.",
          optionC: "He jumps into the well and meets his end.",
          correctAnswer: "He jumps into the well and meets his end.",
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
            "The zebra says, 'Yes, the king kills us for food and for ________.'",
          optionA: "rest",
          optionB: "game",
          optionC: "protection",
          correctAnswer: "game",
        }),
      shuffleOptions({
          question:
            "The ass suggests, 'Let us go and request the king not to kill us.'",
          optionA: "eat",
          optionB: "hunt",
          optionC: "kill",
          correctAnswer: "kill",
        }),
      shuffleOptions({
          question:
            "The fox suggests, 'Rather we should send one animal a day to him, so he will not need to ________.'",
          optionA: "hunt",
          optionB: "roam",
          optionC: "sleep",
          correctAnswer: "hunt",
        }),
      shuffleOptions({
          question:
            "The lion sets a condition that the animal must reach him by ________.",
          optionA: "sunset",
          optionB: "midnight",
          optionC: "sunrise",
          correctAnswer: "sunrise",
        }),
      shuffleOptions({
          question:
            "The rabbit tells the lion, 'I was coming well before time, but then another lion met me on the ________.'",
          optionA: "way",
          optionB: "path",
          optionC: "forest",
          correctAnswer: "way",
        }),
      shuffleOptions({
          question:
            "The rabbit claims to have met the other lion at the ________.",
          optionA: "king's palace",
          optionB: "well",
          optionC: "elephant's cave",
          correctAnswer: "well",
        }),
      shuffleOptions({
          question:
            "The rabbit tells the lion, 'He is in the ________. He wanted to eat me up.'",
          optionA: "river",
          optionB: "cave",
          optionC: "well",
          correctAnswer: "well",
        }),
      shuffleOptions({
          question:
            "The lion's reaction upon hearing that the other lion called him cowardly?",
          optionA: "He laughs it off.",
          optionB: "He gets furious and wants to punish the other lion.",
          optionC: "He runs away in fear.",
          correctAnswer: "He gets furious and wants to punish the other lion.",
        }),
      shuffleOptions({
          question: "The lion jumps into the well and meets his ________.",
          optionA: "friends",
          optionB: "enemy",
          optionC: "end",
          correctAnswer: "end",
        }),
      shuffleOptions({
          question:
            "The spotted cat found ________ in the nest when she first discovered it.",
          optionA: "two young birds",
          optionB: "five eggs",
          optionC: "nothing",
          correctAnswer: "nothing",
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
            "The lion kills the animals in the forest for food and game.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The fox suggests sending one animal a day to the king to save themselves from being killed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The lion agrees to the proposal of receiving one animal a day from the animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The lion sets a condition that the animal must reach him by sunset.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The rabbit is the first animal to be sent to the lion as his food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The rabbit claims to have met the other lion at the river.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The lion jumps into the well and meets his friends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The elephant wanted to kill the rabbit when he came late to meet the lion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The lion believes the other lion is stronger than him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The lion jumps into the well and meets his end.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
