export const chapter = "Chapter - 2: Parts of Computer";
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
        question: "Which part helps us to hear songs and rhymes?",
        optionA: "Mouse",
        optionB: "Speaker",
        optionC: "Keyboard",
        correctAnswer: "Speaker",
      }),
      shuffleOptions({
        question: "Which part helps us to type letters and numbers?",
        optionA: "Keyboard",
        optionB: "Joystick",
        optionC: "UPS",
        correctAnswer: "Keyboard",
      }),
      shuffleOptions({
        question: "Which part helps us to play games on the computer?",
        optionA: "Printer",
        optionB: "Joystick",
        optionC: "Monitor",
        correctAnswer: "Joystick",
      }),
      shuffleOptions({
        question: "Which part shows our work on the computer?",
        optionA: "Monitor",
        optionB: "CPU",
        optionC: "Speaker",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "Which part keeps the computer on during a power cut?",
        optionA: "UPS",
        optionB: "Speaker",
        optionC: "Mouse",
        correctAnswer: "UPS",
      }),
      shuffleOptions({
        question: "Which part helps to point and click on the computer screen?",
        optionA: "Mouse",
        optionB: "Keyboard",
        optionC: "Printer",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "Which part prints the work done on a computer?",
        optionA: "CPU",
        optionB: "Printer",
        optionC: "Joystick",
        correctAnswer: "Printer",
      }),
      shuffleOptions({
        question: "Which part looks like a television screen?",
        optionA: "CPU",
        optionB: "Monitor",
        optionC: "Speaker",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "Which part controls and manages all the work of the computer?",
        optionA: "UPS",
        optionB: "Mouse",
        optionC: "CPU",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "Which part helps us to listen to sound?",
        optionA: "Speaker",
        optionB: "Joystick",
        optionC: "Keyboard",
        correctAnswer: "Speaker",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ________ helps to point and click on the computer screen.",
        optionA: "Keyboard",
        optionB: "Mouse",
        optionC: "Printer",
        correctAnswer: "Mouse",
      }),
      shuffleOptions({
        question: "The ________ helps us to play games.",
        optionA: "Speaker",
        optionB: "CPU",
        optionC: "Joystick",
        correctAnswer: "Joystick",
      }),
      shuffleOptions({
        question: "A ________ is used to type letters and numbers.",
        optionA: "Keyboard",
        optionB: "Monitor",
        optionC: "UPS",
        correctAnswer: "Keyboard",
      }),
      shuffleOptions({
        question: "The ________ shows pictures and words on the screen.",
        optionA: "Monitor",
        optionB: "Speaker",
        optionC: "CPU",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "The ________ works as a battery for the computer.",
        optionA: "UPS",
        optionB: "Printer",
        optionC: "Joystick",
        correctAnswer: "UPS",
      }),
      shuffleOptions({
        question: "The ________ helps us to listen to music.",
        optionA: "Speaker",
        optionB: "Keyboard",
        optionC: "CPU",
        correctAnswer: "Speaker",
      }),
      shuffleOptions({
        question: "The ________ is the brain of the computer.",
        optionA: "Monitor",
        optionB: "CPU",
        optionC: "UPS",
        correctAnswer: "CPU",
      }),
      shuffleOptions({
        question: "A ________ is used to take printouts.",
        optionA: "Printer",
        optionB: "Mouse",
        optionC: "Keyboard",
        correctAnswer: "Printer",
      }),
      shuffleOptions({
        question: "The ________ looks like a television screen.",
        optionA: "Monitor",
        optionB: "CPU",
        optionC: "Joystick",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "The ________ helps the computer stay on when the light goes off.",
        optionA: "UPS",
        optionB: "Speaker",
        optionC: "Mouse",
        correctAnswer: "UPS",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A monitor shows what we do on a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A keyboard is used to listen to songs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A joystick helps to play games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A UPS keeps the computer running during a power cut.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "CPU is called the brain of a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A mouse has two or three buttons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Speakers help us to take printouts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A printer is used to print our work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "UPS is used to type letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A keyboard has many keys.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
