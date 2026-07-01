export const chapter = "Chapter - 9: Determiner";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "Which of the following are examples of demonstrative determiners?",
          optionA: "my, our, your",
          optionB: "this, that, these",
          optionC: "some, several, any",
          correctAnswer: "this, that, these",
        },
        {
          question:
            "Which determiner is used to ask questions about identity or ownership?",
          optionA: "my, our, your",
          optionB: "what, which, whose",
          optionC: "much, little, some",
          correctAnswer: "what, which, whose",
        },
        {
          question:
            '"Whose bag is this?" is an example of which type of determiner?',
          optionA: "demonstrative determiner",
          optionB: "possessive determiner",
          optionC: "interrogative determiner",
          correctAnswer: "interrogative determiner",
        },
        {
          question: "Which determiner is used to indicate possession?",
          optionA: "some, several, any",
          optionB: "my, our, your",
          optionC: "a, an, the",
          correctAnswer: "my, our, your",
        },
        {
          question:
            'Which type of determiner includes words like "some, several, any"?',
          optionA: "numerals",
          optionB: "quantifiers",
          optionC: "articles",
          correctAnswer: "quantifiers",
        },
        {
          question:
            '"An Article is a word used to modify a Noun" - What are the two types of articles mentioned?',
          optionA: "demonstrative and possessive",
          optionB: "indefinite and definite",
          optionC: "interrogative and numeral",
          correctAnswer: "indefinite and definite",
        },
        {
          question:
            "Which article is used before a noun beginning with a consonant sound?",
          optionA: "an",
          optionB: "the",
          optionC: "a",
          correctAnswer: "a",
        },
        {
          question:
            'When is the definite article "the" used before a singular noun?',
          optionA: "to show possession",
          optionB: "to refer to any person or thing",
          optionC: "to show its whole class",
          correctAnswer: "to show its whole class",
        },
        {
          question: 'Which of the following is NOT a case where "the" is used?',
          optionA: "Before geographical proper nouns",
          optionB: "Before names of games",
          optionC: "Before most proper nouns",
          correctAnswer: "Before most proper nouns",
        },
        {
          question:
            "Which type of determiner is not used with the names of games?",
          optionA: "demonstrative determiners",
          optionB: "possessive determiners",
          optionC: "articles",
          correctAnswer: "articles",
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
            "________ intelligence involves how good a person is at navigating their environment.",
          optionA: "Visual-Spatial",
          optionB: "Linguistic-Verbal",
          optionC: "Logical-Mathematical",
          correctAnswer: "Visual-Spatial",
        },
        {
          question:
            "People with high ______ intelligence tend to be writers, readers, and good at memorizing.",
          optionA: "Visual-Spatial",
          optionB: "Linguistic-Verbal",
          optionC: "Logical-Mathematical",
          correctAnswer: "Linguistic-Verbal",
        },
        {
          question:
            "______ intelligence is concerned with number perception and logical problem-solving.",
          optionA: "Visual-Spatial",
          optionB: "Linguistic-Verbal",
          optionC: "Logical-Mathematical",
          correctAnswer: "Logical-Mathematical",
        },
        {
          question:
            "People with high ______ intelligence have good body awareness and control.",
          optionA: "Bodily-Kinesthetic",
          optionB: "Musical",
          optionC: "Interpersonal",
          correctAnswer: "Bodily-Kinesthetic",
        },
        {
          question:
            "______ intelligence involves the ability to perceive and transform sound and musical patterns.",
          optionA: "Bodily-Kinesthetic",
          optionB: "Musical",
          optionC: "Interpersonal",
          correctAnswer: "Musical",
        },
        {
          question:
            "People with high ______ intelligence excel at group work and maintaining peace in organizations.",
          optionA: "Bodily-Kinesthetic",
          optionB: "Musical",
          optionC: "Interpersonal",
          correctAnswer: "Interpersonal",
        },
        {
          question:
            "______ intelligence deals with self-awareness and understanding one's own mental-emotional state.",
          optionA: "Intrapersonal",
          optionB: "Naturalistic",
          optionC: "Pedagogical",
          correctAnswer: "Intrapersonal",
        },
        {
          question:
            "______ intelligence involves identifying, classifying, and manipulating elements of the environment.",
          optionA: "Intrapersonal",
          optionB: "Naturalistic",
          optionC: "Pedagogical",
          correctAnswer: "Naturalistic",
        },
        {
          question:
            "People with high ______ intelligence tend to understand a topic and help others understand it.",
          optionA: "Intrapersonal",
          optionB: "Naturalistic",
          optionC: "Pedagogical",
          correctAnswer: "Pedagogical",
        },
        {
          question:
            "Artificial intelligence aims to stimulate human attributes of these nine intelligences but has been most successful in achieving ______ intelligence.",
          optionA: "Intrapersonal",
          optionB: "Naturalistic",
          optionC: "Logical-Mathematical",
          correctAnswer: "Logical-Mathematical",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "Demonstrative determiners include words like 'this' and 'that'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Interrogative determiners are used to indicate possession.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Possessive determiners include words like 'my' and 'your'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Numerals include words like 'much' and 'little'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Articles are used to modify verbs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Indefinite articles 'a' and 'an' are used based on the word immediately following them.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Definite article 'the' is used before a singular noun to show possession.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Articles are always needed before proper nouns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Articles can be used before names of days and months.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Articles are used before the names of games.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
