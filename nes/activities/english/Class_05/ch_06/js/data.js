export const chapter = "Chapter - 6: Rain, Wind and Snow ";
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
        question: "What does the April rain bring back?",
        optionA: "Leaves",
        optionB: "Flowers",
        optionC: "Snow",
        correctAnswer: "Flowers",
     }),
      shuffleOptions({
        question: "Which of the following flowers is mentioned in the text?",
        optionA: "Roses",
        optionB: "Tulips",
        optionC: "Daisies",
        correctAnswer: "Daisies",
     }),
      shuffleOptions({
        question:
          "What season does the text mention when it says, 'Wind, wind, Autumn wind!'?",
        optionA: "Summer",
        optionB: "Autumn",
        optionC: "Spring",
        correctAnswer: "Autumn",
     }),
      shuffleOptions({
        question: "What does the wind do to the leafy trees in autumn?",
        optionA: "Waters them",
        optionB: "Grows them",
        optionC: "Thins them",
        correctAnswer: "Thins them",
     }),
      shuffleOptions({
        question:
          "How should you respond to the loud roaring and shouting of the wind in the text?",
        optionA: "Welcome it inside",
        optionB: "Bar the door and keep it out",
        optionC: "Go outside to play in it",
        correctAnswer: "Bar the door and keep it out",
     }),
      shuffleOptions({
        question: "What does the snow cover in the fields in the text?",
        optionA: "Flowers",
        optionB: "Trees",
        optionC: "Seed",
        correctAnswer: "Seed",
     }),
      shuffleOptions({
        question:
          "What is the purpose of covering the seed with snow according to the text?",
        optionA: "To make it cold",
        optionB: "To keep it hidden",
        optionC: "To protect it from harm",
        correctAnswer: "To protect it from harm",
     }),
      shuffleOptions({
        question:
          "Which weather elements are mentioned in the text as being welcomed in turn?",
        optionA: "Rain, wind, sunshine",
        optionB: "Wind, snow, hail",
        optionC: "Rain, wind, snow",
        correctAnswer: "Rain, wind, snow",
     }),
      shuffleOptions({
        question:
          "What does the text suggest about the intentions of rain, wind, and snow on Earth?",
        optionA: "They are destructive",
        optionB: "They have no specific intent",
        optionC: "They have good intent",
        correctAnswer: "They have good intent",
     }),
      shuffleOptions({
        question: "Which season is associated with 'April rain' in the text?",
        optionA: "Winter",
        optionB: "Spring",
        optionC: "Summer",
        correctAnswer: "Spring",
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
          "Fill in the blank: 'Rain, rain, April rain! Bring the _______ back again.'",
        options: ["Sunshine", "Flowers", "Snow"],
        correctAnswer: "Flowers",
     }),
      shuffleOptions({
        question:
          "Complete the sentence: 'Yellow, cowslip, violet, blue, Butter-cups and _______ too.'",
        options: ["Roses", "Daisies", "Sunflowers"],
        correctAnswer: "Daisies",
     }),
      shuffleOptions({
        question:
          "Fill in the blank: 'Wind, wind, Autumn wind! He the leafy trees has _______.'",
        options: ["Watered", "Thinned", "Planted"],
        correctAnswer: "Thinned",
     }),
      shuffleOptions({
        question:
          "Finish the sentence: 'Loudly hear him roar and shout; Bar the door and keep him _______.'",
        options: ["Quiet", "Inside", "Out"],
        correctAnswer: "Out",
     }),
      shuffleOptions({
        question:
          "Fill in the blank: 'Snow, snow, pure white snow! O'er the fields thy covering _______.'",
        options: ["Disappear", "Melt", "Throw"],
        correctAnswer: "Throw",
     }),
      shuffleOptions({
        question:
          "Complete the sentence: 'Cover up the seed so warm Through the winter safe from _______.'",
        options: ["Frost", "Danger", "Harm"],
        correctAnswer: "Harm",
     }),
      shuffleOptions({
        question:
          "Fill in the blank: 'Rain, wind, snow, all three, Each in turn shall _______ be.'",
        options: ["Dance", "Welcome", "Cry"],
        correctAnswer: "Welcome",
     }),
      shuffleOptions({
        question:
          "Complete the sentence: 'Each and all in turn are sent On the earth with good _______.'",
        options: ["Intention", "Purpose", "Content"],
        correctAnswer: "Intention",
     }),
      shuffleOptions({
        question:
          "Fill in the blank: 'Rain, rain, April rain! Bring the _______ back again.'",
        options: ["Sunshine", "Flowers", "Snow"],
        correctAnswer: "Flowers",
     }),
      shuffleOptions({
        question:
          "Finish the sentence: 'Yellow, cowslip, violet, blue, Butter-cups and _______ too.'",
        options: ["Roses", "Daisies", "Sunflowers"],
        correctAnswer: "Daisies",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Rain, wind, and snow all have good intentions when they come to Earth.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Wind in autumn makes the trees grow thicker.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "April rain brings back leaves to the trees.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Snow covers the fields to protect seeds from harm.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Buttercups and daisies are mentioned in the text as spring flowers.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Albert Einstein's father wanted him to pursue a career in electrical engineering.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Albert Einstein played the flute to entertain himself as a child.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Albert Einstein was supportive of the German government during World War I.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Einstein refused to ride a man-pulled rickshaw in India out of respect.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Albert Einstein spent his last years traveling the world as a diplomat.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
