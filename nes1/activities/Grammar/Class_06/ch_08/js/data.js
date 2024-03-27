export const chapter = "Chapter - 8: Subject and Predicate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the definition of a subject in a sentence?",
          optionA: "The part that completes the sense of a sentence.",
          optionB: "The part about which something is said.",
          optionC: "The part that consists of verbs and complements.",
          correctAnswer: "The part about which something is said.",
        },
        {
          question:
            "Which of the following may be included in the subject of a sentence?",
          optionA: "Verbs and adverbs.",
          optionB: "Determiners, adjectives, and nouns.",
          optionC: "Prepositions and conjunctions.",
          correctAnswer: "Determiners, adjectives, and nouns.",
        },
        {
          question:
            "In the sentence 'It is raining much,' what is the subject?",
          optionA: "Raining",
          optionB: "Much",
          optionC: "It",
          correctAnswer: "It",
        },
        {
          question:
            "What type of verb agreement should be maintained between the subject and verb in a sentence?",
          optionA: "Agreement in tense only.",
          optionB: "Agreement in number and person.",
          optionC: "Agreement in punctuation.",
          correctAnswer: "Agreement in number and person.",
        },
        {
          question: "When should a singular verb be used with a plural noun?",
          optionA: "Always.",
          optionB: "When the noun indicates a singular entity.",
          optionC: "When the noun is countable.",
          correctAnswer: "When the noun indicates a singular entity.",
        },
        {
          question:
            "Which sentence demonstrates the correct use of a collective noun as the subject?",
          optionA: "The Science Club is exhibiting some new machines.",
          optionB: "The Student Parliament have voted for the agenda.",
          optionC: "The team have arrived on the ground.",
          correctAnswer: "The Science Club is exhibiting some new machines.",
        },
        {
          question:
            "How should the verb agreement be in a sentence with a compound subject connected by 'or'?",
          optionA: "Agree with the first part of the subject.",
          optionB: "Agree with the last part of the subject.",
          optionC: "No specific rule.",
          correctAnswer: "Agree with the last part of the subject.",
        },
        {
          question: "When is a singular verb used with a plural noun?",
          optionA: "When the noun is countable.",
          optionB: "When the noun indicates a plural entity.",
          optionC: "When the noun is an uncountable noun.",
          correctAnswer: "When the noun is an uncountable noun.",
        },
        {
          question:
            "Which sentence demonstrates the correct use of a relative pronoun in verb agreement?",
          optionA: "Divank is one of those students who is not disciplined.",
          optionB: "Divank is one of those students who are not disciplined.",
          optionC: "One of the students who was rude was not selected.",
          correctAnswer:
            "Divank is one of those students who are not disciplined.",
        },
        {
          question:
            "In the sentence 'Most of the budget has been released,' why is a singular verb used?",
          optionA: "Because 'budget' is countable.",
          optionB: "Because 'most of' makes the subject singular.",
          optionC: "Because 'budget' indicates a plural entity.",
          correctAnswer: "Because 'most of' makes the subject singular.",
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
            "The ________ of a sentence is the part about which something is said.",
          optionA: "Predicate",
          optionB: "Subject",
          optionC: "Complement",
          correctAnswer: "Subject",
        },
        {
          question:
            "Determiners like a, an, this, that, these, those, your, my, his, her, their, its, etc. are examples of ________ in a sentence.",
          optionA: "Adjectives",
          optionB: "Nouns",
          optionC: "Determiners",
          correctAnswer: "Determiners",
        },
        {
          question: "A Predicate may comprise one or more _________.",
          optionA: "Adjectives",
          optionB: "Verbs",
          optionC: "Pronouns",
          correctAnswer: "Verbs",
        },
        {
          question:
            "In a sentence, the Verb and the Subject must be in agreement in terms of _________.",
          optionA: "Tense",
          optionB: "Number and Person",
          optionC: "Punctuation",
          correctAnswer: "Number and Person",
        },
        {
          question:
            "When a Collective Noun is used as a Subject, a Singular Verb is used if it is considered as a ________ entity.",
          optionA: "Singular",
          optionB: "Plural",
          optionC: "Both Singular and Plural",
          correctAnswer: "Singular",
        },
        {
          question:
            "Variables cannot start with a ________ according to the rules for creating variables in Python.",
          optionA: "Number",
          optionB: "Special character",
          optionC: "Underscore",
          correctAnswer: "Number",
        },
        {
          question:
            "Operators in Python perform operations on ________ and ________.",
          optionA: "Nouns, pronouns",
          optionB: "Variables, values",
          optionC: "Adjectives, adverbs",
          correctAnswer: "Variables, values",
        },
        {
          question:
            "________ is the function in Python that helps identify the data type of a variable.",
          optionA: "print()",
          optionB: "len()",
          optionC: "type()",
          correctAnswer: "type()",
        },
        {
          question:
            "When a compound subject is connected by 'or,' the Verb should agree with the part immediately ________ the Verb.",
          optionA: "Before",
          optionB: "After",
          optionC: "Within",
          correctAnswer: "After",
        },
        {
          question:
            "The Science Club is exhibiting some new machines. In this sentence, 'Science Club' is treated as a ________ entity.",
          optionA: "Singular",
          optionB: "Plural",
          optionC: "Both Singular and Plural",
          correctAnswer: "Singular",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The Predicate is the part about which something is said.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Determiners like a, an, this, that, these, those, your, my, his, her, their, its, etc. are considered adjectives.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Python, the type of a variable must be defined upon declaration.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A Collective Noun used as a Subject always takes a Plural Verb.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Variables in Python cannot start with a number.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Operators in Python perform operations on nouns and pronouns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Python, blocks of code are marked by using parentheses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A Singular Noun can indicate either a singular or plural entity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "A Compound Subject connected by 'or' takes a Plural Verb.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Python, the 'len()' function helps identify the data type of a variable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
