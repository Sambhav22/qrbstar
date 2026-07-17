export const chapter = "Chapter - 3: Working in Windows 10";
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
        question: "Which screen appears first when you start your computer?",
        optionA: "Desktop",
        optionB: "Wallpaper",
        optionC: "Taskbar",
        correctAnswer: "Desktop",
      }),
      shuffleOptions({
        question: "Which is the first version of the Windows operating system?",
        optionA: "Windows 7",
        optionB: "Windows 95",
        optionC: "Windows 10",
        correctAnswer: "Windows 95",
      }),
      shuffleOptions({
        question: "What are the small pictures seen on the desktop called?",
        optionA: "Folders",
        optionB: "Icons",
        optionC: "Files",
        correctAnswer: "Icons",
      }),
      shuffleOptions({
        question: "Which shortcut keys are used to create a new folder?",
        optionA: "Ctrl + Shift + N",
        optionB: "Ctrl + Alt + N",
        optionC: "Ctrl + N",
        correctAnswer: "Ctrl + Shift + N",
      }),
      shuffleOptions({
        question: "What is the long horizontal bar at the bottom of the desktop called?",
        optionA: "Toolbar",
        optionB: "Taskbar",
        optionC: "Status bar",
        correctAnswer: "Taskbar",
      }),
      shuffleOptions({
        question: "Which option do you select to rename a file or folder?",
        optionA: "Delete",
        optionB: "Rename",
        optionC: "Copy",
        correctAnswer: "Rename",
      }),
      shuffleOptions({
        question: "Which option allows you to move a file from one place to another?",
        optionA: "Copy → Paste",
        optionB: "Cut → Paste",
        optionC: "Copy → Cut",
        correctAnswer: "Cut → Paste",
      }),
      shuffleOptions({
        question: "What is the background image that appears behind the icons called?",
        optionA: "Wallpaper",
        optionB: "Folder",
        optionC: "Picture box",
        correctAnswer: "Wallpaper",
      }),
      shuffleOptions({
        question: "What appears on the screen when the computer remains idle for some time?",
        optionA: "Screen saver",
        optionB: "Screen shot",
        optionC: "Folder view",
        correctAnswer: "Screen saver",
      }),
      shuffleOptions({
        question: "Where does a deleted file go in Windows 10?",
        optionA: "Recycle Bin",
        optionB: "My Computer",
        optionC: "Documents",
        correctAnswer: "Recycle Bin",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Windows 10 is an ________ that helps hardware and software work together.",
        optionA: "application",
        optionB: "operating system",
        optionC: "programme",
        correctAnswer: "operating system",
      }),
      shuffleOptions({
        question: "The first screen that appears after switching on the computer is called ________.",
        optionA: "desktop",
        optionB: "wallpaper",
        optionC: "monitor",
        correctAnswer: "desktop",
      }),
      shuffleOptions({
        question: "The small pictures on the desktop are known as ________.",
        optionA: "icons",
        optionB: "labels",
        optionC: "folders",
        correctAnswer: "icons",
      }),
      shuffleOptions({
        question: "Folders located inside other folders are called ________.",
        optionA: "subfolders",
        optionB: "micro folders",
        optionC: "extra files",
        correctAnswer: "subfolders",
      }),
      shuffleOptions({
        question: "The background image on the desktop is known as ________.",
        optionA: "wallpaper",
        optionB: "taskbar",
        optionC: "photo",
        correctAnswer: "wallpaper",
      }),
      shuffleOptions({
        question: "To rename a file, right-click and choose the ________ option.",
        optionA: "Rename",
        optionB: "Copy",
        optionC: "Delete",
        correctAnswer: "Rename",
      }),
      shuffleOptions({
        question: "Deleted items are sent to the ________.",
        optionA: "Recycle Bin",
        optionB: "My Documents",
        optionC: "Internet",
        correctAnswer: "Recycle Bin",
      }),
      shuffleOptions({
        question: "To open a file, you must ________ its icon.",
        optionA: "double-click",
        optionB: "right-click",
        optionC: "press Esc",
        correctAnswer: "double-click",
      }),
      shuffleOptions({
        question: "The shortcut keys used to create a new folder are ________.",
        optionA: "Ctrl + Shift + N",
        optionB: "Ctrl + Alt + F",
        optionC: "Shift + Enter",
        correctAnswer: "Ctrl + Shift + N",
      }),
      shuffleOptions({
        question: "The feature that beautifies the desktop when the computer is idle is ________.",
        optionA: "screen saver",
        optionB: "recycle bin",
        optionC: "wallpaper",
        correctAnswer: "screen saver",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Windows 10 is a type of hardware.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The desktop appears after you switch on the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Icons are large pictures on the desktop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Folders cannot contain other folders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Copy and Move perform exactly the same function.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Recycle Bin stores deleted files temporarily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The wallpaper is also called the desktop background.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The taskbar is located at the bottom of the screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Screen saver appears when the computer is idle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "You can change the desktop background by using the Personalize option.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
