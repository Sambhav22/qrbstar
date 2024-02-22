export const chapter = "Chapter - 6: Christmas Every Day ";
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
          "What did the little girl want every day instead of the usual once-a-year Christmas?",
        optionA: "Little pigs",
        optionB: "Thanksgiving feasts",
        optionC: "Christmas",
        correctAnswer: "Christmas",
     }),
      shuffleOptions({
        question:
          "How did the little girl's family react when they had Christmas every day?",
        optionA: "They were excited and happy.",
        optionB: "They were puzzled and cross.",
        optionC: "They were grateful and content.",
        correctAnswer: "They were puzzled and cross.",
     }),
      shuffleOptions({
        question: "What happened to the woods and orchards in the story?",
        optionA: "They were transformed into Christmas markets.",
        optionB: "They were cut down to make Christmas trees.",
        optionC: "They were decorated with lights and ornaments.",
        correctAnswer: "They were cut down to make Christmas trees.",
     }),
      shuffleOptions({
        question:
          "What did the little girl do when she couldn't take any more Christmas?",
        optionA: "She ran away from home.",
        optionB: "She shared her presents with others.",
        optionC: "She had a breakdown and became crazy.",
        correctAnswer: "She had a breakdown and became crazy.",
     }),
      shuffleOptions({
        question: "Why did the little girl's family stop playing with her?",
        optionA:
          "Because they were too busy with their own Christmas celebrations.",
        optionB: "Because she talked about her dreams.",
        optionC: "Because they blamed her for the continuous Christmases.",
        correctAnswer:
          "Because they blamed her for the continuous Christmases.",
     }),
      shuffleOptions({
        question:
          "How did the little girl try to stop the continuous Christmases?",
        optionA: "By sending letters to the Christmas Fairy.",
        optionB: "By eating less candy.",
        optionC: "By going to church and praying.",
        correctAnswer: "By sending letters to the Christmas Fairy.",
     }),
      shuffleOptions({
        question:
          "What happened when the little girl went to the Christmas Fairy's house to stop the Christmases?",
        optionA: "She received a warm welcome.",
        optionB: "She met the Christmas Fairy in person.",
        optionC: "She was turned away with excuses.",
        correctAnswer: "She was turned away with excuses.",
     }),
      shuffleOptions({
        question:
          "How did the little girl's family respond to her request to go to church on Thanksgiving?",
        optionA: "They agreed and went to church.",
        optionB:
          "They told her all the cakes had been eaten for her Christmas dinners.",
        optionC: "They were excited and eagerly joined her.",
        correctAnswer:
          "They told her all the cakes had been eaten for her Christmas dinners.",
     }),
      shuffleOptions({
        question:
          "How did the little girl finally resolve her situation with the continuous Christmases?",
        optionA: "She continued to enjoy them.",
        optionB: "She managed to stop them.",
        optionC: "She went on a vacation to avoid them.",
        correctAnswer: "She continued to enjoy them.",
     }),
      shuffleOptions({
        question:
          "What was the ultimate fate of the little girl's voice in the story?",
        optionA: "She lost her voice from singing carols.",
        optionB:
          "She couldn't make a sound because she had talked about Christmas too much.",
        optionC: "She had a beautiful singing voice throughout the story.",
        correctAnswer:
          "She couldn't make a sound because she had talked about Christmas too much.",
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
          "What did the little girl want every day instead of the usual once-a-year Christmas? She wanted it to be ________ every day in the year.",
        options: ["Christmas", "Thanksgiving", "Halloween"],
        correctAnswer: "Christmas",
     }),
      shuffleOptions({
        question:
          "The little girl's father tried to beg off telling a story because he was very ________, but she insisted on hearing a story.",
        options: ["busy", "hungry", "tired"],
        correctAnswer: "busy",
     }),
      shuffleOptions({
        question:
          "The little girl got a letter from the Christmas Fairy, saying she could have Christmas every day for a ________.",
        options: ["month", "year", "week"],
        correctAnswer: "year",
     }),
      shuffleOptions({
        question:
          "After the little girl got her Christmas wish, she ate so much candy that she didn't want any ________.",
        options: ["breakfast", "lunch", "dinner"],
        correctAnswer: "breakfast",
     }),
      shuffleOptions({
        question:
          "People started cutting down woods and orchards to make Christmas ________.",
        options: ["cookies", "decorations", "trees"],
        correctAnswer: "trees",
     }),
      shuffleOptions({
        question:
          "The little girl's family began to get ________ as the continuous Christmases went on, and they had to go to the poorhouse.",
        options: ["richer", "sicker", "poorer"],
        correctAnswer: "poorer",
     }),
      shuffleOptions({
        question:
          "The little girl wanted her family to go to church on ________, but they refused, blaming her for the continuous Christmases.",
        options: ["Thanksgiving", "Christmas Eve", "New Year's Day"],
        correctAnswer: "Thanksgiving",
     }),
      shuffleOptions({
        question:
          "The little girl's family began to ________ their presents anywhere, and the police had to intervene to clear the sidewalks.",
        options: ["share", "throw", "hide"],
        correctAnswer: "throw",
     }),
      shuffleOptions({
        question:
          "The little girl couldn't make a sound because she had talked about Christmas too much and lost her ________.",
        options: ["appetite", "voice", "presents"],
        correctAnswer: "voice",
     }),
      shuffleOptions({
        question:
          "Who finally confirmed the ownership of the dog that caused the commotion in the story?",
        options: ["Yelov", "Hukin", "Prohor"],
        correctAnswer: "Prohor",
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
          "Hukin demanded damages for his bitten finger because he couldn't use it for a week.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The dog that bit Hukin had a yellow patch on its back.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Yelov decided that the dog should be strangled because it was a valuable breed.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Yeldrin suggested that Hukin provoked the dog by offering it a biscuit.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The crowd laughed at Hukin after Prohor confirmed the dog belonged to the General's brother.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Yelov was unaware of the General's brother's visit until Prohor mentioned it.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Hukin claimed that the police officer would decide who was telling the truth based on the law.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The dog that caused the commotion was a Labradors breed.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Yelov believed that the dog's behavior was defensive rather than aggressive.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Yelov wrapped himself in his great coat and went on his way across the square after the incident.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
