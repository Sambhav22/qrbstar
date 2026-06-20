export const chapter = "Chapter -17:School Friends";
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
          question: "What is Neel Kamal's appearance at the railway station?",
          optionA: "Bald with a red shirt",
          optionB: "Salt and pepper hair with a white kurta-pyjama",
          optionC: "Blonde with a blue jacket",
          correctAnswer: "Salt and pepper hair with a white kurta-pyjama",
        }),
      shuffleOptions({
          question:
            "What food is Neel Kamal enjoying at the railway station cafeteria?",
          optionA: "Pizza",
          optionB: "Chhole-bhature",
          optionC: "Sushi",
          correctAnswer: "Chhole-bhature",
        }),
      shuffleOptions({
          question: "Who is the security guard standing near Neel Kamal?",
          optionA: "Train conductor",
          optionB: "Policeman",
          optionC: "Cafeteria manager",
          correctAnswer: "Policeman",
        }),
      shuffleOptions({
          question:
            "What does Neel Kamal see on his mobile phone screen that surprises him?",
          optionA: "A scenic view",
          optionB: "A thin, famished young man",
          optionC: "A funny meme",
          correctAnswer: "A thin, famished young man",
        }),
      shuffleOptions({
          question: "Who is Harsh Vardhan to Neel Kamal?",
          optionA: "Cousin",
          optionB: "School friend",
          optionC: "Colleague",
          correctAnswer: "School friend",
        }),
      shuffleOptions({
          question:
            "What nickname does Harsh Vardhan give Neel Kamal from their school days?",
          optionA: "Rockstar",
          optionB: "Stone",
          optionC: "Jester",
          correctAnswer: "Stone",
        }),
      shuffleOptions({
          question: "What is Harsh Vardhan's profession?",
          optionA: "Journalist",
          optionB: "Mayor",
          optionC: "Doctor",
          correctAnswer: "Journalist",
        }),
      shuffleOptions({
          question:
            "How does Neel Kamal respond to Harsh Vardhan's revelation about becoming a mayor?",
          optionA: "Shocked and angry",
          optionB: "Delighted and informal",
          optionC: "Indifferent",
          correctAnswer: "Delighted and informal",
        }),
      shuffleOptions({
          question: "What is Harsh Vardhan's son's name?",
          optionA: "Rohit",
          optionB: "Vivek",
          optionC: "Aryan",
          correctAnswer: "Vivek",
        }),
      shuffleOptions({
          question:
            "How does the thin man, Harsh Vardhan, react when Neel Kamal tells him about being the mayor?",
          optionA: "Angry",
          optionB: "Disappointed",
          optionC: "Artificially respectful",
          correctAnswer: "Artificially respectful",
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
            "Neel Kamal ordered a full plate of ___________ at the railway station cafeteria.",
          optionA: "Pizza",
          optionB: "Chhole-bhature",
          optionC: "Sushi",
          correctAnswer: "Chhole-bhature",
        }),
      shuffleOptions({
          question:
            "Neel Kamal takes out his mobile phone to take a ___________.",
          optionA: "Video",
          optionB: "Selfie",
          optionC: "Group photo",
          correctAnswer: "Selfie",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan's son, Vivek, is a schoolboy in the __________ class.",
          optionA: "First",
          optionB: "Second",
          optionC: "Third",
          correctAnswer: "Third",
        }),
      shuffleOptions({
          question:
            "Neel Kamal and Harsh Vardhan were known as ___________ during their school days.",
          optionA: "The genius duo",
          optionB: "Angelic boys",
          optionC: "Devil's boys",
          correctAnswer: "Devil's boys",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan was called ATM, which stands for Automated __________ Machine.",
          optionA: "Tale",
          optionB: "Telling",
          optionC: "Talking",
          correctAnswer: "Tale",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan joined as a journalist but later became a __________ primary teacher.",
          optionA: "Municipality",
          optionB: "High school",
          optionC: "College",
          correctAnswer: "Municipality",
        }),
      shuffleOptions({
          question:
            "Neel Kamal has risen to become the __________ of the town.",
          optionA: "Councilor",
          optionB: "Mayor",
          optionC: "Nagar Nigam",
          correctAnswer: "Mayor",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan was surprised to learn that Neel Kamal had become the __________.",
          optionA: "Councilor",
          optionB: "Prime Minister",
          optionC: "Mayor",
          correctAnswer: "Mayor",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan's wife, Leela, describes Neel Kamal as looking __________ and soft.",
          optionA: "Plump",
          optionB: "Slim",
          optionC: "Muscular",
          correctAnswer: "Plump",
        }),
      shuffleOptions({
          question:
            "The thin man reacts to Neel Kamal's revelation with artificial __________ and respectfulness.",
          optionA: "Humility",
          optionB: "Sarcasm",
          optionC: "Sweetness",
          correctAnswer: "Sweetness",
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
            "Neel Kamal ordered a full plate of Chhole-bhature at the railway station cafeteria.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan's son, Vivek, is a schoolboy in the Third class.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Neel Kamal and Harsh Vardhan were known as Angelic boys during their school days.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan was called ATM, which stands for Automated Talking Machine.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Neel Kamal has risen to become the Mayor of the town.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan was not satisfied with his job as a journalist.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The thin man, Harsh Vardhan, reacted to Neel Kamal's revelation with genuine sweetness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Neel Kamal's mobile phone camera captured a glimpse of a well-fed man, not a thin, famished one.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Harsh Vardhan's wife, Leela, thinks Neel Kamal looks slim and muscular.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Neel Kamal and Harsh Vardhan were childhood friends and known for their studious behavior.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
