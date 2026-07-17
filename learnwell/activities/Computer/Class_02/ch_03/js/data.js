export const chapter = "Chapter - 3: Computer Devices";
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
        question: "Which part of the computer looks like a typewriter and is used to type letters and numbers?",
        optionA: "Keyboard",
        optionB: "Mouse",
        optionC: "Scanner",
        correctAnswer: "Keyboard",
      }),
      shuffleOptions({
        question: "Which device helps to draw pictures and select objects on the computer?",
        optionA: "Mouse",
        optionB: "Printer",
        optionC: "Microphone",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "Which device is used to record voice and music into the computer?",
        optionA: "Microphone",
        optionB: "Joystick",
        optionC: "Speaker",
        correctAnswer: "Microphone",
      }),
      shuffleOptions({
        question: "Which part of the computer controls all its functions and processes information?",
        optionA: "CPU",
        optionB: "Monitor",
        optionC: "Keyboard",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "Which device is used to play games on the computer?",
        optionA: "Joystick",
        optionB: "Mouse",
        optionC: "Speaker",
        correctAnswer: "Joystick",
      }),
      shuffleOptions({
        question: "Which part of the CPU performs all mathematical calculations?",
        optionA: "ALU",
        optionB: "CU",
        optionC: "MU",
        correctAnswer: "ALU",
      }),
      shuffleOptions({
        question: "Which device converts text or an image into its electronic form?",
        optionA: "Scanner",
        optionB: "Printer",
        optionC: "Mouse",
        correctAnswer: "Scanner",
      }),
      shuffleOptions({
        question: "Which part of the CPU directs all input and output flow?",
        optionA: "CU",
        optionB: "ALU",
        optionC: "MU",
        correctAnswer: "CU",
      }),
      shuffleOptions({
        question: "Which device displays text and pictures on the screen?",
        optionA: "Monitor",
        optionB: "Speaker",
        optionC: "Scanner",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "Which device gives the printed output on paper?",
        optionA: "Printer",
        optionB: "CPU",
        optionC: "Keyboard",
        correctAnswer: "Printer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer is made up of input, processing and ______ devices.",
        optionA: "output",
        optionB: "power",
        optionC: "control",
        correctAnswer: "output",
      }),
      shuffleOptions({
        question: "The CPU is also known as the ______ of a computer.",
        optionA: "brain",
        optionB: "heart",
        optionC: "hand",
        correctAnswer: "brain",
      }),
      shuffleOptions({
        question: "A ______ should be used for the proper working of a mouse.",
        optionA: "mouse pad",
        optionB: "paper",
        optionC: "mat",
        correctAnswer: "mouse pad",
      }),
      shuffleOptions({
        question: "A monitor is also called a ______.",
        optionA: "VDU",
        optionB: "TV",
        optionC: "CPU",
        correctAnswer: "VDU",
      }),
      shuffleOptions({
        question: "The output given by the printer is called a ______.",
        optionA: "hard copy",
        optionB: "soft copy",
        optionC: "photo copy",
        correctAnswer: "hard copy",
      }),
      shuffleOptions({
        question: "The part of CPU that stores data temporarily is called ______.",
        optionA: "MU",
        optionB: "CU",
        optionC: "ALU",
        correctAnswer: "MU",
      }),
      shuffleOptions({
        question: "The part of CPU that does all the calculations is called ______.",
        optionA: "ALU",
        optionB: "MU",
        optionC: "CU",
        correctAnswer: "ALU",
      }),
      shuffleOptions({
        question: "The part of CPU that controls input and output devices is called ______.",
        optionA: "CU",
        optionB: "MU",
        optionC: "ALU",
        correctAnswer: "CU",
      }),
      shuffleOptions({
        question: "______ is used to listen to music and other sounds.",
        optionA: "Speaker",
        optionB: "Joystick",
        optionC: "Scanner",
        correctAnswer: "Speaker",
      }),
      shuffleOptions({
        question: "The monitor looks like a ______ screen.",
        optionA: "television",
        optionB: "radio",
        optionC: "tablet",
        correctAnswer: "television",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A keyboard is an input device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A mouse is used to print documents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "CPU is known as the brain of a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The printer gives output on paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The speaker is used to record voice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Scanner is an output device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "ALU is a part of the CPU.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "CU controls all parts of the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Joystick is used to play games on a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The CPU is kept inside the CPU box.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
