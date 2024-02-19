export const chapter = "Chapter - 12: Verbs ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What does a verb indicate in a sentence?",
          optionA: "Existence",
          optionB: "Action",
          optionC: "Occurrence",
          correctAnswer: "Action",
        },
        {
          question:
            "Identify the being verb in the following sentence: 'A horse was in the grass field.'",
          optionA: "was",
          optionB: "horse",
          optionC: "grass",
          correctAnswer: "was",
        },
        {
          question:
            "Which of the following sentences contains a verb that is made up of more than one word?",
          optionA: "She goes to temple.",
          optionB: "Birds fly in the air.",
          optionC: "A dog ran after a cat.",
          correctAnswer: "Birds fly in the air.",
        },
        {
          question:
            "In the sentence 'She has gone to the temple,' how many words is the verb made up of?",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
        },
        {
          question:
            "Which of the following sentences represents a past action?",
          optionA: "Shlok got ready for school.",
          optionB: "He is eating his breakfast now.",
          optionC: "He will go to school.",
          correctAnswer: "Shlok got ready for school.",
        },
        {
          question:
            "What type of verbs are 'is,' 'was,' 'are,' 'play,' and 'eat' in the given examples?",
          optionA: "Being verbs",
          optionB: "Action verbs",
          optionC: "Occurrence verbs",
          correctAnswer: "Action verbs",
        },
        {
          question:
            "Identify the being verb in the sentence: 'Children were in the playground.'",
          optionA: "were",
          optionB: "Children",
          optionC: "playground",
          correctAnswer: "were",
        },
        {
          question: "Which sentence indicates a future action?",
          optionA: "She goes to temple.",
          optionB: "Birds are flying in the air.",
          optionC: "It will rain tomorrow.",
          correctAnswer: "It will rain tomorrow.",
        },
        {
          question: "How many words is the verb in the sentence 'It rains'?",
          optionA: "One",
          optionB: "Two",
          optionC: "None",
          correctAnswer: "One",
        },
        {
          question:
            "Choose the sentence with a verb that tells about the present.",
          optionA: "Shlok got ready for school.",
          optionB: "He is eating his breakfast now.",
          optionC: "He will go to school.",
          correctAnswer: "He is eating his breakfast now.",
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
            "Some verbs show existence or quality; they are _________ words.",
          options: ["Action", "Being", "Occurrence"],
          correctAnswer: "Being",
        },
        {
          question:
            "In the sentence 'This is a tree,' the verb 'is' indicates _________.",
          options: ["Past action", "Existence", "Future action"],
          correctAnswer: "Existence",
        },
        {
          question:
            "The sentence 'A dog _________ after a cat' suggests an action in the past.",
          options: ["running", "ran", "run"],
          correctAnswer: "ran",
        },
        {
          question:
            "Verbs made up of more than one word are also known as _________.",
          options: ["Occurrence", "Being", "Compound verbs"],
          correctAnswer: "Compound verbs",
        },
        {
          question: "'It will rain _________.' indicates a future occurrence.",
          options: ["yesterday", "tomorrow", "now"],
          correctAnswer: "tomorrow",
        },
        {
          question: "Shlok got ready ________ school.",
          options: ["in", "for", "to"],
          correctAnswer: "for",
        },
        {
          question:
            "The verb 'are' in the sentence 'Birds _________ flying in the air' indicates _________.",
          options: ["Past action", "Present action", "Future action"],
          correctAnswer: "Present action",
        },
        {
          question:
            "'She has gone to ________.' requires the preposition ________ to complete the sentence.",
          options: ["school, at", "temple, to", "park, for"],
          correctAnswer: "temple, to",
        },
        {
          question:
            "'He is eating his breakfast _________.' signifies a present action.",
          options: ["tomorrow", "now", "yesterday"],
          correctAnswer: "now",
        },
        {
          question:
            "Some verbs tell about the _________, some tell about the present, and some tell about the future.",
          options: ["Past", "Present", "Future"],
          correctAnswer: "Past",
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
            "Articles are determiners. They tell whether a Noun is definite or indefinite.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Indefinite Articles are 'the' and 'a'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Definite Article is only 'an'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Article 'a' is used with words spoken with a non-Vowel or consonant sound.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Article 'an' is used with words spoken with a consonant sound.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The word 'hour' has spelling beginning with 'h' (Consonant) but is spoken with a vowel sound.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Article 'the' is used before a Noun in the following cases: With a Noun that has already been mentioned before.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Article 'the' is used with the names of plants, oceans, rivers, etc.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Before Superlative Degree of Adjectives, 'the' is used, as in 'She is the most intelligent girl in class.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "With the names of newspapers, journals, and classical or religious books, 'the' is used, as in 'The Hindustan Times is a fine book.'",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
