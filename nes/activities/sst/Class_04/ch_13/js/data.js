export const chapter = "Chapter - 13: Crops and Livestock ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What percentage of the Indian population primarily depends on agriculture?",
        optionA: "40%",
        optionB: "60%",
        optionC: "80%",
        correctAnswer: "60%",
      },
      {
        question: "Which of the following is considered a Rabi crop in India?",
        optionA: "Rice",
        optionB: "Millets",
        optionC: "Wheat",
        correctAnswer: "Wheat",
      },
      {
        question: "When is the Rabi crop sown in India?",
        optionA: "July",
        optionB: "October",
        optionC: "January",
        correctAnswer: "October",
      },
      {
        question: "What is the main season for Kharif crops in India?",
        optionA: "Spring",
        optionB: "Winter",
        optionC: "Monsoon",
        correctAnswer: "Monsoon",
      },
      {
        question: "Which of the following crops are categorized as Zaid crops?",
        optionA: "Wheat and barley",
        optionB: "Muskmelon and watermelon",
        optionC: "Rice and maize",
        correctAnswer: "Muskmelon and watermelon",
      },
      {
        question:
          "Which state is not among the top three producers of rice in India?",
        optionA: "Punjab",
        optionB: "Tamil Nadu",
        optionC: "Karnataka",
        correctAnswer: "Karnataka",
      },
      {
        question:
          "What is the primary season for growing millets and coarse cereals in India?",
        optionA: "Rabi",
        optionB: "Kharif",
        optionC: "Zaid",
        correctAnswer: "Kharif",
      },
      {
        question:
          "Which of the following crops are considered cash crops in India?",
        optionA: "Rice and wheat",
        optionB: "Cotton and tea",
        optionC: "Millets and pulses",
        correctAnswer: "Cotton and tea",
      },
      {
        question:
          "Which state is known for its production of groundnut in India?",
        optionA: "Maharashtra",
        optionB: "Tamil Nadu",
        optionC: "Kerala",
        correctAnswer: "Maharashtra",
      },
      {
        question:
          "What program was launched in 1960 to help Indian farmers increase agricultural production?",
        optionA: "Blue Revolution",
        optionB: "Green Revolution",
        optionC: "White Revolution",
        correctAnswer: "Green Revolution",
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
          "Nearly _____% of the Indian population primarily depends on agriculture.",
        options: ["30%", "40%", "60%"],
        correctAnswer: "60%",
      },
      {
        question:
          "India divides its crops into three types based on seasons: Rabi, Kharif, and _____.",
        options: ["Spring", "Zaid", "Monsoon"],
        correctAnswer: "Zaid",
      },
      {
        question:
          "Major Rabi crops in India include wheat, barley, mustard, sesame, and _____.",
        options: ["Corn", "Peas", "Rice"],
        correctAnswer: "Peas",
      },
      {
        question:
          "Kharif crops in India are usually sown with the beginning of the first rain in _____.",
        options: ["April", "July", "November"],
        correctAnswer: "July",
      },
      {
        question:
          "Major Kharif crops in India include millets (bajra and jowar), cotton, soyabean, and _____.",
        options: ["Wheat", "Sugarcane", "Groundnut"],
        correctAnswer: "Groundnut",
      },
      {
        question: "Rice predominantly belongs to the _____ season in India.",
        options: ["Rabi", "Kharif", "Zaid"],
        correctAnswer: "Kharif",
      },
      {
        question:
          "Wheat is a _____ crop that thrives well in less than 100 cm and more than 75 cm rainfall.",
        options: ["Rabi", "Kharif", "Zaid"],
        correctAnswer: "Rabi",
      },
      {
        question:
          "Major pulses of India include gram, tur or arhar, urad, moong, masur, kulthi, and _____.",
        options: ["Corn", "Matka", "Matar"],
        correctAnswer: "Matar",
      },
      {
        question: "India is the second-largest producer of _____ in the world.",
        options: ["Rice", "Sugarcane", "Wheat"],
        correctAnswer: "Sugarcane",
      },
      {
        question:
          "Coffee is generally grown under shady trees and requires rainfall between _____ cm.",
        options: ["50 to 100", "100 to 150", "150 to 250"],
        correctAnswer: "150 to 250",
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
          "People choose their occupations based on their needs, skills, choices, and qualifications.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Fish is the staple diet of people living near coasts.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Dairy farming involves the rearing of animals for eggs and meat.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Forests are not a source of various herbs used in medicines.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Mining is the practice of digging out minerals from the earth.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Tourism in India does not involve the provision of services for visitors.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Government employees work only in government offices and departments.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Self-employed individuals include writers, architects, and doctors.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "New occupations in the field of computers include software engineers and hardware engineers.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Farming involves the rearing of animals for milk and honey production.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
