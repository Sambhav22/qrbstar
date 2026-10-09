export const chapter = "Chapter - 19: Bill Payment";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who did Sohan live with?",
        "optionA": "Mother",
        "correctAnswer": "Mother",
        "optionB": "Father",
        "optionC": "Uncle"
      },
      {
        "question": "What did Sohan deliver to nearby houses?",
        "optionA": "Milk",
        "optionB": "Biscuits",
        "correctAnswer": "Biscuits",
        "optionC": "Books"
      },
      {
        "question": "When did Sohan work in the bakery?",
        "optionA": "Morning",
        "optionB": "Night",
        "optionC": "Evening",
        "correctAnswer": "Evening"
      },
      {
        "question": "What did Sohan feel due to hunger?",
        "optionA": "Strong",
        "optionB": "Weak and could fall down",
        "correctAnswer": "Weak and could fall down",
        "optionC": "Happy"
      },
      {
        "question": "Who opened the door when Sohan went to deliver biscuits?",
        "optionA": "Old man",
        "optionB": "Doctor",
        "optionC": "Little girl",
        "correctAnswer": "Little girl"
      },
      {
        "question": "What did Sohan request from the girl?",
        "optionA": "Money",
        "optionB": "Water",
        "optionC": "Food because he was hungry",
        "correctAnswer": "Food because he was hungry"
      },
      {
        "question": "What did the girl show towards Sohan?",
        "optionA": "Anger",
        "optionB": "Kindness and generosity",
        "correctAnswer": "Kindness and generosity",
        "optionC": "Fear"
      },
      {
        "question": "What did Sohan promise after eating?",
        "optionA": "To pay later when he got salary",
        "correctAnswer": "To pay later when he got salary",
        "optionB": "To leave immediately",
        "optionC": "To return food"
      },
      {
        "question": "Where was the lady admitted after her accident?",
        "optionA": "School",
        "optionB": "Hospital",
        "correctAnswer": "Hospital",
        "optionC": "Office"
      },
      {
        "question": "What was written on the hospital bill?",
        "optionA": "Already paid in full",
        "correctAnswer": "Already paid in full",
        "optionB": "Not paid",
        "optionC": "Half paid"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Sohan’s father had ______ long ago.",
        "optionA": "gone away",
        "optionB": "died",
        "correctAnswer": "died",
        "optionC": "travelled"
      },
      {
        "question": "His mother worked as a ______.",
        "optionA": "teacher",
        "optionB": "nurse",
        "optionC": "housemaid",
        "correctAnswer": "housemaid"
      },
      {
        "question": "Sohan packed ______ in the bakery.",
        "optionA": "sweets",
        "optionB": "biscuits",
        "correctAnswer": "biscuits",
        "optionC": "bread"
      },
      {
        "question": "The girl brought a glass of ______ for Sohan.",
        "optionA": "milk",
        "correctAnswer": "milk",
        "optionB": "juice",
        "optionC": "water"
      },
      {
        "question": "Sohan showed ______ before speaking to the girl.",
        "optionA": "anger",
        "optionB": "courage",
        "correctAnswer": "courage",
        "optionC": "fear"
      },
      {
        "question": "The girl asked Sohan to wait for ______.",
        "optionA": "a long time",
        "optionB": "a while",
        "correctAnswer": "a while",
        "optionC": "a day"
      },
      {
        "question": "The lady ______ after staying in the hospital.",
        "optionA": "cried",
        "optionB": "slept",
        "optionC": "recovered",
        "correctAnswer": "recovered"
      },
      {
        "question": "The girl treated Sohan like a ______.",
        "optionA": "stranger",
        "optionB": "guest",
        "correctAnswer": "guest",
        "optionC": "servant"
      },
      {
        "question": "The nurse brought the ______ to the lady.",
        "optionA": "food",
        "optionB": "bill",
        "correctAnswer": "bill",
        "optionC": "medicine"
      },
      {
        "question": "The doctor said the lady had already ______ for the treatment.",
        "optionA": "paid",
        "correctAnswer": "paid",
        "optionB": "asked",
        "optionC": "waited"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Sohan went to school and also worked in the evening.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Sohan had eaten breakfast that day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The girl helped Sohan by giving him food.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Sohan refused to take food from the girl.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Sohan said he would pay for the food later.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The girl accepted money from Sohan.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The lady stayed in the hospital for many days.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The bill showed that payment was already done.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The doctor remembered the girl’s kindness.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The story teaches us to ignore people in need.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
