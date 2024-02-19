export const chapter = "Chapter - 7: adjectives";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What do adjectives describe?",
          optionA: "Verbs or Adverbs",
          optionB: "Nouns or Pronouns",
          optionC: "Conjunctions or Prepositions",
          correctAnswer: "Nouns or Pronouns",
        },
        {
          question:
            "In which sentence is the adjective placed before the noun?",
          optionA: "The dinner is delicious.",
          optionB: "The sun is bright.",
          optionC: "A tall man ran fast.",
          correctAnswer: "A tall man ran fast.",
        },
        {
          question:
            "Which type of adjective tells about the color of an object?",
          optionA: "Adjectives of Quality",
          optionB: "Adjectives of Quantity",
          optionC: "Adjectives of Color",
          correctAnswer: "Adjectives of Color",
        },
        {
          question: "What do adjectives of quantity tell us?",
          optionA: "Quality of a noun",
          optionB: "Quantity or amount of a noun",
          optionC: "Origin of a noun",
          correctAnswer: "Quantity or amount of a noun",
        },
        {
          question: "Which sentence contains an adjective of origin?",
          optionA: "The girl is beautiful.",
          optionB: "An Indian boy came into the room.",
          optionC: "I have three friends.",
          correctAnswer: "An Indian boy came into the room.",
        },
        {
          question: "What do adjectives of quality add to a noun?",
          optionA: "Color",
          optionB: "Size",
          optionC: "Quality",
          correctAnswer: "Quality",
        },
        {
          question: "Which adjective tells about the material of a noun?",
          optionA: "Adjective of Quality",
          optionB: "Adjective of Quantity",
          optionC: "Adjective of Material",
          correctAnswer: "Adjective of Material",
        },
        {
          question: "What does an adjective of number tell us?",
          optionA: "Quantity or amount",
          optionB: "Definite or indefinite number",
          optionC: "Origin of a noun",
          correctAnswer: "Definite or indefinite number",
        },
        {
          question:
            "In the sentence 'The rope is very long,' where is the adjective placed?",
          optionA: "Before the noun",
          optionB: "After the noun",
          optionC: "Between the words 'is' and 'very'",
          correctAnswer: "After the noun",
        },
        {
          question: "Which of the following is an adjective of quantity?",
          optionA: "Beautiful",
          optionB: "Enough",
          optionC: "Wise",
          correctAnswer: "Enough",
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
            "Adjectives are describing words. They describe _____ or Pronouns.",
          optionA: "Verbs",
          optionB: "Nouns",
          optionC: "Adverbs",
          correctAnswer: "Nouns",
        },
        {
          question:
            'Adjectives can be used before a Noun; for example: "A _____ man ran fast."',
          optionA: "Small",
          optionB: "Bright",
          optionC: "Delicious",
          correctAnswer: "Small",
        },
        {
          question:
            'Some Adjectives tell the _____ of Nouns. "The apple is _____."',
          optionA: "Quantity",
          optionB: "Color",
          optionC: "Size",
          correctAnswer: "Color",
        },
        {
          question:
            'Adjectives of Quality add a _____ to a Noun. "Neetu is an _____ girl."',
          optionA: "Quantity",
          optionB: "Origin",
          optionC: "Quality",
          correctAnswer: "Quality",
        },
        {
          question:
            'The Adjectives of Quantity tell us the _____ of Nouns. "Upasana has _____ money to buy this book."',
          optionA: "Colorful",
          optionB: "Enough",
          optionC: "Beautiful",
          correctAnswer: "Enough",
        },
        {
          question:
            'Adjectives of Number tell us _____ number of persons or things. "Kamna has _____ bags."',
          optionA: "Four",
          optionB: "Great",
          optionC: "Little",
          correctAnswer: "Four",
        },
        {
          question:
            "The words 'The rope is very long' contain an adjective placed _____ the noun.",
          optionA: "Before",
          optionB: "After",
          optionC: "Between",
          correctAnswer: "After",
        },
        {
          question:
            'Adjectives of _____ tell us about the material of a Noun. "The woman bought a gold _____."',
          optionA: "Color",
          optionB: "Quantity",
          optionC: "Material",
          correctAnswer: "Material",
        },
        {
          question:
            'Adjectives of _____ tell about the use or material of a Noun. "This is a grammar _____."',
          optionA: "Color",
          optionB: "Quantity",
          optionC: "Material",
          correctAnswer: "Material",
        },
        {
          question:
            'Adjectives of Quality add a _____ to a Noun. "The girl is _____."',
          optionA: "Size",
          optionB: "Beautiful",
          optionC: "Quantity",
          correctAnswer: "Beautiful",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Adjectives describe Verbs or Adverbs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Adjectives can only be used after a Noun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Some Adjectives tell about the size of Nouns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Adjectives of Quantity tell about the color of Nouns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Adjectives of Quality add a quality to a Noun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Adjectives of Number tell us the quantity of persons or things.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The Halt button in MSWLogo starts the program execution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Trace button in MSWLogo turns on tracing for debugging.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Adjectives of Quantity tell us about the material of a Noun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The MSWLogo cursor is responsible for drawing on the Logo screen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
