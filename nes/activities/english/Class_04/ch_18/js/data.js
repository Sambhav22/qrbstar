export const chapter = "Chapter -18: The Grand Chapatti Contest";
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
          question: "What made the king angry?",
          optionA:
            "Not being served perfectly round, soft, fluffy-puffy chapattis",
          optionB:
            "The queen using his silver hairbrush to brush the royal dog",
          optionC:
            "The servants forgetting to fill his satin pillow with rose petals",
          correctAnswer:
            "Not being served perfectly round, soft, fluffy-puffy chapattis",
        }),
      shuffleOptions({
          question:
            "What prize was offered to the winner of the Grand Chapatti Contest?",
          optionA: "A bag of gold coins",
          optionB: "A job as a royal guard",
          optionC: "A bag of peanuts",
          correctAnswer: "A bag of gold coins",
        }),
      shuffleOptions({
          question: "How did Meena's family earn a living?",
          optionA: "By selling chapattis",
          optionB: "By selling peanuts",
          optionC: "By selling fruits",
          correctAnswer: "By selling peanuts",
        }),
      shuffleOptions({
          question:
            "What did the king say about the butterfly-shaped chapatti?",
          optionA: "He liked it",
          optionB: "He refused to taste it",
          optionC: "He said it smelled bad",
          correctAnswer: "He refused to taste it",
        }),
      shuffleOptions({
          question: "What was special about the fluffiest-puffiest chapatti?",
          optionA: "It had a special pump to fill extra air into it",
          optionB: "It was made with spinach",
          optionC: "It was filled with nuts",
          correctAnswer: "It had a special pump to fill extra air into it",
        }),
      shuffleOptions({
          question:
            "What happened to the chapatti that was made so soft and fine that one could actually look through it?",
          optionA: "It floated away into the air",
          optionB: "It was torn in half",
          optionC: "It turned cold and hard",
          correctAnswer: "It was torn in half",
        }),
      shuffleOptions({
          question:
            "Why did Meena ask her father to push the cart close to the silk tent?",
          optionA: "To sell peanuts",
          optionB: "To make chapattis on the little clay stove",
          optionC: "To give chapattis to the king",
          correctAnswer: "To make chapattis on the little clay stove",
        }),
      shuffleOptions({
          question:
            "How many chapattis did the king eat that Meena's mother made?",
          optionA: "Ten",
          optionB: "Fifteen",
          optionC: "Twenty",
          correctAnswer: "Fifteen",
        }),
      shuffleOptions({
          question: "What prize did Meena's mother win?",
          optionA: "A bag of peanuts",
          optionB: "A bag of gold coins",
          optionC: "A bag of rice",
          correctAnswer: "A bag of gold coins",
        }),
      shuffleOptions({
          question: "What job was Meena's mother offered in the royal kitchen?",
          optionA: "Chief cook",
          optionB: "Royal guard",
          optionC: "Gardener",
          correctAnswer: "Chief cook",
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
          question: "The king angry was angry because __________",
          optionA:
            "Not being served perfectly round, soft, fluffy-puffy chapattis",
          optionB:
            "The queen using his silver hairbrush to brush the royal dog",
          optionC:
            "The servants forgetting to fill his satin pillow with rose petals",
          correctAnswer:
            "Not being served perfectly round, soft, fluffy-puffy chapattis",
        }),
      shuffleOptions({
          question:
            "What prize was offered to the winner of the Grand Chapatti Contest?",
          optionA: "A bag of gold coins",
          optionB: "A job as a royal guard",
          optionC: "A bag of peanuts",
          correctAnswer: "A bag of gold coins",
        }),
      shuffleOptions({
          question: "Meena's family earn a living ________",
          optionA: "By selling chapattis",
          optionB: "By selling peanuts",
          optionC: "By selling fruits",
          correctAnswer: "By selling peanuts",
        }),
      shuffleOptions({
          question:
            "The king say about the butterfly-shaped chapatti _________",
          optionA: "He liked it",
          optionB: "He refused to taste it",
          optionC: "He said it smelled bad",
          correctAnswer: "He refused to taste it",
        }),
      shuffleOptions({
          question: "What was special about the fluffiest-puffiest chapatti?",
          optionA: "It had a special pump to fill extra air into it",
          optionB: "It was made with spinach",
          optionC: "It was filled with nuts",
          correctAnswer: "It had a special pump to fill extra air into it",
        }),
      shuffleOptions({
          question:
            "What happened to the chapatti that was made so soft and fine that one could actually look through it?",
          optionA: "It floated away into the air",
          optionB: "It was torn in half",
          optionC: "It turned cold and hard",
          correctAnswer: "It was torn in half",
        }),
      shuffleOptions({
          question:
            "Meena ask her father to push the cart close to the silk tent ________",
          optionA: "To sell peanuts",
          optionB: "To make chapattis on the little clay stove",
          optionC: "To give chapattis to the king",
          correctAnswer: "To make chapattis on the little clay stove",
        }),
      shuffleOptions({
          question:
            "How many chapattis did the king eat that Meena's mother made?",
          optionA: "Ten",
          optionB: "Fifteen",
          optionC: "Twenty",
          correctAnswer: "Fifteen",
        }),
      shuffleOptions({
          question: "Meena's mother win _________",
          optionA: "A bag of peanuts",
          optionB: "A bag of gold coins",
          optionC: "A bag of rice",
          correctAnswer: "A bag of gold coins",
        }),
      shuffleOptions({
          question: "What job was Meena's mother offered in the royal kitchen?",
          optionA: "Chief cook",
          optionB: "Royal guard",
          optionC: "Gardener",
          correctAnswer: "Chief cook",
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
          question: "The king hardly ever got angry.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The queen polished the king's golden crown with silver polish.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The king loved eating chapattis for breakfast, lunch, and dinner every day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The queen announced a Grand Chapatti Contest because she wanted to win the prize.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Meena's family was very wealthy and could afford to eat luxurious meals every day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The king liked the colour of the green, spinach-flavoured chapatti.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The chapatti made so soft and fine that one could actually look through it was torn in half.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The king refused to eat any chapattis made by the contestants of the Grand Chapatti Contest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Meena's mother won the prize of a bag of gold coins in the Grand Chapatti Contest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Meena's mother was offered a job as a gardener in the royal kitchen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
