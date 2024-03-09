export const chapter = "Chapter - 10: Clothes We Wear";
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
          question: "What is Diwali primarily known as?",
          optionA: "Festival of Colors",
          optionB: "Festival of Lights",
          optionC: "Festival of Independence",
          correctAnswer: "Festival of Lights",
        }),
      shuffleOptions({
          question: "Which festival is celebrated after Ramadan?",
          optionA: "Holi",
          optionB: "Gurpurao",
          optionC: "Eid",
          correctAnswer: "Eid",
        }),
      shuffleOptions({
          question:
            "What is celebrated on 15th August as mentioned in the text?",
          optionA: "Christmas",
          optionB: "Independence Day",
          optionC: "Republic Day",
          correctAnswer: "Independence Day",
        }),
      shuffleOptions({
          question: "Which festival marks the birthday of the Sikh Gurus?",
          optionA: "Gurpurao",
          optionB: "Mahavir Jayanti",
          optionC: "Holi",
          correctAnswer: "Gurpurao",
        }),
      shuffleOptions({
          question: "When is Republic Day celebrated every year?",
          optionA: "2nd October",
          optionB: "15th August",
          optionC: "26th January",
          correctAnswer: "26th January",
        }),
      shuffleOptions({
          question: "What is Mahavir Jayanti celebrating?",
          optionA: "Lord Mahavir's victory",
          optionB: "Lord Mahavir's birthday",
          optionC: "Lord Mahavir's teachings",
          correctAnswer: "Lord Mahavir's birthday",
        }),
      shuffleOptions({
          question:
            "Which festival is associated with the birthday of Jesus Christ?",
          optionA: "Diwali",
          optionB: "Christmas",
          optionC: "Holi",
          correctAnswer: "Christmas",
        }),
      shuffleOptions({
          question: "Which festival is described as the festival of colors?",
          optionA: "Diwali",
          optionB: "Holi",
          optionC: "Gurpurao",
          correctAnswer: "Holi",
        }),
      shuffleOptions({
          question: "What is celebrated on 2nd October every year?",
          optionA: "Independence Day",
          optionB: "Christmas",
          optionC: "Gandhi Jayanti",
          correctAnswer: "Gandhi Jayanti",
        }),
      shuffleOptions({
          question:
            "What is celebrated as the national festival on the 26th of January?",
          optionA: "Independence Day",
          optionB: "Christmas",
          optionC: "Republic Day",
          correctAnswer: "Republic Day",
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
            "Festivals are the days of great celebration. People celebrate different festivals round the year. Some of them are Diwali (festival of _______________).",
          optionA: "Music",
          optionB: "Lights",
          optionC: "Colors",
          correctAnswer: "Lights",
        }),
      shuffleOptions({
          question: "Holi is the festival of _______________.",
          optionA: "Lights",
          optionB: "Colors",
          optionC: "Music",
          correctAnswer: "Colors",
        }),
      shuffleOptions({
          question: "Eid is celebrated after _______________.",
          optionA: "Diwali",
          optionB: "Holi",
          optionC: "Ramadan",
          correctAnswer: "Ramadan",
        }),
      shuffleOptions({
          question: "Gurpurao is the birthday of the _______________.",
          optionA: "Hindu Gods",
          optionB: "Sikh Gurus",
          optionC: "Buddhist Monks",
          correctAnswer: "Sikh Gurus",
        }),
      shuffleOptions({
          question: "Mahavir Jayanti is the birthday of Lord _______________.",
          optionA: "Krishna",
          optionB: "Mahavir",
          optionC: "Ganesh",
          correctAnswer: "Mahavir",
        }),
      shuffleOptions({
          question: "Christmas is the birthday of _______________.",
          optionA: "Santa Claus",
          optionB: "Jesus Christ",
          optionC: "Mother Mary",
          correctAnswer: "Jesus Christ",
        }),
      shuffleOptions({
          question:
            "Independence Day is celebrated on the _______________ of August.",
          optionA: "1st",
          optionB: "15th",
          optionC: "30th",
          correctAnswer: "15th",
        }),
      shuffleOptions({
          question:
            "Republic Day is celebrated on _______________ January every year.",
          optionA: "2nd",
          optionB: "26th",
          optionC: "30th",
          correctAnswer: "26th",
        }),
      shuffleOptions({
          question:
            "Gandhi Jayanti is celebrated on the _______________ of October every year.",
          optionA: "1st",
          optionB: "2nd",
          optionC: "10th",
          correctAnswer: "2nd",
        }),
      shuffleOptions({
          question: "Our country got freedom on _______________.",
          optionA: "15th August",
          optionB: "26th January",
          optionC: "2nd October",
          correctAnswer: "15th August",
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
          question: "Festivals are occasions of mourning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Holi is celebrated during the winter season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Eid is celebrated before the month of Ramadan.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Gurpurao is the birthday celebration of Sikh Gurus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Mahavir Jayanti commemorates the birthday of Lord Krishna.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Christmas marks the birthday of Santa Claus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Independence Day is celebrated on the 15th of August.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Republic Day is celebrated on the 2nd of October.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Gandhi Jayanti is celebrated on the 26th of January.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Our country got freedom on the 26th of January.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
    ]),
  }
}

export var activityData;
