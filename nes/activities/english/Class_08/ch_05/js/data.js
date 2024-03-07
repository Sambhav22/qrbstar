export const chapter = "Chapter - 5: Why Was India Lost?  ";
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
        question: "Why did the English initially come to India?",
        optionA: "To establish a kingdom",
        optionB: "For the purpose of trade",
        optionC: "To conquer and rule India",
        correctAnswer: "For the purpose of trade",
     }),
      shuffleOptions({
        question: "Who is affectionately called 'Bapu'?",
        optionA: "A British leader",
        optionB: "Mahatma Gandhi",
        optionC: "An Indian prince",
        correctAnswer: "Mahatma Gandhi",
     }),
      shuffleOptions({
        question:
          "According to the text, why did the English merchants get a foothold in India?",
        optionA: "Because they conquered India through force",
        optionB: "Because they were welcomed and encouraged by the Indians",
        optionC: "Because they had a strong military presence",
        correctAnswer:
          "Because they were welcomed and encouraged by the Indians",
     }),
      shuffleOptions({
        question: "What role did the Company Bahadur play in India?",
        optionA: "It established a kingdom in India",
        optionB: "It was a trading corporation",
        optionC: "It fought against the Indian princes",
        correctAnswer: "It was a trading corporation",
     }),
      shuffleOptions({
        question:
          "How did the English Company Bahadur increase its control in India?",
        optionA: "By using a powerful military force",
        optionB: "By making alliances with Indian rulers",
        optionC: "By accepting Indian assistance and increasing its warehouses",
        correctAnswer:
          "By accepting Indian assistance and increasing its warehouses",
     }),
      shuffleOptions({
        question:
          "According to the text, why does India remain under British control?",
        optionA: "Because the British conquered it by force",
        optionB: "Because Indians want them to stay for trade benefits",
        optionC: "Because the British have a powerful military",
        correctAnswer: "Because Indians want them to stay for trade benefits",
     }),
      shuffleOptions({
        question:
          "What is the primary motivation for the English to retain control of India?",
        optionA: "Military conquest",
        optionB: "Political domination",
        optionC: "Economic gain through commerce",
        correctAnswer: "Economic gain through commerce",
     }),
      shuffleOptions({
        question:
          "According to the text, what is described as the English's 'God'?",
        optionA: "Military power",
        optionB: "Wealth and money",
        optionC: "Political influence",
        correctAnswer: "Wealth and money",
     }),
      shuffleOptions({
        question: "How do the English view their dominions, such as India?",
        optionA: "As a burden and liability",
        optionB: "As a source of political power",
        optionC: "As opportunities for commerce and trade",
        correctAnswer: "As opportunities for commerce and trade",
     }),
      shuffleOptions({
        question:
          "What does the text suggest about the English and their worldwide ambitions?",
        optionA:
          "The English have no interest in expanding their commerce globally.",
        optionB:
          "The English want to convert the whole world into a vast market for their goods.",
        optionC: "The English have no ambition beyond India.",
        correctAnswer:
          "The English want to convert the whole world into a vast market for their goods.",
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
          "The Company Bahadur was primarily a ____________ corporation that had a strong presence in India.",
        options: ["Military", "Religious", "Trading"],
        correctAnswer: "Trading",
     }),
      shuffleOptions({
        question:
          "The English view their dominions, such as India, as opportunities for ____________ and trade.",
        options: ["Political domination", "Military expansion", "Commerce"],
        correctAnswer: "Commerce",
     }),
      shuffleOptions({
        question:
          "The English are described in the text as a nation of ____________, indicating their strong commercial orientation.",
        options: ["Explorers", "Shopkeepers", "Soldiers"],
        correctAnswer: "Shopkeepers",
     }),
      shuffleOptions({
        question:
          "The English's arms and ammunition are considered ____________ for holding India, as their main focus is on commerce.",
        options: ["Essential", "Useless", "Powerful"],
        correctAnswer: "Useless",
     }),
      shuffleOptions({
        question:
          "The English aim to convert the whole world into a vast ____________ for their goods, emphasizing their commercial ambitions.",
        options: ["Battleground", "Marketplace", "Colony"],
        correctAnswer: "Marketplace",
     }),
      shuffleOptions({
        question:
          "The title 'Bapu' used for Mahatma Gandhi shows the deep ____________ people have for him.",
        options: ["Respect", "Dislike", "Ambivalence"],
        correctAnswer: "Respect",
     }),
      shuffleOptions({
        question:
          "The English merchants came to India initially for the purpose of ____________.",
        options: ["Conquest", "Trade", "Governance"],
        correctAnswer: "Trade",
     }),
      shuffleOptions({
        question:
          "The English's primary motivation for retaining control of India is their pursuit of ____________.",
        options: [
          "Political power",
          "Wealth and money",
          "Religious domination",
        ],
        correctAnswer: "Wealth and money",
     }),
      shuffleOptions({
        question:
          "The English's view of India as opportunities for ____________ and trade is emphasized in the text.",
        options: ["Military conquest", "Political dominance", "Commerce"],
        correctAnswer: "Commerce",
     }),
      shuffleOptions({
        question:
          "The English are described as wanting to convert the whole world into a vast ____________ for their goods in the text.",
        options: ["Battleground", "Marketplace", "Colony"],
        correctAnswer: "Marketplace",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mahatma Gandhi is affectionately called 'Bapu.'",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The English merchants initially came to India for political domination.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Company Bahadur was primarily a religious corporation.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The English merchants succeeded in India because the local people resisted them.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "India remains under British control mainly due to the Indian people's desire for governance.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The English's primary motivation for retaining control of India is political power.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The English view their dominions as opportunities for military expansion.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The English are described as a nation of explorers in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The English's arms and ammunition play a significant role in holding India.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The English aim to convert the whole world into a vast marketplace for their goods.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
