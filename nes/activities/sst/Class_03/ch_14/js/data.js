export const chapter = "Chapter - 14: Means of Transport  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are the three main means of transport mentioned in the text?",
        optionA: "Land, Water, and Air",
        optionB: "Road, Sea, and Sky",
        optionC: "Motorcycle, Boat, and Aeroplane",
        correctAnswer: "Land, Water, and Air",
      },
      {
        question:
          "Which means of transport are categorized under 'Land Transport'?",
        optionA: "Boats and ships",
        optionB: "Trains and cars",
        optionC: "Helicopters and jets",
        correctAnswer: "Trains and cars",
      },
      {
        question:
          "What is the fastest means of land transport mentioned in the text?",
        optionA: "Cars",
        optionB: "Trains",
        optionC: "Motorcycles",
        correctAnswer: "Trains",
      },
      {
        question:
          "What are the chief means of water transport according to the text?",
        optionA: "Motorcycles and cars",
        optionB: "Boats and ships",
        optionC: "Trains and buses",
        correctAnswer: "Boats and ships",
      },
      {
        question:
          "What type of transport is commonly used for international business?",
        optionA: "Land transport",
        optionB: "Water transport",
        optionC: "Air transport",
        correctAnswer: "Water transport",
      },
      {
        question:
          "What is the fastest means of transport for covering very long distances in a short time?",
        optionA: "Trains",
        optionB: "Boats",
        optionC: "Aeroplanes",
        correctAnswer: "Aeroplanes",
      },
      {
        question:
          "Which animals are commonly used for transport in hilly areas where road transport is not easily available?",
        optionA: "Horses and bulls",
        optionB: "Yaks, donkeys, and mules",
        optionC: "Camels",
        correctAnswer: "Yaks, donkeys, and mules",
      },
      {
        question: "Which of the following are means of air transport?",
        optionA: "Boats and ships",
        optionB: "Cars and buses",
        optionC: "Aeroplanes and helicopters",
        correctAnswer: "Aeroplanes and helicopters",
      },
      {
        question:
          "What type of transport is used for carrying persons and goods through water?",
        optionA: "Land transport",
        optionB: "Water transport",
        optionC: "Air transport",
        correctAnswer: "Water transport",
      },
      {
        question:
          "What are the means of land transport commonly equipped with for moving on land?",
        optionA: "Wings",
        optionB: "Wheels",
        optionC: "Tracks",
        correctAnswer: "Wheels",
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
          "The means of transport allow people as well as goods to be carried from one place to another in the ________ time.",
        options: ["shortest", "longest", "fastest"],
        correctAnswer: "shortest",
      },
      {
        question:
          "We choose transport on the basis of the distance to be travelled, cost of travel, and ________ required.",
        options: ["comfort", "efficiency", "time"],
        correctAnswer: "time",
      },
      {
        question:
          "There are three main means of transport-land transport, air transport, and ________ transport.",
        options: ["space", "underwater", "water"],
        correctAnswer: "water",
      },
      {
        question:
          "Means of transport that move on land only are called ________ transport.",
        options: ["road", "air", "rail"],
        correctAnswer: "land",
      },
      {
        question:
          "Bicycle, motor cycle, scooter, car, bus, train, etc. are some common means of ________ transport.",
        options: ["air", "water", "land"],
        correctAnswer: "land",
      },
      {
        question:
          "Most land transport vehicles, except bicycle, rickshaw, and animal carts, run on ________ or petrol.",
        options: ["electricity", "CNG", "diesel"],
        correctAnswer: "diesel",
      },
      {
        question:
          "Aeroplane and helicopter are the common means of ________ transport.",
        options: ["water", "land", "air"],
        correctAnswer: "air",
      },
      {
        question:
          "Water travel is slow as compared to land and air travel, but it is the ________ means of transport.",
        options: ["fastest", "cheapest", "most luxurious"],
        correctAnswer: "cheapest",
      },
      {
        question:
          "Boat, steamer, and ship are common examples of ________ transport.",
        options: ["land", "air", "water"],
        correctAnswer: "water",
      },
      {
        question:
          "In hilly areas, ponies and mules are used to carry people and goods, and they are commonly equipped with ________ for moving on land.",
        options: ["wings", "tracks", "wheels"],
        correctAnswer: "wheels",
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
          "The means of transport allow people as well as goods to be carried from one place to another efficiently.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Land transport is the most common means of transporting people and goods from one place to another.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Aeroplanes take off from airports, while helicopters can land on any firm ground.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Water travel is faster than land and air travel.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Boats, steamers, and ships are common examples of air transport.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Animals like camels are commonly used for transport in deserts.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Battery-operated rickshaws are not popular for land transport nowadays.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Horses and bulls are commonly used for transport in forests.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Roads and railways are needed for air transport.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Water transport is the most expensive means of transport.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
