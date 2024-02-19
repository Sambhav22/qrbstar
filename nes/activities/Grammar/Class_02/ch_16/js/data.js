export const chapter = "Chapter - 16: Adverbs ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What does an adverb add more information about?",
          optionA: "Noun",
          optionB: "Adjective",
          optionC: "Pronoun",
          correctAnswer: "Adjective",
        },
        {
          question: "Where is an adverb commonly used, especially?",
          optionA: "Before a verb",
          optionB: "After a noun",
          optionC: "After a verb",
          correctAnswer: "After a verb",
        },
        {
          question: "Which of the following sentences contains an adverb?",
          optionA: "The cat is black.",
          optionB: "She danced beautifully.",
          optionC: "He likes ice cream.",
          correctAnswer: "She danced beautifully.",
        },
        {
          question:
            "What is the purpose of the words 'quickly' and 'sweetly' in the examples?",
          optionA: "Describe a noun",
          optionB: "Provide additional information about verbs",
          optionC: "Modify adjectives",
          correctAnswer: "Provide additional information about verbs",
        },
        {
          question:
            "In the sentence 'He is a very good boy,' what part of speech is 'very'?",
          optionA: "Noun",
          optionB: "Verb",
          optionC: "Adverb",
          correctAnswer: "Adverb",
        },
        {
          question: "Identify the adverb in the following list:",
          optionA: "Adequate",
          optionB: "Bold",
          optionC: "Quickly",
          correctAnswer: "Quickly",
        },
        {
          question:
            "What do the adverbs 'beautifully' and 'strongly' modify in the given list?",
          optionA: "Nouns",
          optionB: "Verbs",
          optionC: "Adjectives",
          correctAnswer: "Verbs",
        },
        {
          question:
            "Which word is an adjective in the sentence 'He is a good boy'?",
          optionA: "He",
          optionB: "Good",
          optionC: "Boy",
          correctAnswer: "Good",
        },
        {
          question:
            "What is the function of the adverb 'shortly' in the list of adverbs?",
          optionA: "Describing a noun",
          optionB: "Modifying a verb",
          optionC: "Introducing a sentence",
          correctAnswer: "Modifying a verb",
        },
        {
          question:
            "Choose the correct adverb that matches with the adjective 'adequate':",
          optionA: "Adequately",
          optionB: "Boldly",
          optionC: "Quickly",
          correctAnswer: "Adequately",
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
            "An adverb adds more information about an _______ or a _______.",
          options: ["Noun", "Adjective", "Verb"],
          correctAnswer: "Verb",
        },
        {
          question: "The adverb is used especially _______ a Verb.",
          options: ["Before", "After", "Between"],
          correctAnswer: "After",
        },
        {
          question:
            "A word that tells more about an Adjective or a Verb is called an _______.",
          options: ["Noun", "Adverb", "Pronoun"],
          correctAnswer: "Adverb",
        },
        {
          question:
            "In the sentence 'The horse ran quickly,' the word 'quickly' adds something to the meaning of the verb _______.",
          options: ["Walked", "Jumped", "Ran"],
          correctAnswer: "Ran",
        },
        {
          question:
            "The word 'good' in the sentence 'He is a very good boy' is an _______.",
          options: ["Adjective", "Noun", "Adverb"],
          correctAnswer: "Adjective",
        },
        {
          question:
            "The adverb 'beautifully' adds something to the meaning of the _______.",
          options: ["Noun", "Adjective", "Verb"],
          correctAnswer: "Verb",
        },
        {
          question:
            "The adverb 'shortly' in the list of adverbs is used to modify a _______.",
          options: ["Noun", "Adjective", "Verb"],
          correctAnswer: "Verb",
        },
        {
          question:
            "The adverb 'busily' is derived from the adjective _______.",
          options: ["Busy", "Bold", "Short"],
          correctAnswer: "Busy",
        },
        {
          question:
            "The adverb 'ably' is used to modify the adjective _______.",
          options: ["Adequate", "Bold", "Able"],
          correctAnswer: "Able",
        },
        {
          question:
            "The adverb 'strongly' adds something to the meaning of the _______.",
          options: ["Noun", "Adjective", "Verb"],
          correctAnswer: "Adjective",
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
          question: "An adverb adds more information about a Noun or a Verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A word that tells more about an Adjective or a Verb is called a Noun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The adverb is used especially before a Verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the sentence 'The horse ran quickly,' the word 'quickly' modifies the verb 'ran'.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The adverb 'beautifully' is derived from the adjective 'Busy'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The adverb 'shortly' is used to modify a Noun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The word 'good' in the sentence 'He is a very good boy' is an Adjective.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The adverb 'ably' is used to modify the adjective 'Adequate'.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The adverb 'strongly' adds something to the meaning of a Noun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The adverb 'busily' is used especially after a Verb.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
