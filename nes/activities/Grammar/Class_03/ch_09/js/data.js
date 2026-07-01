export const chapter = "Chapter - 9: Articles: A, AN, The";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the two kinds of articles mentioned in the text?",
          optionA: "Definite and Indefinite",
          optionB: "A and An",
          optionC: "The and A",
          correctAnswer: "Definite and Indefinite",
        },
        {
          question: "When is 'A' used before a word?",
          optionA: "With words starting with a vowel sound",
          optionB: "With words starting with a consonant sound",
          optionC: "With plural nouns",
          correctAnswer: "With words starting with a consonant sound",
        },
        {
          question: "In which case is 'An' used according to the text?",
          optionA: "Before words starting with a consonant sound",
          optionB: "Before words starting with a vowel sound",
          optionC: "Before plural nouns",
          correctAnswer: "Before words starting with a vowel sound",
        },
        {
          question: "When is the definite article 'The' used?",
          optionA: "Before any noun",
          optionB:
            "When the noun is already mentioned, known, or represents its whole class",
          optionC: "Before superlative degree adjectives",
          correctAnswer:
            "When the noun is already mentioned, known, or represents its whole class",
        },
        {
          question:
            "Which of the following is an example of using 'The' with a noun representing its whole class?",
          optionA: "The elephant is my favorite animal.",
          optionB: "The book on the shelf is interesting.",
          optionC: "The camel is a beast of burden.",
          correctAnswer: "The camel is a beast of burden.",
        },
        {
          question:
            "What is the correct usage of 'A' in the sentence '___ European, unicorn, and uniform begin with u'?",
          optionA: "An",
          optionB: "A",
          optionC: "The",
          correctAnswer: "A",
        },
        {
          question:
            "In the sentence 'She is the most beautiful girl in the colony,' why is 'The' used before 'most beautiful girl'?",
          optionA: "Before any noun",
          optionB: "With a noun already known",
          optionC: "Before superlative degree adjectives",
          correctAnswer: "Before superlative degree adjectives",
        },
        {
          question:
            "Which of the following is an incorrect usage of articles according to the text?",
          optionA: "An hour",
          optionB: "A European",
          optionC: "The elephant",
          correctAnswer: "A European",
        },
        {
          question:
            "When is 'An' used before a word starting with a consonant letter but a vowel sound?",
          optionA: "Always",
          optionB: "When the consonant letter is silent",
          optionC: "Never",
          correctAnswer: "When the consonant letter is silent",
        },
        {
          question:
            "What kind of nouns do indefinite articles (A and An) typically accompany?",
          optionA: "Definite nouns",
          optionB: "Specific nouns",
          optionC: "Indefinite nouns",
          correctAnswer: "Indefinite nouns",
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
            "Indefinite Articles (A, An) are used with __________ Nouns.",
          optionA: "Specific",
          optionB: "Definite",
          optionC: "Indefinite",
          correctAnswer: "Indefinite",
        },
        {
          question:
            "Use of 'A': 'A' is used with the words that begin with a non-Vowel or __________ sound.",
          optionA: "Vowel",
          optionB: "Consonant",
          optionC: "Silent",
          correctAnswer: "Consonant",
        },
        {
          question:
            "The words 'European,' 'unicorn,' and 'uniform' begin with a (Vowel letter) but with a __________ sound.",
          optionA: "Vowel",
          optionB: "Consonant",
          optionC: "Silent",
          correctAnswer: "Consonant",
        },
        {
          question:
            "Use of 'An': 'An' is used with the words that begin with a __________ sound.",
          optionA: "Non-Vowel",
          optionB: "Vowel",
          optionC: "Consonant",
          correctAnswer: "Vowel",
        },
        {
          question:
            "The word 'hour' begins with 'h' (Consonant letter) but with a __________ sound.",
          optionA: "Vowel",
          optionB: "Consonant",
          optionC: "Silent",
          correctAnswer: "Vowel",
        },
        {
          question:
            "Articles are used in accordance with the following word soon after, as demonstrated by Definite Article ('The') with a Noun __________ mentioned.",
          optionA: "Not",
          optionB: "Already",
          optionC: "Newly",
          correctAnswer: "Already",
        },
        {
          question:
            "Definite Article ('The') is used with the names of natural things such as the sun, the earth, the stars, the moon, the cloud, the __________, the West, etc.",
          optionA: "East",
          optionB: "South",
          optionC: "North",
          correctAnswer: "South",
        },
        {
          question:
            "Definite Article ('The') is used with the names of newspapers, journals, and classical or religious books like 'the Hindu,' 'the Times of India,' 'the __________,' 'the Quran,' etc.",
          optionA: "Bible",
          optionB: "Gita",
          optionC: "Torah",
          correctAnswer: "Bible",
        },
        {
          question:
            "Definite Article ('The') is used before the names of political parties, organizations, nationalities, races, etc., such as 'the Indian National Congress,' 'the __________,' 'the Americans,' etc.",
          optionA: "Bhartiya Janta Party",
          optionB: "United Nations",
          optionC: "Chinese",
          correctAnswer: "United Nations",
        },
        {
          question:
            "Definite Article ('The') is used before the superlative degree of Adjectives, as in 'She is the most beautiful girl in the __________.'",
          optionA: "City",
          optionB: "Colony",
          optionC: "Village",
          correctAnswer: "Colony",
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
            "Artificial intelligence enhances human capabilities but doesn't impact efficiency.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Voice assistance technology can only process oral commands.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Navigation technology plays a minor role in applications like Google Maps.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Face recognition technology is solely used in the field of entertainment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "ChatGPT is an outdated technology compared to other chatbots.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Voice assistance technology cannot recognize different voices.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Navigation technology doesn't contribute to identifying traffic flow changes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Chatbot technology was initially designed for social media interaction.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Artificial intelligence impacts only a few aspects of human life.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Face recognition technology can't scan faces from digital images.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
