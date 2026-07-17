export const chapter = "Chapter - 3: More on Windows";
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
        question: "Who developed and marketed the Windows operating system?",
        optionA: "IBM",
        optionB: "Apple",
        optionC: "Microsoft Corporation",
        correctAnswer: "Microsoft Corporation",
      }),
      shuffleOptions({
        question: "Which version of Windows was the first to introduce a graphical user interface (GUI)?",
        optionA: "Windows 1.0",
        optionB: "Windows NT",
        optionC: "Windows XP",
        correctAnswer: "Windows 1.0",
      }),
      shuffleOptions({
        question: "Which version of Windows introduced the feature of automatic updates over the Internet?",
        optionA: "Windows 2000",
        optionB: "Windows 8",
        optionC: "Windows Vista",
        correctAnswer: "Windows 2000",
      }),
      shuffleOptions({
        question: "Which version of Windows was released on July 29, 2015?",
        optionA: "Windows 7",
        optionB: "Windows 10",
        optionC: "Windows 8.1",
        correctAnswer: "Windows 10",
      }),
      shuffleOptions({
        question: "Which Windows version reintroduced the Start Menu after it was removed earlier?",
        optionA: "Windows 8",
        optionB: "Windows 10",
        optionC: "Windows Vista",
        correctAnswer: "Windows 10",
      }),
      shuffleOptions({
        question: "Which digital assistant was introduced in Windows 10?",
        optionA: "Cortana",
        optionB: "Alexa",
        optionC: "Siri",
        correctAnswer: "Cortana",
      }),
      shuffleOptions({
        question: "Which browser replaced Internet Explorer in Windows 10?",
        optionA: "Microsoft Edge",
        optionB: "Firefox",
        optionC: "Opera",
        correctAnswer: "Microsoft Edge",
      }),
      shuffleOptions({
        question: "Which Windows version introduced multi-touch support?",
        optionA: "Windows 7",
        optionB: "Windows XP",
        optionC: "Windows NT",
        correctAnswer: "Windows 7",
      }),
      shuffleOptions({
        question: "What is the use of Windows Media Player?",
        optionA: "To type text",
        optionB: "To play audio and video files",
        optionC: "To perform calculations",
        correctAnswer: "To play audio and video files",
      }),
      shuffleOptions({
        question: "Which Windows utility allows you to record and play sound using a microphone?",
        optionA: "WordPad",
        optionB: "Sound Recorder",
        optionC: "Calculator",
        correctAnswer: "Sound Recorder",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Windows was developed and marketed by ______.",
        optionA: "IBM",
        optionB: "Apple",
        optionC: "Microsoft Corporation",
        correctAnswer: "Microsoft Corporation",
      }),
      shuffleOptions({
        question: "The first version of Windows, released in 1985, was ______.",
        optionA: "Windows 1.0",
        optionB: "Windows 2.0",
        optionC: "Windows 3.0",
        correctAnswer: "Windows 1.0",
      }),
      shuffleOptions({
        question: "Windows XP stands for ______.",
        optionA: "Experience",
        optionB: "Explorer",
        optionC: "Extension",
        correctAnswer: "Experience",
      }),
      shuffleOptions({
        question: "Windows NT was released in the year ______.",
        optionA: "1993",
        optionB: "1998",
        optionC: "2000",
        correctAnswer: "1993",
      }),
      shuffleOptions({
        question: "Windows 8 was designed to be used on ______.",
        optionA: "Tablets",
        optionB: "PCs",
        optionC: "Both Tablets and PCs",
        correctAnswer: "Both Tablets and PCs",
      }),
      shuffleOptions({
        question: "The new web browser in Windows 10 is ______.",
        optionA: "Microsoft Edge",
        optionB: "Safari",
        optionC: "Chrome",
        correctAnswer: "Microsoft Edge",
      }),
      shuffleOptions({
        question: "______ is the digital assistant introduced in Windows 10.",
        optionA: "Cortana",
        optionB: "Clippy",
        optionC: "Alexa",
        correctAnswer: "Cortana",
      }),
      shuffleOptions({
        question: "______ is a basic text editor used to create simple documents.",
        optionA: "Notepad",
        optionB: "WordPad",
        optionC: "Paint",
        correctAnswer: "Notepad",
      }),
      shuffleOptions({
        question: "Two windows can be displayed side by side by selecting the option ______.",
        optionA: "Maximise windows",
        optionB: "Cascade windows",
        optionC: "Show windows side by side",
        correctAnswer: "Show windows side by side",
      }),
      shuffleOptions({
        question: "______ is a control feature in Windows that lets you change computer settings.",
        optionA: "Control Panel",
        optionB: "My Documents",
        optionC: "Recycle Bin",
        correctAnswer: "Control Panel",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Windows 10 was released in 2015.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windows 8 removed the Start Menu completely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "WordPad is simpler than Notepad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Calculator is used for typing text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Windows Media Player is used to play and organise digital media files.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cortana in Windows 10 acts as a digital assistant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windows NT was released before Windows 95.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windows 2000 was the first to introduce automatic updates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windows 8.1 allowed slideshow lock screens and camera use from the lock screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Control Panel in Windows is used for playing audio and video files.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
