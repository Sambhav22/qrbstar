export const chapter = "Chapter - 6: 'u' Sound";
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
        question: "What does the duck do in the text?",
        optionA: "Peck at the bun",
        optionB: "Pull the bus",
        optionC: "Run in the ground",
        correctAnswer: "Peck at the bun",
     }),
      shuffleOptions({
        question: "How does the camel walk in the text?",
        optionA: "With a hump",
        optionB: "With a bump",
        optionC: "With a cub",
        correctAnswer: "With a bump",
     }),
      shuffleOptions({
        question: "What did the bull do in the text?",
        optionA: "Run in the ground",
        optionB: "Pulled the bus",
        optionC: "Pecked at the bun",
        correctAnswer: "Pulled the bus",
     }),
      shuffleOptions({
        question: "Who jumped over the gun in the text?",
        optionA: "Rumy",
        optionB: "The pup",
        optionC: "A hunter",
        correctAnswer: "A hunter",
     }),
      shuffleOptions({
        question: "What did Rumy name her pup in the text?",
        optionA: "Drup",
        optionB: "Cub",
        optionC: "Bun",
        correctAnswer: "Drup",
     }),
      shuffleOptions({
        question: "How did the pup respond when Rumy asked it to run?",
        optionA: "It ran with full speed",
        optionB: "It shook its head and looked at the bun",
        optionC: "It ignored Rumy",
        correctAnswer: "It shook its head and looked at the bun",
     }),
      shuffleOptions({
        question: "What did Rumy and her pup play with in the text?",
        optionA: "A cub",
        optionB: "A hump",
        optionC: "A bun",
        correctAnswer: "A bun",
     }),
      shuffleOptions({
        question: "What did the text describe the pup as?",
        optionA: "A hunter",
        optionB: "A cub",
        optionC: "A bull",
        correctAnswer: "A cub",
     }),
      shuffleOptions({
        question: "Where did the pup run in the text?",
        optionA: "In the ground",
        optionB: "In the bush",
        optionC: "In the bus",
        correctAnswer: "In the bush",
     }),
      shuffleOptions({
        question: "What does the text describe the pup as looking like?",
        optionA: "A lion",
        optionB: "A cub",
        optionC: "A hump",
        correctAnswer: "A cub",
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
          "Rumy played with her _______________ which looked like a cub.",
        optionA: "puppy",
        optionB: "friend",
        optionC: "ball",
        correctAnswer: "puppy",
     }),
      shuffleOptions({
        question: 'She said, "Pup! Your name is _______. Now run."',
        optionA: "Drup",
        optionB: "Hump",
        optionC: "Cub",
        correctAnswer: "Drup",
     }),
      shuffleOptions({
        question: "The pup shook its head and looked at the ___________.",
        optionA: "sky",
        optionB: "ground",
        optionC: "bun",
        correctAnswer: "bun",
     }),
      shuffleOptions({
        question: '"You will get the bun only if you _______," said Rumy.',
        optionA: "jump",
        optionB: "sit",
        optionC: "run",
        correctAnswer: "run",
     }),
      shuffleOptions({
        question: "The pup ran in the _______ with full speed.",
        optionA: "bush",
        optionB: "park",
        optionC: "river",
        correctAnswer: "bush",
     }),
      shuffleOptions({
        question: "Rumy played with her puppy, which looked like a _______.",
        optionA: "bear",
        optionB: "cub",
        optionC: "lion",
        correctAnswer: "cub",
     }),
      shuffleOptions({
        question: "The duck is _______ at the bun.",
        optionA: "sleeping",
        optionB: "pecking",
        optionC: "dancing",
        correctAnswer: "pecking",
     }),
      shuffleOptions({
        question: "The bull _______ the bus.",
        optionA: "pushed",
        optionB: "pulled",
        optionC: "kicked",
        correctAnswer: "pulled",
     }),
      shuffleOptions({
        question: "A hunter _______ over the gun.",
        optionA: "jumped",
        optionB: "crawled",
        optionC: "slept",
        correctAnswer: "jumped",
     }),
      shuffleOptions({
        question: "The camel had a hump and walked with a _______.",
        optionA: "skip",
        optionB: "jump",
        optionC: "bump",
        correctAnswer: "bump",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The duck pecked at the bun.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Rumy's pup looked like a cub.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The bull had a hump.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Rumy wanted her pup to jump over the gun.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The camel walked gracefully.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The hunter ran in the ground.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The pup ran in the bush with full speed.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Rumy's pup received a bun for running.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The pup's name was Bun.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The duck pulled the bus.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
