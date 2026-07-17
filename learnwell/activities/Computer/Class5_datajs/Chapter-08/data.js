export const chapter = "Chapter - 8: Multimedia";
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
        question: "Which device is used to record voice or music on a computer?",
        optionA: "Speaker",
        optionB: "Microphone",
        optionC: "Joystick",
        correctAnswer: "Microphone",
      }),
      shuffleOptions({
        question: "Which application is used to play audio or video CDs or DVDs on a computer?",
        optionA: "Paint",
        optionB: "Windows Media Player",
        optionC: "WordPad",
        correctAnswer: "Windows Media Player",
      }),
      shuffleOptions({
        question: "Which device helps us to hear sound clearly from the computer?",
        optionA: "Monitor",
        optionB: "Speaker",
        optionC: "Mouse",
        correctAnswer: "Speaker",
      }),
      shuffleOptions({
        question: "Which of the following is used to control video games?",
        optionA: "Joystick",
        optionB: "Microphone",
        optionC: "Printer",
        correctAnswer: "Joystick",
      }),
      shuffleOptions({
        question: "The most common format for audio files supported by Windows Media Player is—",
        optionA: "MP3",
        optionB: "AVI",
        optionC: "JPG",
        correctAnswer: "MP3",
      }),
      shuffleOptions({
        question: "What is the use of the CD or DVD drive in a multimedia system?",
        optionA: "To play or run discs",
        optionB: "To connect to Wi-Fi",
        optionC: "To print documents",
        correctAnswer: "To play or run discs",
      }),
      shuffleOptions({
        question: "Multimedia is mainly used in which of the following fields?",
        optionA: "Education",
        optionB: "Agriculture",
        optionC: "Architecture",
        correctAnswer: "Education",
      }),
      shuffleOptions({
        question: "Which component allows the computer to produce sound through speakers?",
        optionA: "Graphics card",
        optionB: "Sound card",
        optionC: "Network card",
        correctAnswer: "Sound card",
      }),
      shuffleOptions({
        question: "Which of the following is an example of an output device used in multimedia?",
        optionA: "Monitor",
        optionB: "Microphone",
        optionC: "Keyboard",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "Who created the first joystick in the United States?",
        optionA: "C. B. Merrick",
        optionB: "Bill Gates",
        optionC: "Charles Babbage",
        correctAnswer: "C. B. Merrick",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A _______ is used to listen to music without disturbing others.",
        optionA: "Speaker",
        optionB: "Headphone",
        optionC: "Joystick",
        correctAnswer: "Headphone",
      }),
      shuffleOptions({
        question: "The _______ card helps in producing sound in a multimedia computer.",
        optionA: "Sound",
        optionB: "Graphics",
        optionC: "Video",
        correctAnswer: "Sound",
      }),
      shuffleOptions({
        question: "The _______ is used to display pictures, animations and videos.",
        optionA: "Monitor",
        optionB: "CPU",
        optionC: "Keyboard",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "A _______ is used to record sound or voice.",
        optionA: "Microphone",
        optionB: "Speaker",
        optionC: "Mouse",
        correctAnswer: "Microphone",
      }),
      shuffleOptions({
        question: "The default multimedia player in Windows is _______.",
        optionA: "Windows Media Player",
        optionB: "VLC Player",
        optionC: "QuickTime",
        correctAnswer: "Windows Media Player",
      }),
      shuffleOptions({
        question: "The most common audio file format is _______.",
        optionA: "MP3",
        optionB: "TXT",
        optionC: "PNG",
        correctAnswer: "MP3",
      }),
      shuffleOptions({
        question: "Multimedia combines text, sound, graphics and _______.",
        optionA: "Video",
        optionB: "Numbers",
        optionC: "Documents",
        correctAnswer: "Video",
      }),
      shuffleOptions({
        question: "The CD/DVD drive is used to _______ CDs or DVDs.",
        optionA: "Play",
        optionB: "Paint",
        optionC: "Design",
        correctAnswer: "Play",
      }),
      shuffleOptions({
        question: "The device used to control games on the computer is a _______.",
        optionA: "Joystick",
        optionB: "Speaker",
        optionC: "Keyboard",
        correctAnswer: "Joystick",
      }),
      shuffleOptions({
        question: "Multimedia is used for creating _______ to promote products.",
        optionA: "Advertisements",
        optionB: "Books",
        optionC: "Forms",
        correctAnswer: "Advertisements",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Multimedia is a combination of text, sound, graphics and video.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Speakers are input devices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Microphone is used to record voice and music.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Headphones are output devices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The first joystick was created by C. B. Merrick.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windows Media Player cannot play video files.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Playing games for long hours can affect our eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The monitor displays multimedia output.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sound card is required for producing sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Multimedia makes learning dull and boring.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
