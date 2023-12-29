export const chapter = "Chapter - 4: More About Excel";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is Excel primarily used for?",
            options: [
              "Graphic design",
              "Storing, organizing, and analyzing data",
              "Video editing",
            ],
            answer: "Storing, organizing, and analyzing data",
          },
          {
            question: "How can you insert a new worksheet in Excel?",
            options: [
              "Press Ctrl + N keys",
              "Click on the New sheet button or use the Insert option",
              "Right-click on the cell and select Insert Sheet",
            ],
            answer: "Click on the New sheet button or use the Insert option",
          },
          {
            question:
              "What is the default name of the first worksheet in a new Excel workbook?",
            options: ["Sheet 1", "Excel Sheet", "Default Sheet"],
            answer: "Sheet 1",
          },
          {
            question: "How do you delete a worksheet in Excel?",
            options: [
              "Press Ctrl + D keys",
              "Right-click on the worksheet and select Delete",
              "Click on the Delete key",
            ],
            answer: "Right-click on the worksheet and select Delete",
          },
          {
            question: "What are cells in Excel?",
            options: [
              "Basic building blocks of a worksheet",
              "Graphical elements",
              "External data sources",
            ],
            answer: "Basic building blocks of a worksheet",
          },
          {
            question: "How do you select a range of cells in Excel?",
            options: [
              "Click on each cell individually",
              "Click, hold, and drag the mouse to highlight the cells",
              "Press Ctrl + R keys",
            ],
            answer: "Click, hold, and drag the mouse to highlight the cells",
          },
          {
            question: "How can you select an entire worksheet in Excel?",
            options: [
              "Right-click and choose Select All",
              "Click on the Select All button or press Ctrl + A",
              "Click on the worksheet title",
            ],
            answer: "Click on the Select All button or press Ctrl + A",
          },
          {
            question: "What is the purpose of the formula bar in Excel?",
            options: [
              "To change the color of cells",
              "To insert formulas and functions",
              "To delete worksheets",
            ],
            answer: "To insert formulas and functions",
          },
          {
            question:
              "How can you replace the content of a cell with a new value?",
            options: [
              "Press Ctrl + R keys",
              "Double-click on the cell",
              "Right-click and select Replace",
            ],
            answer: "Double-click on the cell",
          },
          {
            question:
              "What is the key combination to cut cell content in Excel?",
            options: ["Ctrl + X", "Ctrl + C", "Ctrl + V"],
            answer: "Ctrl + X",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "To insert a worksheet in Excel, you can click on the ______ button.",
            options: ["New sheet", "Insert sheet", "Delete sheet"],
            correctAnswer: "New sheet",
          },
          {
            question:
              "By default, a new workbook in Excel contains only one worksheet named ______.",
            options: ["Excel", "Sheet 1", "Default"],
            correctAnswer: "Sheet 1",
          },
          {
            question:
              "To select a single cell in Excel, you should click on the cell, and a ______ will appear around the selected cell.",
            options: ["Highlight", "Border", "Background"],
            correctAnswer: "Border",
          },
          {
            question:
              "To select a range of cells, you can click, hold, and drag the mouse until all the ______ cells are highlighted.",
            options: ["Adjoining", "Empty", "Colored"],
            correctAnswer: "Adjoining",
          },
          {
            question:
              "To insert content into a cell, you need to click a cell to select it and then type the content and press the ______ key.",
            options: ["Shift", "Enter", "Tab"],
            correctAnswer: "Enter",
          },
          {
            question:
              "The data in a cell can be modified by replacing the content with a new value or ______ modifying the cell content.",
            options: ["Fully", "Partially", "Temporarily"],
            correctAnswer: "Partially",
          },
          {
            question:
              "To delete cell content, you can select the cell and press the ______ key on your keyboard.",
            options: ["Shift", "Delete", "Ctrl"],
            correctAnswer: "Delete",
          },
          {
            question:
              "To copy cell content in Excel, you can use the Copy command on the ______ tab or press Ctrl + ___ keys.",
            options: ["Home, C", "Edit, X", "Data, V"],
            correctAnswer: "Home, C",
          },
          {
            question:
              "Unlike copying and pasting, cutting allows you to ______ cell content between cells.",
            options: ["Duplicate", "Move", "Delete"],
            correctAnswer: "Move",
          },
          {
            question:
              "The key combination Ctrl + ___ is used to paste cell content in Excel.",
            options: ["X", "C", "V"],
            correctAnswer: "V",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "Excel is primarily used for word processing.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "A new workbook in Excel contains multiple worksheets by default.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "You can select a range of cells in Excel by clicking and holding the mouse.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "To delete a worksheet in Excel, you can use the Ctrl + D shortcut.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Cells are the basic building blocks of a worksheet in Excel.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The diurnal range of temperature in equatorial regions is usually small.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Cutting and pasting duplicate cell content in Excel.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "To select the entire worksheet in Excel, you can use the Select All button or press Ctrl + A.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "You can insert cell content in Excel by pressing the Enter key after typing.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The capital of Congo, Kinshasa, is located on the Nile River.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
