export const chapter = "Chapter - 4: Pastime";
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
          "What is the students' response when Ms. Shruti enters the class?",
        optionA: "Good afternoon, Ma'am!",
        optionB: "Good morning, Ma'am!",
        optionC: "Hello, Teacher!",
        correctAnswer: "Good morning, Ma'am!",
     }),
      shuffleOptions({
        question: "Which day is it when Ms. Shruti asks the students?",
        optionA: "Tuesday",
        optionB: "Wednesday",
        optionC: "Monday",
        correctAnswer: "Monday",
     }),
      shuffleOptions({
        question: "What did Ms. Shruti do on Sunday?",
        optionA: "Knitted a sweater",
        optionB: "Went sailing",
        optionC: "Played badminton",
        correctAnswer: "Knitted a sweater",
     }),
      shuffleOptions({
        question:
          "What is the term used by Ms. Shruti for the activities done in free time?",
        optionA: "Hobbies",
        optionB: "Pastime",
        optionC: "Leisure",
        correctAnswer: "Pastime",
     }),
      shuffleOptions({
        question:
          "According to Ms. Shruti, when she asks a question, who should answer?",
        optionA: "All students",
        optionB: "Only one student",
        optionC: "Students on the right",
        correctAnswer: "Only one student",
     }),
      shuffleOptions({
        question: "What did Naina do yesterday?",
        optionA: "Played badminton",
        optionB: "Went sailing",
        optionC: "Flew a kite",
        correctAnswer: "Went sailing",
     }),
      shuffleOptions({
        question: "What did Chirag do in his free time?",
        optionA: "Played badminton",
        optionB: "Flew a kite",
        optionC: "Helped his father wash the car",
        correctAnswer: "Flew a kite",
     }),
      shuffleOptions({
        question: "What activity does Ms. Shruti praise as a hobby?",
        optionA: "Reading",
        optionB: "Playing sports",
        optionC: "Clapping",
        correctAnswer: "Reading",
     }),
      shuffleOptions({
        question: "What did Mudit do yesterday?",
        optionA: "Played badminton",
        optionB: "Helped his father wash the car",
        optionC: "Made a painting of Gandhiji",
        correctAnswer: "Helped his father wash the car",
     }),
      shuffleOptions({
        question: "According to Ms. Shruti, what must be done with free time?",
        optionA: "Waste it",
        optionB: "Clap for oneself",
        optionC: "Utilize it well",
        correctAnswer: "Utilize it well",
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
          "Ms. Shruti entered the class, and the students greeted her with, 'Good morning, Ma'am!' They then ____________.",
        optionA: "stood up",
        optionB: "sat down",
        optionC: "started clapping",
        correctAnswer: "sat down",
     }),
      shuffleOptions({
        question:
          "Ms. Shruti asked, 'What day is it today?' and the students responded, 'It is ____________.'",
        optionA: "Sunday",
        optionB: "Monday",
        optionC: "Tuesday",
        correctAnswer: "Monday",
     }),
      shuffleOptions({
        question:
          "According to Ms. Shruti, when she asks a question, only ____________ student has to answer.",
        optionA: "two",
        optionB: "one",
        optionC: "all",
        correctAnswer: "one",
     }),
      shuffleOptions({
        question:
          "Ms. Shruti mentioned that on Sunday, she knitted a sweater for her ____________.",
        optionA: "friend",
        optionB: "teacher",
        optionC: "mother",
        correctAnswer: "mother",
     }),
      shuffleOptions({
        question:
          "Naina shared that she went ____________ in the City Lake with her parents.",
        optionA: "cycling",
        optionB: "sailing",
        optionC: "hiking",
        correctAnswer: "sailing",
     }),
      shuffleOptions({
        question:
          "Chirag mentioned that he flew a ____________ with his father.",
        optionA: "balloon",
        optionB: "kite",
        optionC: "drone",
        correctAnswer: "kite",
     }),
      shuffleOptions({
        question: "Manu said he played ____________ with his friends.",
        optionA: "chess",
        optionB: "badminton",
        optionC: "soccer",
        correctAnswer: "badminton",
     }),
      shuffleOptions({
        question:
          "Nalini revealed that her father bought her a ____________, and she read it.",
        optionA: "toy",
        optionB: "storybook",
        optionC: "magazine",
        correctAnswer: "storybook",
     }),
      shuffleOptions({
        question:
          "Mudit shared that he helped his father wash the ____________.",
        optionA: "dishes",
        optionB: "clothes",
        optionC: "car",
        correctAnswer: "car",
     }),
      shuffleOptions({
        question: "Saroj mentioned that she made a painting of ____________.",
        optionA: "a landscape",
        optionB: "a historical figure",
        optionC: "Gandhiji",
        correctAnswer: "Gandhiji",
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
          "The students greeted Ms. Shruti with 'Good afternoon, Ma'am!' when she entered the class.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ms. Shruti asked, 'What day is it today?' and the students responded that it is Tuesday.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ms. Shruti mentioned that on Sunday, she played badminton with her friends.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "According to Ms. Shruti, when she asks a question, all students have to answer.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Naina went sailing in the City Lake with her parents.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Chirag mentioned that he flew a kite with his mother.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Manu said he played soccer with his friends.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Nalini's father bought her a toy, and she read it yesterday.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Mudit helped his father wash the car.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Saroj made a painting of Gandhiji.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
