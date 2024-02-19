export const chapter = "Chapter - 14: Travel - A Fun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are some examples of private transport mentioned in the text?",
          optionA: "Buses, trains, scooters",
          optionB: "Scooters, motorcycles, cars",
          optionC: "Aeroplanes, motorcycles, cars",
          correctAnswer: "b) Scooters, motorcycles, cars",
        },
        {
          question:
            "How do people pay for using public transport according to the text?",
          optionA: "No payment is required",
          optionB: "Payment is made through fuel",
          optionC: "Tickets are bought with money",
          correctAnswer: "c) Tickets are bought with money",
        },
        {
          question: "What is the Indian currency called?",
          optionA: "Dollar",
          optionB: "Peso",
          optionC: "Rupee",
          correctAnswer: "c) Rupee",
        },
        {
          question: "What is marked on one side of a coin?",
          optionA: "National Emblem",
          optionB: "Year of minting and value",
          optionC: "Watermark and security thread",
          correctAnswer: "b) Year of minting and value",
        },
        {
          question: "What does the watermark on a banknote depict?",
          optionA: "National Emblem",
          optionB: "Gandhiji's face",
          optionC: "Serial number",
          correctAnswer: "b) Gandhiji's face",
        },
        {
          question:
            "What animals are mentioned as being used for transportation in the text?",
          optionA: "Lions and tigers",
          optionB: "Oxen, horses, donkeys, camels, and elephants",
          optionC: "Dogs and cats",
          correctAnswer: "b) Oxen, horses, donkeys, camels, and elephants",
        },
        {
          question: "What feature discourages the making of fake banknotes?",
          optionA: "Watermark",
          optionB: "Serial number",
          optionC: "Security thread",
          correctAnswer: "c) Security thread",
        },
        {
          question:
            "In which areas are oxen, horses, donkeys, camels, and elephants still common modes of transport?",
          optionA: "Urban areas",
          optionB: "Suburban areas",
          optionC: "Rural areas",
          correctAnswer: "c) Rural areas",
        },
        {
          question: "Which note has a picture of Hampi on its backside?",
          optionA: "10 rupee note",
          optionB: "50 rupee note",
          optionC: "2000 rupee note",
          correctAnswer: "b) 50 rupee note",
        },
        {
          question: "When was the 2000 rupee note withdrawn from circulation?",
          optionA: "2022",
          optionB: "2023",
          optionC: "2024",
          correctAnswer: "b) 2023",
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
            "The means of _______ used by us to travel are private or public.",
          options: ["communication", "transport", "navigation"],
          correctAnswer: "transport",
        },
        {
          question:
            "If we travel using private means of transport, we do not pay anything except for the _______.",
          options: ["tickets", "fuel", "maintenance"],
          correctAnswer: "fuel",
        },
        {
          question: "Indian currency is called the _______.",
          options: ["Euro", "Yen", "Rupee"],
          correctAnswer: "Rupee",
        },
        {
          question: "Money made of metal is called _______.",
          options: ["note", "credit", "coin"],
          correctAnswer: "coin",
        },
        {
          question:
            "Coins have a great historical importance. In ancient times, kings used coins made up of gold, silver, or bronze known as _______.",
          options: ["talents", "dinars", "mohars"],
          correctAnswer: "mohars",
        },
        {
          question: "Bank notes are made of special _______.",
          options: ["fabric", "paper", "plastic"],
          correctAnswer: "paper",
        },
        {
          question:
            "There is a watermark which shows the face of _______ on the front side of the notes.",
          options: ["Tagore", "Gandhiji", "Nehru"],
          correctAnswer: "Gandhiji",
        },
        {
          question:
            "If you hold a bank note of any value against light, you will see a straight line across the width of the note, a little away from the centre. This line is the _______.",
          options: ["barcode", "security thread", "magnetic strip"],
          correctAnswer: "security thread",
        },
        {
          question:
            "The signature of the Governor of Reserve Bank of India and the value of the note also appear on its _______ side.",
          options: ["back", "left", "right"],
          correctAnswer: "front",
        },
        {
          question:
            "When man started leading a settled life in villages and cities, he learnt to tame animals for his own use, including oxen, horses, donkeys, camels, and elephants used for _______.",
          options: ["farming", "transportation", "entertainment"],
          correctAnswer: "transportation",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Private means of transport require payment for tickets.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Bank notes are made of plastic.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Coins have only one side with the National Emblem.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The Indian currency is known as the Yen.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The 2000 rupee note has been withdrawn from circulation.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The watermark on banknotes depicts the face of Nehru.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Animals like lions and tigers were used for transportation in ancient times.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The value of a note is given in 10 Indian languages on the right side of the picture.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The security thread on a banknote is imprinted to encourage the making of fake notes.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In rural areas of India, oxen, horses, donkeys, camels, and elephants are still common modes of transport.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
