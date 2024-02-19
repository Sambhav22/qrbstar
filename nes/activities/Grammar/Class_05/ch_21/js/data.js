export const chapter =
  "Chapter - 21: Use of Punctuations Marks and Capital Letters";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What does the full stop (.) signify in a sentence?",
          optionA: "A short pause",
          optionB: "The end of an assertive or imperative sentence",
          optionC: "Separation of words",
          correctAnswer: "The end of an assertive or imperative sentence",
        },
        {
          question: "When is a comma (,) used in a sentence?",
          optionA: "To mark the end of a sentence",
          optionB: "To address a person",
          optionC: "To mark a short pause or separate words",
          correctAnswer: "To mark a short pause or separate words",
        },
        {
          question:
            "In which situation is a question mark (?) appropriately used?",
          optionA: "At the end of an assertive sentence",
          optionB: "To mark a short pause",
          optionC: "At the end of a question",
          correctAnswer: "At the end of a question",
        },
        {
          question: "When do we use the sign of exclamation (!) in a sentence?",
          optionA: "To mark an exclamatory sentence",
          optionB: "At the end of a question",
          optionC: "To address a person",
          correctAnswer: "To mark an exclamatory sentence",
        },
        {
          question:
            'What is the purpose of inverted commas (" ..... ") in a sentence?',
          optionA: "To mark a short pause",
          optionB: "To enclose the exact words of a speaker in direct speech",
          optionC: "At the end of an assertive sentence",
          correctAnswer:
            "To enclose the exact words of a speaker in direct speech",
        },
        {
          question: "When is a capital letter used in writing?",
          optionA: "To mark a short pause",
          optionB: "To start a proper noun or a new sentence",
          optionC: "To address a person",
          correctAnswer: "To start a proper noun or a new sentence",
        },
        {
          question:
            "What should begin with a capital letter according to the text?",
          optionA: "Names of weekdays",
          optionB: "Proper nouns",
          optionC: "Pronouns",
          correctAnswer: "Proper nouns",
        },
        {
          question:
            "In direct speech, how are the exact words of a speaker enclosed?",
          optionA: "With commas",
          optionB: 'With inverted commas (" ..... ")',
          optionC: "With a question mark (?)",
          correctAnswer: 'With inverted commas (" ..... ")',
        },
        {
          question: 'Why is a capital letter used for the pronoun "I"?',
          optionA: "To mark a short pause",
          optionB: "To start a proper noun",
          optionC: "As a rule in writing",
          correctAnswer: "As a rule in writing",
        },
        {
          question:
            "When does each line of a poem begin with a capital letter?",
          optionA: "Only in the first line",
          optionB: "At the end of the poem",
          optionC: "At the beginning of each line",
          correctAnswer: "At the beginning of each line",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question:
            "Full stop (.) is used at the end of __________ or __________ sentence;",
          options: ["assertive", "imperative", "interrogative"],
          correctAnswer: "imperative",
        },
        {
          question: "__________ is used to mark a short pause in a sentence.",
          options: [
            "To mark the end",
            "To address a person",
            "To mark a short pause",
          ],
          correctAnswer: "To mark a short pause",
        },
        {
          question: "Question mark (?) is used at the end of a __________.",
          options: ["Statement", "Command", "Question"],
          correctAnswer: "Question",
        },
        {
          question:
            'Inverted commas (" ..... ") are used in direct speech to enclose the exact words of a __________.',
          options: ["Writer", "Speaker", "Narrator"],
          correctAnswer: "Speaker",
        },
        {
          question: "Capital Letter is used to start a new __________.",
          options: ["Line", "Paragraph", "Sentence"],
          correctAnswer: "Sentence",
        },
        {
          question: "Each line of a poem begins with __________.",
          options: [
            "A lowercase letter",
            "A capital letter",
            "A punctuation mark",
          ],
          correctAnswer: "A capital letter",
        },
        {
          question: "Names of __________ begin with Capital Letters.",
          options: ["Animals", "Months", "Adjectives"],
          correctAnswer: "Months",
        },
        {
          question: "Capital letter is used to write pronoun __________.",
          options: ["You", "He", "I"],
          correctAnswer: "I",
        },
        {
          question:
            "In direct speech, the exact words of a speaker are enclosed in __________.",
          options: ["Parentheses", "Inverted commas", "Brackets"],
          correctAnswer: "Inverted commas",
        },
        {
          question:
            "Sign of exclamation (!) is used to mark an __________ sentence.",
          options: ["Interrogative", "Assertive", "Exclamatory"],
          correctAnswer: "Exclamatory",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "A full stop is used at the end of a question.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Commas are only used to separate words in a sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Inverted commas are used to mark a short pause in speech.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Capital letters are used to start proper nouns.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Each line of a poem begins with a lowercase letter.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Names of months always begin with a capital letter.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Interjections are used to convey information.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Question marks are used at the end of assertive sentences.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "A capital letter is used for the pronoun 'you'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Sign of exclamation is used to mark an interrogative sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
