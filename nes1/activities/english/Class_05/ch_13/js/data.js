export const chapter = "Chapter - 13: The Zigzag Children";
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
          "What is the primary characteristic of the 'zigzag boy' in the poem?",
        optionA: "He always wears a hat.",
        optionB: "He is forgetful and disorganized.",
        optionC: "He is very tidy and organized.",
        correctAnswer: "He is forgetful and disorganized.",
     }),
      shuffleOptions({
        question: "How does the 'zigzag boy' behave with his belongings?",
        optionA: "He keeps everything neatly organized.",
        optionB: "He frequently misplaces his coat, shoes, and hat.",
        optionC: "He is always well-dressed.",
        correctAnswer: "He frequently misplaces his coat, shoes, and hat.",
     }),
      shuffleOptions({
        question:
          "What does the 'zigzag girl' have trouble finding in the poem?",
        optionA: "Her hairbrush",
        optionB: "Her shoes",
        optionC: "Her dress",
        correctAnswer: "Her hairbrush",
     }),
      shuffleOptions({
        question:
          "In the poem, what do the 'zigzag' children have trouble doing?",
        optionA: "Finding their toys",
        optionB: "Finding their way home",
        optionC: "Keeping track of their belongings",
        correctAnswer: "Keeping track of their belongings",
     }),
      shuffleOptions({
        question: "What is the main message or lesson conveyed by the poem?",
        optionA: "It's okay to be disorganized.",
        optionB: "Being organized is essential for children.",
        optionC: "Being organized helps avoid forgetfulness.",
        correctAnswer: "Being organized helps avoid forgetfulness.",
     }),
      shuffleOptions({
        question:
          "Which word best describes the behavior of the 'zigzag boy' in the poem?",
        optionA: "Methodical",
        optionB: "Scatterbrained",
        optionC: "Meticulous",
        correctAnswer: "Scatterbrained",
     }),
      shuffleOptions({
        question: "What happens if you are not a 'zigzag child' in the poem?",
        optionA: "You will always forget things.",
        optionB: "You will know where things are put away.",
        optionC: "You will become a 'zigzag child.'",
        correctAnswer: "You will know where things are put away.",
     }),
      shuffleOptions({
        question:
          "What is the contrast between the 'zigzag child' and a non-'zigzag child' in the poem?",
        optionA:
          "The 'zigzag child' is organized, while the non-'zigzag child' is forgetful.",
        optionB:
          "The 'zigzag child' is forgetful, while the non-'zigzag child' is organized.",
        optionC: "Both children are equally forgetful.",
        correctAnswer:
          "The 'zigzag child' is organized, while the non-'zigzag child' is forgetful.",
     }),
      shuffleOptions({
        question: "What does the 'zigzag girl' do in the poem?",
        optionA: "She neatly arranges her belongings.",
        optionB: "She fixes her hair with a brush.",
        optionC: "She is always late.",
        correctAnswer: "She fixes her hair with a brush.",
     }),
      shuffleOptions({
        question:
          "Which line in the poem emphasizes the importance of being organized?",
        optionA: "He never knows just where he puts",
        optionB: "If you are not a zigzag child,",
        optionC: "She never knows just where to find",
        correctAnswer: "If you are not a zigzag child,",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "______ is a new disease caused by a virus.",
        options: ["Influenza", "COVID-19", "Malaria"],
        correctAnswer: "COVID-19",
     }),
      shuffleOptions({
        question: "Most diseases arise because people are not ______.",
        options: ["Active", "Careful", "Knowledgeable"],
        correctAnswer: "Careful",
     }),
      shuffleOptions({
        question:
          "Regular handwashing with soap, keeping nails and hair ______, and wearing clean clothes are simple ways to maintain ______.",
        options: ["Long, fitness", "Short, hygiene", "Clean, health"],
        correctAnswer: "Short, hygiene",
     }),
      shuffleOptions({
        question:
          "Physical exercise can include activities like running, playing games, and practicing ______.",
        options: ["Yoga", "Martial arts", "Singing"],
        correctAnswer: "Yoga",
     }),
      shuffleOptions({
        question:
          "Snacks sold in the market are not good for your health because they often contain excessive ______ and ______.",
        options: ["Sugar, salt", "Fiber, vitamins", "Protein, antioxidants"],
        correctAnswer: "Sugar, salt",
     }),
      shuffleOptions({
        question:
          "It is good to sleep early and rise early as it gives rest to the body and the ______.",
        options: ["Mind", "Muscles", "Stomach"],
        correctAnswer: "Mind",
     }),
      shuffleOptions({
        question:
          "Apart from sleeping, ______, reading, and playing games are mentioned as methods to take a rest.",
        options: ["Studying", "Exercising", "Thinking"],
        correctAnswer: "Thinking",
     }),
      shuffleOptions({
        question:
          "According to the text, maintaining cleanliness is essential because a large number of diseases are caused due to ______.",
        options: ["Negligence", "Dirtiness", "Poor diet"],
        correctAnswer: "Dirtiness",
     }),
      shuffleOptions({
        question:
          "The text emphasizes the value of true ______ and selflessness.",
        options: ["Wealth", "Friendship", "Power"],
        correctAnswer: "Friendship",
     }),
      shuffleOptions({
        question:
          "Deepa and Ayush wanted to protest against Mummy, but they had checked themselves seeing her ____ mood.",
        options: ["Sore", "Happy", "Calm"],
        correctAnswer: "Sore",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The disease mentioned in the text is caused by a virus.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Maintaining cleanliness is not essential for preventing diseases.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text recommends eating snacks from the market for a healthy diet.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Physical exercise can include activities like running and playing games.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Brushing your teeth and taking a bath daily are mentioned as ways to maintain cleanliness.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "It is essential to wash your hands with soap when entering the house from outside.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text suggests that sleeping late and rising late is beneficial for health.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Snacks are considered good for health because they are tasty to eat.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Maintaining hygiene can help keep diseases away.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "According to the text, thinking is a method to take a rest for the brain.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
