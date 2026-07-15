export const chapter = "Chapter - 5: 'o' Sound";
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
          "What action should you take to enter a room with a locked door?",
        optionA: "Knock on the door",
        optionB: "Open the lock and push the door",
        optionC: "Wait for someone to open the door",
        correctAnswer: "Open the lock and push the door",
     }),
      shuffleOptions({
        question: "What did the king's crown do?",
        optionA: "Flew away",
        optionB: "Fell down",
        optionC: "Sparkled brightly",
        correctAnswer: "Fell down",
     }),
      shuffleOptions({
        question: "How did she clean her nose?",
        optionA: "With her hand",
        optionB: "With a cloth",
        optionC: "With a tissue",
        correctAnswer: "With a cloth",
     }),
      shuffleOptions({
        question: "When does Mother mop the floor?",
        optionA: "In the morning",
        optionB: "At noon",
        optionC: "In the evening",
        correctAnswer: "At noon",
     }),
      shuffleOptions({
        question: "Where did the cock crow?",
        optionA: "In the afternoon",
        optionB: "In the evening",
        optionC: "In the morning",
        correctAnswer: "In the morning",
     }),
      shuffleOptions({
        question: "What did Golu do after getting up?",
        optionA: "Ate breakfast",
        optionB: "Called his friends",
        optionC: "Went to school",
        correctAnswer: "Called his friends",
     }),
      shuffleOptions({
        question: "What did Golu and his friends do after he called them?",
        optionA: "Watched TV",
        optionB: "Went to the playground",
        optionC: "Played video games",
        correctAnswer: "Went to the playground",
     }),
      shuffleOptions({
        question: "What sport did Golu play with his friends?",
        optionA: "Cricket",
        optionB: "Basketball",
        optionC: "Football",
        correctAnswer: "Football",
     }),
      shuffleOptions({
        question: "What happened to Golu's team in the football game?",
        optionA: "They won by one goal",
        optionB: "They tied the game",
        optionC: "They were defeated by one goal",
        correctAnswer: "They were defeated by one goal",
     }),
      shuffleOptions({
        question: "What was the emotion described as 'Joy in the Ground'?",
        optionA: "Sadness",
        optionB: "Happiness",
        optionC: "Surprise",
        correctAnswer: "Happiness",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Open the lock and ______ the door.",
        optionA: "pull",
        optionB: "push",
        optionC: "close",
        correctAnswer: "push",
     }),
      shuffleOptions({
        question: "The king's crown ______ down.",
        optionA: "flew",
        optionB: "fell",
        optionC: "sparkled",
        correctAnswer: "fell",
     }),
      shuffleOptions({
        question: "She cleaned her nose with a ______.",
        optionA: "tissue",
        optionB: "hand",
        optionC: "book",
        correctAnswer: "tissue",
     }),
      shuffleOptions({
        question: "Mother mops the floor at ______.",
        optionA: "night",
        optionB: "noon",
        optionC: "morning",
        correctAnswer: "noon",
     }),
      shuffleOptions({
        question: "The cock ______ in the morning.",
        optionA: "sang",
        optionB: "crowed",
        optionC: "flew",
        correctAnswer: "crowed",
     }),
      shuffleOptions({
        question: "Golu got ______.",
        optionA: "tired",
        optionB: "sad",
        optionC: "up",
        correctAnswer: "up",
     }),
      shuffleOptions({
        question: "He called his friends and went to the ______.",
        optionA: "park",
        optionB: "school",
        optionC: "playground",
        correctAnswer: "playground",
     }),
      shuffleOptions({
        question: "He played ______ with them.",
        optionA: "chess",
        optionB: "soccer",
        optionC: "video games",
        correctAnswer: "soccer",
     }),
      shuffleOptions({
        question: "He could not stop the ______.",
        optionA: "rain",
        optionB: "ball",
        optionC: "wind",
        correctAnswer: "ball",
     }),
      shuffleOptions({
        question: "His team was defeated by one ______.",
        optionA: "goal",
        optionB: "point",
        optionC: "basket",
        correctAnswer: "goal",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Did the king's crown fall down?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Did Golu get up?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Did Golu's team win the football game?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Did the cock crow in the evening?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Did Mother mop the floor in the morning?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Did she clean her nose with a book?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Did Golu play chess with his friends?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Did the kid go to the park with his father?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Did Little Kiran sing beautifully?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Did she smile and say thank you when complimented?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
