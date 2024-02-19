export const chapter = "Chapter - 18: Capital Letters and Marks Of Punctuation";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "When is a capital letter used in a sentence?",
          optionA: "a) Only in interrogative sentences",
          optionB: "b) At the beginning of a sentence",
          optionC: "c) Only in exclamatory sentences",
          correctAnswer: "b) At the beginning of a sentence",
        },
        {
          question: "In which type of sentences is the Full Stop NOT used?",
          optionA: "a) Assertive sentences",
          optionB: "b) Imperative sentences",
          optionC: "c) Interrogative sentences",
          correctAnswer: "c) Interrogative sentences",
        },
        {
          question: "What is the purpose of the Comma in a sentence?",
          optionA: "a) To end the sentence",
          optionB: "b) To separate similar types of words",
          optionC: "c) To mark the beginning of a sentence",
          correctAnswer: "b) To separate similar types of words",
        },
        {
          question: "When is the Mark of Interrogation used?",
          optionA: "a) At the end of a direct question",
          optionB: "b) At the end of an imperative sentence",
          optionC: "c) In the middle of a sentence",
          correctAnswer: "a) At the end of a direct question",
        },
        {
          question: "What does the Apostrophe show?",
          optionA: "a) Possession",
          optionB: "b) Plurality",
          optionC: "c) Contraction",
          correctAnswer: "a) Possession",
        },
        {
          question: "When is the Mark of Exclamation used?",
          optionA: "a) Only in direct questions",
          optionB:
            "b) At the end of words of exclamation or exclamatory sentences",
          optionC: "c) In the middle of a sentence",
          correctAnswer:
            "b) At the end of words of exclamation or exclamatory sentences",
        },
        {
          question: "Where is the Mark of Quotation used?",
          optionA: "a) In declarative sentences",
          optionB:
            "b) In direct speech to repeat the speaker's statement verbatim",
          optionC: "c) In exclamatory sentences",
          correctAnswer:
            "b) In direct speech to repeat the speaker's statement verbatim",
        },
        {
          question:
            "Which sentence shows the correct use of the Apostrophe for possession?",
          optionA: "a) The childrens' toys are scattered.",
          optionB: "b) The dog's are barking loudly.",
          optionC: "c) The cat's tail is fluffy.",
          correctAnswer: "c) The cat's tail is fluffy.",
        },
        {
          question: "In which sentences should the Full Stop NOT be used?",
          optionA: "a) In abbreviations",
          optionB: "b) In exclamatory sentences",
          optionC: "c) In interrogative sentences",
          correctAnswer: "a) In abbreviations",
        },
        {
          question: "What does the Comma NOT separate?",
          optionA: "a) Introductory phrases",
          optionB: "b) Words in apposition",
          optionC: "c) Full stops",
          correctAnswer: "c) Full stops",
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
            "A Capital Letter is used at the beginning of a ___________.",
          options: ["a) paragraph", "b) sentence", "c) dialogue"],
          correctAnswer: "b) sentence",
        },
        {
          question:
            "The first letter in each line of a poem begins with a Capital ___________.",
          options: ["a) word", "b) letter", "c) character"],
          correctAnswer: "b) letter",
        },
        {
          question:
            "Proper Nouns and Proper Adjectives are written with a Capital ___________.",
          options: ["a) alphabet", "b) word", "c) letter"],
          correctAnswer: "c) letter",
        },
        {
          question:
            "Names of days and months are written with a Capital ___________.",
          options: ["a) letter", "b) word", "c) number"],
          correctAnswer: "a) letter",
        },
        {
          question:
            "The names of newspapers, books, political parties, organizations, communities, historical events, nationalities, etc. are written with a Capital ___________.",
          options: ["a) alphabet", "b) word", "c) letter"],
          correctAnswer: "c) letter",
        },
        {
          question:
            "The names of television channels, commercial names, etc. are written with a Capital ___________.",
          options: ["a) word", "b) letter", "c) symbol"],
          correctAnswer: "b) letter",
        },
        {
          question:
            "The Marks of Punctuation are used to show clearly the meaning of a ___________.",
          options: ["a) word", "b) sentence", "c) paragraph"],
          correctAnswer: "b) sentence",
        },
        {
          question:
            "The Full Stop is used at the end of all sentences, except interrogative and ___________ sentences.",
          options: ["a) assertive", "b) imperative", "c) exclamatory"],
          correctAnswer: "c) exclamatory",
        },
        {
          question:
            "The Comma is used to separate similar types of ___________.",
          options: ["a) punctuation marks", "b) words", "c) sentences"],
          correctAnswer: "b) words",
        },
        {
          question:
            "The Mark of Quotation is used in Direct Speech to repeat the speaker's statement ___________.",
          options: ["a) exactly", "b) concisely", "c) indirectly"],
          correctAnswer: "a) exactly",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "A Capital Letter is used at the beginning of a sentence.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The Full Stop is used in abbreviations.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Comma is used to separate Yes/No from the rest of the sentence.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Mark of Interrogation is used at the end of an indirect question.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The Apostrophe does not take an 's' in plural nouns.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Mark of Exclamation is used at the end of words of exclamation.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The Apostrophe is used to show possession.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Mark of Quotation is used in direct speech to repeat the speaker's statement verbatim.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The Comma is used to separate words in apposition.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Mark of Interrogation is used at the end of a direct question.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };

export var activityData;
