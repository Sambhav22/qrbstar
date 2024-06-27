export const chapter = "Chapter -14: Let's Send a Letter";
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
          question: "What is communication?",
          optionA: "Transfer of goods and services",
          optionB: "Transferring messages, ideas, and thoughts",
          optionC: "Transporting physical objects",
          correctAnswer: "Transferring messages, ideas, and thoughts",
        }),
      shuffleOptions({
          question:
            "How do dancers often communicate their feelings to the audience?",
          optionA: "Through paintings",
          optionB: "Using symbols",
          optionC: "Through gestures",
          correctAnswer: "Through gestures",
        }),
      shuffleOptions({
          question: "What does a symbol represent in communication?",
          optionA: "A hidden message",
          optionB: "An object, function, or process",
          optionC: "A direct language",
          correctAnswer: "An object, function, or process",
        }),
      shuffleOptions({
          question:
            "What is the cheapest way to communicate with people in different locations?",
          optionA: "Radio",
          optionB: "Letters",
          optionC: "Mobile phones",
          correctAnswer: "Letters",
        }),
      shuffleOptions({
          question: "How can urgent letters be sent according to the text?",
          optionA: "Through mass communication",
          optionB: "Using speed post or courier",
          optionC: "Via email",
          correctAnswer: "Using speed post or courier",
        }),
      shuffleOptions({
          question:
            "What is the fastest means of personal communication mentioned in the text?",
          optionA: "Postcards",
          optionB: "Mobile phones",
          optionC: "Letters",
          correctAnswer: "Mobile phones",
        }),
      shuffleOptions({
          question: "What is mass communication?",
          optionA: "Personal conversations",
          optionB: "Large-scale exchange of information",
          optionC: "Communication through symbols only",
          correctAnswer: "Large-scale exchange of information",
        }),
      shuffleOptions({
          question:
            "What is stated as an essential requirement for the survival of humans in the text?",
          optionA: "Mass communication",
          optionB: "Shelter",
          optionC: "Communication",
          correctAnswer: "Communication",
        }),
      shuffleOptions({
          question:
            "How do people who do not speak often express their feelings and needs?",
          optionA: "Through paintings",
          optionB: "By using symbols",
          optionC: "Through sign language",
          correctAnswer: "Through sign language",
        }),
      shuffleOptions({
          question:
            "What enables us to know what is happening around the world, according to the text?",
          optionA: "Letters",
          optionB: "Mass communication",
          optionC: "Mobile phones",
          correctAnswer: "Mass communication",
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
            "Communication is the ____________ of messages, ideas, and thoughts from one person to another.",
          optionA: "Interpretation",
          optionB: "Transfer",
          optionC: "Reception",
          correctAnswer: "Transfer",
        }),
      shuffleOptions({
          question:
            "Signs are a form of language that directly communicates with the targeted audiences, for example, a dancer communicates her feelings through ____________ during a performance.",
          optionA: "Speech",
          optionB: "Movements",
          optionC: "Symbols",
          correctAnswer: "Movements",
        }),
      shuffleOptions({
          question:
            "Symbols are a representation of an object, function, or process. For example, paintings on the walls of caves give a message in a ____________ form to the audience.",
          optionA: "Verbal",
          optionB: "Symbolic",
          optionC: "Literal",
          correctAnswer: "Symbolic",
        }),
      shuffleOptions({
          question:
            "The cheapest way to communicate with people in different villages, towns, cities, and countries is through a ____________.",
          optionA: "Phone call",
          optionB: "Letter",
          optionC: "Email",
          correctAnswer: "Letter",
        }),
      shuffleOptions({
          question:
            "Mobile phones are the fastest means of personal communication, and they allow one to send messages to others ____________.",
          optionA: "Eventually",
          optionB: "Promptly",
          optionC: "Occasionally",
          correctAnswer: "Promptly",
        }),
      shuffleOptions({
          question:
            "Exchanging information on a large scale is called ____________ communication, and it requires radio, TV, internet, journal, and newspaper as the medium of exchanging information.",
          optionA: "Personal",
          optionB: "Mass",
          optionC: "Direct",
          correctAnswer: "Mass",
        }),
      shuffleOptions({
          question:
            "Communication is an important requirement for the survival of humans, similar to the importance of food, water, and ____________.",
          optionA: "Shelter",
          optionB: "Clothing",
          optionC: "Entertainment",
          correctAnswer: "Shelter",
        }),
      shuffleOptions({
          question:
            "People who do not speak often express their feelings and needs through their ____________ language.",
          optionA: "Written",
          optionB: "Verbal",
          optionC: "Sign",
          correctAnswer: "Sign",
        }),
      shuffleOptions({
          question:
            "In offices, schools, and every place of work, individuals communicate with one another to convey their messages and ____________ to others.",
          optionA: "Demands",
          optionB: "Ideas",
          optionC: "Commands",
          correctAnswer: "Ideas",
        }),
      shuffleOptions({
          question:
            "Communication helps in answering what we want and need, and it is an essential requirement for the survival of humans, similar to food, water, and ____________.",
          optionA: "Electricity",
          optionB: "Shelter",
          optionC: "Clothing",
          correctAnswer: "Shelter",
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
            "Communication through Post is the most expensive way to communicate.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Symbols are a representation of an object, function, or process.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Mobile phones are the slowest means of personal communication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Mass communication involves exchanging information on a small scale.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Communication is not considered an important requirement for the survival of humans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "People who do not speak often express their feelings and needs through spoken language.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Birds with curved beaks, such as parrots, use them to crack nuts and eat hard fruits or food items.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Communication with masses involves using radio, TV, internet, journal, and newspaper as mediums.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "In offices, schools, and every place of work, individuals communicate with one another to hide their messages and ideas from others.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Symbols are a form of language that directly communicates with the targeted audiences.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
    ]),
  }
}

export var activityData;
