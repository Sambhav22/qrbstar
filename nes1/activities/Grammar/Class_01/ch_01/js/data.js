export const chapter = "Chapter - 1: Alphabet";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "How many letters are there in the English alphabet?",
            options: ["24", "26", "28"],
            answer: "26",
          },
          {
            question:
              "How many letters are in the sequence of capital letters?",
            options: ["24", "25", "26"],
            answer: "26",
          },
          {
            question: "How many small letters are in the sequence?",
            options: ["25", "26", "27"],
            answer: "26",
          },
          {
            question: "Which letter is missing in the capital letter sequence?",
            options: ["Y", "U", "V"],
            answer: "Y",
          },
          {
            question:
              "How many times is the letter 'E' repeated in the capital sequence?",
            options: ["0", "1", "2"],
            answer: "1",
          },
          {
            question: "How many vowels are there in the small letter sequence?",
            options: ["4", "5", "6"],
            answer: "5",
          },
          {
            question:
              "Which letter is the 15th in the capital letter sequence?",
            options: ["O", "P", "N"],
            answer: "O",
          },
          {
            question: "What is the 10th letter in the small letter sequence?",
            options: ["j", "i", "k"],
            answer: "j",
          },
          {
            question:
              "Which letter immediately follows 'X' in the capital sequence?",
            options: ["Y", "Z", "W"],
            answer: "Z",
          },
          {
            question: "What is the 4th letter in the small letter sequence?",
            options: ["d", "c", "e"],
            answer: "c",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question: "The English alphabet consists of ____ letters.",
            options: ["24", "26", "28"],
            answer: "26",
          },
          {
            question:
              "In the sequence of capital letters, there are ____ letters.",
            options: ["24", "25", "26"],
            answer: "26",
          },
          {
            question: "The sequence of small letters contains ____ letters.",
            options: ["25", "26", "27"],
            answer: "26",
          },
          {
            question:
              "The missing letter in the capital letter sequence is ____.",
            options: ["Y", "U", "V"],
            answer: "Y",
          },
          {
            question:
              "The letter 'E' appears ____ time(s) in the capital sequence.",
            options: ["0", "1", "2"],
            answer: "1",
          },
          {
            question: "The small letter sequence consists of ____ vowels.",
            options: ["4", "5", "6"],
            answer: "5",
          },
          {
            question: "The 15th letter in the capital letter sequence is ____.",
            options: ["O", "P", "N"],
            answer: "O",
          },
          {
            question: "The 10th letter in the small letter sequence is ____.",
            options: ["j", "i", "k"],
            answer: "j",
          },
          {
            question:
              "Immediately following 'X' in the capital sequence is the letter ____.",
            options: ["Y", "Z", "W"],
            answer: "Z",
          },
          {
            question: "The 4th letter in the small letter sequence is ____.",
            options: ["d", "c", "e"],
            answer: "c",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "The English alphabet has 25 letters.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Both capital and small letters can be used to represent the English alphabet.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The letter 'Y' is missing from the sequence of capital letters.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The sequence of small letters contains 27 letters.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The letter 'E' appears twice in the sequence of capital letters.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The 10th letter in the capital letter sequence is 'J'.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The small letter sequence contains six vowels.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The 15th letter in the small letter sequence is 'O'.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The letter 'Z' immediately follows 'X' in the capital letter sequence.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The 4th letter in the small letter sequence is 'C'.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
