export const chapter = "Chapter - 2: My Friends";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do friends share with each other?",
        "options": {
          "A": "Secrets",
          "B": "Stones",
          "C": "Shoes"
        },
        "answer": "A"
      },
      {
        "question": "Who were sharing colours at the art table in the story?",
        "options": {
          "A": "Aarav and Meena",
          "B": "Riya and Rahul",
          "C": "Aman and Rohan"
        },
        "answer": "A"
      },
      {
        "question": "What do friends help with?",
        "options": {
          "A": "Sleeping",
          "B": "Homework",
          "C": "Hiding"
        },
        "answer": "B"
      },
      {
        "question": "What do friends do when we feel sad?",
        "options": {
          "A": "Ignore us",
          "B": "Laugh at us",
          "C": "Cheer us up"
        },
        "answer": "C"
      },
      {
        "question": "What do we run and jump while doing with friends?",
        "options": {
          "A": "Playing games",
          "B": "Reading books",
          "C": "Writing homework"
        },
        "answer": "A"
      },
      {
        "question": "What do children sometimes act out after reading?",
        "options": {
          "A": "Stories",
          "B": "Songs",
          "C": "Poems"
        },
        "answer": "A"
      },
      {
        "question": "What do we draw with friends?",
        "options": {
          "A": "Shoes and bags",
          "B": "Animals and houses",
          "C": "Chairs and tables"
        },
        "answer": "B"
      },
      {
        "question": "What do we mix while painting together?",
        "options": {
          "A": "Sand",
          "B": "Water",
          "C": "Colours"
        },
        "answer": "C"
      },
      {
        "question": "What can new friends become later?",
        "options": {
          "A": "Class monitors",
          "B": "Best friends",
          "C": "Teachers"
        },
        "answer": "B"
      },
      {
        "question": "What do friends make every activity?",
        "options": {
          "A": "More fun",
          "B": "More difficult",
          "C": "More boring"
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
        "question": "Friends make us ______ and feel good.",
        "options": {
          "A": "cry",
          "B": "smile",
          "C": "sleep"
        },
        "answer": "B"
      },
      {
        "question": "Friends help us with our ______.",
        "options": {
          "A": "homework",
          "B": "games",
          "C": "lunch"
        },
        "answer": "A"
      },
      {
        "question": "We run and jump while ______ with friends.",
        "options": {
          "A": "playing",
          "B": "reading",
          "C": "drawing"
        },
        "answer": "A"
      },
      {
        "question": "We read storybooks, comics and ______ together.",
        "options": {
          "A": "charts",
          "B": "maps",
          "C": "rhymes"
        },
        "answer": "C"
      },
      {
        "question": "Drawing with friends is ______ and exciting.",
        "options": {
          "A": "slow",
          "B": "boring",
          "C": "creative"
        },
        "answer": "C"
      },
      {
        "question": "We mix colours while ______.",
        "options": {
          "A": "running",
          "B": "painting",
          "C": "writing"
        },
        "answer": "B"
      },
      {
        "question": "We say ______ to make new friends.",
        "options": {
          "A": "hello",
          "B": "goodbye",
          "C": "thank you"
        },
        "answer": "A"
      },
      {
        "question": "Sharing toys helps us make ______ friends.",
        "options": {
          "A": "new",
          "B": "angry",
          "C": "old"
        },
        "answer": "A"
      },
      {
        "question": "Teamwork means working in a ______.",
        "options": {
          "A": "class",
          "B": "room",
          "C": "group"
        },
        "answer": "C"
      },
      {
        "question": "Teamwork makes us feel proud and ______.",
        "options": {
          "A": "weak",
          "B": "strong",
          "C": "tired"
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
        "question": "Friends play and learn together.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Friends share toys and snacks.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Reading with friends helps us learn new things.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Drawing with friends can give us new ideas.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Painting together lets us use our imagination.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Friends always make our lives boring.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Friends help each other while working in a team.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "We can make new friends by smiling and talking.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Teamwork means working alone.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Friends make our lives happier.",
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
