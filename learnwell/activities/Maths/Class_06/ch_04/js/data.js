export const chapter = "Chapter - 4: Integers";
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
        question: "Which integer represents a fall of 12°C below zero?",
        optionA: "12",
        optionB: "–12",
        optionC: "0",
        correctAnswer: "–12",
      }),
      shuffleOptions({
        question: "Which number is farthest from zero on the number line?",
        optionA: "–15",
        optionB: "9",
        optionC: "–20",
        correctAnswer: "–20",
      }),
      shuffleOptions({
        question: "What is the successor of –6?",
        optionA: "–7",
        optionB: "–5",
        optionC: "6",
        correctAnswer: "–5",
      }),
      shuffleOptions({
        question: "Which integer has the smallest absolute value?",
        optionA: "–3",
        optionB: "0",
        optionC: "5",
        correctAnswer: "0",
      }),
      shuffleOptions({
        question: "What is the opposite of a gain of 30?",
        optionA: "–30",
        optionB: "0",
        optionC: "30",
        correctAnswer: "–30",
      }),
      shuffleOptions({
        question: "Which integer lies to the left of –4 on the number line?",
        optionA: "–3",
        optionB: "–5",
        optionC: "4",
        correctAnswer: "–5",
      }),
      shuffleOptions({
        question: "What is the value of |–9|?",
        optionA: "0",
        optionB: "–9",
        optionC: "9",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "Which integer is greater?",
        optionA: "–11",
        optionB: "–2",
        optionC: "–1",
        correctAnswer: "–2",
      }),
      shuffleOptions({
        question: "If you move 7 steps right from –3, where do you reach?",
        optionA: "6",
        optionB: "5",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "What is the value of –6 + (–5)?",
        optionA: "–1",
        optionB: "–11",
        optionC: "11",
        correctAnswer: "–11",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The absolute value of –14 is ______.",
        optionA: "–14",
        optionB: "0",
        optionC: "14",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "The opposite of moving 8 steps east is moving ______.",
        optionA: "8 steps north",
        optionB: "8 steps west",
        optionC: "0 steps",
        correctAnswer: "8 steps west",
      }),
      shuffleOptions({
        question: "The integer located 4 units to the left of 2 is ______.",
        optionA: "–2",
        optionB: "–3",
        optionC: "–6",
        correctAnswer: "–2",
      }),
      shuffleOptions({
        question: "The predecessor of 10 is ______.",
        optionA: "11",
        optionB: "9",
        optionC: "–10",
        correctAnswer: "9",
      }),
      shuffleOptions({
        question: "The integer that lies between –6 and –4 is ______.",
        optionA: "–5",
        optionB: "–3",
        optionC: "0",
        correctAnswer: "–5",
      }),
      shuffleOptions({
        question: "The number whose opposite is 18 is ______.",
        optionA: "–18",
        optionB: "0",
        optionC: "18",
        correctAnswer: "–18",
      }),
      shuffleOptions({
        question: "7 – 12 equals ______.",
        optionA: "–19",
        optionB: "–5",
        optionC: "–9",
        correctAnswer: "–5",
      }),
      shuffleOptions({
        question: "The additive inverse of –21 is ______.",
        optionA: "–21",
        optionB: "21",
        optionC: "0",
        correctAnswer: "21",
      }),
      shuffleOptions({
        question: "If |x| = 3, then x may be ______.",
        optionA: "3",
        optionB: "–3",
        optionC: "3 or –3",
        correctAnswer: "3 or –3",
      }),
      shuffleOptions({
        question: "The distance between –8 and 3 on the number line is ______.",
        optionA: "5",
        optionB: "11",
        optionC: "8",
        correctAnswer: "11",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The integer –9 is less than –2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Zero is greater than every negative integer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The absolute value of any integer is always positive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "–3 lies to the right of –1 on the number line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The additive inverse of 0 is 0.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The integer 5 is smaller than –7.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The successor of –10 is –9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The opposite of a loss of 9 is a gain of 9.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sum of two negative integers is always negative.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The number –12 has greater absolute value than 8.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
