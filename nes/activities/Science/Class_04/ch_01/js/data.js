export const chapter = "Chapter - 1: Plants: The Producers ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the primary function of green leaves in plants?",
          optionA: "Absorb water",
          optionB: "Conduct photosynthesis",
          optionC: "Store food",
          correctAnswer: "Conduct photosynthesis",
        },
        {
          question:
            "What is the main organ responsible for preparing food in plants?",
          optionA: "Stem",
          optionB: "Roots",
          optionC: "Leaves",
          correctAnswer: "Leaves",
        },
        {
          question: "What is the flat, broad part of a leaf called?",
          optionA: "Vein",
          optionB: "Petiole",
          optionC: "Blade or lamina",
          correctAnswer: "Blade or lamina",
        },
        {
          question:
            "What is the primary pigment responsible for the green color in leaves?",
          optionA: "Carotenoid",
          optionB: "Chlorophyll",
          optionC: "Anthocyanin",
          correctAnswer: "Chlorophyll",
        },
        {
          question: "What is the primary function of stomata in leaves?",
          optionA: "Water absorption",
          optionB: "Gaseous exchange",
          optionC: "Photosynthesis",
          correctAnswer: "Gaseous exchange",
        },
        {
          question:
            "What is the net-like pattern of veins in the blade of a leaf called?",
          optionA: "Side veins",
          optionB: "Main vein or midrib",
          optionC: "Petiole veins",
          correctAnswer: "Main vein or midrib",
        },
        {
          question:
            "What is the process in which green leaves use light to convert carbon dioxide and water into food called?",
          optionA: "Respiration",
          optionB: "Transpiration",
          optionC: "Photosynthesis",
          correctAnswer: "Photosynthesis",
        },
        {
          question: "What are the products of photosynthesis?",
          optionA: "Glucose, oxygen, and water vapor",
          optionB: "Starch, carbon dioxide, and oxygen",
          optionC: "Glucose, carbon dioxide, and nitrogen",
          correctAnswer: "Glucose, oxygen, and water vapor",
        },
        {
          question:
            "What is the main source of energy for green plants during photosynthesis?",
          optionA: "Soil",
          optionB: "Water",
          optionC: "Sunlight",
          correctAnswer: "Sunlight",
        },
        {
          question:
            "What is the term for the series in which each type of creature feeds on the one below it, representing the flow of energy in the form of food?",
          optionA: "Energy cycle",
          optionB: "Food chain",
          optionC: "Nutrient loop",
          correctAnswer: "Food chain",
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
            "Green leaves are commonly known as the ________ of the plant, as they play a crucial role in photosynthesis.",
          options: {
            optionA: "Lungs",
            optionB: "Factories",
            optionC: "Roots",
          },
          correctAnswer: "Factories",
        },
        {
          question:
            "The flat, broad part of a leaf is called the ________, and it is the primary site for conducting ________.",
          options: {
            optionA: "Vein, Transpiration",
            optionB: "Blade or lamina, Photosynthesis",
            optionC: "Petiole, Respiration",
          },
          correctAnswer: "Blade or lamina, Photosynthesis",
        },
        {
          question:
            "Chlorophyll, the pigment responsible for the green color in leaves, is found in green cells called ________.",
          options: {
            optionA: "Mitochondria",
            optionB: "Chloroplasts",
            optionC: "Nuclei",
          },
          correctAnswer: "Chloroplasts",
        },
        {
          question:
            "The exchange of gases, including the release of excess water, occurs through small openings called ________ on the lower layer of a leaf.",
          options: {
            optionA: "Stems",
            optionB: "Stomata",
            optionC: "Petioles",
          },
          correctAnswer: "Stomata",
        },
        {
          question:
            "During photosynthesis, green plants use carbon dioxide, water, and ________ as raw materials to produce glucose, oxygen, and water vapor.",
          options: {
            optionA: "Nitrogen",
            optionB: "Sunlight",
            optionC: "Soil",
          },
          correctAnswer: "Sunlight",
        },
        {
          question:
            "The main source of energy for green plants during photosynthesis is ________, which is absorbed by chlorophyll.",
          options: {
            optionA: "Soil nutrients",
            optionB: "Sunlight",
            optionC: "Water",
          },
          correctAnswer: "Sunlight",
        },
        {
          question:
            "The process in which green leaves use light to convert carbon dioxide and water into food is known as ________.",
          options: {
            optionA: "Respiration",
            optionB: "Transpiration",
            optionC: "Photosynthesis",
          },
          correctAnswer: "Photosynthesis",
        },
        {
          question:
            "________ is one of the products of photosynthesis and serves as the food for plants.",
          options: {
            optionA: "Starch",
            optionB: "Glucose",
            optionC: "Carbon dioxide",
          },
          correctAnswer: "Glucose",
        },
        {
          question:
            "The flow of energy in the form of food through different organisms is represented by a series called ________.",
          options: {
            optionA: "Energy circuit",
            optionB: "Food web",
            optionC: "Food chain",
          },
          correctAnswer: "Food chain",
        },
        {
          question:
            "Plants and animals depend on each other for their survival, as plants provide food and oxygen, while animals produce ________ that plants need for photosynthesis.",
          options: {
            optionA: "Water vapor",
            optionB: "Carbon dioxide",
            optionC: "Nitrogen gas",
          },
          correctAnswer: "Carbon dioxide",
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
            "India is bordered by Afghanistan and Pakistan to the north-west.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "India is located entirely in the Southern Hemisphere.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "India has cold mountains, arid deserts, vast plains, and hot and humid plateaus.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "India is the world's most populated country.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "India is a peninsula surrounded by the Arabian Sea, the Indian Ocean, and the Bay of Bengal.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "India is the second-largest country in the world in terms of area.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "The NCT of Delhi has its own Legislative Assembly, Lieutenant Governor, Council of Ministers, and Chief Minister.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question: "Rainfall in India is mainly brought by the monsoon winds.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
        {
          question:
            "The climate in South India is characterized by extreme heat due to its proximity to the Arabian Sea.",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "False",
        },
        {
          question:
            "India has diversity in language, food, folk-dance, clothes, cultures, and traditions, promoting the principle of 'Unity in Diversity.'",
          options: {
            optionA: "True",
            optionB: "False",
          },
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
