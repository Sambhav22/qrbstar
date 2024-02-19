export const chapter = "Chapter - 18: Prepositions";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is a preposition?",
          optionA: "A word placed after a noun",
          optionB: "A word placed before a verb",
          optionC: "A word placed before a noun or pronoun",
          correctAnswer: "A word placed before a noun or pronoun",
        },
        {
          question:
            "Which of the following sentences uses a prepositional phrase?",
          optionA: "The cat is sleeping.",
          optionB: "She is the lady whom they are looking at.",
          optionC: "I bought a new car.",
          correctAnswer: "She is the lady whom they are looking at.",
        },
        {
          question:
            "In the sentence, 'He was born in 1990,' where is the preposition placed?",
          optionA: "Before 'born'",
          optionB: "Before '1990'",
          optionC: "After '1990'",
          correctAnswer: "Before '1990'",
        },
        {
          question: "When can a preposition be placed after its object?",
          optionA: "Always",
          optionB: "When using an interrogative pronoun or a relative pronoun",
          optionC: "Never",
          correctAnswer:
            "When using an interrogative pronoun or a relative pronoun",
        },
        {
          question:
            "Which preposition is used to show place in the sentence 'A cat is on the table'?",
          optionA: "under",
          optionB: "in",
          optionC: "on",
          correctAnswer: "on",
        },
        {
          question:
            "What is the correct preposition in the sentence 'Her brother will return at 9 o'clock'?",
          optionA: "in",
          optionB: "at",
          optionC: "on",
          correctAnswer: "at",
        },
        {
          question:
            "Which sentence uses a preposition to show how someone travels?",
          optionA: "She can live without food for five days.",
          optionB: "She goes to school without a bus.",
          optionC: "She goes to school by bus.",
          correctAnswer: "She goes to school by bus.",
        },
        {
          question:
            "When talking about time, which preposition is used in 'Her brother will return about 9 o'clock'?",
          optionA: "around",
          optionB: "about",
          optionC: "between",
          correctAnswer: "about",
        },
        {
          question:
            "In the sentence 'I bought this television last month,' why is there no preposition before 'last month'?",
          optionA: "Nouns of time don't require prepositions",
          optionB: "It's a grammatical error.",
          optionC: "Prepositions are optional in this case.",
          correctAnswer: "Nouns of time don't require prepositions",
        },
        {
          question:
            "Which category of prepositions is used to describe how people travel or do things?",
          optionA: "Place prepositions",
          optionB: "Time prepositions",
          optionC: "Action prepositions",
          correctAnswer: "Action prepositions",
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
            "A preposition is a word placed before a __________ or __________ to express its relation with something else.",
          options: ["Verb", "Adjective", "Noun", "Pronoun"],
          correctAnswer: "Noun, Pronoun",
        },
        {
          question: "Prepositional phrases contain two or more __________.",
          options: ["Verbs", "Adjectives", "Words"],
          correctAnswer: "Words",
        },
        {
          question:
            "According to the text, a preposition is generally placed before its __________.",
          options: ["Subject", "Object", "Verb"],
          correctAnswer: "Object",
        },
        {
          question:
            "If an interrogative pronoun is used in a sentence, a preposition can be placed after its __________.",
          options: ["Subject", "Object", "Verb"],
          correctAnswer: "Object",
        },
        {
          question:
            "Some common prepositions used to show place include: on, at, beside, down, under, outside, below, inside, behind, __________.",
          options: ["Above", "Within", "Near"],
          correctAnswer: "Above",
        },
        {
          question: "Adverbs of time are used to show the __________.",
          options: [
            "Manner of an action",
            "Place of an action",
            "Time of an action",
          ],
          correctAnswer: "Time of an action",
        },
        {
          question:
            "In the sentence 'He speaks slowly,' the adverb 'slowly' modifies the meaning of the __________.",
          options: ["Subject", "Object", "Verb"],
          correctAnswer: "Verb",
        },
        {
          question: "Adverbs of degree show the __________.",
          options: [
            "Manner of an action",
            "Place of an action",
            "Extent or degree of an action",
          ],
          correctAnswer: "Extent or degree of an action",
        },
        {
          question:
            "If a preposition modifies the whole sentence, it should be placed __________.",
          options: [
            "At the end of the sentence",
            "At the beginning of the sentence",
            "In the middle of the sentence",
          ],
          correctAnswer: "At the beginning of the sentence",
        },
        {
          question:
            "In the sentence 'I bought this television last month,' a preposition is not used before 'last month' because nouns of time don't require __________.",
          options: ["Articles", "Prepositions", "Adjectives"],
          correctAnswer: "Prepositions",
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
            "A preposition is a word placed after a Noun or Pronoun to express its relation with something else.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Prepositional phrases contain only one word.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "A preposition is always placed after its object.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A preposition can be placed after its object if an Interrogative Pronoun is used in the sentence.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Adverbs of time are used to show the place of an action.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adverbs of Manner show the extent or degree of an action.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "If a preposition modifies the whole sentence, it should be placed at the end of the sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Adverbs are always placed between the Helping and the Main Verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adverbs of Degree show the time of an action.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "When an Adverb modifies an Intransitive Verb, it occurs before the subject.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
