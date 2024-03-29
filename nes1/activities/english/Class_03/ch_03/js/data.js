export const chapter = "Chapter - 3: little George and His Axe";
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
        question: "What did Little George receive on his birthday?",
        optionA: "A bicycle",
        optionB: "An axe",
        optionC: "A toy",
        correctAnswer: "An axe",
     }),
      shuffleOptions({
        question: "How did Little George feel about his axe in the beginning?",
        optionA: "He was excited",
        optionB: "He was unsure if it would work",
        optionC: "He thought it was too big",
        correctAnswer: "He was unsure if it would work",
     }),
      shuffleOptions({
        question: "What did Little George use his axe for in the courtyard?",
        optionA: "Cutting down trees",
        optionB: "Striking plants",
        optionC: "Building a treehouse",
        correctAnswer: "Striking plants",
     }),
      shuffleOptions({
        question:
          "How did Little George's father react when he saw the plants had been cut down?",
        optionA: "He praised Little George",
        optionB: "He shouted at the family members and servants",
        optionC: "He laughed at the situation",
        correctAnswer: "He shouted at the family members and servants",
     }),
      shuffleOptions({
        question:
          "Who admitted to cutting down the plants in front of George's father?",
        optionA: "Little George",
        optionB: "A family member",
        optionC: "A servant",
        correctAnswer: "Little George",
     }),
      shuffleOptions({
        question: "Why did Little George cut down the plants with the axe?",
        optionA: "He wanted to impress his father",
        optionB: "He wanted to build a treehouse",
        optionC: "He wanted to test if the axe works",
        correctAnswer: "He wanted to test if the axe works",
     }),
      shuffleOptions({
        question:
          "How did Little George's father react after hearing his son's explanation?",
        optionA: "He scolded Little George",
        optionB: "He punished him badly",
        optionC: "He was happy that Little George told the truth",
        correctAnswer: "He was happy that Little George told the truth",
     }),
      shuffleOptions({
        question:
          "What advice did Little George's father give him after the incident?",
        optionA: "Never to use an axe again",
        optionB: "To always tell the truth",
        optionC: "To never hurt plants because they have life too",
        correctAnswer: "To never hurt plants because they have life too",
     }),
      shuffleOptions({
        question: "What did Little George become later in life?",
        optionA: "A famous actor",
        optionB: "The first President of America",
        optionC: "A famous scientist",
        correctAnswer: "The first President of America",
     }),
      shuffleOptions({
        question: "What was Little George's full name?",
        optionA: "George Washington",
        optionB: "George Lincoln",
        optionC: "George Franklin",
        correctAnswer: "George Washington",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Little George received an __________ on his birthday.",
        optionA: "axe",
        optionB: "bicycle",
        optionC: "book",
        correctAnswer: "axe",
     }),
      shuffleOptions({
        question:
          "Little George was unsure if his small axe could __________ wood.",
        optionA: "paint",
        optionB: "cut",
        optionC: "carve",
        correctAnswer: "cut",
     }),
      shuffleOptions({
        question:
          "Little George decided to try out his axe by cutting down __________ in the courtyard.",
        optionA: "plants",
        optionB: "rocks",
        optionC: "trees",
        correctAnswer: "plants",
     }),
      shuffleOptions({
        question:
          "Little George's father was angry and shouting at the family members and __________.",
        optionA: "neighbors",
        optionB: "teachers",
        optionC: "servants",
        correctAnswer: "servants",
     }),
      shuffleOptions({
        question:
          "Little George's father wanted to know who had cut down the plants and threatened to __________ badly.",
        optionA: "reward",
        optionB: "punish",
        optionC: "praise",
        correctAnswer: "punish",
     }),
      shuffleOptions({
        question:
          "Little George admitted that he had cut down the plants because he wanted to see if the __________ works.",
        optionA: "TV",
        optionB: "bicycle",
        optionC: "axe",
        correctAnswer: "axe",
     }),
      shuffleOptions({
        question:
          "Little George's father was pleased that his son had told the __________.",
        optionA: "lies",
        optionB: "truth",
        optionC: "stories",
        correctAnswer: "truth",
     }),
      shuffleOptions({
        question:
          "Little George's father picked him up in his arms and told him that __________ have life too.",
        optionA: "plants",
        optionB: "rocks",
        optionC: "toys",
        correctAnswer: "plants",
     }),
      shuffleOptions({
        question:
          "In the end, Little George's full name was revealed to be __________.",
        optionA: "John Adams",
        optionB: "George Washington",
        optionC: "Thomas Jefferson",
        correctAnswer: "George Washington",
     }),
      shuffleOptions({
        question:
          "Little George became the first President of __________ later in life.",
        optionA: "England",
        optionB: "America",
        optionC: "France",
        correctAnswer: "America",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Is the Earth flat?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Did George Washington become the first President of the United States?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Is water a solid at room temperature?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Did Shakespeare write the play 'Romeo and Juliet'?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Is the capital of France London?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Is the sun a star?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Is Antarctica the hottest continent on Earth?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Is the moon made of green cheese?",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Is oxygen a gas that we breathe in?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Is Mount Everest the tallest mountain in the world?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
