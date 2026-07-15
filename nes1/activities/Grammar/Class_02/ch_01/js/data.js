export const chapter = "Chapter - 1: Letters and Words";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "How many letters are there in the English alphabet?",
            options: {
              A: "25",
              B: "26",
              C: "27",
            },
            answer: "B",
          },
          {
            question: "Which of the following are vowels?",
            options: {
              A: "b, c, d, f, g",
              B: "a, e, i, o, u",
              C: "h, j, k, l, m",
            },
            answer: "B",
          },
          {
            question: "How many consonants are there in the English alphabet?",
            options: {
              A: "20",
              B: "21",
              C: "22",
            },
            answer: "B",
          },
          {
            question:
              "Which type of letters can be written in both capital and small forms?",
            options: {
              A: "Consonants",
              B: "Vowels",
              C: "Both Consonants and Vowels",
            },
            answer: "C",
          },
          {
            question: "What is the number of vowels in the English alphabet?",
            options: {
              A: "4",
              B: "5",
              C: "6",
            },
            answer: "B",
          },
          {
            question: "Which letters are consonants in the English alphabet?",
            options: {
              A: "a, e, i, o, u",
              B: "b, c, d, f, g",
              C: "h, i, j, k, l",
            },
            answer: "B",
          },
          {
            question: "How many letters are there in the word 'giraffe'?",
            options: {
              A: "5",
              B: "6",
              C: "7",
            },
            answer: "B",
          },
          {
            question: "What defines a word?",
            options: {
              A: "A group of vowels",
              B: "A group of consonants",
              C: "A group of letters that make complete sense",
            },
            answer: "C",
          },
          {
            question:
              "Which letters are considered as small letters in the English alphabet?",
            options: {
              A: "A, B, C, D, E",
              B: "a, b, c, d, e",
              C: "H, I, J, K, L",
            },
            answer: "B",
          },
          {
            question: "How many vowels are there in the word 'factor'?",
            options: {
              A: "1",
              B: "2",
              C: "3",
            },
            answer: "B",
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
            question: "The English alphabet consists of __________ letters.",
            options: {
              A: "24",
              B: "25",
              C: "26",
            },
            answer: "C",
          },
          {
            question:
              "Vowels are a set of __________ letters in the English alphabet.",
            options: {
              A: "3",
              B: "5",
              C: "7",
            },
            answer: "B",
          },
          {
            question:
              "Consonants make up __________ letters in the English alphabet.",
            options: {
              A: "20",
              B: "21",
              C: "23",
            },
            answer: "B",
          },
          {
            question:
              "A word is a combination of letters that creates __________.",
            options: {
              A: "partial meaning",
              B: "complete sense",
              C: "incomplete phrases",
            },
            answer: "B",
          },
          {
            question:
              "Small letters in the English alphabet can also be termed as __________.",
            options: {
              A: "lowercase",
              B: "uppercase",
              C: "midcase",
            },
            answer: "A",
          },
          {
            question: "There are __________ vowels in the word 'giraffe.'",
            options: {
              A: "1",
              B: "2",
              C: "3",
            },
            answer: "B",
          },
          {
            question:
              "Vowels in the English alphabet are specifically __________, __________, __________, __________, and __________.",
            options: {
              A: "a, e, i, o, u",
              B: "b, c, d, f, g",
              C: "h, j, k, l, m",
            },
            answer: "A",
          },
          {
            question:
              "The total number of __________ in the English alphabet is 26.",
            options: {
              A: "vowels",
              B: "consonants",
              C: "characters",
            },
            answer: "C",
          },
          {
            question:
              "The letters in the English alphabet can be written in either __________ or __________.",
            options: {
              A: "uppercase, lowercase",
              B: "bold, italic",
              C: "underlined, strikethrough",
            },
            answer: "A",
          },
          {
            question: "A word can consist of __________ letters.",
            options: {
              A: "a single",
              B: "multiple",
              C: "at least ten",
            },
            answer: "B",
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
            question: "The English alphabet consists of 25 letters.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Vowels in the English alphabet include the letters: a, e, i, o, u, and y.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Consonants in the English alphabet are a set of 24 letters.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question: "A word can be formed by just a single letter.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question: "The English alphabet only comprises uppercase letters.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "The letter 'y' is considered a vowel in the English alphabet.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "All letters in the English alphabet can be written in both uppercase and lowercase.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question: "The word 'giraffe' contains four vowels.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "A group of letters that doesn’t make any sense can still be considered a word.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question: "The English alphabet consists of 21 consonants.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
        ],
      },
    ],
  };
}

export var activityData;
