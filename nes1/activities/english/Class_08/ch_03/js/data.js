export const chapter = "Chapter - 3: The Oversight ";
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
        question:
          "What does Lady Prowche compare the challenge of organizing her house party to?",
        optionA: "A chess game",
        optionB: "A Chinese puzzle",
        optionC: "A jigsaw puzzle",
        correctAnswer: "A Chinese puzzle",
     }),
      shuffleOptions({
        question:
          "What is one of Sir Richard's main expectations for Lady Prowche's house party?",
        optionA: "It should be a literary gathering.",
        optionB: "It should be a political discussion forum.",
        optionC: "It should be a peaceable party with no unpleasantness.",
        correctAnswer:
          "It should be a peaceable party with no unpleasantness.",
     }),
      shuffleOptions({
        question:
          "What caused the most significant argument at Lady Prowche's previous house party?",
        optionA: "Political differences",
        optionB: "Religious disagreements",
        optionC: "A dispute over the election date",
        correctAnswer: "A dispute over the election date",
     }),
      shuffleOptions({
        question:
          "According to Lady Prowche, what is the cause of most disputes at her house parties?",
        optionA: "Differences in political opinion",
        optionB: "Minor differences and side-issues",
        optionC: "Religious disagreements",
        correctAnswer: "Minor differences and side-issues",
     }),
      shuffleOptions({
        question:
          "What is the one thorny subject that Lady Prowche is concerned about regarding her upcoming guests?",
        optionA: "Their views on nationalism",
        optionB: "Their views on vivisection",
        optionC: "Their views on kite-flying",
        correctAnswer: "Their views on vivisection",
     }),
      shuffleOptions({
        question:
          "How does Lady Prowche suggest Lena find out the guests' opinions on vivisection?",
        optionA: "Engage in a direct argument with them at Milly's at-home",
        optionB: "Send a stamped typewritten reply postcard with a question",
        optionC:
          "Ask for their subscriptions to a charity supporting vivisection",
        correctAnswer:
          "Send a stamped typewritten reply postcard with a question",
     }),
      shuffleOptions({
        question:
          "What is the result of the postcard poll regarding vivisection?",
        optionA: "Unanimous support for vivisection",
        optionB: "Unanimous opposition to vivisection",
        optionC: "Indifference to the subject",
        correctAnswer: "Unanimous opposition to vivisection",
     }),
      shuffleOptions({
        question:
          "How did the two guests who had been selected to avoid conflict behave at the party?",
        optionA: "They engaged in civil discussions.",
        optionB: "They had heated arguments but no physical conflict.",
        optionC: "They quarreled and came to blows.",
        correctAnswer: "They quarreled and came to blows.",
     }),
      shuffleOptions({
        question:
          "What was the specific topic on which the two guests, Atkinson and Popham, disagreed?",
        optionA: "Politics",
        optionB: "Vivisection",
        optionC: "North Korea vs. South Korea",
        correctAnswer: "North Korea vs. South Korea",
     }),
      shuffleOptions({
        question:
          "How did Lady Prowche feel about the outcome of the house party?",
        optionA: "Delighted with its success",
        optionB: "Humiliated and disappointed",
        optionC: "Surprised by the guests' maturity",
        correctAnswer: "Humiliated and disappointed",
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
          "Lady Prowche compared organizing her house party to solving a _______________.",
        options: {
          a: "Maze",
          b: "Riddle",
          c: "Chinese puzzle",
        correctAnswer: "c",
     }),
      shuffleOptions({
        question:
          "Sir Richard gives Lady Prowche a free hand in choosing the guests for the house party, with the condition that it should be a _______________ party.",
        options: {
          a: "Literary",
          b: "Extravagant",
          c: "Peaceable",
        correctAnswer: "c",
     }),
      shuffleOptions({
        question:
          "According to Lady Prowche, the major lines of political or religious differences between guests don't lead to _______________.",
        options: {
          a: "Harmony",
          b: "Friction",
          c: "Laughter",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "The most significant argument at Lady Prowche's previous house party was about the _______________.",
        options: {
          a: "Upcoming election date",
          b: "Vaccination debate",
          c: "Football match",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "Lady Prowche believes that it's the minor differences and _______________ that lead to trouble during her house parties.",
        options: {
          a: "Side-issues",
          b: "Major conflicts",
          c: "Political debates",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "The two guests Lady Prowche is worried about, Atkinson and Popham, might potentially disagree on the topic of _______________.",
        options: {
          a: "Nationalism",
          b: "Vivisection",
          c: "Football",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "Lady Prowche suggests that Lena finds out the guests' opinions on vivisection by sending them a stamped _______________ postcard.",
        options: {
          a: "Handwritten",
          b: "Typewritten reply",
          c: "Blank",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "The result of the postcard poll showed unanimous _______________ to experiments on living animals for scientific research.",
        options: {
          a: "Support",
          b: "Opposition",
          c: "Indifference",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "At the house party, Atkinson and Popham, who were supposed to avoid conflict, ended up _______________.",
        options: {
          a: "Engaging in civil discussions",
          b: "Having heated arguments",
          c: "Bonding over their love for football",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question:
          "The major disagreement between Atkinson and Popham at the house party was about _______________.",
        options: {
          a: "Politics",
          b: "Religion",
          c: "North Korea vs. South Korea",
        correctAnswer: "c",
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
          "Marcella had dolls from various countries, each unique in itself.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "Raggedy Ann's yarn hair covered one of her shoe-button eyes.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question: "Annabel-Lee and Thomas were beautifully dressed dolls.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "Uncle Clem pulled at his yarn mustache when he saw the new dolls.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "The French dolly scolded Annabel-Lee and Thomas for making fun of Raggedy Ann.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "Marcella did not undress Annabel-Lee and Thomas on the first night she received them.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question: "Raggedy Ann preferred the hard floor to a soft bed.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question:
          "Annabel-Lee and Thomas expressed their regret by laughing at Raggedy Ann.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "b",
     }),
      shuffleOptions({
        question: "Annabel-Lee and Thomas praised Raggedy Ann for her beauty.",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
     }),
      shuffleOptions({
        question: "Raggedy Ann had a candy heart with the words 'I LOVE YOU.'",
        options: {
          a: "True",
          b: "False",
        correctAnswer: "a",
      }),
    ]),
  }
}

export var activityData;
