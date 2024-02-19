export const chapter = "Chapter - 7: Pronouns ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What are the words used to replace naming words in the sentences?",
            options: {
              a: "Verbs",
              b: "Adjectives",
              c: "Pronouns",
            },
            answer: "c",
          },
          {
            question: "What is the purpose of using pronouns in sentences?",
            options: {
              a: "To describe actions",
              b: "To replace nouns",
              c: "To emphasize objects",
            },
            answer: "b",
          },
          {
            question: "Which pronouns are mentioned in the examples given?",
            options: {
              a: "He, she, it",
              b: "I, we, you",
              c: "I, we, he, she, it, they, you",
            },
            answer: "c",
          },
          {
            question: "What is the function of pronouns in sentences?",
            options: {
              a: "To add detail",
              b: "To introduce new nouns",
              c: "To make sentences less repetitive",
            },
            answer: "c",
          },
          {
            question:
              "How do the revised sentences differ from the initial ones?",
            options: {
              a: "They use fewer adjectives",
              b: "They have more verbs",
              c: "They replace naming words with pronouns",
            },
            answer: "c",
          },
          {
            question: "What do pronouns refer to in a sentence?",
            options: {
              a: "Verbs",
              b: "Adjectives",
              c: "Nouns",
            },
            answer: "c",
          },
          {
            question: "Which of the following words are NOT pronouns?",
            options: {
              a: "This, these",
              b: "It, is",
              c: "Friend, school",
            },
            answer: "c",
          },
          {
            question:
              "What is the purpose of using pronouns like 'he' or 'she'?",
            options: {
              a: "To refer to animals",
              b: "To refer to places",
              c: "To refer to people or things",
            },
            answer: "c",
          },
          {
            question:
              "Which pronoun replaces the noun 'table' in the sentences?",
            options: {
              a: "They",
              b: "It",
              c: "This",
            },
            answer: "b",
          },
          {
            question: "What category of words are pronouns considered to be?",
            options: {
              a: "Action words",
              b: "Descriptive words",
              c: "Function words",
            },
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
            question: "___ is a word which is used in place of a Noun.",
            options: {
              a: "Pronoun",
              b: "Verb",
              c: "Adjective",
            },
            answer: "a",
          },
          {
            question:
              "Example pronouns include ___, we, he, she, it, they, you.",
            options: {
              a: "I",
              b: "My",
              c: "Me",
            },
            answer: "a",
          },
          {
            question: "Pronouns are used to make sentences less ___.",
            options: {
              a: "Complex",
              b: "Repetitive",
              c: "Descriptive",
            },
            answer: "b",
          },
          {
            question:
              "'He' or 'she' are pronouns used to refer to ___ or things.",
            options: {
              a: "Animals",
              b: "Places",
              c: "People",
            },
            answer: "c",
          },
          {
            question: "The pronoun 'it' replaces a ___ in a sentence.",
            options: {
              a: "Verb",
              b: "Noun",
              c: "Adverb",
            },
            answer: "b",
          },
          {
            question:
              "Pronouns such as 'this' and 'these' are examples of ___ pronouns.",
            options: {
              a: "Interrogative",
              b: "Demonstrative",
              c: "Relative",
            },
            answer: "b",
          },
          {
            question:
              "Using pronouns helps in avoiding unnecessary ___ of the same naming words.",
            options: {
              a: "Usage",
              b: "Repeating",
              c: "Omission",
            },
            answer: "b",
          },
          {
            question: "Pronouns like 'we' and 'you' refer to ___.",
            options: {
              a: "Singular subjects",
              b: "Plural subjects",
              c: "Abstract subjects",
            },
            answer: "b",
          },
          {
            question:
              "The purpose of using pronouns is to replace ___ in sentences.",
            options: {
              a: "Verbs",
              b: "Adjectives",
              c: "Nouns",
            },
            answer: "c",
          },
          {
            question: "Pronouns are considered as a type of ___ words.",
            options: {
              a: "Action",
              b: "Descriptive",
              c: "Function",
            },
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
            question: "Pronouns are used to replace nouns in sentences.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
          {
            question: "Using pronouns makes sentences more repetitive.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question:
              "Pronouns like 'he' and 'she' refer to animals or things.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question: "The pronoun 'it' replaces adverbs in sentences.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question:
              "Pronouns such as 'this' and 'these' are examples of interrogative pronouns.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question: "Pronouns are used to add complexity to sentences.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question:
              "Pronouns like 'we' and 'you' refer to singular subjects.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question:
              "The purpose of using pronouns is to replace verbs in sentences.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question: "Pronouns are categorized as function words.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
          {
            question:
              "Using pronouns helps in avoiding repetition of the same naming words.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
        ],
      },
    ],
  };
}

export var activityData;
