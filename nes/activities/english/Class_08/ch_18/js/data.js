export const chapter = "Chapter - 18: The Doll's House";
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
        question: "What color was the doll's house in the story?",
        options: ["A) Blue", "B) Green", "C) Red"],
        answer: "B",
     }),
      shuffleOptions({
        question: "Where did the children initially place the doll's house?",
        options: [
          "A) In the kitchen",
          "B) In the garden",
          "C) In the courtyard",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question: "What was Kezia's favorite feature of the doll's house?",
        options: ["A) The red carpet", "B) The tiny porch", "C) The lamp"],
        answer: "C",
     }),
      shuffleOptions({
        question:
          "Who were the first two girls chosen by Isabel to see the doll's house?",
        options: [
          "A) Emmie Cole and Lena Logan",
          "B) Lottie and Kezia",
          "C) The little Kelveys",
        ],
        answer: "A",
     }),
      shuffleOptions({
        question: "Why were the Kelveys shunned by the other children?",
        options: [
          "A) Because they were older",
          "B) Because they were wealthy",
          "C) Because their parents were different",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question:
          "What derogatory comment did Lena Logan make about Lil Kelvey?",
        options: [
          "A) She's going to be a doctor",
          "B) She's going to be a teacher",
          "C) She's going to be a servant",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question: "How did Lil Kelvey react when Lena Logan insulted her?",
        options: [
          "A) She cried",
          "B) She laughed",
          "C) She didn't seem to mind",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question:
          "Who reprimanded the children for inviting the Kelveys into the courtyard?",
        options: ["A) Aunt Beryl", "B) Mrs. Burnell", "C) The teacher"],
        answer: "A",
     }),
      shuffleOptions({
        question:
          "What kind gesture did Aunt Beryl make after scolding the Kelveys?",
        options: [
          "A) She apologized",
          "B) She described the doll's house to them",
          "C) She invited them in for tea",
        ],
        answer: "C",
     }),
      shuffleOptions({
        question: "What were the little Kelveys' names in the story?",
        options: [
          "A) Kate and Emily",
          "B) Lil and Elise",
          "C) Isabel and Lottie",
        ],
        answer: "B",
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
          "The children received a doll's house from their dear old ______________.",
        options: ["A) aunt", "B) grandmother", "C) mother"],
        correctAnswer: "B) grandmother",
     }),
      shuffleOptions({
        question:
          "The doll's house was propped up on two ______________ in the courtyard.",
        options: ["A) chairs", "B) wooden boxes", "C) tables"],
        correctAnswer: "B) wooden boxes",
     }),
      shuffleOptions({
        question:
          "The doll's house was painted in a dark, oily, spinach ______________ color.",
        options: ["A) green", "B) blue", "C) red"],
        correctAnswer: "A) green",
     }),
      shuffleOptions({
        question:
          "Kezia was particularly fascinated by the little ______________ in the doll's house.",
        options: ["A) lamp", "B) chimney", "C) window"],
        correctAnswer: "A) lamp",
     }),
      shuffleOptions({
        question:
          "Isabel, the eldest, chose to invite ______________ to see the doll's house first.",
        options: [
          "A) Emmie Cole and Lena Logan",
          "B) Lottie and Kezia",
          "C) the little Kelveys",
        ],
        correctAnswer: "A) Emmie Cole and Lena Logan",
     }),
      shuffleOptions({
        question:
          "The Kelveys were shunned by the other children because of their ______________ parents.",
        options: ["A) wealthy", "B) rude", "C) different"],
        correctAnswer: "C) different",
     }),
      shuffleOptions({
        question:
          "When Lena Logan insulted Lil Kelvey, Lil reacted by ______________.",
        options: ["A) crying", "B) laughing", "C) not seeming to mind"],
        correctAnswer: "C) not seeming to mind",
     }),
      shuffleOptions({
        question:
          "Who scolded the children for inviting the Kelveys into the courtyard?",
        options: ["A) Aunt Beryl", "B) Mrs. Burnell", "C) The teacher"],
        correctAnswer: "A) Aunt Beryl",
     }),
      shuffleOptions({
        question:
          "Aunt Beryl later invited the Kelveys into the house for ______________.",
        options: ["A) tea", "B) punishment", "C) a lecture"],
        correctAnswer: "A) tea",
     }),
      shuffleOptions({
        question: "The Kelveys' names in the story were ______________.",
        options: [
          "A) Kate and Emily",
          "B) Lil and Elise",
          "C) Isabel and Lottie",
        ],
        correctAnswer: "B) Lil and Elise",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The doll's house was placed in the kitchen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The doll's house had red plush chairs in the drawing-room.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The Burnell children were allowed to invite the Kelveys to see the doll's house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Aunt Beryl scolded the children for inviting the Kelveys into the courtyard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Lil Kelvey reacted with anger when Lena Logan insulted her.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The doll's house had two solid little chimneys glued on the roof.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The doll's house had a real functioning lamp.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The children chose to invite Isabel's school teacher to see the doll's house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Aunt Beryl invited the Kelveys into the house for tea after scolding them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The Kelveys' names were Kate and Emily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
