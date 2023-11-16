export const chapter = "Chapter - 14: Means of Transport  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are the three main categories of means of transport mentioned in the text?",
        optionA: "Land, Water, and Air",
        optionB: "Road, Sea, and Sky",
        optionC: "Motorcycle, Boat, and Aeroplane",
        correctAnswer: "Land, Water, and Air",
      },
      {
        question:
          "Which means of transport are categorized under 'Land Transport'?",
        optionA: "Boats and ships",
        optionB: "Trains and cars",
        optionC: "Helicopters and jets",
        correctAnswer: "Trains and cars",
      },
      {
        question:
          "What is the fastest means of land transport mentioned in the text?",
        optionA: "Cars",
        optionB: "Trains",
        optionC: "Motorcycles",
        correctAnswer: "Trains",
      },
      {
        question:
          "What are the chief means of water transport according to the text?",
        optionA: "Motorcycles and cars",
        optionB: "Boats and ships",
        optionC: "Trains and buses",
        correctAnswer: "Boats and ships",
      },
      {
        question:
          "What type of transport is commonly used for international business?",
        optionA: "Land transport",
        optionB: "Water transport",
        optionC: "Air transport",
        correctAnswer: "Water transport",
      },
      {
        question:
          "What is the fastest means of transport for covering very long distances in a short time?",
        optionA: "Trains",
        optionB: "Boats",
        optionC: "Aeroplanes",
        correctAnswer: "Aeroplanes",
      },
      {
        question:
          "Which animals are commonly used for transport in hilly areas where road transport is not easily available?",
        optionA: "Horses and bulls",
        optionB: "Yaks, donkeys, and mules",
        optionC: "Camels",
        correctAnswer: "Yaks, donkeys, and mules",
      },
      {
        question: "Which of the following are means of air transport?",
        optionA: "Boats and ships",
        optionB: "Cars and buses",
        optionC: "Aeroplanes and helicopters",
        correctAnswer: "Aeroplanes and helicopters",
      },
      {
        question:
          "What type of transport is used for carrying persons and goods through water?",
        optionA: "Land transport",
        optionB: "Water transport",
        optionC: "Air transport",
        correctAnswer: "Water transport",
      },
      {
        question:
          "What are the means of land transport commonly equipped with for moving on land?",
        optionA: "Wings",
        optionB: "Wheels",
        optionC: "Tracks",
        correctAnswer: "Wheels",
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
          "Means of land transport are used to carry persons and goods from one place to another _______________.",
        options: ["by sea", "on land", "by air"],
        correctAnswer: "on land",
      },
      {
        question:
          "Motorcycle, car, bus, truck, and train are examples of means of land transport that run on _______________.",
        options: ["water", "air", "land"],
        correctAnswer: "land",
      },
      {
        question:
          "Trains are the fastest means of land transport and run on _______________.",
        options: ["roads", "railway tracks", "water"],
        correctAnswer: "railway tracks",
      },
      {
        question:
          "Means of water transport are used to carry persons and goods from one place to another through _______________.",
        options: ["land", "air", "water"],
        correctAnswer: "water",
      },
      {
        question: "Boats and ships are the chief means of _______________.",
        options: ["land transport", "air transport", "water transport"],
        correctAnswer: "water transport",
      },
      {
        question:
          "Most of the international business runs through _______________.",
        options: ["land transport", "air transport", "water transport"],
        correctAnswer: "water transport",
      },
      {
        question:
          "Means of air transport are used to carry persons and goods from one place to another through _______________.",
        options: ["land", "air", "water"],
        correctAnswer: "air",
      },
      {
        question:
          "Aeroplane is the fastest means of transport and covers very long distances in a very short time through _______________.",
        options: ["land", "air", "water"],
        correctAnswer: "air",
      },
      {
        question:
          "Animals like horse, bull, and ox are used to draw _______________.",
        options: ["water transport", "air transport", "carts"],
        correctAnswer: "carts",
      },
      {
        question:
          "Yaks, donkeys, and mules are used to carry people and goods on hilly areas where road transport is not easily available, while camels are used in _______________.",
        options: ["dense forests", "urban areas", "desert areas"],
        correctAnswer: "desert areas",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Safety rules are unimportant for us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "To maintain good health, we must follow healthy habits in our routine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Physical exercise and activity are not key factors for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "One of the 'Do's mentioned in the text is to brush your teeth twice a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "It's unnecessary to take a bath regularly for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Washing your hands after using the toilet is recommended for maintaining cleanliness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Wearing neat and clean clothes is not important for health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "A balanced diet, including fruits and green vegetables, is crucial for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "It's acceptable to eat stale food and food that is kept in the open for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Chewing your food well is not a good eating practice for digestion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
