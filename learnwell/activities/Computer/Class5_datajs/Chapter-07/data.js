export const chapter = "Chapter - 7: Algorithm and Flowchart";
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
        question: "Which box is used for showing a process or action in a flowchart?",
        optionA: "Rectangle",
        optionB: "Circle",
        optionC: "Diamond",
        correctAnswer: "Rectangle",
      }),
      shuffleOptions({
        question: "Which step always comes first in an algorithm?",
        optionA: "Start",
        optionB: "Stop",
        optionC: "Read data",
        correctAnswer: "Start",
      }),
      shuffleOptions({
        question: "Which shape is used for decision-making in a flowchart?",
        optionA: "Diamond",
        optionB: "Oval",
        optionC: "Square",
        correctAnswer: "Diamond",
      }),
      shuffleOptions({
        question: "Which symbol is known as the terminator box?",
        optionA: "Oval",
        optionB: "Rectangle",
        optionC: "Parallelogram",
        correctAnswer: "Oval",
      }),
      shuffleOptions({
        question: "Flowcharts are an important aid in the development of a(n) ______.",
        optionA: "Algorithm",
        optionB: "Hardware",
        optionC: "Database",
        correctAnswer: "Algorithm",
      }),
      shuffleOptions({
        question: "Which box is used to show input and output operations?",
        optionA: "Parallelogram",
        optionB: "Square",
        optionC: "Circle",
        correctAnswer: "Parallelogram",
      }),
      shuffleOptions({
        question: "Which direction does a flowchart generally move in?",
        optionA: "Top to bottom",
        optionB: "Random",
        optionC: "Diagonal",
        correctAnswer: "Top to bottom",
      }),
      shuffleOptions({
        question: "Flow lines in a flowchart are used to show the ______ of steps.",
        optionA: "Direction",
        optionB: "Number",
        optionC: "Colour",
        correctAnswer: "Direction",
      }),
      shuffleOptions({
        question: "Which of these is not a flowchart symbol?",
        optionA: "Triangle",
        optionB: "Diamond",
        optionC: "Oval",
        correctAnswer: "Triangle",
      }),
      shuffleOptions({
        question: "Which word is always used to end an algorithm?",
        optionA: "Stop",
        optionB: "Go",
        optionC: "End Program",
        correctAnswer: "Stop",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "An algorithm has a well-defined ______ and output.",
        optionA: "Input",
        optionB: "Step",
        optionC: "Symbol",
        correctAnswer: "Input",
      }),
      shuffleOptions({
        question: "A flowchart is a ______ representation of an algorithm.",
        optionA: "Graphical",
        optionB: "Written",
        optionC: "Textual",
        correctAnswer: "Graphical",
      }),
      shuffleOptions({
        question: "The ______ symbol is used at the beginning and end of a flowchart.",
        optionA: "Oval",
        optionB: "Diamond",
        optionC: "Rectangle",
        correctAnswer: "Oval",
      }),
      shuffleOptions({
        question: "The rectangle symbol is used for ______.",
        optionA: "Processing",
        optionB: "Input",
        optionC: "Decision",
        correctAnswer: "Processing",
      }),
      shuffleOptions({
        question: "Flowcharts should always have a logical ______ and finish.",
        optionA: "Start",
        optionB: "Process",
        optionC: "Output",
        correctAnswer: "Start",
      }),
      shuffleOptions({
        question: "The decision box is drawn in a ______ shape.",
        optionA: "Diamond",
        optionB: "Circle",
        optionC: "Triangle",
        correctAnswer: "Diamond",
      }),
      shuffleOptions({
        question: "The input/output box is in the shape of a ______.",
        optionA: "Parallelogram",
        optionB: "Oval",
        optionC: "Rectangle",
        correctAnswer: "Parallelogram",
      }),
      shuffleOptions({
        question: "Algorithms are written in very ______ language.",
        optionA: "Simple",
        optionB: "Complex",
        optionC: "Technical",
        correctAnswer: "Simple",
      }),
      shuffleOptions({
        question: "The lines and arrows in a flowchart show the ______ of instructions.",
        optionA: "Sequence",
        optionB: "Colour",
        optionC: "Type",
        correctAnswer: "Sequence",
      }),
      shuffleOptions({
        question: "Flowcharts make it easy to ______ a program.",
        optionA: "Understand",
        optionB: "Erase",
        optionC: "Copy",
        correctAnswer: "Understand",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Algorithms are dependent on computer language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Flowcharts use different geometric symbols for different operations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The diamond symbol is used for decision-making.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Flow lines should cross each other frequently in a flowchart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The oval shape represents the start or end of a flowchart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A rectangle is used for showing a process or calculation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A flowchart can begin from any random point.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Connectors are used to make long flowcharts neat and clear.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Flowcharts are independent of any programming language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every algorithm must start with “Start” and end with “Stop.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
