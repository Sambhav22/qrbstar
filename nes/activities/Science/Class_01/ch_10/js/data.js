export const chapter = "Chapter - 10: AIR ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the term for moving air?",
          optionA: "Breeze",
          optionB: "Storm",
          optionC: "Wind",
          correctAnswer: "Wind",
        },
        {
          question: "When wind moves slowly, what is it called?",
          optionA: "Storm",
          optionB: "Breeze",
          optionC: "Hurricane",
          correctAnswer: "Breeze",
        },
        {
          question: "What happens to a balloon when you blow air into it?",
          optionA: "It becomes smaller",
          optionB: "It remains the same size",
          optionC: "It grows bigger",
          correctAnswer: "It grows bigger",
        },
        {
          question: "What property of air gives shape to things?",
          optionA: "Air has weight",
          optionB: "Air takes up space",
          optionC: "Air is invisible",
          correctAnswer: "Air takes up space",
        },
        {
          question: "How can you demonstrate that air has weight?",
          optionA: "By holding a flat balloon",
          optionB: "By holding an air-filled balloon",
          optionC: "By holding an empty balloon",
          correctAnswer: "By holding an air-filled balloon",
        },
        {
          question:
            "What is the term for fast-moving wind that can uproot trees?",
          optionA: "Breeze",
          optionB: "Gale",
          optionC: "Storm",
          correctAnswer: "Storm",
        },
        {
          question: "Which of the following is NOT mentioned as a use of air?",
          optionA: "Helping boats to sail",
          optionB: "Helping clothes to dry faster",
          optionC: "Helping rocks to float",
          correctAnswer: "Helping rocks to float",
        },
        {
          question: "In what way does air assist birds and aircraft?",
          optionA: "It helps them to sing better",
          optionB: "It helps them to fly",
          optionC: "It helps them to build nests",
          correctAnswer: "It helps them to fly",
        },
        {
          question:
            "What does air do when it fills the space inside a balloon?",
          optionA: "It becomes invisible",
          optionB: "It takes up weight",
          optionC: "It gives shape to the balloon",
          correctAnswer: "It gives shape to the balloon",
        },
        {
          question: "What is the purpose of windmills mentioned in the text?",
          optionA: "Generating electricity",
          optionB: "Providing shade",
          optionC: "Moving air for fun",
          correctAnswer: "Generating electricity",
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
          question:
            "There are different places of worship to offer __________.",
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
            "The area around our houses is called the neighbourhood, and the people living around our houses are our neighbours.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Places in our neighbourhood that provide useful things and services are known as community places.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "We buy letters and stamps from the hospital.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "We deposit our money in the park.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "We organize parties at the police station.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Visiting a hospital or clinic is appropriate when we feel happy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Reporting theft is done at the cinema hall.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Watching a movie is done at the restaurant.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Places of worship are meant for offering meals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Trains are taken from the bus stop.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
