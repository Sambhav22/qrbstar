export const chapter = "Chapter - 12: WEATHER ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the changing conditions of a day called?",
          optionA: "Climate",
          optionB: "Seasons",
          optionC: "Weather",
          correctAnswer: "Weather",
        },
        {
          question:
            "What type of clothes do people usually wear on hot and sunny days?",
          optionA: "Woollen clothes",
          optionB: "Heavy jackets",
          optionC: "Light cotton clothes",
          correctAnswer: "Light cotton clothes",
        },
        {
          question: "What do people like to have on hot and sunny days?",
          optionA: "Hot soup",
          optionB: "Ice creams or cold drinks",
          optionC: "Samosas or pakoras",
          correctAnswer: "Ice creams or cold drinks",
        },
        {
          question: "What is the weather like on cold days?",
          optionA: "Hot and sunny",
          optionB: "Cool",
          optionC: "Rainy",
          correctAnswer: "Cool",
        },
        {
          question: "What do people like to have on cold days?",
          optionA: "Ice creams",
          optionB: "Hot things like soup, tea, coffee",
          optionC: "Cold drinks",
          correctAnswer: "Hot things like soup, tea, coffee",
        },
        {
          question:
            "What do people use to protect themselves from rain on rainy days?",
          optionA: "Umbrella or raincoat",
          optionB: "Fans and coolers",
          optionC: "Heaters",
          correctAnswer: "Umbrella or raincoat",
        },
        {
          question: "What is the characteristic of cloudy nights?",
          optionA: "Bright sunlight",
          optionB: "Warm temperature",
          optionC: "Cold temperature",
          correctAnswer: "Warm temperature",
        },
        {
          question: "What type of days are associated with strong winds?",
          optionA: "Rainy",
          optionB: "Cloudy",
          optionC: "Windy",
          correctAnswer: "Windy",
        },
        {
          question:
            "What is the term used for a period when the weather remains the same for a few months?",
          optionA: "Climate",
          optionB: "Weather pattern",
          optionC: "Season",
          correctAnswer: "Season",
        },
        {
          question:
            "Which season is characterized by neither too hot nor too cold days?",
          optionA: "Winter",
          optionB: "Summer",
          optionC: "Autumn",
          correctAnswer: "Autumn",
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
            "All days are not the same. The changing conditions of a day are called __________.",
          options: ["Seasons", "Climate", "Weather"],
          correctAnswer: "Weather",
        },
        {
          question:
            "On hot and sunny days, people wear light cotton clothes and use __________.",
          options: ["Heaters", "Fans and coolers", "Umbrellas"],
          correctAnswer: "Fans and coolers",
        },
        {
          question:
            "During cold weather, people like to sit near a __________.",
          options: ["Beach", "Fire", "Park"],
          correctAnswer: "Fire",
        },
        {
          question:
            "Rainy days require protection with an umbrella or __________.",
          options: ["Sunglasses", "Raincoat", "Hat"],
          correctAnswer: "Raincoat",
        },
        {
          question: "Cloudy nights are described as __________.",
          options: ["Cold", "Warm", "Bright"],
          correctAnswer: "Warm",
        },
        {
          question: "On windy days, strong winds can blow away __________.",
          options: ["Rain", "Clouds", "Things"],
          correctAnswer: "Things",
        },
        {
          question:
            "Seasons occur when the weather remains the same for a few __________.",
          options: ["Weeks", "Months", "Days"],
          correctAnswer: "Months",
        },
        {
          question: "Winter is characterized by __________ days.",
          options: ["Hot", "Pleasant", "Cold"],
          correctAnswer: "Cold",
        },
        {
          question: "Summer is associated with __________ days.",
          options: ["Rainy", "Hot", "Cloudy"],
          correctAnswer: "Hot",
        },
        {
          question:
            "Autumn is described as having days that are neither too hot nor too __________.",
          options: ["Rainy", "Cold", "Cloudy"],
          correctAnswer: "Cold",
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
            "The changing conditions of a day are referred to as weather.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "On hot and sunny days, people wear heavy jackets.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "During cold weather, people like to have ice creams or cold drinks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Rainy nights are described as cold according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Windy days can be either hot or cold depending on the nature of the wind.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Seasons occur when the weather remains the same for a few weeks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Winter is characterized by pleasant days according to the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Summer is associated with hot days.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Autumn is described as having days that are neither too hot nor too cold.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The weather conditions mentioned in the text include snowy days.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
