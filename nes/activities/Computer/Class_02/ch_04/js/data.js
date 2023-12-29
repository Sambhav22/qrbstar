export const chapter = "Chapter - 4: Different Keys";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "How many alphabet keys are typically found on an English keyboard?",
            options: ["10", "26", "20"],
            answer: "26",
          },
          {
            question:
              "Which key is used to create a blank space between words or characters?",
            options: ["Caps Lock", "Spacebar", "Enter"],
            answer: "Spacebar",
          },
          {
            question:
              "Which keys are known as cursor control keys and allow movement in four directions?",
            options: ["Spacebar keys", "Function keys", "Arrow keys"],
            answer: "Arrow keys",
          },
          {
            question:
              "How many numeric keys are typically found on a standard keyboard?",
            options: ["12", "10", "6"],
            answer: "10",
          },
          {
            question:
              "Which key is used to erase characters to the right of the cursor?",
            options: ["Backspace", "Delete", "Enter"],
            answer: "Delete",
          },
          {
            question:
              "Which key is used to activate or deactivate the numeric keypad?",
            options: ["Num Lock", "Caps Lock", "Shift"],
            answer: "Num Lock",
          },
          {
            question: "What does the Caps Lock key do when activated?",
            options: [
              "Makes the computer faster",
              "Types in lowercase",
              "Types in uppercase",
            ],
            answer: "Types in uppercase",
          },
          {
            question:
              "Which key is used to move the cursor to the beginning of a new line?",
            options: ["Enter", "Tab", "Shift"],
            answer: "Enter",
          },
          {
            question:
              "Which key is used to erase characters to the left of the cursor?",
            options: ["Backspace", "Delete", "Spacebar"],
            answer: "Backspace",
          },
          {
            question:
              "Which key is used to type special characters like '#' when used in combination with another key?",
            options: ["Enter", "Shift", "Control"],
            answer: "Shift",
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
            question: "There are __________ alphabet keys on the keyboard.",
            options: ["26", "10", "12"],
            answer: "26",
          },
          {
            question: "Number keys are also known as __________ keys.",
            options: ["Alphabet", "Numeric", "Function"],
            answer: "Numeric",
          },
          {
            question:
              "The __________ key is used to give blank space between words or characters.",
            options: ["Tab", "Spacebar", "Enter"],
            answer: "Spacebar",
          },
          {
            question:
              "The Backspace key is used to erase anything typed on the __________ of the cursor.",
            options: ["left", "right", "top"],
            answer: "left",
          },
          {
            question:
              "Caps Lock key is used to type __________ letters on the monitor.",
            options: ["uppercase", "lowercase", "italic"],
            answer: "uppercase",
          },
          {
            question:
              "Num Lock key is used to activate or deactivate the __________ keypad.",
            options: ["alphanumeric", "numeric", "symbol"],
            answer: "numeric",
          },
          {
            question:
              "The __________ key is used to move the cursor to the beginning of a new line.",
            options: ["Tab", "Enter", "Shift"],
            answer: "Enter",
          },
          {
            question:
              "Shift key is used to type __________ alphabets and special characters on the monitor.",
            options: ["lowercase", "capital", "italic"],
            answer: "capital",
          },
          {
            question:
              "If you want to type '#', press the Shift key along with the key that has the symbol. '#' symbol will be typed on the screen. This statement describes the function of the __________ key.",
            options: ["Shift", "Caps Lock", "Spacebar"],
            answer: "Shift",
          },
          {
            question: "Control key is named as __________ on the keyboard.",
            options: ["Ctrl", "Alt", "Fn"],
            answer: "Ctrl",
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
            question:
              "The Caps Lock key, when activated, displays all typed alphabets in uppercase.",
            options: ["Caps Lock", "Shift"],
            answer: "Caps Lock",
          },
          {
            question:
              "The Num Lock key is used to activate or deactivate the numeric keypad.",
            options: ["Num Lock", "Tab"],
            answer: "Num Lock",
          },
          {
            question:
              "Backspace key is used to erase characters to the left of the cursor.",
            options: ["Backspace", "Enter"],
            answer: "Backspace",
          },
          {
            question:
              "The Enter key is used to move the cursor to the beginning of a new line.",
            options: ["Enter", "Spacebar"],
            answer: "Enter",
          },
          {
            question:
              "Spacebar is used to give blank space between two words or characters.",
            options: ["Spacebar", "Arrow keys"],
            answer: "Spacebar",
          },
          {
            question: "Arrow keys are also known as numeric keys.",
            options: ["Arrow keys", "Function keys"],
            answer: "Arrow keys",
          },
          {
            question:
              "Shift key is used to type capital alphabets and special characters on the monitor.",
            options: ["Shift", "Delete"],
            answer: "Shift",
          },
          {
            question:
              "Tab key is used to erase characters to the right of the cursor.",
            options: ["Tab", "Caps Lock"],
            answer: "Tab",
          },
          {
            question: "Control key is named as Ctrl on the keyboard.",
            options: ["Control", "Alt"],
            answer: "Control",
          },
          {
            question:
              "Delete key is used to erase anything typed on the right side of the cursor.",
            options: ["Delete", "Function keys"],
            answer: "Delete",
          },
        ],
      },
    ],
  };
}

export var activityData;
