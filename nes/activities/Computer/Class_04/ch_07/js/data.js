export const chapter = "Chapter - 7: Binary Number System";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the fundamental language that a computer understands for processing data and instructions?",
        optionA: "English",
        optionB: "Binary",
        optionC: "Decimal",
        correctAnswer: "Binary",
      },
      {
        question:
          "What is the base of the decimal number system, and how many digits does it use?",
        optionA: "Base-2, 2 digits",
        optionB: "Base-8, 8 digits",
        optionC: "Base-10, 10 digits",
        correctAnswer: "Base-10, 10 digits",
      },
      {
        question: "How is 101 read in the binary number system?",
        optionA: "One hundred one",
        optionB: "One zero one",
        optionC: "Ten one",
        correctAnswer: "One zero one",
      },
      {
        question: "In binary addition, what is the result of 1 + 1?",
        optionA: "2",
        optionB: "10 (spelled as 0 carry 1)",
        optionC: "11 (spelled as 1 carry 1)",
        correctAnswer: "10 (spelled as 0 carry 1)",
      },
      {
        question: "What does 'bi' mean in the term 'binary number system'?",
        optionA: "Big",
        optionB: "Two",
        optionC: "Binary",
        correctAnswer: "Two",
      },
      {
        question:
          "What does 0 represent in the binary code of a computer system?",
        optionA: "ON",
        optionB: "OFF",
        optionC: "Both ON and OFF",
        correctAnswer: "OFF",
      },
      {
        question:
          "What is the grouping of 8 bits known as in the context of computer memory?",
        optionA: "Binary Set",
        optionB: "Octet",
        optionC: "Byte",
        correctAnswer: "Byte",
      },
      {
        question:
          "What is the essential part of all digital computers and many other digital systems?",
        optionA: "Binary System",
        optionB: "Decimal System",
        optionC: "Binary Arithmetic",
        correctAnswer: "Binary Arithmetic",
      },
      {
        question: "In binary multiplication, what is the result of 1 x 1?",
        optionA: "2",
        optionB: "10",
        optionC: "1",
        correctAnswer: "1",
      },
      {
        question:
          "What is a single binary value 0 or 1 called in computer memory?",
        optionA: "Unit",
        optionB: "Byte",
        optionC: "Bit",
        correctAnswer: "Bit",
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
          "The data used by a computer is stored using the digits __ and __ in the binary number system.",
        optionA: "2, 3",
        optionB: "0, 1",
        optionC: "8, 9",
        correctAnswer: "0, 1",
      },
      {
        question:
          "The base of the decimal number system is __, and it has __ distinct digits.",
        optionA: "2, 5",
        optionB: "10, 8",
        optionC: "16, 16",
        correctAnswer: "10, 8",
      },
      {
        question:
          "The binary number system is characterized by having only __ and __ as its digits.",
        optionA: "0, 2",
        optionB: "1, 3",
        optionC: "0, 1",
        correctAnswer: "0, 1",
      },
      {
        question:
          "Binary multiplication involves following rules similar to decimal multiplication, such as 0 x 0 = __.",
        optionA: "1",
        optionB: "0",
        optionC: "2",
        correctAnswer: "0",
      },
      {
        question: "The grouping of 8 bits is known as a __.",
        optionA: "Octet",
        optionB: "Byte",
        optionC: "Megabyte",
        correctAnswer: "Byte",
      },
      {
        question:
          "Binary arithmetic includes operations like addition, subtraction, multiplication, and __.",
        optionA: "Division",
        optionB: "Exponentiation",
        optionC: "Integration",
        correctAnswer: "Division",
      },
      {
        question: "In binary addition, the sum of 1 + 1 is represented as __.",
        optionA: "2",
        optionB: "10 (spelled as 0 carry 1)",
        optionC: "11 (spelled as 1 carry 1)",
        correctAnswer: "10 (spelled as 0 carry 1)",
      },
      {
        question:
          "The binary code in a computer system uses 0 to represent __ and 1 to represent __.",
        optionA: "ON",
        optionB: "OFF",
        optionC: "TRUE, FALSE",
        correctAnswer: "OFF, ON",
      },
      {
        question: "Each digit of the binary number system is called a __.",
        optionA: "Binary Code",
        optionB: "Binary Digit",
        optionC: "Byte",
        correctAnswer: "Binary Digit",
      },
      {
        question:
          "The term used to measure the size of memory, consisting of a grouping of 8 bits, is __.",
        optionA: "Bit",
        optionB: "Byte",
        optionC: "Octet",
        correctAnswer: "Byte",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "In the binary number system, the digits used are 2 and 3.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The base of the decimal number system is 8.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Binary multiplication follows rules similar to decimal multiplication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A grouping of 8 bits is known as a Megabyte.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Binary arithmetic includes only addition and subtraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "In binary addition, 1 + 1 equals 2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The binary code in a computer system uses 1 to represent ON.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The decimal number system has a base of 10.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Each digit of the binary number system is called a Byte.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Binary digits 0 or 1 occupy one unit space in memory, known as a Bit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
