export const chapter = "Chapter - 14: Means of Transport ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the purpose of vehicles mentioned in the text?",
          optionA: "Entertainment",
          optionB: "Means of transport",
          optionC: "Decoration",
          correctAnswer: "Means of transport",
        },
        {
          question:
            "Which of the following is NOT mentioned as a means of transport?",
          optionA: "Bicycle",
          optionB: "Aeroplane",
          optionC: "Refrigerator",
          correctAnswer: "Refrigerator",
        },
        {
          question: "What is Jammu Tawi Express mentioned as in the text?",
          optionA: "Car",
          optionB: "Aeroplane",
          optionC: "Train",
          correctAnswer: "Train",
        },
        {
          question:
            "What is the fastest and cheapest means of land transport mentioned in the text?",
          optionA: "Bicycle",
          optionB: "Aeroplane",
          optionC: "Train",
          correctAnswer: "Train",
        },
        {
          question:
            "What do trains carry from one place to another according to the text?",
          optionA: "Passengers",
          optionB: "Goods",
          optionC: "Both a and b",
          correctAnswer: "Both a and b",
        },
        {
          question:
            "Which of the following is mentioned as a means of transport in the text?",
          optionA: "Refrigerator",
          optionB: "Scooter",
          optionC: "Television",
          correctAnswer: "Scooter",
        },
        {
          question: "What is the scene described in the text?",
          optionA: "Beach",
          optionB: "Railway station",
          optionC: "Airport",
          correctAnswer: "Railway station",
        },
        {
          question:
            "What is being boarded onto the Jammu Tawi Express in the text?",
          optionA: "Passengers",
          optionB: "Goods",
          optionC: "Animals",
          correctAnswer: "Passengers",
        },
        {
          question: "According to the text, what are trains used for?",
          optionA: "Short distances",
          optionB: "Long distances",
          optionC: "Only for carrying goods",
          correctAnswer: "Long distances",
        },
        {
          question:
            "Which of the following is NOT a means of land transport mentioned in the text?",
          optionA: "Bus",
          optionB: "Submarine",
          optionC: "Aeroplane",
          correctAnswer: "Aeroplane",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "If we wish to go somewhere, we need certain __________.",
          optionA: "Tools",
          optionB: "Vehicles",
          optionC: "Appliances",
          correctAnswer: "Vehicles",
        },
        {
          question:
            "Trains are the fastest and __________ means of land transport.",
          optionA: "Expensive",
          optionB: "Slowest",
          optionC: "Cheapest",
          correctAnswer: "Cheapest",
        },
        {
          question: "Jammu Tawi Express is on the __________.",
          optionA: "Highway",
          optionB: "Platform",
          optionC: "Runway",
          correctAnswer: "Platform",
        },
        {
          question: "__________ are used to carry our goods.",
          optionA: "Scooters",
          optionB: "Trains",
          optionC: "Bicycles",
          correctAnswer: "Trains",
        },
        {
          question: "The scene described in the text is at a __________.",
          optionA: "Beach",
          optionB: "Park",
          optionC: "Railway station",
          correctAnswer: "Railway station",
        },
        {
          question:
            "Some means of transport mentioned in the text are bicycle, aeroplane, and __________.",
          optionA: "Ship",
          optionB: "Bus",
          optionC: "Television",
          correctAnswer: "Ship",
        },
        {
          question: "The Jammu Tawi Express is a type of __________.",
          optionA: "Car",
          optionB: "Train",
          optionC: "Bus",
          correctAnswer: "Train",
        },
        {
          question: "Trains are used to travel __________ distances.",
          optionA: "Short",
          optionB: "Medium",
          optionC: "Long",
          correctAnswer: "Long",
        },
        {
          question:
            "We use means of transport to carry our goods and __________.",
          optionA: "Animals",
          optionB: "Passengers",
          optionC: "Furniture",
          correctAnswer: "Passengers",
        },
        {
          question:
            "__________ are mentioned as a means of land transport in the text.",
          optionA: "Submarines",
          optionB: "Aeroplanes",
          optionC: "Buses",
          correctAnswer: "Buses",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Trains are the slowest means of land transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Submarines are mentioned as a means of land transport in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Aeroplanes are only used for short distances.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Jammu Tawi Express is a type of bus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Scooters can be used as a means of transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Bicycles have wheels to move.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Trains are only used for carrying goods, not passengers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The Jammu Tawi Express is on a beach.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Ships are mentioned as a means of transport in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Trains are the most expensive means of land transport.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
