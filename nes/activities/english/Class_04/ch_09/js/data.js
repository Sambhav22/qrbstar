export const chapter = "Chapter - 8: Quitting the Job";
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
        question: "Anas came for work in the ---",
        optionA: "Morning",
        optionB: "Afternoon",
        optionC: "Evening",
        correctAnswer: "Morning",
     }),
      shuffleOptions({
        question: "What kind of job did Anas initially have at the factory?",
        optionA: "Operating machinery",
        optionB: "Supervising workers",
        optionC: "Making iron rings",
        correctAnswer: "Making iron rings",
     }),
      shuffleOptions({
        question: "Why did Anas leave his job at the factory?",
        optionA: "The work was too easy.",
        optionB: "The pay was low.",
        optionC: "The work was too hard.",
        correctAnswer: "The pay was low.",
     }),
      shuffleOptions({
        question: "What job was Anas appointed to after leaving the factory?",
        optionA: "Factory manager",
        optionB: "Security guard",
        optionC: "Dressmaker",
        correctAnswer: "Security guard",
     }),
      shuffleOptions({
        question: "How much salary was Anas receiving as a security guard?",
        optionA: "500 rupees",
        optionB: "5,000 rupees",
        optionC: "10,000 rupees",
        correctAnswer: "10,000 rupees",
     }),
      shuffleOptions({
        question: "Why did Anas leave his job as a security guard?",
        optionA: "The salary was too low.",
        optionB: "He had to work long hours.",
        optionC: "The supervisor was kind.",
        correctAnswer: "He had to work long hours.",
     }),
      shuffleOptions({
        question: "What was the purpose of Anas going to the village?",
        optionA: "To visit his family",
        optionB: "To buy a horse",
        optionC: "To fetch a horse for work",
        correctAnswer: "To fetch a horse for work",
     }),
      shuffleOptions({
        question:
          "Why did Anas ask for two days' leave again after getting the horse?",
        optionA: "To go on a vacation",
        optionB: "To serve the horse and make money",
        optionC: "To avoid work",
        correctAnswer: "To serve the horse and make money",
     }),
      shuffleOptions({
        question:
          "What job did Anas take as a bearer after the horse-related work?",
        optionA: "Factory worker",
        optionB: "Restaurant manager",
        optionC: "Restaurant bearer",
        correctAnswer: "Restaurant bearer",
     }),
      shuffleOptions({
        question:
          "Why did Anas return to work at the narrator's house in the morning?",
        optionA: "The restaurant manager was kind.",
        optionB: "He had respect for the narrator's house.",
        optionC: "The narrator paid better.",
        correctAnswer: "He had respect for the narrator's house.",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Anas came for work in the ---.",
        optionA: "evening",
        optionB: "afternoon",
        optionC: "morning",
        correctAnswer: "morning",
     }),
      shuffleOptions({
        question: "Anas initially worked at a factory making ---.",
        optionA: "clothes",
        optionB: "iron rings",
        optionC: "shoes",
        correctAnswer: "iron rings",
     }),
      shuffleOptions({
        question:
          "Anas left his job at the factory because he was dissatisfied with the ---.",
        optionA: "workload",
        optionB: "salary",
        optionC: "location",
        correctAnswer: "salary",
     }),
      shuffleOptions({
        question: "Anas got a job as a --- after leaving the factory.",
        optionA: "doctor",
        optionB: "security guard",
        optionC: "dressmaker",
        correctAnswer: "security guard",
     }),
      shuffleOptions({
        question: "Anas' salary as a security guard was --- rupees.",
        optionA: "5,000",
        optionB: "10,000",
        optionC: "500",
        correctAnswer: "10,000",
     }),
      shuffleOptions({
        question:
          "Anas left his job as a security guard due to long working ---.",
        optionA: "holidays",
        optionB: "hours",
        optionC: "shifts",
        correctAnswer: "hours",
     }),
      shuffleOptions({
        question: "Anas went to the village to fetch a ---.",
        optionA: "car",
        optionB: "horse",
        optionC: "bicycle",
        correctAnswer: "horse",
     }),
      shuffleOptions({
        question:
          "Anas asked for two days' leave to serve and take care of the ---.",
        optionA: "bicycle",
        optionB: "horse",
        optionC: "car",
        correctAnswer: "horse",
     }),
      shuffleOptions({
        question: "Anas took up a job as a --- after the horse-related work.",
        optionA: "doctor",
        optionB: "restaurant manager",
        optionC: "bearer",
        correctAnswer: "bearer",
     }),
      shuffleOptions({
        question:
          "Anas returned to work at the narrator's house in the morning due to his respect for the ---.",
        optionA: "restaurant manager",
        optionB: "narrator's house",
        optionC: "factory owner",
        correctAnswer: "narrator's house",
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
          "The narrator found Anas standing at the door in the morning.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Anas's job at the factory was challenging but well-paying.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Anas left his job as a security guard because the supervisor was kind.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Anas borrowed money from the narrator to get shoes for his new job.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Anas worked as a security guard for a month before leaving the job.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Anas earned fifteen thousand rupees by fetching a horse from the village.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Anas left his job as a bearer in a restaurant because he was asked to mop the floor.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Anas returned to work at the narrator's house in the morning due to better pay.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Anas worked as a security guard for a few days before leaving the job.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The narrator was confident that Anas would continue working in the morning.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
