export const chapter = "Chapter - 3: Bones and Muscles";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which part of the body gives support and shape to our body?",
        "optionA": "Muscles",
        "optionB": "Skeleton",
        "correctAnswer": "Skeleton",
        "optionC": "Skin"
      },
      {
        "question": "Which bone safely holds the brain inside it?",
        "optionA": "Rib cage",
        "optionB": "Backbone",
        "optionC": "Skull",
        "correctAnswer": "Skull"
      },
      {
        "question": "Which part of the skeleton helps us bend, twist, and turn?",
        "optionA": "Rib cage",
        "optionB": "Backbone",
        "correctAnswer": "Backbone",
        "optionC": "Limbs"
      },
      {
        "question": "Which joint allows the arm to rotate freely?",
        "optionA": "Ball-and-socket joint",
        "correctAnswer": "Ball-and-socket joint",
        "optionB": "Pivot joint",
        "optionC": "Hinge joint"
      },
      {
        "question": "Which joint is found in the wrist and ankle?",
        "optionA": "Hinge joint",
        "optionB": "Gliding joint",
        "correctAnswer": "Gliding joint",
        "optionC": "Pivot joint"
      },
      {
        "question": "Which strong fibres connect bones at joints?",
        "optionA": "Tendons",
        "optionB": "Ligaments",
        "correctAnswer": "Ligaments",
        "optionC": "Muscles"
      },
      {
        "question": "Which bone is the longest and strongest in the body?",
        "optionA": "Femur",
        "correctAnswer": "Femur",
        "optionB": "Rib",
        "optionC": "Skull"
      },
      {
        "question": "Which muscles help us smile and run?",
        "optionA": "Smooth muscles",
        "optionB": "Cardiac muscles",
        "optionC": "Skeletal muscles",
        "correctAnswer": "Skeletal muscles"
      },
      {
        "question": "Which part of the skeleton protects the heart and lungs?",
        "optionA": "Skull",
        "optionB": "Rib cage",
        "correctAnswer": "Rib cage",
        "optionC": "Backbone"
      },
      {
        "question": "Which mineral stored in bones makes them strong?",
        "optionA": "Iron",
        "optionB": "Calcium",
        "correctAnswer": "Calcium",
        "optionC": "Salt"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Bones and muscles work together to help in ________.",
        "optionA": "movement",
        "correctAnswer": "movement",
        "optionB": "digestion",
        "optionC": "thinking"
      },
      {
        "question": "The skeleton acts like a strong ________ for the body.",
        "optionA": "cover",
        "optionB": "framework",
        "correctAnswer": "framework",
        "optionC": "skin"
      },
      {
        "question": "The backbone is made of small bones called ________.",
        "optionA": "ribs",
        "optionB": "vertebrae",
        "correctAnswer": "vertebrae",
        "optionC": "joints"
      },
      {
        "question": "The bottom two pairs of ribs are called ________ ribs.",
        "optionA": "hard",
        "optionB": "fixed",
        "optionC": "floating",
        "correctAnswer": "floating"
      },
      {
        "question": "Muscles are joined to bones by strong cords called ________.",
        "optionA": "ligaments",
        "optionB": "tendons",
        "correctAnswer": "tendons",
        "optionC": "joints"
      },
      {
        "question": "Joints are places where two ________ meet.",
        "optionA": "muscles",
        "optionB": "bones",
        "correctAnswer": "bones",
        "optionC": "nerves"
      },
      {
        "question": "The rib cage expands when we ________.",
        "optionA": "breathe",
        "correctAnswer": "breathe",
        "optionB": "eat",
        "optionC": "sleep"
      },
      {
        "question": "Discs between vertebrae act like ________.",
        "optionA": "cushions",
        "correctAnswer": "cushions",
        "optionB": "rods",
        "optionC": "hooks"
      },
      {
        "question": "Bones store minerals like ________.",
        "optionA": "sugar",
        "optionB": "oil",
        "optionC": "calcium",
        "correctAnswer": "calcium"
      },
      {
        "question": "The head turns because of the ________ joint.",
        "optionA": "hinge",
        "optionB": "pivot",
        "correctAnswer": "pivot",
        "optionC": "gliding"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Bones protect soft organs inside our body.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rib cage has 12 pairs of ribs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "All joints in our body allow movement.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ligaments help keep bones in place at joints.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Smooth muscles help in digestion.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The backbone is made of only one bone.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Muscles work by pulling bones.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The skull joints are movable joints.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Cardiac muscles work without resting.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Good posture helps keep bones and muscles healthy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
