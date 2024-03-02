export const chapter = "Chapter - 13: The Mobile Phone";
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
        question: "What is the primary concern expressed in the text?",
        optionA: "The nutritional habits of children",
        optionB: "The impact of mobile screens on children",
        optionC: "The importance of outdoor activities for children",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question:
          "According to the text, what is the author's opinion of mobile screens for children?",
        optionA: "They are a valuable educational tool.",
        optionB: "They should be used in moderation.",
        optionC: "They should be avoided altogether.",
        correctAnswer: "C",
     }),
      shuffleOptions({
        question:
          "What does the author say about the effect of mobile screens on a child's brain?",
        optionA: "It enhances their creativity.",
        optionB: "It makes them more intelligent.",
        optionC: "It rots the sense in the head and kills imagination.",
        correctAnswer: "C",
     }),
      shuffleOptions({
        question:
          "How does the author suggest parents can entertain their children without mobile screens?",
        optionA: "Encourage them to play outside.",
        optionB: "Provide them with a variety of books to read.",
        optionC: "Let them watch television instead.",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question:
          "According to the text, what did children do before the invention of mobile screens?",
        optionA: "They played video games.",
        optionB: "They engaged in outdoor activities.",
        optionC: "They used to read books.",
        correctAnswer: "C",
     }),
      shuffleOptions({
        question:
          "What does the author suggest replacing the mobile screen with?",
        optionA: "Outdoor play equipment",
        optionB: "A lovely bookshelf with books",
        optionC: "A bigger television",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question: "How does the text describe the impact of books on children?",
        optionA: "Books are boring and unhelpful.",
        optionB: "Books stimulate children's imaginations and bring joy.",
        optionC: "Books are outdated and irrelevant.",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question:
          "What kind of stories are mentioned that children used to read in the text?",
        optionA: "Stories about cooking and recipes",
        optionB: "Adventure and fantasy tales",
        optionC: "Historical non-fiction",
        correctAnswer: "B",
     }),
      shuffleOptions({
        question:
          "What is the author's attitude towards mobile screens in the text?",
        optionA: "They are necessary for modern education.",
        optionB: "They are a source of joy for children.",
        optionC: "They are portrayed in a negative light.",
        correctAnswer: "C",
     }),
      shuffleOptions({
        question:
          "According to the text, what will happen to children if mobile screens are replaced with books?",
        optionA: "They will become bored and unhappy.",
        optionB: "They will grow more curious and enthusiastic readers.",
        optionC: "They will miss out on modern technology.",
        correctAnswer: "B",
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
          "In almost every house we've been, we've watched them gaping at the ___________.",
        options: ["sky", "screen", "book"],
        correctAnswer: "screen",
     }),
      shuffleOptions({
        question:
          "They loll and slop and lounge about, And stare until their eyes ___________.",
        options: ["close", "pop out", "brighten"],
        correctAnswer: "pop out",
     }),
      shuffleOptions({
        question:
          "But did you ever stop to think, To wonder just exactly what This does to your beloved ________?",
        options: ["pet", "child", "neighbor"],
        correctAnswer: "child",
     }),
      shuffleOptions({
        question: "HIS BRAIN BECOMES AS ________ AS CHEESE!",
        options: ["sharp", "soft", "clear"],
        correctAnswer: "soft",
     }),
      shuffleOptions({
        question:
          "We'll answer this by asking you, 'What used the darling ones to do? How used they keep themselves ___________ Before this monster was invented?'",
        options: ["busy", "entertained", "contented"],
        correctAnswer: "contented",
     }),
      shuffleOptions({
        question:
          "Oh, books, what books they used to ___________ Those children living long ago!",
        options: ["enjoy", "hate", "read"],
        correctAnswer: "read",
     }),
      shuffleOptions({
        question:
          "Such wondrous, fine, fantastic tales Of ___________, gypsies, queens, and whales",
        options: ["dragons", "robots", "cars"],
        correctAnswer: "dragons",
     }),
      shuffleOptions({
        question:
          "And Mr. Toad, and bless my soul, There's Mr. Rat and Mr. Mole— Oh, books, what books they used to ___________ Those children living long ago!",
        options: ["detest", "treasure", "miss"],
        correctAnswer: "treasure",
     }),
      shuffleOptions({
        question:
          "So please, oh please, we beg, we ___________; Go throw your mobile set away, And in its place you can install",
        options: ["pray", "play", "nag"],
        correctAnswer: "pray",
     }),
      shuffleOptions({
        question:
          "And later, each and every kid Will love you more for what you ___________.",
        options: ["did", "didn't do", "ignored"],
        correctAnswer: "did",
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
          "The author suggests that children should be kept away from mobile screens.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "According to the text, mobile screens have a positive impact on children's creativity.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The author encourages parents to replace mobile screens with a bookshelf filled with books.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text mentions that children used to engage in outdoor activities before the invention of mobile screens.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The author believes that mobile screens are essential for modern education.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "According to the text, books stimulate children's imaginations and bring joy.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The text mentions that children should play video games instead of reading books.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The author thinks that mobile screens are a source of joy for children.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The text advises parents to continue allowing their children to watch television.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "According to the text, replacing mobile screens with books will make children miss out on modern technology.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
