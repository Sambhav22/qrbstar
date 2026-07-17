export const chapter = "Chapter - 5: Using the Keyboard";
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
        question: "Which part of the computer is used to type letters and numbers?",
        optionA: "Monitor",
        optionB: "CPU",
        optionC: "Keyboard",
        correctAnswer: "Keyboard",
      }),
      shuffleOptions({
        question: "Which key moves the cursor to the next line?",
        optionA: "Enter",
        optionB: "Space bar",
        optionC: "Del",
        correctAnswer: "Enter",
      }),
      shuffleOptions({
        question: "Which key helps you type capital letters without holding another key?",
        optionA: "Shift",
        optionB: "Caps Lock",
        optionC: "Space bar",
        correctAnswer: "Caps Lock",
      }),
      shuffleOptions({
        question: "Which key is the longest on the keyboard?",
        optionA: "Enter",
        optionB: "Space bar",
        optionC: "Caps Lock",
        correctAnswer: "Space bar",
      }),
      shuffleOptions({
        question: "Which key is used to delete letters or words?",
        optionA: "Shift",
        optionB: "Enter",
        optionC: "Del",
        correctAnswer: "Del",
      }),
      shuffleOptions({
        question: "How many alphabet keys are there on a keyboard?",
        optionA: "24",
        optionB: "26",
        optionC: "28",
        correctAnswer: "26",
      }),
      shuffleOptions({
        question: "How many sets of number keys are there on a keyboard?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Which key is pressed along with a letter to type in uppercase temporarily?",
        optionA: "Caps Lock",
        optionB: "Shift",
        optionC: "Space bar",
        correctAnswer: "Shift",
      }),
      shuffleOptions({
        question: "What kind of device is a keyboard?",
        optionA: "Input device",
        optionB: "Output device",
        optionC: "Storage device",
        correctAnswer: "Input device",
      }),
      shuffleOptions({
        question: "Which key creates space between words while typing?",
        optionA: "Enter",
        optionB: "Shift",
        optionC: "Space bar",
        correctAnswer: "Space bar",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A keyboard is an ______ device.",
        optionA: "Output",
        optionB: "Input",
        optionC: "Display",
        correctAnswer: "Input",
      }),
      shuffleOptions({
        question: "Keys with numbers on them are called ______ keys.",
        optionA: "Alphabet",
        optionB: "Special",
        optionC: "Number",
        correctAnswer: "Number",
      }),
      shuffleOptions({
        question: "The ______ key moves the cursor to the next line.",
        optionA: "Caps Lock",
        optionB: "Enter",
        optionC: "Del",
        correctAnswer: "Enter",
      }),
      shuffleOptions({
        question: "The ______ key helps to delete letters or words.",
        optionA: "Shift",
        optionB: "Space bar",
        optionC: "Del",
        correctAnswer: "Del",
      }),
      shuffleOptions({
        question: "The ______ key helps to type capital letters.",
        optionA: "Shift",
        optionB: "Caps Lock",
        optionC: "Enter",
        correctAnswer: "Caps Lock",
      }),
      shuffleOptions({
        question: "The ______ key is the longest key on the keyboard.",
        optionA: "Shift",
        optionB: "Enter",
        optionC: "Space bar",
        correctAnswer: "Space bar",
      }),
      shuffleOptions({
        question: "The ______ key creates space between words.",
        optionA: "Enter",
        optionB: "Space bar",
        optionC: "Del",
        correctAnswer: "Space bar",
      }),
      shuffleOptions({
        question: "There are ______ sets of number keys on a keyboard.",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "A standard keyboard has ______ keys in total.",
        optionA: "104",
        optionB: "109",
        optionC: "115",
        correctAnswer: "104",
      }),
      shuffleOptions({
        question: "The keys with A to Z on them are called ______ keys.",
        optionA: "Alphabet",
        optionB: "Number",
        optionC: "Special",
        correctAnswer: "Alphabet",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A keyboard is used to type letters and numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Space bar is the shortest key on the keyboard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Caps Lock key helps to write in capital letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Enter key moves the cursor to the next line.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Del key is used to delete letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A keyboard is an input device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are 104 keys on a standard keyboard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Alphabet keys are used to type numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Number keys are used to type alphabets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Shift key is used to type capital letters temporarily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
