export const chapter = "Chapter - 17: Life in the Western Deserts  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the name of the desert to the west of the Northern Plains?",
        optionA: "Gobi Desert",
        optionB: "Sahara Desert",
        optionC: "Thar Desert",
        correctAnswer: "C",
      },
      {
        question:
          "Which Indian state covers the major part of the Great Indian Desert?",
        optionA: "Gujarat",
        optionB: "Rajasthan",
        optionC: "Haryana",
        correctAnswer: "B",
      },
      {
        question: "Why is Jaisalmer known as the 'Golden City'?",
        optionA: "Because it has a lot of gold mines",
        optionB: "Due to its special golden color sandstone used in buildings",
        optionC: "It's the center of India's gold trade",
        correctAnswer: "B",
      },
      {
        question: "What type of climate does Jaisalmer have?",
        optionA: "Humid and rainy",
        optionB: "Dry with little rainfall",
        optionC: "Cold and snowy",
        correctAnswer: "B",
      },
      {
        question:
          "Which crops are commonly grown in Jaisalmer due to its dry climate?",
        optionA: "Rice and wheat",
        optionB: "Bajra, jowar, and til",
        optionC: "Sugarcane and cotton",
        correctAnswer: "B",
      },
      {
        question:
          "What is a significant attraction in Bikaner related to its culture?",
        optionA: "Diamond mining",
        optionB: "Carpet weaving industry",
        optionC: "Oil drilling",
        correctAnswer: "B",
      },
      {
        question:
          "Which of the following is not a festival celebrated in Bikaner?",
        optionA: "Kolayat",
        optionB: "Gangaur",
        optionC: "Camel festival",
        correctAnswer: "A",
      },
      {
        question: "What is Barmer famous for in terms of its crafts?",
        optionA: "Pottery",
        optionB: "Glassblowing",
        optionC: "Metalwork",
        correctAnswer: "A",
      },
      {
        question: "What is the nickname for Jodhpur due to its weather?",
        optionA: "The Rainy City",
        optionB: "The Sun City",
        optionC: "The Windy City",
        correctAnswer: "B",
      },
      {
        question: "Which crop is prominently grown in Jodhpur?",
        optionA: "Corn",
        optionB: "Wheat and red chillies",
        optionC: "Rice",
        correctAnswer: "B",
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
          "Jaisalmer is also known as the 'Golden City' because all its buildings, homes, palaces, and forts are built by a special golden color ________.",
        options: ["Granite", "Sand", "Limestone"],
        correctAnswer: "Sandstone",
      },
      {
        question:
          "The climate of Jaisalmer is ________, and water is scarce and brackish in this region.",
        options: ["Humid", "Tropical", "Dry"],
        correctAnswer: "Dry",
      },
      {
        question:
          "In Jaisalmer, crops such as bajra, jowar, and ________ are grown due to the arid climate.",
        options: ["Rice", "Cotton", "Til"],
        correctAnswer: "Til",
      },
      {
        question:
          "Bikaner is situated to the ________ of Jaisalmer in the Western Desert and has a hot climate with very little rainfall.",
        options: ["South", "North-east", "West"],
        correctAnswer: "North-east",
      },
      {
        question:
          "The carpet weaving industry of Bikaner is one of the renowned industries of ________.",
        options: ["Gujarat", "Rajasthan", "Maharashtra"],
        correctAnswer: "Rajasthan",
      },
      {
        question:
          "Barmer is famous for wood-carving, pottery, carpets, and block-printed ________.",
        options: ["Silk", "Fabrics", "Leather"],
        correctAnswer: "Fabrics",
      },
      {
        question:
          "People of Barmer live in mud-walled houses decorated with delicate folk ________.",
        options: ["Paintings", "Sculptures", "Motifs"],
        correctAnswer: "Motifs",
      },
      {
        question:
          "Jodhpur is also known as the 'Sun City' due to its bright and sunny weather throughout the ________.",
        options: ["Monsoon season", "Summer", "Year"],
        correctAnswer: "Year",
      },
      {
        question:
          "The chief crops grown in Jodhpur include wheat and red ________.",
        options: ["Rice", "Millet", "Chillies"],
        correctAnswer: "Chillies",
      },
      {
        question:
          "The people of Western Desert are very friendly and amiable, welcoming every visitor with ________.",
        options: ["Suspicion", "Open heart", "Reserved behavior"],
        correctAnswer: "Open heart",
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
          "Jaisalmer is famous for its unique buildings made of golden sandstone.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The climate of Jodhpur is characterized by a lot of rainfall.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Barmer is known for its wood-carving, pottery, and block-printed fabrics.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Bikaner is situated to the west of Jaisalmer.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The Great Indian Desert is also known as the Thar Desert.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Jodhpur is often referred to as the 'Sun City' due to its sunny weather.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The people of the Western Desert are unfriendly and unwelcoming to visitors.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Crops like bajra, jowar, and til are grown in Jaisalmer due to its arid climate.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The carpet weaving industry is one of the renowned industries of Rajasthan.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The discovery of fire was insignificant for early humans.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
