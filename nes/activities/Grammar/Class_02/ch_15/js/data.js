export const chapter = "Chapter - 15: Interrogative Sentences ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the punctuation mark placed at the end of an Interrogative Sentence?",
          optionA: "Period (.)",
          optionB: "Exclamation Mark (!)",
          optionC: "Question Mark (?)",
          correctAnswer: "Question Mark",
        },
        {
          question: "Which type of sentence is also called a Statement?",
          optionA: "Interrogative Sentence",
          optionB: "Affirmative Sentence",
          optionC: "Exclamatory Sentence",
          correctAnswer: "Affirmative Sentence",
        },
        {
          question:
            "Which of the following sentences is an Affirmative Sentence?",
          optionA: "Are you my friend?",
          optionB: "She is very beautiful.",
          optionC: "Was Ekalavya cruel?",
          correctAnswer: "She is very beautiful.",
        },
        {
          question: "What do Interrogative Sentences ask?",
          optionA: "To state something",
          optionB: "To express excitement",
          optionC: "To ask something",
          correctAnswer: "To ask something",
        },
        {
          question:
            "Which Question Word is used in the sentence 'Who cooks food in the kitchen?'",
          optionA: "How",
          optionB: "Where",
          optionC: "Who",
          correctAnswer: "Who",
        },
        {
          question: "What is another term for a Question Word?",
          optionA: "Verb",
          optionB: "Adjective",
          optionC: "Interrogative Pronoun",
          correctAnswer: "Interrogative Pronoun",
        },
        {
          question: "How many necklaces does Kamna have?",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Three",
        },
        {
          question: "Which sentence type simply tells or states something?",
          optionA: "Interrogative Sentence",
          optionB: "Affirmative Sentence",
          optionC: "Exclamatory Sentence",
          correctAnswer: "Affirmative Sentence",
        },
        {
          question:
            "What punctuation mark is placed at the end of an Exclamatory Sentence?",
          optionA: "Period (.)",
          optionB: "Exclamation Mark (!)",
          optionC: "Question Mark (?)",
          correctAnswer: "Exclamation Mark",
        },
        {
          question:
            "Which sentence is an example of an Interrogative Sentence with a Question Word?",
          optionA: "You are my friend.",
          optionB: "The horse is a strong animal.",
          optionC: "Where do you live?",
          correctAnswer: "Where do you live?",
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
          question:
            "The sentences that ask questions are called _________ Sentences.",
          options: ["Exclamatory", "Affirmative", "Interrogative"],
          correctAnswer: "Interrogative",
        },
        {
          question:
            "The _________ is placed at the end of an Interrogative Sentence.",
          options: ["Period", "Exclamation Mark", "Question Mark"],
          correctAnswer: "Question Mark",
        },
        {
          question:
            "An Affirmative Sentence simply tells or states something. So, it is also called a _________.",
          options: ["Statement", "Command", "Question"],
          correctAnswer: "Statement",
        },
        {
          question:
            'An Interrogative Sentence can also have Question Words, such as what, where, when, how, how many, etc. For example, "______ cooks food in the kitchen?"',
          options: ["She", "What", "He"],
          correctAnswer: "What",
        },
        {
          question: "Kamna has three _________. Has Kamna three _________?",
          options: ["Books", "Necklaces", "Cars"],
          correctAnswer: "Necklaces",
        },
        {
          question: "An Interrogative Sentence asks _________.",
          options: ["Statements", "Commands", "Questions"],
          correctAnswer: "Questions",
        },
        {
          question:
            "Affirmative Sentences are statements that ________ something.",
          options: ["Ask", "Command", "Tell"],
          correctAnswer: "Tell",
        },
        {
          question:
            "What is another term for a Question Word? _________ Pronoun.",
          options: ["Interrogative", "Demonstrative", "Relative"],
          correctAnswer: "Interrogative",
        },
        {
          question:
            'In "Who cooks food in the kitchen?" the word "Who" is a _________.',
          options: ["Noun", "Verb", "Adjective"],
          correctAnswer: "Noun",
        },
        {
          question:
            "In Affirmative Sentences, the _________ Mark is placed at the end.",
          options: ["Period", "Question", "Exclamation"],
          correctAnswer: "Period",
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
            "Sentences that ask questions are called Interrogative Sentences.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Affirmative Sentences are also known as Commands.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Interrogative Sentences can have Question Words such as 'what,' 'where,' 'when,' 'how,' 'how many,' etc.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "An Affirmative Sentence simply tells or states something.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "An Exclamatory Sentence asks something.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Affirmative Sentences are statements that ask something.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Negative Sentences include the use of 'not' or 'no.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Exclamatory Sentences end with a Question Mark.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A Question Mark is placed at the end of an Affirmative Sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Interrogative Sentences can be formed with or without Question Words.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
