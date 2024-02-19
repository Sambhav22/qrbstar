export const chapter = "Chapter - 15: Fuels ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is the primary reason for classifying fuels into fossil fuels and alternate fuels?",
            options: [
              "A) Geographical origin",
              "B) Combustion rate",
              "C) Renewability",
            ],
            answer: "C) Renewability",
          },
          {
            question:
              'Which of the following is known as "black gold" and is primarily used to run cars and two-wheelers?',
            options: ["A) Coal", "B) Natural Gas", "C) Petroleum"],
            answer: "C) Petroleum",
          },
          {
            question:
              "Where is coal found in India according to the given text?",
            options: [
              "A) Kerala and Karnataka",
              "B) Jharkhand, Odisha, Chhattisgarh, West Bengal, and Madhya Pradesh",
              "C) Punjab and Haryana",
            ],
            answer:
              "B) Jharkhand, Odisha, Chhattisgarh, West Bengal, and Madhya Pradesh",
          },
          {
            question:
              "Which fossil fuel is lighter than oil and is found above the layers of petroleum deposits?",
            options: [
              "A) Compressed Natural Gas (CNG)",
              "B) Liquified Petroleum Gas (LPG)",
              "C) Natural Gas",
            ],
            answer: "C) Natural Gas",
          },
          {
            question:
              "What is the advantage of fossil fuels mentioned in the text?",
            options: [
              "A) They are renewable resources.",
              "B) They release oxygen during combustion.",
              "C) They can generate a large amount of electricity at a single location.",
            ],
            answer:
              "C) They can generate a large amount of electricity at a single location.",
          },
          {
            question:
              "What environmental issue is associated with the burning of fossil fuels, according to the text?",
            options: [
              "A) Ozone layer depletion",
              "B) Soil erosion",
              "C) Greenhouse effect and global warming",
            ],
            answer: "C) Greenhouse effect and global warming",
          },
          {
            question:
              "Which renewable resource is created by powering electrical generators with the heat of the earth and subterranean hot water reservoirs?",
            options: [
              "A) Biomass Energy",
              "B) Geothermal Energy",
              "C) Wind Energy",
            ],
            answer: "B) Geothermal Energy",
          },
          {
            question:
              "What is the source of biomass energy, as mentioned in the text?",
            options: [
              "A) Sunlight",
              "B) Wind",
              "C) Organic material from plants or animals",
            ],
            answer: "C) Organic material from plants or animals",
          },
          {
            question:
              "How does hydropower generate electricity, according to the text?",
            options: [
              "A) By harnessing the energy of ocean currents",
              "B) By converting solar energy into electricity",
              "C) By using the mechanical energy from flowing water",
            ],
            answer: "C) By using the mechanical energy from flowing water",
          },
          {
            question:
              "What is the recommended step in the text to save fuel for short distances?",
            options: [
              "A) Use public transports",
              "B) Use eco-friendly fuels",
              "C) Use bicycles instead of vehicles running on fuel",
            ],
            answer: "C) Use bicycles instead of vehicles running on fuel",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        questions: [
          {
            question: 'Petroleum is also known as "____ ____."',
            options: ["A) Liquid Gold", "B) Black Gold", "C) Golden Oil"],
            answer: "B) Black Gold",
          },
          {
            question:
              "Coal is used for various purposes such as cooking, heating, and generating _____________.",
            options: ["A) Wind energy", "B) Solar power", "C) Electricity"],
            answer: "C) Electricity",
          },
          {
            question:
              "Natural gas is considered one of the cleanest, safest, and most useful energy sources, constituting about __% of the world's total energy.",
            options: ["A) 10%", "B) 23%", "C) 50%"],
            answer: "B) 23%",
          },
          {
            question:
              "Liquified Petroleum Gas (LPG) is commonly used at homes for ___________.",
            options: ["A) Heating", "B) Cooking", "C) Generating electricity"],
            answer: "B) Cooking",
          },
          {
            question:
              "Compressed Natural Gas (CNG) is known for causing less air pollution and is commonly used to run ___________.",
            options: [
              "A) Ships",
              "B) Trains",
              "C) Auto-rickshaws, cars, and buses",
            ],
            answer: "C) Auto-rickshaws, cars, and buses",
          },
          {
            question:
              "Fossil fuels, such as petroleum and coal, are classified as ____________ sources because they deplete at faster rates and take millions of years to form.",
            options: ["A) Renewable", "B) Sustainable", "C) Non-renewable"],
            answer: "C) Non-renewable",
          },
          {
            question:
              "Advantages of fossil fuels include their ability to generate a large amount of electricity at a single location and their ____________.",
            options: [
              "A) Renewable nature",
              "B) Low cost",
              "C) Easy extraction",
            ],
            answer: "B) Low cost",
          },
          {
            question:
              "Burning fossil fuels releases carbon dioxide, contributing to the ____________ effect and increasing global warming.",
            options: ["A) Greenhouse", "B) Cooling", "C) Ozone layer"],
            answer: "A) Greenhouse",
          },
          {
            question:
              "Geothermal power is created by powering electrical generators with the heat of the earth and naturally occurring subterranean hot water ____________.",
            options: ["A) Pools", "B) Reservoirs", "C) Streams"],
            answer: "B) Reservoirs",
          },
          {
            question:
              "Biomass energy is derived from organic material from plants or animals, including wood, sewage, and ____________ (which comes from corn or other plants).",
            options: ["A) Natural gas", "B) Ethanol", "C) Petroleum"],
            answer: "B) Ethanol",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "Coal is a renewable source of energy.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Petroleum is commonly referred to as 'Golden Oil.'",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Natural gas contributes about 15% of the world's total energy.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Liquified Petroleum Gas (LPG) is primarily used for heating homes.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Compressed Natural Gas (CNG) is heavier than oil.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Fossil fuels are considered sustainable sources of energy.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Geothermal power is generated by harnessing the heat of the sun.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Biomass energy is derived from non-organic materials.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Hydropower uses the mechanical energy from flowing water to generate electricity.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Wind energy is generated by converting solar energy into electricity.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
