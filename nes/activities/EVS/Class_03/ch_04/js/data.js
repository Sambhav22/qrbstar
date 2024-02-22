export const chapter = "Chapter - 4: Wonderful Family";
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
          question: "What is a Nuclear Family also known as?",
          optionA: "Paternal Family",
          optionB: "Conjugal Family",
          optionC: "Extended Family",
          correctAnswer: "b) Conjugal Family",
 }),
      shuffleOptions({
          question:
            "How many generations are typically present in a Joint Family?",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "c) Three",
 }),
      shuffleOptions({
          question:
            "What is the focus of the paragraph 'Whom do we look like?'",
          optionA: "Celebrations in families",
          optionB: "Passing on traits in families",
          optionC: "Types of families",
          correctAnswer: "b) Passing on traits in families",
 }),
      shuffleOptions({
          question:
            "What is the primary purpose of spending time together with family according to the text?",
          optionA: "To celebrate festivals",
          optionB: "To go out for a picnic",
          optionC: "To strengthen the bond among family members",
          correctAnswer: "c) To strengthen the bond among family members",
 }),
      shuffleOptions({
          question: "Tia and Pia in Kashyap's family tree are mentioned as:",
          optionA: "Cousins",
          optionB: "Identical Twins",
          optionC: "Maternal Relatives",
          correctAnswer: "b) Identical Twins",
 }),
      shuffleOptions({
          question:
            "What do twins, Tia and Pia, share that makes people amazed according to the text?",
          optionA: "Similar height and weight",
          optionB:
            "Identical features such as height, weight, hair color, and skin tone",
          optionC: "Different features from each other",
          correctAnswer:
            "b) Identical features such as height, weight, hair color, and skin tone",
 }),
      shuffleOptions({
          question:
            "Which family type is described as the first school for children to learn good manners, values, and ethics?",
          optionA: "Nuclear Family",
          optionB: "Joint Family",
          optionC: "Extended Family",
          correctAnswer: "a) Nuclear Family",
 }),
      shuffleOptions({
          question: "How is a Joint Family system described in the text?",
          optionA: "A small family unit",
          optionB: "An extended family system",
          optionC: "A family with only parents and children",
          correctAnswer: "b) An extended family system",
 }),
      shuffleOptions({
          question:
            "What do we inherit from our parents, according to the text?",
          optionA: "Good manners",
          optionB: "Height, smile, and other features",
          optionC: "Values and ethics",
          correctAnswer: "b) Height, smile, and other features",
 }),
      shuffleOptions({
          question:
            "According to the text, what binds family members together?",
          optionA: "Sharing physical traits",
          optionB: "Going out for a picnic",
          optionC: "Celebrations or outings",
          correctAnswer: "c) Celebrations or outings",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        questions: [
          {
            text: "Types of Families\nNuclear family is also known as ______ family.",
            options: ["a) Extended", "b) Conjugal", "c) Joint"],
            answer: "b) Conjugal",
          },
          {
            text: "Joint Family\nA joint family system includes at least ______ generations living together.",
            options: ["a) One", "b) Two", "c) Three"],
            answer: "c) Three",
          },
          {
            text: "Relationships\nRelatives from the father's side are known as ______ relatives.",
            options: ["a) Maternal", "b) Paternal", "c) Conjugal"],
            answer: "b) Paternal",
          },
          {
            text: "Whom do we look like?\nWe inherit our height, smile, and features from our ______.",
            options: ["a) Siblings", "b) Friends", "c) Parents"],
            answer: "c) Parents",
          },
          {
            text: "Being Together\nCelebrations and outings help bind family members ______.",
            options: ["a) Apart", "b) Closer", "c) Strangers"],
            answer: "b) Closer",
          },
          {
            text: "Twins in Family\nTia and Pia are ______ in Kashyap's family tree.",
            options: ["a) Identical", "b) Fraternal", "c) Solo"],
            answer: "a) Identical",
          },
          {
            text: "Twins are wonder in the family because of their ______ looks.",
            options: ["a) Different", "b) Identical", "c) Random"],
            answer: "b) Identical",
          },
          {
            text: "People are amazed by twins' features such as height, weight, and ______.",
            options: ["a) Hair color", "b) Eye color", "c) Shoe size"],
            answer: "a) Hair color",
          },
          {
            text: "Sometimes, twins look identical because they are born together from the ______ mother.",
            options: ["a) Different", "b) Similar", "c) Same"],
            answer: "c) Same",
          },
          {
            text: "On holidays, families often go out for ______.",
            options: ["a) Work", "b) School", "c) Picnic"],
            answer: "c) Picnic",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        trueFalseQuestions: [
          {
            text: "Nuclear family is also known as a conjugal family.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            text: "A joint family system includes at least two generations living together.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            text: "Relatives from the father's side are known as maternal relatives.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            text: "We inherit our height, smile, and features only from our friends.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            text: "Celebrations and outings help create distance among family members.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            text: "Tia and Pia in Kashyap's family tree are fraternal twins.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            text: "Twins look identical due to their different features.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            text: "People are amazed by twins' features such as eye color and shoe size.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            text: "Twins look identical because they are born together from the same mother.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            text: "Families often go out for work on holidays.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
