export const chapter = "Chapter - 1: Introducing Computer";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who is the master of a computer?",
        optionA: "Mouse",
        optionB: "Human",
        optionC: "Printer",
        correctAnswer: "Human",
      }),
      shuffleOptions({
        question: "What does a computer need to work?",
        optionA: "Food",
        optionB: "Electricity",
        optionC: "Water",
        correctAnswer: "Electricity",
      }),
      shuffleOptions({
        question: "Which feature of a computer helps it to do many tasks at the same time?",
        optionA: "Speed",
        optionB: "Multitasking",
        optionC: "Accuracy",
        correctAnswer: "Multitasking",
      }),
      shuffleOptions({
        question: "Who can think and make decisions on their own?",
        optionA: "Computer",
        optionB: "Human",
        optionC: "Machine",
        correctAnswer: "Human",
      }),
      shuffleOptions({
        question: "What does the word ‘computer’ mean?",
        optionA: "To calculate",
        optionB: "To draw",
        optionC: "To sing",
        correctAnswer: "To calculate",
      }),
      shuffleOptions({
        question: "Which feature of computer allows it to work quickly?",
        optionA: "Speed",
        optionB: "Storage",
        optionC: "Power",
        correctAnswer: "Speed",
      }),
      shuffleOptions({
        question: "Who invented the computer?",
        optionA: "Human",
        optionB: "Robot",
        optionC: "Monkey",
        correctAnswer: "Human",
      }),
      shuffleOptions({
        question: "Which of the following does a computer not have?",
        optionA: "Feelings",
        optionB: "Keys",
        optionC: "Screen",
        correctAnswer: "Feelings",
      }),
      shuffleOptions({
        question: "What does a computer need to start?",
        optionA: "Buttons",
        optionB: "Instructions",
        optionC: "Food",
        correctAnswer: "Instructions",
      }),
      shuffleOptions({
        question: "Which of these can never get tired while working?",
        optionA: "Human",
        optionB: "Computer",
        optionC: "Dog",
        correctAnswer: "Computer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer is an _______ machine.",
        optionA: "electric",
        optionB: "electronic",
        optionC: "manual",
        correctAnswer: "electronic",
      }),
      shuffleOptions({
        question: "A computer works very _______.",
        optionA: "slowly",
        optionB: "fast",
        optionC: "late",
        correctAnswer: "fast",
      }),
      shuffleOptions({
        question: "A computer works with _______.",
        optionA: "mistakes",
        optionB: "accuracy",
        optionC: "confusion",
        correctAnswer: "accuracy",
      }),
      shuffleOptions({
        question: "A computer needs _______ to work.",
        optionA: "air",
        optionB: "electricity",
        optionC: "food",
        correctAnswer: "electricity",
      }),
      shuffleOptions({
        question: "Human has _______ and emotions.",
        optionA: "wires",
        optionB: "feelings",
        optionC: "buttons",
        correctAnswer: "feelings",
      }),
      shuffleOptions({
        question: "A computer cannot _______ on its own.",
        optionA: "think",
        optionB: "draw",
        optionC: "store",
        correctAnswer: "think",
      }),
      shuffleOptions({
        question: "A computer can _______ large amount of information.",
        optionA: "forget",
        optionB: "store",
        optionC: "throw",
        correctAnswer: "store",
      }),
      shuffleOptions({
        question: "Human can make his own _______.",
        optionA: "decisions",
        optionB: "circuits",
        optionC: "cables",
        correctAnswer: "decisions",
      }),
      shuffleOptions({
        question: "A computer always follows human _______.",
        optionA: "games",
        optionB: "instructions",
        optionC: "stories",
        correctAnswer: "instructions",
      }),
      shuffleOptions({
        question: "A computer never gets _______.",
        optionA: "tired",
        optionB: "angry",
        optionC: "hungry",
        correctAnswer: "tired",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer can feel happy and sad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A computer works faster than a human.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A human needs food to work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A computer can think on its own.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Human has feelings and emotions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A computer needs electricity to work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A computer never gets tired.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Human is the master of the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A computer can take decisions without instructions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The word ‘computer’ has come from ‘compute,’ which means to calculate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
