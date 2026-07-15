export const chapter = "Chapter - 18: Life in the Coastal Plains and Islands  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Which states and union territories fall under the Western Coastal Plains?",
        optionA: "Gujarat, Goa, Kerala",
        optionB: "Maharashtra, Karnataka, Tamil Nadu",
        optionC: "Rajasthan, Haryana, Punjab",
        correctAnswer: "A",
      },
      {
        question: "What is the capital of Gujarat?",
        optionA: "Mumbai",
        optionB: "Jaipur",
        optionC: "Gandhi Nagar",
        correctAnswer: "C",
      },
      {
        question: "Which region in Gujarat is hilly?",
        optionA: "Rann of Kutch",
        optionB: "Mainland",
        optionC: "Saurashtra",
        correctAnswer: "C",
      },
      {
        question: "Which language is predominantly spoken in Gujarat?",
        optionA: "Hindi",
        optionB: "Gujarati",
        optionC: "Marathi",
        correctAnswer: "B",
      },
      {
        question:
          "What is the primary occupation in Dadra and Nagar Haveli and Daman and Diu?",
        optionA: "Farming and fishing",
        optionB: "Manufacturing electronics",
        optionC: "Mining and metallurgy",
        correctAnswer: "A",
      },
      {
        question: "When was Goa liberated from Portuguese rule?",
        optionA: "1947",
        optionB: "1950",
        optionC: "1961",
        correctAnswer: "C",
      },
      {
        question: "What is the main crop grown in Goa?",
        optionA: "Wheat",
        optionB: "Paddy",
        optionC: "Sugarcane",
        correctAnswer: "B",
      },
      {
        question: "Which language is spoken in Kerala?",
        optionA: "Tamil",
        optionB: "Malayalam",
        optionC: "Kannada",
        correctAnswer: "B",
      },
      {
        question: "What is the staple food in Kerala?",
        optionA: "Fish and rice",
        optionB: "Roti and dal",
        optionC: "Pizza and pasta",
        correctAnswer: "A",
      },
      {
        question:
          "Which union territory falls in the Eastern Coastal Plains region?",
        optionA: "Puducherry",
        optionB: "Andaman and Nicobar Islands",
        optionC: "Lakshadweep",
        correctAnswer: "A",
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
          "The Western Coastal Plains are located along the ______ Sea. The states and union territories in this region include Gujarat, Goa, Kerala, Dadra and Nagar Haveli, and Daman and Diu.",
        options: ["Indian", "Arabian", "Bay of Bengal"],
        correctAnswer: "Arabian",
      },
      {
        question: "The capital of Gujarat is ______.",
        options: ["Mumbai", "Jaipur", "Gandhi Nagar"],
        correctAnswer: "Gandhi Nagar",
      },
      {
        question:
          "Saurashtra, a region in Gujarat, is known for its ______ terrain.",
        options: ["Hilly", "Desert", "Coastal"],
        correctAnswer: "Hilly",
      },
      {
        question:
          "The traditional dress for men in Gujarat is dhoti and a kind of short kurta, while women wear ______.",
        options: ["Sarees", "Chaniyo-choli", "Jeans and T-shirts"],
        correctAnswer: "Chaniyo-choli",
      },
      {
        question:
          "The primary occupation in Dadra and Nagar Haveli and Daman and Diu is ______ and ______.",
        options: [
          "Farming; Fishing",
          "IT industry; Tourism",
          "Manufacturing; Banking",
        ],
        correctAnswer: "Farming; Fishing",
      },
      {
        question: "Goa was liberated from Portuguese rule in the year ______.",
        options: ["1947", "1950", "1961"],
        correctAnswer: "1961",
      },
      {
        question: "The staple food in Goa is ______ and ______.",
        options: ["Roti; Dal", "Fish; Rice", "Pizza; Pasta"],
        correctAnswer: "Fish; Rice",
      },
      {
        question:
          "Kerala is located on the ______ Coast, and Thiruvananthapuram is its capital.",
        options: ["East", "Malabar", "Arabian"],
        correctAnswer: "Malabar",
      },
      {
        question:
          "The main crops grown in Kerala include coconut, tea, coffee, rubber, ______, and ______.",
        options: ["Wheat; Rice", "Paddy; Sugarcane", "Cotton; Groundnut"],
        correctAnswer: "Paddy; Sugarcane",
      },
      {
        question:
          "The union territory of Puducherry got independence from French rule in the year ______.",
        options: ["1947", "1954", "1961"],
        correctAnswer: "1954",
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
          "The Western Coastal Plains are located along the Arabian Sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Saurashtra is a hilly region in Gujarat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Goa was liberated from Portuguese rule in 1961.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The staple food in Goa is roti and dal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Kerala's capital is Thiruvananthapuram.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The primary occupation in Dadra and Nagar Haveli and Daman and Diu is manufacturing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Tamil Nadu is bounded by the Bay of Bengal to the west.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Puducherry got independence from French rule in 1954.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The main languages spoken in Kerala are Malayalam and English.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Lakshadweep is the largest union territory of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
