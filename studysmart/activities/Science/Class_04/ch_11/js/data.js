export const chapter = "Chapter - 11: Force, Work and Energy";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What type of force helps you carry a school bag?",
        "optionA": "Frictional",
        "optionB": "Muscular",
        "correctAnswer": "Muscular",
        "optionC": "Magnetic"
      },
      {
        "question": "Which force pulls everything towards Earth?",
        "optionA": "Friction",
        "optionB": "Magnetic",
        "optionC": "Gravitational",
        "correctAnswer": "Gravitational"
      },
      {
        "question": "What force slows down a moving object?",
        "optionA": "Muscular",
        "optionB": "Gravitational",
        "optionC": "Frictional",
        "correctAnswer": "Frictional"
      },
      {
        "question": "Which force helps us play with a magnet?",
        "optionA": "Magnetic",
        "correctAnswer": "Magnetic",
        "optionB": "Heat",
        "optionC": "Friction"
      },
      {
        "question": "What is needed for work to happen?",
        "optionA": "Force only",
        "optionB": "Movement only",
        "optionC": "Force and movement",
        "correctAnswer": "Force and movement"
      },
      {
        "question": "Which machine is used to lift heavy objects?",
        "optionA": "Toy",
        "optionB": "Pulley",
        "correctAnswer": "Pulley",
        "optionC": "Bell"
      },
      {
        "question": "What type of energy helps us see at night?",
        "optionA": "Heat",
        "optionB": "Sound",
        "optionC": "Light",
        "correctAnswer": "Light"
      },
      {
        "question": "Which energy comes from the sun and warms our homes?",
        "optionA": "Wind",
        "optionB": "Electrical",
        "optionC": "Heat",
        "correctAnswer": "Heat"
      },
      {
        "question": "What type of energy do we use to run a fan?",
        "optionA": "Muscular",
        "optionB": "Electrical",
        "correctAnswer": "Electrical",
        "optionC": "Friction"
      },
      {
        "question": "Which of these is an example of sound energy?",
        "optionA": "Ringing bell",
        "correctAnswer": "Ringing bell",
        "optionB": "Light bulb",
        "optionC": "Falling pencil"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Force is a push or ______.",
        "optionA": "jump",
        "optionB": "pull",
        "correctAnswer": "pull",
        "optionC": "run"
      },
      {
        "question": "______ force helps us lift a bucket.",
        "optionA": "Magnetic",
        "optionB": "Gravitational",
        "optionC": "Muscular",
        "correctAnswer": "Muscular"
      },
      {
        "question": "A pencil falls due to ______.",
        "optionA": "light",
        "optionB": "gravity",
        "correctAnswer": "gravity",
        "optionC": "sound"
      },
      {
        "question": "Friction helps us to ______ slippery floors.",
        "optionA": "slide",
        "optionB": "jump",
        "optionC": "avoid",
        "correctAnswer": "avoid"
      },
      {
        "question": "Magnetic force is used in ______ magnets.",
        "optionA": "box",
        "optionB": "fridge",
        "correctAnswer": "fridge",
        "optionC": "table"
      },
      {
        "question": "Force with movement is called ______.",
        "optionA": "energy",
        "optionB": "work",
        "correctAnswer": "work",
        "optionC": "magnet"
      },
      {
        "question": "A pulley helps in lifting ______ things.",
        "optionA": "small",
        "optionB": "light",
        "optionC": "heavy",
        "correctAnswer": "heavy"
      },
      {
        "question": "______ energy helps us dry clothes.",
        "optionA": "Sound",
        "optionB": "Heat",
        "correctAnswer": "Heat",
        "optionC": "Magnetic"
      },
      {
        "question": "We get light energy from the ______.",
        "optionA": "moon",
        "optionB": "star",
        "optionC": "sun",
        "correctAnswer": "sun"
      },
      {
        "question": "Sound energy comes from ______.",
        "optionA": "lights",
        "optionB": "vibrations",
        "correctAnswer": "vibrations",
        "optionC": "water"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Muscular force comes from our muscles.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Gravitational force pushes things away from the Earth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Friction makes things move faster.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Magnetic force only pulls objects, it cannot push.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "If you push a wall and it doesn’t move, it is called work.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Simple machines make work easier.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Energy helps us do work and move.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Heat energy can be used to cook food.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Light energy comes only from fire.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Electrical energy is not used in computers.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
