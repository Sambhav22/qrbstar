export const chapter = "Chapter - 16: The Tongue and the Teeth";
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
        question: "Who was Confucius?",
        optionA: "A student of Lu",
        optionB: "A great thinker and teacher of China",
        optionC: "Wei's father",
        correctAnswer: "A great thinker and teacher of China",
     }),
      shuffleOptions({
        question:
          "Which one of Confucius's pupils was known for their gentle nature and peaceful demeanor?",
        optionA: "Lu",
        optionB: "Wei",
        optionC: "Both Lu and Wei",
        correctAnswer: "Lu",
     }),
      shuffleOptions({
        question: "What was a notable characteristic of Wei's temperament?",
        optionA: "He was gentle and peaceful",
        optionB: "He had a good brain",
        optionC: "He had a quick temper",
        correctAnswer: "He had a quick temper",
     }),
      shuffleOptions({
        question: "How did Lu react after his quarrel with Wei?",
        optionA: "He felt bad and raged in fury",
        optionB: "He pacified after a while",
        optionC: "He went to Confucius for advice",
        correctAnswer: "He pacified after a while",
     }),
      shuffleOptions({
        question: "Why did Wei visit Confucius with concerns about his health?",
        optionA: "He had a headache",
        optionB: "He bled from his mouth",
        optionC: "He wanted to abandon his studies",
        correctAnswer: "He bled from his mouth",
     }),
      shuffleOptions({
        question: "What did Confucius attribute Wei's health issue to?",
        optionA: "Overstudy and excessive work",
        optionB: "Great anger",
        optionC: "Lack of physical exercise",
        correctAnswer: "Great anger",
     }),
      shuffleOptions({
        question:
          "How many pupils were there in the school where Wei and Lu studied?",
        optionA: "100",
        optionB: "500",
        optionC: "1000",
        correctAnswer: "1000",
     }),
      shuffleOptions({
        question:
          "According to Confucius, why did Wei need to exercise self-control?",
        optionA: "Because he had too many friends",
        optionB: "Because he had lost teeth",
        optionC: "Because his anger was a significant problem",
        correctAnswer: "Because his anger was a significant problem",
     }),
      shuffleOptions({
        question:
          "What comparison did Confucius make between teeth and the tongue?",
        optionA: "Teeth are stronger but less useful",
        optionB: "The tongue is stronger and more important",
        optionC: "Teeth and the tongue are equally strong",
        correctAnswer: "Teeth are stronger but less useful",
     }),
      shuffleOptions({
        question: "What lesson did Confucius teach Wei about self-control?",
        optionA: "The tongue should be more like teeth",
        optionB: "The teeth should be more like the tongue",
        optionC: "The tongue and teeth should always fight each other",
        correctAnswer: "The teeth should be more like the tongue",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Confucius was a great thinker and teacher of ___________.",
        options: ["India", "China", "Japan"],
        correctAnswer: "China",
     }),
      shuffleOptions({
        question:
          "One of Confucius's pupils, Lu, was known for his gentle nature and was considered a ___________ man by other students.",
        options: ["Peaceful", "Aggressive", "Intelligent"],
        correctAnswer: "Peaceful",
     }),
      shuffleOptions({
        question:
          "Wei, another pupil of Confucius, had a good brain and a kind heart, but he was given to great ___________.",
        options: ["Generosity", "Joy", "Anger"],
        correctAnswer: "Anger",
     }),
      shuffleOptions({
        question:
          "Wei noticed that he bled from his ___________ after his quarrel with Lu.",
        options: ["Eyes", "Ears", "Mouth"],
        correctAnswer: "Mouth",
     }),
      shuffleOptions({
        question:
          "Confucius told Wei that the trouble with his body was not due to study or work but his great ___________.",
        options: ["Intelligence", "Anger", "Kindness"],
        correctAnswer: "Anger",
     }),
      shuffleOptions({
        question:
          "Confucius mentioned that Wei could not expect to live long if he continued to have frequent fits of ___________.",
        options: ["Laughter", "Temper", "Joy"],
        correctAnswer: "Temper",
     }),
      shuffleOptions({
        question:
          "Confucius asked Wei how many teeth he had, and Wei replied that he had ___________ teeth.",
        options: ["20", "32", "40"],
        correctAnswer: "32",
     }),
      shuffleOptions({
        question:
          "According to Confucius, Wei's teeth were strong and had a tendency to ___________ everything.",
        options: ["Protect", "Crush", "Hide"],
        correctAnswer: "Crush",
     }),
      shuffleOptions({
        question:
          "Confucius explained that while the teeth may be strong, they are the first to ___________.",
        options: ["Grow", "Endure", "Decay"],
        correctAnswer: "Decay",
     }),
      shuffleOptions({
        question:
          "To live long and happily, Confucius advised Wei to learn the great lesson of ___________.",
        options: ["Wisdom", "Self-control", "Patience"],
        correctAnswer: "Self-control",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Confucius had several pupils.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Lu was known for his aggressive nature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Wei was known for his good brain and kind heart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Wei's anger caused him health issues.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Lu and Wei never had any disagreements.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Confucius advised Wei to abandon his studies and return to his village.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Wei had 40 teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "According to Confucius, teeth are the first to decay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Wei's anger led to a fit of temper one thousand times in a year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Confucius encouraged Wei to learn the lesson of patience.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
