export const chapter = "Chapter - 12: Forms of Verbs";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What are the three forms of a verb?",
          optionA: "Present, Past, Future",
          optionB: "Present, Past, Past Participle",
          optionC: "Base, Progressive, Perfect",
          correctAnswer: "Present, Past, Past Participle",
        },
        {
          question:
            "Which form of a verb is formed by adding -ing to the Present Form?",
          optionA: "Past Form",
          optionB: "Present Participle Form",
          optionC: "Future Form",
          correctAnswer: "Present Participle Form",
        },
        {
          question: "What is the IV Form of a verb?",
          optionA: "Future Form",
          optionB: "Present Participle Form",
          optionC: "Past Participle Form",
          correctAnswer: "Present Participle Form",
        },
        {
          question:
            "In the sentence 'Govind is writing a letter,' which form of the verb is used?",
          optionA: "I Form",
          optionB: "II Form",
          optionC: "-ing Form",
          correctAnswer: "-ing Form",
        },
        {
          question:
            "What do Weak Verbs form their Past and Past Participle Forms by adding?",
          optionA: "-ed, -d, -t",
          optionB: "-ing",
          optionC: "-s, -es",
          correctAnswer: "-ed, -d, -t",
        },
        {
          question:
            "What are Strong Verbs characterized by in terms of their Past and Past Participle Forms?",
          optionA: "Adding -ing",
          optionB: "Changing inside Vowels",
          optionC: "Adding -ed",
          correctAnswer: "Changing inside Vowels",
        },
        {
          question:
            "Which category of verbs does not change their form in Past and Past Participle Forms?",
          optionA: "Weak Verbs",
          optionB: "Strong Verbs",
          optionC: "Unchanging Verbs",
          correctAnswer: "Unchanging Verbs",
        },
        {
          question: "Among the listed verbs, which one is a Strong Verb?",
          optionA: "Read",
          optionB: "Cut",
          optionC: "Put",
          correctAnswer: "Cut",
        },
        {
          question: "Which of the following is a Weak Verb?",
          optionA: "Read",
          optionB: "Hit",
          optionC: "Spread",
          correctAnswer: "Spread",
        },
        {
          question:
            "Which form of the verb is formed by adding -ing to the Present Form?",
          optionA: "Past Form",
          optionB: "Present Participle Form",
          optionC: "Future Form",
          correctAnswer: "Present Participle Form",
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
            "Every verb has three forms: Present Form (I Form), Past Form (II Form), and Past Participle Form (III Form). The IV Form, called Present Participle, is formed by adding ________ to the Present Form of the verb.",
          options: ["-s", "-ed", "-ing"],
          correctAnswer: "-ing",
        },
        {
          question:
            "Govind is currently writing a letter, demonstrating the use of the ________ form of the verb.",
          options: ["I Form", "II Form", "-ing Form"],
          correctAnswer: "-ing Form",
        },
        {
          question:
            "Weak Verbs are characterized by forming their Past and Past Participle Forms by adding ________ to the Present Form.",
          options: ["-s", "-ed, d, or t", "-ing"],
          correctAnswer: "-ed, d, or t",
        },
        {
          question:
            "Strong Verbs are verbs that change their Past and Past Participle Forms by changing ________.",
          options: ["Present Form", "Inside Vowels", "Endings"],
          correctAnswer: "Inside Vowels",
        },
        {
          question:
            "Some verbs, such as cost, cut, hit, hurt, knit, let, put, read, rid, set, shut, and spread, do not change their form in ________.",
          options: ["Present Form", "Past Form", "Past Participle Forms"],
          correctAnswer: "Past Participle Forms",
        },
        {
          question:
            "The IV Form, Present Participle, is formed by adding ________ to the Present Form of the verb.",
          options: ["-ed", "-s", "-ing"],
          correctAnswer: "-ing",
        },
        {
          question:
            "In the sentence 'Govind wrote a letter,' the verb form used is the ________.",
          options: ["I Form", "II Form", "III Form"],
          correctAnswer: "II Form",
        },
        {
          question:
            "Some verbs are classified as Weak Verbs because they form their Past and Past Participle Forms by adding ________ to the Present Form.",
          options: ["-ing", "-ed, d, or t", "-s"],
          correctAnswer: "-ed, d, or t",
        },
        {
          question:
            "Strong Verbs change their Past and Past Participle Forms by changing inside ________.",
          options: ["Consonants", "Vowels", "Endings"],
          correctAnswer: "Vowels",
        },
        {
          question:
            "The verb forms that remain unchanged in Past and Past Participle Forms include ________.",
          options: ["Weak Verbs", "Strong Verbs", "Some Verbs"],
          correctAnswer: "Some Verbs",
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
            "The Present Participle Form is formed by adding -ing to the Past Form of the verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "All verbs change their forms in Past and Past Participle Forms.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Weak Verbs form their Past and Past Participle Forms by adding -ed, d, or t to the Present Form.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Strong Verbs change their forms by changing inside Consonants.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The IV Form, Present Participle, is formed by adding -ing to the Present Form of the verb.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The sentence 'Govind is writing a letter.' demonstrates the use of the Past Form of the verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "All verbs change their form in the Present Participle Form.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Some verbs, such as cost, cut, and read, do not change their form in Past and Past Participle Forms.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The Past Participle Form is formed by adding -ed to the Present Form of the verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The Present Form of a verb is also known as the I Form.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
