export const chapter = "Chapter -5: Why Was India Lost?";
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
            'Why does the reader ask, "Why has England been able to take India, and why is she able to retain it?"',
          optionA: "Due to personal curiosity",
          optionB: "To challenge Gandhiji's views",
          optionC: "Seeking historical information",
          correctAnswer: "To challenge Gandhiji's views",
        }),
      shuffleOptions({
          question:
            "According to Gandhiji, why did the English originally come to India?",
          optionA: "To establish a kingdom",
          optionB: "For the purpose of trade",
          optionC: "To assist the Indian people",
          correctAnswer: "For the purpose of trade",
        }),
      shuffleOptions({
          question:
            "Who does Gandhiji hold responsible for the English presence in India?",
          optionA: "Indian princes",
          optionB: "English merchants",
          optionC: "The Company Bahadur",
          correctAnswer: "Indian princes",
        }),
      shuffleOptions({
          question:
            "According to Gandhiji, why is blaming the English for their presence in India useless?",
          optionA: "They had superior weaponry",
          optionB: "India welcomed and assisted them",
          optionC: "They forcefully occupied India",
          correctAnswer: "India welcomed and assisted them",
        }),
      shuffleOptions({
          question:
            'What does Gandhiji mean by "Napoleon is said to have described the English as a nation of shopkeepers"?',
          optionA: "England is a nation of warriors",
          optionB: "England is a nation focused on commerce",
          optionC: "England is a nation of intellectuals",
          correctAnswer: "England is a nation focused on commerce",
        }),
      shuffleOptions({
          question:
            "Why does Gandhiji claim that the sword is entirely useless for holding India?",
          optionA: "India had a powerful army",
          optionB: "Indians did not resist",
          optionC: "India is voluntarily kept by its people",
          correctAnswer: "India is voluntarily kept by its people",
        }),
      shuffleOptions({
          question:
            "What is the primary reason for England retaining India, according to Gandhiji?",
          optionA: "Military strength",
          optionB: "Political dominance",
          optionC: "Commerce and trade",
          correctAnswer: "Commerce and trade",
        }),
      shuffleOptions({
          question:
            "How does Gandhiji describe the English relationship with the Transvaal?",
          optionA: "Based on military conquest",
          optionB: "Driven by political ideology",
          optionC: "Dependent on economic interests",
          correctAnswer: "Dependent on economic interests",
        }),
      shuffleOptions({
          question:
            "What, according to Gandhiji, is the driving force behind the English presence in Japan?",
          optionA: "Military alliances",
          optionB: "Cultural exchange",
          optionC: "Expanding commerce",
          correctAnswer: "Expanding commerce",
        }),
      shuffleOptions({
          question:
            "Why does Gandhiji argue against blaming the English for their presence in India?",
          optionA: "To justify their actions",
          optionB: "To perpetuate their power",
          optionC: "To avoid conflict",
          correctAnswer: "To perpetuate their power",
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
            'The affectionate term "Bapu" is used to refer to Mahatma Gandhi as a sign of ____________ admiration.',
          optionA: "Casual",
          optionB: "Genuine",
          optionC: "Superficial",
          correctAnswer: "Genuine",
        }),
      shuffleOptions({
          question:
            "According to Gandhiji, the English merchants originally came to India for the purpose of ____________.",
          optionA: "Conquest",
          optionB: "Trade",
          optionC: "Diplomacy",
          correctAnswer: "Trade",
        }),
      shuffleOptions({
          question:
            "The Company Bahadur was initially involved in both ____________ and war, which played a role in its interaction with India.",
          optionA: "Commerce",
          optionB: "Religion",
          optionC: "Politics",
          correctAnswer: "Commerce",
        }),
      shuffleOptions({
          question:
            "Gandhiji compares the acceptance of the Company's officers in India to an individual buying and consuming ____________.",
          optionA: "Water",
          optionB: "Bhang",
          optionC: "Food",
          correctAnswer: "Bhang",
        }),
      shuffleOptions({
          question:
            "According to Gandhiji, blaming the English for their presence in India is futile, as India willingly ____________ them.",
          optionA: "Embraces",
          optionB: "Rejects",
          optionC: "Fights",
          correctAnswer: "Embraces",
        }),
      shuffleOptions({
          question:
            "Gandhiji argues that the sword is entirely useless for holding India because India is voluntarily kept by its own ____________.",
          optionA: "Leaders",
          optionB: "People",
          optionC: "Warriors",
          correctAnswer: "People",
        }),
      shuffleOptions({
          question:
            "The English, according to Gandhiji, retain India primarily for the sake of ____________.",
          optionA: "Politics",
          optionB: "Commerce",
          optionC: "Religion",
          correctAnswer: "Commerce",
        }),
      shuffleOptions({
          question:
            "Mr. Gladstone's decision on the Transvaal was influenced by whether it offered ____________ attractions.",
          optionA: "Political",
          optionB: "Cultural",
          optionC: "Economic",
          correctAnswer: "Economic",
        }),
      shuffleOptions({
          question:
            "Gandhiji states that many problems can be solved by remembering that money is the English's ____________.",
          optionA: "Asset",
          optionB: "God",
          optionC: "Curse",
          correctAnswer: "God",
        }),
      shuffleOptions({
          question:
            "The English wish to convert the whole world into a vast market for their goods, making ____________ a driving force for their actions.",
          optionA: "Diplomacy",
          optionB: "Expansion",
          optionC: "Isolation",
          correctAnswer: "Expansion",
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
            "Gandhiji argues that the English merchants initially came to India for political reasons.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "According to Gandhiji, blaming the English for their presence in India is a meaningful approach.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Company Bahadur was primarily involved in commerce and war, according to Gandhiji.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Mr. Gladstone's decision on the Transvaal was solely influenced by political considerations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Gandhiji argues that the sword is an effective tool for holding India against its will.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The English retain India primarily for the sake of cultural dominance, as per Gandhiji's views.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Tenzing Norgay's birthplace was in Darjeeling, India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Gandhiji claims that money is not a significant factor in the English presence in India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The English wish to convert the whole world into a vast market for their goods, according to Gandhiji.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Gandhiji suggests that blaming the English for their presence in India perpetuates their power.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
