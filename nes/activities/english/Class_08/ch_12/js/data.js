export const chapter = "Chapter - 12: The Crooked Path ";
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
          "What did the Minister see the man doing when he was riding through the country?",
        optionA: "Planting a tree",
        optionB: "Digging a pit",
        optionC: "Plowing a field",
        correctAnswer: "Digging a pit",
     }),
      shuffleOptions({
        question:
          "How did the digger of the pit respond to the Minister's criticism of his actions?",
        optionA: "He apologized and stopped digging.",
        optionB:
          "He explained that his pit was on the roadside and not in the middle of the way.",
        optionC: "He ignored the Minister and continued digging.",
        correctAnswer:
          "He explained that his pit was on the roadside and not in the middle of the way.",
     }),
      shuffleOptions({
        question:
          "What did the Minister do after being impressed by the digger's response?",
        optionA: "He scolded the man and rode away.",
        optionB:
          "He ordered his servants to take the man to his house and provide for him.",
        optionC: "He appointed the man as a royal advisor.",
        correctAnswer:
          "He ordered his servants to take the man to his house and provide for him.",
     }),
      shuffleOptions({
        question:
          "How did the digger of the pit eventually become the Minister's counsellor?",
        optionA: "He proved his intelligence in a public debate.",
        optionB: "The Minister was captivated by his good looks.",
        optionC:
          "The Minister recognized his wisdom and offered him a position.",
        correctAnswer:
          "The Minister recognized his wisdom and offered him a position.",
     }),
      shuffleOptions({
        question:
          "What event led the courtiers to become suspicious of the Prime Minister's newfound wisdom?",
        optionA: "The Minister's rapid promotion",
        optionB: "His extravagant lifestyle",
        optionC: "His newfound humility",
        correctAnswer: "The Minister's rapid promotion",
     }),
      shuffleOptions({
        question:
          "How did the courtiers discover the source of the Prime Minister's wisdom?",
        optionA: "They found a hidden diary.",
        optionB: "They bribed a worker in the Prime Minister's mansion.",
        optionC: "The Prime Minister confessed.",
        correctAnswer: "They bribed a worker in the Prime Minister's mansion.",
     }),
      shuffleOptions({
        question:
          "What did the Prime Minister do to get rid of the man who had been his friend and counsellor?",
        optionA: "Sent him on a dangerous mission",
        optionB: "Offered him a generous reward to leave",
        optionC: "Confessed his deception and apologized",
        correctAnswer: "Sent him on a dangerous mission",
     }),
      shuffleOptions({
        question:
          "What was the content of the letter that the Prime Minister handed to the wise man?",
        optionA: "A love letter to the Prime Minister's mistress",
        optionB: "An important and urgent message",
        optionC: "A request for help with a personal matter",
        correctAnswer: "An important and urgent message",
     }),
      shuffleOptions({
        question:
          "What happened when the Prime Minister received the letter from the wise man?",
        optionA: "He was relieved and thanked the wise man.",
        optionB: "He realized the letter was a death warrant for his son.",
        optionC: "He laughed at the cleverness of his plan.",
        correctAnswer:
          "He realized the letter was a death warrant for his son.",
     }),
      shuffleOptions({
        question:
          "How did the wise man respond when the Prime Minister realized the consequences of the letter?",
        optionA: "He laughed and celebrated his victory.",
        optionB: "He felt remorse and offered to help the Prime Minister.",
        optionC: "He scolded the Prime Minister for taking a crooked path.",
        correctAnswer:
          "He scolded the Prime Minister for taking a crooked path.",
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
          "What was the Minister's purpose for riding through the country to know how people lived? He wanted to understand the ______________ of the people.",
        options: ["customs", "languages", "religions"],
        correctAnswer: "customs",
     }),
      shuffleOptions({
        question:
          "The digger of the pit responded to the Minister's criticism by explaining that the pit was on the roadside and not in the middle of the way, asserting that those who fell into the pit took a ______________ path.",
        options: ["straightforward", "crooked", "dangerous"],
        correctAnswer: "crooked",
     }),
      shuffleOptions({
        question:
          "Impressed by the wisdom of the digger's response, the Minister ordered his servants to take the man to his house, clothe him, feed him, and provide him with ______________.",
        options: ["a horse", "shelter", "a new job"],
        correctAnswer: "shelter",
     }),
      shuffleOptions({
        question:
          "The digger eventually became the Minister's counsellor and was often sought for advice on tricky matters in running the administration and helping the king with difficult matters. His wisdom and counsel were highly ______________.",
        options: ["expensive", "ineffective", "effective"],
        correctAnswer: "effective",
     }),
      shuffleOptions({
        question:
          "The courtiers began to wonder at the Prime Minister's newfound wisdom and rapid promotion. They were suspicious and decided to pry into his ______________.",
        options: [
          "private affairs",
          "financial records",
          "personal relationships",
        ],
        correctAnswer: "private affairs",
     }),
      shuffleOptions({
        question:
          "The courtiers discovered the source of the Prime Minister's wisdom by bribing a worker at his mansion, revealing the existence of the wise man who had been in close ______________ with the Prime Minister.",
        options: ["collaboration", "relationship", "companionship"],
        correctAnswer: "companionship",
     }),
      shuffleOptions({
        question:
          "To get rid of the wise man, the Prime Minister handed him a letter with an important and urgent message, instructing him to deliver it to the State Executioner. The Prime Minister's plan was to send the wise man on a ______________ mission.",
        options: ["secret", "diplomatic", "dangerous"],
        correctAnswer: "dangerous",
     }),
      shuffleOptions({
        question:
          "However, the Prime Minister's son intercepted the wise man and asked him to deliver a different letter to his sweetheart. The letter the wise man was supposed to deliver was, in fact, a ______________ for the Prime Minister's son.",
        options: ["message of love", "warning", "death warrant"],
        correctAnswer: "death warrant",
     }),
      shuffleOptions({
        question:
          "When the wise man returned with the response from the sweetheart, the Prime Minister realized the consequences of the letter, which was the death warrant of the person who delivered it. He was filled with ______________.",
        options: ["joy", "relief", "remorse"],
        correctAnswer: "remorse",
     }),
      shuffleOptions({
        question:
          "The wise man scolded the Prime Minister for taking a ______________ path that had led to his own downfall. He pointed out that the Prime Minister had fallen into the pit that he had dug for others, highlighting the consequences of choosing the wrong ______________.",
        options: ["righteous; route", "crooked; path", "dangerous; way"],
        correctAnswer: "crooked; path",
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
          "England was ruled by King Hermann the Irascible in the second decade of the twentieth century.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "King Hermann's nickname was 'The Generous.'",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Prime Minister was pleased with the votes-for-women movement.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "King Hermann proposed a Bill to make voting for women optional.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Failure to vote in elections could result in a 5-pound penalty for women.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Compulsory Female Franchise had a positive impact on society women's arrangements.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The No-Votes-for-Women League supported the idea of women's suffrage.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The government was easily persuaded by peaceful protests.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Great Weep was organized as a violent protest by women.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "King Hermann preferred choking a cat with cream to other methods.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
