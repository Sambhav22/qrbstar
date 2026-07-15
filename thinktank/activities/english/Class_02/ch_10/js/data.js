export const chapter = "Chapter -10: The Fake Lion ";
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
          "What was Guru Gobind Singh's primary motive during the Mughal rule in India?",
        optionA: "To promote Mughal traditions",
        optionB: "To make people brave in the face of oppression",
        optionC: "To support harsh treatment of Hindus",
        correctAnswer: "To make people brave in the face of oppression",
     }),
      shuffleOptions({
        question:
          "How did Guru Gobind Singh inspire his followers in the text?",
        optionA: "Through lectures and speeches",
        optionB: "By enacting a drama with a lion's skin on a donkey",
        optionC: "Through written proclamations",
        correctAnswer: "By enacting a drama with a lion's skin on a donkey",
     }),
      shuffleOptions({
        question:
          "What happened when the donkey, disguised as a lion, entered the town?",
        optionA: "People gathered to admire the lion",
        optionB: "Chaos ensued, and people ran away in fear",
        optionC: "Everyone welcomed the lion",
        correctAnswer: "Chaos ensued, and people ran away in fear",
     }),
      shuffleOptions({
        question:
          "How did the man with a drum of oil react to the sight of the 'lion'?",
        optionA: "He stood still in amazement",
        optionB: "He threw the drum at the lion",
        optionC:
          "He ran away in fright, causing the drum to fall and spill oil",
        correctAnswer:
          "He ran away in fright, causing the drum to fall and spill oil",
     }),
      shuffleOptions({
        question:
          "What did the woman carrying water do when she saw the 'lion'?",
        optionA: "She calmly continued walking",
        optionB: "She threw down the pitcher and ran away",
        optionC: "She approached the lion to investigate",
        correctAnswer: "She threw down the pitcher and ran away",
     }),
      shuffleOptions({
        question: "How did the man with the loose dhoti react to the 'lion'?",
        optionA: "He confronted the lion",
        optionB: "He fixed his dhoti and continued walking",
        optionC: "He ran away in terror, leaving his dhoti behind",
        correctAnswer: "He ran away in terror, leaving his dhoti behind",
     }),
      shuffleOptions({
        question:
          "What did Guru Gobind Singh say to his followers after the donkey incident?",
        optionA: "Cowards never win.",
        optionB: "Fear is a sign of weakness.",
        optionC:
          "Cowards die a hundred times before they actually die, but the brave die only once and still remain immortal.",
        correctAnswer:
          "Cowards die a hundred times before they actually die, but the brave die only once and still remain immortal.",
     }),
      shuffleOptions({
        question:
          "How did the people who initially ran away feel when they discovered the truth about the 'lion'?",
        optionA: "Proud and victorious",
        optionB: "Embarrassed",
        optionC: "Indifferent",
        correctAnswer: "Embarrassed",
     }),
      shuffleOptions({
        question:
          "What did Guru Gobind Singh compare cowardice to in his message to the people?",
        optionA: "A dead person",
        optionB: "A fleeting emotion",
        optionC: "A temporary setback",
        correctAnswer: "A dead person",
     }),
      shuffleOptions({
        question:
          "What did the people shout in response to Guru Gobind Singh's question about how they wanted to live?",
        optionA: "Like donkeys!",
        optionB: "Cautiously!",
        optionC: "Like lions!",
        correctAnswer: "Like lions!",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Guru Gobind Singh was the _____ Sikh Guru.",
        optionA: "Ninth",
        optionB: "Tenth",
        optionC: "Eleventh",
        correctAnswer: "Tenth",
     }),
      shuffleOptions({
        question:
          "Guru Gobind Singh aimed to make people brave in the face of oppression during the rule of the _____ in India.",
        optionA: "British",
        optionB: "Mughals",
        optionC: "Persians",
        correctAnswer: "Mughals",
     }),
      shuffleOptions({
        question:
          "To inspire his followers, Guru Gobind Singh enacted a drama involving a lion's skin on a _____.",
        optionA: "Horse",
        optionB: "Donkey",
        optionC: "Tiger",
        correctAnswer: "Donkey",
     }),
      shuffleOptions({
        question:
          "The people in the town ran away in fear when they saw the donkey disguised as a _____.",
        optionA: "Tiger",
        optionB: "Lion",
        optionC: "Leopard",
        correctAnswer: "Lion",
     }),
      shuffleOptions({
        question:
          "The man with a drum of oil on his head spilled the oil when he tried to run away in _____.",
        optionA: "Joy",
        optionB: "Fright",
        optionC: "Excitement",
        correctAnswer: "Fright",
     }),
      shuffleOptions({
        question:
          "The woman carrying water threw down her pitcher and ran away in _____ when she saw the 'lion'.",
        optionA: "Terror",
        optionB: "Amusement",
        optionC: "Curiosity",
        correctAnswer: "Terror",
     }),
      shuffleOptions({
        question:
          "Guru Gobind Singh compared cowardice to being like a _____ person in his message to the people.",
        optionA: "Wise",
        optionB: "Dead",
        optionC: "Energetic",
        correctAnswer: "Dead",
     }),
      shuffleOptions({
        question:
          "The people who initially ran away felt _____ when they discovered the truth about the 'lion'.",
        optionA: "Proud",
        optionB: "Embarrassed",
        optionC: "Excited",
        correctAnswer: "Embarrassed",
     }),
      shuffleOptions({
        question:
          "Guru Gobind Singh asked his followers if they wanted to live like _____ or _____.",
        optionA: "Tigers, Elephants",
        optionB: "Lions, Donkeys",
        optionC: "Wolves, Horses",
        correctAnswer: "Lions, Donkeys",
     }),
      shuffleOptions({
        question:
          "According to Guru Gobind Singh, cowards die a hundred times before they actually die, but the brave die only once and still remain _____.",
        optionA: "Mortal",
        optionB: "Immortal",
        optionC: "Ethereal",
        correctAnswer: "Immortal",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Guru Gobind Singh was the ninth Sikh Guru.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Guru Gobind Singh aimed to make people fearful in the face of oppression during the Mughal rule in India.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Guru Gobind Singh enacted a drama involving a tiger's skin on a horse to inspire his followers.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The people in the town welcomed the disguised lion without any fear.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The man with a drum of oil on his head remained calm when he saw the 'lion'.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The woman carrying water approached the 'lion' to investigate.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Guru Gobind Singh compared cowardice to being like a living person in his message to the people.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The people who initially ran away felt proud and victorious when they discovered the truth about the 'lion'.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Guru Gobind Singh asked his followers if they wanted to live like wolves or horses.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Cowards die only once, according to Guru Gobind Singh's message.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
