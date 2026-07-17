export const chapter = "Chapter - 4: Windows Accessories";
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
        question: "Which Windows accessory is used to record and play sounds?",
        optionA: "Paint",
        optionB: "Sound Recorder",
        optionC: "Notepad",
        correctAnswer: "Sound Recorder",
      }),
      shuffleOptions({
        question: "Which program allows us to insert pictures in a document?",
        optionA: "Notepad",
        optionB: "Paint",
        optionC: "WordPad",
        correctAnswer: "WordPad",
      }),
      shuffleOptions({
        question: "Which Windows accessory helps you to draw and colour pictures?",
        optionA: "Paint",
        optionB: "Sound Recorder",
        optionC: "Notepad",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "Which Windows version provides many inbuilt accessories?",
        optionA: "Windows 7",
        optionB: "Windows 10",
        optionC: "Windows 8",
        correctAnswer: "Windows 10",
      }),
      shuffleOptions({
        question: "Which program lets you play songs and view visual effects?",
        optionA: "Paint",
        optionB: "Windows Media Player",
        optionC: "Notepad",
        correctAnswer: "Windows Media Player",
      }),
      shuffleOptions({
        question: "Which accessory can flip, crop, or resize drawings?",
        optionA: "WordPad",
        optionB: "Paint",
        optionC: "Sound Recorder",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "Which accessory was called ‘Write’ in earlier versions of Windows?",
        optionA: "Notepad",
        optionB: "WordPad",
        optionC: "Paint",
        correctAnswer: "WordPad",
      }),
      shuffleOptions({
        question: "In which accessory can you format the text and make it bold or italic?",
        optionA: "WordPad",
        optionB: "Paint",
        optionC: "Notepad",
        correctAnswer: "WordPad",
      }),
      shuffleOptions({
        question: "Sound Recorder saves recorded audio files as ______.",
        optionA: ".txt",
        optionB: ".wma",
        optionC: ".docx",
        correctAnswer: ".wma",
      }),
      shuffleOptions({
        question: "To open any Windows accessory, which button should you click first?",
        optionA: "Start",
        optionB: "Close",
        optionC: "Refresh",
        correctAnswer: "Start",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "________ is used to create and edit simple text files.",
        optionA: "Paint",
        optionB: "Notepad",
        optionC: "WordPad",
        correctAnswer: "Notepad",
      }),
      shuffleOptions({
        question: "________ can be used to draw and colour pictures.",
        optionA: "WordPad",
        optionB: "Sound Recorder",
        optionC: "Paint",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "________ is a simple word processor that allows adding graphics.",
        optionA: "WordPad",
        optionB: "Notepad",
        optionC: "Paint",
        correctAnswer: "WordPad",
      }),
      shuffleOptions({
        question: "________ is used to listen to music and adjust the volume.",
        optionA: "Sound Recorder",
        optionB: "Windows Media Player",
        optionC: "Paint",
        correctAnswer: "Windows Media Player",
      }),
      shuffleOptions({
        question: "________ records sound that can be played later.",
        optionA: "Sound Recorder",
        optionB: "WordPad",
        optionC: "Notepad",
        correctAnswer: "Sound Recorder",
      }),
      shuffleOptions({
        question: "________ was known as ‘Write’ in older Windows versions.",
        optionA: "WordPad",
        optionB: "Paint",
        optionC: "Notepad",
        correctAnswer: "WordPad",
      }),
      shuffleOptions({
        question: "________ allows you to make text bold and italic.",
        optionA: "WordPad",
        optionB: "Paint",
        optionC: "Sound Recorder",
        correctAnswer: "WordPad",
      }),
      shuffleOptions({
        question: "________ can crop and resize images easily.",
        optionA: "Paint",
        optionB: "Notepad",
        optionC: "WordPad",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "________ files created in Notepad are saved with the .txt extension.",
        optionA: ".txt",
        optionB: ".wma",
        optionC: ".jpg",
        correctAnswer: ".txt",
      }),
      shuffleOptions({
        question: "To access Windows Accessories, click the ________ button.",
        optionA: "Start",
        optionB: "Close",
        optionC: "Pause",
        correctAnswer: "Start",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Notepad can change the colour and size of text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Paint is used to make and colour drawings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "WordPad can insert graphics and pictures in a file.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sound Recorder saves files in the .wma format.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windows Media Player can be used to record sounds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Paint allows us to flip and resize pictures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "WordPad was earlier known as ‘Write’.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Notepad is a basic text editor included in Windows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windows 10 includes many built-in accessories.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sound Recorder is used for typing letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
