export const chapter = "Chapter - 11: An Angel in Disguise ";
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
        question: "What is the initial condition of the mother in the story?",
        optionA: "She was wealthy",
        optionB: "She was sick",
        optionC: "She was dead",
        correctAnswer: "She was dead",
     }),
      shuffleOptions({
        question:
          "How many children did the mother leave behind when she died?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Three",
     }),
      shuffleOptions({
        question:
          "Who among the children was considered strong enough to work on a farm?",
        optionA: "John",
        optionB: "Kate",
        optionC: "Maggie",
        correctAnswer: "John",
     }),
      shuffleOptions({
        question:
          "What happened to Maggie two years before the events of the story?",
        optionA: "She fell from a window",
        optionB: "She got sick from a fever",
        optionC: "She had a successful surgery",
        correctAnswer: "She fell from a window",
     }),
      shuffleOptions({
        question: "Who decided to take John and provide him with a home?",
        optionA: "Farmer Jones",
        optionB: "Mrs. Ellis",
        optionC: "Joe Thompson",
        correctAnswer: "Farmer Jones",
     }),
      shuffleOptions({
        question: "What was the fate of Kate after her mother's death?",
        optionA: "She went to the poorhouse",
        optionB: "She found a loving family",
        optionC: "She stayed with Maggie",
        correctAnswer: "She found a loving family",
     }),
      shuffleOptions({
        question: "What was the general consensus on what to do with Maggie?",
        optionA: "Leave her to starve",
        optionB: "Send her to a distant relative",
        optionC: "Take her to the hospital",
        correctAnswer: "Leave her to starve",
     }),
      shuffleOptions({
        question:
          "Who eventually decided to take Maggie in and provide her with care?",
        optionA: "Joe Thompson",
        optionB: "Mrs. Ellis",
        optionC: "Farmer Jones",
        correctAnswer: "Joe Thompson",
     }),
      shuffleOptions({
        question:
          "How did Joe Thompson's wife initially react to Maggie's arrival?",
        optionA: "She was overjoyed",
        optionB: "She was angry and surprised",
        optionC: "She was indifferent",
        correctAnswer: "She was angry and surprised",
     }),
      shuffleOptions({
        question:
          "What transformation did Maggie bring to Joe Thompson's home?",
        optionA: "She made it darker and more miserable",
        optionB: "She filled it with love and happiness",
        optionC: "She caused conflicts between Joe and his wife",
        correctAnswer: "She filled it with love and happiness",
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
          "The dead mother lay cold and still amid her wretched children. She had fallen upon the ________ of her own door.",
        correctAnswer: "threshold",
     }),
      shuffleOptions({
        question:
          "John, the oldest, a boy of twelve, was a stout lad, able to earn his living with any ________.",
        correctAnswer: "farmer",
     }),
      shuffleOptions({
        question:
          "Kate, between ten and eleven, was a bright, active girl who could help in ________.",
        correctAnswer: "housework",
     }),
      shuffleOptions({
        question:
          "Maggie, the youngest, was hopelessly diseased. Two years before, a fall from a window had injured her ________.",
        correctAnswer: "spine",
     }),
      shuffleOptions({
        question:
          "Farmer Jones placed John in his wagon and drove away, satisfied that he had done his part. Mrs. Ellis chose to make a choice of ________.",
        correctAnswer: "Kate",
     }),
      shuffleOptions({
        question:
          "Maggie was left alone! Just beyond the threshold, Joe Thompson, the wheelwright, paused and said, 'It's a cruel thing to leave her so.'",
        correctAnswer: "door",
     }),
      shuffleOptions({
        question:
          "After the burial, Farmer Jones placed John in his wagon and drove away, satisfied that he had done his part. What did Mrs. Ellis do with Kate?",
        correctAnswer: "She took her to the poorhouse.",
     }),
      shuffleOptions({
        question:
          "Joe Thompson had well-grounded doubts about the manner of greeting he would receive from his wife when he arrived home. What did he carry with him?",
        correctAnswer: "A sick child",
     }),
      shuffleOptions({
        question:
          "Joe didn't see the Guardians of the Poor on Maggie's account, for in less than a week, Mrs. Joe Thompson would leave the thought of sending her away. What brought light and blessing to their home?",
        correctAnswer: "The sick child, Maggie",
     }),
      shuffleOptions({
        question:
          "What filled the dreary chambers of Joe Thompson's home with the sunshine of love?",
        correctAnswer: "The sick and helpless child",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Did the mother fall upon the threshold of her own door?",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "John was the youngest child among the three.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Kate was a bright and active girl who could help with housework.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Maggie's spine was injured from a fall two years before.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Farmer Jones chose to take Maggie with him.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Joe Thompson was a baker.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Maggie was left alone in the hovel.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Joe Thompson took Maggie to the poorhouse.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Maggie brought light and blessing to Joe Thompson's home.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Joe's wife, Mrs. Thompson, initially wanted to send Maggie away.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
