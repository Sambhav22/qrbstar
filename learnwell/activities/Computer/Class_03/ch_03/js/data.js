export const chapter = "Chapter - 3: Introduction to Windows";
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
        question: "Who developed the Windows operating system?",
        optionA: "Apple",
        optionB: "Microsoft",
        optionC: "Google",
        correctAnswer: "Microsoft",
      }),
      shuffleOptions({
        question: "What appears on the screen after you start the computer?",
        optionA: "Folder",
        optionB: "Desktop",
        optionC: "File",
        correctAnswer: "Desktop",
      }),
      shuffleOptions({
        question: "Which part of Windows 10 shows the Start button and time?",
        optionA: "Toolbar",
        optionB: "Taskbar",
        optionC: "Menu bar",
        correctAnswer: "Taskbar",
      }),
      shuffleOptions({
        question: "What is Cortana in Windows 10?",
        optionA: "A game",
        optionB: "A voice assistant",
        optionC: "A browser",
        correctAnswer: "A voice assistant",
      }),
      shuffleOptions({
        question: "Which program allows users to browse the internet in Windows 10?",
        optionA: "Paint",
        optionB: "Microsoft Edge",
        optionC: "Notepad",
        correctAnswer: "Microsoft Edge",
      }),
      shuffleOptions({
        question: "What do we call small pictures on the desktop that open programs?",
        optionA: "Icons",
        optionB: "Buttons",
        optionC: "Files",
        correctAnswer: "Icons",
      }),
      shuffleOptions({
        question: "Which part of the taskbar displays ongoing tasks and notifications?",
        optionA: "Notification Area",
        optionB: "Start Menu",
        optionC: "Desktop",
        correctAnswer: "Notification Area",
      }),
      shuffleOptions({
        question: "What helps us switch between desktop and tablet mode?",
        optionA: "Task View",
        optionB: "Tablet Mode",
        optionC: "File Explorer",
        correctAnswer: "Tablet Mode",
      }),
      shuffleOptions({
        question: "What is the function of the Start button?",
        optionA: "To open applications",
        optionB: "To shut down the monitor",
        optionC: "To increase brightness",
        correctAnswer: "To open applications",
      }),
      shuffleOptions({
        question: "What does the booting process do?",
        optionA: "Loads the operating system",
        optionB: "Opens Microsoft Word",
        optionC: "Connects to Wi-Fi",
        correctAnswer: "Loads the operating system",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Windows is an _______ system.",
        optionA: "operating",
        optionB: "digital",
        optionC: "typing",
        correctAnswer: "operating",
      }),
      shuffleOptions({
        question: "The bar at the bottom of the screen is called the _______.",
        optionA: "title bar",
        optionB: "taskbar",
        optionC: "side bar",
        correctAnswer: "taskbar",
      }),
      shuffleOptions({
        question: "The small pictures on the desktop are called _______.",
        optionA: "folders",
        optionB: "icons",
        optionC: "menus",
        correctAnswer: "icons",
      }),
      shuffleOptions({
        question: "The Start button is found at the _______ corner of the screen.",
        optionA: "bottom-left",
        optionB: "top-right",
        optionC: "bottom-right",
        correctAnswer: "bottom-left",
      }),
      shuffleOptions({
        question: "The process of loading the operating system is known as _______.",
        optionA: "installing",
        optionB: "booting",
        optionC: "opening",
        correctAnswer: "booting",
      }),
      shuffleOptions({
        question: "The first version of Windows was released in the year _______.",
        optionA: "1985",
        optionB: "1990",
        optionC: "2005",
        correctAnswer: "1985",
      }),
      shuffleOptions({
        question: "_______ is a voice-activated personal assistant in Windows 10.",
        optionA: "Siri",
        optionB: "Cortana",
        optionC: "Alexa",
        correctAnswer: "Cortana",
      }),
      shuffleOptions({
        question: "The _______ menu displays applications and settings.",
        optionA: "Start",
        optionB: "Insert",
        optionC: "Edit",
        correctAnswer: "Start",
      }),
      shuffleOptions({
        question: "The new web browser introduced in Windows 10 is _______.",
        optionA: "Microsoft Edge",
        optionB: "Google Chrome",
        optionC: "Internet Explorer",
        correctAnswer: "Microsoft Edge",
      }),
      shuffleOptions({
        question: "Icons can be arranged by right-clicking and choosing the _______ option.",
        optionA: "View",
        optionB: "Tools",
        optionC: "Copy",
        correctAnswer: "View",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Windows is developed by Microsoft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Start button is located at the top-left corner of the desktop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The taskbar appears at the bottom of the screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Icons represent files and applications.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Booting means turning off the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cortana cannot answer any questions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Microsoft Edge is a faster and more secure web browser.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tablet Mode helps users switch between tablet and desktop view.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The notification area displays running tasks and system icons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windows 1.0 is the latest version of Windows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
