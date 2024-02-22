export const chapter = "Chapter - 4: The Great Indian Desert  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the other name for the Great Indian Desert mentioned in the text?",
        options: ["Sahara Desert", "Thar Desert", "Gobi Desert"],
        answer: "Thar Desert",
      },
      {
        question:
          "What is the approximate total area covered by the Thar Desert?",
        options: ["100,000 km²", "200,000 km²", "300,000 km²"],
        answer: "200,000 km²",
      },
      {
        question:
          "Which geographical feature forms a natural border between India and Pakistan in the west?",
        options: ["Himalayan Mountains", "Aravalli hills", "Vindhya Mountains"],
        answer: "Aravalli hills",
      },
      {
        question:
          "Which Indian state has the highest percentage of the Thar Desert within its boundaries?",
        options: ["Gujarat", "Haryana", "Rajasthan"],
        answer: "Rajasthan",
      },
      {
        question: "What percentage of the desert consists of sand dunes?",
        options: ["5%", "10%", "60%"],
        answer: "10%",
      },
      {
        question: "Why is the Thar Desert considered a dry subtropical area?",
        options: [
          "Due to its proximity to the Himalayas",
          "Because it receives abundant rainfall",
          "Because monsoons bypass the region",
        ],
        answer: "Because monsoons bypass the region",
      },
      {
        question:
          "Which mode of transportation is commonly used in the Thar Desert due to its ability to endure the harsh conditions?",
        options: ["Trains", "Cars", "Camels"],
        answer: "Camels",
      },
      {
        question:
          "What kind of vegetation is found around oases in the Thar Desert?",
        options: [
          "Dense forests",
          "Grasslands",
          "Date palms, kikar, babool, and grass",
        ],
        answer: "Date palms, kikar, babool, and grass",
      },
      {
        question:
          "What major canal has been built to provide water to the Thar Desert?",
        options: ["Ganges Canal", "Indira Gandhi Canal", "Brahmaputra Canal"],
        answer: "Indira Gandhi Canal",
      },
      {
        question:
          "Which wildlife species are mentioned as thriving in the Thar Desert in large numbers?",
        options: [
          "Lions and tigers",
          "Great Indian bustard, blackbuck, and Indian wild ass",
          "Elephants and rhinoceros",
        ],
        answer: "Great Indian bustard, blackbuck, and Indian wild ass",
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
          "The Great Indian Desert, also known as the Thar Desert, covers about ______ km², forming a natural border between India and Pakistan.",
        options: ["100,000", "200,000", "300,000"],
        correctAnswer: "200,000",
      },
      {
        question:
          "The Thar Desert extends from Aravalli hills to the border of Pakistan in the west, and from Kutch in the ______ to the border of Haryana.",
        options: ["south-east", "south-west", "north-east"],
        correctAnswer: "south-west",
      },
      {
        question:
          "The Thar Desert is about ______ km long and 100-400 km wide.",
        options: ["500", "800", "1,000"],
        correctAnswer: "800",
      },
      {
        question:
          "It forms approximately ______% of the total geographic area of India and is spread over four Indian states - Gujarat, Haryana, Punjab, and Rajasthan.",
        options: ["2%", "5%", "10%"],
        correctAnswer: "5%",
      },
      {
        question:
          "More than ______% of the desert lies in the state of Rajasthan.",
        options: ["30%", "50%", "60%"],
        correctAnswer: "60%",
      },
      {
        question:
          "The Thar Desert is the ______ largest desert and ______ largest hot subtropical desert in the world.",
        options: ["9th, 5th", "17th, 9th", "5th, 17th"],
        correctAnswer: "17th, 9th",
      },
      {
        question:
          "Dust storms are very common in the desert. The storm can easily move the sand from one place to another, and thus the sand dunes keep shifting all the time. There are no permanent rivers, only some small streams which are usually dry start flowing only when it ______.",
        options: ["snows", "rains", "hails"],
        correctAnswer: "rains",
      },
      {
        question:
          "Camels are the chief mode of transportation as they can live for many days without food and water. There is always a ______ of water in this area.",
        options: ["surplus", "shortage", "abundance"],
        correctAnswer: "shortage",
      },
      {
        question:
          "Some trees like date palms, kikar, babool, and grass grow around the ______.",
        options: ["sand dunes", "craggy rocks", "oasis"],
        correctAnswer: "oasis",
      },
      {
        question:
          "The government is making serious efforts to improve the life of the people in the desert areas. Water has been brought to the desert from the Satluj River through the Indira Gandhi Canal or the Rajasthan Canal. It is one of the ______ canals in the world. The water from the canal is used for both household and farming activities.",
        options: ["longest", "shortest", "widest"],
        correctAnswer: "longest",
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
          "The Thar Desert is primarily located in the state of Rajasthan.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The Thar Desert is the largest desert in the world.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The Thar Desert is a densely populated desert.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Dust storms are uncommon in the Thar Desert.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Camels are the primary mode of transportation in the Thar Desert due to their ability to endure harsh conditions.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The Thar Desert has a surplus of water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Vegetation around oases in the Thar Desert includes dense forests.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The Thar Desert receives abundant rainfall due to monsoons.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The Thar Desert is bordered by the Indus River to the east.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The Great Indian Desert is the 5th largest desert in the world.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
