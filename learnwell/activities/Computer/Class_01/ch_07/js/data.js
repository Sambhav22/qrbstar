export const chapter = "Chapter - 7: Let’s Draw";
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
        question: "Which program is used to make colourful drawings on a computer?",
        optionA: "Paint",
        optionB: "Word",
        optionC: "Excel",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "What is the first step to open the Paint program?",
        optionA: "Click on Start",
        optionB: "Click on File",
        optionC: "Click on View",
        correctAnswer: "Click on Start",
      }),
      shuffleOptions({
        question: "Which tool changes the pointer into a pencil?",
        optionA: "Pencil",
        optionB: "Eraser",
        optionC: "Colour",
        correctAnswer: "Pencil",
      }),
      shuffleOptions({
        question: "Where can you find the Pencil and Eraser tools?",
        optionA: "Tools group",
        optionB: "Shapes group",
        optionC: "File menu",
        correctAnswer: "Tools group",
      }),
      shuffleOptions({
        question: "What is the area called where we draw pictures?",
        optionA: "Drawing area",
        optionB: "Title bar",
        optionC: "Status bar",
        correctAnswer: "Drawing area",
      }),
      shuffleOptions({
        question: "Which bar shows the name of the file we are working on?",
        optionA: "Title bar",
        optionB: "Menu bar",
        optionC: "Colour bar",
        correctAnswer: "Title bar",
      }),
      shuffleOptions({
        question: "Which group helps us make shapes like circles and rectangles?",
        optionA: "Shapes group",
        optionB: "Tools group",
        optionC: "Colour group",
        correctAnswer: "Shapes group",
      }),
      shuffleOptions({
        question: "Which toolbar gives quick buttons for Save and Undo?",
        optionA: "Quick Access Toolbar",
        optionB: "Status bar",
        optionC: "Ribbon",
        correctAnswer: "Quick Access Toolbar",
      }),
      shuffleOptions({
        question: "What should we click on after ‘All Apps’ to open Paint?",
        optionA: "Windows Accessories",
        optionB: "Documents",
        optionC: "Pictures",
        correctAnswer: "Windows Accessories",
      }),
      shuffleOptions({
        question: "Which tool is used to erase any mistake in the drawing?",
        optionA: "Eraser",
        optionB: "Pencil",
        optionC: "Shape",
        correctAnswer: "Eraser",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ program helps us draw colourful pictures.",
        optionA: "Paint",
        optionB: "Calculator",
        optionC: "Notepad",
        correctAnswer: "Paint",
      }),
      shuffleOptions({
        question: "The ______ tool is used to make drawings.",
        optionA: "Pencil",
        optionB: "Eraser",
        optionC: "Shapes",
        correctAnswer: "Pencil",
      }),
      shuffleOptions({
        question: "To remove any part of a drawing, use the ______ tool.",
        optionA: "Eraser",
        optionB: "Pencil",
        optionC: "Colour",
        correctAnswer: "Eraser",
      }),
      shuffleOptions({
        question: "To open Paint, first click on ______.",
        optionA: "Start",
        optionB: "File",
        optionC: "Insert",
        correctAnswer: "Start",
      }),
      shuffleOptions({
        question: "The Shapes group is used to make different ______.",
        optionA: "Shapes",
        optionB: "Colours",
        optionC: "Letters",
        correctAnswer: "Shapes",
      }),
      shuffleOptions({
        question: "The place where we draw is called the ______ area.",
        optionA: "Drawing",
        optionB: "Writing",
        optionC: "Colour",
        correctAnswer: "Drawing",
      }),
      shuffleOptions({
        question: "The ______ bar shows the file name.",
        optionA: "Title",
        optionB: "Menu",
        optionC: "Status",
        correctAnswer: "Title",
      }),
      shuffleOptions({
        question: "You can find the Paint program in Windows ______.",
        optionA: "Accessories",
        optionB: "Games",
        optionC: "Settings",
        correctAnswer: "Accessories",
      }),
      shuffleOptions({
        question: "The tools like Pencil and Eraser are found in the ______ group.",
        optionA: "Tools",
        optionB: "Shapes",
        optionC: "Ribbon",
        correctAnswer: "Tools",
      }),
      shuffleOptions({
        question: "The ______ toolbar gives quick access to commands like Save and Undo.",
        optionA: "Quick Access",
        optionB: "Status",
        optionC: "Title",
        correctAnswer: "Quick Access",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Paint is used to make colourful drawings on a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Pencil tool is used to erase drawings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Eraser tool helps to remove mistakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Shapes group helps to draw circles and rectangles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Title bar shows the file name.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Drawing area is where we type letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You can open Paint from Windows Accessories.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ribbon contains Tabs and Groups.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Quick Access Toolbar is used for typing text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Paint is also known as MS-Paint.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
