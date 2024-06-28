export const chapter = "Chapter - 1: Sentences";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is necessary for a sentence to have?",
          optionA: "Noun",
          optionB: "Adjective",
          optionC: "Verb",
          correctAnswer: "Verb",
        },
        {
          question:
            "Which of the following is an example of a Negative Sentence?",
          optionA: "The sun rises in the east.",
          optionB: "The policeman did not speak politely.",
          optionC: "Birds chirp in the morning.",
          correctAnswer: "The policeman did not speak politely.",
        },
        {
          question: "What kind of sentence is 'Shut the window, please.'?",
          optionA: "Statement",
          optionB: "Question",
          optionC: "Imperative",
          correctAnswer: "Imperative",
        },
        {
          question:
            "What type of sentences express a wish, desire, or blessing?",
          optionA: "Negative Sentences",
          optionB: "Optative Sentences",
          optionC: "Exclamatory Sentences",
          correctAnswer: "Optative Sentences",
        },
        {
          question: "Which sentence is in the correct order?",
          optionA: "My is mother's name Neelima.",
          optionB: "Mother's name is Neelima my.",
          optionC: "My mother's name is Neelima.",
          correctAnswer: "My mother's name is Neelima.",
        },
        {
          question: "What do some sentences do besides stating facts?",
          optionA: "Express wishes",
          optionB: "Ask questions",
          optionC: "Negate something",
          correctAnswer: "Ask questions",
        },
        {
          question: "What is the purpose of Exclamatory Sentences?",
          optionA: "To express a wish",
          optionB: "To ask a question",
          optionC: "To express sudden feelings",
          correctAnswer: "To express sudden feelings",
        },
        {
          question:
            "Which category of sentences can order, request, or suggest?",
          optionA: "Exclamatory Sentences",
          optionB: "Negative Sentences",
          optionC: "Imperative Sentences",
          correctAnswer: "Imperative Sentences",
        },
        {
          question: "What do Questions or Interrogative Sentences do?",
          optionA: "Express sudden feelings",
          optionB: "Tell about a fact",
          optionC: "Ask a question",
          correctAnswer: "Ask a question",
        },
        {
          question: "Which sentence is a Statement?",
          optionA: "What a lovely dress!",
          optionB: "Do you have a red pen?",
          optionC: "Anjali went to a hotel.",
          correctAnswer: "Anjali went to a hotel.",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Language helps us ____________.",
          options: {
            optionA: "express ourselves",
            optionB: "write neatly",
            optionC: "build a computer",
          },
          correctAnswer: "express ourselves",
        },
        {
          question:
            "Sentences are groups of words that should be placed in a proper order to give ____________ meaning.",
          options: {
            optionA: "random",
            optionB: "complete",
            optionC: "indefinite",
          },
          correctAnswer: "complete",
        },
        {
          question: "It is necessary for a sentence to have a ____________.",
          options: {
            optionA: "Noun",
            optionB: "Verb",
            optionC: "Adjective",
          },
          correctAnswer: "Verb",
        },
        {
          question:
            "A group of words in proper order and giving complete sense is called a ____________.",
          options: {
            optionA: "fragment",
            optionB: "paragraph",
            optionC: "sentence",
          },
          correctAnswer: "sentence",
        },
        {
          question:
            "In the example sentence 'My Mother's name is Neelima,' the correct order is ____________.",
          options: {
            optionA: "My Neelima mother's is name.",
            optionB: "Neelima is name mother's My.",
            optionC: "My Mother's name is Neelima.",
          },
          correctAnswer: "My Mother's name is Neelima.",
        },
        {
          question:
            "Some sentences can ask a question, and they are called ____________ sentences.",
          options: {
            optionA: "Negative",
            optionB: "Imperative",
            optionC: "Interrogative",
          },
          correctAnswer: "Interrogative",
        },
        {
          question:
            "'The policeman did not speak politely' is an example of a ____________ sentence.",
          options: {
            optionA: "Statement",
            optionB: "Negative",
            optionC: "Imperative",
          },
          correctAnswer: "Negative",
        },
        {
          question:
            "'Shut the window, please' is an example of an ____________ sentence.",
          options: {
            optionA: "Exclamatory",
            optionB: "Optative",
            optionC: "Imperative",
          },
          correctAnswer: "Imperative",
        },
        {
          question: "Optative Sentences express ____________ or blessing.",
          options: {
            optionA: "commands",
            optionB: "wishes",
            optionC: "statements",
          },
          correctAnswer: "wishes",
        },
        {
          question:
            "'What a lovely dress!' is an example of an ____________ sentence.",
          options: {
            optionA: "Interrogative",
            optionB: "Exclamatory",
            optionC: "Statement",
          },
          correctAnswer: "Exclamatory",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Language helps us to express our ideas and thoughts.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Sentences are groups of words placed in any order to convey meaning.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Every sentence should have a Noun.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "A group of words giving complete sense is called a paragraph.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Optative Sentences express commands or suggestions.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Negative Sentences always convey a positive meaning.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Imperative Sentences are used for ordering, requesting, or suggesting.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "Interrogative Sentences are used to express sudden feelings.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Statements can tell about a fact.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "Exclamatory Sentences are used to ask questions.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
