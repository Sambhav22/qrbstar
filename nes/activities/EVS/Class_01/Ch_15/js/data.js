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
          question: "What is the term used for the exchange of messages?",
          optionA: "Transaction",
          optionB: "Communication",
          optionC: "Interaction",
          correctAnswer: "Communication",
         }),
      shuffleOptions({
          question:
            "What are the means of communication mentioned in the text?",
          optionA: "Mobile telephone, fax, e-mail",
          optionB: "Letter, SMS, carrier pigeon",
          optionC: "Radio, television, internet",
          correctAnswer: "Mobile telephone, fax, e-mail",
         }),
      shuffleOptions({
          question:
            "Avi is using postal method for communication. What is the advantage mentioned about this method?",
          optionA: "Fastest method",
          optionB: "Cheapest and oldest method for sending written information",
          optionC: "Most secure method",
          correctAnswer:
            "Cheapest and oldest method for sending written information",
         }),
      shuffleOptions({
          question:
            "Which of the following is not mentioned as a means of communication in the text?",
          optionA: "Fax",
          optionB: "Carrier pigeon",
          optionC: "Television",
          correctAnswer: "Television",
         }),
      shuffleOptions({
          question:
            "In the context of the text, what is Avi sending to his friend?",
          optionA: "Email",
          optionB: "Letter",
          optionC: "SMS",
          correctAnswer: "Letter",
         }),
      shuffleOptions({
          question:
            "What method of communication is Avi using to send the letter to his friend?",
          optionA: "Email",
          optionB: "Postal method",
          optionC: "SMS",
          correctAnswer: "Postal method",
         }),
      shuffleOptions({
          question:
            "Which method is described as the cheapest and oldest for sending written information?",
          optionA: "Fax",
          optionB: "E-mail",
          optionC: "Postal method",
          correctAnswer: "Postal method",
         }),
      shuffleOptions({
          question:
            "What are the modern electronic means of communication mentioned in the text?",
          optionA: "Letter, SMS",
          optionB: "Mobile telephone, fax, e-mail",
          optionC: "Carrier pigeon, telegram",
          correctAnswer: "Mobile telephone, fax, e-mail",
         }),
      shuffleOptions({
          question:
            "What is mentioned as a written form of communication in the text?",
          optionA: "Mobile telephone",
          optionB: "E-mail",
          optionC: "Letter",
          correctAnswer: "Letter",
         }),
      shuffleOptions({
          question:
            "According to the text, what is required for communication to take place?",
          optionA: "Mobile telephone",
          optionB: "Means of communication",
          optionC: "Internet connection",
          correctAnswer: "Means of communication",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "________ is the oldest means of communication",
          optionA: "Post Office",
          optionB: "Letter",
          optionC: "Communication",
          correctAnswer: "Letter",
         }),
      shuffleOptions({
          question: "Sending and receiving of messages is known as _________",
          optionA: "Communication",
          optionB: "Post Office",
          optionC: "Letter",
          correctAnswer: "Communication",
         }),
      shuffleOptions({
          question: "We go to the _________ to post a letter",
          optionA: "Letter",
          optionB: "Communication",
          optionC: "Post Office",
          correctAnswer: "Post Office",
         }),
      shuffleOptions({
          question: "Sending and receiving of messages is called ___________.",
          optionA: "Interaction",
          optionB: "Transaction",
          optionC: "Communication",
          correctAnswer: "Communication",
         }),
      shuffleOptions({
          question:
            "To communicate, we need certain means. These are: mobile telephone, fax, ___________, letter, SMS.",
          optionA: "Carrier pigeon",
          optionB: "Email",
          optionC: "Television",
          correctAnswer: "Email",
         }),
      shuffleOptions({
          question:
            "Avi is sending a letter to his friend using the ___________ method of communication.",
          optionA: "Email",
          optionB: "Postal",
          optionC: "SMS",
          correctAnswer: "Postal",
         }),
      shuffleOptions({
          question:
            "The ___________ method is mentioned as the cheapest and oldest method of sending written information.",
          optionA: "Fax",
          optionB: "Email",
          optionC: "Postal",
          correctAnswer: "Postal",
         }),
      shuffleOptions({
          question: "Let's post a ___________ today.",
          optionA: "Text message",
          optionB: "Letter",
          optionC: "Email",
          correctAnswer: "Letter",
         }),
      shuffleOptions({
          question:
            "Avi is using the ___________ method for communication when sending a letter.",
          optionA: "Fax",
          optionB: "Email",
          optionC: "Postal",
          correctAnswer: "Postal",
         }),
      shuffleOptions({
          question:
            "The postal method is described as the ___________ method for sending written information.",
          optionA: "Newest",
          optionB: "Most expensive",
          optionC: "Cheapest and oldest",
          correctAnswer: "Cheapest and oldest",
         }),
      shuffleOptions({
          question:
            "Avi is sending a letter, which is a form of ___________ communication.",
          optionA: "Verbal",
          optionB: "Written",
          optionC: "Visual",
          correctAnswer: "Written",
         }),
      shuffleOptions({
          question:
            "The means of communication mentioned include mobile telephone, fax, ___________, letter, SMS.",
          optionA: "Carrier pigeon",
          optionB: "Television",
          optionC: "Email",
          correctAnswer: "Email",
         }),
      shuffleOptions({
          question: "Avi is sending a letter to his ___________.",
          optionA: "Colleague",
          optionB: "Neighbor",
          optionC: "Friend",
          correctAnswer: "Friend",
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
            "Sending and receiving of messages is called communication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "To communicate, we need certain means: mobile telephone, fax, e-mail, letter, SMS.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Avi is sending a letter to his friend using the postal method of communication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "The postal method is the fastest method for sending written information.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Avi is using the email method for communication when sending a letter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The postal method is the most secure method for sending information.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Communication is the exchange of verbal messages only.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The means of communication mentioned include carrier pigeon and telegram.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Posting a letter is a written form of communication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Mobile telephone is mentioned as the oldest method of communication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
