export const chapter = "Chapter -17: The Temperature";
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
          question: "What is Schatz's main complaint?",
          optionA: "Stomach ache",
          optionB: "Headache",
          optionC: "Backache",
          correctAnswer: "Headache",
        }),
      shuffleOptions({
          question:
            "What temperature does the doctor find when he checks Schatz?",
          optionA: "100.2 degrees",
          optionB: "104 degrees",
          optionC: "98.6 degrees",
          correctAnswer: "100.2 degrees",
        }),
      shuffleOptions({
          question: "How often should Schatz take the fever medicine?",
          optionA: "Once a day",
          optionB: "Twice a day",
          optionC: "Three times a day",
          correctAnswer: "Three times a day",
        }),
      shuffleOptions({
          question: "What book does Mr. Mark start reading to Schatz?",
          optionA: "Book of Pirates",
          optionB: "Alice in Wonderland",
          optionC: "Robinson Crusoe",
          correctAnswer: "Book of Pirates",
        }),
      shuffleOptions({
          question: "What does Schatz ask his father about?",
          optionA: "The weather",
          optionB: "His temperature",
          optionC: "His favourite story",
          correctAnswer: "His temperature",
        }),
      shuffleOptions({
          question: "Why does Schatz think he is going to die?",
          optionA: "Because of his headache",
          optionB: "Because of his high fever",
          optionC: "Because of his stomach ache",
          correctAnswer: "Because of his high fever",
        }),
      shuffleOptions({
          question: "What temperature does Schatz think is fatal?",
          optionA: "100 degrees",
          optionB: "102 degrees",
          optionC: "44 degrees",
          correctAnswer: "44 degrees",
        }),
      shuffleOptions({
          question:
            "How does Mr. Mark explain the difference in temperature readings?",
          optionA: "By comparing miles and kilometres",
          optionB: "By comparing litres and millilitres",
          optionC: "By comparing inches and centimetres",
          correctAnswer: "By comparing miles and kilometres",
        }),
      shuffleOptions({
          question: "What helps Schatz recover immediately?",
          optionA: "Taking a walk",
          optionB: "Joking with his parents",
          optionC: "Understanding the temperature readings",
          correctAnswer: "Understanding the temperature readings",
        }),
      shuffleOptions({
          question: "What is the normal body temperature in Celsius?",
          optionA: "37 degrees",
          optionB: "98.6 degrees",
          optionC: "44 degrees",
          correctAnswer: "37 degrees",
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
          question: "What does Schatz complain about feeling?",
          optionA: "Stomach ache",
          optionB: "Headache",
          optionC: "Backache",
          correctAnswer: "Headache",
        }),
      shuffleOptions({
          question:
            "The doctor found Schatz's temperature to be ______ degrees.",
          optionA: "100.2",
          optionB: "104",
          optionC: "98.6",
          correctAnswer: "100.2",
        }),
      shuffleOptions({
          question:
            "How many times a day does the doctor instruct Schatz to take the fever medicine?",
          optionA: "Once",
          optionB: "Twice",
          optionC: "Three times",
          correctAnswer: "Three times",
        }),
      shuffleOptions({
          question: "Mr. Mark starts reading from which book to Schatz?",
          optionA: "Book of Pirates",
          optionB: "Alice in Wonderland",
          optionC: "Robinson Crusoe",
          correctAnswer: "Book of Pirates",
        }),
      shuffleOptions({
          question:
            "What does Schatz ask his father about regarding his health?",
          optionA: "The weather",
          optionB: "His temperature",
          optionC: "His favourite story",
          correctAnswer: "His temperature",
        }),
      shuffleOptions({
          question: "What does Schatz believe will lead to his death?",
          optionA: "His headache",
          optionB: "His high fever",
          optionC: "His stomach ache",
          correctAnswer: "His high fever",
        }),
      shuffleOptions({
          question: "What temperature does Schatz think is fatal?",
          optionA: "100",
          optionB: "102",
          optionC: "44",
          correctAnswer: "44",
        }),
      shuffleOptions({
          question:
            "How does Mr. Mark explain the discrepancy in temperature readings to Schatz?",
          optionA: "By comparing miles and kilometres",
          optionB: "By comparing litres and millilitres",
          optionC: "By comparing inches and centimetres",
          correctAnswer: "By comparing miles and kilometres",
        }),
      shuffleOptions({
          question: "What helps Schatz recover immediately?",
          optionA: "Taking a walk",
          optionB: "Joking with his parents",
          optionC: "Understanding the temperature readings",
          correctAnswer: "Understanding the temperature readings",
        }),
      shuffleOptions({
          question: "What is the normal body temperature in Celsius?",
          optionA: "37",
          optionB: "98.6",
          optionC: "44",
          correctAnswer: "37",
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
          question: "Schatz's father is not worried about his condition.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The doctor prescribes medicine for Schatz's stomach ache.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Schatz believes he will die because his temperature is 100.2 degrees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Mr. Mark compares the Fahrenheit and Celsius scales to explain temperature to Schatz.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Schatz initially feels better after his father explains the temperature readings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The doctor advises Schatz to take the fever medicine twice a day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Schatz believes a temperature of 44 degrees is fatal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Mr. Mark reads a storybook to Schatz when he is feeling ill.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Schatz understands the difference between the two temperature scales after his father's explanation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Schatz recovers immediately after taking the medicine prescribed by the doctor.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
