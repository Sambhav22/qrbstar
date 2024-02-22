export const chapter = "Chapter - 15: Let's Communicate ";
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
            "What is the process of sending and receiving information called?",
          optionA: "Transmission",
          optionB: "Communication",
          optionC: "Interaction",
          correctAnswer: "Communication",
         }),
      shuffleOptions({
          question:
            "What is the oldest means of communication among the options provided?",
          optionA: "Radio",
          optionB: "Television",
          optionC: "Letter",
          correctAnswer: "Letter",
         }),
      shuffleOptions({
          question:
            "Which of the following is considered a means of private communication?",
          optionA: "Radio",
          optionB: "Email",
          optionC: "Television",
          correctAnswer: "Email",
         }),
      shuffleOptions({
          question:
            "In the context of the deadly virus, what is the anchor advising people to do in the TV show?",
          optionA: "Use hand sanitizers",
          optionB: "Maintain distance from people",
          optionC: "Wear masks only when at home",
          correctAnswer: "Maintain distance from people",
         }),
      shuffleOptions({
          question:
            "What is the medium of sending information to masses mentioned in the text?",
          optionA: "Letter",
          optionB: "Television",
          optionC: "Fax",
          correctAnswer: "Television",
         }),
      shuffleOptions({
          question:
            "Which means of communication is specifically mentioned as the oldest?",
          optionA: "Radio",
          optionB: "Newspaper",
          optionC: "Letter",
          correctAnswer: "Letter",
         }),
      shuffleOptions({
          question: "What deadly virus is mentioned in the text?",
          optionA: "SARS",
          optionB: "Ebola",
          optionC: "Corona virus",
          correctAnswer: "Corona virus",
         }),
      shuffleOptions({
          question:
            "What is recommended in the text as a preventive measure against the virus?",
          optionA: "Wearing masks at all times",
          optionB: "Using hand sanitizers frequently",
          optionC: "Avoiding the use of fax",
          correctAnswer: "Using hand sanitizers frequently",
         }),
      shuffleOptions({
          question:
            "What are radio, newspaper, and magazine collectively referred to as?",
          optionA: "Personal communication means",
          optionB: "Mass communication means",
          optionC: "Private communication means",
          correctAnswer: "Mass communication means",
         }),
      shuffleOptions({
          question:
            "What is the primary focus of the TV show mentioned in the text?",
          optionA: "Entertainment",
          optionB: "News about the deadly virus",
          optionC: "Fashion updates",
          correctAnswer: "News about the deadly virus",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "The process of sending and receiving information is called ___________.",
          optionA: "Interaction",
          optionB: "Transmission",
          optionC: "Communication",
          correctAnswer: "Communication",
         }),
      shuffleOptions({
          question:
            "Among the means of private communication, ________ is known as the oldest means.",
          optionA: "Fax",
          optionB: "Email",
          optionC: "Letter",
          correctAnswer: "Letter",
         }),
      shuffleOptions({
          question:
            "The deadly virus named _________ has spread in the masses.",
          optionA: "SARS",
          optionB: "Ebola",
          optionC: "Corona virus",
          correctAnswer: "Corona virus",
         }),
      shuffleOptions({
          question:
            "The TV anchor advises people to wear a ________ in case they go out.",
          optionA: "Tie",
          optionB: "Socks",
          optionC: "Mask",
          correctAnswer: "Mask",
         }),
      shuffleOptions({
          question:
            "Television, radio, newspaper, and magazine are collectively known as the means of __________ communication.",
          optionA: "Personal",
          optionB: "Private",
          optionC: "Mass",
          correctAnswer: "Mass",
         }),
      shuffleOptions({
          question:
            "The outbreak of the Corona virus has quickly taken place _________.",
          optionA: "Locally",
          optionB: "Regionally",
          optionC: "Around the world",
          correctAnswer: "Around the world",
         }),
      shuffleOptions({
          question:
            "In private capacity, means of private communication are used between ________ persons.",
          optionA: "One",
          optionB: "Two",
          optionC: "Multiple",
          correctAnswer: "Two",
         }),
      shuffleOptions({
          question:
            "To prevent themselves from the virus, people are advised to step out from home only in ________.",
          optionA: "Emergency",
          optionB: "Need",
          optionC: "Leisure",
          correctAnswer: "Need",
         }),
      shuffleOptions({
          question:
            "Among the means of communication, letter is known as the ________ means.",
          optionA: "Newest",
          optionB: "Oldest",
          optionC: "Modern",
          correctAnswer: "Oldest",
         }),
      shuffleOptions({
          question:
            "The medium of sending information to masses mentioned in the text is ________.",
          optionA: "Letter",
          optionB: "Television",
          optionC: "Fax",
          correctAnswer: "Television",
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
            "Communication is the process of sending and receiving information.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Email is known as the oldest means of communication.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Television is considered a means of private communication.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The deadly virus named Corona virus affects the digestive system.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Means of Mass Communication include radio, newspaper, and magazine.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Wearing masks is not recommended as a preventive measure against the virus.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Letter is known as the newest means of communication.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The outbreak of the Corona virus has quickly taken place globally.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Fax and email are means of private communication.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Maintaining distance from people is not advised as a preventive measure.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
