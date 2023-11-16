export const chapter = "Chapter - 23: Human Resources  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the primary means through which a child learns different skills?",
        optionA: "Genetic inheritance",
        optionB: "Observation, education, and training",
        optionC: "Innate abilities",
        correctAnswer: "b) Observation, education, and training",
      },
      {
        question:
          "When did human development and skill development start to evolve?",
        optionA: "During the Stone Age",
        optionB: "After the discovery of metal",
        optionC: "With the invention of electricity",
        correctAnswer: "a) During the Stone Age",
      },
      {
        question:
          "What are individuals with proper education, training, and skills often referred to as?",
        optionA: "Human capital",
        optionB: "Labor force",
        optionC: "Population burden",
        correctAnswer: "a) Human capital",
      },
      {
        question:
          "According to the text, what is the impact of having unskilled and untrained people in a country's population?",
        optionA: "They contribute to national development",
        optionB: "They have no impact on the country's progress",
        optionC: "They burden the economy and resources",
        correctAnswer: "c) They burden the economy and resources",
      },
      {
        question: "What does a favorable sex ratio mean?",
        optionA: "More females than males",
        optionB: "More males than females",
        optionC: "An equal number of males and females",
        correctAnswer: "a) More females than males",
      },
      {
        question: "In 2011, what was the sex ratio in India?",
        optionA: "957:1000",
        optionB: "1018:1000",
        optionC: "943:1000",
        correctAnswer: "c) 943:1000",
      },
      {
        question:
          "What is the main reason for unfavorable sex ratios in some regions of India?",
        optionA: "High male mortality",
        optionB: "Female infanticide and foeticide",
        optionC: "Better healthcare for males",
        correctAnswer: "b) Female infanticide and foeticide",
      },
      {
        question:
          "What does a broad population pyramid at the base indicate in terms of birth and death rates?",
        optionA: "High birth and low death rates",
        optionB: "Low birth and high death rates",
        optionC: "Balanced birth and death rates",
        correctAnswer: "a) High birth and low death rates",
      },
      {
        question:
          "What age group is often referred to as the working population in a population pyramid?",
        optionA: "0-14 years",
        optionB: "15-64 years",
        optionC: "65+ years",
        correctAnswer: "b) 15-64 years",
      },
      {
        question: "How is literacy defined in the text?",
        optionA: "The ability to speak and write multiple languages",
        optionB: "The ability to read, write, and understand a simple text",
        optionC: "The ability to perform complex mathematical calculations",
        correctAnswer:
          "b) The ability to read, write, and understand a simple text",
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
          "A child learns different skills through __________, education, and training.",
        options: ["Genetic inheritance", "Observation", "Innate abilities"],
        correctAnswer: "Observation",
      },
      {
        question:
          "Human development and skill development started from the earliest times when man realized he could use __________ as a tool.",
        options: ["Wood", "Stone", "Metal"],
        correctAnswer: "Stone",
      },
      {
        question:
          "The process of learning and skill development is closely linked with man's __________.",
        options: ["Genetic makeup", "Observation", "Innate abilities"],
        correctAnswer: "Observation",
      },
      {
        question:
          "Educated, trained, and skilled individuals are often referred to as __________.",
        options: ["Human capital", "Labor force", "Population burden"],
        correctAnswer: "Human capital",
      },
      {
        question:
          "If a country possesses a sufficient number of educated and trained people, it can produce the maximum from the minimum and utilize natural resources with __________.",
        options: ["Inefficiency", "Waste", "Efficiency"],
        correctAnswer: "Efficiency",
      },
      {
        question:
          "Unskilled and untrained people in the population have an adverse impact on the __________ of the country.",
        options: ["Development", "Progress", "Economy"],
        correctAnswer: "Economy",
      },
      {
        question:
          "The term 'sex composition' refers to the ratio between males and females in a country. It is defined as the number of females per 1000 males, with a favorable ratio indicating __________.",
        options: [
          "An equal number of males and females",
          "More females than males",
          "More males than females",
        ],
        correctAnswer: "More females than males",
      },
      {
        question:
          "The sex ratio in India, as per the 2011 Census, was __________.",
        options: ["957:1000", "1018:1000", "943:1000"],
        correctAnswer: "943:1000",
      },
      {
        question:
          "Unfavorable sex ratios are often caused by crimes against girls and women, such as __________.",
        options: [
          "Female education",
          "Female empowerment",
          "Female infanticide and foeticide",
        ],
        correctAnswer: "Female infanticide and foeticide",
      },
      {
        question:
          "The term 'population change' refers to a change in the number of people in a country, and it can be affected by factors such as birth rate, death rate, migration, epidemic, natural calamity, and __________.",
        options: ["Economic growth", "Development projects", "Terrorism"],
        correctAnswer: "Terrorism",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "A child is born with innate skills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Skill development through learning by doing started during the Stone Age.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A",
      },
      {
        question: "Education and training have no impact on human development.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Trained and educated individuals are often referred to as a population burden.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Unskilled and untrained individuals contribute positively to a country's progress.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "A favorable sex ratio indicates that there are more males than females in a country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "The sex ratio in India, as per the 2011 Census, was favorable.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B",
      },
      {
        question:
          "Unfavorable sex ratios are often caused by crimes against girls and women.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A",
      },
      {
        question:
          "A broad population pyramid at the base indicates high birth and low death rates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A",
      },
      {
        question:
          "Developed countries are often characterized by industrial development, leading to economic prosperity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A",
      },
    ],
  };
}

export var activityData;
