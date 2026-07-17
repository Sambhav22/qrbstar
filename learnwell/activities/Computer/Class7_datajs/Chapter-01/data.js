export const chapter = "Chapter - 1: Computer Basics";
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
        question: "Which part of the computer is called the brain of the system?",
        optionA: "Memory unit",
        optionB: "CPU",
        optionC: "Monitor",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "Which device allows the user to play games on a computer?",
        optionA: "Mouse",
        optionB: "Joystick",
        optionC: "Keyboard",
        correctAnswer: "Joystick",
      }),
      shuffleOptions({
        question: "Which printer sprays tiny droplets of ink directly on the paper?",
        optionA: "Laser printer",
        optionB: "Inkjet printer",
        optionC: "Drum printer",
        correctAnswer: "Inkjet printer",
      }),
      shuffleOptions({
        question: "Which device reads special characters printed on cheques?",
        optionA: "OMR",
        optionB: "MICR",
        optionC: "OCR",
        correctAnswer: "MICR",
      }),
      shuffleOptions({
        question: "Which unit is responsible for controlling and coordinating all operations?",
        optionA: "Arithmetic Logic Unit",
        optionB: "Control Unit",
        optionC: "Memory Unit",
        correctAnswer: "Control Unit",
      }),
      shuffleOptions({
        question: "Which device helps to identify items through printed vertical bars?",
        optionA: "Barcode Reader",
        optionB: "Card Reader",
        optionC: "Plotter",
        correctAnswer: "Barcode Reader",
      }),
      shuffleOptions({
        question: "Which software type manages computer hardware and other software resources?",
        optionA: "Application software",
        optionB: "System software",
        optionC: "Utility software",
        correctAnswer: "System software",
      }),
      shuffleOptions({
        question: "Which printer uses a laser beam to write information on a drum?",
        optionA: "Inkjet printer",
        optionB: "Laser printer",
        optionC: "Daisy-wheel printer",
        correctAnswer: "Laser printer",
      }),
      shuffleOptions({
        question: "Which device produces large-sized, high-quality drawings and maps?",
        optionA: "Plotter",
        optionB: "Printer",
        optionC: "Scanner",
        correctAnswer: "Plotter",
      }),
      shuffleOptions({
        question: "Which device projects the computer output on a big screen?",
        optionA: "LCD Projector",
        optionB: "VDU",
        optionC: "Drum Plotter",
        correctAnswer: "LCD Projector",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The computer works on the principle of the ______ cycle.",
        optionA: "KPO",
        optionB: "IPO",
        optionC: "BPO",
        correctAnswer: "IPO",
      }),
      shuffleOptions({
        question: "A ______ is used to check answer sheets with objective-type questions.",
        optionA: "OMR",
        optionB: "MICR",
        optionC: "OCR",
        correctAnswer: "OMR",
      }),
      shuffleOptions({
        question: "A ______ card contains a small chip that stores a large amount of information.",
        optionA: "Smart",
        optionB: "Magnetic stripe",
        optionC: "ID",
        correctAnswer: "Smart",
      }),
      shuffleOptions({
        question: "The main memory of a computer consists of ______ and ______.",
        optionA: "RAM and ROM",
        optionB: "CD and DVD",
        optionC: "CU and ALU",
        correctAnswer: "RAM and ROM",
      }),
      shuffleOptions({
        question: "The ______ is also known as the Visual Display Unit.",
        optionA: "Printer",
        optionB: "Monitor",
        optionC: "Scanner",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "______ printers use an electro-mechanical mechanism to strike against an ink ribbon.",
        optionA: "Impact",
        optionB: "Non-impact",
        optionC: "Laser",
        correctAnswer: "Impact",
      }),
      shuffleOptions({
        question: "The Control Unit sends ______ signals to other components of the computer.",
        optionA: "Command",
        optionB: "Display",
        optionC: "Output",
        correctAnswer: "Command",
      }),
      shuffleOptions({
        question: "The stripes on magnetic stripe cards can contain up to ______ characters.",
        optionA: "20",
        optionB: "60",
        optionC: "100",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "A group of instructions that tells the computer what to do is called ______.",
        optionA: "Hardware",
        optionB: "Software",
        optionC: "Firmware",
        correctAnswer: "Software",
      }),
      shuffleOptions({
        question: "The Operating System acts as a link between the user and the ______.",
        optionA: "Hardware",
        optionB: "Printer",
        optionC: "Network",
        correctAnswer: "Hardware",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "OCR converts a scanned image of text into editable characters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "RAM is known as permanent or non-volatile memory.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dot Matrix Printer is a type of impact printer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Smart cards are used in departmental stores and petrol pumps.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Utility software performs disk-formatting and backup tasks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Plotter is used for printing simple text documents only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The CPU controls the working of the entire computer system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Magnetic stripe cards can be re-written easily once data is stored.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Monitor is an input device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "System software increases the efficiency of computer hardware.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
