export const chapter = "Chapter - 24: Voting and Elections ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is universal adult franchise?",
        optionA: "The right to form a government",
        optionB: "The right to vote for all eligible adult citizens",
        optionC: "The right to freedom of speech",
        correctAnswer: "B) The right to vote for all eligible adult citizens",
      },
      {
        question:
          "What is the most important right in a democracy according to the text?",
        optionA: "Right to education",
        optionB: "Right to property",
        optionC: "Right to vote",
        correctAnswer: "C) Right to vote",
      },
      {
        question:
          "What does responsible government mean in the context of the text?",
        optionA: "Government managing responsibilities",
        optionB: "Representatives being accountable to the people",
        optionC: "Government making responsible decisions",
        correctAnswer: "B) Representatives being accountable to the people",
      },
      {
        question:
          "When are elections held in India for the Lok Sabha and Vidhan Sabhas?",
        optionA: "Every 3 years",
        optionB: "Every 5 years",
        optionC: "Every 10 years",
        correctAnswer: "B) Every 5 years",
      },
      {
        question:
          "What two important features of voting in a democracy are mentioned in the text?",
        optionA: "One Person-One Vote and Responsible Opposition",
        optionB: "Universal Adult Franchise and Direct Elections",
        optionC: "One Person-One Vote and Responsible Government",
        correctAnswer: "C) One Person-One Vote and Responsible Government",
      },
      {
        question: "What is the age requirement for an Indian citizen to vote?",
        optionA: "Above 16",
        optionB: "Above 18",
        optionC: "Above 21",
        correctAnswer: "B) Above 18",
      },
      {
        question: "How are representatives elected in a direct election?",
        optionA: "Through an electoral college",
        optionB: "By people voting directly for a candidate",
        optionC: "By appointment from the government",
        correctAnswer: "B) By people voting directly for a candidate",
      },
      {
        question:
          "What is the primary goal of a political party according to the text?",
        optionA: "To make money",
        optionB: "To form the government",
        optionC: "To criticize the government",
        correctAnswer: "B) To form the government",
      },
      {
        question:
          "What is the major difference between a bi-party system and a multi-party system?",
        optionA:
          "Bi-party system has absolute power; multi-party system does not",
        optionB: "Bi-party system is unstable; multi-party system is stable",
        optionC:
          "Bi-party system has two major political parties; multi-party system has several",
        correctAnswer:
          "C) Bi-party system has two major political parties; multi-party system has several",
      },
      {
        question: "What is a coalition government?",
        optionA: "A government formed by a single political party",
        optionB:
          "A government formed by multiple political parties in agreement",
        optionC: "A government formed by the military",
        correctAnswer:
          "B) A government formed by multiple political parties in agreement",
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
          "In a democracy, elections are held at regular intervals; for example, in India, elections are held every __________ years for the Lok Sabha and Vidhan Sabhas.",
        options: ["Three", "Five", "Ten"],
        correctAnswer: "Five",
      },
      {
        question:
          "The right to vote is the most important right in a democracy. Without it, democracy cannot __________.",
        options: ["Succeed", "Survive", "Thrive"],
        correctAnswer: "Survive",
      },
      {
        question:
          "During the Second World War, women demonstrated their capabilities, leading to a change in men's viewpoint, and they were subsequently given the right to __________.",
        options: ["Speak", "Work", "Vote"],
        correctAnswer: "Vote",
      },
      {
        question:
          "In India, a citizen can vote if he/she is above the age of __________.",
        options: ["16", "18", "21"],
        correctAnswer: "18",
      },
      {
        question:
          "Elections can be held direct or indirect. In India, election for some posts is direct, while it is indirect for others. For example, the President is elected by an electoral college formed by the members of the __________ and Vidhan Sabhas.",
        options: ["Lok Sabha", "Rajya Sabha", "Gram Panchayats"],
        correctAnswer: "Rajya Sabha",
      },
      {
        question:
          "A coalition government is formed when two or more parties come together and agree on a common minimum __________.",
        options: ["Policy", "Programme", "Agenda"],
        correctAnswer: "Programme",
      },
      {
        question:
          "The two major alliance groups in India are the I.N.D.I.A. (Indian National Developmental Inclusive Alliance) led by the Indian National Congress (I) and the NDA (National Democratic Alliance) led by the __________.",
        options: [
          "Bharatiya Janata Party",
          "Communist Party",
          "Aam Aadmi Party",
        ],
        correctAnswer: "Bharatiya Janata Party",
      },
      {
        question:
          "Coalition governments can be both beneficial and challenging. The stability of a coalition government depends on the __________ and leading party of the coalition.",
        options: ["Size", "Leader", "Ideology"],
        correctAnswer: "Leader",
      },
      {
        question:
          "In a multi-party system, different political parties represent different ideologies. India has a multi-party system, while China has a __________ party system.",
        options: ["Dual", "Single", "Triple"],
        correctAnswer: "Single",
      },
      {
        question:
          "In India, a citizen's right to vote is irrespective of their race, religion, region, sex, or any other criterion. This feature is referred to as __________.",
        options: [
          "Universal Adult Franchise",
          "Responsible Government",
          "Bi-party System",
        ],
        correctAnswer: "Universal Adult Franchise",
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
          "The Constitution is the source of all laws in the country, and all laws must be in accordance with its provisions and spirit.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Dissent is an important part of life, and it is expressed against the majority.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Coalition governments are always stable and function without challenges.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "In a bi-party system, there are only two major political parties, and stability is a common characteristic.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Elections for the Lok Sabha and Vidhan Sabhas are held every seven years in India.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The right to vote is granted only to individuals above the age of 21 in India.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Laws provide for the maximum punishment or fine, and the judge can exceed this limit if necessary.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The Constitution allows laws to be discriminatory based on race, religion, or region.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Dissent expressed in a constructive manner should result in disagreement.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "In a multi-party system, different political parties often represent different ideologies.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
