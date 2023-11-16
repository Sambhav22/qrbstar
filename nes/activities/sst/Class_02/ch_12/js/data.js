export const chapter = "Chapter - 12: Different Festivals  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Which type of festivals can be classified based on the text?",
        optionA: "Religious festivals",
        optionB: "Cultural festivals",
        optionC: "Seasonal festivals",
        correctAnswer: "A) Religious festivals",
      },
      {
        question: "What is Holi also known as?",
        optionA: "Festival of lights",
        optionB: "Festival of colors",
        optionC: "Festival of flowers",
        correctAnswer: "B) Festival of colors",
      },
      {
        question: "When does Holi usually fall?",
        optionA: "January",
        optionB: "March",
        optionC: "December",
        correctAnswer: "B) March",
      },
      {
        question: "Which religious group celebrates Eid-ul-Fitr?",
        optionA: "Hindus",
        optionB: "Christians",
        optionC: "Muslims",
        correctAnswer: "C) Muslims",
      },
      {
        question: "What is the special sweet dish prepared on Eid-ul-Fitr?",
        optionA: "Gujiya",
        optionB: "Sewain",
        optionC: "Pongal rice",
        correctAnswer: "B) Sewain",
      },
      {
        question:
          "Gurupurabs are celebrated to mark the birthdays of how many Sikh gurus?",
        optionA: "5",
        optionB: "10",
        optionC: "15",
        correctAnswer: "B) 10",
      },
      {
        question: "When is Christmas celebrated?",
        optionA: "25th November",
        optionB: "25th December",
        optionC: "25th January",
        correctAnswer: "B) 25th December",
      },
      {
        question:
          "What is the main crop celebrated during the Pongal festival?",
        optionA: "Rice",
        optionB: "Wheat",
        optionC: "Corn",
        correctAnswer: "A) Rice",
      },
      {
        question: "Which Indian state celebrates the festival of Onam?",
        optionA: "Punjab",
        optionB: "Tamil Nadu",
        optionC: "Kerala",
        correctAnswer: "C) Kerala",
      },
      {
        question:
          "Which famous dances, Bhangra and Giddha, are performed during which festival?",
        optionA: "Holi",
        optionB: "Pongal",
        optionC: "Baisakhi",
        correctAnswer: "C) Baisakhi",
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
          "Festivals are the time of joy and celebration. People wear new clothes, eat special food, and visit their friends and families on festivals. There are a variety of festivals celebrated throughout the country. They can be classified as ____________ festivals and harvest festivals.",
        options: ["Religious", "Cultural", "Seasonal"],
        correctAnswer: "Religious",
      },
      {
        question:
          "Holi is an important Hindu festival. It is also known as the festival of ____________. It falls in the month of March. It is full of fun and frolic. Its celebration starts with a Holika bonfire on the night before Holi.",
        options: ["Lights", "Colors", "Flowers"],
        correctAnswer: "Colors",
      },
      {
        question:
          "Eid-ul-Fitr is an important religious festival of the Muslims. It is celebrated at the end of the holy month of fasting 'Ramzan'. The male members offer namaz in Idgahs or mosques. After the namaz, they embrace each other and say 'Eid Mubarak'. A special sweet dish called ____________ is prepared on this day.",
        options: ["Gujiya", "Sewain", "Pongal rice"],
        correctAnswer: "Sewain",
      },
      {
        question:
          "Gurupurabs are the most sacred festivals of the Sikhs. They are celebrated to mark the birthdays of ten Sikh gurus. On these days, people go to gurudwaras to pray. They take out processions. They sit together and eat food called ____________.",
        options: ["Halwa", "Langar", "Kheer"],
        correctAnswer: "Langar",
      },
      {
        question:
          "Christmas is the festival of the Christians. It is celebrated on 25th December every year. It marks the birthday of ____________. On this day, people go to church to offer special prayers. They decorate the Christmas tree and exchange sweets and gifts.",
        options: ["Santa Claus", "Jesus Christ", "Mary Magdalene"],
        correctAnswer: "Jesus Christ",
      },
      {
        question:
          "Harvest festivals are celebrated in a particular region where the crop is ready to be harvested. Pongal, Onam, and Baisakhi are some such festivals. Pongal is the harvest festival of ____________. It falls in the month of January and is celebrated for four days.",
        options: ["Tamil Nadu", "Kerala", "Punjab"],
        correctAnswer: "Tamil Nadu",
      },
      {
        question:
          "Onam is the harvest festival of Kerala. It falls in the month of ____________ and is celebrated for ten days. There is feasting and joy in every house for ten days. Big processions on elephants are taken out.",
        options: ["June", "August or September", "December"],
        correctAnswer: "August or September",
      },
      {
        question:
          "Baisakhi is an important harvest festival of Punjab. It falls in the month of April when the wheat crop is ready to harvest. People wear colorful clothes. They sing and dance on the beats of ____________. The famous dances Bhangra and Giddha are also performed on this day.",
        options: ["Dhol", "Tabla", "Sitar"],
        correctAnswer: "Dhol",
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
          "Festivals are the time of joy and celebration. People wear new clothes, eat special food, and visit their friends and families on festivals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Holi is an important Hindu festival that falls in the month of March, full of fun and frolic, with a Holika bonfire and the tradition of rubbing gulal on each other's faces.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Eid-ul-Fitr is an important religious festival of the Muslims, celebrated at the end of the holy month of fasting 'Ramzan' with a special sweet dish called sewain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Gurupurabs are celebrated to mark the birthdays of five Sikh gurus, and people go to gurudwaras to pray and take out processions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Christmas is celebrated on 25th December every year, marking the birthday of Santa Claus, and people decorate Christmas trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Harvest festivals are celebrated in regions where the crop is ready to be harvested, including Pongal, Onam, and Baisakhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Pongal is the harvest festival of Kerala, celebrated in August or September for ten days with feasting, big processions, and the snake boat race.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Baisakhi is celebrated in Tamil Nadu, welcoming the arrival of a good crop in the month of January.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Onam is celebrated in Punjab, with people wearing colorful clothes, singing, and dancing on the beats of dhol.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Holi is also known as the festival of lights, and it is celebrated with a special dish called gujiya.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
