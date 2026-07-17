export const chapter = "Chapter - 8: Introducing Visual Basic";
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
        question: "Who developed the Visual Basic programming language?",
        optionA: "IBM",
        optionB: "Microsoft",
        optionC: "Oracle",
        correctAnswer: "Microsoft",
      }),
      shuffleOptions({
        question: "Which mode is used to check and correct errors in a VB program?",
        optionA: "Run Mode",
        optionB: "Break Mode",
        optionC: "Design Mode",
        correctAnswer: "Break Mode",
      }),
      shuffleOptions({
        question: "Which tool is used to insert graphics into a Visual Basic form?",
        optionA: "Picture Box",
        optionB: "Combo Box",
        optionC: "Group Box",
        correctAnswer: "Picture Box",
      }),
      shuffleOptions({
        question: "Which window displays the list of all included files in a project?",
        optionA: "Code Window",
        optionB: "Solution Explorer",
        optionC: "Properties Window",
        correctAnswer: "Solution Explorer",
      }),
      shuffleOptions({
        question: "Which tool allows a user to type input data?",
        optionA: "Label",
        optionB: "Text Box",
        optionC: "Command Button",
        correctAnswer: "Text Box",
      }),
      shuffleOptions({
        question: "Which programming pattern is followed by Visual Basic?",
        optionA: "Sequential",
        optionB: "Event-driven",
        optionC: "Procedural",
        correctAnswer: "Event-driven",
      }),
      shuffleOptions({
        question: "What is the default name of the form in a new VB project?",
        optionA: "Form1",
        optionB: "MainForm",
        optionC: "Project1",
        correctAnswer: "Form1",
      }),
      shuffleOptions({
        question: "Which tool is used to group various controls together?",
        optionA: "Picture Box",
        optionB: "Group Box",
        optionC: "Check Box",
        correctAnswer: "Group Box",
      }),
      shuffleOptions({
        question: "What is the function of the Command Button?",
        optionA: "To insert images",
        optionB: "To perform actions when clicked",
        optionC: "To display text only",
        correctAnswer: "To perform actions when clicked",
      }),
      shuffleOptions({
        question: "Which year was the first version of Visual Basic released for Windows?",
        optionA: "1990",
        optionB: "1991",
        optionC: "1992",
        correctAnswer: "1991",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Visual Basic is based on an ________.",
        optionA: "Operating System",
        optionB: "Integrated Development Environment (IDE)",
        optionC: "Internet Development Engine",
        correctAnswer: "Integrated Development Environment (IDE)",
      }),
      shuffleOptions({
        question: "The term GUI stands for ________.",
        optionA: "Graphical User Interface",
        optionB: "General Utility Interface",
        optionC: "General User Input",
        correctAnswer: "Graphical User Interface",
      }),
      shuffleOptions({
        question: "The ________ window is used to view and edit the properties of an object.",
        optionA: "Properties",
        optionB: "Code",
        optionC: "Project",
        correctAnswer: "Properties",
      }),
      shuffleOptions({
        question: "The main screen on which objects are placed in VB is called ________.",
        optionA: "Form Window",
        optionB: "Code Window",
        optionC: "Command Window",
        correctAnswer: "Form Window",
      }),
      shuffleOptions({
        question: "The ________ tool is used to select and move objects.",
        optionA: "Pointer",
        optionB: "Label",
        optionC: "Combo Box",
        correctAnswer: "Pointer",
      }),
      shuffleOptions({
        question: "The ________ box lets a user choose one option from several given options.",
        optionA: "Radio",
        optionB: "List",
        optionC: "Check",
        correctAnswer: "Radio",
      }),
      shuffleOptions({
        question: "A VB program executes in ________ mode.",
        optionA: "Run",
        optionB: "Break",
        optionC: "Design",
        correctAnswer: "Run",
      }),
      shuffleOptions({
        question: "The Check Box indicates whether a condition is ________.",
        optionA: "On or Off",
        optionB: "True or False",
        optionC: "Large or Small",
        correctAnswer: "On or Off",
      }),
      shuffleOptions({
        question: "The ________ tool is used to display text on the form.",
        optionA: "Label",
        optionB: "Text Box",
        optionC: "Picture Box",
        correctAnswer: "Label",
      }),
      shuffleOptions({
        question: "VB 2008 is a fully ________ language.",
        optionA: "Object Oriented Programming System (OOPS)",
        optionB: "Binary Code",
        optionC: "Command-based",
        correctAnswer: "Object Oriented Programming System (OOPS)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Visual Basic was developed by Microsoft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "GUI stands for General User Interface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Form Window is used to write program code.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "VB follows event-driven programming.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The default name of the form window is Form1.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Break Mode is used to design a new program.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Check Box allows selection of multiple options.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Properties Window helps to change an object’s attributes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "VB can be used for creating Windows-based applications.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "VB 1.0 was released in the year 1991.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
