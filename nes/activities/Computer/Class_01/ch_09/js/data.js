export const chapter = "Chapter - 9: Introduction to Artificial Intelligence ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which of the following are considered natural things?",
            options: [
              "Table and Chair",
              "Mountains and Rivers",
              "Cars and Buildings",
            ],
            answer: "Mountains and Rivers",
          },
          {
            question: "What defines man-made things?",
            options: [
              "They are gifts of nature",
              "They are created by humans",
              "They cannot be understood easily",
            ],
            answer: "They are created by humans",
          },
          {
            question: "Which category do plants and animals belong to?",
            options: ["Man-made things", "Natural things", "Artificial things"],
            answer: "Natural things",
          },
          {
            question: "What defines intelligence according to the text?",
            options: [
              "The ability to create mountains and rivers",
              "The ability to think, understand, and learn",
              "The ability to fly and swim",
            ],
            answer: "The ability to think, understand, and learn",
          },
          {
            question: "Clouds are classified as:",
            options: [
              "Man-made creations",
              "Artificial things",
              "Natural elements",
            ],
            answer: "Natural elements",
          },
          {
            question: "Which of the following is NOT a man-made thing?",
            options: ["Car", "River", "Chair"],
            answer: "River",
          },
          {
            question: "What distinguishes natural things from man-made things?",
            options: [
              "Natural things cannot be understood by humans",
              "Man-made things are gifts of nature",
              "Natural things are not created by humans",
            ],
            answer: "Natural things are not created by humans",
          },
          {
            question:
              "What term is used interchangeably with 'artificial things' in the text?",
            options: [
              "Intelligent creations",
              "Man-made things",
              "Natural elements",
            ],
            answer: "Man-made things",
          },
          {
            question: "Which category do mountains belong to?",
            options: ["Man-made things", "Artificial things", "Natural things"],
            answer: "Natural things",
          },
          {
            question: "What is the defining characteristic of man-made things?",
            options: [
              "They are created using natural resources",
              "They cannot be understood easily",
              "They are products of human creation",
            ],
            answer: "They are products of human creation",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question: "Natural things are found in ___________.",
            options: ["Cities", "Nature", "Laboratories"],
            answer: "Nature",
          },
          {
            question: "Man-made things are created by ___________.",
            options: ["Animals", "Nature", "Humans"],
            answer: "Humans",
          },
          {
            question: "Clouds are classified as ___________ elements.",
            options: ["Artificial", "Natural", "Industrial"],
            answer: "Natural",
          },
          {
            question:
              "Intelligence is the ability to think, understand, and ___________.",
            options: ["Create", "Mimic", "Learn"],
            answer: "Learn",
          },
          {
            question:
              "Mountains and rivers are examples of ___________ things.",
            options: ["Artificial", "Natural", "Mechanical"],
            answer: "Natural",
          },
          {
            question: "Man-made things are also known as ___________ things.",
            options: ["Artificial", "Organic", "Supernatural"],
            answer: "Artificial",
          },
          {
            question:
              "Plants and animals are categorized as ___________ things.",
            options: ["Artificial", "Natural", "Synthetical"],
            answer: "Natural",
          },
          {
            question:
              "___________ is the ability to create by human intelligence.",
            options: ["Nature", "Intelligence", "Creation"],
            answer: "Intelligence",
          },
          {
            question: "Natural things are a ___________ of nature.",
            options: ["Product", "Gift", "Outcome"],
            answer: "Gift",
          },
          {
            question:
              "Man-made things are not naturally occurring but are products of ___________.",
            options: ["Nature", "Human creation", "Animals"],
            answer: "Human creation",
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
        questions: [
          {
            question: "Natural things can be created by humans.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Clouds are classified as artificial elements.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Man-made things are products of human creation.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Intelligence involves the ability to understand and learn.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Plants and animals belong to the category of artificial things.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Mountains and rivers are natural elements.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Nature is the ability to create by human intelligence.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Man-made things cannot be understood easily.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Artificial things are gifts of nature.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Natural things are not created by humans.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
