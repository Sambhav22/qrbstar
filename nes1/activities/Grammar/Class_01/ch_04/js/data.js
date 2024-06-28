export const chapter = "Chapter - 4: Nouns ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What are words that denote people, animals, or things called?",
            options: {
              a: "Verbs",
              b: "Adjectives",
              c: "Nouns",
            },
            answer: "c",
          },
          {
            question: "Which of the following is an example of a noun?",
            options: {
              a: "Running",
              b: "Thinking",
              c: "Table",
            },
            answer: "c",
          },
          {
            question: "Which category do names of places belong to?",
            options: {
              a: "Adverbs",
              b: "Pronouns",
              c: "Nouns",
            },
            answer: "c",
          },
          {
            question: "What type of words are 'boy' and 'girl' in grammar?",
            options: {
              a: "Adjectives",
              b: "Nouns",
              c: "Adverbs",
            },
            answer: "b",
          },
          {
            question:
              "Which term refers to names of people, animals, places, or things?",
            options: {
              a: "Pronouns",
              b: "Adverbs",
              c: "Nouns",
            },
            answer: "c",
          },
          {
            question: "Which word from the options is a noun?",
            options: {
              a: "Quickly",
              b: "Hospital",
              c: "Beautifully",
            },
            answer: "b",
          },
          {
            question: "What is the main function of a noun in a sentence?",
            options: {
              a: "Describe actions",
              b: "Identify a person, place, or thing",
              c: "Show emotions",
            },
            answer: "b",
          },
          {
            question: "Among the given words, which one represents a noun?",
            options: {
              a: "Jumping",
              b: "Building",
              c: "Teacher",
            },
            answer: "c",
          },
          {
            question: "Which word is a noun in the list?",
            options: {
              a: "Running",
              b: "Chair",
              c: "Happily",
            },
            answer: "b",
          },
          {
            question: "What do nouns primarily do in a sentence?",
            options: {
              a: "Express time",
              b: "Indicate location",
              c: "Name entities",
            },
            answer: "c",
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
              "Nouns are words that represent ___________, ___________, or ___________.",
            options: {
              a: "Actions, emotions, places",
              b: "People, animals, things",
              c: "Thoughts, verbs, descriptions",
            },
            answer: "b",
          },
          {
            question:
              "A noun can be the name of a ___________, ___________, ___________, or ___________.",
            options: {
              a: "Feeling, time, direction, purpose",
              b: "Person, plant, idea, place",
              c: "Color, size, weight, shape",
            },
            answer: "b",
          },
          {
            question:
              "Examples of nouns include ___________, ___________, ___________, and ___________.",
            options: {
              a: "Running, thinking, understanding, jumping",
              b: "Table, chair, happily, quickly",
              c: "Boy, girl, school, hospital",
            },
            answer: "c",
          },
          {
            question:
              "Nouns are used to ___________ or ___________ a person, animal, place, or thing.",
            options: {
              a: "Hide, disguise",
              b: "Name, identify",
              c: "Change, modify",
            },
            answer: "b",
          },
          {
            question:
              "Names of ___________ such as cities, countries, and rivers are categorized as nouns.",
            options: {
              a: "Emotions",
              b: "Places",
              c: "Ideas",
            },
            answer: "b",
          },
          {
            question:
              "A noun is an essential part of speech that helps in ___________ the world around us.",
            options: {
              a: "Describing",
              b: "Understanding",
              c: "Interpreting",
            },
            answer: "b",
          },
          {
            question:
              "___________ and ___________ are examples of nouns that represent living beings.",
            options: {
              a: "Laughing, running",
              b: "Cat, dog",
              c: "Yellow, green",
            },
            answer: "b",
          },
          {
            question:
              "Nouns help in ___________ and ___________ individuals, animals, places, or things in sentences.",
            options: {
              a: "Ignoring, avoiding",
              b: "Referring, representing",
              c: "Changing, transforming",
            },
            answer: "b",
          },
          {
            question:
              "The word 'table' is a noun that represents a ___________.",
            options: {
              a: "Feeling",
              b: "Thing",
              c: "Action",
            },
            answer: "b",
          },
          {
            question:
              "In grammar, ___________ are categorized as nouns as they represent specific people.",
            options: {
              a: "Verbs",
              b: "Pronouns",
              c: "Adjectives",
            },
            answer: "b",
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
            question:
              "Nouns are words that represent people, animals, or things.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
          {
            question: "Adjectives describe actions or states.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question:
              "Verbs are words that typically express actions, states, or occurrences.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
          {
            question: "Pronouns replace nouns in sentences.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
          {
            question: "Adverbs modify verbs, adjectives, or other adverbs.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
          {
            question: "Conjunctions show actions in a sentence.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question:
              "Prepositions express the relationship between a noun or pronoun and other words.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
          {
            question: "Interjections are used to join sentences together.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
          {
            question: "Articles are a type of determiner.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "a",
          },
          {
            question: "Proper nouns always start with a lowercase letter.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "b",
          },
        ],
      },
    ],
  };
}

export var activityData;
