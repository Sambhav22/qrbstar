export const chapter = "Chapter - 3: Words";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the primary function of words?",
          options: {
            A: "Writing",
            B: "Reading",
            C: "Speaking",
          },
          answer: "D",
        },
        {
          question: "What does a word comprise?",
          options: {
            A: "Numbers",
            B: "Letters of the Alphabet",
            C: "Punctuation marks",
          },
          answer: "B",
        },
        {
          question:
            "Which of the following is an example of a two-letter word?",
          options: {
            A: "Chair",
            B: "Doll",
            C: "Rat",
          },
          answer: "C",
        },
        {
          question: "How many letters are in the word 'school'?",
          options: {
            A: "Five",
            B: "Six",
            C: "Seven",
          },
          answer: "B",
        },
        {
          question: "What word is formed by combining 't + o + y'?",
          options: {
            A: "Rat",
            B: "Toy",
            C: "Boy",
          },
          answer: "B",
        },
        {
          question: "What word is formed by combining 'c + h + a + i + r'?",
          options: {
            A: "Chair",
            B: "Cat",
            C: "Doll",
          },
          answer: "A",
        },
        {
          question: "How many letters are in the word 'lotus'?",
          options: {
            A: "Four",
            B: "Five",
            C: "Six",
          },
          answer: "C",
        },
        {
          question: "Which word is formed by combining 'd + o + 1 + 1'?",
          options: {
            A: "Rat",
            B: "Boy",
            C: "Doll",
          },
          answer: "C",
        },
        {
          question: "Which word is an example of a compound word?",
          options: {
            A: "Student",
            B: "Football",
            C: "Rose",
          },
          answer: "B",
        },
        {
          question: "What word is formed by combining 'a + do'?",
          options: {
            A: "Cat",
            B: "Rose",
            C: "School",
          },
          answer: "A",
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
          question: "A word is comprised of letters of the ________.",
          options: {
            A: "Numbers",
            B: "Punctuation marks",
            C: "Alphabet",
          },
          answer: "C",
        },
        {
          question: "t + o = ____",
          options: {
            A: "Rat",
            B: "Toy",
            C: "Boy",
          },
          answer: "B",
        },
        {
          question: "d + o + 1 + 1 = ____",
          options: {
            A: "Rat",
            B: "Boy",
            C: "Doll",
          },
          answer: "C",
        },
        {
          question: "c + h + a + i + r = ____",
          options: {
            A: "Chair",
            B: "Cat",
            C: "Doll",
          },
          answer: "A",
        },
        {
          question: "A word can have one, two, or more ________.",
          options: {
            A: "Sentences",
            B: "Letters",
            C: "Paragraphs",
          },
          answer: "B",
        },
        {
          question: "a do cat rose lotus school ________",
          options: {
            A: "Teacher",
            B: "Student",
            C: "Football",
          },
          answer: "B",
        },
        {
          question: "r + a + t = ____",
          options: {
            A: "Rat",
            B: "Toy",
            C: "Boy",
          },
          answer: "A",
        },
        {
          question: "t + o + y = ____",
          options: {
            A: "Rat",
            B: "Toy",
            C: "Boy",
          },
          answer: "B",
        },
        {
          question: "b + o + y = ____",
          options: {
            A: "Rat",
            B: "Toy",
            C: "Boy",
          },
          answer: "C",
        },
        {
          question: "A compound word consists of ________.",
          options: {
            A: "Multiple letters",
            B: "Two or more words",
            C: "Punctuation marks",
          },
          answer: "B",
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
          question: "A word comprises only numbers of the Alphabet.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "B",
        },
        {
          question: "The word 'boy' can be formed by combining 'b + o + y'.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "A",
        },
        {
          question:
            "The word 'doll' cannot be formed by combining 'd + o + 1 + 1'.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "B",
        },
        {
          question: "The word 'chair' consists of more than five letters.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "A",
        },
        {
          question: "The word 'student' has fewer letters than 'football'.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "B",
        },
        {
          question: "The word 'rat' is formed by combining 'r + a + t'.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "A",
        },
        {
          question: "The combination 't + o + y' forms the word 'rat'.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "B",
        },
        {
          question: "The word 'boy' is formed by combining 'b + o + y'.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "A",
        },
        {
          question: "All words consist of multiple letters.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "A",
        },
        {
          question:
            "A compound word involves combining various punctuation marks.",
          options: {
            A: "True",
            B: "False",
          },
          answer: "B",
        },
      ],
    ],
  };
}

export var activityData;
