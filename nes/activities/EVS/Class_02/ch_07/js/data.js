export const chapter = "Chapter - 7: Air All Around";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the primary reason we need air?",
          optionA: "To inflate balloons",
          optionB: "To breathe",
          optionC: "To fly kites",
          correctAnswer: "To breathe",
        },
        {
          question: "How is air used to rise a hot air balloon?",
          optionA: "Inflating tyres",
          optionB: "Burning something",
          optionC: "Flying kites",
          correctAnswer: "Burning something",
        },
        {
          question: "What contributes to air pollution in the provided text?",
          optionA: "Inflating balloons",
          optionB: "Burning waste in an open area",
          optionC: "Planting more trees",
          correctAnswer: "Burning waste in an open area",
        },
        {
          question:
            "According to the text, what is a harmful effect of excessive vehicle use?",
          optionA: "Balloon inflation",
          optionB: "Environmental pollution",
          optionC: "Growing plants",
          correctAnswer: "Environmental pollution",
        },
        {
          question:
            "How can air pollution be controlled, as suggested in the text?",
          optionA: "Inflating more tyres",
          optionB: "Limiting the use of vehicles",
          optionC: "Burning waste openly",
          correctAnswer: "Limiting the use of vehicles",
        },
        {
          question:
            "What is the main consequence of excessive vehicle use mentioned in the text?",
          optionA: "Pollution in the air",
          optionB: "Growing more trees",
          optionC: "Inflating balloons",
          correctAnswer: "Pollution in the air",
        },
        {
          question:
            "Which activity is NOT mentioned as a use of air in the text?",
          optionA: "Inflating balloons",
          optionB: "Burning waste openly",
          optionC: "Growing plants",
          correctAnswer: "Growing plants",
        },
        {
          question: "How is smoke from vehicles described in the text?",
          optionA: "Beneficial for health",
          optionB: "Impure and harmful for health",
          optionC: "Necessary for flying kites",
          correctAnswer: "Impure and harmful for health",
        },
        {
          question: "What is suggested to control air pollution in the text?",
          optionA: "Inflating more balloons",
          optionB: "Burning waste openly",
          optionC: "Planting more trees",
          correctAnswer: "Planting more trees",
        },
        {
          question:
            "What does the text recommend regarding waste disposal to prevent air pollution?",
          optionA: "Burn waste openly",
          optionB: "Limit the use of vehicles",
          optionC: "Do not burn waste in an open area",
          correctAnswer: "Do not burn waste in an open area",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "Air is essential for us to ____________.",
          optionA: "Fly kites",
          optionB: "Breathe",
          optionC: "Inflate balloons",
          correctAnswer: "Breathe",
        },
        {
          question: "We can only ____________ the air.",
          optionA: "Touch",
          optionB: "See",
          optionC: "Feel",
          correctAnswer: "Feel",
        },
        {
          question:
            "Excessive use of vehicles leads to ____________ pollution.",
          optionA: "Water",
          optionB: "Air",
          optionC: "Noise",
          correctAnswer: "Air",
        },
        {
          question:
            "Smoke coming out from vehicles ____________ the environment.",
          optionA: "Purifies",
          optionB: "Enhances",
          optionC: "Pollutes",
          correctAnswer: "Pollutes",
        },
        {
          question:
            "To control air pollution, it is recommended to limit the ____________ of vehicles.",
          optionA: "Inflation",
          optionB: "Use",
          optionC: "Flying",
          correctAnswer: "Use",
        },
        {
          question: "Fresh air becomes ____________ due to pollution.",
          optionA: "Cleaner",
          optionB: "Impure",
          optionC: "Healthier",
          correctAnswer: "Impure",
        },
        {
          question:
            "Burning something is mentioned as an activity using air, which can contribute to the rise of a ____________.",
          optionA: "Submarine",
          optionB: "Hot air balloon",
          optionC: "Rocket",
          correctAnswer: "Hot air balloon",
        },
        {
          question: "To grow plants, air is used along with ____________.",
          optionA: "Water",
          optionB: "Fire",
          optionC: "Electricity",
          correctAnswer: "Water",
        },
        {
          question:
            "Pollution caused by excessive vehicle use is harmful to our ____________.",
          optionA: "Wealth",
          optionB: "Health",
          optionC: "Education",
          correctAnswer: "Health",
        },
        {
          question:
            "One of the recommendations to control air pollution is to plant more and more ____________.",
          optionA: "Cars",
          optionB: "Trees",
          optionC: "Balloons",
          correctAnswer: "Trees",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Air is visible and touchable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Vehicles contribute to environmental pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Fresh air becomes impure due to excessive vehicle use.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Inflating balloons is mentioned as a use of air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Burning waste in an open area is recommended to control air pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Limiting the use of vehicles is a suggested measure to control air pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Growing more trees is not mentioned as a way to control air pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The text mentions that excessive vehicle use is beneficial for health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Air is used in the activity of flying kites.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Purified air is harmful to our health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
