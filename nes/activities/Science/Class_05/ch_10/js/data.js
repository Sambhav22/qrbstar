export const chapter = "Chapter - 10: Air and wate,  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the outermost layer of Earth's atmosphere?",
          optionA: "Troposphere",
          optionB: "Thermosphere",
          optionC: "Exosphere",
          correctAnswer: "Exosphere",
        },
        {
          question:
            "Which layer of the atmosphere contains the ozone layer that protects us from harmful ultraviolet rays?",
          optionA: "Troposphere",
          optionB: "Stratosphere",
          optionC: "Mesosphere",
          correctAnswer: "Stratosphere",
        },
        {
          question: "What percentage of the atmosphere is composed of oxygen?",
          optionA: "21%",
          optionB: "78%",
          optionC: "1%",
          correctAnswer: "21%",
        },
        {
          question:
            "In which layer of the atmosphere do meteorites burn out, preventing them from reaching the Earth's surface?",
          optionA: "Troposphere",
          optionB: "Stratosphere",
          optionC: "Mesosphere",
          correctAnswer: "Mesosphere",
        },
        {
          question:
            "What is the term for the amount of water vapor present in the air?",
          optionA: "Temperature",
          optionB: "Humidity",
          optionC: "Precipitation",
          correctAnswer: "Humidity",
        },
        {
          question:
            "Which layer of the atmosphere is closest to the Earth's surface and where weather changes take place?",
          optionA: "Troposphere",
          optionB: "Stratosphere",
          optionC: "Thermosphere",
          correctAnswer: "Troposphere",
        },
        {
          question: "What is the primary component of Earth's atmosphere?",
          optionA: "Carbon dioxide",
          optionB: "Nitrogen",
          optionC: "Oxygen",
          correctAnswer: "Nitrogen",
        },
        {
          question: "How are insoluble impurities removed from water?",
          optionA: "Evaporation",
          optionB: "Filtration",
          optionC: "Distillation",
          correctAnswer: "Filtration",
        },
        {
          question:
            "Which method is used to purify water by heating it until it turns into steam, leaving impurities behind?",
          optionA: "Boiling",
          optionB: "Chlorination",
          optionC: "Distillation",
          correctAnswer: "Distillation",
        },
        {
          question:
            "What is the purpose of adding chlorine to water in the process of chlorination?",
          optionA: "Enhancing taste",
          optionB: "Killing germs",
          optionC: "Removing impurities",
          correctAnswer: "Killing germs",
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
            "The thick blanket of air that surrounds our earth is called the ________.",
          options: ["Mesosphere", "Atmosphere", "Stratosphere"],
          answer: "Atmosphere",
        },
        {
          question: "The atmosphere contains ________ which we breathe in.",
          options: ["Carbon dioxide", "Oxygen", "Nitrogen"],
          answer: "Oxygen",
        },
        {
          question:
            "The layer of the atmosphere closest to the earth's surface, where organisms live, is known as the ________.",
          options: ["Thermosphere", "Troposphere", "Stratosphere"],
          answer: "Troposphere",
        },
        {
          question:
            "The upper part of the stratosphere is the ________ layer, which acts as a shield against harmful ultraviolet rays.",
          options: ["Ozone", "Mesosphere", "Exosphere"],
          answer: "Ozone",
        },
        {
          question:
            "Air is a mixture of many gases, with nitrogen forming about ________ of the complete atmosphere.",
          options: ["1%", "21%", "78%"],
          answer: "78%",
        },
        {
          question:
            "The amount of water vapor present in the air is called ________.",
          options: ["Precipitation", "Temperature", "Humidity"],
          answer: "Humidity",
        },
        {
          question:
            "________ impurities in water can be separated from water by the methods of filtration and sedimentation.",
          options: ["Soluble", "Insoluble", "Dissolved"],
          answer: "Insoluble",
        },
        {
          question:
            "Boiling is one of the simplest ways to purify drinking water as it kills ________ present in water.",
          options: ["Minerals", "Germs", "Soluble impurities"],
          answer: "Germs",
        },
        {
          question:
            "The process of purifying water by adding chlorine is called ________.",
          options: ["Boiling", "Filtration", "Chlorination"],
          answer: "Chlorination",
        },
        {
          question:
            "The script that allows visually-challenged individuals to read using patterns of small dots is called ________.",
          options: ["Calligraphy", "Hieroglyphics", "Braille"],
          answer: "Braille",
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
            "The atmosphere extends about 800 km above the Earth's surface.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "The ozone layer in the stratosphere protects us from harmful ultraviolet rays.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "The troposphere is the outermost layer of Earth's atmosphere.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "Carbon dioxide is the most abundant gas in Earth's atmosphere.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "The thermosphere is the layer where the space shuttle orbits.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Humidity is the term for the amount of nitrogen present in the air.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "Filtration is a method used to remove soluble impurities from water.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "Boiling is an effective method to kill germs and purify drinking water.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Chlorination involves adding chlorine to water to enhance its taste.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "Braille is a script that uses patterns of small dots for visually-challenged individuals.",
          options: ["True", "False"],
          answer: "True",
        },
      ],
  };
}

export var activityData;
