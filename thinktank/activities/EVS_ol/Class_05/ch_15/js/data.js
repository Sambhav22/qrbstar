export const chapter = "Chapter - 15: Fuels ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Fuel is a substance that provides energy on_________",
        optionA: "burning",
        optionB: "exhausting",
        optionC: "cooling",

        correctAnswer: "",
      },

      {
        question:
          " _________fuels are the fuels that take millions of years to form. ",
        optionA: "raw",
        optionB: "fossil",
        optionC: "gas",

        correctAnswer: "",
      },

      {
        question: " _______is the costliest fuel",
        optionA: "petrol",
        optionB: "diesel",
        optionC: "coal",

        correctAnswer: "",
      },

      {
        question:
          " __________energy generates electricity by turning wind turbines.",
        optionA: "geothermal",
        optionB: "wind",
        optionC: "biomass",

        correctAnswer: "",
      },

      {},
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "______ is usually cheaper than petrol.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ engines replaced the steam engines of trains ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In India,___________is found in Jharkhand",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " ____________contributes about 23% of world's total energy ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "CNG is an_____________ fuel. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Fossil fuels are non-renewable resources",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Petrol is used to run vehicles",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Coal was also used to produce steam",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "LPG is an eco-friendly fuel",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Geothermal energy is a non-renewable resource.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
