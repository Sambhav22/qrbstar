export const chapter = "Chapter - 1: Components of Food ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the five essential nutrients needed by the body?",
          optionA: "Carbohydrates, Fats, Proteins, Vitamins, Roughage",
          optionB: "Carbohydrates, Proteins, Minerals, Water, Roughage",
          optionC: "Carbohydrates, Fats, Proteins, Vitamins, Minerals",
          correctAnswer: "Carbohydrates, Fats, Proteins, Vitamins, Minerals",
        },
        {
          question:
            "Which nutrient is a concentrated source of energy and provides insulation against cold?",
          optionA: "Carbohydrates",
          optionB: "Fats",
          optionC: "Proteins",
          correctAnswer: "Fats",
        },
        {
          question:
            "Which nutrient synthesizes enzymes and helps in the digestion process?",
          optionA: "Carbohydrates",
          optionB: "Fats",
          optionC: "Proteins",
          correctAnswer: "Proteins",
        },
        {
          question: "What is the role of vitamins in our diet?",
          optionA: "Build new tissues",
          optionB: "Regulate body activities",
          optionC: "Both a and b",
          correctAnswer: "Both a and b",
        },
        {
          question: "Why is water important in our diet?",
          optionA: "It adds flavor to food.",
          optionB:
            "It helps regulate body temperature, absorb nutrients, and transport nutrients.",
          optionC: "It provides insulation against cold.",
          correctAnswer:
            "It helps regulate body temperature, absorb nutrients, and transport nutrients.",
        },
        {
          question: "What is another term for roughage?",
          optionA: "Carbohydrates",
          optionB: "Fiber",
          optionC: "Vitamins",
          correctAnswer: "Fiber",
        },
        {
          question: "What is the main purpose of roughage in our diet?",
          optionA: "Provides energy",
          optionB: "Prevents constipation and ensures proper bowel movement.",
          optionC: "Adds flavor to food.",
          correctAnswer:
            "Prevents constipation and ensures proper bowel movement.",
        },
        {
          question: "What does a balanced diet consist of?",
          optionA: "Only carbohydrates and fats",
          optionB: "Only proteins",
          optionC:
            "Energy-giving nutrients, bodybuilding nutrients, and protective nutrients",
          correctAnswer:
            "Energy-giving nutrients, bodybuilding nutrients, and protective nutrients",
        },
        {
          question: "What is malnutrition?",
          optionA: "Excessive intake of nutrients",
          optionB: "Inadequate intake of nutrients",
          optionC: "Optimal intake of nutrients",
          correctAnswer: "Inadequate intake of nutrients",
        },
        {
          question:
            "What is a recommended precaution for healthy living mentioned in the text?",
          optionA: "Drinking water during meals",
          optionB: "Peeling fruits before eating",
          optionC: "Avoiding cleanliness while preparing and serving food",
          correctAnswer: "Peeling fruits before eating",
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
            "Carbohydrates are one of the major kinds of nutrients needed by all living organisms. The main carbohydrates found in our food are in the form of __________ and sugar.",
          options: {
            optionA: "Starch",
            optionB: "Fats",
            optionC: "Proteins",
          },
          correctAnswer: "Starch",
        },
        {
          question:
            "Fats act as fuels in our body and provide __________ energy than carbohydrates.",
          options: {
            optionA: "Equal",
            optionB: "Less",
            optionC: "More",
          },
          correctAnswer: "More",
        },
        {
          question:
            "Proteins build new tissues and help in the process of digestion by synthesizing __________.",
          options: {
            optionA: "Vitamins",
            optionB: "Enzymes",
            optionC: "Minerals",
          },
          correctAnswer: "Enzymes",
        },
        {
          question:
            "Vitamins help boost immunity, strengthen bones, heal wounds, and assist in obtaining energy from food. Different vitamins have been named as A, B, C, D, E, and __________.",
          options: {
            optionA: "F",
            optionB: "K",
            optionC: "P",
          },
          correctAnswer: "K",
        },
        {
          question:
            "Our body needs small quantities of some elements such as sodium, potassium, calcium, magnesium, chlorine, iron, fluorine, sulphur, phosphorus, and __________. These elements are called minerals.",
          options: {
            optionA: "Iodine",
            optionB: "Zinc",
            optionC: "Copper",
          },
          correctAnswer: "Iodine",
        },
        {
          question:
            "A person can live without food for several weeks but would die in a few days from lack of __________.",
          options: {
            optionA: "Carbohydrates",
            optionB: "Water",
            optionC: "Proteins",
          },
          correctAnswer: "Water",
        },
        {
          question:
            "Roughage, also called fiber, does not contain any nutrients but plays an essential part in every healthy diet by preventing constipation and ensuring proper __________.",
          options: {
            optionA: "Digestion",
            optionB: "Absorption",
            optionC: "Bowel movement",
          },
          correctAnswer: "Bowel movement",
        },
        {
          question:
            "A balanced diet consists of energy-giving nutrients (carbohydrates and fats), bodybuilding nutrients (proteins), and protective nutrients (vitamins and __________).",
          options: {
            optionA: "Minerals",
            optionB: "Water",
            optionC: "Roughage",
          },
          correctAnswer: "Minerals",
        },
        {
          question:
            "Malnutrition increases the risk of diseases and early death. Children are more prone to malnutrition than adults, and a diet lacking in proteins can lead to a disease called __________.",
          options: {
            optionA: "Anemia",
            optionB: "Scurvy",
            optionC: "Kwashiorkor",
          },
          correctAnswer: "Kwashiorkor",
        },
        {
          question:
            "Maintaining proper cleanliness while preparing, serving, and eating food is important for healthy living. Sitting with crossed legs is considered the best posture at the time of __________.",
          options: {
            optionA: "Exercising",
            optionB: "Eating",
            optionC: "Sleeping",
          },
          correctAnswer: "Eating",
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
            "Carbohydrates are the primary nutrients responsible for building new tissues in the human body.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Fats provide less energy than carbohydrates in the human body.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Proteins are only responsible for providing energy to the body.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Vitamins are required in large quantities by the body for proper growth and development.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Water is essential for regulating body temperature, but it does not play a role in nutrient absorption.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Roughage, also known as fiber, does not contain any nutrients.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "A balanced diet includes only energy-giving nutrients and does not consider bodybuilding or protective nutrients.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question: "Malnutrition is more common in adults than in children.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Archaeological sources, such as artifacts and inscriptions, provide insights only into the economic aspects of ancient civilizations.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "Coins found in archaeological excavations do not provide information about the level of scientific knowledge in ancient times.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
