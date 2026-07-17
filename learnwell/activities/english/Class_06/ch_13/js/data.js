export const chapter = "Chapter - 13: Thank You, Ma’am";
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
        question: "What time was it when the woman was walking alone?",
        optionA: "Ten o’clock",
        optionB: "Eleven o’clock",
        optionC: "Twelve o’clock",
        correctAnswer: "Eleven o’clock",
      }),
      shuffleOptions({
        question: "What did Roger want to buy?",
        optionA: "A jacket",
        optionB: "Blue suede shoes",
        optionC: "A watch",
        correctAnswer: "Blue suede shoes",
      }),
      shuffleOptions({
        question: "What did Mrs. Jones ask Roger to wash?",
        optionA: "His shoes",
        optionB: "His face",
        optionC: "His hands",
        correctAnswer: "His face",
      }),
      shuffleOptions({
        question: "What food did Mrs. Jones cook?",
        optionA: "Rice",
        optionB: "Lima beans and ham",
        optionC: "Noodles",
        correctAnswer: "Lima beans and ham",
      }),
      shuffleOptions({
        question: "What drink did Mrs. Jones prepare?",
        optionA: "Tea",
        optionB: "Coffee",
        optionC: "Cocoa",
        correctAnswer: "Cocoa",
      }),
      shuffleOptions({
        question: "Where did Mrs. Jones work?",
        optionA: "School",
        optionB: "Hotel beauty-shop",
        optionC: "Hospital",
        correctAnswer: "Hotel beauty-shop",
      }),
      shuffleOptions({
        question: "What amount of money did Mrs. Jones give Roger?",
        optionA: "5 dollars",
        optionB: "10 dollars",
        optionC: "15 dollars",
        correctAnswer: "10 dollars",
      }),
      shuffleOptions({
        question: "What was Roger wearing?",
        optionA: "Sandals",
        optionB: "Tennis shoes",
        optionC: "Boots",
        correctAnswer: "Tennis shoes",
      }),
      shuffleOptions({
        question: "What did Roger do instead of running away?",
        optionA: "He left quietly",
        optionB: "He stayed and gained trust",
        optionC: "He stole money",
        correctAnswer: "He stayed and gained trust",
      }),
      shuffleOptions({
        question: "How old was Roger?",
        optionA: "About 10",
        optionB: "About 14–15",
        optionC: "About 18",
        correctAnswer: "About 14–15",
      }),
    ]),
  };
}
export var activityData;

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The woman carried a large ______.",
        optionA: "Box",
        optionB: "Purse",
        optionC: "Basket",
        correctAnswer: "Purse",
      }),
      shuffleOptions({
        question: "The purse strap ______ when Roger pulled it.",
        optionA: "Broke",
        optionB: "Loosened",
        optionC: "Stretched",
        correctAnswer: "Broke",
      }),
      shuffleOptions({
        question: "The woman held Roger by his ______.",
        optionA: "Arm",
        optionB: "Collar",
        optionC: "Hand",
        correctAnswer: "Collar",
      }),
      shuffleOptions({
        question: "Mrs. Jones told Roger to wash his ______.",
        optionA: "Clothes",
        optionB: "Face",
        optionC: "Shoes",
        correctAnswer: "Face",
      }),
      shuffleOptions({
        question: "Roger wanted to buy ______ shoes.",
        optionA: "Leather",
        optionB: "Blue suede",
        optionC: "Running",
        correctAnswer: "Blue suede",
      }),
      shuffleOptions({
        question: "Mrs. Jones gave Roger a clean ______.",
        optionA: "Handkerchief",
        optionB: "Towel",
        optionC: "Shirt",
        correctAnswer: "Towel",
      }),
      shuffleOptions({
        question: "Roger looked at the door, then at the ______.",
        optionA: "Woman",
        optionB: "Window",
        optionC: "Street",
        correctAnswer: "Woman",
      }),
      shuffleOptions({
        question: "Mrs. Jones gave Roger a piece of ______.",
        optionA: "Bread",
        optionB: "Cake",
        optionC: "Fruit",
        correctAnswer: "Cake",
      }),
      shuffleOptions({
        question: "Mrs. Jones asked Roger to run a ______ through his hair.",
        optionA: "Comb",
        optionB: "Brush",
        optionC: "Hand",
        correctAnswer: "Comb",
      }),
      shuffleOptions({
        question: "Shoes got by wrong means will ______ your feet.",
        optionA: "Hurt",
        optionB: "Burn",
        optionC: "Freeze",
        correctAnswer: "Burn",
      }),
    ]),
  };
}
export var activityData;

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Roger was a strong grown-up man.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mrs. Jones dragged Roger to her house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roger’s face was dirty when Mrs. Jones met him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mrs. Jones left her purse on the bed without fear.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roger wanted money to buy a hat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mrs. Jones cooked beans and meat for supper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roger offered to go to the store for milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mrs. Jones told Roger about her work in a school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Roger said more than “Thank you” at the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mrs. Jones gave Roger advice not to steal again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
export var activityData;
