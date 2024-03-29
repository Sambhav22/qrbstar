export const chapter = "Chapter -17: Proposal to Marriage";
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
            "What is the tiger's initial reaction to the beautiful day?",
          optionA: "He feels hungry",
          optionB: "He plans to hunt for food",
          optionC: "He decides to enjoy himself",
          correctAnswer: "He decides to enjoy himself",
        }),
      shuffleOptions({
          question:
            "What does the tiger decide when he sees the young girl gathering firewood?",
          optionA: "He decides to hunt her for food",
          optionB: "He decides to marry her",
          optionC: "He decides to ignore her and continue his stroll",
          correctAnswer: "He decides to marry her",
        }),
      shuffleOptions({
          question:
            "How does the girl react when she sees the tiger approaching her?",
          optionA: "She agrees to marry him immediately",
          optionB: "She runs away nervously",
          optionC: "She tries to fight the tiger",
          correctAnswer: "She runs away nervously",
        }),
      shuffleOptions({
          question:
            "What does the tiger tell the girl's father when he catches up with them?",
          optionA: "He wants to eat the girl",
          optionB: "He wants to marry the girl",
          optionC: "He wants to hunt with the girl's father",
          correctAnswer: "He wants to marry the girl",
        }),
      shuffleOptions({
          question:
            "What problem does the girl's father point out to the tiger regarding his sharp nails and long teeth?",
          optionA: "The girl may be allergic to tigers",
          optionB: "The girl may get scared and run away",
          optionC: "The girl may get hurt by the tiger's physical traits",
          correctAnswer: "The girl may get hurt by the tiger's physical traits",
        }),
      shuffleOptions({
          question:
            "How does the girl's father suggest solving the problem with the tiger's sharp nails and long teeth?",
          optionA: "By getting the tiger a different wife",
          optionB: "By clipping the tiger's nails and pulling out his teeth",
          optionC: "By asking the tiger to leave",
          correctAnswer:
            "By clipping the tiger's nails and pulling out his teeth",
        }),
      shuffleOptions({
          question:
            "What is the tiger's reaction to the idea of clipping his nails and pulling out his teeth?",
          optionA: "He agrees immediately",
          optionB: "He refuses to undergo the procedure",
          optionC: "He suggests an alternative solution",
          correctAnswer: "He agrees immediately",
        }),
      shuffleOptions({
          question:
            "Who performs the nail clipping and teeth pulling on the tiger?",
          optionA: "The girl",
          optionB: "The girl's father",
          optionC: "The tiger himself",
          correctAnswer: "The girl's father",
        }),
      shuffleOptions({
          question: "How does the story end for the tiger?",
          optionA: "He lives happily ever after with the girl",
          optionB: "He suffers pain and is beaten by the girl's father",
          optionC: "He returns to the forest alone",
          correctAnswer: "He suffers pain and is beaten by the girl's father",
        }),
      shuffleOptions({
          question: "What is the girl's reaction at the end of the story?",
          optionA: "She is saddened by the tiger's fate",
          optionB: "She is indifferent to the tiger's fate",
          optionC:
            "She looks on happily through the window as her father beats the tiger",
          correctAnswer:
            "She looks on happily through the window as her father beats the tiger",
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
          question: "Tiger notices a young girl ________ firewood.",
          optionA: "burning",
          optionB: "collecting",
          optionC: "igniting",
          correctAnswer: "collecting",
        }),
      shuffleOptions({
          question: "The tiger decides to ________ the girl.",
          optionA: "hunt",
          optionB: "marry",
          optionC: "befriend",
          correctAnswer: "marry",
        }),
      shuffleOptions({
          question: "The girl reacts ________ when she sees the tiger.",
          optionA: "calmly",
          optionB: "nervously",
          optionC: "happily",
          correctAnswer: "nervously",
        }),
      shuffleOptions({
          question: "The tiger wants to ________ the girl to her father.",
          optionA: "befriend",
          optionB: "eat",
          optionC: "marry",
          correctAnswer: "marry",
        }),
      shuffleOptions({
          question:
            "The girl's father points out that the tiger's physical traits may ________ her.",
          optionA: "attract",
          optionB: "scare",
          optionC: "protect",
          correctAnswer: "hurt",
        }),
      shuffleOptions({
          question:
            "The girl's father suggests ________ the tiger's nails and teeth.",
          optionA: "ignoring",
          optionB: "clipping",
          optionC: "painting",
          correctAnswer: "clipping",
        }),
      shuffleOptions({
          question: "The tiger ________ to undergo the procedure.",
          optionA: "refuses",
          optionB: "agrees",
          optionC: "ignores",
          correctAnswer: "agrees",
        }),
      shuffleOptions({
          question:
            "The girl's father performs the nail clipping and teeth pulling ________.",
          optionA: "quickly",
          optionB: "slowly",
          optionC: "carefully",
          correctAnswer: "carefully",
        }),
      shuffleOptions({
          question:
            "The tiger ends up suffering ________ and is beaten by the girl's father.",
          optionA: "pleasure",
          optionB: "pain",
          optionC: "happiness",
          correctAnswer: "pain",
        }),
      shuffleOptions({
          question:
            "The girl looks on happily through the window as her father ________ the tiger.",
          optionA: "befriends",
          optionB: "beats",
          optionC: "comforts",
          correctAnswer: "beats",
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
          question: "Tiger initially plans to hunt for food on the pretty day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The tiger decides to marry the young girl after seeing her gathering firewood.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The girl reacts calmly when she sees the tiger approaching her.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The tiger wants to eat the girl when he catches up with her and her father.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The girl's father believes the tiger's physical traits may attract her.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The girl's father suggests ignoring the tiger's nails and teeth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The tiger refuses to undergo the nail clipping and teeth pulling procedure.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The girl's father performs the nail clipping and teeth pulling procedure slowly and carelessly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The tiger ends up suffering pleasure and is praised by the girl's father.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The girl looks on happily through the window as her father befriends the tiger.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
