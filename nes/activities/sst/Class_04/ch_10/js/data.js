export const chapter = "Chapter - 10: Water Resources  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What percentage of the Earth is covered by water?",
        optionA: "96.5%",
        optionB: "2.5%",
        optionC: "71%",
        correctAnswer: "71%",
      },
      {
        question: "What is the largest source of freshwater on Earth?",
        optionA: "Lakes",
        optionB: "Groundwater",
        optionC: "Ice sheets and glaciers",
        correctAnswer: "Ice sheets and glaciers",
      },
      {
        question:
          "According to a report from the Intergovernmental Panel on Climate Change, why is India designated as a 'water-stressed region'?",
        optionA: "Lack of freshwater resources",
        optionB: "Overextraction of water",
        optionC: "Rapid urbanization and industrialization",
        correctAnswer: "Rapid urbanization and industrialization",
      },
      {
        question:
          "Which of the following is NOT one of the major river systems in India?",
        optionA: "Ganges",
        optionB: "Yamuna",
        optionC: "Nile",
        correctAnswer: "Nile",
      },
      {
        question: "Where do over 70% of India's rivers drain into?",
        optionA: "Arabian Sea",
        optionB: "Bay of Bengal",
        optionC: "Indian Ocean",
        correctAnswer: "Bay of Bengal",
      },
      {
        question:
          "What happens to the flow of rivers during the dry season in India?",
        optionA: "It increases",
        optionB: "It remains constant",
        optionC: "It diminishes",
        correctAnswer: "It diminishes",
      },
      {
        question:
          "What is the primary source of drinking water for urban and rural areas in India?",
        optionA: "Lakes",
        optionB: "Rivers",
        optionC: "Groundwater",
        correctAnswer: "Rivers",
      },
      {
        question: "Why have many lakes in India vanished or are vanishing?",
        optionA: "Pollution",
        optionB: "Agricultural runoff",
        optionC: "Encroachments and neglect",
        correctAnswer: "Encroachments and neglect",
      },
      {
        question: "What is groundwater?",
        optionA: "Water collected on the surface of the Earth",
        optionB: "Water that seeps through mud",
        optionC: "Water obtained by drilling or pumping",
        correctAnswer: "Water obtained by drilling or pumping",
      },
      {
        question: "Which of the following is NOT a purpose of dams in India?",
        optionA: "Producing electricity",
        optionB: "Checking floods",
        optionC: "Increasing groundwater levels",
        correctAnswer: "Increasing groundwater levels",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Water makes up approximately _____% of the Earth's surface.",
        options: ["70%", "71%", "72%"],
        answer: "71%",
      },
      {
        question:
          "96.5% of the world's water is estimated to exist as _____ and only 2.5% as freshwater.",
        options: ["oceans", "ice sheets", "glaciers"],
        answer: "oceans",
      },
      {
        question:
          "India has about ____% of the world's freshwater resources, ranking it among the top ten water-rich countries.",
        options: ["2%", "4%", "6%"],
        answer: "4%",
      },
      {
        question:
          "Rivers are essential sources of ______ for urban and rural areas, as well as raw water for industries and irrigation.",
        options: ["electricity", "drinking water", "sewage"],
        answer: "drinking water",
      },
      {
        question: "The demand for water is ever increasing, leading to ______.",
        options: ["water abundance", "over-extraction", "efficient management"],
        answer: "over-extraction",
      },
      {
        question:
          "Lakes in India serve as sources of water for drinking, agriculture, and industries. They also act as sewage absorbers, flood cushions, and recharge zones for _______.",
        options: ["rivers", "groundwater aquifers", "oceans"],
        answer: "groundwater aquifers",
      },
      {
        question:
          "Groundwater is procured by drilling or digging a well, tube well, or by pumping, contributing to more than ______% of the drinking water requirements of rural areas.",
        options: ["50%", "70%", "85%"],
        answer: "85%",
      },
      {
        question:
          "Excessive drilling of borewells, along with the use of mechanized pumping, has led many parts of the country's groundwater aquifers to go dry and have been declared as '______'.",
        options: ["dark zones", "wetlands", "reservoirs"],
        answer: "dark zones",
      },
      {
        question:
          "Dams are structures built across a river, providing various benefits such as checking floods, producing electricity, and supplying water for irrigation and household activities. They are often referred to as _______ projects.",
        options: ["single-purpose", "multi-purpose", "hydroelectric"],
        answer: "multi-purpose",
      },
      {
        question:
          "To protect water resources from pollution and ensure their sustainability, methods of water conservation include afforestation, checking wastage, rainwater harvesting, efficient irrigation, and recycling of _______.",
        options: ["seawater", "waste water", "drinking water"],
        answer: "waste water",
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
          "Water is a non-essential resource for all life forms on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Oceans contain 96.5% of the total volume of the world's water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "India has about 6% of the world's freshwater resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Groundwater is primarily procured by drilling wells or pumping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Dams are structures built across rivers, primarily designed to produce electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Chennai is the capital of Tamil Nadu, India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Chennai is located along the southwestern coast of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Ganges-Brahmaputra system is the largest river system in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Chennai's climate is characterized by cold temperatures throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Groundwater aquifers are not affected by excessive drilling and mechanized pumping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
