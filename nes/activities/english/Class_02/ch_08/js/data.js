export const chapter = "Chapter - 8: People Who Help Us ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who bakes our biscuits?",
        optionA: "Farmer",
        optionB: "Baker",
        optionC: "Electrician",
        correctAnswer: "Baker",
      },
      {
        question: "Who fixes leaky pipes?",
        optionA: "Plumber",
        optionB: "Painter",
        optionC: "Tailor",
        correctAnswer: "Plumber",
      },
      {
        question: "Who prints the news?",
        optionA: "Miner",
        optionB: "Printer",
        optionC: "Mechanic",
        correctAnswer: "Printer",
      },
      {
        question: "Who drills for oil?",
        optionA: "Driller",
        optionB: "Gardener",
        optionC: "Cobbler",
        correctAnswer: "Driller",
      },
      {
        question: "Who sews our garments?",
        optionA: "Barber",
        optionB: "Tailor",
        optionC: "Upholsterer",
        correctAnswer: "Tailor",
      },
      {
        question: "Who plants flower-beds and weeds with care?",
        optionA: "Electrician",
        optionB: "Gardener",
        optionC: "Butcher",
        correctAnswer: "Gardener",
      },
      {
        question: "Who makes furniture?",
        optionA: "Carpenter",
        optionB: "Dealer",
        optionC: "Mechanic",
        correctAnswer: "Carpenter",
      },
      {
        question: "Who chops our meat?",
        optionA: "Farmer",
        optionB: "Butcher",
        optionC: "Painter",
        correctAnswer: "Butcher",
      },
      {
        question: "Who sells wares?",
        optionA: "Miner",
        optionB: "Tailor",
        optionC: "Dealer",
        correctAnswer: "Dealer",
      },
      {
        question: "Who cuts our hair?",
        optionA: "Barber",
        optionB: "Plumber",
        optionC: "Upholsterer",
        correctAnswer: "Barber",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "The _______ bakes our biscuits.",
        optionA: "Farmer",
        optionB: "Baker",
        optionC: "Electrician",
        correctAnswer: "Baker",
      },
      {
        question: "The cobbler mends our _______.",
        optionA: "Shoes",
        optionB: "Shirts",
        optionC: "Pots",
        correctAnswer: "Shoes",
      },
      {
        question: "The plumber fixes _______ pipes.",
        optionA: "Leaky",
        optionB: "Electrical",
        optionC: "Wooden",
        correctAnswer: "Leaky",
      },
      {
        question: "The printer prints the _______.",
        optionA: "Books",
        optionB: "News",
        optionC: "Maps",
        correctAnswer: "News",
      },
      {
        question: "The miner digs for _______.",
        optionA: "Gold",
        optionB: "Silver",
        optionC: "Diamonds",
        correctAnswer: "Silver",
      },
      {
        question: "The farmer tills the _______.",
        optionA: "Water",
        optionB: "Air",
        optionC: "Soil",
        correctAnswer: "Soil",
      },
      {
        question: "The electrician fixes _______.",
        optionA: "Cars",
        optionB: "Lights",
        optionC: "Furniture",
        correctAnswer: "Lights",
      },
      {
        question: "The driller drills for _______.",
        optionA: "Water",
        optionB: "Oil",
        optionC: "Gold",
        correctAnswer: "Oil",
      },
      {
        question: "The painter paints our _______ and doors.",
        optionA: "Cars",
        optionB: "Walls",
        optionC: "Windows",
        correctAnswer: "Walls",
      },
      {
        question: "The tailor sews our _______.",
        optionA: "Shoes",
        optionB: "Garments",
        optionC: "Hats",
        correctAnswer: "Garments",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The baker bakes our biscuits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The cobbler mends our hats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The plumber fixes leaky pipes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The printer prints the weather forecast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The miner digs for gold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The farmer tills the soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The electrician fixes lights.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The driller drills for water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The painter paints our walls and doors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The tailor sews our shoes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
