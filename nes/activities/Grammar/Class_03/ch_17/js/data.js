export const chapter = "Chapter - 17: Past Continuous Tense";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the correct word order for an affirmative sentence in the past continuous tense?",
          optionA: "Subject + Verb + Object",
          optionB: "Subject + is/are/am + Object + Verb in I Form -ing",
          optionC: "Subject + was/were + Verb in I Form -ing + Object",
          correctAnswer: "Subject + was/were + Verb in I Form -ing + Object",
        },
        {
          question:
            "Which form of 'to be' is used with singular subjects (except 'you') in past continuous affirmative sentences?",
          optionA: "Am",
          optionB: "Is",
          optionC: "Was",
          correctAnswer: "Was",
        },
        {
          question:
            "In which sentence is the past continuous tense used correctly?",
          optionA: "They are going up the hill.",
          optionB: "She is learning English.",
          optionC: "He was selling many toys.",
          correctAnswer: "He was selling many toys.",
        },
        {
          question:
            "Which word is used in negative sentences after 'was' or 'were' in the past continuous tense?",
          optionA: "No",
          optionB: "Not",
          optionC: "Never",
          correctAnswer: "Not",
        },
        {
          question:
            "Identify the correct negative sentence in the past continuous tense.",
          optionA: "You were telling a lie.",
          optionB: "We were looking out of the window.",
          optionC: "Nisha was not washing her clothes.",
          correctAnswer: "Nisha was not washing her clothes.",
        },
        {
          question:
            "What is the correct word order for an interrogative sentence in the past continuous tense?",
          optionA: "Subject + Verb in I Form -ing + Object",
          optionB:
            "Interrogative Word + Subject + Verb in I Form -ing + Object",
          optionC: "Subject + Object + Verb in I Form -ing",
          correctAnswer:
            "Interrogative Word + was/were + Subject + Verb in I Form -ing + Object?",
        },
        {
          question:
            "Which sentence is an example of an interrogative sentence in the past continuous tense?",
          optionA: "He was putting books in the cupboard.",
          optionB: "They were standing in the way.",
          optionC: "Were you finishing your work yesterday?",
          correctAnswer: "Were you finishing your work yesterday?",
        },
        {
          question:
            "In negative sentences, where is 'not' placed in the past continuous tense?",
          optionA: "After the subject",
          optionB: "Before the subject",
          optionC: "After the verb",
          correctAnswer: "After the verb",
        },
        {
          question:
            "Which form of 'to be' is used with 'you' and all plural subjects in past continuous affirmative sentences?",
          optionA: "Am",
          optionB: "Is",
          optionC: "Were",
          correctAnswer: "Were",
        },
        {
          question:
            "Select the correct interrogative sentence in the past continuous tense.",
          optionA: "When were we watching television?",
          optionB: "Why were you going there?",
          optionC: "He was selling many toys.",
          correctAnswer: "When were we watching television?",
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
            "The Past Continuous Tense sentences demonstrate the continuity of action in the _________.",
          options: ["Present", "Future", "Past"],
          correctAnswer: "Past",
        },
        {
          question:
            "In affirmative sentences in the Past Continuous Tense, the word order is Subject + ________ + Verb in I Form -ing + Object.",
          options: ["is", "am", "was/were"],
          correctAnswer: "was/were",
        },
        {
          question: "Was is used with all singular subjects except _________.",
          options: ["I", "they", "you"],
          correctAnswer: "you",
        },
        {
          question:
            "Choose the correct affirmative sentence in the Past Continuous Tense: 'A dog _________ in the street.'",
          options: ["are barking", "was barking", "is barking"],
          correctAnswer: "was barking",
        },
        {
          question:
            "In negative sentences in the Past Continuous Tense, 'not' is placed after _________.",
          options: ["the subject", "the verb", "the object"],
          correctAnswer: "the verb",
        },
        {
          question:
            "Identify the correct negative sentence in the Past Continuous Tense: 'His parents _________ the movie.'",
          options: ["were enjoying", "was enjoying", "enjoyed"],
          correctAnswer: "were enjoying",
        },
        {
          question:
            "What word order is used in interrogative sentences in the Past Continuous Tense?",
          options: [
            "Subject + Verb in I Form -ing + Object + Interrogative Word",
            "Interrogative Word + Subject + Verb in I Form -ing + Object",
            "Object + Verb in I Form -ing + Subject + Interrogative Word",
          ],
          correctAnswer:
            "Interrogative Word + was/were + Subject + Verb in I Form -ing + Object?",
        },
        {
          question:
            "Choose the correct interrogative sentence in the Past Continuous Tense: 'Why _________ you going there?'",
          options: ["was", "were", "are"],
          correctAnswer: "were",
        },
        {
          question:
            "In interrogative sentences, 'was' or 'were' is used in the beginning of the sentence along with the _________.",
          options: ["verb", "subject", "question word"],
          correctAnswer: "question word",
        },
        {
          question:
            "Select the correct interrogative sentence in the Past Continuous Tense: 'When _________ we watching television?'",
          options: ["were", "are", "was"],
          correctAnswer: "were",
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
            "Past Continuous Tense sentences show continuity of action in the Past.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Was is used with all Singular Subjects except you.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Negative sentences in the Past Continuous Tense use the word 'not' after the subject.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In affirmative sentences, the word order for Past Continuous Tense is Subject + was/were + Verb in I Form -ing + Object.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Interrogative sentences in the Past Continuous Tense use 'was' or 'were' in the beginning along with the question word.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The form 'were' is used with all plural subjects in Past Continuous Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Not is placed before the verb in negative sentences in Past Continuous Tense.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Affirmative sentences in Past Continuous Tense have the word order: Subject + is/are/am + Verb in I Form -ing + Object.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In interrogative sentences, 'was' is used with all singular subjects.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Negative sentences in Past Continuous Tense use 'not' after the object.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
