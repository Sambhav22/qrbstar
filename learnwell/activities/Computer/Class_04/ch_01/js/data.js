export const chapter = "Chapter - 1: History of Computer";
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
        question: "Which generation of computers used microprocessors?",
        optionA: "Second",
        optionB: "Fourth",
        optionC: "Third",
        correctAnswer: "Fourth",
      }),
      shuffleOptions({
        question: "Which generation of computers is based on artificial intelligence?",
        optionA: "Fifth",
        optionB: "Third",
        optionC: "Second",
        correctAnswer: "Fifth",
      }),
      shuffleOptions({
        question: "Which company launched its first home computer in 1981?",
        optionA: "IBM",
        optionB: "Apple",
        optionC: "Microsoft",
        correctAnswer: "IBM",
      }),
      shuffleOptions({
        question: "PARAM 8000 is India’s first ______.",
        optionA: "Personal computer",
        optionB: "Supercomputer",
        optionC: "Laptop",
        correctAnswer: "Supercomputer",
      }),
      shuffleOptions({
        question: "Which generation of computers used integrated circuits?",
        optionA: "Second",
        optionB: "Third",
        optionC: "Fourth",
        correctAnswer: "Third",
      }),
      shuffleOptions({
        question: "Which generation of computers performed operations in picoseconds?",
        optionA: "Fourth",
        optionB: "Third",
        optionC: "Second",
        correctAnswer: "Fourth",
      }),
      shuffleOptions({
        question: "Which generation computers were the first to use transistors?",
        optionA: "Second",
        optionB: "First",
        optionC: "Third",
        correctAnswer: "Second",
      }),
      shuffleOptions({
        question: "Which generation computers are capable of learning and responding to surroundings?",
        optionA: "Fifth",
        optionB: "Third",
        optionC: "Fourth",
        correctAnswer: "Fifth",
      }),
      shuffleOptions({
        question: "Which generation computers were smaller and faster than the first generation?",
        optionA: "Second",
        optionB: "Third",
        optionC: "Fifth",
        correctAnswer: "Second",
      }),
      shuffleOptions({
        question: "Which generation computers led to the development of the Internet?",
        optionA: "Fourth",
        optionB: "Second",
        optionC: "Third",
        correctAnswer: "Fourth",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The first-generation computers performed operations in ______.",
        optionA: "Milliseconds",
        optionB: "Microseconds",
        optionC: "Nanoseconds",
        correctAnswer: "Milliseconds",
      }),
      shuffleOptions({
        question: "The second-generation computers used ______.",
        optionA: "Transistors",
        optionB: "Vacuum tubes",
        optionC: "Chips",
        correctAnswer: "Transistors",
      }),
      shuffleOptions({
        question: "The third-generation computers performed operations in ______.",
        optionA: "Nanoseconds",
        optionB: "Microseconds",
        optionC: "Milliseconds",
        correctAnswer: "Nanoseconds",
      }),
      shuffleOptions({
        question: "The fourth-generation computers used ______.",
        optionA: "Microprocessors",
        optionB: "Integrated circuits",
        optionC: "Transistors",
        correctAnswer: "Microprocessors",
      }),
      shuffleOptions({
        question: "The fifth-generation computers are based on ______.",
        optionA: "Artificial intelligence",
        optionB: "Microprocessors",
        optionC: "Vacuum tubes",
        correctAnswer: "Artificial intelligence",
      }),
      shuffleOptions({
        question: "The integrated circuit was invented by ______.",
        optionA: "Jack Kilby and Robert Noyce",
        optionB: "Alan Turing",
        optionC: "Charles Babbage",
        correctAnswer: "Jack Kilby and Robert Noyce",
      }),
      shuffleOptions({
        question: "IBM System 360 belongs to the ______.",
        optionA: "Third generation",
        optionB: "Fourth generation",
        optionC: "Second generation",
        correctAnswer: "Third generation",
      }),
      shuffleOptions({
        question: "Apple II belongs to the ______.",
        optionA: "Fourth generation",
        optionB: "Fifth generation",
        optionC: "Third generation",
        correctAnswer: "Fourth generation",
      }),
      shuffleOptions({
        question: "Robots and Quantum Computers are examples of ______.",
        optionA: "Fifth generation",
        optionB: "Fourth generation",
        optionC: "Third generation",
        correctAnswer: "Fifth generation",
      }),
      shuffleOptions({
        question: "PARAM 8000 was completed in the year ______.",
        optionA: "1991",
        optionB: "1981",
        optionC: "1971",
        correctAnswer: "1991",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Vacuum tubes were used in the first generation computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Transistors made computers smaller and faster.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Integrated circuits were used in the third generation computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Microprocessors were used in the fourth generation computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fifth generation computers use SLSI chips.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "ENIAC and UNIVAC were first-generation computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "NCR 304 was a second-generation computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "IBM introduced its first home computer in 1981.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "PARAM 8000 was India’s first supercomputer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Apple II belongs to the third generation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
