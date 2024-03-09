export const chapter = "Chapter -3: Breathe In and Out";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        [
            {
                "question": "What is the primary function of breathing?",
                "optionA": "To release oxygen into the atmosphere",
                "optionB": "To take in oxygen and expel carbon dioxide",
                "optionC": "To regulate body temperature",
                "correctAnswer": "To take in oxygen and expel carbon dioxide"
            },
            {
                "question": "Which organ helps in moving the lungs up and down during breathing?",
                "optionA": "Trachea",
                "optionB": "Diaphragm",
                "optionC": "Lungs",
                "correctAnswer": "Diaphragm"
            },
            {
                "question": "What happens during inhalation?",
                "optionA": "The diaphragm relaxes",
                "optionB": "Lungs contract to expel air",
                "optionC": "More space is made for lungs as diaphragm contracts",
                "correctAnswer": "More space is made for lungs as diaphragm contracts"
            },
            {
                "question": "When do we experience an increase in breathing rate?",
                "optionA": "While sleeping",
                "optionB": "During physical activities like running and playing",
                "optionC": "While watching television",
                "correctAnswer": "During physical activities like running and playing"
            },
            {
                "question": "What is the process called when we exhale carbon dioxide out of our lungs?",
                "optionA": "Inhalation",
                "optionB": "Exhalation",
                "optionC": "Respiration",
                "correctAnswer": "Exhalation"
            },
            {
                "question": "Which organ is responsible for carrying air to the lungs?",
                "optionA": "Trachea",
                "optionB": "Diaphragm",
                "optionC": "Bronchi",
                "correctAnswer": "Trachea"
            },
            {
                "question": "What is the primary reason for blowing on hot coffee to cool it down?",
                "optionA": "To increase the temperature of the coffee",
                "optionB": "To decrease the temperature of the coffee",
                "optionC": "To add flavor to the coffee",
                "correctAnswer": "To decrease the temperature of the coffee"
            },
            {
                "question": "What causes glass surfaces to become cloudy when we blow on them during winters?",
                "optionA": "Oxygen from our breath",
                "optionB": "Water vapor from our breath",
                "optionC": "Carbon dioxide from our breath",
                "correctAnswer": "Water vapor from our breath"
            },
            {
                "question": "How does blowing hard on a burning piece of wood affect its burning?",
                "optionA": "It extinguishes the fire",
                "optionB": "It has no effect",
                "optionC": "It helps the fire burn better",
                "correctAnswer": "It helps the fire burn better"
            },
            {
                "question": "Why do we blow on our palms during winters?",
                "optionA": "To keep them moist",
                "optionB": "To cool them down",
                "optionC": "To warm them up",
                "correctAnswer": "To warm them up"
            }
        ]
        
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        [
            {
                "question": "The process in which air moves in and out of the lungs is known as _______.",
                "optionA": "Drinking",
                "optionB": "Breathing",
                "optionC": "Eating",
                "correctAnswer": "Breathing"
            },
            {
                "question": "The primary organs of the respiratory system responsible for taking in oxygen and expelling carbon dioxide are the _______.",
                "optionA": "Heart",
                "optionB": "Kidneys",
                "optionC": "Lungs",
                "correctAnswer": "Lungs"
            },
            {
                "question": "The tube that connects the lungs to the back of the throat is called the _______.",
                "optionA": "Bronchi",
                "optionB": "Trachea",
                "optionC": "Esophagus",
                "correctAnswer": "Trachea"
            },
            {
                "question": "The strong muscle located just below the lungs that helps to move them up and down is called the _______.",
                "optionA": "Abdomen",
                "optionB": "Diaphragm",
                "optionC": "Intercostal muscle",
                "correctAnswer": "Diaphragm"
            },
            {
                "question": "Deep breathing sends a message to the brain to _______.",
                "optionA": "Speed up",
                "optionB": "Calm down and relax",
                "optionC": "Stop functioning",
                "correctAnswer": "Calm down and relax"
            },
            {
                "question": "Inhalation is the process of _______.",
                "optionA": "Taking in carbon dioxide",
                "optionB": "Expelling oxygen",
                "optionC": "Taking in oxygen",
                "correctAnswer": "Taking in oxygen"
            },
            {
                "question": "Exhalation is the process of _______.",
                "optionA": "Taking in carbon dioxide",
                "optionB": "Expelling oxygen",
                "optionC": "Expelling carbon dioxide",
                "correctAnswer": "Expelling carbon dioxide"
            },
            {
                "question": "Breathing rate generally increases during _______.",
                "optionA": "Sleep",
                "optionB": "Physical activities",
                "optionC": "Meditation",
                "correctAnswer": "Physical activities"
            },
            {
                "question": "Sending a stream of air with force from the mouth is called _______.",
                "optionA": "Sneezing",
                "optionB": "Coughing",
                "optionC": "Blowing",
                "correctAnswer": "Blowing"
            },
            {
                "question": "Blowing on a burning piece of wood helps it burn better due to _______.",
                "optionA": "Decrease in oxygen supply",
                "optionB": "Increase in oxygen supply",
                "optionC": "No effect on oxygen supply",
                "correctAnswer": "Increase in oxygen supply"
            }
        ]
        
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        [
            {
                "question": "The process in which air moves in and out of the lungs is known as breathing.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "The diaphragm is a muscle located above the lungs.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Inhalation is the process of expelling carbon dioxide from the lungs.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Exhalation is the process of taking in oxygen into the lungs.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Deep breathing sends a message to the brain to speed up.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "The trachea is also known as the windpipe.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Breathing rate generally decreases during physical activities.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Blowing on a burning piece of wood helps decrease its burn.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "The primary organs of the respiratory system are the kidneys.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "Couples who adopt a child become the child's legal guardians.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            }
        ]
        
    
    ],
  };
}

export var activityData;
