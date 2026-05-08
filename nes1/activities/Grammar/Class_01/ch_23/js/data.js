export const chapter = "Chapter - 23: Numbers";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the fourth number in the sequence?",
            options: ["Three", "Four", "Five"],
            answer: "Four",
          },
          {
            question: "Which number comes after six in the sequence?",
            options: ["Six", "Seven", "Eight"],
            answer: "Seven",
          },
          {
            question:
              "What is the numerical representation of the word 'five' in the sequence?",
            options: ["4", "5", "6"],
            answer: "5",
          },
          {
            question: "Which number is positioned before nine?",
            options: ["Eight", "Nine", "Ten"],
            answer: "Eight",
          },
          {
            question: "How many numbers are there in the sequence?",
            options: ["Eight", "Nine", "Ten"],
            answer: "Ten",
          },
          {
            question:
              "What is the sum of the first three numbers in the sequence?",
            options: ["Six", "Seven", "Eight"],
            answer: "Six",
          },
          {
            question: "Which number is in the middle of the sequence?",
            options: ["Five", "Six", "Seven"],
            answer: "Six",
          },
          {
            question: "What is the last number in the sequence?",
            options: ["Nine", "Ten", "Eight"],
            answer: "Ten",
          },
          {
            question: "Which number is two places before four in the sequence?",
            options: ["One", "Two", "Three"],
            answer: "Three",
          },
          {
            question:
              "If you remove the odd-numbered positions from the sequence, what is left?",
            options: [
              "One, three, five, seven, nine",
              "Two, four, six, eight, ten",
              "Three, six, nine",
            ],
            answer: "Two, four, six, eight, ten",
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
            question: "The sequence begins with the number __________.",
            options: ["Zero", "One", "Two"],
            answer: "One",
          },
          {
            question: "The number after 'five' in the sequence is __________.",
            options: ["Six", "Seven", "Eight"],
            answer: "Six",
          },
          {
            question: "'Ten' is the __________ number in the sequence.",
            options: ["Eighth", "Ninth", "Tenth"],
            answer: "Tenth",
          },
          {
            question:
              "The numerical representation of the word 'four' in the sequence is __________.",
            options: ["3", "4", "5"],
            answer: "4",
          },
          {
            question: "The sequence contains a total of __________ numbers.",
            options: ["Eight", "Nine", "Ten"],
            answer: "Ten",
          },
          {
            question:
              "The sum of the first two numbers in the sequence is __________.",
            options: ["Three", "Four", "Five"],
            answer: "Four",
          },
          {
            question: "The number in the middle of the sequence is __________.",
            options: ["Four", "Five", "Six"],
            answer: "Five",
          },
          {
            question: "The last number in the sequence is __________.",
            options: ["Eight", "Nine", "Ten"],
            answer: "Ten",
          },
          {
            question:
              "The number two places before 'seven' in the sequence is __________.",
            options: ["Four", "Five", "Six"],
            answer: "Four",
          },
          {
            question:
              "If you remove the even-numbered positions from the sequence, what is left? __________",
            options: [
              "One, three, five, seven, nine",
              "Two, four, six, eight, ten",
              "Three, six, nine",
            ],
            answer: "One, three, five, seven, nine",
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
            question: "The sequence begins with the number One.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The number after 'five' in the sequence is Eight.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "'Ten' is the Eighth number in the sequence.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The numerical representation of the word 'four' in the sequence is 5.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The sequence contains a total of Nine numbers.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The sum of the first two numbers in the sequence is Five.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The number in the middle of the sequence is Four.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "The last number in the sequence is Nine.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The number two places before 'seven' in the sequence is Six.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "If you remove the even-numbered positions from the sequence, what is left is Two, four, six, eight, ten.",
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
