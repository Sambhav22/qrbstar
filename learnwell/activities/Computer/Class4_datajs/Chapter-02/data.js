export const chapter = "Chapter - 2: Storage in Computer";
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
        question: "Which part of a computer is known as its brain?",
        optionA: "Keyboard",
        optionB: "CPU",
        optionC: "Mouse",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "Which memory temporarily holds data while the computer is working?",
        optionA: "ROM",
        optionB: "RAM",
        optionC: "CD",
        correctAnswer: "RAM",
      }),
      shuffleOptions({
        question: "Which device is built inside the CPU to store data permanently?",
        optionA: "Hard disk",
        optionB: "Pen drive",
        optionC: "Memory card",
        correctAnswer: "Hard disk",
      }),
      shuffleOptions({
        question: "Which storage device uses laser light to read and write data?",
        optionA: "DVD",
        optionB: "Floppy disk",
        optionC: "ROM",
        correctAnswer: "DVD",
      }),
      shuffleOptions({
        question: "Which of these devices can be easily carried to transfer files?",
        optionA: "Pen drive",
        optionB: "Hard disk",
        optionC: "CPU",
        correctAnswer: "Pen drive",
      }),
      shuffleOptions({
        question: "What does RAM stand for?",
        optionA: "Random Access Memory",
        optionB: "Read Access Memory",
        optionC: "Real Active Memory",
        correctAnswer: "Random Access Memory",
      }),
      shuffleOptions({
        question: "What kind of memory is ROM?",
        optionA: "Temporary",
        optionB: "Non-volatile",
        optionC: "Volatile",
        correctAnswer: "Non-volatile",
      }),
      shuffleOptions({
        question: "Which optical device can store high-quality video and sound?",
        optionA: "DVD",
        optionB: "CD",
        optionC: "Blu-ray",
        correctAnswer: "DVD",
      }),
      shuffleOptions({
        question: "Which device has replaced the floppy disk?",
        optionA: "Pen drive",
        optionB: "Hard disk",
        optionC: "ROM",
        correctAnswer: "Pen drive",
      }),
      shuffleOptions({
        question: "Which company invented the hard disk?",
        optionA: "IBM",
        optionB: "Apple",
        optionC: "Microsoft",
        correctAnswer: "IBM",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The CPU is the ______ of a computer.",
        optionA: "brain",
        optionB: "heart",
        optionC: "memory",
        correctAnswer: "brain",
      }),
      shuffleOptions({
        question: "The process of saving data permanently is called ______.",
        optionA: "storage",
        optionB: "output",
        optionC: "input",
        correctAnswer: "storage",
      }),
      shuffleOptions({
        question: "RAM is made of ______ semiconductor.",
        optionA: "metal oxide",
        optionB: "silicon oxide",
        optionC: "iron",
        correctAnswer: "metal oxide",
      }),
      shuffleOptions({
        question: "ROM is a ______ memory.",
        optionA: "volatile",
        optionB: "non-volatile",
        optionC: "temporary",
        correctAnswer: "non-volatile",
      }),
      shuffleOptions({
        question: "A hard disk is fixed inside the ______ unit.",
        optionA: "CPU",
        optionB: "monitor",
        optionC: "keyboard",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "CD stands for ______.",
        optionA: "Compact Disc",
        optionB: "Computer Disk",
        optionC: "Circular Drive",
        correctAnswer: "Compact Disc",
      }),
      shuffleOptions({
        question: "DVD stands for ______.",
        optionA: "Digital Versatile Disc",
        optionB: "Data Video Disc",
        optionC: "Dynamic View Disc",
        correctAnswer: "Digital Versatile Disc",
      }),
      shuffleOptions({
        question: "A pen drive is also called a ______ drive.",
        optionA: "USB",
        optionB: "floppy",
        optionC: "laser",
        correctAnswer: "USB",
      }),
      shuffleOptions({
        question: "A ______ card is used in cameras and mobiles to store data.",
        optionA: "memory",
        optionB: "sound",
        optionC: "network",
        correctAnswer: "memory",
      }),
      shuffleOptions({
        question: "Blu-ray disc can store up to ______ GB of data.",
        optionA: "25",
        optionB: "5",
        optionC: "10",
        correctAnswer: "25",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "RAM is a type of primary memory.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "ROM stores data even when power is switched off.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hard disk is a portable storage device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pen drive is also called a USB drive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "DVD looks similar to a CD but stores more data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "ROM is a volatile memory.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "CPU is the control centre of a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Memory card is fixed inside the CPU.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Floppy disk is the smallest form of secondary storage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hard disk was invented by IBM.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
