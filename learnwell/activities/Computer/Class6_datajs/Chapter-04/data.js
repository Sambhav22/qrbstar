export const chapter = "Chapter - 4: Maintaining Windows";
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
        question: "Which Windows utility helps to remove unnecessary files and free up space on a computer?",
        optionA: "Disk Scanner",
        optionB: "Disk Cleanup",
        optionC: "Disk Defragmenter",
        correctAnswer: "Disk Cleanup",
      }),
      shuffleOptions({
        question: "Which folder in Windows is the default location for saving your personal files?",
        optionA: "Downloads",
        optionB: "Documents",
        optionC: "Music",
        correctAnswer: "Documents",
      }),
      shuffleOptions({
        question: "Which key combination is used to open File Explorer quickly?",
        optionA: "Ctrl + E",
        optionB: "Alt + E",
        optionC: "Windows + E",
        correctAnswer: "Windows + E",
      }),
      shuffleOptions({
        question: "Which tool can check and repair errors on the hard disk?",
        optionA: "Disk Cleanup",
        optionB: "Disk Scanner",
        optionC: "Recycle Bin",
        correctAnswer: "Disk Scanner",
      }),
      shuffleOptions({
        question: "Which Windows feature helps to restore the system when it fails to start?",
        optionA: "Recovery Drive",
        optionB: "Disk Defragmenter",
        optionC: "File Explorer",
        correctAnswer: "Recovery Drive",
      }),
      shuffleOptions({
        question: "What is used to rearrange scattered files on the hard disk for better performance?",
        optionA: "Disk Defragmenter",
        optionB: "Disk Cleanup",
        optionC: "Task Manager",
        correctAnswer: "Disk Defragmenter",
      }),
      shuffleOptions({
        question: "Which type of files fill up storage if not deleted regularly?",
        optionA: "Backup Files",
        optionB: "Temporary Files",
        optionC: "System Files",
        correctAnswer: "Temporary Files",
      }),
      shuffleOptions({
        question: "Which process improves the speed of the computer by logically arranging data?",
        optionA: "Disk Defragmentation",
        optionB: "Disk Scanning",
        optionC: "File Deletion",
        correctAnswer: "Disk Defragmentation",
      }),
      shuffleOptions({
        question: "Which Windows tool warns that all data on a USB drive will be deleted before creating a recovery drive?",
        optionA: "Format Tool",
        optionB: "Recovery Drive Wizard",
        optionC: "File Explorer",
        correctAnswer: "Recovery Drive Wizard",
      }),
      shuffleOptions({
        question: "Which maintenance activity keeps files tidy and easy to back up?",
        optionA: "Organising Files",
        optionB: "Deleting Programs",
        optionC: "Changing Wallpaper",
        correctAnswer: "Organising Files",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Disk Scanner is also known as _______.",
        optionA: "Disk Fixer",
        optionB: "ScanDisk",
        optionC: "Disk Manager",
        correctAnswer: "ScanDisk",
      }),
      shuffleOptions({
        question: "A ________ drive helps to troubleshoot and restore the computer.",
        optionA: "Hard",
        optionB: "Recovery",
        optionC: "Backup",
        correctAnswer: "Recovery",
      }),
      shuffleOptions({
        question: "Disk Cleanup frees up ________ on the hard disk.",
        optionA: "Disk Space",
        optionB: "Memory",
        optionC: "Speed",
        correctAnswer: "Disk Space",
      }),
      shuffleOptions({
        question: "Temporary files are stored ________ by Windows.",
        optionA: "Automatically",
        optionB: "Manually",
        optionC: "Randomly",
        correctAnswer: "Automatically",
      }),
      shuffleOptions({
        question: "The Cleanup option is found in the ________ group.",
        optionA: "Manage",
        optionB: "Media",
        optionC: "Tools",
        correctAnswer: "Manage",
      }),
      shuffleOptions({
        question: "________ rearranges files to increase the computer’s speed.",
        optionA: "Disk Defragmenter",
        optionB: "Disk Scanner",
        optionC: "File Explorer",
        correctAnswer: "Disk Defragmenter",
      }),
      shuffleOptions({
        question: "Updating antivirus definitions helps to detect ________ viruses.",
        optionA: "Old",
        optionB: "New",
        optionC: "Deleted",
        correctAnswer: "New",
      }),
      shuffleOptions({
        question: "Files saved in the ________ folder are easier to back up.",
        optionA: "Documents",
        optionB: "Downloads",
        optionC: "Music",
        correctAnswer: "Documents",
      }),
      shuffleOptions({
        question: "Backups should be stored on ________ drives.",
        optionA: "External",
        optionB: "Internal",
        optionC: "Optical",
        correctAnswer: "External",
      }),
      shuffleOptions({
        question: "Disk Cleanup was first introduced with Windows ________.",
        optionA: "95",
        optionB: "98",
        optionC: "XP",
        correctAnswer: "98",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Disk Cleanup was not first introduced with Windows 98.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Disk Scanner can detect and repair hard disk errors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Recovery Drive can help restore the computer after a crash.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Disk Defragmentation helps to improve the computer’s speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "File Explorer icon is not available on the taskbar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Temporary files are not created automatically by the system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Disk Cleanup removes downloaded program files.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Updating antivirus definitions protects the computer from new viruses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Disk Scanner slows down the performance of the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Routine backups protect important data from loss.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
