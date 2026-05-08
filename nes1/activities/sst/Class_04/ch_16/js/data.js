export const chapter = "Chapter - 16: Life in the Northern Plains ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Why are the states in the Northern Plains of India densely populated?",
        optionA: "Because of hilly terrain",
        optionB: "Due to the presence of alluvial deposits from rivers",
        optionC: "Because of abundant rainfall",
        correctAnswer: "Due to the presence of alluvial deposits from rivers",
      },
      {
        question:
          "Which rivers contribute to the alluvial deposits in the Northern Plains?",
        optionA: "Ganges, Yamuna, and Godavari",
        optionB: "Indus, Ganga, and Brahmaputra",
        optionC: "Krishna, Tungabhadra, and Cauvery",
        correctAnswer: "Indus, Ganga, and Brahmaputra",
      },
      {
        question: "Which state is known as the 'Wheat Bowl of India'?",
        optionA: "Haryana",
        optionB: "Bihar",
        optionC: "Punjab",
        correctAnswer: "Punjab",
      },
      {
        question: "What is the primary occupation in Haryana?",
        optionA: "Fishing",
        optionB: "Agriculture",
        optionC: "Dairy industry",
        correctAnswer: "Agriculture",
      },
      {
        question:
          "Which city in Haryana is famous for automobile manufacturing units?",
        optionA: "Panipat",
        optionB: "Kurukshetra",
        optionC: "Gurugram",
        correctAnswer: "Gurugram",
      },
      {
        question: "What is the capital of Uttar Pradesh?",
        optionA: "Agra",
        optionB: "Lucknow",
        optionC: "Varanasi",
        correctAnswer: "Lucknow",
      },
      {
        question: "What is the main occupation of people in Delhi?",
        optionA: "Farming",
        optionB: "Trade",
        optionC: "Fishing",
        correctAnswer: "Trade",
      },
      {
        question:
          "What is the famous battle associated with Kurukshetra in Haryana?",
        optionA: "Battle of Plassey",
        optionB: "Battle of Panipat",
        optionC: "Battle of Mahabharata",
        correctAnswer: "Battle of Mahabharata",
      },
      {
        question:
          "Which state is known for its rich mineral deposits of iron ore, coal, mica, and graphite?",
        optionA: "Bihar",
        optionB: "Jharkhand",
        optionC: "Assam",
        correctAnswer: "Jharkhand",
      },
      {
        question: "What is the staple diet of West Bengal?",
        optionA: "Fish and rice",
        optionB: "Wheat and barley",
        optionC: "Tea and biscuits",
        correctAnswer: "Fish and rice",
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
          "The states in the Northern Plains are densely populated because of the __________ deposits laid down by the rivers.",
        options: ["Desert", "Fertile", "Mountainous"],
        correctAnswer: "Fertile",
      },
      {
        question:
          "Punjab is known as the '__________ Bowl of India' due to its agricultural productivity.",
        options: ["Rice", "Wheat", "Sugarcane"],
        correctAnswer: "Wheat",
      },
      {
        question:
          "Haryana is often referred to as the '__________ Pail of India' because of its dairy industry.",
        options: ["Rice", "Wheat", "Milk"],
        correctAnswer: "Milk",
      },
      {
        question:
          "Uttar Pradesh leads the country in the production of various crops, including wheat, barley, potato, maize, and __________.",
        options: ["Sugarcane", "Cotton", "Tea"],
        correctAnswer: "Sugarcane",
      },
      {
        question:
          "Delhi is often called 'Mini India' because people from all over India live there, and the chief occupation of the people is __________.",
        options: ["Farming", "Trade", "Fishing"],
        correctAnswer: "Trade",
      },
      {
        question:
          "In Bihar, the main fruits grown include mangoes, litchies, guavas, and __________.",
        options: ["Bananas", "Oranges", "Apples"],
        correctAnswer: "Bananas",
      },
      {
        question:
          "Jharkhand is rich in mineral deposits of iron ore, coal, mica, and __________.",
        options: ["Oil", "Natural Gas", "Graphite"],
        correctAnswer: "Graphite",
      },
      {
        question:
          "In West Bengal, the northern part lies in the Northern Mountains, while the southern part lies in the Northern Plains, where farming is the main occupation, and crops such as tea, cotton, jute, sugarcane, and __________ are grown.",
        options: ["Wheat", "Rice", "Coffee"],
        correctAnswer: "Rice",
      },
      {
        question:
          "Assam is known for its tea plantations, and rice is the staple food of the state, which is mainly spoken in __________.",
        options: ["Hindi", "Bengali", "Assamese"],
        correctAnswer: "Assamese",
      },
      {
        question:
          "Tripura is surrounded by Bangladesh on three sides, and people there celebrate __________ with fanfare.",
        options: ["Diwali", "Holi", "Durga Puja"],
        correctAnswer: "Durga Puja",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Punjab is a state in the Northern Plains.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Haryana is known as the 'Milk Pail of India.'",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Uttar Pradesh leads the country in the production of tea.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Delhi is often called 'Mini India' because people from all over India live there.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Bihar is known for its rich mineral deposits.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Jharkhand is rich in mineral deposits of gold.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "West Bengal lies entirely in the Northern Plains.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Assam is drained by the river Brahmaputra.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Tripura is surrounded by Myanmar on three sides.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The major festivals celebrated in Punjab include Christmas.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
