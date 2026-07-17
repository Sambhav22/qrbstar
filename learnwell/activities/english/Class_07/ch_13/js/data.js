export const chapter = "Chapter - 13: Puss-in-Boots";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who was the youngest son of the miller?",
        optionA: "Bill",
        optionB: "Peter",
        optionC: "John",
        correctAnswer: "John",
      }),
      shuffleOptions({
        question: "What did Peter inherit from his father?",
        optionA: "The mill",
        optionB: "The donkey",
        optionC: "The cat",
        correctAnswer: "The donkey",
      }),
      shuffleOptions({
        question: "Who loved rabbit pie and stew?",
        optionA: "The princess",
        optionB: "The king",
        optionC: "The wizard",
        correctAnswer: "The king",
      }),
      shuffleOptions({
        question: "What title did Puss-in-Boots give John?",
        optionA: "Prince of Wallace",
        optionB: "Earl of Devenhower",
        optionC: "Lord of Hyena",
        correctAnswer: "Earl of Devenhower",
      }),
      shuffleOptions({
        question: "Who lived in the magnificent castle?",
        optionA: "The wizard",
        optionB: "The king",
        optionC: "The princess",
        correctAnswer: "The wizard",
      }),
      shuffleOptions({
        question: "What colour were the horses pulling the royal coach?",
        optionA: "Black",
        optionB: "White",
        optionC: "Brown",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "What did Puss-in-Boots threaten to do to the farmers?",
        optionA: "Take their crops",
        optionB: "Make mincemeat of them",
        optionC: "Send them away",
        correctAnswer: "Make mincemeat of them",
      }),
      shuffleOptions({
        question: "What was John wearing when he sat beside the princess?",
        optionA: "Old clothes",
        optionB: "Royal robes",
        optionC: "Farmer’s dress",
        correctAnswer: "Royal robes",
      }),
      shuffleOptions({
        question: "Where did Puss-in-Boots hide John’s old clothes?",
        optionA: "In the sack",
        optionB: "Behind a rock",
        optionC: "Under a tree",
        correctAnswer: "Behind a rock",
      }),
      shuffleOptions({
        question: "What did Puss-in-Boots arrange for the king and princess?",
        optionA: "A dry meal",
        optionB: "A sumptuous feast",
        optionC: "Ordinary bread",
        correctAnswer: "A sumptuous feast",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The miller had ______ sons.",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "The miller’s mill was in ______ condition.",
        optionA: "Good",
        optionB: "Poor",
        optionC: "Fine",
        correctAnswer: "Poor",
      }),
      shuffleOptions({
        question: "John built a ______ at the edge of the forest.",
        optionA: "Castle",
        optionB: "Hut",
        optionC: "Palace",
        correctAnswer: "Hut",
      }),
      shuffleOptions({
        question: "Puss-in-Boots placed the sack near a rabbit ______.",
        optionA: "Cave",
        optionB: "Hole",
        optionC: "Warren",
        correctAnswer: "Warren",
      }),
      shuffleOptions({
        question: "The princess travelled with the king in the royal ______.",
        optionA: "Cart",
        optionB: "Coach",
        optionC: "Chariot",
        correctAnswer: "Coach",
      }),
      shuffleOptions({
        question: "The wizard first turned into a ______.",
        optionA: "Mouse",
        optionB: "Bear",
        optionC: "Dog",
        correctAnswer: "Bear",
      }),
      shuffleOptions({
        question: "The wizard laughed ______ after scaring Puss-in-Boots.",
        optionA: "Sadly",
        optionB: "Heartily",
        optionC: "Softly",
        correctAnswer: "Heartily",
      }),
      shuffleOptions({
        question: "Puss-in-Boots bowed ______ before the king.",
        optionA: "Low",
        optionB: "High",
        optionC: "Not at all",
        correctAnswer: "Low",
      }),
      shuffleOptions({
        question: "The king raised a ______ to bless John and the princess.",
        optionA: "Sword",
        optionB: "Toast",
        optionC: "Glass",
        correctAnswer: "Toast",
      }),
      shuffleOptions({
        question: "John lived happily ever after with the princess and ______.",
        optionA: "The king",
        optionB: "Puss-in-Boots",
        optionC: "Peter",
        correctAnswer: "Puss-in-Boots",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The miller had only two sons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "John wanted to keep Puss-in-Boots with him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Puss-in-Boots called John the Earl of Devenhower.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The king had already heard of the Earl of Devenhower.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The farmers declared the land belonged to John.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Puss-in-Boots was afraid when the wizard turned into a bear.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The wizard failed to turn into a mouse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "John sat beside the princess in the royal coach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The king disapproved of John marrying the princess.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Puss-in-Boots never ate mice again after John’s marriage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
