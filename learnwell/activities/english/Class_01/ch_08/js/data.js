export const chapter = "Chapter - 8: Happy Birthday";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean)

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  if (optionsArray.length > 2) object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who greeted Lali first?",
        optionA: "Papa",
        optionB: "Teacher",
        optionC: "Mother",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "What did Lali say to her father?",
        optionA: "Good night",
        optionB: "I love you",
        optionC: "Bye",
        correctAnswer: "I love you",
      }),
      shuffleOptions({
        question: "What did Lali carry to school?",
        optionA: "Flowers",
        optionB: "Gifts",
        optionC: "Books",
        correctAnswer: "Gifts",
      }),
      shuffleOptions({
        question: "When will the cake be cut?",
        optionA: "Morning",
        optionB: "Evening",
        optionC: "Afternoon",
        correctAnswer: "Evening",
      }),
      shuffleOptions({
        question: "How did Lali feel on her birthday?",
        optionA: "Sad",
        optionB: "Angry",
        optionC: "Happy",
        correctAnswer: "Happy",
      }),
      shuffleOptions({
        question: "Who said 'We love you too'?",
        optionA: "Friends",
        optionB: "Parents",
        optionC: "Uncle",
        correctAnswer: "Parents",
      }),
      shuffleOptions({
        question: "What did Lali's mother ask her to do?",
        optionA: "Sleep",
        optionB: "Get ready",
        optionC: "Dance",
        correctAnswer: "Get ready",
      }),
      shuffleOptions({
        question: "What is Lali's real name?",
        optionA: "Laila",
        optionB: "Lalita",
        optionC: "Lali",
        correctAnswer: "Lalita",
      }),
      shuffleOptions({
        question: "Where was the birthday celebrated?",
        optionA: "Evening at home",
        optionB: "In a shop",
        optionC: "At school",
        correctAnswer: "Evening at home",
      }),
      shuffleOptions({
        question: "Lali's father called her:",
        optionA: "Naughty girl",
        optionB: "Darling daughter",
        optionC: "Birthday queen",
        correctAnswer: "Darling daughter",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Lali was very ______ today.",
        optionA: "happy",
        optionB: "sleepy",
        optionC: "sad",
        correctAnswer: "happy",
      }),
      shuffleOptions({
        question: "Lali's birthday was ______.",
        optionA: "yesterday",
        optionB: "today",
        optionC: "tomorrow",
        correctAnswer: "today",
      }),
      shuffleOptions({
        question: "Lali said '______ morning' to her parents.",
        optionA: "Good",
        optionB: "Happy",
        optionC: "Nice",
        correctAnswer: "Good",
      }),
      shuffleOptions({
        question: "They will cut the ______ in the evening.",
        optionA: "sweet",
        optionB: "toy",
        optionC: "cake",
        correctAnswer: "cake",
      }),
      shuffleOptions({
        question: "Lali took a packet of ______ to school.",
        optionA: "books",
        optionB: "flowers",
        optionC: "gifts",
        correctAnswer: "gifts",
      }),
      shuffleOptions({
        question: "Papa said, 'Happy ______ to my darling daughter.'",
        optionA: "Birthday",
        optionB: "Morning",
        optionC: "Gift",
        correctAnswer: "Birthday",
      }),
      shuffleOptions({
        question: "Mummy asked her to get ready for ______.",
        optionA: "bed",
        optionB: "school",
        optionC: "lunch",
        correctAnswer: "school",
      }),
      shuffleOptions({
        question: "Lali said, '______! Papa, I love you.'",
        optionA: "Oh",
        optionB: "Wow",
        optionC: "Oops",
        correctAnswer: "Wow",
      }),
      shuffleOptions({
        question: "Everyone will ______ her a happy birthday.",
        optionA: "tell",
        optionB: "ask",
        optionC: "wish",
        correctAnswer: "wish",
      }),
      shuffleOptions({
        question: "She will sing and ______ at the party.",
        optionA: "dance",
        optionB: "jump",
        optionC: "sleep",
        correctAnswer: "dance",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Lali was very happy on her birthday.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lali gave her friends chocolates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The party was planned in the afternoon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lali carried sweets to school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Her father called her a darling daughter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lali shouted at her parents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lali's mother ignored her in the morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lali said 'Wow! Papa, I love you.'",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "She was going to the market with gifts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Everyone would wish her a happy birthday.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;