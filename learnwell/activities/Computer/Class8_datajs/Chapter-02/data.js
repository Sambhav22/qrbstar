export const chapter = "Chapter - 2: Conversion of Number System";
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
        question: "Who introduced the concept of zero, making number systems possible?",
        optionA: "Aryabhatta",
        optionB: "Newton",
        optionC: "Pascal",
        correctAnswer: "Aryabhatta",
      }),
      shuffleOptions({
        question: "Which number system is called the base-2 system?",
        optionA: "Decimal",
        optionB: "Binary",
        optionC: "Octal",
        correctAnswer: "Binary",
      }),
      shuffleOptions({
        question: "Which of the following is the base of the hexadecimal system?",
        optionA: "8",
        optionB: "10",
        optionC: "16",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "In binary arithmetic, what is the sum of 1 + 1 ?",
        optionA: "1",
        optionB: "10",
        optionC: "0",
        correctAnswer: "10",
      }),
      shuffleOptions({
        question: "Which number system uses the digits 0 to 7 only?",
        optionA: "Octal",
        optionB: "Binary",
        optionC: "Decimal",
        correctAnswer: "Octal",
      }),
      shuffleOptions({
        question: "Which alphabet is used in hexadecimal to represent decimal 14?",
        optionA: "C",
        optionB: "D",
        optionC: "E",
        correctAnswer: "E",
      }),
      shuffleOptions({
        question: "Each octal digit can be written as a group of how many binary digits?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "Which code is used for converting octal digits into binary form?",
        optionA: "421 code",
        optionB: "8421 code",
        optionC: "521 code",
        correctAnswer: "421 code",
      }),
      shuffleOptions({
        question: "When converting decimal 78 to hexadecimal, the result is ___.",
        optionA: "4E",
        optionB: "48",
        optionC: "3E",
        correctAnswer: "4E",
      }),
      shuffleOptions({
        question: "What is the hexadecimal equivalent of binary 1101111010 ?",
        optionA: "37A",
        optionB: "38A",
        optionC: "27A",
        correctAnswer: "37A",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Binary number system has a base of ___.",
        optionA: "2",
        optionB: "4",
        optionC: "8",
        correctAnswer: "2",
      }),
      shuffleOptions({
        question: "Octal number system has a base of ___.",
        optionA: "16",
        optionB: "8",
        optionC: "10",
        correctAnswer: "8",
      }),
      shuffleOptions({
        question: "Each hexadecimal digit equals ___ binary bits.",
        optionA: "3",
        optionB: "4",
        optionC: "8",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "The octal number 362₈ equals ___ in decimal.",
        optionA: "242",
        optionB: "243",
        optionC: "244",
        correctAnswer: "242",
      }),
      shuffleOptions({
        question: "The binary number (1011000)₂ equals ___ in decimal.",
        optionA: "92",
        optionB: "94",
        optionC: "88",
        correctAnswer: "92",
      }),
      shuffleOptions({
        question: "The hexadecimal number (6B1)₁₆ equals ___ in decimal.",
        optionA: "1713",
        optionB: "1723",
        optionC: "1731",
        correctAnswer: "1713",
      }),
      shuffleOptions({
        question: "Binary numbers are made up of only ___ and ___.",
        optionA: "1 and 2",
        optionB: "0 and 1",
        optionC: "8 and 9",
        correctAnswer: "0 and 1",
      }),
      shuffleOptions({
        question: "In binary-to-octal conversion, groups of ___ bits are formed from right to left.",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "3",
      }),
      shuffleOptions({
        question: "In hexadecimal-to-binary conversion, groups of ___ bits are formed.",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "The weighted code used in hexadecimal conversion is ___.",
        optionA: "8421 code",
        optionB: "421 code",
        optionC: "124 code",
        correctAnswer: "8421 code",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Binary system is used internally by computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Decimal system is based on eight digits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Octal and binary number systems are closely related.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In hexadecimal, the letter A represents decimal 11.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Binary numbers can represent fractional values.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The hexadecimal number (4A)₁₆ equals 01001010 in binary.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The process of changing one base to another is called number system conversion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Each octal digit is equivalent to 4 binary bits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "(11010)₂ = (26)₁₀ is a correct conversion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The base of hexadecimal number system is 12.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
