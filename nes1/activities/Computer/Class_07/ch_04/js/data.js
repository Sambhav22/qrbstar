export const chapter = "Chapter - 4: Foemulae And Functions In Excel";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What must all formulae in Excel begin with?",
          optionA: "An asterisk",
          optionB: "An equals sign",
          optionC: "A forward slash",
          correctAnswer: "b) An equals sign",
        },
        {
          question:
            "Which mathematical operator is used for division in Excel?",
          optionA: "Plus sign (+)",
          optionB: "Minus sign (-)",
          optionC: "Forward slash (/)",
          correctAnswer: "c) Forward slash (/)",
        },
        {
          question:
            "What is the advantage of using cell references in formulae?",
          optionA: "It slows down the calculation process",
          optionB: "It makes formulae inaccurate",
          optionC: "It allows for updating data without rewriting formulae",
          correctAnswer:
            "c) It allows for updating data without rewriting formulae",
        },
        {
          question:
            "Which function would you use to determine the average of a range of cells?",
          optionA: "SUM",
          optionB: "AVERAGE",
          optionC: "COUNT",
          correctAnswer: "b) AVERAGE",
        },
        {
          question: "What is the purpose of the equals sign in Excel formulae?",
          optionA: "To indicate text entry",
          optionB: "To start a formula",
          optionC: "To end a formula",
          correctAnswer: "b) To start a formula",
        },
        {
          question:
            "Which method can save time and effort when creating formulae by avoiding manual input of cell addresses?",
          optionA: "Point and click method",
          optionB: "Typing all cell addresses manually",
          optionC: "Using a calculator",
          correctAnswer: "a) Point and click method",
        },
        {
          question: "What is the role of the fill handle in Excel?",
          optionA: "It formats cells in bold",
          optionB: "It copies formulae to adjacent cells",
          optionC: "It calculates complex functions automatically",
          correctAnswer: "b) It copies formulae to adjacent cells",
        },
        {
          question:
            "Which function would you use to find the highest cell value in a range?",
          optionA: "AVERAGE",
          optionB: "MAX",
          optionC: "COUNT",
          correctAnswer: "b) MAX",
        },
        {
          question: "How do functions differ from formulae in Excel?",
          optionA:
            "Functions are for text manipulation, formulae for calculations",
          optionB:
            "Functions are predefined formulas, formulae are manual inputs",
          optionC: "Functions use letters, formulae use numbers",
          correctAnswer:
            "b) Functions are predefined formulas, formulae are manual inputs",
        },
        {
          question:
            "Where can you find different types of functions categorized in Excel?",
          optionA: "In the File tab",
          optionB: "In the Insert tab",
          optionC: "In the Formulas tab's Function Library",
          correctAnswer: "c) In the Formulas tab's Function Library",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "The formulae in Excel must always begin with an __________.",
          options: ["Asterisk", "Equals sign", "Ampersand"],
          correctAnswer: "Equals sign",
        },
        {
          question:
            "Mathematical operators used for calculations in Excel include addition (+), subtraction (-), multiplication (*), division (/), and __________ for exponents.",
          options: ['Caret ("^")', "Hash (#)", "Percentage (%)"],
          correctAnswer: 'Caret ("^")',
        },
        {
          question:
            "Cell references in Excel allow for creating formulae using __________ to ensure accuracy and flexibility in updating values.",
          options: ["Constant values", "Text strings", "Cell addresses"],
          correctAnswer: "Cell addresses",
        },
        {
          question:
            "The syntax for functions in Excel typically includes the equals sign, function name, and __________.",
          options: ["Curly brackets", "Arguments", "Quotation marks"],
          correctAnswer: "Arguments",
        },
        {
          question:
            "Functions such as SUM, AVERAGE, COUNT, MAX, and MIN can be accessed from the __________ tab in Excel.",
          options: ["Home", "Insert", "Formulas"],
          correctAnswer: "Formulas",
        },
        {
          question:
            "The fill handle in Excel is used to __________ formulae to adjacent cells, saving time and effort.",
          options: ["Format", "Copy", "Delete"],
          correctAnswer: "Copy",
        },
        {
          question:
            "The AutoSum command in Excel helps in automatically inserting common functions like SUM, AVERAGE, COUNT, MIN, and MAX into a formula to perform calculations, accessible from the __________ tab.",
          options: ["Home", "Insert", "Formulas"],
          correctAnswer: "Home",
        },
        {
          question:
            "Arguments in Excel functions can refer to __________ and must be enclosed within parentheses.",
          options: [
            "Cell ranges only",
            "Text entries only",
            "Cell ranges or individual cells",
          ],
          correctAnswer: "Cell ranges or individual cells",
        },
        {
          question:
            "Excel's Function Library, categorized by Financial, Logical, Text, and Date & Time, is accessible from the __________ tab.",
          options: ["File", "Insert", "Formulas"],
          correctAnswer: "Formulas",
        },
        {
          question:
            "The true advantage of using cell references in Excel formulae is the ability to update data without __________ the formulae.",
          options: ["Deleting", "Rewriting", "Copying"],
          correctAnswer: "Rewriting",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Excel always initiates formulae with an equals sign.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The fill handle in Excel is primarily used for cell formatting.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Functions and formulae serve the same purpose in Excel.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Cell references allow for the automatic recalculation of formulae when values in referenced cells change.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The AutoSum command in Excel offers only one predefined function, the SUM function.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Excel's Function Library categorizes functions based on Financial, Logical, Text, and Date & Time categories.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The syntax for functions in Excel includes the equals sign, function name, and one argument enclosed in parentheses.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The fill handle allows for the automatic copying of formulae to adjacent cells in Excel.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Excel allows the creation of formulae without the use of cell references.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Functions in Excel cannot perform calculations using specific values in a particular order.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
