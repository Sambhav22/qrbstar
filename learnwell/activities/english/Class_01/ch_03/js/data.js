export const chapter = "Chapter - 3: Fun-day Sunday";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean)

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  if (optionsArray.length > 2) object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who came to wake up Ananya?",
        optionA: "Mother",
        optionB: "Grandpa",
        optionC: "Sister",
        correctAnswer: "Grandpa",
      }),
      shuffleOptions({
        question: "What day was it?",
        optionA: "Monday",
        optionB: "Sunday",
        optionC: "Friday",
        correctAnswer: "Sunday",
      }),
      shuffleOptions({
        question: "Where did Grandpa and Ananya go?",
        optionA: "Market",
        optionB: "School",
        optionC: "Park",
        correctAnswer: "Park",
      }),
      shuffleOptions({
        question: "What were the women doing in the park?",
        optionA: "Running",
        optionB: "Aerobics",
        optionC: "Yoga",
        correctAnswer: "Aerobics",
      }),
      shuffleOptions({
        question: "Who was doing Yoga?",
        optionA: "Children",
        optionB: "Women",
        optionC: "Elderly",
        correctAnswer: "Elderly",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ananya wanted to ______ more.",
        optionA: "run",
        optionB: "play",
        optionC: "sleep",
        correctAnswer: "sleep",
      }),
      shuffleOptions({
        question: "Grandpa took Ananya in his ______.",
        optionA: "bag",
        optionB: "arms",
        optionC: "lap",
        correctAnswer: "arms",
      }),
      shuffleOptions({
        question: "The elderly were sitting in a group and doing ______.",
        optionA: "aerobics",
        optionB: "walking",
        optionC: "Yoga",
        correctAnswer: "Yoga",
      }),
      shuffleOptions({
        question: "Young people were walking on the ______.",
        optionA: "grass",
        optionB: "track",
        optionC: "bench",
        correctAnswer: "track",
      }),
      shuffleOptions({
        question: "Children were playing in the ______.",
        optionA: "school",
        optionB: "grass",
        optionC: "room",
        correctAnswer: "grass",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Grandpa told Ananya that Sunday is a sleep day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ananya got ready and went to the park.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The women in the park were playing cricket.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Grandpa sat on a bench in the lobby.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Children were sitting and watching TV in the park.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;