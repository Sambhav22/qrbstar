export const chapter = "Chapter - 7: Little Tommy Tucker";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean)

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  if (optionsArray.length > 2) object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What shall Little Tommy Tucker eat?",
        optionA: "Butter only",
        optionB: "White bread and butter",
        optionC: "Jam and bread",
        correctAnswer: "White bread and butter",
      }),
      shuffleOptions({
        question: "What does Tommy do?",
        optionA: "Dance",
        optionB: "Sing",
        optionC: "Jump",
        correctAnswer: "Sing",
      }),
      shuffleOptions({
        question: "What is missing for cutting food?",
        optionA: "Spoon",
        optionB: "Fork",
        optionC: "Knife",
        correctAnswer: "Knife",
      }),
      shuffleOptions({
        question: "Why can't he marry?",
        optionA: "No money",
        optionB: "No wife",
        optionC: "No flowers",
        correctAnswer: "No wife",
      }),
      shuffleOptions({
        question: "What kind of bread will he eat?",
        optionA: "Brown",
        optionB: "White",
        optionC: "None",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "What tool is used to open a lock?",
        optionA: "Key",
        optionB: "Hammer",
        optionC: "Brush",
        correctAnswer: "Key",
      }),
      shuffleOptions({
        question: "What do you need to write with?",
        optionA: "Spoon",
        optionB: "Pencil",
        optionC: "Eraser",
        correctAnswer: "Pencil",
      }),
      shuffleOptions({
        question: "What tool is used to drink soup?",
        optionA: "Cup",
        optionB: "Spoon",
        optionC: "Plate",
        correctAnswer: "Spoon",
      }),
      shuffleOptions({
        question: "What is the opposite of big?",
        optionA: "Huge",
        optionB: "Small",
        optionC: "Tall",
        correctAnswer: "Small",
      }),
      shuffleOptions({
        question: "Which word rhymes with 'knife'?",
        optionA: "Life",
        optionB: "Butter",
        optionC: "Bread",
        correctAnswer: "Life",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Little Tommy Tucker sings for his ______.",
        optionA: "breakfast",
        optionB: "supper",
        optionC: "lunch",
        correctAnswer: "supper",
      }),
      shuffleOptions({
        question: "He will eat white ______ and butter.",
        optionA: "jam",
        optionB: "bread",
        optionC: "honey",
        correctAnswer: "bread",
      }),
      shuffleOptions({
        question: "He needs a ______ to cut the bread.",
        optionA: "spoon",
        optionB: "knife",
        optionC: "fork",
        correctAnswer: "knife",
      }),
      shuffleOptions({
        question: "He cannot marry without a ______.",
        optionA: "home",
        optionB: "friend",
        optionC: "wife",
        correctAnswer: "wife",
      }),
      shuffleOptions({
        question: "You need a ______ to open a lock.",
        optionA: "key",
        optionB: "chalk",
        optionC: "belt",
        correctAnswer: "key",
      }),
      shuffleOptions({
        question: "You need a ______ to play football.",
        optionA: "stone",
        optionB: "football",
        optionC: "bottle",
        correctAnswer: "football",
      }),
      shuffleOptions({
        question: "You use a ______ to write.",
        optionA: "pencil",
        optionB: "marker",
        optionC: "spoon",
        correctAnswer: "pencil",
      }),
      shuffleOptions({
        question: "We eat soup with a ______.",
        optionA: "comb",
        optionB: "spoon",
        optionC: "fork",
        correctAnswer: "spoon",
      }),
      shuffleOptions({
        question: "Little Tommy Tucker has no ______.",
        optionA: "bread",
        optionB: "knife",
        optionC: "wife",
        correctAnswer: "wife",
      }),
      shuffleOptions({
        question: "White bread and ______.",
        optionA: "butter",
        optionB: "rice",
        optionC: "milk",
        correctAnswer: "butter",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Little Tommy Tucker sings for his supper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "He eats white rice and butter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "He has a knife to cut the bread.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "He can marry without a wife.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You use a spoon to write.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A key is used to open a lock.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A ball is used to play football.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Opposite of fresh is stale.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Knife rhymes with wife.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Little Tommy Tucker runs in the poem.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;