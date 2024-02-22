export const chapter = "Chapter - 19: The Bear and I";
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
        question: "What did the narrator encounter the other day?",
        optionA: "A rabbit",
        optionB: "A bear",
        optionC: "A squirrel",
        correctAnswer: "A bear",
     }),
      shuffleOptions({
        question: "Where did the bear appear?",
        optionA: "In the narrator's house",
        optionB: "Up in a tree",
        optionC: "In a cave",
        correctAnswer: "Up in a tree",
     }),
      shuffleOptions({
        question:
          "How did the bear and the narrator initially react to each other?",
        optionA: "They both ran away",
        optionB: "They stared at each other",
        optionC: "They had a friendly conversation",
        correctAnswer: "They stared at each other",
     }),
      shuffleOptions({
        question: "What did the bear say to the narrator?",
        optionA: "Let's be friends.",
        optionB: "You should climb the tree.",
        optionC: "Why don't you run?",
        correctAnswer: "Why don't you run?",
     }),
      shuffleOptions({
        question: "Why did the narrator start running away from the bear?",
        optionA: "The bear challenged the narrator to a race.",
        optionB: "The bear had a gun.",
        optionC: "The bear told the narrator to run.",
        correctAnswer: "The bear told the narrator to run.",
     }),
      shuffleOptions({
        question:
          "What obstacle did the narrator encounter while running from the bear?",
        optionA: "A river",
        optionB: "A mountain",
        optionC: "A tree",
        correctAnswer: "A tree",
     }),
      shuffleOptions({
        question:
          "How high was the lowest branch of the tree the narrator had to jump to?",
        optionA: "Five feet",
        optionB: "Ten feet",
        optionC: "Fifteen feet",
        correctAnswer: "Ten feet",
     }),
      shuffleOptions({
        question:
          "What happened when the narrator jumped into the air to reach the tree branch?",
        optionA: "They missed the branch and fell to the ground.",
        optionB: "They grabbed the branch on the first try.",
        optionC: "They landed on the bear.",
        correctAnswer: "They missed the branch and fell to the ground.",
     }),
      shuffleOptions({
        question:
          "How did the narrator eventually reach the branch they missed?",
        optionA: "They didn't reach the branch.",
        optionB: "They used a ladder.",
        optionC: "They caught it on the way back down.",
        correctAnswer: "They caught it on the way back down.",
     }),
      shuffleOptions({
        question:
          "What does the narrator hint at in the last line of the poem?",
        optionA: "They won't meet the bear again.",
        optionB: "They hope to have a rematch with the bear.",
        optionC: "They are excited to see the bear soon.",
        correctAnswer: "They hope to have a rematch with the bear.",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The other day I met a _______ bear.",
        options: ["friendly", "great big", "tiny"],
        correctAnswer: "great big",
     }),
      shuffleOptions({
        question: "He said to me, 'Why don't you _______?",
        options: ["walk", "run", "hide"],
        correctAnswer: "run",
     }),
      shuffleOptions({
        question: "The lowest branch was _______ feet high.",
        options: ["five", "ten", "fifteen"],
        correctAnswer: "ten",
     }),
      shuffleOptions({
        question: "I had to jump and trust my _______.",
        options: ["luck", "bear", "speed"],
        correctAnswer: "luck",
     }),
      shuffleOptions({
        question: "And missed that branch way up _______.",
        options: ["here", "there", "above"],
        correctAnswer: "there",
     }),
      shuffleOptions({
        question: "I caught that branch on the way back _______.",
        options: ["up", "down", "sideways"],
        correctAnswer: "down",
     }),
      shuffleOptions({
        question: "The narrator's encounter with the bear ended _______.",
        options: ["sadly", "strangely", "humorously"],
        correctAnswer: "humorously",
     }),
      shuffleOptions({
        question:
          "The narrator's experience with the bear left them wanting to meet the bear _______.",
        options: ["never again", "every day", "tomorrow"],
        correctAnswer: "soon",
     }),
      shuffleOptions({
        question: "The narrator and the bear both _______ each other.",
        options: ["avoided", "ignored", "sized up"],
        correctAnswer: "sized up",
     }),
      shuffleOptions({
        question: "That's all there is, there is no _______.",
        options: ["bear", "more", "tree"],
        correctAnswer: "more",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The bear in the story was small.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The narrator ran away from the bear as soon as they saw it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The lowest branch of the tree was twenty feet high.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The bear suggested that the narrator climb the tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The narrator successfully caught the tree branch on the first try.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The encounter with the bear ended tragically.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The narrator has no intention of meeting the bear again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The narrator and the bear sized each other up.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The narrator caught the tree branch on the way back up.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The story implies that the bear and the narrator became friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
