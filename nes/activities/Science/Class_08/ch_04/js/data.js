export const chapter = "Chapter - 4: Combustion and Flame ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary purpose of fuels mentioned in the text?",
          optionA: "To generate electricity",
          optionB: "To produce heat energy",
          optionC: "To enhance combustion efficiency",
          correctAnswer: "B) To produce heat energy",
        },
        {
          question: "Which of the following is an example of a secondary fuel?",
          optionA: "Wood",
          optionB: "Petrol",
          optionC: "Dry leaves",
          correctAnswer: "B) Petrol",
        },
        {
          question: "What type of fuel is Compressed Natural Gas (CNG)?",
          optionA: "Liquid fuel",
          optionB: "Gaseous fuel",
          optionC: "Solid fuel",
          correctAnswer: "B) Gaseous fuel",
        },
        {
          question:
            "What is the classification of fuels based on their sources?",
          optionA: "Primary and Secondary",
          optionB: "Solid, Liquid, and Gaseous",
          optionC: "Renewable and Non-renewable",
          correctAnswer: "C) Renewable and Non-renewable",
        },
        {
          question:
            "How is the efficiency of various fuels compared in the text?",
          optionA: "By their color",
          optionB: "By their weight",
          optionC: "By their calorific value",
          correctAnswer: "C) By their calorific value",
        },
        {
          question:
            "What is the harmful effect of burning fuels like wood and coal mentioned in the text?",
          optionA: "Release of oxygen",
          optionB: "Production of acid rain",
          optionC: "Formation of greenhouse gases",
          correctAnswer: "B) Production of acid rain",
        },
        {
          question:
            "What are the necessary conditions for combustion mentioned in the text?",
          optionA: "Presence of light, Presence of water, High density",
          optionB:
            "Presence of combustible substance, Presence of supporter of combustion, Proper ignition temperature",
          optionC: "Presence of oxygen, High calorific value, Low volatility",
          correctAnswer:
            "B) Presence of combustible substance, Presence of supporter of combustion, Proper ignition temperature",
        },
        {
          question:
            "What is the purpose of water in controlling fire, according to the text?",
          optionA: "To increase the temperature",
          optionB: "To reduce the temperature",
          optionC: "To provide fuel for combustion",
          correctAnswer: "B) To reduce the temperature",
        },
        {
          question:
            "Which fire extinguisher works on the principle of cooling the fire?",
          optionA: "Soda-acid fire extinguisher",
          optionB: "Hydrocarbon fire extinguisher",
          optionC: "Carbon dioxide fire extinguisher",
          correctAnswer: "A) Soda-acid fire extinguisher",
        },
        {
          question:
            "What determines the color of a flame according to the text?",
          optionA: "Temperature and nature of the substance",
          optionB: "Presence of oxygen",
          optionC: "Amount of fuel",
          correctAnswer: "A) Temperature and nature of the substance",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "Fuels are substances used for producing ____________.",
          optionA: "Electricity",
          optionB: "Light",
          optionC: "Heat energy",
          correctAnswer: "C) Heat energy",
        },
        {
          question:
            "Classification of fuels is based on three different factors: occurrence, physical states, and ____________.",
          optionA: "Color",
          optionB: "Temperature",
          optionC: "Sources",
          correctAnswer: "C) Sources",
        },
        {
          question:
            "__________ fuels are derived from renewable natural resources like plants or animals.",
          optionA: "Secondary",
          optionB: "Non-renewable",
          optionC: "Renewable",
          correctAnswer: "C) Renewable",
        },
        {
          question:
            "Calorific value is the amount of heat energy released by the complete combustion of 1 kg of a fuel, expressed in ____________.",
          optionA: "Watts",
          optionB: "Kilocalories",
          optionC: "Newtons",
          correctAnswer: "B) Kilocalories",
        },
        {
          question:
            "The sulphur contained in coal forms ____________ when it burns.",
          optionA: "Oxygen",
          optionB: "Nitrogen oxides",
          optionC: "Sulphur dioxide",
          correctAnswer: "C) Sulphur dioxide",
        },
        {
          question:
            "The harmful gases released during the burning of coal and oil readily form ____________, contributing to air pollution.",
          optionA: "Smog",
          optionB: "Ozone",
          optionC: "Methane",
          correctAnswer: "A) Smog",
        },
        {
          question:
            "An ideal fuel should have a proper ignition temperature, low content of non-volatile matter, and should be ____________.",
          optionA: "Expensive",
          optionB: "Difficult to handle",
          optionC: "Pollution-free",
          correctAnswer: "C) Pollution-free",
        },
        {
          question:
            "Combustion is a chemical process where a substance reacts with oxygen, giving off ____________ and ____________.",
          optionA: "Water, light",
          optionB: "Heat, light",
          optionC: "Sound, electricity",
          correctAnswer: "B) Heat, light",
        },
        {
          question:
            "Complete combustion results in the formation of carbon dioxide, water, heat, and light, while incomplete combustion produces ____________.",
          optionA: "Oxygen",
          optionB: "Carbon monoxide, soot",
          optionC: "Nitrogen oxides",
          correctAnswer: "B) Carbon monoxide, soot",
        },
        {
          question:
            "Spontaneous combustion occurs when a substance catches fire suddenly on its own, shown by substances with ____________ ignition temperature.",
          optionA: "High",
          optionB: "Low",
          optionC: "Moderate",
          correctAnswer: "B) Low",
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
            "Fuels like wood and coal release unburnt carbon particles, causing respiratory diseases like asthma.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Renewable fuels are derived from non-renewable resources like fossil fuels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Calorific value is the measure of the amount of heat energy released by the complete combustion of a fuel.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Burning of coal and oil contributes to the release of greenhouse gases, causing global warming.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "An ideal fuel is characterized by a high ignition temperature, high non-volatile matter content, and high pollution levels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Combustion is a chemical process that involves a substance reacting with nitrogen to produce heat and light.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Water is a commonly used extinguishing material that works well on electrical fires and fires involving inflammable liquids.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Soda-acid fire extinguishers work on the principle of smothering the fire by cutting off the supply of air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the Ryotwari System, individual peasants collectively pay land revenue.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Flame color depends on the temperature and nature of the substance burning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
