export const chapter = "Chapter - 4: The Secret Bond";
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
        question: "What did Manik buy with the tenner?",
        optionA: "Biscuit",
        optionB: "Chocolate",
        optionC: "Ice-cream",
        correctAnswer: "Chocolate",
      }),
      shuffleOptions({
        question: "Who was standing in the lobby with sweat on her forehead?",
        optionA: "Neighbour",
        optionB: "Mother",
        optionC: "Aunt",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "What kind of lock closed the door?",
        optionA: "Automatic",
        optionB: "Manual",
        optionC: "Digital",
        correctAnswer: "Automatic",
      }),
      shuffleOptions({
        question: "Which tree was near the kitchen window?",
        optionA: "Mango",
        optionB: "Neem",
        optionC: "Peepal",
        correctAnswer: "Neem",
      }),
      shuffleOptions({
        question: "Who joined hands and asked Manik to keep quiet?",
        optionA: "Mother",
        optionB: "Grandpa",
        optionC: "Postman",
        correctAnswer: "Grandpa",
      }),
      shuffleOptions({
        question: "Who had cooked pudding that day?",
        optionA: "Mother",
        optionB: "Aunt",
        optionC: "Neighbour",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Who said, “Don’t worry, Mummy”?",
        optionA: "Manik",
        optionB: "Grandpa",
        optionC: "Postman",
        correctAnswer: "Manik",
      }),
      shuffleOptions({
        question: "Grandpa promised to help Manik in –",
        optionA: "Science",
        optionB: "English",
        optionC: "Maths",
        correctAnswer: "Science",
      }),
      shuffleOptions({
        question: "What did Manik push towards Grandpa at the dining table?",
        optionA: "Tea",
        optionB: "Pudding",
        optionC: "Chapatti",
        correctAnswer: "Pudding",
      }),
      shuffleOptions({
        question: "Who could not understand the cause of Grandpa and Manik’s smile?",
        optionA: "Father",
        optionB: "Mother",
        optionC: "Neighbour",
        correctAnswer: "Mother",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Manik had a ______ in his pocket.",
        optionA: "Coin",
        optionB: "Tenner",
        optionC: "Five-rupee note",
        correctAnswer: "Tenner",
      }),
      shuffleOptions({
        question: "Mother had been locked out for about ______ minutes.",
        optionA: "20",
        optionB: "30",
        optionC: "40",
        correctAnswer: "30",
      }),
      shuffleOptions({
        question: "Grandpa was ______ inside the house when the door was locked.",
        optionA: "Sleeping",
        optionB: "Reading",
        optionC: "Cooking",
        correctAnswer: "Sleeping",
      }),
      shuffleOptions({
        question: "Manik climbed up the ______ tree.",
        optionA: "Neem",
        optionB: "Banyan",
        optionC: "Peepal",
        correctAnswer: "Neem",
      }),
      shuffleOptions({
        question: "Grandpa took pudding from the ______.",
        optionA: "Refrigerator",
        optionB: "Cupboard",
        optionC: "Almirah",
        correctAnswer: "Refrigerator",
      }),
      shuffleOptions({
        question: "Doctor had forbidden Grandpa to eat ______.",
        optionA: "Fruits",
        optionB: "Sweets",
        optionC: "Rice",
        correctAnswer: "Sweets",
      }),
      shuffleOptions({
        question: "Grandpa was suffering from ______.",
        optionA: "Asthma",
        optionB: "Diabetes",
        optionC: "Fever",
        correctAnswer: "Diabetes",
      }),
      shuffleOptions({
        question: "Manik suppressed his ______ while watching Grandpa.",
        optionA: "Fear",
        optionB: "Smile",
        optionC: "Anger",
        correctAnswer: "Smile",
      }),
      shuffleOptions({
        question: "Grandpa wanted Manik to keep the matter ______.",
        optionA: "Secret",
        optionB: "Open",
        optionC: "Shared",
        correctAnswer: "Secret",
      }),
      shuffleOptions({
        question: "The bond between Manik and Grandpa was a ______ one.",
        optionA: "Weak",
        optionB: "Secret",
        optionC: "Broken",
        correctAnswer: "Secret",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Manik ate the chocolate before washing his hands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The postman locked the door from outside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mother usually kept a key tied to her saree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Manik laughed in his heart while climbing the neem tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Grandpa was eating pudding openly at the table.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Manik had scored low marks in Mathematics.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Grandpa told Father he would teach Manik science.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Grandpa washed the bowl before Mother entered.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Manik lovingly offered pudding to Grandpa.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mother fully understood the reason behind their smiles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
