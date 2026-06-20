export const chapter = "Chapter - 17: Prepositions";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the primary function of a preposition?",
            options: [
              "To modify adjectives",
              "To show the relationship between nouns or pronouns",
              "To join independent clauses",
            ],
            answer: "To show the relationship between nouns or pronouns",
          },
          {
            question:
              "Which part of speech does a preposition typically precede?",
            options: ["Verb", "Adverb", "Noun or pronoun"],
            answer: "Noun or pronoun",
          },
          {
            question:
              "In the sentence 'The mouse is under the chair,' what is the preposition?",
            options: ["mouse", "under", "chair"],
            answer: "under",
          },
          {
            question:
              "Select the sentence where a preposition indicates location:",
            options: [
              "The mouse is on the chair.",
              "The mouse is beside the table.",
              "The mouse is chasing the cat.",
            ],
            answer: "The mouse is on the chair.",
          },
          {
            question:
              "What role do words like 'under,' 'on,' 'near,' and 'in' play in the sentences provided?",
            options: ["Verbs", "Adjectives", "Prepositions"],
            answer: "Prepositions",
          },
          {
            question:
              "Which of these words is not a preposition in the given examples?",
            options: ["under", "mouse", "in"],
            answer: "mouse",
          },
          {
            question: "What do prepositions primarily establish?",
            options: ["Timing", "Quantity", "Relationships"],
            answer: "Relationships",
          },
          {
            question:
              "In the sentence 'The mouse is in the hole,' what is the preposition?",
            options: ["mouse", "is", "in"],
            answer: "in",
          },
          {
            question:
              "Which part of speech does a preposition usually introduce?",
            options: ["Noun or pronoun", "Verb", "Adverb"],
            answer: "Noun or pronoun",
          },
          {
            question: "What purpose do prepositions serve in a sentence?",
            options: [
              "To express emotions",
              "To show connections or relationships",
              "To emphasize actions",
            ],
            answer: "To show connections or relationships",
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
            question:
              "The preposition is a word used before a _______ or Pronoun to show relation.",
            options: ["Verb", "Adjective", "Noun"],
            answer: "Noun",
          },
          {
            question:
              "Prepositions primarily indicate the _______ between one thing and another.",
            options: ["Emotions", "Relationship", "Time"],
            answer: "Relationship",
          },
          {
            question:
              "The words 'under,' 'on,' 'near,' and 'in' are examples of _______.",
            options: ["Adjectives", "Verbs", "Prepositions"],
            answer: "Prepositions",
          },
          {
            question:
              "A preposition typically precedes a _______ to indicate relation.",
            options: ["Verb", "Noun", "Adverb"],
            answer: "Noun",
          },
          {
            question:
              "Prepositions primarily establish connections or relationships between _______.",
            options: [
              "Words and phrases",
              "Pronouns and adjectives",
              "Adverbs and verbs",
            ],
            answer: "Words and phrases",
          },
          {
            question:
              "The primary function of a preposition is to show the relation of one thing _______ another.",
            options: ["Alongside", "Without", "With"],
            answer: "With",
          },
          {
            question:
              "Prepositions are used to show the _______ of something in relation to another.",
            options: ["Position", "Movement", "Color"],
            answer: "Position",
          },
          {
            question: "The mouse is _______ the chair.",
            options: ["At", "On", "Between"],
            answer: "On",
          },
          {
            question: "The cup is _______ the table.",
            options: ["Under", "Beside", "Above"],
            answer: "Beside",
          },
          {
            question: "The cat is _______ the tree.",
            options: ["Upon", "Inside", "Climbing"],
            answer: "Upon",
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
            question: "Prepositions modify verbs.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Prepositions are always followed by nouns or pronouns.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Prepositions indicate the relationship between two or more things.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "A prepositional phrase can function as the subject of a sentence.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "All words ending in '-ly' are prepositions.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Prepositions primarily express emotions in a sentence.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A preposition can never come at the end of a sentence.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Prepositions show the location of objects in relation to each other.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Prepositions are not used to indicate time.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The same preposition can have different meanings in different contexts.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
