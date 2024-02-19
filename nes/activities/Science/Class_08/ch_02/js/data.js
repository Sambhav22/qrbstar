export const chapter = "Chapter - 2: Microorganisms Friend and Foe";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the size range of bacterial cells mentioned in the text?",
          optionA: "1 to 10 microns",
          optionB: "0.2 to 1000 microns",
          optionC: "100 to 500 microns",
          correctAnswer: "B) 0.2 to 1000 microns",
        },
        {
          question: "Which bacteria shape is responsible for causing cholera?",
          optionA: "Round (Cocci)",
          optionB: "Rod (Bacillus)",
          optionC: "Comma-shaped (Vibrio)",
          correctAnswer: "C) Comma-shaped (Vibrio)",
        },
        {
          question:
            "Which bacteria is responsible for fixing nitrogen in leguminous plants?",
          optionA: "Streptococci",
          optionB: "Rhizobium",
          optionC: "Staphylococci",
          correctAnswer: "B) Rhizobium",
        },
        {
          question:
            "What is the role of bacteria in the production of industrial chemicals and citric acid?",
          optionA: "Breaking down organic waste",
          optionB: "Fixing nitrogen",
          optionC: "Production of industrial chemicals and citric acid",
          correctAnswer:
            "D) Production of industrial chemicals and citric acid",
        },
        {
          question: "Which algae type contains chlorophyll and brown pigment?",
          optionA: "Red algae",
          optionB: "Green algae",
          optionC: "Brown algae",
          correctAnswer: "C) Brown algae",
        },
        {
          question:
            "Which unicellular algae is commonly used to study photosynthesis?",
          optionA: "Spirogyra",
          optionB: "Chlorella",
          optionC: "Ulothrix",
          correctAnswer: "B) Chlorella",
        },
        {
          question:
            "What is the primary role of yeast in food production mentioned in the text?",
          optionA: "Making antibiotics",
          optionB: "Producing alcohol and wine",
          optionC: "Decomposing dead tissues",
          correctAnswer: "B) Producing alcohol and wine",
        },
        {
          question: "Which protozoan causes amoebic dysentery?",
          optionA: "Giardia",
          optionB: "Plasmodium",
          optionC: "Entamoeba",
          correctAnswer: "C) Entamoeba",
        },
        {
          question: "How do viruses exist outside a living cell?",
          optionA: "In a crystallized state",
          optionB: "In a dormant state",
          optionC: "As virions",
          correctAnswer: "C) As virions",
        },
        {
          question:
            "What is the purpose of vaccination, as mentioned in the text?",
          optionA: "Immediate cure for diseases",
          optionB: "Boosting the immune system",
          optionC: "Treating existing infections",
          correctAnswer: "B) Boosting the immune system",
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
            "Bacteria are the first living beings to have appeared on earth, and they are __________ microorganisms.",
          optionA: "Multicellular",
          optionB: "Unicellular",
          optionC: "Photosynthetic",
          correctAnswer: "Unicellular",
        },
        {
          question: "The round-shaped bacteria are known as __________.",
          optionA: "Bacilli",
          optionB: "Spirilla",
          optionC: "Cocci",
          correctAnswer: "Cocci",
        },
        {
          question:
            "__________ causes typhoid and is an example of rod-shaped bacteria.",
          optionA: "Vibrio cholerae",
          optionB: "Bacillus typhosus",
          optionC: "Streptococci",
          correctAnswer: "Bacillus typhosus",
        },
        {
          question:
            "Algae contain __________, which makes them autotrophs capable of producing their own food.",
          optionA: "Chlorophyll",
          optionB: "Hemoglobin",
          optionC: "Melanin",
          correctAnswer: "Chlorophyll",
        },
        {
          question:
            "Unicellular green algae like Chlamydomonas use __________ for moving in water from one place to another.",
          optionA: "Cilia",
          optionB: "Flagella",
          optionC: "Pseudopodia",
          correctAnswer: "Flagella",
        },
        {
          question: "Fungi are non-green plants that lack __________.",
          optionA: "Chlorophyll",
          optionB: "Cellulose",
          optionC: "Starch",
          correctAnswer: "Chlorophyll",
        },
        {
          question:
            "__________ is an antibiotic made from the fungus Penicillium.",
          optionA: "Streptomycin",
          optionB: "Tetracycline",
          optionC: "Penicillin",
          correctAnswer: "Penicillin",
        },
        {
          question:
            "Protozoa move with the help of cilia, flagella, or pseudopodia and can be found in __________ places.",
          optionA: "Dry",
          optionB: "Air",
          optionC: "Damp",
          correctAnswer: "Damp",
        },
        {
          question:
            "Viruses consist of a single strand of nuclear matter (DNA or RNA) surrounded by a __________.",
          optionA: "Cytoplasm",
          optionB: "Protein coat",
          optionC: "Cell membrane",
          correctAnswer: "Protein coat",
        },
        {
          question:
            "The process by which Rhizobium fixes the deficiency of nitrogen in the soil is called __________.",
          optionA: "Nitrogen Assimilation",
          optionB: "Nitrogen Fixation",
          optionC: "Nitrogen Cycle",
          correctAnswer: "Nitrogen Fixation",
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
          question: "Bacteria are multicellular organisms.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Algae are incapable of photosynthesis.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Fungi lack chlorophyll.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Protozoa can move using cilia, flagella, or pseudopodia.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Viruses consist of a single strand of nuclear matter (DNA or RNA) surrounded by cytoplasm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Battle of Plassey in 1757 marked the beginning of direct British interference in India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Rhizobium bacteria fix the deficiency of nitrogen in the soil.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Moulds are a type of unicellular fungi.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Vaccines work by introducing live microbes into the body.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Food poisoning can result from consuming spoiled food with toxic substances produced by microbes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
