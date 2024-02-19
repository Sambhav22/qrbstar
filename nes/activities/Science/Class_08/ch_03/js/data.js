export const chapter = "Chapter - 3: Coal and Petroleum ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What are inexhaustible natural resources?",
          optionA: "Resources likely to get exhausted in the near future",
          optionB:
            "Resources present in unlimited quantity and not likely to get exhausted",
          optionC: "Resources that cannot be replenished",
          correctAnswer: "B",
        },
        {
          question:
            "Which of the following is an example of an inexhaustible natural resource?",
          optionA: "Coal",
          optionB: "Sunlight",
          optionC: "Petroleum",
          correctAnswer: "B",
        },
        {
          question: "What is the primary fossil fuel mentioned in the text?",
          optionA: "Coal",
          optionB: "Natural Gas",
          optionC: "Petroleum",
          correctAnswer: "C",
        },
        {
          question: "How is coal extracted from the earth?",
          optionA: "Drilling holes",
          optionB: "Destructive distillation",
          optionC: "Mining",
          correctAnswer: "C",
        },
        {
          question: "What is the hardest type of coal?",
          optionA: "Lignite",
          optionB: "Anthracite",
          optionC: "Bituminous",
          correctAnswer: "B",
        },
        {
          question: "What is the primary component of natural gas?",
          optionA: "Methane",
          optionB: "Carbon dioxide",
          optionC: "Hydrogen",
          correctAnswer: "A",
        },
        {
          question:
            "What does the term 'destructive distillation of coal' involve?",
          optionA: "Extracting coal from the earth",
          optionB: "Heating coal in the absence of air",
          optionC: "Refining coal in large plants",
          correctAnswer: "B",
        },
        {
          question: "How is petroleum extracted from the earth?",
          optionA: "Mining",
          optionB: "Drilling oil wells",
          optionC: "Destructive distillation",
          correctAnswer: "B",
        },
        {
          question: "What is the major use of natural gas in power generation?",
          optionA: "Source of hydrogen gas",
          optionB: "Compressed Natural Gas (CNG)",
          optionC: "Piped Natural Gas (PNG)",
          correctAnswer: "B",
        },
        {
          question:
            "What is the consequence of excessive carbon dioxide emissions according to the text?",
          optionA: "Formation of acid rain",
          optionB: "Greenhouse effect leading to global warming",
          optionC: "Depletion of natural gas reserves",
          correctAnswer: "B",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "Inexhaustible natural resources, also known as renewable resources, include __________, water, air, and soil.",
          optionA: "Fossil fuels",
          optionB: "Coal",
          optionC: "Sunlight",
          correctAnswer: "Sunlight",
        },
        {
          question:
            "Coal is primarily composed of carbon atoms but also contains elements like hydrogen, nitrogen, oxygen, and __________.",
          optionA: "Methane",
          optionB: "Sulphur",
          optionC: "Helium",
          correctAnswer: "Sulphur",
        },
        {
          question:
            "Petroleum is often referred to as 'black gold' due to its great __________ value.",
          optionA: "Historical",
          optionB: "Commercial",
          optionC: "Environmental",
          correctAnswer: "Commercial",
        },
        {
          question:
            "The major component of natural gas is __________, making it an ideal fuel for various purposes.",
          optionA: "Carbon dioxide",
          optionB: "Oxygen",
          optionC: "Methane",
          correctAnswer: "Methane",
        },
        {
          question:
            "Burning fossil fuels, such as coal and petroleum, releases toxic gases like carbon dioxide, carbon monoxide, sulphur dioxide, and __________ into the air.",
          optionA: "Nitrogen oxide",
          optionB: "Oxygen",
          optionC: "Helium",
          correctAnswer: "Nitrogen oxide",
        },
        {
          question:
            "To conserve fossil fuels, it is advised to use energy-efficient compact fluorescent lamps (CFLs) instead of traditional incandescent bulbs and follow the 4Rs principle: Reuse, Reduce, Recycle, and __________.",
          optionA: "Relocate",
          optionB: "Replace",
          optionC: "Recover",
          correctAnswer: "Recover",
        },
        {
          question:
            "Biogas is obtained through the anaerobic fermentation of cattle dung and domestic sewage in an underground tank known as a __________.",
          optionA: "Compressor",
          optionB: "Digester",
          optionC: "Refinery",
          correctAnswer: "Digester",
        },
        {
          question:
            "The residue left in the biogas digester after the evolution of biogas can be used as __________ in the fields.",
          optionA: "Fertilizer",
          optionB: "Pesticide",
          optionC: "Fuel",
          correctAnswer: "Fertilizer",
        },
        {
          question:
            "Natural gas obtained from the ocean floor can be easily transported through pipes and is known as __________.",
          optionA: "Liquid Natural Gas (LNG)",
          optionB: "Piped Natural Gas (PNG)",
          optionC: "Compressed Natural Gas (CNG)",
          correctAnswer: "Piped Natural Gas (PNG)",
        },
        {
          question:
            "To improve the efficiency of vehicles and conserve diesel/petrol, it is recommended to avoid fast starts, keep the engine properly tuned, and use __________ transport or carpooling.",
          optionA: "Private",
          optionB: "Public",
          optionC: "Air",
          correctAnswer: "Public",
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
            "Inexhaustible natural resources are likely to get exhausted in the near future by human activities.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
        {
          question: "Coal is an example of an inexhaustible natural resource.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Petroleum is often referred to as 'black gold' due to its great environmental value.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "True",
        },
        {
          question: "The major component of natural gas is carbon dioxide.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Burning fossil fuels releases gases like carbon dioxide, which does not contribute to the greenhouse effect.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Using energy-efficient compact fluorescent lamps (CFLs) is not recommended for conserving fossil fuels.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Biogas is obtained through the aerobic fermentation of cattle dung and domestic sewage.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
        {
          question:
            "The residue left in the biogas digester after the evolution of biogas can be used as fuel.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Natural gas obtained from the ocean floor is known as Liquid Natural Gas (LNG).",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
        {
          question:
            "To conserve fossil fuels, it is recommended to use private transport and avoid carpooling.",
          optionTrue: "False",
          optionFalse: "True",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
