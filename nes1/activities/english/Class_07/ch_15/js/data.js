export const chapter = "Chapter - 15: Games and Development ";
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
          "What is the first thing a baby does after learning to move their hands and feet?",
        optionA: "Speak",
        optionB: "Play",
        optionC: "Sleep",
        correctAnswer: "B) Play",
     }),
      shuffleOptions({
        question:
          "What are the three primary activities that a baby likes to do as they grow a little?",
        optionA: "Read, eat, and sing",
        optionB: "Suck milk, sleep, and play",
        optionC: "Study, run, and dance",
        correctAnswer: "B) Suck milk, sleep, and play",
     }),
      shuffleOptions({
        question: "What physical benefits does playing provide for a child?",
        optionA: "It makes them hungrier",
        optionB: "It strengthens muscles and bones",
        optionC: "It improves their sleep quality",
        correctAnswer: "B) It strengthens muscles and bones",
     }),
      shuffleOptions({
        question:
          "In addition to physical qualities, what mental qualities can playing cultivate in a child?",
        optionA: "Patience, creativity, and curiosity",
        optionB: "Tolerance, teamwork, and honesty",
        optionC: "Independence, leadership, and selfishness",
        correctAnswer: "B) Tolerance, teamwork, and honesty",
     }),
      shuffleOptions({
        question:
          "What is the significance of playing in the development of a person?",
        optionA: "It has no impact on a person's development",
        optionB: "It hinders personal growth",
        optionC: "It contributes to maturity and competence",
        correctAnswer: "C) It contributes to maturity and competence",
     }),
      shuffleOptions({
        question:
          "How do developed nations usually perform in international sports events?",
        optionA: "They perform poorly",
        optionB: "They perform moderately",
        optionC: "They perform well and win more medals",
        correctAnswer: "C) They perform well and win more medals",
     }),
      shuffleOptions({
        question:
          "Which country showed a significant decrease in its medal tally after a period of war and conflict?",
        optionA: "America",
        optionB: "Germany",
        optionC: "India",
        correctAnswer: "B) Germany",
     }),
      shuffleOptions({
        question:
          "In ancient Indian tradition, what contests were commonly played?",
        optionA: "Chess and card games",
        optionB: "Sword-fighting, mace-wielding, and chariot-racing",
        optionC: "Cooking and farming competitions",
        correctAnswer: "B) Sword-fighting, mace-wielding, and chariot-racing",
     }),
      shuffleOptions({
        question:
          "What event in the Mahabharata involved a difficult test of archery?",
        optionA: "Archery competition between Arjuna and Bhima",
        optionB: "Archery contest with a revolving fish target",
        optionC: "Archery duel between Dronacharya and Karna",
        correctAnswer: "B) Archery contest with a revolving fish target",
     }),
      shuffleOptions({
        question:
          "What happened to traditional Indian games during the medieval period with Muslim invasions?",
        optionA: "They became more popular",
        optionB: "They continued in rural areas but faded in cities",
        optionC: "They were completely abolished",
        correctAnswer: "B) They continued in rural areas but faded in cities",
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
          "Childhood is the best time to __________, and it is at this stage that he learns to play new games and learn their rules.",
        options: ["Eat", "Study", "Play"],
        correctAnswer: "Play",
     }),
      shuffleOptions({
        question:
          "There is little doubt that games do good to a player in his individual capacity; it also does good to the society and nation as a whole. If you look at the medal tallies of the international events, you will find that the countries that win more medals are also more __________.",
        options: ["Hungry", "Developed", "Divided"],
        correctAnswer: "Developed",
     }),
      shuffleOptions({
        question:
          "Prior to the Second World War, in 1936 Olympic Games, Germany captured the largest number of medals in different sports events. It was the same Germany that showed its brute force in bringing the world to its knees in the years following it. After it was severely battered in the war, its medal tally in games also went down __________.",
        options: ["Significantly", "Unchanged", "Tremendously"],
        correctAnswer: "Significantly",
     }),
      shuffleOptions({
        question:
          "India possesses one-sixth of the world's population, but when it comes to medals in international meets, we find ourselves in the company of some small __________ nations.",
        options: ["Poor", "Developed", "Undiscovered"],
        correctAnswer: "Poor",
     }),
      shuffleOptions({
        question:
          "In our country, playing has been part of the Indian tradition, from much before other civilizations came into being. There were played different contests, mainly wrestling, sword-fighting, __________, and chariot-racing.",
        options: ["Cooking", "Fishing", "Mace-wielding"],
        correctAnswer: "Mace-wielding",
     }),
      shuffleOptions({
        question:
          "In an open contest, Arjuna won the hand of Draupadi in one of the most difficult and skillful tests of archery, in which he shot at the eye of a revolving __________ by looking at its image in the pool of water below.",
        options: ["Fish", "Bird", "Snake"],
        correctAnswer: "Fish",
     }),
      shuffleOptions({
        question:
          "When the English ruled over us, some of the new games were also introduced, like badminton, cricket, hockey, boxing, and others, and the traditional games like wrestling, kho-kho, and __________ went into oblivion, though they continued to be played in the rural areas.",
        options: ["Baseball", "Rope-pulling", "Sailing"],
        correctAnswer: "Rope-pulling",
     }),
      shuffleOptions({
        question:
          "After independence, India has not done well in the international sports arena. India possesses one-sixth of the world's population, but when it comes to medals in international meets, we find ourselves in the company of some small __________ nations.",
        options: ["Developed", "Undeveloped", "Unnoticed"],
        correctAnswer: "Undeveloped",
     }),
      shuffleOptions({
        question:
          "India and China were freed about the same time, but we lag far behind it in sports, so do we in __________.",
        options: ["Technology", "Development", "Agriculture"],
        correctAnswer: "Development",
     }),
      shuffleOptions({
        question:
          "Most of our young people want to become professionals; they want to play the game for money; they want to emulate the likes of Sachin Tendulkar and Virat Kohli who have grown multi-millionaires. Playing should cultivate the qualities of skill, speed, stamina, and strength, and these qualities cannot be developed without taking part in amateur games, which ensures 'a sound mind in a sound __________.'",
        options: ["House", "Body", "Wallet"],
        correctAnswer: "Body",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poor farmer and his mother were wealthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The governor's proclamation demanded the execution of the elderly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The farmer marked the path using stones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer made the 'rope of ashes' using straw.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The governor was displeased with the farmer's wit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The governor mentioned a saying about the crown of snow and wisdom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The farmer used the stars to guide him down the mountain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The governor demanded a sack of gold from his subjects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The elderly in the province could lead a life full of fear after the governor's proclamation was abolished.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The farmer's mother helped create the 'rope of ashes.'",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
