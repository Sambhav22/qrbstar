export const chapter = "Chapter -14: Ragged Wisdom";
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
          question:
            "Who is allowed to approach the king in person on audience day?",
          optionA: "Only the rich and mighty",
          optionB: "Only the poor and lowly",
          optionC: "Both rich and poor, mighty and lowly",
          correctAnswer: "Both rich and poor, mighty and lowly",
        }),
      shuffleOptions({
          question:
            "What does the ragged man say is the key factor in a wife's care for her husband's body and soul?",
          optionA: "Chastity",
          optionB: "Wealth",
          optionC: "Power",
          correctAnswer: "Chastity",
        }),
      shuffleOptions({
          question:
            "According to the ragged man, what is the most serviceable thing in the world?",
          optionA: "Love",
          optionB: "Wisdom",
          optionC: "Money",
          correctAnswer: "Money",
        }),
      shuffleOptions({
          question: "Why does the ragged scholar approach the king for aid?",
          optionA: "He is hungry and needs food.",
          optionB: "His wife is ill due to lack of good food.",
          optionC: "He wants charity to improve his living conditions.",
          correctAnswer: "His wife is ill due to lack of good food.",
        }),
      shuffleOptions({
          question:
            "What does the king decide to do for the ragged scholar after hearing his plea?",
          optionA: "Grant him a large sum of money.",
          optionB: "Appoint him as a minister in the court.",
          optionC: "Ignore his request.",
          correctAnswer: "Appoint him as a minister in the court.",
        }),
      shuffleOptions({
          question:
            "How does the ragged scholar continue to spend his time even after becoming a minister?",
          optionA: "Engaging in luxurious activities.",
          optionB: "Wandering in rags.",
          optionC: "Devouring books in his leisure moments.",
          correctAnswer: "Devouring books in his leisure moments.",
        }),
      shuffleOptions({
          question:
            "What do some courtiers grow jealous of regarding the ragged minister?",
          optionA: "His wealth",
          optionB: "His magical powers",
          optionC: "His position at the court",
          correctAnswer: "His position at the court",
        }),
      shuffleOptions({
          question:
            "What rumors do courtiers spread about the minister's daily routine to poison the king's mind?",
          optionA: "He practices magic before meeting the king.",
          optionB: "He is secretly conspiring against the king.",
          optionC: "He is leading a rebellion in the kingdom.",
          correctAnswer: "He practices magic before meeting the king.",
        }),
      shuffleOptions({
          question:
            "How does the minister respond when the king decides to visit his house to check the rumors?",
          optionA: "He welcomes the king with open arms.",
          optionB: "He tries to avoid the visit.",
          optionC: "He insists the king accompany him.",
          correctAnswer: "He insists the king accompany him.",
        }),
      shuffleOptions({
          question:
            "What does the minister reveal when the king opens the silver chest in his private chamber?",
          optionA: "Hidden magical artifacts.",
          optionB: "A bundle of old yellow rags.",
          optionC: "A treasure trove of gold and jewels.",
          correctAnswer: "A bundle of old yellow rags.",
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
          question:
            "It was ________ day at the king's court when anyone, rich or poor, could approach the king personally.",
          optionA: "Celebration",
          optionB: "Audience",
          optionC: "Ceremony",
          correctAnswer: "Audience",
        }),
      shuffleOptions({
          question:
            "The king sat on his throne in regal splendour, with his prime minister at his side, promising succor to each, giving light and cheer to many hearts that had been previously ________.",
          optionA: "Illuminated",
          optionB: "Overshadowed",
          optionC: "Brightened",
          correctAnswer: "Overshadowed",
        }),
      shuffleOptions({
          question:
            "The ragged man, gazing past the throne, had evidently forgotten his surroundings, wrapped in thought, and alone of all the supplicants, had failed to ask the king for a ________.",
          optionA: "Boon",
          optionB: "Gift",
          optionC: "Favor",
          correctAnswer: "Boon",
        }),
      shuffleOptions({
          question:
            "The king asked his prime minister, 'Who is it that takes the best care of the body of a man in this world?' The minister responded, 'Why, the wife, of course, your majesty, if she be ________.'",
          optionA: "Beautiful",
          optionB: "Chaste",
          optionC: "Wealthy",
          correctAnswer: "Chaste",
        }),
      shuffleOptions({
          question:
            "According to the ragged man, the thing most serviceable in this world is ________.",
          optionA: "Love",
          optionB: "Wisdom",
          optionC: "Money",
          correctAnswer: "Money",
        }),
      shuffleOptions({
          question:
            "The ragged scholar approached the king for aid because his wife was very ill due to lack of good ________.",
          optionA: "Clothing",
          optionB: "Shelter",
          optionC: "Food",
          correctAnswer: "Food",
        }),
      shuffleOptions({
          question:
            "The king decided to make the ragged scholar one of the learned men of the court and instructed his minister to ensure the scholar's needs were fully supplied, adding luxuries befitting one of that ________.",
          optionA: "Station",
          optionB: "Position",
          optionC: "Rank",
          correctAnswer: "Station",
        }),
      shuffleOptions({
          question:
            "At court, some grew jealous of the ragged scholar's rapid rise and spread rumors about his involvement in ________ arts to bewitch the king.",
          optionA: "Magical",
          optionB: "Secret",
          optionC: "Dark",
          correctAnswer: "Magical",
        }),
      shuffleOptions({
          question:
            "The courtiers warned the king, saying the ragged scholar practices magic daily before meeting him, leading to suspicion against the minister's ________.",
          optionA: "Loyalty",
          optionB: "Honesty",
          optionC: "Integrity",
          correctAnswer: "Integrity",
        }),
      shuffleOptions({
          question:
            "When the king visited the minister's house to check the rumors, the minister revealed the silver chest contained not magical artifacts but a bundle of old ________.",
          optionA: "Clothes",
          optionB: "Rags",
          optionC: "Fabrics",
          correctAnswer: "Rags",
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
          question:
            "The audience day at the king's court is a day for both the rich and poor to present their grievances to the king.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The ragged man who approached the king was the only supplicant who failed to ask the king for a boon.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The prime minister believed that a wife's care for her husband's body depends on her wealth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The most serviceable thing in the world, according to the ragged man, is wisdom.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The ragged scholar approached the king for aid because he was hungry and needed food for himself.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The king decided to grant the ragged scholar a large sum of money to help him and his wife.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The courtiers at the king's court spread rumors about the ragged scholar, accusing him of practicing dark and magical arts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The king, influenced by the courtiers' rumors, grew more fond of the ragged scholar and promoted him to the highest position in the court.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The minister, when confronted about the rumors, revealed a treasure trove of gold and jewels in his silver chest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The ragged scholar, despite his rise to power, continued to spend his time wandering in rags.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
