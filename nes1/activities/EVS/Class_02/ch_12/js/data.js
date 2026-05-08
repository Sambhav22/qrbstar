export const chapter = "Chapter - 12: Safety First ";
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
          question: "What is the first safety rule mentioned in the text?",
          optionA: "Do not play with sharp objects.",
          optionB: "Do not run or play on the road.",
          optionC: "Never go anywhere with a stranger.",
          correctAnswer: "Do not run or play on the road.",
         }),
      shuffleOptions({
          question: "What should you do if someone touches you badly?",
          optionA: "Keep quiet and ignore it.",
          optionB: "Inform your parents.",
          optionC: "Play along with the person.",
          correctAnswer: "Inform your parents.",
         }),
      shuffleOptions({
          question: "What information should you know according to the text?",
          optionA: "Your favorite subject.",
          optionB: "Your address and parents' contact details.",
          optionC: "Bus driver's name.",
          correctAnswer: "Your address and parents' contact details.",
         }),
      shuffleOptions({
          question:
            "What is the advised action if you are uncomfortable doing something?",
          optionA: "Keep doing it to avoid trouble.",
          optionB: "Stop that action at that moment.",
          optionC: "Ignore the discomfort.",
          correctAnswer: "Stop that action at that moment.",
         }),
      shuffleOptions({
          question:
            "What is the recommended behavior while traveling by school bus?",
          optionA: "Run around inside the bus.",
          optionB: "Disturb the bus driver.",
          optionC: "Sit quietly inside the bus.",
          correctAnswer: "Sit quietly inside the bus.",
         }),
      shuffleOptions({
          question:
            "What is explicitly mentioned as a rule for waiting at the bus stop?",
          optionA: "Dance while waiting.",
          optionB: "Stand in a queue.",
          optionC: "Ignore others.",
          correctAnswer: "Stand in a queue.",
         }),
      shuffleOptions({
          question: "What should you not do in the bus according to the text?",
          optionA: "Lean head or hand out of the window.",
          optionB: "Sleep in the aisle.",
          optionC: "Play music loudly.",
          correctAnswer: "Lean head or hand out of the window.",
         }),
      shuffleOptions({
          question: "According to the text, why are these rules important?",
          optionA: "To make life boring.",
          optionB: "To keep us safe and alert.",
          optionC: "To annoy children.",
          correctAnswer: "To keep us safe and alert.",
         }),
      shuffleOptions({
          question: "Which of the following is NOT mentioned as a safety rule?",
          optionA: "Never go anywhere with a stranger.",
          optionB: "Play with sharp objects.",
          optionC: "Do not disturb the bus driver.",
          correctAnswer: "Play with sharp objects.",
         }),
      shuffleOptions({
          question: "What is the general theme of the text?",
          optionA: "Cooking safety.",
          optionB: "Traveling by bus.",
          optionC: "Personal safety and rules.",
          correctAnswer: "Personal safety and rules.",
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
            "__________ are important to be safe, such as not running or playing on the road.",
          optionA: "Toys",
          optionB: "Safety rules",
          optionC: "Animals",
          correctAnswer: "Safety rules",
         }),
      shuffleOptions({
          question:
            "If someone touches you badly, it is crucial to inform __________.",
          optionA: "Your friends",
          optionB: "Your parents",
          optionC: "Your teacher",
          correctAnswer: "Your parents",
         }),
      shuffleOptions({
          question:
            "To ensure safety, it's advised to know your __________ and parents' contact details.",
          optionA: "Favorite color",
          optionB: "Address",
          optionC: "Bus driver's name",
          correctAnswer: "Address",
         }),
      shuffleOptions({
          question:
            "If you are uncomfortable doing something, it's recommended to __________.",
          optionA: "Continue doing it",
          optionB: "Stop that action at that moment",
          optionC: "Ignore the discomfort",
          correctAnswer: "Stop that action at that moment",
         }),
      shuffleOptions({
          question:
            "While traveling by the school bus, it's important to sit __________ inside the bus.",
          optionA: "Backwards",
          optionB: "Quietly",
          optionC: "Outside",
          correctAnswer: "Quietly",
         }),
      shuffleOptions({
          question:
            "One should not lean their head or hand out of the window of a __________ bus.",
          optionA: "Moving",
          optionB: "Stationary",
          optionC: "Fast",
          correctAnswer: "Moving",
         }),
      shuffleOptions({
          question:
            "When waiting for the bus, it's recommended to stand in __________.",
          optionA: "A circle",
          optionB: "A queue",
          optionC: "A line",
          correctAnswer: "A queue",
         }),
      shuffleOptions({
          question: "__________ keep us safe and alert from potential dangers.",
          optionA: "Jokes",
          optionB: "Rules",
          optionC: "Games",
          correctAnswer: "Rules",
         }),
      shuffleOptions({
          question:
            "Never go __________ with a stranger, as per the safety guidelines.",
          optionA: "Home",
          optionB: "Anywhere",
          optionC: "Alone",
          correctAnswer: "Anywhere",
         }),
      shuffleOptions({
          question:
            "The general theme of the text revolves around __________ and rules.",
          optionA: "Adventure",
          optionB: "Travel",
          optionC: "Personal safety",
          correctAnswer: "Personal safety",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Running or playing on the road is safe.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "It's recommended to inform someone if touched badly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Knowing your address and parents' contact details is unnecessary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Continuing an uncomfortable action is advised.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Sitting quietly inside the school bus is important.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Leaning head or hand out of the window of a moving bus is safe.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Standing in a queue is recommended while waiting for the bus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Jokes keep us safe and alert from potential dangers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Going anywhere with a stranger is acceptable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "The general theme of the text is about adventure and travel.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
