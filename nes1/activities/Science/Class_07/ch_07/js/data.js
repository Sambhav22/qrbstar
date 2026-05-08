export const chapter = "Chapter - 7: Transportation of Substances ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What are the three main components of the human circulatory system?",
            options: [
              "Blood vessels, veins, capillaries",
              "Blood, respiratory system, kidneys",
              "Blood, blood vessels, heart",
            ],
            answer: "C) Blood, blood vessels, heart",
          },
          {
            question:
              "What is the primary function of red blood cells (RBCs) in the circulatory system?",
            options: [
              "Produce antibodies",
              "Transport oxygen",
              "Fight against infections",
            ],
            answer: "B) Transport oxygen",
          },
          {
            question:
              "Where does the exchange of substances between blood and body cells occur in the circulatory system?",
            options: ["Arteries", "Capillaries", "Veins"],
            answer: "B) Capillaries",
          },
          {
            question:
              "What is the function of platelets in the circulatory system?",
            options: [
              "Transport oxygen",
              "Form clots to prevent blood loss",
              "Fight against infections",
            ],
            answer: "B) Form clots to prevent blood loss",
          },
          {
            question:
              "Which type of blood vessels carry oxygenated blood from the heart to other parts of the body?",
            options: ["Arteries", "Veins", "Capillaries"],
            answer: "A) Arteries",
          },
          {
            question:
              "How does the human heart contribute to the circulatory system?",
            options: [
              "It filters blood",
              "It pumps blood to all parts of the body",
              "It produces red blood cells",
            ],
            answer: "B) It pumps blood to all parts of the body",
          },
          {
            question:
              "What is the rhythmic contraction and relaxation of the heart chambers that produces the heartbeat called?",
            options: ["Pulse", "Circulation", "Cardiac cycle"],
            answer: "C) Cardiac cycle",
          },
          {
            question:
              "Which organ is the main site of nitrogenous waste removal in the human excretory system?",
            options: ["Liver", "Lungs", "Kidneys"],
            answer: "C) Kidneys",
          },
          {
            question: "What is the primary role of the stomata in plants?",
            options: [
              "Transport water",
              "Release oxygen",
              "Remove excess minerals",
            ],
            answer: "B) Release oxygen",
          },
          {
            question:
              "How do plants lose water in a process similar to sweating in humans?",
            options: ["Photosynthesis", "Transpiration", "Osmosis"],
            answer: "B) Transpiration",
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
        fillInTheBlankQuestions: [
          {
            question:
              "The three main components of the human circulatory system are ____, ____, and heart.",
            options: [
              "lungs, blood vessels",
              "blood, respiratory system",
              "blood, blood vessels",
            ],
            answer: "blood, blood vessels",
          },
          {
            question:
              "Red blood cells (RBCs) are filled with a red colored substance called ____. It is responsible for carrying oxygen.",
            options: ["hemoglobin", "plasma", "platelets"],
            answer: "hemoglobin",
          },
          {
            question:
              "Arteries carry oxygen-rich blood from the heart to other parts of the body, while veins carry ____ blood back to the heart.",
            options: ["oxygenated", "deoxygenated", "carbon dioxide-rich"],
            answer: "deoxygenated",
          },
          {
            question:
              "The rhythmic contraction and relaxation of the heart chambers that produce the heartbeat are collectively known as the ____.",
            options: ["circulation", "cardiac cycle", "pulse"],
            answer: "cardiac cycle",
          },
          {
            question:
              "The main organs of excretion in the human body are the ____. They filter out excess water, salts, and urea from the blood.",
            options: ["lungs", "skin", "kidneys"],
            answer: "kidneys",
          },
          {
            question:
              "Plants absorb water and minerals through root hair by the process of ____. This involves the movement of water from an area of higher concentration to an area of lower concentration.",
            options: ["osmosis", "transpiration", "conduction"],
            answer: "osmosis",
          },
          {
            question:
              "The vascular tissue responsible for transporting food prepared by the leaves in plants is called ____.",
            options: ["xylem", "phloem", "stomata"],
            answer: "phloem",
          },
          {
            question:
              "Plants lose water through the process of ____, which is similar to sweating in humans.",
            options: ["photosynthesis", "transpiration", "conduction"],
            answer: "transpiration",
          },
          {
            question:
              "The main organs for excretion in humans, such as skin, liver, and lungs, play a role in removing waste products, including excess amino acids expelled as ____. This process occurs in the liver.",
            options: ["urea", "hemoglobin", "plasma"],
            answer: "urea",
          },
          {
            question:
              "Translocation, the movement of glucose in plants from leaves to other parts, is performed by the vascular tissue known as ____. It is made up of cells called sieve tubes.",
            options: ["xylem", "phloem", "stomata"],
            answer: "phloem",
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
        trueFalseQuestions: [
          {
            question:
              "The circulatory system in humans consists of a muscular pump and several networks of vessels.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Plasma is the solid part of the blood and contains dissolved gases, nutrients, wastes, salts, and proteins.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "White blood cells (WBCs) provide immunity to the body against diseases and infections.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Veins carry oxygen-rich blood from different parts of the body to the heart.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The human heart has two sets of pumping chambers, the atrium and the ventricle, for a total of four separate chambers.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The kidneys are the main organs of excretion, removing nitrogenous wastes from the human body.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Skin, liver, and lungs are organs that assist in excretion by releasing toxic wastes.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Plants absorb water and minerals through stomata present in the leaves.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Xylem is the vascular tissue responsible for transporting food in plants.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Transpiration in plants is similar to sweating in humans and helps cool the plants.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
