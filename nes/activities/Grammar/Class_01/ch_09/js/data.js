export const chapter = "Chapter - 9: Verbs ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which of the following defines a verb?",
            options: [
              "A word describing an object",
              "A word indicating action",
              "A word denoting a place",
            ],
            answer: "A word indicating action",
          },
          {
            question: "What is the term used for a word that shows action?",
            options: ["Adjective", "Verb", "Noun"],
            answer: "Verb",
          },
          {
            question: "Which among the listed words is an example of a verb?",
            options: ["Tree", "Sing", "Blue"],
            answer: "Sing",
          },
          {
            question:
              "What do verbs like 'sing,' 'write,' and 'kick' have in common?",
            options: [
              "They represent colors",
              "They indicate emotions",
              "They represent actions",
            ],
            answer: "They represent actions",
          },
          {
            question:
              "Which category do words like 'jump' and 'bark' belong to?",
            options: ["Adverbs", "Prepositions", "Verbs"],
            answer: "Verbs",
          },
          {
            question:
              "What type of word is 'kick' in the sentence, 'She likes to kick the ball'?",
            options: ["Adjective", "Noun", "Verb"],
            answer: "Verb",
          },
          {
            question: "In the phrase 'write a story,' which word is the verb?",
            options: ["Write", "A", "Story"],
            answer: "Write",
          },
          {
            question:
              "Which word represents an action among the options below?",
            options: ["Table", "Walk", "Happy"],
            answer: "Walk",
          },
          {
            question: "What is the primary function of a verb in a sentence?",
            options: [
              "Describing a place",
              "Expressing an action or state",
              "Identifying an object",
            ],
            answer: "Expressing an action or state",
          },
          {
            question:
              "Which word from the examples provided represents an action?",
            options: ["Sing", "Tree", "Blue"],
            answer: "Sing",
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
            question: "A Verb shows ___________.",
            options: ["Emotions", "Action", "Description"],
            answer: "Action",
          },
          {
            question: "A word which shows action is called ___________.",
            options: ["Noun", "Verb", "Adjective"],
            answer: "Verb",
          },
          {
            question: "Example: sing, write, jump, kick, ___________.",
            options: ["Think", "Bark", "Fly"],
            answer: "Bark",
          },
          {
            question: "Verbs are words that express ___________.",
            options: ["Thoughts", "Actions", "Colors"],
            answer: "Actions",
          },
          {
            question: "Verbs like 'jump' and 'bark' indicate ___________.",
            options: ["Adverbs", "Prepositions", "Actions"],
            answer: "Actions",
          },
          {
            question: "'She likes to kick ___________.'",
            options: ["Softly", "Quickly", "The ball"],
            answer: "The ball",
          },
          {
            question:
              "The function of a verb in a sentence is primarily to express ___________.",
            options: ["Places", "Actions or states", "Objects"],
            answer: "Actions or states",
          },
          {
            question: "Words like 'sing' represent ___________.",
            options: ["Colors", "Actions", "Shapes"],
            answer: "Actions",
          },
          {
            question:
              "In 'The dog likes to ___________,' the missing word is a ___________.",
            options: ["Run, Noun", "Run, Verb", "Dog, Noun"],
            answer: "Run, Verb",
          },
          {
            question: "Verbs demonstrate ___________ in language.",
            options: ["Emotions", "Movement", "Silence"],
            answer: "Movement",
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
            question: "The main purpose of verbs is to describe objects.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Verbs can express actions and states.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Nouns and verbs perform similar functions in sentences.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Adjectives are types of verbs.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Prepositions often indicate the time an action occurred.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Verbs like 'run' and 'sing' represent actions.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Verbs cannot be modified or conjugated to fit different tenses.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "'Jump,' 'sit,' and 'eat' are examples of verbs.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Verbs always come after the subject in a sentence.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Verbs convey the actions or occurrences in a sentence.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
