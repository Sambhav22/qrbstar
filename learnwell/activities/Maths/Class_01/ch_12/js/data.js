export const chapter = "Chapter - 12: Money";
export const noOfActivities = 3;
export var activityData;

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
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
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
        question: "What do we use to buy toys or food?",
        optionA: "Coins",
        optionB: "Money",
        optionC: "Books",
        correctAnswer: "Money",
      }),
      shuffleOptions({
        question: "Which of these is made of metal?",
        optionA: "Note",
        optionB: "Coin",
        optionC: "Paper",
        correctAnswer: "Coin",
      }),
      shuffleOptions({
        question: "Which of the following is made of paper?",
        optionA: "Coin",
        optionB: "Note",
        optionC: "Pebble",
        correctAnswer: "Note",
      }),
      shuffleOptions({
        question: "How many paise make one rupee?",
        optionA: "10",
        optionB: "100",
        optionC: "50",
        correctAnswer: "100",
      }),
      shuffleOptions({
        question: "What is the symbol of rupee?",
        optionA: "$",
        optionB: "₹",
        optionC: "£",
        correctAnswer: "₹",
      }),
      shuffleOptions({
        question: "Which coin will you use to buy a chocolate costing ₹ 5?",
        optionA: "₹ 1",
        optionB: "₹ 5",
        optionC: "₹ 10",
        correctAnswer: "₹ 5",
      }),
      shuffleOptions({
        question: "What is the total value of ₹ 10 and ₹ 5 together?",
        optionA: "₹ 20",
        optionB: "₹ 15",
        optionC: "₹ 10",
        correctAnswer: "₹ 15",
      }),
      shuffleOptions({
        question: "Which of the following is the highest value note shown in the book?",
        optionA: "₹ 50",
        optionB: "₹ 100",
        optionC: "₹ 200",
        correctAnswer: "₹ 200",
      }),
      shuffleOptions({
        question: "If you have ₹ 2 and ₹ 2 coins, how much money do you have?",
        optionA: "₹ 3",
        optionB: "₹ 4",
        optionC: "₹ 5",
        correctAnswer: "₹ 4",
      }),
      shuffleOptions({
        question: "What do we call small pieces of metal money?",
        optionA: "Coins",
        optionB: "Notes",
        optionC: "Tokens",
        correctAnswer: "Coins",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Coins are made of ______.",
        optionA: "Paper",
        optionB: "Metal",
        optionC: "Plastic",
        correctAnswer: "Metal",
      }),
      shuffleOptions({
        question: "Notes are made of ______.",
        optionA: "Metal",
        optionB: "Paper",
        optionC: "Stone",
        correctAnswer: "Paper",
      }),
      shuffleOptions({
        question: "100 paise = ₹ ______.",
        optionA: "10",
        optionB: "1",
        optionC: "5",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "The symbol of rupee is ______.",
        optionA: "$",
        optionB: "₹",
        optionC: "€",
        correctAnswer: "₹",
      }),
      shuffleOptions({
        question: "We need ______ to buy things.",
        optionA: "Money",
        optionB: "Food",
        optionC: "Toys",
        correctAnswer: "Money",
      }),
      shuffleOptions({
        question: "₹ 5 + ₹ 5 = ₹ ______.",
        optionA: "15",
        optionB: "10",
        optionC: "12",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "₹ 10 + ₹ 10 = ₹ ______.",
        optionA: "15",
        optionB: "20",
        optionC: "30",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "Coins and ______ are used as money in India.",
        optionA: "Papers",
        optionB: "Notes",
        optionC: "Tokens",
        correctAnswer: "Notes",
      }),
      shuffleOptions({
        question: "₹ 2 + ₹ 1 + ₹ 2 = ₹ ______.",
        optionA: "5",
        optionB: "6",
        optionC: "4",
        correctAnswer: "5",
      }),
      shuffleOptions({
        question: "The small value of money is called ______.",
        optionA: "Rupee",
        optionB: "Paise",
        optionC: "Dollar",
        correctAnswer: "Paise",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Coins are made of metal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Notes are made of paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "100 paise = ₹ 1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rupee sign is $.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We can buy fruits without money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Coins and notes are both used as money in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A ₹ 10 note is smaller than a ₹ 5 note.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "₹ 5 + ₹ 5 = ₹ 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "₹ 50 is less than ₹ 20.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Money helps us to buy things we need.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
