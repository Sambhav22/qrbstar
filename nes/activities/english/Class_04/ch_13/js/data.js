export const chapter = "Chapter -13: So Much or So Little";
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
          question: "Why were Deepa and Ayush unhappy?",
          optionA: "Because they couldn't find their friend Kunal",
          optionB: "Because their mother chided them over water usage",
          optionC: "Because it was raining outside",
          correctAnswer: "Because their mother chided them over water usage",
        }),
      shuffleOptions({
          question:
            "What was Deepa's argument regarding the abundance of water on Earth?",
          optionA:
            "There is no need to conserve water since the Earth has so much of it",
          optionB: "Conserving water is important despite its abundance",
          optionC: "The Earth's water supply is limited",
          correctAnswer:
            "There is no need to conserve water since the Earth has so much of it",
        }),
      shuffleOptions({
          question:
            "What did Ayush believe regarding the necessity of conserving water?",
          optionA: "He agreed with Deepa that conservation wasn't necessary",
          optionB: "He disagreed with Deepa and argued for water conservation",
          optionC:
            "He believed water conservation was necessary only in certain situations",
          correctAnswer:
            "He agreed with Deepa that conservation wasn't necessary",
        }),
      shuffleOptions({
          question:
            "What did Kunal suggest as the pertinent question regarding water?",
          optionA:
            "How much water is available for use, not just the total amount on Earth",
          optionB: "How much water can be found in the oceans",
          optionC: "How much water can be used for industrial purposes",
          correctAnswer:
            "How much water is available for use, not just the total amount on Earth",
        }),
      shuffleOptions({
          question: "What percentage of water on Earth is in the oceans?",
          optionA: "97.2%",
          optionB: "50%",
          optionC: "10%",
          correctAnswer: "97.2%",
        }),
      shuffleOptions({
          question:
            "Why is most of the water in the oceans not available for human use?",
          optionA: "Because it is too salty",
          optionB: "Because it is frozen",
          optionC: "Because it is contaminated",
          correctAnswer: "Because it is too salty",
        }),
      shuffleOptions({
          question: "Where can the largest quantity of usable water be found?",
          optionA: "In glaciers",
          optionB: "In oceans",
          optionC: "In groundwater",
          correctAnswer: "In groundwater",
        }),
      shuffleOptions({
          question: "What does Kunal say about the cleanliness of freshwater?",
          optionA:
            "It is naturally clean and doesn't need conservation efforts",
          optionB: "It is often polluted due to human activities",
          optionC: "It is polluted due to natural processes",
          correctAnswer: "It is often polluted due to human activities",
        }),
      shuffleOptions({
          question: "According to Kunal, why is water conservation important?",
          optionA: "To maintain water levels in the oceans",
          optionB: "To prevent diseases caused by polluted water",
          optionC: "To ensure water is available for industrial use",
          correctAnswer: "To prevent diseases caused by polluted water",
        }),
      shuffleOptions({
          question:
            "What conclusion do Deepa and Ayush reach after their discussion with Kunal?",
          optionA: "They vow to never use water again",
          optionB: "They vow to conserve water and spread awareness about it",
          optionC: "They decide to ignore Kunal's advice",
          correctAnswer:
            "They vow to conserve water and spread awareness about it",
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
          question: "Mummy chided Deepa and Ayush for ________.",
          optionA: "leaving the door open",
          optionB: "wasting water",
          optionC: "not doing their homework",
          correctAnswer: "wasting water",
        }),
      shuffleOptions({
          question:
            "Deepa argued that since the Earth has a lot of water, there is no need to ________.",
          optionA: "breathe",
          optionB: "conserve water",
          optionC: "eat food",
          correctAnswer: "conserve water",
        }),
      shuffleOptions({
          question:
            "Ayush believed that ________ was constantly reminding them to save water.",
          optionA: "their friends",
          optionB: "the television",
          optionC: "their family and teachers",
          correctAnswer: "their family and teachers",
        }),
      shuffleOptions({
          question:
            "Kunal suggested that the important question regarding water was about its ________.",
          optionA: "color",
          optionB: "availability for use",
          optionC: "taste",
          correctAnswer: "availability for use",
        }),
      shuffleOptions({
          question:
            "Approximately ________ of water on Earth is in the oceans.",
          optionA: "50%",
          optionB: "75%",
          optionC: "97.2%",
          correctAnswer: "97.2%",
        }),
      shuffleOptions({
          question:
            "The majority of water in the oceans is not suitable for human use because it is too _________.",
          optionA: "clean",
          optionB: "salty",
          optionC: "cold",
          correctAnswer: "salty",
        }),
      shuffleOptions({
          question:
            "The largest quantity of usable water can be found in ________.",
          optionA: "clouds",
          optionB: "glaciers",
          optionC: "groundwater",
          correctAnswer: "groundwater",
        }),
      shuffleOptions({
          question:
            "Kunal mentioned that freshwater is often polluted due to ________ activities.",
          optionA: "natural",
          optionB: "human",
          optionC: "animal",
          correctAnswer: "human",
        }),
      shuffleOptions({
          question:
            "Kunal emphasized the importance of water conservation to prevent ________ caused by polluted water.",
          optionA: "hunger",
          optionB: "droughts",
          optionC: "diseases",
          correctAnswer: "diseases",
        }),
      shuffleOptions({
          question:
            "After their discussion with Kunal, Deepa and Ayush decided to ________.",
          optionA: "ignore his advice",
          optionB: "conserve water and raise awareness",
          optionC: "forget about water conservation",
          correctAnswer: "conserve water and raise awareness",
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
            "Deepa and Ayush felt happy when their mother reminded them to conserve water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Deepa and Ayush were happy to see posters and billboards reminding them to conserve water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Kunal came to their house to play with Deepa and Ayush.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Deepa and Ayush were upset because they could not understand why people kept telling them to save water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Kunal explained to Deepa and Ayush the importance of considering the available water for use, not just the total amount of water on Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "According to Kunal, about 97.2% of water on Earth is usable for human consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Kunal mentioned that the largest quantity of available water is found in saline oceans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Freshwater accounts for less than 1% of all water on Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Kunal stated that using polluted water can lead to various illnesses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Deepa and Ayush understood the importance of water conservation after their discussion with Kunal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
