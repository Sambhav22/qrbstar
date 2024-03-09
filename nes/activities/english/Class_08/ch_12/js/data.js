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
          optionA: "a) He scolded the man for his foolishness.",
          optionB: "b) He ignored the man and continued his journey.",
          optionC: "c) He was impressed by the man's wisdom.",
          correctAnswer: "a) He scolded the man for his foolishness.",
        }),
      shuffleOptions({
          question:
            "How did the Minister reward the man for his wise response about the pit?",
          optionA: "a) He gave the man money.",
          optionB: "b) He ordered his servants to take the man to his house.",
          optionC: "c) He offered the man a job in the royal stables.",
          correctAnswer:
            "b) He ordered his servants to take the man to his house.",
        }),
      shuffleOptions({
          question:
            "How did the labourer eventually become the Prime Minister's counselor?",
          optionA: "a) He showed exceptional skills in farming.",
          optionB:
            "b) He demonstrated wisdom in a conversation with the Minister.",
          optionC: "c) He won a competition held by the king.",
          correctAnswer:
            "b) He demonstrated wisdom in a conversation with the Minister.",
        }),
      shuffleOptions({
          question:
            "What was the Minister known for before he became the Prime Minister?",
          optionA: "a) Great wisdom.",
          optionB: "b) Wile and cunning.",
          optionC: "c) Brightness and honesty.",
          correctAnswer: "b) Wile and cunning.",
        }),
      shuffleOptions({
          question:
            "What made the courtiers suspicious about the Minister's sudden enlightenment?",
          optionA: "a) His quick promotion.",
          optionB: "b) His humble demeanor.",
          optionC: "c) His generosity towards the poor.",
          correctAnswer: "a) His quick promotion.",
        }),
      shuffleOptions({
          question:
            "How did the courtiers discover the source of the Prime Minister's wisdom?",
          optionA: "a) They overheard a conversation.",
          optionB: "b) They bribed a worker at the Prime Minister's mansion.",
          optionC: "c) They found a secret document.",
          correctAnswer:
            "b) They bribed a worker at the Prime Minister's mansion.",
        }),
      shuffleOptions({
          question:
            "Why did the Prime Minister decide to get rid of the wise man who had been his counselor?",
          optionA: "a) The wise man became a liability.",
          optionB: "b) The wise man betrayed him.",
          optionC: "c) The wise man demanded a higher position.",
          correctAnswer: "b) The wise man betrayed him.",
        }),
      shuffleOptions({
          question:
            "How did the Prime Minister attempt to eliminate the wise man?",
          optionA: "a) He framed him for a crime.",
          optionB: "b) He sent him on a dangerous mission.",
          optionC: "c) He challenged him to a duel.",
          correctAnswer: "b) He sent him on a dangerous mission.",
        }),
      shuffleOptions({
          question:
            "What did the wise man unknowingly deliver to the State Executioner's son?",
          optionA: "a) A love letter.",
          optionB: "b) A death warrant.",
          optionC: "c) A royal decree.",
          correctAnswer: "b) A death warrant.",
        }),
      shuffleOptions({
          question:
            "How did the Prime Minister's son outsmart his father in the end?",
          optionA: "a) He revealed the truth to the wise man.",
          optionB: "b) He switched the letters to save the wise man.",
          optionC: "c) He confronted his father about the plan.",
          correctAnswer: "b) He switched the letters to save the wise man.",
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
          optionA: "a) observe",
          optionB: "b) analyze",
          optionC: "c) criticize",
          correctAnswer: "a) observe",
        }),
      shuffleOptions({
          question:
            "The man digging a pit explained that the pit was on the roadside, and those on the ________ path wouldn't fall into it.",
          optionA: "a) straight",
          optionB: "b) narrow",
          optionC: "c) winding",
          correctAnswer: "a) straight",
        }),
      shuffleOptions({
          question:
            "The Minister was impressed by the man's response and ordered his servants to take the man to his house to ________ him.",
          optionA: "a) entertain",
          optionB: "b) clothe",
          optionC: "c) scold",
          correctAnswer: "b) clothe",
        }),
      shuffleOptions({
          question:
            "The wise man became the Minister's counselor, and his counsels were ________ in state affairs.",
          optionA: "a) effective",
          optionB: "b) negligible",
          optionC: "c) disruptive",
          correctAnswer: "a) effective",
        }),
      shuffleOptions({
          question:
            "The courtiers were suspicious of the Minister's sudden enlightenment, especially due to his quick ________.",
          optionA: "a) demotion",
          optionB: "b) promotion",
          optionC: "c) resignation",
          correctAnswer: "b) promotion",
        }),
      shuffleOptions({
          question:
            "The courtiers discovered the source of the Prime Minister's wisdom by bribing a worker at the Prime Minister's ________.",
          optionA: "a) office",
          optionB: "b) mansion",
          optionC: "c) garden",
          correctAnswer: "b) mansion",
        }),
      shuffleOptions({
          question:
            "The Prime Minister decided to get rid of the wise man as he feared he could become a source of ________ and shame.",
          optionA: "a) humility",
          optionB: "b) disgrace",
          optionC: "c) honor",
          correctAnswer: "b) disgrace",
        }),
      shuffleOptions({
          question:
            "The Prime Minister attempted to eliminate the wise man by sending him on a dangerous ________.",
          optionA: "a) journey",
          optionB: "b) mission",
          optionC: "c) adventure",
          correctAnswer: "b) mission",
        }),
      shuffleOptions({
          question:
            "The wise man unknowingly delivered a ________ to the State Executioner's son instead of the intended letter.",
          optionA: "a) love letter",
          optionB: "b) death warrant",
          optionC: "c) royal decree",
          correctAnswer: "b) death warrant",
        }),
      shuffleOptions({
          question:
            "The Prime Minister's son outsmarted his father by switching the letters, saving the wise man from his own ________.",
          optionA: "a) plan",
          optionB: "b) trap",
          optionC: "c) mistake",
          correctAnswer: "a) plan",
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
