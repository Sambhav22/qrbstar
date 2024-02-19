export const chapter = "Chapter - 20: Play with words";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What does 'playing with words' primarily involve?",
            options: [
              "Serious communication",
              "Creative and playful use of language",
              "Formal writing",
            ],
            answer: "Creative and playful use of language",
          },
          {
            question:
              "Which linguistic device involves using words that sound similar but have different meanings for a humorous effect?",
            options: ["Alliteration", "Metaphor", "Puns"],
            answer: "Puns",
          },
          {
            question: "What is a double entendre in language?",
            options: [
              "A phrase with only one interpretation",
              "A humorous effect created by rhyming words",
              "A phrase with multiple interpretations, often risqué or humorous",
            ],
            answer:
              "A phrase with multiple interpretations, often risqué or humorous",
          },
          {
            question: "Which example demonstrates alliteration?",
            options: [
              "'Time flies like an arrow; fruit flies like a banana.'",
              "'She sells seashells by the seashore.'",
              "'I used to be a baker because I kneaded dough.'",
            ],
            answer: "'She sells seashells by the seashore.'",
          },
          {
            question:
              "What is the purpose of using metaphors and similes in language?",
            options: [
              "To create patterns with words",
              "To draw comparisons between unrelated things for emphasis or vivid imagery",
              "To change the structure of words for humor",
            ],
            answer:
              "To draw comparisons between unrelated things for emphasis or vivid imagery",
          },
          {
            question:
              "Which type of wordplay involves changing the structure of words for a humorous effect?",
            options: ["Acronyms", "Puns", "Alliteration"],
            answer: "Acronyms",
          },
          {
            question:
              "What does the phrase 'She sells seashells by the seashore' exemplify?",
            options: ["Puns", "Rhymes", "Alliteration"],
            answer: "Alliteration",
          },
          {
            question:
              "Who might indulge in playing with words to enhance their expression?",
            options: [
              "Only linguists",
              "Only comedians",
              "Writers, poets, comedians, and anyone enjoying linguistic creativity",
            ],
            answer:
              "Writers, poets, comedians, and anyone enjoying linguistic creativity",
          },
          {
            question:
              "What is the common characteristic of wordplay like puns, double entendres, and alliteration?",
            options: ["Seriousness", "Humor and cleverness", "Simplicity"],
            answer: "Humor and cleverness",
          },
          {
            question:
              "How does playing with words contribute to communication?",
            options: [
              "It makes language complex and difficult to understand.",
              "It adds flair, making language more engaging, memorable, or entertaining.",
              "It is irrelevant in communication.",
            ],
            answer:
              "It adds flair, making language more engaging, memorable, or entertaining.",
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
              "Playing with words refers to the creative and playful use of language to convey meaning or create a specific effect. It involves using language in a clever, witty, or humorous way to produce a desired ____________.",
            options: ["result", "impact", "cause"],
            answer: "impact",
          },
          {
            question:
              "__________ involves words with similar ending sounds, while __________ involves words with similar beginning sounds.",
            options: [
              "Alliteration, Puns",
              "Rhymes, Metaphors",
              "Similes, Acronyms",
            ],
            answer: "Rhymes, Alliteration",
          },
          {
            question:
              "Double entendres express a phrase or sentence in a way that could have more than one interpretation, often with one of them being ____________ or humorous.",
            options: ["scientific", "neutral", "risqué"],
            answer: "risqué",
          },
          {
            question:
              "Word manipulation may include using an ____________ or initialism creatively for a humorous or clever effect.",
            options: ["idiom", "acronym", "abbreviation"],
            answer: "acronym",
          },
          {
            question:
              "Playing with words requires a good understanding of language and a willingness to experiment with ____________ elements.",
            options: ["mathematical", "linguistic", "geographical"],
            answer: "linguistic",
          },
          {
            question:
              "Metaphors and similes involve drawing comparisons between two seemingly ____________ things for emphasis or vivid imagery.",
            options: ["related", "unrelated", "complex"],
            answer: "unrelated",
          },
          {
            question:
              "She sells seashells by the seashore is an example of ____________.",
            options: ["rhyming", "alliteration", "metaphor"],
            answer: "alliteration",
          },
          {
            question:
              "Playing with words adds flair to communication and can make language more engaging, memorable, or ____________.",
            options: ["informative", "complicated", "entertaining"],
            answer: "entertaining",
          },
          {
            question:
              "Writers, poets, comedians, and anyone who enjoys linguistic creativity often indulge in playing with words to enhance their ____________.",
            options: ["confusion", "expression", "simplicity"],
            answer: "expression",
          },
          {
            question:
              "The phrase 'Time flies like an arrow; fruit flies like a banana' is an example of a ____________.",
            options: ["simile", "pun", "double entendre"],
            answer: "pun",
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
              "Playing with words involves using language in a clever, witty, or humorous way to produce a desired impact.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Double entendres express a phrase in a way that could have more than one interpretation, often with one of them being risqué or humorous.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Rhymes involve creating patterns with words based on their sounds.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Metaphors and similes draw comparisons between two unrelated things for emphasis or vivid imagery.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Word manipulation may include using an acronym or initialism creatively for a serious effect.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Playing with words requires a good understanding of language and a willingness to experiment with linguistic elements.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Alliteration involves using words that sound similar but have different meanings for a humorous effect.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Playing with words makes language more complicated and difficult to understand.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Writers, poets, comedians, and anyone who enjoys linguistic creativity rarely indulge in playing with words.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "She sells seashells by the seashore is an example of a metaphor.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
