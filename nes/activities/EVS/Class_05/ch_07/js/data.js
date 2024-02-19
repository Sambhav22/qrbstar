export const chapter = "Chapter - 7: The World of Food";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What are the two main types of food mentioned in the text?",
            options: [
              "Fresh and dried",
              "Perishable and non-perishable",
              "Sweet and savory",
            ],
            answer: "Perishable and non-perishable",
          },
          {
            question: "Why do perishable foods need to be conserved?",
            options: [
              "They are expensive",
              "They have a bad taste",
              "They spoil quickly",
            ],
            answer: "They spoil quickly",
          },
          {
            question:
              "What is the primary reason for food spoilage mentioned in the text?",
            options: [
              "Exposure to air",
              "Germs landing on it",
              "Temperature fluctuations",
            ],
            answer: "Germs landing on it",
          },
          {
            question:
              "Which method involves cooking fruits or vegetables, sealing them in sterile cans or jars, and boiling the containers to kill or weaken any remaining bacteria?",
            options: ["Freezing", "Vacuum packing", "Canning"],
            answer: "Canning",
          },
          {
            question:
              "What does pasteurization involve to give a longer life to dairy products?",
            options: [
              "Boiling to a high temperature and sudden cooling",
              "Adding preservatives",
              "Drying",
            ],
            answer: "Boiling to a high temperature and sudden cooling",
          },
          {
            question: "What is a natural preservative mentioned in the text?",
            options: ["Sodium benzoate", "Salt", "Sugar"],
            answer: "Salt",
          },
          {
            question:
              "What is the purpose of adding preservatives like sodium benzoate to food?",
            options: [
              "To improve taste",
              "To reduce water activity",
              "To prevent or slow down spoilage",
            ],
            answer: "To prevent or slow down spoilage",
          },
          {
            question:
              "How can individuals contribute to preventing the wastage of food, according to the text?",
            options: [
              "Cook food in excess",
              "Store perishable items for a long time",
              "Eat according to appetite and avoid leaving food in the plate",
            ],
            answer:
              "Eat according to appetite and avoid leaving food in the plate",
          },
          {
            question:
              "What are the natural causes of food scarcity mentioned in the text?",
            options: [
              "Poverty and government actions",
              "Pests and locusts",
              "Droughts, floods, and diseases to crops",
            ],
            answer: "Droughts, floods, and diseases to crops",
          },
          {
            question:
              "What is mentioned as a man-made cause of food scarcity in the text?",
            options: ["Droughts", "Poverty", "Pests and locusts"],
            answer: "Poverty",
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
            question: "Food is very important for our ___________.",
            options: ["hobbies", "survival", "entertainment"],
            answer: "survival",
          },
          {
            question:
              "Perishable foods like vegetables, fruits, bread etc. need to be conserved ________ as it gets spoiled in a short span of time.",
            options: ["warm", "fresh", "frozen"],
            answer: "fresh",
          },
          {
            question:
              "Germs that cause food spoilage are too small to be seen by __________ eyes.",
            options: ["magnifying", "naked", "microscopic"],
            answer: "naked",
          },
          {
            question:
              "Food preservation is the process of treating and handling food to stop or slow down __________.",
            options: ["cooking", "growth", "decay"],
            answer: "decay",
          },
          {
            question:
              "Freezing foods lowers the temperature to levels that make the environment unsuitable for __________ growth.",
            options: ["bacterial", "microbial", "viral"],
            answer: "microbial",
          },
          {
            question:
              "Drying reduces water activity sufficiently to delay or prevent __________ growth.",
            options: ["bacterial", "viral", "fungal"],
            answer: "bacterial",
          },
          {
            question:
              "Preservatives like sodium benzoate are added to food to prevent or slow down __________.",
            options: ["spoilage", "cooking", "freezing"],
            answer: "spoilage",
          },
          {
            question:
              "Food is wrapped in polythene packages with no air in it to preserve items like cheese, meat, and cooked vegetables from __________.",
            options: ["drying", "decay", "contamination"],
            answer: "decay",
          },
          {
            question:
              "Milk is boiled to a high temperature for 10 minutes and then suddenly cooled to a very low temperature, a process known as __________.",
            options: ["boiling", "pasteurization", "freezing"],
            answer: "pasteurization",
          },
          {
            question:
              "To prevent the wastage of food, individuals should eat according to their __________ and avoid leaving food in the plate.",
            options: ["preferences", "appetite", "dietary restrictions"],
            answer: "appetite",
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
        true_false_questions: [
          {
            question:
              "Perishable foods like vegetables, fruits, and bread have a long life.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Germs that cause food spoilage can be seen with naked eyes.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Canning involves cooking fruits or vegetables, sealing them in sterile cans or jars, and boiling the containers.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Vacuum packing is a method of food preservation that involves adding preservatives like sodium benzoate.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Pasteurization involves boiling milk to a high temperature for 10 minutes and then suddenly cooling it to a very low temperature.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Droughts, floods, and diseases to crops are natural causes of food scarcity.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Poverty is not considered a man-made cause of food scarcity.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Adding sugar is a method of preserving fruits to make jams and jellies.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Freezing foods lowers the temperature to levels that make the environment suitable for microbial growth.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Wastage of food does not contribute to future problems, according to the text.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
