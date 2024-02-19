export const chapter = "Chapter - 3: Breathe In and Out";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary function of the lungs in the breathing process?",
          optionA: "Produce carbon dioxide",
          optionB: "Take in oxygen and expel carbon dioxide",
          optionC: "Pump blood throughout the body",
          correctAnswer: "b) Take in oxygen and expel carbon dioxide",
        },

        {
          question:
            "Which organ is responsible for connecting the lungs to the back of the throat?",
          optionA: "Diaphragm",
          optionB: "Trachea/Windpipe",
          optionC: "Nose",
          correctAnswer: "b) Trachea/Windpipe",
        },

        {
          question: "What is the role of the diaphragm during inhalation?",
          optionA: "It relaxes and moves up",
          optionB: "It contracts, making more space for the lungs",
          optionC: "It carries air to the lungs",
          correctAnswer: "b) It contracts, making more space for the lungs",
        },

        {
          question:
            "What is the process called when we breathe out carbon dioxide?",
          optionA: "Inhalation",
          optionB: "Exhalation",
          optionC: "Respiration",
          correctAnswer: "b) Exhalation",
        },

        {
          question:
            "Why does the breathing rate increase during physical activities like running and exercising?",
          optionA: "To expel more carbon dioxide",
          optionB: "To cool down the body temperature",
          optionC: "To meet the increased demand for oxygen and energy",
          correctAnswer:
            "c) To meet the increased demand for oxygen and energy",
        },

        {
          question: "What is the purpose of blowing on a glass of hot coffee?",
          optionA: "To make it hotter",
          optionB: "To cool it down",
          optionC: "To add flavor",
          correctAnswer: "b) To cool it down",
        },

        {
          question:
            "Why do glass surfaces become cloudy when blown upon during winters?",
          optionA: "Due to the decrease in temperature",
          optionB:
            "Because breath contains water vapor that condenses on the cold surface",
          optionC: "To create a frost effect",
          correctAnswer:
            "b) Because breath contains water vapor that condenses on the cold surface",
        },

        {
          question:
            "How does blowing on a burning piece of wood affect its combustion?",
          optionA: "It extinguishes the fire",
          optionB: "It has no effect on combustion",
          optionC: "It enhances combustion by increasing the supply of oxygen",
          correctAnswer:
            "c) It enhances combustion by increasing the supply of oxygen",
        },

        {
          question:
            "What is the temperature of our body mentioned in the text?",
          optionA: "98.6 degrees Fahrenheit",
          optionB: "98.4 degrees Fahrenheit",
          optionC: "100 degrees Fahrenheit",
          correctAnswer: "b) 98.4 degrees Fahrenheit",
        },

        {
          question:
            "What is the term for sending a stream of air with force from the mouth?",
          optionA: "Inhaling",
          optionB: "Exhaling",
          optionC: "Blowing",
          correctAnswer: "c) Blowing",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Breathing involves two main processes: __________ and __________.",
          options: [
            "a) Inhalation, Respiration",
            "b) Exhalation, Digestion",
            "c) Circulation, Perspiration",
          ],
          answer: "a) Inhalation, Respiration",
        },

        {
          question:
            "Lungs are the primary organs of the respiratory system that take in __________ and expel __________ when you breathe.",
          options: [
            "a) Nitrogen, Oxygen",
            "b) Carbon Dioxide, Oxygen",
            "c) Oxygen, Carbon Dioxide",
          ],
          answer: "c) Oxygen, Carbon Dioxide",
        },

        {
          question:
            "The tube connecting the lungs to the back of the throat is called __________.",
          options: ["a) Bronchi", "b) Trachea/Windpipe", "c) Alveoli"],
          answer: "b) Trachea/Windpipe",
        },

        {
          question:
            "During inhalation, the diaphragm contracts, making more space for the __________.",
          options: ["a) Heart", "b) Liver", "c) Lungs"],
          answer: "c) Lungs",
        },

        {
          question:
            "The process of exhaling involves the relaxation and upward movement of the __________.",
          options: ["a) Stomach", "b) Liver", "c) Diaphragm"],
          answer: "c) Diaphragm",
        },

        {
          question:
            "Breathing rate increases during physical activities like running, exercising, and playing due to the increased demand for __________ and __________.",
          options: [
            "a) Carbon Dioxide, Nitrogen",
            "b) Oxygen, Energy",
            "c) Hydrogen, Water",
          ],
          answer: "b) Oxygen, Energy",
        },

        {
          question: "Blowing on a glass of hot coffee is done to __________.",
          options: ["a) Make it hotter", "b) Cool it down", "c) Add sugar"],
          answer: "b) Cool it down",
        },

        {
          question:
            "Glass surfaces become cloudy when blown upon during winters because breath contains __________ that condenses on the cold surface.",
          options: ["a) Oxygen", "b) Water Vapor", "c) Carbon Monoxide"],
          answer: "b) Water Vapor",
        },

        {
          question:
            "Blowing on a burning piece of wood enhances combustion by increasing the supply of __________ provided by our breath.",
          options: ["a) Carbon Dioxide", "b) Nitrogen", "c) Oxygen"],
          answer: "c) Oxygen",
        },

        {
          question:
            "Our body temperature is about __________ degrees Fahrenheit, which is much higher than the temperature outside.",
          options: ["a) 96.8", "b) 98.4", "c) 100.2"],
          answer: "b) 98.4",
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
            "Breathing involves three main processes: Inhalation, Exhalation, and Respiration.",
          options: ["True", "False"],
          answer: "True",
        },

        {
          question:
            "The trachea, also known as the windpipe, connects the lungs to the back of the throat.",
          options: ["True", "False"],
          answer: "True",
        },

        {
          question:
            "During inhalation, the diaphragm relaxes, making more space for the lungs to expand.",
          options: ["True", "False"],
          answer: "False",
        },

        {
          question:
            "Blowing on a glass of hot coffee is done to make it hotter.",
          options: ["True", "False"],
          answer: "False",
        },

        {
          question:
            "Glass surfaces become cloudy when blown upon during winters because breath contains carbon dioxide.",
          options: ["True", "False"],
          answer: "False",
        },

        {
          question:
            "The process of exhaling involves the contraction of the diaphragm.",
          options: ["True", "False"],
          answer: "False",
        },

        {
          question:
            "Breathing rate remains constant and does not change during physical activities.",
          options: ["True", "False"],
          answer: "False",
        },

        {
          question:
            "During winters, blowing on our palms helps to keep them warm due to the cold air exhaled by our mouth.",
          options: ["True", "False"],
          answer: "True",
        },

        {
          question:
            "The primary function of the lungs is to expel oxygen and take in carbon dioxide during breathing.",
          options: ["True", "False"],
          answer: "False",
        },

        {
          question:
            "Our body temperature is approximately 98.4 degrees Celsius.",
          options: ["True", "False"],
          answer: "False",
        },
      ],
   };
}

export var activityData;
