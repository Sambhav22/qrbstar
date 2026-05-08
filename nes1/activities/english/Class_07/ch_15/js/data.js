export const chapter = "Chapter -15: Games and Development";
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
            "What is mentioned as the first thing a baby does after learning to move hands and feet?",
          optionA: "Talk",
          optionB: "Sleep",
          optionC: "Play",
          correctAnswer: "Play",
        }),
      shuffleOptions({
          question:
            "According to the text, what are the three things a growing baby likes to do?",
          optionA: "Read, eat, and sleep",
          optionB: "Suck milk, sleep, and play",
          optionC: "Cry, crawl, and eat",
          correctAnswer: "Suck milk, sleep, and play",
        }),
      shuffleOptions({
          question:
            "What qualities does playing cultivate in a child, according to the text?",
          optionA: "Cooking skills, creativity, and patience",
          optionB: "Tolerance, teamwork, honesty, and fair play",
          optionC: "Singing ability, mathematical skills, and leadership",
          correctAnswer: "Tolerance, teamwork, honesty, and fair play",
        }),
      shuffleOptions({
          question:
            "How does playing contribute to a person's physical development?",
          optionA: "By making them taller",
          optionB:
            "By building muscles and bones, increasing strength, agility, and flexibility",
          optionC: "By improving eyesight",
          correctAnswer:
            "By building muscles and bones, increasing strength, agility, and flexibility",
        }),
      shuffleOptions({
          question:
            "According to the text, what is the most vitalizing and exciting activity in human life?",
          optionA: "Reading",
          optionB: "Playing",
          optionC: "Sleeping",
          correctAnswer: "Playing",
        }),
      shuffleOptions({
          question:
            "In the paragraph about ancient Indian sports, who won the hand of Draupadi in a skillful test of archery?",
          optionA: "Arjuna",
          optionB: "Rama",
          optionC: "Krishna",
          correctAnswer: "Arjuna",
        }),
      shuffleOptions({
          question:
            "What happened to sports during the medieval period in India?",
          optionA: "Sports flourished",
          optionB: "Sports continued as usual",
          optionC: "Sports events were disrupted due to Muslim invasions",
          correctAnswer:
            "Sports events were disrupted due to Muslim invasions",
        }),
      shuffleOptions({
          question:
            "What new games were introduced during English rule in India, according to the text?",
          optionA: "Badminton, cricket, and hockey",
          optionB: "Charioteering, wrestling, and rope-pulling",
          optionC: "Archery, fencing, and lance-throwing",
          correctAnswer: "Badminton, cricket, and hockey",
        }),
      shuffleOptions({
          question:
            "After independence, how does India fare in the international sports arena, according to the text?",
          optionA: "Dominating all sports",
          optionB: "Lagging behind in sports achievements",
          optionC: "Performing exceptionally well in the Olympics",
          correctAnswer: "Lagging behind in sports achievements",
        }),
      shuffleOptions({
          question:
            "According to the text, why is it mentioned that India needs to excel in sports for development?",
          optionA: "To increase entertainment options",
          optionB: "To attract more tourists",
          optionC: "Because sports and development are inextricably linked",
          correctAnswer:
            "Because sports and development are inextricably linked",
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
            "The first thing a baby does after learning how to move his hands and feet is to __________.",
          optionA: "Talk",
          optionB: "Sleep",
          optionC: "Play",
          correctAnswer: "Play",
        }),
      shuffleOptions({
          question:
            "As a child grows, childhood is the best time to play and learn new games, developing physical and mental qualities such as tolerance, team work, honesty, and fair play. Playing helps a person become mature and competent in __________.",
          optionA: "Cooking",
          optionB: "Relationships",
          optionC: "Life",
          correctAnswer: "Life",
        }),
      shuffleOptions({
          question:
            "In the ancient period, Raja Janak held a competition where the contestants had to lift and shoot from a massive __________.",
          optionA: "Mace",
          optionB: "Sword",
          optionC: "Bow",
          correctAnswer: "Bow",
        }),
      shuffleOptions({
          question:
            "Siddhartha, who later became the Buddha, mastered skills in archery, fencing, charioteering, wrestling, and __________.",
          optionA: "Javelin-throwing",
          optionB: "Lance-throwing",
          optionC: "Shot-put",
          correctAnswer: "Lance-throwing",
        }),
      shuffleOptions({
          question:
            "During the medieval period, sports events were disrupted due to __________.",
          optionA: "Peaceful negotiations",
          optionB: "Muslim invasions",
          optionC: "Lack of interest",
          correctAnswer: "Muslim invasions",
        }),
      shuffleOptions({
          question:
            "After independence, India has not performed well in the international sports arena, indicating a need to excel in sports for __________.",
          optionA: "National pride",
          optionB: "Economic growth",
          optionC: "Development",
          correctAnswer: "Development",
        }),
      shuffleOptions({
          question:
            "India is already doing well in regional international games like SAARC Games, Asian Games, and Commonwealth Games, but lags behind in sports events like the __________ and World Championships.",
          optionA: "National Championships",
          optionB: "Olympics",
          optionC: "Regional Championships",
          correctAnswer: "Olympics",
        }),
      shuffleOptions({
          question:
            "Despite the positive outcome in the number of medals, there is a negative side as many young people aspire to become professionals and play only for __________.",
          optionA: "Entertainment",
          optionB: "Skill development",
          optionC: "Monetary gains",
          correctAnswer: "Monetary gains",
        }),
      shuffleOptions({
          question:
            "To commemorate brave warriors and women, an annual event called __________ is held at the Jauhar site in Chittor Fort.",
          optionA: "Victory Parade",
          optionB: "Jauhar Mela",
          optionC: "Heritage Festival",
          correctAnswer: "Jauhar Mela",
        }),
      shuffleOptions({
          question:
            "The text suggests that India's performance in sports is linked to its __________.",
          optionA: "Entertainment industry",
          optionB: "Cultural heritage",
          optionC: "Overall development",
          correctAnswer: "Overall development",
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
            "Playing helps a person become mature and competent in life.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The first Jauhar at Chittor Fort occurred during the early 16th century when Alauddin Khalji attacked the capital of Mewar.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Queen Karnavati, during the second Jauhar, sent a Rakhi to Babur for help against the invasion by Bahadur Shah.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The ruler of Gujarat who attacked Mewar during the second Jauhar was Akbar Shah.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The third Jauhar at Chittor Fort occurred when Akbar, the Mughal ruler, attacked the fort during the reign of King Rana Sanga.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "India is already doing well in sports events like the Olympics and World Championships.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The historical stories at Chittor Fort carve their perennial place in regional history.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The second Jauhar at Chittor Fort took place approximately 200 years later during the reign of Rana Sanga.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The annual event held at the Jauhar site in Chittor Fort to commemorate the brave warriors and women is called Heritage Mela.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Despite the positive outcome in the number of medals, there is a negative side as many young people aspire to become professionals and play only for skill development.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
