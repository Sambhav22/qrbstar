export const chapter = "Chapter - 1: Different types of Computers";
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
        question: "Which computer stores data in the form of digits?",
        optionA: "Analog",
        optionB: "Digital",
        optionC: "Hybrid",
        correctAnswer: "Digital",
      }),
      shuffleOptions({
        question: "Which type of computer uses both analog and digital data?",
        optionA: "Microcomputer",
        optionB: "Hybrid",
        optionC: "Mainframe",
        correctAnswer: "Hybrid",
      }),
      shuffleOptions({
        question: "Which computer is mainly used by large organisations to perform critical tasks?",
        optionA: "Mainframe",
        optionB: "Minicomputer",
        optionC: "Microcomputer",
        correctAnswer: "Mainframe",
      }),
      shuffleOptions({
        question: "Which of the following is a portable computer that runs on rechargeable batteries?",
        optionA: "Desktop",
        optionB: "Laptop",
        optionC: "Workstation",
        correctAnswer: "Laptop",
      }),
      shuffleOptions({
        question: "Which computer is also known as a mid-range computer?",
        optionA: "Minicomputer",
        optionB: "Supercomputer",
        optionC: "Microcomputer",
        correctAnswer: "Minicomputer",
      }),
      shuffleOptions({
        question: "Which computer is the most powerful and very expensive?",
        optionA: "Hybrid",
        optionB: "Supercomputer",
        optionC: "Mainframe",
        correctAnswer: "Supercomputer",
      }),
      shuffleOptions({
        question: "Which company developed the first mainframe computers?",
        optionA: "Apple",
        optionB: "IBM",
        optionC: "Microsoft",
        correctAnswer: "IBM",
      }),
      shuffleOptions({
        question: "Which computer is used for drafting, publishing and graphic designing?",
        optionA: "Workstation",
        optionB: "Minicomputer",
        optionC: "PDA",
        correctAnswer: "Workstation",
      }),
      shuffleOptions({
        question: "Which of these is a handheld computing device that has now become obsolete?",
        optionA: "PDA",
        optionB: "Tablet",
        optionC: "Laptop",
        correctAnswer: "PDA",
      }),
      shuffleOptions({
        question: "Which small computer fits entirely on a desk and is commonly used in schools and offices?",
        optionA: "Desktop",
        optionB: "Laptop",
        optionC: "Tablet",
        correctAnswer: "Desktop",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Analog computers are used to process ______ data.",
        optionA: "discrete",
        optionB: "analog",
        optionC: "digital",
        correctAnswer: "analog",
      }),
      shuffleOptions({
        question: "Microcomputers depend on a single chip called a ______.",
        optionA: "motherboard",
        optionB: "microprocessor",
        optionC: "circuit board",
        correctAnswer: "microprocessor",
      }),
      shuffleOptions({
        question: "______ computers combine the speed of analog and the accuracy of digital computers.",
        optionA: "Hybrid",
        optionB: "Digital",
        optionC: "Mainframe",
        correctAnswer: "Hybrid",
      }),
      shuffleOptions({
        question: "______ computers store data in the form of digits.",
        optionA: "Digital",
        optionB: "Analog",
        optionC: "Hybrid",
        correctAnswer: "Digital",
      }),
      shuffleOptions({
        question: "PDAs are ______ computers used as organisers and communication devices.",
        optionA: "handheld",
        optionB: "desktop",
        optionC: "mainframe",
        correctAnswer: "handheld",
      }),
      shuffleOptions({
        question: "______ computers are mainly used for business and large data processing.",
        optionA: "Mainframe",
        optionB: "Micro",
        optionC: "Hybrid",
        correctAnswer: "Mainframe",
      }),
      shuffleOptions({
        question: "Tablets come with features like touch screen, camera and ______.",
        optionA: "microphone",
        optionB: "joystick",
        optionC: "speaker only",
        correctAnswer: "microphone",
      }),
      shuffleOptions({
        question: "______ computers are designed for performing high-speed scientific calculations.",
        optionA: "Super",
        optionB: "Mini",
        optionC: "Analog",
        correctAnswer: "Super",
      }),
      shuffleOptions({
        question: "A ______ computer is small in size and mainly for single users.",
        optionA: "Micro",
        optionB: "Mainframe",
        optionC: "Super",
        correctAnswer: "Micro",
      }),
      shuffleOptions({
        question: "______ computers were first developed by IBM Corporation.",
        optionA: "Mainframe",
        optionB: "Hybrid",
        optionC: "Analog",
        correctAnswer: "Mainframe",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Analog computers handle continuous data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Digital computers store data in physical quantities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hybrid computers combine the advantages of both analog and digital systems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Microcomputers are generally used by a single person.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Minicomputers are smaller than microcomputers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mainframe computers are used for large-scale business operations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "PDAs have now become obsolete with the rise of smartphones and tablets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Workstations are designed for heavy processing tasks like animation and design.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Supercomputers are slower than mainframe computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tablets are smaller than notebook computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
