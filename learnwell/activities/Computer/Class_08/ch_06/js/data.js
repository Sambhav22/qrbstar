export const chapter = "Chapter - 6: More on Visual Basic";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which data type in VB stores text values such as names?",
        optionA: "String",
        optionB: "Double",
        optionC: "Date",
        correctAnswer: "String",
      }),
      shuffleOptions({
        question: "Which statement is used in VB to declare a variable?",
        optionA: "LET",
        optionB: "DIM",
        optionC: "VAR",
        correctAnswer: "DIM",
      }),
      shuffleOptions({
        question: "Which operator returns the remainder when two numbers are divided?",
        optionA: "/",
        optionB: "Mod",
        optionC: "\\",
        correctAnswer: "Mod",
      }),
      shuffleOptions({
        question: "Which loop continues running until the given condition becomes false?",
        optionA: "For…Next",
        optionB: "Do While",
        optionC: "While End",
        correctAnswer: "Do While",
      }),
      shuffleOptions({
        question: "Which logical operator returns True only when both conditions are true?",
        optionA: "OR",
        optionB: "AND",
        optionC: "NOT",
        correctAnswer: "AND",
      }),
      shuffleOptions({
        question: "Which data type uses the most storage space in VB?",
        optionA: "Decimal",
        optionB: "Integer",
        optionC: "Decimal (14 bytes)",
        correctAnswer: "Decimal (14 bytes)",
      }),
      shuffleOptions({
        question: "Which symbol is used for integer division in Visual Basic?",
        optionA: "/",
        optionB: "\\",
        optionC: "*",
        correctAnswer: "\\",
      }),
      shuffleOptions({
        question: "Which operator is used to combine conditions in VB?",
        optionA: "Arithmetic",
        optionB: "Logical",
        optionC: "Relational",
        correctAnswer: "Logical",
      }),
      shuffleOptions({
        question: "Which loop uses a counter variable to repeat tasks a fixed number of times?",
        optionA: "Do While",
        optionB: "For…Next",
        optionC: "Select Loop",
        correctAnswer: "For…Next",
      }),
      shuffleOptions({
        question: "Which operator checks whether two values are unequal?",
        optionA: "=",
        optionB: "<>",
        optionC: "AND",
        correctAnswer: "<>",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A Boolean data type stores only ______ values.",
        optionA: "numeric",
        optionB: "True/False",
        optionC: "decimal",
        correctAnswer: "True/False",
      }),
      shuffleOptions({
        question: "The String (variable length) type requires length of string + ______ bytes.",
        optionA: "10",
        optionB: "4",
        optionC: "2",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "A TextBox can hold as many as ______ characters for a single-line entry.",
        optionA: "1500",
        optionB: "2048",
        optionC: "4096",
        correctAnswer: "2048",
      }),
      shuffleOptions({
        question: "The modulus operator (Mod) gives the ______ after division.",
        optionA: "quotient",
        optionB: "remainder",
        optionC: "integer part",
        correctAnswer: "remainder",
      }),
      shuffleOptions({
        question: "A variable name must not start with a ______.",
        optionA: "letter",
        optionB: "symbol",
        optionC: "numeric value",
        correctAnswer: "numeric value",
      }),
      shuffleOptions({
        question: "The Decimal data type requires ______ bytes of storage.",
        optionA: "8",
        optionB: "14",
        optionC: "2",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "The Do While loop continues until the condition becomes ______.",
        optionA: "false",
        optionB: "true",
        optionC: "zero",
        correctAnswer: "false",
      }),
      shuffleOptions({
        question: "To join two text strings in VB, we can use the ______ operator.",
        optionA: "Mod",
        optionB: "+ / &",
        optionC: "\\",
        correctAnswer: "+ / &",
      }),
      shuffleOptions({
        question: "Comparison between values is done using ______ operators.",
        optionA: "relational",
        optionB: "logical",
        optionC: "arithmetic",
        correctAnswer: "relational",
      }),
      shuffleOptions({
        question: "For…Next loop ends when the counter ______ its final value.",
        optionA: "changes",
        optionB: "completes",
        optionC: "resets",
        correctAnswer: "completes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Integer data type occupies 2 bytes of storage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Logical operators help combine more than one condition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Double data type requires 4 bytes of storage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The period (.) is allowed inside variable names.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Do While loop keeps running as long as the condition remains true.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "For…Next loop does not use a counter variable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Relational operators return results in True/False form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The NOT operator returns True when the condition is True.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "29 Mod 6 gives the value 5.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "String data type is used for storing numbers only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
