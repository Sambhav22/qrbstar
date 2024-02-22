export const chapter = "Chapter - 6: A Chameleon ";
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
          "Who is walking across the market square wearing a new overcoat and carrying a parcel under his arm?",
        optionA: "Yelov",
        optionB: "Hukin",
        optionC: "Yeldrin",
        correctAnswer: "Yelov",
     }),
      shuffleOptions({
        question: "What does the red-haired policeman carry in his hands?",
        optionA: "A report",
        optionB: "Confiscated gooseberries",
        optionC: "A dog",
        correctAnswer: "Confiscated gooseberries",
     }),
      shuffleOptions({
        question: "What kind of dog is at the center of the commotion?",
        optionA: "A borzoy",
        optionB: "A setter",
        optionC: "A stray dog",
        correctAnswer: "A borzoy",
     }),
      shuffleOptions({
        question: "Who is the goldsmith that got bitten by the dog?",
        optionA: "Yelov",
        optionB: "Hukin",
        optionC: "Yeldrin",
        correctAnswer: "Hukin",
     }),
      shuffleOptions({
        question: "What does Yelov plan to do with the dog?",
        optionA: "Strangle it",
        optionB: "Take it home",
        optionC: "Return it to the General",
        correctAnswer: "Strangle it",
     }),
      shuffleOptions({
        question:
          "What does Yeldrin suggest might have caused the dog to bite Hukin?",
        optionA: "Scratching its finger with a nail",
        optionB: "Putting a cigarette in its face",
        optionC: "Stepping on its tail",
        correctAnswer: "Putting a cigarette in its face",
     }),
      shuffleOptions({
        question:
          "According to Yelov, whose dog does he initially suspect the borzoy belongs to?",
        optionA: "General Zhigalov",
        optionB: "Vladimir Ivanitch",
        optionC: "Hukin",
        correctAnswer: "General Zhigalov",
     }),
      shuffleOptions({
        question: "What does Yelov instruct Yeldrin to do with the dog?",
        optionA: "Strangle it immediately",
        optionB: "Return it to Hukin",
        optionC: "Take it to the General's bungalow",
        correctAnswer: "Take it to the General's bungalow",
     }),
      shuffleOptions({
        question:
          "What is the reason given for the dog's behavior towards Hukin?",
        optionA: "The dog is mad",
        optionB: "Hukin provoked it",
        optionC: "The dog is hungry",
        correctAnswer: "Hukin provoked it",
     }),
      shuffleOptions({
        question: "Who finally confirms the ownership of the dog?",
        optionA: "Yelov",
        optionB: "Hukin",
        optionC: "Prohor",
        correctAnswer: "Prohor",
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
          "Police superintendent Yelov is walking across the market square wearing a new overcoat and carrying a parcel under his arm. A red-haired policeman strides after him with a sieve full of confiscated _________ in his hands.",
        options: ["apples", "gooseberries", "cherries"],
        correctAnswer: "gooseberries",
     }),
      shuffleOptions({
        question:
          "Yelov sees a dog, hopping on three legs and looking about her, run out of a timber yard. A man in a starched cotton shirt, with his waistcoat unbuttoned, is chasing her. He cries: 'So you bite, you damned brute? Lads, don't let her go! Biting is prohibited nowadays! Hold him! ah ... ah!' (He runs after her, and throwing his body forward falls down and seizes the dog by her _________.",
        options: ["head", "hind legs", "tail"],
        correctAnswer: "hind legs",
     }),
      shuffleOptions({
        question: "In this man, Yelov recognizes Hukin, the _________.",
        options: ["butcher", "baker", "goldsmith"],
        correctAnswer: "goldsmith",
     }),
      shuffleOptions({
        question:
          "Hukin claims he was bitten by a dog for no rhyme or reason and demands damages because he won't be able to use his finger for a week, maybe ten days. Yelov mentions that he must have scratched his finger with a nail and is simply trying to get _________ for it.",
        options: ["justice", "sympathy", "damages"],
        correctAnswer: "damages",
     }),
      shuffleOptions({
        question:
          "Yelov decides that the dog must be strangled because it's likely _________.",
        options: ["a valuable breed", "a stray dog", "mad"],
        correctAnswer: "mad",
     }),
      shuffleOptions({
        question:
          "Yeldrin suggests that Hukin might have provoked the dog by putting a _________ in her face for a joke.",
        options: ["biscuit", "cigarette", "flower"],
        correctAnswer: "cigarette",
     }),
      shuffleOptions({
        question:
          "The text mentions that Yelov recognizes Hukin when he sees him holding his right hand in the air and displaying a bleeding finger to the crowd. On Hukin's face, there is plainly written: 'I'll pay you out, you rogue!' and indeed the very finger has the look of a flag of _________.",
        options: ["victory", "defeat", "truce"],
        correctAnswer: "victory",
     }),
      shuffleOptions({
        question:
          "Yeldrin implies that Hukin is a nonsensical fellow who put a cigarette in the dog's face for a joke, and the dog had the sense to snap at him. Hukin denies this and insists that the police officer will determine who is telling lies and who is telling the truth, as in _________ sight.",
        options: ["the judge's", "God's", "the officer's"],
        correctAnswer: "God's",
     }),
      shuffleOptions({
        question:
          "Yelov remarks that the dog is not a valuable breed like the General's dogs, which are mostly _________.",
        options: ["Labradors", "Setters", "Bulldogs"],
        correctAnswer: "Setters",
     }),
      shuffleOptions({
        question:
          "Prohor, the General's cook, confirms that the dog belongs to the General's brother, who recently arrived on a visit. Yelov is delighted to hear this and takes the dog, calling it a nice little pup that snapped at Hukin's finger, saying, 'The rogue is angry ... a nice little pup.' This suggests that Yelov believes the dog's behavior was playful rather than _________.",
        options: ["dangerous", "aggressive", "defensive"],
        correctAnswer: "aggressive",
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
