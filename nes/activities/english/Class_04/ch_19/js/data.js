export const chapter = "Chapter -19: The Bear and I";
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
          question: "What did the bear ask the speaker to do?",
          optionA: "Run away",
          optionB: "Fight him",
          optionC: "Climb a tree",
          correctAnswer: "Run away",
        }),
      shuffleOptions({
          question: "What did the speaker do when the bear asked him to run?",
          optionA: "He ran away",
          optionB: "He stayed still",
          optionC: "He confronted the bear",
          correctAnswer: "He ran away",
        }),
      shuffleOptions({
          question:
            "What obstacle did the speaker encounter while running away?",
          optionA: "A river",
          optionB: "A fence",
          optionC: "A tree",
          correctAnswer: "A tree",
        }),
      shuffleOptions({
          question: "How did the speaker attempt to evade the bear?",
          optionA: "By hiding in a bush",
          optionB: "By climbing a tree",
          optionC: "By pretending to be dead",
          correctAnswer: "By climbing a tree",
        }),
      shuffleOptions({
          question: "What did the speaker try to grab onto while jumping?",
          optionA: "A vine",
          optionB: "A rope",
          optionC: "A tree branch",
          correctAnswer: "A tree branch",
        }),
      shuffleOptions({
          question:
            "Did the speaker successfully catch the lowest branch of the tree?",
          optionA: "Yes",
          optionB: "No",
          optionC: "It is not mentioned",
          correctAnswer: "No",
        }),
      shuffleOptions({
          question: "How did the speaker eventually stop his fall?",
          optionA: "By grabbing onto the ground",
          optionB: "By catching a branch on the way down",
          optionC: "By landing in a river",
          correctAnswer: "By catching a branch on the way down",
        }),
      shuffleOptions({
          question:
            "What emotion did the speaker ask the audience not to express?",
          optionA: "Anger",
          optionB: "Fear",
          optionC: "Disappointment",
          correctAnswer: "Fear",
        }),
      shuffleOptions({
          question:
            "What did the speaker assure the audience about meeting the bear again?",
          optionA: "It won't happen",
          optionB: "It's inevitable",
          optionC: "It's up to fate",
          correctAnswer: "It's inevitable",
        }),
      shuffleOptions({
          question: "How does the speaker conclude the story?",
          optionA: "With a warning",
          optionB: "With a promise",
          optionC: "With a resolution",
          correctAnswer: "With a promise",
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
            "What did the speaker encounter while running away from the bear? He encountered a ____________.",
          optionA: "River",
          optionB: "Fence",
          optionC: "Tree",
          correctAnswer: "Tree",
        }),
      shuffleOptions({
          question:
            "The speaker attempted to evade the bear by climbing a ____________.",
          optionA: "Bush",
          optionB: "Rock",
          optionC: "Tree",
          correctAnswer: "Tree",
        }),
      shuffleOptions({
          question:
            "While running away, the speaker had to jump and trust his ____________.",
          optionA: "Speed",
          optionB: "Instincts",
          optionC: "Luck",
          correctAnswer: "Luck",
        }),
      shuffleOptions({
          question:
            "The speaker tried to grab onto a ____________ while jumping.",
          optionA: "Vine",
          optionB: "Rope",
          optionC: "Branch",
          correctAnswer: "Branch",
        }),
      shuffleOptions({
          question:
            "Did the speaker successfully catch the lowest branch of the tree? No, he ____________ it.",
          optionA: "Caught",
          optionB: "Missed",
          optionC: "Touched",
          correctAnswer: "Missed",
        }),
      shuffleOptions({
          question:
            "How did the speaker eventually stop his fall? By catching a branch ____________.",
          optionA: "On the ground",
          optionB: "In mid-air",
          optionC: "On the way down",
          correctAnswer: "On the way down",
        }),
      shuffleOptions({
          question:
            "What emotion did the speaker ask the audience not to express? He asked them not to ____________.",
          optionA: "Laugh",
          optionB: "Cry",
          optionC: "Fret",
          correctAnswer: "Fret",
        }),
      shuffleOptions({
          question:
            "What did the speaker assure the audience about meeting the bear again? It's ____________ to happen.",
          optionA: "Unlikely",
          optionB: "Likely",
          optionC: "Up to fate",
          correctAnswer: "Up to fate",
        }),
      shuffleOptions({
          question:
            "How does the speaker conclude the story? With a ____________.",
          optionA: "Warning",
          optionB: "Promise",
          optionC: "Resolution",
          correctAnswer: "Promise",
        }),
      shuffleOptions({
          question:
            "The speaker met a bear and had a(n) ____________ encounter.",
          optionA: "Exciting",
          optionB: "Unpleasant",
          optionC: "Amusing",
          correctAnswer: "Unpleasant",
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
            "The speaker encountered a bear while walking in the forest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The bear asked the speaker why he didn't have a gun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The speaker successfully caught the lowest branch of the tree while jumping.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The speaker fell to the ground after missing the branch.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The speaker asked the audience not to laugh or cry.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The speaker assured the audience that he would never meet the bear again.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The speaker concluded the story with a warning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The encounter with the bear was described as pleasant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The speaker's fall was stopped by catching onto a branch on the ground.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The speaker met the bear again and had another encounter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
