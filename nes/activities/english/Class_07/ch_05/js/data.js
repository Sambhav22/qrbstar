export const chapter = "Chapter - 5: Tenzing Norgay ";
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
        question:
          "When did Tenzing Norgay and Edmund Hillary successfully scale Mount Everest?",
        optionA: "29 May, 1954",
        optionB: "29 May, 1952",
        optionC: "29 May, 1953",
        correctAnswer: "29 May, 1953",
     }),
      shuffleOptions({
        question: "What is the significance of the name 'Tenzing Norgay'?",
        optionA: "Wealthy and fortunate",
        optionB: "Wealthy-fortunate-follower-of-religion",
        optionC: "Blessed by the gods",
        correctAnswer: "Wealthy-fortunate-follower-of-religion",
     }),
      shuffleOptions({
        question: "Which clan did Tenzing Norgay belong to?",
        optionA: "Nepalese Clan",
        optionB: "Sherpa Clan",
        optionC: "Buddhist Clan",
        correctAnswer: "Sherpa Clan",
     }),
      shuffleOptions({
        question:
          "How many times did Tenzing Norgay attempt to scale Everest before succeeding?",
        optionA: "Four",
        optionB: "Six",
        optionC: "Seven",
        correctAnswer: "Seven",
     }),
      shuffleOptions({
        question:
          "In what year did Tenzing Norgay make his first attempt to scale Mount Everest?",
        optionA: "1935",
        optionB: "1947",
        optionC: "1953",
        correctAnswer: "1935",
     }),
      shuffleOptions({
        question:
          "What happened during Tenzing Norgay's 1947 attempt to scale Everest with Earl Denman?",
        optionA: "They successfully reached the summit.",
        optionB: "They were caught in a storm and had to turn back.",
        optionC: "They got lost and had to be rescued.",
        correctAnswer: "They were caught in a storm and had to turn back.",
     }),
      shuffleOptions({
        question:
          "Which two members of the 1953 expedition made the final attempt to reach the summit of Everest?",
        optionA: "Tenzing Norgay and Edmund Hillary",
        optionB: "Bourdillon and Evans",
        optionC: "Ang Nyima and Alfred Gregory",
        correctAnswer: "Tenzing Norgay and Edmund Hillary",
     }),
      shuffleOptions({
        question:
          "What significant event occurred when Tenzing Norgay and Edmund Hillary reached the summit of Everest?",
        optionA: "They discovered a new route to the summit.",
        optionB: "They offered sweets and hoisted their countries' flags.",
        optionC: "They found evidence of a previous expedition.",
        correctAnswer:
          "They offered sweets and hoisted their countries' flags.",
     }),
      shuffleOptions({
        question:
          "How did Tenzing Norgay's ascent of Mount Everest impact his career?",
        optionA: "He retired from mountaineering.",
        optionB:
          "He became the Director of Field Training at the Himalayan Mountaineering Institute.",
        optionC: "He founded a trekking company.",
        correctAnswer:
          "He became the Director of Field Training at the Himalayan Mountaineering Institute.",
     }),
      shuffleOptions({
        question:
          "What honors and awards did Tenzing Norgay receive for his ascent of Everest?",
        optionA: "Order of the Star of Nepal, George Medal, and Padma Bhushan",
        optionB: "Knighted by Queen Elizabeth",
        optionC: "Nobel Peace Prize",
        correctAnswer:
          "Order of the Star of Nepal, George Medal, and Padma Bhushan",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Tenzing Norgay successfully scaled Mount Everest on _____________ with Edmund Hillary.",
        options: ["29 May, 1954", "29 May, 1952", "29 May, 1953"],
        correctAnswer: "29 May, 1953",
     }),
      shuffleOptions({
        question: "Tenzing Norgay's birth name was _____________ Wangdi.",
        options: ["Namgyal", "Tenzing", "Sherpa"],
        correctAnswer: "Namgyal",
     }),
      shuffleOptions({
        question:
          "Tenzing Norgay and his family followed the traditions of the _____________ faith.",
        options: ["Buddhist", "Hindu", "Christian"],
        correctAnswer: "Buddhist",
     }),
      shuffleOptions({
        question: "Tenzing Norgay belonged to the _____________ clan.",
        options: ["Nepalese", "Tibetan", "Sherpa"],
        correctAnswer: "Sherpa",
     }),
      shuffleOptions({
        question:
          "Tenzing Norgay took part in _____________ Everest missions before achieving success.",
        options: ["five", "six", "seven"],
        correctAnswer: "seven",
     }),
      shuffleOptions({
        question:
          "Tenzing Norgay began working as a Sherpa from a very _____________ age.",
        options: ["young", "old", "teenage"],
        correctAnswer: "young",
     }),
      shuffleOptions({
        question: "Tenzing Norgay's father was a _____________ herder.",
        options: ["yak", "cow", "goat"],
        correctAnswer: "yak",
     }),
      shuffleOptions({
        question:
          "Tenzing Norgay fled from a monastery and settled down in _____________.",
        options: ["Kathmandu", "Darjeeling", "Tibet"],
        correctAnswer: "Darjeeling",
     }),
      shuffleOptions({
        question:
          "Tenzing Norgay's first wife, Dawa Phuti, died in _____________.",
        options: ["1944", "1953", "1947"],
        correctAnswer: "1944",
     }),
      shuffleOptions({
        question:
          "Tenzing Norgay was awarded the _____________ by Queen Elizabeth in 1953.",
        options: [
          "George Medal",
          "Nobel Peace Prize",
          "Order of the Star of Nepal",
        ],
        correctAnswer: "George Medal",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The children are playing ludo on the lawn.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The cyclist informs Astha about a cobra entering the lawn.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Mohan was the one who found the cobra under the gate.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Astha believes that newspapers always publish accurate data.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Ravi thinks that having a cobra in the house is not dangerous.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Gautami regrets not being able to visit Mahakal at Ujjain due to the lockdown.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The beggar woman suggests that the snake should be left alone in the lawn.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The snake-charmer is confident about quickly finding and catching the snake.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The snake-charmer recommends using a net to catch the snake.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The snake is eventually found and captured by Mohan.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
