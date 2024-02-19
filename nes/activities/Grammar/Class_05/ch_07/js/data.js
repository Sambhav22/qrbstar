export const chapter = "Chapter - 7:Adjectives";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What does an Adjective primarily do?",
          optionA: "Modify Verbs",
          optionB: "Describe Nouns or Pronouns",
          optionC: "Replace Nouns",
          correctAnswer: "Describe Nouns or Pronouns",
        },
        {
          question:
            "Which of the following sentences has an Adjective placed after the Noun?",
          optionA: "She has a very soft skin.",
          optionB: "Our cow is brown.",
          optionC: "We have a brown cow.",
          correctAnswer: "Our cow is brown.",
        },
        {
          question:
            "What kind of Adjective is 'brave' in the phrase 'a brave soldier'?",
          optionA: "Adjective of Quality",
          optionB: "Demonstrative Adjective",
          optionC: "Possessive Adjective",
          correctAnswer: "Adjective of Quality",
        },
        {
          question:
            "Which category do words like 'what,' 'which,' and 'whose' fall under?",
          optionA: "Adjectives of Quality",
          optionB: "Demonstrative Adjectives",
          optionC: "Interrogative Adjectives",
          correctAnswer: "Interrogative Adjectives",
        },
        {
          question: "What do Adjectives of Quantity tell us about?",
          optionA: "Color of an object",
          optionB: "Size of an object",
          optionC: "Quantity or amount of Nouns",
          correctAnswer: "Quantity or amount of Nouns",
        },
        {
          question:
            "Identify the Possessive Adjective in the sentence: 'That is her bicycle.'",
          optionA: "her",
          optionB: "That",
          optionC: "is",
          correctAnswer: "her",
        },
        {
          question: "Which sentence contains a Demonstrative Adjective?",
          optionA: "That girl is my friend.",
          optionB: "The short tree has a thick stem.",
          optionC: "Shubham is a smart boy.",
          correctAnswer: "That girl is my friend.",
        },
        {
          question: "What is the purpose of Demonstrative Adjectives?",
          optionA: "Ask questions",
          optionB: "Show possession",
          optionC: "Point out persons or things",
          correctAnswer: "Point out persons or things",
        },
        {
          question:
            "What kind of Adjective is 'five-year-old' in the phrase 'a five-year-old child'?",
          optionA: "Adjective of Quantity",
          optionB: "Demonstrative Adjective",
          optionC: "Adjectival Phrase",
          correctAnswer: "Adjectival Phrase",
        },
        {
          question:
            "In the sentence 'Their team won the championship,' what type of Adjective is 'Their'?",
          optionA: "Possessive Adjective",
          optionB: "Demonstrative Adjective",
          optionC: "Adjective of Quality",
          correctAnswer: "Possessive Adjective",
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
          question: "An Adjective is a __________ word.",
          options: {
            A: "Action",
            B: "Describing",
            C: "Pronoun",
          },
          correctAnswer: "Describing",
        },
        {
          question: "Adjectives tell us more about __________ or __________.",
          options: {
            A: "Verbs, Nouns",
            B: "Adverbs, Pronouns",
            C: "Nouns, Pronouns",
          },
          correctAnswer: "Nouns, Pronouns",
        },
        {
          question:
            "Demonstrative Adjectives point out __________ or __________.",
          options: {
            A: "Colors, Shapes",
            B: "Persons, Things",
            C: "Actions, Events",
          },
          correctAnswer: "Persons, Things",
        },
        {
          question:
            "Adjectives of Quantity tell us the __________ or __________ of Nouns.",
          options: {
            A: "Size, Shape",
            B: "Color, Texture",
            C: "Quantity, Amount",
          },
          correctAnswer: "Quantity, Amount",
        },
        {
          question:
            "Possessive Adjectives show __________ of something or someone.",
          options: {
            A: "Possession",
            B: "Origin",
            C: "Purpose",
          },
          correctAnswer: "Possession",
        },
        {
          question: "Interrogative Adjectives are used to ask __________.",
          options: {
            A: "Commands",
            B: "Questions",
            C: "Demands",
          },
          correctAnswer: "Questions",
        },
        {
          question:
            "Adjectival Phrases are made up of more than __________ word.",
          options: {
            A: "Two",
            B: "Three",
            C: "Four",
          },
          correctAnswer: "Two",
        },
        {
          question:
            "Adjectives are generally placed before a Noun, but they can be placed after a Noun __________.",
          options: {
            A: "Rarely",
            B: "Frequently",
            C: "Occasionally",
          },
          correctAnswer: "Occasionally",
        },
        {
          question: "Adjectives of Quality add a __________ to a Noun.",
          options: {
            A: "Quantity",
            B: "Quality",
            C: "Size",
          },
          correctAnswer: "Quality",
        },
        {
          question:
            "Demonstrative Adjectives can be __________, __________, __________, or __________.",
          options: {
            A: "This, That, These, Those",
            B: "Here, There, Everywhere, Nowhere",
            C: "Him, Her, It, Them",
          },
          correctAnswer: "This, That, These, Those",
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
            "MSWLogo commands PRINT and LABEL are used for performing logical calculations.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "The LABEL command in MSWLogo displays the result of arithmetic calculations in the Commander window.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "You can use the PRINT command to display arithmetic calculations in the Graphic screen.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "The QUOTIENT command in MSWLogo is used to find the product of two numbers.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Logical operations in MSWLogo involve the comparison of one value with another, giving results as true or false.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "The REMAINDER command in MSWLogo displays the quotient in the Commander window.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Arithmetic operators can be used while drawing figures with MSWLogo commands such as FORWARD (FD) and BACKWARD (BK).",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "The primary reason for the destruction of wildlife in the prairies is natural disasters and pollution.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "The prairies are often referred to as the 'Granaries of the World' due to their surplus coffee production.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "The PRINT command in MSWLogo is used to display the result of arithmetic calculations in the Commander window.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
