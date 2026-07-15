export const chapter = "Chapter -19:Life through Old Age";
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
            "What is the initial impression of the journey for the traveller?",
          optionA: "Short",
          optionB: "Magical",
          optionC: "Tedious",
          correctAnswer: "Magical",
        }),
      shuffleOptions({
          question: "What did the child invite the traveller to do?",
          optionA: "Learn",
          optionB: "Work",
          optionC: "Play",
          correctAnswer: "Play",
        }),
      shuffleOptions({
          question:
            "What fascinated the traveller and the child during fine weather?",
          optionA: "Raindrops",
          optionB: "Falling leaves",
          optionC: "Nature's beauty",
          correctAnswer: "Nature's beauty",
        }),
      shuffleOptions({
          question: "What did the young man invite the traveller to do?",
          optionA: "Work",
          optionB: "Play",
          optionC: "Love",
          correctAnswer: "Love",
        }),
      shuffleOptions({
          question:
            "What were the activities of the handsome boy and the traveller?",
          optionA: "Playing games",
          optionB: "Learning",
          optionC: "Both A and B",
          correctAnswer: "Both A and B",
        }),
      shuffleOptions({
          question:
            "What did the middle-aged gentleman invite the traveller to do?",
          optionA: "Be busy",
          optionB: "Rest",
          optionC: "Learn",
          correctAnswer: "Be busy",
        }),
      shuffleOptions({
          question:
            "What did the family do as they journeyed through the wood?",
          optionA: "Rested",
          optionB: "Worked and cut down trees",
          optionC: "Played games",
          correctAnswer: "Worked and cut down trees",
        }),
      shuffleOptions({
          question: "How did the children leave the company in the story?",
          optionA: "Disappeared suddenly",
          optionB: "Vanished into thin air",
          optionC: "Went down different avenues for various purposes",
          correctAnswer: "Went down different avenues for various purposes",
        }),
      shuffleOptions({
          question:
            "What happened when the lady was called and went into the dark avenue?",
          optionA: "She vanished",
          optionB: "She cried and said she was summoned",
          optionC: "She continued the journey with the traveller",
          correctAnswer: "She cried and said she was summoned",
        }),
      shuffleOptions({
          question: "How does the story conclude for the traveller?",
          optionA: "Alone and lost",
          optionB: "Reunited with all the friends",
          optionC: "Reminiscing with an old man",
          correctAnswer: "Reminiscing with an old man",
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
            "The traveller lost the child while on his journey. What did the child invite him to do?",
          optionA: "Work with him",
          optionB: "Play with him",
          optionC: "Learn with him",
          correctAnswer: "Play with him",
        }),
      shuffleOptions({
          question:
            "The traveller encountered a handsome boy during his journey. What did the boy say he was always doing?",
          optionA: "Working",
          optionB: "Learning",
          optionC: "Being in love",
          correctAnswer: "Learning",
        }),
      shuffleOptions({
          question:
            "As the traveller learned with the handsome boy, what were some of the activities they enjoyed?",
          optionA: "Playing cricket and ball",
          optionB: "Rowing in the river and skating on ice",
          optionC: "Dancing at real theatres",
          correctAnswer: "Rowing in the river and skating on ice",
        }),
      shuffleOptions({
          question:
            "The traveller lost the handsome boy and continued his journey. What did he find next?",
          optionA: "A child",
          optionB: "A young man",
          optionC: "A middle-aged gentleman",
          correctAnswer: "A middle-aged gentleman",
        }),
      shuffleOptions({
          question:
            "The middle-aged gentleman said he was always busy. What were they doing together in the wood?",
          optionA: "Playing games",
          optionB: "Cutting down trees and making a path",
          optionC: "Having parties and dancing",
          correctAnswer: "Cutting down trees and making a path",
        }),
      shuffleOptions({
          question:
            "During their journey in the wood, what happened when the children wanted to go on separate paths?",
          optionA: "They stayed together",
          optionB: "They had a quarrel",
          optionC: "They went on solitary ways",
          correctAnswer: "They went on solitary ways",
        }),
      shuffleOptions({
          question:
            "When the traveller saw the gentleman glancing up at the sky, what did he notice about the gentleman?",
          optionA: "His hair turning grey",
          optionB: "His clothes changing color",
          optionC: "His shoes getting dirty",
          correctAnswer: "His hair turning grey",
        }),
      shuffleOptions({
          question:
            "The lady, the gentleman's wife, was called and had to leave. What did she say her child was calling her?",
          optionA: "Father",
          optionB: "Mother",
          optionC: "Brother",
          correctAnswer: "Mother",
        }),
      shuffleOptions({
          question:
            "After the lady's departure, who was left with the traveller in the wood?",
          optionA: "The handsome boy",
          optionB: "The middle-aged gentleman",
          optionC: "The old man",
          correctAnswer: "The middle-aged gentleman",
        }),
      shuffleOptions({
          question:
            "As the traveller approached the end of the wood, who did he find sitting on a fallen tree?",
          optionA: "A young man",
          optionB: "The handsome boy",
          optionC: "An old man",
          correctAnswer: "An old man",
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
            "The traveller played with the child the whole day, and they were very merry.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The handsome boy said he was always learning, and the traveller started to learn with him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The traveller and the handsome boy enjoyed rowing upon the river in summer and skating on the ice in winter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The young man the traveller met said he was always in love, and they went away together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The traveller lost the young man and continued his journey alone.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The middle-aged gentleman told the traveller he was always busy, and they cut down trees together in the wood.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The children, at times, parted ways down different avenues during their journey in the wood.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The lady, the gentleman's wife, was the last one to leave, saying she was called, and the traveller and gentleman were left alone.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "As the traveller passed out of the wood, he found an old man sitting on a fallen tree who said he was always remembering.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The traveller saw all his friends, including the child, the handsome boy, and the young man, standing around him at the end of his journey.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
