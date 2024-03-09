export const chapter = "Chapter - 21: fhe Stranger Mother";
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
        question: "Where was the narrator waiting for the north-bound train?",
        options: ["a) Bus station", "b) Ambala station", "c) School"],
        answer: "b) Ambala station",
     }),
      shuffleOptions({
        question: "How old was the narrator when this incident occurred?",
        options: ["a) 10", "b) 12", "c) 14"],
        answer: "b) 12",
     }),
      shuffleOptions({
        question: "What did the woman offer to the narrator at the station?",
        options: ["a) Books", "b) Tea and sweets", "c) Jewelry"],
        answer: "b) Tea and sweets",
     }),
      shuffleOptions({
        question:
          "How did the woman's kindness and generosity affect the narrator's feelings?",
        options: [
          "a) Made him suspicious",
          "b) Made him feel grateful and open up",
          "c) Made him dislike her",
        ],
        answer: "b) Made him feel grateful and open up",
     }),
      shuffleOptions({
        question:
          "What did the narrator say about his liking for strangers when he was cautioned by Satish's mother?",
        options: [
          "a) He dislikes strangers",
          "b) He likes strangers",
          "c) He is indifferent to strangers",
        ],
        answer: "b) He likes strangers",
     }),
      shuffleOptions({
        question:
          "Who did the woman pretend to be when questioned by Satish's mother?",
        options: [
          "a) A school teacher",
          "b) A relative",
          "c) The narrator's mother",
        ],
        answer: "c) The narrator's mother",
     }),
      shuffleOptions({
        question:
          "What gift did Satish's mother give to the narrator to share with Satish?",
        options: [
          "a) A cricket bat",
          "b) A bag of fruits and a big box of chocolates",
          "c) A football",
        ],
        answer: "b) A bag of fruits and a big box of chocolates",
     }),
      shuffleOptions({
        question:
          "How did the narrator feel about Satish's mother's patronizing tone?",
        options: ["a) Grateful", "b) Indifferent", "c) Hateful"],
        answer: "c) Hateful",
     }),
      shuffleOptions({
        question: "How does the story end?",
        options: [
          "a) The narrator and Satish's mother have a heated argument.",
          "b) The narrator and Satish's mother wave goodbye.",
          "c) The narrator kisses the woman on the platform.",
        ],
        answer: "c) The narrator kisses the woman on the platform.",
     }),
      shuffleOptions({
        question: "What color was the woman's attire at the station?",
        options: ["a) Red", "b) Blue", "c) White"],
        answer: "c) White",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "In the story, the narrator was waiting for the north-bound train at ________ station.",
        options: ["a) Bus", "b) Ambala", "c) School"],
        answer: "b) Ambala",
     }),
      shuffleOptions({
        question:
          "The narrator was about ________ years old when this incident occurred.",
        options: ["a) 10", "b) 12", "c) 14"],
        answer: "b) 12",
     }),
      shuffleOptions({
        question:
          "The woman at the station offered the narrator tea and ________.",
        options: ["a) Books", "b) Sweets", "c) Jewelry"],
        answer: "b) Sweets",
     }),
      shuffleOptions({
        question:
          "The woman's kindness and generosity made the narrator feel __________ and open up.",
        options: ["a) Suspicious", "b) Grateful", "c) Disliked"],
        answer: "b) Grateful",
     }),
      shuffleOptions({
        question:
          "When cautioned by Satish's mother, the narrator expressed that he __________ strangers.",
        options: ["a) Dislikes", "b) Likes", "c) Is indifferent to"],
        answer: "b) Likes",
     }),
      shuffleOptions({
        question:
          "The woman pretended to be the narrator's ________ when questioned by Satish's mother.",
        options: ["a) School teacher", "b) Relative", "c) Mother"],
        answer: "c) Mother",
     }),
      shuffleOptions({
        question:
          "Satish's mother gave the narrator a bag of fruits and a big box of _______ to share with Satish.",
        options: ["a) Cricket bat", "b) Sweets", "c) Chocolates"],
        answer: "c) Chocolates",
     }),
      shuffleOptions({
        question:
          "The narrator felt __________ about Satish's mother's patronizing tone.",
        options: ["a) Grateful", "b) Indifferent", "c) Hateful"],
        answer: "c) Hateful",
     }),
      shuffleOptions({
        question:
          "The story ends with the narrator kissing the woman on the platform as the ________ moves slowly out of the station.",
        options: ["a) Bus", "b) Train", "c) Car"],
        answer: "b) Train",
     }),
      shuffleOptions({
        question:
          "The woman on the platform is described as a pale, sweet woman in a ________ attire.",
        options: ["a) Red", "b) Blue", "c) White"],
        answer: "c) White",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The narrator was waiting for the south-bound train.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The woman at the station offered the narrator books.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The woman's kindness and generosity made the narrator feel suspicious.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The woman pretended to be the narrator's school teacher when questioned by Satish's mother.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Satish's mother gave the narrator a bag of fruits and a big box of chocolates to share with Satish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The narrator felt grateful about Satish's mother's patronizing tone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The story ends with the narrator kissing the woman on the platform as the train moves slowly out of the station.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The woman on the platform is described as a pale, sweet woman in a red attire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The narrator was traveling with his parents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Satish and the narrator had a heated argument on the platform.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
