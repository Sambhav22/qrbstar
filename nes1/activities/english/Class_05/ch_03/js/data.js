export const chapter = "Chapter - 3: The Gift of Friendship ";
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
        question: "What is the central theme of the text?",
        optionA: "The value of material wealth",
        optionB: "The importance of friendship",
        optionC: "The significance of diamonds and pearls",
        correctAnswer: "The importance of friendship",
     }),
      shuffleOptions({
        question:
          "What is the author's opinion of gold in comparison to friendship?",
        optionA: "Gold is warm and comforting",
        optionB: "Gold is valuable and precious",
        optionC: "Gold is cold and lifeless",
        correctAnswer: "Gold is cold and lifeless",
     }),
      shuffleOptions({
        question: "According to the text, what can gold neither do?",
        optionA: "See nor hear",
        optionB: "Bring comfort",
        optionC: "Provide warmth",
        correctAnswer: "See nor hear",
     }),
      shuffleOptions({
        question:
          "What does the author mean when they say, 'It has no ears to listen'?",
        optionA: "Gold cannot hear",
        optionB: "Gold is deaf",
        optionC: "Gold cannot provide emotional support",
        correctAnswer: "Gold cannot provide emotional support",
     }),
      shuffleOptions({
        question: "What is the author's suggestion when asking God for a gift?",
        optionA: "Ask for diamonds and pearls",
        optionB: "Be thankful for whatever you receive",
        optionC: "Be specific in your request",
        correctAnswer: "Be thankful for whatever you receive",
     }),
      shuffleOptions({
        question:
          "According to the text, what should you be thankful for if God sends it?",
        optionA: "Material wealth",
        optionB: "True friends",
        optionC: "Precious gems",
        correctAnswer: "True friends",
     }),
      shuffleOptions({
        question: "What is the text's message about the value of true friends?",
        optionA: "True friends are worthless",
        optionB: "True friends are as valuable as gold",
        optionC: "True friends are hard to find",
        correctAnswer: "True friends are as valuable as gold",
     }),
      shuffleOptions({
        question:
          "What is the author's opinion of gold during difficult times?",
        optionA: "Gold is a source of strength",
        optionB: "Gold is powerless to cheer",
        optionC: "Gold is a symbol of comfort",
        correctAnswer: "Gold is powerless to cheer",
     }),
      shuffleOptions({
        question: "What is the main contrast the author makes in the text?",
        optionA: "Gold vs. pearls",
        optionB: "Material wealth vs. emotional support",
        optionC: "Listening vs. understanding",
        correctAnswer: "Material wealth vs. emotional support",
     }),
      shuffleOptions({
        question:
          "In the text, what does the author suggest is more valuable than a mountain of gold?",
        optionA: "Diamonds and pearls",
        optionB: "True friendship",
        optionC: "Material wealth",
        correctAnswer: "True friendship",
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
          "Friendship is a priceless gift that cannot be bought or ___________.",
        optionA: "Found",
        optionB: "Sold",
        optionC: "Earned",
        correctAnswer: "Sold",
     }),
      shuffleOptions({
        question:
          "Friendship is said to be far greater in value than a mountain made of ___________.",
        optionA: "Silver",
        optionB: "Diamonds",
        optionC: "Gold",
        correctAnswer: "Gold",
     }),
      shuffleOptions({
        question:
          "According to the text, gold is described as being ___________ and lifeless.",
        optionA: "Warm",
        optionB: "Cold",
        optionC: "Shiny",
        correctAnswer: "Cold",
     }),
      shuffleOptions({
        question:
          "Gold cannot see, hear, or provide cheer in times of ___________.",
        optionA: "Celebration",
        optionB: "Trouble",
        optionC: "Joy",
        correctAnswer: "Trouble",
     }),
      shuffleOptions({
        question: "Gold has no ___________ to listen, no heart to understand.",
        optionA: "Ears",
        optionB: "Eyes",
        optionC: "Voice",
        correctAnswer: "Ears",
     }),
      shuffleOptions({
        question: "Gold cannot bring comfort or reach out a ___________ hand.",
        optionA: "Helpful",
        optionB: "Caring",
        optionC: "Loving",
        correctAnswer: "Helpful",
     }),
      shuffleOptions({
        question:
          "The text suggests that when you ask God for a gift, be thankful if He sends the love of true ___________.",
        optionA: "Family",
        optionB: "Diamonds",
        optionC: "Friends",
        correctAnswer: "Friends",
     }),
      shuffleOptions({
        question:
          "Friendship is a ___________ gift that cannot be bought or sold.",
        optionA: "Common",
        optionB: "Valuable",
        optionC: "Temporary",
        correctAnswer: "Valuable",
     }),
      shuffleOptions({
        question:
          "Gold is described as powerless to provide cheer and unable to reach out a ___________ hand.",
        optionA: "Supporting",
        optionB: "Helping",
        optionC: "Friendly",
        correctAnswer: "Helping",
     }),
      shuffleOptions({
        question:
          "The text emphasizes the value of true ___________ over material wealth.",
        optionA: "Treasures",
        optionB: "Love",
        optionC: "Diamonds",
        correctAnswer: "Love",
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
          "Genghis Khan is known for leading his army into China and Persia.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Genghis Khan's friends rode into the woods with him for a day's sport and hunting.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Hawks in those days were trained to perform tricks.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Genghis Khan went by a longer road through a valley to find a spring with clear water.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The hawk prevented Genghis Khan from drinking from the spring by pushing the cup from his hands.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Genghis Khan felt indifferent after realizing the hawk had saved his life.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Genghis Khan found treasure in the pool of water at the top of the bank.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Genghis Khan was happy with the hawk for preventing him from drinking from the spring.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Genghis Khan threatened to reward the hawk after drawing his sword.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Genghis Khan learned a lesson about not doing things in anger after the incident with the hawk.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
