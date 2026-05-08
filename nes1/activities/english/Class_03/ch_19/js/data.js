export const chapter = "Chapter -19: A Salute to Trees";
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
          question: "What is the primary focus of the poem?",
          optionA: "Animals in the forest",
          optionB: "Trees and their usefulness",
          optionC: "Different types of wood",
          correctAnswer: "Trees and their usefulness",
        }),
      shuffleOptions({
          question:
            "According to the poem, what is one reason why trees are valued?",
          optionA: "Their ability to provide shade",
          optionB: "Their strength of the root",
          optionC: "Their ability to sing",
          correctAnswer: "Their strength of the root",
        }),
      shuffleOptions({
          question:
            "Which line from the poem emphasizes the role of trees in providing shelter?",
          optionA: "Some for the strength of the root",
          optionB: "Some for shelter against the storm",
          optionC: "Some for a boat ride in a stream",
          correctAnswer: "Some for shelter against the storm",
        }),
      shuffleOptions({
          question:
            "What is mentioned as a purpose for some trees in the poem?",
          optionA: "Keeping the fireplace warm",
          optionB: "Flying in the sky",
          optionC: "Growing flowers and fruits",
          correctAnswer: "Keeping the fireplace warm",
        }),
      shuffleOptions({
          question:
            "Which line suggests trees being used for construction purposes?",
          optionA: "Some for the sweetness of flower or fruit",
          optionB: "Some for the roof and some for the beam",
          optionC: "Some for a boat ride in a stream",
          correctAnswer: "Some for the roof and some for the beam",
        }),
      shuffleOptions({
          question:
            "What activity does the poem suggest can be enjoyed with some trees?",
          optionA: "Climbing",
          optionB: "Swimming",
          optionC: "Boat ride in a stream",
          correctAnswer: "Boat ride in a stream",
        }),
      shuffleOptions({
          question:
            "How does the poem describe the contribution of trees throughout history?",
          optionA: "Trees have been a source of conflict",
          optionB: "Trees have been indifferent to humans",
          optionC: "Trees have offered their gifts to man",
          correctAnswer: "Trees have offered their gifts to man",
        }),
      shuffleOptions({
          question: "What is the central theme of the poem?",
          optionA: "The importance of animals in nature",
          optionB: "The value of trees and their various uses",
          optionC: "The beauty of flowers in the forest",
          correctAnswer: "The value of trees and their various uses",
        }),
      shuffleOptions({
          question:
            "According to the poem, what determines the usefulness of a tree?",
          optionA: "The color of its leaves",
          optionB: "The number of branches it has",
          optionC:
            "Different characteristics like strength, sweetness, and suitability for various purposes",
          correctAnswer:
            "Different characteristics like strength, sweetness, and suitability for various purposes",
        }),
      shuffleOptions({
          question:
            "Which line suggests the enduring relationship between trees and humans?",
          optionA: "Some for shelter against the storm",
          optionB: "Some for a boat ride in a stream",
          optionC:
            "In the wealth of the wood since the world began, The trees have offered their gifts to man",
          correctAnswer:
            "In the wealth of the wood since the world began, The trees have offered their gifts to man",
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
          question: "Many a tree is found in the ________.",
          optionA: "forest",
          optionB: "desert",
          optionC: "mountain",
          correctAnswer: "forest",
        }),
      shuffleOptions({
          question: "Some trees are valued for the ________ of their root.",
          optionA: "size",
          optionB: "strength",
          optionC: "color",
          correctAnswer: "strength",
        }),
      shuffleOptions({
          question: "Trees provide ________ against the storm.",
          optionA: "shelter",
          optionB: "food",
          optionC: "shade",
          correctAnswer: "shelter",
        }),
      shuffleOptions({
          question: "Some trees are used to keep the ________ warm.",
          optionA: "garden",
          optionB: "fireplace",
          optionC: "lake",
          correctAnswer: "fireplace",
        }),
      shuffleOptions({
          question:
            "Certain trees are utilized for the ________ and some for the beam.",
          optionA: "roof",
          optionB: "flower",
          optionC: "sky",
          correctAnswer: "roof",
        }),
      shuffleOptions({
          question: "Some trees are suitable for a boat ride in a ________.",
          optionA: "lake",
          optionB: "river",
          optionC: "desert",
          correctAnswer: "stream",
        }),
      shuffleOptions({
          question: "In the wealth of the ________ since the world began.",
          optionA: "garden",
          optionB: "jungle",
          optionC: "wood",
          correctAnswer: "wood",
        }),
      shuffleOptions({
          question: "Trees have offered their ________ to man.",
          optionA: "food",
          optionB: "gifts",
          optionC: "money",
          correctAnswer: "gifts",
        }),
      shuffleOptions({
          question:
            "Different characteristics like strength, sweetness, and suitability for various purposes determine the ________ of a tree.",
          optionA: "size",
          optionB: "usefulness",
          optionC: "height",
          correctAnswer: "usefulness",
        }),
      shuffleOptions({
          question:
            "The enduring relationship between trees and humans is highlighted in the line ________.",
          optionA: "Some for shelter against the storm",
          optionB: "Some for a boat ride in a stream",
          optionC:
            "In the wealth of the wood since the world began, The trees have offered their gifts to man",
          correctAnswer:
            "In the wealth of the wood since the world began, The trees have offered their gifts to man",
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
          question: "Trees are not found in forests.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "All trees have weak roots.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Trees cannot provide shelter against the storm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Trees are never used to keep the fireplace warm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Every tree is suitable for a boat ride in a stream.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Trees have never offered their gifts to man.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The usefulness of a tree is determined only by its size.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The enduring relationship between trees and humans is not highlighted in the poem.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Trees are not valued for their various characteristics.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The poem emphasizes that trees are not beneficial to humans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
