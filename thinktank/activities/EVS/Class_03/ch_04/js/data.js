export const chapter = "Chapter -4: Wonderful Family";
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
          question: "What is another name for a Nuclear Family?",
          optionA: "Extended Family",
          optionB: "Conjugal Family",
          optionC: "Joint Family",
          correctAnswer: "Conjugal Family",
        }),
      shuffleOptions({
          question: "How many generations typically make up a Joint Family?",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Three",
        }),
      shuffleOptions({
          question: "What is a Joint Family system also known as?",
          optionA: "Extended Family system",
          optionB: "Nuclear Family system",
          optionC: "Conjugal Family system",
          correctAnswer: "Extended Family system",
        }),
      shuffleOptions({
          question:
            "What do we inherit from our parents according to the text?",
          optionA: "Only physical appearance",
          optionB: "Qualities, height, and smile",
          optionC: "Manners and ethics",
          correctAnswer: "Qualities, height, and smile",
        }),
      shuffleOptions({
          question: "Which type of relatives are from the father's side?",
          optionA: "Maternal relatives",
          optionB: "Paternal relatives",
          optionC: "Conjugal relatives",
          correctAnswer: "Paternal relatives",
        }),
      shuffleOptions({
          question:
            "What is mentioned as the first school for children in the text?",
          optionA: "Joint Family",
          optionB: "Nuclear Family",
          optionC: "Family",
          correctAnswer: "Family",
        }),
      shuffleOptions({
          question:
            "What creates a strong bond among family members, according to the text?",
          optionA: "Spending time together",
          optionB: "Joint Family system",
          optionC: "Celebrating festivals",
          correctAnswer: "Spending time together",
        }),
      shuffleOptions({
          question:
            "What do twins Tia and Pia in Kashyap's family tree have in common?",
          optionA: "Different features",
          optionB: "Identical features",
          optionC: "Similar age",
          correctAnswer: "Identical features",
        }),
      shuffleOptions({
          question:
            "According to the text, what is the cyclical order of passing on traits in a family?",
          optionA: "One generation to another",
          optionB: "Two generations to another",
          optionC: "Three generations to another",
          correctAnswer: "One generation to another",
        }),
      shuffleOptions({
          question: "What is celebrated together to bind family members?",
          optionA: "Outing",
          optionB: "Holidays",
          optionC: "Festivals",
          correctAnswer: "Festivals",
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
            "A family is considered the __________ support system for an individual.",
          optionA: "Emotional",
          optionB: "Financial",
          optionC: "Physical",
          correctAnswer: "Emotional",
        }),
      shuffleOptions({
          question:
            "The Nuclear Family is also known as the __________ family.",
          optionA: "Extended",
          optionB: "Conjugal",
          optionC: "Joint",
          correctAnswer: "Conjugal",
        }),
      shuffleOptions({
          question:
            "In a Joint Family, at least __________ generations live together.",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Three",
        }),
      shuffleOptions({
          question:
            "The relatives from the father's side are known as __________ relatives.",
          optionA: "Maternal",
          optionB: "Paternal",
          optionC: "Conjugal",
          correctAnswer: "Paternal",
        }),
      shuffleOptions({
          question:
            "According to the text, we look like our family members because we have __________ from them.",
          optionA: "Manners",
          optionB: "Qualities",
          optionC: "Money",
          correctAnswer: "Qualities",
        }),
      shuffleOptions({
          question:
            "Family members share a strong bond through __________ or outings.",
          optionA: "Arguments",
          optionB: "Celebrations",
          optionC: "Disagreements",
          correctAnswer: "Celebrations",
        }),
      shuffleOptions({
          question: "Tia and Pia in Kashyap's family tree are __________.",
          optionA: "Siblings",
          optionB: "Twins",
          optionC: "Cousins",
          correctAnswer: "Twins",
        }),
      shuffleOptions({
          question:
            "Twins are sometimes born identical, having the same __________.",
          optionA: "Age",
          optionB: "Features",
          optionC: "Gender",
          correctAnswer: "Features",
        }),
      shuffleOptions({
          question:
            "Celebrations and outings help bind family members __________.",
          optionA: "Apart",
          optionB: "Closely",
          optionC: "Individually",
          correctAnswer: "Closely",
        }),
      shuffleOptions({
          question:
            "Twins in a family are considered a wonder due to their __________.",
          optionA: "Similar looks",
          optionB: "Different features",
          optionC: "Unique personalities",
          correctAnswer: "Similar looks",
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
          question: "The Nuclear Family is also known as the Extended Family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "In a Joint Family, at least two generations live together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Family members inherit only physical features from their parents.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Tia and Pia in Kashyap's family tree are fraternal twins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Celebrations and outings do not contribute to creating a strong bond among family members.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Maternal relatives are related to the mother's side of the family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Twins born from the same mother are always identical.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The cyclical order of passing on traits in a family occurs from one generation to another.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Joint Family is the most common type of family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "Twins looking alike is considered a wonder in a family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
    ]),
  }
}

export var activityData;
