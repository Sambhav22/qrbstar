export const chapter = "Chapter - 13: Recycling Wastewater ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is sewage primarily composed of?",
          optionA: "Solid waste",
          optionB: "Liquid waste",
          optionC: "Gaseous waste",
          correctAnswer: "B) Liquid waste",
        },
        {
          question: "What is the purpose of a sewerage system?",
          optionA: "To produce sewage",
          optionB: "To release raw sewage into water bodies",
          optionC: "To transport and treat sewage",
          correctAnswer: "C) To transport and treat sewage",
        },
        {
          question:
            "What is the primary difference between domestic sewage and industrial sewage?",
          optionA: "Domestic sewage contains toxic chemicals",
          optionB: "Industrial sewage contains human and animal waste",
          optionC:
            "Industrial sewage contains toxic chemicals, acids, and metals",
          correctAnswer:
            "C) Industrial sewage contains toxic chemicals, acids, and metals",
        },
        {
          question:
            "In the wastewater treatment process, what is the purpose of the tertiary stage?",
          optionA: "Settling organic matter",
          optionB: "Removal of contaminants",
          optionC: "Final cleansing and disinfection",
          correctAnswer: "C) Final cleansing and disinfection",
        },
        {
          question:
            "What is the by-product of the sludge treatment process in sewage treatment?",
          optionA: "Biogas",
          optionB: "Activated sludge",
          optionC: "Clarified water",
          correctAnswer: "A) Biogas",
        },
        {
          question:
            "What are the two main sources of water pollution mentioned in the text?",
          optionA: "Drinking water and wastewater",
          optionB: "Point sources and non-point sources",
          optionC: "Sewage and sludge",
          correctAnswer: "B) Point sources and non-point sources",
        },
        {
          question: "Why are pesticides considered a cause of water pollution?",
          optionA: "They make water poisonous for aquatic life",
          optionB: "They promote the growth of algae",
          optionC: "They serve as food for algae",
          correctAnswer: "A) They make water poisonous for aquatic life",
        },
        {
          question:
            "What is the major cause of diseases and deaths in many developing countries mentioned in the text?",
          optionA: "Lack of sanitation",
          optionB: "Contaminated water",
          optionC: "Air pollution",
          correctAnswer: "B) Contaminated water",
        },
        {
          question:
            "How is sanitation improved without a conventional sewage disposal system, as mentioned in the text?",
          optionA: "By using pesticides",
          optionB: "By setting up septic tanks",
          optionC: "By releasing raw sewage",
          correctAnswer: "B) By setting up septic tanks",
        },
        {
          question:
            "What is the purpose of a composting toilet, as described in the text?",
          optionA: "To release raw sewage",
          optionB: "To treat excreta through aerobic decomposition",
          optionC: "To store sludge",
          correctAnswer: "B) To treat excreta through aerobic decomposition",
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
            "Sewage is a general term used for all types of __________ waste, most of which is water.",
          optionA: "Solid",
          optionB: "Gaseous",
          optionC: "Liquid",
          correctAnswer: "C) Liquid",
        },
        {
          question:
            "Rainwater that has been washed off from the roads and rooftops carrying dirt and other harmful substances is also included in __________.",
          optionA: "Sewerage",
          optionB: "Sludge",
          optionC: "Sewage",
          correctAnswer: "C) Sewage",
        },
        {
          question:
            "Domestic sewage contains human and animals wastes including faeces and urine, kitchen waste, soap, detergent, and disinfectants. Industrial sewage mostly contains a lot of toxic chemicals, acids, alkalies, and __________.",
          optionA: "Microorganisms",
          optionB: "Metals",
          optionC: "Nutrients",
          correctAnswer: "B) Metals",
        },
        {
          question:
            "Sewage produced from homes and industries goes through a system of pipes called __________.",
          optionA: "Ducts",
          optionB: "Sewerage",
          optionC: "Sewer",
          correctAnswer: "C) Sewer",
        },
        {
          question:
            "Manholes are built at ground level at every 50-60 m for the cleaning and maintenance of __________.",
          optionA: "Sewer pipes",
          optionB: "Sewer lines",
          optionC: "Sewage treatment plants",
          correctAnswer: "B) Sewer lines",
        },
        {
          question:
            "In wastewater treatment, four stages are involved: Preliminary, Primary, __________, and Tertiary.",
          optionA: "Secondary",
          optionB: "Final",
          optionC: "Quaternary",
          correctAnswer: "A) Secondary",
        },
        {
          question:
            "The clarified water is sent to the __________ tank where air is pumped, allowing the growth of aerobic bacteria.",
          optionA: "Settling",
          optionB: "Aeration",
          optionC: "Disinfection",
          correctAnswer: "B) Aeration",
        },
        {
          question:
            "During the sewage treatment, impurities settled at the bottom are called __________.",
          optionA: "Sludge",
          optionB: "Effluent",
          optionC: "Contaminants",
          correctAnswer: "A) Sludge",
        },
        {
          question:
            "Existence of life on earth cannot be imagined without water. Our major rivers like the Ganga and the Yamuna receive tonnes of untreated sewage daily, thereby making water unfit for __________ and other domestic uses.",
          optionA: "Recreation",
          optionB: "Agriculture",
          optionC: "Drinking",
          correctAnswer: "C) Drinking",
        },
        {
          question:
            "Sanitation can be improved even without a conventional sewage disposal system. A septic tank consists of an underground concrete tank where anaerobic bacteria digest the faecal matter and turn it into odour-free __________.",
          optionA: "Sludge",
          optionB: "Effluent",
          optionC: "Biogas",
          correctAnswer: "A) Sludge",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Sewage is only produced by homes and industries.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Rainwater that has been washed off from the roads and rooftops carrying dirt and other harmful substances is not included in sewage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Industrial sewage mostly contains a lot of non-toxic substances.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Sewer lines carry the sewage to the sewage treatment plant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The tertiary stage in wastewater treatment involves preliminary cleaning of sewage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Raw sludge put into sludge digesters produces electricity as a by-product.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Water pollution is caused only by human activities and not by natural factors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Pesticides, when washed by rainwater, do not pollute water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Eutrophication is caused by the excessive use of fertilizers in farmlands and gardens.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Contaminated water that is consumed may result in water-borne diseases including hepatitis, typhoid, cholera, and dysentery.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
