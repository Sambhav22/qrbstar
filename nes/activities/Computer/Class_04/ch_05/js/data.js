export const chapter = "Chapter - 5: Let's Learn Excel";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the purpose of the Quick Access Toolbar in Excel?",
          optionA: "To display the active cell reference",
          optionB: "To access common commands regardless of the selected tab",
          optionC: "To create a new workbook",
          correctAnswer:
            "To access common commands regardless of the selected tab",
        },
        {
          question:
            "What is the area where you perform all your work in Excel called?",
          optionA: "Quick Access Toolbar",
          optionB: "Status Bar",
          optionC: "Worksheet",
          correctAnswer: "Worksheet",
        },
        {
          question: "How do you create a new blank workbook in Excel?",
          optionA: "Click on the File tab, select New, and choose a template",
          optionB:
            "Click on the File tab, select Save As, and enter a file name",
          optionC:
            "Click on the File tab, select New, and then click on Blank workbook",
          correctAnswer:
            "Click on the File tab, select New, and then click on Blank workbook",
        },
        {
          question: "What does the Status Bar in Excel display?",
          optionA: "Information about an operation in progress",
          optionB: "Names of students in a class",
          optionC: "Recently edited workbooks",
          correctAnswer: "Information about an operation in progress",
        },
        {
          question:
            "Which part of the Excel window shows the title of the application and the name of the current workbook?",
          optionA: "Ribbon",
          optionB: "Title Bar",
          optionC: "Formula Bar",
          correctAnswer: "Title Bar",
        },
        {
          question: "What is the purpose of the Name Box in Excel?",
          optionA: "To display the active cell reference",
          optionB: "To enter data in the worksheet",
          optionC: "To select rows in the worksheet",
          correctAnswer: "To display the active cell reference",
        },
        {
          question:
            "How do you view more than one workbook simultaneously in Excel?",
          optionA: "Click on the Close button",
          optionB: "Click on the Arrange All option in the View Tab",
          optionC: "Click on the Start button",
          correctAnswer: "Click on the Arrange All option in the View Tab",
        },
        {
          question:
            "What is the intersection of rows and columns called in Excel?",
          optionA: "Active Cell",
          optionB: "Cell",
          optionC: "Worksheet Tab",
          correctAnswer: "Cell",
        },
        {
          question:
            "What is the first step to start Excel and create a new workbook?",
          optionA: "Click on the File tab",
          optionB: "Click on the Start button",
          optionC: "Click on the Save button",
          correctAnswer: "Click on the Start button",
        },
        {
          question:
            "Which tab in Excel contains multiple groups of commands and is used to perform common tasks?",
          optionA: "Quick Access Toolbar",
          optionB: "Ribbon",
          optionC: "Worksheet Tab",
          correctAnswer: "Ribbon",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "To start Excel, follow these steps: Click on the Start button, then click All apps, and select ________.",
          optionA: "Microsoft Word",
          optionB: "PowerPoint",
          optionC: "Excel",
          correctAnswer: "Excel",
        },
        {
          question:
            "The area where you do all your work in Excel is called a ________.",
          optionA: "Quick Access Toolbar",
          optionB: "Ribbon",
          optionC: "Worksheet",
          correctAnswer: "Worksheet",
        },
        {
          question:
            "The Title Bar in Excel shows the title of the application and the name of the current ________.",
          optionA: "Cell",
          optionB: "Workbook",
          optionC: "Formula",
          correctAnswer: "Workbook",
        },
        {
          question:
            "The Quick Access Toolbar includes common commands such as Save, Undo, and ________.",
          optionA: "Copy",
          optionB: "Redo",
          optionC: "Cut",
          correctAnswer: "Redo",
        },
        {
          question:
            "The intersection of rows and columns in Excel forms a ________.",
          optionA: "Ribbon",
          optionB: "Worksheet",
          optionC: "Cell",
          correctAnswer: "Cell",
        },
        {
          question:
            "The Excel window's bottom part that displays information about an operation in progress is called the ________.",
          optionA: "Name Box",
          optionB: "Status Bar",
          optionC: "Formula Bar",
          correctAnswer: "Status Bar",
        },
        {
          question:
            "You can enter data in Excel worksheet in the form of text, numbers, and ________.",
          optionA: "Symbols",
          optionB: "Formulae",
          optionC: "Commands",
          correctAnswer: "Formulae",
        },
        {
          question: "Excel files are called ________.",
          optionA: "Worksheets",
          optionB: "Workbooks",
          optionC: "Cells",
          correctAnswer: "Workbooks",
        },
        {
          question:
            "The two most common ways to close an Excel workbook are by clicking the • button at the top-right corner or clicking on the File tab and selecting the ________ option.",
          optionA: "Close",
          optionB: "Save",
          optionC: "New",
          correctAnswer: "Close",
        },
        {
          question:
            "To create a new blank workbook in Excel, click on the File tab, select ________, and then click on Blank workbook.",
          optionA: "Save As",
          optionB: "Open",
          optionC: "New",
          correctAnswer: "New",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "The Quick Access Toolbar in Excel allows you to access common commands regardless of the selected tab.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The area where you perform all your work in Excel is known as the Ribbon.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Title Bar in Excel displays the title of the application and the name of the current worksheet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Quick Access Toolbar includes commands such as Save, Undo, and Redo in Excel.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A cell in Excel is the intersection of rows and columns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Formula Bar in Excel displays the entry in the formula bar and the active cell simultaneously.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Status Bar in Excel is located at the top of the worksheet window.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Excel files are referred to as Worksheets.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "You can view more than one workbook simultaneously by clicking on the Close button.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "To save a workbook in Excel, you can use both the Save and Save As options.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
