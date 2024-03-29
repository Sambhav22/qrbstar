export const chapter = "Chapter - 8: Amy's Question ";
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
          "What is Amy doing when her mother calls her from the garden?",
        optionA: "Playing outside",
        optionB: "Watching the sunset",
        optionC: "Not responding",
        correctAnswer: "Not responding",
     }),
      shuffleOptions({
        question: "What is the description of the sky during the sunset?",
        optionA: "Filled with clouds",
        optionB: "Tinged with gold and purple",
        optionC: "Dark and starry",
        correctAnswer: "Tinged with gold and purple",
     }),
      shuffleOptions({
        question: "Where is Amy when her mother initially calls her?",
        optionA: "In the garden",
        optionB: "In her bedroom",
        optionC: "At the lake",
        correctAnswer: "In her bedroom",
     }),
      shuffleOptions({
        question:
          "How does Amy's mother describe the moonlit evening's effect on Amy?",
        optionA: "Filling her with fear",
        optionB: "Making her feel quiet and happy",
        optionC: "Inducing sleep",
        correctAnswer: "Making her feel quiet and happy",
     }),
      shuffleOptions({
        question:
          "Why does Amy's mother say God made everything that is good and beautiful?",
        optionA: "To serve man's material needs",
        optionB: "To serve man's spiritual needs",
        optionC: "To benefit the animals",
        correctAnswer: "To serve man's spiritual needs",
     }),
      shuffleOptions({
        question:
          "What is Amy's initial response when her mother asks if she understands the concept of God's reflection in nature?",
        optionA: "Amy understands it fully",
        optionB: "Amy doesn't understand at all",
        optionC: "Amy understands only a little",
        correctAnswer: "Amy understands only a little",
     }),
      shuffleOptions({
        question: "What does the moon symbolize in the text?",
        optionA: "God's love",
        optionB: "A reflection of the sun",
        optionC: "Cold and calm beauty",
        correctAnswer: "Cold and calm beauty",
     }),
      shuffleOptions({
        question: "What does Amy see in the water, according to her mother?",
        optionA: "An image of God's love",
        optionB: "An image of God's truth",
        optionC: "An image of God's anger",
        correctAnswer: "An image of God's truth",
     }),
      shuffleOptions({
        question:
          "What fills Amy's heart when she gazes at lovely, grand, and beautiful things of nature?",
        optionA: "Fear",
        optionB: "Peace or delight",
        optionC: "Sadness",
        correctAnswer: "Peace or delight",
     }),
      shuffleOptions({
        question: "Who arrives at the end of the text?",
        optionA: "Amy's friend",
        optionB: "Amy's brother",
        optionC: "Amy's father",
        correctAnswer: "Amy's father",
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
          "Mrs. Grove called from the door that opened towards the garden. But no ______ came.",
        optionA: "response",
        optionB: "moon",
        optionC: "stars",
        correctAnswer: "response",
     }),
      shuffleOptions({
        question:
          "The sun had set half an hour before, and his parting rays were faintly tingeing with gold and purple, few clouds that lay just along the edge of the ______ sky.",
        optionA: "western",
        optionB: "eastern",
        optionC: "southern",
        correctAnswer: "western",
     }),
      shuffleOptions({
        question:
          'Where is Amy when her mother initially calls her?\n"I saw her go up stairs with her sweater in her hand half an hour ago," said Amy\'s brother, who was busily at work with his knife on a block of pine wood, trying to make a ______.',
        optionA: "boat",
        optionB: "kite",
        optionC: "house",
        correctAnswer: "boat",
     }),
      shuffleOptions({
        question:
          "Mrs. Grove went to the foot of the stairs, and called again. But there was no ______.",
        optionA: "answer",
        optionB: "light",
        optionC: "noise",
        correctAnswer: "answer",
     }),
      shuffleOptions({
        question: '"And it makes me feel so quiet and ______."',
        optionA: "happy",
        optionB: "sad",
        optionC: "angry",
        correctAnswer: "happy",
     }),
      shuffleOptions({
        question:
          '"Shall I tell you the reason?"\n"O, yes, mother, dear! What is the ______?"',
        optionA: "question",
        optionB: "answer",
        optionC: "reason",
        correctAnswer: "reason",
     }),
      shuffleOptions({
        question:
          '"And yet," answered her mother, "you said only a minute ago that the beauty of this moonlit evening made you feel so quiet and ______."',
        optionA: "tired",
        optionB: "happy",
        optionC: "afraid",
        correctAnswer: "happy",
     }),
      shuffleOptions({
        question:
          '"God made everything that is good and beautiful for the sake of man, as I have just told you; and each of these good and beautiful things of creation comes to us with a double blessing,-one for our bodies and the other for our ______."',
        optionA: "minds",
        optionB: "hearts",
        optionC: "souls",
        correctAnswer: "souls",
     }),
      shuffleOptions({
        question:
          '"The moon and stars not only give light this evening to make dark ways plain, but their calm presence fills our souls with ______."',
        optionA: "sadness",
        optionB: "anger",
        optionC: "peace",
        correctAnswer: "peace",
     }),
      shuffleOptions({
        question:
          '"In the water we see an image of his truth, that, if learned, will satisfy our thirsty ______ and cleanse us from impurity."',
        optionA: "hearts",
        optionB: "souls",
        optionC: "minds",
        correctAnswer: "souls",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Amy's mother called from the door in the morning.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Amy's brother was making a kite.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The sun had already risen half an hour before.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Amy's mother went outside to look for her.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Amy felt sad and scared.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Everything in nature reflects something of God's nature.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The moon and stars give light by night.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The moon is warm and brilliant like the sun.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Amy understands fully what her mother explained.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "God's likeness is found in everything in nature.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
