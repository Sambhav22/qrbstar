export const chapter = "Chapter - 8: Energy at Work";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What is energy mainly used for?",
        "optionA": "Sleeping",
        "optionB": "Playing only",
        "optionC": "Doing work",
        "correctAnswer": "Doing work"
      },
      {
        "question": "Which example shows movement energy?",
        "optionA": "Balloon rocket moving across the room",
        "optionB": "Book lying on table",
        "optionC": "Pencil in box",
        "correctAnswer": "Balloon rocket moving across the room"
      },
      {
        "question": "How does a rubber band produce sound?",
        "optionA": "By breaking",
        "optionB": "By vibrating",
        "optionC": "By heating",
        "correctAnswer": "By vibrating"
      },
      {
        "question": "What do solar panels use to produce electricity?",
        "optionA": "Sunlight",
        "optionB": "Wind",
        "optionC": "Water",
        "correctAnswer": "Sunlight"
      },
      {
        "question": "Which fuel is commonly used in vehicles?",
        "optionA": "LPG",
        "optionB": "Petrol/Diesel",
        "optionC": "Wood",
        "correctAnswer": "Petrol/Diesel"
      },
      {
        "question": "What can electricity produce?",
        "optionA": "Light and heat",
        "optionB": "Sound and movement",
        "optionC": "All of these",
        "correctAnswer": "All of these"
      },
      {
        "question": "Which of these is a clean source of energy?",
        "optionA": "Wind",
        "optionB": "Coal",
        "optionC": "Diesel",
        "correctAnswer": "Wind"
      },
      {
        "question": "How do water wheels generate energy?",
        "optionA": "By heat",
        "optionB": "By flowing water",
        "optionC": "By air",
        "correctAnswer": "By flowing water"
      },
      {
        "question": "Which activity uses heat energy?",
        "optionA": "Cooking food",
        "optionB": "Reading book",
        "optionC": "Writing",
        "correctAnswer": "Cooking food"
      },
      {
        "question": "What should we do to save energy?",
        "optionA": "Keep lights on",
        "optionB": "Use more electricity",
        "optionC": "Turn off unused appliances",
        "correctAnswer": "Turn off unused appliances"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Energy helps things ________.",
        "optionA": "stop",
        "optionB": "move",
        "optionC": "sleep",
        "correctAnswer": "move"
      },
      {
        "question": "A balloon rocket moves because of ________.",
        "optionA": "water",
        "optionB": "air rushing out",
        "optionC": "fire",
        "correctAnswer": "air rushing out"
      },
      {
        "question": "Plants use ________ to grow and store energy.",
        "optionA": "air only",
        "optionB": "soil only",
        "optionC": "sunlight",
        "correctAnswer": "sunlight"
      },
      {
        "question": "Fuel gives ________ and light energy when it burns.",
        "optionA": "heat",
        "optionB": "sound",
        "optionC": "motion",
        "correctAnswer": "heat"
      },
      {
        "question": "Electricity is used to run ________.",
        "optionA": "machines",
        "optionB": "plants",
        "optionC": "books",
        "correctAnswer": "machines"
      },
      {
        "question": "Windmills work when the ________ blows.",
        "optionA": "sun",
        "optionB": "water",
        "optionC": "wind",
        "correctAnswer": "wind"
      },
      {
        "question": "Water energy comes from ________ rivers.",
        "optionA": "still",
        "optionB": "flowing",
        "optionC": "dry",
        "correctAnswer": "flowing"
      },
      {
        "question": "Food provides ________ energy to our body.",
        "optionA": "chemical",
        "optionB": "sound",
        "optionC": "light",
        "correctAnswer": "chemical"
      },
      {
        "question": "Clean energy keeps the air ________.",
        "optionA": "fresh",
        "optionB": "dirty",
        "optionC": "hot",
        "correctAnswer": "fresh"
      },
      {
        "question": "Saving energy helps protect our ________.",
        "optionA": "toys",
        "optionB": "planet",
        "optionC": "clothes",
        "correctAnswer": "planet"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Energy helps things move and work.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Fuel is a material that burns to give energy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Electricity is not used in industries.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Solar panels use sunlight to produce energy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Windmills use wind energy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Energy can change from one form to another.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Food is not a source of energy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Burning fuel can produce heat energy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Saving energy is not important for the future.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Clean energy does not pollute the air.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
