export const chapter = "Chapter - 4: Learning from Nature";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What materials help village houses stay cool in summer and warm in winter?",
        "optionA": "Steel",
        "optionB": "Natural materials",
        "optionC": "Plastic",
        "correctAnswer": "Natural materials"
      },
      {
        "question": "Which plant is used to make green natural dye?",
        "optionA": "Spinach",
        "optionB": "Rose",
        "optionC": "Mango",
        "correctAnswer": "Spinach"
      },
      {
        "question": "What do villagers raise to get milk?",
        "optionA": "Birds",
        "optionB": "Animals",
        "optionC": "Fish",
        "correctAnswer": "Animals"
      },
      {
        "question": "What is used to decorate village walls?",
        "optionA": "Chemical paints",
        "optionB": "Plastic sheets",
        "optionC": "Natural paints",
        "correctAnswer": "Natural paints"
      },
      {
        "question": "What do children in villages learn to use?",
        "optionA": "Computers",
        "optionB": "Traditional tools",
        "optionC": "Machines",
        "correctAnswer": "Traditional tools"
      },
      {
        "question": "What is used to store grains in villages?",
        "optionA": "Plastic containers",
        "optionB": "Earthen pots and bamboo baskets",
        "optionC": "Glass jars",
        "correctAnswer": "Earthen pots and bamboo baskets"
      },
      {
        "question": "What do solar panels help to do in villages?",
        "optionA": "Store food",
        "optionB": "Clean water",
        "optionC": "Light homes and charge batteries",
        "correctAnswer": "Light homes and charge batteries"
      },
      {
        "question": "What is used along with neem leaves to protect grains?",
        "optionA": "Iron boxes",
        "optionB": "Earthen pots",
        "optionC": "Plastic bags",
        "correctAnswer": "Earthen pots"
      },
      {
        "question": "What shows strong community bonding in villages?",
        "optionA": "Rebuilding houses together",
        "optionB": "Living separately",
        "optionC": "Buying machines",
        "correctAnswer": "Rebuilding houses together"
      },
      {
        "question": "What activity connects children to nature?",
        "optionA": "Watching television",
        "optionB": "Making herbal pastes and teas",
        "optionC": "Playing video games",
        "correctAnswer": "Making herbal pastes and teas"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Natural dyes are made from ________, flowers, and leaves.",
        "optionA": "plants",
        "optionB": "plastic",
        "optionC": "metal",
        "correctAnswer": "plants"
      },
      {
        "question": "Villagers grow their own ________ for food.",
        "optionA": "clothes",
        "optionB": "vegetables",
        "optionC": "toys",
        "correctAnswer": "vegetables"
      },
      {
        "question": "________ is used to treat burns.",
        "optionA": "Tulsi",
        "optionB": "Aloe vera",
        "optionC": "Neem",
        "correctAnswer": "Aloe vera"
      },
      {
        "question": "Solar lights are charged by the ________.",
        "optionA": "Moon",
        "optionB": "Electricity",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "Grains are stored in ________ pots.",
        "optionA": "plastic",
        "optionB": "steel",
        "optionC": "earthen",
        "correctAnswer": "earthen"
      },
      {
        "question": "________ helps in healing wounds.",
        "optionA": "Turmeric",
        "optionB": "Rice",
        "optionC": "Oil",
        "correctAnswer": "Turmeric"
      },
      {
        "question": "Traditional houses are painted using ________ flour.",
        "optionA": "wheat",
        "optionB": "rice",
        "optionC": "corn",
        "correctAnswer": "rice"
      },
      {
        "question": "We should avoid using ________ to protect nature.",
        "optionA": "plastic",
        "optionB": "water",
        "optionC": "soil",
        "correctAnswer": "plastic"
      },
      {
        "question": "Festivals teach us to ________ nature.",
        "optionA": "waste",
        "optionB": "ignore",
        "optionC": "protect",
        "correctAnswer": "protect"
      },
      {
        "question": "Solar energy is a ________ resource.",
        "optionA": "harmful",
        "optionB": "renewable",
        "optionC": "limited",
        "correctAnswer": "renewable"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Natural dyes are made from plants and flowers.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Villagers depend only on machines for their work.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Aloe vera is used to treat burns.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Solar energy pollutes the environment.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bamboo is used in village life.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Festivals are not connected to nature.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Neem leaves help protect stored grains.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should conserve and protect nature.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Villagers rebuild houses without any help.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Nature provides us with food, water, and air.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
