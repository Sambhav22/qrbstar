export const chapter = "Chapter - 13: Different Occupations ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is defined as a person's occupation in the text?",
        optionA: "The goods they sell",
        optionB: "The services they offer",
        optionC: "Both A and B",
        correctAnswer: "Both A and B",
      },
      {
        question:
          "What is the term for the agricultural practice of breeding and raising livestock?",
        optionA: "Animal Farming",
        optionB: "Animal Husbandry",
        optionC: "Livestock Ranching",
        correctAnswer: "Animal Husbandry",
      },
      {
        question:
          "Which of the following is NOT an animal product mentioned in the text?",
        optionA: "Milk",
        optionB: "Eggs",
        optionC: "Silk",
        correctAnswer: "Silk",
      },
      {
        question:
          "People living near coasts and rivers primarily engage in which occupation according to the text?",
        optionA: "Farming",
        optionB: "Fishing",
        optionC: "Forestry",
        correctAnswer: "Fishing",
      },
      {
        question:
          "What do people living near forests mainly do for their occupation?",
        optionA: "Mining",
        optionB: "Fishing",
        optionC: "Cutting trees for wood",
        correctAnswer: "Cutting trees for wood",
      },
      {
        question:
          "Which occupation involves digging out minerals such as iron, copper, and gold from the Earth?",
        optionA: "Farming",
        optionB: "Forestry",
        optionC: "Mining",
        correctAnswer: "Mining",
      },
      {
        question:
          "What type of industry is mentioned that provides services to tourists in India?",
        optionA: "Entertainment",
        optionB: "Tourism",
        optionC: "Construction",
        correctAnswer: "Tourism",
      },
      {
        question:
          "Which group of people mentioned in the text works in government offices and departments?",
        optionA: "Farmers",
        optionB: "Self-employed individuals",
        optionC: "Government employees",
        correctAnswer: "Government employees",
      },
      {
        question:
          "In modern times, what is one of the new occupations mentioned in the field of computers?",
        optionA: "Computer Operator",
        optionB: "Musician",
        optionC: "Farmer",
        correctAnswer: "Computer Operator",
      },
      {
        question:
          "What term is used in the text to describe individuals who work in a private capacity, such as writers and doctors?",
        optionA: "Self-employed",
        optionB: "Government employees",
        optionC: "Tourists",
        correctAnswer: "Self-employed",
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
          "People take up different occupations according to their needs, skills, choices, and qualifications. Some people work in the fields, some raise animals, some manufacture things and so on. Different _______________.",
        options: ["Professions", "Occupations", "Hobbies"],
        correctAnswer: "Occupations",
      },
      {
        question:
          "Farmers grow crops such as food grains, sugarcane, tea, coffee, cotton, spices, fruits, and vegetables. They sell their products in the market and earn _______________.",
        options: ["Money", "Rewards", "Happiness"],
        correctAnswer: "Money",
      },
      {
        question:
          "The agricultural practice of breeding and raising livestock is called _______________.",
        options: ["Farming", "Animal Husbandry", "Fishing"],
        correctAnswer: "Animal Husbandry",
      },
      {
        question:
          "Dairy farming involves the rearing of cows, buffalos, and goats to obtain _______________.",
        options: ["Meat", "Milk", "Eggs"],
        correctAnswer: "Milk",
      },
      {
        question:
          "People living near coasts and rivers catch fish and sell them in the market. Fish makes the staple diet of the people living near coasts. Besides food, a kind of oil is also obtained from the fish, which is used in several _______________.",
        options: ["Vehicles", "Medicines", "Buildings"],
        correctAnswer: "Medicines",
      },
      {
        question:
          "Some areas of our country are covered with thick forests. People living in or near forests adopt the occupation of cutting trees for wood. This wood is used for fuel, furniture, and construction of buildings. Forests are also the storehouse of various _______________.",
        options: ["Animals", "Herbs", "Flowers"],
        correctAnswer: "Herbs",
      },
      {
        question:
          "There are many minerals in the earth. Many people do the work of digging out these minerals. This occupation is called _______________.",
        options: ["Mining", "Fishing", "Forestry"],
        correctAnswer: "Mining",
      },
      {
        question:
          "India has a large number of tourist places, and people from all over the country and around the world come to visit these places. They are provided with different services at the places for which the service providers get _______________.",
        options: ["Gifts", "Food", "Money"],
        correctAnswer: "Money",
      },
      {
        question:
          "Many new occupations have come into being in modern times. In the field of computer, we can find computer operator, composer, designer, software engineer, and hardware engineer, among others. These are examples of _______________.",
        options: ["Traditional jobs", "Ancient professions", "New occupations"],
        correctAnswer: "New occupations",
      },
      {
        question:
          "Many people work in their private capacity, such as writer, architect, advocate, doctor, photographer, journalist, businessman, and industrialist. We call them _______________.",
        options: ["Self-employed", "Government employees", "Laborers"],
        correctAnswer: "Self-employed",
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
