export const chapter = "Chapter - 15: What an Elephant looks like ";
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
        question: "What did the six blind men use while walking?",
        optionA: "White canes",
        optionB: "Walking sticks",
        optionC: "Guide dogs",
        correctAnswer: "Walking sticks",
     }),
      shuffleOptions({
        question: "Who shouted that they needed to make way for an elephant?",
        optionA: "The first blind man",
        optionB: "A passing pedestrian",
        optionC: "The mahout",
        correctAnswer: "The mahout",
     }),
      shuffleOptions({
        question:
          "What did the second blind man compare the elephant's tusk to?",
        optionA: "A wall",
        optionB: "A sword",
        optionC: "A snake",
        correctAnswer: "A sword",
     }),
      shuffleOptions({
        question:
          "How did the third blind man describe the elephant based on what he felt?",
        optionA: "Like a wall",
        optionB: "Like a sword",
        optionC: "Like a snake",
        correctAnswer: "Like a snake",
     }),
      shuffleOptions({
        question:
          "What did the fourth blind man compare the elephant to when he touched its leg?",
        optionA: "A wall",
        optionB: "A sword",
        optionC: "A tree",
        correctAnswer: "A tree",
     }),
      shuffleOptions({
        question:
          "What did the fifth blind man think the elephant's ear was like?",
        optionA: "A wall",
        optionB: "A sword",
        optionC: "A fan",
        correctAnswer: "A fan",
     }),
      shuffleOptions({
        question:
          "How did the sixth blind man describe the elephant based on what he touched?",
        optionA: "Like a wall",
        optionB: "Like a sword",
        optionC: "Like a rope",
        correctAnswer: "Like a rope",
     }),
      shuffleOptions({
        question:
          "What was the reaction of the mahout when the blind men argued about the elephant's nature?",
        optionA: "He scolded them",
        optionB: "He laughed",
        optionC: "He ignored them",
        correctAnswer: "He laughed",
     }),
      shuffleOptions({
        question:
          "What was the old man's response when he heard the blind men's argument?",
        optionA: "He told them they were all wrong",
        optionB: "He agreed with the first blind man",
        optionC: "He said they were each partially correct",
        correctAnswer: "He said they were each partially correct",
     }),
      shuffleOptions({
        question:
          "What lesson did the blind men learn from the old man's advice?",
        optionA: "They should trust their initial judgments",
        optionB: "They should always argue with each other",
        optionC: "They should not decide based on partial facts",
        correctAnswer: "They should not decide based on partial facts",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The six blind men used __________ while walking.",
        options: ["White canes", "Walking sticks", "Guide dogs"],
        correctAnswer: "Walking sticks",
     }),
      shuffleOptions({
        question:
          "The second blind man compared the elephant's tusk to a __________.",
        options: ["Wall", "Sword", "Snake"],
        correctAnswer: "Sword",
     }),
      shuffleOptions({
        question:
          "The third blind man described the elephant's trunk as being like a __________.",
        options: ["Wall", "Sword", "Snake"],
        correctAnswer: "Snake",
     }),
      shuffleOptions({
        question:
          "The fourth blind man thought the elephant was similar to a __________ when he touched its leg.",
        options: ["Wall", "Sword", "Tree"],
        correctAnswer: "Tree",
     }),
      shuffleOptions({
        question:
          "When the fifth blind man touched the elephant's ear, he believed it was like a __________.",
        options: ["Wall", "Sword", "Fan"],
        correctAnswer: "Fan",
     }),
      shuffleOptions({
        question:
          "The sixth blind man claimed that the elephant was exactly like a __________ based on what he touched.",
        options: ["Wall", "Sword", "Rope"],
        correctAnswer: "Rope",
     }),
      shuffleOptions({
        question:
          "The old man told the blind men that an elephant is a combination of all that they thought, such as a wall, a sword, a snake, a tree, a fan, and a __________.",
        options: ["Rope", "Tiger", "Bird"],
        correctAnswer: "Rope",
     }),
      shuffleOptions({
        question:
          "The blind men argued about the nature of the elephant but could not come to a __________.",
        options: ["Conclusion", "Compromise", "Consensus"],
        correctAnswer: "Conclusion",
     }),
      shuffleOptions({
        question:
          "The old man's advice taught the blind men not to decide based on only a __________.",
        options: ["Complete truth", "Partial fact", "Clear vision"],
        correctAnswer: "Partial fact",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The disease mentioned in the text is caused by a virus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Maintaining cleanliness is not essential for preventing diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text recommends eating snacks from the market for a healthy diet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Physical exercise can include activities like running and playing games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Brushing your teeth and taking a bath daily are mentioned as ways to maintain cleanliness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "It is essential to wash your hands with soap when entering the house from outside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests that sleeping late and rising late is beneficial for health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Snacks are considered good for health because they are tasty to eat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Maintaining hygiene can help keep diseases away.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "According to the text, thinking is a method to take a rest for the brain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
