export const chapter = "Chapter -8: A Legend";
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
            "According to the legend, how did God initially create humans?",
          optionA: "With the need for work and cooperation",
          optionB: "Without the need for work and self-sufficiency",
          optionC: "With the ability to live forever",
          correctAnswer: "B) Without the need for work and self-sufficiency",
        }),
      shuffleOptions({
          question:
            "What did God observe when he looked at how people were living for the first time?",
          optionA: "They were happy and content",
          optionB: "They were quarrelling and cursing life",
          optionC: "They were working together harmoniously",
          correctAnswer: "B) They were quarrelling and cursing life",
        }),
      shuffleOptions({
          question:
            "Why did God decide to introduce the necessity of work for humans?",
          optionA: "To make them suffer from cold and hunger",
          optionB: "To bring them together and promote unity",
          optionC: "To test their ability to work independently",
          correctAnswer: "B) To bring them together and promote unity",
        }),
      shuffleOptions({
          question:
            "How did God expect humans to react to the uncertainty of their time of death?",
          optionA: "By living recklessly and pursuing short-term gains",
          optionB: "By cherishing the moments of life and helping each other",
          optionC: "By avoiding work and idling away their time",
          correctAnswer:
            "B) By cherishing the moments of life and helping each other",
        }),
      shuffleOptions({
          question:
            "What was the result of the introduction of sickness as a means to unite people?",
          optionA: "People became more compassionate and caring",
          optionB: "Sickness divided people even more",
          optionC: "The wealthy took better care of the sick",
          correctAnswer: "B) Sickness divided people even more",
        }),
      shuffleOptions({
          question:
            "Why did God send sickness among humans in the first place?",
          optionA: "To punish them for their sins",
          optionB: "To test their resilience and strength",
          optionC: "To encourage compassion and mutual help",
          correctAnswer: "C) To encourage compassion and mutual help",
        }),
      shuffleOptions({
          question:
            "How did the strongest individuals and their descendants behave after the introduction of sickness?",
          optionA: "They became more compassionate and caring",
          optionB: "They forced others to work for them, even when sick",
          optionC: "They focused on their own well-being",
          correctAnswer:
            "B) They forced others to work for them, even when sick",
        }),
      shuffleOptions({
          question:
            "Why did some people consider illnesses infectious, according to the legend?",
          optionA: "To justify their fear of the sick",
          optionB: "To promote quarantine practices",
          optionC: "To encourage sympathy and care for the sick",
          correctAnswer: "A) To justify their fear of the sick",
        }),
      shuffleOptions({
          question:
            "What was the outcome of leaving men to themselves, according to the legend?",
          optionA: "They continued to suffer without understanding happiness",
          optionB: "They learned to live in unity and love",
          optionC: "They found happiness through individual pursuits",
          correctAnswer:
            "A) They continued to suffer without understanding happiness",
        }),
      shuffleOptions({
          question:
            "In the latest times, what have a few people begun to understand about work?",
          optionA: "Work should be a source of individual happiness",
          optionB:
            "Work should be a common and happy occupation uniting all men",
          optionC: "Work is a burden that should be avoided",
          correctAnswer:
            "B) Work should be a common and happy occupation uniting all men",
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
            "God initially made men so that they had no need to ___________.",
          optionA: "Quarrel",
          optionB: "Work",
          optionC: "Travel",
          correctAnswer: "B) Work",
        }),
      shuffleOptions({
          question:
            "Instead of being happy, people quarreled with one another, and, each caring for himself, had brought matters to such a pass that far from enjoying life, they ___________ it.",
          optionA: "Celebrated",
          optionB: "Cursed",
          optionC: "Ignored",
          correctAnswer: "B) Cursed",
        }),
      shuffleOptions({
          question:
            "To avoid suffering from cold and hunger, people were now obliged to build dwellings, dig the ground, and grow and gather ___________ and grain.",
          optionA: "Vegetables",
          optionB: "Fruits",
          optionC: "Flowers",
          correctAnswer: "B) Fruits",
        }),
      shuffleOptions({
          question:
            "God thought that knowing each of them may die at any moment, they would not, by grasping at gains that may last so short a time, spoil the hours of life allotted to them but turned out ___________.",
          optionA: "Successfully",
          optionB: "Otherwise",
          optionC: "Advantageously",
          correctAnswer: "B) Otherwise",
        }),
      shuffleOptions({
          question:
            "Time passed on, and again God came to see how men were living, and whether they were now ___________.",
          optionA: "United",
          optionB: "Happy",
          optionC: "Fearful",
          correctAnswer: "B) Happy",
        }),
      shuffleOptions({
          question:
            "God decided to make use of one last means; he sent all kinds of ___________ among men.",
          optionA: "Abundance",
          optionB: "Sickness",
          optionC: "Wealth",
          correctAnswer: "B) Sickness",
        }),
      shuffleOptions({
          question:
            "Those who were strongest, availing themselves of the fact that men might die at any time, subdued those who were ___________.",
          optionA: "Wealthier",
          optionB: "Weaker",
          optionC: "Wiser",
          correctAnswer: "B) Weaker",
        }),
      shuffleOptions({
          question:
            "And it came about that the strongest and their descendants did no work and suffered from the ___________ of idleness.",
          optionA: "Pleasures",
          optionB: "Benefits",
          optionC: "Weariness",
          correctAnswer: "C) Weariness",
        }),
      shuffleOptions({
          question: "Each set of men feared and hated the ___________.",
          optionA: "Unknown",
          optionB: "Other",
          optionC: "Future",
          correctAnswer: "B) Other",
        }),
      shuffleOptions({
          question:
            "Only in the very latest times have a few of them begun to understand that work ought not to be a ___________ to some and like galley-slavery for others.",
          optionA: "Burden",
          optionB: "Joy",
          optionC: "Responsibility",
          correctAnswer: "A) Burden",
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
            "Uncertainty is part and parcel of life, which can either make or break a person.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "A person cannot predict the sea of future uncertainties in his life, be it personal or professional.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "It is the mark of a critical mind to show prudence in the event of an uncertain scenario and react wisely.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Uncertainty is like a teacher that tests your ability to get through a tough situation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The crow flew all over the fields looking for water, failed, still did not lose hope, put in more effort, found a pitcher of water but with a little amount of water in it, gave thought to finding a solution to this problem, and succeeded.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Courage, determination, self-faith, and fear of failure play their part in the event of uncertainty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Man is inclined to think negatively.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            'Lord Krishna says in the Geeta, "You have control over action and not the result, which lies with the Divine."',
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Life has been filled with uncertainties, and it is through these uncertainties that the world has progressed to the present level.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The Murphy's law states that if anything can possibly go wrong, it will go wrong.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
