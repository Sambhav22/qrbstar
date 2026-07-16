export const chapter = "Chapter - 15: Etiquette";
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
        question: "What should we say after receiving a gift?",
        optionA: "Please",
        optionB: "Thank you",
        optionC: "Go away",
        correctAnswer: "Thank you",
      }),
      shuffleOptions({
        question: "Which food is unhealthy for us?",
        optionA: "Fruits",
        optionB: "Vegetables",
        optionC: "Junk food",
        correctAnswer: "Junk food",
      }),
      shuffleOptions({
        question: "Where should we throw waste paper?",
        optionA: "On the road",
        optionB: "In the basket",
        optionC: "In the cupboard",
        correctAnswer: "In the basket",
      }),
      shuffleOptions({
        question: "What kind of language should we not use?",
        optionA: "Polite",
        optionB: "Good",
        optionC: "Foul",
        correctAnswer: "Foul",
      }),
      shuffleOptions({
        question: "Which habit keeps our teeth clean?",
        optionA: "Watching TV",
        optionB: "Brushing teeth",
        optionC: "Sleeping",
        correctAnswer: "Brushing teeth",
      }),
      shuffleOptions({
        question: "What should we not do while eating?",
        optionA: "Sit straight",
        optionB: "Talk",
        optionC: "Chew food",
        correctAnswer: "Talk",
      }),
      shuffleOptions({
        question: "Who can bite if we kick them?",
        optionA: "Chair",
        optionB: "Dog",
        optionC: "Ball",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Where should we cross the road?",
        optionA: "At the corner",
        optionB: "On the flyover",
        optionC: "At the zebra crossing",
        correctAnswer: "At the zebra crossing",
      }),
      shuffleOptions({
        question: "What should we cut regularly?",
        optionA: "Hair",
        optionB: "Nails",
        optionC: "Crayons",
        correctAnswer: "Nails",
      }),
      shuffleOptions({
        question: "What should we not do on the walls?",
        optionA: "Touch",
        optionB: "Write",
        optionC: "Clean",
        correctAnswer: "Write",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should eat a ______ diet.",
        optionA: "spicy",
        optionB: "junk",
        optionC: "healthy",
        correctAnswer: "healthy",
      }),
      shuffleOptions({
        question: "______ habits keep us free from diseases.",
        optionA: "Sleeping",
        optionB: "Cleanliness",
        optionC: "Eating",
        correctAnswer: "Cleanliness",
      }),
      shuffleOptions({
        question: "We should not play with ______ objects.",
        optionA: "round",
        optionB: "sharp",
        optionC: "soft",
        correctAnswer: "sharp",
      }),
      shuffleOptions({
        question: "We should say ______ when we hurt someone.",
        optionA: "Bye",
        optionB: "Sorry",
        optionC: "Why",
        correctAnswer: "Sorry",
      }),
      shuffleOptions({
        question: "We should chew our food ______.",
        optionA: "slowly",
        optionB: "well",
        optionC: "loudly",
        correctAnswer: "well",
      }),
      shuffleOptions({
        question: "We should stop eating before our ______ is full.",
        optionA: "stomach",
        optionB: "plate",
        optionC: "spoon",
        correctAnswer: "stomach",
      }),
      shuffleOptions({
        question: "Brushing teeth is a ______ habit.",
        optionA: "bad",
        optionB: "fun",
        optionC: "good",
        correctAnswer: "good",
      }),
      shuffleOptions({
        question: "We should not talk while ______.",
        optionA: "walking",
        optionB: "eating",
        optionC: "sleeping",
        correctAnswer: "eating",
      }),
      shuffleOptions({
        question: "Polite words make us ______.",
        optionA: "sad",
        optionB: "popular",
        optionC: "hungry",
        correctAnswer: "popular",
      }),
      shuffleOptions({
        question: "We should throw waste in the ______.",
        optionA: "bag",
        optionB: "dustbin",
        optionC: "kitchen",
        correctAnswer: "dustbin",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Junk food is healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should use polite words like 'please' and 'thank you'.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Writing on the wall is a good habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should play with knives.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chewing food well helps digestion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should throw wrappers on the floor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Brushing teeth keeps our mouth clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spitting on the road is okay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We must cross the road only at the zebra crossing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Saying sorry is a bad habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;