export const chapter = "Chapter - 5: Keyboard";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What are the keys used for typing letters and words called?",
        options: ["Number keys", "Alphabet keys", "Special keys"],
        answer: "Alphabet keys",
      },
      {
        question: "Which key is used to move to the next line while typing?",
        options: ["Spacebar key", "Enter key", "Shift key"],
        answer: "Enter key",
      },
      {
        question: "What does the Caps Lock key do when activated?",
        options: [
          "Creates space between words",
          "Types in lowercase letters",
          "Types in capital letters",
        ],
        answer: "Types in capital letters",
      },
      {
        question: "Which key on the keyboard creates space between words?",
        options: ["Caps Lock key", "Delete key", "Spacebar key"],
        answer: "Spacebar key",
      },
      {
        question: "How many sets of number keys are there on a keyboard?",
        options: ["One", "Two", "Three"],
        answer: "Two",
      },
      {
        question:
          "What happens when the Shift key is pressed with an alphabet key?",
        options: [
          "It types the letter in lowercase",
          "It types the letter in uppercase",
          "It deletes the letter",
        ],
        answer: "It types the letter in uppercase",
      },
      {
        question: "What function does the Delete key serve?",
        options: [
          "Adds space between words",
          "Removes letters or numbers on the left of the cursor",
          "Removes letters or numbers on the right of the cursor",
        ],
        answer: "Removes letters or numbers on the right of the cursor",
      },
      {
        question:
          "Which key is used to toggle between uppercase and lowercase letters?",
        options: ["Caps Lock key", "Enter key", "Shift key"],
        answer: "Caps Lock key",
      },
      {
        question: "What is the purpose of the Spacebar key?",
        options: [
          "Types in capital letters",
          "Moves to the next line",
          "Creates space between words",
        ],
        answer: "Creates space between words",
      },
      {
        question: "Which type of keys are used to input numbers on a keyboard?",
        options: ["Alphabet keys", "Number keys", "Special keys"],
        answer: "Number keys",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "The keys with numbers on them are called __________ keys.",
        options: ["Alphabet", "Special", "Number"],
        answer: "Number",
      },
      {
        question:
          "The __________ keys are used to type letters, words, sentences, etc.",
        options: ["Special", "Number", "Alphabet"],
        answer: "Alphabet",
      },
      {
        question:
          "The key used to move to the next line is the __________ key.",
        options: ["Spacebar", "Enter", "Shift"],
        answer: "Enter",
      },
      {
        question:
          "The key that creates space between words is the __________ key.",
        options: ["Delete", "Spacebar", "Caps Lock"],
        answer: "Spacebar",
      },
      {
        question:
          "The key used to write in capital letters is the __________ key.",
        options: ["Shift", "Enter", "Caps Lock"],
        answer: "Caps Lock",
      },
      {
        question:
          "The __________ key is used to delete letters or numbers on the right of the cursor.",
        options: ["Enter", "Shift", "Delete"],
        answer: "Delete",
      },
      {
        question:
          "When the Shift key is pressed with an alphabet key, the letter will appear in __________.",
        options: ["lowercase", "uppercase", "special characters"],
        answer: "uppercase",
      },
      {
        question:
          "The key used to toggle between uppercase and lowercase letters is the __________ key.",
        options: ["Enter", "Shift", "Caps Lock"],
        answer: "Caps Lock",
      },
      {
        question:
          "The longest key on a keyboard, used to create space between words, is the __________ key.",
        options: ["Enter", "Spacebar", "Shift"],
        answer: "Spacebar",
      },
      {
        question:
          "The keys used for typing letters and words are called __________ keys.",
        options: ["Special", "Alphabet", "Number"],
        answer: "Alphabet",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The Caps Lock key is used to write in lowercase letters.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "The Spacebar key is the shortest key on a keyboard.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question:
          "The Enter key is used to move to the next line while typing.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question:
          "The Shift key is used to toggle between uppercase and lowercase letters.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question:
          "The Delete key removes letters or numbers on the left of the cursor.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "There is only one set of number keys on a keyboard.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question:
          "The keys used to type letters, words, and sentences are known as Number keys.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question: "The Spacebar key creates space between words.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
      {
        question:
          "The Special keys on a keyboard are used for general typing purposes.",
        optionA: "True",
        optionB: "False",
        answer: "False",
      },
      {
        question:
          "The Caps Lock key, when activated, displays an indicator on the keyboard.",
        optionA: "True",
        optionB: "False",
        answer: "True",
      },
    ],
  };
}

export var activityData;
