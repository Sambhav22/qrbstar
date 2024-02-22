export const chapter = "Chapter - 17: The Temperature";
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
        question: "What is Schatz's age?",
        optionA: "Seven years",
        optionB: "Nine years",
        optionC: "Twelve years",
        correctAnswer: "Nine years",
     }),
      shuffleOptions({
        question: "What is Schatz's ailment?",
        optionA: "Stomachache",
        optionB: "Headache",
        optionC: "Toothache",
        correctAnswer: "Headache",
     }),
      shuffleOptions({
        question: "Who is Schatz's father?",
        optionA: "Mr. Johnson",
        optionB: "Mr. Smith",
        optionC: "Mr. Mark",
        correctAnswer: "Mr. Mark",
     }),
      shuffleOptions({
        question: "What does the doctor prescribe for Schatz?",
        optionA: "Medicine for fever",
        optionB: "Medicine for stomachache",
        optionC: "Medicine for headache",
        correctAnswer: "Medicine for fever",
     }),
      shuffleOptions({
        question:
          "At what temperature does the doctor advise to send for him again?",
        optionA: "100 degrees Fahrenheit",
        optionB: "102 degrees Fahrenheit",
        optionC: "104 degrees Fahrenheit",
        correctAnswer: "104 degrees Fahrenheit",
     }),
      shuffleOptions({
        question: "What does Mr. Mark offer to do for Schatz while he's ill?",
        optionA: "Sing a lullaby",
        optionB: "Read a story",
        optionC: "Cook a meal",
        correctAnswer: "Read a story",
     }),
      shuffleOptions({
        question: "What does Schatz ask his father about his impending death?",
        optionA: "How can I avoid it?",
        optionB: "About what time will it happen?",
        optionC: "Can you take me to the doctor?",
        correctAnswer: "About what time will it happen?",
     }),
      shuffleOptions({
        question: "Why does Schatz think he's going to die?",
        optionA: "Because he has a high fever",
        optionB: "Because of a headache",
        optionC: "Because of a stomachache",
        correctAnswer: "Because he has a high fever",
     }),
      shuffleOptions({
        question:
          "What does Mr. Mark compare the two different thermometers to?",
        optionA: "Kilometers and miles",
        optionB: "Fahrenheit and Celsius",
        optionC: "Inches and centimeters",
        correctAnswer: "Kilometers and miles",
     }),
      shuffleOptions({
        question:
          "How does Schatz react once he learns about the different thermometer scales?",
        optionA: "He becomes more worried",
        optionB: "He recovers immediately",
        optionC: "He asks for a second opinion",
        correctAnswer: "He recovers immediately",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Schatz is a ________________-year-old boy.",
        options: ["Seven", "Nine", "Twelve"],
        correctAnswer: "Nine",
     }),
      shuffleOptions({
        question:
          "Schatz tells his father that he feels ill, and his body ________________.",
        options: ["aches", "itches", "shivers"],
        correctAnswer: "aches",
     }),
      shuffleOptions({
        question:
          "Mr. Mark notices that Schatz's forehead feels ________________, and he decides to send for the doctor.",
        options: ["cold", "warm", "wet"],
        correctAnswer: "warm",
     }),
      shuffleOptions({
        question:
          "The doctor prescribes a medicine for fever to be taken ________________ times a day.",
        options: ["one", "two", "three"],
        correctAnswer: "three",
     }),
      shuffleOptions({
        question:
          "The doctor mentions that if Schatz's temperature rises above ________________, they should send for him again.",
        options: ["a hundred", "a hundred and two", "a hundred and four"],
        correctAnswer: "a hundred and four",
     }),
      shuffleOptions({
        question:
          "Mr. Mark suggests that Schatz try to ________________ while he waits for his medicines.",
        options: ["dance", "sleep", "read"],
        correctAnswer: "sleep",
     }),
      shuffleOptions({
        question:
          "When Mr. Mark takes Schatz's temperature again, it has come down to ________________.",
        options: ["a hundred", "a hundred and two", "a normal level"],
        correctAnswer: "a normal level",
     }),
      shuffleOptions({
        question:
          "Schatz worries about dying because he heard his temperature was ________________.",
        options: ["too low", "normal", "a hundred and two"],
        correctAnswer: "a hundred and two",
     }),
      shuffleOptions({
        question:
          "Mr. Mark explains that there are different kinds of thermometers and that ________________ is normal on each type.",
        options: ["thirty-seven", "ninety-eight", "a hundred and two"],
        correctAnswer: "ninety-eight",
     }),
      shuffleOptions({
        question:
          "Schatz seems to recover immediately after understanding the difference in thermometer scales and starts ________________ with his parents.",
        options: ["crying", "walking", "singing"],
        correctAnswer: "walking",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Schatz is a twelve-year-old boy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Schatz complains of having a stomachache.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Mr. Mark sends for the doctor when he touches Schatz's forehead and it feels cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The doctor prescribes a medicine for headache to be taken three times a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The doctor advises sending for him again if Schatz's temperature rises above a hundred degrees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Mr. Mark suggests that Schatz try to sleep while he waits for his medicines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Schatz's temperature comes down to a normal level after Mr. Mark takes it again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Schatz worries about dying because he heard that a temperature of a hundred and two is normal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Mr. Mark explains that on one thermometer, thirty-seven is normal, and on another, ninety-eight is normal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Schatz seems to recover immediately after understanding the difference in thermometer scales.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
