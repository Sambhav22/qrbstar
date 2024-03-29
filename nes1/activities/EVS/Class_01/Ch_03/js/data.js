export const chapter = "Chapter - 3: Our Body ";
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
          question: "What does our body's external parts help us do?",
          optionA: "Cook",
          optionB: "Walk, run, jump, write, see",
          optionC: "Play music",
          correctAnswer: "Walk, run, jump, write, see",
         }),
      shuffleOptions({
          question:
            "Which of the following is not considered an external body part?",
          optionA: "Eyes",
          optionB: "Stomach",
          optionC: "Toes",
          correctAnswer: "Stomach",
         }),
      shuffleOptions({
          question: "What is the function of ears?",
          optionA: "Smell",
          optionB: "Hear",
          optionC: "See",
          correctAnswer: "Hear",
         }),
      shuffleOptions({
          question:
            "Which of the following is an action performed with the help of body parts?",
          optionA: "Thinking",
          optionB: "Breathing",
          optionC: "Writing",
          correctAnswer: "Writing",
         }),
      shuffleOptions({
          question: "What are the visible parts of our body referred to as?",
          optionA: "Internal parts",
          optionB: "Hidden parts",
          optionC: "External parts",
          correctAnswer: "External parts",
         }),
      shuffleOptions({
          question: "Which body part is associated with the sense of smell?",
          optionA: "Lips",
          optionB: "Nose",
          optionC: "Eyes",
          correctAnswer: "Nose",
         }),
      shuffleOptions({
          question: "Which part is not mentioned as an external body part?",
          optionA: "Knee",
          optionB: "Neck",
          optionC: "Heart",
          correctAnswer: "Heart",
         }),
      shuffleOptions({
          question:
            "What action is NOT listed as something our body helps us do?",
          optionA: "Run",
          optionB: "Eat",
          optionC: "Fly",
          correctAnswer: "Fly",
         }),
      shuffleOptions({
          question: "Which sense is related to the tongue?",
          optionA: "Touch",
          optionB: "Taste",
          optionC: "Hear",
          correctAnswer: "Taste",
         }),
      shuffleOptions({
          question: "Which part of our body is associated with vision?",
          optionA: "Ears",
          optionB: "Eyes",
          optionC: "Nose",
          correctAnswer: "Eyes",
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
            "Our body works like a machine, and with the help of our body parts, we can __________, __________, __________, __________, and __________.",
          optionA: "Sing, dance, talk, sleep, read",
          optionB: "Walk, run, jump, write, see",
          optionC: "Fly, swim, crawl, eat, think",
          correctAnswer: "Walk, run, jump, write, see",
         }),
      shuffleOptions({
          question:
            "Our body parts, such as ears and nose, help us to __________ and __________.",
          optionA: "Taste, touch",
          optionB: "Hear, smell",
          optionC: "See, speak",
          correctAnswer: "Hear, smell",
         }),
      shuffleOptions({
          question:
            "Let's take a look at the visible body parts, like __________, __________, __________, and __________.",
          optionA: "Heart, brain, lungs, liver",
          optionB: "Arm, hand, leg, toes",
          optionC: "Stomach, knee, chest, fingers",
          correctAnswer: "Arm, hand, leg, toes",
         }),
      shuffleOptions({
          question:
            "The external body parts, like eyes and teeth, are visible to us, and they help us in actions such as __________ and __________.",
          optionA: "Breathing, thinking",
          optionB: "Running, swimming",
          optionC: "Seeing, eating",
          correctAnswer: "Seeing, eating",
         }),
      shuffleOptions({
          question: "Our __________ helps us to perceive the sense of smell.",
          optionA: "Ears",
          optionB: "Nose",
          optionC: "Lips",
          correctAnswer: "Nose",
         }),
      shuffleOptions({
          question:
            "The body part associated with the sense of taste is the __________.",
          optionA: "Lips",
          optionB: "Tongue",
          optionC: "Eyes",
          correctAnswer: "Tongue",
         }),
      shuffleOptions({
          question:
            "To perform actions like walking and running, we rely on our __________.",
          optionA: "Hand",
          optionB: "Leg",
          optionC: "Arm",
          correctAnswer: "Leg",
         }),
      shuffleOptions({
          question:
            "The external body part related to the sense of hearing is the __________.",
          optionA: "Nose",
          optionB: "Lips",
          optionC: "Ears",
          correctAnswer: "Ears",
         }),
      shuffleOptions({
          question:
            "Our __________ helps us hold things and perform various tasks.",
          optionA: "Nose",
          optionB: "Leg",
          optionC: "Hand",
          correctAnswer: "Hand",
         }),
      shuffleOptions({
          question: "The sense of sight is associated with our __________.",
          optionA: "Ears",
          optionB: "Eyes",
          optionC: "Teeth",
          correctAnswer: "Eyes",
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
            "Our body works like a machine, and with the help of our body parts, we can walk, run, jump, write, and see.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "The sense of taste is associated with our lips.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Ears and nose help us to hear and smell.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "External body parts, like eyes and teeth, are not visible to us.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Our stomach helps us to see.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "We use our hands to walk.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The body part associated with the sense of smell is the tongue.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "We can run with the help of our legs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Our chest is considered an external body part.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "The sense of hearing is related to the eyes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
