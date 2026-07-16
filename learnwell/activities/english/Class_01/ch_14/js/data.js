export const chapter = "Chapter - 14: Goats at the Bridge";
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
        question: "Who crossed the plank first by jumping?",
        optionA: "Ramil",
        optionB: "Rumi",
        optionC: "Bhani",
        correctAnswer: "Bhani",
      }),
      shuffleOptions({
        question: "Who spoke politely on the plank?",
        optionA: "Balin",
        optionB: "Bhani",
        optionC: "Ramil",
        correctAnswer: "Bhani",
      }),
      shuffleOptions({
        question: "What did Balin and Ramil do?",
        optionA: "Locked horns",
        optionB: "Shared grass",
        optionC: "Wished good luck",
        correctAnswer: "Locked horns",
      }),
      shuffleOptions({
        question: "What was used to cross the stream?",
        optionA: "Boat",
        optionB: "Rope",
        optionC: "Plank",
        correctAnswer: "Plank",
      }),
      shuffleOptions({
        question: "Who was the elder gentle goat?",
        optionA: "Rumi",
        optionB: "Bhani",
        optionC: "Ramil",
        correctAnswer: "Bhani",
      }),
      shuffleOptions({
        question: "What flowed in the middle of the meadow?",
        optionA: "River",
        optionB: "Road",
        optionC: "Stream",
        correctAnswer: "Stream",
      }),
      shuffleOptions({
        question: "Who suggested jumping over the other?",
        optionA: "Balin",
        optionB: "Bhani",
        optionC: "Ramil",
        correctAnswer: "Bhani",
      }),
      shuffleOptions({
        question: "What happened to the goats who fought?",
        optionA: "They became friends",
        optionB: "They fell into the stream",
        optionC: "They crossed together",
        correctAnswer: "They fell into the stream",
      }),
      shuffleOptions({
        question: "Who became friends in the end?",
        optionA: "Rumi and Bhani",
        optionB: "Balin and Bhani",
        optionC: "Ramil and Rumi",
        correctAnswer: "Rumi and Bhani",
      }),
      shuffleOptions({
        question: "What was the main lesson of the story?",
        optionA: "Fighting is fun",
        optionB: "Always be the strongest",
        optionC: "Cooperation is better",
        correctAnswer: "Cooperation is better",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The plank was placed over a ______.",
        optionA: "road",
        optionB: "stream",
        optionC: "river",
        correctAnswer: "stream",
      }),
      shuffleOptions({
        question: "Balin and Ramil fell into the ______.",
        optionA: "grass",
        optionB: "stream",
        optionC: "cave",
        correctAnswer: "stream",
      }),
      shuffleOptions({
        question: "Rumi and Bhani were both ______ goats.",
        optionA: "angry",
        optionB: "powerful",
        optionC: "gentle",
        correctAnswer: "gentle",
      }),
      shuffleOptions({
        question: "The goats locked their ______.",
        optionA: "hands",
        optionB: "horns",
        optionC: "heads",
        correctAnswer: "horns",
      }),
      shuffleOptions({
        question: "Bhani allowed Rumi to ______ over her.",
        optionA: "jump",
        optionB: "run",
        optionC: "sit",
        correctAnswer: "jump",
      }),
      shuffleOptions({
        question: "Rumi said, 'We cannot pass at the same ______.'",
        optionA: "road",
        optionB: "time",
        optionC: "day",
        correctAnswer: "time",
      }),
      shuffleOptions({
        question: "Balin saw tasty ______ on the other side.",
        optionA: "leaves",
        optionB: "fruits",
        optionC: "grass",
        correctAnswer: "grass",
      }),
      shuffleOptions({
        question: "The goats who fought were never seen ______.",
        optionA: "again",
        optionB: "together",
        optionC: "crossing",
        correctAnswer: "again",
      }),
      shuffleOptions({
        question: "Rumi said, 'You are ______ than me.'",
        optionA: "stronger",
        optionB: "older",
        optionC: "taller",
        correctAnswer: "older",
      }),
      shuffleOptions({
        question: "Rumi and Bhani wished each other ______.",
        optionA: "goodbye",
        optionB: "good luck",
        optionC: "good night",
        correctAnswer: "good luck",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Balin and Bhani became friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ramil shouted at Balin on the plank.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bhani was rude to Rumi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fighting helped the goats cross safely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rumi sat down to let Bhani jump.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A plank was used to cross the stream.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story shows that cooperation helps.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ramil and Rumi were gentle goats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The goats crossed the plank in a car.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bhani and Rumi became enemies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;