export const chapter = "Chapter - 5: Seasons";
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
          question: "What are the three main seasons mentioned in the text?",
          optionA: "Hot, Cold, Wet",
          optionB: "Summer, Winter, Rainy",
          optionC: "Autumn, Spring, Summer",
          correctAnswer: "Summer, Winter, Rainy",
         }),
      shuffleOptions({
          question: "Which season is described as very hot in the text?",
          optionA: "Winter",
          optionB: "Rainy",
          optionC: "Summer",
          correctAnswer: "Summer",
         }),
      shuffleOptions({
          question:
            "What type of clothes do people like to wear during the summer season?",
          optionA: "Woollen clothes",
          optionB: "Cotton clothes",
          optionC: "Leather clothes",
          correctAnswer: "Cotton clothes",
         }),
      shuffleOptions({
          question:
            "What kind of drinks do people enjoy during the summer season?",
          optionA: "Hot chocolate",
          optionB: "Chilled drinks",
          optionC: "Hot coffee",
          correctAnswer: "Chilled drinks",
         }),
      shuffleOptions({
          question: "Which season is described as very cold in the text?",
          optionA: "Rainy",
          optionB: "Summer",
          optionC: "Winter",
          correctAnswer: "Winter",
         }),
      shuffleOptions({
          question:
            "What type of clothes do people like to wear during the winter season?",
          optionA: "Raincoats",
          optionB: "Leather clothes",
          optionC: "Woollen clothes",
          correctAnswer: "Woollen clothes",
         }),
      shuffleOptions({
          question:
            "What kind of drinks do people enjoy during the winter season?",
          optionA: "Iced tea",
          optionB: "Hot chocolate and drinks",
          optionC: "Chilled lemonade",
          correctAnswer: "Hot chocolate and drinks",
         }),
      shuffleOptions({
          question: "What does the rainy season bring according to the text?",
          optionA: "Sunshine",
          optionB: "Raincoats and gumboots",
          optionC: "Snow",
          correctAnswer: "Raincoats and gumboots",
         }),
      shuffleOptions({
          question:
            "What type of food do people like to enjoy during the rainy season?",
          optionA: "Ice cream",
          optionB: "Tea and pakoras",
          optionC: "Grilled cheese sandwiches",
          correctAnswer: "Tea and pakoras",
         }),
      shuffleOptions({
          question:
            "How do changes in seasons affect people's clothing and eating habits according to the text?",
          optionA: "They have no effect on clothing and eating habits.",
          optionB: "They don't affect clothing but affect eating habits.",
          optionC: "They affect both clothing and eating habits.",
          correctAnswer: "They affect both clothing and eating habits.",
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
            "Summer season is very ___1___. In summers, we like to wear ___2___ clothes and drink cool and chilled ___3___.",
          optionA: "hot, woollen, tea",
          optionB: "cold, cotton, coffee",
          optionC: "hot, cotton, drinks",
          correctAnswer: "hot, cotton, drinks",
         }),
      shuffleOptions({
          question:
            "Winter season is very __1__. In winters, we like to wear ___2___ clothes and drink ___3___ and drinks.",
          optionA: "hot, leather, lemonade",
          optionB: "cold, woollen, hot chocolate",
          optionC: "rainy, raincoats, chilled drinks",
          correctAnswer: "cold, woollen, hot chocolate",
         }),
      shuffleOptions({
          question:
            "Rainy season brings ___1___ all over. In rains, we like to wear raincoats and ___2___. We enjoy ___3___ and pakoras.",
          optionA: "sunshine, gumboots, ice cream",
          optionB: "rain, leather shoes, grilled cheese sandwiches",
          optionC: "rain, gumboots, tea",
          correctAnswer: "rain, gumboots, tea",
         }),
      shuffleOptions({
          question:
            "The process of growing plants from ___1___ is called germination. Plants make their own food through the process of ___2___. ___3___ is the scattering of seeds to far off places from the parent plants.",
          optionA: "leaves, respiration, evaporation",
          optionB: "seeds, photosynthesis, dispersal",
          optionC: "roots, digestion, growth",
          correctAnswer: "seeds, photosynthesis, dispersal",
         }),
      shuffleOptions({
          question: "Tea was discovered in ___1___.",
          optionA: "Assam",
          optionB: "Nepal",
          optionC: "China",
          correctAnswer: "China",
         }),
      shuffleOptions({
          question: "In summers, people like to ___1___ to keep cool.",
          optionA: "wear heavy jackets",
          optionB: "drink hot coffee",
          optionC: "wear cotton clothes",
          correctAnswer: "wear cotton clothes",
         }),
      shuffleOptions({
          question:
            "During the rainy season, people enjoy ___1___ and ___2___.",
          optionA: "ice cream, lemonade",
          optionB: "tea, pakoras",
          optionC: "hot chocolate, iced tea",
          correctAnswer: "tea, pakoras",
         }),
      shuffleOptions({
          question:
            "Winter season is characterized by ___1___ temperatures, so people prefer to wear ___2___ clothes to stay warm.",
          optionA: "hot, leather",
          optionB: "cold, woollen",
          optionC: "rainy, raincoats",
          correctAnswer: "cold, woollen",
         }),
      shuffleOptions({
          question:
            "Summer season is known for its ___1___ weather, and people like to drink ___2___ to beat the heat.",
          optionA: "cold, hot chocolate",
          optionB: "hot, chilled drinks",
          optionC: "rainy, lemonade",
          correctAnswer: "hot, chilled drinks",
         }),
      shuffleOptions({
          question:
            "During the rainy season, people often wear ___1___ to stay dry and protect themselves from ___2___.",
          optionA: "sunglasses, heat",
          optionB: "raincoats, gumboots",
          optionC: "woollen clothes, snow",
          correctAnswer: "raincoats, gumboots",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Summer season is characterized by very cold weather.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "In winters, people prefer to wear cotton clothes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Rainy season brings sunshine all over.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "During summers, it is recommended to drink hot chocolate.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Tea was discovered in Nepal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Winter season is known for its mild temperatures.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "In the rainy season, people often enjoy ice cream and lemonade.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Summer season is characterized by hot weather, and people like to drink chilled drinks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "During the winter season, people prefer to wear woollen clothes to stay warm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Rainy season is known for bringing snow all over.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
