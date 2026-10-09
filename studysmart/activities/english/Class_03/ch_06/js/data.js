export const chapter = "Chapter - 6: The Swing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who wrote the poem “The Swing”?",
        "optionA": "Rabindranath Tagore",
        "optionB": "Robert Louis Stevenson",
        "correctAnswer": "Robert Louis Stevenson",
        "optionC": "William Wordsworth"
      },
      {
        "question": "What do children love the most according to the chapter?",
        "optionA": "Books",
        "optionB": "Swing",
        "correctAnswer": "Swing",
        "optionC": "Games"
      },
      {
        "question": "Where can a swing be found?",
        "optionA": "Market",
        "optionB": "School",
        "optionC": "Park",
        "correctAnswer": "Park"
      },
      {
        "question": "What colour is the air described in the poem?",
        "optionA": "Blue",
        "correctAnswer": "Blue",
        "optionB": "Green",
        "optionC": "Brown"
      },
      {
        "question": "What does the child see while swinging?",
        "optionA": "Rivers, trees and cattle",
        "correctAnswer": "Rivers, trees and cattle",
        "optionB": "Cars",
        "optionC": "Buildings"
      },
      {
        "question": "What is described as the pleasantest thing for a child?",
        "optionA": "Swinging in the air",
        "correctAnswer": "Swinging in the air",
        "optionB": "Reading",
        "optionC": "Sleeping"
      },
      {
        "question": "What colour is the garden in the poem?",
        "optionA": "Red",
        "optionB": "Green",
        "correctAnswer": "Green",
        "optionC": "Yellow"
      },
      {
        "question": "What colour is the roof mentioned in the poem?",
        "optionA": "Blue",
        "optionB": "Brown",
        "correctAnswer": "Brown",
        "optionC": "Black"
      },
      {
        "question": "What happens when the swing goes up?",
        "optionA": "The child falls",
        "optionB": "The child stops",
        "optionC": "The child goes high in the air",
        "correctAnswer": "The child goes high in the air"
      },
      {
        "question": "What do women do during the festival of Teej?",
        "optionA": "Dance",
        "optionB": "Swing and sing songs",
        "correctAnswer": "Swing and sing songs",
        "optionC": "Cook food"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The swing goes up in the ______.",
        "optionA": "water",
        "optionB": "air",
        "correctAnswer": "air",
        "optionC": "ground"
      },
      {
        "question": "The child can see over the ______ while swinging.",
        "optionA": "wall",
        "correctAnswer": "wall",
        "optionB": "road",
        "optionC": "river"
      },
      {
        "question": "The swing moves up and ______.",
        "optionA": "down",
        "correctAnswer": "down",
        "optionB": "left",
        "optionC": "right"
      },
      {
        "question": "The child sees the ______ from the swing.",
        "optionA": "market",
        "optionB": "classroom",
        "optionC": "countryside",
        "correctAnswer": "countryside"
      },
      {
        "question": "The child goes ______ in the air.",
        "optionA": "walking",
        "optionB": "flying",
        "correctAnswer": "flying",
        "optionC": "running"
      },
      {
        "question": "The garden looks ______ from above.",
        "optionA": "red",
        "optionB": "green",
        "correctAnswer": "green",
        "optionC": "black"
      },
      {
        "question": "The roof looks ______ from the swing.",
        "optionA": "white",
        "optionB": "blue",
        "optionC": "brown",
        "correctAnswer": "brown"
      },
      {
        "question": "The swing helps the child see far and ______.",
        "optionA": "small",
        "optionB": "wide",
        "correctAnswer": "wide",
        "optionC": "narrow"
      },
      {
        "question": "Children love ______ the most.",
        "optionA": "playthings",
        "correctAnswer": "playthings",
        "optionB": "homework",
        "optionC": "books"
      },
      {
        "question": "The swing is a ______ device.",
        "optionA": "mechanical",
        "correctAnswer": "mechanical",
        "optionB": "electric",
        "optionC": "digital"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The poem is about a swing.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child feels unhappy while swinging.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The swing can be found in parks.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The child sees rivers and trees from the swing.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The garden is described as brown.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The roof is described as green.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The swing moves up and down.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Countryside means a rural region.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Women swing and sing during Teej.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The swing stays still all the time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
