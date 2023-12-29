export const chapter = "Chapter - 3: Editing in Word";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the blinking vertical line in a Word document called?",
          optionA: "Cursor",
          optionB: "Highlighter",
          optionC: "Navigator",
          correctAnswer: "a) Cursor",
        },
        {
          question: "What is the purpose of the Backspace key in Word?",
          optionA: "Move the insertion point to the next paragraph line",
          optionB: "Delete text to the left of the insertion point",
          optionC: "Copy selected text",
          correctAnswer: "b) Delete text to the left of the insertion point",
        },
        {
          question: "How can you select text in a Word document?",
          optionA: "Press Enter key",
          optionB: "Right-click and drag the mouse",
          optionC: "Press the Spacebar key",
          correctAnswer: "b) Right-click and drag the mouse",
        },
        {
          question: "What does the Cut command do in Word?",
          optionA: "Deletes selected text",
          optionB: "Copies selected text",
          optionC: "Moves selected text",
          correctAnswer: "c) Moves selected text",
        },
        {
          question: "How do you initiate the Find feature in Word?",
          optionA: "Right-click and select Find",
          optionB: "Press Ctrl + F",
          optionC: "Click on the Replace command",
          correctAnswer: "b) Press Ctrl + F",
        },
        {
          question: "What is the purpose of the Replace feature in Word?",
          optionA: "Change font styles",
          optionB: "Find misspelled words",
          optionC: "Quickly replace specific words or phrases",
          correctAnswer: "c) Quickly replace specific words or phrases",
        },
        {
          question: "How can you check misspelled words in a Word document?",
          optionA: "Press Ctrl + S",
          optionB: "Right-click on the word with a red wavy line",
          optionC: "Use the Find feature",
          correctAnswer: "b) Right-click on the word with a red wavy line",
        },
        {
          question: "What do double blue underlines indicate in Word?",
          optionA: "Grammar errors",
          optionB: "Hyperlinks",
          optionC: "Text formatting issues",
          correctAnswer: "a) Grammar errors",
        },
        {
          question: "How do you replace a misspelled word in Word?",
          optionA: "Press Enter key",
          optionB: "Right-click and select Replace",
          optionC: "Click on the word with the red wavy line",
          correctAnswer: "b) Right-click and select Replace",
        },
        {
          question:
            "Which tab in Word provides the option to check spelling and grammar?",
          optionA: "Edit",
          optionB: "Home",
          optionC: "Review",
          correctAnswer: "c) Review",
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
            "In Word, the blinking vertical line in the document is known as the ________________.",
          optionA: "Navigator",
          optionB: "Cursor",
          optionC: "Highlighter",
          correctAnswer: "b) Cursor",
        },
        {
          question:
            "To add spaces after a word or in between text in Word, you can press the ________________ key.",
          optionA: "Enter",
          optionB: "Spacebar",
          optionC: "Tab",
          correctAnswer: "b) Spacebar",
        },
        {
          question:
            "The insertion point is located at the ________________ when a new blank document opens in Word.",
          optionA: "bottom-right corner",
          optionB: "top-left corner",
          optionC: "center of the page",
          correctAnswer: "b) top-left corner",
        },
        {
          question:
            "To move the insertion point to the next paragraph line in Word, you need to press the ________________ key.",
          optionA: "Shift",
          optionB: "Enter",
          optionC: "Tab",
          correctAnswer: "b) Enter",
        },
        {
          question:
            "To delete text to the left of the insertion point in Word, you should press the ________________ key.",
          optionA: "Backspace",
          optionB: "Delete",
          optionC: "Shift",
          correctAnswer: "a) Backspace",
        },
        {
          question:
            "Copying text in Word creates a ________________ of the selected text.",
          optionA: "Backup",
          optionB: "Duplicate",
          optionC: "Shortcut",
          correctAnswer: "b) Duplicate",
        },
        {
          question:
            "To initiate the Find feature in Word, you can press ________________.",
          optionA: "Ctrl + F",
          optionB: "Alt + Tab",
          optionC: "Shift + Enter",
          correctAnswer: "a) Ctrl + F",
        },
        {
          question:
            "The purpose of the Replace feature in Word is to ________________.",
          optionA: "Change font styles",
          optionB: "Find misspelled words",
          optionC: "Quickly replace specific words or phrases",
          correctAnswer: "c) Quickly replace specific words or phrases",
        },
        {
          question:
            "In Word, misspelled words are displayed with a ________________ beneath them.",
          optionA: "Red wavy line",
          optionB: "Green dotted line",
          optionC: "Blue straight line",
          correctAnswer: "a) Red wavy line",
        },
        {
          question:
            "To check spelling and grammar in a Word document, you can right-click on a word with a ________________.",
          optionA: "Yellow dotted line",
          optionB: "Red wavy line",
          optionC: "Green solid line",
          correctAnswer: "b) Red wavy line",
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
            "Microsoft Word provides a feature called the Insertion Point to add text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Pressing the Backspace key in Word deletes text to the right of the insertion point.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The purpose of the Cut command in Word is to duplicate selected text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Find feature in Word allows you to search for specific words or phrases in a document.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "On a globe, different colors are used to represent countries on continents and seas and oceans in red.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A map is a model of the Earth that provides a true picture of the Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The north direction on a map is located at the bottom.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Earth is shaped like a cube, round from sides and slightly flattened at the top and bottom.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Dragging and dropping text in Word allows you to move text using the mouse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Replace feature in Word is used to find misspelled words.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
