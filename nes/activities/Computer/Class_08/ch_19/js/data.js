export const chapter = "Chapter - 19: Agriculture : Types and Major Crops ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the primary definition of agriculture in the text?",
        optionA: "The practice of rearing livestock",
        optionB: "The process of growing crops",
        optionC: "The science of fishing",
        correctAnswer: "B) The process of growing crops",
      },
      {
        question:
          "How is agriculture related to industry according to the text?",
        optionA: "Agriculture competes with industry for resources",
        optionB: "Agriculture provides raw materials for industry",
        optionC: "Agriculture is irrelevant to industrial development",
        correctAnswer: "B) Agriculture provides raw materials for industry",
      },
      {
        question:
          "Which type of farming involves growing crops for consumption within the family and community?",
        optionA: "Commercial farming",
        optionB: "Subsistence farming",
        optionC: "Plantation farming",
        correctAnswer: "B) Subsistence farming",
      },
      {
        question:
          "Which type of farming is primarily practiced in the monsoon regions of southern and eastern Asia?",
        optionA: "Commercial grain farming",
        optionB: "Mixed farming",
        optionC: "Intensive farming",
        correctAnswer: "C) Intensive farming",
      },
      {
        question: "In which region are plantation farming primarily found?",
        optionA: "Temperate regions",
        optionB: "Tropical regions",
        optionC: "Arid regions",
        correctAnswer: "B) Tropical regions",
      },
      {
        question: "What is the primary use of jute as mentioned in the text?",
        optionA: "Making sacks and ropes",
        optionB: "Producing coffee",
        optionC: "Growing vegetables",
        correctAnswer: "A) Making sacks and ropes",
      },
      {
        question: "What is the main crop used to produce sugar?",
        optionA: "Rice",
        optionB: "Wheat",
        optionC: "Sugarcane",
        correctAnswer: "C) Sugarcane",
      },
      {
        question:
          "Which of the following is not a natural condition affecting agriculture, as mentioned in the text?",
        optionA: "Soil",
        optionB: "Temperature",
        optionC: "Market availability",
        correctAnswer: "C) Market availability",
      },
      {
        question:
          "In which countries is rubber produced from the rubber tree according to the text?",
        optionA: "India and Brazil",
        optionB: "China and the US",
        optionC: "Indonesia and Sri Lanka",
        correctAnswer: "B) China and the US",
      },
      {
        question:
          "What are the three main types of commercial farming mentioned in the text?",
        optionA: "Subsistence farming, mixed farming, and plantation farming",
        optionB: "Dairy farming, truck farming, and cooperative farming",
        optionC:
          "Commercial grain farming, mixed farming, and plantation farming",
        correctAnswer:
          "C) Commercial grain farming, mixed farming, and plantation farming",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "Embroidery is done with the help of ______ threads",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In urban areas, _________ clothes are common",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The women of Assam wear _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The women of Gujarat wear _________ ",
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
        question: "Kalamkari is done with the help of special pen",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Salwar Kameez is worn in Punjab",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Saree is worn in India only",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "On special occasions, we wear traditional dresses",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
