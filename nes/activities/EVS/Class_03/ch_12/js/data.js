export const chapter = "Chapter - 12: Games for Fun";
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
          question: "What type of game is hopscotch?",
          optionA: "Team game",
          optionB: "Outdoor game",
          optionC: "Solo game",
          correctAnswer: "Outdoor game",
         }),
      shuffleOptions({
          question:
            "Which sport is commonly known as soccer and played between two teams?",
          optionA: "Basketball",
          optionB: "Kabaddi",
          optionC: "Football",
          correctAnswer: "Football",
         }),
      shuffleOptions({
          question: "What is kabaddi?",
          optionA: "Individual solo game",
          optionB: "Team sport",
          optionC: "Recreational activity",
          correctAnswer: "Team sport",
         }),
      shuffleOptions({
          question:
            "What kind of game boosts intellectual skills and is played individually?",
          optionA: "Kabaddi",
          optionB: "Hopscotch",
          optionC: "Puzzle",
          correctAnswer: "Puzzle",
         }),
      shuffleOptions({
          question: "Which games are classified as outdoor games?",
          optionA: "Ludo, chess, scrabble",
          optionB: "Football, hockey, volleyball",
          optionC: "Hide and seek, monopoly, snakes and ladders",
          correctAnswer: "Football, hockey, volleyball",
         }),
      shuffleOptions({
          question: "What are games played inside the house called?",
          optionA: "Outdoor games",
          optionB: "Indoor games",
          optionC: "Recreational games",
          correctAnswer: "Indoor games",
         }),
      shuffleOptions({
          question:
            "Which games were played by our parents and grandparents as outdoor games?",
          optionA: "Cricket, football, hockey",
          optionB: "Gilli-danda, kho-kho, kabaddi",
          optionC: "Ludo, chess, scrabble",
          correctAnswer: "Gilli-danda, kho-kho, kabaddi",
         }),
      shuffleOptions({
          question:
            "According to the text, what is the importance of games in terms of physical health?",
          optionA: "Promote creativity and imagination",
          optionB: "Provide exercise to the body",
          optionC: "Boost intellectual skills",
          correctAnswer: "Provide exercise to the body",
         }),
      shuffleOptions({
          question:
            "What is mentioned as a benefit of playing games in terms of mental development?",
          optionA: "Increase concentration power",
          optionB: "Boost physical strength",
          optionC: "Promote patriotism",
          correctAnswer: "Increase concentration power",
         }),
      shuffleOptions({
          question:
            "How can sports be considered as a career, according to the text?",
          optionA: "It provides enjoyment",
          optionB: "It promotes discipline",
          optionC: "It offers income and fame",
          correctAnswer: "It offers income and fame",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "Traditional hopscotch is more common among _______ in India.",
          optionA: "Boys",
          optionB: "Girls",
          optionC: "Adults",
          correctAnswer: "Girls",
         }),
      shuffleOptions({
          question: "Soccer is commonly known as _______.",
          optionA: "Cricket",
          optionB: "Basketball",
          optionC: "Football",
          correctAnswer: "Football",
         }),
      shuffleOptions({
          question: "Kabaddi is a contact team sport popular in _______.",
          optionA: "North America",
          optionB: "South Asia",
          optionC: "Europe",
          correctAnswer: "South Asia",
         }),
      shuffleOptions({
          question:
            "Puzzle-solving is an individual solo game that boosts _______ skills.",
          optionA: "Physical",
          optionB: "Intellectual",
          optionC: "Social",
          correctAnswer: "Intellectual",
         }),
      shuffleOptions({
          question:
            "Recreational pleasure and enjoyment are associated with _______.",
          optionA: "Work",
          optionB: "Games",
          optionC: "Chores",
          correctAnswer: "Games",
         }),
      shuffleOptions({
          question: "Outdoor games are played in _______.",
          optionA: "Bedrooms",
          optionB: "Kitchens",
          optionC: "Big fields, grounds, stadiums, etc.",
          correctAnswer: "Big fields, grounds, stadiums, etc.",
         }),
      shuffleOptions({
          question: "Indoor games can be played in _______.",
          optionA: "Parks",
          optionB: "Any room of the house",
          optionC: "Beaches",
          correctAnswer: "Any room of the house",
         }),
      shuffleOptions({
          question:
            "Traditional outdoor games played by parents and grandparents include _______.",
          optionA: "Monopoly",
          optionB: "Snakes and Ladders",
          optionC: "Gilli-Danda",
          correctAnswer: "Gilli-Danda",
         }),
      shuffleOptions({
          question: "Games help increase _______ power.",
          optionA: "Physical fitness",
          optionB: "Concentration",
          optionC: "Creativity",
          correctAnswer: "Concentration",
         }),
      shuffleOptions({
          question:
            "Sport personalities like Sania Mirza and Sachin Tendulkar made a career in _______.",
          optionA: "Cooking",
          optionB: "Games and Sports",
          optionC: "Painting",
          correctAnswer: "Games and Sports",
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
            "Traditional hopscotch is more common among girls in India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Soccer is commonly known as basketball.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Kabaddi is a non-contact sport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Puzzle-solving is a team sport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Recreational pleasure and enjoyment are not associated with games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Indoor games can only be played in bedrooms.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Traditional outdoor games played by parents and grandparents include Monopoly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Games help increase physical fitness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Playing games promotes the feeling of laziness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Sport personalities like Sania Mirza and Sachin Tendulkar made a career in painting.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
