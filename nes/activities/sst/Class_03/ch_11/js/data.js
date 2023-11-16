export const chapter = "Chapter - 11: Food and Clothes ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the staple food in North and North-west India?",
        optionA: "Rice",
        optionB: "Maize",
        optionC: "Wheat",
        correctAnswer: "C) Wheat",
      },
      {
        question: "Which oils are commonly used in North India for cooking?",
        optionA: "Groundnut oil and coconut oil",
        optionB: "Mustard oil and vegetable oil",
        optionC: "Mustard oil and groundnut oil",
        correctAnswer: "B) Mustard oil and vegetable oil",
      },
      {
        question: "Which state is famous for the dish 'dosa'?",
        optionA: "Punjab",
        optionB: "Delhi",
        optionC: "South India",
        correctAnswer: "C) South India",
      },
      {
        question: "What is the traditional clothing for women in Punjab?",
        optionA: "Saree-blouse",
        optionB: "Salwar-kameez with dupatta",
        optionC: "Ghagra-kurta with odhni",
        correctAnswer: "B) Salwar-kameez with dupatta",
      },
      {
        question:
          "In which region of India do people wear thick woollen clothes due to the cold climate?",
        optionA: "Hilly areas",
        optionB: "Coastal areas",
        optionC: "Plains",
        correctAnswer: "A) Hilly areas",
      },
      {
        question:
          "Which Indian state is known for the special turban called 'paggar' or 'safa'?",
        optionA: "Punjab",
        optionB: "Haryana",
        optionC: "Rajasthan",
        correctAnswer: "C) Rajasthan",
      },
      {
        question:
          "What type of clothing do people in coastal areas of India typically wear?",
        optionA: "Thick woollen clothes",
        optionB: "Synthetic clothes",
        optionC: "Cotton clothes",
        correctAnswer: "B) Synthetic clothes",
      },
      {
        question: "Which festival is 'gujiya' cooked for?",
        optionA: "Eid",
        optionB: "Holi",
        optionC: "Shravan",
        correctAnswer: "B) Holi",
      },
      {
        question:
          "What are some examples of Indian sweets mentioned in the text?",
        optionA: "Pasta, pizza, and sushi",
        optionB: "Burfi, rasgulla, and sandesh",
        optionC: "Apple pie, ice cream, and brownies",
        correctAnswer: "B) Burfi, rasgulla, and sandesh",
      },
      {
        question:
          "What do Indian men typically wear, as mentioned in the text?",
        optionA: "Saree",
        optionB: "Salwar-kameez",
        optionC: "Shirts and trousers",
        correctAnswer: "C) Shirts and trousers",
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
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "Indian food reflects a perfect blend of various cultures and ages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Rice is the staple food in North and North-west India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Mustard oil and vegetable oil are commonly used in South India for cooking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Spices are not used in Indian cooking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Fish is not an important food in coastal states of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Gujiya is cooked on the festival of Diwali.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Indian clothing varies significantly based on the region and climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "People in hilly areas of India usually wear cotton clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "In Punjab, women typically wear saree-blouse with a turban.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "In Gujarat, Gujarati men wear kediyu or kurta and dhoti.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
