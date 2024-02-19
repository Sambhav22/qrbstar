export const chapter = "Chapter - 8: More on HTML";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is HTML primarily used for?",
          optionA: "Creating spreadsheets",
          optionB: "Designing documents on the World Wide Web",
          optionC: "Developing mobile applications",
          correctAnswer: "B",
        },
        {
          question: "Which tag is used for creating an ordered list in HTML?",
          optionA: "<UL>",
          optionB: "<OL>",
          optionC: "<DL>",
          correctAnswer: "B",
        },
        {
          question:
            "What attribute in HTML overrides the default numbering of lists when they are divided into multiple parts?",
          optionA: "Border",
          optionB: "Height",
          optionC: "Start",
          correctAnswer: "C",
        },
        {
          question:
            "Which attribute changes the appearance of bullets in an unordered list?",
          optionA: "Type",
          optionB: "Align",
          optionC: "Bgcolor",
          correctAnswer: "A",
        },
        {
          question: "What does the <DL> tag represent in HTML?",
          optionA: "Ordered list",
          optionB: "Definition list",
          optionC: "Unordered list",
          correctAnswer: "B",
        },
        {
          question:
            "Which tag is used to define the column heading in an HTML table?",
          optionA: "<TR>",
          optionB: "<TH>",
          optionC: "<TD>",
          correctAnswer: "B",
        },
        {
          question:
            "What attribute sets the distance between cell contents and cell boundary in an HTML table?",
          optionA: "Cellpadding",
          optionB: "Cellspacing",
          optionC: "Border",
          correctAnswer: "A",
        },
        {
          question: "Which tag is used to display an image in HTML?",
          optionA: "<IMG>",
          optionB: "<MARQUEE>",
          optionC: "<CENTER>",
          correctAnswer: "A",
        },
        {
          question: "What does the <CENTER> tag do in HTML?",
          optionA: "Aligns text to the left",
          optionB: "Aligns text to the right",
          optionC: "Aligns text in the center",
          correctAnswer: "C",
        },
        {
          question: "What does the <MARQUEE> tag do in HTML?",
          optionA: "Displays an animated image",
          optionB: "Displays a moving text",
          optionC: "Aligns text with a border",
          correctAnswer: "B",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "__________ is a programming language used to create documents on the World Wide Web.",
          options: {
            A: "CSS",
            B: "HTML",
            C: "JavaScript",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The tag used for creating an ordered list in HTML is <______>.",
          options: {
            A: "OL",
            B: "UL",
            C: "DL",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The attribute used to override default numbering in ordered lists when divided into multiple parts is __________.",
          options: {
            A: "Start",
            B: "Type",
            C: "Border",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Unordered lists in HTML are represented using the tag <______>.",
          options: {
            A: "OL",
            B: "UL",
            C: "DL",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The attribute that changes the appearance of bullets in an unordered list is _________.",
          options: {
            A: "Bordercolor",
            B: "Type",
            C: "Align",
          },
          correctAnswer: "B",
        },
        {
          question: "The tag used for a definition list in HTML is <______>.",
          options: {
            A: "OL",
            B: "UL",
            C: "DL",
          },
          correctAnswer: "C",
        },
        {
          question:
            "The tag used to define the column heading in an HTML table is <______>.",
          options: {
            A: "TH",
            B: "TR",
            C: "TD",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The attribute that sets the distance between cell contents and cell boundary in an HTML table is ________.",
          options: {
            A: "Cellspacing",
            B: "Cellpadding",
            C: "Border",
          },
          correctAnswer: "B",
        },
        {
          question: "The tag used to display an image in HTML is <______>.",
          options: {
            A: "IMG",
            B: "CENTER",
            C: "MARQUEE",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The tag that aligns text in the center in HTML is <______>.",
          options: {
            A: "CENTER",
            B: "IMG",
            C: "MARQUEE",
          },
          correctAnswer: "A",
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
            "HTML is primarily used for creating documents on the World Wide Web.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The <OL> tag in HTML is used for creating unordered lists.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question: "The <DL> tag represents a definition list in HTML.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The <TH> tag is used to define the column heading in an HTML table.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The cellpadding attribute in HTML sets the distance between two adjacent cells in a table.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question: "The <CENTER> tag in HTML aligns text to the right.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question: "The <IMG> tag is used to display images in HTML.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question: "The <UL> tag represents an ordered list in HTML.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question: "The <MARQUEE> tag in HTML displays a moving text.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The cellspacing attribute in HTML sets the distance between cell contents and cell boundaries in a table.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
      ],
    ],
  };
}

export var activityData;
