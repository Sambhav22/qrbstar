export const chapter = "Chapter -1: My Education";
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
            "Why were the narrator's parents initially hesitant about sending her to the one-year education camp?",
          optionA: "They believed education was not beneficial for villagers.",
          optionB:
            "They thought girls should stay at home and learn household work.",
          optionC:
            "They were concerned about the safety of their child being far away.",
          correctAnswer:
            "They were concerned about the safety of their child being far away.",
        }),
      shuffleOptions({
          question:
            "What persuaded the narrator's parents to agree to send her to the education camp?",
          optionA: "The promise of advanced education opportunities.",
          optionB: "The assurance of safety and care for their child.",
          optionC: "The pressure from other families in the village.",
          correctAnswer: "The assurance of safety and care for their child.",
        }),
      shuffleOptions({
          question:
            "Who was the narrator's friend from the village, and why were they going to the education camp together?",
          optionA: "Mala; they both wanted to study more.",
          optionB:
            "Mala; they were the only two girls from their village attending.",
          optionC: "Mala; they were both interested in sand dunes.",
          correctAnswer:
            "Mala; they were the only two girls from their village attending.",
        }),
      shuffleOptions({
          question:
            "What did the narrator and Mala wonder about as they anticipated the unknown place of the education camp?",
          optionA: "Whether there would be sand dunes.",
          optionB: "If there would be hills to climb.",
          optionC: "If there would be a desert.",
          correctAnswer: "Whether there would be sand dunes.",
        }),
      shuffleOptions({
          question: "Why was the narrator nervous the day before leaving home?",
          optionA: "She was afraid of failing in the exams.",
          optionB: "She couldn't imagine living without her parents and goats.",
          optionC: "She was worried about making new friends.",
          correctAnswer:
            "She couldn't imagine living without her parents and goats.",
        }),
      shuffleOptions({
          question:
            "What did the narrator do to reassure her parents while at the education camp?",
          optionA: "Sent messages telling them not to worry.",
          optionB: "Visited them regularly.",
          optionC: "Refused to participate in any activities.",
          correctAnswer: "Sent messages telling them not to worry.",
        }),
      shuffleOptions({
          question:
            "Why was the narrator sad when she passed the fifth standard examination?",
          optionA: "She didn't want to leave the camp.",
          optionB: "She realized she would never see her parents again.",
          optionC: "She would miss her new friends.",
          correctAnswer: "She would miss her new friends.",
        }),
      shuffleOptions({
          question:
            "What changed in the narrator after returning home from the education camp?",
          optionA: "She became more reserved.",
          optionB: "She no longer liked studying.",
          optionC: "She became a different person and wanted to go to school.",
          correctAnswer:
            "She became a different person and wanted to go to school.",
        }),
      shuffleOptions({
          question:
            "What did the narrator and Mala decide to do after their positive experience at the education camp?",
          optionA: "Become teachers.",
          optionB: "Start their own camp.",
          optionC: "Go to a city for further education.",
          correctAnswer: "Go to a city for further education.",
        }),
      shuffleOptions({
          question:
            "How did the villagers react when the narrator shared her positive experience about the education camp?",
          optionA: "They decided to send their daughters to the camp.",
          optionB: "They were skeptical and didn't believe her.",
          optionC: "They were indifferent and showed no interest.",
          correctAnswer: "They decided to send their daughters to the camp.",
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
            "The narrator's parents initially resisted sending her to the education camp because they believed ________________.",
          optionA: "Education is not important for villagers.",
          optionB: "Girls should learn household work.",
          optionC: "Sending a child far away is dangerous.",
          correctAnswer: "Education is not important for villagers.",
        }),
      shuffleOptions({
          question:
            "The parents finally agreed to send the narrator to the education camp because they felt compelled to do so when ________________.",
          optionA: "Other families decided to send their children.",
          optionB: "The government insisted on it.",
          optionC: "They believed it would benefit the narrator.",
          correctAnswer: "Other families decided to send their children.",
        }),
      shuffleOptions({
          question:
            "Mala and the narrator were the ________________ from their village attending the education camp.",
          optionA: "First two girls",
          optionB: "Only two girls",
          optionC: "Oldest two girls",
          correctAnswer: "Only two girls",
        }),
      shuffleOptions({
          question:
            "The narrator and Mala wondered if there would be ________________ in the unknown place.",
          optionA: "Hills",
          optionB: "Sand dunes",
          optionC: "Deserts",
          correctAnswer: "Sand dunes",
        }),
      shuffleOptions({
          question:
            "Before leaving for the camp, the narrator was nervous because she couldn't imagine living without ________________.",
          optionA: "Friends",
          optionB: "Parents and goats",
          optionC: "Books",
          correctAnswer: "Parents and goats",
        }),
      shuffleOptions({
          question:
            "The narrator reassured her parents by ________________ during her time at the camp.",
          optionA: "Visiting them regularly",
          optionB: "Sending messages telling them not to worry",
          optionC: "Refusing to participate in activities",
          correctAnswer: "Sending messages telling them not to worry",
        }),
      shuffleOptions({
          question:
            "The narrator passed the ________________ examination at the end of the term.",
          optionA: "Fourth standard",
          optionB: "Fifth standard",
          optionC: "Sixth standard",
          correctAnswer: "Fifth standard",
        }),
      shuffleOptions({
          question:
            "The narrator felt both happy and sad upon returning home because ________________.",
          optionA: "She missed the camp",
          optionB: "She would never see her new friends again",
          optionC: "Her parents were not happy to see her",
          correctAnswer: "She would never see her new friends again",
        }),
      shuffleOptions({
          question:
            "The narrator expressed the desire to go to school to study more, and her friend Mala agreed to join if ________________.",
          optionA: "The school was in the next village.",
          optionB: "The narrator became a teacher.",
          optionC: "Mala's parents allowed her.",
          correctAnswer: "The narrator became a teacher.",
        }),
      shuffleOptions({
          question:
            "The good news for the narrator and Mala was that a new school was coming up just ________________ away in the next village.",
          optionA: "A few meters",
          optionB: "A kilometer",
          optionC: "Two kilometers",
          correctAnswer: "A kilometer",
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
            "The narrator's parents initially believed that education was not beneficial for villagers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The parents agreed to send the narrator to the education camp because they believed it would benefit her.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Mala and the narrator were the first two girls from their village attending the education camp.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The narrator and Mala wondered if there would be hills in the unknown place.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Before leaving for the camp, the narrator was nervous because she could not imagine living without her parents and goats.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The narrator reassured her parents by refusing to participate in any activities during her time at the camp.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The narrator passed the fifth standard examination at the end of the term.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The narrator felt both happy and sad upon returning home because she would never see her new friends again.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The narrator expressed the desire to go to school to study more, and her friend Mala agreed to join if the narrator became a teacher.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The good news for the narrator and Mala was that a new school was coming up just two kilometers away in the next village.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
