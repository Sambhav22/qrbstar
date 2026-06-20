export const chapter = "Chapter - 11: waste";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is waste?",
          optionA: "Any material with increasing use",
          optionB: "Material with no longer use that is thrown away",
          optionC: "Material with potential future use",
          correctAnswer: "B) Material with no longer use that is thrown away",
        },
        {
          question:
            "Where is a significant amount of money spent globally in waste management?",
          optionA: "Developing countries",
          optionB: "Industrial countries",
          optionC: "Developed countries",
          correctAnswer: "A) Developing countries",
        },
        {
          question: "What are the chief sources of waste?",
          optionA: "Domestic waste, Municipal waste, Industrial waste",
          optionB: "Agricultural waste, Liquid waste, Gaseous waste",
          optionC: "Municipal waste, Agricultural waste, Solid waste",
          correctAnswer: "A) Domestic waste, Municipal waste, Industrial waste",
        },
        {
          question:
            "Which type of waste is harmful to animals and plants living near industries?",
          optionA: "Solid waste",
          optionB: "Gaseous waste",
          optionC: "Liquid waste",
          correctAnswer: "B) Gaseous waste",
        },
        {
          question: "What is an example of non-biodegradable waste?",
          optionA: "Newspaper",
          optionB: "Domestic sewage",
          optionC: "Polythene bags",
          correctAnswer: "C) Polythene bags",
        },
        {
          question: "What are the 4Rs of waste management?",
          optionA: "Reuse, Reduce, Recycle, Recover",
          optionB: "Recover, Replace, Refrain, Restore",
          optionC: "Reclaim, Renovate, Replenish, Reduce",
          correctAnswer: "A) Reuse, Reduce, Recycle, Recover",
        },
        {
          question: "What does the term 'biodegradable waste' refer to?",
          optionA: "Waste that cannot be broken down",
          optionB: "Waste broken down by microorganisms",
          optionC: "Waste that can only be broken down by chemicals",
          correctAnswer: "B) Waste broken down by microorganisms",
        },
        {
          question: "What is the primary goal of the 4Rs of waste management?",
          optionA: "Environmental degradation",
          optionB: "Resource exhaustion",
          optionC: "Sustainable waste handling",
          correctAnswer: "C) Sustainable waste handling",
        },
        {
          question:
            "How does recycling of paper contribute to environmental conservation?",
          optionA: "Consumes more trees",
          optionB: "Saves trees",
          optionC: "Has no impact on trees",
          correctAnswer: "B) Saves trees",
        },
        {
          question:
            "What is the environmental impact of recycling 100 aluminum cans?",
          optionA: "No impact",
          optionB: "Increases pollution",
          optionC: "Could light a room for two whole weeks",
          correctAnswer: "C) Could light a room for two whole weeks",
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
            "Waste is a material that has no longer use and is thrown away. The ____________ of waste is increasing day-by-day in most parts of the world.",
          options: ["Generation", "Disposal", "Production"],
          correctAnswer: "Generation",
        },
        {
          question:
            "Waste disposal facilities are less in developing countries, but much of the waste is diverted for ____________.",
          options: ["Incineration", "Landfill", "Recycling"],
          correctAnswer: "Recycling",
        },
        {
          question:
            "The chief sources of waste include domestic waste, municipal waste, industrial waste, and ____________.",
          options: [
            "Hazardous waste",
            "Electronic waste",
            "Agricultural waste",
          ],
          correctAnswer: "Agricultural waste",
        },
        {
          question:
            "Solid waste is solid in form, such as peels of fruits and vegetables, discarded metals, and ____________ objects.",
          options: ["Glass", "Plastic", "Organic"],
          correctAnswer: "Plastic",
        },
        {
          question:
            "Liquid waste from industries, such as chemicals mixed with fertilizers, can pollute ____________ when discharged into it.",
          options: ["Lakes", "Rivers", "Oceans"],
          correctAnswer: "Rivers",
        },
        {
          question:
            "Vehicles and industries release harmful gases, known as ____________ waste.",
          options: ["Atmospheric", "Gaseous", "Airborne"],
          correctAnswer: "Gaseous",
        },
        {
          question:
            "Biodegradable waste can be broken down to harmless substances by the action of ____________.",
          options: ["Machines", "Microorganisms", "Chemicals"],
          correctAnswer: "Microorganisms",
        },
        {
          question:
            "Non-biodegradable waste, such as polythene bags and plastics, does not undergo rotting or takes a very long time to ____________.",
          options: ["Decompose", "Evaporate", "Solidify"],
          correctAnswer: "Decompose",
        },
        {
          question:
            "The 4Rs of waste management include Reuse, Reduce, Recycle, and ____________.",
          options: ["Regenerate", "Renew", "Recover"],
          correctAnswer: "Recover",
        },
        {
          question:
            "Recycling 100 aluminum cans could light a room for ____________.",
          options: ["One day", "Two whole weeks", "One month"],
          correctAnswer: "Two whole weeks",
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
            "Waste disposal facilities in developing countries are more advanced than in developed countries.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Industrial waste is generally not harmful to animals and plants living near the industries.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Liquid waste from industries, when mixed with water, can lead to river pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Gaseous waste released by vehicles and industries is harmless to the environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Biodegradable waste includes materials like polythene bags and plastics.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The 4Rs of waste management stand for Reuse, Reduce, Recycle, and Replenish.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Recycling paper helps save trees, as 90% of paper is made from wood.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Non-biodegradable waste can easily be broken down into harmless substances.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The primary goal of the 4Rs of waste management is to promote environmental degradation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Recycling 100 aluminum cans has no significant impact on energy conservation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
