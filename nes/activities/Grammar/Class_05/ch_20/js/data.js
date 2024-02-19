export const chapter = "Chapter - 20: Interjections";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the primary function of interjections?",
          optionA: "To convey information",
          optionB: "To express emotions",
          optionC: "To provide details",
          correctAnswer: "To express emotions",
        },
        {
          question: "Which of the following is NOT a common interjection?",
          optionA: "Goodbye",
          optionB: "How",
          optionC: "Bicycle",
          correctAnswer: "Bicycle",
        },
        {
          question: "What do interjections convey through their sounds?",
          optionA: "Facts",
          optionB: "Emotions",
          optionC: "Instructions",
          correctAnswer: "Emotions",
        },
        {
          question: "Which interjection expresses joy or celebration?",
          optionA: "Oops",
          optionB: "Boo",
          optionC: "Hurray",
          correctAnswer: "Hurray",
        },
        {
          question: "What type of feelings do interjections typically express?",
          optionA: "Logical reasoning",
          optionB: "Sudden bursts of emotions",
          optionC: "Detailed explanations",
          correctAnswer: "Sudden bursts of emotions",
        },
        {
          question:
            "Identify the interjection expressing surprise in the given sentences.",
          optionA: "Wow",
          optionB: "Ah",
          optionC: "Ouch",
          correctAnswer: "Wow",
        },
        {
          question:
            "Choose the interjection indicating disappointment or disapproval.",
          optionA: "Awesome",
          optionB: "Eew",
          optionC: "Hello",
          correctAnswer: "Eew",
        },
        {
          question: "Which interjection is commonly used to attract attention?",
          optionA: "Goodbye",
          optionB: "Hey",
          optionC: "Boo",
          correctAnswer: "Hey",
        },
        {
          question:
            "What emotion is typically associated with the interjection 'Oops'?",
          optionA: "Excitement",
          optionB: "Surprise",
          optionC: "Regret",
          correctAnswer: "Regret",
        },
        {
          question:
            "Which of the following is an interjection expressing pain?",
          optionA: "Oh no",
          optionB: "Nice",
          optionC: "Great",
          correctAnswer: "Oh no",
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
            "An Interjection is a word that reveals the __________ of the speaker.",
          options: ["facts", "emotions", "details"],
          correctAnswer: "emotions",
        },
        {
          question: "Interjections convey emotions through their __________.",
          options: ["meanings", "sounds", "structures"],
          correctAnswer: "sounds",
        },
        {
          question:
            "The function of interjections is to express emotions or sudden bursts of __________.",
          options: ["thoughts", "actions", "feelings"],
          correctAnswer: "feelings",
        },
        {
          question:
            "Common interjection words include 'hey,' 'hurray,' and __________.",
          options: ["awesome", "goodbye", "nice"],
          correctAnswer: "awesome",
        },
        {
          question:
            "The interjection 'oops' is often used to express __________.",
          options: ["excitement", "regret", "joy"],
          correctAnswer: "regret",
        },
        {
          question: "'Oh no' is an interjection expressing __________.",
          options: ["surprise", "disgust", "sadness"],
          correctAnswer: "disgust",
        },
        {
          question:
            "The interjection 'ouch' is commonly used to express __________.",
          options: ["happiness", "pain", "surprise"],
          correctAnswer: "pain",
        },
        {
          question:
            "Some common interjection words for greeting include 'hello' and __________.",
          options: ["awesome", "goodbye", "how"],
          correctAnswer: "how",
        },
        {
          question: "Interjections like 'boo' are used to express __________.",
          options: ["excitement", "surprise", "fear"],
          correctAnswer: "fear",
        },
        {
          question:
            "'Hurray! We will go for a picnic' - In this sentence, 'hurray' is used to express __________.",
          options: ["excitement", "sadness", "confusion"],
          correctAnswer: "excitement",
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
            "An Interjection is a word that conceals the emotions of the speaker.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Interjections convey information through their meanings.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The primary function of interjections is to provide details.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Common interjection words include 'hello,' 'goodbye,' and 'how.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The interjection 'oops' is often used to express joy.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "'Oh no' is an interjection expressing happiness.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The interjection 'ouch' is commonly used to express surprise.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Interjections like 'boo' are used to express excitement.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "'Hurray! We will go for a picnic' - In this sentence, 'hurray' is used to express confusion.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Interjections convey emotions through their sounds.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
