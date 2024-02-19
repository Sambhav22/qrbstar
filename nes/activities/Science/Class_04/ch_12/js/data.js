export const chapter = "Chapter - 12: Pollution";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the primary cause of undesirable changes in the environment, affecting the quality of life?",
          optionA: "Deforestation",
          optionB: "Global warming",
          optionC: "Pollution",
          correctAnswer: "C. Pollution",
        },
        {
          question:
            "Which of the following is NOT a type of pollution mentioned in the text?",
          optionA: "Air pollution",
          optionB: "Noise pollution",
          optionC: "Light pollution",
          correctAnswer: "C. Light pollution",
        },
        {
          question:
            "What are the major sources of air pollution mentioned in the text?",
          optionA:
            "Burning of fossil fuels, smoke from industries and vehicles, decomposed garbage",
          optionB: "Deforestation, agricultural activities, volcanic eruptions",
          optionC: "Radioactive waste, nuclear power plants, chemical spills",
          correctAnswer:
            "A. Burning of fossil fuels, smoke from industries and vehicles, decomposed garbage",
        },
        {
          question:
            "Acid rain is caused by the combination of rain droplets with harmful gases. What are the main gases responsible for acid rain?",
          optionA: "Oxygen and carbon dioxide",
          optionB: "Sulphur dioxide and nitrogen oxide",
          optionC: "Methane and ozone",
          correctAnswer: "B. Sulphur dioxide and nitrogen oxide",
        },
        {
          question:
            "What is the primary cause of global warming, as mentioned in the text?",
          optionA: "Industrialization",
          optionB: "Increase in carbon dioxide gas",
          optionC: "Deforestation",
          correctAnswer: "B. Increase in carbon dioxide gas",
        },
        {
          question: "How does ozone layer depletion affect living organisms?",
          optionA: "Causes skin cancer, cataracts, and harm to wildlife",
          optionB: "Promotes the growth of plants",
          optionC: "Enhances the fertility of the soil",
          correctAnswer:
            "A. Causes skin cancer, cataracts, and harm to wildlife",
        },
        {
          question:
            "What is a suggested method to control air pollution mentioned in the text?",
          optionA: "Increasing the use of fossil fuels",
          optionB: "Planting more trees",
          optionC: "Encouraging the burning of garbage",
          correctAnswer: "B. Planting more trees",
        },
        {
          question:
            "What are the main sources of water pollution listed in the text?",
          optionA: "Carbon emissions, deforestation, soil erosion",
          optionB: "Sewage, household waste, industrial waste",
          optionC: "Noise from traffic, railway station, aircrafts",
          correctAnswer: "B. Sewage, household waste, industrial waste",
        },
        {
          question: "How does soil pollution affect plant and animal life?",
          optionA: "Enhances soil fertility",
          optionB:
            "Reduces soil fertility and disrupts the balance of fauna and flora",
          optionC: "Increases nitrogen fixation in the soil",
          correctAnswer:
            "B. Reduces soil fertility and disrupts the balance of fauna and flora",
        },
        {
          question:
            "What are the suggested measures for controlling noise pollution?",
          optionA: "Adding insulation and soundproofing, using ear protection",
          optionB: "Planting more trees",
          optionC: "Banning the use of plastic bags",
          correctAnswer:
            "A. Adding insulation and soundproofing, using ear protection",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Environment is our surroundings which includes everything like ____, water, air, living beings etc.",
          options: ["land", "sky", "fire"],
          correctAnswer: "A. land",
        },
        {
          question:
            "Pollution is the undesirable change in the state of our environment that brings down the quality of ____. In general, pollution is the activity of disturbing the natural system and balance of an environment.",
          options: ["resources", "life", "energy"],
          correctAnswer: "B. life",
        },
        {
          question:
            "Air pollution involves the direct release of chemicals into the environment. The chemicals become part of the ____ around us that all living things take in.",
          options: ["water", "air", "soil"],
          correctAnswer: "B. air",
        },
        {
          question:
            "Acid Rain causes widespread damage to the environment. It is caused by rain droplets mixing with harmful gases such as sulphur dioxide and ____.",
          options: ["oxygen", "nitrogen", "carbon dioxide"],
          correctAnswer: "B. nitrogen",
        },
        {
          question:
            "Global Warming is the increase in the average temperature of atmosphere, oceans, and other landmasses of earth. The cause of global warming is the release of ____ gas in the atmosphere.",
          options: ["ozone", "methane", "carbon dioxide"],
          correctAnswer: "C. carbon dioxide",
        },
        {
          question:
            "Ozone Layer Depletion is caused by pollution-causing chemicals like chlorofluorocarbons, chlorine, and bromine. Depletion of the ozone layer allows a large amount of ____ rays to reach the earth.",
          options: ["infrared", "ultraviolet", "microwave"],
          correctAnswer: "B. ultraviolet",
        },
        {
          question:
            "Control of Air Pollution includes limiting the quantity of pollutants, using filters in automobiles and scrubbers in industrial plants, planting more trees, and using ____ vehicles instead of petrol, diesel or pollution check vehicles.",
          options: ["electric", "CNG", "hybrid"],
          correctAnswer: "C. CNG",
        },
        {
          question:
            "Water pollution is the contamination of waterbodies like oceans, rivers, streams, lakes, or underground water by harmful substances, resulting in damage to the quality of life of aquatic habitats and also ____.",
          options: ["plants", "animals", "humans"],
          correctAnswer: "C. humans",
        },
        {
          question:
            "Sources of water pollution include sewage, household waste, industrial waste, agricultural chemicals, and excessive use of chemicals like DDT. Water purification before drinking is a major step towards controlling ____ pollution.",
          options: ["air", "soil", "water"],
          correctAnswer: "C. water",
        },
        {
          question:
            "Soil pollution is the building up of toxic chemicals, disease-causing organisms, or harmful substances which reduce the quality of soil and affect ____ life.",
          options: ["plant", "animal", "insect"],
          correctAnswer: "B. animal",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Environment includes everything like land, water, air, living beings, etc.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Pollution is the desirable change in the state of our environment that improves the quality of life.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Air pollution involves the release of chemicals into the environment, affecting human health and aquatic life.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Acid Rain is caused by rain droplets mixing with beneficial gases, promoting plant growth.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Global Warming refers to the decrease in the average temperature of the Earth's atmosphere.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Ozone Layer Depletion allows harmful ultraviolet rays to reach the Earth, causing skin cancer and cataracts.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Control of Air Pollution includes measures such as planting more trees and using CNG vehicles.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Water pollution only affects aquatic habitats and does not harm humans.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Sources of water pollution include sewage, household waste, and industrial waste.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Soil pollution affects soil fertility and has no impact on plant and animal life.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
