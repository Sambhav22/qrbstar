export const chapter = "Chapter - 5: The Colourful Kites";
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
          "What was Little Surya doing on the roof with his father during winter vacation?",
        optionA: "Reading a book",
        optionB: "Flying a kite",
        optionC: "Playing with toys",
        correctAnswer: "Flying a kite",
     }),
      shuffleOptions({
        question: "What did Surya think he saw in the sky initially?",
        optionA: "Star",
        optionB: "Moon",
        optionC: "Kite",
        correctAnswer: "Star",
     }),
      shuffleOptions({
        question: "Why did Surya's father say it was not a star?",
        optionA: "Stars shine during the day",
        optionB: "Stars are too high up",
        optionC: "Stars shine at night",
        correctAnswer: "Stars shine at night",
     }),
      shuffleOptions({
        question: "What did Surya insist on doing despite his father's advice?",
        optionA: "Riding a bicycle",
        optionB: "Flying a kite",
        optionC: "Climbing a tree",
        correctAnswer: "Flying a kite",
     }),
      shuffleOptions({
        question: "Why did Surya's father say he couldn't fly a kite yet?",
        optionA: "He was too busy",
        optionB: "He was too young",
        optionC: "He was too old",
        correctAnswer: "He was too young",
     }),
      shuffleOptions({
        question:
          "What did Surya want his father to bring for him immediately?",
        optionA: "Ice cream",
        optionB: "Candy",
        optionC: "Kite",
        correctAnswer: "Kite",
     }),
      shuffleOptions({
        question: "How many kites did Surya want his father to bring for him?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Three",
     }),
      shuffleOptions({
        question:
          "What did Surya do when his father agreed to bring kites for him?",
        optionA: "Jumped with joy",
        optionB: "Started crying",
        optionC: "Sat quietly",
        correctAnswer: "Jumped with joy",
     }),
      shuffleOptions({
        question: "What did Surya's father bring for him in a box?",
        optionA: "Toys",
        optionB: "Clothes",
        optionC: "Kites",
        correctAnswer: "Kites",
     }),
      shuffleOptions({
        question:
          "How did Surya's father respond when Surya couldn't count the kites?",
        optionA: "Laughed and brought more kites",
        optionB: "Got angry and scolded him",
        optionC: "Ignored him and went inside",
        correctAnswer: "Laughed and brought more kites",
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
          "Little Surya was enjoying his ________ on the roof with his father during winter vacation.",
        optionA: "Vacation",
        optionB: "Playtime",
        optionC: "Holiday",
        correctAnswer: "Vacation",
     }),
      shuffleOptions({
        question:
          "Surya's father explained that the object in the sky was a ________ and not a star.",
        optionA: "Bird",
        optionB: "Kite",
        optionC: "Cloud",
        correctAnswer: "Kite",
     }),
      shuffleOptions({
        question:
          "Surya wanted to ________ the kite, but his father said he was too young.",
        optionA: "Fly",
        optionB: "Buy",
        optionC: "Paint",
        correctAnswer: "Fly",
     }),
      shuffleOptions({
        question:
          "Despite his father's advice, Surya insisted on getting a kite ________.",
        optionA: "Tomorrow",
        optionB: "Immediately",
        optionC: "Later",
        correctAnswer: "Immediately",
     }),
      shuffleOptions({
        question: "Surya's father promised to bring ________ kites for him.",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Three",
     }),
      shuffleOptions({
        question:
          "Surya spread his hands, indicating he wanted '________ many' kites.",
        optionA: "Some",
        optionB: "A few",
        optionC: "These many",
        correctAnswer: "These many",
     }),
      shuffleOptions({
        question:
          "Surya's father went to the market and returned with a ________.",
        optionA: "Box",
        optionB: "Bag",
        optionC: "Basket",
        correctAnswer: "Box",
     }),
      shuffleOptions({
        question: "Surya was excited to find a ________ on top of the box.",
        optionA: "Toy",
        optionB: "Reel",
        optionC: "Book",
        correctAnswer: "Reel",
     }),
      shuffleOptions({
        question:
          "Surya's father brought kites of different colors, including one with ________.",
        optionA: "Blue and yellow stripes",
        optionB: "Pink and brown stripes",
        optionC: "Red and white stripes",
        correctAnswer: "Pink and brown stripes",
     }),
      shuffleOptions({
        question:
          "A kite came flying and fell near Surya, adding to the total ________ of kites he had.",
        optionA: "Count",
        optionB: "Number",
        optionC: "Quantity",
        correctAnswer: "Number",
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
          "Little Surya was sunning on the roof with his father during winter vacation.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "Surya thought he saw a star in the sky, but his father corrected him, saying it was a kite.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Surya's father said that stars shine during the day.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Surya insisted on flying a kite despite his father's advice that he was too young.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Surya's father promised to bring four kites for him.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Surya wanted 'these many' kites but did not know how to count beyond three.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Surya's father brought kites of the same color and design.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Surya found a toy on top of the box his father brought.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Surya's father brought a kite with blue and yellow stripes.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "A kite came flying and fell near Surya, adding to the total number of kites he had.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      }),
    ]),
  }
}

export var activityData;
