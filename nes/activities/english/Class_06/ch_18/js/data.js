export const chapter = "Chapter - 18: Summer Sun";
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
        question: "What is the main theme of the text?",
        options: [
          "A) Summer vacations",
          "B) Practical jokes",
          "C) Friends' hospitality",
        ],
        answer: "B",
     }),
      shuffleOptions({
        question:
          "Why did the author become suspicious when they arrived at their friends' fort?",
        options: [
          "A) Their friends were unfriendly.",
          "B) Their friends gave them a grand reception.",
          "C) Their friends were not present to welcome them.",
        ],
        answer: "B",
     }),
      shuffleOptions({
        question: "How did the author feel during dinner at the fort?",
        options: [
          "A) Relaxed and happy",
          "B) Suspicious and on edge",
          "C) Grateful for their friends' kindness",
        ],
        answer: "B",
     }),
      shuffleOptions({
        question:
          "What did the author notice about the way people laughed during the evening?",
        options: [
          "A) They laughed quietly.",
          "B) They laughed in a normal manner.",
          "C) They laughed in an exaggerated fashion.",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question:
          "Why did the author feel like they were being watched when they retired to their room?",
        options: [
          "A) They had seen someone spying.",
          "B) They had a gut feeling.",
          "C) They heard laughter and whispering outside.",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question:
          "What did the author do to ensure they wouldn't be in complete darkness?",
        options: [
          "A) Lit all the lights in the room",
          "B) Covered the windows with curtains",
          "C) Slept with a night bulb on",
        ],
        answer: "A",
     }),
      shuffleOptions({
        question: "What made the author suspicious about the bed in the room?",
        options: [
          "A) It was too comfortable.",
          "B) It looked suspicious.",
          "C) It was located by the window.",
        ],
        answer: "B",
     }),
      shuffleOptions({
        question:
          "What precaution did the author take with the mattress before lying down?",
        options: [
          "A) Pulled it away from the bed",
          "B) Checked for hidden objects",
          "C) Flipped it over",
        ],
        answer: "A",
     }),
      shuffleOptions({
        question:
          "What woke the author up from a deep sleep in the middle of the night?",
        options: [
          "A) A loud noise",
          "B) A heavy body falling on them",
          "C) The smell of burning liquid",
        ],
        answer: "B",
     }),
      shuffleOptions({
        question:
          "Who turned out to be the source of the practical joke in the end?",
        options: [
          "A) The author's friends",
          "B) The author's own paranoia",
          "C) A stranger who had broken into the fort",
        ],
        answer: "A",
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
          "Once I went to spend the summer vacation with some friends in a ____________.",
        options: ["hotel", "cottage", "fort"],
        correctAnswer: "fort",
     }),
      shuffleOptions({
        question: "My friends were fond of ____________.",
        options: ["playing cards", "practical jokes", "outdoor adventures"],
        correctAnswer: "practical jokes",
     }),
      shuffleOptions({
        question: "When I arrived, they gave me a ____________ reception.",
        options: ["casual", "warm", "princely"],
        correctAnswer: "princely",
     }),
      shuffleOptions({
        question:
          "I said to myself: 'Look out, old man! They have something in store for you.'",
        options: [
          "Look out, old man!",
          "Beware, my friend!",
          "Watch your step!",
        ],
        correctAnswer: "Look out, old man!",
     }),
      shuffleOptions({
        question: "During the dinner, the enjoyment was ____________.",
        options: ["moderate", "excessive", "subdued"],
        correctAnswer: "excessive",
     }),
      shuffleOptions({
        question:
          "I thought: 'Here are people who have more than their share of ____________.'",
        options: ["work", "amusement", "stress"],
        correctAnswer: "amusement",
     }),
      shuffleOptions({
        question: "Every one laughed in an ____________ fashion.",
        options: ["ordinary", "exaggerated", "quiet"],
        correctAnswer: "exaggerated",
     }),
      shuffleOptions({
        question: "I smelled a practical joke in the ____________.",
        options: ["air", "water", "ground"],
        correctAnswer: "air",
     }),
      shuffleOptions({
        question:
          "The hour struck for retiring; and the whole household came to escort me to my ____________.",
        options: ["room", "car", "garden"],
        correctAnswer: "room",
     }),
      shuffleOptions({
        question:
          "They called to me: 'Good night.' I entered the room, shut the door, and remained standing, without moving a single step, looking at everything very carefully in the light of the ____________.",
        options: ["moonlight", "night bulb", "lantern"],
        correctAnswer: "night bulb",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The author's friends gave them a warm reception.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The author felt relaxed during dinner at the fort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The author was not suspicious of their friends' intentions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The king in the story loved perfectly round chapattis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The author found something suspicious about the bed in the room.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The king refused to eat square chapattis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The king enjoyed a chapatti that turned into a butterfly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Meena's family could only afford to eat chapattis with ketchup.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The author's friends were spying on them outside their room.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The author's paranoia led to the practical joke in the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
