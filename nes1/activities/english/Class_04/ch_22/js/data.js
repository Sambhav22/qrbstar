export const chapter = "Chapter - 22: The Three Runners  ";
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
          "What did the white people do to the black people during the time mentioned in the text?",
        optionA: "Provided them with equal opportunities",
        optionB: "Discriminated against them",
        optionC: "Hired them for various jobs",
        correctAnswer: "Discriminated against them",
     }),
      shuffleOptions({
        question:
          "In the whites-only areas, what could happen to black individuals who entered without a permit?",
        optionA: "They would be rewarded",
        optionB: "They would be arrested",
        optionC: "They would receive a warning",
        correctAnswer: "They would be arrested",
     }),
      shuffleOptions({
        question:
          "How did the two middle-aged black men react when they saw the approaching policeman?",
        optionA: "They confronted him",
        optionB: "They ignored him",
        optionC: "They decided to run",
        correctAnswer: "They decided to run",
     }),
      shuffleOptions({
        question:
          "What did the black man with a permit do when the other man didn't have one and the policeman began chasing them?",
        optionA: "He hid in a building",
        optionB: "He followed the other man",
        optionC: "He tried to stop the policeman",
        correctAnswer: "He followed the other man",
     }),
      shuffleOptions({
        question:
          "What was the outcome when the policeman caught the second man without a permit?",
        optionA: "He let him go",
        optionB: "He asked for his permit",
        optionC: "He put him behind bars",
        correctAnswer: "He asked for his permit",
     }),
      shuffleOptions({
        question:
          "Why did the second man, without a permit, start running when the policeman chased him?",
        optionA: "To trick the policeman",
        optionB: "Because he enjoyed running",
        optionC: "His doctor had advised him to run",
        correctAnswer: "His doctor had advised him to run",
     }),
      shuffleOptions({
        question:
          "When the policeman asked the second man for his permit, what was the man's response?",
        optionA: "He claimed he lost it",
        optionB: "He produced his permit",
        optionC: "He refused to show the permit",
        correctAnswer: "He produced his permit",
     }),
      shuffleOptions({
        question:
          "Why did the first black man with a permit run along with his friend without a permit?",
        optionA: "To help his friend escape",
        optionB: "To trick the policeman",
        optionC: "Because he wanted to get some exercise",
        correctAnswer: "To help his friend escape",
     }),
      shuffleOptions({
        question:
          "Why did the policeman become angry when the men explained that they were running for their health?",
        optionA: "He thought they were lying",
        optionB: "He was impressed by their dedication",
        optionC: "He understood their reasons",
        correctAnswer: "He thought they were lying",
     }),
      shuffleOptions({
        question:
          "How did the second man respond when the policeman asked why he didn't stop running?",
        optionA: "He claimed he didn't see the policeman",
        optionB: "He apologized for his mistake",
        optionC: "He suggested the policeman's doctor also advised running",
        correctAnswer:
          "He suggested the policeman's doctor also advised running",
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
          "In South Africa, during the mentioned period, the white people ____________ the country, while discriminating against the black people.",
        options: ["governed", "ruled", "managed"],
        correctAnswer: "ruled",
     }),
      shuffleOptions({
        question:
          "The exclusive areas, such as colonies, parks, hotels, and swimming pools, were restricted to ____________.",
        options: ["black people", "laborers", "white people"],
        correctAnswer: "white people",
     }),
      shuffleOptions({
        question:
          "Black electricians or plumbers could enter the whites-only areas for work, but they needed a ____________.",
        options: ["pass", "permit", "license"],
        correctAnswer: "permit",
     }),
      shuffleOptions({
        question:
          "If black individuals entered whites-only areas without a permit, they could be ____________.",
        options: ["rewarded", "arrested", "warned"],
        correctAnswer: "arrested",
     }),
      shuffleOptions({
        question:
          "When they saw the approaching policeman, the black man with the permit whispered to his companion, 'Run! I'll ____________ you.'",
        options: ["follow", "accompany", "protect"],
        correctAnswer: "follow",
     }),
      shuffleOptions({
        question:
          "The policeman started chasing them, shouting, 'Stop, stop!' as they ran. Finally, he caught the second man and demanded to see his ____________.",
        options: ["identification", "credentials", "permit"],
        correctAnswer: "permit",
     }),
      shuffleOptions({
        question:
          "The second man, after fumbling in his pocket, produced his permit, leaving the policeman ____________.",
        options: ["surprised", "relieved", "confused"],
        correctAnswer: "surprised",
     }),
      shuffleOptions({
        question:
          "When the policeman asked the second man why he ran, the man replied, 'My doctor's advice. He has asked me to run a mile every ____________.'",
        options: ["day", "morning", "evening"],
        correctAnswer: "evening",
     }),
      shuffleOptions({
        question:
          "The policeman asked the second man why his friend was running. The man replied, 'His doctor too has advised him to ____________.'",
        options: ["exercise", "run", "stay active"],
        correctAnswer: "run",
     }),
      shuffleOptions({
        question:
          "The bat spread his wings and claimed, 'But I am not a bird, I don't have ________. I am a mouse. Look closely, Mr. Weasel.'",
        options: ["feathers", "fur", "scales"],
        correctAnswer: "feathers",
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
          "The white people in South Africa ruled the country during the mentioned period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Black laborers in South Africa were not allowed to enter whites-only areas for work without a permit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The black man with the permit chose to hide instead of running when they saw the approaching policeman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The policeman caught the second man without a permit and let him go after seeing his permit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The first black man with a permit ran to trick the policeman into believing he didn't have one.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Both of the black men were running for their health, as advised by their doctors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The second man didn't stop running when he saw the policeman because he thought the policeman had been ordered to run by his doctor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests that the white people in South Africa treated black people equally in all areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The black man with the permit initially refused to run when the policeman approached them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The second man without a permit was eventually caught by the policeman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
