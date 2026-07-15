export const chapter = "Chapter - 17: Seasons ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is weather?",
        optionA:
          "The state of wind, rain, or sun at a particular place and time.",
        optionB: "The three main seasons experienced.",
        optionC: "The different kinds of clothing people wear during seasons.",
        correctAnswer: "A",
      },
      {
        question: "How many main seasons are mentioned in the text?",
        optionA: "2",
        optionB: "4",
        optionC: "3",
        correctAnswer: "C",
      },
      {
        question:
          "Which season is characterized by hot and dry winds called 'loo'?",
        optionA: "Winter",
        optionB: "Summer",
        optionC: "Rainy",
        correctAnswer: "B",
      },
      {
        question:
          "What do people use to keep themselves cool during the summer season?",
        optionA: "Woollen clothes",
        optionB: "Fire and heaters",
        optionC: "Fans, coolers, and air-conditioners",
        correctAnswer: "C",
      },
      {
        question: "What are the months of the rainy season in the text?",
        optionA: "January, February, and March",
        optionB: "April, May, and June",
        optionC: "July, August, and September",
        correctAnswer: "C",
      },
      {
        question:
          "Which season is experienced in the months of February and March and is characterized by the growth of new leaves and colorful flowers?",
        optionA: "Winter",
        optionB: "Spring",
        optionC: "Autumn",
        correctAnswer: "B",
      },
      {
        question:
          "Which season is also known as the 'fall season' due to many trees shedding their leaves?",
        optionA: "Summer",
        optionB: "Rainy",
        optionC: "Autumn",
        correctAnswer: "C",
      },
      {
        question: "What causes the different seasons on Earth?",
        optionA: "The rotation of the Earth",
        optionB: "The movement of clouds",
        optionC: "The Earth's constant movement around the sun",
        correctAnswer: "C",
      },
      {
        question:
          "What do people use during the rainy season to protect themselves from the rain?",
        optionA: "Fans",
        optionB: "Coolers",
        optionC: "Umbrellas and raincoats",
        correctAnswer: "C",
      },
      {
        question: "In which season does it snow in hilly areas?",
        optionA: "Summer",
        optionB: "Rainy",
        optionC: "Winter",
        correctAnswer: "C",
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
          "Weather is the state of wind, rain or sun at a particular place and time. We experience different kinds of weather throughout the year. Sometimes it feels very hot, whereas sometimes it feels chilly cold. It may change from time to time or during the same day. When we have the same kind of weather for a long time, it is called season. Winter, summer, and rainy are the three main seasons. Winter Season The winter season lasts from November to January. It is very cold during these months. Cold winds blow. There is snowfall in the hilly areas. The people wear woollen clothes. They use fire and heaters to keep themselves warm. They like to take hot food, tea, coffee, and milk. The sun seems pleasant. Summer Season The summer season lasts from April to June. The weather is hot during these days. Hot and dry winds, called loo, blow during this season. The people wear cotton clothes. They use fans, coolers, and air-conditioners to keep themselves cool. They like to take ice-cream, cold juice, and cold milk. They like to stay indoors at noon. Some people visit the hill stations in this season where it is not so hot. Rainy Season It is the rainy season during the months of July, August, and September. The moist winds, called monsoon, blow from the seas towards the land. The amount of rain is different at different places. It rains much at some places while less at other places. The people use umbrellas and raincoats during this season. We have different seasons because of the earth's constant movement around the sun. Apart from these, there are two more seasons experienced but their period of time is shorter in comparison to the above seasons. These two seasons are Spring Season and Autumn Season The spring season is experienced in the months of February and March, when the weather is pleasant. It is not so hot and not so cold. During this season, plants grow new leaves and colorful flowers bloom. There is greenery all around. The autumn season is experienced in the month of October. Many trees shed their leaves during this season that is why it is also called the fall season. This season is also neither too hot nor too cold.",
        options: ["place", "season", "caves"],
        correctAnswer: "season",
      },
      {
        question: "The summer season lasts from April to _______.",
        options: ["June", "September", "December"],
        correctAnswer: "June",
      },
      {
        question:
          "Hot and dry winds, called _______, blow during the summer season.",
        options: ["Monsoon", "Loo", "Breeze"],
        correctAnswer: "Loo",
      },
      {
        question:
          "Spring season is experienced in the months of February and March when the weather is _______.",
        options: ["Pleasant", "Extremely hot", "Rainy"],
        correctAnswer: "Pleasant",
      },
      {
        question: "The autumn season is experienced in the month of _______.",
        options: ["January", "October", "May"],
        correctAnswer: "October",
      },
      {
        question:
          "Autumn season is neither too hot nor too cold, which is why it is also called the _______ season.",
        options: ["Winter", "Spring", "Fall"],
        correctAnswer: "Fall",
      },
      {
        question:
          "During the summer season, people use fans, coolers, and air-conditioners to keep themselves _______.",
        options: ["Warm", "Cool", "Comfortable"],
        correctAnswer: "Cool",
      },
      {
        question:
          "We have different seasons because of the earth's constant movement around the _______.",
        options: ["Moon", "Mars", "Sun"],
        correctAnswer: "Sun",
      },
      {
        question:
          "The moist winds, called _______, blow during the rainy season.",
        options: ["Monsoon", "Loo", "Breeze"],
        correctAnswer: "Monsoon",
      },
      {
        question:
          "The people wear _______ clothes during the winter season to keep themselves warm.",
        options: ["Cotton", "Woollen", "Silk"],
        correctAnswer: "Woollen",
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
          "The Earth's constant movement around the sun causes different seasons.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Winter is characterized by hot and dry winds known as 'loo.'",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Early men used to sleep on trees when living in the open forest.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Spring season is experienced in the months of September and October.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The use of fire by early men helped protect them from wild animals and cold.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The autumn season is known for being extremely hot.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The rainy season is characterized by the moist winds called 'monsoon.'",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Early men primarily consumed animal meat in raw form.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "People wear woollen clothes during the summer season to keep themselves warm.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
