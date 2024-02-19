export const chapter = "Chapter - 4: Noun: Number and Gender";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the term used for a word that connotes more than one?",
          optionA: "Dual Number",
          optionB: "Plural Number",
          optionC: "Multiplicative Number",
          correctAnswer: "B. Plural Number",
        },
        {
          question: "How are most Singular Nouns changed into Plural?",
          optionA: "By adding -es",
          optionB: "By dropping y and replacing it with -ies",
          optionC: "By adding -s",
          correctAnswer: "C. By adding -s",
        },
        {
          question:
            "What is the rule for changing Singular Nouns ending in 'f' or 'fe' into Plural?",
          optionA: "Add -es",
          optionB: "Replace 'f' or 'fe' with -ves",
          optionC: "Add only -s",
          correctAnswer: "B. Replace 'f' or 'fe' with -ves",
        },
        {
          question:
            "How are Singular Nouns ending in 'o' preceded by a consonant changed into Plural?",
          optionA: "By adding -es",
          optionB: "By adding only -s",
          optionC: "By dropping 'o' and adding -es",
          correctAnswer: "A. By adding -es",
        },
        {
          question:
            "Which Singular Nouns can take either 's' or '-es' in their Plural form?",
          optionA: "Nouns ending in 'y' preceded by a vowel",
          optionB: "Nouns ending in 'o' preceded by a consonant",
          optionC: "Nouns ending in 'o'",
          correctAnswer: "C. Nouns ending in 'o'",
        },
        {
          question:
            "What is the term used for Nouns that remain the same in both Singular and Plural forms?",
          optionA: "Unchanging Nouns",
          optionB: "Static Nouns",
          optionC: "Invariable Nouns",
          correctAnswer: "C. Invariable Nouns",
        },
        {
          question: "How are Compound Nouns changed into Plural?",
          optionA: "By adding -s to the first word",
          optionB: "By changing the principal word",
          optionC: "By dropping the last word",
          correctAnswer: "B. By changing the principal word",
        },
        {
          question: "How many types of Gender are mentioned in the text?",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "C. Four",
        },
        {
          question:
            "Which type of Gender denotes a Noun that can be either male or female?",
          optionA: "Masculine Gender",
          optionB: "Feminine Gender",
          optionC: "Common Gender",
          correctAnswer: "C. Common Gender",
        },
        {
          question:
            "How can we transform a Masculine Noun into Feminine by changing the Masculine part in a compound word?",
          optionA: "Add -ess at the end",
          optionB: "Remove the last vowel and add -ess",
          optionC: "Change the Masculine part into Feminine",
          correctAnswer: "C. Change the Masculine part into Feminine",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "The ________ Number refers to a word connoting one, such as a newspaper or knife.",
          options: ["Dual Number", "Singular Number", "Plural Number"],
          correctAnswer: "Singular Number",
        },
        {
          question:
            "Changing Singular Nouns into Plural, most are transformed by adding ________ to them.",
          options: ["-es", "-s", "-ies"],
          correctAnswer: "-s",
        },
        {
          question:
            "Singular Nouns ending in 'y' preceded by a Consonant are changed into Plural by dropping y and replacing it with ________.",
          options: ["-es", "-s", "-ies"],
          correctAnswer: "-es",
        },
        {
          question:
            "The Compound Nouns are changed into Plural by changing the ________ word.",
          options: ["Last", "Principal", "First"],
          correctAnswer: "Principal",
        },
        {
          question:
            "There are ________ types of Gender, including Masculine, Feminine, Common, and Neuter.",
          options: ["Three", "Four", "Five"],
          correctAnswer: "Four",
        },
        {
          question:
            "The Neuter Gender denotes a Noun that is without ________.",
          options: ["Emotion", "Life", "Color"],
          correctAnswer: "Life",
        },
        {
          question:
            "To transform a Masculine Noun into Feminine, we can add ________ at the end.",
          options: ["-s", "-ess", "-ies"],
          correctAnswer: "-ess",
        },
        {
          question:
            "Common Gender denotes Nouns that can be either male or female, such as advisor, ________, and child.",
          options: ["Cow", "Bird", "Cook"],
          correctAnswer: "Cook",
        },
        {
          question:
            "Singular Nouns ending in 'o' preceded by a Consonant are changed into Plural by adding ________ to them.",
          options: ["-es", "-s", "-ies"],
          correctAnswer: "-es",
        },
        {
          question:
            "Personal Adjectives are used in both ________ and Plural forms.",
          options: ["Singular", "Dual", "Singular and Plural"],
          correctAnswer: "Singular and Plural",
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
          question: "Excel always initiates formulae with an equals sign.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The fill handle in Excel is primarily used for cell formatting.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Functions and formulae serve the same purpose in Excel.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Cell references allow for the automatic recalculation of formulae when values in referenced cells change.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The AutoSum command in Excel offers only one predefined function, the SUM function.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Excel's Function Library categorizes functions based on Financial, Logical, Text, and Date & Time categories.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The syntax for functions in Excel includes the equals sign, function name, and one argument enclosed in parentheses.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The fill handle allows for the automatic copying of formulae to adjacent cells in Excel.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Excel allows the creation of formulae without the use of cell references.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Functions in Excel cannot perform calculations using specific values in a particular order.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
