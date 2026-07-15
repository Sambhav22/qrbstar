export const chapter = "Chapter -4: Digestion and Deficiency Diseases";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        [
            {
                "question": "What is the process called that breaks down food into simpler forms?",
                "optionA": "Respiration",
                "optionB": "Digestion",
                "optionC": "Circulation",
                "correctAnswer": "Digestion"
            },
            {
                "question": "Which system is responsible for breaking down food and absorbing nutrients?",
                "optionA": "Circulatory system",
                "optionB": "Digestive system",
                "optionC": "Nervous system",
                "correctAnswer": "Digestive system"
            },
            {
                "question": "What enzyme found in saliva helps break down starch into sugar?",
                "optionA": "Amylase",
                "optionB": "Lipase",
                "optionC": "Pepsin",
                "correctAnswer": "Amylase"
            },
            {
                "question": "Which organ produces gastric acid to aid in food digestion?",
                "optionA": "Liver",
                "optionB": "Stomach",
                "optionC": "Pancreas",
                "correctAnswer": "Stomach"
            },
            {
                "question": "Which organs contribute enzymes to aid digestion in the small intestine?",
                "optionA": "Liver, pancreas, and gall bladder",
                "optionB": "Kidneys, spleen, and lungs",
                "optionC": "Heart, brain, and stomach",
                "correctAnswer": "Liver, pancreas, and gall bladder"
            },
            {
                "question": "How long does food typically stay in the small intestine before nutrients are absorbed?",
                "optionA": "Up to 4 hours",
                "optionB": "Up to 8 hours",
                "optionC": "Up to 12 hours",
                "correctAnswer": "Up to 4 hours"
            },
            {
                "question": "What is the main function of the large intestine?",
                "optionA": "Absorbing nutrients",
                "optionB": "Producing enzymes",
                "optionC": "Absorbing water",
                "correctAnswer": "Absorbing water"
            },
            {
                "question": "A balanced diet includes sufficient amounts of which of the following?",
                "optionA": "Fats, carbohydrates, proteins, vitamins, and minerals",
                "optionB": "Water and roughage",
                "optionC": "Proteins and carbohydrates",
                "correctAnswer": "Fats, carbohydrates, proteins, vitamins, and minerals"
            },
            {
                "question": "What is hunger?",
                "optionA": "A condition where a person eats too much food",
                "optionB": "A condition where a person is unable to eat sufficient food to meet basic nutritional needs",
                "optionC": "A condition where a person craves specific types of food",
                "correctAnswer": "A condition where a person is unable to eat sufficient food to meet basic nutritional needs"
            },
            {
                "question": "Which condition results from deficiency of both proteins and carbohydrates?",
                "optionA": "Kwashiorkor",
                "optionB": "Marasmus",
                "optionC": "Scurvy",
                "correctAnswer": "Marasmus"
            }
        ]
        
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        [
            {
                "question": "The process in which air moves in and out of the lungs is known as _______ .",
                "optionA": "Ingestion",
                "optionB": "Respiration",
                "optionC": "Circulation",
                "correctAnswer": "Respiration"
            },
            {
                "question": "The primary organs of the respiratory system responsible for taking in oxygen and expelling carbon dioxide are the _______ .",
                "optionA": "Heart",
                "optionB": "Kidneys",
                "optionC": "Lungs",
                "correctAnswer": "Lungs"
            },
            {
                "question": "The tube that connects the lungs to the back of the throat is called the _______ .",
                "optionA": "Bronchi",
                "optionB": "Trachea",
                "optionC": "Esophagus",
                "correctAnswer": "Trachea"
            },
            {
                "question": "The strong muscle located just below the lungs that helps to move them up and down is called the _______ .",
                "optionA": "Abdomen",
                "optionB": "Diaphragm",
                "optionC": "Intercostal muscle",
                "correctAnswer": "Diaphragm"
            },
            {
                "question": "Deep breathing sends a message to the brain to _______ .",
                "optionA": "Speed up",
                "optionB": "Calm down and relax",
                "optionC": "Stop functioning",
                "correctAnswer": "Calm down and relax"
            },
            {
                "question": "Inhalation is the process of _______ .",
                "optionA": "Taking in carbon dioxide",
                "optionB": "Expelling oxygen",
                "optionC": "Taking in oxygen",
                "correctAnswer": "Taking in oxygen"
            },
            {
                "question": "Exhalation is the process of _______ .",
                "optionA": "Taking in carbon dioxide",
                "optionB": "Expelling oxygen",
                "optionC": "Expelling carbon dioxide",
                "correctAnswer": "Expelling carbon dioxide"
            },
            {
                "question": "Breathing rate generally increases during _______ .",
                "optionA": "Sleep",
                "optionB": "Physical activities",
                "optionC": "Meditation",
                "correctAnswer": "Physical activities"
            },
            {
                "question": "Sending a stream of air with force from the mouth is called _______ .",
                "optionA": "Sneezing",
                "optionB": "Coughing",
                "optionC": "Blowing",
                "correctAnswer": "Blowing"
            },
            {
                "question": "Blowing on a burning piece of wood helps it burn better due to _______ .",
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
    questions: shuffleQues([
      shuffleOptions(
        [
            {
                "question": "The process of breaking down food into simpler forms is called digestion.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "The digestive system is responsible for absorbing digested food and providing energy.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Saliva contains an enzyme called 'amylase' that breaks down sugar into starch.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "The stomach produces gastric acid to aid in the digestion of food.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "The liver, pancreas, and gall bladder are organs that contribute enzymes for digestion in the small intestine.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Food stays in the small intestine for up to 8 hours before most nutrients are absorbed into the bloodstream.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "The large intestine is responsible for absorbing nutrients from food.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            },
            {
                "question": "A balanced diet includes sufficient amounts of fats, carbohydrates, proteins, vitamins, and minerals.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Hunger is a condition where a person is unable to eat sufficient food to meet basic nutritional needs.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "True"
            },
            {
                "question": "Kwashiorkor is caused by deficiency of both proteins and carbohydrates.",
                "optionA": "True",
                "optionB": "False",
                "correctAnswer": "False"
            }
        ]
        
    ],
  };
}

export var activityData;
