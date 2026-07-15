export const chapter = "Chapter -13: Use of Tenses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the three kinds of tenses mentioned in the text?",
          optionA: "Past, Present, Future",
          optionB: "Present, Indefinite, Continuous",
          optionC: "Indefinite, Continuous, Perfect",
          correctAnswer: "Past, Present, Future",
        },
        {
          question: "How many forms does each tense have?",
          optionA: "3",
          optionB: "4",
          optionC: "12",
          correctAnswer: "4",
        },
        {
          question:
            "Which tense is also known as the 'Present Indefinite Tense'?",
          optionA: "Present Continuous",
          optionB: "Past Tense",
          optionC: "Simple Present Tense",
          correctAnswer: "Simple Present Tense",
        },
        {
          question:
            "In Simple Present Tense, when is the first form of the verb used with 'he,' 'she,' and 'it'?",
          optionA: "Always",
          optionB: "Never",
          optionC: "Only in questions",
          correctAnswer: "Never",
        },
        {
          question: "What does Simple Past Tense express?",
          optionA: "Future events",
          optionB: "Present habits",
          optionC: "Past events",
          correctAnswer: "Past events",
        },
        {
          question:
            "Which word is used with 'I' and 'we' in Simple Future Tense?",
          optionA: "Shall",
          optionB: "Will",
          optionC: "Can",
          correctAnswer: "Shall",
        },
        {
          question: "What does Present Continuous Tense indicate?",
          optionA: "Past actions",
          optionB: "Present habits",
          optionC: "Continuity of an action in the present",
          correctAnswer: "Continuity of an action in the present",
        },
        {
          question: "What is the main characteristic of Past Continuous Tense?",
          optionA: "Future actions",
          optionB: "Continuity of an action in the past",
          optionC: "Present facts",
          correctAnswer: "Continuity of an action in the past",
        },
        {
          question: "What does Present Perfect Tense indicate about an action?",
          optionA: "Ongoing action",
          optionB: "Past action with an effect in the present",
          optionC: "Future action",
          correctAnswer: "Past action with an effect in the present",
        },
        {
          question:
            "Which word is used with 'I' and 'we' in Future Perfect Tense?",
          optionA: "Have",
          optionB: "Will",
          optionC: "Shall",
          correctAnswer: "Shall",
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
            'In Simple Present Tense, the first form of the verb is used with "I, you, and all plural subjects," but for "he, she, it, and all singular subjects," the first form is joined with -s or -es. This rule does not apply to _____.',
          optionA: "I",
          optionB: "You",
          optionC: "We",
          correctAnswer: "I",
        },
        {
          question:
            'Simple Past Tense is used to express an event that occurred in the past. For example, "He acted on my advice." In this sentence, the action of acting is in the _____.',
          optionA: "Present",
          optionB: "Past",
          optionC: "Future",
          correctAnswer: "Past",
        },
        {
          question:
            'In Simple Future Tense, "shall" is used with _____, while all other subjects take "will."',
          optionA: "I",
          optionB: "We",
          optionC: "They",
          correctAnswer: "I",
        },
        {
          question:
            'Present Continuous Tense sentences show continuity of an action in the present. The affirmative form includes the structure "Subject + is/are/am + Verb in I Form -ing + Object." For example, "I am eating the food." In this sentence, "eating" is the _____.',
          optionA: "Present participle",
          optionB: "Past participle",
          optionC: "Infinitive",
          correctAnswer: "Present participle",
        },
        {
          question:
            'Past Continuous Tense is used to show continuity of an action in the past. The negative form includes the structure "Subject + was/were + not + Verb in I Form -ing + Object." If we want to say "They were not going to the park," the blank should be filled with _____.',
          optionA: "Go",
          optionB: "Going",
          optionC: "Gone",
          correctAnswer: "Going",
        },
        {
          question:
            'Future Continuous Tense indicates continuity of an action in the future. The affirmative form follows the structure "Subject + will/shall + be + Verb in I Form -ing + Object." If we want to express "I _____ knocking at the door," the correct word is "shall."',
          optionA: "Is",
          optionB: "Will",
          optionC: "Am",
          correctAnswer: "Will",
        },
        {
          question:
            'Present Perfect Tense sentences show an action that happened in the past but has an effect in the present. The interrogative form is "Word + has/have + Subject + Verb in III Form + Object?" If we want to inquire about the action "We have seen the movie," the blank should be filled with _____.',
          optionA: "When",
          optionB: "Where",
          optionC: "Why",
          correctAnswer: "Where",
        },
        {
          question:
            'Past Perfect Tense tells about an action that began and completed in the past. The affirmative form follows the structure "Subject + had + Verb in III Form + Object." If we want to say "He _____ opened the door," the correct word is "had."',
          optionA: "Have",
          optionB: "Has",
          optionC: "Had",
          correctAnswer: "Had",
        },
        {
          question:
            'Future Perfect Tense sentences tell us about an action to be completed in the future. The negative form follows the structure "Subject + will/shall + not + have + Verb in III Form + Object." If we want to express "The workers will not have worked silently," the blank should be filled with _____.',
          optionA: "Work",
          optionB: "Worked",
          optionC: "Working",
          correctAnswer: "Worked",
        },
        {
          question:
            'Present Continuous Tense sentences indicate continuity of an action in the present. The interrogative form is "Word + is/are/am + Subject + Verb in I Form -ing + Object?" If we want to inquire about the action "The crow is cawing on the roof," the blank should be filled with _____.',
          optionA: "When",
          optionB: "Where",
          optionC: "Why",
          correctAnswer: "Where",
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
            "Present Perfect Tense indicates actions that happened in the present but have an effect in the past.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "In Simple Past Tense, 'shall' is used with 'I' and 'we.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Singular subjects and verbs: 'He/She/It eats mango.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Present Continuous Tense indicates continuity of an action in the future.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "If two Singular Subjects are joined as a subject, the verb remains singular.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Singular First Person corresponds with the pronouns 'I,' 'me,' and 'my.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Past Perfect Tense tells about an action that will be completed in the future.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Simple Present Tense, the first form of the verb is joined with -s or -es for use with 'he, she, it, and all singular subjects,' but not 'I' or 'you.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Future Continuous Tense indicates continuity of an action in the present.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Third Person: 'He/She/It have a pen.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
