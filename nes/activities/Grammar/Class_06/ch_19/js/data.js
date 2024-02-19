export const chapter = "Chapter - 19: Spelling and Formation of Words";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "How can we form a new word by changing parts of speech?",
          optionA: "Adding a prefix",
          optionB: "Adding a suffix",
          optionC: "Changing from verbs to nouns",
          correctAnswer: "Changing from verbs to nouns",
        },
        {
          question:
            "Which of the following is an example of forming a word from a verb to an adjective?",
          optionA: "Agree - Agreeable",
          optionB: "Belief - Believable",
          optionC: "Final - Finally",
          correctAnswer: "Agree - Agreeable",
        },
        {
          question: "What is a prefix?",
          optionA: "Added at the end of a word",
          optionB: "Added at the beginning of a word",
          optionC: "A word formed by joining two words",
          correctAnswer: "Added at the beginning of a word",
        },
        {
          question:
            "Which of the following is an example of forming a word by adding a suffix?",
          optionA: "Salesman",
          optionB: "Football",
          optionC: "Underground",
          correctAnswer: "Salesman",
        },
        {
          question: "How can we form a new word by making a compound word?",
          optionA: "By adding a prefix",
          optionB: "By changing parts of speech",
          optionC: "By joining two words",
          correctAnswer: "By joining two words",
        },
        {
          question:
            "Which of the following is NOT an example of forming a compound word?",
          optionA: "Honeydew",
          optionB: "Homesick",
          optionC: "Civilise",
          correctAnswer: "Civilise",
        },
        {
          question:
            "What do we add to the end of a word to form a new word by adding a suffix?",
          optionA: "Prefix",
          optionB: "Suffix",
          optionC: "Root word",
          correctAnswer: "Suffix",
        },
        {
          question:
            "Which of the following is formed by changing an adjective to an adverb?",
          optionA: "Strange - Strangely",
          optionB: "Depend - Dependable",
          optionC: "Agree - Agreeable",
          correctAnswer: "Strange - Strangely",
        },
        {
          question:
            "What do we add at the beginning of a word to form a new word by adding a prefix?",
          optionA: "Suffix",
          optionB: "Root word",
          optionC: "Prefix",
          correctAnswer: "Prefix",
        },
        {
          question:
            "Which of the following is NOT formed by changing a noun to another noun?",
          optionA: "Foot - Footage",
          optionB: "Star - Stardom",
          optionC: "Happy - Happily",
          correctAnswer: "Happy - Happily",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "1. Word formation is the creation of a new ________.",
          options: ["a) Definition", "b) Word", "c) Sentence"],
          correctAnswer: "b) Word",
        },
        {
          question:
            "2. We can form a new word in different ways, such as by changing parts of ________.",
          options: ["a) Books", "b) Speech", "c) Thought"],
          correctAnswer: "b) Speech",
        },
        {
          question:
            "3. From ________ to Nouns: Verbs like 'advise' can change to nouns like 'advice.'",
          options: ["a) Adverbs", "b) Verbs", "c) Prepositions"],
          correctAnswer: "b) Verbs",
        },
        {
          question:
            "4. From Nouns to Nouns: Words like 'star' can change to 'stardom,' indicating a change in ________.",
          options: ["a) Meaning", "b) Sound", "c) Color"],
          correctAnswer: "a) Meaning",
        },
        {
          question:
            "5. We can form a new word by adding a ________ at the beginning of a word.",
          options: ["a) Suffix", "b) Prefix", "c) Root"],
          correctAnswer: "b) Prefix",
        },
        {
          question:
            "6. By adding a suffix at the end of a word, we can form a new word. A suffix is added at the ________ of a word.",
          options: ["a) Beginning", "b) Middle", "c) End"],
          correctAnswer: "c) End",
        },
        {
          question: "7. Compound words are formed by joining ________ words.",
          options: ["a) Similar", "b) Opposite", "c) Two"],
          correctAnswer: "c) Two",
        },
        {
          question:
            "8. Changing from adjectives to adverbs involves altering the word's ________.",
          options: ["a) Sound", "b) Meaning", "c) Function"],
          correctAnswer: "c) Function",
        },
        {
          question: "9. Prefixes are added to the ________ of a word.",
          options: ["a) Beginning", "b) Middle", "c) End"],
          correctAnswer: "a) Beginning",
        },
        {
          question:
            "10. By making a compound word, we join ________ words to create a new one.",
          options: ["a) Two", "b) Three", "c) Four"],
          correctAnswer: "a) Two",
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
            "1. The capital letter is always used at the beginning of a sentence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "2. Verbs can be changed to nouns by adding suffixes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "3. Adjectives can be changed to adverbs by adding prefixes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "4. Prefixes are added at the end of a word to form a new word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "5. Compound words are formed by combining two or more words.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "6. Suffixes are added at the beginning of a word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "7. Changing from nouns to nouns involves altering the word's meaning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "8. Adverbs can be changed to adjectives by adding suffixes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "9. Prefixes are used to form new words by adding them to the beginning of a word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "10. Adding a prefix changes the meaning of a word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
