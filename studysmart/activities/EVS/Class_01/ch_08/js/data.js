export const chapter = "Chapter - 8: Our Neighbourhood";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do we call the area around our home where we live and meet people?",
        "optionA": "Forest",
        "optionB": "Neighbourhood",
        "optionC": "River",
        "correctAnswer": "Neighbourhood"
      },
      {
        "question": "Where do people usually buy fruits and vegetables?",
        "optionA": "Market",
        "optionB": "Bank",
        "optionC": "School",
        "correctAnswer": "Market"
      },
      {
        "question": "Which place is visited when someone wants to send letters or parcels?",
        "optionA": "Post office",
        "optionB": "Hospital",
        "optionC": "Park",
        "correctAnswer": "Post office"
      },
      {
        "question": "Where do children go to learn reading and writing?",
        "optionA": "Market",
        "optionB": "School",
        "optionC": "Police station",
        "correctAnswer": "School"
      },
      {
        "question": "Which place has trees, grass, and swings where children can play?",
        "optionA": "Bank",
        "optionB": "Park",
        "optionC": "Post office",
        "correctAnswer": "Park"
      },
      {
        "question": "Who helps to keep people safe in the neighbourhood?",
        "optionA": "Teacher",
        "optionB": "Shopkeeper",
        "optionC": "Police officer",
        "correctAnswer": "Police officer"
      },
      {
        "question": "Which place is usually busy with many shops and people buying things?",
        "optionA": "Market",
        "optionB": "Hospital",
        "optionC": "Police station",
        "correctAnswer": "Market"
      },
      {
        "question": "Where do people go to enjoy fresh air and relax?",
        "optionA": "Bank",
        "optionB": "School",
        "optionC": "Park",
        "correctAnswer": "Park"
      },
      {
        "question": "Who brings letters and parcels to our homes?",
        "optionA": "Doctor",
        "optionB": "Postman",
        "optionC": "Teacher",
        "correctAnswer": "Postman"
      },
      {
        "question": "Where does a police officer work?",
        "optionA": "Police station",
        "optionB": "Park",
        "optionC": "Market",
        "correctAnswer": "Police station"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The place where we live with our neighbours is called a ______.",
        "optionA": "jungle",
        "optionB": "neighbourhood",
        "optionC": "island",
        "correctAnswer": "neighbourhood"
      },
      {
        "question": "Fruits and vegetables are sold in the ______.",
        "optionA": "market",
        "optionB": "school",
        "optionC": "hospital",
        "correctAnswer": "market"
      },
      {
        "question": "Children go to ______ to study and learn new things.",
        "optionA": "school",
        "optionB": "park",
        "optionC": "bank",
        "correctAnswer": "school"
      },
      {
        "question": "A ______ brings letters and parcels to our homes.",
        "optionA": "teacher",
        "optionB": "doctor",
        "optionC": "postman",
        "correctAnswer": "postman"
      },
      {
        "question": "Letters and greeting cards are sent from the ______ office.",
        "optionA": "police",
        "optionB": "post",
        "optionC": "bank",
        "correctAnswer": "post"
      },
      {
        "question": "People walk, play, and relax in a ______.",
        "optionA": "bank",
        "optionB": "hospital",
        "optionC": "park",
        "correctAnswer": "park"
      },
      {
        "question": "A ______ officer helps to keep people safe.",
        "optionA": "post",
        "optionB": "police",
        "optionC": "market",
        "correctAnswer": "police"
      },
      {
        "question": "Many shops together make a ______.",
        "optionA": "park",
        "optionB": "market",
        "optionC": "hospital",
        "correctAnswer": "market"
      },
      {
        "question": "A ______ station is where police officers work.",
        "optionA": "police",
        "optionB": "post",
        "optionC": "bus",
        "correctAnswer": "police"
      },
      {
        "question": "The ______ is the place where children read books and learn lessons.",
        "optionA": "school",
        "optionB": "market",
        "optionC": "park",
        "correctAnswer": "school"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "A neighbourhood is the area around our home.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A park is a place where people can play and relax.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A market is a place where people buy and sell things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A postman delivers letters to homes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Schools are places where children learn new things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Police officers help keep the neighbourhood safe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A park is usually full of trees and grass.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A market is a quiet place with no shops.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A post office helps people send letters and parcels.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A neighbourhood has many helpful places for people.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
