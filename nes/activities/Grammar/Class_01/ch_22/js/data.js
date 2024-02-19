export const chapter = "Chapter - 22: Group Names";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which group consists of vegetables?",
            options: [
              "Apple, Mango, Muskmelon",
              "Potato, Onion, Tomato",
              "Lion, Jackal, Tiger",
            ],
            answer: "Potato, Onion, Tomato",
          },
          {
            question: "What category includes fruits?",
            options: [
              "Bed, Table, Chair",
              "Rose, Lotus, Sunflower",
              "Apple, Mango, Muskmelon",
            ],
            answer: "Apple, Mango, Muskmelon",
          },
          {
            question: "Among the options, which set contains wild animals?",
            options: [
              "Horse, Cow, Bull",
              "Lion, Jackal, Tiger",
              "Cricket, Basketball, Hockey",
            ],
            answer: "Lion, Jackal, Tiger",
          },
          {
            question: "What group comprises domestic animals?",
            options: [
              "Bus, Car, Motorcycle",
              "Barley, Rice, Wheat",
              "Horse, Cow, Bull",
            ],
            answer: "Horse, Cow, Bull",
          },
          {
            question: "Which group represents modes of transportation?",
            options: [
              "Bed, Table, Chair",
              "Bus, Car, Motorcycle",
              "Rose, Lotus, Sunflower",
            ],
            answer: "Bus, Car, Motorcycle",
          },
          {
            question: "Among the following, what consists of grains?",
            options: [
              "Milk, Tea, Juice",
              "Barley, Rice, Wheat",
              "Cricket, Basketball, Hockey",
            ],
            answer: "Barley, Rice, Wheat",
          },
          {
            question: "What set contains beverages?",
            options: [
              "Bed, Table, Chair",
              "Milk, Tea, Juice",
              "Cricket, Basketball, Hockey",
            ],
            answer: "Milk, Tea, Juice",
          },
          {
            question: "Which group comprises furniture items?",
            options: [
              "Bus, Car, Motorcycle",
              "Bed, Table, Chair",
              "Rose, Lotus, Sunflower",
            ],
            answer: "Bed, Table, Chair",
          },
          {
            question: "Among the options, what represents sports?",
            options: [
              "Lion, Jackal, Tiger",
              "Cricket, Basketball, Hockey",
              "Rose, Lotus, Sunflower",
            ],
            answer: "Cricket, Basketball, Hockey",
          },
          {
            question: "What category includes flowers?",
            options: [
              "Horse, Cow, Bull",
              "Rose, Lotus, Sunflower",
              "Milk, Tea, Juice",
            ],
            answer: "Rose, Lotus, Sunflower",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "The category of __________ includes potato, onion, and tomato.",
            options: ["Fruits", "Vegetables", "Animals"],
            answer: "Vegetables",
          },
          {
            question:
              "__________, mango, muskmelon, pear, and orange are all types of fruits.",
            options: ["Potato", "Apple", "Tomato"],
            answer: "Apple",
          },
          {
            question:
              "Lion, jackal, __________, bear, and deer are examples of wild animals.",
            options: ["Tiger", "Bull", "Horse"],
            answer: "Tiger",
          },
          {
            question:
              "A group of domestic animals includes horse, cow, bull, __________, and dog.",
            options: ["Cat", "Bear", "Lion"],
            answer: "Cat",
          },
          {
            question:
              "Bus, car, motorcycle, scooter, and __________ are different modes of transportation.",
            options: ["Bicycle", "Horse", "Cow"],
            answer: "Bicycle",
          },
          {
            question:
              "Barley, rice, wheat, gram, and __________ are all types of grains.",
            options: ["Millet", "Muskmelon", "Mango"],
            answer: "Millet",
          },
          {
            question: "Milk, tea, juice, coffee, and __________ are beverages.",
            options: ["Sharbat", "Orange", "Pear"],
            answer: "Sharbat",
          },
          {
            question:
              "A set of furniture items includes __________, table, chair, sofa, and diwan.",
            options: ["Bed", "Bicycle", "Bus"],
            answer: "Bed",
          },
          {
            question:
              "Cricket, basketball, hockey, and __________ are examples of sports.",
            options: ["Rose", "Lotus", "Football"],
            answer: "Football",
          },
          {
            question:
              "Rose, lotus, sunflower, pansy, and __________ are types of flowers.",
            options: ["Dahlia", "Pear", "Onion"],
            answer: "Dahlia",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "Potato is a fruit.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Mango is a type of vegetable.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Lions are herbivores.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Horses are considered domestic animals.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Bicycles are a form of water transportation.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Coffee is a type of grain.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Chairs are commonly found in the kitchen.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Basketball is a team sport.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Roses are vegetables.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Tea is a beverage.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
