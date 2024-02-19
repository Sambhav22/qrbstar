export const chapter = "Chapter - 14: OUR EARTH ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What percentage of the Earth's surface is covered with water?",
          optionA: "70%",
          optionB: "30%",
          optionC: "50%",
          correctAnswer: "70%",
        },
        {
          question: "What is a flat area of land called?",
          optionA: "Mountain",
          optionB: "Plain",
          optionC: "Valley",
          correctAnswer: "Plain",
        },
        {
          question: "What is the term for very high land covered with snow?",
          optionA: "Plain",
          optionB: "Mountain",
          optionC: "Valley",
          correctAnswer: "Mountain",
        },
        {
          question: "What are low mountains called?",
          optionA: "Valleys",
          optionB: "Plains",
          optionC: "Hills",
          correctAnswer: "Hills",
        },
        {
          question:
            "What is the land lying between two mountains or hills called?",
          optionA: "Valley",
          optionB: "Plain",
          optionC: "Desert",
          correctAnswer: "Valley",
        },
        {
          question: "What is a huge land area covered with sand called?",
          optionA: "Plain",
          optionB: "Desert",
          optionC: "Island",
          correctAnswer: "Desert",
        },
        {
          question:
            "What is the term for land surrounded by water from all sides?",
          optionA: "Island",
          optionB: "Plain",
          optionC: "Desert",
          correctAnswer: "Island",
        },
        {
          question: "What is the major waterbody on Earth?",
          optionA: "Sea",
          optionB: "Ocean",
          optionC: "River",
          correctAnswer: "Ocean",
        },
        {
          question: "What is a large waterbody surrounded by land called?",
          optionA: "Pond",
          optionB: "Lake",
          optionC: "Sea",
          correctAnswer: "Lake",
        },
        {
          question: "What is a small channel of water called?",
          optionA: "River",
          optionB: "Stream",
          optionC: "Lake",
          correctAnswer: "Stream",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question: "Earth is our ______ planet.",
          options: ["Second", "Home", "Red"],
          correctAnswer: "Home",
        },
        {
          question:
            "__________ percent of the earth's surface is covered with water, while the rest is land.",
          options: ["50", "70", "30"],
          correctAnswer: "70",
        },
        {
          question:
            "A flat area of land is called a ________. Most of the population lives in plains.",
          options: ["Desert", "Mountain", "Plain"],
          correctAnswer: "Plain",
        },
        {
          question:
            "Very high land is called a __________. Its peaks are covered with snow.",
          options: ["Hill", "Desert", "Mountain"],
          correctAnswer: "Mountain",
        },
        {
          question: "Low mountains are called __________.",
          options: ["Plains", "Hills", "Valleys"],
          correctAnswer: "Hills",
        },
        {
          question:
            "The land lying between two mountains or hills is called a ___________.",
          options: ["Desert", "Plain", "Valley"],
          correctAnswer: "Valley",
        },
        {
          question:
            "A huge land area covered with sand is called a ____________.",
          options: ["Desert", "Plain", "Island"],
          correctAnswer: "Desert",
        },
        {
          question: "The major waterbody on Earth is ____________.",
          options: ["River", "Ocean", "Sea"],
          correctAnswer: "Ocean",
        },
        {
          question: "A lake is a large waterbody surrounded by ___________.",
          options: ["Water", "Air", "Land"],
          correctAnswer: "Land",
        },
        {
          question:
            "Earth has various water bodies such as oceans, rivers, lakes, ponds, and ___________.",
          options: ["Islands", "Seas", "Mountains"],
          correctAnswer: "Seas",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "Mountains are low-lying landforms.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "A plain is a flat area of land.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "An island is surrounded by land from all sides.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Rivers are small channels of water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Oceans are smaller water bodies compared to seas.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A valley is the land lying between two mountains or hills.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Deserts are characterized by a large land area covered with water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Lakes are small water bodies surrounded by land.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Playing with sharp objects like knives, blades, and scissors is safe.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Traffic rules and lights should always be followed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
