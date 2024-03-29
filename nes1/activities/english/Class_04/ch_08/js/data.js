export const chapter = "Chapter - 8: I Slipped on a Banana Peel";
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
          "What did the speaker slip on that caused them to hit their head?",
        optionA: "A patch of ice",
        optionB: "A roller skate",
        optionC: "A banana peel",
        correctAnswer: "A banana peel",
     }),
      shuffleOptions({
        question: "What did the speaker slip on that nearly killed them?",
        optionA: "A roller skate",
        optionB: "A patch of ice",
        optionC: "A bathtub",
        correctAnswer: "A patch of ice",
     }),
      shuffleOptions({
        question:
          "Where did the speaker land when they slipped inside the bathtub?",
        optionA: "On their head",
        optionB: "On their back",
        optionC: "On their face",
        correctAnswer: "On their face",
     }),
      shuffleOptions({
        question: "How many different places did the speaker slip in the text?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "5",
     }),
      shuffleOptions({
        question:
          "In which location did the speaker slip and tumble into space?",
        optionA: "Basement stairs",
        optionB: "Kitchen floor",
        optionC: "Bathtub",
        correctAnswer: "Basement stairs",
     }),
      shuffleOptions({
        question: "What does the speaker wear to prevent slipping now?",
        optionA: "Slippers",
        optionB: "Shoes or boots or clogs or flippers",
        optionC: "Socks",
        correctAnswer: "Shoes or boots or clogs or flippers",
     }),
      shuffleOptions({
        question: "What is the speaker's solution to avoid slipping?",
        optionA: "Avoid walking",
        optionB: "Wear socks",
        optionC: "Not wear slippers",
        correctAnswer: "Not wear slippers",
     }),
      shuffleOptions({
        question:
          "Which line in the text suggests that the speaker had multiple slipping incidents?",
        optionA: "I slipped upon a roller skate",
        optionB: "I slipped inside the bathtub",
        optionC: "I slipped upon the basement stairs.",
        correctAnswer: "I slipped upon the basement stairs.",
     }),
      shuffleOptions({
        question: "What does the speaker wish regarding their slipping?",
        optionA: "They wish to slip more often.",
        optionB: "They wish they could stop slipping.",
        optionC: "They wish to slip intentionally.",
        correctAnswer: "They wish they could stop slipping.",
     }),
      shuffleOptions({
        question: "What is the common theme in the poem?",
        optionA: "Overcoming fears",
        optionB: "Conquering obstacles",
        optionC: "Repeated slipping accidents",
        correctAnswer: "Repeated slipping accidents",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "I slipped on a ____________ and fell and hit my head.",
        optionA: "banana peel",
        optionB: "roller skate",
        optionC: "patch of ice",
        correctAnswer: "banana peel",
     }),
      shuffleOptions({
        question:
          "I slipped upon a patch of ____________, which nearly killed me dead.",
        optionA: "banana peel",
        optionB: "roller skate",
        optionC: "ice",
        correctAnswer: "ice",
     }),
      shuffleOptions({
        question:
          "I slipped upon a roller skate and tumbled into ____________.",
        optionA: "space",
        optionB: "kitchen floor",
        optionC: "bathtub",
        correctAnswer: "space",
     }),
      shuffleOptions({
        question: "I slipped inside the ____________ and I landed on my face.",
        optionA: "basement stairs",
        optionB: "roller skate",
        optionC: "bathtub",
        correctAnswer: "bathtub",
     }),
      shuffleOptions({
        question: "I slipped upon the ____________ and on the kitchen floor.",
        optionA: "kitchen floor",
        optionB: "roller skate",
        optionC: "basement stairs",
        correctAnswer: "basement stairs",
     }),
      shuffleOptions({
        question:
          "So now I wear my socks and shoes or boots or clogs or ____________.",
        optionA: "flippers",
        optionB: "roller skates",
        optionC: "ice",
        correctAnswer: "flippers",
     }),
      shuffleOptions({
        question:
          "I guess if I don't want to slip, I shouldn't wear my ____________!",
        optionA: "slippers",
        optionB: "socks",
        optionC: "boots",
        correctAnswer: "slippers",
     }),
      shuffleOptions({
        question: "I slipped upon a ____________ and tumbled into space.",
        optionA: "bathtub",
        optionB: "roller skate",
        optionC: "patch of ice",
        correctAnswer: "roller skate",
     }),
      shuffleOptions({
        question:
          "I slipped on a banana peel and fell and hit my ____________.",
        optionA: "bathtub",
        optionB: "head",
        optionC: "space",
        correctAnswer: "head",
     }),
      shuffleOptions({
        question: "I wish that I could stop myself from ____________ anymore.",
        optionA: "rolling",
        optionB: "slipping",
        optionC: "tumbled",
        correctAnswer: "slipping",
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
          "Slippery surfaces are responsible for accidents in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The speaker wishes they could continue slipping.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The speaker wears slippers to prevent slipping.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The speaker tumbled into space when slipping on a banana peel.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Slipping incidents occurred in only one location in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The speaker slipped on a roller skate and hit their head.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The speaker wishes they could stop slipping anymore.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The speaker's solution to avoid slipping is to wear socks.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Slippers are the best footwear to prevent slipping.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The common theme in the poem is about conquering obstacles.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
