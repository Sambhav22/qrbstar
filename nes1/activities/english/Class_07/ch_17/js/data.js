export const chapter = "Chapter - 17: School Friends";
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
        question: "What is Neel Kamal doing at the railway station cafeteria?",
        optionA: "Ordering a cup of tea",
        optionB: "Relishing chhole-bhature",
        optionC: "Taking a selfie with the policeman",
        correctAnswer: "Relishing chhole-bhature",
     }),
      shuffleOptions({
        question:
          "What does Harsh Vardhan call Neel Kamal when he first sees him?",
        optionA: "His childhood buddy",
        optionB: "His schoolmate",
        optionC: "His loveliest friend",
        correctAnswer: "His loveliest friend",
     }),
      shuffleOptions({
        question: "What is the name of Harsh Vardhan's wife?",
        optionA: "Leela",
        optionB: "Bhabhi",
        optionC: "Vivek",
        correctAnswer: "Leela",
     }),
      shuffleOptions({
        question: "What was Neel Kamal known as during his school days?",
        optionA: "Stone",
        optionB: "ATM",
        optionC: "Plump Boy",
        correctAnswer: "Stone",
     }),
      shuffleOptions({
        question:
          "What nickname did Harsh Vardhan have during his school days?",
        optionA: "Stone",
        optionB: "ATM",
        optionC: "Plump Boy",
        correctAnswer: "ATM",
     }),
      shuffleOptions({
        question:
          "How does Harsh Vardhan's son, Vivek, react when Neel Kamal tries to hug him?",
        optionA: "He hugs Neel Kamal tightly",
        optionB: "He hides behind his father",
        optionC: "He shakes hands with Neel Kamal",
        correctAnswer: "He hides behind his father",
     }),
      shuffleOptions({
        question: "What profession did Harsh Vardhan pursue for some time?",
        optionA: "Journalist",
        optionB: "Doctor",
        optionC: "Engineer",
        correctAnswer: "Journalist",
     }),
      shuffleOptions({
        question:
          "How does Neel Kamal respond to Harsh Vardhan's revelation about being a municipality primary teacher?",
        optionA: "He is surprised and disappointed",
        optionB: "He is happy for his friend",
        optionC: "He offers him a better job",
        correctAnswer: "He is happy for his friend",
     }),
      shuffleOptions({
        question: "What position has Neel Kamal achieved in the town?",
        optionA: "Municipal Councillor",
        optionB: "School Principal",
        optionC: "Mayor",
        correctAnswer: "Mayor",
     }),
      shuffleOptions({
        question:
          "How does the thin man react when he learns that Neel Kamal is the mayor?",
        optionA: "He becomes pale and speechless",
        optionB: "He congratulates Neel Kamal warmly",
        optionC: "He shows artificial respectfulness",
        correctAnswer: "He shows artificial respectfulness",
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
          "Neel Kamal ordered a full plate of ___________ and is waiting for a bowl of chaat.",
        options: ["sandwiches", "chhole-bhature", "pizza"],
        correctAnswer: "chhole-bhature",
     }),
      shuffleOptions({
        question: "Harsh Vardhan's wife's name is ___________.",
        options: ["Leela", "Padmini", "Meena"],
        correctAnswer: "Leela",
     }),
      shuffleOptions({
        question:
          "Neel Kamal was known as '___________' during his school days because he had an athletic body.",
        options: ["Plump Boy", "ATM", "Stone"],
        correctAnswer: "Stone",
     }),
      shuffleOptions({
        question:
          "Harsh Vardhan's nickname during his school days was '___________' because he kept telling stories all the time.",
        options: ["ATM", "Plump Boy", "Devil's Boy"],
        correctAnswer: "ATM",
     }),
      shuffleOptions({
        question:
          "Harsh Vardhan's son, Vivek, is a schoolboy in the ________ class.",
        options: ["first", "second", "third"],
        correctAnswer: "third",
     }),
      shuffleOptions({
        question:
          "Neel Kamal used to be known as 'Stone' because he had an athletic body and could perform __________.",
        options: ["magic tricks", "somersaults", "dance moves"],
        correctAnswer: "somersaults",
     }),
      shuffleOptions({
        question: "Neel Kamal has become the ________ of the town.",
        options: ["Municipal Councillor", "Mayor", "School Principal"],
        correctAnswer: "Mayor",
     }),
      shuffleOptions({
        question:
          "Harsh Vardhan was initially a __________ before becoming a municipality primary teacher.",
        options: ["doctor", "journalist", "engineer"],
        correctAnswer: "journalist",
     }),
      shuffleOptions({
        question:
          "The thin man's response to learning that Neel Kamal is the mayor appears to be __________ and rigid.",
        options: ["joyful", "surprised", "pale"],
        correctAnswer: "pale",
     }),
      shuffleOptions({
        question:
          "The thin man's expression when saying goodbye to the mayor is one of __________ and artificiality.",
        options: ["sincerity", "sugariness", "indifference"],
        correctAnswer: "sugariness",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Neel Kamal is a good-natured man with salt and pepper hair.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Harsh Vardhan is surprised to see Neel Kamal at the railway station.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Neel Kamal and Harsh Vardhan were known as 'devil's boys' during their school days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Harsh Vardhan was called 'ATM' because he kept telling stories all the time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Harsh Vardhan's son, Vivek, is a schoolboy in the second class.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Neel Kamal was known as 'Stone' because he had an athletic body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Neel Kamal has become the Municipal Councillor of the town.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Harsh Vardhan initially worked as a doctor before becoming a municipality primary teacher.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The thin man's response to learning that Neel Kamal is the mayor is one of joy and excitement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The thin man's expression when saying goodbye to the mayor is sincere and genuine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
