export const chapter = "Chapter - 17: Atmosphere : Weather and Climate ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is weather?",
        optionA: "The overall average condition of the atmosphere",
        optionB: "The measurement of heat",
        optionC:
          "The condition of the atmosphere at a given place for a short period",
        correctAnswer:
          "C) The condition of the atmosphere at a given place for a short period",
      },
      {
        question: "Which of the following is NOT a factor affecting weather?",
        optionA: "Temperature",
        optionB: "Distance from Equator",
        optionC: "Altitude of the Moon",
        correctAnswer: "C) Altitude of the Moon",
      },
      {
        question: "What is meteorology?",
        optionA: "The study of climate",
        optionB: "The study of the Earth's atmosphere and its changes",
        optionC: "The measurement of solar radiation",
        correctAnswer: "B) The study of the Earth's atmosphere and its changes",
      },
      {
        question:
          "Why do nighttime temperatures tend to be colder than daytime temperatures?",
        optionA: "Lack of wind at night",
        optionB: "Absence of solar radiation at night",
        optionC: "Higher humidity at night",
        correctAnswer: "B) Absence of solar radiation at night",
      },
      {
        question: "What is insolation?",
        optionA: "Incoming solar radiation",
        optionB: "Outgoing terrestrial radiation",
        optionC: "Internal heat of the Earth",
        correctAnswer: "A) Incoming solar radiation",
      },
      {
        question: "What causes wind according to the text?",
        optionA: "Insolation",
        optionB: "Terrestrial radiation",
        optionC: "Atmospheric pressure differences",
        correctAnswer: "C) Atmospheric pressure differences",
      },
      {
        question: "What is climate?",
        optionA: "The measurement of heat",
        optionB:
          "The overall average condition of the atmosphere over a long period",
        optionC: "The study of weather changes",
        correctAnswer:
          "B) The overall average condition of the atmosphere over a long period",
      },
      {
        question: "Which statement about temperature measurement is correct?",
        optionA: "The Fahrenheit Scale was invented by Anders Celsius.",
        optionB: "The Celsius Scale was invented by Daniel Fahrenheit.",
        optionC:
          "C/5 = F - 32/9 is the conversion formula from Fahrenheit to Celsius.",
        correctAnswer:
          "C) C/5 = F - 32/9 is the conversion formula from Fahrenheit to Celsius.",
      },
      {
        question: "Why does South India have a moderate climate?",
        optionA: "Due to high altitude",
        optionB: "Due to sea breezes moderating the temperature",
        optionC: "Due to proximity to the Equator",
        correctAnswer: "B) Due to sea breezes moderating the temperature",
      },
      {
        question: "What instrument is commonly used to measure temperature?",
        optionA: "Barometer",
        optionB: "Anemometer",
        optionC: "Thermometer",
        correctAnswer: "C) Thermometer",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question:
          "Weather denotes the condition of the atmosphere at a given place for a ___________ period of time.",
        optionA: "Long",
        optionB: "Short",
        optionC: "Moderate",
        correctAnswer: "B) Short",
      },
      {
        question:
          "Climate is the overall average condition of the atmosphere over a ___________ period of time.",
        optionA: "Short",
        optionB: "Moderate",
        optionC: "Long",
        correctAnswer: "C) Long",
      },
      {
        question:
          "Temperature, an important factor of weather, is a measurement of ___________.",
        optionA: "Light",
        optionB: "Heat",
        optionC: "Wind",
        correctAnswer: "B) Heat",
      },
      {
        question:
          "Nighttime temperature is colder than daytime temperature because insolation from the sun is not present at ___________.",
        optionA: "Dawn",
        optionB: "Noon",
        optionC: "Nighttime",
        correctAnswer: "C) Nighttime",
      },
      {
        question:
          "Terrestrial radiation heats up the air near the earth's surface, creating a ___________.",
        optionA: "High pressure",
        optionB: "Low pressure",
        optionC: "Moderate pressure",
        correctAnswer: "B) Low pressure",
      },
      {
        question:
          "The places near the Equator receive maximum solar radiation, while the places near the poles receive ___________ solar radiation.",
        optionA: "Abundant",
        optionB: "Little",
        optionC: "Moderate",
        correctAnswer: "B) Little",
      },
      {
        question:
          "Solar radiation does not heat up the atmosphere; it is heated by ___________ radiation.",
        optionA: "Solar",
        optionB: "Terrestrial",
        optionC: "Wind",
        correctAnswer: "B) Terrestrial",
      },
      {
        question:
          "The land covered with water or trees will receive less solar radiation, resulting in a ___________ temperature.",
        optionA: "Higher",
        optionB: "Lower",
        optionC: "Constant",
        correctAnswer: "B) Lower",
      },
      {
        question: "A thermometer is an instrument used to measure ___________.",
        optionA: "Wind speed",
        optionB: "Temperature",
        optionC: "Air pressure",
        correctAnswer: "B) Temperature",
      },
      {
        question: "The Fahrenheit Scale was invented by ___________ in 1710.",
        optionA: "Anders Celsius",
        optionB: "Daniel Fahrenheit",
        optionC: "Galileo Galilei",
        correctAnswer: "B) Daniel Fahrenheit",
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
          "Weather denotes the condition of the atmosphere at a given place for a short period of time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Temperature, an important factor of weather, tells us how hot or cold a place is.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Climate is the overall average condition of the atmosphere over a short period of time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Nighttime temperature is usually warmer than daytime temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Terrestrial radiation is the heat released by the Earth's surface at nighttime.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Solar radiation heats up the atmosphere directly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Equator receives maximum solar radiation, while the poles receive little solar radiation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A thermometer is an instrument used to measure wind speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Fahrenheit Scale was invented by Anders Celsius.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Climate is the average condition of the atmosphere over a long period of time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
