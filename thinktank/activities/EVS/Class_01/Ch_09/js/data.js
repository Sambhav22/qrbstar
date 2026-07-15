export const chapter = "Chapter - 9: Our Family ";
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
          question: "What makes up a family, according to the given text?",
          optionA: "Cousins and grandparents",
          optionB: "Parents and children",
          optionC: "Uncles and aunts",
          correctAnswer: "Parents and children",
         }),
      shuffleOptions({
          question: "In Kaira's family, who are the members mentioned?",
          optionA: "Parents and cousins",
          optionB: "Parents, grandparents, uncle, aunt, and a cousin",
          optionC: "Brothers and sisters",
          correctAnswer: "Parents, grandparents, uncle, aunt, and a cousin",
         }),
      shuffleOptions({
          question: "What type of family does Kaira belong to?",
          optionA: "Small family",
          optionB: "Big family",
          optionC: "Joint family",
          correctAnswer: "Joint family",
         }),
      shuffleOptions({
          question:
            "What is the composition of a small family, as per the text?",
          optionA: "Parents and more than two children",
          optionB: "Parents and one or two children",
          optionC: "Grandparents and cousins",
          correctAnswer: "Parents and one or two children",
         }),
      shuffleOptions({
          question: "How is a big family defined in the given text?",
          optionA: "Parents and more than two children",
          optionB: "Parents and one or two children",
          optionC: "Parents and cousins",
          correctAnswer: "Parents and more than two children",
         }),
      shuffleOptions({
          question:
            "Which family type is described as having parents, grandparents, uncle, aunt, and a cousin?",
          optionA: "Small family",
          optionB: "Joint family",
          optionC: "Big family",
          correctAnswer: "Joint family",
         }),
      shuffleOptions({
          question: "What are the components of a big family?",
          optionA: "Parents and cousins",
          optionB: "Parents and one or two children",
          optionC: "Parents and more than two children",
          correctAnswer: "Parents and more than two children",
         }),
      shuffleOptions({
          question: "What is the family structure of Kaira's family?",
          optionA: "Small family",
          optionB: "Joint family",
          optionC: "Big family",
          correctAnswer: "Joint family",
         }),
      shuffleOptions({
          question:
            "According to the text, what members make up a family bond?",
          optionA: "Brothers and sisters",
          optionB: "Grandparents and cousins",
          optionC: "Papa-mummy, brother-sister, uncle-aunt, grandpa-grandma",
          correctAnswer:
            "Papa-mummy, brother-sister, uncle-aunt, grandpa-grandma",
         }),
      shuffleOptions({
          question: "How is a small family defined in the given text?",
          optionA: "Parents and more than two children",
          optionB: "Parents and cousins",
          optionC: "Parents and one or two children",
          correctAnswer: "Parents and one or two children",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Parents and their children together make a _________.",
          optionA: "School",
          optionB: "Family",
          optionC: "Zoo",
          correctAnswer: "Family",
         }),
      shuffleOptions({
          question: "We all live in a _________.",
          optionA: "Village",
          optionB: "City",
          optionC: "Family",
          correctAnswer: "Family",
         }),
      shuffleOptions({
          question:
            "Kaira lives with her parents, grandparents, uncle, aunt, and a _________.",
          optionA: "Neighbor",
          optionB: "Friend",
          optionC: "Cousin",
          correctAnswer: "Cousin",
         }),
      shuffleOptions({
          question: "Kaira's family is a _________ family.",
          optionA: "Nuclear",
          optionB: "Joint",
          optionC: "Extended",
          correctAnswer: "Joint",
         }),
      shuffleOptions({
          question:
            "A small family consists of parents and their _________ children.",
          optionA: "Many",
          optionB: "One or two",
          optionC: "None",
          correctAnswer: "One or two",
         }),
      shuffleOptions({
          question: "A big family has parents and their _________ children.",
          optionA: "Cousins",
          optionB: "More than two",
          optionC: "Only one",
          correctAnswer: "More than two",
         }),
      shuffleOptions({
          question:
            "Apart from parents and children, other family members include uncle, aunt, _________, and _________.",
          optionA: "Friends, neighbors",
          optionB: "Siblings, pets",
          optionC: "Grandparents, cousins",
          correctAnswer: "Grandparents, cousins",
         }),
      shuffleOptions({
          question:
            "Kaira's family structure is described as a _________ family.",
          optionA: "Nuclear",
          optionB: "Joint",
          optionC: "Extended",
          correctAnswer: "Joint",
         }),
      shuffleOptions({
          question:
            "In a joint family, members may include parents, grandparents, uncle, aunt, and _________.",
          optionA: "Only children",
          optionB: "Cousins",
          optionC: "Siblings",
          correctAnswer: "Cousins",
         }),
      shuffleOptions({
          question:
            "A family is a bond between many members, such as papa-mummy, brother-sister, uncle-aunt, and _________.",
          optionA: "Friends",
          optionB: "Grandpa-grandma",
          optionC: "Pets",
          correctAnswer: "Grandpa-grandma",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Parents and children together make a family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Kaira's family is a nuclear family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "A small family consists of parents and their one or two children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "In a joint family, members may include only parents and children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Grandparents and cousins are mentioned as family bond members.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "A big family has parents and their more than two children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Kaira's family structure is described as a joint family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "A small family consists of parents and their more than two children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Uncle, aunt, and a cousin are mentioned as Kaira's family members.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "A family is not considered a bond between various members.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
