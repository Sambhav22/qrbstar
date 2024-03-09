export const chapter = "Chapter -13: How We Fall Sick";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the main message of the text regarding Corona?",
          optionA: "It is the only disease one should be concerned about.",
          optionB:
            "Regular hand washing and social distancing can help prevent it.",
          optionC: "It is a disease caused by lack of sleep.",
          correctAnswer:
            "Regular hand washing and social distancing can help prevent it.",
        },
        {
          question:
            "Which of the following is NOT listed as a simple rule for cleanliness?",
          optionA: "Washing hands with soap after coming home",
          optionB: "Wearing dirty clothes",
          optionC: "Trimming nails and hair regularly",
          correctAnswer: "Wearing dirty clothes",
        },
        {
          question:
            "What type of physical exercise is NOT mentioned in the text?",
          optionA: "Running",
          optionB: "Yoga",
          optionC: "Watching TV",
          correctAnswer: "Watching TV",
        },
        {
          question:
            "According to the text, why are snacks sold in the market not good for health?",
          optionA: "They are too expensive.",
          optionB: "They are not tasty.",
          optionC: "They contain a lot of sugar and salt.",
          correctAnswer: "They contain a lot of sugar and salt.",
        },
        {
          question: "What is recommended to get adequate rest?",
          optionA: "Playing games",
          optionB: "Eating a lot of snacks",
          optionC: "Skipping sleep",
          correctAnswer: "Playing games",
        },
        {
          question:
            "What is the main purpose of physical exercise mentioned in the text?",
          optionA: "To build muscles",
          optionB: "To improve overall health",
          optionC: "To lose weight",
          correctAnswer: "To improve overall health",
        },
        {
          question: "According to the text, what refreshes the brain?",
          optionA: "Skipping meals",
          optionB: "Physical exercise",
          optionC: "Thinking",
          correctAnswer: "Thinking",
        },
        {
          question:
            "What should one do after entering the house from outside according to the text?",
          optionA: "Play games",
          optionB: "Wash hands with soap",
          optionC: "Go to sleep immediately",
          correctAnswer: "Wash hands with soap",
        },
        {
          question: "What is emphasized regarding food in the text?",
          optionA: "Eating snacks sold in the market",
          optionB: "Eating only homemade food",
          optionC: "Skipping meals",
          correctAnswer: "Eating only homemade food",
        },
        {
          question:
            "What is the role of sleep in maintaining health according to the text?",
          optionA: "It is not necessary for health.",
          optionB: "It helps in refreshing the body and brain.",
          optionC: "It should be avoided.",
          correctAnswer: "It helps in refreshing the body and brain.",
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
          question: "According to the text, Corona is caused by a ________.",
          optionA: "bacteria",
          optionB: "virus",
          optionC: "fungus",
          correctAnswer: "virus",
        },
        {
          question:
            "One of the simple rules for cleanliness mentioned in the text is to wash hands with ________ after coming home.",
          optionA: "water",
          optionB: "soap",
          optionC: "hand sanitizer",
          correctAnswer: "soap",
        },
        {
          question:
            "According to the text, which type of physical exercise is beneficial?",
          optionA: "Running",
          optionB: "Sleeping",
          optionC: "Texting",
          correctAnswer: "Running",
        },
        {
          question:
            "The snacks sold in the market are not good for health because they contain a lot of ________ and salt.",
          optionA: "sugar",
          optionB: "fat",
          optionC: "protein",
          correctAnswer: "sugar",
        },
        {
          question: "According to the text, what refreshes the brain?",
          optionA: "Skipping meals",
          optionB: "Physical exercise",
          optionC: "Thinking",
          correctAnswer: "Thinking",
        },
        {
          question:
            "What should one do after entering the house from outside according to the text?",
          optionA: "Play games",
          optionB: "Wash hands with soap",
          optionC: "Go to sleep immediately",
          correctAnswer: "Wash hands with soap",
        },
        {
          question: "According to the text, what is emphasized regarding food?",
          optionA: "Eating snacks sold in the market",
          optionB: "Eating only homemade food",
          optionC: "Skipping meals",
          correctAnswer: "Eating only homemade food",
        },
        {
          question:
            "What is the role of sleep in maintaining health according to the text?",
          optionA: "It is not necessary for health.",
          optionB: "It helps in refreshing the body and brain.",
          optionC: "It should be avoided.",
          correctAnswer: "It helps in refreshing the body and brain.",
        },
        {
          question:
            "What is one of the ways to take adequate rest according to the text?",
          optionA: "Sleeping early and rising early",
          optionB: "Watching TV all night",
          optionC: "Skipping meals",
          correctAnswer: "Sleeping early and rising early",
        },
        {
          question:
            "What is mentioned as one of the benefits of cleanliness in the text?",
          optionA: "It causes diseases",
          optionB: "It prevents diseases",
          optionC: "It is unnecessary",
          correctAnswer: "It prevents diseases",
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
            "Regular hand washing and social distancing can help prevent Corona.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Wearing dirty clothes is recommended for maintaining cleanliness according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Watching TV is mentioned as a type of physical exercise in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Snacks sold in the market are considered good for health according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Playing games is recommended for getting adequate rest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Physical exercise is only recommended for building muscles according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Thinking is mentioned as a way to refresh the brain.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Washing hands with soap after entering the house is recommended in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Eating only homemade food is emphasized for maintaining health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Sleeping is considered unnecessary for maintaining health according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
