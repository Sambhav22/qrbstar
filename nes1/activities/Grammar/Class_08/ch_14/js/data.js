export const chapter = "Chapter - 14: Tense ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the three main tenses in English?",
          optionA: "Past, Present, Future",
          optionB: "Past, Present Continuous, Future Perfect",
          optionC: "Simple, Continuous, Perfect",
          correctAnswer: "A",
        },
        {
          question:
            "Which form of the Simple Present Tense can express habitual actions or general truths?",
          optionA: "Perfect",
          optionB: "Continuous",
          optionC: "Simple or Indefinite",
          correctAnswer: "C",
        },
        {
          question:
            "In the Simple Past Tense, how is the negative form structured?",
          optionA: "Subject + will/shall + Verb I Form + Object.",
          optionB: "Subject + did not + Verb I Form + Object.",
          optionC: "Subject + is/are/am + Verb I Form (-ing) + Object.",
          correctAnswer: "B",
        },
        {
          question: "What does the Present Continuous Tense indicate?",
          optionA: "Completed actions in the past",
          optionB: "Future actions with a time reference",
          optionC: "Actions happening at the present time",
          correctAnswer: "C",
        },
        {
          question: "When is the Past Continuous Tense used?",
          optionA: "To indicate future actions",
          optionB: "To describe habitual actions",
          optionC:
            "To show actions that continued over a period of time in the past",
          correctAnswer: "C",
        },
        {
          question:
            "How is the Negative form of the Future Continuous Tense structured?",
          optionA: "Subject + is/are/am + not + Verb I Form (-ing) + Object.",
          optionB: "Subject + will/shall + Verb I Form + Object.",
          optionC: "Was/Were + Subject + Verb I Form (-ing) + Object?",
          correctAnswer: "A",
        },
        {
          question: "What does the Perfect Tense indicate?",
          optionA: "Actions happening at the present time",
          optionB: "Past actions with present relevance",
          optionC: "Future continuous actions",
          correctAnswer: "B",
        },
        {
          question: "When is the Past Perfect Tense used?",
          optionA: "To indicate an action that will take place in the future",
          optionB: "To show a completed action before another took place",
          optionC: "To express actions that are currently happening",
          correctAnswer: "B",
        },
        {
          question: "What does the Perfect Continuous Tense indicate?",
          optionA: "An action that began in the past and is still continuing",
          optionB: "A future action with a time reference",
          optionC: "Habitual actions in the past",
          correctAnswer: "A",
        },
        {
          question: "When is the Future Perfect Continuous Tense used?",
          optionA:
            "To indicate a continuous action that will take place in the future",
          optionB: "To express actions that happened in the past",
          optionC:
            "To show completed actions before another event occurs in the future",
          correctAnswer: "A",
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
            "The verb can show three times, which are ____, ____, and ____. ",
          options: ["Past", "Present", "Future"],
          correctAnswer: "Past",
        },
        {
          question:
            "Each tense has four forms: Simple or Indefinite, Continuous, Perfect, and ____.",
          options: ["Regular", "Continuous Perfect", "Perfect Continuous"],
          correctAnswer: "Perfect Continuous",
        },
        {
          question:
            "Simple Present or Present Indefinite Tense expresses habitual action or general truth, like, 'We always wash our hands before meals,' or 'She helps her mother tidy the house.' It can also show some future action, for example, 'The little child starts school tomorrow,' or 'This new mall opens next Monday.' You can use this tense to describe what happens on the playground or in a film or television show or what is described in a book. For instance, 'Shreya returns from school. She knocks at the door. Her granny opens the door. Shreya enters and throws her bag on one side. Then she says that she is hungry.'",
          options: ["Present Continuous", "Future Indefinite", "Past Perfect"],
          correctAnswer: "Future Indefinite",
        },
        {
          question:
            "In Simple Past or Past Indefinite Tense, affirmative sentences are structured as Subject + Verb II Form + Object. For example, 'They threw a ball.' How are negative sentences structured? Subject + ____ + Verb I Form + Object.",
          options: ["have", "did not", "will not"],
          correctAnswer: "did not",
        },
        {
          question:
            "Simple Future or Future Indefinite Tense refers to an action that will take place in the future. In the interrogative form, it is structured as 'Did + Subject + Verb I Form + Object?' For example, 'Did they throw a ball?' Mention an affirmative sentence in this tense.",
          options: [
            "We shall not throw a ball.",
            "The flight will land a little later.",
            "You are cleaning the room.",
          ],
          correctAnswer: "We shall throw a ball.",
        },
        {
          question:
            "Present Continuous Tense indicates an action that is going on at the present time. It can also show some future action. Affirmative sentences in this tense are structured as Subject + is/are/am + Verb I Form (-ing) + Object. For example, 'I am throwing a ball.' What is the negative form?",
          options: [
            "I am not throwing a ball.",
            "We are throwing a ball.",
            "He is throwing a ball.",
          ],
          correctAnswer: "I am not throwing a ball.",
        },
        {
          question:
            "Past Continuous Tense is used to indicate an action that continued over a period of time in the past. In the interrogative form, it is structured as 'Was/Were + Subject + Verb I Form (-ing) + Object?' Provide a negative sentence in this tense.",
          options: [
            "I/He/She/It was not throwing a ball.",
            "We/You/They were not throwing a ball.",
            "Is he/she/it throwing a ball?",
          ],
          correctAnswer: "I/He/She/It was not throwing a ball.",
        },
        {
          question:
            "Past Perfect Tense is used to show a completed action before another took place. Provide an affirmative sentence in this tense.",
          options: [
            "The thief broke the lock after he had broken into the room.",
            "They will have watched the film by today.",
            "I shall have been driving this bus since 2008.",
          ],
          correctAnswer:
            "The thief broke the lock after he had broken into the room.",
        },
        {
          question:
            "Perfect Continuous Tense indicates an action that began in the past and is still continuing. Provide an interrogative sentence in this tense.",
          options: [
            "The goats have been bleating for the last ten minutes.",
            "He has been climbing up the tree for half an hour, but now he has hurt himself.",
            "She has been picking flowers since last week.",
          ],
          correctAnswer: "Has she been picking flowers since last week?",
        },
        {
          question:
            "Future Perfect Continuous Tense indicates a continuous action that will take place in the future. What is an example of an affirmative sentence in this tense?",
          options: [
            "They will have been sweeping the ground for two years.",
            "I shall have been driving this bus since 2008.",
            "He will have been shopping for four hours.",
          ],
          correctAnswer:
            "They will have been sweeping the ground for two years.",
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
            "The Simple Present Tense expresses habitual actions or general truths.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Simple Past Tense is used to indicate actions that will take place in the future.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Present Continuous Tense can indicate actions that are happening at the present time.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Past Perfect Tense is used to show a completed action before another took place.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Future Continuous Tense indicates an action that will take place in the future and continue too.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Perfect Tense is a combination of the past and the present.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Present Perfect Continuous Tense indicates an action that began in the past and is still continuing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Past Continuous Tense is used to indicate future actions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Future Perfect Tense indicates a continuous action that will take place in the future.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Simple Future Tense refers to actions that will take place in the past.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
