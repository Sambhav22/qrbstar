export const chapter = "Chapter - 10: Verbs";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What does a Transitive Verb need to complete its sense?",
          optionA: "Subject",
          optionB: "Object",
          optionC: "Complement",
          correctAnswer: "Object",
        },
        {
          question:
            "How can you identify the Object in a sentence with a Transitive Verb?",
          optionA: "By asking 'where?'",
          optionB: "By asking 'why?'",
          optionC: "By asking 'what or to whom?'",
          correctAnswer: "By asking 'what or to whom?'",
        },
        {
          question:
            "What are the two kinds of Objects in a sentence with a Transitive Verb?",
          optionA: "Primary and Secondary Objects",
          optionB: "Direct and Indirect Objects",
          optionC: "Singular and Plural Objects",
          correctAnswer: "Direct and Indirect Objects",
        },
        {
          question:
            "What type of Verbs do not require an Object to complete their sense?",
          optionA: "Linking Verbs",
          optionB: "Transitive Verbs",
          optionC: "Intransitive Verbs",
          correctAnswer: "Intransitive Verbs",
        },
        {
          question:
            "What do Intransitive Verbs require to complete their sense?",
          optionA: "Objects",
          optionB: "Subjects",
          optionC: "Complements",
          correctAnswer: "Complements",
        },
        {
          question: "What is the function of a Main Verb in a sentence?",
          optionA: "Completing the sense of a Linking Verb",
          optionB: "Performing the main function of the sentence",
          optionC: "Helping other verbs",
          correctAnswer: "Performing the main function of the sentence",
        },
        {
          question: "What is a Helping Verb also known as?",
          optionA: "Modal Auxiliaries",
          optionB: "Complements",
          optionC: "Transitive Verbs",
          correctAnswer: "Modal Auxiliaries",
        },
        {
          question:
            "In the sentence 'Rahul goes to school,' what is the Helping Verb?",
          optionA: "goes",
          optionB: "Rahul",
          optionC: "None",
          correctAnswer: "None",
        },
        {
          question:
            "Which type of verbs change positive sentences into interrogative sentences by being placed at the beginning?",
          optionA: "Linking Verbs",
          optionB: "Transitive Verbs",
          optionC: "Helping Verbs",
          correctAnswer: "Helping Verbs",
        },
        {
          question:
            "What kind of verbs change positive sentences into interrogative sentences by being placed at the beginning?",
          optionA: "Linking Verbs",
          optionB: "Transitive Verbs",
          optionC: "Helping Verbs",
          correctAnswer: "Helping Verbs",
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
            "In a Transitive Verb, the action passes from __________ to __________.",
          optionA: "Verb, Complement",
          optionB: "Subject, Object",
          optionC: "Noun, Pronoun",
          correctAnswer: "Subject, Object",
        },
        {
          question:
            "Objects are of two kinds: Indirect Objects include all living Nouns and Personal Pronouns of the __________.",
          optionA: "Verb",
          optionB: "Predicate",
          optionC: "Subject",
          correctAnswer: "Predicate",
        },
        {
          question:
            'The answer to "what" is the __________ Object, and the answer to "to whom" is the __________ Object.',
          optionA: "Primary, Secondary",
          optionB: "Direct, Indirect",
          optionC: "Main, Supporting",
          correctAnswer: "Direct, Indirect",
        },
        {
          question:
            "In a sentence with an Intransitive Verb, the Verbs do not require __________.",
          optionA: "Complement",
          optionB: "Object",
          optionC: "Subject",
          correctAnswer: "Object",
        },
        {
          question:
            "Linking Verbs are a type of Verb that requires __________ to complete their sense.",
          optionA: "Objects",
          optionB: "Complement",
          optionC: "Subjects",
          correctAnswer: "Complement",
        },
        {
          question:
            "Main Verbs in a sentence can be either __________ or __________ Verbs.",
          optionA: "Transitive, Intransitive",
          optionB: "Present, Past",
          optionC: "Singular, Plural",
          correctAnswer: "Transitive, Intransitive",
        },
        {
          question:
            "Helping Verbs, also known as Modal Auxiliaries, help to form __________ Sentences.",
          optionA: "Negative",
          optionB: "Interrogative",
          optionC: "Affirmative",
          correctAnswer: "Interrogative",
        },
        {
          question:
            "Some common Helping Verbs include __________, __________, and __________.",
          optionA: "Can, Does, Might",
          optionB: "Was, Were, Shall",
          optionC: "Must, Ought, Should",
          correctAnswer: "Can, Does, Might",
        },
        {
          question:
            'The sentence "I am going to school. Am I going to school?" demonstrates the use of Helping Verbs to form __________ Sentences.',
          optionA: "Negative",
          optionB: "Interrogative",
          optionC: "Affirmative",
          correctAnswer: "Interrogative",
        },
        {
          question:
            "The three kinds of Verbs mentioned in the text are __________, __________, and __________.",
          optionA: "Linking, Intransitive, Transitive",
          optionB: "Modal, Helping, Main",
          optionC: "Positive, Negative, Interrogative",
          correctAnswer: "Linking, Intransitive, Transitive",
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
            "A Transitive Verb requires an Object to complete its sense.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Intransitive Verbs always require Objects to complete their sense.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Objects in a sentence can be identified by asking 'what or to whom?'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Indirect Objects include all living Nouns and Personal Pronouns of the Predicate.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Linking Verbs do not require Complements to complete their sense.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Main Verbs can only be Transitive Verbs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Helping Verbs, also known as Modal Auxiliaries, help form Negative Sentences.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Linking Verbs perform the main function of a sentence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A sentence with an Intransitive Verb always has a Subject and an Object.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Helping Verbs can change positive sentences into interrogative sentences.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
