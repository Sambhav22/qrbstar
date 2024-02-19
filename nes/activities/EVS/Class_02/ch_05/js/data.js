export const chapter = "Chapter - 5: Our Basic Needs ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the two main sources from which we get our food?",
          optionA: "Plants and Fungi",
          optionB: "Plants and Animals",
          optionC: "Animals and Bacteria",
          correctAnswer: "Plants and Animals",
        },
        {
          question: "Which of the following is considered a plant product?",
          optionA: "Milk",
          optionB: "Eggs",
          optionC: "Pulses",
          correctAnswer: "Pulses",
        },
        {
          question:
            "What are pulses, cereals, vegetables, and fruits collectively referred to as?",
          optionA: "Animal Products",
          optionB: "Plant Products",
          optionC: "Synthetic Products",
          correctAnswer: "Plant Products",
        },
        {
          question: "Which category of food provides energy to the body?",
          optionA: "Protective Foods",
          optionB: "Energy Giving Foods",
          optionC: "Body Building Foods",
          correctAnswer: "Energy Giving Foods",
        },
        {
          question: "What are milk, eggs, and meat considered as?",
          optionA: "Protective Foods",
          optionB: "Energy Giving Foods",
          optionC: "Animal Products",
          correctAnswer: "Animal Products",
        },
        {
          question: "In Kavya's thali, which three kinds of foods are present?",
          optionA: "Desserts, Snacks, and Beverages",
          optionB: "Protective, Energy Giving, and Body Building Foods",
          optionC: "Spices, Condiments, and Sauces",
          correctAnswer: "Protective, Energy Giving, and Body Building Foods",
        },
        {
          question: "According to the text, why should we take a proper diet?",
          optionA: "To gain weight",
          optionB: "To be healthy",
          optionC: "To build muscles",
          correctAnswer: "To be healthy",
        },
        {
          question:
            "How many times a day does the text suggest we should have food?",
          optionA: "Once",
          optionB: "Twice",
          optionC: "Thrice",
          correctAnswer: "Thrice",
        },
        {
          question: "When is breakfast recommended according to the text?",
          optionA: "Noon",
          optionB: "Night",
          optionC: "Morning",
          correctAnswer: "Morning",
        },
        {
          question:
            "What does the thali of Kavya contain that is helpful in strengthening the body and protecting from illness?",
          optionA: "Only Body Building Foods",
          optionB: "Only Energy Giving Foods",
          optionC: "Protective, Energy Giving, and Body Building Foods",
          correctAnswer: "Protective, Energy Giving, and Body Building Foods",
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
            "Food is our _________ need. It is a fuel that our body needs to function.",
          optionA: "Essential",
          optionB: "Basic",
          optionC: "Luxurious",
          correctAnswer: "Basic",
        },
        {
          question:
            "Pulses, cereals, vegetables, and fruits are the products which we get from ____________.",
          optionA: "Animals",
          optionB: "Plants",
          optionC: "Fungi",
          correctAnswer: "Plants",
        },
        {
          question:
            "Milk, eggs, and meat are the products which we get from ____________.",
          optionA: "Fish",
          optionB: "Birds",
          optionC: "Animals",
          correctAnswer: "Animals",
        },
        {
          question:
            "In Kavya's thali, there are all three kinds of food i.e., protective, energy-giving, and body-building foods. Such food items are helpful in strengthening our body and protecting us from ____________.",
          optionA: "Laziness",
          optionB: "Illness",
          optionC: "Stress",
          correctAnswer: "Illness",
        },
        {
          question: "To be healthy, we should take a proper ____________.",
          optionA: "Exercise",
          optionB: "Sleep",
          optionC: "Diet",
          correctAnswer: "Diet",
        },
        {
          question: "We should take food ____________ times in a day.",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Three",
        },
        {
          question: "Breakfast should be taken in ____________.",
          optionA: "The Evening",
          optionB: "The Morning",
          optionC: "The Night",
          correctAnswer: "The Morning",
        },
        {
          question: "Lunch should be taken in ____________.",
          optionA: "The Noon",
          optionB: "The Evening",
          optionC: "The Morning",
          correctAnswer: "The Noon",
        },
        {
          question: "Dinner should be taken at ____________.",
          optionA: "The Morning",
          optionB: "The Noon",
          optionC: "Night",
          correctAnswer: "Night",
        },
        {
          question:
            "In Kavya's thali, there are all three kinds of food i.e., protective, energy-giving, and body-building foods. These food items are helpful in strengthening our body and protect us from ____________.",
          optionA: "Happiness",
          optionB: "Sickness",
          optionC: "Excitement",
          correctAnswer: "Sickness",
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
            "Plants, animals, pulses, cereals, vegetables, and fruits are sources of food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Milk, eggs, and meat are examples of plant products.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Kavya's thali contains only energy-giving foods.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Taking a proper diet helps in protecting the body from illness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "We should have food four times a day.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Breakfast should be taken in the evening.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Lunch should be taken in the morning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Dinner should be taken at night.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Protective, energy-giving, and body-building foods are essential for a healthy diet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Taking a proper diet helps in gaining weight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
