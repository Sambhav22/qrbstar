export const chapter = "Chapter - 1: About Me";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which sentence is used to introduce yourself by telling your name?",
        "options": {
          "A": "My favourite food is ______",
          "B": "My name is ______",
          "C": "My address is ______"
        },
        "answer": "B"
      },
      {
        "question": "Which sentence tells how old you are?",
        "options": {
          "A": "I am ______ years old",
          "B": "My favourite colour is ______",
          "C": "My address is ______"
        },
        "answer": "A"
      },
      {
        "question": "Which sentence tells the class you study in?",
        "options": {
          "A": "My favourite game is ______",
          "B": "I am a student of Class ______",
          "C": "My favourite food is ______"
        },
        "answer": "B"
      },
      {
        "question": "Which sentence tells the colour you like most?",
        "options": {
          "A": "My favourite food is ______",
          "B": "I am ______ years old",
          "C": "My favourite colour is ______"
        },
        "answer": "C"
      },
      {
        "question": "Which sentence tells the food you like most?",
        "options": {
          "A": "My favourite food is ______",
          "B": "I am a student of Class ______",
          "C": "My address is ______"
        },
        "answer": "A"
      },
      {
        "question": "Which sentence tells the game you enjoy with your friends?",
        "options": {
          "A": "My favourite colour is ______",
          "B": "I enjoy playing ______ with my friends",
          "C": "I am ______ years old"
        },
        "answer": "B"
      },
      {
        "question": "Which sentence tells your future dream?",
        "options": {
          "A": "When I grow up, I want to be a ______",
          "B": "My favourite colour is ______",
          "C": "My address is ______"
        },
        "answer": "A"
      },
      {
        "question": "Which sentence tells the place where you live?",
        "options": {
          "A": "My favourite food is ______",
          "B": "My address is ______",
          "C": "I enjoy playing ______"
        },
        "answer": "B"
      },
      {
        "question": "Which sentence tells something about yourself in the introduction page?",
        "options": {
          "A": "My name is ______",
          "B": "The sky is blue",
          "C": "The sun is hot"
        },
        "answer": "A"
      },
      {
        "question": "Which sentence shows that you are introducing yourself?",
        "options": {
          "A": "I like flowers",
          "B": "The dog runs fast",
          "C": "I am ______ years old"
        },
        "answer": "C"
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
        "options": {
          "A": "food",
          "B": "name",
          "C": "game"
        },
        "answer": "B"
      },
      {
        "question": "I am ______ years old tells my age.",
        "options": {
          "A": "class",
          "B": "age",
          "C": "address"
        },
        "answer": "B"
      },
      {
        "question": "I am a student of ______ tells where I study.",
        "options": {
          "A": "colour",
          "B": "food",
          "C": "class"
        },
        "answer": "C"
      },
      {
        "question": "My favourite ______ tells the colour I like most.",
        "options": {
          "A": "game",
          "B": "food",
          "C": "colour"
        },
        "answer": "C"
      },
      {
        "question": "My favourite ______ tells the food I like most.",
        "options": {
          "A": "food",
          "B": "colour",
          "C": "address"
        },
        "answer": "A"
      },
      {
        "question": "I enjoy playing ______ with my friends.",
        "options": {
          "A": "game",
          "B": "colour",
          "C": "address"
        },
        "answer": "A"
      },
      {
        "question": "When I grow up, I want to be a ______.",
        "options": {
          "A": "colour",
          "B": "person I want to become",
          "C": "address"
        },
        "answer": "B"
      },
      {
        "question": "My ______ tells the place where I live.",
        "options": {
          "A": "class",
          "B": "food",
          "C": "address"
        },
        "answer": "C"
      },
      {
        "question": "I paste my ______ on the page.",
        "options": {
          "A": "game",
          "B": "photo",
          "C": "colour"
        },
        "answer": "B"
      },
      {
        "question": "My favourite ______ tells what I like to play.",
        "options": {
          "A": "food",
          "B": "game",
          "C": "address"
        },
        "answer": "B"
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
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "“I am ______ years old” tells about age.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "“My favourite colour is ______” tells the colour we like most.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "“My favourite food is ______” tells the food we like most.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "“I enjoy playing ______ with my friends” tells about a game.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "“My address is ______” tells where we live.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "“When I grow up, I want to be a ______” tells about a future dream.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Favourite colour tells the place where we live.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Address tells the food we like most.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "A photo can be pasted on the introduction page.",
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
