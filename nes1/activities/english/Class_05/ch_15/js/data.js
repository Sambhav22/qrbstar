export const chapter = "Chapter -15: The Aged Mother";
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
          question: "What was the governor's cruel proclamation in the story?",
          optionA: "All young people should be banished.",
          optionB: "All aged people should be put to death.",
          optionC: "All farmers should surrender their lands.",
          correctAnswer: "All aged people should be put to death.",
        }),
      shuffleOptions({
          question:
            "How did the poor farmer react to the governor's order regarding the aged?",
          optionA: "He openly defied the governor.",
          optionB:
            "He prepared for the kindest mode of death as per the order.",
          optionC: "He fled the province with his mother.",
          correctAnswer:
            "He prepared for the kindest mode of death as per the order.",
        }),
      shuffleOptions({
          question:
            "What did the poor farmer carry on his journey up the mountain?",
          optionA: "A sword and armor.",
          optionB: "Brown rice, a cloth bundle, and a gourd of water.",
          optionC: "Gold and jewels.",
          correctAnswer: "Brown rice, a cloth bundle, and a gourd of water.",
        }),
      shuffleOptions({
          question: "How did the old mother help her son on the mountain path?",
          optionA: "She carried some of the load for him.",
          optionB: "She marked the path with twigs.",
          optionC: "She warned him of dangers ahead.",
          correctAnswer: "She marked the path with twigs.",
        }),
      shuffleOptions({
          question:
            "What was the son's reaction when he reached the summit of the mountain?",
          optionA: "He rejoiced and celebrated.",
          optionB:
            "He gently released his burden and prepared a place for his mother.",
          optionC: "He decided to abandon his mother.",
          correctAnswer:
            "He gently released his burden and prepared a place for his mother.",
        }),
      shuffleOptions({
          question:
            "What did the mother instruct her son regarding the path down the mountain?",
          optionA: "To follow the moonlight.",
          optionB: "To look carefully for piles of twigs to guide him.",
          optionC: "To listen for the sound of water.",
          correctAnswer: "To look carefully for piles of twigs to guide him.",
        }),
      shuffleOptions({
          question:
            "How did the son hide his mother when the governor's unreasonable order for a rope of ashes arrived?",
          optionA: "He buried her in the backyard.",
          optionB:
            "He concealed her in a walled closet beneath the kitchen floor.",
          optionC: "He disguised her as a servant.",
          correctAnswer:
            "He concealed her in a walled closet beneath the kitchen floor.",
        }),
      shuffleOptions({
          question: "What was the governor's demand for the rope of ashes?",
          optionA: "He wanted it as a decoration.",
          optionB: "He needed it for a special ceremony.",
          optionC: "It was an unreasonable order to showcase his power.",
          correctAnswer: "It was an unreasonable order to showcase his power.",
        }),
      shuffleOptions({
          question: "How did the son create the rope of ashes?",
          optionA: "He collected ashes from the fireplace.",
          optionB:
            "He burned a rope made of twisted straw on a windless night.",
          optionC: "He tricked the governor with a fake rope.",
          correctAnswer:
            "He burned a rope made of twisted straw on a windless night.",
        }),
      shuffleOptions({
          question: "What was the final outcome of the story?",
          optionA: "The governor became more tyrannical.",
          optionB:
            "The cruel law was abolished, and the elderly could lead a dignified life.",
          optionC: "The son was punished for disobedience.",
          correctAnswer:
            "The cruel law was abolished, and the elderly could lead a dignified life.",
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
            "Just at sunset, the poor farmer took a quantity of ______________, which was the principal food for the poor.",
          optionA: "White bread",
          optionB: "Brown rice",
          optionC: "Cornmeal",
          correctAnswer: "Brown rice",
        }),
      shuffleOptions({
          question:
            "The governor's proclamation ordered the immediate death of all ______________.",
          optionA: "Young people",
          optionB: "Farmers",
          optionC: "Aged people",
          correctAnswer: "Aged people",
        }),
      shuffleOptions({
          question:
            "The mountain the youth climbed was known as ______________.",
          optionA: "Everest",
          optionB: "Obatsuyama",
          optionC: "Kilimanjaro",
          correctAnswer: "Obatsuyama",
        }),
      shuffleOptions({
          question:
            "The old mother marked the path with tiny piles of ______________.",
          optionA: "Stones",
          optionB: "Leaves",
          optionC: "Twigs",
          correctAnswer: "Twigs",
        }),
      shuffleOptions({
          question:
            "At the summit, the youth prepared a place for his old mother using fallen ______________.",
          optionA: "Feathers",
          optionB: "Pine needles",
          optionC: "Hay",
          correctAnswer: "Pine needles",
        }),
      shuffleOptions({
          question:
            "The son hid his mother beneath the kitchen floor in a walled closet for ______________.",
          optionA: "Clothes",
          optionB: "Food",
          optionC: "Gold",
          correctAnswer: "Food",
        }),
      shuffleOptions({
          question:
            "The governor demanded that his subjects present him with a ______________ made of ashes.",
          optionA: "Necklace",
          optionB: "Rope",
          optionC: "Crown",
          correctAnswer: "Rope",
        }),
      shuffleOptions({
          question:
            "In response to the governor's order, the son made a rope of twisted ______________.",
          optionA: "Straw",
          optionB: "Hemp",
          optionC: "Silk",
          correctAnswer: "Straw",
        }),
      shuffleOptions({
          question: "The youth burned the rope on a ______________ night.",
          optionA: "Stormy",
          optionB: "Windless",
          optionC: "Rainy",
          correctAnswer: "Windless",
        }),
      shuffleOptions({
          question:
            "The governor praised the youth's wit but demanded to know where he had obtained his ______________.",
          optionA: "Wealth",
          optionB: "Wisdom",
          optionC: "Strength",
          correctAnswer: "Wisdom",
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
            "The poor farmer and his aged mother lived at the foot of the mountain.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The despotic governor's proclamation ordered the immediate death of all young people.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The poor farmer prepared for what was considered the kindest mode of death.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The youth carried a bundle of white rice and a jug of water up the mountain.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The old mother marked the mountain path with fallen leaves.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The youth reached the summit and abandoned his mother.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The son hid his mother in a walled closet beneath the kitchen floor.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The governor demanded a rope of ashes from his subjects.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The son made a rope of twisted straw to fulfill the governor's demand.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The governor praised the youth's wealth and strength.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
