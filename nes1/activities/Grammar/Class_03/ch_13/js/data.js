export const chapter = "Chapter - 13: Simple Present Tense";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is another name for Simple Present Tense?",
          optionA: "Past Indefinite Tense",
          optionB: "Present Continuous Tense",
          optionC: "Present Indefinite Tense",
          correctAnswer: "Present Indefinite Tense",
        },
        {
          question:
            "Which sentence is an affirmative sentence in Simple Present Tense?",
          optionA: "Does Varsha read the Ramayana?",
          optionB: "Birds fly in the air.",
          optionC: "You do not hit the ball hard.",
          correctAnswer: "Birds fly in the air.",
        },
        {
          question:
            "What is the word order for affirmative sentences in Simple Present Tense?",
          optionA: "Subject + Object + Verb",
          optionB: "Subject + Verb in I Form (s/es) + Object",
          optionC: "Object + Subject + Verb",
          correctAnswer: "Subject + Verb in I Form (s/es) + Object",
        },
        {
          question:
            "When is 'does' used in negative sentences in Simple Present Tense?",
          optionA: "With I, you, and all Plural Subjects",
          optionB: "With he, she, it, and all Singular Subjects",
          optionC: "With all subjects indiscriminately",
          correctAnswer: "With he, she, it, and all Singular Subjects",
        },
        {
          question:
            'What is the correct negative form in Simple Present Tense for the sentence: "They play together."?',
          optionA: "They do play together.",
          optionB: "They does not play together.",
          optionC: "They do not play together.",
          correctAnswer: "They do not play together.",
        },
        {
          question:
            "How is an interrogative sentence formed in Simple Present Tense?",
          optionA: "Subject + Object + Verb",
          optionB: "Interrogative Word + Subject + Verb in I form + Object?",
          optionC: "Subject + do/does + not + Verb in I form + Object",
          correctAnswer:
            "Interrogative Word + Subject + Verb in I form + Object?",
        },
        {
          question:
            "Which sentence is an example of an interrogative sentence in Simple Present Tense?",
          optionA: "He does not play on the road.",
          optionB: "What does he want?",
          optionC: "They do not play together.",
          correctAnswer: "What does he want?",
        },
        {
          question:
            "What is the word order for negative sentences in Simple Present Tense?",
          optionA: "Subject + Verb in I Form (s/es) + Object",
          optionB: "Interrogative Word + Subject + Verb in I form + Object?",
          optionC: "Subject + do/does + not + Verb in I form + Object",
          correctAnswer: "Subject + do/does + not + Verb in I form + Object",
        },
        {
          question:
            "Which words are common interrogative words used in Simple Present Tense?",
          optionA: "Who, which, whose",
          optionB: "What, when, how, why",
          optionC: "Where, there, then",
          correctAnswer: "What, when, how, why",
        },
        {
          question:
            "In an interrogative sentence, where is the interrogative word usually placed?",
          optionA: "At the end of the sentence",
          optionB: "In the middle of the sentence",
          optionC: "At the beginning of the sentence",
          correctAnswer: "At the beginning of the sentence",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Simple Present Tense is also known as ________________.",
          options: [
            "Past Tense",
            "Present Continuous Tense",
            "Present Indefinite Tense",
          ],
          correctAnswer: "Present Indefinite Tense",
        },
        {
          question:
            "Affirmative sentences follow the word order: Subject + Verb in ____________ + Object.",
          options: ["II Form", "I Form (s/es)", "III Form"],
          correctAnswer: "I Form (s/es)",
        },
        {
          question:
            "Negative sentences use the word order: Subject + ____________ + not + Verb in I form + Object.",
          options: ["Did", "Do/Does", "Will"],
          correctAnswer: "Do/Does",
        },
        {
          question:
            "Interrogative sentences begin with the use of ____________ or ____________.",
          options: ["Am / Is", "Do / Does", "Were / Will"],
          correctAnswer: "Do / Does",
        },
        {
          question:
            "An interrogative sentence starts with an interrogative word, placed ____________.",
          options: ["At the end", "In the middle", "At the beginning"],
          correctAnswer: "At the beginning",
        },
        {
          question:
            "Common interrogative words include: What, When, How, Why, ____________.",
          options: ["Where", "Which", "Whose"],
          correctAnswer: "Where",
        },
        {
          question:
            "In the sentence 'He does not play on the road,' 'does' is used because the subject is ____________.",
          options: ["Plural", "Singular", "Proper Noun"],
          correctAnswer: "Singular",
        },
        {
          question:
            "Negative sentences follow the word order: Subject + ____________ + not + Verb in I form + Object.",
          options: ["Verb in II Form", "Do/Does", "Object"],
          correctAnswer: "Do/Does",
        },
        {
          question:
            "The interrogative word 'When' is used in the sentence: ____________.",
          options: [
            "Where do you live?",
            "What does he want?",
            "When do we go to school?",
          ],
          correctAnswer: "When do we go to school?",
        },
        {
          question:
            "Only the First Form of the Verb is used with ____________.",
          options: ["Singular Subjects", "Plural Subjects", "Proper Nouns"],
          correctAnswer: "Plural Subjects",
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
            "Simple Present Tense is also known as Past Indefinite Tense.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Negative sentences use the word order: Subject + Do/Does + not + Verb in I form + Object.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Interrogative sentences begin with the use of Am/Is or Do/Does.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "An interrogative sentence starts with an interrogative word placed at the end.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Common interrogative words include: What, When, How, Why, Where.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In the sentence 'He does not play on the road,' 'does' is used because the subject is Plural.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Negative sentences follow the word order: Subject + Do/Does + not + Verb in I form + Object.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The interrogative word 'When' is used in the sentence: Where do you live?",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Only the First Form of the Verb is used with Singular Subjects.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Negative sentences follow the word order: Subject + Do/Does + not + Verb in I form + Object.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
