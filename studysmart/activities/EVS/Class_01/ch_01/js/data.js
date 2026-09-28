export const chapter = "Chapter - 1: About Me";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which sentence is used to introduce yourself by telling your name?",
        "optionA": "My favourite food is ______",
        "optionB": "My name is ______",
        "optionC": "My address is ______",
        "correctAnswer": "My name is ______"
      },
      {
        "question": "Which sentence tells how old you are?",
        "optionA": "I am ______ years old",
        "optionB": "My favourite colour is ______",
        "optionC": "My address is ______",
        "correctAnswer": "I am ______ years old"
      },
      {
        "question": "Which sentence tells the class you study in?",
        "optionA": "My favourite game is ______",
        "optionB": "I am a student of Class ______",
        "optionC": "My favourite food is ______",
        "correctAnswer": "I am a student of Class ______"
      },
      {
        "question": "Which sentence tells the colour you like most?",
        "optionA": "My favourite food is ______",
        "optionB": "I am ______ years old",
        "optionC": "My favourite colour is ______",
        "correctAnswer": "My favourite colour is ______"
      },
      {
        "question": "Which sentence tells the food you like most?",
        "optionA": "My favourite food is ______",
        "optionB": "I am a student of Class ______",
        "optionC": "My address is ______",
        "correctAnswer": "My favourite food is ______"
      },
      {
        "question": "Which sentence tells the game you enjoy with your friends?",
        "optionA": "My favourite colour is ______",
        "optionB": "I enjoy playing ______ with my friends",
        "optionC": "I am ______ years old",
        "correctAnswer": "I enjoy playing ______ with my friends"
      },
      {
        "question": "Which sentence tells your future dream?",
        "optionA": "When I grow up, I want to be a ______",
        "optionB": "My favourite colour is ______",
        "optionC": "My address is ______",
        "correctAnswer": "When I grow up, I want to be a ______"
      },
      {
        "question": "Which sentence tells the place where you live?",
        "optionA": "My favourite food is ______",
        "optionB": "My address is ______",
        "optionC": "I enjoy playing ______",
        "correctAnswer": "My address is ______"
      },
      {
        "question": "Which sentence tells something about yourself in the introduction page?",
        "optionA": "My name is ______",
        "optionB": "The sky is blue",
        "optionC": "The sun is hot",
        "correctAnswer": "My name is ______"
      },
      {
        "question": "Which sentence shows that you are introducing yourself?",
        "optionA": "I like flowers",
        "optionB": "The dog runs fast",
        "optionC": "I am ______ years old",
        "correctAnswer": "I am ______ years old"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "My ______ is written first when I introduce myself.",
        "optionA": "food",
        "optionB": "name",
        "optionC": "game",
        "correctAnswer": "name"
      },
      {
        "question": "I am ______ years old tells my age.",
        "optionA": "class",
        "optionB": "age",
        "optionC": "address",
        "correctAnswer": "age"
      },
      {
        "question": "I am a student of ______ tells where I study.",
        "optionA": "colour",
        "optionB": "food",
        "optionC": "class",
        "correctAnswer": "class"
      },
      {
        "question": "My favourite ______ tells the colour I like most.",
        "optionA": "game",
        "optionB": "food",
        "optionC": "colour",
        "correctAnswer": "colour"
      },
      {
        "question": "My favourite ______ tells the food I like most.",
        "optionA": "food",
        "optionB": "colour",
        "optionC": "address",
        "correctAnswer": "food"
      },
      {
        "question": "I enjoy playing ______ with my friends.",
        "optionA": "game",
        "optionB": "colour",
        "optionC": "address",
        "correctAnswer": "game"
      },
      {
        "question": "When I grow up, I want to be a ______.",
        "optionA": "colour",
        "optionB": "person I want to become",
        "optionC": "address",
        "correctAnswer": "person I want to become"
      },
      {
        "question": "My ______ tells the place where I live.",
        "optionA": "class",
        "optionB": "food",
        "optionC": "address",
        "correctAnswer": "address"
      },
      {
        "question": "I paste my ______ on the page.",
        "optionA": "game",
        "optionB": "photo",
        "optionC": "colour",
        "correctAnswer": "photo"
      },
      {
        "question": "My favourite ______ tells what I like to play.",
        "optionA": "food",
        "optionB": "game",
        "optionC": "address",
        "correctAnswer": "game"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "My name is written when I introduce myself.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "“I am ______ years old” tells about age.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "“My favourite colour is ______” tells the colour we like most.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "“My favourite food is ______” tells the food we like most.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "“I enjoy playing ______ with my friends” tells about a game.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "“My address is ______” tells where we live.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "“When I grow up, I want to be a ______” tells about a future dream.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Favourite colour tells the place where we live.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Address tells the food we like most.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A photo can be pasted on the introduction page.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
