export const chapter = "Chapter - 7: Good Luck ";
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
        question: "What did the woman find in a ditch along the road?",
        optionA: "A flower",
        optionB: "A pot of gold",
        optionC: "A lump of silver",
        correctAnswer: "A pot of gold",
     }),
      shuffleOptions({
        question: "How did the woman plan to transport her newfound treasure?",
        optionA: "She carried it in her arms.",
        optionB: "She tied her shawl to it and dragged it behind her.",
        optionC: "She put it in her basket.",
        correctAnswer: "She tied her shawl to it and dragged it behind her.",
     }),
      shuffleOptions({
        question:
          "What did the woman discover inside the pot when she opened it?",
        optionA: "Shining gold coins",
        optionB: "A lump of silver",
        optionC: "A lump of iron",
        correctAnswer: "Shining gold coins",
     }),
      shuffleOptions({
        question:
          "After discovering the gold coins, what did the woman consider doing with her newfound wealth?",
        optionA: "Burying it in the garden",
        optionB: "Buying a grand house",
        optionC: "Both A and B",
        correctAnswer: "Both A and B",
     }),
      shuffleOptions({
        question:
          "What did the woman see when she checked on her treasure again after resting?",
        optionA: "A lump of silver",
        optionB: "A lump of iron",
        optionC: "A great lump of iron",
        correctAnswer: "A great lump of iron",
     }),
      shuffleOptions({
        question: "What did the woman decide to do with the 'iron'?",
        optionA: "Sell it and become rich",
        optionB: "Use it to open her gate",
        optionC: "Bury it in the garden",
        correctAnswer: "Sell it and become rich",
     }),
      shuffleOptions({
        question:
          "What did the woman see when she checked on her treasure after resting the second time?",
        optionA: "A lump of silver",
        optionB: "A big stone",
        optionC: "A big stone with legs and ears",
        correctAnswer: "A big stone with legs and ears",
     }),
      shuffleOptions({
        question: "How did the stone transform in the woman's presence?",
        optionA: "It turned into a pot of gold.",
        optionB: "It grew larger with legs and ears.",
        optionC: "It remained a stone.",
        correctAnswer: "It grew larger with legs and ears.",
     }),
      shuffleOptions({
        question:
          "How did the woman react to the stone's transformation into a creature?",
        optionA: "She screamed in fear.",
        optionB: "She burst out laughing.",
        optionC: "She ran away.",
        correctAnswer: "She burst out laughing.",
     }),
      shuffleOptions({
        question:
          "What did the woman call the creature that emerged from the stone?",
        optionA: "A mischievous boy",
        optionB: "A naughty, mischievous boy",
        optionC: "The Bogey-Beast",
        correctAnswer: "The Bogey-Beast",
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
          "When the woman found the big black pot in the ditch, she wondered if it could be useful if she had something to ____ in it!",
        optionA: "eat",
        optionB: "put",
        optionC: "hide",
        correctAnswer: "put",
     }),
      shuffleOptions({
        question:
          "The woman was delighted to discover the pot was filled with shining gold coins, and she exclaimed, 'I do feel ____!'",
        optionA: "poor",
        optionB: "rich",
        optionC: "lonely",
        correctAnswer: "rich",
     }),
      shuffleOptions({
        question:
          "To transport the heavy treasure, the woman decided to tie the end of her shawl to it and drag it behind her like a ____.",
        optionA: "horse",
        optionB: "cart",
        optionC: "bag",
        correctAnswer: "cart",
     }),
      shuffleOptions({
        question:
          "She contemplated what to do with her newfound wealth, including the possibility of buying a grand house and living without doing any ____.",
        optionA: "work",
        optionB: "cooking",
        optionC: "gardening",
        correctAnswer: "work",
     }),
      shuffleOptions({
        question:
          "As the woman continued to drag the heavy treasure, she saw nothing but a great lump of ____.",
        optionA: "gold",
        optionB: "silver",
        optionC: "iron",
        correctAnswer: "iron",
     }),
      shuffleOptions({
        question:
          "The woman saw the lump of iron as real convenient and better than gold and silver because she wouldn't need to worry about it being ____.",
        optionA: "heavy",
        optionB: "stolen",
        optionC: "lost",
        correctAnswer: "stolen",
     }),
      shuffleOptions({
        question:
          "When the woman looked at her treasure after resting, she saw nothing but a big ____.",
        optionA: "pot of gold",
        optionB: "lump of silver",
        optionC: "stone",
        correctAnswer: "stone",
     }),
      shuffleOptions({
        question:
          "The woman thought the stone would be a change for the better and wanted to use it to stick open the ____.",
        optionA: "window",
        optionB: "gate",
        optionC: "door",
        correctAnswer: "gate",
     }),
      shuffleOptions({
        question:
          "As the woman reached her own cottage, she tried to unfasten her shawl from the stone, but it transformed into a ____ with lanky legs, ears, and a tail.",
        optionA: "flower",
        optionB: "treasure",
        optionC: "creature",
        correctAnswer: "creature",
     }),
      shuffleOptions({
        question:
          "The woman was delighted and considered herself lucky to have seen the 'Bogey-Beast' and had a ____ day.",
        optionA: "gloomy",
        optionB: "ordinary",
        optionC: "grand",
        correctAnswer: "grand",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The woman in the story found a pot of gold in a ditch.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The woman was sad, poor, and lonely.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The woman initially planned to put a flower in the pot.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The woman saw a lump of silver inside the pot.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The woman decided to carry the treasure in her arms.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The woman considered buying a grand house with the treasure.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The woman saw a great lump of iron during her journey.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The woman wanted to sell the lump of iron to become rich.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The woman saw a big stone at the end of her journey.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The stone in the story transformed into a creature.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
