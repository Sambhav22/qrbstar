export const chapter = "Chapter - 15: Religious Festivals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Which festival is known as the 'festival of lights'?",
        optionA: "Holi",
        optionB: "Eid",
        optionC: "Diwali",
        correctAnswer: "Diwali",
      },
      {
        question: "What do Hindus do during Diwali to celebrate the festival?",
        optionA: "Play with colors",
        optionB: "Burst crackers",
        optionC: "Visit gurudwaras",
        correctAnswer: "Burst crackers",
      },
      {
        question: "Which festival is known as the 'festival of colors'?",
        optionA: "Christmas",
        optionB: "Holi",
        optionC: "Eid",
        correctAnswer: "Holi",
      },
      {
        question: "What special dish is cooked at houses during Holi?",
        optionA: "Gujiya",
        optionB: "Sweets",
        optionC: "Christmas carols",
        correctAnswer: "Gujiya",
      },
      {
        question: "Which festival is the main festival of Muslims?",
        optionA: "Diwali",
        optionB: "Christmas",
        optionC: "Eid",
        correctAnswer: "Eid",
      },
      {
        question: "What do Muslims do on Eid to celebrate the festival?",
        optionA: "Play with colors",
        optionB: "Offer sweets and gifts",
        optionC: "Burst crackers",
        correctAnswer: "Offer sweets and gifts",
      },
      {
        question: "On which date is Christmas celebrated each year?",
        optionA: "25th December",
        optionB: "1st January",
        optionC: "15th November",
        correctAnswer: "25th December",
      },
      {
        question: "What is celebrated on Christmas?",
        optionA: "Birth of Lord Ganesha",
        optionB: "Birth of Lord Jesus",
        optionC: "Birth of Lord Krishna",
        correctAnswer: "Birth of Lord Jesus",
      },
      {
        question: "What are the birthdays of the ten Sikh gurus celebrated as?",
        optionA: "Diwali",
        optionB: "Gurupurab",
        optionC: "Eid",
        correctAnswer: "Gurupurab",
      },
      {
        question: "How do Sikhs celebrate Gurupurab?",
        optionA: "By visiting gurudwaras",
        optionB: "By bursting crackers",
        optionC: "By wearing new clothes",
        correctAnswer: "By visiting gurudwaras",
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
          "Diwali is the main festival of the _______. It is also called the festival of lights.",
        options: ["Christians", "Hindus", "Muslims"],
        correctAnswer: "Hindus",
      },
      {
        question: "During Diwali, people clean and decorate their _______.",
        options: ["Gardens", "Schools", "Houses"],
        correctAnswer: "Houses",
      },
      {
        question: "People offer sweets and gifts to one _______ during Diwali.",
        options: ["Animals", "Friends", "Another"],
        correctAnswer: "Another",
      },
      {
        question:
          "Diwali is a festival where people worship Goddess Lakshmi and Lord _______.",
        options: ["Krishna", "Shiva", "Ganesha"],
        correctAnswer: "Ganesha",
      },
      {
        question: "Children love to burst _______ during Diwali.",
        options: ["Balloons", "Bubbles", "Crackers"],
        correctAnswer: "Crackers",
      },
      {
        question: "Holi is also known as the festival of _______.",
        options: ["Fireworks", "Lights", "Colors"],
        correctAnswer: "Colors",
      },
      {
        question:
          "People play with colors, sing, dance, and hug each other during _______.",
        options: ["Diwali", "Holi", "Eid"],
        correctAnswer: "Holi",
      },
      {
        question:
          "A special dish called _______ is cooked at houses during Holi.",
        options: ["Biryani", "Gujiya", "Pizza"],
        correctAnswer: "Gujiya",
      },
      {
        question:
          "Christmas is celebrated on _______ each year, which is the day of Lord Jesus' birth.",
        options: ["1st January", "25th December", "15th November"],
        correctAnswer: "25th December",
      },
      {
        question:
          "Special prayers are held in churches, and people sing Christmas carols during _______.",
        options: ["Holi", "Diwali", "Christmas"],
        correctAnswer: "Christmas",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Safety rules are unimportant for us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "To maintain good health, we must follow healthy habits in our routine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Physical exercise and activity are not key factors for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "One of the 'Do's mentioned in the text is to brush your teeth twice a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "It's unnecessary to take a bath regularly for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Washing your hands after using the toilet is recommended for maintaining cleanliness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Wearing neat and clean clothes is not important for health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "A balanced diet, including fruits and green vegetables, is crucial for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "It's acceptable to eat stale food and food that is kept in the open for good health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Chewing your food well is not a good eating practice for digestion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
