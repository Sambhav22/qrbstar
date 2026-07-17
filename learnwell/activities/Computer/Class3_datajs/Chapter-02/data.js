export const chapter = "Chapter - 2: Hardware and Software";
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
        question: "Which device is used to record our voice in the computer?",
        optionA: "Microphone",
        optionB: "Speaker",
        optionC: "Keyboard",
        correctAnswer: "Microphone",
      }),
      shuffleOptions({
        question: "Which device looks like a pen and is used on a special pad?",
        optionA: "Light Pen",
        optionB: "Joystick",
        optionC: "Mouse",
        correctAnswer: "Light Pen",
      }),
      shuffleOptions({
        question: "Which storage device is small, portable, and also called a flash drive?",
        optionA: "Pen Drive",
        optionB: "Hard Disk",
        optionC: "CD",
        correctAnswer: "Pen Drive",
      }),
      shuffleOptions({
        question: "The output displayed on the monitor is called a ______.",
        optionA: "Soft copy",
        optionB: "Hard copy",
        optionC: "Digital file",
        correctAnswer: "Soft copy",
      }),
      shuffleOptions({
        question: "Which software controls the overall working of a computer?",
        optionA: "System Software",
        optionB: "Application Software",
        optionC: "Hardware",
        correctAnswer: "System Software",
      }),
      shuffleOptions({
        question: "Which device is used to play games on a computer?",
        optionA: "Joystick",
        optionB: "Light Pen",
        optionC: "Keyboard",
        correctAnswer: "Joystick",
      }),
      shuffleOptions({
        question: "Which device can store up to 700 MB of data?",
        optionA: "CD",
        optionB: "DVD",
        optionC: "Pen Drive",
        correctAnswer: "CD",
      }),
      shuffleOptions({
        question: "Which part of the computer is also called a Visual Display Unit?",
        optionA: "Monitor",
        optionB: "CPU",
        optionC: "Printer",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "Which software helps us to draw pictures and paint on a computer?",
        optionA: "Paint",
        optionB: "Windows",
        optionC: "Linux",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "Alan Turing is known as the ______.",
        optionA: "Father of Modern Computer",
        optionB: "Father of Internet",
        optionC: "Inventor of CPU",
        correctAnswer: "Father of Modern Computer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The physical parts of a computer are called ______.",
        optionA: "Software",
        optionB: "Hardware",
        optionC: "Devices",
        correctAnswer: "Hardware",
      }),
      shuffleOptions({
        question: "A ______ is used to input pictures and text into the computer.",
        optionA: "Printer",
        optionB: "Scanner",
        optionC: "Mouse",
        correctAnswer: "Scanner",
      }),
      shuffleOptions({
        question: "A ______ is used to print output on paper.",
        optionA: "Monitor",
        optionB: "Printer",
        optionC: "Speaker",
        correctAnswer: "Printer",
      }),
      shuffleOptions({
        question: "The main storage device present inside the CPU box is ______.",
        optionA: "Hard Disk",
        optionB: "DVD",
        optionC: "Pen Drive",
        correctAnswer: "Hard Disk",
      }),
      shuffleOptions({
        question: "______ software controls the entire working of a computer.",
        optionA: "System",
        optionB: "Application",
        optionC: "Storage",
        correctAnswer: "System",
      }),
      shuffleOptions({
        question: "The output printed on paper is known as a ______ copy.",
        optionA: "Hard",
        optionB: "Soft",
        optionC: "Visual",
        correctAnswer: "Hard",
      }),
      shuffleOptions({
        question: "A ______ is a pointing device used to move items on the screen.",
        optionA: "Mouse",
        optionB: "Keyboard",
        optionC: "Microphone",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "A ______ is a camera used to capture photographs or videos on a computer.",
        optionA: "Webcam",
        optionB: "Light Pen",
        optionC: "Scanner",
        correctAnswer: "Webcam",
      }),
      shuffleOptions({
        question: "______ software performs specific tasks like drawing or gaming.",
        optionA: "Application",
        optionB: "System",
        optionC: "Hardware",
        correctAnswer: "Application",
      }),
      shuffleOptions({
        question: "The output displayed on a monitor is called a ______ copy.",
        optionA: "Soft",
        optionB: "Hard",
        optionC: "Visual",
        correctAnswer: "Soft",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A mouse is a pointing device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A printer displays soft copy on the screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A DVD can store more data than a CD.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Speakers and headphones are output devices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "System software is used for drawing and playing games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Application software helps to perform specific tasks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A monitor is also called a Visual Display Unit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A pen drive is used to record sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "An operating system is a type of system software.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hardware cannot work without software.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
