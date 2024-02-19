export const chapter = "Chapter - 5: Verb";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is a Verb?",
          optionA: "A type of noun",
          optionB: "A word that asserts something about a person or thing",
          optionC: "A preposition",
          correctAnswer: "B",
        },
        {
          question: "Which type of Verb shows an action?",
          optionA: "Transitive Verb",
          optionB: "Intransitive Verb",
          optionC: "Action Verb",
          correctAnswer: "C",
        },
        {
          question: "What is the main characteristic of a Transitive Verb?",
          optionA: "It does not need an object",
          optionB: "It necessarily needs an object",
          optionC: "It is always in the present tense",
          correctAnswer: "B",
        },
        {
          question: "Which sentence contains an Intransitive Verb?",
          optionA: "A farmer grows grain.",
          optionB: "Can you speak clearly?",
          optionC: "A little girl was listening to music.",
          correctAnswer: "B",
        },
        {
          question: "What is the role of Auxiliary Verbs in a sentence?",
          optionA: "They function independently",
          optionB: "They help the Main Verb in giving it a proper sense",
          optionC: "They replace the Main Verb",
          correctAnswer: "B",
        },
        {
          question: "Which is an example of a Linking Verb?",
          optionA: "The boy climbed up the hill.",
          optionB: "The building is high.",
          optionC: "A mango fell from the tree.",
          correctAnswer: "B",
        },
        {
          question:
            "What is the purpose of a Complement in a sentence with a Linking Verb?",
          optionA: "It replaces the subject",
          optionB: "It completes the sense of the verb",
          optionC: "It is an additional detail about the object",
          correctAnswer: "B",
        },
        {
          question: "Which is a Finite Verb in the given sentences?",
          optionA: "I go to school to study.",
          optionB: "They have gone to school to study.",
          optionC: "To study has remained the same despite all the changes.",
          correctAnswer: "A",
        },
        {
          question: "What characterizes Non-finite Verbs?",
          optionA:
            "They change their form with the change in number and person",
          optionB:
            "They remain the same despite changes in number, person, or tense",
          optionC: "They are always in the past tense",
          correctAnswer: "B",
        },
        {
          question: "Which sentence exemplifies a Subjective Complement?",
          optionA: "The teacher made him the monitor.",
          optionB: "The weather appears fine.",
          optionC: "I have gone to school to study.",
          correctAnswer: "B",
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
            "A Verb is a word which tells or asserts something about a person or thing. It can show an action; for example, a little girl __________ to music.",
          options: ["was listening", "dances", "is listening"],
          correctAnswer: "was listening",
        },
        {
          question:
            "Intransitive Verbs do not need an Object to complete their sense. For example, a bird __________.",
          options: ["is flying", "flew", "flies"],
          correctAnswer: "is flying",
        },
        {
          question:
            "Main Verbs function independently in a sentence. In the sentence, 'The sun rises in the east,' 'rises' is the __________ Verb.",
          options: ["Action", "Main", "Transitive"],
          correctAnswer: "Main",
        },
        {
          question:
            "Linking Verbs, like 'The building is high,' do not need an Object but something that will complete the sense, called the __________.",
          options: ["Complement", "Subject", "Modifier"],
          correctAnswer: "Complement",
        },
        {
          question:
            "Some Linking Verbs for Subjective Complements are: act, be, become, feel, appear, grow, taste, sound, __________.",
          options: ["smell", "jump", "run"],
          correctAnswer: "smell",
        },
        {
          question:
            "Non-finite Verbs remain the same despite changes in Number and Person of the Subject or Tense. In the sentence, 'I have gone to school to study,' 'to study' is a __________ Verb.",
          options: ["Finite", "Non-finite", "Transitive"],
          correctAnswer: "Non-finite",
        },
        {
          question:
            "In the sentence, 'He goes to school to study,' the Finite Verb is __________.",
          options: ["goes", "to study", "He"],
          correctAnswer: "goes",
        },
        {
          question:
            "Action Verbs show some action. For example, the little girl __________ her lesson.",
          options: ["is revising", "revised", "revises"],
          correctAnswer: "revised",
        },
        {
          question:
            "In the sentence, 'I went to school to study,' 'went' is a __________ Verb.",
          options: ["Finite", "Non-finite", "Transitive"],
          correctAnswer: "Finite",
        },
        {
          question:
            "In the sentence, 'The teacher made him the monitor,' 'the monitor' is the __________.",
          options: ["Subject", "Complement", "Object"],
          correctAnswer: "Complement",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "A Verb can only show an action or condition.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Intransitive Verbs necessarily need an object to complete their sense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Main Verbs always require Auxiliary Verbs to make sense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Linking Verbs need an object to complete the sense in a sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Subjective Complements speak about the object in a sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Non-finite Verbs change their form with the change in number and person of the subject.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Finite Verbs remain the same despite changes in number and person of the subject or tense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Action Verbs always show physical movement.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Trojan Horse is a type of virus that spreads only when connected to the network.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Antivirus software is designed to create computer viruses.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
