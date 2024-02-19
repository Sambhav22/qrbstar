export const chapter = "Chapter - 11: Light, Sound and force";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is light?",
          optionA: "A form of energy",
          optionB: "A form of sound",
          optionC: "A type of shadow",
          correctAnswer: "A) A form of energy",
        },
        {
          question: "Which of the following is a luminous object?",
          optionA: "Moon",
          optionB: "Furniture",
          optionC: "Bulb",
          correctAnswer: "C) Bulb",
        },
        {
          question: "What happens when light hits an object?",
          optionA: "The object becomes invisible",
          optionB: "Some part of it bounces back and reaches our eyes",
          optionC: "The object changes its shape",
          correctAnswer: "B) Some part of it bounces back and reaches our eyes",
        },
        {
          question: "How is a shadow formed?",
          optionA: "When an object emits light",
          optionB: "When an object blocks the passage of light",
          optionC: "When an object is transparent",
          correctAnswer: "B) When an object blocks the passage of light",
        },
        {
          question: "What is sound?",
          optionA: "A form of light",
          optionB: "A form of energy audible by our ears",
          optionC: "A type of force",
          correctAnswer: "B) A form of energy audible by our ears",
        },
        {
          question: "What is an example of an unpleasant sound?",
          optionA: "Sweet voice",
          optionB: "Soft music",
          optionC: "Continuous honking of vehicles",
          correctAnswer: "C) Continuous honking of vehicles",
        },
        {
          question: "What is another term for unpleasant sounds?",
          optionA: "Harmony",
          optionB: "Noise",
          optionC: "Melody",
          correctAnswer: "B) Noise",
        },
        {
          question: "What is force?",
          optionA: "A form of light",
          optionB: "A pull or push upon an object",
          optionC: "A type of shadow",
          correctAnswer: "B) A pull or push upon an object",
        },
        {
          question: "What can force do to a moving object?",
          optionA: "Make it invisible",
          optionB: "Stop it",
          optionC: "Change its color",
          correctAnswer: "B) Stop it",
        },
        {
          question: "How can force affect the shape of an object?",
          optionA: "It cannot affect the shape",
          optionB: "It can make the object transparent",
          optionC: "It can change the shape of an object",
          correctAnswer: "C) It can change the shape of an object",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Cereals are the main component of Indian food. Normally, wheat is the staple food in North and North-west India, while it is rice in East and South India. Maize, jowar, and bajra are popular in ____________.",
          options: ["Rajasthan", "Punjab", "Gujarat"],
          correctAnswer: "Rajasthan",
        },
        {
          question:
            "Spices and oil are used in cooking. Mustard oil and vegetable oil are used in North India, while groundnut oil and coconut oil are popular in ____________.",
          options: ["West Bengal", "South India", "Delhi"],
          correctAnswer: "South India",
        },
        {
          question:
            "Some foods are popular in specific areas. For example, parantha is popular in ____________, chhole-bhature in Delhi, and dosa in South India.",
          options: ["Rajasthan", "Punjab", "Maharashtra"],
          correctAnswer: "Punjab",
        },
        {
          question: "Fish is an important food in ____________ states.",
          options: ["North India", "Coastal", "Hilly"],
          correctAnswer: "Coastal",
        },
        {
          question: "Gujiya is cooked on the festival of ____________.",
          options: ["Eid", "Holi", "Shravan"],
          correctAnswer: "Holi",
        },
        {
          question:
            "India is famous for its sweets like burfi, rasgulla, sandesh, kaju katli, and gulab jamun. Many sweets are cooked in homes, like halwa and ____________.",
          options: ["Dosa", "Kheer", "Chhole-bhature"],
          correctAnswer: "Kheer",
        },
        {
          question:
            "Clothing is one of our basic necessities. People wear thick woollen clothes in hilly areas where the climate is cold, while they wear cotton clothes in the plains where the climate is hot. In coastal areas, people wear ____________ clothes.",
          options: ["Synthetic", "Silk", "Woolen"],
          correctAnswer: "Synthetic",
        },
        {
          question:
            "In Jammu and Kashmir, people wear a long woollen coat called ____________ over their regular clothes.",
          options: ["Saree", "Phiran", "Dhoti-kurta"],
          correctAnswer: "Phiran",
        },
        {
          question:
            "In Punjab, the main dress for women is salwar-kameez with dupatta, and for men, it is kurta-lungi or pajama. Men in Punjab also wear a turban called ____________ on their heads.",
          options: ["Saree-blouse", "Pagdi", "Ghagra-kurta"],
          correctAnswer: "Pagdi",
        },
        {
          question:
            "The people of West Bengal wear loose clothes. Men wear dhoti-kurta with ____________ over the shoulder, and women wear saree in a different style.",
          options: ["Angostra", "Turban", "Dupatta"],
          correctAnswer: "Angostra",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Cereals are the main component of Indian food. Normally, wheat is the staple food in North and North-west India, while it is rice in East and South India. Maize, jowar, and bajra are popular in Rajasthan.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Spices and oil are used in cooking. Mustard oil and vegetable oil are used in North India, while groundnut oil and coconut oil are popular in South India.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Some foods are popular in specific areas. For example, parantha is popular in Punjab, chhole-bhature in Delhi, and dosa in South India.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Fish is an important food in Coastal states.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Gujiya is cooked on the festival of Holi.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "India is famous for its sweets like burfi, rasgulla, sandesh, kaju katli, and gulab jamun. Many sweets are cooked in homes, like halwa and Kheer.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Clothing is one of our basic necessities. People wear thick woollen clothes in hilly areas where the climate is cold, while they wear cotton clothes in the plains where the climate is hot. In coastal areas, people wear Synthetic clothes.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In Jammu and Kashmir, people wear a long woollen coat called Phiran over their regular clothes.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In Punjab, the main dress for women is salwar-kameez with dupatta, and for men, it is kurta-lungi or pajama. Men in Punjab also wear a turban called Pagdi on their heads.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The people of West Bengal wear loose clothes. Men wear dhoti-kurta with Angostra over the shoulder, and women wear saree in a different style.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
