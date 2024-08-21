export const chapter = "Chapter - 5: Greenland: The Land of Snow";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the main defining characteristic of Polar regions?",
        optionA: "Dense vegetation",
        optionB: "Warm temperatures",
        optionC: "Ice and snow",
        correctAnswer: "Ice and snow",
      },
      {
        question: "In which climatic zone are the Polar regions located?",
        optionA: "Tropical Zone",
        optionB: "Temperate Zone",
        optionC: "Frigid Zone",
        correctAnswer: "Frigid Zone",
      },
      {
        question: "Which region is considered the southern Polar region?",
        optionA: "Canada",
        optionB: "Antarctica",
        optionC: "Norway",
        correctAnswer: "Antarctica",
      },
      {
        question: "What percentage of Greenland is covered with ice?",
        optionA: "20%",
        optionB: "50%",
        optionC: "80%",
        correctAnswer: "80%",
      },
      {
        question: "What is the highest point in Greenland?",
        optionA: "Gunnbjorn Mountain",
        optionB: "Jakobshavn Glacier",
        optionC: "Cape Morris Jesup",
        correctAnswer: "Gunnbjorn Mountain",
      },
      {
        question:
          "Which of the following is NOT a common Arctic animal mentioned in the text?",
        optionA: "Polar bear",
        optionB: "Reindeer",
        optionC: "Giraffe",
        correctAnswer: "Giraffe",
      },
      {
        question:
          "What is the primary occupation of the Inuit (Eskimo) people in Greenland?",
        optionA: "Farming",
        optionB: "Fishing and hunting",
        optionC: "Mining",
        correctAnswer: "Fishing and hunting",
      },
      {
        question: "Which language do most people in Greenland speak?",
        optionA: "Spanish",
        optionB: "Greenlandic and Danish",
        optionC: "French",
        correctAnswer: "Greenlandic and Danish",
      },
      {
        question:
          "What is the main industry in Greenland that employs a significant portion of the population?",
        optionA: "Tourism",
        optionB: "Mining",
        optionC: "Agriculture",
        correctAnswer: "Mining",
      },
      {
        question: "What is the capital and largest city of Greenland?",
        optionA: "Sisimiut",
        optionB: "Nuuk (Godthab)",
        optionC: "Holsteinberg",
        correctAnswer: "Nuuk (Godthab)",
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
          "The Polar regions are generally covered with _______ and snow.",
        options: ["Rocks", "Sand", "Ice"],
        correctAnswer: "Ice",
      },
      {
        question: "Polar regions get less direct sunlight than _______ areas.",
        options: ["Tropical", "Temperate", "Coastal"],
        correctAnswer: "Tropical",
      },
      {
        question: "Greenland is located in the continent of _______.",
        options: ["Asia", "Europe", "North America"],
        correctAnswer: "North America",
      },
      {
        question:
          "The northernmost point in the world, Cape Morris Jesup, is located in this _______.",
        options: ["City", "Island", "Country"],
        correctAnswer: "Island",
      },
      {
        question: "80 percent of the Greenland island is covered with _______.",
        options: ["Grasslands", "Mountains", "Ice"],
        correctAnswer: "Ice",
      },
      {
        question:
          "In Nuuk, the most populated city located in the south, the summers are cold, and the winters are freezing, snowy, windy, and _______.",
        options: ["Sunny", "Overcast", "Mild"],
        correctAnswer: "Overcast",
      },
      {
        question:
          "Greenland features unique and dramatic scenery, including the highest portions of the Northern Hemisphere's largest _______.",
        options: ["Desert", "Rainforest", "Ice cap"],
        correctAnswer: "Ice cap",
      },
      {
        question:
          "The Jakobshavn Glacier is a large valley glacier in west Greenland. It moves about 100 ft a day, making it one of the _______ glaciers in the world.",
        options: ["Slowest-moving", "Fastest-moving", "Largest"],
        correctAnswer: "Fastest-moving",
      },
      {
        question:
          "Greenland is home to many species of mammals and birds, including polar bears, reindeer, musk oxen, Arctic foxes, eagles, ptarmigans, hares, lemmings, and the _______.",
        options: ["Penguins", "Seals", "Arctic wolves"],
        correctAnswer: "Arctic wolves",
      },
      {
        question:
          "Fishing is the main occupation of Greenlanders. Fish processing is a major source of employment, almost every third Greenlander is employed in it. People catch fish for export. This is canned, frozen, or salted before _______.",
        options: ["Consuming", "Export", "Processing"],
        correctAnswer: "Export",
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
          "The Arctic regions receive abundant direct sunlight throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Antarctica is the northern region of the Polar regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Greenland is the largest island in the world and is part of the continent of North America.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "80 percent of the Greenland island is covered with grasslands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "In Nuuk, the summers are cold, and the winters are warm and sunny.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Jakobshavn Glacier is one of the slowest-moving glaciers in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Greenland is rich in mineral resources and has fertile soil, making it suitable for agriculture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The primary occupation of the Inuit (Eskimo) people in Greenland is farming.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Peninsular Plateau is located in the Polar regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The climate on the Peninsular Plateau remains moderate throughout the year, with significant differences between summer and winter temperatures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
