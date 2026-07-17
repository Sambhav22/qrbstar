export const chapter = "Chapter - 4: Borrowing can Ruin";
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
        question: "Who gave the ring and chain to Varun?",
        optionA: "Gopesh",
        optionB: "Rahul",
        optionC: "Varun’s father",
        correctAnswer: "Rahul",
      }),
      shuffleOptions({
        question: "Why did Varun want to borrow things?",
        optionA: "He was poor",
        optionB: "He wanted to show off",
        optionC: "He was getting married",
        correctAnswer: "He wanted to show off",
      }),
      shuffleOptions({
        question: "What was the cost of the diamond ring?",
        optionA: "5000",
        optionB: "50000",
        optionC: "10000",
        correctAnswer: "50000",
      }),
      shuffleOptions({
        question: "Where did Varun go after losing the ring?",
        optionA: "To Rahul",
        optionB: "To jeweller",
        optionC: "To police",
        correctAnswer: "To jeweller",
      }),
      shuffleOptions({
        question: "Who was getting married?",
        optionA: "Varun",
        optionB: "Gopesh",
        optionC: "Rahul",
        correctAnswer: "Gopesh",
      }),
      shuffleOptions({
        question: "What kind of friend was Rahul?",
        optionA: "Selfish",
        optionB: "Helpful",
        optionC: "Angry",
        correctAnswer: "Helpful",
      }),
      shuffleOptions({
        question: "What did Varun lose?",
        optionA: "Golden chain",
        optionB: "Diamond ring",
        optionC: "Watch",
        correctAnswer: "Diamond ring",
      }),
      shuffleOptions({
        question: "How was Varun in the beginning?",
        optionA: "Joyless",
        optionB: "Sad",
        optionC: "Happy",
        correctAnswer: "Happy",
      }),
      shuffleOptions({
        question: "Why was the ring loose?",
        optionA: "It was small",
        optionB: "It didn’t fit Varun",
        optionC: "It was not his",
        correctAnswer: "It didn’t fit Varun",
      }),
      shuffleOptions({
        question: "Where did Varun dance?",
        optionA: "On stage",
        optionB: "At home",
        optionC: "On road",
        correctAnswer: "On stage",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Varun took ______ of salary.",
        optionA: "salary",
        optionB: "advance",
        optionC: "cheque",
        correctAnswer: "advance",
      }),
      shuffleOptions({
        question: "Varun wanted to wear ______ clothes.",
        optionA: "simple",
        optionB: "branded",
        optionC: "torn",
        correctAnswer: "branded",
      }),
      shuffleOptions({
        question: "Varun wanted to look ______ at the marriage.",
        optionA: "inferior",
        optionB: "rich",
        optionC: "sad",
        correctAnswer: "rich",
      }),
      shuffleOptions({
        question: "The ring had a ______ on it.",
        optionA: "ruby",
        optionB: "stone",
        optionC: "diamond",
        correctAnswer: "diamond",
      }),
      shuffleOptions({
        question: "Varun returned to the ______ to search for the ring.",
        optionA: "stage",
        optionB: "hall",
        optionC: "room",
        correctAnswer: "hall",
      }),
      shuffleOptions({
        question: "He searched ______ the carpet for the ring.",
        optionA: "above",
        optionB: "behind",
        optionC: "under",
        correctAnswer: "under",
      }),
      shuffleOptions({
        question: "Varun had to repay a heavy loan with high ______.",
        optionA: "bonus",
        optionB: "interest",
        optionC: "price",
        correctAnswer: "interest",
      }),
      shuffleOptions({
        question: "Varun was unable to find a ______ to marry.",
        optionA: "house",
        optionB: "girl",
        optionC: "ring",
        correctAnswer: "girl",
      }),
      shuffleOptions({
        question: "Now Varun leads a very ______ life.",
        optionA: "ordinary",
        optionB: "rich",
        optionC: "colourful",
        correctAnswer: "ordinary",
      }),
      shuffleOptions({
        question: "The ring was very ______.",
        optionA: "cheap",
        optionB: "costly",
        optionC: "plastic",
        correctAnswer: "costly",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Varun was a businessman.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Varun wanted to be rich.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Varun borrowed a golden chain from Gopesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rahul warned Varun to be careful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Varun lost the ring during the dance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Varun got another ring from the market.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Varun paid the loan easily in one year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Varun still hopes something good will happen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gopesh was poor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Borrowing made Varun’s life worse.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
