export const chapter = "Chapter - 2: Ordinal Numbers";
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
        question: "Which type of number shows the position of an object?",
        optionA: "Cardinal",
        optionB: "Ordinal",
        optionC: "Counting",
        correctAnswer: "Ordinal",
      }),
      shuffleOptions({
        question: "What is the ordinal number for 7?",
        optionA: "Seven",
        optionB: "Seventh",
        optionC: "Seventy",
        correctAnswer: "Seventh",
      }),
      shuffleOptions({
        question: "What comes after the third position?",
        optionA: "Fourth",
        optionB: "Second",
        optionC: "Fifth",
        correctAnswer: "Fourth",
      }),
      shuffleOptions({
        question: "Which number comes before ninth?",
        optionA: "Eighth",
        optionB: "Seventh",
        optionC: "Tenth",
        correctAnswer: "Eighth",
      }),
      shuffleOptions({
        question: "The ordinal number for 10 is —",
        optionA: "Tenth",
        optionB: "Ten",
        optionC: "Tenthly",
        correctAnswer: "Tenth",
      }),
      shuffleOptions({
        question: "Which ordinal number comes between fourth and sixth?",
        optionA: "Fifth",
        optionB: "Third",
        optionC: "Seventh",
        correctAnswer: "Fifth",
      }),
      shuffleOptions({
        question: "The first letter in JANUARY is —",
        optionA: "A",
        optionB: "J",
        optionC: "N",
        correctAnswer: "J",
      }),
      shuffleOptions({
        question: "The third letter in SATURN is —",
        optionA: "S",
        optionB: "A",
        optionC: "T",
        correctAnswer: "A",
      }),
      shuffleOptions({
        question: "The eighth letter in WEDNESDAY is —",
        optionA: "Y",
        optionB: "E",
        optionC: "D",
        correctAnswer: "Y",
      }),
      shuffleOptions({
        question: "The sixth letter in ORANGE is —",
        optionA: "E",
        optionB: "N",
        optionC: "G",
        correctAnswer: "E",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ordinal numbers show the ______ of an object.",
        optionA: "Colour",
        optionB: "Quantity",
        optionC: "Position",
        correctAnswer: "Position",
      }),
      shuffleOptions({
        question: "The number that comes after eighth is ______.",
        optionA: "Seventh",
        optionB: "Tenth",
        optionC: "Ninth",
        correctAnswer: "Ninth",
      }),
      shuffleOptions({
        question: "______ comes before fourth.",
        optionA: "Fifth",
        optionB: "Second",
        optionC: "Third",
        correctAnswer: "Third",
      }),
      shuffleOptions({
        question: "The ordinal number for 6 is ______.",
        optionA: "Sixth",
        optionB: "Seventh",
        optionC: "Five",
        correctAnswer: "Sixth",
      }),
      shuffleOptions({
        question: "The number name of 2nd is ______.",
        optionA: "Two",
        optionB: "Second",
        optionC: "Twice",
        correctAnswer: "Second",
      }),
      shuffleOptions({
        question: "______ comes between second and fourth.",
        optionA: "Third",
        optionB: "First",
        optionC: "Fifth",
        correctAnswer: "Third",
      }),
      shuffleOptions({
        question: "______ comes before seventh.",
        optionA: "Sixth",
        optionB: "Eighth",
        optionC: "Ninth",
        correctAnswer: "Sixth",
      }),
      shuffleOptions({
        question: "The ordinal number for 8 is ______.",
        optionA: "Eight",
        optionB: "Eighth",
        optionC: "Eighty",
        correctAnswer: "Eighth",
      }),
      shuffleOptions({
        question: "______ is written as 5th.",
        optionA: "Fifth",
        optionB: "Four",
        optionC: "Sixth",
        correctAnswer: "Fifth",
      }),
      shuffleOptions({
        question: "The last number in the list from first to tenth is ______.",
        optionA: "Tenth",
        optionB: "Eighth",
        optionC: "Ninth",
        correctAnswer: "Tenth",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ordinal numbers tell position.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fifth comes before fourth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Second comes after first.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number name of 9th is ninth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tenth comes after ninth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eighth comes before seventh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "First comes before second.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ordinal numbers show how many objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The third letter in SATURN is A.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sixth letter in ORANGE is E.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
