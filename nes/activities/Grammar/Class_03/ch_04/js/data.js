export const chapter = "Chapter - 4: Nouns: Number";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "How can we change many Singular Nouns into Plural?",
            options: ["A) Adding -es", "B) Adding -ies", "C) Adding -s"],
            answer: "C) Adding -s",
          },
          {
            question:
              'What should we add to Singular Nouns ending in "o, s, sh, ch, x, or z" to change them into Plural?',
            options: ["A) Adding -s", "B) Adding -es", "C) Adding -ies"],
            answer: "B) Adding -es",
          },
          {
            question:
              'How do we change Singular Nouns ending in "y" preceded by a Consonant into Plural?',
            options: [
              "A) Adding -s",
              "B) Adding -es",
              "C) Replacing -y with -ies",
            ],
            answer: "C) Replacing -y with -ies",
          },
          {
            question:
              'What is the rule for changing Singular Nouns ending in "y" preceded by a Vowel into Plural?',
            options: [
              "A) Adding -s",
              "B) Adding -es",
              "C) Replacing -y with -ies",
            ],
            answer: "A) Adding -s",
          },
          {
            question:
              'How are Singular Nouns ending in "f" or "fe" changed into Plural?',
            options: [
              "A) Replacing -f or -fe by -ves",
              "B) Adding -s",
              "C) Adding -ies",
            ],
            answer: "A) Replacing -f or -fe by -ves",
          },
          {
            question:
              'What is the exception for some Nouns ending in "f" or "fe" when forming Plural?',
            options: [
              "A) They take -s",
              "B) They take -ies",
              "C) They take -ves or -s",
            ],
            answer: "C) They take -ves or -s",
          },
          {
            question:
              "Which of the following is NOT a method for changing Singular Nouns into Plural?",
            options: [
              "A) Adding -s",
              "B) Adding -ing",
              "C) Replacing -y with -ies",
            ],
            answer: "B) Adding -ing",
          },
          {
            question:
              "In changing Singular Nouns into Plural, what is the rule for some Nouns with inside Vowel changes?",
            options: [
              "A) Adding -s",
              "B) Changing inside Vowels",
              "C) Adding -ies",
            ],
            answer: "B) Changing inside Vowels",
          },
          {
            question:
              'When changing Singular Nouns ending in "o" into Plural, what do we add?',
            options: ["A) Adding -s", "B) Adding -ies", "C) Adding -es"],
            answer: "C) Adding -es",
          },
          {
            question:
              "Which of the following is a general rule for forming Plural for most Singular Nouns?",
            options: ["A) Adding -s", "B) Adding -ies", "C) Adding -es"],
            answer: "A) Adding -s",
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
            question:
              "A Singular Noun can be changed into Plural by adding __________ to many Singular Nouns.",
            options: ["A) -es", "B) -ies", "C) -s"],
            answer: "C) -s",
          },
          {
            question:
              "To change Singular Nouns ending in __________ into Plural, we can add -es.",
            options: ["A) o", "B) s", "C) sh"],
            answer: "A) o",
          },
          {
            question:
              'In Singular Nouns ending in "y" preceded by a Consonant, we can replace "y" with __________ to change them into Plural.',
            options: ["A) -ies", "B) -s", "C) -es"],
            answer: "A) -ies",
          },
          {
            question:
              'Singular Nouns ending in "y" preceded by a Vowel are changed into Plural by adding __________.',
            options: ["A) -es", "B) -s", "C) -ies"],
            answer: "B) -s",
          },
          {
            question:
              'Singular Nouns ending in "f" or "fe" are changed into Plural by replacing "f" or "fe" by __________.',
            options: ["A) -ves", "B) -s", "C) -ies"],
            answer: "A) -ves",
          },
          {
            question:
              'Some Nouns ending in "f" or "fe" take __________ to form Plural.',
            options: ["A) -s", "B) -ies", "C) -ves"],
            answer: "A) -s",
          },
          {
            question:
              "Singular Nouns are changed into Plural by a change of inside __________.",
            options: ["A) Consonants", "B) Vowels", "C) Prepositions"],
            answer: "B) Vowels",
          },
          {
            question:
              "Adding __________ to Singular Nouns is a general rule for forming Plural for most cases.",
            options: ["A) -es", "B) -ies", "C) -s"],
            answer: "C) -s",
          },
          {
            question:
              'To change Singular Nouns ending in "o" into Plural, we add __________.',
            options: ["A) -ies", "B) -s", "C) -es"],
            answer: "C) -es",
          },
          {
            question:
              "Changing Singular Nouns into Plural involves adding __________ to many Singular Nouns.",
            options: ["A) -s", "B) -ies", "C) -es"],
            answer: "A) -s",
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
            question:
              "Adding -es to Singular Nouns ending in o, s, sh, ch, x, or z is a method to change them into Plural.",
            options: ["A) True", "B) False"],
            answer: "A) True",
          },
          {
            question:
              "Singular Nouns ending in y preceded by a Consonant can be changed into Plural by replacing y with ies.",
            options: ["A) True", "B) False"],
            answer: "A) True",
          },
          {
            question:
              "Singular Nouns ending in y preceded by a Vowel are changed into Plural by adding -s.",
            options: ["A) True", "B) False"],
            answer: "B) False",
          },
          {
            question:
              "Singular Nouns ending in f or fe are always changed into Plural by replacing f or fe with ves.",
            options: ["A) True", "B) False"],
            answer: "B) False",
          },
          {
            question:
              "All Singular Nouns can be changed into Plural by adding -s.",
            options: ["A) True", "B) False"],
            answer: "B) False",
          },
          {
            question:
              "Changing Singular Nouns into Plural involves adding -s or -es to many Singular Nouns.",
            options: ["A) True", "B) False"],
            answer: "A) True",
          },
          {
            question:
              "Adding -ing is a method to change Singular Nouns into Plural.",
            options: ["A) True", "B) False"],
            answer: "B) False",
          },
          {
            question:
              "Inside Vowel changes have no impact on changing Singular Nouns into Plural.",
            options: ["A) True", "B) False"],
            answer: "B) False",
          },
          {
            question:
              "Singular Nouns ending in o are changed into Plural by adding -ies.",
            options: ["A) True", "B) False"],
            answer: "A) True",
          },
          {
            question:
              "Adding -s to Singular Nouns is a general rule for forming Plural for most cases.",
            options: ["A) True", "B) False"],
            answer: "A) True",
          },
        ],
      },
    ],
  };
}

export var activityData;
