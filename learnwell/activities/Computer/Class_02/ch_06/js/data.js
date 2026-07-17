export const chapter = "Chapter - 6: Operating a Computer";
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
        optionA: "Water",
        optionB: "Electricity",
        optionC: "Fuel",
        correctAnswer: "Electricity",
      }),
      shuffleOptions({
        question: "Which part of the computer provides backup power?",
        optionA: "CPU",
        optionB: "UPS",
        optionC: "Mouse",
        correctAnswer: "UPS",
      }),
      shuffleOptions({
        question: "Which button do we click to open any program?",
        optionA: "Exit",
        optionB: "Start",
        optionC: "Delete",
        correctAnswer: "Start",
      }),
      shuffleOptions({
        question: "What is the first screen that appears after switching on the computer?",
        optionA: "Desktop",
        optionB: "Folder",
        optionC: "Document",
        correctAnswer: "Desktop",
      }),
      shuffleOptions({
        question: "What should you always do before shutting down the computer?",
        optionA: "Save your work",
        optionB: "Switch off main power directly",
        optionC: "Unplug the CPU",
        correctAnswer: "Save your work",
      }),
      shuffleOptions({
        question: "Which device is called the brain of the computer?",
        optionA: "CPU",
        optionB: "Keyboard",
        optionC: "Monitor",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "When power goes off, which part keeps the computer on for some time?",
        optionA: "Printer",
        optionB: "UPS",
        optionC: "Speaker",
        correctAnswer: "UPS",
      }),
      shuffleOptions({
        question: "Where do small pictures called icons appear?",
        optionA: "Desktop",
        optionB: "Keyboard",
        optionC: "CPU",
        correctAnswer: "Desktop",
      }),
      shuffleOptions({
        question: "What should you click to shut down the computer?",
        optionA: "Start button",
        optionB: "Restart button",
        optionC: "Paint icon",
        correctAnswer: "Start button",
      }),
      shuffleOptions({
        question: "What should you avoid touching with wet hands?",
        optionA: "Electrical wires",
        optionB: "Books",
        optionC: "Mouse pad",
        correctAnswer: "Electrical wires",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer requires ______ to work.",
        optionA: "Air",
        optionB: "Electricity",
        optionC: "Light",
        correctAnswer: "Electricity",
      }),
      shuffleOptions({
        question: "The first screen that appears on the monitor is called ______.",
        optionA: "Desktop",
        optionB: "Folder",
        optionC: "Menu",
        correctAnswer: "Desktop",
      }),
      shuffleOptions({
        question: "Small pictures on the desktop are called ______.",
        optionA: "Files",
        optionB: "Icons",
        optionC: "Folders",
        correctAnswer: "Icons",
      }),
      shuffleOptions({
        question: "The main unit of the computer is the ______.",
        optionA: "UPS",
        optionB: "CPU",
        optionC: "Mouse",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "The ______ gives backup power to the computer.",
        optionA: "Keyboard",
        optionB: "UPS",
        optionC: "Monitor",
        correctAnswer: "UPS",
      }),
      shuffleOptions({
        question: "The button used to open applications is called the ______ button.",
        optionA: "Start",
        optionB: "Exit",
        optionC: "Close",
        correctAnswer: "Start",
      }),
      shuffleOptions({
        question: "Before shutting down, we should ______ our work.",
        optionA: "Save",
        optionB: "Delete",
        optionC: "Print",
        correctAnswer: "Save",
      }),
      shuffleOptions({
        question: "The desktop shows icons and a ______.",
        optionA: "Taskbar",
        optionB: "Screen saver",
        optionC: "Power key",
        correctAnswer: "Taskbar",
      }),
      shuffleOptions({
        question: "When we click on the Power button, we must choose ______.",
        optionA: "Restart",
        optionB: "Shut down",
        optionC: "Cancel",
        correctAnswer: "Shut down",
      }),
      shuffleOptions({
        question: "The power supply must be kept ______ to charge the UPS.",
        optionA: "ON",
        optionB: "OFF",
        optionC: "Locked",
        correctAnswer: "ON",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The UPS provides power backup when electricity goes off.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The CPU is used to type on the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The desktop appears after the computer is switched ON.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We click the Start button to begin work on the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Icons are large pictures that appear on the keyboard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "It is safe to touch wires with wet hands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Before shutting down, we should save all files.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The monitor shows the desktop on its screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should pull out the plug suddenly to switch off the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Start → Power → Shut down steps help to close the computer safely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
