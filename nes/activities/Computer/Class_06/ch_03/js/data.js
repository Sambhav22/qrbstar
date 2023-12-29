export const chapter = "Chapter - 3: Working With Excel";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Which tab in Excel contains commands like New, Open, Save, and Print?",
        optionA: "Quick Access Toolbar",
        optionB: "Title Bar",
        optionC: "Ribbon",
        correctAnswer: "C) Ribbon",
      },
      {
        question:
          "What is the intersection of a row and a column called in Excel?",
        optionA: "Worksheet",
        optionB: "Cell",
        optionC: "Workbook",
        correctAnswer: "B) Cell",
      },
      {
        question:
          "Which tool in Excel allows finding the sum of values automatically?",
        optionA: "Auto Sum",
        optionB: "Quick Access Toolbar",
        optionC: "Formula Bar",
        correctAnswer: "A) Auto Sum",
      },
      {
        question:
          "What does the mouse pointer look like within the worksheet area in Excel?",
        optionA: "Block arrow",
        optionB: "Plus sign",
        optionC: "Plus sign and block arrow",
        correctAnswer: "B) Plus sign",
      },
      {
        question:
          "Which feature in Excel helps in organizing data in a proper manner?",
        optionA: "Quick Access Toolbar",
        optionB: "Entering Data into a Worksheet",
        optionC: "Sorting operations",
        correctAnswer: "C) Sorting operations",
      },
      {
        question: "What types of data are mentioned in Excel?",
        optionA: "Number, Text, and Formulae",
        optionB: "Alphabetical, Numeric, and Formulae",
        optionC: "Text, Alphanumeric, and Values",
        correctAnswer: "A) Number, Text, and Formulae",
      },
      {
        question: "How can you open an existing workbook in Excel?",
        optionA: "Click on the Save option",
        optionB: "Click on the File tab, then Open option",
        optionC: "Click on the Redo command",
        correctAnswer: "B) Click on the File tab, then Open option",
      },
      {
        question:
          "Which command is used to cancel the last action done in Excel?",
        optionA: "Redo",
        optionB: "Save As",
        optionC: "Undo",
        correctAnswer: "C) Undo",
      },
      {
        question:
          "What action do you take to exit Excel after finishing your work?",
        optionA: "Click on the Save option",
        optionB: "Close the workbook window",
        optionC: "Click on the Print option",
        correctAnswer: "B) Close the workbook window",
      },
      {
        question: "What does the Formula Bar display in Excel?",
        optionA: "Active cell content",
        optionB: "Worksheet names",
        optionC: "Workbook titles",
        correctAnswer: "A) Active cell content",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "Excel is an electronic __________ program developed by Microsoft Corporation.",
        options: {
          a: "Word",
          b: "Spreadsheet",
          c: "Database",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Excel is helpful for those who maintain sales accounts, bills, and do __________ calculations.",
        options: {
          a: "Financial",
          b: "Statistical",
          c: "Graphical",
        },
        correctAnswer: "a",
      },
      {
        question: "In Excel, data is organized in rows and __________.",
        options: {
          a: "Cells",
          b: "Functions",
          c: "Charts",
        },
        correctAnswer: "a",
      },
      {
        question:
          "The intersection of a row and a column in Excel is known as a __________.",
        options: {
          a: "Workbook",
          b: "Worksheet",
          c: "Cell",
        },
        correctAnswer: "c",
      },
      {
        question:
          "The Ribbon in Excel contains different menu tabs that house groups of related __________.",
        options: {
          a: "Charts",
          b: "Commands",
          c: "Functions",
        },
        correctAnswer: "b",
      },
      {
        question: "Excel is primarily used for manipulating __________ data.",
        options: {
          a: "Alphabetic",
          b: "Numeric",
          c: "Graphic",
        },
        correctAnswer: "b",
      },
      {
        question:
          "The Formula Bar in Excel is used to display the data or formula of the __________.",
        options: {
          a: "Active cell",
          b: "Entire worksheet",
          c: "Entire workbook",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Excel provides various sorting operations to organize the entered data in a __________ manner.",
        options: {
          a: "Systematic",
          b: "Proper",
          c: "Random",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Excel allows you to enter data into the cells of the worksheet, which can include alphabetical characters, numbers, or a __________.",
        options: {
          a: "Link",
          b: "Formula",
          c: "Function",
        },
        correctAnswer: "b",
      },
      {
        question:
          "The feature in Excel used to find the sum of values automatically is called __________.",
        options: {
          a: "Auto Fill",
          b: "Auto Sum",
          c: "Auto Calculate",
        },
        correctAnswer: "b",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Excel allows organizing data only in rows.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b",
      },
      {
        question:
          "The Ribbon in Excel contains various menu tabs housing related commands.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Excel's Formula Bar displays the data or formula of the active cell.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Functions cannot be applied in Excel to perform arithmetic operations on numeric data.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b",
      },
      {
        question:
          "The use of the wheel in Excel primarily contributes to transportation.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Pottery became more durable in Excel after learning to bake it.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a",
      },
      {
        question: "Excel can be used only for manipulating numeric data.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b",
      },
      {
        question: "The Quick Access Toolbar in Excel houses various menu tabs.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b",
      },
      {
        question: "The active cell in Excel always displays data entered.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Excel allows only alphabetical characters to be entered into cells.",
        options: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b",
      },
    ],
  };
}

export var activityData;
