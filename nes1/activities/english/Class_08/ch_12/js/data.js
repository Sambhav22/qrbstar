export const chapter = "Chapter -12: The Crooked Path";
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
            "What was the Minister's initial reaction to the man digging a pit by the roadside?",
          optionA: "He scolded the man for his foolishness.",
          optionB: "He ignored the man and continued his journey.",
          optionC: "He was impressed by the man's wisdom.",
          correctAnswer: "He scolded the man for his foolishness.",
        }),
      shuffleOptions({
          question:
            "How did the Minister reward the man for his wise response about the pit?",
          optionA: "He gave the man money.",
          optionB: "He ordered his servants to take the man to his house.",
          optionC: "He offered the man a job in the royal stables.",
          correctAnswer:
            "He ordered his servants to take the man to his house.",
        }),
      shuffleOptions({
          question:
            "How did the labourer eventually become the Prime Minister's counselor?",
          optionA: "He showed exceptional skills in farming.",
          optionB:
            "He demonstrated wisdom in a conversation with the Minister.",
          optionC: "He won a competition held by the king.",
          correctAnswer:
            "He demonstrated wisdom in a conversation with the Minister.",
        }),
      shuffleOptions({
          question:
            "What was the Minister known for before he became the Prime Minister?",
          optionA: "Great wisdom.",
          optionB: "Wile and cunning.",
          optionC: "Brightness and honesty.",
          correctAnswer: "Wile and cunning.",
        }),
      shuffleOptions({
          question:
            "What made the courtiers suspicious about the Minister's sudden enlightenment?",
          optionA: "His quick promotion.",
          optionB: "His humble demeanor.",
          optionC: "His generosity towards the poor.",
          correctAnswer: "His quick promotion.",
        }),
      shuffleOptions({
          question:
            "How did the courtiers discover the source of the Prime Minister's wisdom?",
          optionA: "They overheard a conversation.",
          optionB: "They bribed a worker at the Prime Minister's mansion.",
          optionC: "They found a secret document.",
          correctAnswer:
            "They bribed a worker at the Prime Minister's mansion.",
        }),
      shuffleOptions({
          question:
            "Why did the Prime Minister decide to get rid of the wise man who had been his counselor?",
          optionA: "The wise man became a liability.",
          optionB: "The wise man betrayed him.",
          optionC: "The wise man demanded a higher position.",
          correctAnswer: "The wise man betrayed him.",
        }),
      shuffleOptions({
          question:
            "How did the Prime Minister attempt to eliminate the wise man?",
          optionA: "He framed him for a crime.",
          optionB: "He sent him on a dangerous mission.",
          optionC: "He challenged him to a duel.",
          correctAnswer: "He sent him on a dangerous mission.",
        }),
      shuffleOptions({
          question:
            "What did the wise man unknowingly deliver to the State Executioner's son?",
          optionA: "A love letter.",
          optionB: "A death warrant.",
          optionC: "A royal decree.",
          correctAnswer: "A death warrant.",
        }),
      shuffleOptions({
          question:
            "How did the Prime Minister's son outsmart his father in the end?",
          optionA: "He revealed the truth to the wise man.",
          optionB: "He switched the letters to save the wise man.",
          optionC: "He confronted his father about the plan.",
          correctAnswer: "He switched the letters to save the wise man.",
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
            "The Minister was riding his horse through the country to ________ how people lived.",
          optionA: "observe",
          optionB: "analyze",
          optionC: "criticize",
          correctAnswer: "observe",
        }),
      shuffleOptions({
          question:
            "The man digging a pit explained that the pit was on the roadside, and those on the ________ path wouldn't fall into it.",
          optionA: "straight",
          optionB: "narrow",
          optionC: "winding",
          correctAnswer: "straight",
        }),
      shuffleOptions({
          question:
            "The Minister was impressed by the man's response and ordered his servants to take the man to his house to ________ him.",
          optionA: "entertain",
          optionB: "clothe",
          optionC: "scold",
          correctAnswer: "clothe",
        }),
      shuffleOptions({
          question:
            "The wise man became the Minister's counselor, and his counsels were ________ in state affairs.",
          optionA: "effective",
          optionB: "negligible",
          optionC: "disruptive",
          correctAnswer: "effective",
        }),
      shuffleOptions({
          question:
            "The courtiers were suspicious of the Minister's sudden enlightenment, especially due to his quick ________.",
          optionA: "demotion",
          optionB: "promotion",
          optionC: "resignation",
          correctAnswer: "promotion",
        }),
      shuffleOptions({
          question:
            "The courtiers discovered the source of the Prime Minister's wisdom by bribing a worker at the Prime Minister's ________.",
          optionA: "office",
          optionB: "mansion",
          optionC: "garden",
          correctAnswer: "mansion",
        }),
      shuffleOptions({
          question:
            "The Prime Minister decided to get rid of the wise man as he feared he could become a source of ________ and shame.",
          optionA: "humility",
          optionB: "disgrace",
          optionC: "honor",
          correctAnswer: "disgrace",
        }),
      shuffleOptions({
          question:
            "The Prime Minister attempted to eliminate the wise man by sending him on a dangerous ________.",
          optionA: "journey",
          optionB: "mission",
          optionC: "adventure",
          correctAnswer: "mission",
        }),
      shuffleOptions({
          question:
            "The wise man unknowingly delivered a ________ to the State Executioner's son instead of the intended letter.",
          optionA: "love letter",
          optionB: "death warrant",
          optionC: "royal decree",
          correctAnswer: "death warrant",
        }),
      shuffleOptions({
          question:
            "The Prime Minister's son outsmarted his father by switching the letters, saving the wise man from his own ________.",
          optionA: "plan",
          optionB: "trap",
          optionC: "mistake",
          correctAnswer: "plan",
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
          question: "The Minister rewarded the man by giving him money.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The wise man became the Prime Minister's counselor because of his exceptional farming skills.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The courtiers were suspicious of the Minister's sudden promotion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Prime Minister attempted to eliminate the wise man by sending him on a peaceful mission.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The wise man unknowingly delivered a love letter to the State Executioner's son.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Prime Minister's son revealed the truth to the wise man about the switched letters.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The wise man fell into the pit he dug off the road.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Prime Minister decided to get rid of the wise man because he demanded a higher position.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The courtiers discovered the source of the Prime Minister's wisdom through a secret document.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The wise man's counsel was ineffective in state affairs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
