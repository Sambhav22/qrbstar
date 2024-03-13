export const chapter = "Chapter -6: Urcertainty and Depravity";
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
          question: "What does the author consider uncertainty to be in life?",
          optionA: "A constant source of predictability",
          optionB: "A factor that can make or break a person",
          optionC: "An avoidable aspect of life",
          correctAnswer: "A factor that can make or break a person",
        }),
      shuffleOptions({
          question:
            "According to the author, what is the role of uncertainty in developing an individual's skills?",
          optionA: "It has no impact on skill development",
          optionB: "It provides an opportunity to hone skills",
          optionC: "It impedes critical thinking",
          correctAnswer: "It provides an opportunity to hone skills",
        }),
      shuffleOptions({
          question:
            "In the story of the 'thirsty' crow, what combination is highlighted as the generator of new ideas to solve a problem?",
          optionA: "Physical and mental labor",
          optionB: "Hope and patience",
          optionC: "Luck and perseverance",
          correctAnswer: "Physical and mental labor",
        }),
      shuffleOptions({
          question:
            "According to the passage, what factors play a part in the event of uncertainty?",
          optionA: "Wisdom, patience, and luck",
          optionB: "Courage, determination, self-faith, and fear of failure",
          optionC: "Fear of failure, inactivity, and doubt",
          correctAnswer:
            "Courage, determination, self-faith, and fear of failure",
        }),
      shuffleOptions({
          question:
            "What does Martin Luther King Jr. emphasize regarding faith in uncertain times?",
          optionA: "Faith hinders facing uncertainties",
          optionB: "Faith is unnecessary in difficult situations",
          optionC: "Faith gives courage to face uncertainties",
          correctAnswer: "Faith gives courage to face uncertainties",
        }),
      shuffleOptions({
          question:
            "What does the fear of failure often lead to during a period of uncertainty?",
          optionA: "Inactivity",
          optionB: "Bold decision-making",
          optionC: "Positive action",
          correctAnswer: "Inactivity",
        }),
      shuffleOptions({
          question:
            "How does the author characterize uncertainties in life according to the Murphy's law?",
          optionA: "Predictable",
          optionB: "Unavoidable",
          optionC: "Controllable",
          correctAnswer: "Unavoidable",
        }),
      shuffleOptions({
          question:
            "What advice does Lord Krishna give in the Geeta regarding action and results?",
          optionA: "Focus on the result, not the action",
          optionB: "Results lie within one's control",
          optionC: "Act boldly, and results are beyond one's control",
          correctAnswer: "Act boldly, and results are beyond one's control",
        }),
      shuffleOptions({
          question:
            "According to the passage, what has shaped the creativity and imagination of each generation?",
          optionA: "Predictability",
          optionB: "Certainty",
          optionC: "Uncertainties",
          correctAnswer: "Uncertainties",
        }),
      shuffleOptions({
          question:
            "What does the author attribute to the progress and evolution of the world?",
          optionA: "Avoidance of uncertainties",
          optionB: "Overcoming uncertainties",
          optionC: "Lack of challenges",
          correctAnswer: "Overcoming uncertainties",
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
            "Uncertainty is part and parcel of life, which can either make or ______ a person.",
          optionA: "Develop",
          optionB: "Break",
          optionC: "Enhance",
          correctAnswer: "Break",
        }),
      shuffleOptions({
          question:
            "A person cannot predict the sea of future uncertainties in his life, be it ______ or professional.",
          optionA: "Personal",
          optionB: "Public",
          optionC: "Pleasurable",
          correctAnswer: "Personal",
        }),
      shuffleOptions({
          question:
            "It is the mark of a critical mind to show prudence in the event of an uncertain scenario and ______ wisely.",
          optionA: "React",
          optionB: "Respond",
          optionC: "Retire",
          correctAnswer: "React",
        }),
      shuffleOptions({
          question:
            "Uncertainty is like a teacher that tests your ability to get through a tough ______.",
          optionA: "Problem",
          optionB: "Situation",
          optionC: "Journey",
          correctAnswer: "Situation",
        }),
      shuffleOptions({
          question:
            "The crow flew all over the fields looking for water, failed, still did not lose hope, put in more effort, found a pitcher of water but with a little amount of water in it, gave thought to finding a solution to this ______, and succeeded.",
          optionA: "Issue",
          optionB: "Problem",
          optionC: "Dilemma",
          correctAnswer: "Problem",
        }),
      shuffleOptions({
          question:
            "Courage, determination, self-faith, and ______ of failure play their part in the event of uncertainty.",
          optionA: "Hope",
          optionB: "Fear",
          optionC: "Acceptance",
          correctAnswer: "Fear",
        }),
      shuffleOptions({
          question: "Man is inclined to think ______.",
          optionA: "Positively",
          optionB: "Negative",
          optionC: "Rationally",
          correctAnswer: "Negative",
        }),
      shuffleOptions({
          question:
            'Lord Krishna says in the Geeta, "You have control over action and not the ______, which lies with the Divine."',
          optionA: "Journey",
          optionB: "Path",
          optionC: "Result",
          correctAnswer: "Result",
        }),
      shuffleOptions({
          question:
            "Life has been filled with uncertainties, and it is through these uncertainties that the world has progressed to the ______ level.",
          optionA: "Present",
          optionB: "Primitive",
          optionC: "Pinnacle",
          correctAnswer: "Present",
        }),
      shuffleOptions({
          question:
            "The Murphy's law states that if anything can possibly go wrong, it will go ______.",
          optionA: "Right",
          optionB: "Wrong",
          optionC: "Smooth",
          correctAnswer: "Wrong",
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
            "Uncertainty can only break a person and does not contribute to personal growth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Courage, determination, and self-faith have no role to play in dealing with uncertainties.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The story of the 'thirsty' crow emphasizes the importance of physical labor only.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Fear of failure is not a factor that influences a person's actions during uncertainty.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "According to Lord Krishna in the Geeta, individuals have control over both action and result.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Negativity is not a common inclination among humans during uncertain times.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Life's progress is not influenced by uncertainties, according to the passage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Ratan Tata believes in making decisions right from the start without any analysis.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The Murphy's law suggests that everything will go right if there's a possibility of it going wrong.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Facing uncertainties with a weak mind is encouraged for personal growth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
