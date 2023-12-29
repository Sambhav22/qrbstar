export const chapter = "Chapter - 8: Introduction to Python";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What purpose(s) can Python be used for?",
          optionA: "Developing games only",
          optionB: "Developing games, websites, GUI, and web applications",
          optionC: "Developing websites and GUI only",
          correctAnswer:
            "Developing games, websites, GUI, and web applications",
        },
        {
          question: "What makes Python an easy-to-learn language?",
          optionA: "Its complexity similar to other programming languages",
          optionB: "Its code similarity to English language",
          optionC: "Its requirement for specifying variable types",
          correctAnswer: "Its code similarity to English language",
        },
        {
          question: "What is one feature of Python regarding variable typing?",
          optionA: "Variables must be specified as int., str., or float.",
          optionB: "Variable typing is optional.",
          optionC: "Python doesn’t support variables.",
          correctAnswer: "Variable typing is optional.",
        },
        {
          question:
            "Which mode provides immediate output for each command in Python?",
          optionA: "Script Mode",
          optionB: "Both Interactive Mode and Script Mode",
          optionC: "Interactive Mode",
          correctAnswer: "Interactive Mode",
        },
        {
          question: "What is a key characteristic of Python's comments?",
          optionA: "They are executed by the interpreter.",
          optionB:
            "They start with a hash symbol (#) and are ignored by the interpreter.",
          optionC: "They can't be multiline.",
          correctAnswer:
            "They start with a hash symbol (#) and are ignored by the interpreter.",
        },
        {
          question: "How are blocks of code marked in Python?",
          optionA: "Using parentheses ()",
          optionB: "Utilizing indentation",
          optionC: "Using brackets []",
          correctAnswer: "Utilizing indentation",
        },
        {
          question:
            "Which of the following is a correct rule for creating variables in Python?",
          optionA: "Variables can start with a number.",
          optionB: "Variable names are case-insensitive.",
          optionC: "Variable names cannot start with a number.",
          correctAnswer: "Variable names cannot start with a number.",
        },
        {
          question: "What are the four types of data mentioned in Python?",
          optionA: "Literal, integer, float, and complex",
          optionB: "Strings, integers, floats, and arrays",
          optionC: "Booleans, characters, doubles, and longs",
          correctAnswer: "Literal, integer, float, and complex",
        },
        {
          question: "What is the purpose of operators in Python?",
          optionA: "They define data types.",
          optionB: "They perform operations on variables and values.",
          optionC: "They control loops and iterations.",
          correctAnswer: "They perform operations on variables and values.",
        },
        {
          question:
            "What function helps identify the data type of a variable in Python?",
          optionA: "print()",
          optionB: "len()",
          optionC: "type()",
          correctAnswer: "type()",
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
            "Python can be used for developing games, websites, Graphic User Interface (GUI), and ____________ applications.",
          optionA: "Mobile",
          optionB: "Web",
          optionC: "Database",
          correctAnswer: "Web",
        },
        {
          question:
            "Python is a free and open-source language that can be downloaded from any operating system ____________ cost.",
          optionA: "At",
          optionB: "For",
          optionC: "Without",
          correctAnswer: "At",
        },
        {
          question:
            "Python is an ____________ language, allowing easy interpretation in other software's compilers like C+ and C++.",
          optionA: "Interpreted",
          optionB: "Executable",
          optionC: "Assembled",
          correctAnswer: "Interpreted",
        },
        {
          question:
            "The type of a variable in Python is not required to be ____________ upon declaration.",
          optionA: "Defined",
          optionB: "Specified",
          optionC: "Declared",
          correctAnswer: "Specified",
        },
        {
          question:
            "The Python Setup window appears after clicking the ____________ button during the installation process.",
          optionA: "Download",
          optionB: "Install now",
          optionC: "Run",
          correctAnswer: "Run",
        },
        {
          question:
            "In interactive mode, the Python command line shell provides immediate output for each ____________ entered.",
          optionA: "Program",
          optionB: "Command",
          optionC: "Function",
          correctAnswer: "Command",
        },
        {
          question:
            "____________ is used to separate codes into useful blocks and make them more readable and reusable.",
          optionA: "Indentation",
          optionB: "Comments",
          optionC: "Functions",
          correctAnswer: "Functions",
        },
        {
          question:
            "Blocks of code in Python are marked by utilizing ____________.",
          optionA: "Parentheses",
          optionB: "Brackets",
          optionC: "Indentation",
          correctAnswer: "Indentation",
        },
        {
          question:
            "Variables in Python are like containers where ____________ can be stored and changed later.",
          optionA: "Expressions",
          optionB: "Functions",
          optionC: "Values",
          correctAnswer: "Values",
        },
        {
          question:
            "Python allows the identification of the data type of a variable using the ____________ function.",
          optionA: "print()",
          optionB: "len()",
          optionC: "type()",
          correctAnswer: "type()",
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
            "Python is primarily used for developing games and not suitable for web applications.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Python is a paid programming language.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Python, variable types need to be explicitly defined during declaration.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Python Setup window appears immediately after downloading Python.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Python's comments are executed by the interpreter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Blocks of code in Python are marked by parentheses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Variable names in Python are case-insensitive.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Python supports only one data type for variables.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Python's 'type()' function helps in identifying the data type of a variable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Indentation is not crucial for defining blocks of code in Python.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
