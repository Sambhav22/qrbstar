export const chapter = "Chapter - 2: It's Sweet ";
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
        optionA: "Victory in conflict",
        optionB: "The joy of life",
        optionC: "Being remembered",
        correctAnswer: "Being remembered",
     }),
      shuffleOptions({
        question: "According to the text, when is it sweet to be remembered?",
        optionA: "Only in times of peace",
        optionB: "While toiling and struggling in life",
        optionC: "Only when fortune smiles",
        correctAnswer: "While toiling and struggling in life",
     }),
      shuffleOptions({
        question:
          "What does the text suggest about those who whispered in our ear as we toiled and struggled?",
        optionA: "They were absent when we needed them",
        optionB: "They share our happy moments when fortune smiles",
        optionC: "They are always present and supportive",
        correctAnswer: "They share our happy moments when fortune smiles",
     }),
      shuffleOptions({
        question:
          "What happens when all toils are ended and the conflict is done, according to the text?",
        optionA: "Tumult and strife continue",
        optionB: "Victory is proclaimed, and peace prevails",
        optionC: "Patience and meekness are lost",
        correctAnswer: "Victory is proclaimed, and peace prevails",
     }),
      shuffleOptions({
        question:
          "In what situations is it sweet to be remembered, as mentioned in the text?",
        optionA: "Only when sailing over the sea",
        optionB: "Wherever we may be",
        optionC: "Only in times of calm and peace",
        correctAnswer: "Wherever we may be",
     }),
      shuffleOptions({
        question: "What is the text's attitude toward being remembered?",
        optionA: "It is a bitter experience",
        optionB: "It is a source of happiness and comfort",
        optionC: "It is irrelevant to the author",
        correctAnswer: "It is a source of happiness and comfort",
     }),
      shuffleOptions({
        question:
          "What is the author's perspective on those who are remembered?",
        optionA: "They should be forgotten",
        optionB: "They are always present in spirit",
        optionC: "They are rarely thought of",
        correctAnswer: "They are always present in spirit",
     }),
      shuffleOptions({
        question:
          "What must happen before one can await the joy of life, according to the text?",
        optionA: "Struggling and toiling",
        optionB: "The absence of fortune",
        optionC: "The end of patience",
        correctAnswer: "Struggling and toiling",
     }),
      shuffleOptions({
        question: "What is the ultimate outcome of the conflict in the text?",
        optionA: "Tumult and strife continue indefinitely",
        optionB: "Victory is achieved, and peace is established",
        optionC: "Patience and meekness are lost forever",
        correctAnswer: "Victory is achieved, and peace is established",
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
          "It's sweet to be remembered in the ______________ of this life.",
        optionA: "Chaos",
        optionB: "Turmoil",
        optionC: "Tranquility",
        correctAnswer: "Turmoil",
     }),
      shuffleOptions({
        question:
          "While toiling up its pathway, and mingling in its ______________.",
        optionA: "Peace",
        optionB: "Happiness",
        optionC: "Strife",
        correctAnswer: "Strife",
     }),
      shuffleOptions({
        question:
          "While wandering o'er earth's ______________, or sailing o'er its sea.",
        optionA: "Deserts",
        optionB: "Borders",
        optionC: "Valleys",
        correctAnswer: "Borders",
     }),
      shuffleOptions({
        question:
          "When all our toils are ended, and the conflict all is ______________.",
        optionA: "Ongoing",
        optionB: "Done",
        optionC: "Beginning",
        correctAnswer: "Done",
     }),
      shuffleOptions({
        question:
          "And peace, in sweetest accents, proclaims the victory ______________.",
        optionA: "Lost",
        optionB: "Achieved",
        optionC: "Unattainable",
        correctAnswer: "Achieved",
     }),
      shuffleOptions({
        question:
          "When hushed is all the ______________, when calmed is all the strife.",
        optionA: "Laughter",
        optionB: "Tumult",
        optionC: "Celebration",
        correctAnswer: "Tumult",
     }),
      shuffleOptions({
        question:
          "They who, when not present, in spirit yet were ______________.",
        optionA: "Absent",
        optionB: "Far away",
        optionC: "Near",
        correctAnswer: "Near",
     }),
      shuffleOptions({
        question:
          "And, as we toiled and struggled, did whisper in our ______________.",
        optionA: "Heart",
        optionB: "Mind",
        optionC: "Ear",
        correctAnswer: "Ear",
     }),
      shuffleOptions({
        question:
          '"It\'s sweet to be remembered, and thou art not ______________."',
        optionA: "Alone",
        optionB: "Loved",
        optionC: "Forgot",
        correctAnswer: "Forgot",
     }),
      shuffleOptions({
        question:
          "If fortune smiles upon us, shall share our ______________ lot.",
        optionA: "Unfortunate",
        optionB: "Sad",
        optionC: "Happy",
        correctAnswer: "Happy",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The central theme of the text is victory in conflict.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Being remembered is a source of happiness and comfort in the text.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The pigeon assured the crow that it would return in a day when flying to the nearest village.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The rabbit entered the hollow in the tree because the pigeon hadn't returned for two days.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "When the pigeon returned to the hollow, the rabbit insisted that the hollow was empty.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The cat claimed it couldn't listen properly to their problem because it was uninterested.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The pigeon and the rabbit approached the cat to tell their problem, and the cat listened carefully.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "In the text, being remembered is sweet only when fortune smiles upon us.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "When all toils are ended and the conflict is done, peace proclaims the victory lost.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The rabbit suggested that he and the pigeon should go to the cat to get justice and resolve their dispute.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
