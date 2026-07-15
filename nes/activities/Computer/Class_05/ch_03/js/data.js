export const chapter = "Chapter - 3: Formatting in Word";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the purpose of formatting in school projects and charts?",
        optionA: "To make the document longer",
        optionB:
          "To draw the reader's attention and emphasize important information",
        optionC: "To change the document's font style",
        correctAnswer:
          "B) To draw the reader's attention and emphasize important information",
      },
      {
        question: "How can you change the font type in Word?",
        optionA: "Go to the Insert tab",
        optionB:
          "Click the drop-down arrow next to the Font box on the Home tab",
        optionC: "Access the Font Color drop-down arrow",
        correctAnswer:
          "B) Click the drop-down arrow next to the Font box on the Home tab",
      },
      {
        question: "Which default font is set for each new document in Word?",
        optionA: "Times New Roman",
        optionB: "Arial",
        optionC: "Calibri",
        correctAnswer: "C) Calibri",
      },
      {
        question:
          "What can you use to make text darker than the rest of the text in Word?",
        optionA: "Strikethrough",
        optionB: "Bold",
        optionC: "Italic",
        correctAnswer: "B) Bold",
      },
      {
        question: "What is the purpose of subscript and superscript in Word?",
        optionA: "To highlight important text",
        optionB: "To make text slanting to the right side",
        optionC: "To set text slightly below or above the normal line of type",
        correctAnswer:
          "C) To set text slightly below or above the normal line of type",
      },
      {
        question: "How can you quickly change text case in Word?",
        optionA: "Use the Change Case command on the Insert tab",
        optionB: "Retype the text",
        optionC: "Delete the text",
        correctAnswer: "A) Use the Change Case command on the Insert tab",
      },
      {
        question:
          "What was the previous name for the Text Effects command in Word?",
        optionA: "Typography",
        optionB: "WordArt",
        optionC: "Font Style",
        correctAnswer: "B) WordArt",
      },
      {
        question: "How do you highlight text in Word?",
        optionA: "Click on the Text Effects command",
        optionB: "Use the Text Highlight Color drop-down arrow on the Home tab",
        optionC: "Apply Bold, Italic, or Underline",
        correctAnswer:
          "B) Use the Text Highlight Color drop-down arrow on the Home tab",
      },
      {
        question: "What does the Align Center option do in Word?",
        optionA: "Aligns text to the left margin",
        optionB: "Aligns text in the center of the left and right margins",
        optionC: "Aligns text to the right margin",
        correctAnswer:
          "B) Aligns text in the center of the left and right margins",
      },
      {
        question:
          "Which option is used to align selected text equally to the left and right margins in Word?",
        optionA: "Align Left",
        optionB: "Align Right",
        optionC: "Align Justify",
        correctAnswer: "C) Align Justify",
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
          "In Word, the default font for each new document is set to _______.",
        options: {
          A: "Arial",
          B: "Times New Roman",
          C: "Calibri",
        correctAnswer: "C",
      },
      {
        question:
          "To change the font type in Word, you need to click on the drop-down arrow next to the _______ box on the Home tab.",
        options: {
          A: "Format",
          B: "Font Size",
          C: "Font",
        correctAnswer: "C",
      },
      {
        question:
          "The purpose of subscript and superscript is to set the text slightly below or above the _______.",
        options: {
          A: "Normal line of type",
          B: "Bold line",
          C: "Italic line",
        correctAnswer: "A",
      },
      {
        question:
          "The Align Center option in Word is used to align text in the _______ of the left and right margins.",
        options: {
          A: "Left",
          B: "Center",
          C: "Right",
        correctAnswer: "B",
      },
      {
        question:
          "To change the text case in Word, you can use the Change Case command on the _______ tab.",
        options: {
          A: "Format",
          B: "Home",
          C: "Insert",
        correctAnswer: "B",
      },
      {
        question:
          "The main reason for the occurrence of tides in the sea is _______ and _______.",
        options: {
          A: "Atmospheric pressure changes; Wind patterns",
          B: "Wind patterns; Sea breezes",
          C: "Sea breezes; Land breezes",
        correctAnswer: "C",
      },
      {
        question:
          "_______ is a useful tool for marking important text in your document.",
        options: {
          A: "Bold",
          B: "Highlighting",
          C: "Italic",
        correctAnswer: "B",
      },
      {
        question:
          "To apply text effects in Word, you need to click on the Text Effects and Typography command on the _______ tab.",
        options: {
          A: "Insert",
          B: "Format",
          C: "Home",
        correctAnswer: "C",
      },
      {
        question:
          "_______ refers to the positioning of text on a page in Word.",
        options: {
          A: "Formatting",
          B: "Alignment",
          C: "Highlighting",
        correctAnswer: "B",
      },
      {
        question:
          "The Text Highlight Color drop-down arrow on the Home tab is used to select the desired _______ for highlighting text.",
        options: {
          A: "Font",
          B: "Style",
          C: "Color",
        correctAnswer: "C",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "In Word, the default font for each new document is set to Arial.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "To change the font type in Word, you need to click on the drop-down arrow next to the Format box on the Home tab.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The purpose of subscript and superscript is to set the text slightly below or above the Bold line.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The Align Center option in Word is used to align text in the Center of the left and right margins.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "To change the text case in Word, you can use the Change Case command on the Home tab.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "The main reason for the occurrence of tides in the sea is Atmospheric pressure changes and Wind patterns.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Highlighting is a useful tool for marking unimportant text in your document.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "To apply text effects in Word, you need to click on the Text Effects and Typography command on the Insert tab.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Alignment refers to the positioning of text on a page in Word.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "The Text Highlight Color drop-down arrow on the Home tab is used to select the desired Font for highlighting text.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
    ],
  };
}

export var activityData;
