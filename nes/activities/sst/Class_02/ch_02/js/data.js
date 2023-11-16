export const chapter = "Chapter - 2: Our House";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the primary purpose of a house according to the text?",
        optionA: "To provide shelter from animals",
        optionB: "To protect us from heat, cold, and rain",
        optionC: "To serve as a place for social gatherings",
        correctAnswer: "To protect us from heat, cold, and rain",
      },
      {
        question: "What materials are used to build a kuchcha house?",
        optionA: "Bricks and mortar",
        optionB: "Mud, bamboo, and straw",
        optionC: "Concrete and steel",
        correctAnswer: "Mud, bamboo, and straw",
      },
      {
        question:
          "In what type of houses do people living in mountain areas usually have sloping roofs?",
        optionA: "Igloos",
        optionB: "Stilt houses",
        optionC: "Houses with sloping roofs",
        correctAnswer: "Houses with sloping roofs",
      },
      {
        question: "What is the purpose of sloping roofs in mountain areas?",
        optionA: "To provide shade",
        optionB: "To collect rainwater",
        optionC: "To allow rain and snow to slide down easily",
        correctAnswer: "To allow rain and snow to slide down easily",
      },
      {
        question:
          "Which houses are built on stilts or poles to prevent standing rainwater from entering?",
        optionA: "Stilt houses",
        optionB: "Igloos",
        optionC: "Apartments",
        correctAnswer: "Stilt houses",
      },
      {
        question:
          "What type of houses do people living in snow-covered areas usually have?",
        optionA: "Skyscrapers",
        optionB: "Bungalows",
        optionC: "Igloos",
        correctAnswer: "Igloos",
      },
      {
        question: "What is a pucca house primarily made of?",
        optionA: "Tiles and wood",
        optionB: "Bricks and mortar",
        optionC: "Mud and bamboo",
        correctAnswer: "Bricks and mortar",
      },
      {
        question:
          "What type of houses do people living in plain areas have based on their comfort?",
        optionA: "Igloos",
        optionB: "Skyscrapers",
        optionC: "Stilt houses",
        correctAnswer: "Skyscrapers",
      },
      {
        question:
          "Which type of clothes are preferred in summers according to the text?",
        optionA: "Leather jackets",
        optionB: "Cotton clothes",
        optionC: "Raincoats",
        correctAnswer: "Cotton clothes",
      },
      {
        question:
          "What do cotton clothes protect us from in summers, according to the text?",
        optionA: "Excessive sunlight",
        optionB: "Cold weather",
        optionC: "Heat",
        correctAnswer: "Heat",
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
          "A house is a place where we live. It protects us from __________, __________, and rain. We also feel safe in our house.",
        optionA: "Animals, sunlight",
        optionB: "Heat, cold",
        optionC: "Noise, pollution",
        correctAnswer: "Heat, cold",
      },
      {
        question: "A pucca house is made of __________ and mortar.",
        optionA: "Wood",
        optionB: "Bricks",
        optionC: "Steel",
        correctAnswer: "Bricks",
      },
      {
        question: "A kuchcha house is made of mud, bamboo, and __________.",
        optionA: "Metal",
        optionB: "Stone",
        optionC: "Straw",
        correctAnswer: "Straw",
      },
      {
        question:
          "People living in plain areas live in different houses such as huts, bungalows, apartments, duplex houses, or __________ as per their comfort.",
        optionA: "Skyscrapers",
        optionB: "Cottages",
        optionC: "Caves",
        correctAnswer: "Skyscrapers",
      },
      {
        question:
          "People living in mountain areas have houses with sloping roofs. Sloping roofs let the rain and snow __________ easily.",
        optionA: "Evaporate",
        optionB: "Accumulate",
        optionC: "Slide down",
        correctAnswer: "Slide down",
      },
      {
        question:
          "The roofs of houses in mountain areas are mainly made of __________ and wood.",
        optionA: "Mud",
        optionB: "Tiles",
        optionC: "Plastic",
        correctAnswer: "Tiles",
      },
      {
        question:
          "People living in areas where it rains a lot have houses built on stilts or poles so that standing rainwater does not __________ in the houses.",
        optionA: "Drown",
        optionB: "Evaporate",
        optionC: "Enter",
        correctAnswer: "Enter",
      },
      {
        question:
          "People living in snow-covered areas live in houses made from __________. Such houses are called igloos.",
        optionA: "Bricks",
        optionB: "Blocks of ice",
        optionC: "Concrete",
        correctAnswer: "Blocks of ice",
      },
      {
        question: "A pucca house is made of __________ and mortar.",
        optionA: "Mud",
        optionB: "Concrete",
        optionC: "Bamboo",
        correctAnswer: "Bricks",
      },
      {
        question:
          "People living in plain areas live in different houses such as huts, bungalows, apartments, duplex houses, or __________ as per their comfort.",
        optionA: "Skyscrapers",
        optionB: "Caves",
        optionC: "Yurts",
        correctAnswer: "Skyscrapers",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "We wear clothes to cover our body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Clothes protect us from heat, cold, and rain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "We wear woollen clothes in summers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Cotton clothes are preferred in winters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Raincoat and gumboots protect us from getting wet in the rain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "We always wear fancy or party clothes when attending a party.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Uniforms are typically worn to school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Many persons wear uniforms to their work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Our choice for clothes depends solely on the seasons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "We wear raincoats and gumboots in the summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
