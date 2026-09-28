export const chapter = "Chapter - 8: Our Neighbourhood";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do we call the area around our home where we live and meet people?",
        "options": {
          "A": "Forest",
          "B": "Neighbourhood",
          "C": "River"
        },
        "answer": "B"
      },
      {
        "question": "Where do people usually buy fruits and vegetables?",
        "options": {
          "A": "Market",
          "B": "Bank",
          "C": "School"
        },
        "answer": "A"
      },
      {
        "question": "Which place is visited when someone wants to send letters or parcels?",
        "options": {
          "A": "Post office",
          "B": "Hospital",
          "C": "Park"
        },
        "answer": "A"
      },
      {
        "question": "Where do children go to learn reading and writing?",
        "options": {
          "A": "Market",
          "B": "School",
          "C": "Police station"
        },
        "answer": "B"
      },
      {
        "question": "Which place has trees, grass, and swings where children can play?",
        "options": {
          "A": "Bank",
          "B": "Park",
          "C": "Post office"
        },
        "answer": "B"
      },
      {
        "question": "Who helps to keep people safe in the neighbourhood?",
        "options": {
          "A": "Teacher",
          "B": "Shopkeeper",
          "C": "Police officer"
        },
        "answer": "C"
      },
      {
        "question": "Which place is usually busy with many shops and people buying things?",
        "options": {
          "A": "Market",
          "B": "Hospital",
          "C": "Police station"
        },
        "answer": "A"
      },
      {
        "question": "Where do people go to enjoy fresh air and relax?",
        "options": {
          "A": "Bank",
          "B": "School",
          "C": "Park"
        },
        "answer": "C"
      },
      {
        "question": "Who brings letters and parcels to our homes?",
        "options": {
          "A": "Doctor",
          "B": "Postman",
          "C": "Teacher"
        },
        "answer": "B"
      },
      {
        "question": "Where does a police officer work?",
        "options": {
          "A": "Police station",
          "B": "Park",
          "C": "Market"
        },
        "answer": "A"
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
        "options": {
          "A": "jungle",
          "B": "neighbourhood",
          "C": "island"
        },
        "answer": "B"
      },
      {
        "question": "Fruits and vegetables are sold in the ______.",
        "options": {
          "A": "market",
          "B": "school",
          "C": "hospital"
        },
        "answer": "A"
      },
      {
        "question": "Children go to ______ to study and learn new things.",
        "options": {
          "A": "school",
          "B": "park",
          "C": "bank"
        },
        "answer": "A"
      },
      {
        "question": "A ______ brings letters and parcels to our homes.",
        "options": {
          "A": "teacher",
          "B": "doctor",
          "C": "postman"
        },
        "answer": "C"
      },
      {
        "question": "Letters and greeting cards are sent from the ______ office.",
        "options": {
          "A": "police",
          "B": "post",
          "C": "bank"
        },
        "answer": "B"
      },
      {
        "question": "People walk, play, and relax in a ______.",
        "options": {
          "A": "bank",
          "B": "hospital",
          "C": "park"
        },
        "answer": "C"
      },
      {
        "question": "A ______ officer helps to keep people safe.",
        "options": {
          "A": "post",
          "B": "police",
          "C": "market"
        },
        "answer": "B"
      },
      {
        "question": "Many shops together make a ______.",
        "options": {
          "A": "park",
          "B": "market",
          "C": "hospital"
        },
        "answer": "B"
      },
      {
        "question": "A ______ station is where police officers work.",
        "options": {
          "A": "police",
          "B": "post",
          "C": "bus"
        },
        "answer": "A"
      },
      {
        "question": "The ______ is the place where children read books and learn lessons.",
        "options": {
          "A": "school",
          "B": "market",
          "C": "park"
        },
        "answer": "A"
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
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A park is a place where people can play and relax.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A market is a place where people buy and sell things.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A postman delivers letters to homes.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Schools are places where children learn new things.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Police officers help keep the neighbourhood safe.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A park is usually full of trees and grass.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A market is a quiet place with no shops.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "A post office helps people send letters and parcels.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A neighbourhood has many helpful places for people.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      }
    ]
  };
}

export var activityData;
