export const chapter = "Chapter - 2: Computer Memory";
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
        question: "Which type of memory is called the working memory of the computer?",
        optionA: "ROM",
        optionB: "RAM",
        optionC: "Flash Drive",
        correctAnswer: "RAM",
      }),
      shuffleOptions({
        question: "Which device uses laser technology to read or write data?",
        optionA: "DVD",
        optionB: "Pen Drive",
        optionC: "Floppy Disk",
        correctAnswer: "DVD",
      }),
      shuffleOptions({
        question: "Which memory is known as the fastest among all?",
        optionA: "Cache Memory",
        optionB: "Secondary Memory",
        optionC: "ROM",
        correctAnswer: "Cache Memory",
      }),
      shuffleOptions({
        question: "What is the full form of ROM?",
        optionA: "Read On Memory",
        optionB: "Read Only Memory",
        optionC: "Random Output Memory",
        correctAnswer: "Read Only Memory",
      }),
      shuffleOptions({
        question: "Which storage device is flexible and enclosed in a square plastic case?",
        optionA: "Floppy Disk",
        optionB: "CD",
        optionC: "Blu-ray Disc",
        correctAnswer: "Floppy Disk",
      }),
      shuffleOptions({
        question: "Which unit of memory is larger than a Gigabyte?",
        optionA: "Kilobyte",
        optionB: "Megabyte",
        optionC: "Terabyte",
        correctAnswer: "Terabyte",
      }),
      shuffleOptions({
        question: "Which memory type stores the operating system?",
        optionA: "Secondary Memory",
        optionB: "Primary Memory",
        optionC: "Cache Memory",
        correctAnswer: "Primary Memory",
      }),
      shuffleOptions({
        question: "Which optical disc can store high-quality movie data?",
        optionA: "CD",
        optionB: "DVD",
        optionC: "Blu-ray Disc",
        correctAnswer: "Blu-ray Disc",
      }),
      shuffleOptions({
        question: "Which of these is an example of electronic secondary storage?",
        optionA: "Flash Drive",
        optionB: "Floppy Disk",
        optionC: "Hard Paper",
        correctAnswer: "Flash Drive",
      }),
      shuffleOptions({
        question: "Which memory connects CPU and main memory for faster processing?",
        optionA: "ROM",
        optionB: "Cache Memory",
        optionC: "RAM",
        correctAnswer: "Cache Memory",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Computer stores information in the form of ______.",
        optionA: "0 and 1",
        optionB: "letters",
        optionC: "images",
        correctAnswer: "0 and 1",
      }),
      shuffleOptions({
        question: "______ is also called the internal memory of the computer.",
        optionA: "Primary Memory",
        optionB: "Secondary Memory",
        optionC: "Cache Memory",
        correctAnswer: "Primary Memory",
      }),
      shuffleOptions({
        question: "A group of eight bits is called a ______.",
        optionA: "Nibble",
        optionB: "Byte",
        optionC: "Word",
        correctAnswer: "Byte",
      }),
      shuffleOptions({
        question: "______ holds only those data and instructions on which the computer is working.",
        optionA: "RAM",
        optionB: "ROM",
        optionC: "DVD",
        correctAnswer: "RAM",
      }),
      shuffleOptions({
        question: "______ is an optical storage device that reads faster than a CD.",
        optionA: "DVD",
        optionB: "Blu-ray Disc",
        optionC: "Flash Drive",
        correctAnswer: "DVD",
      }),
      shuffleOptions({
        question: "______ is a high-speed semiconductor memory.",
        optionA: "Cache Memory",
        optionB: "Floppy Disk",
        optionC: "ROM",
        correctAnswer: "Cache Memory",
      }),
      shuffleOptions({
        question: "A Blu-ray Disc can store data ranging from ______.",
        optionA: "25 GB to 200 GB",
        optionB: "700 MB to 1 GB",
        optionC: "8 GB to 20 GB",
        correctAnswer: "25 GB to 200 GB",
      }),
      shuffleOptions({
        question: "______ is a removable magnetic disk used for data transfer.",
        optionA: "Floppy Disk",
        optionB: "Pen Drive",
        optionC: "CD",
        correctAnswer: "Floppy Disk",
      }),
      shuffleOptions({
        question: "______ memory is lost when power is switched off.",
        optionA: "RAM",
        optionB: "ROM",
        optionC: "Secondary",
        correctAnswer: "RAM",
      }),
      shuffleOptions({
        question: "______ is a portable electronic device used to store data permanently.",
        optionA: "Flash Drive",
        optionB: "DVD",
        optionC: "Cache",
        correctAnswer: "Flash Drive",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "RAM is a non-volatile memory.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "ROM retains data even after the computer is turned off.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Secondary memory is also known as auxiliary memory.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cache memory is slower than secondary memory.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A CD can store up to 700 MB of data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A Blu-ray Disc uses laser light to read and write data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Flash Drive is an optical storage device.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 Byte = 8 Bits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computer memory is classified into two types only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cache memory acts as a buffer between CPU and main memory.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
