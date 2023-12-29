export const chapter = "Chapter - 7: Maths in MSWLogo";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the purpose of the PRINT command in MSWLogo?",
        optionA: "To draw shapes on the Graphic screen",
        optionB:
          "To display the result of arithmetic calculations in the Commander window",
        optionC: "To execute logical operations",
        correctAnswer:
          "To display the result of arithmetic calculations in the Commander window",
      },
      {
        question:
          "Which command is used to display the result of arithmetic calculations on the Graphic screen in MSWLogo?",
        optionA: "PRINT",
        optionB: "LABEL",
        optionC: "SUM",
        correctAnswer: "LABEL",
      },
      {
        question:
          "How do you print the difference of two numbers, for example, 17 and 8, using the PRINT command?",
        optionA: "PRINT 17 - 8",
        optionB: "PRINT (DIFFERENCE 17 8)",
        optionC: "PRINT 17 DIFFERENCE 8",
        correctAnswer: "PRINT 17 - 8",
      },
      {
        question: "What is the purpose of the QUOTIENT command in MSWLogo?",
        optionA: "To find the product of two numbers",
        optionB: "To calculate the remainder of a division",
        optionC: "To find the quotient of two numbers",
        correctAnswer: "To find the quotient of two numbers",
      },
      {
        question:
          "In MSWLogo, when using the operator command REMAINDER, what does it display in the Commander window?",
        optionA: "Quotient",
        optionB: "Product",
        optionC: "Remainder",
        correctAnswer: "Remainder",
      },
      {
        question:
          "How would you express the command 'PRINT2*4+5-6' in a way that MSWLogo would understand?",
        optionA: "PRINT (2*4+5-6)",
        optionB: "PRINT (2*4) + 5 - 6",
        optionC: "PRINT 2*4+5-6",
        correctAnswer: "PRINT 2*4+5-6",
      },
      {
        question:
          "What category do the Greater than (>), Smaller than (<), and Equals to (=) signs fall under in MSWLogo?",
        optionA: "Arithmetic operations",
        optionB: "Logical operations",
        optionC: "Drawing operations",
        correctAnswer: "Logical operations",
      },
      {
        question:
          "How does MSWLogo represent the result of logical operations?",
        optionA: "True or False",
        optionB: "0 or 1",
        optionC: "Greater or Smaller",
        correctAnswer: "True or False",
      },
      {
        question:
          "Which MSWLogo command is used to move the turtle forward, incorporating arithmetic operators?",
        optionA: "FORWARD (FD) 20 * 30",
        optionB: "BACKWARD (BK) 60 - 30",
        optionC: "FD 12 / 5",
        correctAnswer: "FORWARD (FD) 20 * 30",
      },
      {
        question: "What does the command 'BK 100 / 2' do in MSWLogo?",
        optionA: "Moves the turtle backward 50 steps",
        optionB: "Moves the turtle forward 50 steps",
        optionC: "Displays the quotient of 100 divided by 2",
        correctAnswer: "Moves the turtle backward 50 steps",
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
          "In MSWLogo, the commands PRINT and LABEL are used for performing __________ calculations.",
        options: {
          A: "drawing",
          B: "logical",
          C: "arithmetic",
        },
        correctAnswer: "arithmetic",
      },
      {
        question:
          "To display the result of arithmetic calculations in the Graphic screen, the command used is __________.",
        options: {
          A: "DRAW",
          B: "PRINT",
          C: "DISPLAY",
        },
        correctAnswer: "LABEL",
      },
      {
        question:
          "The PRINT command in MSWLogo is used to show the result of arithmetic calculations in the __________ window.",
        options: {
          A: "Graphic",
          B: "Commander",
          C: "Console",
        },
        correctAnswer: "Commander",
      },
      {
        question:
          "To print the difference of two numbers, the MSWLogo command is PRINT __________.",
        options: {
          A: "17-8",
          B: "(DIFFERENCE 17 8)",
          C: "17 DIFFERENCE 8",
        },
        correctAnswer: "17-8",
      },
      {
        question:
          "The QUOTIENT command in MSWLogo is used to find the __________ of two numbers.",
        options: {
          A: "product",
          B: "remainder",
          C: "quotient",
        },
        correctAnswer: "quotient",
      },
      {
        question:
          "When using the REMAINDER command in MSWLogo, it displays the __________ in the Commander window.",
        options: {
          A: "product",
          B: "remainder",
          C: "quotient",
        },
        correctAnswer: "remainder",
      },
      {
        question:
          "Logical operations in MSWLogo involve the comparison of one value with another, giving results as __________.",
        options: {
          A: "integers",
          B: "true or false",
          C: "floating-point numbers",
        },
        correctAnswer: "true or false",
      },
      {
        question:
          "Arithmetic operators can be used while drawing figures with MSWLogo commands such as FORWARD (FD) and __________ (BK).",
        options: {
          A: "DOWN",
          B: "UP",
          C: "BACKWARD",
        },
        correctAnswer: "BACKWARD",
      },
      {
        question:
          "The primary reason for the destruction of wildlife in the prairies, as mentioned in the text, is __________ and clearing for farming.",
        options: {
          A: "natural disasters",
          B: "game hunting",
          C: "pollution",
        },
        correctAnswer: "game hunting",
      },
      {
        question:
          "The prairies are often referred to as the 'Granaries of the World' due to their surplus __________ production.",
        options: {
          A: "rice",
          B: "wheat",
          C: "coffee",
        },
        correctAnswer: "wheat",
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
          "MSWLogo commands PRINT and LABEL are used for performing logical calculations.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "The LABEL command in MSWLogo displays the result of arithmetic calculations in the Commander window.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "You can use the PRINT command to display arithmetic calculations in the Graphic screen.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "True",
      },
      {
        question:
          "The QUOTIENT command in MSWLogo is used to find the product of two numbers.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "Logical operations in MSWLogo involve the comparison of one value with another, giving results as true or false.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "True",
      },
      {
        question:
          "The REMAINDER command in MSWLogo displays the quotient in the Commander window.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "Arithmetic operators can be used while drawing figures with MSWLogo commands such as FORWARD (FD) and BACKWARD (BK).",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "True",
      },
      {
        question:
          "The primary reason for the destruction of wildlife in the prairies is natural disasters and pollution.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "The prairies are often referred to as the 'Granaries of the World' due to their surplus coffee production.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "False",
      },
      {
        question:
          "The PRINT command in MSWLogo is used to display the result of arithmetic calculations in the Commander window.",
        options: {
          A: "True",
          B: "False",
        },
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
