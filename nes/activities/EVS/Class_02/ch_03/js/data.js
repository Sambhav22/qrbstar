export const chapter = "Chapter - 3: My Family ";
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
          question: "What type of family does Abhya belong to?",
          optionA: "Big family",
          optionB: "Small family",
          optionC: "Joint family",
          correctAnswer: "Small family",
         }),
      shuffleOptions({
          question:
            "Which family has brothers, sisters, and parents living together?",
          optionA: "Abhya's family",
          optionB: "Karun's family",
          optionC: "Arya's family",
          correctAnswer: "Karun's family",
         }),
      shuffleOptions({
          question: "What type of family does Arya belong to?",
          optionA: "Big family",
          optionB: "Small family",
          optionC: "Joint family",
          correctAnswer: "Joint family",
         }),
      shuffleOptions({
          question: "In Abhya's family, who lives together?",
          optionA: "Abhya and her friends",
          optionB: "Abhya, her brother, and parents",
          optionC: "Abhya's cousins",
          correctAnswer: "Abhya, her brother, and parents",
         }),
      shuffleOptions({
          question: "What skills do family members teach us as we grow up?",
          optionA: "How to swim",
          optionB: "How to ride a bike",
          optionC: "How to behave, talk, and eat",
          correctAnswer: "How to behave, talk, and eat",
         }),
      shuffleOptions({
          question: "On which occasions do we generally meet with relatives?",
          optionA: "Any random day",
          optionB:
            "Special occasions like birthdays, housewarming ceremonies, marriages, and festivals",
          optionC: "Weekends only",
          correctAnswer:
            "Special occasions like birthdays, housewarming ceremonies, marriages, and festivals",
         }),
      shuffleOptions({
          question: "What does Karun's family comprise?",
          optionA: "Only parents",
          optionB: "Brothers, sister, and parents",
          optionC: "Only grandparents",
          correctAnswer: "Brothers, sister, and parents",
         }),
      shuffleOptions({
          question: "How many types of families are mentioned in the text?",
          optionA: "2",
          optionB: "3",
          optionC: "4",
          correctAnswer: "3",
         }),
      shuffleOptions({
          question: "Who is described as a wonderful dancer in the text?",
          optionA: "Karun",
          optionB: "Arya",
          optionC: "Abhya",
          correctAnswer: "Abhya",
         }),
      shuffleOptions({
          question: "What does Arya's joint family include under one roof?",
          optionA: "Only parents",
          optionB: "Parents, brother, and cousins",
          optionC:
            "Parents, brother, uncle, aunt, cousins, grandfather, and grandmother",
          correctAnswer:
            "Parents, brother, uncle, aunt, cousins, grandfather, and grandmother",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Parents and their children together make a ________.",
          optionA: "Team",
          optionB: "Family",
          optionC: "Squad",
          correctAnswer: "Family",
         }),
      shuffleOptions({
          question:
            "Abhya's family is a ________ family. In her family, her brother and parents live together.",
          optionA: "Small",
          optionB: "Big",
          optionC: "Joint",
          correctAnswer: "Small",
         }),
      shuffleOptions({
          question:
            "In Karun's family, his brothers, sister, and his parents live together, making it a ________ family.",
          optionA: "Joint",
          optionB: "Small",
          optionC: "Big",
          correctAnswer: "Big",
         }),
      shuffleOptions({
          question:
            "Arya's family is a ________ family. In it, Arya's parents, his brother, uncle, aunt, cousins, grandfather, and grandmother all live together under one roof.",
          optionA: "Big",
          optionB: "Joint",
          optionC: "Small",
          correctAnswer: "Joint",
         }),
      shuffleOptions({
          question:
            "As we grow up, our family members teach us many skills, such as how to ________.",
          optionA: "Drive",
          optionB: "Behave",
          optionC: "Paint",
          correctAnswer: "Behave",
         }),
      shuffleOptions({
          question:
            "We learn how to talk, eat, and give respect to our elders and others from our ________.",
          optionA: "Friends",
          optionB: "Neighbors",
          optionC: "Family",
          correctAnswer: "Family",
         }),
      shuffleOptions({
          question:
            "Generally, we meet with our relatives on special occasions such as birthday parties, housewarming ceremonies, marriages, and ________.",
          optionA: "Reunions",
          optionB: "Picnics",
          optionC: "Festivals",
          correctAnswer: "Festivals",
         }),
      shuffleOptions({
          question:
            "Karun's family comprises his brothers, sister, and ________ living together.",
          optionA: "Cousins",
          optionB: "Friends",
          optionC: "Pets",
          correctAnswer: "Cousins",
         }),
      shuffleOptions({
          question: "Abhya is described as a ________ dancer in her family.",
          optionA: "Skillful",
          optionB: "Wonderful",
          optionC: "Average",
          correctAnswer: "Wonderful",
         }),
      shuffleOptions({
          question:
            "In Arya's joint family, his parents, brother, uncle, aunt, cousins, grandfather, and ________ all live together under one roof.",
          optionA: "Nephews",
          optionB: "Grandmother",
          optionC: "Friends",
          correctAnswer: "Grandmother",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question: "Parents and their children together make a family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question: "Abhya's family is a big family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Arya's family is a small family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "In Karun's family, his brothers, sister, and parents live separately.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "As we grow up, our family members teach us skills such as how to ride a bike.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Meeting with relatives generally happens only on weekends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Karun's family includes his cousins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "In Arya's joint family, only his parents and brother live together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question: "Abhya is described as a skilled dancer in her family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "We learn how to give respect to our elders from our friends.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
