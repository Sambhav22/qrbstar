export const chapter = "Chapter -15: What an Elephant Looks Like";
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
            "What was the first reaction of the six blind men when the mahout offered them to feel the elephant?",
          optionA: "They declined the offer",
          optionB: "They accepted the offer",
          optionC: "They laughed at the suggestion",
          correctAnswer: "They accepted the offer",
        }),
      shuffleOptions({
          question: "How many blind men were there in total?",
          optionA: "Four",
          optionB: "Five",
          optionC: "Six",
          correctAnswer: "Six",
        }),
      shuffleOptions({
          question: "What did the first blind man compare the elephant to?",
          optionA: "A wall",
          optionB: "A sword",
          optionC: "A tree",
          correctAnswer: "A wall",
        }),
      shuffleOptions({
          question: "What did the second blind man compare the elephant to?",
          optionA: "A sword",
          optionB: "A snake",
          optionC: "A fan",
          correctAnswer: "A sword",
        }),
      shuffleOptions({
          question: "What did the third blind man compare the elephant to?",
          optionA: "A snake",
          optionB: "A tree",
          optionC: "A rope",
          correctAnswer: "A snake",
        }),
      shuffleOptions({
          question: "What did the fourth blind man compare the elephant to?",
          optionA: "A tree",
          optionB: "A fan",
          optionC: "A rope",
          correctAnswer: "A tree",
        }),
      shuffleOptions({
          question: "What did the fifth blind man compare the elephant to?",
          optionA: "A fan",
          optionB: "A rope",
          optionC: "A wall",
          correctAnswer: "A fan",
        }),
      shuffleOptions({
          question: "What did the sixth blind man compare the elephant to?",
          optionA: "A rope",
          optionB: "A wall",
          optionC: "A sword",
          correctAnswer: "A rope",
        }),
      shuffleOptions({
          question:
            "What did the old man conclude about the arguments of the six blind men?",
          optionA: "They were all correct",
          optionB: "They were all wrong",
          optionC: "They were all partially right",
          correctAnswer: "They were all partially right",
        }),
      shuffleOptions({
          question:
            "How did the six blind men feel after the old man's explanation?",
          optionA: "Disappointed",
          optionB: "Frustrated",
          optionC: "Enlightened",
          correctAnswer: "Enlightened",
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
          question: "What did the six blind men use to navigate while walking?",
          optionA: "Sticks",
          optionB: "Ropes",
          optionC: "Canes",
          correctAnswer: "Sticks",
        }),
      shuffleOptions({
          question: "What did the mahout offer the blind men to feel?",
          optionA: "An elephant",
          optionB: "A horse",
          optionC: "A camel",
          correctAnswer: "An elephant",
        }),
      shuffleOptions({
          question: "How did the first blind man describe the elephant's side?",
          optionA: "Flat like a wall",
          optionB: "Round like a ball",
          optionC: "Sharp like a sword",
          correctAnswer: "Flat like a wall",
        }),
      shuffleOptions({
          question:
            "What did the second blind man compare the elephant's tusk to _______",
          optionA: "A sword",
          optionB: "A snake",
          optionC: "A fan",
          correctAnswer: "A sword",
        }),
      shuffleOptions({
          question:
            "What did the third blind man compare the elephant's trunk to _______",
          optionA: "A snake",
          optionB: "A tree",
          optionC: "A rope",
          correctAnswer: "A snake",
        }),
      shuffleOptions({
          question: "How did the fourth blind man describe the elephant's leg?",
          optionA: "Round like a tree",
          optionB: "Flat like a wall",
          optionC: "Sharp like a sword",
          correctAnswer: "Round like a tree",
        }),
      shuffleOptions({
          question:
            "What did the fifth blind man compare the elephant's ear to?",
          optionA: "A fan",
          optionB: "A rope",
          optionC: "A wall",
          correctAnswer: "A fan",
        }),
      shuffleOptions({
          question:
            "What did the sixth blind man compare the elephant's tail to?",
          optionA: "A rope",
          optionB: "A wall",
          optionC: "A sword",
          correctAnswer: "A rope",
        }),
      shuffleOptions({
          question: "________ laughed at the end of the story?",
          optionA: "The mahout",
          optionB: "The old man",
          optionC: "The blind men",
          correctAnswer: "The mahout",
        }),
      shuffleOptions({
          question:
            "The blind men feel _________ after the old man's explanation?",
          optionA: "Disappointed",
          optionB: "Frustrated",
          optionC: "Enlightened",
          correctAnswer: "Enlightened",
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
          question: "The blind men had sight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The blind men used sticks to navigate.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question: "The mahout offered the blind men a camel to feel.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The first blind man described the elephant's side as round like a ball.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The second blind man compared the elephant's tusk to a snake.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The third blind man compared the elephant's trunk to a rope.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The fourth blind man described the elephant's leg as flat like a wall.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The fifth blind man compared the elephant's ear to a wall.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The sixth blind man compared the elephant's tail to a sword.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The old man told the blind men that each of them was right and wrong.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
