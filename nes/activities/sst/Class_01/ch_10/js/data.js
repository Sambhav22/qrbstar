export const chapter = "Chapter - 10: Neighbourhood Places ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is a neighbourhood?",
        optionA: "The area around a school",
        optionB: "The area around a house",
        optionC: "The area around a hospital",
        correctAnswer: "The area around a house",
      },
      {
        question: "Who are the people living around our houses?",
        optionA: "Family members",
        optionB: "Friends",
        optionC: "Neighbours",
        correctAnswer: "Neighbours",
      },
      {
        question:
          "What are places in our neighbourhood that provide useful things and services called?",
        optionA: "Neighbourhood friends",
        optionB: "Neighbourhood market",
        optionC: "Neighbourhood places",
        correctAnswer: "Neighbourhood places",
      },
      {
        question: "Where can you buy letters and stamps in your neighbourhood?",
        optionA: "Market",
        optionB: "Post office",
        optionC: "Bank",
        correctAnswer: "Post office",
      },
      {
        question: "Where do people deposit their money in the neighbourhood?",
        optionA: "Post office",
        optionB: "Bank",
        optionC: "Banquet hall",
        correctAnswer: "Bank",
      },
      {
        question:
          "In which place can you organize parties in your neighbourhood?",
        optionA: "Post office",
        optionB: "Banquet hall",
        optionC: "Cinema hall",
        correctAnswer: "Banquet hall",
      },
      {
        question: "Where do you go when you are sick in your neighbourhood?",
        optionA: "Cinema hall",
        optionB: "Hospital or clinic",
        optionC: "Bus stop",
        correctAnswer: "Hospital or clinic",
      },
      {
        question: "Where should you go to report theft in your neighbourhood?",
        optionA: "Bank",
        optionB: "Cinema hall",
        optionC: "Police station",
        correctAnswer: "Police station",
      },
      {
        question: "Where can you watch a movie in your neighbourhood?",
        optionA: "Hospital",
        optionB: "Restaurant",
        optionC: "Cinema hall",
        correctAnswer: "Cinema hall",
      },
      {
        question: "Where can you offer prayers in your neighbourhood?",
        optionA: "Banquet hall",
        optionB: "Cinema hall",
        optionC: "Places of worship",
        correctAnswer: "Places of worship",
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
          "__________ is the area around our houses. The people living around our houses are our __________.",
        optionA: "Market, friends",
        optionB: "Neighbourhood, neighbours",
        optionC: "Park, relatives",
        correctAnswer: "Neighbourhood, neighbours",
      },
      {
        question:
          "There are many places in our neighbourhood which provide many useful things and services to us. These are called __________ places.",
        optionA: "Shopping",
        optionB: "Neighbourhood",
        optionC: "Community",
        correctAnswer: "Neighbourhood",
      },
      {
        question: "We buy letters and stamps from the __________.",
        optionA: "Hospital",
        optionB: "Cinema hall",
        optionC: "Post office",
        correctAnswer: "Post office",
      },
      {
        question: "We deposit our money in the __________.",
        optionA: "Banquet hall",
        optionB: "Bank",
        optionC: "Park",
        correctAnswer: "Bank",
      },
      {
        question: "We organize parties at the __________.",
        optionA: "Police station",
        optionB: "Railway station",
        optionC: "Banquet hall",
        correctAnswer: "Banquet hall",
      },
      {
        question: "We visit a hospital or clinic when we fall __________.",
        optionA: "Happy",
        optionB: "Sick",
        optionC: "Hungry",
        correctAnswer: "Sick",
      },
      {
        question: "We go to the __________ when we need to report any theft.",
        optionA: "Cinema hall",
        optionB: "Park",
        optionC: "Police station",
        correctAnswer: "Police station",
      },
      {
        question: "We watch a movie at the __________.",
        optionA: "Restaurant",
        optionB: "Cinema hall",
        optionC: "Post office",
        correctAnswer: "Cinema hall",
      },
      {
        question: "There are different places of worship to offer __________.",
        optionA: "Parties",
        optionB: "Prayers",
        optionC: "Meals",
        correctAnswer: "Prayers",
      },
      {
        question: "We take a train from the __________.",
        optionA: "Park",
        optionB: "Railway station",
        optionC: "Bus stop",
        correctAnswer: "Railway station",
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
          "The principal is responsible for teaching different subjects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The sports teacher's primary role is to teach sports.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The dance teacher is responsible for teaching dance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The receptionist issues books to the students.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The librarian watches the school gate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The peon looks after the plants at the school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The guard receives visitors and telephone calls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The bus driver brings the students to the school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The subject teachers teach different subjects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "All other persons at school work under the principal's guidance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
