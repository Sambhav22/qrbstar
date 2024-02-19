export const chapter = "Chapter - 5: Verb ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What does an Intransitive Verb not require to complete its sense?",
          optionA: "Object",
          optionB: "Subject",
          optionC: "Complement",
          correctAnswer: "A) Object",
        },
        {
          question:
            "Which group of verbs requires an object to make complete sense?",
          optionA: "Auxiliary Verbs",
          optionB: "Intransitive Verbs",
          optionC: "Transitive Verbs",
          correctAnswer: "C) Transitive Verbs",
        },
        {
          question:
            "In the sentence 'These soldiers fight well,' what type of verb is 'fight'?",
          optionA: "Linking Verb",
          optionB: "Main Verb",
          optionC: "Auxiliary Verb",
          correctAnswer: "B) Main Verb",
        },
        {
          question: "What do Auxiliary Verbs do in a sentence?",
          optionA: "Complete the sense of the main verb",
          optionB: "Act as the main verb",
          optionC: "Provide additional information",
          correctAnswer: "A) Complete the sense of the main verb",
        },
        {
          question: "Which type of verb shows some action?",
          optionA: "Linking Verb",
          optionB: "Auxiliary Verb",
          optionC: "Action Verb",
          correctAnswer: "C) Action Verb",
        },
        {
          question:
            "In the sentence 'The camel was in the desert,' what is the linking verb?",
          optionA: "was",
          optionB: "desert",
          optionC: "in",
          correctAnswer: "A) was",
        },
        {
          question:
            "What is the Objective Complement in the sentence 'The teacher ordered the boy to go'?",
          optionA: "The teacher",
          optionB: "The boy",
          optionC: "To go",
          correctAnswer: "C) To go",
        },
        {
          question:
            "Which type of verb changes its form with the change in Number and Person of the Subject?",
          optionA: "Finite Verb",
          optionB: "Non-finite Verb",
          optionC: "Action Verb",
          correctAnswer: "A) Finite Verb",
        },
        {
          question: "What is the Past Participle form of the verb 'to go'?",
          optionA: "gone",
          optionB: "went",
          optionC: "going",
          correctAnswer: "A) gone",
        },
        {
          question:
            "In the sentence 'I am going to school,' what form of the verb 'to go' is used?",
          optionA: "Present form",
          optionB: "Past form",
          optionC: "Present Participle form",
          correctAnswer: "C) Present Participle form",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "Intransitive Verbs do not need __________ to complete their sense.",
          options: {
            A: "Subject",
            B: "Object",
            C: "Complement",
          },
          correctAnswer: "B) Object",
        },
        {
          question:
            "A Transitive Verb necessarily needs __________ to complete its sense.",
          options: {
            A: "Subject",
            B: "Object",
            C: "Complement",
          },
          correctAnswer: "B) Object",
        },
        {
          question:
            "The main part of the Verb, which functions independently, is called the __________.",
          options: {
            A: "Subject",
            B: "Main Verb",
            C: "Auxiliary Verb",
          },
          correctAnswer: "B) Main Verb",
        },
        {
          question:
            "An Auxiliary Verb helps the Main Verb by giving it __________.",
          options: {
            A: "Additional Information",
            B: "Proper Sense",
            C: "Subject",
          },
          correctAnswer: "B) Proper Sense",
        },
        {
          question: "An Action Verb shows __________.",
          options: {
            A: "State",
            B: "Condition",
            C: "Some Action",
          },
          correctAnswer: "C) Some Action",
        },
        {
          question:
            "Linking Verbs do not need an object but require a __________ to complete the sense.",
          options: {
            A: "Complement",
            B: "Subject",
            C: "Object",
          },
          correctAnswer: "A) Complement",
        },
        {
          question:
            "A Complement can be either a Subjective Complement or an __________.",
          options: {
            A: "Subject",
            B: "Objective Complement",
            C: "Object",
          },
          correctAnswer: "B) Objective Complement",
        },
        {
          question:
            "Finite Verbs change their form with the change in Number and Person of the __________.",
          options: {
            A: "Subject",
            B: "Object",
            C: "Complement",
          },
          correctAnswer: "A) Subject",
        },
        {
          question:
            "The Past Participle form of the verb 'to go' is __________.",
          options: {
            A: "going",
            B: "went",
            C: "gone",
          },
          correctAnswer: "C) gone",
        },
        {
          question:
            "Non-finite Verbs remain the same despite changes in Number, Person, or __________.",
          options: {
            A: "Subject",
            B: "Object",
            C: "Complement",
          },
          correctAnswer: "A) Subject",
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
            "Intransitive Verbs require an object to complete their sense.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Transitive Verbs do not necessarily need an object to complete their sense.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question: "Auxiliary Verbs function independently in a sentence.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question: "Action Verbs show some form of action.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question: "Linking Verbs need an object to complete the sense.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Objective Complements speak about the subject in a sentence.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Finite Verbs change their form with the change in Number and Person of the Subject.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question:
            "Non-finite Verbs remain the same despite changes in Number, Person, or Tense.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A) True",
        },
        {
          question:
            "The Present Participle form of the verb 'to go' is 'gone.'",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
        {
          question:
            "Slide transitions in PowerPoint should be used in abundance for an engaging presentation.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B) False",
        },
      ],
    ],
  };
}

export var activityData;
