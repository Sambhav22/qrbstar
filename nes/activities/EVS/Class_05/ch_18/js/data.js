export const chapter = "Chapter - 18: Work and Pleasure";
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
    questions: [
      {
        questions: [
          {
            question: "What is the main purpose of work according to the text?",
            options: [
              "A) To gain education",
              "B) To raise the standard in society",
              "C) To perform physical exercises",
            ],
            answer: "B) To raise the standard in society",
          },
          {
            question:
              "What is the definition of manual work in the given passage?",
            options: [
              "A) Work performed using intellect skills",
              "B) Physical activities like farming and carpentry",
              "C) Jobs that require professional degrees",
            ],
            answer: "B) Physical activities like farming and carpentry",
          },
          {
            question:
              "Which professions are mentioned as examples of intellectual work?",
            options: [
              "A) Farmer, carpenter, mason",
              "B) Lawyer, teacher, doctor",
              "C) Sweeper, cobbler, tailor",
            ],
            answer: "B) Lawyer, teacher, doctor",
          },
          {
            question:
              "According to the passage, what is the importance of the services provided by manual workers?",
            options: [
              "A) They are not important",
              "B) They contribute to the smooth functioning of society",
              "C) Their services are only relevant in rural areas",
            ],
            answer: "B) They contribute to the smooth functioning of society",
          },
          {
            question:
              "What does the dignity of work mean, as mentioned in the text?",
            options: [
              "A) Only intellectual work is dignified",
              "B) All works are equally respectable",
              "C) Manual work is superior to intellectual work",
            ],
            answer: "B) All works are equally respectable",
          },
          {
            question:
              "According to the passage, who are considered the 'jans of lord Hari'?",
            options: [
              "A) Farmers",
              "B) Intellectual workers",
              "C) Manual workers, specifically those who sweep",
            ],
            answer: "C) Manual workers, specifically those who sweep",
          },
          {
            question:
              "What did Mahatma Gandhi emphasize regarding the size of work?",
            options: [
              "A) All work is small and insignificant",
              "B) No work is small or big, and everyone is equal",
              "C) Only manual work matters in society",
            ],
            answer: "B) No work is small or big, and everyone is equal",
          },
          {
            question:
              "What kind of works are classified as intellectual works in the passage?",
            options: [
              "A) Works performed without education",
              "B) Works involving physical labor",
              "C) Works utilizing intellect skills or brain",
            ],
            answer: "C) Works utilizing intellect skills or brain",
          },
          {
            question:
              "Why does the text mention the trend in society regarding manual workers?",
            options: [
              "A) To praise their work",
              "B) To criticize their contributions",
              "C) To highlight their social status",
            ],
            answer: "B) To criticize their contributions",
          },
          {
            question:
              "According to the passage, what did Gandhiji do in his ashram to emphasize the equality of all work?",
            options: [
              "A) He only performed intellectual work",
              "B) He hired manual workers for all tasks",
              "C) He personally engaged in cleaning rooms and toilets",
            ],
            answer: "C) He personally engaged in cleaning rooms and toilets",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "Manual work involves physical activities such as toiling the land, carrying loads, and is performed by individuals like farmers, carpenters, masons, and ____________.",
          optionA: "A) Lawyers",
          optionB: "B) Doctors",
          optionC: "C) Cobblers",
          correctAnswer: "C) Cobblers",
         }),
      shuffleOptions({
          question:
            "Intellectual work requires applying intellect skills or brain, and individuals like lawyers, teachers, and doctors perform their jobs after attaining a professional ____________ in their respective fields.",
          optionA: "A) Certificate",
          optionB: "B) Degree",
          optionC: "C) Diploma",
          correctAnswer: "B) Degree",
         }),
      shuffleOptions({
          question:
            "The dignity of work emphasizes that all kinds of works, whether manual or intellectual, are equally respectable and ____________.",
          optionA: "A) Significant",
          optionB: "B) Dignified",
          optionC: "C) Inferior",
          correctAnswer: "B) Dignified",
         }),
      shuffleOptions({
          question:
            "Gandhiji emphasized that no work should be considered superior or inferior, and everyone should be treated equally regardless of caste, work, creed, religion, race, or ____________.",
          optionA: "A) Profession",
          optionB: "B) Gender",
          optionC: "C) Education",
          correctAnswer: "A) Profession",
         }),
      shuffleOptions({
          question:
            "In society, there is a trend of treating manual workers poorly, leading to leg pulling, mental social harassment, and not considering them equal. This trend is criticized by promoting the idea that every work done with ____________ deserves appreciation.",
          optionA: "A) Efficiency",
          optionB: "B) Honesty",
          optionC: "C) Speed",
          correctAnswer: "B) Honesty",
         }),
      shuffleOptions({
          question:
            "According to Gandhiji, the persons who belong to low caste or engage in the work of sweeping are considered the ____________ of lord Hari.",
          optionA: "A) Disciples",
          optionB: "B) Devotees",
          optionC: "C) Jans",
          correctAnswer: "C) Jans",
         }),
      shuffleOptions({
          question:
            "Mahatma Gandhi actively promoted the concept that no work is small or big and personally engaged in the work of cleaning rooms and ____________.",
          optionA: "A) Kitchens",
          optionB: "B) Toilets",
          optionC: "C) Gardens",
          correctAnswer: "B) Toilets",
         }),
      shuffleOptions({
          question:
            "The passage mentions that intellectual work is performed by individuals like lawyers, teachers, and doctors who attain a professional degree in their respective ____________.",
          optionA: "A) Industries",
          optionB: "B) Fields",
          optionC: "C) Specializations",
          correctAnswer: "B) Fields",
         }),
      shuffleOptions({
          question:
            "The services provided by manual workers, such as farmers, carpenters, and tailors, are crucial for the ____________ functioning of society.",
          optionA: "A) Disruptive",
          optionB: "B) Chaotic",
          optionC: "C) Smooth",
          correctAnswer: "C) Smooth",
         }),
      shuffleOptions({
          question:
            "The trend of treating manual workers poorly is criticized by highlighting that everyone, regardless of their occupation, deserves ____________.",
          optionA: "A) Respect",
          optionB: "B) Criticism",
          optionC: "C) Isolation",
          correctAnswer: "A) Respect",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Manual work involves only intellectual skills.",
          options: ["True", "False"],
          answer: "False",
         }),
      shuffleOptions({
          question:
            "Intellectual work requires professional degrees in the respective field.",
          options: ["True", "False"],
          answer: "True",
         }),
      shuffleOptions({
          question:
            "According to the passage, every work done with sincerity deserves appreciation.",
          options: ["True", "False"],
          answer: "True",
         }),
      shuffleOptions({
          question:
            "Gandhiji emphasized that work should be judged based on caste, creed, and religion.",
          options: ["True", "False"],
          answer: "False",
         }),
      shuffleOptions({
          question:
            "In the text, manual workers are mentioned as the jans of lord Hari.",
          options: ["True", "False"],
          answer: "True",
         }),
      shuffleOptions({
          question:
            "Mahatma Gandhi personally engaged in intellectual work in his ashram.",
          options: ["True", "False"],
          answer: "False",
         }),
      shuffleOptions({
          question:
            "The trend of treating manual workers poorly is not criticized in the passage.",
          options: ["True", "False"],
          answer: "False",
         }),
      shuffleOptions({
          question:
            "The dignity of work means that only intellectual work is respectable.",
          options: ["True", "False"],
          answer: "False",
         }),
      shuffleOptions({
          question:
            "Intellectual work is performed without attaining a professional degree.",
          options: ["True", "False"],
          answer: "False",
         }),
      shuffleOptions({
          question:
            "In the society mentioned in the passage, every work is considered equal regardless of profession.",
          options: ["True", "False"],
          answer: "True",
           }),
    ]),
  }
}

export var activityData;
