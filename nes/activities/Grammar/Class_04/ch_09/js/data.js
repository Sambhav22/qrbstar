export const chapter = "Chapter - 9: Articles: A, AN, The";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What are the two kinds of articles mentioned in the text?",
          optionA: "Indefinite and Definite",
          optionB: "A and An",
          optionC: "Consonant and Vowel",
          correctAnswer: "Indefinite and Definite",
        },
        {
          question: "Which of the following is an Indefinite Article?",
          optionA: "The",
          optionB: "A",
          optionC: "An",
          correctAnswer: "A",
        },
        {
          question: "When is 'Article A' used before a word or abbreviation?",
          optionA: "Before any word starting with a vowel letter",
          optionB: "Before any word starting with a consonant sound",
          optionC: "Before any proper noun",
          correctAnswer: "Before any word starting with a consonant sound",
        },
        {
          question:
            "In the sentence 'He is reading an interesting book,' why is 'an' used before 'interesting'?",
          optionA: "It starts with a vowel letter",
          optionB: "It starts with a consonant sound",
          optionC: "It is a proper noun",
          correctAnswer: "It starts with a consonant sound",
        },
        {
          question: "What is the only Definite Article mentioned in the text?",
          optionA: "A",
          optionB: "The",
          optionC: "An",
          correctAnswer: "The",
        },
        {
          question:
            "When is 'Article The' used before a Noun that represents its whole class?",
          optionA: "When the Noun is already known",
          optionB: "When the Noun is an abstract noun",
          optionC: "When the Noun represents its whole class",
          correctAnswer: "When the Noun represents its whole class",
        },
        {
          question: "Which category of words is Article 'The' not used with?",
          optionA: "Proper Nouns",
          optionB: "Superlative degree Adjectives",
          optionC: "Natural things, newspapers, journals, etc.",
          correctAnswer: "Proper Nouns",
        },
        {
          question:
            "What is the omission of 'Article The' in certain cases referred to as?",
          optionA: "Exceptional Articles",
          optionB: "Omission of Articles",
          optionC: "Abstract Articles",
          correctAnswer: "Omission of Articles",
        },
        {
          question:
            "Which of the following is an example of an omission of 'Article The'?",
          optionA: "The Eiffel Tower is the tallest building in France.",
          optionB: "She is a grandmaster in chess.",
          optionC: "Iron is a strong metal.",
          correctAnswer: "Iron is a strong metal.",
        },
        {
          question: "In the phrase 'at sunset,' why is 'Article The' not used?",
          optionA: "It's a proper noun.",
          optionB: "It's an abstract noun.",
          optionC: "It's part of a proverbial phrase.",
          correctAnswer: "It's part of a proverbial phrase.",
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
            "Indefinite Articles A and An show the ____________ of a Noun.",
          optionA: "Gender",
          optionB: "Plurality",
          optionC: "Indefiniteness",
          correctAnswer: "Indefiniteness",
        },
        {
          question:
            "Article A is used before a word and an abbreviation beginning with a ____________ sound.",
          optionA: "Consonant",
          optionB: "Vowel",
          optionC: "Silent",
          correctAnswer: "Consonant",
        },
        {
          question:
            "Article An is used before a word or abbreviation beginning with a ____________ sound.",
          optionA: "Consonant",
          optionB: "Vowel",
          optionC: "Silent",
          correctAnswer: "Vowel",
        },
        {
          question:
            "Article A is used before a word starting with a consonant sound, while Article An is used before a word starting with a ____________ sound.",
          optionA: "Consonant",
          optionB: "Vowel",
          optionC: "Silent",
          correctAnswer: "Vowel",
        },
        {
          question: "The only Definite Article is ____________.",
          optionA: "A",
          optionB: "An",
          optionC: "The",
          correctAnswer: "The",
        },
        {
          question:
            "Article The is used before a Noun already known or ____________.",
          optionA: "Mentioned",
          optionB: "Abstract",
          optionC: "Unknown",
          correctAnswer: "Mentioned",
        },
        {
          question:
            "Article The is used before the names of natural things, newspapers, journals, and ____________.",
          optionA: "Proper Nouns",
          optionB: "Abstract Nouns",
          optionC: "Specific categories",
          correctAnswer: "Specific categories",
        },
        {
          question:
            "Article The is used before superlative degree of ____________.",
          optionA: "Adverbs",
          optionB: "Verbs",
          optionC: "Adjectives",
          correctAnswer: "Adjectives",
        },
        {
          question: "Article The is not used before a ____________ Noun.",
          optionA: "Common",
          optionB: "Proper",
          optionC: "Singular",
          correctAnswer: "Proper",
        },
        {
          question: "Article The is not used before ____________ Nouns.",
          optionA: "Abstract",
          optionB: "Material",
          optionC: "Singular",
          correctAnswer: "Abstract",
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
            "A smart house controls attributes like lighting, climate change sensors, and entertainment system.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart cameras in a smart house use WiFi to send notifications whenever motion is detected or the doorbell is pressed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Light control systems in smart houses are primarily designed to increase energy consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart TVs, also known as Connected TVs, lack integrated Internet and web features.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart speakers are devices that provide peer-to-peer interaction and hands-free activation using integrated virtual voice assistance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The primary benefit of a light control system in a smart house is reducing energy consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart gadgets work based on the features of artificial intelligence to make a house 'smart'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart cameras in a smart house can process images but cannot send notifications to users' phones.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A video doorbell in a smart house is not a web-connected system.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart speakers utilize only wired connections, such as USB, for playback and control.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
