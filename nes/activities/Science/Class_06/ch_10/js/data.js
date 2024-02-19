export const chapter = "Chapter - 10: Fun with Magnets";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the story behind the discovery of magnets?",
          optionA: "Discovered by a scientist in a laboratory",
          optionB: "Accidentally found by a shepherd boy named Magnes",
          optionC: "Invented by ancient civilizations",
          correctAnswer: "Accidentally found by a shepherd boy named Magnes",
        },
        {
          question:
            "What is the name given to rocks with magnetic properties discovered by the shepherd boy?",
          optionA: "Magnesium",
          optionB: "Magnetite",
          optionC: "Magnesite",
          correctAnswer: "Magnetite",
        },
        {
          question:
            "What is the term for the ability of a magnetic material to attract or repel magnetic particles?",
          optionA: "Magnetivity",
          optionB: "Magnetism",
          optionC: "Magneticity",
          correctAnswer: "Magnetism",
        },
        {
          question:
            "What is the purpose of the small piece of iron attached to the shepherd boy's stick in the discovery story?",
          optionA: "Attracting sheep and goats",
          optionB: "Controlling the herd",
          optionC: "Measuring magnetism",
          correctAnswer: "Controlling the herd",
        },
        {
          question:
            "Which materials are attracted by magnets and referred to as magnetic materials?",
          optionA: "Gold, silver, and copper",
          optionB: "Iron, steel, cobalt, and nickel",
          optionC: "Wood, plastic, and glass",
          correctAnswer: "Iron, steel, cobalt, and nickel",
        },
        {
          question:
            "What are the two types of magnets based on the retention of magnetism?",
          optionA: "North and South magnets",
          optionB: "Temporary and Permanent magnets",
          optionC: "Natural and Artificial magnets",
          correctAnswer: "Temporary and Permanent magnets",
        },
        {
          question: "What is a compass used for?",
          optionA: "Cooking",
          optionB: "Determining direction with a magnetic needle",
          optionC: "Measuring temperature",
          correctAnswer: "Determining direction with a magnetic needle",
        },
        {
          question:
            "What happens when like poles of two magnets are brought close together?",
          optionA: "They attract each other",
          optionB: "They repel each other",
          optionC: "They create a magnetic field",
          correctAnswer: "They repel each other",
        },
        {
          question: "In what applications are magnets commonly used?",
          optionA: "Lighting bulbs",
          optionB: "Inventing new materials",
          optionC: "Refrigerators, cranes, and computer hard disks",
          correctAnswer: "Refrigerators, cranes, and computer hard disks",
        },
        {
          question: "How can magnets be protected from losing their magnetism?",
          optionA: "Heating them strongly",
          optionB: "Hammering them",
          optionC: "Keeping them near electronic items",
          correctAnswer: "Keeping them near electronic items",
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
            "The discovery of magnets is attributed to the shepherd boy named __________.",
          options: ["Magnesium", "Magnes", "Magnetar"],
          answer: "Magnes",
        },
        {
          question:
            "The area around a magnet in which its effect can be experienced is called __________.",
          options: ["Magnetic Force", "Magnetic Zone", "Magnetic Field"],
          answer: "Magnetic Field",
        },
        {
          question:
            "Magnets can either pull or push objects that enter their __________.",
          options: ["Magnetic Range", "Magnetic Scope", "Magnetic Fields"],
          answer: "Magnetic Fields",
        },
        {
          question:
            "Materials like iron, steel, cobalt, and nickel are known as __________ materials.",
          options: ["Non-Magnetic", "Magnetic", "Ferrous"],
          answer: "Magnetic",
        },
        {
          question:
            "The magnets made from lodestone are called __________ magnets.",
          options: ["Artificial", "Natural", "Alloy"],
          answer: "Natural",
        },
        {
          question: "Temporary magnets are usually made of __________.",
          options: ["Steel", "Soft Iron", "Cobalt"],
          answer: "Soft Iron",
        },
        {
          question:
            "Ferrite magnets are made from powder of iron oxide and barium oxide (or strontium oxide) and are known by a trade name like __________.",
          options: ["Alnico", "Magnadur", "Alcomax"],
          answer: "Magnadur",
        },
        {
          question:
            "Magnets are commonly used in devices such as telephone, loudspeaker, radio, and television due to their __________.",
          options: ["Weakness", "Power", "Fragility"],
          answer: "Power",
        },
        {
          question:
            "A compass is used for determining direction by means of a __________ needle.",
          options: ["Magnetic North", "Steel", "Ferrous"],
          answer: "Magnetic Needle",
        },
        {
          question:
            "Magnets can lose their magnetism if they are subjected to strong __________.",
          options: ["Heat", "Pressure", "Light"],
          answer: "Heat",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Magnets can lose their magnetism if heated strongly.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "The area around a magnet where its effect can be experienced is known as the magnetic field.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Ferrite magnets are made from a powder of iron oxide and aluminum oxide.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "The oldest script in India was discovered in the seals of the Indus Valley Civilization.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question: "The Brahmi script is derived from the Devanagari script.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question: "Early Man used his fingers for counting numbers.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "The Hindu-Arabic system is the common system of writing numbers used in most parts of the world today.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Pictographs are an advanced form of hieroglyphics used in ancient writing systems.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "A compass is used for determining direction by means of a mechanical clock.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question: "The printing press was invented in the year 1355.",
          options: ["True", "False"],
          answer: "False",
        },
      ],
  };
}

export var activityData;
