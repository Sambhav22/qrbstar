export const chapter = "Chapter - 8: The Challenge";
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
        question: "Who suggested having a race between Hare and Turtle?",
        optionA: "Elephant",
        optionB: "Deer",
        optionC: "Camel",
        correctAnswer: "Deer",
     }),
      shuffleOptions({
        question:
          "What was Turtle's response when Hare mocked him for being slow?",
        optionA: "I am faster than you.",
        optionB: "I'm not interested in racing.",
        optionC: "Let's have a race.",
        correctAnswer: "Let's have a race.",
     }),
      shuffleOptions({
        question: "Who was appointed as the umpire for the race?",
        optionA: "Horse",
        optionB: "Giraffe",
        optionC: "Camel",
        correctAnswer: "Giraffe",
     }),
      shuffleOptions({
        question:
          "What was the Hare's initial reaction when he couldn't see Turtle during the race?",
        optionA: "He sat down to rest.",
        optionB: "He started to panic.",
        optionC: "He continued running as fast as he could.",
        correctAnswer: "He sat down to rest.",
     }),
      shuffleOptions({
        question:
          "How did Turtle react when he saw Hare resting during the race?",
        optionA: "He started running.",
        optionB: "He took a nap as well.",
        optionC: "He continued to walk.",
        correctAnswer: "He continued to walk.",
     }),
      shuffleOptions({
        question: "Who won the race between Hare and Turtle?",
        optionA: "Hare",
        optionB: "Turtle",
        optionC: "They tied.",
        correctAnswer: "Turtle",
     }),
      shuffleOptions({
        question: "What lesson did Hare learn from the race with Turtle?",
        optionA: "The importance of napping during a race.",
        optionB: "To challenge others in a race.",
        optionC: "Never rest until the work is finished.",
        correctAnswer: "Never rest until the work is finished.",
     }),
      shuffleOptions({
        question: "Who was made the chief guest for the race?",
        optionA: "Elephant",
        optionB: "Horse",
        optionC: "Camel",
        correctAnswer: "Camel",
     }),
      shuffleOptions({
        question: "What was the reason for Hare's defeat in the race?",
        optionA: "Turtle was faster.",
        optionB: "Turtle had a head start.",
        optionC: "Hare took a nap during the race.",
        correctAnswer: "Hare took a nap during the race.",
     }),
      shuffleOptions({
        question:
          "What did the other forest animals do when Turtle won the race?",
        optionA: "Laughed at him",
        optionB: "Cheered and clapped for him",
        optionC: "Ignored the race result",
        correctAnswer: "Cheered and clapped for him",
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
          "On a winter day, the sun was shining bright, so it grew ___________.",
        optionA: "hot",
        optionB: "pleasant",
        optionC: "cold",
        correctAnswer: "pleasant",
     }),
      shuffleOptions({
        question:
          "Turtle walked very slowly during the football match, often failing to reach the ball before ___________.",
        optionA: "the other players",
        optionB: "the trees",
        optionC: "the goalpost",
        correctAnswer: "the other players",
     }),
      shuffleOptions({
        question:
          "Hare challenged Turtle to a race because he believed he could run ___________.",
        optionA: "like the wind",
        optionB: "slower than Turtle",
        optionC: "like an elephant",
        correctAnswer: "like the wind",
     }),
      shuffleOptions({
        question:
          "Turtle confidently accepted the challenge to race against ___________.",
        optionA: "Hare",
        optionB: "Elephant",
        optionC: "Giraffe",
        correctAnswer: "Hare",
     }),
      shuffleOptions({
        question:
          "Hare took a short nap during the race because he thought Turtle was too ___________ to catch up.",
        optionA: "fast",
        optionB: "slow",
        optionC: "strong",
        correctAnswer: "slow",
     }),
      shuffleOptions({
        question:
          "Turtle kept walking while Hare was ___________ during the race.",
        optionA: "running",
        optionB: "napping",
        optionC: "cheering",
        correctAnswer: "napping",
     }),
      shuffleOptions({
        question:
          "Turtle was about to reach the finish line when Hare ___________.",
        optionA: "started cheering",
        optionB: "opened his eyes",
        optionC: "crossed the finish line",
        correctAnswer: "opened his eyes",
     }),
      shuffleOptions({
        question:
          "The forest animals were ___________ and clapping in Turtle's honor when he won the race.",
        optionA: "sleeping",
        optionB: "running",
        optionC: "standing",
        correctAnswer: "standing",
     }),
      shuffleOptions({
        question:
          "Hare learned a valuable lesson from the race, which was to ___________.",
        optionA: "always take a nap",
        optionB: "challenge others in a race",
        optionC: "never rest until the work is finished",
        correctAnswer: "never rest until the work is finished",
     }),
      shuffleOptions({
        question:
          "The race between Hare and Turtle served as a reminder that ___________.",
        optionA: "napping is essential",
        optionB: "Hare is the fastest animal",
        optionC: "persistence and determination can lead to success",
        correctAnswer: "persistence and determination can lead to success",
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
          "The sun was shining bright on a winter day, making it pleasant.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Turtle was the fastest player in the forest football match.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Hare challenged Turtle to a race, and Turtle accepted.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Hare took a nap during the race, thinking Turtle was too fast to catch up.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Turtle was about to reach the finish line when Hare opened his eyes.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The forest animals were disappointed when Turtle won the race.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Hare learned a valuable lesson from the race about never resting.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Camel was appointed as the umpire for the race.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Hare and Turtle raced again, and this time Hare won.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The story highlights the importance of persistence and determination.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
