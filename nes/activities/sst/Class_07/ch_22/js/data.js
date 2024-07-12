export const chapter = "Chapter - 22: Life in Temperate Grasslands ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Where are the temperate grasslands, known as prairies, located?",
        optionA: "Between the Tropic of Capricorn and the Antarctic Circle",
        optionB: "Between the Tropic of Cancer and the Arctic Circle",
        optionC: "Between 40° N and 55° N in North America",
        correctAnswer: "C) Between 40° N and 55° N in North America",
      },
      {
        question:
          "What is the primary feature of natural vegetation in temperate grasslands?",
        optionA: "Dense forests",
        optionB: "Grasses",
        optionC: "Shrubs",
        correctAnswer: "B) Grasses",
      },
      {
        question:
          "Why do grasslands support farming despite moderate rainfall?",
        optionA: "Presence of tall trees",
        optionB: "Widespread grasslands and fertile soil",
        optionC: "Excessive rainfall",
        correctAnswer: "B) Widespread grasslands and fertile soil",
      },
      {
        question: "What rivers supply adequate water to the prairies?",
        optionA: "Mississippi and Nile",
        optionB: "Nile and Amazon",
        optionC: "Mississippi and Saskatchewan",
        correctAnswer: "C) Mississippi and Saskatchewan",
      },
      {
        question: "What is the climate of the prairies characterized by?",
        optionA: "Tropical climate with consistent temperatures",
        optionB: "Continental climate with extreme temperature variations",
        optionC: "Mediterranean climate with mild winters",
        correctAnswer:
          "B) Continental climate with extreme temperature variations",
      },
      {
        question:
          "What is the chief occupation in the eastern areas of the prairies?",
        optionA: "Wheat farming",
        optionB: "Cattle-rearing",
        optionC: "Dairy farming",
        correctAnswer: "B) Cattle-rearing",
      },
      {
        question:
          "What is the local warm wind that blows in the prairies and helps in melting snow?",
        optionA: "Chinook",
        optionB: "Typhoon",
        optionC: "Monsoon",
        correctAnswer: "A) Chinook",
      },
      {
        question: "Why are prairies known as the 'granaries of the world'?",
        optionA: "Due to their vast mineral resources",
        optionB: "Abundant production of wheat",
        optionC: "Rich deposits of coal and iron",
        correctAnswer: "B) Abundant production of wheat",
      },
      {
        question: "What is the climate of the velds in South Africa?",
        optionA: "Tropical climate with heavy rainfall",
        optionB: "Mediterranean climate with mild temperatures",
        optionC:
          "Drier climate with summers being warm and wet, and dry and cold winters",
        correctAnswer:
          "C) Drier climate with summers being warm and wet, and dry and cold winters",
      },
      {
        question:
          "What was the discriminatory system against black people in South Africa called?",
        optionA: "Segregation",
        optionB: "Apartheid",
        optionC: "Discrimination",
        correctAnswer: "B) Apartheid",
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
          "The temperate zone is located within the Tropic of Cancer and the Arctic Circle in the Northern Hemisphere and the Tropic of Capricorn and the Antarctic Circle in the ____________ Hemisphere.",
        options: ["Arctic", "Southern", "Eastern"],
        correctAnswer: "Southern",
      },
      {
        question:
          "Grasslands are found in the interior of continents, in the middle latitudes. An important feature of the climate is a high difference between ____________ and winter temperatures.",
        options: ["day and night", "summer and winter", "spring and autumn"],
        correctAnswer: "summer and winter",
      },
      {
        question:
          "The term 'prairie' means a meadow or grassland. The prairies are located in the interior of the continent of North America between the latitudes of 40° N and ____________ N.",
        options: ["45°", "50°", "55°"],
        correctAnswer: "55°",
      },
      {
        question:
          "Due to the absence of any obstructions, the rain-bearing winds fly over the prairies, leading to deficient ____________.",
        options: ["snowfall", "rainfall", "thunderstorms"],
        correctAnswer: "rainfall",
      },
      {
        question:
          "The prairies witness a continental type of climate with much variation in temperature between ____________ and winter.",
        options: [
          "summer and spring",
          "autumn and winter",
          "summer and winter",
        ],
        correctAnswer: "summer and winter",
      },
      {
        question:
          "The chief occupation in the eastern areas of the prairies is ____________.",
        options: ["wheat farming", "cattle-rearing", "dairy farming"],
        correctAnswer: "cattle-rearing",
      },
      {
        question:
          "The local warm wind in the prairies, named ____________, helps in melting snow and making grasses available for grazing.",
        options: ["Monsoon", "Chinook", "Typhoon"],
        correctAnswer: "Chinook",
      },
      {
        question: "Why are prairies known as the 'granaries of the world'?",
        options: [
          "Due to their vast mineral resources",
          "Abundant production of wheat",
          "Rich deposits of coal and iron",
        ],
        correctAnswer: "Abundant production of wheat",
      },
      {
        question: "What is the climate of the velds in South Africa?",
        options: [
          "Tropical climate with heavy rainfall",
          "Mediterranean climate with mild temperatures",
          "Drier climate with summers being warm and wet, and dry and cold winters",
        ],
        correctAnswer:
          "Drier climate with summers being warm and wet, and dry and cold winters",
      },
      {
        question:
          "What was the discriminatory system against black people in South Africa called?",
        options: ["Segregation", "Apartheid", "Discrimination"],
        correctAnswer: "Apartheid",
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
          "The temperate zone is located within the Tropic of Cancer and the Arctic Circle in the Northern Hemisphere and the Tropic of Capricorn and the Antarctic Circle in the Southern Hemisphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Grasslands, known as prairies, are primarily characterized by dense forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The prairies witness a tropical climate with consistent temperatures throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Chinook is a local warm wind in the prairies that helps in melting snow and making grasses available for grazing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The chief occupation in the eastern areas of the prairies is wheat farming.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Velds in South Africa are characterized by a tropical climate with heavy rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Apartheid was a discriminatory system against black people in South Africa.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Large cattle farms in prairies are known as ranches.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The velds in South Africa are suitable for large-scale wheat farming.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Industrial Revolution in Europe primarily occurred in the 20th century.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
