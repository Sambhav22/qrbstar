export const chapter = "Chapter - 10: Weather and seasons  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is weather?",
          optionA: "The state of water at a particular place and time",
          optionB: "The state of air at a particular place and time",
          optionC: "The temperature of a place",
          correctAnswer: "The state of air at a particular place and time",
        },
        {
          question: "What is the main source of heat on Earth?",
          optionA: "Moon",
          optionB: "Sun",
          optionC: "Air",
          correctAnswer: "Sun",
        },
        {
          question:
            "What causes the unequal distribution of temperature on Earth's surface?",
          optionA: "Moon's gravitational pull",
          optionB: "Unequal amount of heat received from the sun",
          optionC: "Rotation of the Earth",
          correctAnswer: "Unequal amount of heat received from the sun",
        },
        {
          question: "Why are mornings and evenings cooler than noons?",
          optionA: "Slanting sun rays",
          optionB: "Straight sun rays",
          optionC: "Cloud cover",
          correctAnswer: "Slanting sun rays",
        },
        {
          question:
            "What is responsible for making the weather too dry during summers?",
          optionA: "Rain",
          optionB: "Loo (hot winds)",
          optionC: "Clouds",
          correctAnswer: "Loo (hot winds)",
        },
        {
          question: "How are clouds formed?",
          optionA: "Heat of the sun evaporates water from the ocean",
          optionB:
            "Sun's heat evaporates water from the Earth's surface, forming water vapor that rises to form clouds",
          optionC: "Clouds are formed by the cooling of the air",
          correctAnswer:
            "Sun's heat evaporates water from the Earth's surface, forming water vapor that rises to form clouds",
        },
        {
          question: "What causes rain?",
          optionA: "Clouds colliding with each other",
          optionB: "Water vapor turning into ice",
          optionC: "Droplets in the clouds becoming heavy and falling",
          correctAnswer: "Droplets in the clouds becoming heavy and falling",
        },
        {
          question: "What is the wettest place on Earth mentioned in the text?",
          optionA: "Rajasthan",
          optionB: "Mawsynram",
          optionC: "Meghalaya",
          correctAnswer: "Mawsynram",
        },
        {
          question: "Why do seasons change throughout the year?",
          optionA: "Earth's rotation",
          optionB: "Earth's orbit, rotation, and tilt",
          optionC: "Sun's movement",
          correctAnswer: "Earth's orbit, rotation, and tilt",
        },
        {
          question:
            "Which season is characterized by long, scorching days and hot dry winds known as loo?",
          optionA: "Rainy season",
          optionB: "Winter season",
          optionC: "Summer season",
          correctAnswer: "Summer season",
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
            "The weather of a particular place keeps on changing _______________.",
          options: ["weekly", "monthly", "daily"],
          answer: "daily",
        },
        {
          question:
            "Sun is the main source of heat on the earth. The unequal amount of heat received from the sun results in the difference of temperature on the earth's surface. Due to this, some parts like southern states of India are hot and some parts like northern states of India are _______________.",
          options: ["moderate", "cold", "rainy"],
          answer: "cold",
        },
        {
          question:
            "During summers, hot winds called _______________ blow that make the weather too dry.",
          options: ["breeze", "monsoon", "loo"],
          answer: "loo",
        },
        {
          question:
            "Air around the earth's surface gets warm due to the heat of the sun. This warm air rises up in the sky and starts getting _______________.",
          options: ["colder", "warmer", "denser"],
          answer: "colder",
        },
        {
          question:
            "Cloudy days and nights are warmer than clear days and nights because clouds do not allow the heat of the earth to escape in the _______________.",
          options: ["oceans", "atmosphere", "underground"],
          answer: "atmosphere",
        },
        {
          question:
            "Different places on the earth receive different amounts of rainfall making some places like Mawsynram in Meghalaya the _______________ place on the earth.",
          options: ["coldest", "wettest", "driest"],
          answer: "wettest",
        },
        {
          question:
            "Seasons change throughout the year because of the way the earth moves. The earth orbits, or travels around the sun. As it orbits, it spins on its own axis, too. The earth's axis doesn't go straight up and down; it tilts to the _______________.",
          options: ["left", "right", "side"],
          answer: "side",
        },
        {
          question:
            "In the summer season, the days are longer than the nights. Hot and dry winds known as _______________ blow in this season.",
          options: ["typhoon", "loo", "monsoon"],
          answer: "loo",
        },
        {
          question:
            "Rainy season is also called _______________. It rains almost every day in this season.",
          options: ["autumn", "winter", "monsoon"],
          answer: "monsoon",
        },
        {
          question:
            "When the sun starts warming up the cold weather, the days become longer and nights become shorter with every passing day. Weather is not so hot and not so cold in this season. Plants are full on bloom and trees bear new leaves and flowers. That is why the season is known as the _______________ season.",
          options: ["winter", "monsoon", "spring"],
          answer: "spring",
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
            "The unequal amount of heat received from the sun results in the difference of temperature on the earth's surface.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Cloudy days and nights are cooler than clear days and nights because clouds allow the heat of the earth to escape in the atmosphere.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The main source of heat on Earth is the moon.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Chennai, the capital of Tamil Nadu, is located along the southwestern coast of India, facing the Arabian Sea.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Rainy season is also known as monsoon, and it rains almost every day during this season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Marina Beach in Chennai is the longest beach in the world.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Winter is the hottest season of the year.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The earth's axis goes straight up and down.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Chennai is known for its seaport used for national and international trade.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Bharatnatyam is the most popular dance form in Tamil Nadu.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
