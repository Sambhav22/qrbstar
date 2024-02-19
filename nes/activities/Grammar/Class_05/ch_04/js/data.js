export const chapter = "Chapter - 4: Nouns: Number";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              'What does the term "Number" refer to in the context of nouns?',
            options: [
              "The quantity of nouns",
              "The distinction between singular and plural nouns",
              "The size of nouns",
            ],
            answer: "The distinction between singular and plural nouns",
          },
          {
            question: "How is the Singular Number defined?",
            options: [
              "Denotes a specific size or quantity",
              "Denotes one person or thing",
              "Denotes a group of people or things",
            ],
            answer: "Denotes one person or thing",
          },
          {
            question:
              "In which way are most Singular Nouns turned into Plural?",
            options: [
              "By changing vowels",
              'By adding "es" to them',
              "By removing the last letter",
            ],
            answer: 'By adding "es" to them',
          },
          {
            question:
              'What is the rule for changing Singular Nouns ending in "y" preceded by a consonant into Plural?',
            options: ['Add "s"', 'Replace "y" by "ies"', 'Add only "s"'],
            answer: 'Replace "y" by "ies"',
          },
          {
            question:
              'How are Singular Nouns ending in "f" or "fe" transformed into Plural?',
            options: [
              'By adding "s"',
              'By replacing "f" or "fe" by "ves"',
              "By doubling the last letter",
            ],
            answer: 'By replacing "f" or "fe" by "ves"',
          },
          {
            question:
              "When are some Singular Nouns turned into Plural by a change of inside vowels?",
            options: [
              'When they end in "o"',
              'When they end in "y"',
              "When they have inside vowels that change",
            ],
            answer: "When they have inside vowels that change",
          },
          {
            question:
              'What is the usage of nouns in sentences like "Your advice is good"?',
            options: [
              "Always used with plural verbs",
              "Always used with singular verbs",
              "Can be used with both singular and plural verbs",
            ],
            answer: "Always used with singular verbs",
          },
          {
            question:
              "Which of the following sentences demonstrates the usage of a Plural Verb with Plural Nouns?",
            options: [
              '"This mischief has caused me much harm."',
              '"His trousers are torn."',
              '"Five-rupee note is being replaced by the coin."',
            ],
            answer: '"His trousers are torn."',
          },
          {
            question:
              "When do some nouns, like the names of countries or books, take a Singular Verb despite being plural in form?",
            options: [
              "When they are mentioned collectively",
              'When they end in "s"',
              "When they have more than one syllable",
            ],
            answer: "When they are mentioned collectively",
          },
          {
            question:
              'What is the correct usage for the name "Harry Potter and the Chamber of Secrets" in a sentence?',
            options: [
              '"Harry Potter and the Chamber of Secrets were written by J.K. Rowling."',
              '"Harry Potter and the Chamber of Secrets is written by J.K. Rowling."',
              '"Harry Potter and the Chamber of Secrets was written by J.K. Rowling."',
            ],
            answer:
              '"Harry Potter and the Chamber of Secrets was written by J.K. Rowling."',
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
        fillInTheBlankQuestions: [
          {
            question:
              "Number is the distinction between nouns expressing _______ or more than one thing.",
            options: ["shape", "color", "one thing"],
            answer: "one thing",
          },
          {
            question:
              "A Singular Noun can be changed into Plural by simply adding ___ to them.",
            options: ["ing", "es", "ly"],
            answer: "s",
          },
          {
            question:
              "Some Singular Nouns end in o, s, sh, ch, x, or z. They are changed into Plural by adding ___ to them.",
            options: ["ves", "ly", "ing"],
            answer: "es",
          },
          {
            question:
              "Singular Nouns ending in y preceded by a Consonant are changed into Plural by replacing y by ___ in them.",
            options: ["ies", "s", "ves"],
            answer: "ies",
          },
          {
            question:
              "Singular Nouns ending in f or fe are turned into Plural by replacing f or fe by ___.",
            options: ["es", "s", "ves"],
            answer: "ves",
          },
          {
            question:
              "Some Singular Nouns are turned into Plural by a change of inside ___",
            options: ["vowels", "consonants", "syllables"],
            answer: "vowels",
          },
          {
            question:
              "Some Nouns do not follow any of the above rules. We have to keep in mind their Singular and Plural ___",
            options: ["colors", "shapes", "forms"],
            answer: "forms",
          },
          {
            question:
              "Some Nouns are always used with Singular Verbs. They may be Singular or Plural in ___",
            options: ["size", "form", "shape"],
            answer: "form",
          },
          {
            question: "Some Nouns when used collectively take a Singular ___",
            options: ["Verb", "Adjective", "Adverb"],
            answer: "Verb",
          },
          {
            question:
              "Name of some countries, newspapers, and books are Plural in form but they take Singular ___",
            options: ["Adjectives", "Verbs", "Adverbs"],
            answer: "Verbs",
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
        trueOrFalseQuestions: [
          {
            question:
              "Nouns expressing one thing or more than one thing are distinguished by their number.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Singular Nouns ending in 'y' preceded by a vowel are transformed into Plural by adding only 's'.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Most Singular Nouns are turned into Plural by adding 'es' to them.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Singular Nouns ending in 'o', 's', 'sh', 'ch', 'x', or 'z' are changed into Plural by adding 'ves' to them.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The formula bar in Excel is primarily used to change the color of cells.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Nouns ending in 'f' or 'fe' are turned into Plural by replacing 'f' or 'fe' with 'es'.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Some Nouns do not follow the rules for changing from Singular to Plural forms.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The default name of the first worksheet in a new Excel workbook is 'Excel Sheet'.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The names of some countries, newspapers, and books are Plural in form and take Plural Verbs.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The key combination to cut cell content in Excel is 'Ctrl + X'.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
