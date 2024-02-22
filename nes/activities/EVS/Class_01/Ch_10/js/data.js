export const chapter = "Chapter - 10: Festivals Round the Year ";
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
          question: "________ is the festival of colours",
          optionA: "Holi",
          optionB: "Gurpurab",
          optionC: "Diwali",
          correctAnswer: "Holi",
         }),
      shuffleOptions({
          question: "Diwali is the festival of _________",
          optionA: "lights",
          optionB: "colours",
          optionC: "both",
          correctAnswer: "colours",
         }),
      shuffleOptions({
          question: "________ is the birthday of Jesus Christ",
          optionA: "Christmas",
          optionB: "Diwali",
          optionC: "Holi",
          correctAnswer: "Christmas",
         }),
      shuffleOptions({
          question: "Which festival is celebrated after Ramadan?",
          optionA: "Holi",
          optionB: "Eid",
          optionC: "Gurpurab",
          correctAnswer: "Eid",
         }),
      shuffleOptions({
          question: "What is Mahavir Jayanti celebrating?",
          optionA: "Birthday of Lord Mahavir",
          optionB: "Republic Day",
          optionC: "Independence Day",
          correctAnswer: "Birthday of Lord Mahavir",
         }),
      shuffleOptions({
          question: "Which festival celebrates the birthday of the Sikh Gurus?",
          optionA: "Gurpurab",
          optionB: "Diwali",
          optionC: "Mahavir Jayanti",
          correctAnswer: "Gurpurab",
         }),
      shuffleOptions({
          question: "Which festival celebrates the birthday of Jesus Christ?",
          optionA: "Christmas",
          optionB: "Eid",
          optionC: "Diwali",
          correctAnswer: "Christmas",
         }),
      shuffleOptions({
          question: "What is celebrated on the 15th of August?",
          optionA: "Diwali",
          optionB: "Independence Day",
          optionC: "Republic Day",
          correctAnswer: "Independence Day",
         }),
      shuffleOptions({
          question:
            "Which festival is a national festival celebrating the country's freedom?",
          optionA: "Christmas",
          optionB: "Independence Day",
          optionC: "Gandhi Jayanti",
          correctAnswer: "Independence Day",
         }),
      shuffleOptions({
          question: "When is Republic Day celebrated every year?",
          optionA: "2nd October",
          optionB: "26th January",
          optionC: "15th August",
          correctAnswer: "26th January",
         }),
      shuffleOptions({
          question: "When is Gandhi Jayanti celebrated?",
          optionA: "15th August",
          optionB: "26th January",
          optionC: "2nd October",
          correctAnswer: "2nd October",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "__________ is the festival of lights.",
          options: ["Diwali", "Holi", "Eid"],
          correctAnswer: "Diwali",
         }),
      shuffleOptions({
          question: "__________ is celebrated after Ramadan.",
          options: ["Holi", "Diwali", "Eid"],
          correctAnswer: "Eid",
         }),
      shuffleOptions({
          question: "Gurpurab celebrates the birthday of the __________ Gurus.",
          options: ["Hindu", "Sikh", "Buddhist"],
          correctAnswer: "Sikh",
         }),
      shuffleOptions({
          question: "Mahavir Jayanti marks the birthday of Lord __________.",
          options: ["Shiva", "Vishnu", "Mahavir"],
          correctAnswer: "Mahavir",
         }),
      shuffleOptions({
          question: "Christmas commemorates the birthday of __________.",
          options: ["Prophet Muhammad", "Lord Mahavir", "Jesus Christ"],
          correctAnswer: "Jesus Christ",
         }),
      shuffleOptions({
          question: "Independence Day in India is celebrated on __________.",
          options: ["26th January", "2nd October", "15th August"],
          correctAnswer: "15th August",
         }),
      shuffleOptions({
          question: "Republic Day is observed on __________ every year.",
          options: ["2nd October", "15th August", "26th January"],
          correctAnswer: "26th January",
         }),
      shuffleOptions({
          question: "Gandhi Jayanti is celebrated on __________.",
          options: ["15th August", "2nd October", "26th January"],
          correctAnswer: "2nd October",
         }),
      shuffleOptions({
          question: "Independence Day celebrates the freedom of __________.",
          options: ["Pakistan", "India", "China"],
          correctAnswer: "India",
         }),
      shuffleOptions({
          question: "Diwali is also known as the __________.",
          options: [
            "Festival of Colors",
            "Festival of Lights",
            "Festival of Freedom",
          ],
          correctAnswer: "Festival of Lights",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Diwali is the festival of lights.",
          options: ["True", "False"],
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Holi is celebrated after Ramadan.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Gurpurab celebrates the birthday of Hindu Gurus.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Mahavir Jayanti marks the birthday of Lord Shiva.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Christmas commemorates the birthday of Prophet Muhammad.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Independence Day in India is celebrated on 26th January.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Republic Day is observed on 2nd October every year.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Gandhi Jayanti is celebrated on 15th August.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Independence Day celebrates the freedom of Pakistan.",
          options: ["True", "False"],
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Diwali is also known as the Festival of Freedom.",
          options: ["True", "False"],
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
