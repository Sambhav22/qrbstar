export const chapter = "Chapter - 12: Air ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the device used to find the direction of blowing wind?",
          optionA: "Anemometer",
          optionB: "Weathercock",
          optionC: "Barometer",
          correctAnswer: "B) Weathercock",
        },
        {
          question:
            "Which of the following activities is performed to prove that air occupies space?",
          optionA: "Using an anemometer",
          optionB: "Burning fossil fuels",
          optionC: "Performing an activity",
          correctAnswer: "C) Performing an activity",
        },
        {
          question: "What does the composition of air include?",
          optionA: "Only oxygen",
          optionB: "Only nitrogen",
          optionC:
            "A mixture of gases including nitrogen, oxygen, carbon dioxide, and others",
          correctAnswer:
            "C) A mixture of gases including nitrogen, oxygen, carbon dioxide, and others",
        },
        {
          question:
            "What is the primary function of the troposphere in the atmosphere?",
          optionA: "Absorbing ultraviolet radiation",
          optionB: "Trapping water vapors and forming clouds",
          optionC: "Burning up meteors and leaving fiery trails",
          correctAnswer: "B) Trapping water vapors and forming clouds",
        },
        {
          question:
            "What is the main purpose of the ozone layer in the stratosphere?",
          optionA: "Trapping carbon dioxide",
          optionB: "Absorbing ultraviolet radiations",
          optionC: "Creating a greenhouse effect",
          correctAnswer: "B) Absorbing ultraviolet radiations",
        },
        {
          question: "What does the term 'humidity' refer to?",
          optionA: "The concentration of oxygen in the air",
          optionB: "The amount of water vapor in the air",
          optionC: "The presence of nitrogen in the air",
          correctAnswer: "B) The amount of water vapor in the air",
        },
        {
          question:
            "What causes the formation of dew or rain when the air's capacity to hold water vapor is exceeded?",
          optionA: "Burning of fossil fuels",
          optionB: "Evaporation of water",
          optionC: "Condensation of water vapor",
          correctAnswer: "C) Condensation of water vapor",
        },
        {
          question: "Why is it advised to cover your nose in a dusty place?",
          optionA: "To prevent inhalation of harmful gases",
          optionB: "To avoid exposure to harmful UV rays",
          optionC:
            "To prevent dust particles from entering the respiratory system",
          correctAnswer:
            "C) To prevent dust particles from entering the respiratory system",
        },
        {
          question:
            "What is the primary function of carbon dioxide in the air?",
          optionA: "Supporting burning",
          optionB: "Required for photosynthesis",
          optionC: "Trapping heat in the environment",
          correctAnswer: "B) Required for photosynthesis",
        },
        {
          question:
            "What is the term for the undesirable mixing of harmful particles or gases with air?",
          optionA: "Greenhouse effect",
          optionB: "Air composition",
          optionC: "Air pollution",
          correctAnswer: "C) Air pollution",
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
            "Air contains about ___% nitrogen and ___% oxygen. Nitrogen occupies almost four-fifth of the volume of dry air.",
          options: [{ A: 21 }, { B: 78 }, { C: 50 }],
          correctAnswer: "B) 78, 21",
        },
        {
          question:
            "The amount of water vapour in air depends on the weather of a place. It is present in air as a result of ___ of water from various sources of water like oceans, rivers, lakes, and streams.",
          options: [
            { A: "Sublimation" },
            { B: "Condensation" },
            { C: "Evaporation" },
          ],
          correctAnswer: "C) Evaporation",
        },
        {
          question: "The contents of water vapour in air are called ___.",
          options: [
            { A: "Precipitation" },
            { B: "Humidity" },
            { C: "Condensation" },
          ],
          correctAnswer: "B) Humidity",
        },
        {
          question: "Moving air is called ___.",
          options: [{ A: "Gust" }, { B: "Wind" }, { C: "Breeze" }],
          correctAnswer: "B) Wind",
        },
        {
          question: "Burning of fuel produces ___ along with carbon dioxide.",
          options: [{ A: "Oxygen" }, { B: "Nitrogen" }, { C: "Smoke" }],
          correctAnswer: "C) Smoke",
        },
        {
          question:
            "Dust is always present in the air and is composed of fine particles of any solid like ___.",
          options: [{ A: "Metal" }, { B: "Soil" }, { C: "Plastic" }],
          correctAnswer: "B) Soil",
        },
        {
          question:
            "All living beings need air to survive, and oxygen is essential for ___.",
          options: [
            { A: "Burning" },
            { B: "Photosynthesis" },
            { C: "Respiration" },
          ],
          correctAnswer: "C) Respiration",
        },
        {
          question:
            "Air fills empty spaces in objects like balloons, tires, and tubes to make them ___.",
          options: [{ A: "Heavier" }, { B: "Lighter" }, { C: "Useful" }],
          correctAnswer: "C) Useful",
        },
        {
          question:
            "When undesirable particles or harmful gases mix with air, it is called ___.",
          options: [
            { A: "Atmospheric change" },
            { B: "Air contamination" },
            { C: "Air pollution" },
          ],
          correctAnswer: "C) Air pollution",
        },
        {
          question:
            "The earth is covered by a blanket of air known as the ___.",
          options: [
            { A: "Atmosphere" },
            { B: "Stratosphere" },
            { C: "Thermosphere" },
          ],
          correctAnswer: "A) Atmosphere",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Air occupies space.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Air has mass.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Air exerts pressure.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Nitrogen occupies about one-fifth of the volume of dry air.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Oxygen in air does not support burning.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Carbon dioxide constitutes about 0.03% of air.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The amount of water vapor in air depends on temperature.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smoke from burning fuel is not harmful to the lungs and eyes.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Dust particles in the air can easily enter the respiratory system.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The primary function of the atmosphere is to trap carbon dioxide.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
