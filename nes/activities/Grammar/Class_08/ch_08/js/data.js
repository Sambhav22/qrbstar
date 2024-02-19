export const chapter = "Chapter - 8: Subject and Predicate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the Subject in a sentence?",
          optionA: "The action",
          optionB: "The part about which something is said",
          optionC: "The object",
          correctAnswer: "B",
        },
        {
          question: "Which of the following is a Predicate in a sentence?",
          optionA: "The sun",
          optionB: "Shining brightly",
          optionC: "Was",
          correctAnswer: "B",
        },
        {
          question: "What may a Subject include in a sentence?",
          optionA: "Only nouns",
          optionB: "Only adjectives",
          optionC: "Determiners, adjectives, nouns, and more",
          correctAnswer: "C",
        },
        {
          question:
            "Which of the following can work as a Subject in a sentence?",
          optionA: "Only a noun",
          optionB: "It, there, gerund, and infinitive",
          optionC: "Only a pronoun",
          correctAnswer: "B",
        },
        {
          question: "What is a Complement in a sentence?",
          optionA: "Adds extra information",
          optionB: "Completes the sense of a sentence",
          optionC: "Acts as the subject",
          correctAnswer: "B",
        },
        {
          question:
            "How should the verb and subject agree in terms of number and person?",
          optionA: "No agreement needed",
          optionB: "Singular subject, plural verb",
          optionC: "Agreement in number and person",
          correctAnswer: "C",
        },
        {
          question:
            "Which sentence demonstrates correct subject-verb agreement?",
          optionA: "The mangoes and bananas is tasty fruits.",
          optionB: "Mangoes and bananas are tasty fruits.",
          optionC: "The camels and giraffes is long-necked animals.",
          correctAnswer: "B",
        },
        {
          question:
            "What should be the verb form if the subject is 'One of the players'?",
          optionA: "Singular",
          optionB: "Plural",
          optionC: "Either singular or plural",
          correctAnswer: "A",
        },
        {
          question:
            "When a Collective Noun is used as a subject, what determines the verb form?",
          optionA: "Number of words in the noun",
          optionB: "Whether it's countable or uncountable",
          optionC:
            "Whether it's used as a single entity or has constituent parts",
          correctAnswer: "C",
        },
        {
          question:
            "Which sentence demonstrates correct relative pronoun usage?",
          optionA: "That student is one of those who is absent.",
          optionB: "That student is one of those who are absent.",
          optionC:
            "This is that tree among all the trees which have not been watered.",
          correctAnswer: "B",
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
            "The _______ is that part of a sentence about which something is said.",
          options: {
            A: "Object",
            B: "Predicate",
            C: "Determiner",
          },
          correctAnswer: "A",
        },
        {
          question:
            "A Subject may be made up of one or more words, including determiners, adjectives, nouns, adjective phrases, and _______.",
          options: {
            A: "Conjunctions",
            B: "Quantifiers",
            C: "Pronouns",
          },
          correctAnswer: "B",
        },
        {
          question: "In some sentences, _______ can also work as a Subject.",
          options: {
            A: "Infinitives",
            B: "Conjunctions",
            C: "Adverbs",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Objects are of two types: Indirect Object and _______ Object.",
          options: {
            A: "Singular",
            B: "Direct",
            C: "Plural",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The Verb and the Subject must be in agreement so far as _______ and _______ are concerned.",
          options: {
            A: "Tense, mood",
            B: "Gender, case",
            C: "Number, person",
          },
          correctAnswer: "C",
        },
        {
          question:
            'If two or more Subjects are joined by "and," a _______ Verb is used.',
          options: {
            A: "Singular",
            B: "Plural",
            C: "Either singular or plural",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The names of some books, newspapers, countries, etc., appear to be in Plural, but they take a _______ Verb.",
          options: {
            A: "Singular",
            B: "Plural",
            C: "Either singular or plural",
          },
          correctAnswer: "A",
        },
        {
          question:
            "When a Collective Noun is used as a Subject, a _______ Verb is used if it is used as a single entity.",
          options: {
            A: "Singular",
            B: "Plural",
            C: "Either singular or plural",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The Subject takes the mid-position in _______ and Exclamatory sentences.",
          options: {
            A: "Interrogative",
            B: "Declarative",
            C: "Imperative",
          },
          correctAnswer: "A",
        },
        {
          question:
            "In Imperative Sentences, the Subject is hidden, and the meaning is clear in the _______.",
          options: {
            A: "Context",
            B: "Predicate",
            C: "Object",
          },
          correctAnswer: "A",
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
          question:
            "The Predicate is the part of a sentence about which something is said.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question: "The Subject may be made up of only one word.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: true,
        },
        {
          question: "Adjective Phrases cannot be a part of the Subject.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question: "Infinitives can never work as a Subject in a sentence.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question:
            "The Verb and the Subject must be in agreement in terms of gender and case.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question:
            "If two or more Subjects are joined by 'and', a Singular Verb is used.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question: "All Collective Nouns take a Plural Verb.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question:
            "In Interrogative sentences, the Subject takes the end-position.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question: "Imperative Sentences always have a visible Subject.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
        {
          question:
            "Relative Pronouns always agree with the Subject in terms of number and person.",
          options: {
            True: true,
            False: false,
          },
          correctAnswer: false,
        },
      ],
    ],
  };
}

export var activityData;
