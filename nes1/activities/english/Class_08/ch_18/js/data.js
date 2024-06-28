export const chapter = "Chapter -18: The Doll's House";
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
          question: "What color was the Doll's house described as?",
          optionA: "Blue",
          optionB: "Green",
          optionC: "Red",
          correctAnswer: "Green",
        }),
      shuffleOptions({
          question: "How were the chimneys on the Doll's house painted?",
          optionA: "Blue and Green",
          optionB: "Red and White",
          optionC: "Yellow and Black",
          correctAnswer: "Red and White",
        }),
      shuffleOptions({
          question:
            "What was the most exciting feature for Kezia in the Doll's house?",
          optionA: "The bed with real bedclothes",
          optionB: "The lamp with a white globe",
          optionC: "The cradle in the bedroom",
          correctAnswer: "The lamp with a white globe",
        }),
      shuffleOptions({
          question:
            "Who were the first two girls chosen by Isabel to see the Doll's house?",
          optionA: "Emmie Cole and Lena Logan",
          optionB: "Jessie May and Isabel",
          optionC: "Kezia and Lottie",
          correctAnswer: "Emmie Cole and Lena Logan",
        }),
      shuffleOptions({
          question:
            "Why were the Kelveys considered different and shunned by other children?",
          optionA: "Because they were rich",
          optionB: "Because their parents were famous",
          optionC:
            "Because of their social status and the rumors about their father",
          correctAnswer:
            "Because of their social status and the rumors about their father",
        }),
      shuffleOptions({
          question: "What did Lena Logan tell Lil Kelvey about her future?",
          optionA: "She will become a doctor",
          optionB: "She will become a servant",
          optionC: "She will become a teacher",
          correctAnswer: "She will become a servant",
        }),
      shuffleOptions({
          question: "What did Lil Kelvey's father do, according to the rumors?",
          optionA: "He was a doctor",
          optionB: "He was in prison",
          optionC: "He was a rich businessman",
          correctAnswer: "He was in prison",
        }),
      shuffleOptions({
          question:
            "Who interrupted the Kelveys and stopped them from seeing the Doll's house?",
          optionA: "Aunt Beryl",
          optionB: "Isabel",
          optionC: "Kezia",
          correctAnswer: "Aunt Beryl",
        }),
      shuffleOptions({
          question: "Why did Aunt Beryl apologize to Lil and Elise later?",
          optionA: "She felt sorry for them",
          optionB: "She was disturbed",
          optionC: "She wanted to be kind",
          correctAnswer: "She was disturbed",
        }),
      shuffleOptions({
          question:
            "What change came over Aunt Beryl after shooing the Kelveys away?",
          optionA: "She became angrier",
          optionB: "She apologized and invited them for tea",
          optionC: "She ignored them",
          correctAnswer: "She apologized and invited them for tea",
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
            "The doll's house was painted in a dark, oily, spinach green, picked out with bright ___________.",
          optionA: "Blue",
          optionB: "Yellow",
          optionC: "Red",
          correctAnswer: "Yellow",
        }),
      shuffleOptions({
          question:
            "The two solid little chimneys on the doll's house were painted in the colors __________ and __________.",
          optionA: "Green and Blue",
          optionB: "Red and White",
          optionC: "Yellow and Black",
          correctAnswer: "Red and White",
        }),
      shuffleOptions({
          question:
            "Kezia's favorite feature in the doll's house was the exquisite little amber lamp with a __________ globe.",
          optionA: "Blue",
          optionB: "Yellow",
          optionC: "White",
          correctAnswer: "White",
        }),
      shuffleOptions({
          question:
            "Isabel chose __________ and __________ as the first two girls to see the doll's house.",
          optionA: "Emmie Cole and Jessie May",
          optionB: "Lena Logan and Kezia",
          optionC: "Emmie Cole and Lena Logan",
          correctAnswer: "Emmie Cole and Lena Logan",
        }),
      shuffleOptions({
          question:
            "The Kelveys were shunned by other children because of their social status and the __________ about their father.",
          optionA: "Rumors",
          optionB: "Wealth",
          optionC: "Fame",
          correctAnswer: "Rumors",
        }),
      shuffleOptions({
          question:
            "Lena Logan told Lil Kelvey that she would become a __________ when she grows up.",
          optionA: "Doctor",
          optionB: "Teacher",
          optionC: "Servant",
          correctAnswer: "Servant",
        }),
      shuffleOptions({
          question: "According to rumors, Lil Kelvey's father was __________.",
          optionA: "A doctor",
          optionB: "In prison",
          optionC: "A rich businessman",
          correctAnswer: "In prison",
        }),
      shuffleOptions({
          question:
            "Who interrupted the Kelveys and stopped them from seeing the Doll's house?",
          optionA: "Aunt Beryl",
          optionB: "Isabel",
          optionC: "Kezia",
          correctAnswer: "Aunt Beryl",
        }),
      shuffleOptions({
          question: "Why did Aunt Beryl apologize to Lil and Elise later?",
          optionA: "She felt sorry for them",
          optionB: "She was disturbed",
          optionC: "She wanted to be kind",
          correctAnswer: "She was disturbed",
        }),
      shuffleOptions({
          question:
            "What change came over Aunt Beryl after shooing the Kelveys away?",
          optionA: "She became angrier",
          optionB: "She apologized and invited them for tea",
          optionC: "She ignored them",
          correctAnswer: "She apologized and invited them for tea",
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
            "The doll's house was painted in a dark, oily, spinach green, picked out with bright yellow.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The doll's house had four windows divided into panes by a broad streak of red.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The lamp in the doll's house was made of blue glass with a white globe.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Isabel chose Jessie May and Kezia as the first two girls to see the doll's house.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Kelveys were shunned by other children because of their wealth and fame.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Lena Logan told Lil Kelvey that she would become a teacher when she grows up.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "According to rumors, Lil Kelvey's father was a doctor.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aunt Beryl interrupted the Kelveys and invited them for tea.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Aunt Beryl apologized to Lil and Elise because she felt sorry for them.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The doll's house had a tiny porch painted blue with big lumps of congealed paint.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
