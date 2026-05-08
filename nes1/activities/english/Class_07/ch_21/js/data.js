export const chapter = "Chapter -21: The Stranger Mother";
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
            "What is the protagonist doing at the beginning of the story?",
          optionA: "Waiting for a bus",
          optionB: "Waiting for a friend",
          optionC: "Waiting for a train",
          correctAnswer: "Waiting for a train",
        }),
      shuffleOptions({
          question: "Why is the protagonist at Ambala station?",
          optionA: "Visiting friends",
          optionB: "Going to school",
          optionC: "Meeting family",
          correctAnswer: "Going to school",
        }),
      shuffleOptions({
          question:
            "How does the woman initiate a conversation with the protagonist?",
          optionA: "She asks about his family",
          optionB: "She offers him sweets and tea",
          optionC: "She compliments his appearance",
          correctAnswer: "She offers him sweets and tea",
        }),
      shuffleOptions({
          question:
            "What is the woman's demeanor that attracts the protagonist?",
          optionA: "Assertive",
          optionB: "Poor",
          optionC: "Dignified and kind",
          correctAnswer: "Dignified and kind",
        }),
      shuffleOptions({
          question:
            "Why does the woman clasp the protagonist's arm when the boy crosses the rails?",
          optionA: "She is afraid for the boy",
          optionB: "She is angry with the boy",
          optionC: "She wants to protect the protagonist",
          correctAnswer: "She is afraid for the boy",
        }),
      shuffleOptions({
          question:
            "How does Satish's mother react when she discovers the woman isn't the protagonist's real mother?",
          optionA: "Surprised but understanding",
          optionB: "Angry and accusatory",
          optionC: "Disinterested",
          correctAnswer: "Angry and accusatory",
        }),
      shuffleOptions({
          question:
            "What does Satish's mother warn the protagonist about before boarding the train?",
          optionA: "Not to talk to strangers",
          optionB: "Not to eat on the train",
          optionC: "Not to jump off moving trains",
          correctAnswer: "Not to talk to strangers",
        }),
      shuffleOptions({
          question:
            "How does the protagonist feel about Satish's mother's advice?",
          optionA: "Grateful",
          optionB: "Resentful",
          optionC: "Indifferent",
          correctAnswer: "Resentful",
        }),
      shuffleOptions({
          question: "What does the protagonist do as the train starts moving?",
          optionA: "Jumps off the train",
          optionB: "Kisses the woman's cheek",
          optionC: "Ignores the woman",
          correctAnswer: "Kisses the woman's cheek",
        }),
      shuffleOptions({
          question: "How does the story end?",
          optionA: "The protagonist waves enthusiastically",
          optionB:
            "The protagonist watches the woman until she is lost in the crowd",
          optionC: "The protagonist shouts goodbye loudly",
          correctAnswer:
            "The protagonist watches the woman until she is lost in the crowd",
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
            "It was the protagonist's __________ year at boarding school.",
          optionA: "first",
          optionB: "second",
          optionC: "third",
          correctAnswer: "second",
        }),
      shuffleOptions({
          question:
            "The protagonist was waiting for the north-bound train on Platform No. __________.",
          optionA: "6",
          optionB: "8",
          optionC: "10",
          correctAnswer: "8",
        }),
      shuffleOptions({
          question:
            "The protagonist had arrived at Ambala early in the evening and had to wait till __________ for the train.",
          optionA: "ten",
          optionB: "eleven",
          optionC: "twelve",
          correctAnswer: "twelve",
        }),
      shuffleOptions({
          question:
            "Most of the time, the protagonist had been pacing up and down the platform, browsing at the __________, or feeding broken biscuits to stray dogs.",
          optionA: "food court",
          optionB: "bookstall",
          optionC: "ticket counter",
          correctAnswer: "bookstall",
        }),
      shuffleOptions({
          question:
            "The woman who approached the protagonist was dressed in a __________ sari.",
          optionA: "red",
          optionB: "white",
          optionC: "blue",
          correctAnswer: "white",
        }),
      shuffleOptions({
          question:
            'The woman asked the protagonist if his parents came to see him off, and he replied, "I don\'t live here. I had to change trains. Anyway, I can travel __________."',
          optionA: "alone",
          optionB: "with friends",
          optionC: "with family",
          correctAnswer: "alone",
        }),
      shuffleOptions({
          question:
            "The woman took the protagonist to the station dining room and ordered tea, samosas, and __________.",
          optionA: "sandwiches",
          optionB: "jalebis",
          optionC: "burgers",
          correctAnswer: "jalebis",
        }),
      shuffleOptions({
          question:
            "The protagonist began to talk freely under the influence of tea and sweets, and he told the woman about his school, his friends, and his likes and dislikes, but not about his __________.",
          optionA: "hobbies",
          optionB: "family",
          optionC: "hometown",
          correctAnswer: "family",
        }),
      shuffleOptions({
          question:
            "The woman clasped the protagonist's arm when a boy leapt off the platform and ran across the __________.",
          optionA: "tracks",
          optionB: "road",
          optionC: "bridge",
          correctAnswer: "tracks",
        }),
      shuffleOptions({
          question:
            "Satish's mother warned the protagonist not to talk to strangers and advised him to be very careful, especially at a big station like this, as there are so many __________ hanging about.",
          optionA: "friends",
          optionB: "suspicious characters",
          optionC: "security guards",
          correctAnswer: "suspicious characters",
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
          question: "The protagonist was waiting for a bus at Ambala station.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The protagonist's parents came to see him off at Ambala station.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "The woman who approached the protagonist wore a red sari.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The woman ordered tea, samosas, and burgers in the station dining room.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The protagonist talked freely about his family, school, and friends with the woman.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The woman clutched the protagonist's arm when a boy leapt off the platform.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Satish's mother was pleased to know that the protagonist could travel alone.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The protagonist felt grateful for Satish's mother's advice about talking to strangers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The woman kissed the protagonist when the train started moving.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The story ends with the protagonist waving enthusiastically to the woman on the platform.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
   }),
    ]),
  }
}

export var activityData;
