export const chapter = "Chapter - 8: Farmers on Farm";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is another name for Small Farmers in the text?",
            options: [
              "a) Marginal Farmers",
              "b) Commercial Farmers",
              "c) Dairy Farmers",
            ],
            answer: "a) Marginal Farmers",
          },
          {
            question:
              "What is the primary intention of Commercial Farmers according to the text?",
            options: [
              "a) Self-sufficiency",
              "b) Selling crops in the market",
              "c) Rearing milk-giving animals",
            ],
            answer: "b) Selling crops in the market",
          },
          {
            question: "What do Dairy Farmers primarily sell?",
            options: [
              "a) Fruits and vegetables",
              "b) Milk and milk products",
              "c) Crops and raw materials",
            ],
            answer: "b) Milk and milk products",
          },
          {
            question:
              "What type of farming involves both growing crops and rearing animals on a small piece of land?",
            options: [
              "a) Commercial Farming",
              "b) Mixed Farming",
              "c) Subsistence Farming",
            ],
            answer: "b) Mixed Farming",
          },
          {
            question: "Subsistence Farmers practice farming for:",
            options: [
              "a) Selling in the market",
              "b) Personal use and self-sufficiency",
              "c) Large-scale production",
            ],
            answer: "b) Personal use and self-sufficiency",
          },
          {
            question:
              "What is the first step in growing crops according to the text?",
            options: [
              "a) Harvesting",
              "b) Sowing Seeds",
              "c) Preparing the Soil",
            ],
            answer: "c) Preparing the Soil",
          },
          {
            question:
              "How is irrigation done in crop fields according to the text?",
            options: [
              "a) Using tube wells, wells, canals, tanks, and sprinklers",
              "b) Manually with a sickle",
              "c) Using big machines for large farms",
            ],
            answer: "a) Using tube wells, wells, canals, tanks, and sprinklers",
          },
          {
            question:
              "What is the purpose of adding fertilizers to the soil in crop cultivation?",
            options: [
              "a) To save crops from insects and pests",
              "b) To provide extra nutrients to the soil",
              "c) To cut down the crops during harvesting",
            ],
            answer: "b) To provide extra nutrients to the soil",
          },
          {
            question:
              "What is the process of separating grains from chaff called in agriculture?",
            options: ["a) Harvesting", "b) Threshing", "c) Winnowing"],
            answer: "c) Winnowing",
          },
          {
            question:
              "Which tool is used for spraying insecticides and pesticides on the field?",
            options: ["a) Iron plough", "b) Leveller", "c) Sprayer"],
            answer: "c) Sprayer",
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
        fill_in_the_blank_questions: [
          {
            question: "Small Farmers are also known as ____________.",
            options: [
              "a) Commercial Farmers",
              "b) Marginal Farmers",
              "c) Dairy Farmers",
            ],
            answer: "b) Marginal Farmers",
          },
          {
            question:
              "Commercial Farmers use modern machines, proper irrigation system, and high-quality ____________ for their crops.",
            options: ["a) Seeds", "b) Manures", "c) Pesticides"],
            answer: "b) Manures",
          },
          {
            question:
              "Dairy Farmers rear milk-giving animals such as cow, goat, buffalo, etc. and sell milk, cheese, ghee, and butter ____________.",
            options: ["a) Products", "b) Seeds", "c) Crops"],
            answer: "a) Products",
          },
          {
            question:
              "Mixed Farmers involve both growing crops and rearing animals on a ____________ piece of land.",
            options: ["a) Large", "b) Small", "c) Commercial"],
            answer: "b) Small",
          },
          {
            question:
              "Subsistence Farmers practice farming and cattle rearing for their own ____________ use.",
            options: ["a) Market", "b) Personal", "c) Commercial"],
            answer: "b) Personal",
          },
          {
            question:
              "The first step in growing crops is preparing the ____________.",
            options: ["a) Seeds", "b) Soil", "c) Fertilizers"],
            answer: "b) Soil",
          },
          {
            question:
              "Irrigation is done at regular intervals with the help of tube wells, wells, canals, tanks, and ____________.",
            options: ["a) Sprinklers", "b) Harvesting machines", "c) Oxen"],
            answer: "a) Sprinklers",
          },
          {
            question:
              "By adding fertilizers, soil gets extra ____________ for better crop production.",
            options: ["a) Insects", "b) Nutrients", "c) Water"],
            answer: "b) Nutrients",
          },
          {
            question:
              "The process of separating grains from chaff in agriculture is called ____________.",
            options: ["a) Harvesting", "b) Threshing", "c) Winnowing"],
            answer: "c) Winnowing",
          },
          {
            question:
              "__________ are used for spraying insecticides and pesticides on the field.",
            options: ["a) Iron plough", "b) Leveller", "c) Sprayer"],
            answer: "c) Sprayer",
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
        true_or_false_questions: [
          {
            question: "Small Farmers are also known as Marginal Farmers.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Commercial Farmers primarily grow crops for personal use.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Dairy Farmers rear animals like cow, goat, and buffalo.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Mixed Farmers only involve in growing crops and not rearing animals.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Subsistence Farmers practice farming and cattle rearing for their own personal use.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Preparing the soil is the first step in growing crops.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Irrigation is not necessary for crop fields.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Adding fertilizers to the soil does not contribute to better crop production.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Threshing is the process of separating grains from chaff.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Sprayer is used for watering crops in the field.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
