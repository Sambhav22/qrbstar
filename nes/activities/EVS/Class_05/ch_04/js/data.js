export const chapter = "Chapter - 4: Digestion and Deficiency Diseases";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is the primary purpose of the digestive system in our body?",
            options: [
              "To transport nutrients to the cells",
              "To produce energy for the body",
              "To break down food for absorption",
            ],
            answer: "To break down food for absorption",
          },
          {
            question:
              "Which organ is responsible for starting the digestion process by mixing food with saliva?",
            options: ["Stomach", "Liver", "Tongue"],
            answer: "Tongue",
          },
          {
            question:
              "What is the function of the amylase enzyme present in saliva?",
            options: [
              "Breaks down fats",
              "Converts starch into sugar",
              "Aids in protein digestion",
            ],
            answer: "Converts starch into sugar",
          },
          {
            question:
              "What role does the oesophagus play in the digestive system?",
            options: [
              "Absorption of nutrients",
              "Mixing food with gastric acid",
              "Transporting food from the mouth to the stomach",
            ],
            answer: "Transporting food from the mouth to the stomach",
          },
          {
            question:
              "Which organ produces gastric acid to aid in the digestion of food?",
            options: ["Small intestine", "Liver", "Stomach"],
            answer: "Stomach",
          },
          {
            question:
              "Where does the digestion process occur with the help of enzymes from the liver, pancreas, and gall bladder?",
            options: ["Large intestine", "Stomach", "Small intestine"],
            answer: "Small intestine",
          },
          {
            question:
              "What is the primary function of the large intestine in the digestive system?",
            options: [
              "Absorption of water",
              "Breakdown of food into simpler forms",
              "Production of gastric acid",
            ],
            answer: "Absorption of water",
          },
          {
            question: "What is a balanced diet?",
            options: [
              "A diet rich in a single nutrient",
              "A diet lacking essential nutrients",
              "A diet providing sufficient amounts of all nutrients",
            ],
            answer: "A diet providing sufficient amounts of all nutrients",
          },
          {
            question:
              "What is the condition that arises when a person is unable to eat sufficient food for a sustained period?",
            options: ["Malnutrition", "Hunger", "Protein-Energy-Malnutrition"],
            answer: "Hunger",
          },
          {
            question: "Which vitamin deficiency causes night blindness?",
            options: ["Vitamin B", "Vitamin C", "Vitamin A"],
            answer: "Vitamin A",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        fill_in_the_blank_questions: [
          {
            question:
              "The process that breaks down the food into a simple form is called __________.",
            options: ["Absorption", "Digestion", "Assimilation"],
            answer: "Digestion",
          },
          {
            question:
              "The system related to digestion is called the __________ system.",
            options: ["Circulatory", "Respiratory", "Digestive"],
            answer: "Digestive",
          },
          {
            question:
              "The food we eat mixes with saliva with the help of the __________.",
            options: ["Oesophagus", "Liver", "Tongue"],
            answer: "Tongue",
          },
          {
            question:
              "The tube that connects the mouth to the stomach is called the __________.",
            options: ["Oesophagus", "Small intestine", "Large intestine"],
            answer: "Oesophagus",
          },
          {
            question:
              "The stomach produces __________ that helps in the digestion of food.",
            options: ["Bile", "Gastric acid", "Insulin"],
            answer: "Gastric acid",
          },
          {
            question: "The small intestine is about __________ long.",
            options: ["1 meter", "5 meters", "7 meters"],
            answer: "7 meters",
          },
          {
            question:
              "The pancreas gives juice that helps in the digestion of __________ and proteins.",
            options: ["Carbohydrates", "Fats", "Sugars"],
            answer: "Fats",
          },
          {
            question:
              "The organ that serves as a storehouse for bile is the __________.",
            options: ["Liver", "Gall bladder", "Pancreas"],
            answer: "Gall bladder",
          },
          {
            question:
              "The large intestine is about __________ thick and 1.5 meters long.",
            options: ["5 centimeters", "7 centimeters", "10 centimeters"],
            answer: "7 centimeters",
          },
          {
            question:
              "A balanced diet provides sufficient amounts of all __________ to maintain good health.",
            options: ["Nutrients", "Sugars", "Fats"],
            answer: "Nutrients",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        true_or_false_questions: [
          {
            question:
              "The process that breaks down the food into a simple form is called assimilation.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The digestive system is related to the circulatory system.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The oesophagus is responsible for mixing food with gastric acid.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The small intestine is approximately 10 meters long.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The pancreas gives juice that helps in the digestion of carbohydrates and proteins.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The gall bladder produces bile to aid in the digestion of food.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The large intestine is primarily responsible for the absorption of nutrients.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "A balanced diet is one that lacks essential nutrients.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Hunger is a condition where a person is unable to eat sufficient food for a sustained period.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Kwashiorkor is a protein deficiency disease that primarily affects the elderly.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
