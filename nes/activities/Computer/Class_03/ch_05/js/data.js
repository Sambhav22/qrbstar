export const chapter = "Chapter - 5: Let's Learn Word";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "Which of the following is NOT a word processing software mentioned in the text?",
          optionA: "Abiword",
          optionB: "Excel",
          optionC: "Google Docs",
          correctAnswer: "Excel",
        },
        {
          question:
            "Where is the Quick Access Toolbar located in Microsoft Word?",
          optionA: "Below the document area",
          optionB: "At the top-left corner of the Word window",
          optionC: "Above the ribbon",
          correctAnswer: "At the top-left corner of the Word window",
        },
        {
          question: "What does the Status Bar in Word display?",
          optionA: "Name of the document",
          optionB: "Current time",
          optionC:
            "Current page number, number of pages, number of words, etc.",
          correctAnswer:
            "Current page number, number of pages, number of words, etc.",
        },
        {
          question: "What function does the Ruler serve in Word?",
          optionA: "It helps to navigate through the document.",
          optionB: "It provides quick access to common commands.",
          optionC: "It assists in adjusting the document with precision.",
          correctAnswer: "It assists in adjusting the document with precision.",
        },
        {
          question: "How can you start a new document in Word?",
          optionA: "Click on the Save option",
          optionB: "Select Blank document on the Word start screen",
          optionC: "Click on the Close option",
          correctAnswer: "Select Blank document on the Word start screen",
        },
        {
          question:
            "What is the purpose of the Caps Lock key while typing in Word?",
          optionA: "To type one or two capital letters",
          optionB: "To change the font size",
          optionC: "To underline text",
          correctAnswer: "To type one or two capital letters",
        },
        {
          question:
            "Which option in Word allows you to create a copy of a document while keeping the original?",
          optionA: "Save",
          optionB: "Save As",
          optionC: "Print",
          correctAnswer: "Save As",
        },
        {
          question: "How can you open an existing document in Word?",
          optionA: "Click on the Print option",
          optionB: "Click on the Save option",
          optionC: "Click on the Open option in backstage view",
          correctAnswer: "Click on the Open option in backstage view",
        },
        {
          question:
            "Where do you navigate to in Word to access the Print pane for previewing and printing a document?",
          optionA: "File tab",
          optionB: "Ruler",
          optionC: "Status Bar",
          correctAnswer: "File tab",
        },
        {
          question: "How can you exit Word or close a document in Word?",
          optionA: "Click on the Close option in backstage view",
          optionB: "Press Ctrl + S",
          optionC:
            "Click on the x button at the top-right corner of the Word window",
          correctAnswer:
            "Click on the x button at the top-right corner of the Word window",
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
            "___________ is a word processing application that allows you to create a variety of documents like letters, articles, poems, stories, reports, etc.",
          optionA: "Word",
          optionB: "Excel",
          optionC: "PowerPoint",
          correctAnswer: "Word",
        },
        {
          question:
            "The Quick Access Toolbar in Word contains shortcuts for common commands such as Save, Undo, and ___________.",
          optionA: "Print",
          optionB: "Redo",
          optionC: "Copy",
          correctAnswer: "Redo",
        },
        {
          question:
            "The ruler in Word is located at the ______________ of your document and is used to adjust the document with precision.",
          optionA: "Bottom",
          optionB: "Top and left",
          optionC: "Right",
          correctAnswer: "Top and left",
        },
        {
          question:
            "The document area in Word is a large white blank area used for _____________.",
          optionA: "Formatting text",
          optionB: "Typing text",
          optionC: "Inserting images",
          correctAnswer: "Typing text",
        },
        {
          question:
            "To start a new document in Word, one should select ______________ on the Word start screen.",
          optionA: "Recent document",
          optionB: "Blank document",
          optionC: "Saved document",
          correctAnswer: "Blank document",
        },
        {
          question:
            "To change the location of the insertion point in Word, you can simply click on the location or use _______________.",
          optionA: "Spacebar",
          optionB: "Arrow keys",
          optionC: "Caps Lock",
          correctAnswer: "Arrow keys",
        },
        {
          question:
            "Saving a document is crucial when starting a new document or making changes. In Word, to save a file for the first time, one should click on _______________.",
          optionA: "Save As",
          optionB: "Save option",
          optionC: "Close option",
          correctAnswer: "Save As",
        },
        {
          question:
            "Word offers two ways to save a file: _______________ and Save As.",
          optionA: "Save",
          optionB: "Save and Exit",
          optionC: "Save and Close",
          correctAnswer: "Save",
        },
        {
          question:
            "To open an existing document in Word, one should navigate to backstage view and click on the _______________ option.",
          optionA: "Close",
          optionB: "Print",
          optionC: "Open",
          correctAnswer: "Open",
        },
        {
          question:
            "The Print pane in Word allows users to preview and print a document, accessed by clicking on the _______________ option in the File tab.",
          optionA: "Save",
          optionB: "Print",
          optionC: "Close",
          correctAnswer: "Print",
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
          question: "Microsoft Word is a spreadsheet application.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Quick Access Toolbar in Word contains shortcuts for common commands such as Save and Undo.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The ruler in Word helps in adjusting the document with precision.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The document area in Word is used for formatting text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Word, clicking on the 'Recent Document' option starts a new document.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Caps Lock key is used to change font size while typing in Word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Word offers only one way to save a file, using the 'Save' command.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "One can access the Print pane in Word by clicking on the 'Print' option in the File tab.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The 'Close' option in backstage view is used to open an existing document in Word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Quick Access Toolbar contains shortcuts for common commands like Copy and Paste in Word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
