export const chapter = "Chapter - 8: HEALTHY HABITS";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is essential for enjoying every bit of life according to the text?",
          optionA: "Reading books",
          optionB: "Having a fit and healthy body",
          optionC: "Watching TV",
          correctAnswer: "Having a fit and healthy body",
        },
        {
          question:
            "Which of the following is NOT mentioned as a way to keep oneself fit and healthy?",
          optionA: "Eating healthy",
          optionB: "Playing and exercising",
          optionC: "Sleeping for long hours",
          correctAnswer: "Sleeping for long hours",
        },
        {
          question:
            "How many glasses of milk are recommended to drink daily for maintaining health?",
          optionA: "One",
          optionB: "Two to three",
          optionC: "Four",
          correctAnswer: "Two to three",
        },
        {
          question: "What is emphasized regarding eating habits in the text?",
          optionA: "Overeating is encouraged",
          optionB: "Eating quickly is recommended",
          optionC: "Eating slowly and chewing well is advised",
          correctAnswer: "Eating slowly and chewing well is advised",
        },
        {
          question:
            "What is suggested for physical activity in the 'Play and Exercise' section?",
          optionA: "Sitting for long hours",
          optionB: "Avoiding outdoor games",
          optionC: "Doing light exercise daily",
          correctAnswer: "Doing light exercise daily",
        },
        {
          question:
            "What is the recommended bedtime for a sound sleep according to the text?",
          optionA: "Midnight",
          optionB: "9 o'clock",
          optionC: "11 o'clock",
          correctAnswer: "9 o'clock",
        },
        {
          question:
            "How often should one brush their teeth according to the 'Keep Clean' section?",
          optionA: "Once a week",
          optionB: "Twice a day",
          optionC: "Only in the morning",
          correctAnswer: "Twice a day",
        },
        {
          question: "What is NOT mentioned as a way to keep clean in the text?",
          optionA: "Taking a bath daily",
          optionB: "Wearing dirty clothes",
          optionC: "Washing hands after coming back from outside",
          correctAnswer: "Wearing dirty clothes",
        },
        {
          question:
            "What is the purpose of taking enough rest according to the text?",
          optionA: "To watch TV",
          optionB: "To feel fresh and rested",
          optionC: "To avoid work",
          correctAnswer: "To feel fresh and rested",
        },
        {
          question:
            "According to the text, what should be avoided when it comes to food consumption?",
          optionA: "Eating seasonal fruits",
          optionB: "Overeating",
          optionC: "Drinking enough water",
          correctAnswer: "Overeating",
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
            "To keep ourselves fit and healthy, it is essential to ________ healthy.",
          optionA: "sleep",
          optionB: "eat",
          optionC: "dance",
          correctAnswer: "eat",
        },
        {
          question:
            "It is recommended to drink two to three glasses of ________ daily for maintaining health.",
          optionA: "water",
          optionB: "milk",
          optionC: "juice",
          correctAnswer: "milk",
        },
        {
          question:
            "In the 'Play and Exercise' section, it is advised to do light exercise daily in the ________.",
          optionA: "afternoon",
          optionB: "morning",
          optionC: "evening",
          correctAnswer: "morning",
        },
        {
          question:
            "It is suggested to eat seasonal ________ daily for maintaining a healthy diet.",
          optionA: "vegetables",
          optionB: "fruits",
          optionC: "grains",
          correctAnswer: "fruits",
        },
        {
          question:
            "The recommended bedtime for a sound sleep is till ________ o'clock.",
          optionA: "8",
          optionB: "9",
          optionC: "10",
          correctAnswer: "9",
        },
        {
          question:
            "According to the 'Keep Clean' section, it is advised to brush your ________ twice a day.",
          optionA: "hair",
          optionB: "teeth",
          optionC: "nails",
          correctAnswer: "teeth",
        },
        {
          question:
            "Taking a ________ daily is part of keeping yourself clean.",
          optionA: "jog",
          optionB: "bath",
          optionC: "nap",
          correctAnswer: "bath",
        },
        {
          question: "After a day of work, your body needs enough ________.",
          optionA: "exercise",
          optionB: "rest",
          optionC: "food",
          correctAnswer: "rest",
        },
        {
          question:
            "It is recommended to avoid too much ________ food for a healthy lifestyle.",
          optionA: "spicy",
          optionB: "junk",
          optionC: "sweet",
          correctAnswer: "junk",
        },
        {
          question:
            "The text suggests walking for short distances and keeping yourself physically ________.",
          optionA: "inactive",
          optionB: "lazy",
          optionC: "active",
          correctAnswer: "active",
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
            "Eating healthy food at fixed time intervals is important for maintaining a fit and healthy body.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Drinking two to three glasses of milk daily is recommended for maintaining health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Playing outdoor games in the evening is suggested to keep yourself physically active.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "It is advised to eat seasonal fruits daily for a healthy diet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Taking a bath daily is not necessary for maintaining cleanliness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Going to bed till 9 o'clock and taking a sound sleep is recommended for rest and feeling fresh.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Wearing dirty clothes is mentioned as a way to keep yourself clean.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Avoiding too much junk food is not necessary for maintaining a healthy lifestyle.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Doing light exercise daily in the morning is suggested for physical activity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The bus driver's role is to bring the students to school.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
