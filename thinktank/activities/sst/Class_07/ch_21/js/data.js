export const chapter =
  "Chapter - 21: Life in Tropical and Subtropical Regions ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Where is the tropical region located?",
        optionA: "Between 10° N and 30° N",
        optionB: "Between 10° S and 30° S",
        optionC: "Between 10° N and 10° S",
        correctAnswer: "C) Between 10° N and 10° S",
      },
      {
        question:
          "Which river is the main river in the world's largest river system in the tropical region?",
        optionA: "Nile River",
        optionB: "Ganges River",
        optionC: "Amazon River",
        correctAnswer: "C) Amazon River",
      },
      {
        question: "What is the average annual rainfall in the Amazon basin?",
        optionA: "Less than 100 cm",
        optionB: "Around 150 cm",
        optionC: "Well over 250 cm",
        correctAnswer: "C) Well over 250 cm",
      },
      {
        question:
          "Which region is characterized by hot summers, wet monsoon seasons, and cold winters?",
        optionA: "Polar region",
        optionB: "Tropical region",
        optionC: "Subtropical region",
        correctAnswer: "C) Subtropical region",
      },
      {
        question:
          "Which two rivers form the world's largest delta in the subtropical region?",
        optionA: "Nile and Amazon",
        optionB: "Ganga and Yamuna",
        optionC: "Ganga and Brahmaputra",
        correctAnswer: "C) Ganga and Brahmaputra",
      },
      {
        question:
          "What type of vegetation is found in the Sundarbans delta in the subtropical region?",
        optionA: "Coniferous trees",
        optionB: "Tropical deciduous trees",
        optionC: "Mangrove forests",
        correctAnswer: "C) Mangrove forests",
      },
      {
        question: "Which valley is a case study in the subtropical region?",
        optionA: "Nile Valley",
        optionB: "Ganga-Brahmaputra Valley",
        optionC: "Mississippi Valley",
        correctAnswer: "B) Ganga-Brahmaputra Valley",
      },
      {
        question:
          "What is the staple food of the tribal people in the Amazon basin?",
        optionA: "Wheat",
        optionB: "Cassava (manioc)",
        optionC: "Rice",
        correctAnswer: "B) Cassava (manioc)",
      },
      {
        question:
          "Which project aims to clean the Ganga river in the subtropical region?",
        optionA: "Green Revolution",
        optionB: "Clean Ganges Initiative",
        optionC: "Namami Gange Project",
        correctAnswer: "C) Namami Gange Project",
      },
      {
        question:
          "What is the chief occupation of tribal people in the Amazon basin?",
        optionA: "Agriculture",
        optionB: "Fishing and hunting",
        optionC: "Industrial work",
        correctAnswer: "B) Fishing and hunting",
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
          "The tropical region lies very close to the Equator between __° N and __° S.",
        options: ["A) 10, 20", "B) 20, 30", "C) 10, 10"],
        correctAnswer: "C) 10, 10",
      },
      {
        question:
          "The Amazon River, with a length of 6,556 km, is the main river in the world's largest river system, and its basin area extends over about __ sq km.",
        options: ["A) 60,00,000", "B) 70,00,000", "C) 80,00,000"],
        correctAnswer: "B) 70,00,000",
      },
      {
        question:
          "The average annual rainfall in the Amazon basin is well over __ cm.",
        options: ["A) 150", "B) 200", "C) 250"],
        correctAnswer: "C) 250",
      },
      {
        question:
          "The climatic conditions in the Amazon basin are suitable for the growth of dense rainforests, also called __.",
        options: ["A) Savannas", "B) Tundras", "C) Selvas"],
        correctAnswer: "C) Selvas",
      },
      {
        question:
          "The Ganga-Brahmaputra basin is blessed with rich flora and fauna. While the hilly areas have coniferous trees, the plains are covered with tropical deciduous trees, such as teak, sal, and __.",
        options: ["A) Pine", "B) Mango", "C) Peepal"],
        correctAnswer: "C) Peepal",
      },
      {
        question:
          "The Ganga and Brahmaputra rivers form the world's largest delta, called the __ Delta.",
        options: ["A) Ganges", "B) Sundarban", "C) Amazon"],
        correctAnswer: "B) Sundarban",
      },
      {
        question:
          "The river systems created by the Ganga and Brahmaputra have made the entire region abundant in water. The climate is characterized by hot summers, wet monsoon season, and cold __.",
        options: ["A) Springs", "B) Autumns", "C) Winters"],
        correctAnswer: "C) Winters",
      },
      {
        question:
          "The chief crops in the Ganga-Brahmaputra valley are rice, wheat, maize, oilseeds, sugarcane, gram, jute, and __.",
        options: ["A) Coffee", "B) Tea", "C) Cotton"],
        correctAnswer: "B) Tea",
      },
      {
        question:
          "The waste from industrial towns and industries is causing pollution in the Ganga and Yamuna rivers. The government has taken up the __ Project to clean the Ganga.",
        options: ["A) Clean Water", "B) Swachh Bharat", "C) Namami Gange"],
        correctAnswer: "C) Namami Gange",
      },
      {
        question:
          "Both the Ganga and the Brahmaputra are navigable, so small ships, trawlers, and boats ply in them. Increasing population has led to major problems of pollution and __.",
        options: ["A) Traffic", "B) Deforestation", "C) Erosion"],
        correctAnswer: "A) Traffic",
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
          "The tropical region lies between 10° N and 10° S, close to the Equator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Amazon River is the main river in the world's largest river system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The average annual rainfall in the Amazon basin is less than 200 cm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The climate in the Amazon basin is characterized by cold winters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Ganga-Brahmaputra basin is known for its coniferous trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Ganga and Brahmaputra rivers form the Sundarban Delta.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The climate in the Ganga-Brahmaputra valley is characterized by hot summers and dry winters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The chief crops in the Ganga-Brahmaputra valley include coffee and cocoa.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Namami Gange Project aims to increase pollution in the Ganga.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Both the Ganga and the Brahmaputra are unnavigable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
