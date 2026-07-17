export const chapter = "Chapter - 4: Turning On and Off";
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
        question: "What does a computer need to work?",
        optionA: "Petrol",
        optionB: "Electricity",
        optionC: "Water",
        correctAnswer: "Electricity",
      }),
      shuffleOptions({
        question: "What is the first step to start a computer?",
        optionA: "Switch on the monitor",
        optionB: "Switch on the main power supply",
        optionC: "Click on the Start button",
        correctAnswer: "Switch on the main power supply",
      }),
      shuffleOptions({
        question: "What shows that the CPU is on?",
        optionA: "A light appears",
        optionB: "The screen turns blue",
        optionC: "The mouse moves",
        correctAnswer: "A light appears",
      }),
      shuffleOptions({
        question: "Which part supplies power to all parts of the computer?",
        optionA: "Monitor",
        optionB: "UPS",
        optionC: "Keyboard",
        correctAnswer: "UPS",
      }),
      shuffleOptions({
        question: "What appears on the screen after switching on the monitor?",
        optionA: "Game",
        optionB: "Main screen (booting up)",
        optionC: "Wallpaper",
        correctAnswer: "Main screen (booting up)",
      }),
      shuffleOptions({
        question: "Which button do we click first to shut down the computer?",
        optionA: "Start button",
        optionB: "Restart button",
        optionC: "Exit button",
        correctAnswer: "Start button",
      }),
      shuffleOptions({
        question: "What should we do after shutting down the computer?",
        optionA: "Switch off monitor, UPS and power supply",
        optionB: "Leave it on",
        optionC: "Remove mouse",
        correctAnswer: "Switch off monitor, UPS and power supply",
      }),
      shuffleOptions({
        question: "What does CPU stand for?",
        optionA: "Central Processing Unit",
        optionB: "Computer Power Unit",
        optionC: "Central Printer Unit",
        correctAnswer: "Central Processing Unit",
      }),
      shuffleOptions({
        question: "Where is the Start button found on the screen?",
        optionA: "Bottom left corner",
        optionB: "Top right corner",
        optionC: "Middle of screen",
        correctAnswer: "Bottom left corner",
      }),
      shuffleOptions({
        question: "What is the process of showing the main screen called?",
        optionA: "Turning off",
        optionB: "Booting up",
        optionC: "Copying",
        correctAnswer: "Booting up",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer needs ________ to work.",
        optionA: "Oil",
        optionB: "Electricity",
        optionC: "Petrol",
        correctAnswer: "Electricity",
      }),
      shuffleOptions({
        question: "The device that supplies power to all parts is called ________.",
        optionA: "CPU",
        optionB: "UPS",
        optionC: "Monitor",
        correctAnswer: "UPS",
      }),
      shuffleOptions({
        question: "When the main screen appears, the computer is said to be ________.",
        optionA: "Printing",
        optionB: "Booting up",
        optionC: "Closing",
        correctAnswer: "Booting up",
      }),
      shuffleOptions({
        question: "The ________ button is pressed to begin shutting down the computer.",
        optionA: "Start",
        optionB: "Stop",
        optionC: "Restart",
        correctAnswer: "Start",
      }),
      shuffleOptions({
        question: "After shutting down, we must turn off the ________.",
        optionA: "Monitor",
        optionB: "Keyboard",
        optionC: "Mouse",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "The light on the CPU shows that the computer is ________.",
        optionA: "On",
        optionB: "Off",
        optionC: "Restarted",
        correctAnswer: "On",
      }),
      shuffleOptions({
        question: "The main screen is seen on the ________.",
        optionA: "Monitor",
        optionB: "UPS",
        optionC: "CPU",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "CPU stands for Central ________ Unit.",
        optionA: "Processing",
        optionB: "Power",
        optionC: "Program",
        correctAnswer: "Processing",
      }),
      shuffleOptions({
        question: "The Start button is found at the ________ of the screen.",
        optionA: "Bottom left",
        optionB: "Top right",
        optionC: "Centre",
        correctAnswer: "Bottom left",
      }),
      shuffleOptions({
        question: "We should always shut down the computer ________.",
        optionA: "Properly",
        optionB: "Quickly",
        optionC: "Hardly",
        correctAnswer: "Properly",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer can work without electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The UPS helps to supply power to the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Booting up means starting the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Start button is used to shut down the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "CPU stands for Central Processing Unit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We must switch off the UPS after shutting down the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The monitor shows the main screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should switch on the monitor before the main power supply.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The light on the CPU shows that it is on.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Turning off the computer properly keeps it safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
