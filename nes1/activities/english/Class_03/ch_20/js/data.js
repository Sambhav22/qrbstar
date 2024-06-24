export const chapter = "Chapter -20: The Stance";
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
          question: "What task did the farmer need money for?",
          optionA: "Buying a new donkey",
          optionB: "Selling his farm",
          optionC: "Domestic task",
          correctAnswer: "Domestic task",
        }),
      shuffleOptions({
          question:
            "Why did the farmer and his son walk slowly instead of riding the donkey?",
          optionA: "They wanted to look fresh and healthy",
          optionB: "The donkey was too tired to carry them",
          optionC: "They enjoyed walking",
          correctAnswer: "They wanted to look fresh and healthy",
        }),
      shuffleOptions({
          question:
            "What did a pedestrian comment when he saw the farmer and his son walking?",
          optionA:
            "What stupidity! They are walking when they could as well ride.",
          optionB: "What a beautiful donkey!",
          optionC: "They should run instead of walking.",
          correctAnswer:
            "What stupidity! They are walking when they could as well ride.",
        }),
      shuffleOptions({
          question: "Why did the farmer ask his son to ride the donkey?",
          optionA: "Because the son was tired of walking",
          optionB: "To avoid being called stupid",
          optionC: "To show off to the passersby",
          correctAnswer: "To avoid being called stupid",
        }),
      shuffleOptions({
          question:
            "What did the group of women remark when they saw the son riding the donkey?",
          optionA:
            "Look at this young fool! He rides the donkey when the old father walks.",
          optionB: "What a strong donkey!",
          optionC: "They are doing a great job.",
          correctAnswer:
            "Look at this young fool! He rides the donkey when the old father walks.",
        }),
      shuffleOptions({
          question:
            "Why did the farmer himself ride the donkey after his son was mocked?",
          optionA: "To avoid embarrassment",
          optionB: "To show his son how to ride a donkey",
          optionC: "Because he wanted to rest",
          correctAnswer: "To avoid embarrassment",
        }),
      shuffleOptions({
          question:
            "What did the vendor comment when he saw the farmer riding the donkey?",
          optionA: "Look at the old fool! He rides while his poor son walks.",
          optionB: "What a beautiful day!",
          optionC: "They are doing a great job.",
          correctAnswer:
            "Look at the old fool! He rides while his poor son walks.",
        }),
      shuffleOptions({
          question:
            "Why did the farmer and his son climb down from the donkey and take a new stance?",
          optionA: "Because they were tired",
          optionB:
            "Because they heard a comment about selling the donkey's hide",
          optionC: "Because they wanted to show off",
          correctAnswer:
            "Because they heard a comment about selling the donkey's hide",
        }),
      shuffleOptions({
          question:
            "What did the farmer and his son end up doing when they entered the market?",
          optionA: "They rode the donkey together",
          optionB: "They walked alongside the donkey",
          optionC: "They carried the donkey",
          correctAnswer: "They carried the donkey",
        }),
      shuffleOptions({
          question:
            "What decision did the farmer make at the end of the story?",
          optionA: "To buy a new donkey",
          optionB: "To sell the donkey",
          optionC: "To keep walking regardless of others' opinions",
          correctAnswer: "To keep walking regardless of others' opinions",
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
          question: "What task did the farmer need money for?",
          optionA: "Buying a new donkey",
          optionB: "Selling his farm",
          optionC: "Domestic task",
          correctAnswer: "Domestic task",
        }),
      shuffleOptions({
          question:
            "Why did the farmer and his son walk slowly instead of riding the donkey?",
          optionA: "They wanted to look fresh and healthy",
          optionB: "The donkey was too tired to carry them",
          optionC: "They enjoyed walking",
          correctAnswer: "They wanted to look fresh and healthy",
        }),
      shuffleOptions({
          question:
            "What did a pedestrian comment when he saw the farmer and his son walking?",
          optionA:
            "What stupidity! They are walking when they could as well ride.",
          optionB: "What a beautiful donkey!",
          optionC: "They should run instead of walking.",
          correctAnswer:
            "What stupidity! They are walking when they could as well ride.",
        }),
      shuffleOptions({
          question: "Why did the farmer ask his son to ride the donkey?",
          optionA: "Because the son was tired of walking",
          optionB: "To avoid being called stupid",
          optionC: "To show off to the passersby",
          correctAnswer: "To avoid being called stupid",
        }),
      shuffleOptions({
          question:
            "What did the group of women remark when they saw the son riding the donkey?",
          optionA:
            "Look at this young fool! He rides the donkey when the old father walks.",
          optionB: "What a strong donkey!",
          optionC: "They are doing a great job.",
          correctAnswer:
            "Look at this young fool! He rides the donkey when the old father walks.",
        }),
      shuffleOptions({
          question:
            "Why did the farmer himself ride the donkey after his son was mocked?",
          optionA: "To avoid embarrassment",
          optionB: "To show his son how to ride a donkey",
          optionC: "Because he wanted to rest",
          correctAnswer: "To avoid embarrassment",
        }),
      shuffleOptions({
          question:
            "What did the vendor comment when he saw the farmer riding the donkey?",
          optionA: "Look at the old fool! He rides while his poor son walks.",
          optionB: "What a beautiful day!",
          optionC: "They are doing a great job.",
          correctAnswer:
            "Look at the old fool! He rides while his poor son walks.",
        }),
      shuffleOptions({
          question:
            "Why did the farmer and his son climb down from the donkey and take a new stance?",
          optionA: "Because they were tired",
          optionB:
            "Because they heard a comment about selling the donkey's hide",
          optionC: "Because they wanted to show off",
          correctAnswer:
            "Because they heard a comment about selling the donkey's hide",
        }),
      shuffleOptions({
          question:
            "What did the farmer and his son end up doing when they entered the market?",
          optionA: "They rode the donkey together",
          optionB: "They walked alongside the donkey",
          optionC: "They carried the donkey",
          correctAnswer: "They carried the donkey",
        }),
      shuffleOptions({
          question:
            "What decision did the farmer make at the end of the story?",
          optionA: "To buy a new donkey",
          optionB: "To sell the donkey",
          optionC: "To keep walking regardless of others' opinions",
          correctAnswer: "To keep walking regardless of others' opinions",
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
          question: "The farmer needed money for buying a new house.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The farmer and his son rode the donkey to the market.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "A pedestrian remarked that the farmer and his son were smart for walking instead of riding the donkey.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The farmer's son rode the donkey after the farmer was mocked by a group of women.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The farmer rode the donkey after his son was mocked by a vendor.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The farmer and his son took a new stance after hearing a comment about selling the donkey's hide.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The farmer and his son ended up carrying the donkey when they entered the market.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The farmer decided to sell the donkey at the end of the story.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The farmer and his son cared about the opinions of others throughout the story.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The farmer and his son learned that they cannot please everyone.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
