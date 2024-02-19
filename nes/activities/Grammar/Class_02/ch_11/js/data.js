export const chapter = "Chapter - 11: Articles : A,An, The ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the purpose of articles in a sentence?",
          optionA: "To specify the gender of a noun",
          optionB: "To indicate the quantity of a noun",
          optionC: "To determine whether a noun is definite or indefinite",
          correctAnswer:
            "To determine whether a noun is definite or indefinite",
        },
        {
          question: "Which of the following is an indefinite article?",
          optionA: "The",
          optionB: "A",
          optionC: "An",
          correctAnswer: "A",
        },
        {
          question: "When is the article 'a' used?",
          optionA: "Before any noun starting with a vowel sound",
          optionB: "Before any noun starting with a consonant sound",
          optionC: "Before proper nouns",
          correctAnswer: "Before any noun starting with a consonant sound",
        },
        {
          question: "In which case is the article 'an' used?",
          optionA: "Before words starting with a consonant sound",
          optionB: "Before words starting with a vowel sound",
          optionC: "Before proper nouns",
          correctAnswer: "Before words starting with a vowel sound",
        },
        {
          question: "When is the definite article 'the' used?",
          optionA: "Before any noun",
          optionB: "Only before proper nouns",
          optionC:
            "In specific cases, such as when a noun has been mentioned before or is already known",
          correctAnswer:
            "In specific cases, such as when a noun has been mentioned before or is already known",
        },
        {
          question: "What is the reason for using 'an' before the word 'hour'?",
          optionA: "It starts with a vowel",
          optionB: "It starts with a consonant",
          optionC: "It is a proper noun",
          correctAnswer: "It starts with a vowel",
        },
        {
          question:
            "In which case is the article 'the' used with names of mountains, oceans, and rivers?",
          optionA: "Always",
          optionB: "Only with oceans",
          optionC: "When representing a whole class",
          correctAnswer: "Always",
        },
        {
          question:
            "When should 'the' be used before a noun according to the text?",
          optionA: "Only before proper nouns",
          optionB:
            "When the noun has been mentioned before or is already known",
          optionC: "When the noun is an abstract concept",
          correctAnswer:
            "When the noun has been mentioned before or is already known",
        },
        {
          question:
            "What type of words does the indefinite article 'a' precede according to the text?",
          optionA: "Words starting with a vowel sound",
          optionB: "Words spoken with a non-vowel or consonant sound",
          optionC: "Proper nouns",
          correctAnswer: "Words spoken with a non-vowel or consonant sound",
        },
        {
          question:
            "In which scenario should the article 'an' be used, according to the text?",
          optionA: "Before any word starting with a consonant sound",
          optionB: "Before any word starting with a vowel sound",
          optionC: "Before words with more than one syllable",
          correctAnswer: "Before any word starting with a vowel sound",
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
          question:
            "Articles are determiners. They tell whether a Noun is definite or ___________.",
          options: ["known", "undefined", "indefinite"],
          correctAnswer: "indefinite",
        },
        {
          question: "Indefinite Articles are __________ and __________.",
          options: ["the, a", "an, the", "a, an"],
          correctAnswer: "a, an",
        },
        {
          question: "Definite Article is only __________.",
          options: ["an", "the", "a"],
          correctAnswer: "the",
        },
        {
          question:
            "Article 'a' is used with words spoken with a non-Vowel or __________ sound.",
          options: ["consonant", "vowel", "silent"],
          correctAnswer: "consonant",
        },
        {
          question:
            "Article 'an' is used with words spoken with a __________ sound.",
          options: ["consonant", "vowel", "silent"],
          correctAnswer: "vowel",
        },
        {
          question:
            "The word 'hour' has spelling beginning with 'h' (Consonant) but is spoken with a __________ sound.",
          options: ["consonant", "vowel", "silent"],
          correctAnswer: "vowel",
        },
        {
          question:
            "Article 'the' is used before a Noun in the following cases: With a Noun that has already been __________ before.",
          options: ["spoken", "mentioned", "created"],
          correctAnswer: "mentioned",
        },
        {
          question:
            "Article 'the' is used with the names of __________, oceans, rivers, etc.",
          options: ["plants", "countries", "mountains"],
          correctAnswer: "mountains",
        },
        {
          question:
            "Before Superlative Degree of Adjectives, 'the' is used, as in 'She is the most intelligent girl __________ class.'",
          options: ["in", "on", "of"],
          correctAnswer: "in",
        },
        {
          question:
            "With the names of newspapers, journals, and classical or religious books, 'the' is used, as in 'The Hindustan Times is a fine __________.'",
          options: ["book", "newspaper", "magazine"],
          correctAnswer: "newspaper",
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
          question: "Articles are only used with singular nouns.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The indefinite articles are 'a' and 'an'.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The definite article 'the' is used only before proper nouns.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Article 'a' is used before words that start with a vowel sound.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Article 'an' is used before words that start with a consonant sound.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The word 'hour' is an exception where 'an' is used despite starting with a consonant.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The definite article 'the' is always used before the names of oceans and rivers.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Article 'the' is used before a noun when it represents a whole class.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The article 'the' is used before proper nouns that have not been mentioned before.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The definite article 'the' is used before superlative degrees of adjectives.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
