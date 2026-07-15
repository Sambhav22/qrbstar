export const chapter = "Chapter - 5: Political Features of India";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "How many states and union territories are there in India?",
        optionA: "28 states and 7 union territories",
        optionB: "29 states and 8 union territories",
        optionC: "28 states and 8 union territories",
        correctAnswer: "28 states and 8 union territories",
      },
      {
        question:
          "Which region in India comprises the states of Madhya Pradesh and Chhattisgarh?",
        optionA: "Western India",
        optionB: "Central India",
        optionC: "Eastern India",
        correctAnswer: "Central India",
      },
      {
        question:
          "Which state is known as the 'Land of the Seven Sisters' in the north-eastern region of India?",
        optionA: "Assam",
        optionB: "Arunachal Pradesh",
        optionC: "Sikkim",
        correctAnswer: "Sikkim",
      },
      {
        question:
          "Which state in South India has the capital city of Amaravati?",
        optionA: "Tamil Nadu",
        optionB: "Andhra Pradesh",
        optionC: "Telangana",
        correctAnswer: "Andhra Pradesh",
      },
      {
        question:
          "Which state in South India is known for having the capital city of Thiruvananthapuram?",
        optionA: "Kerala",
        optionB: "Karnataka",
        optionC: "Telangana",
        correctAnswer: "Kerala",
      },
      {
        question:
          "Which state is the largest in India in terms of geographical area?",
        optionA: "Rajasthan",
        optionB: "Maharashtra",
        optionC: "Gujarat",
        correctAnswer: "Rajasthan",
      },
      {
        question: "What is the capital of Jammu & Kashmir?",
        optionA: "Leh",
        optionB: "Srinagar",
        optionC: "Jammu",
        correctAnswer: "Srinagar",
      },
      {
        question:
          "How many union territories are directly ruled by the central government in India?",
        optionA: "7",
        optionB: "6",
        optionC: "8",
        correctAnswer: "8",
      },
      {
        question:
          "Which union territory is the southernmost point of India located in?",
        optionA: "Puducherry",
        optionB: "Lakshadweep",
        optionC: "Andaman and Nicobar",
        correctAnswer: "Andaman and Nicobar",
      },
      {
        question:
          "What is the capital of the National Capital Territory of Delhi?",
        optionA: "New Delhi",
        optionB: "Old Delhi",
        optionC: "Delhi City",
        correctAnswer: "New Delhi",
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
          "The division of Indian states and union territories is primarily based on the ________ spoken in these areas.",
        optionA: "Religion",
        optionB: "Geography",
        optionC: "Language",
        correctAnswer: "Language",
      },
      {
        question:
          "Each state in India has its own separate government to handle its ________ needs.",
        optionA: "Administrative",
        optionB: "Economic",
        optionC: "Military",
        correctAnswer: "Administrative",
      },
      {
        question:
          "In the northern states of India, Uttar Pradesh has the highest number of ________ with a total of 75.",
        optionA: "Cities",
        optionB: "Districts",
        optionC: "Provinces",
        correctAnswer: "Districts",
      },
      {
        question:
          "The state of Rajasthan, located in the western region, has a total of ________ districts.",
        optionA: "33",
        optionB: "36",
        optionC: "30",
        correctAnswer: "33",
      },
      {
        question:
          "The northern region of India is known for its states and union territories, collectively called the 'Land of the ________ Sisters.'",
        optionA: "Three",
        optionB: "Five",
        optionC: "Seven",
        correctAnswer: "Seven",
      },
      {
        question:
          "The capital of Jharkhand in the eastern region of India is ________.",
        optionA: "Patna",
        optionB: "Ranchi",
        optionC: "Kolkata",
        correctAnswer: "Ranchi",
      },
      {
        question:
          "In the north-eastern region of India, ________ is the only state not part of the Seven Sisters.",
        optionA: "Assam",
        optionB: "Tripura",
        optionC: "Sikkim",
        correctAnswer: "Sikkim",
      },
      {
        question:
          "The southernmost point of India is located in the ________ Islands.",
        optionA: "Andaman and Nicobar",
        optionB: "Lakshadweep",
        optionC: "Jammu & Kashmir",
        correctAnswer: "Andaman and Nicobar",
      },
      {
        question:
          "The capital of the National Capital Territory of Delhi is ________.",
        optionA: "New Delhi",
        optionB: "Old Delhi",
        optionC: "Delhi City",
        correctAnswer: "New Delhi",
      },
      {
        question:
          "Rajasthan is the ________ state in India in terms of geographical area.",
        optionA: "Largest",
        optionB: "Smallest",
        optionC: "Most populous",
        correctAnswer: "Largest",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "India has 30 states and 9 union territories.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Each state in India has its own separate government.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The capital of Rajasthan is Jaipur.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Chhattisgarh was originally a part of Madhya Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Sikkim is one of the 'Seven Sisters' in the north-eastern region of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Kolkata is the capital of Jharkhand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Andaman and Nicobar Islands are located in the southernmost part of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "New Delhi is a union territory in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Rajasthan is the smallest state in India in terms of geographical area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Delhi has its own Legislative Assembly, Chief Minister, and Council of Ministers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
