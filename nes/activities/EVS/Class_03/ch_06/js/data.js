export const chapter = "Chapter - 6: Our Houses and Neighbourhood ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are houses made of in cities?",
          optionA: "Mud and thorny bushes",
          optionB: "Iron, steel, bricks, and cement",
          optionC: "Wood and bamboo",
          correctAnswer: "B",
        },
        {
          question: "Why do houses in hilly areas have sloping roofs?",
          optionA: "To collect rainwater",
          optionB: "To prevent the falling of snow",
          optionC: "To attract wild animals",
          correctAnswer: "B",
        },
        {
          question: "What material are the roofs made of in houses in deserts?",
          optionA: "Iron and steel",
          optionB: "Thorny bushes",
          optionC: "Mud",
          correctAnswer: "B",
        },
        {
          question:
            "How are houses constructed in flooded areas to combat heavy rainfall?",
          optionA: "On stilts raised from wooden poles",
          optionB: "With sloping roofs",
          optionC: "Plastered with mud",
          correctAnswer: "A",
        },
        {
          question: "Why are houses in earthquake-prone areas made of wood?",
          optionA: "To attract insects",
          optionB: "Because wood is flexible and doesn't break easily",
          optionC: "To keep the house cool",
          correctAnswer: "B",
        },
        {
          question: "What is a golden rule for keeping a house clean?",
          optionA: "Cover the dustbin to attract flies",
          optionB: "Sweep and mop the floors weekly",
          optionC: "Throw garbage in dustbins only",
          correctAnswer: "C",
        },
        {
          question: "What is the area surrounding our house known as?",
          optionA: "District",
          optionB: "Neighborhood",
          optionC: "Locality",
          correctAnswer: "B",
        },
        {
          question: "What is the purpose of going to the market?",
          optionA: "To learn and study",
          optionB: "To get necessary items",
          optionC: "To deposit money",
          correctAnswer: "B",
        },
        {
          question: "What is the importance of a map in accessing location?",
          optionA: "It helps in locating different places in an area",
          optionB: "It attracts flies and insects",
          optionC: "It keeps the house cool",
          correctAnswer: "A",
        },
        {
          question:
            "How many cardinal directions are there, and what are they?",
          optionA: "Two - Left and Right",
          optionB: "Three - Up, Down, and Sideways",
          optionC: "Four - East, West, North, and South",
          correctAnswer: "C",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "In cities, permanent houses such as ____________, flats, apartments, etc., are made of iron, steel, bricks, cement, etc.",
          optionA: "Huts",
          optionB: "Temporary",
          optionC: "Bungalows",
          correctAnswer: "C",
        },
        {
          question:
            "In hilly areas, houses have sloping roofs to prevent the falling of __________.",
          optionA: "Sand",
          optionB: "Snow",
          optionC: "Rain",
          correctAnswer: "B",
        },
        {
          question:
            "In deserts, the walls of houses are plastered with mud to keep them cool, and roofs are made of __________ bushes.",
          optionA: "Thorny",
          optionB: "Bamboo",
          optionC: "Palm",
          correctAnswer: "A",
        },
        {
          question:
            "In flooded areas, houses are made on a raised platform of __________ poles, made from bamboo and called stilts.",
          optionA: "Steel",
          optionB: "Wooden",
          optionC: "Concrete",
          correctAnswer: "B",
        },
        {
          question:
            "Houses in earthquake-prone areas are made up of __________ because they are flexible and don't break easily.",
          optionA: "Concrete",
          optionB: "Steel",
          optionC: "Wood",
          correctAnswer: "C",
        },
        {
          question:
            "To keep a house clean, toilets and bathrooms should be cleaned __________.",
          optionA: "Monthly",
          optionB: "Weekly",
          optionC: "Yearly",
          correctAnswer: "B",
        },
        {
          question: "The area surrounding our house is known as __________.",
          optionA: "District",
          optionB: "Suburb",
          optionC: "Neighborhood",
          correctAnswer: "C",
        },
        {
          question:
            "A map is an exact drawing of a place on a flat surface, showing the location of different places in an area, and helps to access __________.",
          optionA: "Time",
          optionB: "Weather",
          optionC: "Location",
          correctAnswer: "C",
        },
        {
          question:
            "We have four cardinal directions - East, West, North, and __________.",
          optionA: "South-East",
          optionB: "South-West",
          optionC: "South",
          correctAnswer: "C",
        },
        {
          question:
            "If you want to go to the school from the house, you will come straight, then take a __________ turn after passing the mall.",
          optionA: "Right",
          optionB: "Left",
          optionC: "U-turn",
          correctAnswer: "B",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Unusual houses are commonly found in nature.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Houses in hilly areas have straight roofs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Houses in deserts are plastered with cement.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Houses in flooded areas are often constructed on stilts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Wooden houses are not suitable for earthquake-prone areas.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "To keep a house clean, toilets and bathrooms should be cleaned weekly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The area surrounding our house is known as a district.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A map is an exact drawing of a place on a flat surface, showing the location of different places.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "We have five cardinal directions - North, South, East, West, and Southeast.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Taking a left turn is required to reach the school from the house in the given directions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
