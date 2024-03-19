export const chapter = "Chapter - 6: Languages of Computer ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Which language was developed to cater to the needs of the business world, handling tasks like accounts and payroll?",
        optionA: "COBOL",
        optionB: "FORTRAN",
        optionC: "PASCAL",
        correctAnswer: "COBOL",
      },
      {
        question:
          "Which programming language is designed for teaching logical analysis to children through turtle graphics?",
        optionA: "FORTRAN",
        optionB: "LOGO",
        optionC: "PASCAL",
        correctAnswer: "LOGO",
      },
      {
        question:
          "What is the primary advantage of high-level languages over low-level languages?",
        optionA: "Direct machine understanding",
        optionB: "Machine independence",
        optionC: "Faster execution",
        correctAnswer: "Machine independence",
      },
      {
        question:
          "Which language is a fully object-oriented language and the first component-oriented language?",
        optionA: "Visual Basic",
        optionB: "C#",
        optionC: "Visual C++",
        correctAnswer: "C#",
      },
      {
        question:
          "What type of language does the computer directly understand and execute?",
        optionA: "High-level language",
        optionB: "Machine language",
        optionC: "Assembly language",
        correctAnswer: "Machine language",
      },
      {
        question:
          "Which language uses mnemonic codes and symbolic addresses and is machine dependent?",
        optionA: "High-level language",
        optionB: "Machine language",
        optionC: "Assembly language",
        correctAnswer: "Assembly language",
      },
      {
        question:
          "What does a compiler do in the context of programming languages?",
        optionA: "Converts high-level language to machine language",
        optionB: "Converts assembly language to machine language",
        optionC: "Converts machine language to assembly language",
        correctAnswer: "Converts high-level language to machine language",
      },
      {
        question:
          "Which language was designed primarily for developing system software?",
        optionA: "JAVA",
        optionB: "Visual Basic",
        optionC: "C",
        correctAnswer: "C",
      },
      {
        question:
          "Which language is named after the French mathematician who made an adding machine?",
        optionA: "COBOL",
        optionB: "PASCAL",
        optionC: "LOGO",
        correctAnswer: "PASCAL",
      },
      {
        question: "What is the main disadvantage of machine language?",
        optionA: "Limited access",
        optionB: "Difficulty in finding errors",
        optionC: "Requires a translator",
        correctAnswer: "Difficulty in finding errors",
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
          "High-level languages use simple English language words that are converted into machine language by a ________ or an interpreter.",
        options: ["translator", "compiler", "debugger"],
        correctAnswer: "compiler",
      },
      {
        question:
          "BASIC stands for Beginners' All-Purpose Symbolic Instruction Code, developed by John Kemeny and Thomas Kurtz in the early ________.",
        options: ["1950s", "1960s", "1970s"],
        correctAnswer: "1960s",
      },
      {
        question:
          "COBOL stands for Common Business Oriented Language, mainly used for tasks related to developing and processing accounts, payrolls, and ________.",
        options: [
          "inventory management",
          "marketing strategies",
          "customer relations",
        ],
        correctAnswer: "inventory management",
      },
      {
        question:
          "Pascal is a structured programming language named after the French mathematician Blaise Pascal, originally developed by ________.",
        options: ["John Backus", "Niklaus Wirth", "James Gosling"],
        correctAnswer: "Niklaus Wirth",
      },
      {
        question:
          "C++ is an object-oriented language developed by Bjarne Stroustrup in 1983 at AT&T Bell Labs to enhance the workability of the ________ language.",
        options: ["Python", "Java", "C"],
        correctAnswer: "C",
      },
      {
        question:
          "Visual Basic, designed and developed by Microsoft, provides various tools for creating the visual environment for ________.",
        options: ["Mac OS", "Linux", "Windows"],
        correctAnswer: "Windows",
      },
      {
        question:
          "Java, introduced in 1995 by Sun Microsystems, was developed by ________.",
        options: ["John Kemeny", "Thomas Kurtz", "James Gosling"],
        correctAnswer: "James Gosling",
      },
      {
        question:
          "Machine language uses combinations of ________ where 0 represents OFF and 1 represents ON.",
        options: ["0s and 2s", "1s and 3s", "0s and 1s"],
        correctAnswer: "0s and 1s",
      },
      {
        question:
          "Assembly language programs were written in modules and put together for the final run, using different software provided by computer manufacturers to convert it into ________.",
        options: [
          "machine language",
          "high-level language",
          "low-level language",
        ],
        correctAnswer: "machine language",
      },
      {
        question:
          "Compiler and ________ are required to convert high-level and assembly language instructions into machine language.",
        options: ["Interpreter", "Debugger", "Assembler"],
        correctAnswer: "Assembler",
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
          "Computer programs written in high-level languages are directly understood and executed by the computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Assembly language is machine dependent and uses mnemonic codes and symbolic addresses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Visual Basic was designed primarily for creating computer applications for the Linux operating system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Java is an object-oriented programming language that was introduced in the late 1990s.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Machine language uses simple English language words that are easily convertible into machine code.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Python is primarily used for scientific computing and mathematical operations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Compiler and Assembler are required to convert high-level and assembly language instructions into machine language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "FORTRAN was primarily developed to cater to the requirements of the business world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "COBOL stands for Common Business Oriented Language, used mainly for developing and processing accounts and payrolls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "C++ is an object-oriented language that emerged before the creation of the C programming language.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
