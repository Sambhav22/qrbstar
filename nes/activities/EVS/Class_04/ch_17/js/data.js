export const chapter = "Chapter - 17: Forms of Water";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What percentage of the Earth's surface is covered with water?",
          optionA: "51%",
          optionB: "61%",
          optionC: "71%",
          correctAnswer: "c) 71%",
        },
        {
          question: "What are the three forms of water mentioned in the text?",
          optionA: "Solid, gas, and vapor",
          optionB: "Ice, liquid, and gas",
          optionC: "Ocean, river, and lake",
          correctAnswer: "b) Ice, liquid, and gas",
        },
        {
          question:
            "In which form is water present in the rivers, lakes, ponds, and seas?",
          optionA: "Solid",
          optionB: "Liquid",
          optionC: "Gaseous",
          correctAnswer: "b) Liquid",
        },
        {
          question: "What is the gaseous form of water mentioned in the text?",
          optionA: "Air",
          optionB: "Water Vapor",
          optionC: "Oxygen",
          correctAnswer: "b) Water Vapor",
        },
        {
          question:
            "What process is involved in making water potable in the purification steps?",
          optionA: "Distillation",
          optionB: "Filtration",
          optionC: "Evaporation",
          correctAnswer: "b) Filtration",
        },
        {
          question:
            "Which step involves passing chlorine through filtered water during the purification process?",
          optionA: "Sedimentation",
          optionB: "Filtration",
          optionC: "Chlorination",
          correctAnswer: "c) Chlorination",
        },
        {
          question:
            "What is the purpose of the water cycle mentioned in the text?",
          optionA: "To reduce water pollution",
          optionB: "To maintain the water balance on Earth",
          optionC: "To create potable water",
          correctAnswer: "b) To maintain the water balance on Earth",
        },
        {
          question:
            "What recommendation is given for water conservation in the text?",
          optionA: "Increase water usage in kitchens and toilets",
          optionB: "Use showers for bathing",
          optionC: "Turn off the tap if not in use",
          correctAnswer: "c) Turn off the tap if not in use",
        },
        {
          question:
            "What is the primary reason for water conservation mentioned in the text?",
          optionA: "To reduce water pollution",
          optionB: "To increase water availability",
          optionC:
            "Freshwater is limited and our need for consuming it is increasing",
          correctAnswer:
            "c) Freshwater is limited and our need for consuming it is increasing",
        },
        {
          question:
            "What is the final step mentioned in the water purification process to make water germ-free?",
          optionA: "Filtration",
          optionB: "Chlorination",
          optionC: "Sedimentation",
          correctAnswer: "b) Chlorination",
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
            "The three forms of water are ________, liquid, and gaseous.",
          optionA: "Solid",
          optionB: "Gas",
          optionC: "Plasma",
          correctAnswer: "a) Solid",
        },
        {
          question:
            "The solid form of water found in mountains and glaciers is known as ________.",
          optionA: "Vapor",
          optionB: "Liquid",
          optionC: "Ice",
          correctAnswer: "c) Ice",
        },
        {
          question:
            "In the water purification process, chlorine is used in the step known as ________.",
          optionA: "Filtration",
          optionB: "Sedimentation",
          optionC: "Chlorination",
          correctAnswer: "c) Chlorination",
        },
        {
          question:
            "Water vapor, present in the atmosphere, is in the ________ form.",
          optionA: "Solid",
          optionB: "Liquid",
          optionC: "Gaseous",
          correctAnswer: "c) Gaseous",
        },
        {
          question:
            "The water cycle involves the process of evaporation, condensation, and ________.",
          optionA: "Sublimation",
          optionB: "Precipitation",
          optionC: "Filtration",
          correctAnswer: "b) Precipitation",
        },
        {
          question:
            "The water purification step where water is left to stand in large tanks to settle down sand and dust particles is called ________.",
          optionA: "Filtration",
          optionB: "Chlorination",
          optionC: "Sedimentation",
          correctAnswer: "c) Sedimentation",
        },
        {
          question:
            "To conserve water, it is recommended to turn off the tap when ________.",
          optionA: "Cooking",
          optionB: "Not in use",
          optionC: "Taking a shower",
          correctAnswer: "b) Not in use",
        },
        {
          question: "The liquid form of water is found in ________.",
          optionA: "Mountains",
          optionB: "Oceans",
          optionC: "Glaciers",
          correctAnswer: "b) Oceans",
        },
        {
          question: "Water becomes potable after the process of ________.",
          optionA: "Precipitation",
          optionB: "Filtration",
          optionC: "Sublimation",
          correctAnswer: "b) Filtration",
        },
        {
          question: "Installing water meters is suggested to ________.",
          optionA: "Increase water usage",
          optionB: "Decrease water usage",
          optionC: "Monitor electricity usage",
          correctAnswer: "b) Decrease water usage",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Water is present in solid, liquid, and gaseous forms.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "Ice, found in mountains and glaciers, is the gaseous form of water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "Chlorination is the process of passing chlorine through filtered water during purification.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "Water vapor is the gaseous form of water present in the atmosphere.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "The water cycle involves the processes of evaporation, condensation, and precipitation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "Filtration is the step in water purification where water is left to stand in large tanks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "Conserving water includes turning off the tap when it is not in use.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question: "The liquid form of water is primarily found in oceans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question: "Water becomes potable after the process of sublimation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "Installing water meters is recommended to increase water usage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
      ],
   };
}

export var activityData;
