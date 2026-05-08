export const chapter = "Chapter - 23: Letter and application";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What gift did Rayansh receive from his uncle for his birthday?",
          optionA: "A bicycle",
          optionB: "A camera",
          optionC: "A laptop",
          correctAnswer: "A camera",
        },
        {
          question:
            "Who congratulated Mayuri for securing the first position in school?",
          optionA: "Aarohi",
          optionB: "Shanaya",
          optionC: "Kabir",
          correctAnswer: "Aarohi",
        },
        {
          question:
            "What is the subject of Veer Singhania's letter to the Editor of Young Times?",
          optionA: "Celebration of a festival",
          optionB: "Pitiable condition of sanitation",
          optionC: "Outbreak of dengue",
          correctAnswer: "Pitiable condition of sanitation",
        },
        {
          question: "What problem does Kabir Oberoi address in his letter?",
          optionA: "Malfunctioning computer",
          optionB: "Broken television",
          optionC: "Malfunctioning food processor",
          correctAnswer: "Malfunctioning food processor",
        },
        {
          question:
            "Who is requesting leave to attend their elder brother's marriage ceremony?",
          optionA: "Shanaya Verma",
          optionB: "Rishi Walia",
          optionC: "Ridhima Mehra",
          correctAnswer: "Shanaya Verma",
        },
        {
          question: "What is Rishi Walia's request to the Principal about?",
          optionA: "Inclusion in the school cricket team",
          optionB: "Permission to organize a football match",
          optionC: "Request for extra study materials",
          correctAnswer: "Inclusion in the school cricket team",
        },
        {
          question:
            "Who desires to organize a friendly football match with the school team of Columbus Public School?",
          optionA: "Rishi Walia",
          optionB: "Ridhima Mehra",
          optionC: "Virat Singh",
          correctAnswer: "Ridhima Mehra",
        },
        {
          question:
            "What issue does Virat Singh address in his application to the Health Officer?",
          optionA: "Outbreak of measles",
          optionB: "Outbreak of dengue",
          optionC: "Request for vaccination",
          correctAnswer: "Outbreak of dengue",
        },
        {
          question: "Where does Shanaya Verma study?",
          optionA: "Shiv Public School",
          optionB: "D.A.V. Inter College",
          optionC: "S.D. Public School",
          correctAnswer: "Shiv Public School",
        },
        {
          question:
            "Who is the football captain of the school team in Ridhima Mehra's letter?",
          optionA: "Shanaya Verma",
          optionB: "Virat Singh",
          optionC: "Ridhima Mehra",
          correctAnswer: "Ridhima Mehra",
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
            "Rayansh received a _______ from his uncle for his birthday.",
          options: ["A) bicycle", "B) camera", "C) laptop"],
          correctAnswer: "B) camera",
        },
        {
          question: "Mayuri secured the _______ position in school.",
          options: ["A) first", "B) second", "C) third"],
          correctAnswer: "A) first",
        },
        {
          question:
            "Veer Singhania's letter highlights the _______ condition of sanitation in the colony.",
          options: ["A) good", "B) pitiable", "C) satisfactory"],
          correctAnswer: "B) pitiable",
        },
        {
          question:
            "Kabir Oberoi addressed the issue of a malfunctioning _______.",
          options: ["A) computer", "B) television", "C) food processor"],
          correctAnswer: "C) food processor",
        },
        {
          question:
            "Shanaya Verma requested _______ days' leave to attend her elder brother's marriage ceremony.",
          options: ["A) one", "B) two", "C) three"],
          correctAnswer: "B) two",
        },
        {
          question:
            "Rishi Walia requested inclusion of his name in the school _______ team.",
          options: ["A) cricket", "B) football", "C) basketball"],
          correctAnswer: "A) cricket",
        },
        {
          question:
            "Ridhima Mehra desired to organize a friendly football match with the school team of _______ Public School.",
          options: ["A) Shiv", "B) D.A.V. Inter", "C) Columbus"],
          correctAnswer: "C) Columbus",
        },
        {
          question:
            "Virat Singh addressed the outbreak of _______ in his locality.",
          options: ["A) measles", "B) dengue", "C) malaria"],
          correctAnswer: "B) dengue",
        },
        {
          question: "Shanaya Verma studies at _______ Public School.",
          options: ["A) Shiv", "B) D.A.V. Inter", "C) S.D. Public"],
          correctAnswer: "A) Shiv",
        },
        {
          question: "Ridhima Mehra is the _______ of the school football team.",
          options: ["A) captain", "B) coach", "C) manager"],
          correctAnswer: "A) captain",
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
            "Rayansh received a camera as a birthday gift from his uncle.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Mayuri secured the second position in school.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Veer Singhania's letter highlights the satisfactory condition of sanitation in the colony.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Kabir Oberoi addressed the issue of a malfunctioning computer in his letter.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Shanaya Verma requested three days' leave to attend her elder brother's marriage ceremony.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Rishi Walia requested inclusion of his name in the school football team.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Ridhima Mehra desired to organize a friendly football match with the school team of D.A.V. Inter Public School.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Virat Singh addressed the outbreak of measles in his locality.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Shanaya Verma studies at S.D. Public School.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Ridhima Mehra is the coach of the school football team.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
