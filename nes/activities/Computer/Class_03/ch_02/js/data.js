export const chapter = "Chapter - 2: Working with Notepad";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is Notepad?",
          optionA: "A complex word processor",
          optionB: "A simple text editor application",
          optionC: "A graphic designing tool",
          correctAnswer: "B",
        },
        {
          question: "Which operating system includes Notepad by default?",
          optionA: "Linux",
          optionB: "Microsoft Windows",
          optionC: "MacOS",
          correctAnswer: "B",
        },
        {
          question: "What does the Title Bar in Notepad display?",
          optionA: "Only the title of the application",
          optionB: "Title of the application and the name of the document",
          optionC: "Date and time of document creation",
          correctAnswer: "B",
        },
        {
          question:
            "Where is the main working area for typing and editing text in Notepad?",
          optionA: "Title Bar",
          optionB: "Menu Bar",
          optionC: "Document Area",
          correctAnswer: "C",
        },
        {
          question: "How can you create a new document in Notepad?",
          optionA: "Click on 'Save As'",
          optionB: "Click on 'Open'",
          optionC: "Click on 'New' under the File menu",
          correctAnswer: "C",
        },
        {
          question: "How can you save a document in Notepad?",
          optionA: "Click on 'Exit'",
          optionB: "Click on 'Save As' under the File menu",
          optionC: "Click on the Close button",
          correctAnswer: "B",
        },
        {
          question: "What action will open a saved document in Notepad?",
          optionA: "Clicking on 'Save As'",
          optionB: "Clicking on 'New'",
          optionC: "Clicking on 'Open' under the File menu",
          correctAnswer: "C",
        },
        {
          question: "What should you do to exit Notepad?",
          optionA: "Click on the Close button",
          optionB: "Click on 'Open'",
          optionC: "Click on 'New' under the File menu",
          correctAnswer: "A",
        },
        {
          question: "What does the cursor indicate in Notepad?",
          optionA: "The end of a document",
          optionB: "The current line being edited",
          optionC: "The location of the File menu",
          correctAnswer: "B",
        },
        {
          question:
            "Which year was Notepad first released as a mouse-based DOS program?",
          optionA: "1973",
          optionB: "1983",
          optionC: "1993",
          correctAnswer: "B",
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
            "To start Notepad, one needs to click on the ___ button and then select Notepad from the list of all applications.",
          optionA: "Save",
          optionB: "Start",
          optionC: "Exit",
          correctAnswer: "B",
        },
        {
          question:
            "The white strip at the top of the Notepad window, which consists of the title of the application and the name of the document, is called the ___.",
          optionA: "Document Area",
          optionB: "Title Bar",
          optionC: "Menu Bar",
          correctAnswer: "B",
        },
        {
          question: "Notepad allows users to create, open, and read ___ files.",
          optionA: "Image",
          optionB: "Binary",
          optionC: "Plaintext",
          correctAnswer: "C",
        },
        {
          question:
            "The small insertion point blinking in the document area of Notepad is known as the ___.",
          optionA: "Cursor",
          optionB: "Pointer",
          optionC: "Highlighter",
          correctAnswer: "A",
        },
        {
          question:
            "In Notepad, clicking on '___' under the File menu creates a new document.",
          optionA: "Save As",
          optionB: "Open",
          optionC: "New",
          correctAnswer: "C",
        },
        {
          question:
            "To save a document in Notepad, one should click on '___' under the File menu.",
          optionA: "Save As",
          optionB: "Exit",
          optionC: "Save",
          correctAnswer: "A",
        },
        {
          question:
            "Clicking on '___' under the File menu is used to open an already saved file in Notepad.",
          optionA: "Save As",
          optionB: "Exit",
          optionC: "Open",
          correctAnswer: "C",
        },
        {
          question:
            "To exit Notepad, one can either click on '___' under the File menu or click on the close button present on the top-right corner of the Notepad window.",
          optionA: "Close",
          optionB: "Save As",
          optionC: "Open",
          correctAnswer: "A",
        },
        {
          question: "As you type in Notepad, the ___ moves forward.",
          optionA: "Title Bar",
          optionB: "Cursor",
          optionC: "Menu Bar",
          correctAnswer: "B",
        },
        {
          question:
            "Notepad was first released as a mouse-based DOS program in the year ___.",
          optionA: "1973",
          optionB: "1983",
          optionC: "1993",
          correctAnswer: "B",
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
          question: "Notepad is a complex word processor.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "The Title Bar in Notepad displays only the title of the application.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "The main working area for typing and editing text in Notepad is the Menu Bar.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "In Notepad, clicking on 'Save As' under the File menu creates a new document.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "To open an already saved file in Notepad, one should click on 'Exit' under the File menu.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question: "The cursor in Notepad indicates the end of a document.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question: "The largest ocean on Earth is the Atlantic Ocean.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "Mountains are tall landforms with steep sloping sides, often coming to a point at the top, called plateaus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "B",
        },
        {
          question:
            "Notepad was first released as a mouse-based DOS program in the year 1983.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A",
        },
        {
          question:
            "To exit Notepad, one can click on the Close button present on the top-right corner of the Notepad window.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "A",
        },
      ],
    ],
  };
}

export var activityData;
