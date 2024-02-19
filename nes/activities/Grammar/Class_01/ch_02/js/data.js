export const chapter = "Chapter - 2: Sounds of the English Alphabet";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "How many letters are there in the English alphabet?",
            options: ["25", "26", "27"],
            answer: "26",
          },
          {
            question: "How many vowels are there in the English alphabet?",
            options: ["3", "5", "7"],
            answer: "5",
          },
          {
            question: "How many consonants are there in the English alphabet?",
            options: ["18", "21", "24"],
            answer: "21",
          },
          {
            question: "Which of the following is NOT a vowel?",
            options: ["a", "b", "i"],
            answer: "b",
          },
          {
            question:
              "How many consonants follow the letter 'u' in the English alphabet?",
            options: ["11", "14", "20"],
            answer: "11",
          },
          {
            question: "Which letter is a consonant?",
            options: ["e", "o", "d"],
            answer: "d",
          },
          {
            question:
              "How many vowels come after the letter 'g' in the English alphabet?",
            options: ["1", "2", "3"],
            answer: "1",
          },
          {
            question: "Which letter is NOT a consonant?",
            options: ["m", "p", "i"],
            answer: "i",
          },
          {
            question:
              "How many vowels are there between 'j' and 's' in the English alphabet?",
            options: ["2", "3", "4"],
            answer: "3",
          },
          {
            question: "Which of these letters is a vowel?",
            options: ["x", "y", "u"],
            answer: "u",
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
            question: "There are __ letters in the English Alphabet.",
            options: ["24", "25", "26"],
            answer: "26",
          },
          {
            question: "__ letters are Vowels in the English Alphabet.",
            options: ["3", "4", "5"],
            answer: "5",
          },
          {
            question:
              "The remaining __ letters in the English Alphabet are Consonants.",
            options: ["19", "20", "21"],
            answer: "21",
          },
          {
            question: "Vowels in the English Alphabet include: a, e, __, o, u.",
            options: ["b", "i", "f"],
            answer: "i",
          },
          {
            question:
              "Consonants in the English Alphabet include: __, c, d, f, g.",
            options: ["a", "b", "h"],
            answer: "b",
          },
          {
            question: "Among the Vowels, 'o' is one of the __ letters.",
            options: ["first", "middle", "last"],
            answer: "last",
          },
          {
            question: "'g' is among the __ in the Consonants list.",
            options: ["first", "middle", "last"],
            answer: "last",
          },
          {
            question:
              "There are __ Consonants before the letter 'r' in the English Alphabet.",
            options: ["16", "17", "18"],
            answer: "17",
          },
          {
            question:
              "The first Vowel in the English Alphabet is the letter __.",
            options: ["a", "b", "c"],
            answer: "a",
          },
          {
            question:
              "'y' is categorized among the __ in the English Alphabet.",
            options: ["Vowels", "Consonants", "Both"],
            answer: "Consonants",
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
            question: "English Alphabet contains 30 letters.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "There are 6 vowels in the English Alphabet.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "All letters in the English Alphabet are either vowels or consonants.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "'p' is a vowel in the English Alphabet.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The letter 'z' is a consonant in the English Alphabet.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Among the vowels, 'i' comes before 'a' in the English Alphabet.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "'m' is the last consonant in the English Alphabet.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "There are 21 consonants in the English Alphabet.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "'y' is sometimes considered a vowel in the English Alphabet.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Vowels and consonants are distinct categories in the English Alphabet.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
