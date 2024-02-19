export const chapter = "Chapter - 13: The Solar System ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the inner four planets of the Solar System made of?",
          optionA: "Frozen gases",
          optionB: "Iron and rocks",
          optionC: "Water and air",
          correctAnswer: "Iron and rocks",
        },
        {
          question: "Which planet is known as the Red Planet?",
          optionA: "Earth",
          optionB: "Mars",
          optionC: "Jupiter",
          correctAnswer: "Mars",
        },
        {
          question: "Which planet is the hottest in the Solar System?",
          optionA: "Earth",
          optionB: "Venus",
          optionC: "Mars",
          correctAnswer: "Venus",
        },
        {
          question:
            "What is unique about Uranus among the planets in the Solar System?",
          optionA: "It has beautiful rings.",
          optionB: "It spins on its side.",
          optionC: "It is the coldest planet.",
          correctAnswer: "It spins on its side.",
        },
        {
          question: "Which planet is the largest in the Solar System?",
          optionA: "Jupiter",
          optionB: "Saturn",
          optionC: "Neptune",
          correctAnswer: "Jupiter",
        },
        {
          question:
            "What are comets made of, and what do they form when they come close to the Sun?",
          optionA: "Rocks and metals; asteroids",
          optionB: "Dust and snow; tails",
          optionC: "Iron and rocks; rings",
          correctAnswer: "Dust and snow; tails",
        },
        {
          question: "Where are asteroids found revolving around the Sun?",
          optionA: "Between Mars and Jupiter",
          optionB: "Closest to the Sun",
          optionC: "Beyond Neptune",
          correctAnswer: "Between Mars and Jupiter",
        },
        {
          question:
            "What happens to meteroids when they fall towards Earth's atmosphere?",
          optionA: "They turn into comets.",
          optionB: "They become asteroids.",
          optionC: "They burn and become meteors.",
          correctAnswer: "They burn and become meteors.",
        },
        {
          question: "How often is Halley's Comet visible from Earth?",
          optionA: "Every 50 years",
          optionB: "Every 75 to 76 years",
          optionC: "Every 100 years",
          correctAnswer: "Every 75 to 76 years",
        },
        {
          question:
            "Which layer of the Earth is the outermost and where we live?",
          optionA: "Core",
          optionB: "Mantle",
          optionC: "Crust",
          correctAnswer: "Crust",
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
          question:
            "India is the second-largest producer of _____ in the world.",
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
          question: "Mercury is the largest planet in the Solar System.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Venus is the hottest planet in the Solar System.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Jupiter is the fifth planet from the Sun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Neptune is the innermost planet in the Solar System.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Comets are big balls of dust and snow.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Asteroids are found revolving around the Sun between the orbits of Earth and Mars.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Meteroids are chunks of rocks or metals thrown away by the collisions of comets or asteroids.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The Earth's core is a very hot and high-pressure liquid.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "India is the largest producer of coffee in the world.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Rice predominantly belongs to the Rabi season in India.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
