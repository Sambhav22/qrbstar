export const chapter = "Chapter - 20: Means of Transport   ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is transportation?",
        optionA: "The activity of carrying goods only",
        optionB: "The activity of carrying individuals only",
        optionC:
          "The activity that facilitates the movement of goods and individuals",
        correctAnswer: "C",
      },
      {
        question:
          "Which of the following modes of transport is considered the oldest form of transport?",
        optionA: "Railways",
        optionB: "Waterways",
        optionC: "Road transport",
        correctAnswer: "C",
      },
      {
        question:
          "Which mode of transport is suitable for bulky goods and economical for long distances?",
        optionA: "Roadways",
        optionB: "Railways",
        optionC: "Waterways",
        correctAnswer: "B",
      },
      {
        question:
          "What type of roads in India have six to eight lanes and controlled access?",
        optionA: "Expressways",
        optionB: "National Highways",
        optionC: "State Highways",
        correctAnswer: "A",
      },
      {
        question:
          "Which mode of transport is known for its regularity in operation and less pollution due to electricity use?",
        optionA: "Roadways",
        optionB: "Railways",
        optionC: "Waterways",
        correctAnswer: "B",
      },
      {
        question: "How does water transport contribute to international trade?",
        optionA: "It is relatively expensive",
        optionB: "It has high load carrying capacity",
        optionC: "It requires special infrastructure",
        correctAnswer: "B",
      },
      {
        question: "Which city is mentioned as the largest seaport in India?",
        optionA: "Kolkata",
        optionB: "Mumbai",
        optionC: "Visakhapatnam",
        correctAnswer: "B",
      },
      {
        question:
          "Which mode of transport is the most modern and quickest means of transportation?",
        optionA: "Roadways",
        optionB: "Railways",
        optionC: "Airways",
        correctAnswer: "C",
      },
      {
        question:
          "What is one of the drawbacks of air transport mentioned in the text?",
        optionA: "It is not suitable for long distances",
        optionB: "It requires a large investment in infrastructure",
        optionC: "It is the riskiest form of transport",
        correctAnswer: "C",
      },
      {
        question:
          "Which Indian airport is mentioned as being located in Delhi?",
        optionA: "Indira Gandhi International Airport",
        optionB: "Chhatrapati Shivaji International Airport",
        optionC: "Netaji Subhash Chandra Bose International Airport",
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
          "__________ is a means of carrying goods and people from one place to another. Transportation refers to the activity that facilitates physical movement of goods as well as individuals from one location to another.",
        options: ["Transport", "Conduction", "Conveyance"],
        correctAnswer: "Transport",
      },
      {
        question:
          "Road transport is considered the __________ form of transport.",
        options: ["Newest", "Oldest", "Quickest"],
        correctAnswer: "Oldest",
      },
      {
        question:
          "Road transport is highly flexible, allowing for the route to be changed __________.",
        options: ["Regularly", "Anytime", "Seasonally"],
        correctAnswer: "Anytime",
      },
      {
        question: "Rail transport is suitable for carrying __________ goods.",
        options: ["Bulky", "Small", "Fragile"],
        correctAnswer: "Bulky",
      },
      {
        question:
          "There is less pollution in rail transport because trains operate on __________.",
        options: ["Gasoline", "Electricity", "Diesel"],
        correctAnswer: "Electricity",
      },
      {
        question:
          "__________ play an integrating role in the social and economic development of the country.",
        options: ["Airways", "Waterways", "Railways"],
        correctAnswer: "Railways",
      },
      {
        question:
          "Water transport plays an important role in __________ trade.",
        options: ["National", "International", "Local"],
        correctAnswer: "International",
      },
      {
        question:
          "India is surrounded by the Bay of Bengal in the east, the Arabian Sea in the west, and the Indian Ocean in the north, giving it a long __________.",
        options: ["Coastline", "Desert", "Mountain range"],
        correctAnswer: "Coastline",
      },
      {
        question: "Airways provide the __________ means of transportation.",
        options: ["Slowest", "Most modern and quickest", "Least expensive"],
        correctAnswer: "Most modern and quickest",
      },
      {
        question:
          "Air transport is considered the most risky form of transport due to __________.",
        options: [
          "Uniformity in rates",
          "High operating costs",
          "Regularity in operation",
        ],
        correctAnswer: "High operating costs",
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
