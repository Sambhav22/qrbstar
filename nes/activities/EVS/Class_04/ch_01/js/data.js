export const chapter = "Chapter - 1: Clean Surroundings";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary reason for waste generation mentioned in the text?",
          optionA: "Lack of awareness",
          optionB: "Excessive desire and consumption",
          optionC: "Inadequate waste management",
          correctAnswer: "B. Excessive desire and consumption",
        },
        {
          question:
            "What are the two main types of wastes discussed in the text?",
          optionA: "Organic and inorganic wastes",
          optionB: "Biodegradable and non-biodegradable wastes",
          optionC: "Solid and liquid wastes",
          correctAnswer: "B. Biodegradable and non-biodegradable wastes",
        },
        {
          question:
            "What is the process of waste disposal that involves combustion of wastes to derive energy?",
          optionA: "Landfill",
          optionB: "Incineration",
          optionC: "Composting",
          correctAnswer: "B. Incineration",
        },
        {
          question:
            "Which waste disposal method is described as polluting the environment in the text?",
          optionA: "Landfill",
          optionB: "Incineration",
          optionC: "Open Dumping",
          correctAnswer: "C. Open Dumping",
        },
        {
          question: "What are the three R's recommended for waste management?",
          optionA: "Reflect, Reuse, Recycle",
          optionB: "Reduce, Reuse, Recycle",
          optionC: "Recover, Renew, Recreate",
          correctAnswer: "B. Reduce, Reuse, Recycle",
        },
        {
          question:
            "What does 'Reuse' involve in waste management according to the text?",
          optionA: "Burning waste for energy",
          optionB: "Using things again",
          optionC: "Decomposing organic waste",
          correctAnswer: "B. Using things again",
        },
        {
          question:
            "Which waste management method provides compost that is rich in nutrients for soil fertility improvement?",
          optionA: "Incineration",
          optionB: "Landfill",
          optionC: "Composting",
          correctAnswer: "C. Composting",
        },
        {
          question:
            "What is the recommended action to reduce household waste mentioned in the text?",
          optionA: "Increase the number of things you buy",
          optionB: "Use non-biodegradable materials",
          optionC: "Reduce the number of things you buy",
          correctAnswer: "C. Reduce the number of things you buy",
        },
        {
          question:
            "According to the text, what can be recycled to make useful things?",
          optionA: "Organic waste",
          optionB: "Plastic, glass, and paper",
          optionC: "Metal and aluminum",
          correctAnswer: "B. Plastic, glass, and paper",
        },
        {
          question:
            "What is the primary purpose of treating waste at home, as mentioned in the text?",
          optionA: "Generate more waste",
          optionB: "Save resources for future use",
          optionC: "Increase household waste",
          correctAnswer: "B. Save resources for future use",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "Wastes are classified into two types: ______ and ______.",
          optionA: "Liquid, Solid",
          optionB: "Biodegradable, Non-Biodegradable",
          optionC: "Organic, Inorganic",
          correctAnswer: "Biodegradable, Non-Biodegradable",
        },
        {
          question:
            "Waste materials like fruits and vegetable peels that decompose easily are known as ______.",
          optionA: "Non-Biodegradable",
          optionB: "Organic",
          optionC: "Inorganic",
          correctAnswer: "Organic",
        },
        {
          question:
            "The method of waste disposal that involves combustion of wastes to derive energy is called ______.",
          optionA: "Landfill",
          optionB: "Incineration",
          optionC: "Composting",
          correctAnswer: "Incineration",
        },
        {
          question:
            "In open dumping, waste is loaded in trucks and taken far away from the town, causing ______.",
          optionA: "Soil Fertility",
          optionB: "Air Pollution",
          optionC: "Recycling",
          correctAnswer: "Air Pollution",
        },
        {
          question:
            "The three R's to manage waste are ______, ______, and ______.",
          optionA: "Rebuild, Reduce, Recycle",
          optionB: "Reduce, Reuse, Recreate",
          optionC: "Reduce, Reuse, Recycle",
          correctAnswer: "Reduce, Reuse, Recycle",
        },
        {
          question:
            "______ involves giving new form to old things, such as paper, glass, and plastic.",
          optionA: "Reduction",
          optionB: "Reuse",
          optionC: "Recycling",
          correctAnswer: "Recycling",
        },
        {
          question:
            "Treating waste at home involves ______ and ______ to avoid generating excess waste.",
          optionA: "Composting, Incineration",
          optionB: "Reducing, Reusing",
          optionC: "Open Dumping, Landfill",
          correctAnswer: "Reducing, Reusing",
        },
        {
          question:
            "To create a clean environment, waste management is necessary due to the ______ of certain products.",
          optionA: "Extensive use",
          optionB: "Limited availability",
          optionC: "High cost",
          correctAnswer: "Extensive use",
        },
        {
          question:
            "Landfills should be created in places where ______ is low and far from sources of flooding.",
          optionA: "Groundwater level",
          optionB: "Air pollution",
          optionC: "Soil fertility",
          correctAnswer: "Groundwater level",
        },
        {
          question:
            "Composting involves the decomposition of organic wastes by ______.",
          optionA: "Inorganic substances",
          optionB: "Microbes",
          optionC: "Incineration",
          correctAnswer: "Microbes",
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
            "Waste materials like metal, glass, and plastic decompose easily.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Incineration is a waste disposal method that involves combustion of wastes to derive energy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Biodegradable wastes include materials like fruits and vegetable peels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Open dumping is an environmentally friendly method of waste disposal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The three R's for waste management are Rebuild, Reduce, and Recreate.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Composting is a slow process that doesn't provide any benefits for soil fertility.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Landfills should be located in areas with a high groundwater level.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Reducing and reusing are essential steps in treating waste at home.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Treating waste at home involves incineration and landfill methods.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Recycling is the process of giving new form to old things like paper, glass, and plastic.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
