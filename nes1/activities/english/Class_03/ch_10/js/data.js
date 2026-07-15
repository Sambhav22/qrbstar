export const chapter = "Chapter - 10: Auction of a Shoe";
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
        question: "What was Madan Mohan Malviya's main goal in the text?",
        optionA: "To become a scholar",
        optionB: "To collect funds for a university",
        optionC: "To become the world's richest man",
        correctAnswer: "To collect funds for a university",
     }),
      shuffleOptions({
        question: "What did Malviya want to name the university he envisioned?",
        optionA: "Kashi Muslim University",
        optionB: "Kashi Hindu University",
        optionC: "Kashi Freedom University",
        correctAnswer: "Kashi Hindu University",
     }),
      shuffleOptions({
        question:
          "How did Malviya react when the Nizam of Hyderabad refused to contribute to the university?",
        optionA: "He got angry and argued with the Nizam.",
        optionB: "He picked up the Nizam's shoe and walked out.",
        optionC: "He left without saying a word.",
        correctAnswer: "He picked up the Nizam's shoe and walked out.",
     }),
      shuffleOptions({
        question:
          "What did Malviya do with the Nizam's shoe after he left the court?",
        optionA: "He threw it away.",
        optionB: "He kept it as a memento.",
        optionC: "He put it up for auction.",
        correctAnswer: "He put it up for auction.",
     }),
      shuffleOptions({
        question:
          "What did Malviya mean by the phrase, 'If life gives you lemons, make lemonade'?",
        optionA: "If you have lemons, make lemonade to quench your thirst.",
        optionB: "If you face difficulties, be positive and find a solution.",
        optionC:
          "If you receive gifts, be grateful and share them with others.",
        correctAnswer:
          "If you face difficulties, be positive and find a solution.",
     }),
      shuffleOptions({
        question:
          "How did people react when they heard that the Nizam's shoe was on auction?",
        optionA: "They ignored the news.",
        optionB: "They gathered and started making high bids.",
        optionC: "They criticized Malviya for selling the shoe.",
        correctAnswer: "They gathered and started making high bids.",
     }),
      shuffleOptions({
        question:
          "Why was the Nizam shocked when he heard that his shoe was being auctioned?",
        optionA: "He didn't like the idea of selling his shoe.",
        optionB: "He was afraid that someone less rich would buy it.",
        optionC: "He didn't want to contribute to the university.",
        correctAnswer: "He was afraid that someone less rich would buy it.",
     }),
      shuffleOptions({
        question: "What was the ultimate outcome of the shoe auction?",
        optionA: "The shoe was bought by a wealthy person.",
        optionB: "The shoe was returned to the Nizam.",
        optionC: "The shoe was sold for a high price to fund the university.",
        correctAnswer:
          "The shoe was sold for a high price to fund the university.",
     }),
      shuffleOptions({
        question:
          "What can we learn from Madan Mohan Malviya's actions in this story?",
        optionA: "It's important to maintain one's dignity in all situations.",
        optionB: "When faced with adversity, find creative solutions.",
        optionC: "It's essential to be stubborn and never give up.",
        correctAnswer: "When faced with adversity, find creative solutions.",
     }),
      shuffleOptions({
        question:
          "What is the primary message conveyed by the phrase, 'If life gives you lemons, make lemonade' in the context of the story?",
        optionA: "Stay positive and make the best of difficult situations.",
        optionB: "Always prepare for unexpected events.",
        optionC: "Avoid lemons and choose sweeter fruits.",
        correctAnswer:
          "Stay positive and make the best of difficult situations.",
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
          "Madan Mohan Malviya decided to build a large university and name it ____________ University.",
        optionA: "Kashi Muslim",
        optionB: "Kashi Hindu",
        optionC: "Kashi Freedom",
        correctAnswer: "Kashi Hindu",
     }),
      shuffleOptions({
        question:
          "Malviya toured the entire country to collect ____________ for the university.",
        optionA: "Books",
        optionB: "Funds",
        optionC: "Students",
        correctAnswer: "Funds",
     }),
      shuffleOptions({
        question:
          "Malviya approached the Nizam of Hyderabad, who was considered the world's richest man, for a ____________ to build the university.",
        optionA: "Loan",
        optionB: "Donation",
        optionC: "Scholarship",
        correctAnswer: "Donation",
     }),
      shuffleOptions({
        question:
          "When the Nizam refused to contribute, he removed his ____________ and threw it at Malviya.",
        optionA: "Crown",
        optionB: "Shoe",
        optionC: "Robe",
        correctAnswer: "Shoe",
     }),
      shuffleOptions({
        question:
          "Malviya decided to use the Nizam's ____________ for a unique purpose.",
        optionA: "Crown",
        optionB: "Shoe",
        optionC: "Robe",
        correctAnswer: "Shoe",
     }),
      shuffleOptions({
        question:
          "Malviya announced that the Nizam's footwear was on ____________ after picking it up.",
        optionA: "Sale",
        optionB: "Display",
        optionC: "Auction",
        correctAnswer: "Auction",
     }),
      shuffleOptions({
        question:
          "People gathered and started making ____________ for the Nizam's shoe.",
        optionA: "Friends",
        optionB: "High bids",
        optionC: "Protests",
        correctAnswer: "High bids",
     }),
      shuffleOptions({
        question:
          "The Nizam was shocked because he thought it could be an ____________ if someone less rich bought his shoe.",
        optionA: "Advantage",
        optionB: "Insult",
        optionC: "Opportunity",
        correctAnswer: "Insult",
     }),
      shuffleOptions({
        question:
          "The Nizam sent his own men to buy the shoe for as much ____________ as possible.",
        optionA: "Money",
        optionB: "Gold",
        optionC: "Land",
        correctAnswer: "Money",
     }),
      shuffleOptions({
        question:
          "The money collected from the sale of the shoe was sufficient to build a ____________ in the university.",
        optionA: "Library",
        optionB: "Laboratory",
        optionC: "Large building",
        correctAnswer: "Large building",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Madan Mohan Malviya was a freedom fighter and scholar.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Malviya wanted to name the university he envisioned as 'Kashi Hindu University.'",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Malviya had plenty of money to fund the university.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Nizam of Hyderabad agreed to contribute to build a Hindu University.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "When the Nizam refused to contribute, he threw his shoe at Malviya.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Malviya felt insulted by the Nizam's actions.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Malviya decided to use the Nizam's shoe for a unique purpose.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Malviya sold the Nizam's shoe for a low price.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Nizam's shoe was sold for a high price, sufficient to build a large building in the university.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The phrase, 'If life gives you lemons, make lemonade,' means to stay negative and give up when facing difficulties.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
