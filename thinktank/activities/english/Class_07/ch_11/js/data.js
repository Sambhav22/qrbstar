export const chapter = "Chapter - 11: Patching Up";
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
        question: "Who is the central character of the story?",
        optionA: "Rajesh",
        optionB: "Ankur",
        optionC: "Jasvir",
        correctAnswer: "Ankur",
     }),
      shuffleOptions({
        question:
          "What is Ankur's usual reaction to the doorbell and telephone?",
        optionA: "He always answers them promptly.",
        optionB: "He rarely answers them without being coaxed.",
        optionC: "He doesn't mention his reaction in the text.",
        correctAnswer: "He rarely answers them without being coaxed.",
     }),
      shuffleOptions({
        question: "Why is Ankur waiting for someone to call or visit?",
        optionA: "He wants to discuss his favorite games.",
        optionB: "He wants to apologize to his friend, Jasvir.",
        optionC: "He is waiting for a delivery.",
        correctAnswer: "He wants to apologize to his friend, Jasvir.",
     }),
      shuffleOptions({
        question: "What caused the quarrel between Ankur and Jasvir?",
        optionA: "Disagreement over favorite games.",
        optionB: "Disagreement over a school assignment.",
        optionC: "Disagreement over a movie.",
        correctAnswer: "Disagreement over favorite games.",
     }),
      shuffleOptions({
        question: "Why does Ankur want Jasvir to apologize first?",
        optionA: "He believes it's the right thing to do.",
        optionB: "He's playing a game.",
        optionC: "He's too proud to apologize.",
        correctAnswer: "He's too proud to apologize.",
     }),
      shuffleOptions({
        question: "How does Ankur decide to resolve the issue with Jasvir?",
        optionA: "He decides to wait for Jasvir to apologize.",
        optionB: "He decides to apologize to Jasvir.",
        optionC: "He decides to ignore the issue.",
        correctAnswer: "He decides to apologize to Jasvir.",
     }),
      shuffleOptions({
        question:
          "What happened to Rajesh's friend who used to play the waiting game?",
        optionA: "He successfully resolved the issue with his friend.",
        optionB: "He lost his best friend forever.",
        optionC: "He gave up the waiting game.",
        correctAnswer: "He lost his best friend forever.",
     }),
      shuffleOptions({
        question:
          "What is Ankur's main fear regarding Jasvir making new friends?",
        optionA: "That Jasvir will no longer like him.",
        optionB: "That he will be left friendless.",
        optionC: "That Jasvir will like his new friends more.",
        correctAnswer: "That he will be left friendless.",
     }),
      shuffleOptions({
        question: "Where does Ankur go at the end of the story?",
        optionA: "He goes to the park.",
        optionB: "He goes to a movie.",
        optionC: "He goes to Jasvir's house to patch up.",
        correctAnswer: "He goes to Jasvir's house to patch up.",
     }),
      shuffleOptions({
        question:
          "What does Ankur's action at the end of the story demonstrate?",
        optionA: "The importance of winning an argument.",
        optionB: "The value of friendship and reconciliation.",
        optionC: "The significance of pride in relationships.",
        correctAnswer: "The value of friendship and reconciliation.",
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
          "What did Rajesh do in the courtyard after leaving the bed on the weekend? He did some _____.",
        correctAnswer: "Yoga",
     }),
      shuffleOptions({
        question:
          "Ankur rushed to the main door after the doorbell rang. He was waiting for a call from his friend _____.",
        correctAnswer: "Jasvir",
     }),
      shuffleOptions({
        question:
          "Ankur quarreled with Jasvir over their favorite _____ at school.",
        correctAnswer: "Games",
     }),
      shuffleOptions({
        question:
          "Ankur decided to patch up with Jasvir because he was worried about becoming _____.",
        correctAnswer: "Lonely",
     }),
      shuffleOptions({
        question:
          "Rajesh's friend, who used to play the waiting game, lost his best friend because of a _____ transfer.",
        correctAnswer: "Job",
     }),
      shuffleOptions({
        question:
          "Ankur put on his _____ before heading to Jasvir's house to patch up.",
        correctAnswer: "Shoes",
     }),
      shuffleOptions({
        question:
          "Rajesh's story highlights the importance of resolving conflicts and not letting _____ come in the way of friendship.",
        correctAnswer: "Pride",
     }),
      shuffleOptions({
        question:
          "Ankur was determined to _____ with Jasvir and do what best friends are expected to do.",
        correctAnswer: "Patch up",
     }),
      shuffleOptions({
        question:
          "In the end, Ankur's action demonstrates the value of _____ and reconciliation in friendships.",
        correctAnswer: "Friendship",
     }),
      shuffleOptions({
        question:
          "Ankur was initially playing the 'waiting game,' but he realized that it was better to take the _____ step.",
        correctAnswer: "First",
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
          "Marian arrived at the Old Ladies' Home with a bouquet of flowers.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Marian was familiar with some of the residents at the Old Ladies' Home.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Old Ladies' Home was a large, modern building made of steel and glass.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The first old woman placed the potted plant on a high shelf where it could hardly be seen.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The second old woman was welcoming and friendly towards Marian.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The first old woman accused Marian of being a talkative stranger.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Marian felt comfortable and relaxed in the room with the two old ladies.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The old woman in bed threatened to ring a bell when she became upset.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The old ladies' emotional response towards Marian was one of annoyance and frustration as she left.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The nurse at the desk was reading a magazine when Marian left the Old Ladies' Home.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
