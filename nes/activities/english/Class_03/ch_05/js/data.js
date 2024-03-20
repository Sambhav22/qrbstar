export const chapter = "Chapter - 5: The Trickster";
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
        question: "What time of day is it in the text?",
        optionA: "Morning",
        optionB: "Evening",
        optionC: "Afternoon",
        correctAnswer: "Evening",
     }),
      shuffleOptions({
        question:
          "What does the narrator want to do at the beginning of the text?",
        optionA: "Hunt for food",
        optionB: "Cover themselves with wings",
        optionC: "Make a call to the crow",
        correctAnswer: "Cover themselves with wings",
     }),
      shuffleOptions({
        question: "Who does the crow call out to in the text?",
        optionA: "Cock",
        optionB: "Fox",
        optionC: "Hounds",
        correctAnswer: "Cock",
     }),
      shuffleOptions({
        question: "What is the 'good news' mentioned in the text?",
        optionA: "A new leader in the animal kingdom",
        optionB: "All animals living in peace",
        optionC: "A bountiful harvest",
        correctAnswer: "All animals living in peace",
     }),
      shuffleOptions({
        question: "What is the cock's reaction to the news?",
        optionA: "He is skeptical",
        optionB: "He is excited",
        optionC: "He is confused",
        correctAnswer: "He is skeptical",
     }),
      shuffleOptions({
        question: "What is the main idea of the 'good news' in the text?",
        optionA: "All animals will become friends",
        optionB: "No animal will kill another",
        optionC: "All animals will have a big celebration",
        correctAnswer: "No animal will kill another",
     }),
      shuffleOptions({
        question: "How does the fox feel about the news initially?",
        optionA: "He is delighted",
        optionB: "He is skeptical",
        optionC: "He is indifferent",
        correctAnswer: "He is skeptical",
     }),
      shuffleOptions({
        question:
          "What does the fox see in the distance at the end of the text?",
        optionA: "A beautiful sunset",
        optionB: "A pack of hounds",
        optionC: "A group of birds",
        correctAnswer: "A pack of hounds",
     }),
      shuffleOptions({
        question: "Why does the fox decide to leave at the end of the text?",
        optionA: "To find more food",
        optionB: "To celebrate with the hounds",
        optionC: "To avoid trouble with the hounds",
        correctAnswer: "To avoid trouble with the hounds",
     }),
      shuffleOptions({
        question: "How does the text describe the fox at the end?",
        optionA: "As a trickster",
        optionB: "As a wise leader",
        optionC: "As a friend of the cock",
        correctAnswer: "As a trickster",
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
          "The evening is wonderful, and the sun is about to set. It is the right time to ___________.",
        optionA: "sleep",
        optionB: "roost",
        optionC: "fly",
        correctAnswer: "roost",
     }),
      shuffleOptions({
        question:
          '"Hello, dear cock!" said the crow. "Yes, master fox. Did you hear the good news? What news are you ___________?"',
        optionA: "talking about",
        optionB: "shouting about",
        optionC: "whispering about",
        correctAnswer: "talking about",
     }),
      shuffleOptions({
        question:
          '"Your family and mine and all other animals have agreed to forget their differences and ________ in peace."',
        optionA: "hide",
        optionB: "fly",
        optionC: "live",
        correctAnswer: "live",
     }),
      shuffleOptions({
        question:
          '"Just think how all animals will be living in perfect peace and _________. No animal will kill another."',
        optionA: "chaos",
        optionB: "harmony",
        optionC: "conflict",
        correctAnswer: "harmony",
     }),
      shuffleOptions({
        question:
          '"I am delighted," said the cock. "Then come down. Let us hug each other and celebrate the new ___________."',
        optionA: "dawn",
        optionB: "day",
        optionC: "world",
        correctAnswer: "world",
     }),
      shuffleOptions({
        question:
          '"He is making a fool of me. Let me find out the truth. Yes, come, let us be friends ___________."',
        optionA: "forever",
        optionB: "never",
        optionC: "together",
        correctAnswer: "forever",
     }),
      shuffleOptions({
        question: '"I can see a pack of ___________ in the distance."',
        optionA: "wolves",
        optionB: "hares",
        optionC: "hounds",
        correctAnswer: "hounds",
     }),
      shuffleOptions({
        question:
          '"I think I should go away now. I shall see you soon. But why are you going away? Let us celebrate the new world ___________."',
        optionA: "alone",
        optionB: "together",
        optionC: "forever",
        correctAnswer: "together",
     }),
      shuffleOptions({
        question:
          '"I am not sure if the hounds have heard the ___________. So, it is better to leave for now."',
        optionA: "secret",
        optionB: "news",
        optionC: "message",
        correctAnswer: "news",
     }),
      shuffleOptions({
        question:
          '"The poor trickster!" exclaimed the cock as he realized the fox\'s ___________.',
        optionA: "cleverness",
        optionB: "sincerity",
        optionC: "deception",
        correctAnswer: "deception",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The evening is wonderful, and the sun is about to set.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "All animals in the story agreed to live in peace and harmony.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The fox was sincere in his intentions.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The crow called out to the hounds.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The cock decided to leave because he was afraid of the hounds.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The crow and the fox became friends forever in the end.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text suggests that no animal will harm another in the new world.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The cock was excited about the good news.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The cock thought the fox was making a fool of him.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
