export const chapter = "Chapter - 11: A Visit of Charity";
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
        question: "What is the name of the main character in the story?",
        optionA: "Addie",
        optionB: "Marian",
        optionC: "The Nurse",
        correctAnswer: "Marian",
     }),
      shuffleOptions({
        question: "What organization does Marian belong to?",
        optionA: "Girl Scouts",
        optionB: "Old Ladies' Home",
        optionC: "Campfire Girls",
        correctAnswer: "Campfire Girls",
     }),
      shuffleOptions({
        question:
          "What kind of potted plant does Marian bring to the Old Ladies' Home?",
        optionA: "Rose",
        optionB: "Multiflora cineraria",
        optionC: "Daffodil",
        correctAnswer: "Multiflora cineraria",
     }),
      shuffleOptions({
        question:
          "How does Marian feel about the room she enters in the Old Ladies' Home?",
        optionA: "Comfortable and welcoming",
        optionB: "Claustrophobic and intimidating",
        optionC: "Bright and spacious",
        correctAnswer: "Claustrophobic and intimidating",
     }),
      shuffleOptions({
        question:
          "What is the significance of bringing flowers to the Old Ladies' Home according to Marian's organization?",
        optionA: "It counts as one point in her score",
        optionB: "It doesn't count toward any score",
        optionC: "It counts as double points in her score",
        correctAnswer: "It counts as double points in her score",
     }),
      shuffleOptions({
        question:
          "What is Addie's reaction to the potted plant that Marian brings?",
        optionA: "She thinks they are beautiful",
        optionB: "She finds them ugly",
        optionC: "She has no reaction",
        correctAnswer: "She finds them ugly",
     }),
      shuffleOptions({
        question:
          "Why does Addie become upset during the conversation with Marian?",
        optionA: "Because she's unwell",
        optionB: "Because it's her birthday",
        optionC: "Because Marian is a stranger",
        correctAnswer: "Because it's her birthday",
     }),
      shuffleOptions({
        question: "What does Addie threaten to do when she becomes upset?",
        optionA: "Ring a bell for the nurse",
        optionB: "Cry loudly",
        optionC: "Leave the room",
        correctAnswer: "Ring a bell for the nurse",
     }),
      shuffleOptions({
        question:
          "How does the first old woman describe Marian when she mentions her school?",
        optionA: "As a talkative stranger",
        optionB: "As a polite and quiet girl",
        optionC: "As a terrible old woman",
        correctAnswer: "As a talkative stranger",
     }),
      shuffleOptions({
        question:
          "What is the final emotional response of the old ladies towards Marian as she leaves the room?",
        optionA: "Affection and strange kinship",
        optionB: "Annoyance and frustration",
        optionC: "Disinterest and indifference",
        correctAnswer: "Affection and strange kinship",
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
          "When Marian arrived at the Old Ladies' Home, she was holding a potted plant before her, and she was wearing a red coat with her straight yellow hair hanging down loose from a pointed ________.",
        correctAnswer: "Cap",
     }),
      shuffleOptions({
        question:
          "The nurse at the desk asked Marian if she was acquainted with any of the residents, to which Marian replied that she was not, but that 'any of them will ________.'",
        correctAnswer: "Do",
     }),
      shuffleOptions({
        question:
          "Marian noticed that the building where she was visiting the old ladies was made of ________ brick.",
        correctAnswer: "Whitewashed",
     }),
      shuffleOptions({
        question:
          "The old lady in bed described the potted plant Marian brought as 'dirty ________.'",
        correctAnswer: "Weeds",
     }),
      shuffleOptions({
        question:
          "The first old woman mentioned that last month, someone came to the Old Ladies' Home to read to them out of the ________.",
        correctAnswer: "Bible",
     }),
      shuffleOptions({
        question:
          "The first old woman placed the potted plant on top of the wardrobe, where it could hardly be seen from below, saying, 'You mustn't pay any attention to old Addie. She's ________ today.'",
        correctAnswer: "Ailing",
     }),
      shuffleOptions({
        question:
          "The second old woman accused the first old woman of being a ________ and said, 'You never went to school. You never came and you never went. You never were anywhere - only here.'",
        correctAnswer: "Stranger",
     }),
      shuffleOptions({
        question:
          "The first old woman described her own actions when she was a little girl by saying, 'When I was a little girl like you, I went to school and all,' but the second old woman interjected, 'Hush! You never went to school. You never came and you never went. You never were anywhere - only here.'",
        correctAnswer: "Cry",
     }),
      shuffleOptions({
        question:
          "The old woman in bed warned Marian that if the worst came to the worst, she would ring a bell, and the nurse would come, pointing to a little bell on the table among the ________.",
        correctAnswer: "Bottles",
     }),
      shuffleOptions({
        question:
          "As Marian left the room, the two old ladies peered at her with affection and strange ________.",
        correctAnswer: "Kinship",
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
