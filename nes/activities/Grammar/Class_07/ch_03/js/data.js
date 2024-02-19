export const chapter = "Chapter - 3: Adjective";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What type of Adjective answers the question 'Of what kind?'",
          optionA: "Adjectives of Quantity",
          optionB: "Demonstrative Adjectives",
          optionC: "Adjectives of Quality",
          correctAnswer: "C",
        },
        {
          question: "Which Adjective is used to ask a question?",
          optionA: "Possessive Adjectives",
          optionB: "Interrogative Adjectives",
          optionC: "Distributive Adjectives",
          correctAnswer: "B",
        },
        {
          question:
            "In which usage does an Adjective come after the Noun it qualifies?",
          optionA: "Attributive Usage",
          optionB: "Predicative Usage",
          optionC: "Demonstrative Usage",
          correctAnswer: "B",
        },
        {
          question: "What is the Superlative degree used for?",
          optionA: "Comparing two items",
          optionB: "Describing a common attribute",
          optionC: "Expressing the maximum or minimum measure of a quality",
          correctAnswer: "C",
        },
        {
          question:
            "How are Comparative and Superlative degrees formed when the Positive degree ends in 'y'?",
          optionA: "Add -er and -est",
          optionB: "Replace -y with -ier and -iest",
          optionC: "Double the last letter and add -er and -est",
          correctAnswer: "B",
        },
        {
          question:
            "What is the correct order of degrees of comparison in the given sentences?",
          optionA: "Simplest, simpler, simple",
          optionB: "Simple, simpler, simplest",
          optionC: "Simpler, simple, simplest",
          correctAnswer: "B",
        },
        {
          question:
            "Which sentence demonstrates the correct interchange of degrees of comparison?",
          optionA: "Iron is as useful as gold.",
          optionB: "Gold is not more useful than iron.",
          optionC: "Iron is the most useful metal.",
          correctAnswer: "C",
        },
        {
          question:
            "What type of Adjective points out the Noun that has possession of another Noun?",
          optionA: "Demonstrative Adjectives",
          optionB: "Distributive Adjectives",
          optionC: "Possessive Adjectives",
          correctAnswer: "C",
        },
        {
          question: "Which Adjective is used to refer to each one of a Noun?",
          optionA: "Demonstrative Adjectives",
          optionB: "Distributive Adjectives",
          optionC: "Possessive Adjectives",
          correctAnswer: "B",
        },
        {
          question: "What question does an Adjective of Quantity answer?",
          optionA: "Of what kind?",
          optionB: "How much?",
          optionC: "How many?",
          correctAnswer: "B",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Adjectives of Quality tell the ________ of a Noun or Pronoun.",
          optionA: "Quantity",
          optionB: "Size",
          optionC: "Quality",
          correctAnswer: "Quality",
        },
        {
          question:
            "An Adjective of Quantity answers the question 'How ________?'",
          optionA: "Much",
          optionB: "Many",
          optionC: "Few",
          correctAnswer: "Much",
        },
        {
          question:
            "Demonstrative Adjectives point out a Noun and include words like this, that, these, and ________.",
          optionA: "Those",
          optionB: "Them",
          optionC: "There",
          correctAnswer: "Those",
        },
        {
          question:
            "A Possessive Adjective points out the Noun that has ________ of another Noun.",
          optionA: "Quantity",
          optionB: "Possession",
          optionC: "Quality",
          correctAnswer: "Possession",
        },
        {
          question:
            "An Interrogative Adjective is used to ask a question and includes words like what, which, and ________.",
          optionA: "Whose",
          optionB: "Whom",
          optionC: "Where",
          correctAnswer: "Whose",
        },
        {
          question: "Adjectives can be used attributively or _________.",
          optionA: "Verbally",
          optionB: "Predicatively",
          optionC: "Qualitatively",
          correctAnswer: "Predicatively",
        },
        {
          question: "The Comparative degree is used for _________.",
          optionA: "Describing a common attribute",
          optionB: "Expressing the maximum or minimum measure",
          optionC: "Making comparisons",
          correctAnswer: "Making comparisons",
        },
        {
          question:
            "We can form Comparative and Superlative degrees by adding -er and -est to the Positive degree, respectively, except when the Positive degree ends in ________.",
          optionA: "A vowel",
          optionB: "A consonant",
          optionC: "A double consonant",
          correctAnswer: "A double consonant",
        },
        {
          question:
            "In its Predicative Usage, an Adjective can function as a Complement for both ________ or for Object.",
          optionA: "Subject",
          optionB: "Predicate",
          optionC: "Adverb",
          correctAnswer: "Subject",
        },
        {
          question:
            "Interchanging Degrees of Comparison can be done without causing a change in _________.",
          optionA: "Meaning",
          optionB: "Grammar",
          optionC: "Structure",
          correctAnswer: "Meaning",
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
            "Adjectives of Quality describe the quantity of a Noun or Pronoun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "An Adjective of Quantity answers the question 'How many?'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Demonstrative Adjectives include words like what, which, and whose.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A Possessive Adjective points out the quantity of another Noun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Interrogative Adjectives are used to ask questions and include words like where and how.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Adjectives can only be used attributively and not predicatively.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Superlative degree is used to express the minimum measure of a quality.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Comparative and Superlative degrees can be formed by adding -er and -est to the Positive degree, respectively.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In its Predicative Usage, an Adjective can function as a Complement for both Subject and Object.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Interchanging Degrees of Comparison may cause a change in meaning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
