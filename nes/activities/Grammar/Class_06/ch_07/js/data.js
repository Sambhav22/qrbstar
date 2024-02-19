export const chapter = "Chapter - 7: Sentences ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            'What type of sentence is "The aeroplanes in the sky do not appear very big"?',
          optionA: "Interrogative Sentence",
          optionB: "Exclamatory Sentence",
          optionC: "Negative Assertive Sentence",
          correctAnswer: "Negative Assertive Sentence",
        },
        {
          question:
            "Which type of questions need some information for an answer and begin with question words like when, where, who, what, how, how many, which, etc.?",
          optionA: "Yes/No-type Questions",
          optionB: "Wh-type Questions",
          optionC: "Imperative Questions",
          correctAnswer: "Wh-type Questions",
        },
        {
          question: "What is the function of an Imperative Sentence?",
          optionA: "To express strong or sudden feelings",
          optionB: "To order or request",
          optionC: "To make statements or declarations",
          correctAnswer: "To order or request",
        },
        {
          question:
            "How is an Assertive Sentence changed into a Negative Assertive Sentence?",
          optionA:
            "By inserting no/not/never if there is an Auxiliary, or by inserting does not/did not in Present and Past Indefinite Tenses respectively.",
          optionB: "By bringing the Auxiliary to the head of the sentence.",
          optionC:
            "By putting the Question Word at the beginning, followed by Auxiliary Verb, Subject, and Verb.",
          correctAnswer:
            "By inserting no/not/never if there is an Auxiliary, or by inserting does not/did not in Present and Past Indefinite Tenses respectively.",
        },
        {
          question: 'What type of sentence is "May you live long!"?',
          optionA: "Assertive Sentence",
          optionB: "Interrogative Sentence",
          optionC: "Exclamatory Sentence",
          correctAnswer: "Exclamatory Sentence",
        },
        {
          question:
            "In Yes/No-type Questions, where is the Auxiliary brought in the sentence?",
          optionA: "At the beginning of the sentence",
          optionB: "At the end of the sentence",
          optionC: "In the middle of the sentence",
          correctAnswer: "At the beginning of the sentence",
        },
        {
          question: "What is the function of an Exclamatory Sentence?",
          optionA: "To express strong or sudden feelings",
          optionB: "To order or request",
          optionC: "To make statements or declarations",
          correctAnswer: "To express strong or sudden feelings",
        },
        {
          question:
            'How is the sentence "He can solve all this trouble easily" transformed into a Negative Sentence?',
          optionA: "He does not solve all this trouble easily.",
          optionB: "He cannot solve all this trouble easily.",
          optionC: "How can he solve all this trouble easily?",
          correctAnswer: "He cannot solve all this trouble easily.",
        },
        {
          question: "What is the function of Assertive Sentences?",
          optionA: "To express strong or sudden feelings",
          optionB: "To order or request",
          optionC: "To make statements or declarations",
          correctAnswer: "To make statements or declarations",
        },
        {
          question:
            "Which type of sentence is used for questions that can be replied in Yes or No?",
          optionA: "Yes/No-type Questions",
          optionB: "Wh-type Questions",
          optionC: "Imperative Questions",
          correctAnswer: "Yes/No-type Questions",
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
            "An Assertive Sentence is also called a __________ Sentence.",
          options: ["Interrogative", "Declarative", "Exclamatory"],
          correctAnswer: "Declarative",
        },
        {
          question: "__________ Sentences are used to inquire about something.",
          options: ["Assertive", "Interrogative", "Imperative"],
          correctAnswer: "Interrogative",
        },
        {
          question:
            "Imperative Sentences are used to give __________ or __________.",
          options: [
            "Statements, Declarations",
            "Orders, Requests",
            "Questions, Answers",
          ],
          correctAnswer: "Orders, Requests",
        },
        {
          question:
            "Exclamatory Sentences express __________ or __________ feelings.",
          options: ["Strong, Sudden", "Neutral, Calm", "Positive, Assertive"],
          correctAnswer: "Strong, Sudden",
        },
        {
          question:
            "In Yes/No-type Questions, the Auxiliary is brought to the __________ of the sentence.",
          options: ["Beginning", "Middle", "End"],
          correctAnswer: "Beginning",
        },
        {
          question:
            "The transformation of an Assertive Sentence into a Negative Assertive Sentence involves inserting __________ if there is an Auxiliary.",
          options: ["No/Not/Never", "Maybe/Perhaps/Always", "Why/When/Where"],
          correctAnswer: "No/Not/Never",
        },
        {
          question:
            "__________ Sentences are changed into Negative by inserting does not/did not in Present and Past Indefinite Tenses, respectively.",
          options: ["Assertive", "Interrogative", "Imperative"],
          correctAnswer: "Assertive",
        },
        {
          question:
            "The function of an Exclamatory Sentence is to express __________ or __________ feelings.",
          options: ["Confusing, Neutral", "Strong, Sudden", "Calm, Assertive"],
          correctAnswer: "Strong, Sudden",
        },
        {
          question:
            "The SIZE attribute of the <HR> tag controls the __________ of the horizontal rule.",
          options: ["Length", "Color", "Size"],
          correctAnswer: "Size",
        },
        {
          question:
            "The background image in HTML is set using the __________ attribute of the <BODY> tag.",
          options: ["TEXT", "LINK", "BACKGROUND"],
          correctAnswer: "BACKGROUND",
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
            "An Imperative Sentence is used to express strong or sudden feelings.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Exclamatory Sentences are primarily used for asking questions.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In Yes/No-type Questions, the auxiliary is brought to the end of the sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Logical text styles in HTML are applied using tags like <B> for bold and <I> for italics.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The <TITLE> tag in HTML specifies the document's title and appears on the browser's title bar.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Assertive Sentences can be affirmative or negative.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The <HR> tag in HTML produces a vertical line across the width of the browser window.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The BACKGROUND attribute of the <BODY> tag in HTML is used to set a background image for the web page.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Comments in HTML, given between <!... and ...>, serve the purpose of providing styling within the code.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Interrogative Sentences are used to make statements or declarations.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
