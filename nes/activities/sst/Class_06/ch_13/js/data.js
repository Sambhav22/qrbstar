export const chapter = "Chapter - 13: Our Environment  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the environment composed of?",
        optionA: "Only living things",
        optionB: "Only non-living things",
        optionC: "Both living and non-living things",
        correctAnswer: "Both living and non-living things",
      },
      {
        question: "What is the primary cause of air pollution?",
        optionA: "Natural causes like volcanic eruptions",
        optionB: "Human activities, industries, and vehicles",
        optionC: "Forest fires and sandstorms",
        correctAnswer: "Human activities, industries, and vehicles",
      },
      {
        question: "How does air pollution affect plants and trees?",
        optionA: "It has no impact on plant growth.",
        optionB: "It accelerates plant growth.",
        optionC: "It slows down plant growth and weakens them.",
        correctAnswer: "It slows down plant growth and weakens them.",
      },
      {
        question: "What is one significant consequence of air pollution?",
        optionA: "Reduced temperature in affected areas",
        optionB: "Increased fertility of the soil",
        optionC: "Acid rain that damages various surfaces",
        correctAnswer: "Acid rain that damages various surfaces",
      },
      {
        question:
          "Which environmental component protects the Earth from harmful solar radiation?",
        optionA: "Air",
        optionB: "Water",
        optionC: "Ozone layer",
        correctAnswer: "Ozone layer",
      },
      {
        question: "What can help control air pollution?",
        optionA: "Use of smokeless sources of energy",
        optionB: "Increasing the number of vehicles",
        optionC: "Burning fossil fuels without restriction",
        correctAnswer: "Use of smokeless sources of energy",
      },
      {
        question: "What is the main cause of water pollution?",
        optionA: "Natural factors like rainfall",
        optionB: "Industrial and household waste dumping",
        optionC: "Farming practices",
        correctAnswer: "Industrial and household waste dumping",
      },
      {
        question: "How does polluted water impact human health?",
        optionA: "It has no impact on human health.",
        optionB: "It causes diseases like cholera and typhoid.",
        optionC: "It leads to improved overall health.",
        correctAnswer: "It causes diseases like cholera and typhoid.",
      },
      {
        question: "What is the primary way to prevent land or soil pollution?",
        optionA: "Increase the use of pesticides and fertilizers",
        optionB: "Properly dispose of solid wastes",
        optionC: "Rely on landfills for waste disposal",
        correctAnswer: "Properly dispose of solid wastes",
      },
      {
        question:
          "What is noise pollution, and how does it affect living beings?",
        optionA: "It is a type of pollution caused by silence.",
        optionB: "It affects human beings but has no impact on animals.",
        optionC:
          "It's loud sound beyond the comfort level, affecting human beings, birds, and animals.",
        correctAnswer:
          "It's loud sound beyond the comfort level, affecting human beings, birds, and animals.",
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
          "The environment includes all ______ and ______ things in our surroundings.",
        options: ["living", "non-living", "natural"],
        correctAnswer: ["living", "non-living"],
      },
      {
        question:
          "The life of humans and animals is entirely dependent on the ______.",
        options: ["air", "environment", "sunlight"],
        correctAnswer: "environment",
      },
      {
        question:
          "Human activities, industries, and vehicles are the main agents of ______ pollution.",
        options: ["land", "air", "water"],
        correctAnswer: "air",
      },
      {
        question:
          "Air pollution is the cause of a number of diseases pertaining to our ______ and eyes.",
        options: ["lungs", "skin", "hair"],
        correctAnswer: "lungs",
      },
      {
        question:
          "Acid rain occurs when certain gases created by burning of fossil fuels mix with the ______ present in the atmosphere.",
        options: ["water", "air", "sunlight"],
        correctAnswer: "water",
      },
      {
        question:
          "______ pollution affects our ears and mental peace and is a major cause of stress and irritation.",
        options: ["Air", "Noise", "Water"],
        correctAnswer: "Noise",
      },
      {
        question:
          "Soil pollution is caused by dumping of solid wastes such as plastic bags, glass bottles, and metal containers on the ______.",
        options: ["air", "water", "soil"],
        correctAnswer: "soil",
      },
      {
        question:
          "Rainwater carries strong chemicals from pesticides and fertilizers into the ground and ______ the groundwater.",
        options: ["purifies", "contaminates", "evaporates"],
        correctAnswer: "contaminates",
      },
      {
        question:
          "To prevent noise pollution, there should be a ban on ______ and loud musical horns.",
        options: ["music", "loudspeakers", "vehicles"],
        correctAnswer: "loudspeakers",
      },
      {
        question:
          "Pollution control means the control of emissions and effluents into air, water, and soil that cause pollution in the ______.",
        options: ["environment", "atmosphere", "economy"],
        correctAnswer: "environment",
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
          "People choose their occupations based on their needs, skills, choices, and qualifications.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Fish is the staple diet of people living near coasts.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Dairy farming involves the rearing of animals for eggs and meat.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Forests are not a source of various herbs used in medicines.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Mining is the practice of digging out minerals from the earth.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Tourism in India does not involve the provision of services for visitors.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Government employees work only in government offices and departments.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Self-employed individuals include writers, architects, and doctors.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "New occupations in the field of computers include software engineers and hardware engineers.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Farming involves the rearing of animals for milk and honey production.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
