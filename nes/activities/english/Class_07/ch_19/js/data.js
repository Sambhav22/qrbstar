export const chapter = "Chapter - 19: If ...  ";
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
          "In the given text, what does the speaker emphasize the importance of keeping when others are losing theirs?",
        optionA: "Patience",
        optionB: "Virtue",
        optionC: "Wisdom",
        correctAnswer: "A) Patience",
     }),
      shuffleOptions({
        question:
          "According to the text, what should one do when all men doubt you?",
        optionA: "Trust yourself",
        optionB: "Confront them",
        optionC: "Ignore them",
        correctAnswer: "A) Trust yourself",
     }),
      shuffleOptions({
        question: "What should you make allowance for, according to the text?",
        optionA: "Doubts",
        optionB: "Criticism",
        optionC: "Compliments",
        correctAnswer: "A) Doubts",
     }),
      shuffleOptions({
        question:
          "According to the text, what should you not do when being lied about?",
        optionA: "Confront the liar",
        optionB: "Deal in lies",
        optionC: "Remain silent",
        correctAnswer: "B) Deal in lies",
     }),
      shuffleOptions({
        question:
          "What is the advice regarding responding to hatred in the text?",
        optionA: "Give way to hating",
        optionB: "Respond with kindness",
        optionC: "Do not give way to hating",
        correctAnswer: "C) Do not give way to hating",
     }),
      shuffleOptions({
        question:
          "What should you avoid looking like and talking like, according to the text?",
        optionA: "Wise and good",
        optionB: "Foolish and bad",
        optionC: "Arrogant and boastful",
        correctAnswer: "A) Wise and good",
     }),
      shuffleOptions({
        question:
          "According to the text, what should you not make your master?",
        optionA: "Dreams",
        optionB: "Thoughts",
        optionC: "Desires",
        correctAnswer: "A) Dreams",
     }),
      shuffleOptions({
        question: "How does the text describe triumph and disaster?",
        optionA: "As inevitable",
        optionB: "As impostors",
        optionC: "As life's challenges",
        correctAnswer: "B) As impostors",
     }),
      shuffleOptions({
        question:
          "What should you do when the truth you've spoken is twisted by knaves, according to the text?",
        optionA: "Retaliate",
        optionB: "Make a trap for fools",
        optionC: "Bear to hear it",
        correctAnswer: "C) Bear to hear it",
     }),
      shuffleOptions({
        question:
          "In the text, what is the ultimate reward for following the described principles?",
        optionA: "Worldly success",
        optionB: "Happiness",
        optionC: "Mastery and character development",
        correctAnswer: "C) Mastery and character development",
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
          "If you can keep your _____ when all about you Are losing theirs and blaming it on you;",
        options: ["composure", "head", "mind"],
        correctAnswer: "head",
     }),
      shuffleOptions({
        question:
          "Are losing theirs and blaming it on you; If you can trust yourself when all men _____ you,",
        options: ["believe", "doubt", "admire"],
        correctAnswer: "doubt",
     }),
      shuffleOptions({
        question: "But make allowance for their doubting _____;",
        options: ["as well", "too", "also"],
        correctAnswer: "too",
     }),
      shuffleOptions({
        question: "If you can wait and not be tired by _____;",
        options: ["resting", "running", "waiting"],
        correctAnswer: "waiting",
     }),
      shuffleOptions({
        question: "Or, being lied about, don't deal in _____;",
        options: ["truths", "lies", "stories"],
        correctAnswer: "lies",
     }),
      shuffleOptions({
        question: "Or being hated don't give way to _____;",
        options: ["love", "indifference", "hating"],
        correctAnswer: "hating",
     }),
      shuffleOptions({
        question: "And yet don't look too good, nor talk too _____;",
        options: ["much", "wisely", "boastfully"],
        correctAnswer: "wisely",
     }),
      shuffleOptions({
        question: "If you can dream-and not make dream your _____;",
        options: ["reality", "fantasy", "master"],
        correctAnswer: "master",
     }),
      shuffleOptions({
        question:
          "If you can meet with triumph and disaster and treat those two impostors just the _____;",
        options: ["same", "differently", "equally"],
        correctAnswer: "same",
     }),
      shuffleOptions({
        question:
          "What should you do when the truth you've spoken is twisted by knaves, according to the text?",
        options: ["Retaliate", "Make a trap for fools", "Bear to hear it"],
        correctAnswer: "Bear to hear it",
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
          "The speaker in the text emphasizes the importance of patience and self-trust.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests that it's acceptable to deal in lies when being lied about.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "According to the text, it is advisable to give way to hating when being hated.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The text advises looking too good and talking too wisely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The text encourages making dreams your master.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Triumph and disaster are described as impostors in the text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests retaliating when the truth you've spoken is twisted by knaves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The ultimate reward for following the described principles in the text is worldly success.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text implies that the traveler met a beautiful child on his journey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The speaker in the text advocates losing patience when all about you are losing theirs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
