export const chapter = "Chapter - 3: Weather and Climate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is weather defined as?",
        optionA: "The state of the atmosphere at any given period of time.",
        optionB: "The gases in the atmosphere.",
        optionC: "The climate of a specific region.",
        correctAnswer:
          "A) The state of the atmosphere at any given period of time.",
      },
      {
        question: "How many main components or parts make up the weather?",
        optionA: "3",
        optionB: "6",
        optionC: "5",
        correctAnswer: "B) 6",
      },
      {
        question:
          "What is the term for the average weather in a specific region over many years?",
        optionA: "Weather",
        optionB: "Climate",
        optionC: "Atmosphere",
        correctAnswer: "B) Climate",
      },
      {
        question:
          "Which factor is the most important in determining the climate of a region?",
        optionA: "Distance from the Sea",
        optionB: "Altitude above Sea Level",
        optionC: "Latitude or Distance from the Equator",
        correctAnswer: "C) Latitude or Distance from the Equator",
      },
      {
        question:
          "Why are coastal areas often characterized by moderate climates?",
        optionA: "Because they have a higher altitude.",
        optionB: "Because the land heats up and cools down quickly.",
        optionC: "Because sea breezes and land breezes moderate the climate.",
        correctAnswer:
          "C) Because sea breezes and land breezes moderate the climate.",
      },
      {
        question:
          "What is the main reason for the occurrence of tides in the sea?",
        optionA: "Atmospheric pressure changes",
        optionB: "Wind patterns",
        optionC: "Sea breezes and land breezes",
        correctAnswer: "C) Sea breezes and land breezes",
      },
      {
        question: "Which direction of winds brings moisture and rainfall?",
        optionA: "Wind from a dry area",
        optionB: "Wind from a cold place",
        optionC: "Wind coming from the sea",
        correctAnswer: "C) Wind coming from the sea",
      },
      {
        question: "How do mountain ranges influence the climate of a place?",
        optionA: "By causing extreme temperatures",
        optionB: "By allowing icy winds to pass through",
        optionC: "By blocking or redirecting wind patterns",
        correctAnswer: "C) By blocking or redirecting wind patterns",
      },
      {
        question:
          "Which climatic zone receives direct sunlight from the sun throughout the year?",
        optionA: "Temperate Zone",
        optionB: "Frigid Zone",
        optionC: "Torrid Zone",
        correctAnswer: "C) Torrid Zone",
      },
      {
        question:
          "What is the term for predicting the upcoming weather, which is carried by newspapers and news channels?",
        optionA: "Weather Description",
        optionB: "Weather Observation",
        optionC: "Weather Forecast",
        correctAnswer: "C) Weather Forecast",
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
          "Weather is the state of the atmosphere at any given period of time. The atmosphere is made up of gases like ______ that surrounds the earth.",
        options: {
          A: "Nitrogen",
          B: "Carbon dioxide",
          C: "Oxygen",
        correctAnswer: "C",
      },
      {
        question:
          "There are six main components or parts of weather. They are temperature, atmospheric pressure, wind, humidity, precipitation, and ______. Together these components describe the weather at any given time.",
        options: {
          A: "Sunshine",
          B: "Visibility",
          C: "Cloudiness",
        correctAnswer: "C",
      },
      {
        question:
          "The factor that depends on how close or how far a place is to the Equator and affects the climate is ______.",
        options: {
          A: "Altitude above Sea Level",
          B: "Distance from the Sea",
          C: "Latitude or Distance from the Equator",
        correctAnswer: "C",
      },
      {
        question:
          "The altitude or height of a place affects its temperature and air pressure. The air at sea level is dense, so it absorbs more heat from the sunlight; while the air at higher places is thin, so it absorbs ______ heat.",
        options: {
          A: "More",
          B: "Less",
          C: "The same amount of",
        correctAnswer: "B",
      },
      {
        question:
          "Land heats up and cools down quickly, while water takes time to heat and cool. Coastal areas heat up during the day and cool down at night quickly. In comparison, the sea water stays warm for long at night, which heats up or cools down the ______.",
        options: {
          A: "Mountains",
          B: "Air",
          C: "Rivers",
        correctAnswer: "B",
      },
      {
        question:
          "Areas located near the Equator receive more direct sunlight and are ______, while areas around the poles get indirect or angled sunlight, so they are colder.",
        options: {
          A: "Warmer",
          B: "Cooler",
          C: "Windy",
        correctAnswer: "A",
      },
      {
        question:
          "The wind that blows from a cold place cools, and when it blows from a hot place, it ______.",
        options: {
          A: "Cools",
          B: "Heats",
          C: "Rains",
        correctAnswer: "B",
      },
      {
        question:
          "The mountain range at a place influences the climate. Icy winds blow in central Asia, but the Himalayas do not allow them to cross over to India, so India is not as cold as ______.",
        options: {
          A: "Europe",
          B: "Tibet",
          C: "Africa",
        correctAnswer: "B",
      },
      {
        question:
          "The very hot zone that receives direct sunlight from the sun throughout the year is called the ______.",
        options: {
          A: "Frigid Zone",
          B: "Torrid Zone",
          C: "Temperate Zone",
        correctAnswer: "B",
      },
      {
        question:
          "Predicting the weather is called weather forecast. It includes information such as climate, temperature, speed of wind, cloudy or sunny, and ______.",
        options: {
          A: "Visibility",
          B: "Humidity",
          C: "Altitude",
        correctAnswer: "B",
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
          "Weather is primarily influenced by temperature, atmospheric pressure, and wind.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "Climate change can take hundreds or even thousands of years to occur.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "The altitude or height of a place affects its temperature and air pressure.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "Areas around the Equator receive more direct sunlight and are colder than areas around the poles.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question: "Land heats up and cools down more slowly than water.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Sea breezes and land breezes moderate the climate in coastal areas.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question: "The wind that blows from a hot place cools the area.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "Mountain ranges can block or redirect wind patterns and influence a region's climate.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
      {
        question:
          "The Torrid Zone is characterized by almost frozen conditions throughout the year.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Maps are essential tools for understanding geography, navigation, and providing information about geographical locations.",
        options: {
          A: "True",
          B: "False",
        correctAnswer: "A",
      },
    ],
  };
}

export var activityData;
