export const chapter = "Chapter - 2: Still I Rise ";
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
        question: "What is the central theme of the text?",
        optionA: "Resilience and empowerment",
        optionB: "Sorrow and despair",
        optionC: "Hopelessness and oppression",
        correctAnswer: "Resilience and empowerment",
     }),
      shuffleOptions({
        question: "What does the speaker compare their walk to in the text?",
        optionA: "Oil wells pumping in a living room",
        optionB: "Moons and suns",
        optionC: "Tides and hopes springing high",
        correctAnswer: "Oil wells pumping in a living room",
     }),
      shuffleOptions({
        question:
          "How does the speaker respond to attempts to bring them down with hateful words?",
        optionA: "They wither and fall",
        optionB: "They laugh it off",
        optionC: "They respond with anger",
        correctAnswer: "They laugh it off",
     }),
      shuffleOptions({
        question:
          "What is the significance of the phrase, 'I am the dream and the hope of the slave'?",
        optionA: "It represents a longing for freedom",
        optionB: "It signifies the speaker's connection to their heritage",
        optionC: "It expresses a desire for revenge",
        correctAnswer:
          "It signifies the speaker's connection to their heritage",
     }),
      shuffleOptions({
        question:
          "In the text, what does the speaker say will happen if they are cut with hateful words?",
        optionA: "They will wither and die",
        optionB: "They will rise like air",
        optionC: "They will become silent",
        correctAnswer: "They will rise like air",
     }),
      shuffleOptions({
        question: "What is the speaker's attitude in the text?",
        optionA: "Defeated and submissive",
        optionB: "Confused and uncertain",
        optionC: "Resilient and determined",
        correctAnswer: "Resilient and determined",
     }),
      shuffleOptions({
        question:
          "According to the text, what does the speaker do with their laughter?",
        optionA: "They hide it from others",
        optionB: "They laugh like they've got gold mines",
        optionC: "They suppress it to avoid offending others",
        correctAnswer: "They laugh like they've got gold mines",
     }),
      shuffleOptions({
        question:
          "What is the significance of the line 'You may trod me in the very dirt, but still, like dust, I'll rise'?",
        optionA: "It symbolizes the speaker's ability to overcome oppression",
        optionB: "It signifies the speaker's weakness and defeat",
        optionC: "It reflects the speaker's fear of getting dirty",
        correctAnswer:
          "It symbolizes the speaker's ability to overcome oppression",
     }),
      shuffleOptions({
        question: "How does the speaker describe their ability to rise?",
        optionA: "Like a phoenix from the ashes",
        optionB: "Like air and dust",
        optionC: "Like a powerful wave",
        correctAnswer: "Like air and dust",
     }),
      shuffleOptions({
        question: "What is the speaker's message in the text?",
        optionA: "They will always remain weak and oppressed",
        optionB: "They are a symbol of hope and resilience",
        optionC: "They seek revenge against their oppressors",
        correctAnswer: "They are a symbol of hope and resilience",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "You may write me down in history ______________.",
        optionA: "as a legend",
        optionB: "with your bitter, twisted lies",
        optionC: "as a hero",
        correctAnswer: "with your bitter, twisted lies",
     }),
      shuffleOptions({
        question:
          "You may trod me in the very dirt, but still, like ______________, I'll rise.",
        optionA: "gold",
        optionB: "a phoenix",
        optionC: "dust",
        correctAnswer: "dust",
     }),
      shuffleOptions({
        question: "I walk like I've got oil wells ______________.",
        optionA: "in my car",
        optionB: "in my living room",
        optionC: "under my feet",
        correctAnswer: "in my living room",
     }),
      shuffleOptions({
        question:
          "Just like moons and like suns, with the certainty of ______________.",
        optionA: "darkness",
        optionB: "tides",
        optionC: "stars",
        correctAnswer: "tides",
     }),
      shuffleOptions({
        question: "Did you want to see me ______________?",
        optionA: "crying",
        optionB: "broken",
        optionC: "laughing",
        correctAnswer: "broken",
     }),
      shuffleOptions({
        question:
          "Don't you take it awful hard 'Cause I laugh like I've got ______________.",
        optionA: "a treasure",
        optionB: "gold mines",
        optionC: "a secret",
        correctAnswer: "gold mines",
     }),
      shuffleOptions({
        question: "You may shoot me with your ______________.",
        optionA: "love",
        optionB: "kindness",
        optionC: "words",
        correctAnswer: "words",
     }),
      shuffleOptions({
        question:
          "You may cut me with your eyes, You may kill me with your ______________.",
        optionA: "anger",
        optionB: "hatefulness",
        optionC: "kindness",
        correctAnswer: "hatefulness",
     }),
      shuffleOptions({
        question: "Out of the huts of history's ______________ I rise.",
        optionA: "shadow",
        optionB: "shame",
        optionC: "glory",
        correctAnswer: "shame",
     }),
      shuffleOptions({
        question: "I am the dream and the hope of the ______________.",
        optionA: "future",
        optionB: "lost",
        optionC: "slave",
        correctAnswer: "slave",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "The speaker in the text walks with the confidence of having oil wells pumping in their living room.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The speaker is willing to allow hateful words to bring them down.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text expresses a sense of resilience and determination in the face of adversity.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The speaker's attitude is submissive and defeated throughout the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The speaker suggests that they are a symbol of hope and empowerment.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text primarily focuses on the theme of sorrow and despair.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The speaker's laughter is described as a sign of having gold mines.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The speaker's haughtiness offends others, as mentioned in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text conveys the idea that the speaker seeks revenge against their oppressors.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The speaker is described as a symbol of hope and resilience.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
