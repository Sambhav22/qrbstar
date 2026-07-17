export const chapter = "Chapter - 1: All About Computer";
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
        question: "Who is known as the Father of the Computer?",
        optionA: "Charles Babbage",
        optionB: "Bill Gates",
        optionC: "Thomas Edison",
        correctAnswer: "Charles Babbage",
      }),
      shuffleOptions({
        question: "Which part of the computer helps you to point and click?",
        optionA: "CPU",
        optionB: "Mouse",
        optionC: "Keyboard",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "Which part of the computer shows pictures and text?",
        optionA: "Monitor",
        optionB: "CPU",
        optionC: "Printer",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "Which feature of the computer shows that it never gets tired?",
        optionA: "Diligence",
        optionB: "Speed",
        optionC: "Storage",
        correctAnswer: "Diligence",
      }),
      shuffleOptions({
        question: "Which type of computer is used by large organisations like banks?",
        optionA: "Mainframe computer",
        optionB: "Laptop",
        optionC: "Personal computer",
        correctAnswer: "Mainframe computer",
      }),
      shuffleOptions({
        question: "Which device helps the computer to continue working when power goes off?",
        optionA: "Monitor",
        optionB: "UPS",
        optionC: "Keyboard",
        correctAnswer: "UPS",
      }),
      shuffleOptions({
        question: "Which computer is the fastest and most powerful?",
        optionA: "Supercomputer",
        optionB: "Mainframe",
        optionC: "Desktop",
        correctAnswer: "Supercomputer",
      }),
      shuffleOptions({
        question: "Which button helps you to start the CPU?",
        optionA: "Power button",
        optionB: "Reset button",
        optionC: "Start button",
        correctAnswer: "Power button",
      }),
      shuffleOptions({
        question: "Which step should you perform before pressing the CPU power button?",
        optionA: "Switch on the main power",
        optionB: "Click Shut Down",
        optionC: "Open Monitor",
        correctAnswer: "Switch on the main power",
      }),
      shuffleOptions({
        question: "What appears on the screen after starting the computer?",
        optionA: "Desktop",
        optionB: "Folder",
        optionC: "File",
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
        question: "Computer is an ______ machine.",
        optionA: "electronic",
        optionB: "manual",
        optionC: "natural",
        correctAnswer: "electronic",
      }),
      shuffleOptions({
        question: "The full form of UPS is ______.",
        optionA: "Unused Power Source",
        optionB: "Uninterrupted Power Supply",
        optionC: "United Power System",
        correctAnswer: "Uninterrupted Power Supply",
      }),
      shuffleOptions({
        question: "The main part that controls the computer’s working is called ______.",
        optionA: "CPU",
        optionB: "Mouse",
        optionC: "Keyboard",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "The process of input, process and output is known as ______ cycle.",
        optionA: "IPO",
        optionB: "IOP",
        optionC: "OPI",
        correctAnswer: "IPO",
      }),
      shuffleOptions({
        question: "The computer that fits on your lap is called a ______.",
        optionA: "Laptop",
        optionB: "Desktop",
        optionC: "Mainframe",
        correctAnswer: "Laptop",
      }),
      shuffleOptions({
        question: "A ______ computer is used for weather forecasting and scientific work.",
        optionA: "Super",
        optionB: "Personal",
        optionC: "Mainframe",
        correctAnswer: "Super",
      }),
      shuffleOptions({
        question: "A computer can store a large amount of ______.",
        optionA: "Data",
        optionB: "Energy",
        optionC: "Paper",
        correctAnswer: "Data",
      }),
      shuffleOptions({
        question: "A ______ computer is kept on a desk.",
        optionA: "Desktop",
        optionB: "Laptop",
        optionC: "Mainframe",
        correctAnswer: "Desktop",
      }),
      shuffleOptions({
        question: "Computer gives the result called ______.",
        optionA: "Output",
        optionB: "Input",
        optionC: "Storage",
        correctAnswer: "Output",
      }),
      shuffleOptions({
        question: "The ______ provides power backup when electricity fails.",
        optionA: "UPS",
        optionB: "CPU",
        optionC: "Monitor",
        correctAnswer: "UPS",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Computer runs on electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A laptop is also called a notebook.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Supercomputers are small and easy to carry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The CPU is called the brain of the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Monitor is an input device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Computer can make mistakes if it gets tired.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "UPS provides uninterrupted power supply.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "IPO means Input, Process, Output.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A desktop computer is small enough to be carried anywhere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Computer always gives accurate results without mistakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
