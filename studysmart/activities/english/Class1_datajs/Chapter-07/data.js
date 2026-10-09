export const chapter = "Chapter - 7: ‘This’ and ‘That’";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which word is used for a thing near?",
        "optionA": "This",
        "correctAnswer": "This",
        "optionB": "That",
        "optionC": "Those"
      },
      {
        "question": "Which word is used for a thing far?",
        "optionA": "This",
        "optionB": "That",
        "correctAnswer": "That",
        "optionC": "These"
      },
      {
        "question": "What is near in the sentence “This is a boat and that is an aeroplane”?",
        "optionA": "Aeroplane",
        "optionB": "Sky",
        "optionC": "Boat",
        "correctAnswer": "Boat"
      },
      {
        "question": "What is far in the sentence “This is my doll and that is my book”?",
        "optionA": "Doll",
        "optionB": "Book",
        "correctAnswer": "Book",
        "optionC": "Bag"
      },
      {
        "question": "What is near in the sentence “This is my bat and that is your ball”?",
        "optionA": "Bat",
        "correctAnswer": "Bat",
        "optionB": "Ball",
        "optionC": "Ground"
      },
      {
        "question": "What is far in the sentence “This is a fox and that is a camel”?",
        "optionA": "Fox",
        "optionB": "Camel",
        "correctAnswer": "Camel",
        "optionC": "Dog"
      },
      {
        "question": "What is far in the sentence “This is a mug and that is a bucket”?",
        "optionA": "Bucket",
        "correctAnswer": "Bucket",
        "optionB": "Mug",
        "optionC": "Plate"
      },
      {
        "question": "What is near in the sentence “This butter is for that loaf”?",
        "optionA": "Loaf",
        "optionB": "Bread",
        "optionC": "Butter",
        "correctAnswer": "Butter"
      },
      {
        "question": "What is near in the sentence “This toy should go in that shelf”?",
        "optionA": "Shelf",
        "optionB": "Toy",
        "correctAnswer": "Toy",
        "optionC": "Box"
      },
      {
        "question": "What is far in the sentence “This dog is running after that mouse”?",
        "optionA": "Dog",
        "optionB": "Mouse",
        "correctAnswer": "Mouse",
        "optionC": "Cat"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "‘_____’ is used for a thing near.",
        "optionA": "That",
        "optionB": "This",
        "correctAnswer": "This",
        "optionC": "Those"
      },
      {
        "question": "‘_____’ is used for a thing far.",
        "optionA": "This",
        "optionB": "That",
        "correctAnswer": "That",
        "optionC": "These"
      },
      {
        "question": "This is the moon and _____ is a star.",
        "optionA": "that",
        "correctAnswer": "that",
        "optionB": "this",
        "optionC": "these"
      },
      {
        "question": "This is a fox and _____ is a camel.",
        "optionA": "this",
        "optionB": "that",
        "correctAnswer": "that",
        "optionC": "those"
      },
      {
        "question": "This butter is for _____ loaf.",
        "optionA": "this",
        "optionB": "these",
        "optionC": "that",
        "correctAnswer": "that"
      },
      {
        "question": "This toy should go in _____ shelf.",
        "optionA": "this",
        "optionB": "those",
        "optionC": "that",
        "correctAnswer": "that"
      },
      {
        "question": "This is my friend and _____ is your sister.",
        "optionA": "this",
        "optionB": "that",
        "correctAnswer": "that",
        "optionC": "these"
      },
      {
        "question": "This is a mug and _____ is a bucket.",
        "optionA": "that",
        "correctAnswer": "that",
        "optionB": "this",
        "optionC": "these"
      },
      {
        "question": "This dog is running after _____ mouse.",
        "optionA": "this",
        "optionB": "that",
        "correctAnswer": "that",
        "optionC": "these"
      },
      {
        "question": "These are carrots and _____ are radishes.",
        "optionA": "this",
        "optionB": "that",
        "optionC": "those",
        "correctAnswer": "those"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "‘This’ is used for a thing near.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘That’ is used for a thing far.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘This’ and ‘That’ are used for many things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "‘These’ and ‘Those’ are used for plural.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘This is a fox and that is a camel.’",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘This is the moon and that is a star.’",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘This butter is for that loaf.’",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘This toy should go in that shelf.’",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘This is my friend and that is your sister.’",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "‘This dog is running after that mouse.’",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
